import type { IconName } from "@/components/ui/icon";
import type { MediaSlot } from "@/types/media";

/**
 * Export product range — the products behind the header's Products menu.
 *
 * Content is deliberately general and factual: product forms, typical uses
 * and trade practice. Grade-specific figures (moisture, mesh, curcumin,
 * pungency, purity) vary by lot and are shared with each quotation rather
 * than published as fixed claims.
 *
 * Client-safe: no server APIs here, so the header can import the menu.
 * Photography is resolved server-side in ./export-images.
 */

export type ExportCategoryId = "powders" | "agricultural";

export const exportCategories: Record<ExportCategoryId, { name: string; anchor: string }> = {
  powders: { name: "Powder Products", anchor: "powder-products" },
  agricultural: { name: "Agricultural Export Products", anchor: "agricultural-products" },
};

export interface ExportProduct {
  slug: string;
  name: string;
  category: ExportCategoryId;
  /** One line for menus and cards. */
  summary: string;
  description: string;
  /** Search-result description, when the generic one is not specific enough. */
  seoDescription?: string;
  forms: readonly string[];
  specifications: readonly { label: string; value: string }[];
  packaging: readonly string[];
  applications: readonly { icon: IconName; title: string; text: string }[];
  /**
   * Closest existing photograph, or null for generated botanical art.
   * A file at public/images/products/<slug>.webp overrides this.
   */
  media: MediaSlot;
}

export const exportProductHref = (slug: string) => `/products/${slug}`;

const onRequest = "Specified with each quotation";

