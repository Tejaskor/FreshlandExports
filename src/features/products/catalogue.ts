import { exportProductHref } from "@/features/products/export-catalogue";

/**
 * The /products catalogue: every product with a page, grouped as the header's
 * Products menu groups them. Photography comes only from the root of
 * public/images/products/ (the 1254 px product shots; the nested page folders
 * are not used here). Descriptions stay general — no grades, origins,
 * certifications or shelf-life claims.
 */

export type CatalogueProduct = {
  slug: string;
  name: string;
  /** One short, product-specific line. */
  description: string;
  /** File name inside public/images/products/. */
  image: string;
  alt: string;
};

export type CatalogueCategoryId = "powders" | "agricultural" | "fruits" | "spices";

export type CatalogueCategory = {
  id: CatalogueCategoryId;
  /** Short label shown on each card. */
  label: string;
  heading: string;
  description: string;
  /** In-page anchor; product breadcrumbs link to the first two. */
  anchor: string;
  products: readonly CatalogueProduct[];
};

export const catalogueImage = (file: string) => `/images/products/${file}`;
export const catalogueHref = exportProductHref;

export const catalogue: readonly CatalogueCategory[] = [
  {
    id: "powders",
    label: "Powder Products",
    heading: "Botanical Powders",
    description: "Finely processed agricultural ingredients selected for food, beverage and commercial applications.",
    anchor: "powder-products",
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
    ],
  },
  {
    id: "agricultural",
    label: "Agricultural Products",
    heading: "Fresh Agricultural Produce",
    description:
      "Freshly sourced vegetables and agricultural produce prepared for wholesale, food-service and export requirements.",
    anchor: "agricultural-products",
    products: [
      {
        slug: "onion",
        name: "Fresh Onion",
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
    anchor: "fruits",
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
    anchor: "spices",
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
    ],
  },
];
