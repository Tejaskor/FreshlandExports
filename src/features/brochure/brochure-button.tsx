"use client";

import type { ReactNode } from "react";

import { useBrochure } from "@/features/brochure/brochure-provider";
import type { BrochureSource } from "@/features/brochure/schema";
import { track } from "@/lib/analytics";

/**
 * Opens the shared brochure popup — a button, never a link to the file.
 * Callers style it to fit where it sits.
 */
export function BrochureButton({
  source,
  className,
  children,
  onClick,
  "aria-label": ariaLabel,
}: {
  source: BrochureSource;
  className?: string;
  children: ReactNode;
  /** Runs before the popup opens, e.g. to close a mobile menu. */
  onClick?: () => void;
  "aria-label"?: string;
}) {
  const { openBrochure } = useBrochure();
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      aria-label={ariaLabel}
      className={className}
      onClick={() => {
        onClick?.();
        track("brochure_cta_click", { source: source.replace("_brochure", "") });
        openBrochure(source);
      }}
    >
      {children}
    </button>
  );
}
