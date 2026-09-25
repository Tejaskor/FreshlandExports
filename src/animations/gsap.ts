"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Central GSAP entry point. Importing from here guarantees plugins are
 * registered exactly once and that defaults stay consistent across the app.
 * Never import "gsap" directly in a component.
 */
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  gsap.defaults({ ease: "power3.out", duration: 0.9 });

  // Let ScrollTrigger recalculate after fonts settle, which otherwise
  // shifts every measured start/end position.
  if ("fonts" in document) {
    void document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
}

export { gsap, ScrollTrigger };
