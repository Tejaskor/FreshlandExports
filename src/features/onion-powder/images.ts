import type { MoringaImage } from "@/features/moringa/images";

/**
 * Image slots for the Onion Powder page.
 *
 * No photography yet: each slot renders a labelled placeholder (ImageSlot)
 * until a file is saved at `public` + `file`, which then replaces it at
 * build time with no code change. The comment above each slot describes the
 * image needed and gives a generation prompt.
 */

const dir = "/images/products/onion";

export const onionImages = {
  // Onion powder product photograph — hero, shown in a circle (square 1:1).
  // Prompt: "Premium product photography of fine cream-coloured onion powder
  // in a ceramic bowl with a wooden spoon, halved golden onions beside it,
  // warm cream background, soft natural light, no text or logo, square 1:1."
  hero: {
    file: `${dir}/onion-powder-hero-bowl.webp`,
    alt: "Fine cream-coloured onion powder in a ceramic bowl beside halved onions",
    label: "Onion powder product photograph",
  },

  // Fresh onions photograph — About section (portrait 4:5).
  // Prompt: "Editorial photography of fresh whole and halved onions with
  // papery golden skins on a linen cloth, warm natural daylight, cream and
  // forest-green palette, no text or logo, portrait 4:5."
  freshOnions: {
    file: `${dir}/onion-fresh-onions.webp`,
    alt: "Fresh whole and halved onions with golden skins",
    label: "Fresh onions photograph",
  },

  // Onion powder in food preparation — Applications section (landscape 4:3).
  // Prompt: "Premium food photography of onion powder being sprinkled into a
  // pan of simmering sauce, with spice bowls around it, warm kitchen light,
  // cream background, no text or logo, landscape 4:3."
  cooking: {
    file: `${dir}/onion-powder-food-preparation.webp`,
    alt: "Onion powder being sprinkled into a simmering sauce",
    label: "Onion powder in food preparation",
  },

  // Industrial use — onion powder in snack seasoning (landscape 16:9).
  // Prompt: "Commercial food photography of savoury snacks and crackers being
  // coated with onion seasoning in a clean production setting, soft light,
  // no text or logo, landscape 16:9."
  industrial: {
    file: `${dir}/onion-powder-snack-seasoning.webp`,
    alt: "Savoury snacks coated with onion powder seasoning",
    label: "Onion powder in snack seasoning",
  },
} satisfies Record<string, MoringaImage>;