export const exportProducts: readonly ExportProduct[] = [
  // --- Powder products ------------------------------------------------------
  {
    slug: "moringa-powder",
    name: "Moringa Powder",
    category: "powders",
    summary: "Fine green powder from dried moringa leaves",
    description:
      "Moringa powder is made from the leaves of Moringa oleifera, dried and milled into a fine, bright green powder. It is widely used as a plant-based ingredient in supplements, beverages and fortified foods.",
    seoDescription:
      "Bulk moringa leaf powder (Moringa oleifera) exported from India for food, beverage and supplement brands. 500 kg MOQ; specification sheet and quotes on request.",
    forms: ["Fine leaf powder", "Coarse leaf powder", "Dried leaf (cut) on request"],
    specifications: [
      { label: "Botanical source", value: "Moringa oleifera" },
      { label: "Part used", value: "Leaves" },
      { label: "Appearance", value: "Fine green powder" },
      { label: "Country of origin", value: "India" },
      { label: "Mesh size & moisture", value: onRequest },
      { label: "Documentation", value: "Specification sheet and certificate of analysis on request" },
    ],
    packaging: [
      "Multi-wall kraft paper bags with food-grade inner liner",
      "Fibre or HDPE drums",
      "Bulk and private-label packing on request",
    ],
    applications: [
      { icon: "flask", title: "Dietary supplements", text: "Capsules, tablets and powder blends." },
      { icon: "sprout", title: "Beverages", text: "Smoothies, shakes and tea blends." },
      { icon: "layers", title: "Food fortification", text: "Bakery, pasta and snack formulations." },
    ],
    media: {
      image: "/images/products/moringa-powder.webp",
      alt: "Wooden bowl and spoon of green moringa powder with fresh moringa leaves",
      art: "moringa",
    },
  },
  {
    slug: "onion-powder",
    name: "Onion Powder",
    category: "powders",
    summary: "Dehydrated onion milled to a free-flowing powder",
    description:
      "Onion powder is produced from dehydrated onions ground to a fine, free-flowing powder. It delivers consistent onion flavour and aroma without the moisture of fresh onion, making it a staple of seasonings and processed foods.",
    forms: ["Powder", "Granules on request", "Other dehydrated cuts on request"],
    specifications: [
      { label: "Source", value: "Dehydrated onion (Allium cepa)" },
      { label: "Varieties", value: "White and red onion" },
      { label: "Appearance", value: "Free-flowing powder" },
      { label: "Country of origin", value: "India" },
      { label: "Mesh size & moisture", value: onRequest },
      { label: "Documentation", value: "Specification sheet and certificate of analysis on request" },
    ],
    packaging: [
      "Multi-wall kraft paper bags with food-grade inner liner",
      "Cartons with poly liner",
      "Bulk and private-label packing on request",
    ],
    applications: [
      { icon: "layers", title: "Seasonings & blends", text: "Spice mixes, rubs and snack seasonings." },
      { icon: "flask", title: "Sauces & soups", text: "Gravies, dressings, soups and instant mixes." },
      { icon: "globe", title: "Processed foods", text: "Ready meals, processed meats and bakery." },
    ],
    media: { image: "/images/products/onion-powder.webp", alt: "Onion powder", art: "powder" },
  },
  {
    slug: "turmeric-powder",
    name: "Turmeric Powder",
    category: "powders",
    summary: "Ground turmeric rhizomes with a vivid golden colour",
    description:
      "Turmeric powder is made from cured and dried rhizomes of Curcuma longa, ground to a fine golden-yellow powder. Valued for its colour and earthy flavour, it is a core spice and a natural colouring ingredient.",
    forms: ["Fine powder", "Coarse powder on request"],
    specifications: [
      { label: "Botanical source", value: "Curcuma longa" },
      { label: "Part used", value: "Rhizome" },
      { label: "Appearance", value: "Fine golden-yellow powder" },
      { label: "Country of origin", value: "India" },
      { label: "Curcumin content, mesh & moisture", value: onRequest },
      { label: "Documentation", value: "Specification sheet and certificate of analysis on request" },
    ],
    packaging: [
      "Multi-wall kraft paper bags with food-grade inner liner",
      "Fibre or HDPE drums",
      "Bulk and private-label packing on request",
    ],
    applications: [
      { icon: "layers", title: "Spice blends", text: "Curry powders, masalas and seasonings." },
      { icon: "sprout", title: "Natural colour", text: "Colouring for food and beverages." },
      { icon: "flask", title: "Supplements", text: "Capsules, tablets and wellness drinks." },
    ],
    media: {
      image: "/images/products/turmeric-powder.webp",
      alt: "Bowl of bright turmeric powder beside whole and halved turmeric roots",
      art: "turmeric",
    },
  },

  // --- Agricultural export products -----------------------------------------
  {
    slug: "onion",
    name: "Onion",
    category: "agricultural",
    summary: "Fresh red, pink and white onions, size-graded",
    description:
      "Fresh onions sourced from Indian growing regions and graded by size for export. Red, pink and white varieties are available by season, selected for firmness, colour and storage quality.",
    forms: ["Fresh whole onions", "Red, pink and white varieties", "Size-graded to buyer requirement"],
    specifications: [
      { label: "Product", value: "Fresh onion (Allium cepa)" },
      { label: "Varieties", value: "Red, pink and white" },
      { label: "Sizing", value: "Graded by diameter to buyer requirement" },
      { label: "Country of origin", value: "India" },
      { label: "Seasonal availability", value: "Shared with each quotation" },
    ],
    packaging: ["Mesh (leno) bags", "Jute bags", "Cartons for retail programmes on request"],
    applications: [
      { icon: "globe", title: "Fresh markets", text: "Retail and wholesale produce supply." },
      { icon: "users", title: "Food service", text: "Restaurants, catering and institutional kitchens." },
      { icon: "layers", title: "Processing", text: "Dehydration, pastes and ready meals." },
    ],
    media: { image: "/images/products/onion.webp", alt: "Fresh onions", art: "field" },
  },
  {
    slug: "red-chilli",
    name: "Red Chilli",
    category: "agricultural",
    summary: "Dried whole red chillies in a range of heat and colour",
    description:
      "Dried red chillies from India's major chilli-growing regions, supplied whole with or without stems. Varieties differ in heat and colour, so the right grade can be matched to seasoning, colour or extraction needs.",
    forms: ["Whole, with stem", "Whole, stemless", "Crushed and powder on request"],
    specifications: [
      { label: "Product", value: "Dried red chilli (Capsicum annuum)" },
      { label: "Varieties", value: "Selected Indian varieties by heat and colour" },
      { label: "Pungency & colour value", value: onRequest },
      { label: "Country of origin", value: "India" },
      { label: "Documentation", value: "Specification sheet and certificate of analysis on request" },
    ],
    packaging: ["Compressed jute or PP bags", "Cartons for crushed and powder forms", "Custom packing on request"],
    applications: [
      { icon: "layers", title: "Spice blends", text: "Chilli powders, masalas and seasonings." },
      { icon: "flask", title: "Sauces & condiments", text: "Hot sauces, pastes and pickles." },
      { icon: "sprout", title: "Extraction", text: "Oleoresin and natural colour extraction." },
    ],
    media: { image: "/images/products/red-chilli.webp", alt: "Dried red chillies", art: "powder" },
  },
  {
    slug: "garlic",
    name: "Garlic",
    category: "agricultural",
    summary: "Fresh garlic bulbs, graded by size",
    description:
      "Fresh Indian garlic, cleaned and graded by bulb size for export. Known for its strong aroma and flavour, it is supplied for fresh markets and for food processing.",
    forms: ["Fresh whole bulbs", "Peeled cloves on request", "Dehydrated forms on request"],
    specifications: [
      { label: "Product", value: "Fresh garlic (Allium sativum)" },
      { label: "Sizing", value: "Graded by bulb diameter to buyer requirement" },
      { label: "Country of origin", value: "India" },
      { label: "Seasonal availability", value: "Shared with each quotation" },
    ],
    packaging: ["Mesh bags", "Cartons", "Custom packing on request"],
    applications: [
      { icon: "globe", title: "Fresh markets", text: "Retail and wholesale produce supply." },
      { icon: "layers", title: "Food processing", text: "Pastes, sauces, pickles and seasonings." },
      { icon: "users", title: "Food service", text: "Restaurants and catering kitchens." },
    ],
    media: { image: "/images/products/garlic.webp", alt: "Fresh garlic bulbs", art: "jar" },
  },
  {
    slug: "ginger",
    name: "Ginger",
    category: "agricultural",
    summary: "Fresh and dried ginger rhizomes",
    description:
      "Ginger rhizomes from Indian farms, supplied fresh or dried. Its warm, pungent flavour makes it essential across cuisines, beverages and wellness products.",
    forms: ["Fresh whole ginger", "Dried whole or split ginger", "Dried sliced and powder on request"],
    specifications: [
      { label: "Product", value: "Ginger (Zingiber officinale)" },
      { label: "Part used", value: "Rhizome" },
      { label: "Country of origin", value: "India" },
      { label: "Grade & moisture (dried)", value: onRequest },
      { label: "Documentation", value: "Specification sheet and certificate of analysis on request" },
    ],
    packaging: ["Mesh or jute bags (fresh)", "PP or jute bags (dried)", "Cartons on request"],
    applications: [
      { icon: "users", title: "Culinary", text: "Fresh cooking, pastes and marinades." },
      { icon: "sprout", title: "Beverages", text: "Teas, ginger ales and wellness drinks." },
      { icon: "flask", title: "Extracts", text: "Oleoresin, oils and supplement ingredients." },
    ],
    media: {
      image: "/images/products/ginger.webp",
      alt: "Fresh ginger roots and sliced ginger beside a bowl of ginger powder",
      art: "ginger",
    },
  },
  {
    slug: "turmeric",
    name: "Turmeric",
    category: "agricultural",
    summary: "Whole dried turmeric fingers and bulbs",
    description:
      "Whole turmeric from India, cured and dried as fingers and bulbs. It is supplied for grinding into powder, for extraction and for traditional use.",
    forms: ["Dried fingers", "Dried bulbs", "Polished and unpolished"],
    specifications: [
      { label: "Product", value: "Dried turmeric (Curcuma longa)" },
      { label: "Varieties", value: "Selected Indian varieties" },
      { label: "Curcumin content & moisture", value: onRequest },
      { label: "Country of origin", value: "India" },
      { label: "Documentation", value: "Specification sheet and certificate of analysis on request" },
    ],
    packaging: ["Jute or PP bags", "Custom packing on request"],
    applications: [
      { icon: "layers", title: "Grinding", text: "Raw material for turmeric powder." },
      { icon: "flask", title: "Extraction", text: "Curcumin and oleoresin extraction." },
      { icon: "sprout", title: "Natural colour", text: "Colouring for food and textiles." },
    ],
    media: {
      image: "/images/products/turmeric.webp",
      alt: "Turmeric roots and powder among dried herbs and spices on a wooden table",
      art: "turmeric",
    },
  },
  {
    slug: "cumin-seeds",
    name: "Cumin Seeds",
    category: "agricultural",
    summary: "Machine-cleaned whole cumin seeds",
    description:
      "Whole cumin seeds from India's principal cumin-growing regions, cleaned and graded for export. Their warm, earthy aroma makes cumin one of the most widely traded seed spices.",
    forms: ["Whole seeds", "Ground cumin on request"],
    specifications: [
      { label: "Product", value: "Cumin seeds (Cuminum cyminum)" },
      { label: "Cleaning", value: "Machine-cleaned; sortex cleaning on request" },
      { label: "Purity grade & moisture", value: onRequest },
      { label: "Country of origin", value: "India" },
      { label: "Documentation", value: "Specification sheet and certificate of analysis on request" },
    ],
    packaging: ["PP or jute bags", "Paper bags with inner liner", "Custom packing on request"],
    applications: [
      { icon: "layers", title: "Spice blends", text: "Curry powders, masalas and rubs." },
      { icon: "users", title: "Whole-seed seasoning", text: "Tempering, breads and cheeses." },
      { icon: "flask", title: "Extraction", text: "Essential oil and oleoresin." },
    ],
    media: { image: "/images/products/cumin-seeds.webp", alt: "Whole cumin seeds", art: "ginger" },
  },
  {
    slug: "coriander-seeds",
    name: "Coriander Seeds",
    category: "agricultural",
    summary: "Whole and split coriander seeds",
    description:
      "Coriander seeds from Indian farms, cleaned and graded for export. With a mild, citrusy aroma, they are used whole, split or ground in cuisines and food manufacturing worldwide.",
    forms: ["Whole seeds", "Split seeds", "Ground coriander on request"],
    specifications: [
      { label: "Product", value: "Coriander seeds (Coriandrum sativum)" },
      { label: "Cleaning", value: "Machine-cleaned; sortex cleaning on request" },
      { label: "Grade & moisture", value: onRequest },
      { label: "Country of origin", value: "India" },
      { label: "Documentation", value: "Specification sheet and certificate of analysis on request" },
    ],
    packaging: ["PP or jute bags", "Paper bags with inner liner", "Custom packing on request"],
    applications: [
      { icon: "layers", title: "Spice blends", text: "Curry powders, masalas and seasonings." },
      { icon: "flask", title: "Pickling & brewing", text: "Pickling spice and beverage flavouring." },
      { icon: "sprout", title: "Extraction", text: "Coriander seed oil and oleoresin." },
    ],
    media: { image: "/images/products/coriander-seeds.webp", alt: "Whole coriander seeds", art: "leaf" },
  },
  {
    slug: "other-agricultural-products",
    name: "Other Agricultural Products",
    category: "agricultural",
    summary: "Seasonal Indian agricultural produce and custom commodity sourcing",
    description:
      "Freshland Exports sources and exports a diverse range of Indian agricultural produce and specialty crops tailored to buyer specifications, volume requirements and international import standards.",
    forms: ["Fresh produce", "Whole & split", "Dried & dehydrated cuts", "Custom grades on request"],
    specifications: [
      { label: "Product line", value: "Indian Agricultural Commodities" },
      { label: "Sourcing origin", value: "Contract farms & partner grower networks across India" },
      { label: "Quality grading", value: "Export quality, sorted and graded to specification" },
      { label: "Country of origin", value: "India" },
      { label: "Documentation", value: "Phytosanitary certificate, COA and shipping docs on request" },
    ],
    packaging: ["Jute bags", "Mesh (leno) bags", "Corrugated cartons", "Bulk container bags"],
    applications: [
      { icon: "globe", title: "Global import", text: "Wholesale food distributors and importers." },
      { icon: "layers", title: "Food processing", text: "Industrial processors and ingredient manufacturers." },
      { icon: "users", title: "Food service", text: "Commercial hospitality kitchens and bulk supply." },
    ],
    media: {
      image: "/images/products/other-agricultural-products.webp",
      alt: "Other agricultural products and farmland harvest",
      art: "field",
    },
  },
];

