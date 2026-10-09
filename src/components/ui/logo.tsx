import Image from "next/image";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Brand lock-up: the official globe-and-leaf emblem beside the wordmark —
 * "Freshland" in leaf green, "Exports" in rust.
 *
 * The emblem is a trimmed, transparent PNG generated from
 * public/FreshLand-Exports-Logo.svg (that file wraps a 200 KB embedded
 * bitmap); its 415×391 proportions are preserved at every size.
 */
export function Logo({
  className,
  priority = false,
  size = "md",
}: {
  className?: string;
  priority?: boolean;
  /** "lg" for the footer's brand column; "md" everywhere else. */
  size?: "md" | "lg";
}) {
  const large = size === "lg";
  return (
    <span className={cn("inline-flex items-center", large ? "gap-3.5" : "gap-2.5", className)}>
      <Image
        src="/images/shared/logos/freshland-mark.png"
        alt=""
        width={415}
        height={391}
        priority={priority}
        sizes={large ? "64px" : "48px"}
        className={cn("w-auto shrink-0", large ? "h-11 sm:h-14" : "h-9 sm:h-10")}
      />
      <span
        className={cn(
          "font-display leading-none tracking-[-0.02em]",
          large ? "text-[1.625rem] sm:text-[2rem]" : "text-[1.375rem] sm:text-[1.5rem]",
        )}
      >
        <span className="text-leaf">{siteConfig.shortName}</span>
        <span className="text-rust">{siteConfig.wordmarkAccent}</span>
      </span>
    </span>
  );
}
