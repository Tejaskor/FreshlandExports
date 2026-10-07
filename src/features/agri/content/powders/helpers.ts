import type { ImageSlotData } from "@/features/agri/types";

/**
 * Shared helpers for the powder landing pages (TEMPORARY content).
 *
 * Images live flat in /public/images/products/powders/, named
 * <slug>-hero.webp, <slug>-applications.webp and so on. Until a file exists,
 * the page shows a labelled placeholder.
 *
 * Specification rows and FAQs reuse the spice helpers, so the MOQ and
 * "to be confirmed" wording stays the same across both ranges. Nothing here
 * states a certification, grade, test result, origin or capacity.
 */

export const powdersCategory = "Powder Products";

export function powderImg(slug: string, name: string, alt: string, label: string): ImageSlotData {
  return { file: `/images/products/powders/${slug}-${name}.webp`, alt, label };
}

export const powderSpecsNote =
  "Temporary specification — grades, quality parameters and packaging are confirmed with each enquiry.";
