import type { MoringaImage } from "@/features/moringa/images";

/**
 * Image slots for the Fresh Onion page.
 *
 * No photography yet (the existing /images/products/onion.webp is 300 px,
 * too small for these sizes): each slot renders a labelled placeholder
 * until a file is saved at `public` + `file`, which then replaces it at
 * build time with no code change. The comment above each slot describes the
 * image needed and gives a generation prompt.
 */

const dir = "/images/products/fresh-onion";

export const freshOnionImages = {
  // Hero — large fresh red and white onion photograph (landscape 5:4).
  // Prompt: "Premium product photography of fresh red and white onions, a
  // few cut in half showing their rings, with fresh green onion leaves, on a
  // pale sage surface, soft natural light, no text or logo, landscape 5:4."
  hero: {
    file: `${dir}/fresh-onion-hero-red-white.webp`,
    alt: "Fresh red and white onions, some cut in half, with green onion leaves",
    label: "Fresh red & white onions",
  },

  // About — close-up of fresh onions with natural leaves (portrait 4:5).
  // Prompt: "Close-up editorial photography of freshly harvested onions with
  // their natural green leaves attached, soil-dusted skins, warm daylight,
  // no text or logo, portrait 4:5."
  closeUp: {
    file: `${dir}/fresh-onion-closeup-leaves.webp`,
    alt: "Close-up of freshly harvested onions with natural green leaves",
    label: "Fresh onions with leaves",
  },

  // Uses 1 — whole fresh onions (landscape 16:10).
  // Prompt: "Food photography of whole fresh red and white onions in a
  // woven basket on a kitchen counter, natural light, no text or logo,
  // landscape 16:10."
  wholeOnions: {
    file: `${dir}/fresh-onion-use-whole.webp`,
    alt: "Whole fresh red and white onions in a basket",
    label: "Fresh onions",
  },

  // Uses 2 — onion salad (landscape 16:10).
  // Prompt: "Food photography of a fresh salad with thinly sliced red onion
  // rings, tomato, cucumber and herbs in a ceramic bowl, bright daylight,
  // no text or logo, landscape 16:10."
  salad: {
    file: `${dir}/fresh-onion-use-salad.webp`,
    alt: "Fresh salad with sliced red onion rings",
    label: "Onion salad",
  },

  // Uses 3 — sliced onions (landscape 16:10).
  // Prompt: "Food photography of sliced and diced onions on a wooden
  // chopping board with a chef's knife, clean kitchen setting, soft light,
  // no text or logo, landscape 16:10."
  sliced: {
    file: `${dir}/fresh-onion-use-sliced.webp`,
    alt: "Sliced and diced onions on a chopping board",
    label: "Sliced onions",
  },

  // Uses 4 — cooked dish containing onions (landscape 16:10).
  // Prompt: "Food photography of a restaurant-style curry topped with
  // caramelised onions in a copper bowl, warm light, no text or logo,
  // landscape 16:10."
  cooked: {
    file: `${dir}/fresh-onion-use-cooked-dish.webp`,
    alt: "Curry topped with caramelised onions",
    label: "Cooked dish with onions",
  },

  // Specifications — fresh onions for product display (landscape 16:10).
  // Prompt: "Clean product-display photography of graded fresh red onions
  // in a mesh bag beside a small heap of loose onions, plain cream
  // background, studio lighting, no text or logo, landscape 16:10."
  display: {
    file: `${dir}/fresh-onion-product-display.webp`,
    alt: "Graded fresh red onions for product display",
    label: "Fresh onions — product display",
  },
} satisfies Record<string, MoringaImage>;
