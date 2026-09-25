import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type EyebrowProps = ComponentPropsWithoutRef<"p"> & {
  tone?: "default" | "inverse";
};

/** Monospaced section marker — the connective tissue of the layout system. */
export function Eyebrow({ tone = "default", className, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "type-label",
        tone === "inverse" ? "text-white/75" : "text-eyebrow",
        className,
      )}
      {...props}
    />
  );
}
