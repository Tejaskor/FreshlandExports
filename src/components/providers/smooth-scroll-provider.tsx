"use client";

import { createContext, useContext, useEffect, useMemo, useRef } from "react";
import type { ReactNode } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

import { gsap, ScrollTrigger } from "@/animations/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type SmoothScrollApi = {
  /** Null before hydration and whenever reduced motion is preferred. */
  getLenis: () => Lenis | null;
  /** Scrolls to a selector, element or offset; falls back to native scroll. */
  scrollTo: (target: string | number | HTMLElement, offset?: number) => void;
  /** Pause scrolling — used by overlays such as the mobile menu. */
  stop: () => void;
  start: () => void;
};

const noop = () => {};

const SmoothScrollContext = createContext<SmoothScrollApi>({
  getLenis: () => null,
  scrollTo: noop,
  stop: noop,
  start: noop,
});

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

/**
 * Owns the single Lenis instance and hands scroll ownership to GSAP's ticker,
 * so Lenis, ScrollTrigger and every scrubbed timeline share one RAF loop.
 *
 * When the user prefers reduced motion no Lenis instance is created at all —
 * the page falls back to native scrolling and ScrollTrigger keeps working.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (reducedMotion) return;

    const instance = new Lenis({
      duration: 1.1,
      // Long, decelerating ease — the signature of the site's motion language.
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
      // Native momentum on touch beats an emulated one.
      syncTouch: false,
    });

    lenisRef.current = instance;

    const onScroll = ({ progress }: Lenis) => {
      ScrollTrigger.update();
      document.documentElement.style.setProperty(
        "--scroll-progress",
        progress.toFixed(4),
      );
    };

    instance.on("scroll", onScroll);

    const tick = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Lenis caches the scroll limit and re-measures only when its content
    // element (<html>) resizes. <html> is `h-full` — pinned to the viewport —
    // so it never does, and the limit went stale whenever the page grew:
    // after a client navigation to a longer route, or late font/image
    // reflow. Scrolling then stopped short of the page's real end. <body>
    // grows with the content, so watch that instead. ScrollTrigger's stored
    // start/end positions drift for the same reason; refresh them once the
    // height settles.
    let lastHeight = document.body.scrollHeight;
    let refreshTimer: ReturnType<typeof setTimeout> | undefined;

    const observer = new ResizeObserver(() => {
      const height = document.body.scrollHeight;
      if (height === lastHeight) return;
      lastHeight = height;

      instance.resize();
      clearTimeout(refreshTimer);
      refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 200);
    });
    observer.observe(document.body);

    return () => {
      observer.disconnect();
      clearTimeout(refreshTimer);
      gsap.ticker.remove(tick);
      gsap.ticker.lagSmoothing(500, 33);
      instance.off("scroll", onScroll);
      instance.destroy();
      lenisRef.current = null;
    };
  }, [reducedMotion]);

  // A client navigation replaces the DOM that Lenis and ScrollTrigger have
  // measured; re-measure both against the new route.
  useEffect(() => {
    const instance = lenisRef.current;
    instance?.resize();
    instance?.scrollTo(0, { immediate: true });
    ScrollTrigger.refresh();
  }, [pathname]);

  const api = useMemo<SmoothScrollApi>(
    () => ({
      getLenis: () => lenisRef.current,
      stop: () => lenisRef.current?.stop(),
      start: () => lenisRef.current?.start(),
      scrollTo: (target, offset = 0) => {
        const instance = lenisRef.current;

        if (instance) {
          instance.scrollTo(target, { offset });
          return;
        }

        if (typeof target === "number") {
          window.scrollTo({ top: target + offset });
          return;
        }

        const element =
          typeof target === "string" ? document.querySelector(target) : target;

        if (element instanceof HTMLElement) {
          window.scrollTo({ top: element.offsetTop + offset });
        }
      },
    }),
    [],
  );

  return (
    <SmoothScrollContext.Provider value={api}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
