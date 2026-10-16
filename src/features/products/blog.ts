import type { ArtVariant } from "@/components/media/botanical-art";

/** Points that read better as a list, shown after a section's text. */
export type ArticleList = { ordered?: boolean; items: readonly string[] };

/** A hashtag and the page on this site it leads to. */
export type ArticleHashtag = { tag: string; href: string };

/** One question of an article's FAQ, shown in an accordion. */
export type ArticleFaq = { question: string; answer: string };

/**
 * One headed section of an article's text. Sections are H2s; `level: 3`
 * makes one a sub-section (H3) of the section before it. `list` follows the
 * text; `faq` turns the section into an accordion of questions. Text, list
 * items and answers may link to other pages as `[anchor](/path)`.
 */
export type ArticleSection = {
  heading: string;
  text: string;
  level?: 2 | 3;
  list?: ArticleList;
  faq?: readonly ArticleFaq[];
};
export type ArticleBody = readonly ArticleSection[];

export type BlogArticle = {
  /** Short topic label shown above the title, e.g. "Storage". */
  topic: string;
  title: string;
  description: string;
  /**
   * The full article, read on its own page at /blog/<slug>. Articles written
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
  /**
   * A few topic hashtags shown at the end of the article, e.g. "#FreshOnions",
   * each linking to the most relevant existing page on the site.
   */
  hashtags?: readonly ArticleHashtag[];
};

