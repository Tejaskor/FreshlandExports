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
export function Logo({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/images/shared/logos/freshland-mark.png"
        alt=""
        width={415}
        height={391}
        priority={priority}
        sizes="48px"
        className="h-9 w-auto shrink-0 sm:h-10"
      />
      <span className="font-display text-[1.375rem] leading-none tracking-[-0.02em] sm:text-[1.5rem]">
        <span className="text-leaf">{siteConfig.shortName}</span>
        <span className="text-rust">{siteConfig.wordmarkAccent}</span>
      </span>
    </span>
  );
}
