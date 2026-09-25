"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

import { CircleButton } from "@/components/ui/button";
import { ScrollScrub } from "@/animations/scroll-scrub";
import { cn } from "@/lib/utils";

/**
 * Horizontal rail with header arrows.
 *
 * The rail is a native scroll container — it keeps keyboard, trackpad and
 * touch behaviour for free, and degrades to a plain scrollable row without JS.
 * At desktop widths the cards flex to fill, so nothing overflows and the
 * arrows disable themselves.
 */
export function Carousel({
  heading,
  label,
  children,
  className,
  railClassName,
  drift = false,
  scrollable = false,
}: {
  /** Section heading block rendered to the left of the arrows. */
  heading: ReactNode;
  /** Accessible name for the rail region. */
  label: string;
  children: ReactNode;
  className?: string;
  railClassName?: string;
  /** Scrubbed lateral drift on the rail, for sections that want the motion. */
  drift?: boolean;
  /**
   * Keeps the rail horizontally scrollable at desktop instead of flexing the
   * cards to fit. Required once a rail holds more cards than fit on screen.
   */
  scrollable?: boolean;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ atStart: true, atEnd: true });

  const measure = () => {
    const rail = railRef.current;
    if (!rail) return;

    const max = rail.scrollWidth - rail.clientWidth;
    setEdges({
      atStart: rail.scrollLeft <= 1,
      atEnd: rail.scrollLeft >= max - 1,
    });
  };

  // ResizeObserver fires asynchronously, so this subscribes rather than
  // pushing state synchronously during the effect.
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const observer = new ResizeObserver(measure);
    observer.observe(rail);
    return () => observer.disconnect();
  }, []);

  const step = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;

    const card = rail.firstElementChild as HTMLElement | null;
    // Read the real gap so a step lands exactly one card along at every
    // breakpoint, rather than drifting out of alignment.
    const gap = parseFloat(getComputedStyle(rail).columnGap) || 24;
    const distance = card ? card.offsetWidth + gap : rail.clientWidth * 0.8;
    rail.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  return (
    <div className={className}>
      <div className="flex items-end justify-between gap-8">
        {heading}

        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <CircleButton
            label="Previous"
            icon="arrow-left"
            onClick={() => step(-1)}
            disabled={edges.atStart}
          />
          <CircleButton
            label="Next"
            icon="arrow-right"
            onClick={() => step(1)}
            disabled={edges.atEnd}
          />
        </div>
      </div>

      {withDrift(
        drift,
        <div
          ref={railRef}
          onScroll={measure}
          role="group"
          aria-label={label}
          className={cn(
            "scrollbar-none -mx-gutter mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-gutter pt-2 pb-5 lg:mt-12 lg:gap-8",
            "lg:mx-0 lg:px-0",
            scrollable ? "" : "lg:snap-none lg:overflow-visible",
            railClassName,
          )}
        >
          {children}
        </div>,
      )}
    </div>
  );
}

/**
 * Wraps the rail in a scrubbed lateral drift. Desktop only — below lg the rail
 * is a native horizontal scroller and a transform would fight the user's own
 * panning.
 */
function withDrift(enabled: boolean, rail: ReactNode) {
  if (!enabled) return rail;

  return (
    <ScrollScrub from={{ x: 18 }} to={{ x: -18 }} desktopOnly>
      {rail}
    </ScrollScrub>
  );
}
