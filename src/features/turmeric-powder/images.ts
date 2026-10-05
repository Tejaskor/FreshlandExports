import type { MoringaImage } from "@/features/moringa/images";

/**
 * Image slots for the Turmeric Powder page.
 *
 * Each slot points at the page's photography in public/images/products/
 * Turmeric Powder/. If a file goes missing, ImageSlot falls back to a
 * labelled placeholder. The comment above each slot gives its original brief.
 */

const dir = "/images/products/Turmeric Powder";

export const turmericImages = {
  // Turmeric powder product photograph — hero, arch-shaped (portrait 4:5).
  // Prompt: "Premium product photography of vibrant golden turmeric powder
  // heaped in a ceramic bowl with a brass spoon, fresh turmeric rhizomes
  // beside it, warm cream background, soft golden light, no text or logo,
  // portrait 4:5."
  hero: {
    file: `${dir}/turmeric-powder-hero.webp`,
    alt: "Golden turmeric powder in a ceramic bowl beside fresh and halved turmeric rhizomes and a wooden spoon",
    label: "Turmeric powder product photograph",
  },

  // Fresh turmeric rhizomes — About section, specimen card (landscape 16:10).
  // Prompt: "Botanical editorial photography of fresh turmeric rhizomes, some
  // cut to show the bright orange interior, on a cream linen surface, soft
  // natural light, no text or logo, landscape 16:10."
  rhizomes: {
    file: `${dir}/turmeric-roots-powder.webp`,
    alt: "Fresh turmeric roots, some cut open to show the orange interior, beside a wooden bowl of turmeric powder",
    label: "Fresh turmeric rhizomes",
  },

  // Turmeric powder in culinary use — Applications section (portrait 3:4).
  // Prompt: "Premium food photography of turmeric powder being stirred into
  // a golden curry and a cup of golden milk alongside, warm kitchen light,
  // cream and forest-green palette, no text or logo, portrait 3:4."
  culinary: {
    file: `${dir}/turmeric-powder-food-applications.webp`,
    alt: "A bowl of turmeric powder with a vegetable stir-fry, a glass of golden milk and fresh turmeric roots",
    label: "Turmeric powder in culinary use",
  },
} satisfies Record<string, MoringaImage>;
