"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

const getSnapshot = () => window.matchMedia(QUERY).matches;

/** The server can't know the preference; assume motion is allowed, then correct. */
const getServerSnapshot = () => false;

/** Reactive `prefers-reduced-motion`. Every animation must consult this. */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
