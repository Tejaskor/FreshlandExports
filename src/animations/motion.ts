/**
 * Shared motion vocabulary.
 *
 * Every timeline on the site draws its easing, duration and trigger points
 * from here, which is what makes six separately-authored sections read as one
 * continuous journey rather than six animated components.
 */

/** Media queries handed to gsap.matchMedia(). */
export const MEDIA = {
  /** Gate every timeline on this — GSAP reverts automatically if it flips. */
  motion: "(prefers-reduced-motion: no-preference)",
  desktop: "(min-width: 1024px)",
  pointer: "(hover: hover) and (pointer: fine)",
} as const;

/**
 * Two eases only. `out` carries entrances, `drift` is linear and belongs to
 * anything scrubbed — scrubbed tweens must not ease, or they fight the scroll.
 */
export const EASE = {
  out: "power3.out",
  soft: "power2.out",
  drift: "none",
} as const;

export const DURATION = {
  fast: 0.65,
  base: 0.95,
  slow: 1.25,
} as const;

/** Entrances fire a little before the element is fully on screen. */
export const START = {
  enter: "top 86%",
  late: "top 94%",
} as const;

/** Full-height scrub range for layered parallax. */
export const SCRUB_RANGE = {
  start: "top bottom",
  end: "bottom top",
} as const;

/**
 * Mobile runs the same choreography at reduced amplitude rather than a
 * different one, so the language stays recognisable on a phone.
 */
export const AMPLITUDE = { desktop: 1, mobile: 0.55 } as const;

export function amplitude(isDesktop: boolean) {
  return isDesktop ? AMPLITUDE.desktop : AMPLITUDE.mobile;
}
