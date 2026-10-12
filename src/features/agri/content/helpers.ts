import type { ImageSlotData, SpecRow } from "@/features/agri/types";
import type { Faq } from "@/features/moringa/data";
import { moqFor } from "@/features/products/moq";

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
    { label: "Supply", value: "Subject to seasonal availability" },
    ...extra,
  ];
}

export const specsNote =
  "Final values, varieties and packaging are confirmed with each enquiry.";

/**
 * FAQs for a fresh-produce page: its own questions first, then the minimum
 * order (from features/products/moq) and packaging questions they share.
 */
export function freshFaqs(name: string, slug: string, first: readonly Faq[]): readonly Faq[] {
  return [
    ...first,
    {
      question: `What is the minimum order quantity for ${name}?`,
      answer: `The minimum order quantity is ${moqFor(slug)}. Share your required quantity and destination, and we will confirm availability with your quotation.`,
    },
    {
      question: `How is ${name} packed?`,
      answer:
        "Packaging is supplied as per buyer requirements. Share your preferred pack type, size and destination with your enquiry, and it is confirmed with your quotation.",
    },
  ];
}
