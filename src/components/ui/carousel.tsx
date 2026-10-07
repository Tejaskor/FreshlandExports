"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

import { CircleButton } from "@/components/ui/button";
import { ScrollScrub } from "@/animations/scroll-scrub";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

/** Auto-scroll speed, in px per second — a slow, unhurried drift. */
const AUTO_SPEED = 28;
/** How long auto-scroll waits after a touch, swipe or wheel before resuming. */
const RESUME_DELAY = 3000;

/**
 * Horizontal rail with header arrows.
 *
 * The rail is a native scroll container — it keeps keyboard, trackpad and
 * touch behaviour for free, and degrades to a plain scrollable row without JS.
 * At desktop widths the cards flex to fill, so nothing overflows and the
 * arrows disable themselves.
 *
 * `autoScroll` adds a slow, seamless drift for rails that overflow: the cards
 * are repeated once (hidden from assistive tech and the tab order, still
 * clickable) and the scroll position wraps by exactly one set, so there is
 * never a visible jump back to the start. It pauses on hover, focus and touch, resumes shortly
 * after the user stops swiping, and is off when reduced motion is requested
 * or when every card already fits.
 */
export function Carousel({
  heading,
  label,
  children,
  className,
  railClassName,
  drift = false,
  scrollable = false,
  arrows = true,
  autoScroll = false,
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
  /** Header arrow buttons. */
  arrows?: boolean;
  /** Slow, seamless drift while the cards overflow the rail. */
  autoScroll?: boolean;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const cloneRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ atStart: true, atEnd: true });
  const [overflows, setOverflows] = useState(false);
  const reducedMotion = useReducedMotion();
  const looping = autoScroll && overflows && !reducedMotion;

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

  // Whether the original cards (not their repeats) overflow the rail.
  useEffect(() => {
    const rail = railRef.current;
    if (!autoScroll || !rail) return;

    const check = () => {
      const cards = Array.from(rail.children).filter((child) => child !== cloneRef.current) as HTMLElement[];
      const first = cards[0];
      const last = cards[cards.length - 1];
      if (!first || !last) return;
      const style = getComputedStyle(rail);
      const room = rail.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
      setOverflows(last.offsetLeft + last.offsetWidth - first.offsetLeft > room + 1);
    };

    const observer = new ResizeObserver(check);
    observer.observe(rail);
    return () => observer.disconnect();
  }, [autoScroll]);

  // Keep the repeated cards out of the tab order.
  useEffect(() => {
    if (!looping) return;
    cloneRef.current
      ?.querySelectorAll<HTMLElement>("a, button, input, select, textarea, [tabindex]")
      .forEach((element) => element.setAttribute("tabindex", "-1"));
  }, [looping, children]);

  // The drift itself: one rAF loop, paused by interaction or when off screen.
  useEffect(() => {
    const rail = railRef.current;
    const clones = cloneRef.current;
    if (!looping || !rail || !clones) return;

    let frame = 0;
    let last = 0;
    let position = rail.scrollLeft;
    let hovered = false;
    let focused = false;
    let touching = false;
    let visible = false;
    let resumeAt = 0;

    // Distance from a card to its repeat: wrapping by exactly this is seamless.
    const period = () => {
      const first = rail.firstElementChild as HTMLElement | null;
      const repeat = clones.firstElementChild as HTMLElement | null;
      return first && repeat ? repeat.offsetLeft - first.offsetLeft : 0;
    };

    const wrap = () => {
      const span = period();
      if (span > 0 && rail.scrollLeft >= span) {
        rail.scrollLeft -= span;
        position = rail.scrollLeft;
      }
    };

    const tick = (time: number) => {
      const elapsed = last ? Math.min(time - last, 64) : 0;
      last = time;

      // The user moved the rail (swipe, wheel, keyboard): follow, then wait.
      if (Math.abs(rail.scrollLeft - position) > 2) {
        position = rail.scrollLeft;
        resumeAt = time + RESUME_DELAY;
      }

      if (visible && !hovered && !focused && !touching && time >= resumeAt) {
        position += (AUTO_SPEED * elapsed) / 1000;
        rail.scrollLeft = position;
      }
      wrap();
      frame = requestAnimationFrame(tick);
    };

    const onEnter = (event: PointerEvent) => {
      if (event.pointerType === "mouse") hovered = true;
    };
    const onLeave = (event: PointerEvent) => {
      if (event.pointerType === "mouse") hovered = false;
    };
    const onTouchStart = () => {
      touching = true;
    };
    const onTouchEnd = () => {
      touching = false;
      resumeAt = performance.now() + RESUME_DELAY;
    };
    const onFocusIn = () => {
      focused = true;
    };
    const onFocusOut = (event: FocusEvent) => {
      if (!rail.contains(event.relatedTarget as Node | null)) focused = false;
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(rail);

    rail.addEventListener("pointerenter", onEnter);
    rail.addEventListener("pointerleave", onLeave);
    rail.addEventListener("touchstart", onTouchStart, { passive: true });
    rail.addEventListener("touchend", onTouchEnd, { passive: true });
    rail.addEventListener("touchcancel", onTouchEnd, { passive: true });
    rail.addEventListener("focusin", onFocusIn);
    rail.addEventListener("focusout", onFocusOut);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      rail.removeEventListener("pointerenter", onEnter);
      rail.removeEventListener("pointerleave", onLeave);
      rail.removeEventListener("touchstart", onTouchStart);
      rail.removeEventListener("touchend", onTouchEnd);
      rail.removeEventListener("touchcancel", onTouchEnd);
      rail.removeEventListener("focusin", onFocusIn);
      rail.removeEventListener("focusout", onFocusOut);
    };
  }, [looping]);

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

        {arrows && (
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
        )}
      </div>

      {withDrift(
        drift,
        <div
          ref={railRef}
          onScroll={measure}
          role="group"
          aria-label={label}
          className={cn(
            "scrollbar-none -mx-gutter mt-10 flex gap-6 overflow-x-auto px-gutter pt-2 pb-5 lg:mt-12 lg:gap-8",
            // A drifting rail can't snap: snapping would pull it back each frame.
            !looping && "snap-x snap-mandatory",
            "lg:mx-0 lg:px-0",
            scrollable ? "" : "lg:snap-none lg:overflow-visible",
            railClassName,
          )}
        >
          {children}
          {/* The repeat that makes the loop seamless: clickable, but never
              read by assistive tech or reached with the keyboard. */}
          {autoScroll && (
            <div ref={cloneRef} aria-hidden="true" className={looping ? "contents" : "hidden"}>
              {looping && children}
            </div>
          )}
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
