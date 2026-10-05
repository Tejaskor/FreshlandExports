import type { MoringaImage } from "@/features/moringa/images";

/**
 * Image slots for the Fresh Onion page, one photograph per section from
 * public/images/products/Agricultural Products/Onion/. No photograph is used
 * twice. If a file goes missing, ImageSlot falls back to a labelled
 * placeholder. The comment above each slot gives its original brief.
 */

const dir = "/images/products/Agricultural Products/Onion";

export const freshOnionImages = {
  // Hero — large fresh red and white onion photograph (landscape 5:4).
  // Prompt: "Premium product photography of fresh red and white onions, a
  // few cut in half showing their rings, with fresh green onion leaves, on a
  // pale sage surface, soft natural light, no text or logo, landscape 5:4."
  hero: {
    file: `${dir}/fresh-onions-hero.webp`,
    alt: "A heap of fresh red onions with dry papery skins on a woven basket",
    label: "Fresh red & white onions",
  },

  // About — close-up of fresh onions with natural leaves (portrait 4:5).
  // Prompt: "Close-up editorial photography of freshly harvested onions with
  // their natural green leaves attached, soil-dusted skins, warm daylight,
  // no text or logo, portrait 4:5."
  closeUp: {
    file: `${dir}/fresh-onion-selection.webp`,
    alt: "Fresh red onions laid out on sorting trays for selection",
    label: "Fresh onions with leaves",
  },

  // Uses 1 — whole fresh onions (landscape 16:10).
  // Prompt: "Food photography of whole fresh red and white onions in a
  // woven basket on a kitchen counter, natural light, no text or logo,
  // landscape 16:10."
  wholeOnions: {
    file: `${dir}/fresh-onions-culinary.webp`,
    alt: "Sliced red onions on a chopping board beside a pan of cooked onion and vegetables",
    label: "Fresh onions",
  },

  // Uses 2 — onion salad (landscape 16:10).
  // Prompt: "Food photography of a fresh salad with thinly sliced red onion
  // rings, tomato, cucumber and herbs in a ceramic bowl, bright daylight,
  // no text or logo, landscape 16:10."
  salad: {
    file: `${dir}/fresh-onions-salads.webp`,
    alt: "A fresh salad with red onion rings, tomato, cucumber and lettuce",
    label: "Onion salad",
  },

  // Uses 3 — sliced onions (landscape 16:10).
  // Prompt: "Food photography of sliced and diced onions on a wooden
  // chopping board with a chef's knife, clean kitchen setting, soft light,
  // no text or logo, landscape 16:10."
  sliced: {
    file: `${dir}/fresh-onions-food-processing.webp`,
    alt: "Whole, sliced and diced red onions on steel trays in a food-processing kitchen",
    label: "Sliced onions",
  },

  // Uses 4 — cooked dish containing onions (landscape 16:10).
  // Prompt: "Food photography of a restaurant-style curry topped with
  // caramelised onions in a copper bowl, warm light, no text or logo,
  // landscape 16:10."
  cooked: {
    file: `${dir}/fresh-onions-food-service.webp`,
    alt: "Sliced onions in steel trays prepared in a commercial kitchen",
    label: "Cooked dish with onions",
  },

  // Specifications — fresh onions for product display (landscape 16:10).
  // Prompt: "Clean product-display photography of graded fresh red onions
  // in a mesh bag beside a small heap of loose onions, plain cream
  // background, studio lighting, no text or logo, landscape 16:10."
  display: {
    file: `${dir}/fresh-onion-quality-inspection.webp`,
    alt: "Firm fresh red onions, whole and halved, laid out for quality inspection",
    label: "Fresh onions — product display",
  },

  // Storage & Handling — onions in ventilated crates in a storage shed (16:10).
  storage: {
    file: `${dir}/fresh-onion-storage-handling.webp`,
    alt: "Fresh red onions stored in ventilated wooden crates in a storage shed",
    label: "Onion storage and handling",
  },
} satisfies Record<string, MoringaImage>;
