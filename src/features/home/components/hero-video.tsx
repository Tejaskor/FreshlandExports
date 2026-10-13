"use client";

import Image from "next/image";
import { useCallback, useSyncExternalStore } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

/** The hero film, served as-is from public/ (one WebM file). */
const video = "/images/home/Bg%20video/freshland-exports-hero-background.webm";
/** The film's first frame: shown before it plays, if it can't, or with reduced motion. */
const poster = "/images/home/hero/freshland-exports-hero-poster.webp";

/**
 * The film (24 fps, 10 s) is a montage of about ten one-second shots. At 0.5x
 * each shot lasts about 2 s and the loop about 20 s. This is the only place
 * the rate is set; it is re-applied on metadata load and on every play.
 */
const playbackRate = 0.5;

const noop = () => () => {};
/** False during the server render and hydration, true once running in the browser. */
const useHydrated = () =>
  useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );

/**
 * Homepage hero background: the poster frame first, then the looping,
 * muted film over it. The poster is the optimised image layer underneath,
 * so the video carries no poster of its own (that fetched the raw file a
 * second time). The film is added only after hydration and never when
 * the visitor prefers reduced motion, so the server and client markup match
 * and a reduced-motion visitor keeps the still frame. If the film fails to
 * load, the poster stays in place.
 */
export function HeroVideo() {
  const hydrated = useHydrated();
  const reducedMotion = useReducedMotion();
  const calm = useCallback((element: HTMLVideoElement | null) => {
    if (!element) return;
    element.defaultPlaybackRate = playbackRate;
    element.playbackRate = playbackRate;
  }, []);
  // Decoding stops once the hero scrolls out of view and resumes on return.
  const pauseOffscreen = useCallback((element: HTMLVideoElement) => {
    calm(element);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) element.pause();
      else if (element.paused) element.play().catch(() => {});
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [calm]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src={poster}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {hydrated && !reducedMotion && (
        <video
          ref={pauseOffscreen}
          onLoadedMetadata={(event) => calm(event.currentTarget)}
          onPlay={(event) => calm(event.currentTarget)}
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src={video} type="video/webm" />
        </video>
      )}
    </div>
  );
}