export type ProductBlogEntry = {
  /** Display name, for articles whose product has no page of its own. */
  name?: string;
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
          "How to judge moringa leaf powder before you import: colour, aroma, mesh size, moisture, microbiology and the documents to agree with your supplier.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#MoringaPowder", href: "/products/moringa-powder" }, { tag: "#MoringaUses", href: "/blog/moringa-powder-in-teas-smoothies-and-functional-foods" }, { tag: "#BotanicalPowders", href: "/case-studies/planning-a-botanical-powder-sourcing-brief" }],
        body: [
          {
            heading: "In brief",
            text: "Good moringa leaf powder is bright to deep olive green, smells fresh and grassy, is milled to the mesh your product needs and is kept very dry. Because it is a dried leaf, microbiology and contaminants deserve as much attention as colour, so agree the tests and limits in writing before a first order.",
          },
          {
            heading: "Know what you are buying",
            text: "Moringa powder in the food trade is normally the dried, milled leaflets of Moringa oleifera. Seed, pod and extract products are different ingredients with different uses and, in some markets, a different regulatory status; [drumstick pods](/products/drumstick), for example, come from the same tree but are a different product from leaf powder. Make sure the description and specification say leaf powder, and check the status of the ingredient for your intended use in your destination market before you commit.",
          },
          {
            heading: "Start with colour",
            text: "Good moringa leaf powder is a bright to deep olive green. Compare samples side by side in daylight rather than judging one on its own. A dull, yellowish or brownish tint usually points to:",
            list: {
              items: [
                "Old leaves",
                "Stems milled in with the leaflets",
                "Too much heat during drying, which our article on [why drying matters for moringa](/blog/from-leaf-to-powder-why-drying-matters-for-moringa) explains",
                "Long exposure to light in storage",
              ],
            },
          },
          {
            heading: "Smell and taste a sample",
            text: "Fresh powder smells green and grassy, a little like hay or spinach, with a mildly bitter finish. Musty, smoky or burnt notes are a warning sign: they suggest the leaves were dried too slowly, too hot, or stored damp.",
          },
          {
            heading: "Agree the mesh size for your use",
            text: "Particle size decides how the powder behaves. Capsule fillers and drink mixes generally need a fine, even powder that flows and disperses well; tea blends can take a coarser grind. Specify the mesh range your process needs and ask for it to be written into the specification sheet.",
          },
          {
            heading: "Keep moisture low",
            text: "Moisture is the main enemy of shelf life. A powder that is too moist cakes, loses colour and is more prone to microbial growth. Set a maximum moisture value in your specification and check it on the certificate of analysis for every lot. Our [illustrative case study on packing and storing moringa leaf powder](/case-studies/packing-and-storing-moringa-leaf-powder) shows how packaging helps keep it that way.",
          },
          {
            heading: "Microbiology and contaminants",
            text: "Leaves dried in the open can pick up microorganisms, dust and soil, and moringa powder is usually eaten without further cooking in drinks, capsules and smoothies. Buyers therefore agree the tests and limits their market and customers expect, and ask for the results with each lot. These commonly cover:",
            list: {
              items: [
                "Total plate count",
                "Yeasts and moulds",
                "Pathogens such as Salmonella",
                "Heavy metals",
                "Pesticide residues",
              ],
            },
          },
          {
            heading: "Ask for the paperwork",
            text: "Approve a sample against a written specification sheet first, and ask for the certificate of analysis that belongs to the lot being shipped rather than a generic one. Agree packaging, labelling and lot coding at the same time, so each shipment can be traced back to the sample you approved and its test results. Freshland Exports supplies moringa leaf powder with a minimum order quantity of 500 kg. When you [request a quotation](/contact), share:",
            list: {
              items: [
                "How the powder will be used, such as capsules, drink mixes or tea blends",
                "The mesh range you need",
                "Your maximum moisture value",
                "The microbiological and contaminant tests your market expects",
                "Your packaging, labelling and lot-coding needs",
              ],
            },
          },
          {
            heading: "Conclusion",
            text: "Judge moringa leaf powder by its colour, aroma, mesh and moisture, and treat microbiology and contaminants as seriously as appearance, since the powder is usually eaten uncooked. Put each limit in a written specification and match every lot's certificate of analysis to the sample you approved.",
          },
          {
            heading: "Frequently asked questions",
            text: "Questions buyers ask about moringa powder quality.",
            faq: [
              {
                question: "What colour should good moringa leaf powder be?",
                answer: "A bright to deep olive green. A dull, yellowish or brownish tint usually points to old leaves, stems milled in, too much heat during drying or long exposure to light.",
              },
              {
                question: "What does a musty or burnt smell in moringa powder mean?",
                answer: "It suggests the leaves were dried too slowly, too hot, or stored damp. Fresh powder smells green and grassy, with a mildly bitter finish.",
              },
              {
                question: "Which mesh size do I need?",
                answer: "Capsule fillers and drink mixes generally need a fine, even powder that flows and disperses well, while tea blends can take a coarser grind. Write the range into the specification sheet.",
              },
              {
                question: "Why does microbiology matter so much for moringa powder?",
                answer: "Leaves dried in the open can pick up microorganisms, dust and soil, and the powder is usually eaten without further cooking. Buyers therefore set limits for total plate count, yeasts and moulds and pathogens such as Salmonella.",
              },
              {
                question: "Are moringa seed and pod products the same as leaf powder?",
                answer: "No. They are different ingredients with different uses and, in some markets, a different regulatory status, so make sure the specification says leaf powder.",
              },
            ],
          },
        ],
      },
      {
        topic: "Processing",
        title: "From Leaf to Powder: Why Drying Matters for Moringa",
        description:
          "Why fast handling, leaflet separation and gentle, hygienic drying decide the colour, aroma and microbiological quality of moringa leaf powder.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#MoringaLeaf", href: "/products/moringa-powder" }, { tag: "#BotanicalPowders", href: "/case-studies/planning-a-botanical-powder-sourcing-brief" }, { tag: "#HerbalTeaBlends", href: "/case-studies/botanical-powders-for-herbal-tea-and-beverage-blends" }],
        body: [
          {
            heading: "The process at a glance",
            text: "Each step between the tree and the bag affects the colour, aroma and microbiological quality of moringa leaf powder. The process runs in this order:",
            list: {
              ordered: true,
              items: [
                "Harvest the leaves and move them quickly to processing",
                "Separate the leaflets from the stalks and sort out damaged leaves",
                "Wash and drain the leaflets",
                "Dry them gently under controlled conditions",
                "Mill and sieve to the agreed mesh",
                "Pack, code and test each lot",
              ],
            },
          },
          {
            heading: "Speed after harvest",
            text: "Moringa leaves are mostly water when they are picked and begin to wilt and yellow within hours. Moving them quickly from tree to processing, in clean containers and out of the sun, is the first step in keeping their colour and limiting microbial growth.",
          },
          {
            heading: "Leaflets, not stalks",
            text: "The small leaflets are separated from the woody stalks before drying. Stalks add coarse fibre, dull the colour and change the taste, so removing them gives a smoother, greener powder. Yellowed, diseased or damaged leaves are sorted out at the same stage.",
          },
          {
            heading: "Washing",
            text: "Leaves are washed to remove dust, soil and insects. Clean water matters, because washing can spread contamination as well as remove it, and the leaves must be drained well so that surface water does not slow drying.",
          },
          {
            heading: "Gentle drying protects colour",
            text: "Leaves are dried under controlled conditions, out of strong direct sun and without excessive heat. Harsh drying can brown the leaves and reduce heat-sensitive nutrients such as vitamin C, while drying that is too slow risks spoilage and mould. The aim is crisp, evenly dried leaves that still look green, which is the first thing to check when you [judge moringa powder quality](/blog/how-to-judge-moringa-powder-quality-before-you-import). Drying areas and trays need protecting from dust, birds and insects, since the powder is often eaten without further cooking in products such as [teas, smoothies and functional foods](/blog/moringa-powder-in-teas-smoothies-and-functional-foods).",
          },
          {
            heading: "Milling and sieving",
            text: "The dried leaves are milled into powder and sieved to the agreed mesh for an even texture. Milling generates heat, so it is kept controlled to protect colour and aroma, and the mill is kept clean between lots.",
          },
          {
            heading: "Packing and testing",
            text: "The powder is packed promptly in food-grade liners that keep out moisture and light, and each lot is coded so that its certificate of analysis can be matched to the bags. Our [illustrative case study on packing and storing moringa leaf powder](/case-studies/packing-and-storing-moringa-leaf-powder) follows this stage further. Buyers usually agree in advance which tests are carried out on each lot, such as:",
            list: {
              items: ["Moisture", "Microbiology", "Heavy metals", "Pesticide residues"],
            },
          },
          {
            heading: "Conclusion",
            text: "Moringa leaf powder keeps its green colour and fresh aroma when the leaves are handled quickly, stripped of stalks, washed in clean water and dried gently but thoroughly. Hygienic drying and controlled milling matter as much as speed, since the powder is often eaten uncooked. To agree the mesh, packing and lot tests for your order, [request a quotation](/contact).",
          },
          {
            heading: "Frequently asked questions",
            text: "Questions buyers ask about how moringa powder is made.",
            faq: [
              {
                question: "Why must moringa leaves be processed quickly after harvest?",
                answer: "They are mostly water when picked and begin to wilt and yellow within hours. Fast, clean handling keeps their colour and limits microbial growth.",
              },
              {
                question: "Why are the stalks removed before drying?",
                answer: "Stalks add coarse fibre, dull the colour and change the taste. Removing them gives a smoother, greener powder.",
              },
              {
                question: "Can washing make moringa leaves less clean?",
                answer: "Yes, if the water is not clean, because washing can spread contamination as well as remove it. The leaves also need draining well so surface water does not slow drying.",
              },
              {
                question: "What goes wrong if moringa is dried too hot or too slowly?",
                answer: "Harsh drying can brown the leaves, while drying that is too slow risks spoilage and mould. The aim is crisp, evenly dried leaves that still look green.",
              },
              {
                question: "Why is milling temperature controlled?",
                answer: "Milling generates heat, which can harm the powder's colour and aroma, so it is kept controlled.",
              },
            ],
          },
        ],
      },
      {
        topic: "Applications",
        title: "Moringa Powder in Teas, Smoothies and Functional Foods",
        description:
          "How food and beverage brands use moringa powder in teas, smoothies, bakery and supplements, and what to specify, label and check before sourcing it.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#MoringaSourcing", href: "/products/moringa-powder" }, { tag: "#MoringaPacking", href: "/case-studies/packing-and-storing-moringa-leaf-powder" }, { tag: "#BotanicalPowders", href: "/case-studies/planning-a-botanical-powder-sourcing-brief" }],
        body: [
          {
            heading: "Work with its flavour",
            text: "Moringa is earthy and grassy, so small inclusion levels go a long way. It pairs well with ingredients that round out its slightly bitter finish:",
            list: {
              items: ["Citrus and mint", "Ginger", "Banana and mango", "Cocoa", "Green tea"],
            },
          },
          {
            heading: "Beverages and smoothie mixes",
            text: "In drinks the main challenge is dispersion. A fine, consistent mesh helps, as does blending moringa with other dry ingredients before adding liquid. At home, whisking the powder into a little water to make a paste first prevents lumps. Because these products are not usually cooked, their makers set [microbiological criteria for the powder](/blog/how-to-judge-moringa-powder-quality-before-you-import). Our [illustrative case study on botanical powders for herbal tea and beverage blends](/case-studies/botanical-powders-for-herbal-tea-and-beverage-blends) looks at these needs from a blender's side.",
          },
          {
            heading: "Bakery and snacks",
            text: "Moringa adds a natural green colour to breads, crackers, pasta and snack bites. Heat can darken that colour, so trial bakes help set the right amount and baking conditions, much as [gentle drying protects the colour](/blog/from-leaf-to-powder-why-drying-matters-for-moringa) of the leaf in the first place.",
          },
          {
            heading: "Teas and supplements",
            text: "Herbal tea blends often use a slightly coarser grind alongside lemongrass, mint or ginger. Capsule and tablet makers need a fine, free-flowing powder with tightly specified moisture so it fills and compresses evenly. Supplement products are regulated differently from ordinary foods in many markets, so check the rules that apply to your product format.",
          },
          {
            heading: "Labelling and claims",
            text: "Moringa is sold as a food ingredient, and the claims allowed on packaging vary from market to market. In the European Union, for example, only authorised nutrition and health claims may be used, and many benefits commonly attributed to moringa are not authorised. Check the rules in each market before describing any benefit, and check the regulatory status of moringa leaf for your intended use.",
          },
          {
            heading: "Storage",
            text: "Store the powder sealed in a cool, dry, dark place, since light fades its colour and moisture causes caking. Agree the best-before period and storage conditions on the specification sheet rather than assuming a general figure.",
          },
          {
            heading: "Conclusion",
            text: "Moringa works best in small doses, paired with flavours that soften its bitterness, and in a mesh that suits the product, from fine powder for drinks and capsules to a coarser grind for teas. Check labelling and regulatory status in each market before launch. When you [request a quotation](/contact), tell us the product format so the mesh, moisture and microbiological criteria can be agreed.",
          },
          {
            heading: "Frequently asked questions",
            text: "Common questions from food and beverage brands.",
            faq: [
              {
                question: "Why does my moringa drink taste bitter?",
                answer: "Moringa is naturally slightly bitter, and the effect grows with the dose. Lower the inclusion or pair it with citrus, fruit or mint, and test in the finished drink.",
              },
              {
                question: "Why does the colour fade in baked goods?",
                answer: "Heat and time darken moringa's green. Trial bakes at your own temperatures and times show how much colour survives and help set the dose.",
              },
              {
                question: "How do I stop moringa powder clumping in drinks?",
                answer: "Use a fine, consistent mesh and blend moringa with the other dry ingredients before adding liquid. At home, whisking it into a little water to make a paste first prevents lumps.",
              },
              {
                question: "What grind suits moringa capsules and tea blends?",
                answer: "Capsule and tablet makers need a fine, free-flowing powder with tightly specified moisture, while herbal tea blends often use a slightly coarser grind.",
              },
              {
                question: "Can I make health claims for moringa on my packaging?",
                answer: "Only where the rules of your market allow. In the European Union, only authorised nutrition and health claims may be used, and many benefits commonly attributed to moringa are not authorised.",
              },
            ],
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
          "Form, colour type, mesh size, moisture, pungency and microbiology: the specification points that keep onion powder consistent from batch to batch.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#OnionPowderSpec", href: "/products/onion-powder" }, { tag: "#PaleSauces", href: "/case-studies/white-pepper-and-allium-powders-for-pale-sauces" }, { tag: "#ReadyMealSpices", href: "/case-studies/ground-spices-for-ready-meal-production" }],
      },
      {
        topic: "Storage",
        title: "Keeping Onion Powder Free-Flowing in Storage and Transit",
        description:
          "Onion powder readily absorbs moisture. How barrier packaging, container care and dry warehouse storage keep it free-flowing until it is used.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#OnionPowderSupply", href: "/products/onion-powder" }, { tag: "#FreeFlowingPowders", href: "/case-studies/keeping-dry-mango-powder-free-flowing" }, { tag: "#SnackSeasonings", href: "/case-studies/snack-seasoning-powders-for-savoury-coatings" }],
      },
      {
        topic: "Applications",
        title: "Onion Powder in Seasonings, Sauces and Ready Meals",
        description:
          "Why food processors use onion powder in seasonings, snack coatings, sauces and ready meals, and how to choose the form and label it correctly.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#OnionPowderUses", href: "/products/onion-powder" }, { tag: "#ReadyMealSpices", href: "/case-studies/ground-spices-for-ready-meal-production" }, { tag: "#FreshOnions", href: "/products/onion" }],
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
          "Curcumin, colour value, moisture and adulteration testing: what to specify when sourcing turmeric powder, and which standards and limits apply.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#TurmericPowder", href: "/products/turmeric-powder" }, { tag: "#TurmericColour", href: "/blog/turmeric-powder-in-spice-blends-food-colouring-and-beverages" }, { tag: "#InHouseGrinding", href: "/case-studies/whole-turmeric-for-in-house-grinding" }],
      },
      {
        topic: "Processing",
        title: "How Turmeric Rhizomes Become Fine Golden Powder",
        description:
          "Cleaning, boiling, drying, polishing and grinding: how each step in turmeric processing shapes the colour, aroma and cleanliness of the powder.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#TurmericGrinding", href: "/products/turmeric-powder" }, { tag: "#WholeTurmeric", href: "/products/turmeric" }, { tag: "#CurryPowder", href: "/case-studies/supplying-a-curry-powder-blender" }],
      },
      {
        topic: "Applications",
        title: "Turmeric Powder in Spice Blends, Food Colouring and Beverages",
        description:
          "How turmeric powder is used in curry powders, food colouring and drink mixes, what each buyer specifies, and how turmeric is labelled in key markets.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#TurmericSupply", href: "/products/turmeric-powder" }, { tag: "#TurmericCuring", href: "/blog/how-turmeric-rhizomes-become-fine-golden-powder" }, { tag: "#TurmericFingers", href: "/products/turmeric" }],
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
          "How to buy red chilli powder: choosing chillies for colour and heat, agreeing grind and moisture, and testing for illegal dyes and mycotoxins.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#RedChilliPowder", href: "/products/red-chilli-powder" }, { tag: "#ChilliSauces", href: "/case-studies/specifying-chilli-for-sauces-and-pastes" }, { tag: "#DriedRedChilli", href: "/products/red-chilli" }],
      },
      {
        topic: "Quality",
        title: "Understanding ASTA Colour and SHU in Red Chilli Powder",
        description:
          "What ASTA colour value and Scoville Heat Units measure, which laboratory methods are used, and how to write both into a chilli powder specification.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#ChilliPowder", href: "/products/red-chilli-powder" }, { tag: "#ChilliVarieties", href: "/blog/teja-byadgi-and-guntur-understanding-indian-chilli-varieties" }, { tag: "#SnackSeasonings", href: "/case-studies/snack-seasoning-powders-for-savoury-coatings" }],
        published: "2026-10-09",
      },
      {
        topic: "Storage",
        title: "Storage and Handling Considerations for Bulk Chilli Powder",
        description:
          "Why light, heat and moisture fade and cake chilli powder, why damp storage risks mycotoxins, and practical steps for storing and handling bulk stock.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#ChilliPowderStorage", href: "/products/red-chilli-powder" }, { tag: "#ChilliColourSpec", href: "/case-studies/red-chilli-powder-colour-and-heat-specification" }, { tag: "#IndianChilli", href: "/products/red-chilli" }],
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
          "How to judge ground black pepper by aroma, grind, volatile oil and purity, and which microbiological and contaminant checks buyers commonly agree.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#BlackPepperPowder", href: "/products/black-pepper-powder" }, { tag: "#PepperSeasoning", href: "/blog/black-pepper-powder-in-seasonings-meat-products-and-ready-meals" }, { tag: "#PrivateLabelSpices", href: "/case-studies/private-label-ground-spice-range" }],
      },
      {
        topic: "Processing",
        title: "How Black Peppercorns Are Ground Without Losing Aroma",
        description:
          "Cleaning, microbial reduction, cool milling, sieving and prompt packing: how black peppercorns become ground pepper without losing their aroma.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#PepperPowder", href: "/products/black-pepper-powder" }, { tag: "#BlackPepper", href: "/products/black-pepper" }, { tag: "#MeatSeasoning", href: "/case-studies/black-pepper-for-meat-and-savoury-seasoning" }],
      },
      {
        topic: "Applications",
        title: "Black Pepper Powder in Seasonings, Meat Products and Ready Meals",
        description:
          "How ground black pepper is used in seasonings, meat products, ready meals and snacks, and what each type of buyer specifies for grind and safety.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#BlackPepperPowder", href: "/products/black-pepper-powder" }, { tag: "#PepperGrinding", href: "/blog/how-black-peppercorns-are-ground-without-losing-aroma" }, { tag: "#SnackSeasonings", href: "/case-studies/snack-seasoning-powders-for-savoury-coatings" }],
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
          "Exporting coriander powder: the specification, destination testing, packing, documents and labelling to agree before shipment, and the order minimum.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#CorianderPowder", href: "/products/coriander-seeds-powder" }, { tag: "#CorianderBlends", href: "/blog/ground-coriander-in-curry-powders-masalas-and-bakery" }, { tag: "#ReadyMealSpices", href: "/case-studies/ground-spices-for-ready-meal-production" }],
      },
      {
        topic: "Sourcing",
        title: "Sourcing Coriander Powder: From Whole Seed to Ground Spice",
        description:
          "How seed selection, cleaning, careful grinding and grinding close to dispatch shape the colour, aroma and cleanliness of the coriander powder you buy.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#CorianderSeeds", href: "/products/coriander-seeds" }, { tag: "#CorianderPowder", href: "/products/coriander-seeds-powder" }, { tag: "#PrivateLabelSpices", href: "/case-studies/private-label-ground-spice-range" }],
      },
      {
        topic: "Uses",
        title: "Ground Coriander in Curry Powders, Masalas and Bakery",
        description:
          "Why coriander powder forms the base of so many spice blends, and how food makers use it in curry powders, masalas, ready meals, pickles and baked goods.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#GroundCoriander", href: "/products/coriander-seeds-powder" }, { tag: "#CorianderExport", href: "/blog/coriander-seeds-powder-export-guide-colour-aroma-and-packing" }, { tag: "#CurryPowder", href: "/case-studies/supplying-a-curry-powder-blender" }],
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
          "What colour, aroma, texture and moisture tell you about a garlic powder sample, and the specification and microbiology points to agree before ordering.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#GarlicPowderSpec", href: "/products/garlic-powder" }, { tag: "#GarlicUses", href: "/blog/garlic-powder-in-seasonings-snack-coatings-and-ready-meals" }, { tag: "#PaleSauces", href: "/case-studies/white-pepper-and-allium-powders-for-pale-sauces" }],
      },
      {
        topic: "Storage",
        title: "Stopping Garlic Powder from Caking in Storage and Transit",
        description:
          "Why dehydrated garlic draws in moisture, and how packing, container care and warehouse handling keep the powder dry, aromatic and free-flowing.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#GarlicPowderSupply", href: "/products/garlic-powder" }, { tag: "#FreeFlowingPowders", href: "/case-studies/keeping-dry-mango-powder-free-flowing" }, { tag: "#FreshGarlic", href: "/products/garlic" }],
      },
      {
        topic: "Food Processing",
        title: "Garlic Powder in Seasonings, Snack Coatings and Ready Meals",
        description:
          "How seasoning makers, snack producers and ready-meal manufacturers use garlic powder in place of fresh garlic, and how to label it correctly.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#GarlicPowderUses", href: "/products/garlic-powder" }, { tag: "#PaleSauces", href: "/case-studies/white-pepper-and-allium-powders-for-pale-sauces" }, { tag: "#GarlicCaking", href: "/blog/stopping-garlic-powder-from-caking-in-storage-and-transit" }],
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
          "How to judge amchur by its sourness, acidity, colour, dryness and cleanliness, whether it contains salt, and what to agree with your supplier.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#DryMangoPowder", href: "/products/dry-mango-powder" }, { tag: "#ChaatMasala", href: "/case-studies/amchur-for-tangy-seasoning-and-chaat-blends" }, { tag: "#AmchurUses", href: "/blog/dry-mango-powder-amchur-in-chaat-masala-chutneys-and-snacks" }],
      },
      {
        topic: "Processing",
        title: "From Green Mango to Amchur: How Dry Mango Powder Is Made",
        description:
          "From unripe green mangoes to a fine, tangy powder: how peeling, slicing, drying, sorting, grinding and packing shape the colour and sourness of amchur.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#Amchur", href: "/products/dry-mango-powder" }, { tag: "#ChaatMasala", href: "/case-studies/amchur-for-tangy-seasoning-and-chaat-blends" }, { tag: "#PicklingSpice", href: "/case-studies/whole-spices-for-pickle-manufacturing" }],
      },
      {
        topic: "Applications",
        title: "Dry Mango Powder (Amchur) in Chaat Masala, Chutneys and Snacks",
        description:
          "Why amchur is the dry souring agent of choice for chaat masala, snack seasonings, chutneys, curries and ready meals, and what blenders specify.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#AmchurSupply", href: "/products/dry-mango-powder" }, { tag: "#FreeFlowingPowders", href: "/case-studies/keeping-dry-mango-powder-free-flowing" }, { tag: "#FreshMangoes", href: "/products/mango" }],
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
          "There is no single garam masala recipe. How to share a reference, approve samples, check ingredient quality and keep a blend consistent lot to lot.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#GaramMasala", href: "/products/garam-masala" }, { tag: "#MasalaUses", href: "/blog/how-food-makers-use-garam-masala-in-curries-rice-and-marinades" }, { tag: "#ReadyMealSpices", href: "/case-studies/ground-spices-for-ready-meal-production" }],
      },
      {
        topic: "Export Guide",
        title: "Importing Garam Masala in Bulk: Specifications, Packing and Labelling",
        description:
          "The specification, contaminant testing, packing, labelling and documents to agree before importing garam masala, a ground spice blend, in bulk.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#GaramMasalaSupply", href: "/products/garam-masala" }, { tag: "#HouseGaramMasala", href: "/case-studies/matching-a-house-garam-masala-recipe" }, { tag: "#MasalaUses", href: "/blog/how-food-makers-use-garam-masala-in-curries-rice-and-marinades" }],
      },
      {
        topic: "Uses",
        title: "How Food Makers Use Garam Masala in Curries, Rice and Marinades",
        description:
          "Garam masala in curries, gravies, biryani, marinades and snacks, and why manufacturers, food service and spice brands rely on a ready blend.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#GaramMasalaUses", href: "/products/garam-masala" }, { tag: "#HouseGaramMasala", href: "/case-studies/matching-a-house-garam-masala-recipe" }, { tag: "#CurryPowder", href: "/case-studies/supplying-a-curry-powder-blender" }],
      },
    ],
  },
  "white-pepper-powder": {
    image: photo("White Pepper powder/white-pepper-powder-hero.webp"),
    alt: "A mound of off-white ground white pepper in a speckled ceramic bowl on a wooden board, with whole white peppercorns scattered on linen",
    art: "powder",
    articles: [
      {
        topic: "Quality",
        title: "White Pepper Powder Quality: Colour, Aroma and Fineness",
        description:
          "What white pepper is, and how to judge the powder by colour, clean aroma, fineness and heat, including the off-odour defect buyers should reject.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#WhitePepper", href: "/products/white-pepper-powder" }, { tag: "#PaleSauces", href: "/case-studies/white-pepper-and-allium-powders-for-pale-sauces" }, { tag: "#PrivateLabelSpices", href: "/case-studies/private-label-ground-spice-range" }],
      },
      {
        topic: "Applications",
        title: "Using White Pepper Powder in Sauces, Soups and Seasonings",
        description:
          "Why sauce makers, food processors and seasoning blenders choose white pepper for pale products, and how it is used across kitchens and factories.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#WhitePepperPowder", href: "/products/white-pepper-powder" }, { tag: "#BlackPepperPowder", href: "/products/black-pepper-powder" }, { tag: "#ImportingWhitePepper", href: "/blog/importing-white-pepper-powder-specifications-and-packing" }],
      },
      {
        topic: "Export Guide",
        title: "Importing White Pepper Powder: Specifications and Packing",
        description:
          "The specification, sampling, destination testing, moisture-safe packing and order planning to settle before importing ground white pepper powder in bulk.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#WhitePepperSupply", href: "/products/white-pepper-powder" }, { tag: "#PaleSauces", href: "/case-studies/white-pepper-and-allium-powders-for-pale-sauces" }, { tag: "#WholeOrGroundPepper", href: "/case-studies/choosing-whole-or-ground-pepper" }],
      },
    ],
  },
  "nutmeg-powder": {
    image: "/images/Blog/nutmeg-powder/nutmeg-powder-hero.webp",
    alt: "Nutmeg powder with whole nutmeg seeds",
    art: "powder",
    articles: [
      {
        topic: "Buying Guide",
        title: "Buying Nutmeg Powder: What to Check in a Sample",
        description:
          "How to judge ground nutmeg by aroma, colour, fineness and moisture, and why aflatoxin testing matters when you buy nutmeg powder in bulk for production.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#NutmegPowder", href: "/products/nutmeg-powder" }, { tag: "#DairySauces", href: "/case-studies/nutmeg-and-white-pepper-for-dairy-and-savoury-sauces" }, { tag: "#PrivateLabelSpices", href: "/case-studies/private-label-ground-spice-range" }],
      },
      {
        topic: "Food Processing",
        title: "Nutmeg Powder in Bakery, Dairy and Beverage Production",
        description:
          "How manufacturers use ground nutmeg in baked goods, desserts, drinks, spice blends and savoury foods, and why lot-to-lot consistency matters.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#NutmegUses", href: "/products/nutmeg-powder" }, { tag: "#NutmegStorage", href: "/blog/storing-nutmeg-powder-to-protect-its-aroma" }, { tag: "#GaramMasala", href: "/products/garam-masala" }],
      },
      {
        topic: "Storage",
        title: "Storing Nutmeg Powder to Protect Its Aroma",
        description:
          "Ground nutmeg loses its warm aroma to air, heat, light and damp. Practical packing, storage, stock rotation and shelf-life steps for bulk buyers of nutmeg.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#NutmegSupply", href: "/products/nutmeg-powder" }, { tag: "#BakerySpices", href: "/case-studies/warm-spice-powders-for-bakery-and-confectionery" }, { tag: "#NutmegInBakery", href: "/blog/nutmeg-powder-in-bakery-dairy-and-beverage-production" }],
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
          "How to judge sonth by colour, aroma, heat and fibre, choose bleached or unbleached ginger, and agree moisture, volatile oil and contaminant tests.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#SonthPowder", href: "/products/dry-ginger-powder" }, { tag: "#SpicedTea", href: "/case-studies/spiced-tea-masala-ingredients" }, { tag: "#BakerySpices", href: "/case-studies/warm-spice-powders-for-bakery-and-confectionery" }],
      },
      {
        topic: "Processing",
        title: "From Rhizome to Sonth: How Dry Ginger Powder Is Made",
        description:
          "Harvest maturity, peeling, drying, optional bleaching, grinding and sieving: the steps that decide the colour and warmth of dry ginger powder.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#DryGingerSupply", href: "/products/dry-ginger-powder" }, { tag: "#SpicedTea", href: "/case-studies/spiced-tea-masala-ingredients" }, { tag: "#GingerExport", href: "/blog/exporting-dry-ginger-powder-packaging-labelling-and-shipping" }],
      },
      {
        topic: "Export Guide",
        title: "Exporting Dry Ginger Powder: Packaging, Labelling and Shipping",
        description:
          "Moisture-resistant packing, destination testing, labelling, shipping documents and transit care to agree before exporting dry ginger powder (sonth) in bulk.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#DryGingerExport", href: "/products/dry-ginger-powder" }, { tag: "#HerbalTeaBlends", href: "/case-studies/botanical-powders-for-herbal-tea-and-beverage-blends" }, { tag: "#DryGinger", href: "/blog/from-rhizome-to-sonth-how-dry-ginger-powder-is-made" }],
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
          "Ground cloves hide what whole buds show. How to assess clove powder by aroma, colour, texture and purity, and which tests and standards apply.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#ClovePowder", href: "/products/clove-powder" }, { tag: "#CloveUses", href: "/blog/cloves-in-spice-blends-baking-and-oil-extraction" }, { tag: "#BakerySpices", href: "/case-studies/warm-spice-powders-for-bakery-and-confectionery" }],
      },
      {
        topic: "Storage",
        title: "Why Clove Powder Loses Aroma Faster Than Whole Cloves",
        description:
          "Grinding exposes the aromatic oils in cloves. The sealed packing, cool storage and stock rotation that keep clove powder at full strength until it is used.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#ClovePowderStorage", href: "/products/clove-powder" }, { tag: "#WholeOrGroundCloves", href: "/case-studies/whole-cloves-or-clove-powder" }, { tag: "#NutmegStorage", href: "/blog/storing-nutmeg-powder-to-protect-its-aroma" }],
      },
      {
        topic: "Food Processing",
        title: "Using Clove Powder in Meat, Sauce and Bakery Production",
        description:
          "How food manufacturers dose ground cloves in sausages, marinades, ketchups and spiced bakes without overpowering them, and keep flavour consistent lot to lot.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#ClovePowderUses", href: "/products/clove-powder" }, { tag: "#WholeOrGroundCloves", href: "/case-studies/whole-cloves-or-clove-powder" }, { tag: "#SpicedTea", href: "/case-studies/spiced-tea-masala-ingredients" }],
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
          "What importers check when buying fresh onions in bulk from India: bulb quality, size grading, curing, packing, export policy, documents and order planning.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#FreshOnions", href: "/products/onion" }, { tag: "#OnionBuyingGuide", href: "/blog?category=product-guides" }, { tag: "#OnionPowder", href: "/products/onion-powder" }],
        body: [
          {
            heading: "In brief",
            text: "A good export onion is firm, well cured, with dry papery skins and a tight, dry neck. Agree the onion type, size range, packing and documents in writing, check India's export policy at the time of contracting, and plan ventilation for the journey, because onions are living bulbs that respond to temperature and humidity in transit.",
          },
          {
            heading: "What good quality looks like",
            text: "A sound fresh onion is firm to the touch, with dry, papery outer skins that cover the bulb well and a neck that is dry and tightly closed. Cut a few bulbs: the inner scales should be firm and free from rot or discoloured rings. These defects all shorten the life of a shipment, so they are the first things to look for in a sample:",
            list: {
              items: [
                "Soft spots",
                "Sprouting",
                "Mould",
                "Wet or slipping skins",
                "Cuts or bruises",
              ],
            },
          },
          {
            heading: "Grading and bulb size",
            text: "Onions are sorted by bulb diameter so that each bag holds bulbs of a similar size. Retail packs, wholesale markets and processors often want different sizes, so state the size range you need in your enquiry and confirm it against a sample. Even grading makes onions easier to sell and to process, and avoids disputes on arrival.",
          },
          {
            heading: "Curing before packing",
            text: "Onions travel best when they have been properly cured: dried after harvest until the neck is tight and the outer skins are dry and rustle when handled. Bulbs packed damp or with green, open necks are far more likely to rot or sprout on the way. Ask how the onions were dried and how long before dispatch they were graded and packed. Our article on [ventilation and curing for onions](/blog/ventilation-and-curing-keeping-onions-sound-in-transit) explains the process and the storage conditions in more detail.",
          },
          {
            heading: "Packaging that lets onions breathe",
            text: "Fresh onions need air moving around them. Breathable bags such as mesh or jute are generally preferred to sealed plastic, which traps moisture. Agree the bag type and net weight, the marking and any labelling your market requires before the order is packed, and plan the container so that air can circulate through the load. Our [illustrative case study on shipping onions, garlic and elephant yam](/case-studies/shipping-onions-garlic-and-elephant-yam) walks through a typical load plan.",
          },
          {
            heading: "Check India's export policy",
            text: "Onion is one of the few vegetables whose export India has regulated actively in recent years. Policy can change at short notice when domestic supply is tight, so confirm the current position with your supplier, and against India's Directorate General of Foreign Trade, before you commit to a programme. Our guide to [planning fresh produce imports around harvests](/blog/seasonality-planning-fresh-produce-imports-around-harvests) covers how seasons and policy shape availability. Between 2023 and 2025 the government:",
            list: {
              items: [
                "Applied an export duty and a minimum export price.",
                "Prohibited onion exports from December 2023 to May 2024.",
                "Withdrew the remaining 20 per cent export duty with effect from 1 April 2025 (Press Information Bureau, Government of India, 22 March 2025).",
              ],
            },
          },
          {
            heading: "Documents and destination checks",
            text: "Fresh onions are a plant product, so most importing countries require a [phytosanitary certificate](/blog/phytosanitary-certificates-and-export-documents-for-fresh-produce) issued by India's national plant protection organisation. The European Union, for example, requires one for fresh vegetables from all non-EU countries under Regulation (EU) 2019/2072, Annex XI, and EU rules require the country of origin to be shown. For the United States, check the commodity's entry conditions in the USDA APHIS Agricultural Commodity Import Requirements (ACIR) database. Agree the full document list as part of the order.",
          },
          {
            heading: "Order quantity and planning",
            text: "Freshland Exports supplies fresh onions with a minimum order quantity of 500 kg to 1 MT. Share your onion type, size range, packing, destination and delivery schedule early when you [request a quotation](/contact), so that availability can be confirmed for the season and shipments stay consistent.",
          },
          {
            heading: "Conclusion",
            text: "Buying fresh onions for export comes down to sound, well-cured bulbs, even grading, breathable packing and the right documents, with a close eye on India's export policy at the time of contracting. Agree the onion type, size range, packing and delivery schedule in writing, and share them early so availability can be confirmed for the season.",
          },
          {
            heading: "Frequently asked questions",
            text: "Questions importers often ask about fresh onion supply.",
            faq: [
              {
                question: "Why do onions sprout or rot in transit?",
                answer: "Sprouting is driven mainly by temperature once the bulbs' natural rest period ends, while rot and rooting are encouraged by high humidity and condensation. Well-cured bulbs, good ventilation and steady conditions reduce both.",
              },
              {
                question: "Which onion type should I order?",
                answer: "The one your customers expect. Our guide to [red, pink and white onions](/blog/red-pink-and-white-onions-choosing-the-right-type) compares the types and their uses.",
              },
              {
                question: "What should importers check in an onion sample?",
                answer: "Look for firm bulbs with dry, papery outer skins and a dry, tightly closed neck. Reject soft spots, sprouting, mould, wet or slipping skins, and cuts or bruises, and cut a few bulbs to check that the inner scales are firm and free from rot.",
              },
              {
                question: "Is onion export from India restricted?",
                answer: "India regulated onion exports actively between 2023 and 2025, including a prohibition from December 2023 to May 2024, and withdrew the remaining 20 per cent export duty from 1 April 2025. Policy can change at short notice, so confirm the current position before committing to a programme.",
              },
              {
                question: "Is there an international quality standard for onions?",
                answer: "Yes. UNECE Standard FFV-25 covers the marketing and commercial quality control of onions, and it can serve as a reference when drafting your own specification.",
              },
            ],
          },
        ],
      },
      {
        topic: "Storage",
        title: "Ventilation and Curing: Keeping Onions Sound in Transit",
        description:
          "How curing, temperature, humidity and ventilation keep onions firm in storage and transit, with general reference storage conditions from the USDA.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#BulbStorage", href: "/blog/how-to-store-fresh-garlic-prevent-sprouting-and-maintain-quality" }, { tag: "#FreshOnions", href: "/products/onion" }, { tag: "#StoredCrops", href: "/blog/seasonality-planning-fresh-produce-imports-around-harvests" }],
        body: [
          {
            heading: "Why curing matters",
            text: "After harvest, onions are cured: left to dry, usually in the field and then under cover or with forced air, until the neck closes tightly and the outer scales are dry and rustle. Curing usually involves field drying for about two weeks, followed where needed by forced-air curing at around 25 to 27 °C, with a weight loss of a few per cent (USDA Agriculture Handbook 66, 2016). The dry outer layer protects the bulb, slows water loss and helps keep out rot. Onions packed before they are properly cured are far more likely to spoil.",
          },
          {
            heading: "What makes onions sprout and root",
            text: "Freshly cured onions go through a natural rest period of several weeks after harvest. Once it ends, warmth is the main trigger for sprouting, while high humidity encourages roots to grow from the base and mould to develop on the skins. Moisture is therefore the main cause of rot and rooting rather than of sprouting itself. Good storage controls both: steady temperatures, and air that is dry enough to keep skins papery.",
          },
          {
            heading: "General reference storage conditions",
            text: "For long-term storage of well-cured bulbs in commercial cold storage, general reference figures are: Shipments and warehouses often run at other temperatures, so agree the conditions for each route rather than relying on a single figure.",
            list: {
              items: [
                "Pungent dry onions: about 0 °C with 65 to 75 per cent relative humidity, under which they can keep for six to nine months.",
                "Mild or sweet onions: one to three months, which is one reason [onion type](/blog/red-pink-and-white-onions-choosing-the-right-type) matters when planning a long journey.",
                "Onions are not chilling sensitive but can freeze at around −0.8 °C.",
              ],
            },
          },
          {
            heading: "Air, not condensation",
            text: "In storage and in transit, onions need air moving around and through the stack. Breathable bags, stacking with air channels and ventilated containers carry away the heat and moisture the bulbs give off. The biggest risk is condensation: onions moved from cold storage into warm, humid air will sweat, so avoid sudden temperature swings and do not seal warm onions in plastic. Our [illustrative case study on shipping onions, garlic and elephant yam](/case-studies/shipping-onions-garlic-and-elephant-yam) shows how ventilation is planned for a load.",
          },
          {
            heading: "Ethylene and mixed loads",
            text: "Onions produce very little ethylene and have low sensitivity to it, although very high concentrations can encourage sprouting. Their strong odour can transfer to other produce, so they are best kept apart from fruits and from products that absorb smells. If onions are to share a container, our guide to [building a mixed agricultural order](/blog/building-a-mixed-agricultural-order-from-india) explains which products can travel together.",
          },
          {
            heading: "On arrival",
            text: "Unload promptly, keep bags off wet floors and out of direct sun, and sell or process the lots that show early sprouting first. Before the stock goes into storage or onto the market, check bulbs from several positions in the load, using the quality points in our [fresh onion export guide](/blog/fresh-onion-export-guide-quality-grading-storage-and-buyer-requirements), for:",
            list: {
              items: [
                "Firmness",
                "Skin condition",
                "Sprouting",
                "Roots",
                "Soft necks",
              ],
            },
          },
          {
            heading: "Conclusion",
            text: "Onions stay sound in transit when they are properly cured, held at steady temperatures and kept in moving, dry air, with condensation avoided at every handover. Agree the storage and transit conditions for your route with your supplier, and check bulbs on arrival before they go into store.",
          },
          {
            heading: "Frequently asked questions",
            text: "Questions buyers ask about storing onions.",
            faq: [
              {
                question: "How cold should onions be stored long term?",
                answer: "Pungent dry onions are generally stored long term at about 0 °C with 65 to 75 per cent relative humidity, provided the bulbs are well cured. Treat this as general guidance for well-cured bulbs, and agree the conditions for your own route.",
              },
              {
                question: "Can onions share space with other produce?",
                answer: "Onions produce little ethylene, but their strong odour can transfer to other produce, so they are best kept apart from fruits and from products that absorb smells.",
              },
              {
                question: "What is onion curing?",
                answer: "Curing dries the bulbs after harvest until the neck closes tightly and the outer scales are dry and rustle. Field drying usually takes about two weeks, followed where needed by forced-air curing at around 25 to 27 °C.",
              },
              {
                question: "Why do onions sprout in storage?",
                answer: "Freshly cured onions have a natural rest period of several weeks. Once it ends, warmth is the main trigger for sprouting, while high humidity encourages roots and mould.",
              },
              {
                question: "Can onions be damaged by cold?",
                answer: "Onions are not chilling sensitive, but they can freeze at around −0.8 °C.",
              },
            ],
          },
        ],
      },
      {
        topic: "Buying Guide",
        title: "Red, Pink and White Onions: Choosing the Right Type",
        description:
          "How red, pink and white onions differ in colour, flavour and use, and what to agree with your supplier on type, season and size before you order.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#RedOnions", href: "/products/onion" }, { tag: "#OnionPowder", href: "/blog/onion-powder-in-seasonings-sauces-and-ready-meals" }, { tag: "#OnionProcessing", href: "/case-studies/onion-garlic-and-chilli-for-paste-manufacturers" }],
        body: [
          {
            heading: "Why type matters",
            text: "Onion type affects how a product looks on the shelf, how it tastes in a dish and how it behaves in processing. Markets have strong preferences, and a type that sells well in one country can be unfamiliar in another, so the type is usually the first line on an onion specification.",
          },
          {
            heading: "Red onions",
            text: "Red onions have deep red to purple skins and flesh with red-tinged rings. They are widely used in cooking and in fresh preparations such as salads, salsas and toppings, where their colour stands out. Within red onions there is a wide range of shade, size and pungency, so confirm the variety or source against a sample.",
          },
          {
            heading: "Pink onions",
            text: "Pink onions have lighter, pinkish skins and are popular in many markets for everyday cooking. Their flavour ranges from mild to pungent depending on variety. Buyers serving South Asian communities often look for this type.",
          },
          {
            heading: "White onions",
            text: "White onions have white skins and flesh. They are used in cooking and food processing, and are preferred in some markets for their clean appearance in pale dishes. [Dehydrated onion products](/blog/onion-powder-for-food-manufacturing-what-to-specify) are made from white, cream, pink and red onions (see FSSAI Food Products Standards, section 2.9.28, Dehydrated Onion), so processors buying fresh onions for drying usually specify the type that matches the colour of their finished product.",
          },
          {
            heading: "Season and storability",
            text: "India harvests onions in more than one season (see our guide to [planning imports around harvests](/blog/seasonality-planning-fresh-produce-imports-around-harvests)), and the rabi crop harvested in spring accounts for about 70 to 75 per cent of production (Press Information Bureau, Government of India, 2025). Storability differs by variety and by how well bulbs were cured, and mild onions generally keep for a shorter time than pungent ones. Ask your supplier which crop and type will be available for your shipment window and how long the bulbs have been in store; our article on [curing and storing onions](/blog/ventilation-and-curing-keeping-onions-sound-in-transit) explains why that matters.",
          },
          {
            heading: "Matching type to buyer",
            text: "Confirm availability of each type at the time of your enquiry, since it depends on the season. If you buy onion for drying or seasoning, our [Onion Powder page](/products/onion-powder) covers the dehydrated product. Each kind of buyer weighs onion type differently:",
            list: {
              items: [
                "Retailers usually specify type, size and appearance.",
                "Food service often cares most about size and yield.",
                "Processors care about type, dry matter and colour.",
              ],
            },
          },
          {
            heading: "Conclusion",
            text: "Red, pink and white onions differ mainly in colour, appearance and the markets that expect them, while pungency depends more on variety and growing conditions. Start from what your customers buy, confirm which crop and type are available for your shipment window, and taste a sample of the lot you intend to order.",
          },
          {
            heading: "Frequently asked questions",
            text: "Short answers to common questions.",
            faq: [
              {
                question: "Are red onions stronger than white onions?",
                answer: "Not as a rule. Pungency depends on variety and growing conditions more than on skin colour, so taste a sample of the lot you intend to buy.",
              },
              {
                question: "Can one shipment carry more than one type?",
                answer: "Often, if the types are packed and marked separately. Agree the split and the marking on the order so each type can be identified on arrival; our [fresh onion export guide](/blog/fresh-onion-export-guide-quality-grading-storage-and-buyer-requirements) covers packing and documents.",
              },
              {
                question: "Which onion type suits salads and toppings?",
                answer: "Red onions are widely used in fresh preparations such as salads, salsas and toppings, where their colour stands out.",
              },
              {
                question: "Which onions are used for dehydrated products?",
                answer: "Dehydrated onion products are made from white, cream, pink and red onions, so processors usually specify the type that matches the colour of their finished product.",
              },
              {
                question: "When is India's main onion harvest?",
                answer: "India harvests onions in more than one season. The rabi crop, harvested in spring, accounts for about 70 to 75 per cent of production.",
              },
            ],
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
          "What commercial buyers check when sourcing fresh garlic: bulb quality, curing, size grading, forms, packing, documents and planning bulk export orders.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#FreshGarlic", href: "/products/garlic" }, { tag: "#GarlicPowder", href: "/products/garlic-powder" }, { tag: "#GarlicShipping", href: "/case-studies/shipping-onions-garlic-and-elephant-yam" }],
        body: [
          {
            heading: "In brief",
            text: "Good fresh garlic is well cured, heavy for its size, with tight cloves under dry, intact skins and no sprouts or mould. Agree the bulb size range, form, packing and documents in writing, approve a sample, and plan storage around [garlic's unusual temperature behaviour](/blog/how-to-store-fresh-garlic-prevent-sprouting-and-maintain-quality).",
          },
          {
            heading: "Judging fresh garlic quality",
            text: "Good fresh garlic has bulbs that feel heavy for their size, with cloves packed tightly under dry, papery outer skins. Break a few bulbs: cloves should be firm, plump and clean. These signs all point to stock that will not hold up through distribution:",
            list: {
              items: [
                "Bulbs that feel light or hollow",
                "Cloves that give under gentle pressure",
                "Green shoots at the tip",
                "Dark and mouldy patches",
              ],
            },
          },
          {
            heading: "Curing and skin condition",
            text: "Garlic is cured after harvest, dried until the necks and outer skins are dry; curing is essential before storage. Well-cured bulbs have a clean, unbroken outer skin, white to off-white depending on variety, and they store and peel better. Loose or damp skins, bruising or soft cloves are points to raise before an order is packed.",
          },
          {
            heading: "Size and grading",
            text: "Garlic is graded by bulb diameter so that each consignment is consistent. Retail buyers often want even, presentable bulbs, while processors may focus more on clove size and yield than on appearance. State the bulb size range you need in your enquiry, and confirm it against a sample before a full order.",
          },
          {
            heading: "Whole bulbs or peeled cloves",
            text: "Whole bulbs suit fresh markets, retail and food service, and store far longer. Peeled cloves, available on request, save labour for kitchens and processors, but once the protective skin is removed they become a perishable, chilled product with a short life; our article on [fresh garlic for food processing](/blog/fresh-garlic-for-food-processing-applications-forms-and-handling) compares the two forms. Decide which form fits your operation before you ask for a quotation.",
          },
          {
            heading: "Packaging",
            text: "Packaging is agreed according to buyer requirements. Common options include mesh bags and cartons, with custom packing on request. Breathable packing helps bulbs stay dry; confirm the bag or carton size, net weight, marking and any labelling your market needs.",
          },
          {
            heading: "Documents and destination checks",
            text: "Fresh garlic is a plant product, so a [phytosanitary certificate](/blog/phytosanitary-certificates-and-export-documents-for-fresh-produce) is normally required; the European Union, for example, requires one for fresh vegetables from all non-EU countries under Regulation (EU) 2019/2072, Annex XI. For the United States, check entry conditions in the USDA APHIS ACIR database. Agree the documents and any residue testing your customers expect as part of the order.",
          },
          {
            heading: "Order quantity",
            text: "Freshland Exports supplies fresh garlic with a minimum order quantity of 500 kg to 1 MT. When you [request a quotation](/contact), share your quantity, bulb size, form and packaging together, and your expected volumes early, as availability depends on the season.",
          },
          {
            heading: "Conclusion",
            text: "Good fresh garlic is well cured and heavy for its size, with tight cloves under dry, intact skins and no sprouting or mould. Decide between whole bulbs and peeled cloves, agree the bulb size, packing and documents in writing, and approve a sample before placing a bulk order.",
          },
          {
            heading: "Frequently asked questions",
            text: "Questions buyers ask about fresh garlic.",
            faq: [
              {
                question: "Should I buy whole bulbs or peeled cloves?",
                answer: "Whole bulbs store far longer and suit fresh markets, retail and food service. Peeled cloves save labour for kitchens and processors, but they are a perishable, chilled product with a short life.",
              },
              {
                question: "What documents does a fresh garlic shipment need?",
                answer: "A phytosanitary certificate is normally required, because garlic is a plant product. Agree the full document list, and any residue testing your customers expect, as part of the order.",
              },
              {
                question: "How can I judge garlic quality in a sample?",
                answer: "Good bulbs feel heavy for their size, with cloves packed tightly under dry, papery skins. Bulbs that feel light or hollow, soft cloves, green shoots or mouldy patches point to stock that will not hold up.",
              },
              {
                question: "Why does curing matter for garlic?",
                answer: "Curing is essential before storage. Well-cured bulbs have a clean, unbroken outer skin and store and peel better.",
              },
              {
                question: "Are there international standards for garlic?",
                answer: "Yes. Codex Alimentarius CXS 337-2020, the Standard for Fresh Garlic, and UNECE Standard FFV-18 both set out quality requirements that can be used as references for a specification.",
              },
            ],
          },
        ],
      },
      {
        topic: "Storage",
        title: "How to Store Fresh Garlic: Prevent Sprouting and Maintain Quality",
        description:
          "Why cool-but-not-cold storage makes garlic sprout, the USDA's reference conditions for long-term and ambient storage, and how to stop mould and rooting.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#BulbStorage", href: "/blog/ventilation-and-curing-keeping-onions-sound-in-transit" }, { tag: "#FreshGarlic", href: "/products/garlic" }, { tag: "#GarlicPowder", href: "/blog/stopping-garlic-powder-from-caking-in-storage-and-transit" }],
        body: [
          {
            heading: "The temperature trap",
            text: "Garlic behaves differently from most vegetables. Garlic sprouts fastest at intermediate temperatures of about 5 to 18 °C (USDA Agriculture Handbook 66, 2016), so a cool room or an ordinary chiller can shorten its life rather than extend it. Storage works best either close to freezing or at warm ambient temperatures, with stable conditions in between moves.",
          },
          {
            heading: "General reference storage conditions",
            text: "There are two general reference conditions for [well-cured bulbs](/blog/fresh-garlic-buying-guide-grades-bulb-size-packaging-and-export-supply). Garlic is not chilling sensitive. These are general figures; agree the conditions for your shipment and warehouse with your supplier.",
            list: {
              items: [
                "Long-term storage: −1 to 0 °C with 60 to 70 per cent relative humidity, under which well-cured garlic can keep for more than nine months.",
                "Ambient storage: 20 to 30 °C and around 75 per cent relative humidity, under which it keeps for about one to two months.",
              ],
            },
          },
          {
            heading: "Keep it dry",
            text: "High humidity encourages roots to grow from the base of the bulb and mould to develop on skins and cloves. Keep garlic in a dry, well-ventilated store, off damp floors and away from water, and avoid moving it quickly from cold storage into warm, humid air, which causes condensation on the bulbs.",
          },
          {
            heading: "Let air circulate",
            text: "Breathable packaging and space between stacked bags or cartons let air move around the bulbs and carry away moisture. Do not seal whole bulbs in airtight plastic. Garlic produces very little ethylene and is not particularly sensitive to it, but its strong odour can taint other goods, so store it apart from produce that absorbs smells, and check compatibility before [combining it with other produce in one order](/blog/building-a-mixed-agricultural-order-from-india).",
          },
          {
            heading: "Peeled cloves are different",
            text: "Once peeled, cloves lose their protective skin and must be kept chilled and used quickly. Agree the storage conditions and use-by period for peeled cloves with your supplier separately from those for whole bulbs; our article on [garlic for food processing](/blog/fresh-garlic-for-food-processing-applications-forms-and-handling) explains when peeled cloves make sense.",
          },
          {
            heading: "Check stock regularly",
            text: "Inspect bulbs at intervals and remove any that are soft, sprouting, rooting or mouldy so they do not affect the rest of the stock. Use older lots first, and sell or process lots that show early green shoots before they develop further.",
          },
          {
            heading: "Conclusion",
            text: "Garlic keeps best either close to freezing or at warm ambient temperatures, dry and well ventilated, because cool-room temperatures in between encourage sprouting. Treat peeled cloves as a separate, chilled product, check stock regularly, and agree storage conditions for each shipment with your supplier.",
          },
          {
            heading: "Frequently asked questions",
            text: "Questions buyers ask about storing garlic.",
            faq: [
              {
                question: "Why does garlic sprout in a cool room?",
                answer: "Garlic sprouts fastest at intermediate temperatures of about 5 to 18 °C, so an ordinary chiller can shorten its life rather than extend it.",
              },
              {
                question: "Can garlic be stored without refrigeration?",
                answer: "Yes, for a shorter period. At 20 to 30 °C and around 75 per cent relative humidity, well-cured garlic generally keeps for about one to two months.",
              },
              {
                question: "What humidity does stored garlic need?",
                answer: "For long-term storage, around 60 to 70 per cent relative humidity is generally used. High humidity encourages roots to grow from the base and mould to develop.",
              },
              {
                question: "Should whole garlic bulbs be sealed in plastic?",
                answer: "No. Use breathable packaging and leave space between stacked bags or cartons so air can carry moisture away.",
              },
              {
                question: "How should peeled garlic cloves be stored?",
                answer: "Peeled cloves lose their protective skin, so they must be kept chilled and used quickly. Agree their storage conditions separately from those for whole bulbs.",
              },
            ],
          },
        ],
      },
      {
        topic: "Food Processing",
        title: "Fresh Garlic for Food Processing: Applications, Forms and Handling",
        description:
          "How processors use fresh garlic in pastes, sauces and seasonings, how to choose between whole bulbs and peeled cloves, and what to check on arrival.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#FreshGarlic", href: "/products/garlic" }, { tag: "#GarlicPowder", href: "/blog/garlic-powder-in-seasonings-snack-coatings-and-ready-meals" }, { tag: "#GingerGarlicPaste", href: "/blog/ginger-in-teas-sauces-bakery-and-beverages" }],
        body: [
          {
            heading: "Where processors use garlic",
            text: "Many processors prefer fresh garlic for products where a bright, raw garlic note matters. It goes into a wide range of prepared foods, where its strong aroma carries through the finished product, including:",
            list: {
              items: [
                "Garlic and ginger-garlic pastes",
                "Sauces and marinades",
                "Dips",
                "Seasoning mixes",
                "Pickles",
              ],
            },
          },
          {
            heading: "Choosing the form",
            text: "Whole bulbs give processors control over peeling, store far longer and suit plants with their own peeling lines. Peeled cloves, available on request, remove that step and reduce labour on the line, but they are perishable and need chilled storage and prompt use. The right choice depends on your volumes, labour and storage.",
          },
          {
            heading: "What processors specify",
            text: "Clove size matters for peeling yield and for products where cloves are used whole. For pastes and sauces, flavour strength and consistency between lots matter most, so many processors test each new lot in a small batch. Our [illustrative case study on supplying paste manufacturers](/case-studies/onion-garlic-and-chilli-for-paste-manufacturers) shows how onion, garlic and chilli are specified together. Processors usually agree:",
            list: {
              items: [
                "Bulb or clove size",
                "Firmness",
                "Freedom from sprouting and mould",
                "The level of damage they will accept",
              ],
            },
          },
          {
            heading: "Fresh or dehydrated",
            text: "For dry seasonings, snack coatings and instant mixes, garlic powder is often more practical than fresh garlic because it is dry, stable and easy to dose. Our [Garlic Powder page](/products/garlic-powder) covers the dehydrated product if your process suits it.",
          },
          {
            heading: "Handling on arrival",
            text: "Check a sample for firmness, colour and freedom from sprouting or mould, store whole bulbs dry and ventilated, as described in our [garlic storage guide](/blog/how-to-store-fresh-garlic-prevent-sprouting-and-maintain-quality), and peeled cloves chilled, and plan deliveries around production so that garlic does not sit in storage longer than necessary.",
          },
          {
            heading: "Conclusion",
            text: "For processors, the choice between whole bulbs and peeled cloves depends on volumes, labour and storage, while clove size, firmness and consistency between lots decide yield and flavour. Test each new lot in a small batch, and consider garlic powder where a dry, stable ingredient suits the process better.",
          },
          {
            heading: "Frequently asked questions",
            text: "Questions processors ask about fresh garlic.",
            faq: [
              {
                question: "When is garlic powder a better choice than fresh garlic?",
                answer: "For dry seasonings, snack coatings and instant mixes, garlic powder is often more practical because it is dry, stable and easy to dose.",
              },
              {
                question: "What should processors check when garlic arrives?",
                answer: "Check a sample for firmness, colour and freedom from sprouting or mould, store whole bulbs dry and ventilated and peeled cloves chilled, and avoid holding stock longer than production needs.",
              },
              {
                question: "Which products use fresh garlic?",
                answer: "Garlic and ginger-garlic pastes, sauces, marinades, dips, seasoning mixes, pickles and many other prepared foods, where its strong aroma carries through.",
              },
              {
                question: "Why does clove size matter to processors?",
                answer: "Clove size affects peeling yield and matters for products where cloves are used whole.",
              },
              {
                question: "How do processors keep garlic flavour consistent?",
                answer: "For pastes and sauces, flavour strength and consistency between lots matter most, so many processors test each new lot in a small batch.",
              },
            ],
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
          "Corm firmness, skin condition, curing, size and cut-surface checks behind a good elephant foot yam shipment, plus the documents to confirm before export.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#ElephantFootYam", href: "/products/elephant-yam" }, { tag: "#TuberShipping", href: "/case-studies/shipping-onions-garlic-and-elephant-yam" }, { tag: "#ProduceImports", href: "/blog?category=export-guides" }],
        body: [
          {
            heading: "What you are buying",
            text: "Elephant foot yam, Amorphophallus paeoniifolius, is the large underground corm of an aroid plant. Despite its name it is not a true yam. It is traded whole, with a rough brown skin, and is valued in South Asian cooking for its dense flesh.",
          },
          {
            heading: "Firmness first",
            text: "A good elephant yam feels solid and heavy for its size. Press the surface around the top and base: soft or spongy patches usually mean the flesh beneath has started to break down, and that will spread in storage.",
          },
          {
            heading: "Curing and skin condition",
            text: "After harvest, corms are commonly cured by drying in shade for about a week (ICAR-Central Tuber Crops Research Institute), which lets adhering soil fall away and helps small wounds heal before storage; our article on [handling and storing elephant yam](/blog/handling-and-storing-elephant-yam-for-long-journeys) covers this in more detail. Some soil on the surface is normal; mould or a sour smell is not. Look for skin that is dry and intact, without:",
            list: {
              items: [
                "Deep cuts or cracks",
                "Crushed areas",
                "Wet spots",
              ],
            },
          },
          {
            heading: "Size and consistency",
            text: "Elephant yam corms vary widely in size. Kitchens and retailers often prefer a manageable, even size, while processors may accept larger corms for cutting; see [how elephant yam is used in curries, chips and retail](/blog/elephant-yam-in-curries-chips-and-ethnic-retail). Agree the size or weight range you need before the order is packed, and check that corms in a lot are broadly consistent.",
          },
          {
            heading: "The cut surface",
            text: "If a sample is cut, the flesh should be dense and firm, cream to pinkish depending on variety, with no dark streaks, hollow areas or soft discoloured zones.",
          },
          {
            heading: "Documents and traceability",
            text: "Fresh corms are a plant product, so a [phytosanitary certificate](/blog/phytosanitary-certificates-and-export-documents-for-fresh-produce) is normally required by the importing country. Elephant foot yam is also among the vegetables listed in APEDA's HortiNet traceability system, under which exports are sourced from registered farms; confirm with your supplier whether it applies to your destination. Agree all documents as part of the order.",
          },
          {
            heading: "Order quantity",
            text: "Freshland Exports supplies elephant yam with a minimum order quantity of 500 kg to 1 MT. When you [request a quotation](/contact), share your quantity, size range, packing preference and destination together, and plan volumes early, as availability depends on the season.",
          },
          {
            heading: "Conclusion",
            text: "A good elephant foot yam shipment starts with firm, heavy corms that have been cured, with dry, intact skin and dense flesh. Agree the size range, packing and documents with your supplier, and check a cut sample before committing to a full order.",
          },
          {
            heading: "Frequently asked questions",
            text: "Questions importers ask about elephant foot yam.",
            faq: [
              {
                question: "Is elephant foot yam a true yam?",
                answer: "No. Despite its name, elephant foot yam (Amorphophallus paeoniifolius) is the corm of an aroid plant, not a true yam.",
              },
              {
                question: "Why are corms cured before shipping?",
                answer: "Shade-drying corms for about a week after harvest lets soil fall away and helps small wounds heal, which makes them less likely to rot in storage.",
              },
              {
                question: "How can I check an elephant yam for firmness?",
                answer: "A good corm feels solid and heavy for its size. Press around the top and base: soft or spongy patches usually mean the flesh beneath has started to break down.",
              },
              {
                question: "What should the cut flesh look like?",
                answer: "Dense and firm, cream to pinkish depending on variety, with no dark streaks, hollow areas or soft, discoloured zones.",
              },
              {
                question: "Is elephant yam covered by traceability rules in India?",
                answer: "It is among the vegetables listed in APEDA's HortiNet traceability system, under which exports are sourced from registered farms. Confirm whether it applies to your destination.",
              },
            ],
          },
        ],
      },
      {
        topic: "Storage",
        title: "Handling and Storing Elephant Yam for Long Journeys",
        description:
          "Why elephant yam travels best cured, dry and ventilated, how careful handling prevents hidden damage, and what to check when a consignment arrives.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#ElephantYam", href: "/products/elephant-yam" }, { tag: "#RootCropStorage", href: "/blog/storing-ginger-to-prevent-sprouting-and-shrivelling" }, { tag: "#ElephantYamUses", href: "/blog/elephant-yam-in-curries-chips-and-ethnic-retail" }],
        body: [
          {
            heading: "Damage starts at handling",
            text: "Elephant yam is heavy, and a dropped or crushed corm bruises internally even when the skin looks fine. Load and unload by hand rather than tipping, and avoid stacking so high that the lower layers are crushed. Cuts and bruises are the main entry points for the rots that spoil corms in storage.",
          },
          {
            heading: "Cure before storing",
            text: "Shade-drying freshly harvested corms for about a week lets the skin dry and small wounds heal before storage. Corms stored or shipped without this step, or while still wet, are much more likely to rot.",
          },
          {
            heading: "Cool, dry and ventilated",
            text: "Cured corms are best stored in a well-ventilated, cool place protected from rain. Moisture is what turns a small wound into rot, so ship and store corms in packing that lets air move around them and keep them off wet floors. There is no widely published commercial cold-storage specification for elephant yam comparable to those for common vegetables, so agree the conditions for your route with your supplier and logistics provider rather than assuming a figure. Our [illustrative case study on shipping onions, garlic and elephant yam](/case-studies/shipping-onions-garlic-and-elephant-yam) shows how such a load is planned.",
          },
          {
            heading: "Dormancy and sprouting",
            text: "Freshly harvested corms go through a natural dormant period before they begin to sprout. Ask when the corms were harvested, so that you can plan sales before sprouting begins.",
          },
          {
            heading: "Check on arrival",
            text: "When the consignment arrives:",
            list: {
              ordered: true,
              items: [
                "Open packs from several positions in the load.",
                "Check corms for firmness, skin damage and wet or mouldy patches against the [quality points importers look for](/blog/elephant-foot-yam-what-importers-should-look-for).",
                "Set aside any soft pieces so they do not affect the rest of the stock.",
              ],
            },
          },
          {
            heading: "Conclusion",
            text: "Elephant yam travels best when corms are handled gently, cured before storage and kept cool, dry and ventilated, since hidden bruises and moisture are what lead to rot. With no widely published cold-storage specification, agree the route conditions with your supplier and check every consignment on arrival.",
          },
          {
            heading: "Frequently asked questions",
            text: "Questions buyers ask about handling elephant yam.",
            faq: [
              {
                question: "Is there a standard cold-storage temperature for elephant yam?",
                answer: "There is no widely published commercial cold-storage specification for elephant yam comparable to those for common vegetables. Cured corms are best kept in a well-ventilated, cool place protected from rain, so agree route conditions with your supplier.",
              },
              {
                question: "Why can a corm rot when its skin looks undamaged?",
                answer: "A dropped or crushed corm can bruise internally even when the skin looks fine, and bruises are entry points for rot. Handle corms by hand and avoid stacking that crushes lower layers.",
              },
              {
                question: "What causes rot in stored elephant yam?",
                answer: "Moisture is what turns a small wound into rot, so corms should be shipped and stored in packing that lets air move around them, kept off wet floors and protected from rain.",
              },
              {
                question: "When do elephant yam corms start to sprout?",
                answer: "After a natural dormant period that follows harvest. Ask when the corms were harvested so you can plan sales before sprouting begins.",
              },
              {
                question: "What should be checked when a consignment arrives?",
                answer: "Open packs from several positions, check corms for firmness, skin damage and wet or mouldy patches, and set aside any soft pieces.",
              },
            ],
          },
        ],
      },
      {
        topic: "Uses",
        title: "Elephant Yam in Curries, Chips and Ethnic Retail",
        description:
          "How elephant yam is cooked in regional cuisines, why it must be cooked before eating, and what kitchens, processors and retailers look for when buying it.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#ElephantYam", href: "/products/elephant-yam" }, { tag: "#ElephantYamStorage", href: "/blog/handling-and-storing-elephant-yam-for-long-journeys" }, { tag: "#EthnicGrocery", href: "/case-studies/south-asian-vegetables-for-ethnic-grocery-importers" }],
        body: [
          {
            heading: "Always cooked",
            text: "Elephant yam contains needle-like calcium oxalate crystals that make raw or undercooked flesh acrid and irritating to the mouth and throat. It is always eaten cooked, and many cooks add a souring ingredient such as tamarind or lemon. Some people find that handling the raw cut flesh irritates the skin, so kitchens and processing lines often use gloves when peeling and cutting.",
          },
          {
            heading: "Curries and gravies",
            text: "Cut into cubes, elephant yam holds its shape in slow-cooked curries and gravies and absorbs the flavour of the sauce, which makes it a mainstay of many regional home and restaurant menus in South India and beyond. Our [illustrative case study on traditional vegetables for restaurants and caterers](/case-studies/traditional-vegetables-for-restaurants-and-caterers) looks at supplying these kitchens.",
          },
          {
            heading: "Chips, fries and roasts",
            text: "Thin slices are fried into crisp chips, and thicker pieces are shallow-fried, roasted or made into cutlets. [Firm, dense corms](/blog/elephant-foot-yam-what-importers-should-look-for) give the most even results.",
          },
          {
            heading: "Ethnic and diaspora retail",
            text: "For specialty grocers serving South Asian communities, whole corms sell best when they are clean, firm and a size shoppers can carry. Retailers often cut large corms into wrapped pieces in store, which should be sold quickly.",
          },
          {
            heading: "Processing and ready meals",
            text: "Processors peel, cut and blanch elephant yam for frozen packs and ready-to-cook lines. They usually look for consistent size and firm flesh, so that cutting and cooking times stay predictable, and they agree a minimum yield of usable flesh; see our [illustrative case study on vegetables for ready-meal manufacturers](/case-studies/vegetables-for-ready-meal-manufacturers).",
          },
          {
            heading: "Conclusion",
            text: "Elephant yam is always eaten cooked, and its firm, dense flesh suits curries, chips, roasts and frozen ready-to-cook lines. Whether you supply kitchens, grocers or a processing line, specify consistent size and firm flesh so cutting and cooking stay predictable.",
          },
          {
            heading: "Frequently asked questions",
            text: "Questions buyers ask about using elephant yam.",
            faq: [
              {
                question: "Can elephant yam be eaten raw?",
                answer: "No. It contains needle-like calcium oxalate crystals that make raw or undercooked flesh acrid and irritating, so it is always eaten cooked.",
              },
              {
                question: "What do processors look for in elephant yam?",
                answer: "Consistent size and firm flesh, so that cutting and cooking times stay predictable, and an agreed minimum yield of usable flesh.",
              },
              {
                question: "Do kitchens need gloves to handle raw elephant yam?",
                answer: "Some people find that handling the raw cut flesh irritates the skin, so kitchens and processing lines often use gloves when peeling and cutting.",
              },
              {
                question: "How is elephant yam used in snacks?",
                answer: "Thin slices are fried into crisp chips, and thicker pieces are shallow-fried, roasted or made into cutlets. Firm, dense corms give the most even results.",
              },
              {
                question: "What do grocery retailers look for?",
                answer: "Whole corms that are clean, firm and a size shoppers can carry. Large corms cut into wrapped pieces in store should be sold quickly.",
              },
            ],
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
          "Firm, compact heads with fresh wrapper leaves: the quality checks, size grading and documents buyers agree before placing a fresh cabbage order.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#FreshCabbage", href: "/products/cabbage" }, { tag: "#Coleslaw", href: "/case-studies/cabbage-for-coleslaw-and-shredded-packs" }, { tag: "#ProduceQuality", href: "/blog?category=quality-and-sourcing" }],
        body: [
          {
            heading: "Weight for size",
            text: "A good head of cabbage feels heavy for its size. Lift a few heads of similar diameter: the heavier ones are usually denser, with tightly packed inner leaves and less air between the layers.",
          },
          {
            heading: "Compactness",
            text: "Press gently on the top of the head. It should feel firm and resist, not give or sound hollow. Loose, puffy heads tend to wilt faster and are harder to cut cleanly in processing. Heads that have split or begun to bolt should be rejected.",
          },
          {
            heading: "Wrapper leaves and freshness",
            text: "The outer leaves protect the head in transit. Yellowing wrapper leaves can be a sign of age or of [exposure to ethylene from ripening fruit](/blog/keeping-cabbage-crisp-with-cool-chain-handling). Check for:",
            list: {
              items: [
                "Wrapper leaves that are fresh and green rather than yellowed, slimy or badly torn.",
                "A stem end that is clean-cut and not dried out or blackened.",
              ],
            },
          },
          {
            heading: "Agreeing size",
            text: "Retail, food service and processing often want [different head sizes or weights](/blog/cabbage-for-salads-coleslaw-and-food-processing). Tell your supplier the range you need and how many wrapper leaves should be left on, and confirm both against a sample before a full order.",
          },
          {
            heading: "Documents and destination checks",
            text: "Fresh cabbage is a plant product, so a [phytosanitary certificate](/blog/phytosanitary-certificates-and-export-documents-for-fresh-produce) is normally required; the European Union requires one for fresh vegetables from non-EU countries under Regulation (EU) 2019/2072, Annex XI. Agree the documents, any residue testing your customers expect, and the temperature to be held in transit as part of the order.",
          },
          {
            heading: "Order quantity",
            text: "Freshland Exports supplies fresh cabbage with a minimum order quantity of 500 kg to 1 MT. When you [request a quotation](/contact), share your quantity, head size, packing preference and destination together, as supply depends on the season.",
          },
          {
            heading: "Conclusion",
            text: "Export-quality cabbage is heavy for its size, firm and compact, with fresh wrapper leaves and a clean stem end. Agree the head size or weight range, the number of wrapper leaves and the transit temperature with your supplier, and confirm them against a sample.",
          },
          {
            heading: "Frequently asked questions",
            text: "Questions buyers ask about cabbage quality.",
            faq: [
              {
                question: "How can I check whether a cabbage head is compact?",
                answer: "Press gently on the top of the head: it should feel firm and resist rather than give or sound hollow. Among heads of similar size, the heavier ones are usually denser.",
              },
              {
                question: "What causes yellow wrapper leaves?",
                answer: "Yellowing wrapper leaves can be a sign of age, or of exposure to ethylene from ripening fruit.",
              },
              {
                question: "Which cabbage heads should be rejected?",
                answer: "Heads that have split or begun to bolt. Loose, puffy heads also wilt faster and are harder to cut cleanly in processing.",
              },
              {
                question: "How many wrapper leaves should be left on?",
                answer: "Agree it with your supplier, since the outer leaves protect the head in transit, and confirm it against a sample.",
              },
              {
                question: "Is there an international quality standard for cabbage?",
                answer: "Yes. UNECE Standard FFV-09 covers the marketing and commercial quality control of headed cabbages.",
              },
            ],
          },
        ],
      },
      {
        topic: "Storage",
        title: "Keeping Cabbage Crisp with Cool-Chain Handling",
        description:
          "The near-freezing, very humid conditions that keep cabbage crisp, why it must be kept away from ethylene, and how careful handling limits wilting and rot.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#CabbageUses", href: "/blog/cabbage-for-salads-coleslaw-and-food-processing" }, { tag: "#FreshCabbage", href: "/products/cabbage" }, { tag: "#ColdChain", href: "/case-studies/cold-chain-planning-for-perishable-vegetables" }],
        body: [
          {
            heading: "General reference storage conditions",
            text: "Storage life varies widely by variety and condition at harvest, so agree the conditions and expected shelf life for each shipment rather than assuming a figure. General reference conditions for cabbage (USDA Agriculture Handbook 66, 2016) are:",
            list: {
              items: [
                "About 0 °C with very high relative humidity of 98 to 100 per cent.",
                "Cabbage is not chilling sensitive, but it freezes at around −0.9 °C, so it should be held just above that point.",
              ],
            },
          },
          {
            heading: "Keep it away from ethylene",
            text: "Cabbage produces almost no ethylene but is sensitive to it. As little as 1 part per million of ethylene speeds up ageing, causing leaves to yellow, wilt and drop away from the head. Never store or ship cabbage alongside ripening fruits such as bananas, apples or tomatoes, and check compatibility when [planning a mixed agricultural order](/blog/building-a-mixed-agricultural-order-from-india).",
          },
          {
            heading: "Humid, not wet",
            text: "Cabbage loses moisture through its leaves, and warm, dry air makes it wilt. High humidity prevents this, but free water on the heads encourages rot, so avoid condensation by keeping temperatures steady.",
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
            text: "Check heads from several positions for firmness, leaf condition and yellowing, using the [quality checks for export cabbage](/blog/choosing-export-quality-cabbage-head-weight-and-compactness). Trimming damaged outer leaves before display or processing keeps the rest of the head looking fresh.",
          },
          {
            heading: "Conclusion",
            text: "Cabbage stays crisp when it is held just above freezing at very high humidity, kept away from ethylene and handled gently. Agree the storage conditions and expected shelf life for each shipment, and trim damaged outer leaves on arrival before display or processing.",
          },
          {
            heading: "Frequently asked questions",
            text: "Questions buyers ask about storing cabbage.",
            faq: [
              {
                question: "At what temperature should cabbage be stored?",
                answer: "Cabbage is generally stored at about 0 °C with 98 to 100 per cent relative humidity. Cabbage freezes at around −0.9 °C, so it should be held just above that point.",
              },
              {
                question: "Can cabbage be shipped with fruit?",
                answer: "It should not travel with ripening fruits such as bananas, apples or tomatoes: as little as 1 part per million of ethylene speeds up ageing in cabbage.",
              },
              {
                question: "Why does cabbage need such high humidity?",
                answer: "Cabbage loses moisture through its leaves and wilts in warm, dry air. High humidity prevents this, but free water encourages rot, so keep temperatures steady to avoid condensation.",
              },
              {
                question: "How long does cabbage keep in storage?",
                answer: "Storage life varies widely by variety and condition at harvest, so agree the expected shelf life for each shipment rather than assuming a figure.",
              },
              {
                question: "What should be done with cabbage on arrival?",
                answer: "Check heads from several positions for firmness, leaf condition and yellowing, and trim damaged outer leaves before display or processing.",
              },
            ],
          },
        ],
      },
      {
        topic: "Applications",
        title: "Cabbage for Salads, Coleslaw and Food Processing",
        description:
          "From coleslaw to cooked dishes, fermentation and shredded packs: how cabbage is used and what each kind of buyer specifies for head size, density and hygiene.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#Cabbage", href: "/products/cabbage" }, { tag: "#SaladLines", href: "/case-studies/fresh-vegetables-for-food-service-salad-lines" }, { tag: "#CabbageQuality", href: "/blog/choosing-export-quality-cabbage-head-weight-and-compactness" }],
        body: [
          {
            heading: "Salads and coleslaw",
            text: "Finely shredded or sliced cabbage is the base of coleslaw and many fresh salads. Dense, crisp heads give long, even shreds that hold their crunch after dressing; our [illustrative case study on cabbage for coleslaw and shredded packs](/case-studies/cabbage-for-coleslaw-and-shredded-packs) shows what such buyers specify.",
          },
          {
            heading: "Cooked dishes",
            text: "In stir-fries, curries and soups, cabbage softens and sweetens as it cooks. Kitchens value heads that cut cleanly into even pieces so they cook at the same rate.",
          },
          {
            heading: "Fermentation",
            text: "Traditional fermented preparations rely on fresh, firm cabbage. Crisp, sound leaves give a better texture once fermented, and producers usually avoid heads with damage or decay that could disturb fermentation. See our [illustrative case study on cabbage and cucumber for pickles and fermented foods](/case-studies/cabbage-and-cucumber-for-pickles-and-fermented-foods).",
          },
          {
            heading: "Processing lines",
            text: "Processors wash, core and shred cabbage for salad packs, ready meals and frozen vegetable mixes. They usually:",
            list: {
              items: [
                "Look for consistent head size.",
                "Prefer firm, compact heads, which give a higher yield of usable leaf.",
                "Agree how many wrapper leaves are removed before delivery.",
              ],
            },
          },
          {
            heading: "Hygiene for ready-to-eat products",
            text: "Shredded cabbage sold for coleslaw or salad packs is eaten raw, so processors control washing, sanitising and chilling under their own food-safety plans. Sound, undamaged heads with clean wrapper leaves make that work easier, which is why processors pay close attention to field and packing hygiene in their specifications.",
          },
          {
            heading: "Conclusion",
            text: "Whether cabbage ends up in coleslaw, cooked dishes, fermented products or shredded packs, dense, compact heads of consistent size give the best yield and texture. Share your intended use with your supplier, run a yield test on a sample, and build hygiene expectations into your specification for ready-to-eat products.",
          },
          {
            heading: "Frequently asked questions",
            text: "Common questions from processors and food service.",
            faq: [
              {
                question: "Why does shredded cabbage turn brown?",
                answer: "Cut surfaces brown as damaged cells react with air, and warmth speeds it up. [Keeping heads cold](/blog/keeping-cabbage-crisp-with-cool-chain-handling) before cutting and the cut product chilled slows browning.",
              },
              {
                question: "Which head size gives the best yield?",
                answer: "Dense, compact heads of a consistent size usually give the best yield of usable leaf. Run a yield test on a sample to set your specification.",
              },
              {
                question: "Which cabbage suits coleslaw?",
                answer: "Dense, crisp heads, which give long, even shreds that hold their crunch after dressing.",
              },
              {
                question: "Can cabbage be used for fermented products?",
                answer: "Yes. Traditional fermented preparations rely on fresh, firm cabbage, and producers usually avoid heads with damage or decay.",
              },
              {
                question: "Who controls hygiene for ready-to-eat shredded cabbage?",
                answer: "Processors control washing, sanitising and chilling under their own food-safety plans. Sound heads with clean wrapper leaves make that work easier.",
              },
            ],
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
          "How cucumber buyers grade by length, straightness, colour, firmness and skin condition, and what to agree on type, packing and transit before ordering.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#FreshCucumber", href: "/products/cucumber" }, { tag: "#SaladVegetables", href: "/case-studies/fresh-vegetables-for-food-service-salad-lines" }, { tag: "#ProduceQuality", href: "/blog?category=quality-and-sourcing" }],
        body: [
          {
            heading: "Know the type you need",
            text: "Cucumbers range from short, thin-skinned types to long slicing cucumbers and small [pickling types](/blog/cucumbers-for-salads-pickling-and-fresh-cut-lines). Each market and use expects a different one, so name the type and intended use in your enquiry before discussing grade.",
          },
          {
            heading: "Length and straightness",
            text: "Retail packs and food-service kitchens usually want cucumbers of a similar length and a straight, even shape, which pack neatly and slice into uniform rounds. Curved or misshapen fruit is often better suited to processing. State the length range and how much curvature you accept, and confirm both against a sample.",
          },
          {
            heading: "Colour",
            text: "Look for an even green colour along the whole cucumber. Yellowing, especially at the blossom end, usually means the fruit is over-mature or has been [stored too warm or near ripening fruit](/blog/why-cucumbers-need-careful-temperature-control), and it will taste less fresh and have larger seeds.",
          },
          {
            heading: "Firmness",
            text: "A fresh cucumber is firm from end to end. Softness at the tips, wrinkled skin or a rubbery bend are signs of moisture loss or age, and these cucumbers will not hold up through distribution.",
          },
          {
            heading: "Skin condition",
            text: "Small marks matter more than they seem, because damaged areas are where spoilage starts. Pitting and water-soaked patches can also be signs of chilling injury in transit. Check for clean skin without:",
            list: {
              items: [
                "Cuts or bruises",
                "Sunken or water-soaked spots",
                "Decay",
              ],
            },
          },
          {
            heading: "Transit and documents",
            text: "Cucumbers are perishable and sensitive to both cold and ethylene, so agree the transit temperature and avoid mixed loads with ripening fruit. The importing country will normally require a [phytosanitary certificate](/blog/phytosanitary-certificates-and-export-documents-for-fresh-produce), and many retail customers also ask for pesticide residue results, so settle both before the order is packed.",
          },
          {
            heading: "Order quantity",
            text: "Freshland Exports supplies fresh cucumbers with a minimum order quantity of 500 kg to 1 MT. When you [request a quotation](/contact), share your quantity, type, length range, packing preference and destination together, as supply depends on the season.",
          },
          {
            heading: "Conclusion",
            text: "Good cucumbers for export are the right type for the market, evenly green, firm from end to end, with clean skin and consistent length and shape. Name the type and intended use in your enquiry, agree grading and transit conditions, and confirm both against a sample.",
          },
          {
            heading: "Frequently asked questions",
            text: "Questions buyers ask about cucumber quality.",
            faq: [
              {
                question: "Why do cucumbers turn yellow?",
                answer: "Yellowing, especially at the blossom end, usually means the fruit is over-mature or has been stored too warm or near ripening fruit.",
              },
              {
                question: "What do pitting and water-soaked patches mean?",
                answer: "Besides physical damage, they can be signs of chilling injury in transit, which is why the transit temperature should be agreed for each shipment.",
              },
              {
                question: "Which cucumber type should I order?",
                answer: "It depends on the market and use: short, thin-skinned types, long slicing cucumbers or small pickling types. Name the type and intended use in your enquiry.",
              },
              {
                question: "How much curvature is acceptable?",
                answer: "Agree it with your supplier. Retail and food service usually want straight, even fruit, while curved fruit is often better suited to processing.",
              },
              {
                question: "Is there an international quality standard for cucumbers?",
                answer: "Yes. UNECE Standard FFV-15 covers the marketing and commercial quality control of cucumbers.",
              },
            ],
          },
        ],
      },
      {
        topic: "Storage",
        title: "Why Cucumbers Need Careful Temperature Control",
        description:
          "Cucumbers suffer chilling injury below about 10 °C and yellow quickly in ethylene. USDA reference conditions and the handling that keeps them firm and green.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#CucumberUses", href: "/blog/cucumbers-for-salads-pickling-and-fresh-cut-lines" }, { tag: "#FreshCucumber", href: "/products/cucumber" }, { tag: "#ChillingInjury", href: "/blog/protecting-eggplant-from-chilling-injury-in-transit" }],
        body: [
          {
            heading: "Cool, but not too cold",
            text: "Cucumbers keep best in cool conditions, but they are sensitive to chilling:",
            list: {
              items: [
                "Recommended: about 10 to 12.5 °C with around 95 per cent relative humidity (USDA Agriculture Handbook 66, 2016), under which storage life is generally under two weeks.",
                "Too cold: below about 10 °C, chilling injury can appear within a few days as pitting, water-soaked patches and rapid decay once the fruit warms again.",
                "Too warm: around 15 °C and above, cucumbers yellow quickly.",
              ],
            },
          },
          {
            heading: "Very sensitive to ethylene",
            text: "Cucumbers produce little ethylene but are very sensitive to it: 1 to 5 parts per million speeds yellowing and decay. Never store or ship cucumbers with ripening fruits such as bananas, melons or tomatoes, and check compatibility before [building a mixed agricultural order](/blog/building-a-mixed-agricultural-order-from-india).",
          },
          {
            heading: "Humidity and ventilation",
            text: "Cucumbers lose moisture through their skin and soften in dry air, while trapped moisture encourages rot. High humidity with good ventilation keeps them firm without wet surfaces.",
          },
          {
            heading: "Handle with care",
            text: "Bruises are not always visible at first but shorten shelf life. Load and unload packs gently, and avoid stacking that crushes the lower layers.",
          },
          {
            heading: "On arrival",
            text: "Check cartons from several positions for yellowing, softness, pitting and decay, using the [cucumber quality checks](/blog/fresh-cucumber-sourcing-length-straightness-and-colour), and move stock on promptly. Because chilling injury often appears only after warming, record the transit temperature log with each delivery. Our [illustrative case study on cold-chain planning for perishable vegetables](/case-studies/cold-chain-planning-for-perishable-vegetables) covers this in practice.",
          },
          {
            heading: "Conclusion",
            text: "Cucumbers need a narrow temperature band: cool enough to slow ageing, but not so cold that chilling injury sets in, and always away from ethylene. Agree the transit temperature for each shipment, handle cartons gently, and record temperature logs so any problem can be traced.",
          },
          {
            heading: "Frequently asked questions",
            text: "Questions buyers ask about cucumber storage.",
            faq: [
              {
                question: "What is the best storage temperature for cucumbers?",
                answer: "Cucumbers are generally stored at about 10 to 12.5 °C with around 95 per cent relative humidity; storage life is usually under two weeks.",
              },
              {
                question: "Can cucumbers share a container with bananas or tomatoes?",
                answer: "No. Cucumbers are very sensitive to ethylene, and 1 to 5 parts per million speeds yellowing and decay.",
              },
              {
                question: "What are the signs of chilling injury in cucumbers?",
                answer: "Pitting, water-soaked patches and rapid decay once the fruit warms again, which can appear within a few days below about 10 °C.",
              },
              {
                question: "Why record transit temperatures?",
                answer: "Chilling injury often appears only after the fruit has warmed, so a temperature log helps trace where a problem started.",
              },
              {
                question: "Why do cucumbers go soft?",
                answer: "They lose moisture through their skin in dry air. High humidity with good ventilation keeps them firm without wet surfaces.",
              },
            ],
          },
        ],
      },
      {
        topic: "Applications",
        title: "Cucumbers for Salads, Pickling and Fresh-Cut Lines",
        description:
          "How intended use, whether slicing, pickling, fresh-cut or beverages, shapes the cucumber type, size and freshness you should specify when ordering.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#Cucumbers", href: "/products/cucumber" }, { tag: "#CucumberQuality", href: "/blog/fresh-cucumber-sourcing-length-straightness-and-colour" }, { tag: "#FreshCutProduce", href: "/blog/cabbage-for-salads-coleslaw-and-food-processing" }],
        body: [
          {
            heading: "Salads and food service",
            text: "For salads, raita and garnishes, kitchens want firm cucumbers with an even colour that slice cleanly. Consistent length makes portioning faster in busy kitchens, and thin-skinned types save peeling time. See our [illustrative case study on fresh vegetables for food-service salad lines](/case-studies/fresh-vegetables-for-food-service-salad-lines).",
          },
          {
            heading: "Pickling",
            text: "Pickling calls for firm, fresh cucumbers that stay crunchy after brining, usually smaller types with a consistent diameter so that they pack evenly in jars. Freshness at the point of pickling matters more than appearance, so plan deliveries close to production and keep the fruit out of chilling temperatures before use. Our [illustrative case study on cabbage and cucumber for pickles and fermented foods](/case-studies/cabbage-and-cucumber-for-pickles-and-fermented-foods) shows how picklers specify raw material.",
          },
          {
            heading: "Fresh-cut processing",
            text: "Fresh-cut lines wash, slice or dice cucumbers for salad packs and sandwiches. Processors look for firm flesh and consistent size, which keep cutting yields predictable, and because the product is eaten raw, they control washing, sanitising and chilling of the cut product under their own food-safety plans.",
          },
          {
            heading: "Beverages",
            text: "Juice and infused-water producers value fresh, well-coloured cucumbers, where flavour comes first and slight variations in shape matter less.",
          },
          {
            heading: "Conclusion",
            text: "Salads, pickling, fresh-cut lines and beverages each ask something different of a cucumber, from consistent length to firmness after brining. Match the cucumber type to your end use, plan deliveries close to production, and hold whole cucumbers cool rather than cold.",
          },
          {
            heading: "Frequently asked questions",
            text: "Common questions from food businesses.",
            faq: [
              {
                question: "Can slicing cucumbers be used for pickling?",
                answer: "They can, but pickling types are usually chosen because they stay firmer after brining. Test the type you can source in your own recipe.",
              },
              {
                question: "Should cucumbers be refrigerated before processing?",
                answer: "Hold whole cucumbers cool rather than cold, because ordinary refrigerator temperatures can cause [chilling injury](/blog/why-cucumbers-need-careful-temperature-control). Cut product, by contrast, is kept chilled.",
              },
              {
                question: "What do pickle makers look for in cucumbers?",
                answer: "Firm, fresh cucumbers that stay crunchy after brining, usually smaller types with a consistent diameter, delivered close to production.",
              },
              {
                question: "What matters for fresh-cut cucumber lines?",
                answer: "Firm flesh and consistent size for predictable cutting yields. Processors control washing, sanitising and chilling under their own food-safety plans.",
              },
              {
                question: "Do beverage makers need straight cucumbers?",
                answer: "No. For juices and infused water, fresh, well-coloured fruit matters most, and slight variations in shape matter less.",
              },
            ],
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
          "Quality checks for fresh green chillies and the EU rules on Indian chilli: certificates, residue testing, plant-pest conditions and traceability.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#GreenChilli", href: "/products/green-chili" }, { tag: "#EUImportRules", href: "/blog?category=export-guides" }, { tag: "#ChilliPaste", href: "/case-studies/onion-garlic-and-chilli-for-paste-manufacturers" }],
        body: [
          {
            heading: "In brief",
            text: "Fresh green chillies should be glossy, firm and green with fresh stems. For export from India, plan the paperwork as carefully as the quality: the European Union applies special import conditions to Indian chillies for pesticide residues and plant pests, and APEDA traceability rules may apply.",
          },
          {
            heading: "Colour and gloss",
            text: "Fresh green chillies have a bright to deep green, glossy skin. Dull, wrinkled or yellowing pods, or pods turning red, are signs of age or ripening, and will not travel or sell as well. Chillies left to ripen fully and dried are a separate product, [dried red chilli](/products/red-chilli).",
          },
          {
            heading: "Firmness and the stem",
            text: "Pods should feel firm and snap rather than bend. Check that stems are green and attached; dry, blackened or missing stems are often where spoilage begins.",
          },
          {
            heading: "Length and pungency",
            text: "Pod length and heat both vary by variety. Tell your supplier the length range and heat level your market or [processing use](/blog/green-chillies-in-sauces-pickles-and-food-processing) expects, and confirm them against a sample.",
          },
          {
            heading: "Product condition",
            text: "Look for pods free from cuts, soft or water-soaked spots, mould and insect damage. Even a small share of damaged pods can spread spoilage through a pack in transit, which is why [storage and handling](/blog/how-to-store-fresh-green-chillies-temperature-handling-and-shelf-life) matter as much as grading.",
          },
          {
            heading: "EU import conditions for Indian chillies",
            text: "Fresh, chilled and frozen chillies (Capsicum other than sweet peppers) from India are listed in Annex II of EU Implementing Regulation 2019/1793, as amended in 2026, for pesticide residues. In practice:",
            list: {
              items: [
                "Each consignment must travel with an official certificate and the results of sampling and analysis.",
                "30 per cent of consignments are subject to identity and physical checks at the EU border.",
                "EU plant-health rules also require official statements on certain pests of Capsicum fruit, including Bactrocera latifrons and fall armyworm, on the [phytosanitary certificate](/blog/phytosanitary-certificates-and-export-documents-for-fresh-produce).",
              ],
            },
          },
          {
            heading: "Traceability in India",
            text: "Green chilli is among the vegetables covered by APEDA's HortiNet traceability system, under which export produce is sourced from registered farms. Confirm with your supplier which traceability and residue-monitoring requirements apply to your destination before the first shipment.",
          },
          {
            heading: "Order quantity",
            text: "Freshland Exports supplies fresh green chilli with a minimum order quantity of 500 kg to 1 MT. When you [request a quotation](/contact), share your quantity, variety preference, length range, packing and destination together, as supply depends on the season.",
          },
          {
            heading: "Conclusion",
            text: "Fresh green chillies should arrive glossy, firm and green with fresh stems, but for exports from India the paperwork matters as much as the pods. Plan residue testing, plant-health statements and traceability alongside quality, and agree variety, length, packing and documents before the first shipment.",
          },
          {
            heading: "Frequently asked questions",
            text: "Questions importers ask about green chilli exports.",
            faq: [
              {
                question: "Do green chillies from India face extra EU checks?",
                answer: "Yes. They are listed for pesticide residues, so each consignment needs an official certificate and analysis results, and 30 per cent of consignments are subject to identity and physical checks at the EU border.",
              },
              {
                question: "What is HortiNet?",
                answer: "HortiNet is APEDA's traceability system for vegetables exported from India, under which export produce is sourced from registered farms. Green chilli is among the vegetables it covers.",
              },
              {
                question: "What does a good green chilli look like?",
                answer: "A bright to deep green, glossy skin, a firm pod that snaps rather than bends, and a green, attached stem.",
              },
              {
                question: "Which pests must the EU certificate cover for Indian chillies?",
                answer: "EU plant-health rules require official statements on certain pests of Capsicum fruit, including Bactrocera latifrons and fall armyworm, under Regulation (EU) 2019/2072, Annex VII, and Implementing Regulation (EU) 2023/1134.",
              },
              {
                question: "Are there international quality standards for chilli peppers?",
                answer: "Yes. Codex Alimentarius CXS 307-2011, the Standard for Chilli Peppers, and UNECE Standard FFV-61 set out quality requirements.",
              },
            ],
          },
        ],
      },
      {
        topic: "Storage",
        title: "How to Store Fresh Green Chillies: Temperature, Handling and Shelf Life",
        description:
          "USDA reference storage conditions for fresh chillies, why green chillies are easily chilled, and the handling and ventilation that keep pods firm and green.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#ChilliUses", href: "/blog/green-chillies-in-sauces-pickles-and-food-processing" }, { tag: "#GreenChilli", href: "/products/green-chili" }, { tag: "#DriedChillies", href: "/blog/storing-dried-chillies-to-protect-colour-and-prevent-mould" }],
        body: [
          {
            heading: "General reference storage conditions",
            text: "Fresh chillies are generally held in the same way as sweet peppers (USDA Agriculture Handbook 66, 2016). These are general figures; agree the conditions for each shipment with your supplier and logistics provider.",
            list: {
              items: [
                "About 7 °C with 90 to 95 per cent relative humidity",
                "A safe range of roughly 7 to 13 °C",
                "A storage life of about two to three weeks",
              ],
            },
          },
          {
            heading: "Avoid chilling",
            text: "Green fruit is more sensitive than coloured fruit, so green chillies should not be stored with produce that needs near-freezing temperatures; our guide to [building a mixed agricultural order](/blog/building-a-mixed-agricultural-order-from-india) explains which products can share a load. Below about 7 °C, peppers can suffer chilling injury:",
            list: {
              items: [
                "Pitting",
                "Water-soaked areas",
                "Darkening of the seed cavity",
                "Mould",
              ],
            },
          },
          {
            heading: "Warmth and moisture",
            text: "Warmth speeds ripening, softening and colour change, while trapped moisture encourages mould. Use ventilated packing, avoid sealed packs that hold condensation, and keep temperatures steady so that pods do not sweat.",
          },
          {
            heading: "Handle gently",
            text: "Bruised or broken pods spoil first and can affect the pods around them. Load and unload packs carefully and avoid crushing the lower layers. Our [illustrative case study on cold-chain planning for perishable vegetables](/case-studies/cold-chain-planning-for-perishable-vegetables) covers handling on the way.",
          },
          {
            heading: "Shelf life depends on conditions",
            text: "How long green chillies stay fresh depends on their condition at packing and on the storage and transit conditions, so there is no single figure. Inspect stock regularly against the [quality checks for green chillies](/blog/green-chilli-export-guide-pungency-length-and-freshness), remove soft or mouldy pods, and sell or use older stock first.",
          },
          {
            heading: "Conclusion",
            text: "Green chillies keep best at cool temperatures above the chilling range, in ventilated packing that does not trap moisture, and with gentle handling throughout. Agree the conditions for each shipment, inspect stock regularly, and sell or use older stock first.",
          },
          {
            heading: "Frequently asked questions",
            text: "Questions buyers ask about storing green chillies.",
            faq: [
              {
                question: "What temperature keeps green chillies fresh?",
                answer: "Green chillies are generally held at about 7 °C with 90 to 95 per cent relative humidity, within a safe range of roughly 7 to 13 °C.",
              },
              {
                question: "How long do green chillies last?",
                answer: "Typically about two to three weeks, but it depends on the pods' condition at packing and on storage and transit conditions.",
              },
              {
                question: "What are the signs of chilling injury in green chillies?",
                answer: "Pitting, water-soaked areas, darkening of the seed cavity and mould. Green fruit is more sensitive than coloured fruit.",
              },
              {
                question: "Why avoid sealed packs for green chillies?",
                answer: "Sealed packs hold condensation, and trapped moisture encourages mould. Ventilated packing is preferred.",
              },
              {
                question: "What happens if green chillies are kept too warm?",
                answer: "Warmth speeds ripening, softening and colour change.",
              },
            ],
          },
        ],
      },
      {
        topic: "Applications",
        title: "Green Chillies in Sauces, Pickles and Food Processing",
        description:
          "How fresh green chillies are used in sauces, pickles, pastes and food service, and what processors specify for pungency, stems and residue documents.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#GreenChilli", href: "/products/green-chili" }, { tag: "#ChilliSauce", href: "/case-studies/specifying-chilli-for-sauces-and-pastes" }, { tag: "#RedChilliPowder", href: "/products/red-chilli-powder" }],
        body: [
          {
            heading: "Sauces and chutneys",
            text: "Green chilli sauces and chutneys rely on fresh, bright pods for their colour and sharp heat. Producers usually want consistent pungency so that batches taste the same, and many test each new lot in a small batch.",
          },
          {
            heading: "Pickles and relishes",
            text: "Whole or slit green chillies are pickled in brine, oil or vinegar. Firm, freshly harvested pods hold their texture best through pickling.",
          },
          {
            heading: "Pastes and prepared foods",
            text: "Processors chop or paste green chillies for ready meals, marinades and seasonings; see our [illustrative case study on supplying paste manufacturers](/case-studies/onion-garlic-and-chilli-for-paste-manufacturers). Clean, firm pods with intact stems are easier to wash, de-stem and process at scale.",
          },
          {
            heading: "What processors specify",
            text: "For exports to the EU, residue results accompany Indian chilli consignments under the [EU import conditions for Indian chillies](/blog/green-chilli-export-guide-pungency-length-and-freshness), so processors there often ask for those results to be shared with each delivery. Processors usually agree:",
            list: {
              items: [
                "The variety or heat level",
                "Pod length",
                "Stems on or off",
                "Defect limits",
                "The residue documents they need",
              ],
            },
          },
          {
            heading: "Food service",
            text: "Restaurants and caterers use green chillies daily in curries, stir-fries and garnishes, and generally prefer even-sized pods that are quick to prepare.",
          },
          {
            heading: "Conclusion",
            text: "In sauces, pickles, pastes and food service, the value of fresh green chillies lies in consistent heat, firm pods and clean stems. Agree the variety or heat level, stem preference, defect limits and residue documents with your supplier, and test each new lot in a small batch.",
          },
          {
            heading: "Frequently asked questions",
            text: "Common questions from processors.",
            faq: [
              {
                question: "Do I need stems on or off?",
                answer: "Stems on helps pods [keep longer in transit](/blog/how-to-store-fresh-green-chillies-temperature-handling-and-shelf-life); stems off saves time on the line but shortens life. Many processors buy with stems on and remove them at the plant.",
              },
              {
                question: "Can green chillies be frozen for processing?",
                answer: "Yes, frozen chillies are traded. Note that the EU import conditions for Indian chillies cover fresh, chilled and frozen product alike.",
              },
              {
                question: "Why do sauce makers want consistent pungency?",
                answer: "So that batches taste the same. Many producers test each new lot in a small batch.",
              },
              {
                question: "Which chillies suit pickling?",
                answer: "Firm, freshly harvested pods, which hold their texture best when pickled whole or slit in brine, oil or vinegar.",
              },
              {
                question: "What do food-service kitchens prefer?",
                answer: "Even-sized green chillies that are quick to prepare for curries, stir-fries and garnishes.",
              },
            ],
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
          "What separates good frozen peas: uniform size, bright colour, free-flowing IQF pieces, few defects and tender texture, plus what to put on the specification.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#FrozenPeas", href: "/products/frozen-peas" }, { tag: "#IQFVegetables", href: "/case-studies/vegetables-for-frozen-vegetable-lines" }, { tag: "#ProduceQuality", href: "/blog?category=quality-and-sourcing" }],
      },
      {
        topic: "Storage",
        title: "Maintaining the Cold Chain for Frozen Peas",
        description:
          "Why frozen peas should stay at −18 °C or colder from plant to warehouse, how temperature swings damage texture, and where cold chains usually break.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#FrozenPeas", href: "/products/frozen-peas" }, { tag: "#ColdChain", href: "/case-studies/cold-chain-planning-for-perishable-vegetables" }, { tag: "#FrozenVegetables", href: "/blog/green-beans-for-retail-food-service-and-freezing" }],
      },
      {
        topic: "Applications",
        title: "Frozen Peas in Ready Meals, Food Service and Retail Packs",
        description:
          "How manufacturers, kitchens and retailers use frozen peas, the pack formats each channel needs, and why frozen vegetables are labelled to be cooked.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#FrozenPeas", href: "/products/frozen-peas" }, { tag: "#RetailPacks", href: "/case-studies/green-beans-and-okra-for-retail-packs" }, { tag: "#FrozenVegetables", href: "/case-studies/vegetables-for-frozen-vegetable-lines" }],
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
          "Why okra is picked young, how buyers check pod length and tenderness, and the EU residue checks and Indian traceability rules for okra exports.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#FreshOkra", href: "/products/okra" }, { tag: "#ResidueTesting", href: "/blog?category=export-guides" }, { tag: "#VegetableExports", href: "/case-studies/south-asian-vegetables-for-ethnic-grocery-importers" }],
      },
      {
        topic: "Storage",
        title: "Handling Okra Gently to Avoid Bruising and Browning",
        description:
          "Okra marks easily and is very chilling sensitive. USDA reference storage conditions and the packing and handling that keep pods green and firm in transit.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#Okra", href: "/products/okra" }, { tag: "#ProduceHandling", href: "/case-studies/green-beans-and-okra-for-retail-packs" }, { tag: "#OkraUses", href: "/blog/okra-in-curries-gumbo-and-frozen-food-lines" }],
      },
      {
        topic: "Applications",
        title: "Okra in Curries, Gumbo and Frozen Food Lines",
        description:
          "From bhindi masala to gumbo, how okra is used worldwide and what processors specify for pod size, maturity and speed to the plant when freezing it.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#Okra", href: "/products/okra" }, { tag: "#FrozenVegetables", href: "/blog/maintaining-the-cold-chain-for-frozen-peas" }, { tag: "#OkraRetailPacks", href: "/case-studies/green-beans-and-okra-for-retail-packs" }],
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
          "How to judge bitter gourd for export, from firmness, colour and ridges to seeds, and the EU plant-health conditions that apply to bitter gourd from India.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#BitterGourd", href: "/products/bitter-gourd" }, { tag: "#PlantHealth", href: "/blog?category=export-guides" }, { tag: "#BitterGourdChips", href: "/case-studies/bitter-gourd-for-chips-pickles-and-dried-slices" }],
      },
      {
        topic: "Storage",
        title: "Slowing Ripening: Storing Bitter Gourd for Shipment",
        description:
          "Bitter gourd keeps ripening after harvest. The cooling, packing and separation from ripening fruit that help it arrive green and firm.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#BitterGourd", href: "/products/bitter-gourd" }, { tag: "#RipeningControl", href: "/case-studies/cold-chain-planning-for-perishable-vegetables" }, { tag: "#BitterGourdUses", href: "/blog/bitter-gourd-in-asian-cooking-and-juices" }],
      },
      {
        topic: "Uses",
        title: "Bitter Gourd in Asian Cooking and Juices",
        description:
          "Where bitter gourd features in South, East and Southeast Asian cooking, juices and processed products, and what each type of buyer looks for.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#BitterGourd", href: "/products/bitter-gourd" }, { tag: "#Karela", href: "/blog/bitter-gourd-quality-ridges-colour-and-firmness" }, { tag: "#AsianCooking", href: "/case-studies/traditional-vegetables-for-restaurants-and-caterers" }],
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
          "Glossy skin, a green calyx and firm flesh: the quality markers buyers check on eggplant, and the EU plant-health statements eggplant exports need.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#Eggplant", href: "/products/eggplant" }, { tag: "#PlantHealth", href: "/blog?category=export-guides" }, { tag: "#GrilledEggplant", href: "/case-studies/eggplant-for-grilled-and-dip-products" }],
      },
      {
        topic: "Storage",
        title: "Protecting Eggplant from Chilling Injury in Transit",
        description:
          "Eggplant is damaged by cold and by ethylene. USDA reference storage conditions, chilling symptoms and the packing that prevents bruising and water loss.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#Eggplant", href: "/products/eggplant" }, { tag: "#ChillingInjury", href: "/blog/why-cucumbers-need-careful-temperature-control" }, { tag: "#ColdChain", href: "/case-studies/cold-chain-planning-for-perishable-vegetables" }],
      },
      {
        topic: "Buying Guide",
        title: "Round, Long and Baby Eggplant: Matching Variety to Market",
        description:
          "How round, long and small eggplant types differ in shape, skin and use, from bharta and grilling to stuffed dishes, and how to match type to market.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#EggplantVarieties", href: "/products/eggplant" }, { tag: "#SouthAsianVegetables", href: "/case-studies/south-asian-vegetables-for-ethnic-grocery-importers" }, { tag: "#FoodApplications", href: "/blog?category=food-applications" }],
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
          "What importers look for in moringa drumsticks, from even length and firm green pods to tender flesh, and the EU certificate and residue rules for India.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#Drumsticks", href: "/products/drumstick" }, { tag: "#MoringaPowder", href: "/products/moringa-powder" }, { tag: "#ResidueTesting", href: "/blog?category=export-guides" }],
      },
      {
        topic: "Storage",
        title: "Keeping Drumsticks Fresh from Farm to Market",
        description:
          "How cool, humid conditions, careful bundling and length-fitted cartons stop drumstick pods drying out, breaking and turning fibrous on the way to market.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#Drumsticks", href: "/products/drumstick" }, { tag: "#ProduceFreshness", href: "/blog/pre-cooling-green-beans-for-longer-freshness" }, { tag: "#DrumstickRecipes", href: "/blog/drumsticks-in-sambar-curries-and-frozen-packs" }],
      },
      {
        topic: "Uses",
        title: "Drumsticks in Sambar, Curries and Frozen Packs",
        description:
          "The South Asian dishes that feature drumsticks, how frozen cut drumsticks serve overseas markets, and what buyers specify for fresh and frozen packs.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#Drumsticks", href: "/products/drumstick" }, { tag: "#SouthAsianVegetables", href: "/case-studies/south-asian-vegetables-for-ethnic-grocery-importers" }, { tag: "#FrozenVegetables", href: "/case-studies/vegetables-for-frozen-vegetable-lines" }],
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
          "How buyers grade fresh green beans by snap, straightness, diameter and colour, and why yardlong beans from India face different EU import checks.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#GreenBeans", href: "/products/beans" }, { tag: "#FrenchBeans", href: "/case-studies/green-beans-and-okra-for-retail-packs" }, { tag: "#ProduceGrading", href: "/blog?category=quality-and-sourcing" }],
      },
      {
        topic: "Storage",
        title: "Pre-Cooling Green Beans for Longer Freshness",
        description:
          "Why removing field heat quickly matters for green beans, USDA reference storage conditions, chilling symptoms and how to hold the cool chain.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#GreenBeans", href: "/products/beans" }, { tag: "#PreCooling", href: "/blog/handling-okra-gently-to-avoid-bruising-and-browning" }, { tag: "#BeanUses", href: "/blog/green-beans-for-retail-food-service-and-freezing" }],
      },
      {
        topic: "Applications",
        title: "Green Beans for Retail, Food Service and Freezing",
        description:
          "How intended use shapes the bean grade and cut you should specify, whole, trimmed or cut, for retail packs, kitchens and freezing lines.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#GreenBeans", href: "/products/beans" }, { tag: "#FrozenVegetables", href: "/blog/okra-in-curries-gumbo-and-frozen-food-lines" }, { tag: "#FoodService", href: "/case-studies/fresh-vegetables-for-food-service-salad-lines" }],
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
        hashtags: [{ tag: "#FreshMangoes", href: "/products/mango" }, { tag: "#FruitPulp", href: "/case-studies/fruit-for-pulp-juice-and-nectar-processing" }, { tag: "#FruitRipening", href: "/case-studies/managing-ripeness-for-climacteric-fruit-in-transit" }],
      },
      {
        topic: "Quality",
        title: "Mango Export Quality: Treatment, Grading and Inspection",
        description:
          "Why many destinations require treatment and inspection for mangoes, and how fruit is graded by size and colour.",
        hashtags: [{ tag: "#FreshMangoes", href: "/products/mango" }, { tag: "#MangoRipening", href: "/blog/ripening-and-storing-mangoes-after-arrival" }, { tag: "#SeasonalFruit", href: "/case-studies/planning-seasonal-indian-fruit-purchases" }],
      },
      {
        topic: "Storage",
        title: "Ripening and Storing Mangoes After Arrival",
        description:
          "How to handle mangoes on arrival so they ripen evenly and reach shelves with full flavour.",
        hashtags: [{ tag: "#FreshMangoes", href: "/products/mango" }, { tag: "#MangoVarieties", href: "/blog/importing-indian-mangoes-varieties-ripeness-and-season" }, { tag: "#SeasonalFruit", href: "/case-studies/planning-seasonal-indian-fruit-purchases" }],
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
        hashtags: [{ tag: "#FreshBananas", href: "/products/banana" }, { tag: "#BananaVarieties", href: "/blog/cavendish-robusta-and-red-bananas-choosing-for-your-market" }, { tag: "#FruitRetail", href: "/case-studies/fresh-fruit-programme-for-supermarket-importers" }],
      },
      {
        topic: "Storage",
        title: "Green Shipping and Controlled Ripening for Bananas",
        description:
          "Why bananas travel green and are ripened at destination, and the temperatures that keep them on track.",
        hashtags: [{ tag: "#FreshBananas", href: "/products/banana" }, { tag: "#BananaVarieties", href: "/blog/cavendish-robusta-and-red-bananas-choosing-for-your-market" }, { tag: "#FruitExports", href: "/blog?category=export-guides" }],
      },
      {
        topic: "Market Guide",
        title: "Cavendish, Robusta and Red Bananas: Choosing for Your Market",
        description:
          "How common Indian banana types differ in taste, size and shelf life for retail and processing.",
        hashtags: [{ tag: "#FreshBananas", href: "/products/banana" }, { tag: "#BananaRipening", href: "/blog/green-shipping-and-controlled-ripening-for-bananas" }, { tag: "#FruitRipening", href: "/case-studies/managing-ripeness-for-climacteric-fruit-in-transit" }],
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
        hashtags: [{ tag: "#FreshGrapes", href: "/products/grapes" }, { tag: "#FruitRetail", href: "/case-studies/fresh-fruit-programme-for-supermarket-importers" }, { tag: "#SeasonalFruit", href: "/case-studies/planning-seasonal-indian-fruit-purchases" }],
      },
      {
        topic: "Storage",
        title: "Cold Storage and Packing That Keep Grapes Fresh",
        description:
          "How rapid pre-cooling, punnet packing and steady cold storage protect grapes over long voyages.",
        hashtags: [{ tag: "#FreshGrapes", href: "/products/grapes" }, { tag: "#SeedlessGrapes", href: "/blog/seedless-green-black-and-red-grapes-what-buyers-prefer" }, { tag: "#SeasonalFruit", href: "/case-studies/planning-seasonal-indian-fruit-purchases" }],
      },
      {
        topic: "Market Guide",
        title: "Seedless Green, Black and Red Grapes: What Buyers Prefer",
        description:
          "How grape varieties line up with different retail markets, and when the Indian export season runs.",
        hashtags: [{ tag: "#FreshGrapes", href: "/products/grapes" }, { tag: "#FruitRetail", href: "/case-studies/fresh-fruit-programme-for-supermarket-importers" }, { tag: "#FruitStorage", href: "/blog?category=storage-and-handling" }],
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
        hashtags: [{ tag: "#FreshPomegranates", href: "/products/pomegranate" }, { tag: "#PomegranateArils", href: "/case-studies/pomegranate-for-aril-and-juice-processors" }, { tag: "#FruitRetail", href: "/case-studies/fresh-fruit-programme-for-supermarket-importers" }],
      },
      {
        topic: "Storage",
        title: "Why Pomegranates Travel Well, and How to Keep Them Fresh",
        description:
          "Pomegranates store well under cool, humid conditions. The handling that prevents shrivelling and splits.",
        hashtags: [{ tag: "#FreshPomegranates", href: "/products/pomegranate" }, { tag: "#PomegranateUses", href: "/blog/pomegranates-for-fresh-retail-arils-and-juice" }, { tag: "#SeasonalFruit", href: "/case-studies/planning-seasonal-indian-fruit-purchases" }],
      },
      {
        topic: "Applications",
        title: "Pomegranates for Fresh Retail, Arils and Juice",
        description:
          "How fresh fruit, ready-to-eat arils and juice processors each look for different pomegranate qualities.",
        hashtags: [{ tag: "#FreshPomegranates", href: "/products/pomegranate" }, { tag: "#FruitRetail", href: "/case-studies/fresh-fruit-programme-for-supermarket-importers" }, { tag: "#SeasonalFruit", href: "/case-studies/planning-seasonal-indian-fruit-purchases" }],
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
        hashtags: [{ tag: "#FreshOranges", href: "/products/orange" }, { tag: "#OrangeJuice", href: "/case-studies/oranges-for-juicing-in-food-service" }, { tag: "#FruitPulp", href: "/case-studies/fruit-for-pulp-juice-and-nectar-processing" }],
      },
      {
        topic: "Storage",
        title: "Storing Oranges to Preserve Juiciness and Peel Quality",
        description:
          "The cool storage and ventilated packing that help oranges keep their firmness and fresh peel.",
        hashtags: [{ tag: "#FreshOranges", href: "/products/orange" }, { tag: "#OrangeUses", href: "/blog/oranges-for-the-fruit-bowl-juice-bars-and-processing" }, { tag: "#OrangeJuice", href: "/case-studies/oranges-for-juicing-in-food-service" }],
      },
      {
        topic: "Applications",
        title: "Oranges for the Fruit Bowl, Juice Bars and Processing",
        description:
          "How fresh retail, juicing and processing buyers each specify oranges differently.",
        hashtags: [{ tag: "#FreshOranges", href: "/products/orange" }, { tag: "#OrangeStorage", href: "/blog/storing-oranges-to-preserve-juiciness-and-peel-quality" }, { tag: "#FruitStorage", href: "/blog?category=storage-and-handling" }],
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
        hashtags: [{ tag: "#FreshChikoo", href: "/products/chikoo" }, { tag: "#FruitRipening", href: "/case-studies/managing-ripeness-for-climacteric-fruit-in-transit" }, { tag: "#SeasonalFruit", href: "/case-studies/planning-seasonal-indian-fruit-purchases" }],
      },
      {
        topic: "Storage",
        title: "Handling Chikoo: A Delicate Fruit That Ripens Fast",
        description:
          "The careful packing and cool storage that slow chikoo ripening and protect its soft skin.",
        hashtags: [{ tag: "#FreshChikoo", href: "/products/chikoo" }, { tag: "#SpecialityFruit", href: "/case-studies/speciality-fruits-for-ethnic-retail" }, { tag: "#SeasonalFruit", href: "/case-studies/planning-seasonal-indian-fruit-purchases" }],
      },
      {
        topic: "Uses",
        title: "Chikoo in Milkshakes, Desserts and Ice Cream",
        description:
          "Where chikoo's caramel-like sweetness is used, from fresh fruit to pulp for desserts and beverages.",
        hashtags: [{ tag: "#FreshChikoo", href: "/products/chikoo" }, { tag: "#FruitRipening", href: "/case-studies/managing-ripeness-for-climacteric-fruit-in-transit" }, { tag: "#FruitBuyingGuides", href: "/blog?category=product-guides" }],
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
        hashtags: [{ tag: "#FreshPapaya", href: "/products/papaya" }, { tag: "#FruitSmoothies", href: "/case-studies/tropical-fruit-for-smoothie-and-dessert-producers" }, { tag: "#FruitPulp", href: "/case-studies/fruit-for-pulp-juice-and-nectar-processing" }],
      },
      {
        topic: "Storage",
        title: "Shipping Papaya: Temperature, Ripening and Handling",
        description:
          "How steady storage temperatures and protective packing help papayas ripen evenly after arrival.",
        hashtags: [{ tag: "#FreshPapaya", href: "/products/papaya" }, { tag: "#PapayaUses", href: "/blog/papaya-for-fresh-retail-fruit-salads-and-pulp" }, { tag: "#FruitPulp", href: "/case-studies/fruit-for-pulp-juice-and-nectar-processing" }],
      },
      {
        topic: "Applications",
        title: "Papaya for Fresh Retail, Fruit Salads and Pulp",
        description:
          "From whole fruit to fresh-cut cups and pulp, how papaya is used and what each buyer specifies.",
        hashtags: [{ tag: "#FreshPapaya", href: "/products/papaya" }, { tag: "#PapayaShipping", href: "/blog/shipping-papaya-temperature-ripening-and-handling" }, { tag: "#FruitRipening", href: "/case-studies/managing-ripeness-for-climacteric-fruit-in-transit" }],
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
        hashtags: [{ tag: "#FreshGuava", href: "/products/guava" }, { tag: "#FruitPulp", href: "/case-studies/fruit-for-pulp-juice-and-nectar-processing" }, { tag: "#FruitSmoothies", href: "/case-studies/tropical-fruit-for-smoothie-and-dessert-producers" }],
      },
      {
        topic: "Storage",
        title: "Extending Guava Shelf Life with Careful Post-Harvest Care",
        description:
          "Guavas ripen quickly. The cool storage and gentle packing that keep them fresh for market.",
        hashtags: [{ tag: "#FreshGuava", href: "/products/guava" }, { tag: "#SpecialityFruit", href: "/case-studies/speciality-fruits-for-ethnic-retail" }, { tag: "#FruitSmoothies", href: "/case-studies/tropical-fruit-for-smoothie-and-dessert-producers" }],
      },
      {
        topic: "Applications",
        title: "Guava in Juices, Jams and Fresh Retail",
        description:
          "Why guava is a favourite for nectars, jellies and snacking, and what processors look for in pulp.",
        hashtags: [{ tag: "#FreshGuava", href: "/products/guava" }, { tag: "#GuavaShelfLife", href: "/blog/extending-guava-shelf-life-with-careful-post-harvest-care" }, { tag: "#SpecialityFruit", href: "/case-studies/speciality-fruits-for-ethnic-retail" }],
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
        updated: "2026-10-15",
        hashtags: [{ tag: "#WholeTurmeric", href: "/products/turmeric" }, { tag: "#TurmericPowder", href: "/products/turmeric-powder" }, { tag: "#InHouseGrinding", href: "/case-studies/whole-turmeric-for-in-house-grinding" }],
      },
      {
        topic: "Processing",
        title: "Boiling, Drying and Polishing: How Turmeric Is Cured",
        description:
          "The traditional curing steps that turn fresh rhizomes into hard, golden turmeric fingers ready for export.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#TurmericProcessing", href: "/products/turmeric" }, { tag: "#TurmericUses", href: "/blog/whole-turmeric-for-grinding-extraction-and-retail" }, { tag: "#SeasonalSpices", href: "/case-studies/planning-seasonal-whole-spice-purchases" }],
      },
      {
        topic: "Applications",
        title: "Whole Turmeric for Grinding, Extraction and Retail",
        description:
          "Why spice grinders, extract makers and retailers each look for different turmeric qualities.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#TurmericFingers", href: "/products/turmeric" }, { tag: "#TurmericPolish", href: "/case-studies/polished-or-unpolished-turmeric" }, { tag: "#TurmericColour", href: "/blog/turmeric-powder-in-spice-blends-food-colouring-and-beverages" }],
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
        updated: "2026-10-15",
        hashtags: [{ tag: "#DriedRedChilli", href: "/products/red-chilli" }, { tag: "#ChilliPowder", href: "/products/red-chilli-powder" }, { tag: "#ChilliSauces", href: "/case-studies/specifying-chilli-for-sauces-and-pastes" }],
      },
      {
        topic: "Market Guide",
        title: "Teja, Byadgi and Guntur: Understanding Indian Chilli Varieties",
        description:
          "How popular Indian chilli varieties differ in heat and colour, and which suits your product.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#IndianChilli", href: "/products/red-chilli" }, { tag: "#ChilliHeat", href: "/blog/understanding-asta-colour-and-shu-in-red-chilli-powder" }, { tag: "#SeasonalSpices", href: "/case-studies/planning-seasonal-whole-spice-purchases" }],
      },
      {
        topic: "Storage",
        title: "Storing Dried Chillies to Protect Colour and Prevent Mould",
        description:
          "Why dry, cool and dark storage keeps red chillies bright, and how moisture and light cause fading.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#RedChilliSupply", href: "/products/red-chilli" }, { tag: "#ChilliVarieties", href: "/blog/teja-byadgi-and-guntur-understanding-indian-chilli-varieties" }, { tag: "#ChilliPowder", href: "/products/red-chilli-powder" }],
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
        updated: "2026-10-15",
        hashtags: [{ tag: "#BlackPepper", href: "/products/black-pepper" }, { tag: "#GroundPepper", href: "/blog/ground-black-pepper-quality-aroma-grind-and-purity" }, { tag: "#BulkSpices", href: "/case-studies/defining-requirements-for-bulk-spice-procurement" }],
      },
      {
        topic: "Sourcing",
        title: "Malabar and Tellicherry: Indian Black Pepper Grades Explained",
        description:
          "What the classic Indian pepper names mean, and how berry size sets the grade buyers ask for.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#TellicherryPepper", href: "/products/black-pepper" }, { tag: "#PepperGrinding", href: "/blog/how-black-peppercorns-are-ground-without-losing-aroma" }, { tag: "#WholeOrGroundPepper", href: "/case-studies/choosing-whole-or-ground-pepper" }],
      },
      {
        topic: "Applications",
        title: "Black Pepper for Grinding, Seasoning Blends and Oleoresin",
        description:
          "How retail, seasoning and extraction buyers each specify black pepper for their process.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#BlackPepperSupply", href: "/products/black-pepper" }, { tag: "#PepperSeasoning", href: "/blog/black-pepper-powder-in-seasonings-meat-products-and-ready-meals" }, { tag: "#WhitePepper", href: "/products/white-pepper-powder" }],
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
        updated: "2026-10-15",
        hashtags: [{ tag: "#CuminSeeds", href: "/products/cumin-seeds" }, { tag: "#CuminUses", href: "/blog/cumin-in-spice-blends-ground-cumin-and-food-processing" }, { tag: "#BulkSpices", href: "/case-studies/defining-requirements-for-bulk-spice-procurement" }],
      },
      {
        topic: "Processing",
        title: "Machine Cleaning and Sortex: How Cumin Is Prepared for Export",
        description:
          "The cleaning, sorting and grading steps that take cumin from harvest to a uniform export lot.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#CuminCleaning", href: "/products/cumin-seeds" }, { tag: "#SeasonalSpices", href: "/case-studies/planning-seasonal-whole-spice-purchases" }, { tag: "#GroundCumin", href: "/blog/cumin-in-spice-blends-ground-cumin-and-food-processing" }],
      },
      {
        topic: "Applications",
        title: "Cumin in Spice Blends, Ground Cumin and Food Processing",
        description:
          "Where cumin is used — from curry powders to seasoning blends — and what each buyer specifies.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#CuminSourcing", href: "/products/cumin-seeds" }, { tag: "#CuminPurity", href: "/blog/cumin-seeds-export-guide-purity-colour-and-aroma" }, { tag: "#ChaatMasala", href: "/case-studies/amchur-for-tangy-seasoning-and-chaat-blends" }],
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
        updated: "2026-10-15",
        hashtags: [{ tag: "#CorianderSeeds", href: "/products/coriander-seeds" }, { tag: "#CorianderPowder", href: "/products/coriander-seeds-powder" }, { tag: "#TemperingSeeds", href: "/case-studies/whole-seeds-for-tempering-and-spice-mixes" }],
      },
      {
        topic: "Market Guide",
        title: "Eagle, Scooter and Badami: Coriander Grades Explained",
        description:
          "What the common coriander trade names mean and which grade suits grinding or whole-spice retail.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#CorianderGrades", href: "/products/coriander-seeds" }, { tag: "#SpiceMixes", href: "/blog/coriander-seeds-in-spice-mixes-pickling-and-brewing" }, { tag: "#SeasonalSpices", href: "/case-studies/planning-seasonal-whole-spice-purchases" }],
      },
      {
        topic: "Applications",
        title: "Coriander Seeds in Spice Mixes, Pickling and Brewing",
        description:
          "From garam masala to pickling spice, the many ways coriander seeds are used across food industries.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#CorianderUses", href: "/products/coriander-seeds" }, { tag: "#PicklingSpice", href: "/case-studies/whole-spices-for-pickle-manufacturing" }, { tag: "#CorianderPowder", href: "/products/coriander-seeds-powder" }],
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
        updated: "2026-10-15",
        hashtags: [{ tag: "#GreenCardamom", href: "/products/green-cardamom" }, { tag: "#ChaiMasala", href: "/case-studies/spiced-tea-masala-ingredients" }, { tag: "#GaramMasala", href: "/products/garam-masala" }],
      },
      {
        topic: "Storage",
        title: "Protecting Cardamom's Green Colour and Fragrance",
        description:
          "How airtight, light-proof packing and cool storage keep cardamom pods green and aromatic.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#CardamomStorage", href: "/products/green-cardamom" }, { tag: "#CardamomUses", href: "/blog/cardamom-in-tea-coffee-sweets-and-bakery" }, { tag: "#MouthFresheners", href: "/case-studies/fennel-and-cardamom-for-mouth-fresheners" }],
      },
      {
        topic: "Applications",
        title: "Cardamom in Tea, Coffee, Sweets and Bakery",
        description:
          "Where green cardamom is prized — from masala chai and Arabic coffee to desserts and baked goods.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#CardamomSourcing", href: "/products/green-cardamom" }, { tag: "#HouseGaramMasala", href: "/case-studies/matching-a-house-garam-masala-recipe" }, { tag: "#BakerySpices", href: "/case-studies/warm-spice-powders-for-bakery-and-confectionery" }],
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
        updated: "2026-10-15",
        hashtags: [{ tag: "#WholeCloves", href: "/products/cloves" }, { tag: "#ClovePowder", href: "/products/clove-powder" }, { tag: "#ClovePurity", href: "/blog/buying-clove-powder-aroma-colour-and-purity-checks" }],
      },
      {
        topic: "Storage",
        title: "Storing Cloves to Keep Their Aromatic Oils",
        description:
          "Why cloves should be kept airtight, cool and dry so their volatile oils and aroma last.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#CloveStorage", href: "/products/cloves" }, { tag: "#WholeOrGroundCloves", href: "/case-studies/whole-cloves-or-clove-powder" }, { tag: "#CloveUses", href: "/blog/cloves-in-spice-blends-baking-and-oil-extraction" }],
      },
      {
        topic: "Applications",
        title: "Cloves in Spice Blends, Baking and Oil Extraction",
        description:
          "From biryani masala to festive baking and clove oil, the industries that rely on whole cloves.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#CloveSourcing", href: "/products/cloves" }, { tag: "#GaramMasala", href: "/products/garam-masala" }, { tag: "#ClovePowder", href: "/products/clove-powder" }],
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
        updated: "2026-10-15",
        hashtags: [{ tag: "#CinnamonQuills", href: "/products/cinnamon" }, { tag: "#CinnamonUses", href: "/blog/cinnamon-in-bakery-beverages-and-spice-blends" }, { tag: "#BakerySpices", href: "/case-studies/warm-spice-powders-for-bakery-and-confectionery" }],
      },
      {
        topic: "Market Guide",
        title: "Cinnamon vs Cassia: Knowing What You Are Sourcing",
        description:
          "How true cinnamon and cassia differ in bark, flavour and use, and why the distinction matters to buyers.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#CinnamonSourcing", href: "/products/cinnamon" }, { tag: "#HouseGaramMasala", href: "/case-studies/matching-a-house-garam-masala-recipe" }, { tag: "#BakerySpices", href: "/case-studies/warm-spice-powders-for-bakery-and-confectionery" }],
      },
      {
        topic: "Applications",
        title: "Cinnamon in Bakery, Beverages and Spice Blends",
        description:
          "Where cinnamon sticks and ground cinnamon are used, from pastries and teas to masala blends.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#Cinnamon", href: "/products/cinnamon" }, { tag: "#CinnamonGrading", href: "/blog/buying-cinnamon-quills-thickness-and-aroma" }, { tag: "#CassiaOrCinnamon", href: "/case-studies/cinnamon-or-cassia-specifying-the-species" }],
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
        updated: "2026-10-15",
        hashtags: [{ tag: "#MustardSeeds", href: "/products/mustard-seeds" }, { tag: "#PicklingSpice", href: "/case-studies/whole-spices-for-pickle-manufacturing" }, { tag: "#TemperingSeeds", href: "/case-studies/whole-seeds-for-tempering-and-spice-mixes" }],
      },
      {
        topic: "Processing",
        title: "Cleaning and Grading Mustard Seeds for Export",
        description:
          "The sorting steps that remove dust, stones and immature seeds to produce a clean, uniform lot.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#MustardGrading", href: "/products/mustard-seeds" }, { tag: "#CondimentMustard", href: "/case-studies/mustard-seed-for-condiment-production" }, { tag: "#MustardUses", href: "/blog/mustard-seeds-for-tempering-pickles-and-condiments" }],
      },
      {
        topic: "Applications",
        title: "Mustard Seeds for Tempering, Pickles and Condiments",
        description:
          "From tadka and pickles to prepared mustard, the uses that shape which mustard seed to order.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#MustardSourcing", href: "/products/mustard-seeds" }, { tag: "#SeedCleaning", href: "/blog/cleaning-and-grading-mustard-seeds-for-export" }, { tag: "#TemperingSeeds", href: "/case-studies/whole-seeds-for-tempering-and-spice-mixes" }],
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
        updated: "2026-10-15",
        hashtags: [{ tag: "#FennelSeeds", href: "/products/fennel-seeds" }, { tag: "#FennelUses", href: "/blog/fennel-seeds-as-mouth-freshener-in-teas-and-baking" }, { tag: "#HerbalTeaSpices", href: "/case-studies/fennel-seeds-for-teas-and-baking" }],
      },
      {
        topic: "Storage",
        title: "Keeping Fennel Seeds Green and Fragrant in Storage",
        description:
          "Light and heat dull fennel's colour. The packing and storage that preserve its fresh aroma.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#FennelStorage", href: "/products/fennel-seeds" }, { tag: "#MouthFresheners", href: "/case-studies/fennel-and-cardamom-for-mouth-fresheners" }, { tag: "#SeedSpiceCleaning", href: "/case-studies/cleaning-standards-for-whole-seed-spices" }],
      },
      {
        topic: "Applications",
        title: "Fennel Seeds as Mouth Freshener, in Teas and Baking",
        description:
          "From mukhwas and herbal teas to sausages and breads, the many uses of fennel seeds.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#FennelSourcing", href: "/products/fennel-seeds" }, { tag: "#KeepingFennelGreen", href: "/blog/keeping-fennel-seeds-green-and-fragrant-in-storage" }, { tag: "#GreenCardamom", href: "/products/green-cardamom" }],
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
        updated: "2026-10-15",
        hashtags: [{ tag: "#FenugreekSeeds", href: "/products/fenugreek-seeds" }, { tag: "#MethiForCurry", href: "/case-studies/fenugreek-seeds-for-curry-powders-and-seasonings" }, { tag: "#TemperingSeeds", href: "/case-studies/whole-seeds-for-tempering-and-spice-mixes" }],
      },
      {
        topic: "Applications",
        title: "Fenugreek Seeds in Curry Powders, Pickles and Seasonings",
        description:
          "Where methi seeds earn their place — roasted and ground in masalas, whole in pickles and tempering, and in savoury seasonings.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#FenugreekUses", href: "/products/fenugreek-seeds" }, { tag: "#CurryPowder", href: "/case-studies/supplying-a-curry-powder-blender" }, { tag: "#FenugreekStorage", href: "/blog/storing-fenugreek-seeds-moisture-pests-and-aroma" }],
      },
      {
        topic: "Storage",
        title: "Storing Fenugreek Seeds: Moisture, Pests and Aroma",
        description:
          "Keeping whole fenugreek seeds dry, pest-free and aromatic in the warehouse and in transit.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#MethiSeeds", href: "/products/fenugreek-seeds" }, { tag: "#MethiInBlends", href: "/blog/fenugreek-seeds-in-curry-powders-pickles-and-seasonings" }, { tag: "#SeasonalSpices", href: "/case-studies/planning-seasonal-whole-spice-purchases" }],
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
        updated: "2026-10-15",
        hashtags: [{ tag: "#PsylliumSeed", href: "/products/psyllium-seed" }, { tag: "#Isabgol", href: "/blog/exporting-psyllium-seed-documentation-packing-and-labelling" }, { tag: "#PsylliumExport", href: "/case-studies/exporting-psyllium-seed-documents-and-packing" }],
      },
      {
        topic: "Processing",
        title: "From Psyllium Seed to Husk: How Whole Seed Is Processed",
        description:
          "How whole psyllium seed is cleaned, dehusked, sifted and graded into husk and husk powder for food and fibre applications.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#PsylliumHusk", href: "/products/psyllium-seed" }, { tag: "#PsylliumExport", href: "/case-studies/exporting-psyllium-seed-documents-and-packing" }, { tag: "#SeedSpiceCleaning", href: "/case-studies/cleaning-standards-for-whole-seed-spices" }],
      },
      {
        topic: "Export Guide",
        title: "Exporting Psyllium Seed: Documentation, Packing and Labelling",
        description:
          "Specifications, testing, moisture-safe packing and destination-market labelling rules for psyllium seed shipments.",
        updated: "2026-10-15",
        hashtags: [{ tag: "#IsabgolSupply", href: "/products/psyllium-seed" }, { tag: "#HuskProcessing", href: "/case-studies/sourcing-psyllium-seed-for-husk-processing" }, { tag: "#SeedSpiceCleaning", href: "/case-studies/cleaning-standards-for-whole-seed-spices" }],
      },
    ],
  },

  /* --- Articles without a product page ----------------------------------- */
  ginger: {
    name: "Ginger",
    image: photo("ginger.webp"),
    alt: "Fresh ginger root",
    art: "ginger",
    articles: [
      {
        topic: "Buying Guide",
        title: "Fresh and Dried Ginger: What Importers Should Check",
        description:
          "How importers judge fresh and dried ginger by skin, hand size, fibre, pungency and dryness, and why EU import controls differ for dried ginger from India.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#FreshGinger", href: "/blog/ginger-in-teas-sauces-bakery-and-beverages" }, { tag: "#DryGingerPowder", href: "/blog/dry-ginger-powder-quality-colour-pungency-and-fibre" }, { tag: "#ProduceImports", href: "/blog?category=export-guides" }],
      },
      {
        topic: "Storage",
        title: "Storing Ginger to Prevent Sprouting and Shrivelling",
        description:
          "USDA reference conditions that keep fresh ginger firm, why it must not be chilled below about 12 °C, and why dried ginger needs dry, clean storage.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#DryGinger", href: "/blog/from-rhizome-to-sonth-how-dry-ginger-powder-is-made" }, { tag: "#DryGingerPowder", href: "/products/dry-ginger-powder" }, { tag: "#GingerUses", href: "/blog/ginger-in-teas-sauces-bakery-and-beverages" }],
      },
      {
        topic: "Applications",
        title: "Ginger in Teas, Sauces, Bakery and Beverages",
        description:
          "Where fresh and dried ginger are used in teas, sauces, pastes, bakery and drinks, what each buyer looks for, and how to choose between the two forms.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#Ginger", href: "/blog/storing-ginger-to-prevent-sprouting-and-shrivelling" }, { tag: "#SpicedTea", href: "/case-studies/spiced-tea-masala-ingredients" }, { tag: "#GroundGinger", href: "/blog/dry-ginger-powder-quality-colour-pungency-and-fibre" }],
      },
    ],
  },
  "other-agricultural-products": {
    name: "Other Agricultural Products",
    image: photo("other-agricultural-products.webp"),
    alt: "An assortment of fresh agricultural produce",
    art: "field",
    articles: [
      {
        topic: "Buying Guide",
        title: "Building a Mixed Agricultural Order from India",
        description:
          "How to plan a consolidated order of several fresh products from India: compatible storage conditions, specifications, documents, packing and timing.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#MixedConsignment", href: "/case-studies/shipping-onions-garlic-and-elephant-yam" }, { tag: "#AgriculturalTrade", href: "/blog?category=export-guides" }, { tag: "#ProduceLogistics", href: "/case-studies/cold-chain-planning-for-perishable-vegetables" }],
      },
      {
        topic: "Sourcing",
        title: "Seasonality: Planning Fresh Produce Imports Around Harvests",
        description:
          "Why harvest calendars and export policy shape fresh produce availability and price, and how to plan purchases from India across the year.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#ProduceSeasonality", href: "/case-studies/planning-seasonal-whole-spice-purchases" }, { tag: "#OnionSupply", href: "/products/onion" }, { tag: "#SeasonalPlanning", href: "/case-studies/planning-seasonal-indian-fruit-purchases" }],
      },
      {
        topic: "Export Guide",
        title: "Phytosanitary Certificates and Export Documents for Fresh Produce",
        description:
          "The phytosanitary certificate, additional declarations, food-safety certificates and commercial documents that accompany fresh produce shipments from India.",
        updated: "2026-10-13",
        hashtags: [{ tag: "#PhytosanitaryCertificate", href: "/blog/fresh-onion-export-guide-quality-grading-storage-and-buyer-requirements" }, { tag: "#EUImportControls", href: "/blog/selecting-tender-okra-for-export-length-and-freshness" }, { tag: "#ProduceShipping", href: "/case-studies/shipping-onions-garlic-and-elephant-yam" }],
      },
    ],
  },
};

export function findProductBlog(slug: string) {
  return productBlogs[slug];
}
