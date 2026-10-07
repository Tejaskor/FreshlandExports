/**
 * Card and article images for every Blog article, by product slug, in the
 * same order as that product's articles in features/products/blog.ts.
 *
 * A product's three articles always carry three different photographs,
 * chosen to fit the topic: the product's own dedicated shots where they
 * exist (quality, processing, storage, applications), otherwise the product
 * photograph for one article and Freshland's own farm, quality-check and
 * facility photography for the others. No article shows another product.
 * To give an article its own photograph, replace its entry here.
 */

export type ArticleImage = { src: string; alt: string };
type Trio = readonly [ArticleImage, ArticleImage, ArticleImage];

const product = (file: string) => `/images/products/${file}`;

/** The product's own catalogue photograph. */
const shot = (file: string, name: string): ArticleImage => ({
  src: product(file),
  alt: `${name}, selected for export`,
});

/* --- Freshland photography shared across articles --------------------- */

const inspection: ArticleImage = {
  src: "/images/farms/farmers-working-together.webp",
  alt: "Two growers checking freshly harvested produce in woven baskets",
};
const fieldCheck: ArticleImage = {
  src: "/images/farms/farmer-hand-planting-crops.webp",
  alt: "A grower and a field officer examining a crop in the field",
};
const harvest: ArticleImage = {
  src: "/images/farms/agricultural-network-indian-farm.webp",
  alt: "A farmer harvesting by hand, with baskets of produce beside the rows",
};
const cultivation: ArticleImage = {
  src: "/images/farms/farmer-cultivating-crops.webp",
  alt: "Farmers tending rows of green crops in the early morning",
};
const grower: ArticleImage = {
  src: "/images/farms/farmer-portrait-indian-farmer.webp",
  alt: "A farmer picking fresh produce in a sunlit field",
};
const network: ArticleImage = {
  src: "/images/farms/agricultural-network-global-farms.webp",
  alt: "Farmers sorting harvested produce into baskets at the field edge",
};
const farmland: ArticleImage = {
  src: "/images/home/sustainability/sustainable-farmland.webp",
  alt: "Rows of crops stretching across open farmland towards the hills",
};
const labTesting: ArticleImage = {
  src: "/images/r-and-d/rnd-lab-herbal-testing.webp",
  alt: "A technician preparing plant samples for quality testing in the laboratory",
};
const microscope: ArticleImage = {
  src: "/images/r-and-d/rnd-lab-microscope-analysis.webp",
  alt: "A microscope and sample dishes on a quality-control laboratory bench",
};
const shipping: ArticleImage = {
  src: "/images/home/story/across-the-world.webp",
  alt: "A container ship in port beneath a world map, representing global export",
};

/** Freshland's facility, where produce is graded, packed and stored. */
const facility = (variant: "" | "2" | "4" | "5" | "6" | "7" | "certificates"): ArticleImage => ({
  src: variant === "certificates" ? "/images/certificates/hero-facility.webp" : `/images/home/hero/hero-facility${variant}.webp`,
  alt: "The Freshland Exports facility where produce is graded, packed and stored",
});

