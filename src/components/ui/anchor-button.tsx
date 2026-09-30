"use client";

import type { MouseEvent } from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { useSmoothScroll } from "@/components/providers/smooth-scroll-provider";

/** Clears the fixed header when gliding to an in-page target. */
export const ANCHOR_OFFSET = -110;

/**
 * Button for an in-page `#hash` target. Lenis drives scrolling, so a native
 * hash jump would snap rather than glide; this routes the click through it
 * while keeping a real href for no-JS and middle-click.
 */
export function AnchorButton(props: Extract<ButtonProps, { href: string }>) {
  const { scrollTo } = useSmoothScroll();

  return (
    <Button
      {...props}
      onClick={(event: MouseEvent<HTMLAnchorElement>) => {
        if (!props.href.startsWith("#")) return;
        event.preventDefault();
        scrollTo(props.href, ANCHOR_OFFSET);
      }}
    />
  );
}
