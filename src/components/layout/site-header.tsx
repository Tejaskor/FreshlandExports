"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Logo } from "@/components/ui/logo";
import { NavDropdown } from "@/components/layout/nav-dropdown";
import { ProductThumb, ProductsMenu, menuUnderline } from "@/components/layout/products-menu";
import { useSmoothScroll } from "@/components/providers/smooth-scroll-provider";
import { primaryNav, siteConfig } from "@/config/site";
import { BrochureButton } from "@/features/brochure/brochure-button";
import { productMenu, type ProductMenuGroupId } from "@/features/products/export-catalogue";
import { cn } from "@/lib/utils";

/**
 * Brochure button in the hero CTA's colours (Button's primary variant): rust,
 * a step darker on hover, white text and icon. The border keeps the button's
 * original size and follows the fill.
 */
const brochureButton =
  "group/brochure inline-flex h-12 items-center gap-2 rounded-full border border-rust bg-rust px-5 text-[0.9375rem] font-medium whitespace-nowrap text-white " +
  "transition-[background-color,color,border-color,box-shadow] duration-500 ease-[var(--ease-out-expo)] hover:border-rust-deep hover:bg-rust-deep " +
  "focus-visible:ring-2 focus-visible:ring-leaf/50 focus-visible:outline-none";

