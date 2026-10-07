import type { IconName } from "@/components/ui/icon";

/**
 * The central product catalogue — the one list every part of the site reads.
 *
 * Adding a product here is enough for it to appear on /products, in the
 * header's Products menu (desktop and mobile), in the route list
 * (/products/<slug>), in related-product strips and in the Blog's product
 * index. A product page's long-form content lives in its own file under
 * features/agri/content/, keyed by the same slug.
 *
 * Each product has one `image`, read by every listing — the Products page,
 * the header menu, Featured Products and related products — so a photo is
 * replaced in one place. A product without its own photograph has
 * `image: null` and shows the placeholder art — never another product's
 * photo. Descriptions stay general — no grades, origins,
 * certifications or shelf-life claims.
 */

export type CatalogueProduct = {
  slug: string;
  name: string;
  /** Name in the header menu, when it differs from `name`. */
  menuLabel?: string;
  /** One short, product-specific line. */
  description: string;
  /**
   * The product's one photograph, used by every listing (Products page,
   * header menu, Featured Products, related products): a file name inside
   * public/images/products/, a full public path, or null for placeholder art.
   */
  image: string | null;
  alt: string;
  /** Slugs shown as related products; defaults to the same category. */
  related?: readonly string[];
};

export type CatalogueCategoryId = "powders" | "agricultural" | "fruits" | "spices";

export type CatalogueCategory = {
  id: CatalogueCategoryId;
  /** Short label shown on each card, and the category's title in the header menu. */
  label: string;
  heading: string;
  description: string;
  /** Short line for the homepage "Our Categories" card. */
  summary: string;
  /** In-page anchor; product breadcrumbs and the homepage cards link to it. */
  anchor: string;
  /**
   * Category photograph: a file in the root of public/images/products/ (the
   * header menu shows its copy in /images/dropdown-menu-icons/).
   */
  cover: { file: string; alt: string };
  /** Homepage "Our Categories" card photograph (public path). */
  card: { image: string; alt: string };
  /** Header menu icon. */
  menu: { icon: IconName };
  products: readonly CatalogueProduct[];
};

/** Public URL of a product or category image (a bare file name lives in /images/products/). */
export const catalogueImage = (file: string | null) =>
  file ? (file.startsWith("/") ? file : `/images/products/${file}`) : null;
export const catalogueHref = (slug: string) => `/products/${slug}`;
/** A category's section on /products. */
export const catalogueCategoryHref = (category: CatalogueCategory) => `/products#${category.anchor}`;

