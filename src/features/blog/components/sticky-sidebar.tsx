"use client";

import { type ReactNode, useEffect, useRef } from "react";

/** The fixed header is 72px once scrolled; the sidebar sits 24px below it. */
const HEADER_OFFSET = 96;
/** Gap kept under a sidebar taller than the window. */
const BOTTOM_GAP = 24;

/**
 * Keeps the blog sidebar (contents and brochure card together) in view while
 * the article scrolls. It sticks below the header when it fits in the window.
 * When it is taller, its offset turns negative, so it sticks with its lower
 * edge just above the bottom of the window instead of being cut off. The
 * offset is re-measured when the sidebar or window resizes (no scroll
 * listener), and the sidebar stops at the end of the article, since its
 * column spans the article's row.
 */
export function StickySidebar({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const update = () => {
      const top = Math.min(HEADER_OFFSET, window.innerHeight - element.offsetHeight - BOTTOM_GAP);
      element.style.top = `${top}px`;
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  // top-24 (96px) is the offset before the first measurement.
  return (
    <div ref={ref} className="sticky top-24">
      {children}
    </div>
  );
}
