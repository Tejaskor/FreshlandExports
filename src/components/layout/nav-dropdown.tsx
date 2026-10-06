"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { Icon } from "@/components/ui/icon";
import type { NavLink } from "@/config/site";
import { cn } from "@/lib/utils";

const shown = "visible pointer-events-auto translate-y-0 opacity-100";
const hoverShown = [
  "group-hover/drop:visible group-hover/drop:pointer-events-auto group-hover/drop:translate-y-0 group-hover/drop:opacity-100",
  "group-focus-within/drop:visible group-focus-within/drop:pointer-events-auto group-focus-within/drop:translate-y-0 group-focus-within/drop:opacity-100",
].join(" ");

/**
 * A small header dropdown (Resources): the label is a menu button that
 * toggles a short list of links on click or tap, and the list also opens on
 * hover and keyboard focus. It closes on Escape, an outside click, choosing a
 * link, or navigation.
 */
export function NavDropdown({
  label,
  links,
  linkClassName,
}: {
  label: string;
  links: readonly NavLink[];
  linkClassName: string;
}) {
  const pathname = usePathname();
  const panelId = useId();
  const rootRef = useRef<HTMLLIElement>(null);

  // Opened by click, for this route only, so navigation closes it.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;
  // Hover and keyboard focus reveal the list only while it is "armed" for the
  // current route, as in the Products menu. Choosing a link, Escape or any
  // navigation disarms it, so a pointer resting on the panel cannot keep it
  // open on the next page; pointing at the label or tabbing in re-arms it.
  const [armedOn, setArmedOn] = useState<string | null>(pathname);
  const armed = armedOn === pathname;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const root = rootRef.current;
      if (!root || !(open || root.matches(":hover, :focus-within"))) return;
      setOpenedOn(null);
      setArmedOn(null);
      root.querySelector("button")?.focus();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (open && !rootRef.current?.contains(event.target as Node)) setOpenedOn(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <li
      ref={rootRef}
      className="group/drop relative"
      onFocus={(event) => {
        // Keyboard focus arriving from outside re-arms the reveal. A click
        // also focuses, but not visibly, so choosing a link keeps it closed.
        const fromOutside = !event.currentTarget.contains(event.relatedTarget as Node);
        if (fromOutside && event.target.matches(":focus-visible")) setArmedOn(pathname);
      }}
    >
      <button
        type="button"
        onPointerEnter={() => setArmedOn(pathname)}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpenedOn(open ? null : pathname)}
        className={cn(linkClassName, "cursor-pointer")}
      >
        {label}
        <Icon
          name="chevron-down"
          className={cn("size-4 transition-transform duration-300", open && "rotate-180")}
        />
      </button>

      {/* The top padding bridges the gap to the bar, so the pointer can
          travel from the label to the panel without closing it. */}
      <div
        id={panelId}
        className={cn(
          "invisible pointer-events-none absolute top-full left-1/2 z-20 w-[21rem] -translate-x-1/2 translate-y-1 pt-5 opacity-0",
          "transition-[opacity,translate,visibility] duration-300 ease-[var(--ease-out-expo)]",
          open ? shown : armed && hoverShown,
        )}
      >
        <div className="rounded-xl border border-line bg-white p-2 shadow-[var(--shadow-card)]">
          <p className="flex items-center gap-3 px-4 pt-3 pb-2">
            <span className="type-label text-ink-faint">{label}</span>
            <span aria-hidden="true" className="h-px flex-1 bg-line" />
          </p>
          <ul>
            {links.map((link) => {
              const here = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    onClick={() => {
                      setOpenedOn(null);
                      setArmedOn(null);
                    }}
                    className={cn(
                      "group/link block rounded-lg px-4 py-3 transition-colors duration-200",
                      here ? "bg-section" : "hover:bg-section focus-visible:bg-section",
                    )}
                  >
                    <span className="flex items-center gap-2 text-[0.9375rem] font-semibold text-forest">
                      {link.label}
                      <Icon
                        name="arrow-right"
                        className="size-3.5 text-rust transition-transform duration-300 group-hover/link:translate-x-0.5"
                      />
                    </span>
                    {link.description && (
                      <span className="mt-1 block text-[0.8125rem] leading-relaxed text-ink-muted">
                        {link.description}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
}
