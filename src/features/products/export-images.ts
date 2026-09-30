import { existsSync } from "node:fs";
import path from "node:path";

import type { ExportProduct } from "@/features/products/export-catalogue";
import type { MediaSlot } from "@/types/media";

/**
 * Server-only (reads the filesystem) — import it from server components.
 * Resolves a product's photograph at build time: a file dropped at
 * public/images/products/<slug>.webp wins over the catalogue's stand-in, so
 * adding real photography needs no code change.
 */
export function exportProductMedia(product: ExportProduct): MediaSlot {
  const dedicated = `/images/products/${product.slug}.webp`;
  const onDisk = existsSync(path.join(process.cwd(), "public", dedicated));

  return onDisk
    ? { ...product.media, image: dedicated, alt: product.media.alt }
    : product.media;
}
