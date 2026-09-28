"use client";

import { useRef } from "react";
import type { CSSProperties } from "react";

import { gsap } from "@/animations/gsap";
import { useSectionMotion } from "@/hooks/use-section-motion";
import { EASE, MEDIA, amplitude } from "@/animations/motion";
import { ScrollScrub } from "@/animations/scroll-scrub";
import { Figure } from "@/components/media/figure";
import type { MediaSlot } from "@/types/media";
import { cn } from "@/lib/utils";

type Arch = { offset: number; media: MediaSlot; position: string; sizes: string };

/** How far each arch drifts up as the hero scrolls away — uneven, for depth. */
const drift = [70, 120, 90, 140];

/**
 * Four tall pill-shaped windows onto the produce. On load each one opens
 * upward from its base behind a rounded clip while the photograph settles
 * from a slight zoom; on scroll they drift apart at different speeds.
 * Clip-path and transforms only — the layout is final from the first paint.
 */
export function FarmArches({ arches, className }: { arches: readonly Arch[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useSectionMotion(ref, ({ mm, root }) => {
    mm.add({ ok: MEDIA.motion, desktop: MEDIA.desktop }, (context) => {
      const { ok, desktop } = context.conditions as { ok: boolean; desktop: boolean };
      if (!ok) return;

      const a = amplitude(desktop);

      gsap
        .timeline({ delay: 0.25 })
        .fromTo(
          root.querySelectorAll("[data-arch]"),
          { clipPath: "inset(100% 0% 0% 0% round 999px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 999px)",
            duration: 1.3,
            stagger: 0.14,
            ease: "power3.inOut",
            clearProps: "clipPath",
          },
        )
        .from(
          root.querySelectorAll("[data-arch-media]"),
          { scale: 1 + 0.25 * a, duration: 1.8, stagger: 0.14, ease: EASE.out },
          0,
        )
        .from(
          root.querySelectorAll("[data-arch-ring]"),
          { opacity: 0, scale: 0.92, duration: 1, stagger: 0.14, ease: EASE.out },
          0.6,
        );
    });
  });

  return (
    <div ref={ref} className={cn("flex items-start gap-3 sm:gap-4 lg:gap-5", className)}>
      {arches.map((arch, index) => (
        <ScrollScrub
          key={arch.media.alt}
          className="min-w-0 flex-1"
          triggerSelector="section"
          start="top top"
          end="bottom top"
          from={{ y: 0 }}
          to={{ y: -drift[index % drift.length] }}
          desktopOnly
        >
          {/* Vertical stagger, halved on small screens. */}
          <div
            style={{ "--offset": `${arch.offset}rem` } as CSSProperties}
            className="group relative mt-[calc(var(--offset)*0.5)] lg:mt-[var(--offset)]"
          >
            <span
              data-arch-ring
              aria-hidden="true"
              className="absolute -inset-1.5 rounded-full border border-white/80 sm:-inset-2"
            />
            <div
              data-arch
              className="relative h-56 overflow-hidden rounded-full shadow-[var(--shadow-figure)] sm:h-72 lg:h-[26rem]"
            >
              <div data-arch-media className="h-full w-full">
                <Figure
                  image={arch.media.image}
                  alt={arch.media.alt}
                  art={arch.media.art}
                  priority={index < 2}
                  loading="eager"
                  // Per-arch: a pill is filled by height, so the rendered
                  // width depends on each photo's own aspect ratio.
                  sizes={arch.sizes}
                  className="h-full w-full"
                  mediaClassName={cn(
                    arch.position,
                    "transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.07]",
                  )}
                />
              </div>
            </div>
          </div>
        </ScrollScrub>
      ))}
    </div>
  );
}
