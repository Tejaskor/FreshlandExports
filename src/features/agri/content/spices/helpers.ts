import type { ImageSlotData, SpecRow } from "@/features/agri/types";
import type { Faq } from "@/features/moringa/data";
import { findMoq } from "@/features/products/moq";

/**
 * Shared helpers for the spice landing pages (TEMPORARY content).
 *
 * Images live flat in /public/images/products/spices/, named
 * <slug>-hero.webp, <slug>-culinary-use.webp / <slug>-applications.webp and
 * so on. Until a file exists, the page shows a labelled placeholder.
 *
 * Nothing here states a certification, grade, test result, origin or
 * capacity: unverified values are shown as pending or neutral wording.
 */

export const spicesCategory = "Spices";

/** `position` is the crop's CSS object-position, for an off-centre subject. */
export function spiceImg(slug: string, name: string, alt: string, label: string, position?: string): ImageSlotData {
  return { file: `/images/products/spices/${slug}-${name}.webp`, alt, label, ...(position && { position }) };
}

export function spiceSpecs(
  product: string,
  rows: readonly SpecRow[],
  details: { form: string; packaging: string; storage: string; applications: string },
  /** Page slug, to look up the confirmed MOQ. */
  slug?: string,
): readonly SpecRow[] {
  const moq = slug ? findMoq(slug) : undefined;
  return [
    { label: "Product Name", value: product },
    ...rows,
    { label: "Form", value: details.form },
    { label: "Packaging", value: details.packaging },
    { label: "Storage", value: details.storage },
    { label: "Applications", value: details.applications },
    { label: "Origin", value: "To be confirmed", pending: true },
    { label: "MOQ", value: moq ?? "Flexible MOQ — Contact Us" },
  ];
}

export const spiceSpecsNote =
  "Temporary specification — grades, quality parameters and packaging are confirmed with each enquiry.";

/** Product questions first, then one common supply question. */
export function spiceFaqs(name: string, first: readonly Faq[], slug?: string): readonly Faq[] {
  const moq = slug ? findMoq(slug) : undefined;
  return [
    ...first,
    {
      question: `Do you supply ${name.toLowerCase()} in bulk?`,
      answer: moq
        ? `Yes — our minimum order quantity is ${moq}. Share your required form, quantity, packaging and destination, and our team will confirm availability.`
        : "Yes — share your required form, quantity, packaging and destination, and our team will confirm availability. MOQ is flexible; contact us to discuss.",
    },
  ];
}
