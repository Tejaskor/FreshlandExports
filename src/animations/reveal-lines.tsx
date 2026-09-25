"use client";

import { useRef } from "react";
import type { ElementType, ReactNode } from "react";

import { gsap } from "@/animations/gsap";
import { useSectionMotion } from "@/hooks/use-section-motion";
import { EASE, MEDIA, START, amplitude } from "@/animations/motion";
import { cn } from "@/lib/utils";

/**
 * Masked line-by-line reveal for editorial headings — the signature move of
 * the site, used on every section heading so the rhythm carries through.
 *
 * Deliberately not a character-splitter: splitting text nodes would fragment
 * the accessibility tree and hand screen readers a wall of single letters.
 */
export function RevealLines({
  children,
  as,
  className,
  id,
  delay = 0,
  stagger = 0.1,
  /** Above-the-fold headings play on load rather than waiting for scroll. */
  intro = false,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Forwarded so a heading can be referenced by aria-labelledby. */
  id?: string;
  delay?: number;
  stagger?: number;
  intro?: boolean;
}) {
  const Component = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useSectionMotion(
    ref,
    ({ mm, root }) => {
      const lines = root.querySelectorAll<HTMLElement>("[data-line]");
      if (lines.length === 0) return;

      mm.add({ ok: MEDIA.motion, desktop: MEDIA.desktop }, (context) => {
        const { ok, desktop } = context.conditions as {
          ok: boolean;
          desktop: boolean;
        };
        if (!ok) return;

        gsap.from(lines, {
          yPercent: 110 * amplitude(desktop),
          opacity: 0,
          duration: 1.15,
          delay,
          stagger,
          ease: EASE.out,
          ...(intro
            ? {}
            : { scrollTrigger: { trigger: root, start: START.enter, once: true } }),
        });
      });
    },
    [delay, stagger, intro],
  );

  return (
    <Component ref={ref} id={id} className={cn(className)}>
      {children}
    </Component>
  );
}

/** One masked line inside RevealLines. */
export function Line({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("block overflow-hidden pb-[0.08em]", className)}>
      <span data-line className="block">
        {children}
      </span>
      {/* Keeps adjacent lines from concatenating when the heading's text is
          extracted (search engines, copy-paste). Collapses visually. */}{" "}
    </span>
  );
}
