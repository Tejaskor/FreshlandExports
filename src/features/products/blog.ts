import type { ArtVariant } from "@/components/media/botanical-art";

/**
 * One headed section of an article's text. Sections are H2s; `level: 3`
 * makes one a sub-section (H3) of the section before it.
 */
export type ArticleSection = { heading: string; text: string; level?: 2 | 3 };
export type ArticleBody = readonly ArticleSection[];

export type BlogArticle = {
  /** Short topic label shown above the title, e.g. "Storage". */
  topic: string;
  title: string;
  description: string;
  /**
   * The full article, read on its own page at /resources/<slug>. Articles written
   * later keep their text in features/blog/bodies instead.
   */
  body?: ArticleBody;
  /** ISO publication date, for articles added after the first set. */
  published?: string;
  /** ISO date of a substantive revision; shown only when set. */
  updated?: string;
  /** The writer's name, shown on the Blog cards once set. Never a placeholder. */
  author?: string;
  /** Recorded view count, shown on the Blog cards once set. Never estimated. */
  views?: number;
};

export type ProductBlogEntry = {
  /** The product's own photograph. Card images are set per article in features/blog/images. */
  image: string | null;
  alt: string;
  /** Fallback art for the article images. */
  art: ArtVariant;
  /** Shown as three cards on the product page, in this order. */
  articles: readonly [BlogArticle, BlogArticle, BlogArticle];
};

const photo = (file: string) => `/images/products/${file}`;

/**
 * Product-specific Blog content for every product page, keyed by product
 * slug. Each product carries its own three articles — buyer guidance on
 * quality, sourcing, uses, storage and export — so no two pages share a post.
 * Copy stays general: nothing here states a certification, grade, test result
 * or quantity that is confirmed per order.
 */
