import Image from "next/image";
import type { CSSProperties } from "react";

import { BotanicalArt, type ArtVariant } from "@/components/media/botanical-art";
import { cn } from "@/lib/utils";

type FigureProps = {
  /** Real photography. When null, generated botanical art is rendered instead. */
  image: string | null;
  alt: string;
  art: ArtVariant;
  className?: string;
  /** Applied to the image/art itself — the hover scale lives here. */
  mediaClassName?: string;
  /** Inline style for the photograph, e.g. a data-driven object-position. */
  mediaStyle?: CSSProperties;
  priority?: boolean;
  /** Must be listed in `images.qualities` in next.config.ts. */
  quality?: number;
  /** "eager" for above-the-fold images that are not worth a preload. */
  loading?: "eager" | "lazy";
  sizes?: string;
};

/**
 * Every photographic slot on the site goes through this component, so adding
 * real imagery later is a config change rather than a layout change.
 */
export function Figure({
  image,
  alt,
  art,
  className,
  mediaClassName,
  mediaStyle,
  priority = false,
  quality,
  loading,
  sizes = "100vw",
}: FigureProps) {
  return (
    <div className={cn("relative overflow-hidden bg-sage-100", className)}>
      {image ? (
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          quality={quality}
          loading={priority ? undefined : loading}
          sizes={sizes}
          className={cn("object-cover", mediaClassName)}
          style={mediaStyle}
        />
      ) : (
        <BotanicalArt
          variant={art}
          label={alt}
          className={cn("absolute inset-0 object-cover", mediaClassName)}
        />
      )}
    </div>
  );
}
