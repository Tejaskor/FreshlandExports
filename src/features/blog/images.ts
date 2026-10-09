/**
 * Card and article images for every Blog article, by product slug, in the
 * same order as that product's articles in features/products/blog.ts.
 *
 * Each article carries a photograph chosen for its own topic: the product's
 * dedicated shots where they exist (quality, processing, storage,
 * applications), otherwise a photograph of that product in that context
 * saved as public/images/Blog/<article-slug>.webp. Those are Wikimedia
 * Commons photographs, credited on /image-credits
 * (features/agri/content/photo-credits.ts). No article shows another product.
 * To give an article a different photograph, replace its entry here.
 */

export type ArticleImage = { src: string; alt: string };
type Trio = readonly [ArticleImage, ArticleImage, ArticleImage];

const product = (file: string) => `/images/products/${file}`;

/** An article's own photograph, saved under its URL slug. */
const article = (slug: string, alt: string): ArticleImage => ({ src: `/images/Blog/${slug}.webp`, alt });

/* --- Freshland photography, until a topic-specific photograph is found -- */

const labTesting: ArticleImage = {
  src: "/images/r-and-d/rnd-lab-herbal-testing.webp",
  alt: "A technician preparing plant samples for quality testing in the laboratory",
};

/** Freshland's facility, where produce is graded, packed and stored. */
const facility = (variant: "4" | "6"): ArticleImage => ({
  src: `/images/home/hero/hero-facility${variant}.webp`,
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

  "red-chilli-powder": [
    {
      src: product("Powder Product/Red Chilli Powder/red-chilli-powder-key-features.webp"),
      alt: "Red chilli powder in a wooden bowl beside dried red chillies and loose chilli seeds",
    },
    {
      src: product("Powder Product/Red Chilli Powder/red-chilli-powder-overview.webp"),
      alt: "A heaped wooden bowl of red chilli powder with whole dried chillies and chilli flakes",
    },
    {
      src: product("Powder Product/Red Chilli Powder/red-chilli-powder-storage.webp"),
      alt: "Red chilli powder in a sealed clip-top jar beside a bowl of powder and dried chillies",
    },
  ],
  "black-pepper-powder": [
    article("ground-black-pepper-quality-aroma-grind-and-purity", "Macro close-up of freshly ground black pepper showing dark husk and pale inner fragments"),
    article("how-black-peppercorns-are-ground-without-losing-aroma", "Wooden pepper mills on a table"),
    article("black-pepper-powder-in-seasonings-meat-products-and-ready-meals", "A plate of black pepper fried udon noodles with tofu on a wooden table"),
  ],
  "coriander-seeds-powder": [
    article("coriander-seeds-powder-export-guide-colour-aroma-and-packing", "Steel containers of ground Indian spices, including ground coriander"),
    article("sourcing-coriander-powder-from-whole-seed-to-ground-spice", "A spice container with ground coriander beside whole cumin, mustard seeds and other spices"),
    article("ground-coriander-in-curry-powders-masalas-and-bakery", "A masala spice tin with ground coriander, chilli, turmeric and whole seeds"),
  ],
  "garlic-powder": [labTesting, facility("4"), facility("6")],
  "dry-mango-powder": [
    article("dry-mango-powder-quality-tang-colour-and-freshness", "Pale sun-dried green mango slices, the raw material for amchur, on a white background"),
    article("from-green-mango-to-amchur-how-dry-mango-powder-is-made", "Thin slices of peeled green mango spread out to sun-dry for amchur"),
    article("dry-mango-powder-amchur-in-chaat-masala-chutneys-and-snacks", "A plate of Punjabi chana chaat with chickpeas, onion, green chilli and lemon"),
  ],
  "garam-masala": [
    article("sourcing-garam-masala-agreeing-a-blend-recipe-with-your-supplier", "Whole and ground garam masala components arranged on a white plate"),
    article("importing-garam-masala-in-bulk-specifications-packing-and-labelling", "Close-up of ground garam masala showing its coarse brown texture"),
    article("how-food-makers-use-garam-masala-in-curries-rice-and-marinades", "A plate of spiced chicken biryani with peas, peppers and nuts on a red floral cloth"),
  ],
  "white-pepper-powder": [
    article("white-pepper-powder-quality-colour-aroma-and-fineness", "Fine white pepper powder dusted over the perforated metal lid of a pepper shaker"),
    article("using-white-pepper-powder-in-sauces-soups-and-seasonings", "A glass bowl of hot and sour soup on a wooden table"),
    article("importing-white-pepper-powder-specifications-and-packing", "A neat heap of whole white peppercorns on a pale background"),
  ],
  "nutmeg-powder": [
    article("buying-nutmeg-powder-what-to-check-in-a-sample", "Whole nutmegs beside a metal nutmeg grater on a woven mat"),
    article("nutmeg-powder-in-bakery-dairy-and-beverage-production", "A whole baked pumpkin pie cooling on a wire rack"),
    article("storing-nutmeg-powder-to-protect-its-aroma", "Whole dried nutmeg kernels on a white background"),
  ],
  "dry-ginger-powder": [
    article("dry-ginger-powder-quality-colour-pungency-and-fibre", "Light brown dry ginger powder in a clear pouch beside a white saucer with a small heap of powder"),
    article("from-rhizome-to-sonth-how-dry-ginger-powder-is-made", "A full frame of sun-dried ginger rhizomes ready for grinding"),
    article("exporting-dry-ginger-powder-packaging-labelling-and-shipping", "Pieces of dried ginger rhizome on a pale background"),
  ],
  "clove-powder": [
    article("buying-clove-powder-aroma-colour-and-purity-checks", "Cloves drying in shades of red, green and brown"),
    article("why-clove-powder-loses-aroma-faster-than-whole-cloves", "Whole dried cloves with intact heads on a white background"),
    article("using-clove-powder-in-meat-sauce-and-bakery-production", "Chocolate-coated German lebkuchen spice biscuits stacked on a plate"),
  ],
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
  "frozen-peas": [
    article("frozen-green-peas-size-grading-colour-and-iqf-quality", "Close-up of uniform, smooth shelled green peas filling the frame"),
    article("maintaining-the-cold-chain-for-frozen-peas", "Macro of a single frozen green pea coated in ice crystals against a dark background"),
    article("frozen-peas-in-ready-meals-food-service-and-retail-packs", "Chef rinsing green peas and sliced carrots in a steel hotel pan under a tap in a commercial kitchen"),
  ],
  okra: [
    article("selecting-tender-okra-for-export-length-and-freshness", "Pile of freshly harvested young okra pods, tender and uniformly green"),
    article("handling-okra-gently-to-avoid-bruising-and-browning", "Two woven baskets filled with fresh green okra pods at a market"),
    article("okra-in-curries-gumbo-and-frozen-food-lines", "Close-up of fresh okra cut into rounds, showing the seed chambers"),
  ],
  "bitter-gourd": [
    article("bitter-gourd-quality-ridges-colour-and-firmness", "Bowl of firm, bright green bitter gourds with pronounced ridges and bumps"),
    article("slowing-ripening-storing-bitter-gourd-for-shipment", "Long pale-green bitter gourds stacked in green plastic produce crates"),
    article("bitter-gourd-in-asian-cooking-and-juices", "Overhead view of an omelette with sliced bitter gourd, garnished with red chilli strips"),
  ],
  eggplant: [
    article("eggplant-export-guide-gloss-shape-and-firmness", "Glossy striped purple eggplants with fresh green calyxes heaped in front of produce crates"),
    article("protecting-eggplant-from-chilling-injury-in-transit", "Slender striped eggplants packed upright in pulp produce trays"),
    article("round-long-and-baby-eggplant-matching-variety-to-market", "Five eggplants of different shapes and colours on white: green round, dark oval, long purple and slender violet"),
  ],
  drumstick: [
    article("fresh-drumsticks-pod-length-tenderness-and-colour", "Long green moringa drumstick pods against fresh moringa leaves"),
    article("keeping-drumsticks-fresh-from-farm-to-market", "Bundle of moringa drumstick pods tied with bands on a yellow sack at a market stall"),
    article("drumsticks-in-sambar-curries-and-frozen-packs", "Steel bowl of drumstick and potato curry with cut moringa pod pieces in yellow gravy"),
  ],
  beans: [
    article("fresh-green-beans-snap-straightness-and-size-grading", "Macro of crisp, straight, bright green beans with a fresh sheen"),
    article("pre-cooling-green-beans-for-longer-freshness", "Workers picking green beans in a sunny field, one carrying a basket of beans on their head"),
    article("green-beans-for-retail-food-service-and-freezing", "Trimmed green beans blanching in a large steel pot of boiling water"),
  ],

  /* --- Fruits ---------------------------------------------------------- */
  mango: [
    { src: "/images/farms/hero-green-mangoes.webp", alt: "Green mangoes ripening on the tree" },
    article("mango-export-quality-treatment-grading-and-inspection", "A neat stack of uniformly sized ripe yellow mangoes on a market stall"),
    article("ripening-and-storing-mangoes-after-arrival", "Firm green mangoes with a red blush piled in a woven basket"),
  ],
  banana: [
    article("banana-export-guide-finger-length-grade-and-maturity", "A single hand of yellow bananas laid on a wooden table, showing even finger length"),
    article("green-shipping-and-controlled-ripening-for-bananas", "Close-up of banana hands shading from green to yellow as they ripen"),
    article("cavendish-robusta-and-red-bananas-choosing-for-your-market", "A hand of red bananas surrounded by yellow banana hands at a market"),
  ],
  grapes: [
    article("table-grapes-from-india-berry-size-sugar-and-colour", "A bunch of plump green table grapes with even berry size and colour"),
    article("cold-storage-and-packing-that-keep-grapes-fresh", "Blue field crates filled with freshly harvested green grape bunches on grass"),
    article("seedless-green-black-and-red-grapes-what-buyers-prefer", "Close-up of red, dark purple and green grapes together"),
  ],
  pomegranate: [
    article("pomegranate-export-quality-aril-colour-size-and-skin", "Deep red pomegranates on a market stall with one split fruit showing bright red arils"),
    article("why-pomegranates-travel-well-and-how-to-keep-them-fresh", "Rows of pale pink pomegranates packed closely on straw"),
    article("pomegranates-for-fresh-retail-arils-and-juice", "A whole pomegranate, a halved fruit with arils and a glass of pomegranate juice on white"),
  ],
  orange: [
    article("sourcing-oranges-juice-content-peel-and-size", "Close-up of a pile of oranges with varied peel colour and size"),
    article("storing-oranges-to-preserve-juiciness-and-peel-quality", "Mandarin oranges packed in wooden crates"),
    article("oranges-for-the-fruit-bowl-juice-bars-and-processing", "A glass of fresh orange juice on a table beside a knife and fork"),
  ],
  chikoo: [
    article("chikoo-sapota-export-guide-maturity-and-sweetness", "A cluster of brown chikoo fruits hanging among glossy leaves on the tree"),
    article("handling-chikoo-a-delicate-fruit-that-ripens-fast", "Close-up of a pile of brown chikoo fruits with soft, scuffed skin"),
    article("chikoo-in-milkshakes-desserts-and-ice-cream", "Two halves of a chikoo showing its soft brown flesh on a marble surface"),
  ],
  papaya: [
    article("papaya-export-guide-colour-break-weight-and-firmness", "Green papayas growing on the stem of a papaya tree"),
    article("shipping-papaya-temperature-ripening-and-handling", "Papayas at the colour-break stage, green with yellow patches, stacked by crates"),
    article("papaya-for-fresh-retail-fruit-salads-and-pulp", "Close-up of a halved ripe papaya showing orange flesh and black seeds"),
  ],
  guava: [
    article("guava-sourcing-white-vs-pink-flesh-size-and-aroma", "Whole guavas with two halves showing pink flesh, laid on white plastic"),
    article("extending-guava-shelf-life-with-careful-post-harvest-care", "A heap of firm green guavas at an Indian wholesale market"),
    article("guava-in-juices-jams-and-fresh-retail", "A glass of pink guava juice with ice next to halved pink guavas"),
  ],

  /* --- Spices ---------------------------------------------------------- */
  turmeric: [
    {
      src: "/images/home/products/Organic Turmeric Powder.webp",
      alt: "Whole turmeric fingers, one cut to show its colour, beside ground turmeric",
    },
    article("boiling-drying-and-polishing-how-turmeric-is-cured", "Workers spreading harvested turmeric rhizomes to dry on a hillside yard"),
    {
      src: "/images/about/about-hero-turmeric-powder.webp",
      alt: "Ground turmeric in a wooden bowl, ready for grinding and blending",
    },
  ],
  "red-chilli": [
    article("dried-red-chilli-export-guide-heat-colour-and-stem", "Stemless dandi-cut dried red chillies on a white background"),
    article("teja-byadgi-and-guntur-understanding-indian-chilli-varieties", "Red chillies spread to dry across open rock in a village in Guntur district"),
    article("storing-dried-chillies-to-protect-colour-and-prevent-mould", "Open sacks of dried chillies and green cardamom in a spice warehouse in Mattancherry, Kochi"),
  ],
  "black-pepper": [
    article("black-pepper-quality-bulk-density-size-and-aroma", "Close-up of wrinkled black peppercorns"),
    article("malabar-and-tellicherry-indian-black-pepper-grades-explained", "Diamond-shaped pile of whole black peppercorns on a white background"),
    {
      src: "/images/home/products/Organic Black Pepper Powder.webp",
      alt: "Ground black pepper in a wooden bowl beside whole peppercorns",
    },
  ],
  "cumin-seeds": [
    article("cumin-seeds-export-guide-purity-colour-and-aroma", "Heap of whole cumin seeds"),
    article("machine-cleaning-and-sortex-how-cumin-is-prepared-for-export", "Close-up of clean whole cumin seeds"),
    article("cumin-in-spice-blends-ground-cumin-and-food-processing", "Cumin seeds, coriander, cinnamon, bay leaf, cloves, cardamom and ground garam masala arranged together"),
  ],
  "coriander-seeds": [
    article("coriander-seeds-colour-split-content-and-aroma", "Close-up of whole coriander seeds with a few split seeds"),
    article("eagle-scooter-and-badami-coriander-grades-explained", "Macro of greenish whole coriander seeds"),
    article("coriander-seeds-in-spice-mixes-pickling-and-brewing", "Plate of whole coriander seeds set out for a dukkah spice mix"),
  ],
  "green-cardamom": [
    article("green-cardamom-grading-pod-size-colour-and-aroma", "Close-up of plump green cardamom pods"),
    article("protecting-cardamom-s-green-colour-and-fragrance", "Green cardamom pods on a white surface in soft focus"),
    article("cardamom-in-tea-coffee-sweets-and-bakery", "Basket of knotted cardamom buns on a checked cloth"),
  ],
  cloves: [
    article("clove-quality-head-intact-colour-and-oil-content", "Whole dried cloves with intact heads on a white background"),
    article("storing-cloves-to-keep-their-aromatic-oils", "Small heap of whole cloves on a wooden board"),
    article("cloves-in-spice-blends-baking-and-oil-extraction", "Whole cloves with cinnamon sticks and star anise on white"),
  ],
  cinnamon: [
    article("buying-cinnamon-quills-thickness-and-aroma", "Ceylon cinnamon quills with ground cinnamon and a few peppercorns"),
    article("cinnamon-vs-cassia-knowing-what-you-are-sourcing", "Pile of thick rolled cassia bark quills"),
    {
      src: "/images/signature ingredients/cinaplus-cinnamon.webp",
      alt: "Cinnamon sticks beside a bowl of ground cinnamon",
    },
  ],
  "mustard-seeds": [
    article("mustard-seeds-export-guide-black-brown-and-yellow", "Dark brown and yellow mustard seeds side by side on a wooden surface"),
    article("cleaning-and-grading-mustard-seeds-for-export", "Close-up of clean, uniform brown mustard seeds"),
    article("mustard-seeds-for-tempering-pickles-and-condiments", "Steel masala box with mustard seeds in the centre surrounded by ground spices"),
  ],
  "fennel-seeds": [
    article("fennel-seeds-quality-green-colour-size-and-sweetness", "Heap of green fennel seeds"),
    article("keeping-fennel-seeds-green-and-fragrant-in-storage", "Fennel seeds in an open jute sack"),
    article("fennel-seeds-as-mouth-freshener-in-teas-and-baking", "Bowl of green fennel mukhwas mouth freshener"),
  ],
  "fenugreek-seeds": [
    article("fenugreek-seeds-quality-colour-cleanliness-and-seed-condition", "Close-up of clean whole fenugreek seeds"),
    article("fenugreek-seeds-in-curry-powders-pickles-and-seasonings", "Plate of whole spices for curry powder, including dried ginger, turmeric, cardamom, pepper, nutmeg, cinnamon, coriander and red chillies"),
    article("storing-fenugreek-seeds-moisture-pests-and-aroma", "Close-up of dried whole fenugreek seeds"),
  ],
  "psyllium-seed": [
    article("buying-psyllium-seed-for-husk-processing-what-to-check", "Psyllium (Plantago ovata) plants with ripening seed spikes"),
    article("from-psyllium-seed-to-husk-how-whole-seed-is-processed", "Close-up of translucent psyllium seed husk flakes"),
    article("exporting-psyllium-seed-documentation-packing-and-labelling", "Psyllium husk powder spread on a white plate"),
  ],
  ginger: [
    article("fresh-and-dried-ginger-what-importers-should-check", "Two hands of fresh ginger rhizome on a pale surface"),
    article("storing-ginger-to-prevent-sprouting-and-shrivelling", "Pile of fresh ginger rhizomes"),
    article("ginger-in-teas-sauces-bakery-and-beverages", "Glass cup of ginger tea beside a fresh ginger root on a dark table"),
  ],

  "other-agricultural-products": [
    article("building-a-mixed-agricultural-order-from-india", "Indian market produce in cartons and crates: bitter gourd, tomatoes, broad beans and eggplant side by side"),
    article("seasonality-planning-fresh-produce-imports-around-harvests", "Tractor carrying red baskets of freshly harvested leafy greens along a farm track"),
    article("phytosanitary-certificates-and-export-documents-for-fresh-produce", "Palletised cartons of packed produce being moved with a pallet jack in a packing shed for shipment"),
  ],
};