export const productBlogs: Record<string, ProductBlogEntry> = {
  /* --- Powder products ------------------------------------------------- */
  // Moringa carries its full articles inline.
  "moringa-powder": {
    // Not the hero photograph, so the image is not repeated on the page.
    image: photo("Moringa Powder/moringa-powder-nutritional-value.webp"),
    alt: "A wooden spoon of fine green moringa powder beside a sprig of fresh moringa leaves",
    art: "powder",
    articles: [
      {
        topic: "Buying Guide",
        title: "How to Judge Moringa Powder Quality Before You Import",
        description:
          "Colour, aroma, mesh size and moisture — what a bright green, finely milled moringa powder tells you about how the leaves were dried and processed.",
        body: [
          {
            heading: "Start with colour",
            text: "Good moringa leaf powder is a bright to deep olive green. A dull, yellowish or brownish tint usually points to old leaves, stems milled in with the leaflets, too much heat during drying, or long exposure to light in storage. Compare samples side by side in daylight rather than judging one on its own.",
          },
          {
            heading: "Smell and taste a sample",
            text: "Fresh powder smells green and grassy, a little like hay or spinach, with a mildly bitter finish. Musty, smoky or burnt notes are a warning sign: they suggest the leaves were dried too slowly, too hot, or stored damp.",
          },
          {
            heading: "Agree the mesh size for your use",
            text: "Particle size decides how the powder behaves. Capsule fillers and drink mixes generally need a fine, even powder that flows and disperses well; tea blends can take a coarser grind. Specify the mesh range your process needs and ask for it to be confirmed on the specification sheet.",
          },
          {
            heading: "Keep moisture low",
            text: "Moisture is the main enemy of shelf life. A powder that is too moist cakes, loses colour and is more prone to microbial growth. Set a maximum moisture value in your specification and check it on the certificate of analysis for every lot.",
          },
          {
            heading: "Ask for the paperwork",
            text: "Before a first order, request a sample, the specification sheet and a certificate of analysis. Check which tests your destination market expects — such as microbiology, heavy metals or pesticide residues — and agree them in advance, along with packaging and labelling.",
          },
        ],
      },
      {
        topic: "Processing",
        title: "From Leaf to Powder: Why Drying Matters for Moringa",
        description:
          "How harvesting, washing and low-temperature drying help moringa keep its green colour and fresh, grassy character.",
        body: [
          {
            heading: "Speed after harvest",
            text: "Moringa leaves are mostly water when they are picked and begin to wilt and yellow within hours. Moving them quickly from tree to processing is the first step in keeping their colour.",
          },
          {
            heading: "Leaflets, not stalks",
            text: "The small leaflets are separated from the woody stalks before drying. Stalks add coarse fibre, dull the colour and change the taste, so removing them gives a smoother, greener powder.",
          },
          {
            heading: "Gentle drying protects colour",
            text: "Leaves are washed and then dried under controlled conditions, out of strong direct sun and without excessive heat. Harsh drying can brown the leaves and reduce heat-sensitive nutrients such as vitamin C, while drying that is too slow risks spoilage. The aim is crisp, evenly dried leaves that still look green.",
          },
          {
            heading: "Milling, sieving and packing",
            text: "The dried leaves are milled into powder and sieved for an even texture, then packed promptly in food-grade liners that keep out moisture and light. Each of these steps appears in the process timeline above, from harvesting to packaging.",
          },
        ],
      },
      {
        topic: "Applications",
        title: "Moringa Powder in Teas, Smoothies and Functional Foods",
        description:
          "Where food and beverage brands use moringa powder, and what to specify when sourcing it for a product line.",
        body: [
          {
            heading: "Work with its flavour",
            text: "Moringa is earthy and grassy, so small inclusion levels go a long way. It pairs well with citrus, mint, ginger, banana, mango, cocoa and green tea, which round out its slightly bitter finish.",
          },
          {
            heading: "Beverages and smoothie mixes",
            text: "In drinks the main challenge is dispersion. A fine, consistent mesh helps, as does blending moringa with other dry ingredients before adding liquid. At home, whisking the powder into a little water to make a paste first prevents lumps.",
          },
          {
            heading: "Bakery and snacks",
            text: "Moringa adds a natural green colour to breads, crackers, pasta and snack bites. Heat can darken that colour, so trial bakes help set the right amount and baking conditions.",
          },
          {
            heading: "Teas and supplements",
            text: "Herbal tea blends often use a slightly coarser grind alongside lemongrass, mint or ginger. Capsule and tablet makers need a fine, free-flowing powder with tightly specified moisture so it fills and compresses evenly.",
          },
          {
            heading: "Labelling and storage",
            text: "Moringa is a food ingredient, and the claims allowed on packaging vary from market to market, so check local rules before describing benefits. Store the powder sealed in a cool, dry, dark place and agree its shelf life on the specification sheet.",
          },
        ],
      },
    ],
  },
  "onion-powder": {
    image: photo("Onion Powder/onion-powder-hero.webp"),
    alt: "Onion powder in a bowl beside whole onions",
    art: "powder",
    articles: [
      {
        topic: "Buying Guide",
        title: "Onion Powder for Food Manufacturing: What to Specify",
        description:
          "Mesh size, colour, pungency and moisture — the specification points that keep onion powder consistent from one batch to the next.",
      },
      {
        topic: "Storage",
        title: "Keeping Onion Powder Free-Flowing in Storage and Transit",
        description:
          "Onion powder readily absorbs moisture. How moisture-barrier packaging and dry storage help prevent caking.",
      },
      {
        topic: "Applications",
        title: "Onion Powder in Seasonings, Sauces and Ready Meals",
        description:
          "Why processors choose dehydrated onion powder for even flavour, long shelf life and easy dosing in blends.",
      },
    ],
  },
  "turmeric-powder": {
    image: photo("Turmeric Powder/turmeric-powder-insights.webp"),
    alt: "A bowl of golden turmeric powder beside fresh turmeric roots and sliced rhizomes",
    art: "turmeric",
    articles: [
      {
        topic: "Buying Guide",
        title: "Turmeric Powder Quality: Colour, Curcumin and Purity",
        description:
          "What to ask for when sourcing turmeric powder — curcumin content, colour value, moisture and lab testing per lot.",
      },
      {
        topic: "Processing",
        title: "How Turmeric Rhizomes Become Fine Golden Powder",
        description:
          "Boiling, drying, polishing and grinding — each step shapes the colour and aroma of the finished turmeric powder.",
      },
      {
        topic: "Applications",
        title: "Turmeric Powder in Spice Blends, Food Colouring and Beverages",
        description:
          "From curry powders to golden lattes, the industries that rely on turmeric powder and what each looks for.",
      },
    ],
  },

  "red-chilli-powder": {
    image: null,
    alt: "Red chilli powder",
    art: "powder",
    articles: [
      {
        topic: "Buying Guide",
        title: "Red Chilli Powder Buying Guide: Colour, Heat and Grind",
        description:
          "Why chilli variety sets colour and heat, and how to judge appearance, grind and packing when buying red chilli powder.",
      },
      {
        topic: "Quality",
        title: "Understanding ASTA Colour and SHU in Red Chilli Powder",
        description:
          "What ASTA colour value and Scoville Heat Units describe, and how buyers use them when agreeing a red chilli powder specification.",
        published: "2026-10-09",
      },
      {
        topic: "Storage",
        title: "Storage and Handling Considerations for Bulk Chilli Powder",
        description:
          "Why light, heat and moisture affect chilli powder, and how dry, sealed and protected storage helps limit fading and caking.",
      },
    ],
  },
  "black-pepper-powder": {
    image: photo("Black Pepper Powder.webp"),
    alt: "Ground black pepper",
    art: "powder",
    articles: [
      {
        topic: "Quality",
        title: "Ground Black Pepper Quality: Aroma, Grind and Purity",
        description:
          "How buyers judge black pepper powder by aroma, colour, grind consistency, purity and packing.",
      },
      {
        topic: "Processing",
        title: "How Black Peppercorns Are Ground Without Losing Aroma",
        description:
          "Cleaning, milling, sieving and packing — the steps that turn peppercorns into aromatic ground pepper.",
      },
      {
        topic: "Applications",
        title: "Black Pepper Powder in Seasonings, Meat Products and Ready Meals",
        description:
          "Where ground black pepper is used across food industries, and what each buyer specifies for grind and cleanliness.",
      },
    ],
  },
  "coriander-seeds-powder": {
    image: null,
    alt: "Coriander seeds powder",
    art: "powder",
    articles: [
      {
        topic: "Export Guide",
        title: "Coriander Seeds Powder Export Guide: Colour, Aroma and Packing",
        description:
          "What importers expect from ground coriander — colour, aroma, fineness, purity and packing for the sea journey.",
      },
      {
        topic: "Sourcing",
        title: "Sourcing Coriander Powder: From Whole Seed to Ground Spice",
        description:
          "How seed selection, cleaning, careful grinding and timing shape the quality of the coriander powder you buy.",
      },
      {
        topic: "Uses",
        title: "Ground Coriander in Curry Powders, Masalas and Bakery",
        description:
          "Why coriander powder is the base of so many spice blends, and how it is used in ready meals, pickles and baking.",
      },
    ],
  },
  "garlic-powder": {
    image: null,
    alt: "Garlic powder",
    art: "powder",
    articles: [
      {
        topic: "Buying Guide",
        title: "Garlic Powder Buying Guide: Colour, Aroma and Free-Flowing Texture",
        description:
          "What colour, smell and texture tell you about a garlic powder sample, and which details to agree on the specification sheet before a first order.",
      },
      {
        topic: "Storage",
        title: "Stopping Garlic Powder from Caking in Storage and Transit",
        description:
          "Why dehydrated garlic draws in moisture, and how packing, container care and warehouse handling keep the powder dry, aromatic and free-flowing.",
      },
      {
        topic: "Food Processing",
        title: "Garlic Powder in Seasonings, Snack Coatings and Ready Meals",
        description:
          "How seasoning makers, snack producers, sauce and ready-meal manufacturers and food service kitchens use garlic powder in place of fresh garlic.",
      },
    ],
  },
  "dry-mango-powder": {
    image: null,
    alt: "Dry mango powder",
    art: "powder",
    articles: [
      {
        topic: "Quality",
        title: "Dry Mango Powder Quality: Tang, Colour and Freshness",
        description:
          "How to judge an amchur sample by its sourness, colour, texture and aroma, and what to agree with your supplier before ordering.",
      },
      {
        topic: "Processing",
        title: "From Green Mango to Amchur: How Dry Mango Powder Is Made",
        description:
          "From unripe green mangoes to a fine, tangy powder — how peeling, slicing, drying, grinding and packing shape the finished amchur.",
      },
      {
        topic: "Applications",
        title: "Dry Mango Powder (Amchur) in Chaat Masala, Chutneys and Snacks",
        description:
          "Why amchur is the dry souring agent of choice for chaat masala, snack seasonings, chutneys, curries and ready meals.",
      },
    ],
  },
  "garam-masala": {
    image: null,
    alt: "Garam masala",
    art: "powder",
    articles: [
      {
        topic: "Sourcing",
        title: "Sourcing Garam Masala: Agreeing a Blend Recipe with Your Supplier",
        description:
          "There is no single garam masala recipe. How to share a reference, approve samples and agree a blend that stays consistent from lot to lot.",
      },
      {
        topic: "Export Guide",
        title: "Importing Garam Masala in Bulk: Specifications, Packing and Labelling",
        description:
          "The specification, packing, labelling and documents to agree before importing a ground spice blend, and how to protect its aroma in transit.",
      },
      {
        topic: "Uses",
        title: "How Food Makers Use Garam Masala in Curries, Rice and Marinades",
        description:
          "Garam masala in curries, gravies, biryani, marinades and snacks — and why manufacturers, food service and spice brands rely on a ready blend.",
      },
    ],
  },
  "white-pepper-powder": {
    image: null,
    alt: "White pepper powder",
    art: "powder",
    articles: [
      {
        topic: "Quality",
        title: "White Pepper Powder Quality: Colour, Aroma and Fineness",
        description:
          "What to look for in a sample of ground white pepper — an even pale colour, a clean earthy aroma, the right fineness and steady heat.",
      },
      {
        topic: "Applications",
        title: "Using White Pepper Powder in Sauces, Soups and Seasonings",
        description:
          "Why sauce makers, food processors and seasoning blenders choose white pepper for pale products, and how it is used across kitchens and factories.",
      },
      {
        topic: "Export Guide",
        title: "Importing White Pepper Powder: Specifications and Packing",
        description:
          "Specification, sampling, packing and documentation points to settle before importing ground white pepper in bulk.",
      },
    ],
  },
  "nutmeg-powder": {
    image: null,
    alt: "Nutmeg powder",
    art: "powder",
    articles: [
      {
        topic: "Buying Guide",
        title: "Buying Nutmeg Powder: What to Check in a Sample",
        description:
          "Colour, aroma, fineness and paperwork — how to judge a sample of ground nutmeg before placing a bulk order.",
      },
      {
        topic: "Food Processing",
        title: "Nutmeg Powder in Bakery, Dairy and Beverage Production",
        description:
          "How manufacturers use ground nutmeg in baked goods, desserts, drinks, spice blends and savoury foods, and why lot-to-lot consistency matters.",
      },
      {
        topic: "Storage",
        title: "Storing Nutmeg Powder to Protect Its Aroma",
        description:
          "Ground nutmeg loses its warm aroma to air, heat, light and damp. Practical storage and stock rotation steps for bulk buyers.",
      },
    ],
  },
  "dry-ginger-powder": {
    image: photo("Dry Ginger Powder.webp"),
    alt: "Dry ginger powder (sonth)",
    art: "ginger",
    articles: [
      {
        topic: "Quality",
        title: "Dry Ginger Powder Quality: Colour, Pungency and Fibre",
        description:
          "How to judge sonth from a sample — its colour, warm aroma, peppery heat and how evenly the fibrous rhizome has been milled.",
      },
      {
        topic: "Processing",
        title: "From Rhizome to Sonth: How Dry Ginger Powder Is Made",
        description:
          "Selecting mature rhizomes, peeling, drying, grinding and sieving — the steps that decide the colour and warmth of dry ginger powder.",
      },
      {
        topic: "Export Guide",
        title: "Exporting Dry Ginger Powder: Packaging, Labelling and Shipping",
        description:
          "Moisture-resistant packing, destination labelling, documents and transit care for shipping ginger powder in bulk.",
      },
    ],
  },
  "clove-powder": {
    image: null,
    alt: "Clove powder",
    art: "powder",
    articles: [
      {
        topic: "Buying Guide",
        title: "Buying Clove Powder: Aroma, Colour and Purity Checks",
        description:
          "Ground cloves hide what whole buds show. How to assess clove powder by aroma, colour, texture and agreed purity specifications.",
      },
      {
        topic: "Storage",
        title: "Why Clove Powder Loses Aroma Faster Than Whole Cloves",
        description:
          "Grinding exposes clove's aromatic oils. The packaging, temperature and stock rotation that keep clove powder at full strength.",
      },
      {
        topic: "Food Processing",
        title: "Using Clove Powder in Meat, Sauce and Bakery Production",
        description:
          "How manufacturers dose ground cloves in sausages, marinades, ketchups and spiced bakes — and keep the flavour consistent lot to lot.",
      },
    ],
  },

  /* --- Agricultural products ---------------------------------------------- */
  // Fresh Onions carries full articles, read in place on the page.
  onion: {
    image: photo("Onion.webp"),
    alt: "Fresh red onions with papery skins",
    art: "field",
    articles: [
      {
        topic: "Export Guide",
        title: "Fresh Onion Export Guide: Quality, Grading, Storage and Buyer Requirements",
        description:
          "What importers and distributors check when buying fresh onions in bulk — from bulb selection and size grading to packaging, storage and shipment planning.",
        body: [
          {
            heading: "What good quality looks like",
            text: "A sound fresh onion is firm to the touch, with dry, papery outer skins that cover the bulb well and a neck that is dry and tightly closed. Soft spots, sprouting, mould, wet or slipping skins and cuts or bruises all shorten the life of a shipment, so they are the first things to look for in a sample.",
          },
          {
            heading: "Selecting onions for your market",
            text: "Markets differ in what they expect. Some prefer red onions, others pink or white; some want a sharper, more pungent onion, others a milder one. Agree the onion type with your supplier at the start, and confirm it against a sample before a full order is packed.",
          },
          {
            heading: "Grading and bulb size",
            text: "Onions are sorted by bulb diameter so that each bag holds bulbs of a similar size. Retail packs, wholesale markets and processors often want different sizes, so state the size range you need on your enquiry. Even grading makes onions easier to sell and to process, and avoids disputes on arrival.",
          },
          {
            heading: "Freshness from field to dispatch",
            text: "Onions keep best when their skins have dried properly before packing. Bulbs that are packed damp or with green necks are more likely to sprout or rot in transit. Ask how the onions were dried and selected, and how long before dispatch they were packed.",
          },
          {
            heading: "Packaging that lets onions breathe",
            text: "Fresh onions need air moving around them. Breathable bags such as mesh or jute are generally preferred over sealed plastic, which traps moisture. Agree the bag type and weight, and any labelling your market requires, before the order is packed.",
          },
          {
            heading: "Storage and handling",
            text: "Keep onions cool, dry and well ventilated, away from direct sunlight and moisture. Stack bags so air can circulate and the lower layers are not crushed, and handle them gently when loading and unloading — bruised onions spoil faster and can affect the bulbs around them.",
          },
          {
            heading: "Buying in bulk",
            text: "Bulk orders are planned around quantity, size, packaging and timing. Our minimum order quantity for fresh onions is 500 KG to 1 MT. Sharing your expected volumes and delivery schedule early helps your supplier confirm availability and keep shipments consistent.",
          },
          {
            heading: "Export considerations",
            text: "Before shipping, confirm the documents and inspections your destination requires, the packing and labelling rules that apply, and how the onions will be kept cool and ventilated in transit. Agree all of these in writing with your supplier as part of the order.",
          },
        ],
      },
      {
        topic: "Storage",
        title: "Ventilation and Curing: Keeping Onions Sound in Transit",
        description:
          "Why well-dried onions in breathable bags travel better, and the storage conditions that limit sprouting.",
        body: [
          {
            heading: "Why dry skins matter",
            text: "After harvest, onions are left to dry so their outer skins and necks seal. This dry layer protects the bulb, slows moisture loss and helps keep out rot. Onions packed before they are properly dried are far more likely to spoil.",
          },
          {
            heading: "Air, not moisture",
            text: "In storage and in transit, onions should have air moving around them. Breathable bags, sensible stacking and ventilated storage all help carry away moisture, which is the main cause of sprouting and mould.",
          },
          {
            heading: "On arrival",
            text: "Unload promptly, keep bags off wet floors and out of direct sun, and check a sample of bulbs for firmness and skin condition before the stock goes into storage or onto the market.",
          },
        ],
      },
      {
        topic: "Market Guide",
        title: "Red, Pink and White Onions: Choosing the Right Type",
        description:
          "How the main onion types differ in colour, flavour and use, from fresh markets to processing.",
        body: [
          {
            heading: "Red onions",
            text: "Red onions have deep red to purple skins and flesh with red-tinged rings. They are widely used in cooking and fresh preparations, where their colour stands out in salads and toppings.",
          },
          {
            heading: "Pink onions",
            text: "Pink onions have lighter, pinkish skins and are popular in many markets for everyday cooking. Their flavour ranges from mild to pungent depending on variety.",
          },
          {
            heading: "White onions",
            text: "White onions have white skins and flesh. They are used in cooking and food processing, and are preferred in some markets for their clean appearance.",
          },
          {
            heading: "Matching type to buyer",
            text: "Choose the type your customers expect. Availability of each type depends on the season, so confirm it with your supplier at the time of your enquiry.",
          },
        ],
      },
    ],
  },
  // Garlic carries full articles, read in place on the page.
  garlic: {
    image: photo("Agricultural Products/Garlic/garlic-bulk-sourcing-quality.webp"),
    alt: "Garlic bulbs in a jute sack beside a field, with a packing warehouse behind",
    art: "field",
    articles: [
      {
        topic: "Buying Guide",
        title: "Fresh Garlic Buying Guide: Grades, Bulb Size, Packaging and Export Supply",
        description:
          "What commercial buyers check when sourcing fresh garlic — bulb quality, sizing, forms, packing, storage and planning bulk export orders.",
        body: [
          {
            heading: "Judging fresh garlic quality",
            text: "Good fresh garlic has bulbs that feel heavy for their size, with cloves packed tightly under dry, papery outer skins. Bulbs that feel light or hollow, cloves that give under gentle pressure, green shoots at the tip, or dark and mouldy patches all point to stock that will not hold up through distribution.",
          },
          {
            heading: "Bulb appearance and firmness",
            text: "Buyers look for a clean, unbroken outer skin with a white to off-white colour, depending on variety. Firm bulbs with intact skins are easier to store and sell, and peel more cleanly in processing. Loose skins, bruising or soft cloves are signs to raise before an order is packed.",
          },
          {
            heading: "Size and grading",
            text: "Garlic is sorted by bulb size so that each consignment is consistent. Retail buyers often want even, presentable bulbs, while processors may focus more on clove yield than appearance. State the bulb size range you need with your enquiry, and confirm it against a sample before a full order.",
          },
          {
            heading: "Whole bulbs or peeled cloves",
            text: "Whole bulbs suit fresh markets, retail and food service. Peeled cloves, available on request, save labour for kitchens and processors but need more careful handling and faster use. Decide which form fits your operation before you ask for a quotation.",
          },
          {
            heading: "Packaging",
            text: "Packaging is agreed according to buyer requirements. Common options include mesh bags and cartons, with custom packing on request. Breathable packing helps bulbs stay dry; confirm bag or carton size, weight and any labelling your market needs.",
          },
          {
            heading: "Storage and handling",
            text: "Keep garlic cool, dry and well ventilated, away from excess moisture, and handle it carefully during loading and transport so skins stay intact and cloves are not bruised.",
          },
          {
            heading: "Buying in bulk",
            text: "For bulk orders, share your required quantity, bulb size, form and packaging together. Our minimum order quantity for fresh garlic is 500 KG to 1 MT, and sharing your expected volumes early helps your supplier plan availability, which depends on the season.",
          },
          {
            heading: "Export supply requirements",
            text: "Before shipping, confirm the documents and inspections your destination requires, the packing and labelling rules that apply, and how the garlic will be kept dry and ventilated in transit. Agree these with your supplier as part of the order.",
          },
        ],
      },
      {
        topic: "Storage",
        title: "How to Store Fresh Garlic: Prevent Sprouting and Maintain Quality",
        description:
          "The storage conditions that keep garlic bulbs firm and dry, and the mistakes that lead to sprouting and mould.",
        body: [
          {
            heading: "Keep it dry",
            text: "Moisture is the main cause of mould and soft cloves. Store garlic in a dry place and keep bags off damp floors and away from water.",
          },
          {
            heading: "Let air circulate",
            text: "Garlic keeps best with good ventilation. Breathable packaging and space between stacked bags or cartons let air move around the bulbs.",
          },
          {
            heading: "Avoid conditions that trigger sprouting",
            text: "Warm, humid or poorly ventilated storage encourages green shoots and softening. Keep stock in a cool, dry environment and follow the storage conditions agreed for your product.",
          },
          {
            heading: "Check stock regularly",
            text: "Inspect bulbs from time to time and remove any that are soft, sprouting or mouldy so they do not affect the rest of the stock.",
          },
        ],
      },
      {
        topic: "Food Processing",
        title: "Fresh Garlic for Food Processing: Applications, Forms and Handling",
        description:
          "How processors use fresh garlic in pastes, sauces and seasonings, and what to consider when choosing bulbs or peeled cloves.",
        body: [
          {
            heading: "Where processors use garlic",
            text: "Fresh garlic goes into garlic pastes, sauces, marinades, seasoning mixes and a wide range of prepared and processed foods, where its strong aroma carries through the finished product.",
          },
          {
            heading: "Choosing the form",
            text: "Whole bulbs give processors control over peeling and are generally easier to store. Peeled cloves, available on request, reduce preparation time on the line but should be used promptly after delivery.",
          },
          {
            heading: "Handling on arrival",
            text: "Check a sample for firmness, colour and freedom from sprouting or mould, keep stock cool and dry until it is used, and plan deliveries around production so garlic does not sit in storage longer than necessary.",
          },
        ],
      },
    ],
  },
  // Elephant Yam carries full articles, read in place on the page.
  "elephant-yam": {
    image: photo("Agricultural Products/Elephant Yam/elephant-yam-bulk-quality.webp"),
    alt: "A pile of whole elephant yam tubers with two cut open to show firm, pale flesh",
    art: "field",
    articles: [
      {
        topic: "Buying Guide",
        title: "Elephant Foot Yam: What Importers Should Look For",
        description:
          "Corm size, firmness, skin condition and freedom from cuts — the quality checks behind a good elephant yam shipment.",
        body: [
          {
            heading: "Firmness first",
            text: "A good elephant yam feels solid and heavy for its size. Press the surface around the top and base: soft or spongy patches usually mean the flesh beneath has started to break down, and that will spread in storage.",
          },
          {
            heading: "Skin condition",
            text: "The rough brown skin is the tuber's protection. Look for skin that is dry and intact, without deep cuts, cracks, crushed areas or wet spots. Some soil on the surface is normal; mould or a sour smell is not.",
          },
          {
            heading: "Size and condition",
            text: "Elephant yam tubers vary widely in size. Kitchens and retailers often prefer a manageable, even size, while processors may accept larger tubers for cutting. Agree the size range you need before the order is packed, and check that tubers in a lot are broadly consistent.",
          },
          {
            heading: "The cut surface",
            text: "If a sample is cut, the flesh should be dense and firm, cream to pinkish depending on variety, with no dark streaks, hollow areas or soft discoloured zones.",
          },
          {
            heading: "Sourcing in bulk",
            text: "For bulk orders, share your quantity, size range, packing preference and destination together. Our minimum order quantity for elephant yam is 500 KG to 1 MT, and availability depends on the season, so plan volumes early.",
          },
          {
            heading: "Export considerations",
            text: "Fresh tubers are a plant product, so confirm the documents and inspections your destination requires, and how the consignment will be kept dry and ventilated on the way. Agree these with your supplier as part of the order.",
          },
        ],
      },
      {
        topic: "Storage",
        title: "Handling and Storing Elephant Yam for Long Journeys",
        description:
          "Why elephant yam travels best dry and ventilated, and how careful handling keeps tubers sound in transit.",
        body: [
          {
            heading: "Damage starts at handling",
            text: "Elephant yam is heavy, and a dropped or crushed tuber bruises internally even when the skin looks fine. Load and unload by hand rather than tipping, and avoid stacking so high that the lower layers are crushed.",
          },
          {
            heading: "Keep it dry and ventilated",
            text: "Moisture is what turns a small wound into rot. Store and ship tubers in a cool, dry, well-ventilated space, in packing that lets air move around them, and keep them off wet floors.",
          },
          {
            heading: "Check on arrival",
            text: "When the consignment arrives, open a sample of packs, check tubers for firmness and skin damage, and set aside any soft or wet pieces so they do not affect the rest of the stock.",
          },
        ],
      },
      {
        topic: "Uses",
        title: "Elephant Yam in Curries, Chips and Ethnic Retail",
        description:
          "How elephant yam is cooked in regional cuisines, and what kitchens, processors and retailers look for when they buy it.",
        body: [
          {
            heading: "Curries and gravies",
            text: "Cut into cubes, elephant yam holds its shape in slow-cooked curries and gravies and absorbs the flavour of the sauce, which makes it a mainstay of many regional home and restaurant menus.",
          },
          {
            heading: "Chips, fries and roasts",
            text: "Thin slices are fried into crisp chips, and thicker pieces are shallow-fried, roasted or made into cutlets. Firm, dense tubers give the most even results.",
          },
          {
            heading: "Ethnic and diaspora retail",
            text: "For specialty grocers serving South Asian communities, whole tubers sell best when they are clean, firm and a size shoppers can carry. Retailers often cut large tubers into wrapped pieces in store.",
          },
          {
            heading: "Processing and ready meals",
            text: "Processors peel, cut and blanch elephant yam for frozen packs and ready-to-cook lines. They usually look for consistent size and firm flesh so that cutting and cooking times stay predictable.",
          },
        ],
      },
    ],
  },
  // Cabbage carries full articles, read in place on the page.
  cabbage: {
    image: photo("Agricultural Products/Cabbage/cabbage-export-quality.webp"),
    alt: "Fresh cabbage heads in wooden crates, with one cut in half",
    art: "leaf",
    articles: [
      {
        topic: "Buying Guide",
        title: "Choosing Export-Quality Cabbage: Head Weight and Compactness",
        description:
          "Firm, compact heads with fresh wrapper leaves — the specification points buyers agree before a cabbage order.",
        body: [
          {
            heading: "Weight for size",
            text: "A good head of cabbage feels heavy for its size. Lift a few heads of similar diameter: the heavier ones are usually denser, with tightly packed inner leaves and less air between the layers.",
          },
          {
            heading: "Compactness",
            text: "Press gently on the top of the head. It should feel firm and resist, not give or sound hollow. Loose, puffy heads tend to wilt faster and are harder to cut cleanly in processing.",
          },
          {
            heading: "Wrapper leaves and freshness",
            text: "The outer leaves protect the head in transit. Look for wrapper leaves that are fresh and green rather than yellowed, slimy or badly torn, and a stem end that is clean-cut and not dried out or blackened.",
          },
          {
            heading: "Agreeing size",
            text: "Retail, food service and processing often want different head sizes. Tell your supplier the size range you need — size and grade are supplied as per buyer requirements — and confirm it against a sample before a full order.",
          },
          {
            heading: "Bulk sourcing",
            text: "For bulk orders, share your quantity, head size, packing preference and destination together. Our minimum order quantity for fresh cabbage is 500 KG to 1 MT, and supply depends on the season.",
          },
          {
            heading: "Export considerations",
            text: "Fresh cabbage is perishable, so confirm the documents and inspections your destination requires and how the consignment will be kept cool during transit. Agree these with your supplier as part of the order.",
          },
        ],
      },
      {
        topic: "Storage",
        title: "Keeping Cabbage Crisp with Cool-Chain Handling",
        description:
          "How cool temperatures, humidity and careful handling help cabbage keep its crunch and colour during transit.",
        body: [
          {
            heading: "Cool and humid, not wet",
            text: "Cabbage loses moisture through its leaves, and warm, dry air makes it wilt. Keep it in cool storage with suitable humidity, but avoid free water on the heads, which encourages rot.",
          },
          {
            heading: "Room to breathe",
            text: "Good ventilation carries away heat and moisture. Stack heads or packs so air can move between them, and avoid packing so tightly that heads are crushed.",
          },
          {
            heading: "Gentle handling",
            text: "Bruised or split heads spoil sooner and look poor on the shelf. Load and unload carefully, and keep heads out of direct sun and heat while they wait to be moved.",
          },
          {
            heading: "On arrival",
            text: "Check a sample of heads for firmness and leaf condition. Trimming damaged outer leaves before display or processing keeps the rest of the head looking fresh.",
          },
        ],
      },
      {
        topic: "Applications",
        title: "Cabbage for Salads, Coleslaw and Food Processing",
        description:
          "From fresh salads to shredded packs, how cabbage is used and what each kind of buyer looks for.",
        body: [
          {
            heading: "Salads and coleslaw",
            text: "Finely shredded or sliced cabbage is the base of coleslaw and many fresh salads. Dense, crisp heads give long, even shreds that hold their crunch after dressing.",
          },
          {
            heading: "Cooked dishes",
            text: "In stir-fries, curries and soups, cabbage softens and sweetens as it cooks. Kitchens value heads that cut cleanly into even pieces so they cook at the same rate.",
          },
          {
            heading: "Fermentation",
            text: "Traditional fermented preparations rely on fresh, firm cabbage. Crisp leaves give a better texture once fermented.",
          },
          {
            heading: "Processing lines",
            text: "Processors wash, core and shred cabbage for salad packs, ready meals and frozen vegetable mixes. They usually look for consistent head size and firm, compact heads, which give a higher yield of usable leaf.",
          },
        ],
      },
    ],
  },
  // Cucumber carries full articles, read in place on the page.
  cucumber: {
    image: photo("Agricultural Products/Cucumber/cucumber-export-quality.webp"),
    alt: "Fresh cucumbers sorted on steel trays",
    art: "leaf",
    articles: [
      {
        topic: "Buying Guide",
        title: "Fresh Cucumber Sourcing: Length, Straightness and Colour",
        description:
          "How cucumber buyers grade by length, shape, skin colour and firmness for retail and food service.",
        body: [
          {
            heading: "Length and straightness",
            text: "Retail packs and food-service kitchens usually want cucumbers of a similar length and a straight, even shape, which pack neatly and slice into uniform rounds. Curved or misshapen fruit is often better suited to processing. State the length range you need, as size is supplied according to buyer requirements.",
          },
          {
            heading: "Colour",
            text: "Look for an even green colour along the whole cucumber. Yellowing, especially at the blossom end, usually means the fruit is over-mature and will taste less fresh and have larger seeds.",
          },
          {
            heading: "Firmness",
            text: "A fresh cucumber is firm from end to end. Softness at the tips, wrinkled skin or a rubbery bend are signs of moisture loss or age, and these cucumbers will not hold up through distribution.",
          },
          {
            heading: "Skin condition",
            text: "Check for clean skin without cuts, bruises, sunken spots or decay. Small marks matter more than they seem, because damaged areas are where spoilage starts.",
          },
          {
            heading: "Buying in bulk",
            text: "For bulk orders, share your quantity, length range, packing preference and destination together. Our minimum order quantity for fresh cucumbers is 500 KG to 1 MT, and supply depends on the season.",
          },
          {
            heading: "Export considerations",
            text: "Cucumbers are perishable and sensitive to temperature, so confirm the documents and inspections your destination requires and how the consignment will be kept at a suitable temperature in transit.",
          },
        ],
      },
      {
        topic: "Storage",
        title: "Why Cucumbers Need Careful Temperature Control",
        description:
          "Cucumbers are sensitive to cold injury. How careful temperature handling keeps them fresh and firm.",
        body: [
          {
            heading: "Cool, but not too cold",
            text: "Cucumbers keep best in cool conditions, but they are sensitive to chilling. Stored too cold, they can develop sunken, water-soaked patches and decay quickly once they warm up again. Agree suitable storage conditions with your supplier and keep them steady.",
          },
          {
            heading: "Humidity and ventilation",
            text: "Cucumbers lose moisture through their skin and soften in dry air, while trapped moisture encourages rot. Suitable humidity with good ventilation keeps them firm without wet surfaces.",
          },
          {
            heading: "Keep them apart from ripening produce",
            text: "Some fruits give off ethylene as they ripen, which can speed yellowing in cucumbers. Where possible, store cucumbers away from ripening fruit.",
          },
          {
            heading: "Handle with care",
            text: "Bruises are not always visible at first but shorten shelf life. Load and unload packs gently and avoid stacking that crushes the lower layers.",
          },
        ],
      },
      {
        topic: "Applications",
        title: "Cucumbers for Salads, Pickling and Fresh-Cut Lines",
        description:
          "How intended use — slicing, pickling or fresh-cut — shapes the cucumbers you should order.",
        body: [
          {
            heading: "Salads and food service",
            text: "For salads, raita and garnishes, kitchens want firm cucumbers with an even colour that slice cleanly. Consistent length makes portioning faster in busy kitchens.",
          },
          {
            heading: "Pickling",
            text: "Pickling calls for firm, fresh cucumbers that stay crunchy after brining. Freshness at the point of pickling matters more than appearance, so plan deliveries close to production.",
          },
          {
            heading: "Fresh-cut processing",
            text: "Fresh-cut lines wash, slice or dice cucumbers for salad packs and sandwiches. Processors look for firm flesh and consistent size, which keep cutting yields predictable, and they keep the cut product chilled appropriately.",
          },
          {
            heading: "Beverages",
            text: "Juice and infused-water producers value fresh, well-coloured cucumbers, where flavour comes first and slight variations in shape matter less.",
          },
        ],
      },
    ],
  },
  // Green Chilli carries full articles, read in place on the page.
  "green-chili": {
    image: photo("Agricultural Products/Green Chili/green-chilli-export-quality.webp"),
    alt: "Fresh green chillies sorted on steel trays",
    art: "leaf",
    articles: [
      {
        topic: "Buying Guide",
        title: "Green Chilli Export Guide: Pungency, Length and Freshness",
        description:
          "Key quality considerations for buyers sourcing fresh green chillies, including appearance, freshness and product condition.",
        body: [
          {
            heading: "Colour and gloss",
            text: "Fresh green chillies have a bright to deep green, glossy skin. Dull, wrinkled or yellowing pods, or pods turning red, are signs of age or ripening, and will not travel or sell as well.",
          },
          {
            heading: "Firmness and the stem",
            text: "Pods should feel firm and snap rather than bend. Check that stems are green and attached; dry, blackened or missing stems are often where spoilage begins.",
          },
          {
            heading: "Length and pungency",
            text: "Pod length and heat both vary by variety. Tell your supplier the length range and heat level your market expects, and confirm them against a sample, because size and grade are supplied as per buyer requirements.",
          },
          {
            heading: "Product condition",
            text: "Look for pods free from cuts, soft or water-soaked spots, mould and insect damage. Even a small share of damaged pods can spread spoilage through a pack in transit.",
          },
          {
            heading: "Ordering in bulk",
            text: "For bulk orders, share your quantity, variety preference, length range, packing and destination together. Our minimum order quantity for fresh green chilli is 500 KG to 1 MT, and supply depends on the season.",
          },
          {
            heading: "Export considerations",
            text: "Fresh chillies are perishable, so confirm the documents and inspections your destination requires and how the consignment will be kept cool and ventilated in transit.",
          },
        ],
      },
      {
        topic: "Storage",
        title: "How to Store Fresh Green Chillies: Temperature, Handling and Shelf Life",
        description:
          "Practical guidance on handling and storage considerations for maintaining fresh green chilli quality.",
        body: [
          {
            heading: "Cool and well ventilated",
            text: "Green chillies keep best in cool, well-ventilated conditions. Warmth speeds ripening and softening, while trapped moisture encourages mould, so avoid sealed packs that hold condensation.",
          },
          {
            heading: "Handle gently",
            text: "Bruised or broken pods spoil first and can affect the pods around them. Load and unload packs carefully and avoid crushing the lower layers.",
          },
          {
            heading: "Shelf life depends on conditions",
            text: "How long green chillies stay fresh depends on the product grade, storage and handling conditions, so there is no single figure. Agree storage expectations with your supplier for your route and destination.",
          },
          {
            heading: "Check and rotate stock",
            text: "Inspect stock regularly, remove soft or mouldy pods, and sell or use older stock first.",
          },
        ],
      },
      {
        topic: "Applications",
        title: "Green Chillies in Sauces, Pickles and Food Processing",
        description:
          "Explore common commercial applications of fresh green chillies across sauces, pickles and food-processing uses.",
        body: [
          {
            heading: "Sauces and chutneys",
            text: "Green chilli sauces and chutneys rely on fresh, bright pods for their colour and sharp heat. Producers usually want consistent pungency so that batches taste the same.",
          },
          {
            heading: "Pickles and relishes",
            text: "Whole or slit green chillies are pickled in brine, oil or vinegar. Firm, freshly harvested pods hold their texture best through pickling.",
          },
          {
            heading: "Prepared foods",
            text: "Processors chop or paste green chillies for ready meals, marinades and seasonings. Clean, firm pods with intact stems are easier to wash, de-stem and process at scale.",
          },
          {
            heading: "Food service",
            text: "Restaurants and caterers use green chillies daily in curries, stir-fries and garnishes, and generally prefer even-sized pods that are quick to prepare.",
          },
        ],
      },
    ],
  },
  "frozen-peas": {
    image: photo("Frozen Peas.webp"),
    alt: "Frozen green peas",
    art: "leaf",
    articles: [
      {
        topic: "Buying Guide",
        title: "Frozen Green Peas: Size Grading, Colour and IQF Quality",
        description:
          "What separates good frozen peas — uniform size, bright colour, free-flowing IQF pieces and few broken peas.",
      },
      {
        topic: "Storage",
        title: "Maintaining the Cold Chain for Frozen Peas",
        description:
          "Why a steady deep-frozen temperature from plant to warehouse protects texture and prevents clumping.",
      },
      {
        topic: "Applications",
        title: "Frozen Peas in Ready Meals, Food Service and Retail Packs",
        description:
          "How kitchens and manufacturers use frozen peas, and the pack sizes each channel typically needs.",
      },
    ],
  },
  okra: {
    image: photo("Okra.webp"),
    alt: "Fresh green okra pods",
    art: "leaf",
    articles: [
      {
        topic: "Buying Guide",
        title: "Selecting Tender Okra for Export: Length and Freshness",
        description:
          "Why okra is picked young, and how buyers check pod length, tenderness and colour on arrival.",
      },
      {
        topic: "Storage",
        title: "Handling Okra Gently to Avoid Bruising and Browning",
        description:
          "Okra marks easily. The packing and temperature practices that keep pods green and firm in transit.",
      },
      {
        topic: "Applications",
        title: "Okra in Curries, Gumbo and Frozen Food Lines",
        description:
          "From bhindi masala to gumbo, how okra is used worldwide and what processors look for when freezing it.",
      },
    ],
  },
  "bitter-gourd": {
    image: photo("Bitter Gourd.webp"),
    alt: "Fresh green bitter gourds",
    art: "leaf",
    articles: [
      {
        topic: "Buying Guide",
        title: "Bitter Gourd Quality: Ridges, Colour and Firmness",
        description:
          "How to judge bitter gourd for export — firm, evenly green fruit with well-formed ridges and no yellowing.",
      },
      {
        topic: "Storage",
        title: "Slowing Ripening: Storing Bitter Gourd for Shipment",
        description:
          "Bitter gourd turns yellow as it ripens. The cool storage and packing that keep it market-ready.",
      },
      {
        topic: "Uses",
        title: "Bitter Gourd in Asian Cooking and Juices",
        description:
          "Where bitter gourd features in regional cuisines and the growing demand for it in juice and health-food products.",
      },
    ],
  },
  eggplant: {
    image: photo("EggPlant.webp"),
    alt: "Glossy purple eggplants",
    art: "leaf",
    articles: [
      {
        topic: "Buying Guide",
        title: "Eggplant Export Guide: Gloss, Shape and Firmness",
        description:
          "Shiny skin, green calyx and firm flesh — the quality markers buyers check on every eggplant shipment.",
      },
      {
        topic: "Storage",
        title: "Protecting Eggplant from Chilling Injury in Transit",
        description:
          "Eggplant dislikes cold. How the right storage range and packing prevent pitting and browning.",
      },
      {
        topic: "Market Guide",
        title: "Round, Long and Baby Eggplant: Matching Variety to Market",
        description:
          "How eggplant varieties differ in shape and use, from bharta and grilling to food-service menus.",
      },
    ],
  },
  drumstick: {
    image: photo("Drumstick.webp"),
    alt: "Fresh moringa drumstick pods",
    art: "leaf",
    articles: [
      {
        topic: "Buying Guide",
        title: "Fresh Drumsticks: Pod Length, Tenderness and Colour",
        description:
          "What importers look for in moringa drumsticks — even length, firm green pods and tender flesh inside.",
      },
      {
        topic: "Storage",
        title: "Keeping Drumsticks Fresh from Farm to Market",
        description:
          "How cool, humid storage and careful bundling stop drumstick pods from drying out and turning fibrous.",
      },
      {
        topic: "Uses",
        title: "Drumsticks in Sambar, Curries and Frozen Packs",
        description:
          "The South Asian dishes that feature drumsticks, and how frozen cut drumsticks serve overseas markets.",
      },
    ],
  },
  beans: {
    image: photo("Beans.webp"),
    alt: "Fresh green beans",
    art: "leaf",
    articles: [
      {
        topic: "Buying Guide",
        title: "Fresh Green Beans: Snap, Straightness and Size Grading",
        description:
          "How buyers grade green beans — crisp snap, straight pods, uniform diameter and bright colour.",
      },
      {
        topic: "Storage",
        title: "Pre-Cooling Green Beans for Longer Freshness",
        description:
          "Why removing field heat quickly and keeping beans cool and humid preserves their crispness.",
      },
      {
        topic: "Applications",
        title: "Green Beans for Retail, Food Service and Freezing",
        description:
          "How intended use shapes the bean grade and cut you should specify — whole, trimmed or cut.",
      },
    ],
  },

  /* --- Fruits ----------------------------------------------------------- */
  mango: {
    image: photo("Mango.webp"),
    alt: "Ripe mangoes with a cubed mango half",
    art: "field",
    articles: [
      {
        topic: "Buying Guide",
        title: "Importing Indian Mangoes: Varieties, Ripeness and Season",
        description:
          "Alphonso, Kesar, Banganapalli and more — how to choose a mango variety and plan orders around the Indian season.",
      },
      {
        topic: "Quality",
        title: "Mango Export Quality: Treatment, Grading and Inspection",
        description:
          "Why many destinations require treatment and inspection for mangoes, and how fruit is graded by size and colour.",
      },
      {
        topic: "Storage",
        title: "Ripening and Storing Mangoes After Arrival",
        description:
          "How to handle mangoes on arrival so they ripen evenly and reach shelves with full flavour.",
      },
    ],
  },
  banana: {
    image: photo("Banana.webp"),
    alt: "A bunch of fresh bananas",
    art: "field",
    articles: [
      {
        topic: "Buying Guide",
        title: "Banana Export Guide: Finger Length, Grade and Maturity",
        description:
          "How banana buyers specify finger length, curvature, peel colour and the maturity stage at harvest.",
      },
      {
        topic: "Storage",
        title: "Green Shipping and Controlled Ripening for Bananas",
        description:
          "Why bananas travel green and are ripened at destination, and the temperatures that keep them on track.",
      },
      {
        topic: "Market Guide",
        title: "Cavendish, Robusta and Red Bananas: Choosing for Your Market",
        description:
          "How common Indian banana types differ in taste, size and shelf life for retail and processing.",
      },
    ],
  },
  grapes: {
    image: photo("Grapes.webp"),
    alt: "Bunches of fresh green and black grapes",
    art: "field",
    articles: [
      {
        topic: "Buying Guide",
        title: "Table Grapes from India: Berry Size, Sugar and Colour",
        description:
          "The specification points for export grapes — berry diameter, sweetness, firmness and even bunch colour.",
      },
      {
        topic: "Storage",
        title: "Cold Storage and Packing That Keep Grapes Fresh",
        description:
          "How rapid pre-cooling, punnet packing and steady cold storage protect grapes over long voyages.",
      },
      {
        topic: "Market Guide",
        title: "Seedless Green, Black and Red Grapes: What Buyers Prefer",
        description:
          "How grape varieties line up with different retail markets, and when the Indian export season runs.",
      },
    ],
  },
  pomegranate: {
    image: photo("Pomogranate.webp"),
    alt: "Pomegranates with a split fruit showing red arils",
    art: "field",
    articles: [
      {
        topic: "Buying Guide",
        title: "Pomegranate Export Quality: Aril Colour, Size and Skin",
        description:
          "Deep red arils, soft seeds and blemish-free skin — how buyers grade pomegranates for retail markets.",
      },
      {
        topic: "Storage",
        title: "Why Pomegranates Travel Well, and How to Keep Them Fresh",
        description:
          "Pomegranates store well under cool, humid conditions. The handling that prevents shrivelling and splits.",
      },
      {
        topic: "Applications",
        title: "Pomegranates for Fresh Retail, Arils and Juice",
        description:
          "How fresh fruit, ready-to-eat arils and juice processors each look for different pomegranate qualities.",
      },
    ],
  },
  orange: {
    image: photo("Orange.webp"),
    alt: "Fresh oranges with leaves",
    art: "field",
    articles: [
      {
        topic: "Buying Guide",
        title: "Sourcing Oranges: Juice Content, Peel and Size",
        description:
          "What citrus buyers check — juice percentage, sugar-to-acid balance, peel colour and size grading.",
      },
      {
        topic: "Storage",
        title: "Storing Oranges to Preserve Juiciness and Peel Quality",
        description:
          "The cool storage and ventilated packing that help oranges keep their firmness and fresh peel.",
      },
      {
        topic: "Applications",
        title: "Oranges for the Fruit Bowl, Juice Bars and Processing",
        description:
          "How fresh retail, juicing and processing buyers each specify oranges differently.",
      },
    ],
  },
  chikoo: {
    image: photo("Chikoo.webp"),
    alt: "Ripe chikoo fruits with one cut open",
    art: "field",
    articles: [
      {
        topic: "Buying Guide",
        title: "Chikoo (Sapota) Export Guide: Maturity and Sweetness",
        description:
          "How to judge chikoo at harvest, and why picking at the right maturity matters for flavour on arrival.",
      },
      {
        topic: "Storage",
        title: "Handling Chikoo: A Delicate Fruit That Ripens Fast",
        description:
          "The careful packing and cool storage that slow chikoo ripening and protect its soft skin.",
      },
      {
        topic: "Uses",
        title: "Chikoo in Milkshakes, Desserts and Ice Cream",
        description:
          "Where chikoo's caramel-like sweetness is used, from fresh fruit to pulp for desserts and beverages.",
      },
    ],
  },
  papaya: {
    image: photo("Papaya.webp"),
    alt: "Ripe papaya halves with black seeds",
    art: "field",
    articles: [
      {
        topic: "Buying Guide",
        title: "Papaya Export Guide: Colour Break, Weight and Firmness",
        description:
          "Why papayas are harvested at colour break, and how buyers grade fruit by weight and skin condition.",
      },
      {
        topic: "Storage",
        title: "Shipping Papaya: Temperature, Ripening and Handling",
        description:
          "How steady storage temperatures and protective packing help papayas ripen evenly after arrival.",
      },
      {
        topic: "Applications",
        title: "Papaya for Fresh Retail, Fruit Salads and Pulp",
        description:
          "From whole fruit to fresh-cut cups and pulp, how papaya is used and what each buyer specifies.",
      },
    ],
  },
  guava: {
    image: photo("Guava.webp"),
    alt: "Fresh guavas with a halved fruit",
    art: "field",
    articles: [
      {
        topic: "Buying Guide",
        title: "Guava Sourcing: White vs Pink Flesh, Size and Aroma",
        description:
          "How guava buyers choose between white and pink varieties and grade fruit by size, firmness and fragrance.",
      },
      {
        topic: "Storage",
        title: "Extending Guava Shelf Life with Careful Post-Harvest Care",
        description:
          "Guavas ripen quickly. The cool storage and gentle packing that keep them fresh for market.",
      },
      {
        topic: "Applications",
        title: "Guava in Juices, Jams and Fresh Retail",
        description:
          "Why guava is a favourite for nectars, jellies and snacking, and what processors look for in pulp.",
      },
    ],
  },

  /* --- Spices ----------------------------------------------------------- */
  turmeric: {
    image: photo("turmeric.webp"),
    alt: "Dried turmeric fingers",
    art: "turmeric",
    articles: [
      {
        topic: "Buying Guide",
        title: "Whole Turmeric Fingers: Curcumin, Polish and Moisture",
        description:
          "How buyers assess whole turmeric — curcumin content, polish, finger size and how well it has been dried.",
      },
      {
        topic: "Processing",
        title: "Boiling, Drying and Polishing: How Turmeric Is Cured",
        description:
          "The traditional curing steps that turn fresh rhizomes into hard, golden turmeric fingers ready for export.",
      },
      {
        topic: "Applications",
        title: "Whole Turmeric for Grinding, Extraction and Retail",
        description:
          "Why spice grinders, extract makers and retailers each look for different turmeric qualities.",
      },
    ],
  },
  "red-chilli": {
    image: photo("Red Chilli.webp"),
    alt: "Dried red chillies",
    art: "field",
    articles: [
      {
        topic: "Buying Guide",
        title: "Dried Red Chilli Export Guide: Heat, Colour and Stem",
        description:
          "Pungency, colour value, pod length and stem or stemless — the points to agree when buying dried red chillies.",
      },
      {
        topic: "Market Guide",
        title: "Teja, Byadgi and Guntur: Understanding Indian Chilli Varieties",
        description:
          "How popular Indian chilli varieties differ in heat and colour, and which suits your product.",
      },
      {
        topic: "Storage",
        title: "Storing Dried Chillies to Protect Colour and Prevent Mould",
        description:
          "Why dry, cool and dark storage keeps red chillies bright, and how moisture and light cause fading.",
      },
    ],
  },
  "black-pepper": {
    image: photo("Black Pepper.webp"),
    alt: "Whole black peppercorns",
    art: "field",
    articles: [
      {
        topic: "Buying Guide",
        title: "Black Pepper Quality: Bulk Density, Size and Aroma",
        description:
          "How pepper buyers use bulk density, berry size, moisture and light-berry content to judge quality.",
      },
      {
        topic: "Sourcing",
        title: "Malabar and Tellicherry: Indian Black Pepper Grades Explained",
        description:
          "What the classic Indian pepper names mean, and how berry size sets the grade buyers ask for.",
      },
      {
        topic: "Applications",
        title: "Black Pepper for Grinding, Seasoning Blends and Oleoresin",
        description:
          "How retail, seasoning and extraction buyers each specify black pepper for their process.",
      },
    ],
  },
  "cumin-seeds": {
    image: photo("Cumin Seeds.webp"),
    alt: "Whole cumin seeds",
    art: "field",
    articles: [
      {
        topic: "Buying Guide",
        title: "Cumin Seeds Export Guide: Purity, Colour and Aroma",
        description:
          "How cumin is graded by purity percentage, seed colour, aroma and the level of foreign matter.",
      },
      {
        topic: "Processing",
        title: "Machine Cleaning and Sortex: How Cumin Is Prepared for Export",
        description:
          "The cleaning, sorting and grading steps that take cumin from harvest to a uniform export lot.",
      },
      {
        topic: "Applications",
        title: "Cumin in Spice Blends, Ground Cumin and Food Processing",
        description:
          "Where cumin is used — from curry powders to seasoning blends — and what each buyer specifies.",
      },
    ],
  },
  "coriander-seeds": {
    image: photo("Coriander Seeds.webp"),
    alt: "Whole coriander seeds",
    art: "field",
    articles: [
      {
        topic: "Buying Guide",
        title: "Coriander Seeds: Colour, Split Content and Aroma",
        description:
          "How coriander seeds are graded for export — greenish or golden colour, whole versus split seeds and purity.",
      },
      {
        topic: "Market Guide",
        title: "Eagle, Scooter and Badami: Coriander Grades Explained",
        description:
          "What the common coriander trade names mean and which grade suits grinding or whole-spice retail.",
      },
      {
        topic: "Applications",
        title: "Coriander Seeds in Spice Mixes, Pickling and Brewing",
        description:
          "From garam masala to pickling spice, the many ways coriander seeds are used across food industries.",
      },
    ],
  },
  "green-cardamom": {
    image: photo("Green Cardamom.webp"),
    alt: "Green cardamom pods",
    art: "field",
    articles: [
      {
        topic: "Buying Guide",
        title: "Green Cardamom Grading: Pod Size, Colour and Aroma",
        description:
          "Why cardamom is graded by pod size in millimetres, and how colour, plumpness and aroma set its value.",
      },
      {
        topic: "Storage",
        title: "Protecting Cardamom's Green Colour and Fragrance",
        description:
          "How airtight, light-proof packing and cool storage keep cardamom pods green and aromatic.",
      },
      {
        topic: "Applications",
        title: "Cardamom in Tea, Coffee, Sweets and Bakery",
        description:
          "Where green cardamom is prized — from masala chai and Arabic coffee to desserts and baked goods.",
      },
    ],
  },
  cloves: {
    image: photo("Clove.webp"),
    alt: "Whole dried cloves",
    art: "field",
    articles: [
      {
        topic: "Buying Guide",
        title: "Clove Quality: Head Intact, Colour and Oil Content",
        description:
          "How buyers judge cloves — intact heads, rich brown colour, low stem content and aromatic oil.",
      },
      {
        topic: "Storage",
        title: "Storing Cloves to Keep Their Aromatic Oils",
        description:
          "Why cloves should be kept airtight, cool and dry so their volatile oils and aroma last.",
      },
      {
        topic: "Applications",
        title: "Cloves in Spice Blends, Baking and Oil Extraction",
        description:
          "From biryani masala to festive baking and clove oil, the industries that rely on whole cloves.",
      },
    ],
  },
  cinnamon: {
    image: photo("Cinnamon.webp"),
    alt: "Cinnamon sticks",
    art: "field",
    articles: [
      {
        topic: "Buying Guide",
        title: "Buying Cinnamon: Quills, Thickness and Aroma",
        description:
          "How cinnamon is graded by quill diameter, colour, aroma and how evenly it has been rolled and dried.",
      },
      {
        topic: "Market Guide",
        title: "Cinnamon vs Cassia: Knowing What You Are Sourcing",
        description:
          "How true cinnamon and cassia differ in bark, flavour and use, and why the distinction matters to buyers.",
      },
      {
        topic: "Applications",
        title: "Cinnamon in Bakery, Beverages and Spice Blends",
        description:
          "Where cinnamon sticks and ground cinnamon are used, from pastries and teas to masala blends.",
      },
    ],
  },
  "mustard-seeds": {
    image: photo("Mustard Seeds.webp"),
    alt: "Whole mustard seeds",
    art: "field",
    articles: [
      {
        topic: "Buying Guide",
        title: "Mustard Seeds Export Guide: Black, Brown and Yellow",
        description:
          "How mustard seed colours differ in pungency and use, and how purity and seed size are graded.",
      },
      {
        topic: "Processing",
        title: "Cleaning and Grading Mustard Seeds for Export",
        description:
          "The sorting steps that remove dust, stones and immature seeds to produce a clean, uniform lot.",
      },
      {
        topic: "Applications",
        title: "Mustard Seeds for Tempering, Pickles and Condiments",
        description:
          "From tadka and pickles to prepared mustard, the uses that shape which mustard seed to order.",
      },
    ],
  },
  "fennel-seeds": {
    image: photo("Fennel Seeds.webp"),
    alt: "Green fennel seeds",
    art: "field",
    articles: [
      {
        topic: "Buying Guide",
        title: "Fennel Seeds Quality: Green Colour, Size and Sweetness",
        description:
          "How fennel seeds are graded for export — bright green colour, bold seeds, sweet aroma and purity.",
      },
      {
        topic: "Storage",
        title: "Keeping Fennel Seeds Green and Fragrant in Storage",
        description:
          "Light and heat dull fennel's colour. The packing and storage that preserve its fresh aroma.",
      },
      {
        topic: "Applications",
        title: "Fennel Seeds as Mouth Freshener, in Teas and Baking",
        description:
          "From mukhwas and herbal teas to sausages and breads, the many uses of fennel seeds.",
      },
    ],
  },

  "fenugreek-seeds": {
    image: photo("Fenugreek Seeds.webp"),
    alt: "Golden fenugreek seeds",
    art: "field",
    articles: [
      {
        topic: "Quality",
        title: "Fenugreek Seeds Quality: Colour, Cleanliness and Seed Condition",
        description:
          "How to judge whole fenugreek (methi) seeds for export — even golden colour, clean lots, sound dry seeds and the paperwork to agree.",
      },
      {
        topic: "Applications",
        title: "Fenugreek Seeds in Curry Powders, Pickles and Seasonings",
        description:
          "Where methi seeds earn their place — roasted and ground in masalas, whole in pickles and tempering, and in savoury seasonings.",
      },
      {
        topic: "Storage",
        title: "Storing Fenugreek Seeds: Moisture, Pests and Aroma",
        description:
          "Keeping whole fenugreek seeds dry, pest-free and aromatic in the warehouse and in transit.",
      },
    ],
  },
  "psyllium-seed": {
    image: null,
    alt: "Whole psyllium seed",
    art: "field",
    articles: [
      {
        topic: "Buying Guide",
        title: "Buying Psyllium Seed for Husk Processing: What to Check",
        description:
          "What husk processors look for in whole psyllium (isabgol) seed — even colour, clean lots, low moisture and clear specifications.",
      },
      {
        topic: "Processing",
        title: "From Psyllium Seed to Husk: How Whole Seed Is Processed",
        description:
          "How whole psyllium seed is cleaned, dehusked, sifted and graded into husk and husk powder for food and fibre applications.",
      },
      {
        topic: "Export Guide",
        title: "Exporting Psyllium Seed: Documentation, Packing and Labelling",
        description:
          "Specifications, testing, moisture-safe packing and destination-market labelling rules for psyllium seed shipments.",
      },
    ],
  },

  /* --- Other export products -------------------------------------------- */
  ginger: {
    image: photo("ginger.webp"),
    alt: "Fresh ginger root",
    art: "ginger",
    articles: [
      {
        topic: "Buying Guide",
        title: "Fresh and Dried Ginger: What Importers Should Check",
        description:
          "Rhizome size, skin, fibre and pungency — how ginger is graded for fresh markets and drying.",
      },
      {
        topic: "Storage",
        title: "Storing Ginger to Prevent Sprouting and Shrivelling",
        description:
          "The temperature and humidity that keep fresh ginger firm, and why dried ginger needs dry storage.",
      },
      {
        topic: "Applications",
        title: "Ginger in Teas, Sauces, Bakery and Beverages",
        description:
          "Where fresh and dried ginger are used across food and drink, and what each buyer looks for.",
      },
    ],
  },
  "other-agricultural-products": {
    image: photo("other-agricultural-products.webp"),
    alt: "An assortment of fresh agricultural produce",
    art: "field",
    articles: [
      {
        topic: "Buying Guide",
        title: "Building a Mixed Agricultural Order from India",
        description:
          "How to plan a consolidated order across several fresh products — specifications, packing and timing.",
      },
      {
        topic: "Sourcing",
        title: "Seasonality: Planning Fresh Produce Imports Around Harvests",
        description:
          "Why harvest calendars shape availability and price, and how to plan purchases across the year.",
      },
      {
        topic: "Export Guide",
        title: "Phytosanitary Certificates and Export Documents for Fresh Produce",
        description:
          "The common documents that accompany fresh agricultural shipments and why each one matters at customs.",
      },
    ],
  },
};

export function findProductBlog(slug: string) {
  return productBlogs[slug];
}