export const articleImages: Record<string, Trio> = {
  /* --- Powder products ------------------------------------------------- */
  "moringa-powder": [
    {
      src: product("Moringa Powder/moringa-powder-nutritional-value.webp"),
      alt: "A wooden spoon of fine green moringa powder beside a sprig of fresh moringa leaves",
    },
    { src: product("Moringa Powder/moringa-leaf-drying.webp"), alt: "Moringa leaflets spread on trays to dry" },
    { src: product("Moringa Powder/moringa-green-smoothie.webp"), alt: "A green smoothie made with moringa powder" },
  ],
  "onion-powder": [
    {
      src: product("Onion Powder/onion-powder-industrial-processing.webp"),
      alt: "Onion powder being prepared and checked in a food processing room",
    },
    { src: product("Onion Powder/onion-powder-hero.webp"), alt: "A bowl of fine, free-flowing onion powder between whole onions" },
    {
      src: product("Onion Powder/onion-powder-culinary-uses.webp"),
      alt: "Onion powder seasoning a pan of roasted vegetables",
    },
  ],
  "turmeric-powder": [
    {
      src: product("Turmeric Powder/turmeric-powder-insights.webp"),
      alt: "Bright golden turmeric powder in a wooden bowl beside cut turmeric rhizomes",
    },
    {
      src: product("Turmeric Powder/turmeric-roots-powder.webp"),
      alt: "Whole and sliced turmeric rhizomes beside a bowl of ground turmeric",
    },
    {
      src: product("Turmeric Powder/turmeric-powder-food-applications.webp"),
      alt: "Turmeric powder beside a turmeric drink and a spiced vegetable dish",
    },
  ],

  "red-chilli-powder": [labTesting, facility("5"), facility("2")],
  "black-pepper-powder": [microscope, facility("6"), shot("Black Pepper Powder.webp", "Ground black pepper")],
  "coriander-seeds-powder": [shipping, fieldCheck, facility("7")],
  "garlic-powder": [labTesting, facility("4"), facility("6")],
  "dry-mango-powder": [microscope, harvest, facility("7")],
  "garam-masala": [inspection, shipping, facility("2")],
  "white-pepper-powder": [labTesting, facility("5"), shipping],
  "nutmeg-powder": [microscope, facility("2"), facility("6")],
  "dry-ginger-powder": [shot("Dry Ginger Powder.webp", "Ginger powder"), facility("5"), shipping],
  "clove-powder": [microscope, facility("6"), labTesting],
  /* --- Agricultural products ------------------------------------------- */
  onion: [
    {
      src: product("Agricultural Products/Onion/fresh-onion-quality-inspection.webp"),
      alt: "Fresh onions being inspected for size and skin quality",
    },
    {
      src: product("Agricultural Products/Onion/fresh-onion-storage-handling.webp"),
      alt: "Fresh onions in breathable bags in a ventilated store",
    },
    { src: product("Agricultural Products/Onion/fresh-onion-selection.webp"), alt: "Red, pink and white onions side by side" },
  ],
  garlic: [
    {
      src: product("Agricultural Products/Garlic/fresh-garlic-bulbs-quality.webp"),
      alt: "Whole white garlic bulbs and cloves, checked for size and firmness",
    },
    {
      src: product("Agricultural Products/Garlic/garlic-bulk-sourcing-quality.webp"),
      alt: "Fresh garlic laid out at a packhouse beside the growing fields",
    },
    { src: product("Agricultural Products/Garlic/fresh-garlic-hero.webp"), alt: "Fresh garlic bulbs with peeled cloves" },
  ],
  "elephant-yam": [
    {
      src: product("Agricultural Products/Elephant Yam/elephant-yam-bulk-quality.webp"),
      alt: "Whole elephant foot yams, one cut open to show the flesh",
    },
    { src: product("Agricultural Products/Elephant Yam/elephant-yam-hero.webp"), alt: "Whole and halved elephant foot yams" },
    {
      src: product("Agricultural Products/Elephant Yam/elephant-yam-culinary-applications.webp"),
      alt: "Diced elephant yam beside a pan of yam curry",
    },
  ],
  cabbage: [
    {
      src: product("Agricultural Products/Cabbage/fresh-cabbage-quality-inspection.webp"),
      alt: "Fresh cabbage heads being inspected for weight and compactness",
    },
    {
      src: product("Agricultural Products/Cabbage/cabbage-export-quality.webp"),
      alt: "Firm green cabbage heads ready for cool-chain packing",
    },
    { src: product("Agricultural Products/Cabbage/fresh-cabbage-salads.webp"), alt: "Shredded cabbage in a fresh salad" },
  ],
  cucumber: [
    {
      src: product("Agricultural Products/Cucumber/fresh-cucumber-quality-inspection.webp"),
      alt: "Fresh cucumbers being checked for length, straightness and colour",
    },
    {
      src: product("Agricultural Products/Cucumber/fresh-cucumber-sorting-packing.webp"),
      alt: "Cucumbers being sorted and packed for shipment",
    },
    { src: product("Agricultural Products/Cucumber/fresh-cucumber-pickling.webp"), alt: "Cucumbers prepared for pickling" },
  ],
  "green-chili": [
    {
      src: product("Agricultural Products/Green Chili/green-chilli-export-quality.webp"),
      alt: "Long, glossy green chillies sorted on a stainless steel table",
    },
    {
      src: product("GreenChillies/green-chilli-export-quality.png"),
      alt: "Fresh green chillies spread on steel trays in a packhouse",
    },
    {
      src: product("Agricultural Products/Green Chili/green-chilli-applications.webp"),
      alt: "Green chillies beside a pan of spiced vegetables and fresh ingredients",
    },
  ],
  "frozen-peas": [labTesting, facility("certificates"), shot("Frozen Peas.webp", "Frozen green peas")],
  okra: [fieldCheck, facility(""), shot("Okra.webp", "Fresh okra")],
  "bitter-gourd": [cultivation, facility("2"), shot("Bitter Gourd.webp", "Fresh bitter gourd")],
  eggplant: [shot("EggPlant.webp", "Fresh eggplant"), facility("4"), network],
  drumstick: [grower, facility("5"), shot("Drumstick.webp", "Fresh drumstick pods")],
  beans: [harvest, facility("6"), shot("Beans.webp", "Fresh green beans")],

  /* --- Fruits ---------------------------------------------------------- */
  mango: [
    { src: "/images/farms/hero-green-mangoes.webp", alt: "Green mangoes ripening on the tree" },
    inspection,
    shot("Mango.webp", "Ripe mangoes"),
  ],
  banana: [shot("Banana.webp", "Fresh bananas"), facility("7"), farmland],
  grapes: [shot("Grapes.webp", "Fresh table grapes"), facility(""), network],
  pomegranate: [fieldCheck, facility("2"), shot("Pomogranate.webp", "Fresh pomegranates")],
  orange: [grower, facility("4"), shot("Orange.webp", "Fresh oranges")],
  chikoo: [cultivation, facility("5"), shot("Chikoo.webp", "Fresh chikoo")],
  papaya: [harvest, facility("6"), shot("Papaya.webp", "Fresh papaya")],
  guava: [inspection, facility("7"), shot("Guava.webp", "Fresh guava")],

  /* --- Spices ---------------------------------------------------------- */
  turmeric: [
    {
      src: "/images/home/products/Organic Turmeric Powder.webp",
      alt: "Whole turmeric fingers, one cut to show its colour, beside ground turmeric",
    },
    harvest,
    {
      src: "/images/about/about-hero-turmeric-powder.webp",
      alt: "Ground turmeric in a wooden bowl, ready for grinding and blending",
    },
  ],
  "red-chilli": [shot("Red Chilli.webp", "Dried red chillies"), network, facility("certificates")],
  "black-pepper": [
    shot("Black Pepper.webp", "Whole black peppercorns"),
    harvest,
    {
      src: "/images/home/products/Organic Black Pepper Powder.webp",
      alt: "Ground black pepper in a wooden bowl beside whole peppercorns",
    },
  ],
  "cumin-seeds": [labTesting, facility(""), shot("Cumin Seeds.webp", "Whole cumin seeds")],
  "coriander-seeds": [microscope, farmland, shot("Coriander Seeds.webp", "Whole coriander seeds")],
  "green-cardamom": [inspection, facility("2"), shot("Green Cardamom.webp", "Green cardamom pods")],
  cloves: [labTesting, facility("4"), shot("Clove.webp", "Whole cloves")],
  cinnamon: [
    shot("Cinnamon.webp", "Cinnamon quills"),
    microscope,
    {
      src: "/images/signature ingredients/cinaplus-cinnamon.webp",
      alt: "Cinnamon sticks beside a bowl of ground cinnamon",
    },
  ],
  "mustard-seeds": [shot("Mustard Seeds.webp", "Mustard seeds"), facility("5"), cultivation],
  "fennel-seeds": [fieldCheck, facility("6"), shot("Fennel Seeds.webp", "Green fennel seeds")],
  "fenugreek-seeds": [microscope, shot("Fenugreek Seeds.webp", "Golden fenugreek seeds"), facility("7")],
  "psyllium-seed": [inspection, facility("4"), shipping],
  ginger: [harvest, facility("7"), shot("ginger.webp", "Fresh ginger and ground dried ginger")],

  "other-agricultural-products": [
    {
      src: product("Vegetables.png"),
      alt: "An assortment of fresh vegetables from Freshland's agricultural range",
    },
    farmland,
    shipping,
  ],
};
