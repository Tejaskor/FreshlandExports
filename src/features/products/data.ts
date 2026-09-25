import type { Product } from "@/features/products/types";

/**
 * Canonical product catalogue. The homepage features a subset of these; the
 * products routes render the full list, so the data lives with the feature
 * that owns it rather than with the page that happens to show it first.
 */
export const products: readonly Product[] = [
  {
    name: "Organic Turmeric Powder",
    descriptor: "High Curcumin | Food Grade",
    href: "/products/organic-turmeric-powder",
    image: "/images/home/products/Organic Turmeric Powder.webp",
    alt: "Bowl of bright organic turmeric powder on a stone slab beside whole and halved turmeric roots",
    art: "turmeric",
  },
  {
    name: "Organic Ginger Powder",
    descriptor: "Pure & Natural",
    href: "/products/organic-ginger-powder",
    image: "/images/home/products/Organic Ginger Powder.webp",
    alt: "Wooden bowl of pale organic ginger powder with fresh ginger root and sliced ginger",
    art: "ginger",
  },
  {
    name: "Organic Moringa Powder",
    descriptor: "Nutrient Rich",
    href: "/products/organic-moringa-powder",
    image: "/images/home/products/Organic Moringa Powder.webp",
    alt: "Wooden bowl and spoon of green organic moringa powder with fresh moringa leaves",
    art: "moringa",
  },
  {
    name: "Organic Ashwagandha Powder",
    descriptor: "Adaptogenic Root | Pure & Potent",
    href: "/products/organic-ashwagandha-powder",
    image: "/images/home/products/Organic Ashwagandha Powder.webp",
    alt: "Wooden bowl of organic ashwagandha root powder beside dried ashwagandha roots and fresh leaves",
    art: "ashwagandha",
  },
  {
    name: "Organic Beetroot Powder",
    descriptor: "Natural Colour | Nitrate Rich",
    href: "/products/organic-beetroot-powder",
    image: "/images/home/products/Organic Beetroot  Powder.webp",
    alt: "Bowl of deep red organic beetroot powder beside whole and sliced beetroots with their leaves",
    art: "powder",
  },
  {
    name: "Organic Black Pepper Powder",
    descriptor: "Bold Pungency | High Piperine",
    href: "/products/organic-black-pepper-powder",
    image: "/images/home/products/Organic Black Pepper Powder.webp",
    alt: "Wooden bowl of ground organic black pepper with a scoop of whole peppercorns and a pepper leaf",
    art: "powder",
  },
  {
    name: "Organic Brahmi Powder",
    descriptor: "Traditional Ayurvedic Herb",
    href: "/products/organic-brahmi-powder",
    image: "/images/home/products/Organic Brahmi Powder.webp",
    alt: "Ceramic bowl of organic brahmi powder among flowering brahmi sprigs",
    art: "leaf",
  },
  {
    name: "Organic Neem Powder",
    descriptor: "Pure Leaf | Versatile Use",
    href: "/products/organic-neem-powder",
    image: "/images/home/products/Organic Neem Powder.webp",
    alt: "Bowl of green organic neem leaf powder with neem leaves and fresh neem fruit",
    art: "leaf",
  },
] as const;

/** Last path segment, used for the [slug] route params. */
export function productSlug(product: Product) {
  return product.href.split("/").pop() ?? "";
}
