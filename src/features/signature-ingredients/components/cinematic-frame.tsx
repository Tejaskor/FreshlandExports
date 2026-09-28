"use client";

import { useRef } from "react";
import type { ReactNode } from "react";

import { gsap } from "@/animations/gsap";
import { useSectionMotion } from "@/hooks/use-section-motion";
import { MEDIA, amplitude } from "@/animations/motion";

/**
 * Page-load reveal for the hero stage: the frame opens outward from a smaller
 * rounded window while the photograph inside ([data-frame-zoom]) settles from
 * a push-in. Clip-path and transform only, so the layout is final at first
 * paint; under reduced motion the frame simply renders open.
 */
export function CinematicFrame({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useSectionMotion(ref, ({ mm, root }) => {
    mm.add({ ok: MEDIA.motion, desktop: MEDIA.desktop }, (context) => {
      const { ok, desktop } = context.conditions as { ok: boolean; desktop: boolean };
      if (!ok) return;

      const a = amplitude(desktop);
      const inset = `${10 * a}% ${8 * a}% ${10 * a}% ${8 * a}%`;

      gsap
        .timeline()
        .fromTo(
          root,
          { clipPath: `inset(${inset} round 2.5rem)` },
          {
            clipPath: "inset(0% 0% 0% 0% round 1.75rem)",
            duration: 1.6,
            ease: "power4.inOut",
            clearProps: "clipPath",
          },
        )
        .from(
          root.querySelector("[data-frame-zoom]"),
          { scale: 1 + 0.2 * a, duration: 2.2, ease: "power3.out" },
          0,
        );
    });
  });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
