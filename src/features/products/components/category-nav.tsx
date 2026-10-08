"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";

import { Icon } from "@/components/ui/icon";
import { useSmoothScroll } from "@/components/providers/smooth-scroll-provider";
import { cn } from "@/lib/utils";

export const ALL_PRODUCTS_ANCHOR = "all-products";

/**
 * Where a section counts as "current": just under the fixed header (72px) and
 * this sticky bar (68px), plus a little slack.
 */
const ACTIVE_LINE = 170;

/**
 * Glides to an in-page target through Lenis, which honours the target's
 * scroll-margin-top, and keeps the hash in the URL so the position can be
 * shared. Without Lenis (reduced motion) the native hash jump runs instead.
 */
function useJump() {
  const { getLenis, scrollTo } = useSmoothScroll();

  return (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!getLenis()) return;
    event.preventDefault();
    scrollTo(`#${id}`);
    window.history.replaceState(null, "", `#${id}`);
  };
}

/** A real `#hash` link that glides rather than snaps. */
export function JumpLink({ target, className, children }: { target: string; className?: string; children: ReactNode }) {
  const jump = useJump();

  return (
    <a href={`#${target}`} onClick={(event) => jump(event, target)} className={className}>
      {children}
    </a>
  );
}

type NavItem = { id: string; label: string; image: string | null };

/**
 * Sticky jump bar under the fixed header. The range in view is filled forest
 * green; on narrow screens the row scrolls sideways and keeps the active pill
 * in view.
 */
export function CategoryNav({ items }: { items: readonly NavItem[] }) {
  const [active, setActive] = useState(ALL_PRODUCTS_ANCHOR);
  const listRef = useRef<HTMLUListElement>(null);
  const jump = useJump();

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const update = () => {
      let current = ALL_PRODUCTS_ANCHOR;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= ACTIVE_LINE) current = section.id;
      }
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [items]);

  useEffect(() => {
    const list = listRef.current;
    const pill = list?.querySelector<HTMLElement>(`[data-target="${active}"]`);
    if (!list || !pill) return;
    list.scrollTo({ left: pill.offsetLeft - list.offsetLeft - 16, behavior: "smooth" });
  }, [active]);

  const all: NavItem = { id: ALL_PRODUCTS_ANCHOR, label: "All Products", image: null };

  return (
    <nav
      aria-label="Product categories"
      className="sticky top-16 z-30 border-y border-line bg-white/95 backdrop-blur-sm sm:top-[4.5rem]"
    >
      <div className="mx-auto w-full max-w-shell">
        <ul
          ref={listRef}
          className="scrollbar-none flex gap-2 overflow-x-auto px-gutter py-3 lg:gap-3"
        >
          {[all, ...items].map((item) => {
            const current = item.id === active;

            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  data-target={item.id}
                  aria-current={current ? "location" : undefined}
                  onClick={(event) => jump(event, item.id)}
                  className={cn(
                    "inline-flex h-11 items-center gap-2.5 rounded-full border pr-4 pl-1.5 text-[0.875rem] font-medium whitespace-nowrap transition-colors duration-300",
                    current
                      ? "border-forest bg-forest text-white"
                      : "border-line bg-white text-forest hover:border-leaf hover:bg-sage-50",
                  )}
                >
                  <span
                    className={cn(
                      "relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full",
                      current ? "bg-white/15" : "bg-cream",
                    )}
                  >
                    {item.image ? (
                      <Image src={item.image} alt="" fill sizes="32px" className="object-cover" />
                    ) : (
                      <Icon name="layers" className="size-4" />
                    )}
                  </span>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