export function SiteHeader() {
  const pathname = usePathname();
  const { stop, start } = useSmoothScroll();

  // The glass fills in as the page scrolls: --glass-alpha runs from the
  // stylesheet's 0.62 at the top to 0.9 by 240px down, set straight on the
  // element (at most once a frame, no re-render) so it tracks the scroll.
  const glassRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const glass = glassRef.current;
    if (!glass) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const progress = Math.min(Math.max(window.scrollY / 240, 0), 1);
      glass.style.setProperty("--glass-alpha", (0.62 + progress * 0.28).toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // The menu is tied to the route it was opened on, so any navigation closes
  // it without an effect reaching back into state.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const menuOpen = openedOn === pathname;

  // Mobile menu: the one product category currently expanded.
  const [mobileGroup, setMobileGroup] = useState<ProductMenuGroupId | null>(null);
  // Mobile menu: the one section (Products or Resources, by href) currently
  // expanded. Opening one closes the other; closing Products also folds its
  // open category, so it reopens clean.
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const toggleSection = (href: string) => {
    setMobileSection((current) => (current === href ? null : href));
    setMobileGroup(null);
  };

  const closeMenu = () => setOpenedOn(null);
  const toggleMenu = () => setOpenedOn((current) => (current ? null : pathname));

  useEffect(() => {
    if (!menuOpen) return;

    stop();
    document.body.style.overflow = "hidden";
    // The menu covers the page: keep keyboard and screen-reader users in it.
    const behind = [document.getElementById("main"), document.querySelector("body footer")];
    behind.forEach((element) => element?.setAttribute("inert", ""));

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      start();
      document.body.style.overflow = "";
      behind.forEach((element) => element?.removeAttribute("inert"));
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, stop, start]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    // The header itself stays transparent: the frosted glass bar behind the
    // logo row is its only surface, the same at every scroll position and on
    // every page. --menu-top is how far below the logo row that bar ends
    // (its --glass-y overhang), so the Products and Resources menus hang
    // flush from it.
    <header className="fixed inset-x-0 top-0 z-50 py-5 [--glass-y:0.875rem] [--menu-top:var(--glass-y)]">
      {/* The shared content shell (90rem), so the logo and actions line up
          with every section's content edges below. */}
      {/* Logo, then the link group centred in the space between, then the
          CTA group at the right edge: the two gaps either side of the links
          are equal, and never less than the container's 24px gap. */}
      <Container className="relative z-10 flex items-center justify-between gap-6 [--nav-edge:calc(var(--spacing-gutter)-0.75rem)]">
        {/* Frosted-glass bar behind the logo row (globals.css glass-bar),
            over the hero and every section below it alike: a 62% cream
            fill at the top of the page, filling in to 90% as it scrolls so
            the content behind fades back, under the same 20px blur. Its sides
            sit at --nav-edge (12px outside the logo and the last button), the
            same edges as the Products and Resources menus; --glass-y (14px)
            above and below, pill-round like the Brochure and Get a Quote
            buttons. */}
        <span
          ref={glassRef}
          aria-hidden="true"
          className="glass-bar pointer-events-none absolute inset-x-[var(--nav-edge)] inset-y-[calc(var(--glass-y)*-1)] -z-10 rounded-full"
        />
        <Link href="/" aria-label={`${siteConfig.name} — home`} className="shrink-0">
          <Logo eager />
        </Link>

        <nav aria-label="Primary" className="hidden xl:mx-auto xl:block">
          {/* One compact group: 24px between links, 28px from 85rem. Any spare
              width goes to the gap before the CTAs, never between links. */}
          <ul className="flex items-center gap-6 min-[85rem]:gap-7">
            {primaryNav.map((item) => {
              const linkClassName = cn(
                "flex items-center gap-1.5 text-[1rem] whitespace-nowrap transition-colors duration-300",
                // Active page in leaf green (5:1 on white); hover in forest green.
                isActive(item.href) ? "text-leaf" : "text-ink hover:text-forest",
              );

              if (item.hasMenu) {
                return <ProductsMenu key={item.href} label={item.label} linkClassName={linkClassName} />;
              }
              if (item.links) {
                return (
                  <NavDropdown
                    key={item.href}
                    label={item.label}
                    links={item.links}
                    featured={item.featured}
                    linkClassName={linkClassName}
                  />
                );
              }
              return (
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
          <BrochureButton source="header_brochure" className={cn(brochureButton, "hidden cursor-pointer sm:inline-flex")}>
            Brochure
            <Icon name="download" className="size-4 text-white" strokeWidth={2} />
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

      {/* The menu scrolls on its own while the page is locked. Lenis is
          stopped while the menu is open, and a stopped Lenis cancels every
          wheel and touch scroll — data-lenis-prevent exempts this panel so
          its last items and CTAs stay reachable. overscroll-contain keeps the
          gesture from chaining to the page, and the bottom padding clears
          the home indicator on notched phones. */}
      <div
        id="primary-menu"
        hidden={!menuOpen}
        data-lenis-prevent
        className="fixed inset-x-0 top-0 z-0 h-dvh max-h-dvh overflow-y-auto overscroll-contain bg-cream pt-24 pb-[max(3rem,calc(env(safe-area-inset-bottom)+1.5rem))] xl:hidden"
      >
        <Container>
          <nav aria-label="Primary mobile">
            <ul className="divide-y divide-line">
              {primaryNav.map((item, index) => (
                <li key={item.href}>
                  {(() => {
                    // Label only: no index number or hint line in the mobile menu.
                    const row = (
                      <span className="block font-display text-[1.375rem] text-forest">{item.label}</span>
                    );
                    // Products and Resources are headings for the links
                    // beneath them, not links themselves.
                    if (item.hasMenu || item.links) {
                      const sectionOpen = mobileSection === item.href;
                      return (
                        <button
                          type="button"
                          aria-expanded={sectionOpen}
                          aria-controls={`mobile-section-${index}`}
                          onClick={() => toggleSection(item.href)}
                          className="flex w-full items-baseline gap-4 py-5 text-left transition-colors duration-300 hover:text-leaf"
                        >
                          {row}
                          <Icon
                            name="chevron-down"
                            className={cn(
                              "ml-auto size-5 shrink-0 self-center text-ink-muted transition-transform duration-300",
                              sectionOpen && "rotate-180 text-rust",
                            )}
                          />
                        </button>
                      );
                    }
                    return (
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

                  {/* The section's links, folded until its heading is tapped. */}
                  {(item.hasMenu || item.links) && (
                    <div
                      id={`mobile-section-${index}`}
                      inert={mobileSection !== item.href}
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300 ease-[var(--ease-out-expo)]",
                        mobileSection === item.href ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="min-h-0 overflow-hidden">
                        {/* Resources links, listed under their heading. */}
                        {item.links && (
                          <div className="grid gap-3 pb-6 pl-4 sm:pl-10">
                            <ul>
                              {item.links.map((link) => (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    onClick={closeMenu}
                                    aria-current={pathname === link.href ? "page" : undefined}
                                    className={cn(
                                      "group/item block rounded-xl border border-line/60 px-4 py-3 transition-colors duration-200",
                                      isActive(link.href) ? "bg-section" : "bg-white/70 hover:bg-section",
                                    )}
                                  >
                                    <span className="flex items-center gap-2 text-[0.9375rem] font-semibold text-forest">
                                      <span className={menuUnderline.item(isActive(link.href))}>{link.label}</span>
                                      <Icon name="arrow-right" className="size-3.5 text-rust" />
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

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
                                        {group.title}
                                      </span>
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
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <BrochureButton
            source="header_mobile_brochure"
            onClick={closeMenu}
            className={cn(brochureButton, "mt-10 w-full justify-center sm:hidden")}
          >
            <Icon name="download" className="size-4 text-white" strokeWidth={2} />
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