/** Export practice common to the whole range. */
export const exportInformation = [
  { title: "Shipping", text: "Shipped from India by sea freight in containers; air freight for samples and urgent orders." },
  { title: "Commercial terms", text: "Incoterms such as FOB and CIF agreed per order." },
  {
    title: "Documentation",
    text: "Documents such as phytosanitary certificate, certificate of origin and certificate of analysis, as required by the destination market.",
  },
  { title: "Samples", text: "Product samples available on request before order confirmation." },
] as const;

export function findExportProduct(slug: string) {
  return exportProducts.find((product) => product.slug === slug);
}

export function relatedExportProducts(product: ExportProduct, limit = 4) {
  const sameCategory = exportProducts.filter(
    (candidate) => candidate.category === product.category && candidate.slug !== product.slug,
  );
  const others = exportProducts.filter((candidate) => candidate.category !== product.category);
  return [...sameCategory, ...others].slice(0, limit);
}

export type ProductMenuItem = {
  label: string;
  href: string;
  slug: string;
  /** Thumbnail; null when no photograph exists yet (a placeholder is shown). */
  image: string | null;
};

export type ProductMenuGroupId = "powders" | "agricultural" | "fruits" | "spices";

export type ProductMenuGroup = {
  id: ProductMenuGroupId;
  title: string;
  icon: IconName;
  /** Category image in the menu (from /images/dropdown-menu-icons/), or null. */
  cover: string | null;
  items: readonly ProductMenuItem[];
};

