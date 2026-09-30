import { cn } from "@/lib/utils";

/**
 * A small radiating sun — the Turmeric page's decorative signature, for the
 * "golden spice". Drawn in currentColor; hidden from assistive tech.
 */
const rays = Array.from({ length: 24 }, (_, i) => {
  const angle = (i / 24) * Math.PI * 2;
  const inner = i % 2 === 0 ? 62 : 68;
  const outer = i % 2 === 0 ? 96 : 84;
  const round = (n: number) => Math.round(n * 10) / 10;
  return {
    x1: round(100 + Math.cos(angle) * inner),
    y1: round(100 + Math.sin(angle) * inner),
    x2: round(100 + Math.cos(angle) * outer),
    y2: round(100 + Math.sin(angle) * outer),
  };
});

export function TurmericSun({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none", className)}
    >
      <circle cx="100" cy="100" r="48" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="36" strokeWidth="0.8" />
      {rays.map((ray, i) => (
        <line key={i} {...ray} strokeWidth={i % 2 === 0 ? 1.6 : 1} />
      ))}
    </svg>
  );
}
