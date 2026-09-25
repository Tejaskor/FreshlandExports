import type { ArtVariant } from "@/components/media/botanical-art";

/**
 * One photographic slot. `image` points at a file under public/images/<page>/;
 * when it is null the Figure component falls back to generated botanical art,
 * so adding a photograph never touches layout code.
 */
export type MediaSlot = {
  image: string | null;
  alt: string;
  art: ArtVariant;
};
