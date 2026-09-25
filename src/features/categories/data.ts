import type { Category } from "@/features/categories/types";

/**
 * Canonical category list, owned by the categories feature and consumed by
 * the homepage rail.
 *
 * Every category carries real photography; the first four are what desktop
 * shows on load. `art` is the fallback Figure renders if `image` is ever set
 * to null. To swap a photo, drop the file into public/images/home/categories/
 * and point `image` at it; nothing else needs to change.
 */
export const categories: readonly Category[] = [
  {
    title: "Herbal Extracts",
    description: "Nature in its purest form.",
    href: "/categories/botanical-extracts",
    image: "/images/home/categories/herbalextract.webp",
    alt: "Dew-covered botanical leaves on a stone surface beside laboratory glassware",
    art: "leaf",
  },
  {
    title: "Herbal Powders",
    description: "Versatile. Potent. Natural.",
    href: "/categories/herbal-powders",
    image: "/images/home/categories/herbal-powders.webp",
    alt: "Stone bowl of golden herbal powder with fresh rhizomes and leaves on a wooden board",
    art: "powder",
  },
  {
    title: "Enzymes",
    description: "For better formulations",
    href: "/categories/enzymes",
    image: "/images/home/categories/enzymes.webp",
    alt: "Pipette releasing a drop of botanical enzyme concentrate onto a fresh green leaf",
    art: "dropper",
  },
  {
    title: "Probiotics",
    description: "Science-backed wellness",
    href: "/categories/probiotics",
    image: "/images/home/categories/probiotics.webp",
    alt: "Wooden bowl of probiotic capsules beside a ceramic bowl of green botanical powder",
    art: "capsule",
  },
  {
    title: "Organic Extracts",
    description: "Certified organic, standardised",
    href: "/categories/organic-extracts",
    image: "/images/home/categories/organic extract.webp",
    alt: "Dropper releasing golden botanical extract into a glass bottle, surrounded by fresh herbs, green powder and turmeric",
    art: "turmeric",
  },
  {
    title: "Dietary Ingredients",
    description: "Built for supplement formats",
    href: "/categories/dietary-ingredients",
    image: "/images/home/categories/dietry ingredients.webp",
    alt: "Wooden bowl of supplement capsules ringed by bowls of seeds, dried berries, powders and herbs",
    art: "jar",
  },
  {
    title: "Herbal Ingredients",
    description: "Whole-plant, traceable",
    href: "/categories/herbal-ingredients",
    image: "/images/home/categories/herbalingredients.webp",
    alt: "Mortar of fresh herbs among bowls of dried leaves, roots, turmeric powder and whole spices on a wooden table",
    art: "moringa",
  },
  {
    title: "Organics",
    description: "Grown under organic certification",
    href: "/categories/organics",
    image: "/images/home/categories/organic.webp",
    alt: "Wooden crate overflowing with fresh organic vegetables and fruit in a sunlit field",
    art: "field",
  },
  {
    title: "Conventional",
    description: "Consistent, volume-ready supply",
    href: "/categories/conventional",
    image: "/images/home/categories/conventional.webp",
    alt: "Young leafy crops growing in rows of tilled soil at sunrise, with hills behind",
    art: "ginger",
  },
] as const;

/** Last path segment, used for the [slug] route params. */
export function categorySlug(category: Category) {
  return category.href.split("/").pop() ?? "";
}
