"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Logo } from "@/components/ui/logo";
import { ProductThumb, ProductsMenu, menuUnderline } from "@/components/layout/products-menu";
import { useSmoothScroll } from "@/components/providers/smooth-scroll-provider";
import { useScrolledPast } from "@/hooks/use-scrolled-past";
import { primaryNav, siteConfig } from "@/config/site";
import { BrochureButton } from "@/features/brochure/brochure-button";
import { productMenu, type ProductMenuGroupId } from "@/features/products/export-catalogue";
import { cn } from "@/lib/utils";

/** Subtle outlined brochure button: forest outline, a rust download icon. */
const brochureButton =
  "group/brochure inline-flex h-12 items-center gap-2 rounded-full border border-forest/30 px-5 text-[0.9375rem] font-medium whitespace-nowrap text-forest " +
  "transition-colors duration-300 hover:border-forest hover:bg-forest hover:text-white " +
  "focus-visible:ring-2 focus-visible:ring-leaf/50 focus-visible:outline-none";

export function SiteHeader() {
  const pathname = usePathname();
  const { stop, start } = useSmoothScroll();

  // Solid bar once the hero image is behind us.
  const condensed = useScrolledPast(24);

  // The menu is tied to the route it was opened on, so any navigation closes
  // it without an effect reaching back into state.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const menuOpen = openedOn === pathname;

  // Mobile menu: the one product category currently expanded.
  const [mobileGroup, setMobileGroup] = useState<ProductMenuGroupId | null>(null);

  const closeMenu = () => setOpenedOn(null);
  const toggleMenu = () => setOpenedOn((current) => (current ? null : pathname));

  useEffect(() => {
    if (!menuOpen) return;

    stop();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      start();
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, stop, start]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[var(--ease-out-expo)]",
        // Transparent over the hero; once the page scrolls it condenses into
        // a solid white bar with a hairline, and clears again at the top.
        // --header-pb mirrors the bottom padding so the Products menu can hang
        // exactly from the header's bottom edge in both states.
        condensed
          ? "border-b border-line bg-white py-3 shadow-[0_1px_12px_rgb(13_44_30/0.06)] [--header-pb:0.75rem]"
          : "border-b border-transparent bg-transparent py-5 [--header-pb:1.25rem]",
      )}
    >
      {/* The shared content shell (90rem), so the logo and actions line up
          with every section's content edges below. */}
      <Container className="relative z-10 flex items-center justify-between gap-6">
        <Link href="/" aria-label={`${siteConfig.name} — home`} className="shrink-0">
          <Logo priority />
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          {/* Tighter spacing until 85rem, so the full set of labels (including
              "Our Signature Ingredients" when it is enabled) fits at 1280px.
              From 2xl the wider bar shares its extra room between the links. */}
          <ul className="flex items-center gap-6 min-[85rem]:gap-8 2xl:gap-10">
            {primaryNav.map((item) => {
              const linkClassName = cn(
                "flex items-center gap-1.5 text-[1rem] whitespace-nowrap transition-colors duration-300",
                // Active page in leaf green (5:1 on white).
                isActive(item.href) ? "text-leaf" : "text-ink hover:text-leaf",
              );

              return item.hasMenu ? (
                <ProductsMenu key={item.href} label={item.label} linkClassName={linkClassName} />
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={linkClassName}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {/* Brochure: in the bar from sm, inside the mobile menu below that. */}
          <BrochureButton source="header_brochure" className={cn(brochureButton, "hidden sm:inline-flex")}>
            <Icon name="download" className="size-4 text-rust transition-colors duration-300 group-hover/brochure:text-white" strokeWidth={2} />
            Brochure
          </BrochureButton>

          <Button href="/contact" variant="forest" size="md" className="hidden text-[0.9375rem] sm:inline-flex">
            Get a Quote
          </Button>

          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="primary-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex size-10 items-center justify-center rounded-full text-forest transition-colors duration-300 hover:bg-sage-100 hover:text-leaf xl:hidden"
          >
            <Icon name={menuOpen ? "close" : "menu"} className="size-6" />
          </button>
        </div>
      </Container>

      <div
        id="primary-menu"
        hidden={!menuOpen}
        className="fixed inset-x-0 top-0 z-0 h-dvh overflow-y-auto bg-cream pt-24 pb-12 xl:hidden"
      >
        <Container>
          <nav aria-label="Primary mobile">
            <ul className="divide-y divide-line">
              {primaryNav.map((item, index) => (
                <li key={item.href}>
                  {(() => {
                    const row = (
                      <>
                        <span className="type-label text-[0.75rem] text-ink-faint">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                        <span>
                          <span className="block font-display text-[1.625rem] text-forest">
                            {item.label}
                          </span>
                          {item.hint && (
                            <span className="mt-1 block text-[0.9375rem] text-ink-muted">
                              {item.hint}
                            </span>
                          )}
                        </span>
                      </>
                    );
                    // Products is a heading for the product links beneath it,
                    // not a link to /products.
                    return item.hasMenu ? (
                      <div className="flex items-baseline gap-4 py-5">{row}</div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        aria-current={isActive(item.href) ? "page" : undefined}
                        className="flex items-baseline gap-4 py-5 transition-colors duration-300 hover:text-leaf"
                      >
                        {row}
                      </Link>
                    );
                  })()}

                  {/* Product pages, listed under Products (links can't nest,
                      so they follow the row rather than sit inside it). */}
                  {item.hasMenu && (
                    <div className="pb-6 pl-4 pt-1 sm:pl-10">
                      {/* Click-to-expand categories; one open at a time,
                          products listed directly beneath it. */}
                      <ul className="divide-y divide-line/60 overflow-hidden rounded-xl border border-line/60 bg-white/70">
                        {productMenu.map((group) => {
                          const expanded = mobileGroup === group.id;
                          const listId = `mobile-products-${group.id}`;
                          return (
                            <li key={group.id}>
                              <button
                                type="button"
                                aria-expanded={expanded}
                                aria-controls={listId}
                                onClick={() => setMobileGroup(expanded ? null : group.id)}
                                className={cn(
                                  "group/cat flex w-full items-center gap-3 px-3 py-3 text-left transition-colors duration-200 sm:px-4",
                                  expanded ? "bg-section text-forest" : "text-ink hover:bg-section/70",
                                )}
                              >
                                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-leaf-bright/10 text-leaf-bright ring-1 ring-leaf-bright/20">
                                  <Icon name={group.icon} className="size-3.5" />
                                </span>
                                <span className="flex-1 text-[0.9375rem] font-semibold text-forest">
                                  <span className={menuUnderline.category(expanded)}>{group.title}</span>
                                </span>
                                <span className="text-[0.75rem] text-ink-muted">{group.items.length}</span>
                                <Icon
                                  name="chevron-down"
                                  className={cn(
                                    "size-4 text-ink-muted transition-transform duration-300",
                                    expanded && "rotate-180 text-rust",
                                  )}
                                />
                              </button>
                              <div
                                id={listId}
                                inert={!expanded}
                                className={cn(
                                  "grid transition-[grid-template-rows] duration-300 ease-[var(--ease-out-expo)]",
                                  expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                                )}
                              >
                                <ul className="grid min-h-0 grid-cols-1 gap-x-2 gap-y-1 overflow-hidden px-2 min-[480px]:grid-cols-2 sm:px-3">
                                  {group.items.map((product, index) => {
                                    const here = pathname === product.href;
                                    return (
                                      <li
                                        key={product.href}
                                        className={cn(
                                          index === 0 && "pt-2",
                                          index === 1 && "min-[480px]:pt-2",
                                          "last:pb-3",
                                          index === group.items.length - 2 && "min-[480px]:pb-3",
                                        )}
                                      >
                                        <Link
                                          href={product.href}
                                          onClick={closeMenu}
                                          aria-current={here ? "page" : undefined}
                                          className={cn(
                                            "group/item flex items-center gap-2.5 rounded-lg p-1.5 text-[0.875rem] transition-colors duration-200",
                                            here
                                              ? "bg-section font-semibold text-forest"
                                              : "text-ink hover:bg-section hover:text-forest",
                                          )}
                                        >
                                          <ProductThumb
                                            image={product.image}
                                            sizeClassName="size-7 rounded-md"
                                            sizes="28px"
                                          />
                                          <span className="leading-snug">
                                            <span className={menuUnderline.item(here)}>{product.label}</span>
                                          </span>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                      <div className="mt-4">
                        <Link
                          href="/products"
                          onClick={closeMenu}
                          className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-forest transition-colors hover:text-leaf"
                        >
                          View All Products
                          <Icon name="arrow-right" className="size-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <BrochureButton
            source="header_brochure"
            onClick={closeMenu}
            className={cn(brochureButton, "mt-10 w-full justify-center sm:hidden")}
          >
            <Icon name="download" className="size-4 text-rust transition-colors duration-300 group-hover/brochure:text-white" strokeWidth={2} />
            Brochure
          </BrochureButton>
          <Button href="/contact" variant="forest" className="mt-3 w-full sm:hidden">
            Get a Quote
          </Button>
        </Container>
      </div>
    </header>
  );
}
