"use client";

import { useRef } from "react";
import type { ElementType, ReactNode } from "react";

import { gsap } from "@/animations/gsap";
import { useSectionMotion } from "@/hooks/use-section-motion";
import { DURATION, EASE, MEDIA, START, amplitude } from "@/animations/motion";
import { cn } from "@/lib/utils";

/**
 * Entrance vocabularies. Sections pick the one that matches their motion
 * language instead of every block sharing one fade — `settle` drops in from
 * above, `sweep-*` arrives laterally, `bloom` scales up from the centre.
 */
export type RevealVariant =
  | "rise"
  | "settle"
  | "sweep-left"
  | "sweep-right"
  | "bloom"
  | "unveil";

const vocabulary: Record<RevealVariant, (a: number) => gsap.TweenVars> = {
  rise: (a) => ({ opacity: 0, y: 32 * a }),
  settle: (a) => ({ opacity: 0, y: -28 * a }),
  "sweep-left": (a) => ({ opacity: 0, x: -56 * a }),
  "sweep-right": (a) => ({ opacity: 0, x: 56 * a }),
  bloom: (a) => ({ opacity: 0, scale: 1 - 0.1 * a }),
  unveil: (a) => ({ opacity: 0, yPercent: 14 * a, scale: 1 - 0.045 * a }),
};

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  variant?: RevealVariant;
  /** Seconds to wait once the element enters the viewport. */
  delay?: number;
  /** Stagger direct children instead of animating the wrapper as one block. */
  stagger?: number;
  /** Fires later, for elements that should feel like they arrive last. */
  late?: boolean;
};

/**
 * Scroll entrance. Content renders in its final state and is only hidden once
 * GSAP takes over, so it stays readable without JS and under reduced motion.
 */
export function Reveal({
  children,
  as,
  className,
  variant = "rise",
  delay = 0,
  stagger,
  late = false,
}: RevealProps) {
  const Component = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useSectionMotion(
    ref,
    ({ mm, root }) => {
      mm.add(
        { ok: MEDIA.motion, desktop: MEDIA.desktop },
        (context) => {
          const { ok, desktop } = context.conditions as {
            ok: boolean;
            desktop: boolean;
          };
          if (!ok) return;

          const targets = stagger !== undefined ? Array.from(root.children) : root;

          gsap.from(targets, {
            ...vocabulary[variant](amplitude(desktop)),
            duration: DURATION.base,
            delay,
            stagger,
            ease: EASE.out,
            scrollTrigger: {
              trigger: root,
              start: late ? START.late : START.enter,
              once: true,
            },
          });
        },
      );
    },
    [variant, delay, stagger, late],
  );

  return (
    <Component ref={ref} className={cn(className)}>
      {children}
    </Component>
  );
}
