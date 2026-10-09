import { type CatalogueCategoryId, findCatalogueProduct } from "@/features/products/catalogue";

/**
 * Minimum order quantities confirmed by Freshland Exports, by catalogue
 * category. The single source for every product page's MOQ section: a
 * product's MOQ follows the category it is listed under in the catalogue.
 */
export const categoryMoq: Record<CatalogueCategoryId, string> = {
  powders: "500 KG",
  agricultural: "500 KG to 1 MT",
  fruits: "500 KG",
  spices: "100 KG to 500 KG",
};

/** Products whose MOQ follows a category other than their catalogue listing. */
const moqCategory: Record<string, CatalogueCategoryId> = {
  // Confirmed by Freshland Exports: ordered under the spices MOQ.
  "red-chilli-powder": "spices",
  // Whole turmeric has a spice page but no catalogue entry.
  turmeric: "spices",
};

/** Copy shared by every MOQ section. */
export const moqCopy = {
  eyebrow: "Minimum Order Quantity",
  body: "Bulk supply available for wholesale, food-service, processing and export buyers.",
  cta: "Request a Quote",
} as const;

export function findMoq(slug: string) {
  const category = moqCategory[slug] ?? findCatalogueProduct(slug)?.category.id;
  return category ? categoryMoq[category] : undefined;
}

/** The MOQ of a product that must have one; fails the build otherwise. */
export function moqFor(slug: string) {
  const moq = findMoq(slug);
  if (!moq) throw new Error(`MOQ: no catalogue category for "${slug}"`);
  return moq;
}