/**
 * The header's Products menu: four categories, each listing its products by
 * slug, each linking to /products/<slug>. Thumbnails come from
 * /images/dropdown-menu-icons/ (see dropdownIcons below).
 *
 * Onion / Onion Powder and Turmeric / Turmeric Powder are separate products
 * with separate slugs.
 */
const menuStructure: readonly {
  id: ProductMenuGroupId;
  title: string;
  icon: IconName;
  /** Category image file in /images/dropdown-menu-icons/. */
  coverFile: string;
  items: readonly (readonly [slug: string, label: string])[];
}[] = [
  {
    id: "powders",
    title: "Powder Products",
    icon: "sprout",
    coverFile: "Powder.png",
    items: [
      ["moringa-powder", "Moringa Powder"],
      ["onion-powder", "Onion Powder"],
      ["turmeric-powder", "Turmeric Powder"],
    ],
  },
  {
    id: "agricultural",
    title: "Agricultural Products",
    icon: "seedling",
    coverFile: "Vegetables.png",
    items: [
      ["onion", "Onion"],
      ["garlic", "Garlic"],
      ["elephant-yam", "Elephant Yam"],
      ["cabbage", "Cabbage"],
      ["cucumber", "Cucumber"],
      ["green-chili", "Green Chili"],
      ["frozen-peas", "Frozen Peas"],
      ["okra", "Okra"],
      ["bitter-gourd", "Bitter Gourd"],
      ["eggplant", "Eggplant"],
      ["drumstick", "Drumstick"],
      ["beans", "Beans"],
    ],
  },
  {
    id: "fruits",
    title: "Fruits",
    icon: "target",
    coverFile: "fruits.png",
    items: [
      ["mango", "Mango"],
      ["banana", "Banana"],
      ["grapes", "Grapes"],
      ["pomegranate", "Pomegranate"],
      ["orange", "Orange"],
      ["chikoo", "Chikoo"],
      ["papaya", "Papaya"],
      ["guava", "Guava"],
    ],
  },
  {
    id: "spices",
    title: "Spices",
    icon: "layers",
    coverFile: "Spices.png",
    items: [
      ["red-chilli", "Red Chilli"],
      ["black-pepper", "Black Pepper"],
      ["cumin-seeds", "Cumin Seeds"],
      ["coriander-seeds", "Coriander Seeds"],
      ["green-cardamom", "Green Cardamom"],
      ["cloves", "Cloves"],
      ["cinnamon", "Cinnamon"],
      ["mustard-seeds", "Mustard Seeds"],
      ["fennel-seeds", "Fennel Seeds"],
    ],
  },
];

