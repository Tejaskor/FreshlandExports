"use client";

import { useRef } from "react";

import { gsap } from "@/animations/gsap";
import { useSectionMotion } from "@/hooks/use-section-motion";
import { EASE, MEDIA, START } from "@/animations/motion";

/**
 * Counts a statistic up on entry.
 *
 * The final value is rendered on the server and the tween writes to
 * `textContent` directly — no React state, no re-renders, and the real figure
 * is in the HTML for search engines and for anyone without JS.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useSectionMotion(
    ref,
    ({ mm, root }) => {
      const match = value.match(/^([\d.,]+)(.*)$/);
      if (!match) return;

      const target = Number(match[1].replace(/,/g, ""));
      const suffix = match[2] ?? "";
      if (!Number.isFinite(target)) return;

      mm.add({ ok: MEDIA.motion }, (context) => {
        if (!(context.conditions as { ok: boolean }).ok) return;

        const counter = { n: 0 };

        gsap.to(counter, {
          n: target,
          duration: 1.6,
          ease: EASE.soft,
          scrollTrigger: { trigger: root, start: START.enter, once: true },
          onUpdate: () => {
            root.textContent = `${Math.round(counter.n)}${suffix}`;
          },
          // Guarantee the exact authored string, separators and all.
          onComplete: () => {
            root.textContent = value;
          },
        });
      });
    },
    [value],
  );

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
