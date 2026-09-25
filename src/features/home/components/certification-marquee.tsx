"use client";

import Image from "next/image";
import { useRef } from "react";

import { gsap } from "@/animations/gsap";
import { EASE, MEDIA } from "@/animations/motion";
import { useSectionMotion } from "@/hooks/use-section-motion";
import { certifications } from "@/features/home/data";
import { cn } from "@/lib/utils";

/** Seconds each logo takes to travel its own width — sets the loop speed. */
const SECONDS_PER_LOGO = 3.2;

/**
 * Glass rail of certification marks that drifts on an infinite loop.
 *
 * The list renders twice and the track slides by exactly half its width, so
 * the seam is invisible. Hover eases the loop to a stop rather than freezing
 * it. Under reduced motion the duplicate is dropped and the rail becomes a
 * plain swipeable row instead.
 */
export function CertificationMarquee({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useSectionMotion(ref, ({ mm, root }) => {
    mm.add(MEDIA.motion, () => {
      const track = root.querySelector<HTMLElement>("[data-marquee-track]");
      if (!track) return;

      const loop = gsap.to(track, {
        xPercent: -50,
        duration: certifications.length * SECONDS_PER_LOGO,
        ease: EASE.drift,
        repeat: -1,
      });

      const onEnter = () => gsap.to(loop, { timeScale: 0, duration: 0.6, ease: EASE.soft });
      const onLeave = () => gsap.to(loop, { timeScale: 1, duration: 0.6, ease: EASE.soft });

      root.addEventListener("pointerenter", onEnter);
      root.addEventListener("pointerleave", onLeave);

      return () => {
        root.removeEventListener("pointerenter", onEnter);
        root.removeEventListener("pointerleave", onLeave);
      };
    });
  });

  return (
    <div
      ref={ref}
      role="region"
      aria-label="Certifications and accreditations"
      className={cn(
        "rounded-[1.75rem] border border-white/70 bg-white/45 shadow-[0_24px_60px_-28px_rgba(13,44,30,0.35)] backdrop-blur-xl",
        className,
      )}
    >
      <div className="scrollbar-none overflow-hidden rounded-[inherit] [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] motion-reduce:overflow-x-auto">
        <div data-marquee-track className="flex w-max will-change-transform">
          <LogoGroup />
          <LogoGroup duplicate />
        </div>
      </div>
    </div>
  );
}

function LogoGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      aria-hidden={duplicate || undefined}
      className={cn("flex shrink-0 items-center py-4 sm:py-5", duplicate && "motion-reduce:hidden")}
    >
      {certifications.map((logo) => (
        <li
          key={logo.name}
          className="flex h-12 w-28 shrink-0 items-center justify-center border-r border-forest/10 px-4 sm:h-14 sm:w-32 lg:h-16 lg:w-36 lg:px-5"
        >
          <Image
            src={logo.image}
            alt={duplicate ? "" : logo.name}
            width={logo.width}
            height={logo.height}
            sizes="(min-width: 1024px) 144px, 128px"
            className="h-full w-full object-contain"
          />
        </li>
      ))}
    </ul>
  );
}