/**
 * Dropdown thumbnails in /public/images/dropdown-menu-icons/, by product slug
 * (filenames as supplied, including spaces and capitals). A product missing
 * here keeps the menu's placeholder icon — no substitute image is used.
 */
const dropdownIcons: Record<string, string> = {
  "moringa-powder": "Moringa Powder.webp",
  "onion-powder": "Onion Powder.webp",
  "turmeric-powder": "Turmeric Powder.webp",
  onion: "Onion.webp",
  garlic: "Garlic.webp",
  "elephant-yam": "Yarn.webp",
  cabbage: "Cabbage.webp",
  cucumber: "Cucumber.webp",
  "green-chili": "Green chilli.webp",
  "frozen-peas": "Frozen Peas.webp",
  okra: "Okra.webp",
  "bitter-gourd": "Bitter Gourd.webp",
  eggplant: "EggPlant.webp",
  drumstick: "Drumstick.webp",
  beans: "Beans.webp",
  mango: "Mango.webp",
  banana: "Banana.webp",
  grapes: "Grapes.webp",
  pomegranate: "Pomogranate.webp",
  orange: "Orange.webp",
  chikoo: "Chikoo.webp",
  papaya: "Papaya.webp",
  guava: "Guava.webp",
  "red-chilli": "Red Chilli.webp",
  "black-pepper": "Black Pepper.webp",
  "cumin-seeds": "Cumin Seeds.webp",
  "coriander-seeds": "Coriander Seeds.webp",
  "green-cardamom": "Green Cardamom.webp",
  cloves: "Clove.webp",
  cinnamon: "Cinnamon.webp",
  "mustard-seeds": "Mustard Seeds.webp",
  "fennel-seeds": "Fennel Seeds.webp",
};

/** Public URL for a dropdown icon; spaces and capitals are encoded safely. */
const dropdownIcon = (file: string) => `/images/dropdown-menu-icons/${encodeURIComponent(file)}`;

export const productMenu: readonly ProductMenuGroup[] = menuStructure.map((group) => ({
  id: group.id,
  title: group.title,
  icon: group.icon,
  cover: dropdownIcon(group.coverFile),
  items: group.items.map(([slug, label]) => ({
    label,
    slug,
    href: exportProductHref(slug),
    image: dropdownIcons[slug] ? dropdownIcon(dropdownIcons[slug]) : null,
  })),
}));

export type MenuOnlyProduct = { slug: string; name: string; groupTitle: string };

/** Menu products without a catalogue entry — each gets an enquiry page. */
export const menuOnlyProducts: readonly MenuOnlyProduct[] = productMenu.flatMap((group) =>
  group.items
    .filter((item) => !findExportProduct(item.slug))
    .map((item) => ({ slug: item.slug, name: item.label, groupTitle: group.title })),
);

export function findMenuOnlyProduct(slug: string) {
  return menuOnlyProducts.find((product) => product.slug === slug);
}
