import { cn } from "@/lib/utils";

/**
 * A moringa compound leaf: pairs of small oval leaflets along a curved
 * rachis, ending in a single terminal leaflet. Drawn in currentColor so each
 * section tints it to its ground. Decorative, hidden from assistive tech.
 */

type Point = { x: number; y: number };

const P0 = { x: 36, y: 392 };
const C = { x: 70, y: 150 };
const P1 = { x: 250, y: 34 };

const round = (n: number) => Math.round(n * 10) / 10;

function at(t: number): Point {
  const u = 1 - t;
  return {
    x: u * u * P0.x + 2 * u * t * C.x + t * t * P1.x,
    y: u * u * P0.y + 2 * u * t * C.y + t * t * P1.y,
  };
}

function tangent(t: number): Point {
  const x = 2 * (1 - t) * (C.x - P0.x) + 2 * t * (P1.x - C.x);
  const y = 2 * (1 - t) * (C.y - P0.y) + 2 * t * (P1.y - C.y);
  const length = Math.hypot(x, y);
  return { x: x / length, y: y / length };
}

type Leaflet = { cx: number; cy: number; rx: number; ry: number; angle: number };

/** Computed once at module load — pure geometry, identical on every render. */
const leaflets: Leaflet[] = (() => {
  const result: Leaflet[] = [];
  const pairs = 10;

  for (let i = 0; i < pairs; i++) {
    const t = 0.13 + (i / (pairs - 1)) * 0.78;
    const p = at(t);
    const d = tangent(t);
    const normal = { x: -d.y, y: d.x };
    // Leaflets shrink gently towards the tip.
    const rx = 17 - i * 0.8;
    const ry = 8.5 - i * 0.35;

    for (const side of [1, -1]) {
      const n = { x: normal.x * side, y: normal.y * side };
      // Angled slightly forward along the rachis, as on the real plant.
      const lean = { x: n.x * 0.86 + d.x * 0.5, y: n.y * 0.86 + d.y * 0.5 };
      result.push({
        cx: round(p.x + lean.x * (rx + 3)),
        cy: round(p.y + lean.y * (rx + 3)),
        rx: round(rx),
        ry: round(ry),
        angle: round((Math.atan2(lean.y, lean.x) * 180) / Math.PI),
      });
    }
  }

  // Terminal leaflet.
  const tip = tangent(1);
  result.push({
    cx: round(P1.x + tip.x * 14),
    cy: round(P1.y + tip.y * 14),
    rx: 14,
    ry: 7.5,
    angle: round((Math.atan2(tip.y, tip.x) * 180) / Math.PI),
  });

  return result;
})();

export function MoringaSprig({
  className,
  variant = "solid",
}: {
  className?: string;
  /** `solid` fills the leaflets; `line` draws them as outlines. */
  variant?: "solid" | "line";
}) {
  const solid = variant === "solid";

  return (
    <svg
      viewBox="0 0 290 420"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none", className)}
    >
      <path
        d={`M${P0.x} ${P0.y}Q${C.x} ${C.y} ${P1.x} ${P1.y}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={solid ? 3 : 1.4}
        strokeLinecap="round"
      />
      {leaflets.map((leaf, index) => (
        <ellipse
          key={index}
          cx={leaf.cx}
          cy={leaf.cy}
          rx={leaf.rx}
          ry={leaf.ry}
          transform={`rotate(${leaf.angle} ${leaf.cx} ${leaf.cy})`}
          fill={solid ? "currentColor" : "none"}
          fillOpacity={solid ? 0.85 : undefined}
          stroke="currentColor"
          strokeWidth={solid ? 0 : 1.2}
        />
      ))}
    </svg>
  );
}
