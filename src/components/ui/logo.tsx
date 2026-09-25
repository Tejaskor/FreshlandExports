import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

/**
 * Wordmark with a leaf monogram. Inline SVG so it inherits colour and ships
 * no extra request.
 */
export function Logo({
  className,
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "inverse";
}) {
  return (
    <span className={cn("inline-flex items-baseline gap-1.5", className)}>
      <svg
        viewBox="0 0 24 24"
        className={cn(
          "size-6 shrink-0 self-center",
          tone === "inverse" ? "text-sage-200" : "text-leaf-bright",
        )}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M12 22C12 13 16 5 21 2c1 8-2 17-9 20Z" />
        <path d="M12 22C7 19 3 13 3 7c5 1 8 5 9 10" />
      </svg>
      <span className="font-display text-[1.5rem] leading-none tracking-[-0.02em]">
        <span className={tone === "inverse" ? "text-white" : "text-leaf"}>
          {siteConfig.shortName}
        </span>
        <span className={tone === "inverse" ? "text-sage-200" : "text-ember"}>
          {siteConfig.wordmarkAccent}
        </span>
      </span>
    </span>
  );
}
