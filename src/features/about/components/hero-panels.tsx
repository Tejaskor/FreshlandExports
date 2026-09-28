"use client";

import { useRef } from "react";

import { gsap } from "@/animations/gsap";
import { useSectionMotion } from "@/hooks/use-section-motion";
import { EASE, MEDIA, amplitude } from "@/animations/motion";
import { Figure } from "@/components/media/figure";
import type { MediaSlot } from "@/types/media";
import { cn } from "@/lib/utils";

type Panel = { weight: number; media: MediaSlot; position: string };

/**
 * The hero's slanted photographic strips. Each strip is a skewed window; the
 * image inside is counter-skewed so the photograph itself stays upright.
 *
 * On load the strips rise and fall into place alternately — a curtain that
 * opens from both edges — while each photograph settles from a slight zoom.
 * Everything is transform-only, so the layout is final from the first paint.
 */
export function HeroPanels({
  panels,
  className,
}: {
  panels: readonly Panel[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useSectionMotion(ref, ({ mm, root }) => {
    mm.add({ ok: MEDIA.motion, desktop: MEDIA.desktop }, (context) => {
      const { ok, desktop } = context.conditions as { ok: boolean; desktop: boolean };
      if (!ok) return;

      const a = amplitude(desktop);
      const curtains = root.querySelectorAll<HTMLElement>("[data-curtain]");
      const media = root.querySelectorAll<HTMLElement>("[data-panel-media]");

      gsap
        .timeline({ delay: 0.15 })
        .from(curtains, {
          yPercent: (index: number) => (index % 2 === 0 ? 101 : -101),
          duration: 1.35,
          stagger: 0.13,
          ease: "power4.out",
        })
        .from(
          media,
          { scale: 1 + 0.22 * a, duration: 1.9, stagger: 0.13, ease: EASE.out },
          0,
        );
    });
  });

  return (
    // Five strips are too narrow on a phone; the last one joins from sm up.
    <div
      ref={ref}
      className={cn("flex gap-2 sm:gap-3 max-sm:[&>*:nth-child(n+5)]:hidden", className)}
    >
      {panels.map((panel, index) => (
        <div
          key={panel.media.alt}
          className="group relative h-full min-w-0 -skew-x-[9deg] overflow-hidden"
          style={{ flex: `${panel.weight} 1 0%` }}
        >
          <div data-curtain className="absolute inset-0">
            {/* Counter-skew, widened so the slanted corners stay covered. */}
            <div className="absolute inset-y-0 -inset-x-24 skew-x-[9deg]">
              <div data-panel-media className="h-full w-full">
                <Figure
                  image={panel.media.image}
                  alt={panel.media.alt}
                  art={panel.media.art}
                  priority={index < 2}
                  loading="eager"
                  quality={90}
                  // The strip is narrow but tall, and object-cover sizes a
                  // 16:9 photo by height: it renders at ~1.78x the strip
                  // height (34rem / 20rem / 16rem), plus 7% for hover zoom.
                  sizes="(min-width: 1024px) 1040px, (min-width: 640px) 610px, 490px"
                  className="h-full w-full bg-forest"
                  mediaClassName={cn(
                    panel.position,
                    "transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.07]",
                  )}
                />
              </div>
            </div>
            {/* Lets the strips sink into the panel rather than sit on it. */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/45 via-transparent to-forest-deep/10 transition-opacity duration-700 group-hover:opacity-60" />
          </div>
        </div>
      ))}
    </div>
  );
}
