import type { SpecRow } from "@/features/agri/types";
import type { Faq } from "@/features/moringa/data";

/**
 * Shared helpers for the fruit landing pages (TEMPORARY content). Values
 * that depend on season, variety or order stay qualified until confirmed.
 * Fruit MOQs live in features/products/moq.ts.
 */

export const fruitsCategory = "Fruits";

export function fruitSpecs(rows: readonly SpecRow[], storage: string): readonly SpecRow[] {
  return [
    ...rows,
    { label: "Size / Grade", value: "As per buyer requirements" },
    { label: "Packaging", value: "As per buyer requirements" },
    { label: "Storage", value: storage },
    { label: "Shelf Life", value: "Depends on variety, ripeness and storage" },
    { label: "Origin", value: "India, subject to confirmation" },
    { label: "Supply", value: "Subject to seasonal availability" },
  ];
}

export const fruitSpecsNote =
  "Temporary specification — final varieties, grades, packaging and export details are confirmed with each enquiry.";

/** Product-specific questions first, then the common export questions. */
export function fruitFaqs(name: string, first: readonly Faq[]): readonly Faq[] {
  const lower = name.toLowerCase();
  return [
    ...first,
    {
      question: `How is ${lower} packed for export?`,
      answer: "Packaging is agreed with each buyer to suit the market and transit time. Final packing options will be listed here.",
    },
    {
      question: `Can you supply ${lower} in bulk?`,
      answer: "Yes — share your required quantity, destination and timing, and our team will confirm availability for the season.",
    },
    {
      question: "Which export documents are provided?",
      answer: "Export documentation is confirmed per order and destination market.",
    },
  ];
}

