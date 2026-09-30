import { cn } from "@/lib/utils";

/**
 * A sliced onion seen in cross-section: concentric rings, each drifting a
 * little off-centre as real onion layers do. The Onion page's decorative
 * signature. Stroke only, in currentColor; hidden from assistive tech.
 */
const rings = Array.from({ length: 9 }, (_, i) => {
  const r = 28 + i * 22;
  return { r, cx: 200 + i * 1.6, cy: 200 - i * 1.1 };
});

export function OnionRings({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none", className)}
    >
      {rings.map((ring, i) => (
        <circle
          key={ring.r}
          cx={ring.cx}
          cy={ring.cy}
          r={ring.r}
          strokeWidth={i % 3 === 0 ? 1.4 : 0.8}
          opacity={1 - i * 0.07}
        />
      ))}
    </svg>
  );
}
