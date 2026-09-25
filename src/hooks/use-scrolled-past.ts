"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/**
 * True once the page is scrolled beyond `threshold` pixels. Read through
 * useSyncExternalStore so the value is correct on the very first client render.
 */
export function useScrolledPast(threshold = 24): boolean {
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY > threshold,
    () => false,
  );
}
