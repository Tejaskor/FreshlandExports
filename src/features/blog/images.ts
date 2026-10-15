/**
 * Card and article images for every Blog article, by product slug, in the
 * same order as that product's articles in features/products/blog.ts.
 *
 * Each article carries a photograph chosen for its own topic: the product's
 * dedicated shots where they exist (quality, processing, storage,
 * applications), otherwise a photograph of that product in that context
 * saved as public/images/Blog/<article-slug>.webp. Those are Wikimedia
 * Commons photographs, credited on /terms-and-conditions
 * (features/agri/content/photo-credits.ts). No article shows another product.
 * To give an article a different photograph, replace its entry here.
 */

export type ArticleImage = { src: string; alt: string };
type Trio = readonly [ArticleImage, ArticleImage, ArticleImage];

const product = (file: string) => `/images/products/${file}`;
/** A spice product-page photograph (credited in features/agri/content/photo-credits.ts). */
const spice = (file: string) => product(`spices/${file}`);
/** A powder product-page photograph (credited in features/agri/content/photo-credits.ts). */
const powder = (file: string) => product(`powders/${file}`);

/** An article's own photograph, saved under its URL slug. */
const article = (slug: string, alt: string): ArticleImage => ({ src: `/images/Blog/${slug}.webp`, alt });

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
    { src: product("Black pepper powder/blog-black-pepper-quality.webp"), alt: "A wooden spoon of ground black pepper among whole black peppercorns" },
    { src: product("Black pepper powder/blog-black-pepper-grinding.webp"), alt: "A wooden pepper mill beside a dish of whole black peppercorns and freshly ground pepper" },
    { src: product("Black pepper powder/blog-black-pepper-applications.webp"), alt: "A plate of pasta with tomatoes and meat, finished with grated cheese and black pepper" },
  ],
  "coriander-seeds-powder": [
    article("coriander-seeds-powder-export-guide-colour-aroma-and-packing", "Steel containers of ground Indian spices, including ground coriander"),
    article("sourcing-coriander-powder-from-whole-seed-to-ground-spice", "A spice container with ground coriander beside whole cumin, mustard seeds and other spices"),
    article("ground-coriander-in-curry-powders-masalas-and-bakery", "A masala spice tin with ground coriander, chilli, turmeric and whole seeds"),
  ],
  "garlic-powder": [
    {
      src: "/images/Blog/garlic-powder-buying-guide.webp",
      alt: "A bowl of fine, pale garlic powder beside whole garlic bulbs, peeled cloves and fresh parsley",
    },
    {
      src: "/images/Blog/garlic-powder-storage-handling.webp",
      alt: "Lined bulk bags and sealed containers of garlic powder on pallets in a warehouse",
    },
    {
      src: "/images/Blog/garlic-powder-food-applications.webp",
      alt: "Garlic powder beside a seasoning blend, seasoned potato chips and a chicken and vegetable rice dish",
    },
  ],
  "dry-mango-powder": [
    {
      src: product("Powder Product/Dry Mango Powder/dry-mango-powder-quality-blog.webp"),
      alt: "Dried green mango slices, the raw material for amchur, on a rustic wooden board",
    },
    {
      src: product("Powder Product/Dry Mango Powder/green-mango-to-amchur-blog.webp"),
      alt: "Cut unripe green mangoes beside dried mango slices and a wooden bowl of amchur powder",
    },
    {
      // The file name has a double dot as supplied.
      src: product("Powder Product/Dry Mango Powder/dry-mango-powder-indian-cuisine-blog..webp"),
      alt: "A wooden bowl piled with dried mango slices used to make amchur",
    },
  ],
  "garam-masala": [
    {
      src: product("Powder Product/Garam masala Powder/Rustic Bowl of Warming Spices (1).webp"),
      alt: "A bowl of garam masala beside the whole spices that go into it: cinnamon, mace, cardamom, nutmeg, cloves, cumin and coriander",
    },
    {
      src: product("Powder Product/Garam masala Powder/whole-spices-to-garam-masala.webp"),
      alt: "Bowls and spoons of ground spices in red, yellow and brown shades with cumin seeds and star anise",
    },
    {
      src: product("Powder Product/Garam masala Powder/garam-masala-indian-cuisine-blog.webp"),
      alt: "A bowl of garam masala with a brass spoon, surrounded by cinnamon, star anise, cardamom, cloves and cumin",
    },
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
      src: product("GreenChillies/Fresh Green Chilli Sorting Display.png"),
      alt: "Fresh green chillies on a metal sorting tray, with yellowing and blemished pods set apart and more chillies in a crate and basket behind",
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
      src: spice("cinnamon-applications.webp"),
      alt: "A glazed cinnamon swirl bun on a grey plate with knife and fork",
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

/* --- Supporting photographs inside articles ---------------------------- */

/** A photograph shown after the section headed `after`. */
export type SectionImage = ArticleImage & { after: string };

const agri = (file: string) => product(`agri/${file}`);

/**
 * Further photographs placed between an article's sections, by article
 * slug. Only credited photographs of the article's own product are used
 * (see features/agri/content/photo-credits.ts), each in one article only;
 * the build fails if `after` names no section of that article or a
 * photograph appears twice. Articles without a suitable photograph have no
 * entry rather than an unrelated image.
 */
export const sectionImages: Record<string, readonly SectionImage[]> = {
  "frozen-green-peas-size-grading-colour-and-iqf-quality": [
    {
      after: "Free-flowing IQF pieces",
      src: agri("frozen-peas/frozen-peas-hero.webp"),
      alt: "Separate, frost-covered frozen green peas in a white bowl",
    },
    {
      after: "Tenderness and taste",
      src: agri("frozen-peas/frozen-peas-pods.webp"),
      alt: "Heap of fresh green pea pods",
    },
  ],
  "frozen-peas-in-ready-meals-food-service-and-retail-packs": [
    {
      after: "Retail packs",
      src: agri("frozen-peas/frozen-peas-detail.webp"),
      alt: "Close-up of bright, evenly coloured green peas",
    },
  ],
  "selecting-tender-okra-for-export-length-and-freshness": [
    {
      after: "Check pod length",
      src: agri("okra/okra-hero.webp"),
      alt: "Two bundles of fresh okra pods tied with rubber bands",
    },
  ],
  "okra-in-curries-gumbo-and-frozen-food-lines": [
    {
      after: "South Asian cooking",
      src: agri("okra/okra-use-curry.webp"),
      alt: "Bhindi masala okra curry served with white rice",
    },
    {
      after: "Stews and gumbo",
      src: agri("okra/okra-use-stew.webp"),
      alt: "Bamia, an okra and meat stew in tomato sauce, served with rice",
    },
    {
      after: "Frozen okra lines",
      src: agri("okra/okra-use-frozen.webp"),
      alt: "Glass bowl of frost-covered cut okra pieces",
    },
  ],
  "bitter-gourd-quality-ridges-colour-and-firmness": [
    {
      after: "Well-formed ridges",
      src: agri("bitter-gourd/bitter-gourd-detail.webp"),
      alt: "Close-up of ridged, warty green bitter gourds in a white bowl",
    },
  ],
  "slowing-ripening-storing-bitter-gourd-for-shipment": [
    {
      after: "Inspect on arrival",
      src: agri("bitter-gourd/bitter-gourd-hero.webp"),
      alt: "Fresh green bitter gourds with bumpy, ridged skin on sale at a market in Hyderabad",
    },
  ],
  "eggplant-export-guide-gloss-shape-and-firmness": [
    {
      after: "Green calyx",
      src: agri("eggplant/eggplant-detail.webp"),
      alt: "A glossy dark purple eggplant with its green calyx, growing on the plant",
    },
  ],
  "round-long-and-baby-eggplant-matching-variety-to-market": [
    {
      after: "Round and oval types",
      src: agri("eggplant/eggplant-hero.webp"),
      alt: "Glossy round purple eggplants packed in a green crate",
    },
  ],
  "fresh-drumsticks-pod-length-tenderness-and-colour": [
    {
      after: "Even length",
      src: agri("drumstick/drumstick-hero.webp"),
      alt: "Bundles of long green drumstick pods tied together and laid side by side",
    },
  ],
  "drumsticks-in-sambar-curries-and-frozen-packs": [
    {
      after: "Sambar and South Indian cooking",
      src: agri("drumstick/drumstick-use-sambar.webp"),
      alt: "Bowl of sambar with pieces of drumstick",
    },
    {
      after: "Curries and other dishes",
      src: agri("drumstick/drumstick-use-curry.webp"),
      alt: "Bowl of drumstick curry garnished with fresh coriander",
    },
  ],
  "fresh-green-beans-snap-straightness-and-size-grading": [
    {
      after: "Uniform diameter",
      src: agri("beans/beans-hero.webp"),
      alt: "Close-up of a heap of slim fresh green beans",
    },
    {
      after: "Bright colour, clean surface",
      src: agri("beans/beans-detail.webp"),
      alt: "Pile of freshly harvested green beans with their stem ends",
    },
  ],
  "green-beans-for-retail-food-service-and-freezing": [
    {
      after: "Retail packs",
      src: agri("beans/beans-bowl.webp"),
      alt: "Fresh green beans piled in a rustic wooden crate",
    },
    {
      after: "Whole, trimmed or cut",
      src: agri("beans/beans-blanched.webp"),
      alt: "Trimmed bright green snap beans in a steel bowl",
    },
  ],
  "ripening-and-storing-mangoes-after-arrival": [
    { after: "Signs of ripeness", src: agri("mango/mango-hero.webp"), alt: "A basket of mangoes at different stages of ripeness, some still green and others yellow-orange" },
    { after: "Selling at the right moment", src: agri("mango/mango-use-processing.webp"), alt: "Freshly blended mango pulp in a steel bowl" },
  ],
  "banana-export-guide-finger-length-grade-and-maturity": [
    { after: "Maturity at harvest", src: agri("banana/banana-detail.webp"), alt: "A bunch of mature green bananas growing on the plant" },
  ],
  "green-shipping-and-controlled-ripening-for-bananas": [
    { after: "Controlled ripening at destination", src: agri("banana/banana-hero.webp"), alt: "Hands of bananas at different stages of ripening, from green to yellow" },
  ],
  "table-grapes-from-india-berry-size-sugar-and-colour": [
    { after: "Even colour across the bunch", src: agri("grapes/grapes-detail.webp"), alt: "Bunches of white grapes on the vine, with berries coloured unevenly from green to pink" },
  ],
  "seedless-green-black-and-red-grapes-what-buyers-prefer": [
    { after: "Seedless green", src: agri("grapes/grapes-green.webp"), alt: "Green table grapes piled in market baskets" },
    { after: "Black grapes", src: agri("grapes/grapes-hero.webp"), alt: "A bunch of dark grapes with natural bloom, on the vine" },
  ],
  "pomegranate-export-quality-aril-colour-size-and-skin": [
    { after: "Aril colour", src: agri("pomegranate/pomegranate-detail.webp"), alt: "An opened pomegranate full of deep red arils" },
  ],
  "why-pomegranates-travel-well-and-how-to-keep-them-fresh": [
    { after: "A naturally sturdy fruit", src: agri("pomegranate/pomegranate-hero.webp"), alt: "A whole ripe pomegranate with a thick red rind and dry crown" },
  ],
  "pomegranates-for-fresh-retail-arils-and-juice": [
    { after: "Ready-to-eat arils", src: agri("pomegranate/pomegranate-use-processing.webp"), alt: "A bowl of loose pomegranate arils" },
    { after: "Juice and processing", src: agri("pomegranate/pomegranate-use-juice.webp"), alt: "A glass of pomegranate juice beside a halved pomegranate" },
  ],
  "sourcing-oranges-juice-content-peel-and-size": [
    { after: "Sweetness and acidity", src: agri("orange/orange-tree.webp"), alt: "Ripe oranges growing on the tree" },
    { after: "Check before you commit", src: agri("orange/orange-slice.webp"), alt: "A whole orange with a halved fruit and wedges showing the segments" },
  ],
  "oranges-for-the-fruit-bowl-juice-bars-and-processing": [
    { after: "Fresh retail", src: agri("orange/orange-hero.webp"), alt: "A basket of whole oranges with halved fruit in front" },
    { after: "Juice bars and food service", src: agri("orange/orange-detail.webp"), alt: "Fresh orange juice in a glass and jug beside whole and cut oranges" },
  ],
  "chikoo-sapota-export-guide-maturity-and-sweetness": [
    { after: "Signs of maturity", src: agri("chikoo/chikoo-hero.webp"), alt: "Chikoo (sapodilla) fruits with rough brown skin growing on a branch" },
  ],
  "chikoo-in-milkshakes-desserts-and-ice-cream": [
    { after: "Fresh fruit and desserts", src: agri("chikoo/chikoo-detail.webp"), alt: "A halved chikoo showing its soft flesh beside a whole fruit and a seed" },
  ],
  "papaya-export-guide-colour-break-weight-and-firmness": [
    { after: "What colour break means", src: agri("papaya/papaya-detail.webp"), alt: "Clusters of green papayas on the tree, a few beginning to turn yellow" },
    { after: "Checking a sample", src: agri("papaya/papaya-hero.webp"), alt: "A halved ripe papaya showing orange flesh and black seeds" },
  ],
  "papaya-for-fresh-retail-fruit-salads-and-pulp": [
    { after: "Fresh-cut cups and fruit salads", src: agri("papaya/papaya-use-fresh.webp"), alt: "Peeled and cut ripe papaya with orange flesh on a steel plate" },
    { after: "Pulp and purée", src: agri("papaya/papaya-use-drinks.webp"), alt: "A glass of papaya smoothie beside a halved papaya" },
  ],
  "guava-sourcing-white-vs-pink-flesh-size-and-aroma": [
    { after: "White or pink flesh", src: agri("guava/guava-white.webp"), alt: "Slices of white-fleshed guava on a plate" },
    { after: "Seeds and texture", src: agri("guava/guava-slice.webp"), alt: "Halved pink guavas showing their flesh and small seeds" },
  ],
  "extending-guava-shelf-life-with-careful-post-harvest-care": [
    { after: "A fast-ripening fruit", src: agri("guava/guava-detail.webp"), alt: "A firm green guava growing on a branch" },
  ],
  "guava-in-juices-jams-and-fresh-retail": [
    { after: "Juices and nectars", src: agri("guava/guava-hero.webp"), alt: "A cut pink guava among whole green guavas" },
  ],
  "dried-red-chilli-export-guide-heat-colour-and-stem": [
    { after: "Stem or stemless", src: spice("red-chilli-hero.webp"), alt: "A bunch of glossy dried red chillies with green stalks on a sunlit wooden board" },
  ],
  "teja-byadgi-and-guntur-understanding-indian-chilli-varieties": [
    { after: "Teja for heat", src: spice("red-chilli-applications.webp"), alt: "Jars of chilli sauce and chilli flakes in oil in a woven basket on a restaurant table" },
  ],
  "black-pepper-quality-bulk-density-size-and-aroma": [
    { after: "Bulk density tells a story", src: spice("black-pepper-vine.webp"), alt: "Green pepper berries hanging in a spike among heart-shaped Piper nigrum leaves" },
  ],
  "malabar-and-tellicherry-indian-black-pepper-grades-explained": [
    { after: "Tellicherry and berry size", src: spice("black-pepper-hero.webp"), alt: "Tellicherry black peppercorns in a worn brass bowl on a pale stone surface" },
  ],
  "black-pepper-for-grinding-seasoning-blends-and-oleoresin": [
    { after: "Seasoning blends", src: spice("black-pepper-culinary-use.webp"), alt: "Seared steak crusted with cracked black pepper, served with asparagus and peas" },
  ],
  "cumin-seeds-export-guide-purity-colour-and-aroma": [
    { after: "Colour and seed shape", src: spice("cumin-seeds-hero.webp"), alt: "Whole cumin seeds in a worn brass bowl, seen from above" },
  ],
  "cumin-in-spice-blends-ground-cumin-and-food-processing": [
    { after: "Whole seed in cooking", src: spice("cumin-seeds-applications.webp"), alt: "Whole moong dal finished with a tadka of tempered spices and herbs" },
  ],
  "coriander-seeds-colour-split-content-and-aroma": [
    { after: "Greenish or golden", src: spice("coriander-seeds-hero.webp"), alt: "Whole coriander seeds in a worn brass bowl, seen from above" },
  ],
  "eagle-scooter-and-badami-coriander-grades-explained": [
    { after: "Badami", src: spice("coriander-seeds-culinary-use.webp"), alt: "A loose heap of whole golden-brown coriander seeds" },
  ],
  "coriander-seeds-in-spice-mixes-pickling-and-brewing": [
    { after: "Pickling spice", src: spice("coriander-seeds-use-pickling.webp"), alt: "Indian mixed pickle in oily spiced masala on a round plate" },
    { after: "Meat, bakery and seasonings", src: spice("coriander-seeds-use-baking.webp"), alt: "A loaf of dark Borodinsky rye bread crusted with whole coriander seeds" },
  ],
  "green-cardamom-grading-pod-size-colour-and-aroma": [
    { after: "Colour signals care", src: spice("green-cardamom-hero.webp"), alt: "Green cardamom pods in a worn brass bowl, seen from above" },
    { after: "Plump and well filled", src: spice("green-cardamom-open-pod.webp"), alt: "Whole and split green cardamom pods with their dark seeds on a white plate" },
  ],
  "cardamom-in-tea-coffee-sweets-and-bakery": [
    { after: "Masala chai", src: spice("green-cardamom-applications.webp"), alt: "A cup of masala chai with biscuits, cardamom pods, ginger, cinnamon and cloves on the saucer" },
  ],
  "clove-quality-head-intact-colour-and-oil-content": [
    { after: "Look for the head", src: spice("cloves-hero.webp"), alt: "A dense spread of whole dried cloves filling the frame" },
  ],
  "cloves-in-spice-blends-baking-and-oil-extraction": [
    { after: "Whole cloves in cooking", src: spice("cloves-culinary-use.webp"), alt: "Mulled wine with orange slices, a cinnamon stick, star anise, cardamom and whole cloves floating in the pot" },
  ],
  "buying-cinnamon-quills-thickness-and-aroma": [
    { after: "What a quill is", src: spice("cinnamon-hero.webp"), alt: "Upright cinnamon quills packed tightly together, showing their curled ends" },
    { after: "Thickness and diameter", src: spice("cinnamon-detail.webp"), alt: "Close-up of a pile of broken cinnamon quills with curled bark edges" },
  ],
  "cinnamon-in-bakery-beverages-and-spice-blends": [
    { after: "Teas and beverages", src: spice("cinnamon-use-drinks.webp"), alt: "A cappuccino dusted with cinnamon, with a cinnamon stick resting on the saucer" },
    { after: "Savoury spice blends", src: spice("cinnamon-use-savoury.webp"), alt: "Peas pulao cooked with whole cinnamon sticks and cloves, served on an oval plate" },
  ],
  "mustard-seeds-export-guide-black-brown-and-yellow": [
    { after: "Purity", src: spice("mustard-seeds-hero.webp"), alt: "A wide heap of brown mustard seeds on a white surface" },
  ],
  "mustard-seeds-for-tempering-pickles-and-condiments": [
    { after: "Prepared mustards and condiments", src: spice("mustard-seeds-applications.webp"), alt: "A spoonful of smooth Dijon mustard on a white background" },
  ],
  "fennel-seeds-quality-green-colour-size-and-sweetness": [
    { after: "Seed size and shape", src: spice("fennel-seeds-hero.webp"), alt: "Green fennel seeds spilling from a tipped glass jar onto a white surface" },
  ],
  "fenugreek-seeds-quality-colour-cleanliness-and-seed-condition": [
    { after: "What good fenugreek looks like", src: spice("fenugreek-seeds-hero.webp"), alt: "A heap of golden fenugreek seeds on a white surface" },
  ],
  "fenugreek-seeds-in-curry-powders-pickles-and-seasonings": [
    { after: "Pickles and preserves", src: spice("fenugreek-seeds-applications.webp"), alt: "Homemade mango pickle in red chilli oil on a patterned plate" },
  ],
  "buying-psyllium-seed-for-husk-processing-what-to-check": [
    { after: "Appearance and colour", src: spice("psyllium-seed-hero.webp"), alt: "A hand holding a pile of raw pinkish-brown psyllium seeds above more seeds" },
  ],
  "boiling-drying-and-polishing-how-turmeric-is-cured": [
    { after: "Why fresh turmeric is cured", src: spice("turmeric-hero.webp"), alt: "A heap of freshly harvested turmeric rhizomes at a vegetable market" },
    { after: "Cleaning and boiling", src: spice("turmeric-detail.webp"), alt: "Fresh turmeric rhizomes with two cut pieces showing the bright orange interior" },
  ],
  "whole-turmeric-for-grinding-extraction-and-retail": [
    { after: "Food colouring and manufacturing", src: spice("turmeric-culinary-use.webp"), alt: "A turmeric-yellow coconut curry with chicken, potatoes and basil in a bowl" },
  ],
  "turmeric-powder-in-spice-blends-food-colouring-and-beverages": [
    { after: "Natural food colouring", src: spice("turmeric-use-rice.webp"), alt: "Turmeric-yellow nasi kuning rice topped with sambal and egg on a green plate" },
    { after: "Beverages and drink mixes", src: spice("turmeric-use-drinks.webp"), alt: "A turmeric latte with a dusting of spice on a wooden table" },
  ],
  "coriander-seeds-powder-export-guide-colour-aroma-and-packing": [
    { after: "What importers expect", src: powder("coriander-seeds-powder-hero.webp"), alt: "Ground coriander in an orange bowl, with whole coriander seeds in a spoon and scattered around it" },
  ],
  "sourcing-coriander-powder-from-whole-seed-to-ground-spice": [
    { after: "Judging a sample", src: powder("coriander-seeds-powder-blend.webp"), alt: "Ground coriander in a steel spice tin beside tins of fenugreek and cumin seeds" },
  ],
  "ground-coriander-in-curry-powders-masalas-and-bakery": [
    { after: "Curries, soups and ready meals", src: powder("coriander-seeds-powder-applications.webp"), alt: "A plate of chana masala, a spiced chickpea curry" },
  ],
  "garlic-powder-buying-guide-colour-aroma-and-free-flowing-texture": [
    { after: "Judge the colour", src: powder("garlic-powder-hero.webp"), alt: "A measuring spoon heaped with off-white garlic powder on a white surface" },
  ],
  "garlic-powder-in-seasonings-snack-coatings-and-ready-meals": [
    { after: "Seasonings and rubs", src: powder("garlic-powder-applications.webp"), alt: "Garlic powder being shaken over pan-fried potato cubes in a cast-iron skillet" },
  ],
  "dry-mango-powder-amchur-in-chaat-masala-chutneys-and-snacks": [
    { after: "Chaat masala and other blends", src: powder("dry-mango-powder-applications.webp"), alt: "A plate of bhel puri chaat topped with tomato, onion and coriander leaves" },
  ],
  "sourcing-garam-masala-agreeing-a-blend-recipe-with-your-supplier": [
    { after: "No single recipe", src: powder("garam-masala-whole-spices.webp"), alt: "Whole black pepper, nutmeg, mace, green and black cardamom, cinnamon bark and cloves laid out on a white surface" },
  ],
  "how-food-makers-use-garam-masala-in-curries-rice-and-marinades": [
    { after: "Curries and gravies", src: powder("garam-masala-curry.webp"), alt: "A pot of Kerala chicken curry with green chillies, a tomato and dried red chillies alongside" },
  ],
  "white-pepper-powder-quality-colour-aroma-and-fineness": [
    { after: "Why colour matters most", src: powder("white-pepper-powder-hero.webp"), alt: "A small mound of ground white pepper in a white leaf-shaped dish on a wooden board" },
  ],
  "using-white-pepper-powder-in-sauces-soups-and-seasonings": [
    { after: "Asian and international cuisines", src: powder("white-pepper-powder-applications.webp"), alt: "Ground white pepper dusted over a bowl of century egg congee" },
  ],
  "buying-nutmeg-powder-what-to-check-in-a-sample": [
    { after: "Know what you are buying", src: powder("nutmeg-powder-fruit.webp"), alt: "A split nutmeg fruit on the tree showing the seed wrapped in red mace" },
    { after: "Colour and texture", src: powder("nutmeg-powder-hero.webp"), alt: "A small heap of freshly grated nutmeg on a white surface" },
  ],
  "nutmeg-powder-in-bakery-dairy-and-beverage-production": [
    { after: "Dairy and desserts", src: powder("nutmeg-powder-applications.webp"), alt: "A glass of eggnog dusted with grated nutmeg, seen from above on a wooden table" },
  ],
  "dry-ginger-powder-quality-colour-pungency-and-fibre": [
    { after: "What sonth should look like", src: powder("dry-ginger-powder-hero.webp"), alt: "A bowl of dried ginger pieces beside a bowl of ginger powder on a dark surface" },
  ],
  "buying-clove-powder-aroma-colour-and-purity-checks": [
    { after: "Colour and texture", src: powder("clove-powder-hero.webp"), alt: "A mound of dark brown clove powder beside a heap of whole cloves on a white surface" },
  ],
  "using-clove-powder-in-meat-sauce-and-bakery-production": [
    { after: "Bakery and sweet goods", src: powder("clove-powder-applications.webp"), alt: "Gingerbread biscuits beside a glass of milk" },
  ],
};
