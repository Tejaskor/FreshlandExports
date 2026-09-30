"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { Icon } from "@/components/ui/icon";
import {
  productMenu,
  type ProductMenuGroup,
  type ProductMenuGroupId,
  type ProductMenuItem,
} from "@/features/products/export-catalogue";
import { cn } from "@/lib/utils";

const reveal = "visible pointer-events-auto translate-y-0 opacity-100";
const hoverReveal = [
  "group-hover/menu:visible group-hover/menu:pointer-events-auto group-hover/menu:translate-y-0 group-hover/menu:opacity-100",
  "group-focus-within/menu:visible group-focus-within/menu:pointer-events-auto group-focus-within/menu:translate-y-0 group-focus-within/menu:opacity-100",
].join(" ");

/**
 * Menu underline: a soft 1.5px sage-green (#8BAF91) line drawn as a background on the
 * label text, so it never shifts the layout. It grows in on hover and
 * keyboard focus of the row, and stays on while the item is active.
 * `box-decoration-clone` keeps it under every line of a wrapped label.
 */
const underlineBase =
  "box-decoration-clone bg-[linear-gradient(#8baf91,#8baf91)] bg-no-repeat " +
  "bg-[position:0_100%] pb-0.5 transition-[background-size] duration-300 ease-[var(--ease-out-expo)]";

export const menuUnderline = {
  /** Product rows (`group/item`). */
  item: (active: boolean) =>
    cn(
      underlineBase,
      active
        ? "bg-[length:100%_1.5px]"
        : "bg-[length:0%_1.5px] group-hover/item:bg-[length:100%_1.5px] group-focus-visible/item:bg-[length:100%_1.5px]",
    ),
  /** Category rows (`group/cat`). */
  category: (active: boolean) =>
    cn(
      underlineBase,
      active
        ? "bg-[length:100%_1.5px]"
        : "bg-[length:0%_1.5px] group-hover/cat:bg-[length:100%_1.5px] group-focus-visible/cat:bg-[length:100%_1.5px]",
    ),
};

/**
 * Product thumbnail for the menus: the photograph when one exists, otherwise
 * a clean leaf placeholder in the same frame. Shared by the desktop dropdown
 * and the mobile menu.
 */
export function ProductThumb({
  image,
  sizeClassName,
  sizes,
  zoom = false,
}: {
  image: string | null;
  sizeClassName: string;
  sizes: string;
  zoom?: boolean;
}) {
  return (
    <span
      className={cn(
        "relative shrink-0 overflow-hidden rounded-lg border border-line bg-section",
        sizeClassName,
      )}
    >
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          sizes={sizes}
          className={cn(
            "object-cover",
            zoom && "transition-transform duration-300 group-hover/item:scale-110",
          )}
        />
      ) : (
        <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center text-leaf/60">
          <Icon name="sprout" className="size-1/2" />
        </span>
      )}
    </span>
  );
}

/** One product in the right panel: photograph and name. It links straight
    to its page, so it carries no arrow — arrows mark categories only. */
function ProductRow({
  item,
  active,
  onDismiss,
}: {
  item: ProductMenuItem;
  active: boolean;
  onDismiss: () => void;
}) {
  return (
    <li className="border-b border-line/70">
      <Link
        href={item.href}
        onClick={onDismiss}
        aria-current={active ? "page" : undefined}
        className={cn(
          "group/item flex items-center gap-4 rounded-xl px-2 py-2 transition-colors duration-200",
          active ? "bg-section text-forest" : "text-ink hover:bg-section hover:text-forest",
        )}
      >
        <ProductThumb
          image={item.image}
          sizeClassName="size-11 rounded-xl"
          sizes="44px"
          zoom
        />
        <span className={cn("flex-1 text-[0.9375rem] leading-snug", active && "font-semibold")}>
          <span className={menuUnderline.item(active)}>{item.label}</span>
        </span>
      </Link>
    </li>
  );
}

/** Round category image: a product photograph, or the category icon. */
function CategoryCover({ group, selected }: { group: ProductMenuGroup; selected: boolean }) {
  return (
    <span
      className={cn(
        "relative flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 transition-shadow duration-200",
        selected ? "ring-leaf/40 shadow-[var(--shadow-card)]" : "ring-line",
        !group.cover && "bg-sage-100 text-leaf",
      )}
    >
      {group.cover ? (
        <Image src={group.cover} alt="" fill sizes="56px" className="object-cover" />
      ) : (
        <Icon name={group.icon} className="size-6" />
      )}
    </span>
  );
}

