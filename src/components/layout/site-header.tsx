"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Logo } from "@/components/ui/logo";
import { ProductsMenu } from "@/components/layout/products-menu";
import { useSmoothScroll } from "@/components/providers/smooth-scroll-provider";
import { useScrolledPast } from "@/hooks/use-scrolled-past";
import { primaryNav, siteConfig } from "@/config/site";
import { productMenu } from "@/features/products/export-catalogue";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const { stop, start } = useSmoothScroll();

  // Solid bar once the hero image is behind us.
  const condensed = useScrolledPast(24);

  // The menu is tied to the route it was opened on, so any navigation closes
  // it without an effect reaching back into state.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const menuOpen = openedOn === pathname;

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
        condensed
          ? "border-b border-line bg-white py-3 shadow-[0_1px_12px_rgb(13_44_30/0.06)]"
          : "border-b border-transparent bg-transparent py-5",
      )}
    >
      {/* The shared content shell (90rem), so the logo and actions line up
          with every section's content edges below. */}
      <Container className="relative z-10 flex items-center justify-between gap-6">
        <Link href="/" aria-label={`${siteConfig.name} — home`} className="shrink-0">
          <Logo priority />
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          {/* Tighter spacing until 85rem: "Our Signature Ingredients" is the
              longest label, and at 1280px the full gap left almost no room.
              From 2xl the wider bar shares its extra room between the links. */}
          <ul className="flex items-center gap-6 min-[85rem]:gap-8 2xl:gap-10">
            {primaryNav.map((item) => {
              const linkClassName = cn(
                "flex items-center gap-1.5 text-[1rem] whitespace-nowrap transition-colors duration-300",
                // Active page in leaf green (5:1 on white).
                isActive(item.href) ? "text-leaf" : "text-ink hover:text-leaf",
              );

              return item.hasMenu ? (
                <ProductsMenu
                  key={item.href}
                  label={item.label}
                  href={item.href}
                  linkClassName={linkClassName}
                  current={isActive(item.href)}
                />
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
          <Link
            href="/search"
            aria-label="Search"
            className="flex size-10 items-center justify-center rounded-full text-forest transition-colors duration-300 hover:bg-sage-100 hover:text-leaf"
          >
            <Icon name="search" className="size-[1.3rem]" />
          </Link>

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
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="flex items-baseline gap-4 py-5 transition-colors duration-300 hover:text-leaf"
                  >
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
                  </Link>

                  {/* Product pages, listed under Products (links can't nest,
                      so they follow the row rather than sit inside it). */}
                  {item.hasMenu && (
                    <div className="pb-6 pl-4 pt-1 sm:pl-10">
                      <div className="grid gap-4 sm:grid-cols-2">
                        {productMenu.map((group) => (
                          <div
                            key={group.id}
                            className="rounded-xl border border-line/60 bg-white/70 p-3 sm:p-4"
                          >
                            <div className="mb-2.5 flex items-center gap-2 border-b border-line/50 pb-2">
                              <span className="flex size-5 items-center justify-center rounded-full bg-leaf-bright/10 text-leaf-bright ring-1 ring-leaf-bright/20">
                                <Icon
                                  name={group.id === "powders" ? "sprout" : "seedling"}
                                  className="size-3"
                                />
                              </span>
                              <span className="text-[0.75rem] font-bold tracking-wider text-forest uppercase">
                                {group.title}
                              </span>
                            </div>
                            <ul
                              className={cn(
                                "space-y-1",
                                group.id === "agricultural" &&
                                  "grid grid-cols-1 gap-x-2 gap-y-1 space-y-0 min-[480px]:grid-cols-2",
                              )}
                            >
                              {group.items.map((product) => {
                                const here = pathname === product.href;
                                return (
                                  <li key={product.href}>
                                    <Link
                                      href={product.href}
                                      onClick={closeMenu}
                                      aria-current={here ? "page" : undefined}
                                      className={cn(
                                        "flex items-center gap-2.5 rounded-lg p-1.5 text-[0.875rem] transition-colors duration-200",
                                        here
                                          ? "bg-section font-semibold text-forest"
                                          : "text-ink hover:bg-section hover:text-forest",
                                      )}
                                    >
                                      <span className="relative size-7 shrink-0 overflow-hidden rounded-md border border-line/60 bg-section shadow-xs">
                                        <Image
                                          src={product.image}
                                          alt=""
                                          fill
                                          sizes="28px"
                                          className="object-cover"
                                        />
                                      </span>
                                      <span className="leading-snug">{product.label}</span>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-line/50 pt-3">
                        <Link
                          href="/products"
                          onClick={closeMenu}
                          className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-forest transition-colors hover:text-leaf"
                        >
                          View all products
                          <Icon name="arrow-right" className="size-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <Button href="/contact" variant="forest" className="mt-10 w-full sm:hidden">
            Get a Quote
          </Button>
        </Container>
      </div>
    </header>
  );
}
