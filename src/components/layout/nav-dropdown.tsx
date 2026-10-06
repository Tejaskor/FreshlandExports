"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { Icon } from "@/components/ui/icon";
import type { NavFeature, NavLink } from "@/config/site";
import { cn } from "@/lib/utils";

const shown = "visible pointer-events-auto translate-y-0 opacity-100";
const hoverShown = [
  "group-hover/drop:visible group-hover/drop:pointer-events-auto group-hover/drop:translate-y-0 group-hover/drop:opacity-100",
  "group-focus-within/drop:visible group-focus-within/drop:pointer-events-auto group-focus-within/drop:translate-y-0 group-focus-within/drop:opacity-100",
].join(" ");

/**
 * A header mega-dropdown (Resources): the label is a menu button that toggles
 * the panel on click or tap, and the panel also opens on hover and keyboard
 * focus. It closes on Escape, an outside click, choosing a link, or
 * navigation. Like the Products menu, the panel spans the header's content
 * width and hangs from its bottom edge: the links on the left, an optional
 * featured card on the right.
 */
export function NavDropdown({
  label,
  links,
  featured,
  linkClassName,
}: {
  label: string;
  links: readonly NavLink[];
  featured?: NavFeature;
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

  const dismiss = () => {
    setOpenedOn(null);
    setArmedOn(null);
  };

  return (
    // Deliberately static: the panel positions against the header's content
    // container, as the Products menu does.
    <li
      ref={rootRef}
      className="group/drop"
      onFocus={(event) => {
        // Keyboard focus arriving from outside re-arms the reveal. A click
        // also focuses, but not visibly, so choosing a link keeps it closed.
        const fromOutside = !event.currentTarget.contains(event.relatedTarget as Node);
        if (fromOutside && event.target.matches(":focus-visible")) setArmedOn(pathname);
      }}
    >
      <div className="relative">
        {/* Hover bridge: carries the pointer from the label down to the panel. */}
        <span aria-hidden="true" className="absolute inset-x-0 top-full h-10" />
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
      </div>

      <div
        id={panelId}
        className={cn(
          "absolute top-[calc(100%+var(--header-pb,0px))] right-gutter left-gutter z-20",
          "invisible pointer-events-none translate-y-2 opacity-0",
          "transition-[opacity,translate,visibility] duration-300 ease-[var(--ease-out-expo)]",
          open ? shown : armed && hoverShown,
        )}
      >
        {/* Same frame and size as the Products menu: gutter to gutter, and as
            tall as its category list (four 80px rows, 4px gaps and 1rem
            padding = 22.75rem) plus its 1px borders = 22.875rem. The links
            fill the panel, with one compact featured card at the right edge. */}
        <div className="grid h-[22.875rem] grid-cols-[minmax(0,1fr)_23rem] gap-8 overflow-hidden rounded-2xl border border-line/80 bg-white shadow-[0_24px_56px_-16px_rgba(13,44,30,0.18),0_0_1px_1px_rgba(13,44,30,0.06)]">
          {/* --- Links ------------------------------------------------------ */}
          <div className="p-4 pt-6">
            <p className="flex items-center gap-3 px-3">
              <span aria-hidden="true" className="h-px w-6 bg-rust" />
              <span className="type-label text-ink-faint">{label}</span>
            </p>
            <ul className="mt-4 grid gap-1">
              {links.map((link) => {
                const here = pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={pathname === link.href ? "page" : undefined}
                      onClick={dismiss}
                      className={cn(
                        "group/link flex items-start gap-4 rounded-xl p-3 transition-colors duration-200",
                        here ? "bg-section" : "hover:bg-section focus-visible:bg-section",
                      )}
                    >
                      {link.icon && (
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-sage-100 text-forest ring-1 ring-sage-200 transition-colors duration-200 group-hover/link:bg-white group-hover/link:text-leaf">
                          <Icon name={link.icon} className="size-5" />
                        </span>
                      )}
                      <span className="min-w-0 pt-0.5">
                        <span className="flex items-center gap-2 text-[1rem] font-semibold text-forest transition-colors duration-200 group-hover/link:text-leaf">
                          {link.label}
                          <Icon
                            name="arrow-right"
                            className="size-3.5 -translate-x-1 opacity-0 transition-[opacity,translate] duration-300 group-hover/link:translate-x-0 group-hover/link:opacity-100"
                          />
                        </span>
                        {link.description && (
                          <span className="mt-1 block text-[0.875rem] leading-relaxed text-ink-muted">
                            {link.description}
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* --- Featured card ------------------------------------------- */}
          {featured && (
            <div className="flex min-h-0 py-5 pr-5">
              <FeaturedCard feature={featured} onSelect={dismiss} sizes="23rem" fill className="w-full" />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

/**
 * The featured card in the Resources panel and the mobile menu: an existing
 * site photograph, a label, title, summary and CTA, all one link.
 */
export function FeaturedCard({
  feature,
  onSelect,
  sizes,
  fill = false,
  className,
}: {
  feature: NavFeature;
  onSelect?: () => void;
  sizes: string;
  /** Fill a fixed-height frame: the photograph takes the space the text leaves. */
  fill?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={feature.href}
      onClick={onSelect}
      className={cn(
        "group/feature flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-[var(--shadow-card)]",
        "transition-[border-color,box-shadow] duration-500 hover:border-line-strong hover:shadow-[var(--shadow-lift)]",
        "focus-visible:ring-2 focus-visible:ring-leaf/50 focus-visible:outline-none",
        className,
      )}
    >
      <span
        className={cn("relative block overflow-hidden bg-sage-100", fill ? "min-h-0 flex-1" : "aspect-[16/8]")}
      >
        <Image
          src={feature.image}
          alt={feature.alt}
          fill
          sizes={sizes}
          style={feature.imagePosition ? { objectPosition: feature.imagePosition } : undefined}
          className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover/feature:scale-[1.03]"
        />
      </span>
      <span className="block px-4 pt-3.5 pb-4">
        <span className="type-label font-semibold text-rust">{feature.label}</span>
        <span className="mt-1.5 block font-display text-[1.125rem] leading-tight font-semibold text-forest">
          {feature.title}
        </span>
        <span className="mt-1.5 block text-[0.8125rem] leading-relaxed text-ink-muted">{feature.description}</span>
        <span className="mt-3 inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-forest transition-colors duration-300 group-hover/feature:text-leaf">
          {feature.cta}
          <Icon
            name="arrow-right"
            className="size-3.5 transition-transform duration-300 group-hover/feature:translate-x-0.5"
          />
        </span>
      </span>
    </Link>
  );
}
