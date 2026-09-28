"use client";

import { useRef } from "react";
import type { ReactNode } from "react";

import { gsap } from "@/animations/gsap";
import { useSectionMotion } from "@/hooks/use-section-motion";
import { MEDIA, START } from "@/animations/motion";
import { cn } from "@/lib/utils";

const hidden = {
  left: "inset(0% 100% 0% 0%)",
  up: "inset(100% 0% 0% 0%)",
} as const;

/**
 * Wipes a block into view behind a moving edge — a curtain rather than a
 * fade, for wide photographs that should feel unveiled.
 *
 * clip-path never affects layout, so nothing around the block shifts. The
 * inline clip is cleared once the wipe lands, handing the shape back to the
 * element's own rounded corners.
 */
export function ClipReveal({
  children,
  className,
  /** Edge the reveal travels from. */
  from = "left",
  delay = 0,
  duration = 1.4,
}: {
  children: ReactNode;
  className?: string;
  from?: keyof typeof hidden;
  delay?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useSectionMotion(
    ref,
    ({ mm, root }) => {
      mm.add(MEDIA.motion, () => {
        gsap.fromTo(
          root,
          { clipPath: hidden[from] },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration,
            delay,
            ease: "power3.inOut",
            clearProps: "clipPath",
            scrollTrigger: { trigger: root, start: START.enter, once: true },
          },
        );
      });
    },
    [from, delay, duration],
  );

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
