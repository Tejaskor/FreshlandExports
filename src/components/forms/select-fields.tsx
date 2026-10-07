"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent, RefObject } from "react";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

/**
 * Custom dropdowns shared by the site's forms (brochure and contact), in
 * place of native <select>s, whose popups the browser positions itself.
 * Each takes the host form's field styling, so it matches the inputs around it.
 */

export type OptionGroup = { category: string; products: readonly string[] };

/**
 * Tallest an options list gets; the least room below a field (inside the
 * modal) before its list opens above instead; the gap to the field.
 */
const LIST_MAX = 240;
const LIST_MIN = 120;
const LIST_GAP = 6;

/** The nearest scrolling ancestor — the modal's content area. */
function scrollParent(element: HTMLElement) {
  for (let node = element.parentElement; node; node = node.parentElement) {
    if (/(auto|scroll)/.test(getComputedStyle(node).overflowY)) return node;
  }
  return null;
}

/**
 * Positioning shared by every dropdown in the form. Pins a manual popover
 * list to its field: shown while `open`, matched to the field's width and
 * left edge, and kept attached while the modal content scrolls or the window
 * resizes. If the field scrolls out of view the list closes (`onLost`).
 *
 * Lists always stay inside the modal's visible content area. On opening, the
 * content scrolls just enough (where it can) to fit the list below the field;
 * the list then opens below, limited to the room left inside the modal, or
 * above the field when there is too little room below — never past the
 * modal's edges.
 *
 * The list lives in the browser's top layer, so it overlays the form without
 * taking space in it — the modal never changes size — and the modal's
 * scrolling content area can't clip it.
 */
function useAnchoredList(
  open: boolean,
  triggerRef: RefObject<HTMLElement | null>,
  listRef: RefObject<HTMLElement | null>,
  onLost: () => void,
) {
  const lostRef = useRef(onLost);
  useEffect(() => {
    lostRef.current = onLost;
  });

  useEffect(() => {
    const list = listRef.current;
    const trigger = triggerRef.current;
    if (!open || !list || !trigger) return;
    const container = scrollParent(trigger);

    const visibleArea = () => {
      const area = container?.getBoundingClientRect();
      return {
        top: Math.max(0, area?.top ?? 0),
        bottom: Math.min(window.innerHeight, area?.bottom ?? window.innerHeight),
      };
    };

    const place = () => {
      const rect = trigger.getBoundingClientRect();
      const area = visibleArea();
      if (rect.bottom <= area.top || rect.top >= area.bottom) return lostRef.current();

      const below = area.bottom - rect.bottom - LIST_GAP * 2;
      const above = rect.top - area.top - LIST_GAP * 2;
      const needed = Math.min(LIST_MAX, list.scrollHeight);
      const up = below < Math.min(needed, LIST_MIN) && above > below;
      list.style.left = `${rect.left}px`;
      list.style.width = `${rect.width}px`;
      list.style.maxHeight = `${Math.min(LIST_MAX, up ? above : below)}px`;
      list.style.top = up ? "auto" : `${rect.bottom + LIST_GAP}px`;
      list.style.bottom = up ? `${window.innerHeight - rect.top + LIST_GAP}px` : "auto";
    };

    // Make room below the field inside the modal, by scrolling its content
    // up — never more than the field's own distance from the top.
    const makeRoom = () => {
      if (!container) return;
      const rect = trigger.getBoundingClientRect();
      const area = visibleArea();
      const needed = Math.min(LIST_MAX, list.scrollHeight) + LIST_GAP * 2;
      const shortBy = needed - (area.bottom - rect.bottom);
      const canMove = Math.min(
        container.scrollHeight - container.clientHeight - container.scrollTop,
        rect.top - area.top - LIST_GAP,
      );
      if (shortBy > 0 && canMove > 0) container.scrollTop += Math.min(shortBy, canMove);
    };

    if (typeof list.showPopover === "function" && !list.matches(":popover-open")) list.showPopover();
    makeRoom();
    place();

    let frame = 0;
    const schedule = (event: Event) => {
      // The list's own scrolling never moves the field.
      if (event.target === list) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(place);
    };
    window.addEventListener("resize", schedule);
    document.addEventListener("scroll", schedule, true);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("scroll", schedule, true);
      if (typeof list.hidePopover === "function" && list.matches(":popover-open")) list.hidePopover();
    };
  }, [open, triggerRef, listRef]);
}

/** Popover list surface shared by the custom dropdowns. */
const listSurface =
  // Reset the popover defaults (centred, inset 0); useAnchoredList sets the
  // position, width and max height from the field.
  "fixed inset-auto m-0 max-h-60 touch-pan-y overflow-x-hidden overflow-y-auto overscroll-contain rounded-lg border border-line bg-white p-2 text-left shadow-[var(--shadow-panel)]";

