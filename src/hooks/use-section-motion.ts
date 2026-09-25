"use client";

import type { RefObject } from "react";

import { gsap } from "@/animations/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/use-isomorphic-layout-effect";

type SetupArgs = {
  /** Scoped matchMedia — add conditional timelines to it. */
  mm: gsap.MatchMedia;
  /** The section root; query descendants from here, never document. */
  root: HTMLElement;
};

/**
 * Mounts a section's timelines and tears them down cleanly.
 *
 * matchMedia is the whole point: it is the only GSAP primitive that re-runs
 * and reverts when `prefers-reduced-motion` or the viewport changes, so
 * accessibility and the mobile variant are handled by the same mechanism
 * rather than by a React state read that can go stale.
 */
export function useSectionMotion(
  ref: RefObject<HTMLElement | null>,
  setup: (args: SetupArgs) => void,
  deps: unknown[] = [],
) {
  useIsomorphicLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;

    const mm = gsap.matchMedia(root);
    setup({ mm, root });

    return () => mm.revert();
    // `setup` is intentionally excluded from `deps`: callers pass an inline
    // closure, so including it would re-run on every render and thrash the
    // timelines. Callers list the values their closure actually reads.
  }, deps);
}
