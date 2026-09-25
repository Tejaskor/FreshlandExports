"use client";

import { useRef } from "react";
import type { ReactNode } from "react";

import { gsap } from "@/animations/gsap";
import { useSectionMotion } from "@/hooks/use-section-motion";
import { EASE, MEDIA, SCRUB_RANGE, amplitude } from "@/animations/motion";
import { cn } from "@/lib/utils";

/**
 * Scrubbed vertical parallax for photographic blocks.
 *
 * The overscan is applied by GSAP rather than inline styles, so the server
 * markup carries no transform and reduced-motion users get an untouched image
 * at its natural scale.
 */
export function Parallax({
  children,
  className,
  /** Total travel as a percentage of the element's own height. */
  amount = 12,
  overscan = 1.18,
  /** Slow drift of scale across the scroll window, for added depth. */
  zoom = 0,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
  overscan?: number;
  zoom?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useSectionMotion(
    ref,
    ({ mm, root }) => {
      const inner = root.firstElementChild;
      if (!inner) return;

      mm.add({ ok: MEDIA.motion, desktop: MEDIA.desktop }, (context) => {
        const { ok, desktop } = context.conditions as {
          ok: boolean;
          desktop: boolean;
        };
        if (!ok) return;

        const a = amplitude(desktop);
        const travel = amount * a;

        gsap.set(inner, { scale: overscan, transformOrigin: "center center" });

        gsap.fromTo(
          inner,
          { yPercent: -travel / 2, scale: overscan + zoom * a },
          {
            yPercent: travel / 2,
            scale: overscan,
            ease: EASE.drift,
            scrollTrigger: {
              trigger: root,
              start: SCRUB_RANGE.start,
              end: SCRUB_RANGE.end,
              scrub: true,
            },
          },
        );
      });
    },
    [amount, overscan, zoom],
  );

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <div className="h-full w-full will-change-transform">{children}</div>
    </div>
  );
}
