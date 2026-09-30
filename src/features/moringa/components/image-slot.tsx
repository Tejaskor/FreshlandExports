import { existsSync } from "node:fs";
import path from "node:path";

import Image from "next/image";

import { MoringaSprig } from "@/features/moringa/components/moringa-sprig";
import { type MoringaImage, type MoringaImageKey, moringaImages } from "@/features/moringa/images";
import { cn } from "@/lib/utils";

type Tone = "dark" | "light" | "sage" | "warm" | "golden" | "product" | "productDark";

const tones: Record<Tone, { ground: string; sprig: string; text: string; rule: string }> = {
  dark: {
    ground:
      "bg-forest bg-[radial-gradient(120%_90%_at_70%_20%,rgb(90_161_95/0.45)_0%,transparent_60%),radial-gradient(90%_70%_at_10%_100%,rgb(13_44_30/0.9)_0%,transparent_70%)]",
    sprig: "text-white/[0.09]",
    text: "text-white/75",
    rule: "border-white/20",
  },
  light: {
    ground:
      "bg-cream-warm bg-[radial-gradient(110%_90%_at_75%_15%,var(--color-sage-100)_0%,transparent_65%),radial-gradient(80%_60%_at_0%_100%,var(--color-sage-200)_0%,transparent_70%)]",
    sprig: "text-leaf/[0.14]",
    text: "text-forest/70",
    rule: "border-forest/15",
  },
  sage: {
    ground:
      "bg-sage-100 bg-[radial-gradient(100%_80%_at_30%_20%,var(--color-sage-50)_0%,transparent_60%),radial-gradient(90%_70%_at_100%_100%,var(--color-sage-300)_0%,transparent_70%)]",
    sprig: "text-forest/[0.12]",
    text: "text-forest/70",
    rule: "border-forest/15",
  },
  /** Onion page: warm cream with a faint onion-skin blush. */
  warm: {
    ground:
      "bg-cream-warm bg-[radial-gradient(110%_90%_at_70%_20%,rgb(150_63_23/0.10)_0%,transparent_60%),radial-gradient(90%_70%_at_0%_100%,var(--color-sage-100)_0%,transparent_70%)]",
    sprig: "text-rust/[0.12]",
    text: "text-forest/70",
    rule: "border-forest/15",
  },
  /** Turmeric page: pale gold, never saturated orange. */
  golden: {
    ground:
      "bg-[#f7eedb] bg-[radial-gradient(110%_90%_at_70%_20%,rgb(214_166_72/0.35)_0%,transparent_62%),radial-gradient(90%_70%_at_0%_100%,rgb(150_63_23/0.10)_0%,transparent_70%)]",
    sprig: "text-rust/[0.14]",
    text: "text-forest/75",
    rule: "border-forest/15",
  },
  /** Agricultural landing pages: follows the page's --p-tint / --p-accent. */
  product: {
    ground:
      "bg-[var(--p-tint)] bg-[radial-gradient(110%_90%_at_72%_18%,color-mix(in_srgb,var(--p-accent)_22%,transparent)_0%,transparent_62%),radial-gradient(90%_70%_at_0%_100%,color-mix(in_srgb,var(--p-deep)_10%,transparent)_0%,transparent_70%)]",
    sprig: "text-[var(--p-deep)]/[0.12]",
    text: "text-[var(--p-deep)]/75",
    rule: "border-[var(--p-deep)]/15",
  },
  /** The same, for dark grounds (--p-deep). */
  productDark: {
    ground:
      "bg-[var(--p-deep)] bg-[radial-gradient(110%_90%_at_70%_20%,color-mix(in_srgb,var(--p-accent)_45%,transparent)_0%,transparent_62%)]",
    sprig: "text-white/[0.09]",
    text: "text-white/75",
    rule: "border-white/20",
  },
};

/** Either a Moringa slot by key, or any product page's own slot. */
type SlotSource = { image: MoringaImageKey; slot?: never } | { slot: MoringaImage; image?: never };

/**
 * One photographic slot on a product page — the Moringa page passes a key
 * from ../images.ts, other product pages pass their own slot object.
 *
 * Until a file exists at the slot's path (each images.ts also holds the
 * slot's generation prompt) it renders a clearly-labelled placeholder
 * that already carries the section's colour and shape; once the file is
 * dropped in, the real photograph takes over at build time.
 *
 * Server-only: it checks the filesystem.
 */
export function ImageSlot({
  image,
  slot: ownSlot,
  className,
  mediaClassName,
  tone = "light",
  sizes = "100vw",
  priority = false,
  compact = false,
  bare = false,
  framed = true,
}: SlotSource & {
  className?: string;
  /** Applied to the photograph or placeholder art — hover scales live here. */
  mediaClassName?: string;
  tone?: Tone;
  sizes?: string;
  priority?: boolean;
  /** Small slots show only the caption, not the file name. */
  compact?: boolean;
  /** Thumbnails too small for a caption show only the image icon. */
  bare?: boolean;
  /**
   * Dashed inner frame on the placeholder. It follows the slot's own radius,
   * so turn it off where an ancestor clips to an organic mask instead.
   */
  framed?: boolean;
}) {
  const slot = ownSlot ?? moringaImages[image as MoringaImageKey];
  const onDisk = existsSync(path.join(process.cwd(), "public", slot.file));
  const palette = tones[tone];

  return (
    <div
      className={cn("relative overflow-hidden rounded-[inherit]", className)}
      data-image-slot={slot.file}
    >
      {onDisk ? (
        <Image
          src={slot.file}
          alt={slot.alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", mediaClassName)}
        />
      ) : (
        <div
          role="img"
          aria-label={slot.alt}
          className={cn("absolute inset-0 rounded-[inherit]", palette.ground, mediaClassName)}
        >
          <MoringaSprig
            className={cn(
              "absolute -right-[6%] -bottom-[12%] h-[92%] w-auto rotate-[-8deg]",
              palette.sprig,
            )}
          />
          {framed && (
            <div
              className={cn(
                "absolute rounded-[inherit] border border-dashed",
                compact ? "inset-2" : "inset-3 sm:inset-4",
                palette.rule,
              )}
            />
          )}
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center",
              palette.text,
            )}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={compact ? "size-5" : "size-7"}
            >
              <rect x="3" y="5" width="18" height="14" rx="2.5" />
              <circle cx="9" cy="10" r="1.6" />
              <path d="m21 15-4.5-4.5L8 19" />
            </svg>
            {!bare && (
              <span
                className={cn(
                  "type-label max-w-[18rem]",
                  // Compact captions only once the tile is large enough to hold them.
                  compact ? "hidden text-[0.625rem] sm:block" : "text-[0.6875rem]",
                )}
              >
                {slot.label}
              </span>
            )}
            {!compact && !bare && (
              <span className="hidden max-w-[20rem] truncate text-[0.6875rem] opacity-70 sm:block">
                {slot.file.split("/").pop()}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
