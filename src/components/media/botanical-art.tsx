import { cn } from "@/lib/utils";

export type ArtVariant =
  | "facility"
  | "leaf"
  | "powder"
  | "dropper"
  | "capsule"
  | "jar"
  | "field"
  | "turmeric"
  | "ginger"
  | "moringa"
  | "ashwagandha";

/**
 * Generated stand-in artwork for every photographic slot on the page.
 *
 * Real photography is dropped in through `Figure`'s `src` prop; until then
 * this keeps composition, aspect ratios and colour weight truthful so the
 * layout never shifts when the images land. Pure SVG — no network request,
 * no layout thrash, renders on the server.
 */

type Palette = { from: string; to: string; motif: string; accent: string };

const palettes: Record<ArtVariant, Palette> = {
  facility: { from: "#dbe9f2", to: "#b7d3b4", motif: "#3d7c4a", accent: "#14452f" },
  leaf: { from: "#e6eee0", to: "#b2c8a6", motif: "#3d7c4a", accent: "#14452f" },
  powder: { from: "#f6e6c8", to: "#e0a63f", motif: "#b7761b", accent: "#8a5510" },
  dropper: { from: "#e9f1e4", to: "#bdd3b2", motif: "#4d8a55", accent: "#14452f" },
  capsule: { from: "#eef2e7", to: "#c8d9ba", motif: "#7d9a5c", accent: "#4f6b38" },
  jar: { from: "#e4efdd", to: "#a9c69c", motif: "#3d7c4a", accent: "#14452f" },
  field: { from: "#c9dcc2", to: "#57804f", motif: "#2f5c37", accent: "#14452f" },
  turmeric: { from: "#fbe9c4", to: "#e8a532", motif: "#c17a13", accent: "#8a5510" },
  ginger: { from: "#f3ead6", to: "#cfae7c", motif: "#a07c46", accent: "#6d5127" },
  moringa: { from: "#e8f1dc", to: "#8fb85f", motif: "#4e7c34", accent: "#2f5220" },
  ashwagandha: { from: "#f0e6d6", to: "#c3a37a", motif: "#95744a", accent: "#634c2e" },
};

