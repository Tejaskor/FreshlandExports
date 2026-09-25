"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Logo } from "@/components/ui/logo";
import { useSmoothScroll } from "@/components/providers/smooth-scroll-provider";
import { useScrolledPast } from "@/hooks/use-scrolled-past";
import { primaryNav, siteConfig } from "@/config/site";
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
        condensed
          ? "border-b border-line bg-white/85 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-5",
      )}
    >
      <Container className="relative z-10 flex items-center justify-between gap-6">
        <Link href="/" aria-label={`${siteConfig.name} — home`} className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-8">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-1.5 text-[1rem] transition-colors duration-300",
                    isActive(item.href)
                      ? "text-leaf"
                      : "text-ink hover:text-leaf",
                  )}
                >
                  {item.label}
                  {item.hasMenu && <Icon name="chevron-down" className="size-4" />}
                </Link>
              </li>
            ))}
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
