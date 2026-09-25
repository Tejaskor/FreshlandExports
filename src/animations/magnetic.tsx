"use client";

import { useRef } from "react";
import type { ReactNode } from "react";

import { gsap } from "@/animations/gsap";
import { useSectionMotion } from "@/hooks/use-section-motion";
import { MEDIA } from "@/animations/motion";
import { cn } from "@/lib/utils";

/**
 * Subtle magnetic pull toward the cursor, used on primary CTAs.
 *
 * Fine-pointer only, so touch devices never inherit a transform they cannot
 * clear, and skipped entirely under reduced motion.
 */
export function Magnetic({
  children,
  className,
  strength = 0.28,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useSectionMotion(
    ref,
    ({ mm, root }) => {
      mm.add({ ok: MEDIA.motion, pointer: MEDIA.pointer }, (context) => {
        const { ok, pointer } = context.conditions as {
          ok: boolean;
          pointer: boolean;
        };
        if (!ok || !pointer) return;

        const quickX = gsap.quickTo(root, "x", { duration: 0.5, ease: "power3.out" });
        const quickY = gsap.quickTo(root, "y", { duration: 0.5, ease: "power3.out" });

        const onMove = (event: PointerEvent) => {
          const b = root.getBoundingClientRect();
          quickX((event.clientX - (b.left + b.width / 2)) * strength);
          quickY((event.clientY - (b.top + b.height / 2)) * strength);
        };

        const onLeave = () => {
          quickX(0);
          quickY(0);
        };

        root.addEventListener("pointermove", onMove);
        root.addEventListener("pointerleave", onLeave);

        return () => {
          root.removeEventListener("pointermove", onMove);
          root.removeEventListener("pointerleave", onLeave);
          gsap.set(root, { x: 0, y: 0 });
        };
      });
    },
    [strength],
  );

  return (
    <span ref={ref} className={cn("inline-block will-change-transform", className)}>
      {children}
    </span>
  );
}