const DEFAULT_GROUP: ProductMenuGroupId = "powders";

/**
 * Desktop Products mega menu. "Products" links to the full catalogue; the
 * chevron toggles the menu for keyboard and touch, and it also opens on
 * hover and focus-within.
 *
 * Full width of the header's content container, directly under the bar:
 * the four categories on the left, the selected category's products on the
 * right. Powder Products is selected every time the menu opens; hovering,
 * focusing or clicking another category swaps the right panel in place.
 * The menu closes when the pointer leaves it, on Escape, on an outside
 * click, or on navigation.
 *
 * The <li> is deliberately static: the panel positions against the header's
 * content container (the nearest positioned ancestor) and spans it gutter to
 * gutter — the same width as the logo-to-button row and every page section.
 */
export function ProductsMenu({
  label,
  href,
  linkClassName,
  current,
}: {
  label: string;
  href: string;
  linkClassName: string;
  current: boolean;
}) {
  const pathname = usePathname();
  const panelId = useId();
  const productsId = useId();
  const rootRef = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;

  // Hover and focus-within only reveal the menu while it is "armed" for the
  // current route. Choosing a product, pressing Escape, or any navigation
  // (a nav link, back/forward) disarms it — otherwise the pointer resting
  // on the panel, or focus returning to the chevron, would keep it open on
  // the next page. It re-arms when the pointer next leaves or re-enters the
  // menu, or keyboard focus arrives from outside.
  const [armedOn, setArmedOn] = useState<string | null>(pathname);
  const armed = armedOn === pathname;
  const [activeId, setActiveId] = useState<ProductMenuGroupId>(DEFAULT_GROUP);
  const activeGroup = productMenu.find((group) => group.id === activeId) ?? productMenu[0];
  // Escape closes the menu however it is showing — opened by click, or
  // revealed by hover or keyboard focus.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const root = rootRef.current;
      if (!root || !(open || root.matches(":hover, :focus-within"))) return;
      setOpenedOn(null);
      setArmedOn(null);
      buttonRef.current?.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // A click outside closes a click-opened menu.
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpenedOn(null);
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  /** Choosing a product or category: close everything before navigating. */
  const dismiss = () => {
    setOpenedOn(null);
    setArmedOn(null);
    (document.activeElement as HTMLElement | null)?.blur();
  };

  return (
    <li
      ref={rootRef}
      className="group/menu"
      // Every fresh opening starts on Powder Products: reset as the pointer
      // arrives (not as it leaves, which would swap content mid-fade).
      onPointerEnter={(event) => {
        setArmedOn(pathname);
        if (event.pointerType === "mouse" && !open) setActiveId(DEFAULT_GROUP);
      }}
      // Leaving the whole menu closes it, however it was opened, and re-arms
      // hover for the next visit.
      onPointerLeave={(event) => {
        setArmedOn(pathname);
        if (event.pointerType === "mouse" && open) setOpenedOn(null);
      }}
    >
      <div
        className="relative flex items-center gap-0.5"
        onFocus={(event) => {
          // Keyboard arrival from outside the menu re-arms it and starts on
          // Powder Products.
          if (!rootRef.current?.contains(event.relatedTarget as Node | null)) {
            setArmedOn(pathname);
            setActiveId(DEFAULT_GROUP);
          }
        }}
      >
        {/* Hover bridge: carries the pointer from "Products" down to the
            panel, which hangs from the header's bottom edge. */}
        <span aria-hidden="true" className="absolute inset-x-0 top-full h-10" />
        <Link href={href} onClick={dismiss} aria-current={current ? "page" : undefined} className={linkClassName}>
          {label}
        </Link>
        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${label} menu`}
          onClick={() => {
            if (!open) setActiveId(DEFAULT_GROUP);
            setOpenedOn((value) => (value ? null : pathname));
          }}
          className="flex size-7 items-center justify-center rounded-full text-ink transition-colors duration-300 hover:bg-sage-100 hover:text-forest"
        >
          <Icon
            name="chevron-down"
            className={cn(
              "size-4 transition-transform duration-300",
              armed && "group-hover/menu:rotate-180",
              open && "rotate-180",
            )}
          />
        </button>
      </div>

      {/* Full-width mega menu, gutter to gutter. It sits flush against the
          header's bottom edge: the container's bottom plus the header's own
          bottom padding (--header-pb, set by the header for each state). */}
      <div
        id={panelId}
        className={cn(
          "absolute top-[calc(100%+var(--header-pb,0px))] right-gutter left-gutter z-20",
          "transition-[opacity,translate,visibility] duration-300 ease-[var(--ease-out-expo)]",
          open ? reveal : ["invisible pointer-events-none translate-y-2 opacity-0", armed && hoverReveal],
        )}
      >
        <div className="grid grid-cols-[minmax(19rem,5fr)_7fr] overflow-hidden rounded-2xl border border-line/80 bg-white shadow-[0_24px_56px_-16px_rgba(13,44,30,0.18),0_0_1px_1px_rgba(13,44,30,0.06)]">
          {/* --- Left panel: categories ------------------------------------- */}
          <ul aria-label="Product categories" className="space-y-1 p-4">
            {productMenu.map((group) => {
              const selected = group.id === activeId;
              return (
                <li key={group.id}>
                  <button
                    type="button"
                    aria-expanded={selected}
                    aria-controls={productsId}
                    onPointerEnter={(event) => {
                      if (event.pointerType === "mouse") setActiveId(group.id);
                    }}
                    onFocus={() => setActiveId(group.id)}
                    onClick={() => setActiveId(group.id)}
                    onKeyDown={(event) => {
                      // Up/Down walk the categories; Right steps into the products.
                      const buttons = Array.from(
                        event.currentTarget.closest("ul")?.querySelectorAll("button") ?? [],
                      );
                      const index = buttons.indexOf(event.currentTarget);
                      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                        event.preventDefault();
                        const step = event.key === "ArrowDown" ? 1 : -1;
                        buttons[(index + step + buttons.length) % buttons.length]?.focus();
                      } else if (event.key === "ArrowRight") {
                        event.preventDefault();
                        document.getElementById(productsId)?.querySelector("a")?.focus();
                      }
                    }}
                    className={cn(
                      "group/cat relative flex w-full items-center gap-4 rounded-xl py-3 pr-4 pl-5 text-left transition-colors duration-200",
                      selected ? "bg-sage-100" : "hover:bg-section/70",
                    )}
                  >
                    {/* Green accent border on the selected category. */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute top-3 bottom-3 left-0 w-1 rounded-full bg-leaf transition-opacity duration-200",
                        selected ? "opacity-100" : "opacity-0",
                      )}
                    />
                    <CategoryCover group={group} selected={selected} />
                    <span className="min-w-0 flex-1">
                      <span className="block text-[1.0625rem] leading-snug font-semibold text-forest">
                        <span className={menuUnderline.category(selected)}>{group.title}</span>
                      </span>
                      <span className="mt-0.5 block text-[0.8125rem] text-ink-muted">
                        {group.items.length} products
                      </span>
                    </span>
                    <Icon
                      name="chevron-down"
                      className={cn(
                        "size-4 shrink-0 -rotate-90 transition-[translate,color] duration-200",
                        selected ? "translate-x-0.5 text-leaf" : "text-ink-muted",
                      )}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* --- Right panel: the selected category's products --------------- */}
          <div id={productsId} className="border-l border-line px-7 py-6">
            <p className="flex items-baseline justify-between gap-4 pb-3">
              <span className="font-display text-[1.6rem] leading-tight text-forest">{activeGroup.title}</span>
              <span className="text-[0.8125rem] text-ink-muted">{activeGroup.items.length} products</span>
            </p>
            <ul
              key={activeGroup.id}
              aria-label={activeGroup.title}
              // Products sit side by side, three to a row, in every category.
              className="grid grid-cols-3 gap-x-6 border-t border-line/70"
            >
              {activeGroup.items.map((item) => (
                <ProductRow
                  key={item.href}
                  item={item}
                  active={pathname === item.href}
                  onDismiss={dismiss}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
}
