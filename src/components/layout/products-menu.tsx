"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { Icon } from "@/components/ui/icon";
import { productMenu, type ProductMenuItem } from "@/features/products/export-catalogue";
import { cn } from "@/lib/utils";

const reveal = "visible pointer-events-auto translate-y-0 opacity-100";
const hoverReveal = [
  "group-hover/menu:visible group-hover/menu:pointer-events-auto group-hover/menu:translate-y-0 group-hover/menu:opacity-100",
  "group-focus-within/menu:visible group-focus-within/menu:pointer-events-auto group-focus-within/menu:translate-y-0 group-focus-within/menu:opacity-100",
].join(" ");

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
    <li>
      <Link
        href={item.href}
        onClick={onDismiss}
        aria-current={active ? "page" : undefined}
        className={cn(
          "group/item flex items-center gap-3.5 rounded-xl p-2 transition-colors duration-200",
          active ? "bg-section text-forest" : "text-ink hover:bg-section hover:text-forest",
        )}
      >
        <span className="relative size-11 shrink-0 overflow-hidden rounded-lg border border-line bg-section">
          <Image
            src={item.image}
            alt=""
            fill
            sizes="44px"
            className="object-cover transition-transform duration-300 group-hover/item:scale-110"
          />
        </span>
        <span className={cn("text-[0.9375rem] leading-snug", active && "font-semibold")}>
          {item.label}
        </span>
        <Icon
          name="arrow-right"
          className="ml-auto size-3.5 shrink-0 -translate-x-1 text-leaf opacity-0 transition-[translate,opacity] duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100"
        />
      </Link>
    </li>
  );
}

/**
 * Desktop Products mega dropdown. "Products" links directly to the full catalogue;
 * the chevron toggles the panel for keyboard and touch. The panel also opens on hover
 * and focus-within, and closes on Escape, outside click, or route navigation.
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
  const rootRef = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenedOn(null);
      buttonRef.current?.focus();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpenedOn(null);
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
    (document.activeElement as HTMLElement | null)?.blur();
  };

  const powdersGroup = productMenu.find((g) => g.id === "powders");
  const agriculturalGroup = productMenu.find((g) => g.id === "agricultural");

  // Eight agricultural items over three sub-columns (3, 3, 2), so every
  // column — including the three powders — is three rows tall.
  const agItems = agriculturalGroup?.items ?? [];
  const perColumn = Math.ceil(agItems.length / 3);
  const agColumns = [0, 1, 2]
    .map((column) => agItems.slice(column * perColumn, (column + 1) * perColumn))
    .filter((column) => column.length > 0);

  return (
    <li ref={rootRef} className="group/menu">
      <div className="relative flex items-center gap-0.5">
        {/* Hover bridge: the panel hangs from the header container, below the
            bar's padding, so this strip carries the pointer across the gap. */}
        <span aria-hidden="true" className="absolute inset-x-0 top-full h-10" />
        <Link href={href} aria-current={current ? "page" : undefined} className={linkClassName}>
          {label}
        </Link>
        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${label} menu`}
          onClick={() => setOpenedOn((value) => (value ? null : pathname))}
          className="flex size-7 items-center justify-center rounded-full text-ink transition-colors duration-300 hover:bg-sage-100 hover:text-forest"
        >
          <Icon
            name="chevron-down"
            className={cn(
              "size-4 transition-transform duration-300 group-hover/menu:rotate-180",
              open && "rotate-180",
            )}
          />
        </button>
      </div>

      {/* Full-width mega dropdown, gutter to gutter under the header bar. */}
      <div
        id={panelId}
        className={cn(
          "absolute top-full right-gutter left-gutter z-20 pt-4",
          "transition-[opacity,translate,visibility] duration-300 ease-[var(--ease-out-expo)]",
          open ? reveal : ["invisible pointer-events-none translate-y-2 opacity-0", hoverReveal],
        )}
      >
        <div className="overflow-hidden rounded-2xl border border-line/80 bg-white shadow-[0_18px_42px_-12px_rgba(13,44,30,0.13),0_0_1px_1px_rgba(13,44,30,0.06)]">
          {/* Main 2-column layout: Powder products on the left, Agricultural on the right */}
          <div className="grid grid-cols-[minmax(15rem,1fr)_3fr] gap-8 px-8 py-7">
            {/* Column 1: Powder Products */}
            <div>
              <div className="mb-3 flex items-center gap-2.5 border-b border-line px-2 pb-3">
                <span className="flex size-5 items-center justify-center rounded-full bg-leaf-bright/10 text-leaf-bright ring-1 ring-leaf-bright/20">
                  <Icon name="sprout" className="size-3" />
                </span>
                <span className="text-[0.75rem] font-bold tracking-wider text-forest uppercase">
                  {powdersGroup?.title ?? "Powder Products"}
                </span>
              </div>

              <ul className="space-y-1">
                {powdersGroup?.items.map((item) => (
                  <ProductRow
                    key={item.href}
                    item={item}
                    active={pathname === item.href}
                    onDismiss={dismiss}
                  />
                ))}
              </ul>
            </div>

            {/* Column 2: Agricultural Export Products with subtle vertical divider */}
            <div className="border-l border-line pl-8">
              <div className="mb-3 flex items-center gap-2.5 border-b border-line px-2 pb-3">
                <span className="flex size-5 items-center justify-center rounded-full bg-leaf-bright/10 text-leaf-bright ring-1 ring-leaf-bright/20">
                  <Icon name="seedling" className="size-3" />
                </span>
                <span className="text-[0.75rem] font-bold tracking-wider text-forest uppercase">
                  {agriculturalGroup?.title ?? "Agricultural Export Products"}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-x-4">
                {agColumns.map((column) => (
                  <ul key={column[0].href} className="space-y-1">
                    {column.map((item) => (
                      <ProductRow
                        key={item.href}
                        item={item}
                        active={pathname === item.href}
                        onDismiss={dismiss}
                      />
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>

          {/* Clean bottom bar with View All Products */}
          <div className="flex items-center justify-between border-t border-line bg-section/70 px-8 py-3.5">
            <Link
              href={href}
              onClick={dismiss}
              className="group/all inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-forest transition-colors duration-200 hover:text-leaf"
            >
              <span>View all products</span>
              <Icon
                name="arrow-right"
                className="size-3.5 transition-transform duration-200 group-hover/all:translate-x-1"
              />
            </Link>
            <span className="text-[0.75rem] text-ink-muted">
              Global export &bull; Custom packaging &amp; specs on request
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}
