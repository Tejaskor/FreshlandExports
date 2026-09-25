"use client";

import { useRef } from "react";
import type { ReactNode } from "react";

import { gsap } from "@/animations/gsap";
import { useSectionMotion } from "@/hooks/use-section-motion";
import { MEDIA } from "@/animations/motion";
import { cn } from "@/lib/utils";

/**
 * Pointer-driven depth for cards. Deliberately shallow — a few degrees reads
 * as material thickness; more reads as a gimmick.
 *
 * Fine-pointer only, so touch devices never inherit a transform they cannot
 * clear, and quickTo keeps it off React's render path entirely.
 */
export function Tilt({
  children,
  className,
  max = 4,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useSectionMotion(ref, ({ mm, root }) => {
    mm.add({ ok: MEDIA.motion, pointer: MEDIA.pointer }, (context) => {
      const { ok, pointer } = context.conditions as {
        ok: boolean;
        pointer: boolean;
      };
      if (!ok || !pointer) return;

      const inner = root.firstElementChild as HTMLElement | null;
      if (!inner) return;

      const rotX = gsap.quickTo(inner, "rotationX", { duration: 0.6, ease: "power3.out" });
      const rotY = gsap.quickTo(inner, "rotationY", { duration: 0.6, ease: "power3.out" });

      const onMove = (event: PointerEvent) => {
        const b = root.getBoundingClientRect();
        const px = (event.clientX - b.left) / b.width - 0.5;
        const py = (event.clientY - b.top) / b.height - 0.5;
        rotY(px * max * 2);
        rotX(-py * max * 2);
      };

      const onLeave = () => {
        rotX(0);
        rotY(0);
      };

      root.addEventListener("pointermove", onMove);
      root.addEventListener("pointerleave", onLeave);

      return () => {
        root.removeEventListener("pointermove", onMove);
        root.removeEventListener("pointerleave", onLeave);
        gsap.set(inner, { rotationX: 0, rotationY: 0 });
      };
    });
  });

  return (
    <div ref={ref} className={cn("[perspective:1200px]", className)}>
      <div className="h-full [transform-style:preserve-3d] will-change-transform">
        {children}
      </div>
    </div>
  );
}
