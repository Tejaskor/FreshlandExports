import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Height-animated disclosure body. Animates grid rows from 0fr to 1fr, so it
 * needs no measuring, and marks the closed panel `inert` so its links and
 * text are skipped by keyboard and screen readers until it opens.
 */
export function Collapse({
  id,
  open,
  children,
  className,
}: {
  id: string;
  open: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      id={id}
      inert={!open}
      className={cn(
        "grid transition-[grid-template-rows,opacity] duration-500 ease-[var(--ease-out-expo)]",
        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
      )}
    >
      <div className={cn("min-h-0 overflow-hidden", className)}>{children}</div>
    </div>
  );
}
