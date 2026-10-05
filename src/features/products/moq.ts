/**
 * Minimum order quantities confirmed by Freshland Exports, by product slug.
 * The single source for every product page's MOQ section.
 */
export const productMoq: Record<string, string> = {
  // Powder products
  "moringa-powder": "500 KG",
  "onion-powder": "500 KG",
  "turmeric-powder": "500 KG",

  // Agricultural products
  onion: "500 KG",
  garlic: "500 KG",
  "elephant-yam": "500 KG",
  cabbage: "500 KG",
  cucumber: "500 KG",
  "green-chili": "500 KG",
  "frozen-peas": "500 KG",
  okra: "500 KG",
  "bitter-gourd": "500 KG",
  eggplant: "500 KG",
  drumstick: "500 KG",
  beans: "500 KG",

  // Fruits
  mango: "1,000 KG",
  banana: "1,000 KG",
  grapes: "1,000 KG",
  pomegranate: "1,000 KG",
  orange: "1,000 KG",
  chikoo: "1,000 KG",
  papaya: "1,000 KG",
  guava: "1,000 KG",

  // Spices
  "red-chilli": "250 KG",
  "black-pepper": "250 KG",
  "cumin-seeds": "250 KG",
  "coriander-seeds": "250 KG",
  "green-cardamom": "100 KG",
  cloves: "100 KG",
  cinnamon: "100 KG",
  "mustard-seeds": "250 KG",
  "fennel-seeds": "250 KG",
};

/** Copy shared by every MOQ section. */
export const moqCopy = {
  eyebrow: "Minimum Order Quantity",
  body: "Bulk supply available for wholesale, food-service, processing and export buyers.",
  cta: "Request a Quote",
} as const;

export function findMoq(slug: string) {
  return productMoq[slug];
}
