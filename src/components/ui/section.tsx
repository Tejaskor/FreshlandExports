import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  /** Renders without vertical rhythm — for full-bleed scenes. */
  flush?: boolean;
};

/**
 * Semantic section wrapper carrying the shared vertical rhythm. Pair with an
 * `aria-labelledby` pointing at the section heading.
 */
export function Section({ flush = false, className, ...props }: SectionProps) {
  return (
    <section
      className={cn("relative", !flush && "py-section", className)}
      {...props}
    />
  );
}
