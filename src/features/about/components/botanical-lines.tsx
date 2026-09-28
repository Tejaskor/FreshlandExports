import { cn } from "@/lib/utils";

/**
 * Fine line-art sprig used as quiet background decoration. Stroke only, in
 * `currentColor`, so each section tints it to suit its ground. Purely
 * decorative — hidden from assistive tech.
 */
export function BotanicalLines({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 420"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none", className)}
    >
      {/* Stem */}
      <path d="M150 412C158 330 168 250 190 170S238 48 262 10" />

      {/* Upper leaf */}
      <path d="M232 70c-44-4-86 18-104 58 44 8 86-14 104-58Z" />
      <path d="M232 70C196 88 160 106 128 128" />

      {/* Right leaf */}
      <path d="M204 148c38-26 84-30 108-6-34 30-82 30-108 6Z" />
      <path d="M204 148c34-2 72-4 108-6" />

      {/* Long lower leaf */}
      <path d="M178 238c-62-22-128 0-162 50 60 22 128 2 162-50Z" />
      <path d="M178 238c-54 14-110 30-162 50" />
      {[60, 96, 132].map((x) => (
        <path key={x} d={`M${x} ${276 - (x - 60) * 0.28}l${14} ${-22}`} />
      ))}

      {/* Small right leaf */}
      <path d="M170 316c30-34 76-44 106-24-26 36-72 44-106 24Z" />
      <path d="M170 316c34-10 70-18 106-24" />
    </svg>
  );
}
