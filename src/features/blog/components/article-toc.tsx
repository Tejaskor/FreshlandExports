"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { MouseEvent } from "react";

import { useSmoothScroll } from "@/components/providers/smooth-scroll-provider";
import { Icon } from "@/components/ui/icon";
import type { OutlineItem } from "@/features/blog/data";
import { cn } from "@/lib/utils";

/**
 * A heading counts as "being read" once it rises past this line (px from the
 * top): just below where a TOC jump parks it (its scroll-margin-top, 112px).
 */
const READ_LINE = 136;

/**
 * The id of the section being read: the last heading that has risen past the
 * read line. Tracks window scroll, which Lenis drives, so it follows smooth
 * scrolling frame by frame.
 */
function useActiveSection(items: readonly OutlineItem[]) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = items[0]?.id ?? "";
      for (const item of items) {
        const heading = document.getElementById(item.id);
        if (heading && heading.getBoundingClientRect().top <= READ_LINE) current = item.id;
      }
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [items]);

  return [active, setActive] as const;
}

/**
 * Table of contents for one article, built from its own headings. "sidebar"
 * is the sticky panel beside the text on tablet and desktop; "collapsible"
 * is the compact panel above the text on phones. Clicking an item glides to
 * its heading, clear of the fixed header, and records it in the URL hash
 * without a reload.
 */
export function ArticleToc({
  items,
  variant,
  className,
}: {
  items: readonly OutlineItem[];
  variant: "sidebar" | "collapsible";
  className?: string;
}) {
  const { scrollTo } = useSmoothScroll();
  const [active, setActive] = useActiveSection(items);
  const [open, setOpen] = useState(false);
  const listId = useId();
  // The folding list of the phone panel, measured before it closes.
  const foldRef = useRef<HTMLDivElement>(null);

  if (items.length === 0) return null;

  const go = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const heading = document.getElementById(id);
    if (!heading) return;
    event.preventDefault();
    // An exact page position: the heading's own scroll-margin-top (which also
    // serves native hash jumps) clears the fixed header. Passing the element
    // with an offset would count that clearance twice, as Lenis honours
    // scroll-margin itself.
    const clearance = parseFloat(getComputedStyle(heading).scrollMarginTop) || 0;
    // The phone panel sits above the text and folds shut as it is used, so
    // everything below it rises by the list's height: aim that much higher.
    const folding = variant === "collapsible" ? (foldRef.current?.getBoundingClientRect().height ?? 0) : 0;
    scrollTo(heading.getBoundingClientRect().top + window.scrollY - clearance - folding);
    window.history.replaceState(window.history.state, "", `#${id}`);
    setActive(id);
    if (variant === "collapsible") setOpen(false);
  };

  const list = (
    <ol id={listId} className="space-y-0.5">
      {items.map((item, index) => {
        const current = item.id === active;
        return (
          <li key={item.id} className={cn(item.level === 3 && "pl-5")}>
            <a
              href={`#${item.id}`}
              onClick={(event) => go(event, item.id)}
              aria-current={current ? "location" : undefined}
              className={cn(
                "group/toc relative flex gap-3 rounded-lg py-2 pr-3 pl-4 text-[0.875rem] leading-snug transition-colors duration-300",
                "focus-visible:ring-2 focus-visible:ring-leaf/50 focus-visible:outline-none",
                current ? "bg-section font-semibold text-forest" : "text-ink-muted hover:bg-section/60 hover:text-forest",
              )}
            >
              {/* Rust marker on the section being read. */}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute top-2 bottom-2 left-0 w-0.5 rounded-full transition-colors duration-300",
                  current ? "bg-rust" : "bg-transparent",
                )}
              />
              {item.level === 2 && (
                <span aria-hidden="true" className={cn("tabular-nums", current ? "text-rust" : "text-ink-faint")}>
                  {String(items.filter((other, i) => other.level === 2 && i <= index).length).padStart(2, "0")}
                </span>
              )}
              <span className="min-w-0">{item.text}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );

  if (variant === "collapsible") {
    return (
      <nav aria-label="Table of contents" className={cn("rounded-xl border border-line bg-white", className)}>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={listId}
          onClick={() => setOpen((value) => !value)}
          className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
        >
          <span className="font-display text-[1.125rem] font-semibold text-forest">Table of Contents</span>
          <Icon
            name="chevron-down"
            className={cn("size-5 shrink-0 text-ink-muted transition-transform duration-300", open && "rotate-180 text-rust")}
          />
        </button>
        <div
          inert={!open}
          className={cn(
            "grid transition-[grid-template-rows] duration-300 ease-[var(--ease-out-expo)]",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="min-h-0 overflow-hidden">
            <div ref={foldRef} className="border-t border-line px-3 pt-2 pb-3">
              {list}
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    // Capped to the viewport (below the header) so a long outline scrolls
    // inside the panel; data-lenis-prevent lets that inner scroll work.
    <nav
      aria-labelledby={`${listId}-heading`}
      data-lenis-prevent
      className={cn(
        "max-h-[calc(100dvh-9rem)] overflow-y-auto overscroll-contain rounded-xl border border-line bg-white p-5",
        className,
      )}
    >
      <h2 id={`${listId}-heading`} className="font-display text-[1.25rem] font-semibold text-forest">
        Table of Contents
      </h2>
      <span aria-hidden="true" className="mt-3 mb-3 block h-px w-10 bg-rust" />
      {list}
    </nav>
  );
}
