import type { MoringaImage } from "@/features/moringa/images";

/**
 * Image slots for the Onion Powder page.
 *
 * Each slot points at the page's photography in public/images/products/
 * Onion Powder/. If a file goes missing, ImageSlot falls back to a labelled
 * placeholder. The comment above each slot gives its original brief.
 */

const dir = "/images/products/Onion Powder";

export const onionImages = {
  // Onion powder product photograph — hero, shown in a circle (square 1:1).
  // Prompt: "Premium product photography of fine cream-coloured onion powder
  // in a ceramic bowl with a wooden spoon, halved golden onions beside it,
  // warm cream background, soft natural light, no text or logo, square 1:1."
  hero: {
    file: `${dir}/onion-powder-hero.webp`,
    alt: "Cream-coloured onion powder in a ceramic bowl between whole golden onions and a halved onion",
    label: "Onion powder product photograph",
  },

  // Fresh onions photograph — About section (portrait 4:5).
  // Prompt: "Editorial photography of fresh whole and halved onions with
  // papery golden skins on a linen cloth, warm natural daylight, cream and
  // forest-green palette, no text or logo, portrait 4:5."
  freshOnions: {
    file: `${dir}/fresh-onions-powder.webp`,
    alt: "Fresh onions being sliced on a wooden board beside whole and halved golden onions",
    label: "Fresh onions photograph",
  },

  // Onion powder in food preparation — Applications section (landscape 4:3).
  // Prompt: "Premium food photography of onion powder being sprinkled into a
  // pan of simmering sauce, with spice bowls around it, warm kitchen light,
  // cream background, no text or logo, landscape 4:3."
  cooking: {
    file: `${dir}/onion-powder-culinary-uses.webp`,
    alt: "Onion powder being sprinkled over a dish of roasted vegetables, with a bowl of onion powder and fresh onions",
    label: "Onion powder in food preparation",
  },
} satisfies Record<string, MoringaImage>;