/** Each motif is drawn inside a 0 0 400 300 viewBox. */
function Motif({ variant, palette }: { variant: ArtVariant; palette: Palette }) {
  const { motif, accent } = palette;

  switch (variant) {
    case "facility":
      return (
        <g>
          <rect x="188" y="96" width="150" height="128" rx="6" fill={accent} opacity="0.85" />
          <rect x="200" y="112" width="126" height="10" rx="5" fill="#ffffff" opacity="0.5" />
          <rect x="200" y="134" width="126" height="10" rx="5" fill="#ffffff" opacity="0.38" />
          <rect x="200" y="156" width="126" height="10" rx="5" fill="#ffffff" opacity="0.26" />
          <path d="M0 224c70-26 132-26 200 0s130 32 200 12v64H0Z" fill={motif} opacity="0.9" />
          <path d="M34 232c-18-34-6-72 26-92 10 40 2 74-26 92Z" fill={accent} opacity="0.75" />
          <path d="M360 214c22-28 16-64-10-84-12 34-8 64 10 84Z" fill={accent} opacity="0.6" />
        </g>
      );
    case "leaf":
      return (
        <g>
          <path d="M200 40c66 0 118 54 118 120 0 58-48 102-118 102S82 218 82 160C82 94 134 40 200 40Z" fill={motif} opacity="0.92" />
          <path d="M200 52v206" stroke={accent} strokeWidth="4" strokeLinecap="round" opacity="0.55" />
          {[88, 122, 156, 190].map((y) => (
            <g key={y} opacity="0.45">
              <path d={`M200 ${y} 142 ${y - 26}`} stroke={accent} strokeWidth="3" strokeLinecap="round" />
              <path d={`M200 ${y} 258 ${y - 26}`} stroke={accent} strokeWidth="3" strokeLinecap="round" />
            </g>
          ))}
        </g>
      );
    case "powder":
    case "turmeric":
    case "moringa":
      return (
        <g>
          <path d="M108 168h184c0 54-41 88-92 88s-92-34-92-88Z" fill={accent} opacity="0.7" />
          <path d="M126 168c14-40 40-62 74-62s60 22 74 62Z" fill={motif} />
          <ellipse cx="200" cy="168" rx="92" ry="16" fill={motif} opacity="0.9" />
          <path d="M244 104c26-30 58-40 86-30-14 30-44 46-86 30Z" fill="#3d7c4a" opacity="0.8" />
          <path d="M244 104c-6-34 8-62 34-74 10 30 0 60-34 74Z" fill="#4e9a57" opacity="0.7" />
        </g>
      );
    case "dropper":
      return (
        <g>
          <rect x="186" y="34" width="28" height="112" rx="14" fill={accent} opacity="0.8" />
          <rect x="192" y="52" width="16" height="74" rx="8" fill="#ffffff" opacity="0.45" />
          <path d="M200 156c10 14 18 25 18 34a18 18 0 1 1-36 0c0-9 8-20 18-34Z" fill={motif} />
          <path d="M96 250c-18-52 4-102 52-120 10 58-14 102-52 120Z" fill={motif} opacity="0.85" />
          <path d="M304 250c18-52-4-102-52-120-10 58 14 102 52 120Z" fill={accent} opacity="0.55" />
        </g>
      );
    case "capsule":
      return (
        <g>
          {[
            { x: 96, y: 150, r: -24 },
            { x: 150, y: 196, r: 14 },
            { x: 214, y: 168, r: -8 },
          ].map((c) => (
            <g key={`${c.x}-${c.y}`} transform={`rotate(${c.r} ${c.x + 44} ${c.y + 16})`}>
              <rect x={c.x} y={c.y} width="88" height="32" rx="16" fill={accent} opacity="0.5" />
              <path d={`M${c.x} ${c.y + 16}a16 16 0 0 1 16-16h28v32h-28a16 16 0 0 1-16-16Z`} fill={motif} />
            </g>
          ))}
          <ellipse cx="300" cy="184" rx="64" ry="48" fill={motif} opacity="0.85" />
          <ellipse cx="300" cy="166" rx="52" ry="30" fill="#5f8f45" />
        </g>
      );
    case "jar":
      return (
        <g>
          <rect x="138" y="150" width="124" height="94" rx="14" fill={accent} opacity="0.35" />
          <rect x="130" y="136" width="140" height="22" rx="11" fill={accent} opacity="0.55" />
          <path d="M150 196h100v34a14 14 0 0 1-14 14h-72a14 14 0 0 1-14-14Z" fill={motif} opacity="0.6" />
          <path d="M116 150c-42-6-76-40-80-84 46-4 82 30 80 84Z" fill={motif} />
          <path d="M116 150c-6-46 20-88 62-100 12 48-14 90-62 100Z" fill="#4e9a57" opacity="0.9" />
          <path d="M284 140c40-10 66-46 66-88-44 2-76 38-66 88Z" fill={motif} opacity="0.75" />
        </g>
      );
    case "field":
      return (
        <g>
          <path d="M0 118c64-26 132-38 200-38s136 12 200 38v40H0Z" fill={accent} opacity="0.35" />
          {Array.from({ length: 9 }, (_, i) => 150 + i * 18).map((y, i) => (
            <path
              key={y}
              d={`M${-40 + i * 6} ${y}Q200 ${y - 16} ${440 - i * 6} ${y}`}
              stroke={motif}
              strokeWidth={4 + i * 0.6}
              fill="none"
              opacity={0.35 + i * 0.06}
            />
          ))}
          <path d="M0 96c46-34 92-50 138-48-30 30-76 46-138 48Z" fill={accent} opacity="0.5" />
          <path d="M400 92c-44-32-88-48-132-46 28 28 72 44 132 46Z" fill={accent} opacity="0.4" />
        </g>
      );
    case "ginger":
    case "ashwagandha":
      return (
        <g>
          {[
            { x: 84, y: 150, w: 150, h: 34, r: -18 },
            { x: 120, y: 190, w: 176, h: 30, r: 8 },
            { x: 150, y: 128, w: 132, h: 26, r: 22 },
          ].map((s) => (
            <rect
              key={`${s.x}-${s.y}`}
              x={s.x}
              y={s.y}
              width={s.w}
              height={s.h}
              rx={s.h / 2}
              fill={motif}
              opacity="0.9"
              transform={`rotate(${s.r} ${s.x + s.w / 2} ${s.y + s.h / 2})`}
            />
          ))}
          <ellipse cx="200" cy="240" rx="104" ry="20" fill={accent} opacity="0.35" />
          <path d="M268 112c22-26 52-36 78-28-13 27-40 41-78 28Z" fill="#4e9a57" opacity="0.75" />
        </g>
      );
  }
}

export function BotanicalArt({
  variant,
  label,
  className,
}: {
  variant: ArtVariant;
  /** Announced to assistive tech; describes the intended photograph. */
  label: string;
  className?: string;
}) {
  const palette = palettes[variant];
  const id = `art-${variant}`;

  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={label}
      className={cn("h-full w-full", className)}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0%" stopColor={palette.from} />
          <stop offset="100%" stopColor={palette.to} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${id})`} />
      <Motif variant={variant} palette={palette} />
    </svg>
  );
}
