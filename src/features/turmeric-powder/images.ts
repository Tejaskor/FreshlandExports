import type { MoringaImage } from "@/features/moringa/images";

/**
 * Image slots for the Turmeric Powder page.
 *
 * No photography yet: each slot renders a labelled placeholder (ImageSlot)
 * until a file is saved at `public` + `file`, which then replaces it at
 * build time with no code change. The comment above each slot describes the
 * image needed and gives a generation prompt.
 */

const dir = "/images/products/turmeric";

export const turmericImages = {
  // Turmeric powder product photograph — hero, arch-shaped (portrait 4:5).
  // Prompt: "Premium product photography of vibrant golden turmeric powder
  // heaped in a ceramic bowl with a brass spoon, fresh turmeric rhizomes
  // beside it, warm cream background, soft golden light, no text or logo,
  // portrait 4:5."
  hero: {
    file: `${dir}/turmeric-powder-hero-bowl.webp`,
    alt: "Golden turmeric powder in a ceramic bowl with fresh turmeric rhizomes",
    label: "Turmeric powder product photograph",
  },

  // Fresh turmeric rhizomes — About section, specimen card (landscape 16:10).
  // Prompt: "Botanical editorial photography of fresh turmeric rhizomes, some
  // cut to show the bright orange interior, on a cream linen surface, soft
  // natural light, no text or logo, landscape 16:10."
  rhizomes: {
    file: `${dir}/turmeric-fresh-rhizomes.webp`,
    alt: "Fresh turmeric rhizomes, some cut open to show the orange interior",
    label: "Fresh turmeric rhizomes",
  },

  // Turmeric powder in culinary use — Applications section (portrait 3:4).
  // Prompt: "Premium food photography of turmeric powder being stirred into
  // a golden curry and a cup of golden milk alongside, warm kitchen light,
  // cream and forest-green palette, no text or logo, portrait 3:4."
  culinary: {
    file: `${dir}/turmeric-powder-culinary-use.webp`,
    alt: "Turmeric powder being stirred into a golden curry, with golden milk alongside",
    label: "Turmeric powder in culinary use",
  },
} satisfies Record<string, MoringaImage>;
