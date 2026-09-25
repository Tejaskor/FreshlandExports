"use client";

import { useRef } from "react";
import type { ReactNode } from "react";

import { gsap } from "@/animations/gsap";
import { useSectionMotion } from "@/hooks/use-section-motion";
import { EASE, MEDIA, SCRUB_RANGE } from "@/animations/motion";
import { cn } from "@/lib/utils";

/**
 * Generic scrubbed layer — the workhorse behind "this moves independently of
 * that". Give two layers different `from`/`to` ranges over the same scroll
 * window and they separate in depth.
 *
 * Scrubbed tweens are deliberately unease; easing here would lag the scroll.
 */
export function ScrollScrub({
  children,
  className,
  from,
  to,
  start = SCRUB_RANGE.start,
  end = SCRUB_RANGE.end,
  scrub = true,
  desktopOnly = false,
  /** Scrub against an ancestor instead of this wrapper. */
  triggerSelector,
}: {
  children: ReactNode;
  className?: string;
  from: gsap.TweenVars;
  to: gsap.TweenVars;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  desktopOnly?: boolean;
  triggerSelector?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useSectionMotion(
    ref,
    ({ mm, root }) => {
      mm.add({ ok: MEDIA.motion, desktop: MEDIA.desktop }, (context) => {
        const { ok, desktop } = context.conditions as {
          ok: boolean;
          desktop: boolean;
        };
        if (!ok) return;
        if (desktopOnly && !desktop) return;

        const trigger = triggerSelector
          ? (root.closest(triggerSelector) as HTMLElement | null) ?? root
          : root;

        gsap.fromTo(root, from, {
          ...to,
          ease: EASE.drift,
          scrollTrigger: { trigger, start, end, scrub },
        });
      });
    },
    [start, end, scrub, desktopOnly, triggerSelector],
  );

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