export const catalogue: readonly CatalogueCategory[] = [
  {
    id: "powders",
    label: "Powder Products",
    heading: "Botanical Powders",
    description: "Finely processed agricultural ingredients selected for food, beverage and commercial applications.",
    summary: "Carefully processed powders for food and commercial applications.",
    anchor: "powder-products",
    cover: {
      file: "Powder.png",
      alt: "Bowls of moringa, turmeric and onion powders beside fresh turmeric root, moringa leaves and onions",
    },
    card: {
      image: "/images/home/categories/Botanicalpowder.webp",
      alt: "Bowls of moringa, turmeric and onion powders with turmeric root and onions on a sunlit stone surface",
    },
    menu: { icon: "sprout" },
    products: [
      {
        slug: "moringa-powder",
        name: "Moringa Powder",
        description: "Finely milled moringa leaf powder for food, beverage and ingredient applications.",
        image: "Moringa Powder.webp",
        alt: "Green moringa powder in a wooden bowl with fresh moringa leaves",
      },
      {
        slug: "onion-powder",
        name: "Onion Powder",
        description: "Dehydrated onion powder for seasonings, sauces, snacks and ready meals.",
        image: "Onion Powder.webp",
        alt: "Onion powder in a bowl beside whole onions",
      },
      {
        slug: "turmeric-powder",
        name: "Turmeric Powder",
        description: "Ground turmeric for spice blends, food colouring and beverage applications.",
        image: "Turmeric Powder.webp",
        alt: "Golden turmeric powder with turmeric roots",
      },
      {
        slug: "red-chilli-powder",
        name: "Red Chilli Powder",
        description: "Ground dried red chillies for heat and colour in masalas, sauces and seasonings.",
        image: "/images/home/products/red-chilli-powder.webp",
        alt: "Bright red chilli powder in a wooden bowl beside whole dried red chillies",
        related: ["turmeric-powder", "coriander-seeds-powder", "garam-masala", "red-chilli"],
      },
      {
        slug: "black-pepper-powder",
        name: "Black Pepper Powder",
        description: "Ground black pepper for seasonings, snack coatings, sauces and processed foods.",
        image: "/images/home/products/black-pepper-powder.webp",
        alt: "Ground black pepper in a wooden bowl beside whole black peppercorns and a scoop",
        related: ["red-chilli-powder", "turmeric-powder", "coriander-seeds-powder", "garlic-powder"],
      },
      {
        slug: "coriander-seeds-powder",
        name: "Coriander Seeds Powder",
        description: "Ground coriander seed for curry powders, masalas, marinades and ready meals.",
        image: "/images/home/products/coriander-seeds-powder.webp",
        alt: "Ground coriander in a wooden bowl beside whole coriander seeds",
        related: ["turmeric-powder", "red-chilli-powder", "garam-masala", "coriander-seeds"],
      },
      {
        slug: "garlic-powder",
        name: "Garlic Powder",
        description: "Dehydrated garlic powder for seasonings, rubs, sauces and snack coatings.",
        image: "/images/home/products/garlic-powder.webp",
        alt: "Garlic powder in a wooden bowl beside whole garlic bulbs and cloves",
        related: ["onion-powder", "black-pepper-powder", "red-chilli-powder", "dry-ginger-powder"],
      },
      {
        slug: "dry-mango-powder",
        name: "Dry Mango Powder",
        description: "Amchur from dried unripe mango, adding tang to chaats, chutneys and spice blends.",
        image: "/images/home/products/dry-mango-powder.webp",
        alt: "Dry mango powder (amchur) in a wooden bowl beside dried mango slices and green mangoes",
        related: ["red-chilli-powder", "garam-masala", "coriander-seeds-powder", "turmeric-powder"],
      },
      {
        slug: "garam-masala",
        name: "Garam Masala",
        description: "A warm, aromatic blend of ground spices for curries, gravies and ready meals.",
        image: "/images/home/products/garam-masala.webp",
        alt: "Garam masala in a wooden bowl among cinnamon, star anise, cardamom and peppercorns",
        related: ["clove-powder", "nutmeg-powder", "black-pepper-powder", "coriander-seeds-powder"],
      },
      {
        slug: "white-pepper-powder",
        name: "White Pepper Powder",
        description: "Ground white pepper for pale sauces, soups, dressings and seasoning blends.",
        image: "/images/home/products/white-pepper-powder.webp",
        alt: "White pepper powder in a ceramic bowl beside whole white peppercorns",
        related: ["black-pepper-powder", "nutmeg-powder", "garlic-powder", "onion-powder"],
      },
      {
        slug: "nutmeg-powder",
        name: "Nutmeg Powder",
        description: "Ground nutmeg for bakery, desserts, dairy, beverages and spice blends.",
        image: "/images/home/products/nutmeg-powder.webp",
        alt: "Ground nutmeg in a wooden bowl beside whole nutmegs",
        related: ["clove-powder", "dry-ginger-powder", "garam-masala", "cinnamon"],
      },
      {
        slug: "dry-ginger-powder",
        name: "Dry Ginger Powder",
        description: "Ground dried ginger (sonth) for bakery, beverages, spice blends and seasonings.",
        image: "/images/home/products/dry-ginger-powder.webp",
        alt: "Dry ginger powder in a wooden bowl beside dried and fresh ginger root",
        related: ["turmeric-powder", "clove-powder", "nutmeg-powder", "garlic-powder"],
      },
      {
        slug: "clove-powder",
        name: "Clove Powder",
        description: "Ground cloves for spice blends, bakery, marinades and meat seasonings.",
        image: "/images/home/products/clove-powder.webp",
        alt: "Ground cloves in a wooden bowl beside whole cloves",
        related: ["cinnamon", "black-pepper-powder", "nutmeg-powder", "dry-ginger-powder"],
      },
    ],
  },
  {
    id: "agricultural",
    label: "Agricultural Products",
    heading: "Fresh Agricultural Produce",
    description:
      "Freshly sourced vegetables and agricultural produce prepared for wholesale, food-service and export requirements.",
    summary: "Fresh produce for wholesale, food service and export.",
    anchor: "agricultural-products",
    cover: {
      file: "Vegetables.png",
      alt: "Fresh cabbage, onions, garlic, cucumbers, green beans and green chillies",
    },
    card: {
      image: "/images/home/categories/Agriculturalproduct.webp",
      alt: "Fresh cabbage, onions, garlic, cucumbers, beans and green chillies on a sunlit stone surface",
    },
    menu: { icon: "seedling" },
    products: [
      {
        slug: "onion",
        name: "Fresh Onion",
        menuLabel: "Onion",
        description: "Fresh firm onions selected for wholesale, food-service and food-processing applications.",
        image: "Onion.webp",
        alt: "Fresh red onions",
      },
      {
        slug: "garlic",
        name: "Garlic",
        description: "Whole garlic bulbs for fresh markets, kitchens and processing lines.",
        image: "Garlic.webp",
        alt: "Whole garlic bulbs and cloves",
      },
      {
        slug: "elephant-yam",
        name: "Elephant Yam",
        description: "Firm elephant foot yam for curries, chips and ethnic retail.",
        image: "Yarn.webp",
        alt: "A whole elephant foot yam beside a cut piece",
      },
      {
        slug: "cabbage",
        name: "Cabbage",
        description: "Compact green cabbage heads for retail, salads and food processing.",
        image: "Cabbage.webp",
        alt: "Fresh green cabbage heads",
      },
      {
        slug: "cucumber",
        name: "Cucumber",
        description: "Fresh green cucumbers for salads, slicing and fresh-cut lines.",
        image: "Cucumber.webp",
        alt: "Fresh green cucumbers",
      },
      {
        slug: "green-chili",
        name: "Green Chili",
        description: "Fresh green chillies for cooking, sauces and pickles.",
        image: "Green chilli.webp",
        alt: "Fresh green chillies",
      },
      {
        slug: "frozen-peas",
        name: "Frozen Peas",
        description: "Frozen green peas for ready meals, food service and retail packs.",
        image: "Frozen Peas.webp",
        alt: "Frozen green peas",
      },
      {
        slug: "okra",
        name: "Okra",
        description: "Tender okra pods for curries, stir-fries and frozen food lines.",
        image: "Okra.webp",
        alt: "Fresh green okra pods",
      },
      {
        slug: "bitter-gourd",
        name: "Bitter Gourd",
        description: "Fresh ridged bitter gourd for Asian cooking and juices.",
        image: "Bitter Gourd.webp",
        alt: "Fresh green bitter gourds",
      },
      {
        slug: "eggplant",
        name: "Eggplant",
        description: "Glossy eggplant for curries, grilling and food-service menus.",
        image: "EggPlant.webp",
        alt: "Glossy purple eggplants",
      },
      {
        slug: "drumstick",
        name: "Drumstick",
        description: "Fresh moringa drumstick pods for sambar, curries and frozen packs.",
        image: "Drumstick.webp",
        alt: "Fresh drumstick pods",
      },
      {
        slug: "beans",
        name: "Beans",
        description: "Crisp green beans for retail, food service and freezing.",
        image: "Beans.webp",
        alt: "Fresh green beans",
      },
    ],
  },
  {
    id: "fruits",
    label: "Fruits",
    heading: "Fresh Fruits",
    description: "Selected Indian fruits supplied for wholesale, food-service and international markets.",
    summary: "Selected fresh fruits for wholesale and international markets.",
    anchor: "fruits",
    cover: {
      file: "fruits.png",
      alt: "Fresh mangoes, bananas, oranges, pomegranate, guavas and grapes",
    },
    card: {
      image: "/images/home/categories/Fruits.webp",
      alt: "Mango, bananas, pomegranate, orange, guavas and grapes on a sunlit stone surface",
    },
    menu: { icon: "target" },
    products: [
      {
        slug: "mango",
        name: "Mango",
        description: "Fresh Indian mangoes selected for wholesale and international supply.",
        image: "Mango.webp",
        alt: "Ripe mangoes with a cubed mango half",
      },
      {
        slug: "banana",
        name: "Banana",
        description: "Bananas supplied for retail, wholesale and ripening at destination.",
        image: "Banana.webp",
        alt: "A bunch of fresh bananas",
      },
      {
        slug: "grapes",
        name: "Grapes",
        description: "Table grapes for fresh retail and wholesale markets.",
        image: "Grapes.webp",
        alt: "Bunches of fresh green and black grapes",
      },
      {
        slug: "pomegranate",
        name: "Pomegranate",
        description: "Pomegranates with deep red arils for fresh retail, arils and juice.",
        image: "Pomogranate.webp",
        alt: "A whole pomegranate beside a split fruit showing red arils",
      },
      {
        slug: "orange",
        name: "Orange",
        description: "Fresh oranges for the fruit bowl, juice bars and processing.",
        image: "Orange.webp",
        alt: "Fresh oranges with leaves",
      },
      {
        slug: "chikoo",
        name: "Chikoo",
        description: "Sweet chikoo (sapota) for fresh retail, shakes and desserts.",
        image: "Chikoo.webp",
        alt: "Ripe chikoo fruits with one cut open",
      },
      {
        slug: "papaya",
        name: "Papaya",
        description: "Papaya for fresh retail, fruit salads and pulp.",
        image: "Papaya.webp",
        alt: "Ripe papaya halves with black seeds",
      },
      {
        slug: "guava",
        name: "Guava",
        description: "Fragrant guavas for fresh retail, juices and jams.",
        image: "Guava.webp",
        alt: "Fresh guavas with a halved fruit",
      },
    ],
  },
  {
    id: "spices",
    label: "Spices",
    heading: "Whole Spices",
    description: "Indian spices selected for aroma, appearance and commercial food applications.",
    summary: "Selected spices for flavour, aroma and food applications.",
    anchor: "spices",
    cover: {
      file: "Spices.png",
      alt: "Bowls of whole spices: red chillies, cinnamon, black pepper, cumin, cloves, cardamom and mustard seeds",
    },
    card: {
      image: "/images/home/categories/Spices.webp",
      alt: "Bowls of red chillies, cinnamon, black pepper, cumin, cloves and cardamom on a sunlit stone surface",
    },
    menu: { icon: "layers" },
    products: [
      {
        slug: "red-chilli",
        name: "Red Chilli",
        description: "Dried red chillies for heat, colour and spice blends.",
        image: "Red Chilli.webp",
        alt: "Dried red chillies",
      },
      {
        slug: "black-pepper",
        name: "Black Pepper",
        description: "Whole black pepper selected for aroma, appearance and commercial food applications.",
        image: "Black Pepper.webp",
        alt: "Whole black peppercorns",
      },
      {
        slug: "cumin-seeds",
        name: "Cumin Seeds",
        description: "Cleaned cumin seeds for spice blends, tempering and ground cumin.",
        image: "Cumin Seeds.webp",
        alt: "Whole cumin seeds",
      },
      {
        slug: "coriander-seeds",
        name: "Coriander Seeds",
        description: "Whole coriander seeds for spice mixes, pickling and grinding.",
        image: "Coriander Seeds.webp",
        alt: "Whole coriander seeds",
      },
      {
        slug: "green-cardamom",
        name: "Green Cardamom",
        description: "Aromatic green cardamom pods for tea, sweets and bakery.",
        image: "Green Cardamom.webp",
        alt: "Green cardamom pods",
      },
      {
        slug: "cloves",
        name: "Cloves",
        description: "Whole cloves for spice blends, baking and seasoning.",
        image: "Clove.webp",
        alt: "Whole dried cloves",
      },
      {
        slug: "cinnamon",
        name: "Cinnamon",
        description: "Cinnamon quills for bakery, beverages and spice blends.",
        image: "Cinnamon.webp",
        alt: "Cinnamon sticks",
      },
      {
        slug: "mustard-seeds",
        name: "Mustard Seeds",
        description: "Mustard seeds for tempering, pickles and condiments.",
        image: "Mustard Seeds.webp",
        alt: "Whole mustard seeds",
      },
      {
        slug: "fennel-seeds",
        name: "Fennel Seeds",
        description: "Green fennel seeds for mouth fresheners, teas and baking.",
        image: "Fennel Seeds.webp",
        alt: "Green fennel seeds",
      },
      {
        slug: "fenugreek-seeds",
        name: "Fenugreek Seeds",
        description: "Golden fenugreek (methi) seeds for tempering, pickles, spice blends and grinding.",
        image: "Fenugreek Seeds.webp",
        alt: "Golden fenugreek seeds in a wooden bowl with fresh fenugreek leaves",
        related: ["cumin-seeds", "coriander-seeds", "fennel-seeds", "mustard-seeds"],
      },
      {
        slug: "psyllium-seed",
        name: "Psyllium Seed",
        description: "Whole psyllium (isabgol) seed for husk processing, food and fibre applications.",
        image: null,
        alt: "Psyllium seed",
        related: ["fenugreek-seeds", "fennel-seeds", "mustard-seeds", "cumin-seeds"],
      },
    ],
  },
];

/** Every product, in catalogue order. */
export const catalogueProducts = catalogue.flatMap((category) =>
  category.products.map((product) => ({ ...product, category })),
);

export type CatalogueEntry = (typeof catalogueProducts)[number];

export function findCatalogueProduct(slug: string) {
  return catalogueProducts.find((product) => product.slug === slug);
}

/**
 * Related products for a product page: the product's own `related` list
 * when set, otherwise the rest of its category, then the wider range.
 */
export function relatedCatalogueProducts(slug: string, limit = 4): readonly CatalogueEntry[] {
  const product = findCatalogueProduct(slug);
  if (!product) return [];

  const chosen = (product.related ?? [])
    .map((related) => findCatalogueProduct(related))
    .filter((related): related is CatalogueEntry => Boolean(related));
  const sameCategory = catalogueProducts.filter(
    (candidate) => candidate.category.id === product.category.id && candidate.slug !== slug,
  );
  const others = catalogueProducts.filter((candidate) => candidate.category.id !== product.category.id);

  const seen = new Set<string>([slug]);
  return [...chosen, ...sameCategory, ...others]
    .filter((candidate) => !seen.has(candidate.slug) && Boolean(seen.add(candidate.slug)))
    .slice(0, limit);
}
