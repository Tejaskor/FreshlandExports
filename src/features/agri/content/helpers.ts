import type { ImageSlotData, SpecRow } from "@/features/agri/types";

/**
 * Image slot for an agricultural page. Until a file is saved at
 * public/images/products/agri/<slug>/<slug>-<name>.webp the page shows a
 * labelled placeholder in the product's colours; the file then replaces it
 * at build time with no code change.
 * `position` is the crop's CSS object-position, for an off-centre subject.
 */
export function img(slug: string, name: string, alt: string, label: string, position?: string): ImageSlotData {
  return { file: `/images/products/agri/${slug}/${slug}-${name}.webp`, alt, label, ...(position && { position }) };
}

/**
 * Specification rows shared by the fresh-produce pages. Anything that
 * depends on the lot or the order stays qualified until confirmed.
 */
export function freshSpecs(rows: readonly SpecRow[], extra: readonly SpecRow[] = []): readonly SpecRow[] {
  return [
    ...rows,
    { label: "Size / Grade", value: "As per buyer requirements" },
    { label: "Packaging", value: "As per buyer requirements" },
    { label: "Origin", value: "India, subject to confirmation" },
    { label: "Supply", value: "Subject to seasonal availability" },
    ...extra,
  ];
}

export const specsNote =
  "Temporary specification — final values, varieties and packaging are confirmed with each enquiry.";