/**
 * Single-select listbox used for Country / Market, Buyer Type and Expected
 * Purchase Quantity in place of native <select>s, whose popups the browser
 * positions itself — upwards over the form, or off to the side of the modal.
 * The list stays attached to its field (see useAnchoredList). A hidden input
 * carries the value, so the form submits exactly as before.
 *
 * Keyboard: Enter, Space or the arrow keys open it; arrows, Home/End and
 * typing a letter move through the countries; Enter or Space chooses;
 * Escape or Tab closes it, and focus returns to the field.
 */
export function ListSelect({
  id,
  name,
  options,
  placeholder,
  fieldClassName,
  defaultValue = "",
  invalid,
  describedBy,
  onChange,
}: {
  /** The trigger's id; a label for it must carry the id `${id}-label`. */
  id: string;
  name: string;
  options: readonly string[];
  placeholder: string;
  /** The host form's input styling, so the trigger matches its other fields. */
  fieldClassName: string;
  defaultValue?: string;
  invalid: boolean;
  describedBy?: string;
  onChange: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(options.includes(defaultValue) ? defaultValue : "");
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listId = `${id}-listbox`;
  const optionId = (index: number) => `${id}-option-${index}`;

  useAnchoredList(open, triggerRef, listRef, () => setOpen(false));

  const openList = (index = Math.max(0, options.indexOf(value))) => {
    setActive(index);
    setOpen(true);
  };

  const close = (refocus = true) => {
    setOpen(false);
    if (refocus) triggerRef.current?.focus();
  };

  const choose = (index: number) => {
    setValue(options[index]);
    onChange();
    close();
  };

  // Focus the list once it is shown, and keep the active option in view.
  useEffect(() => {
    if (!open) return;
    listRef.current?.focus({ preventScroll: true });
  }, [open]);

  useEffect(() => {
    if (!open) return;
    document.getElementById(optionId(active))?.scrollIntoView({ block: "nearest" });
    // optionId is derived from id, which never changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, active]);

  // Close on a click outside.
  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open]);

  const onTriggerKey = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (["Enter", " ", "ArrowDown", "ArrowUp"].includes(event.key)) {
      event.preventDefault();
      openList();
    }
  };

  const onListKey = (event: ReactKeyboardEvent<HTMLUListElement>) => {
    const last = options.length - 1;
    const move = (index: number) => {
      event.preventDefault();
      setActive(Math.min(last, Math.max(0, index)));
    };

    switch (event.key) {
      case "ArrowDown":
        return move(active + 1);
      case "ArrowUp":
        return move(active - 1);
      case "Home":
        return move(0);
      case "End":
        return move(last);
      case "PageDown":
        return move(active + 5);
      case "PageUp":
        return move(active - 5);
      case "Enter":
      case " ":
        event.preventDefault();
        return choose(active);
      case "Escape":
        // Close only the list: preventDefault stops the native <dialog>
        // from treating this Escape as a request to close the whole modal.
        event.preventDefault();
        event.stopPropagation();
        return close();
      case "Tab":
        return close(false);
      default:
        // Type-ahead: jump to the next country starting with that letter.
        if (event.key.length === 1 && /\S/.test(event.key)) {
          const letter = event.key.toLowerCase();
          const order = [...options.slice(active + 1), ...options.slice(0, active + 1)];
          const match = order.find((option) => option.toLowerCase().startsWith(letter));
          if (match) move(options.indexOf(match));
        }
    }
  };

  return (
    <div ref={rootRef}>
      <input type="hidden" name={name} value={value} />
      <button
        ref={triggerRef}
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        // Buttons can't carry aria-invalid; the error is announced through
        // aria-describedby, and data-invalid drives the style and focus.
        data-invalid={invalid || undefined}
        aria-describedby={describedBy}
        onClick={() => (open ? close() : openList())}
        onKeyDown={onTriggerKey}
        className={cn(
          fieldClassName,
          "flex cursor-pointer items-center justify-between gap-3 text-left",
          "data-invalid:border-rust-deep/70 data-invalid:focus:border-rust-deep",
        )}
      >
        <span className={cn("truncate", !value && "text-ink-faint")}>{value || placeholder}</span>
        <Icon
          name="chevron-down"
          className={cn("size-4 shrink-0 text-ink-muted transition-transform duration-300", open && "rotate-180")}
        />
      </button>

      <ul
        ref={listRef}
        id={listId}
        popover="manual"
        role="listbox"
        tabIndex={-1}
        aria-labelledby={`${id}-label`}
        aria-activedescendant={open ? optionId(active) : undefined}
        data-lenis-prevent
        onKeyDown={onListKey}
        className={cn(listSurface, "focus:outline-none", !open && "hidden")}
      >
        {options.map((option, index) => (
          <li
            key={option}
            id={optionId(index)}
            role="option"
            aria-selected={option === value}
            onPointerMove={() => setActive(index)}
            onClick={() => choose(index)}
            className={cn(
              "flex cursor-pointer items-center justify-between gap-2 rounded-md px-2 py-1.5 text-[0.8125rem] text-ink",
              index === active && "bg-sage-50",
              option === value && "font-semibold text-forest",
            )}
          >
            {option}
            {option === value && <Icon name="check" className="size-3.5 shrink-0 text-forest" strokeWidth={2.4} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Multi-select dropdown (e.g. "Products of Interest"), styled like the host
 * form's other fields. The options list is a manual popover pinned under the
 * field (see useAnchoredList), so opening it never changes the form's size.
 * The checkboxes stay in the form while the list is closed, so every
 * selection is submitted.
 */
export function MultiSelect({
  id,
  name,
  label,
  groups,
  placeholder,
  fieldClassName,
  defaultValue = [],
  invalid,
  describedBy,
  onChange,
}: {
  id: string;
  name: string;
  /** Accessible name of the options list. */
  label: string;
  /** Each group's heading is itself an option, followed by its items. */
  groups: readonly OptionGroup[];
  placeholder: string;
  /** The host form's input styling, so the trigger matches its other fields. */
  fieldClassName: string;
  defaultValue?: readonly string[];
  invalid: boolean;
  describedBy?: string;
  onChange: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([...defaultValue]);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const panelId = `${id}-options`;

  useAnchoredList(open, triggerRef, listRef, () => setOpen(false));

  // Close on a click outside or on Escape (which then returns focus).
  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      // Close only the dropdown: preventDefault stops the native <dialog>
      // from treating this Escape as a request to close the whole modal.
      event.preventDefault();
      event.stopPropagation();
      setOpen(false);
      rootRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    };
    document.addEventListener("pointerdown", onPointer);
    rootRef.current?.addEventListener("keydown", onKey);
    const root = rootRef.current;
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      root?.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const toggle = (value: string, checked: boolean) => {
    setSelected((current) => (checked ? [...current, value] : current.filter((item) => item !== value)));
    onChange();
  };

  return (
    <div ref={rootRef}>
      <button
        ref={triggerRef}
        type="button"
        id={id}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={panelId}
        // Buttons can't carry aria-invalid; the error is announced through
        // aria-describedby, and data-invalid drives the style and focus.
        data-invalid={invalid || undefined}
        aria-describedby={describedBy}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          fieldClassName,
          "flex cursor-pointer items-center justify-between gap-3 text-left",
          "data-invalid:border-rust-deep/70 data-invalid:focus:border-rust-deep",
        )}
      >
        <span className={cn("truncate", selected.length === 0 && "text-ink-faint")}>
          {selected.length === 0 ? placeholder : selected.join(", ")}
        </span>
        <Icon
          name="chevron-down"
          className={cn("size-4 shrink-0 text-ink-muted transition-transform duration-300", open && "rotate-180")}
        />
      </button>

      {/* The list scrolls on its own. Lenis is stopped while the modal is
          open and cancels every wheel event it sees, so data-lenis-prevent
          hands this list back to native scrolling; overscroll-contain keeps
          the scroll from chaining to the modal at either end. */}
      <div
        ref={listRef}
        id={panelId}
        popover="manual"
        role="group"
        aria-label={label}
        data-lenis-prevent
        className={cn(listSurface, !open && "hidden")}
      >
        {groups.map((group) => (
          <div key={group.category} className="py-1 first:pt-0 last:pb-0">
            <CheckOption
              name={name}
              value={group.category}
              strong
              checked={selected.includes(group.category)}
              onToggle={toggle}
            />
            <div className="pl-5">
              {group.products.map((product) => (
                <CheckOption
                  key={product}
                  name={name}
                  value={product}
                  checked={selected.includes(product)}
                  onToggle={toggle}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CheckOption({
  name,
  value,
  strong = false,
  checked,
  onToggle,
}: {
  name: string;
  value: string;
  strong?: boolean;
  checked: boolean;
  onToggle: (value: string, checked: boolean) => void;
}) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 text-[0.8125rem] transition-colors duration-200 hover:bg-sage-50 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-leaf/40",
        strong ? "font-semibold text-forest" : "text-ink",
      )}
    >
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={(event) => onToggle(value, event.target.checked)}
        className="size-4 shrink-0 cursor-pointer accent-[var(--color-forest)]"
      />
      {value}
    </label>
  );
}

