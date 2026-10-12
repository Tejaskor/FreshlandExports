import type { CaseStudyEntry } from "@/features/case-studies/data";

/** Illustrative powder case studies: hypothetical buyer scenarios, no real customers or results. */
export const powderCaseStudies: readonly CaseStudyEntry[] = [
  {
    slug: "snack-seasoning-powders-for-savoury-coatings",
    status: "illustrative",
    categories: ["powders"],
    title: "Sourcing Powders for a Snack Seasoning Line",
    subtitle:
      "How a snack maker might specify onion, garlic, chilli and black pepper powders that flow, stick and colour evenly when tumbled onto chips, extruded snacks and nuts.",
    summary:
      "A hypothetical snack producer specifies flowable onion, garlic, red chilli and black pepper powders for topical seasonings, focusing on caking, particle size and colour.",
    industry: "Snack Manufacturing",
    topic: "Flowable powders for topical snack seasoning",
    products: ["onion-powder", "garlic-powder", "red-chilli-powder", "black-pepper-powder"],
    keywords: ["snack seasoning", "topical seasoning", "chips", "extruded snacks", "caking", "free-flowing"],
    intro: [
      "Topical snack seasonings are applied dry, usually by tumbling or dusting onto a freshly fried or baked base. Onion and garlic powder carry the savoury body, red chilli powder adds colour and heat, and ground black pepper brings bite. How each powder pours, spreads and sticks matters as much as how it tastes.",
      "This is a hypothetical scenario. It follows an imagined snack maker preparing a brief for these four powders and shows the points that tend to decide whether a seasoning runs smoothly on the line.",
    ],
    overview: {
      application: "Topical seasonings for chips, extruded snacks and coated nuts",
      focus: "Flow, caking resistance, particle size and colour consistency",
    },
    requirements: {
      intro: "For a topical seasoning, the buyer would typically set out:",
      items: [
        {
          title: "Particle size per powder",
          text: "A fineness that suits tumbling and adhesion, agreed for each powder so that no single ingredient settles out of the blend.",
        },
        {
          title: "Flow and caking",
          text: "Onion and garlic powder readily take up moisture from the air, so the buyer states that the powders must stay free-flowing in its plant conditions.",
        },
        {
          title: "Colour of the chilli component",
          text: "The shade of red the finished seasoning should show, described against a reference sample rather than in general words.",
        },
        {
          title: "Heat and pepper character",
          text: "The pungency the snack should carry, set by the buyer’s recipe, and the grind of black pepper that gives visible flecks or an even tone.",
        },
        {
          title: "Packing for a humid line",
          text: "Moisture-proof inner liners and pack sizes that can be emptied quickly once opened.",
        },
      ],
    },
    challenge: {
      intro:
        "In this scenario, we assume the snack maker has a working seasoning recipe but past ingredient lots have caused trouble on the line:",
      points: [
        "Onion and garlic powder arrived with soft lumps that had to be broken before dosing.",
        "The chilli component varied in shade, so finished packs looked different from one run to the next.",
        "Fine and coarse powders separated in the hopper, giving uneven flavour across a batch.",
      ],
    },
    approach: {
      intro: "A practical route to a seasoning specification that suits the line:",
      steps: [
        {
          title: "Describe the application method",
          text: "Tell the supplier whether the seasoning is tumbled, dusted or applied in oil slurry, since each needs a different fineness.",
        },
        {
          title: "Set particle size for each powder",
          text: "Agree a fineness for onion, garlic, chilli and pepper powder that keeps them mixed rather than layering in storage.",
        },
        {
          title: "Fix colour and heat with references",
          text: "Share a reference sample for the chilli powder’s colour and state the heat level the recipe is built around.",
        },
        {
          title: "Agree packing that limits moisture pick-up",
          text: "Choose sealed, lined packs in sizes that match how fast the line uses each powder.",
        },
        {
          title: "Trial samples on the actual line",
          text: "Run supplier samples through the seasoning drum and check coverage and flow before confirming the order.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of specifying for the line. These are typical benefits of good preparation, not measured results:",
      points: [
        "Seasoning powders that pour and dose more consistently through the shift.",
        "Snack colour that looks more alike from batch to batch.",
        "Less separation of fine and coarse ingredients within a blend.",
        "Fewer lots set aside for lump breaking or reworking.",
      ],
    },
    considerations: [
      {
        title: "Storage at the plant",
        text: "Keep opened sacks of onion and garlic powder closed between uses, as both absorb humidity and cake.",
      },
      {
        title: "Recipe ownership",
        text: "The seasoning ratio stays with the snack maker; the supplier only needs the specification for each single powder.",
      },
      {
        title: "Labelling",
        text: "Ingredient names and any allergen or origin statements follow the destination market’s rules, so confirm them with the specification.",
      },
    ],
    takeaways: [
      "In snack seasoning, how a powder flows matters as much as how it tastes.",
      "Matching fineness across powders keeps a blend from separating.",
      "Colour references for chilli powder keep finished packs looking the same.",
      "Trialling samples on the real line reveals flow problems a lab check can miss.",
    ],
    insights: [
      "garlic-powder-in-seasonings-snack-coatings-and-ready-meals",
      "keeping-onion-powder-free-flowing-in-storage-and-transit",
      "red-chilli-powder-buying-guide-colour-heat-and-grind",
    ],
  },
  {
    slug: "supplying-a-curry-powder-blender",
    status: "illustrative",
    categories: ["powders"],
    title: "Supplying Ground Spices to a Curry Powder Blender",
    subtitle:
      "A blend manufacturer buying turmeric, coriander and red chilli powder as base components, and comparing a ready garam masala, needs each powder to stay steady in colour and aroma between lots.",
    summary:
      "An illustrative curry powder blender sets out colour, aroma and fineness for ground turmeric, coriander and chilli, and decides how a ready garam masala fits its range.",
    industry: "Spice Blending",
    topic: "Base ground spices for curry powder blends",
    products: ["turmeric-powder", "coriander-seeds-powder", "red-chilli-powder", "garam-masala"],
    keywords: ["curry powder", "spice blend", "turmeric", "coriander", "chilli", "batch consistency"],
    intro: [
      "Most curry powders rest on a few base spices. Coriander gives body and a mild citrus warmth, turmeric gives the golden colour, and red chilli adds heat and red tones. Because these make up much of the blend, a change in any one of them shows up in the finished product.",
      "This is a hypothetical scenario about an imagined spice-blend manufacturer. It shows how such a buyer might write requirements for its base powders and decide whether a ready-made garam masala belongs in the range.",
    ],
    overview: {
      application: "Curry powders, masalas and blended spice ranges",
      focus: "Colour, aroma and lot-to-lot consistency of base components",
    },
    requirements: {
      intro: "For base components of a curry powder, the blender would usually specify:",
      items: [
        {
          title: "Turmeric colour",
          text: "The depth of golden yellow the blend relies on, judged against a reference sample the buyer keeps.",
        },
        {
          title: "Coriander aroma and shade",
          text: "A fresh, mild citrus aroma and a light greenish-brown to tan colour that suits the blend’s appearance.",
        },
        {
          title: "Chilli heat and colour",
          text: "The heat level and shade of red the recipe is designed around, stated by the buyer rather than left to the supplier.",
        },
        {
          title: "Matching fineness",
          text: "Similar particle sizes across the three powders so they mix evenly and do not separate in the pack.",
        },
        {
          title: "Garam masala composition",
          text: "If a ready garam masala is bought, the spices and proportions are agreed in writing, since recipes vary by brand.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the blender already sells a curry powder and has met these problems:",
      points: [
        "Turmeric lots of different depth have made the finished curry powder look paler or brighter.",
        "Coriander that has been left open has lost its citrus note before blending.",
        "Chilli powder bought on a general description has changed the blend’s heat.",
        "The team is unsure whether to buy garam masala ready-made or blend it in-house.",
      ],
    },
    approach: {
      intro: "A way to bring the base components under control:",
      steps: [
        {
          title: "Write a single-powder specification for each",
          text: "Record colour, aroma, fineness and moisture expectations separately for turmeric, coriander and chilli powder.",
        },
        {
          title: "Keep reference samples",
          text: "Retain an approved sample of each powder and judge every new lot against it before it goes into the blend.",
        },
        {
          title: "Keep the ratio in-house",
          text: "Share only what each component must be like; the blend formula stays with the manufacturer.",
        },
        {
          title: "Decide on garam masala",
          text: "Compare a supplier blend made to an agreed recipe with in-house blending, weighing control against handling.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits for the blender. These are typical benefits of clear specifications, not measured results:",
      points: [
        "Curry powder that looks and tastes more alike from batch to batch.",
        "Faster acceptance checks because each lot is compared with a known reference.",
        "A clear decision on whether garam masala is bought ready or blended.",
      ],
    },
    considerations: [
      {
        title: "Aroma loss after grinding",
        text: "Ground coriander and blended masalas lose aromatic oils faster than whole spices, so plan stock turnover.",
      },
      {
        title: "Turmeric labelling",
        text: "Any wording about turmeric on retail packs must follow destination-market rules; this scenario makes no health claims.",
      },
      {
        title: "Lot traceability",
        text: "Ask for lot identification on each pack so a blend can be traced back to its components.",
      },
    ],
    takeaways: [
      "Base spices dominate a curry powder, so small changes in them show up in the blend.",
      "A reference sample per component is the simplest consistency check.",
      "The blend ratio can stay confidential while components are fully specified.",
      "Buying garam masala ready-made is a choice about control as much as convenience.",
    ],
    insights: [
      "ground-coriander-in-curry-powders-masalas-and-bakery",
      "turmeric-powder-quality-colour-curcumin-and-purity",
      "sourcing-garam-masala-agreeing-a-blend-recipe-with-your-supplier",
    ],
  },
  {
    slug: "botanical-powders-for-herbal-tea-and-beverage-blends",
    status: "illustrative",
    categories: ["powders"],
    title: "Botanical Powders for Herbal Tea and Beverage Blends",
    subtitle:
      "A drink-mix or herbal-tea blender looking at moringa, dry ginger and turmeric powders needs them to disperse, taste right and be labelled within the rules of its market.",
    summary:
      "A hypothetical beverage blender specifies moringa, dry ginger and turmeric powders for drink mixes, focusing on fineness, dispersion, flavour and compliant labelling.",
    industry: "Beverages & Herbal Teas",
    topic: "Botanical powders in beverage and tea blends",
    products: ["moringa-powder", "dry-ginger-powder", "turmeric-powder"],
    keywords: ["herbal tea", "beverage mix", "moringa", "ginger", "turmeric", "dispersion", "labelling"],
    intro: [
      "In a drink, a powder is judged by how it disperses, how it feels in the mouth and how its flavour sits with the rest of the blend. Moringa brings a green, leafy note and colour, dry ginger a warm pungency, and turmeric an earthy taste and golden tone.",
      "This is an illustrative scenario. It follows a hypothetical beverage blender and makes no claims about health or nutrition; such wording depends entirely on the rules of the market where the drink is sold.",
    ],
    overview: {
      application: "Herbal tea blends, instant drink mixes and latte-style powders",
      focus: "Fineness, dispersion, flavour balance and label compliance",
    },
    requirements: {
      intro: "For botanical powders in a beverage, the blender would set out:",
      items: [
        {
          title: "Fineness for the format",
          text: "A finer grind for instant mixes that are stirred into liquid, and a grind suited to infusion where powders go into tea bags.",
        },
        {
          title: "Colour of moringa",
          text: "The shade of green the drink should show, judged against a reference sample.",
        },
        {
          title: "Ginger pungency",
          text: "How much warmth the recipe needs, remembering that drying makes ginger more concentrated than fresh.",
        },
        {
          title: "Turmeric colour and taste",
          text: "The golden tone the drink depends on and how much earthy flavour the blend can carry.",
        },
        {
          title: "Label wording",
          text: "Product names and any descriptive wording checked against the destination market’s food and claims rules.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the blender is developing a new drink and faces three open questions:",
      points: [
        "Early bench samples left a gritty sediment at the bottom of the cup.",
        "The moringa note overpowered the ginger in some trial batches.",
        "Marketing drafts used wellness wording that had not been checked against local rules.",
      ],
    },
    approach: {
      intro: "A stepwise way to settle the powders and the label:",
      steps: [
        {
          title: "Match fineness to the drink",
          text: "Agree the grind for each powder with the supplier based on whether it is dissolved, suspended or infused.",
        },
        {
          title: "Test dispersion in the real base",
          text: "Mix samples into the actual milk, water or tea base and look for clumps, floating powder and sediment.",
        },
        {
          title: "Balance flavours by trial",
          text: "Adjust the proportions of moringa, ginger and turmeric in-house until the taste is right.",
        },
        {
          title: "Review the label early",
          text: "Have product names and descriptions checked against the destination market’s rules before artwork is printed.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits for the blender. These are likely benefits of careful preparation, not measured results:",
      points: [
        "A drink that disperses more evenly with less sediment.",
        "A flavour balance set by the brand rather than by chance variation.",
        "Labels prepared within the market’s rules before launch.",
      ],
    },
    considerations: [
      {
        title: "No health claims by default",
        text: "Describe the powders as ingredients unless a claim is clearly permitted in the destination market.",
      },
      {
        title: "Moisture and light",
        text: "Powders for drinks should stay sealed and dry; moringa in particular is sensitive to light.",
      },
      {
        title: "Specification sheet per lot",
        text: "Ask for the specification of each lot so the blend can be checked against it.",
      },
    ],
    takeaways: [
      "In a drink, dispersion and mouthfeel are part of the specification.",
      "Grind should follow the format: dissolved, suspended or infused.",
      "Flavour balance is set by the blender through trials.",
      "Label wording for botanicals depends on market rules and is best checked early.",
    ],
    insights: [
      "moringa-powder-in-teas-smoothies-and-functional-foods",
      "turmeric-powder-in-spice-blends-food-colouring-and-beverages",
      "dry-ginger-powder-quality-colour-pungency-and-fibre",
    ],
  },
  {
    slug: "warm-spice-powders-for-bakery-and-confectionery",
    status: "illustrative",
    categories: ["powders", "spices"],
    title: "Warm Spice Powders for Bakery and Confectionery",
    subtitle:
      "A bakery ingredients buyer sourcing nutmeg, clove and dry ginger powder alongside cinnamon needs fine, aromatic spices that spread evenly through doughs and batters.",
    summary:
      "An illustrative bakery buyer specifies nutmeg, clove and ginger powder plus cinnamon for spice cakes, biscuits and gingerbread, with a focus on aroma, fineness and packing.",
    industry: "Bakery & Confectionery",
    topic: "Warm spices for baked goods",
    products: ["nutmeg-powder", "clove-powder", "dry-ginger-powder", "cinnamon"],
    keywords: ["bakery", "gingerbread", "spice cake", "biscuits", "nutmeg", "cloves", "cinnamon"],
    intro: [
      "Nutmeg, clove, ginger and cinnamon are the classic warm spices of seasonal bakes. They are used in small amounts, so a fine, even grind helps the flavour spread through the dough, and their aromatic oils need protecting from air, heat and light.",
      "This is a hypothetical scenario. It follows an imagined bakery ingredients buyer and shows how its requirements for these four spices might be set out.",
    ],
    overview: {
      application: "Spice cakes, biscuits, gingerbread and seasonal confectionery",
      focus: "Aroma retention, fine grind and protective packing",
    },
    requirements: {
      intro: "For warm spices in bakery, the buyer would usually define:",
      items: [
        {
          title: "Fine, even grind",
          text: "A fineness that disperses through batters and doughs without leaving dark specks, agreed for each spice.",
        },
        {
          title: "Aroma on arrival",
          text: "A fresh, characteristic aroma for each spice, checked against a reference sample when the lot arrives.",
        },
        {
          title: "Colour in light bakes",
          text: "Dry ginger powder is pale, while clove powder is dark reddish brown; the buyer notes where colour matters.",
        },
        {
          title: "Form of cinnamon",
          text: "Whether cinnamon is wanted as quills for in-house grinding or as a ground spice, and which species or grade.",
        },
        {
          title: "Protective packing",
          text: "Airtight, light-protective packs that hold the volatile oils until the spice is used.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the bakery is preparing for a seasonal range and has noticed:",
      points: [
        "Spice stock held over from the previous season tasted flat.",
        "Clove powder left dark flecks in a pale biscuit dough.",
        "Cinnamon was ordered without stating species or grade, so samples differed.",
      ],
    },
    approach: {
      intro: "A simple route to dependable warm spices:",
      steps: [
        {
          title: "Agree fineness per spice",
          text: "State a fine grind for nutmeg, clove and ginger powders suited to the bakery’s mixing method.",
        },
        {
          title: "Name the cinnamon",
          text: "Confirm species, grade and form of cinnamon in the enquiry, since this page’s product is quills and bark.",
        },
        {
          title: "Specify airtight packing",
          text: "Ask for sealed, lined packs sized to be used soon after opening.",
        },
        {
          title: "Plan stock rotation",
          text: "Order close to the seasonal production window and use older stock first.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits for the bakery. These are typical benefits of good preparation, not measured results:",
      points: [
        "Seasonal bakes with a fuller, more consistent spice aroma.",
        "Fewer visible specks in light-coloured products.",
        "Cinnamon samples that match what the recipe was built on.",
      ],
    },
    considerations: [
      {
        title: "Small doses, strong effect",
        text: "Clove and nutmeg are strong, so a small change in lot strength is noticeable; keep a reference sample.",
      },
      {
        title: "Opened packs",
        text: "Reseal opened packs and keep them cool and dry, away from ovens and direct light.",
      },
      {
        title: "Cinnamon and cassia",
        text: "Be clear which product the recipe needs, as cinnamon and cassia are traded separately.",
      },
    ],
    takeaways: [
      "Warm spices are used sparingly, so their aroma and fineness carry the flavour.",
      "Packing and stock rotation protect volatile oils better than larger orders.",
      "Cinnamon needs a species, grade and form named in the enquiry.",
      "Colour matters in light bakes: pale ginger behaves differently from dark clove.",
    ],
    insights: [
      "nutmeg-powder-in-bakery-dairy-and-beverage-production",
      "using-clove-powder-in-meat-sauce-and-bakery-production",
      "cinnamon-in-bakery-beverages-and-spice-blends",
    ],
  },
  {
    slug: "white-pepper-and-allium-powders-for-pale-sauces",
    status: "illustrative",
    categories: ["powders"],
    title: "White Pepper, Onion and Garlic Powders for Pale Sauces",
    subtitle:
      "A sauce and soup producer making cream sauces, dressings and white soups needs seasoning powders that add flavour without dark specks or off-colours.",
    summary:
      "A hypothetical sauce maker specifies white pepper, onion and garlic powders for cream sauces and pale soups, focusing on colour, fineness and visible specks.",
    industry: "Sauces & Soups",
    topic: "Speck-free seasoning for pale sauces",
    products: ["white-pepper-powder", "onion-powder", "garlic-powder"],
    keywords: ["white sauce", "cream soup", "dressing", "white pepper", "specks", "pale colour"],
    intro: [
      "White pepper is chosen precisely because it gives pepper heat without the dark flecks of black pepper. In a béchamel, a cream soup or a pale dressing, onion and garlic powder need the same care: their colour and fineness decide whether the finished product looks clean.",
      "This is an illustrative scenario about a hypothetical sauce and soup producer, showing how appearance can be written into a seasoning specification.",
    ],
    overview: {
      application: "Cream sauces, white soups, dressings and pale prepared foods",
      focus: "Colour, fineness and absence of visible specks",
    },
    requirements: {
      intro: "For seasoning pale products, the producer would typically specify:",
      items: [
        {
          title: "White pepper colour",
          text: "An off-white to pale cream powder with no dark flecks, judged against a reference sample.",
        },
        {
          title: "Onion and garlic shade",
          text: "Off-white to creamy powders whose colour suits the sauce, since drying can affect their shade.",
        },
        {
          title: "Fineness",
          text: "A fine grind that disappears into the sauce rather than showing as grains.",
        },
        {
          title: "Speck checks",
          text: "How visible particles will be checked, for example by dispersing a sample in water or a white base.",
        },
        {
          title: "Moisture-proof packing",
          text: "Sealed packs, since damp and light can dull white pepper and make onion and garlic powders cake.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the producer’s quality team has raised these issues:",
      points: [
        "Some batches of white sauce showed small dark points traced to the seasoning.",
        "Garlic powder lots of different shades slightly changed the sauce colour.",
        "Caked onion powder formed small lumps that did not dissolve during cooking.",
      ],
    },
    approach: {
      intro: "Steps to bring appearance into the specification:",
      steps: [
        {
          title: "Write appearance into each powder spec",
          text: "Add colour, fineness and speck expectations alongside flavour for all three powders.",
        },
        {
          title: "Agree a speck test",
          text: "Decide with the supplier how samples will be viewed, such as spread on a white surface or mixed into a test sauce.",
        },
        {
          title: "Trial in the actual sauce",
          text: "Cook small batches with supplier samples and inspect them under the plant’s normal lighting.",
        },
        {
          title: "Confirm packing and storage",
          text: "Choose sealed packs and keep opened stock in a dry area to prevent lumps.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits for the producer. These are anticipated benefits of a clear specification, not measured results:",
      points: [
        "Pale sauces and soups that look cleaner and more uniform.",
        "Fewer quality holds for visible marks in finished product.",
        "Seasoning lots that can be accepted by a quick visual check against references.",
      ],
    },
    considerations: [
      {
        title: "Flavour difference",
        text: "White pepper has a cleaner, earthier heat with less top-note than black pepper; adjust recipes accordingly.",
      },
      {
        title: "Aroma retention",
        text: "Ground white pepper loses aroma faster than whole berries, so order in line with production.",
      },
      {
        title: "Ingredient declarations",
        text: "Label names for the powders follow the destination market’s rules, so confirm them before printing.",
      },
    ],
    takeaways: [
      "In pale products, appearance is part of the seasoning specification.",
      "White pepper avoids dark specks, but onion and garlic colour matters too.",
      "A shared method for checking specks makes acceptance easier.",
      "Dry storage prevents lumps that show up in smooth sauces.",
    ],
    insights: [
      "using-white-pepper-powder-in-sauces-soups-and-seasonings",
      "onion-powder-in-seasonings-sauces-and-ready-meals",
      "garlic-powder-buying-guide-colour-aroma-and-free-flowing-texture",
    ],
  },
  {
    slug: "amchur-for-tangy-seasoning-and-chaat-blends",
    status: "illustrative",
    categories: ["powders", "spices"],
    title: "Dry Mango Powder for Tangy Seasonings and Chaat-Style Blends",
    subtitle:
      "A seasoning company using amchur as a dry souring agent, alongside ground black pepper and cumin, needs steady sourness and a powder that does not clump in the blend.",
    summary:
      "An illustrative seasoning maker specifies dry mango powder for chaat-style mixes and snack seasonings, pairing it with black pepper powder and cumin seeds.",
    industry: "Seasoning Blends",
    topic: "Amchur as a dry souring agent in blends",
    products: ["dry-mango-powder", "black-pepper-powder", "cumin-seeds"],
    keywords: ["amchur", "chaat masala", "souring agent", "snack seasoning", "cumin", "black pepper"],
    intro: [
      "Dry mango powder, or amchur, is made from unripe green mangoes that are sliced, dried and ground. It gives a sharp, fruity sourness without adding moisture, which is why it appears in chaat masala, tandoori blends and tangy snack seasonings. Ground black pepper and cumin are its usual partners.",
      "This is a hypothetical scenario. It follows an imagined seasoning company building a chaat-style blend and shows the points it would agree with a supplier.",
    ],
    overview: {
      application: "Chaat-style masalas, tangy snack seasonings and instant mixes",
      focus: "Sourness, moisture pick-up and pairing with pepper and cumin",
    },
    requirements: {
      intro: "For a tangy blend built on amchur, the company would set out:",
      items: [
        {
          title: "Sourness of the amchur",
          text: "The level of tang the recipe needs, with acidity agreed as part of the quotation.",
        },
        {
          title: "Moisture and flow",
          text: "Amchur absorbs humidity easily, so the buyer states that it must arrive dry and free of lumps.",
        },
        {
          title: "Black pepper grind",
          text: "A fineness for the pepper powder that matches the amchur so the blend stays mixed.",
        },
        {
          title: "Cumin form",
          text: "Whether cumin is bought as whole, machine-cleaned seeds for roasting and grinding in-house, as many chaat recipes call for.",
        },
        {
          title: "Packing",
          text: "Moisture-proof liners for the powders and suitable bags for the whole seeds.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the company’s existing blend has shown these weaknesses:",
      points: [
        "Some lots of the blend tasted noticeably less tangy than others.",
        "Amchur formed hard lumps after a humid storage period.",
        "Ground cumin bought separately lost its aroma before blending.",
      ],
    },
    approach: {
      intro: "A way to steady the blend through its ingredients:",
      steps: [
        {
          title: "Agree amchur acidity and moisture",
          text: "Ask for these parameters to be stated with each quotation and compare them with the recipe’s needs.",
        },
        {
          title: "Buy cumin whole",
          text: "Source whole cumin seeds and roast or grind them close to blending to keep their aroma.",
        },
        {
          title: "Match pepper fineness",
          text: "Specify a black pepper grind close to the amchur and other powders in the blend.",
        },
        {
          title: "Pack and store against humidity",
          text: "Use sealed, lined packs and keep opened amchur closed in a dry store.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits for the seasoning company. These are typical benefits of good preparation, not measured results:",
      points: [
        "A more even level of tang across production lots.",
        "Fewer lumps when amchur is weighed into the mixer.",
        "Fresher cumin aroma in the finished seasoning.",
      ],
    },
    considerations: [
      {
        title: "Tang fades with exposure",
        text: "Amchur can lose its tang as well as clump if left open, so plan quantities around use.",
      },
      {
        title: "Cumin cleaning",
        text: "Whole cumin is machine-cleaned, with sortex cleaning available on request; state which the blend needs.",
      },
      {
        title: "Recipe stays with the buyer",
        text: "Blend proportions remain the company’s own; only the single ingredients are specified.",
      },
    ],
    takeaways: [
      "Amchur gives sourness without moisture, but it must be kept dry to stay useful.",
      "Agreeing acidity up front helps keep the blend’s tang steady.",
      "Whole cumin ground close to use keeps more aroma.",
      "Matching fineness across powders stops a blend from separating.",
    ],
    insights: [
      "dry-mango-powder-amchur-in-chaat-masala-chutneys-and-snacks",
      "cumin-in-spice-blends-ground-cumin-and-food-processing",
      "black-pepper-powder-in-seasonings-meat-products-and-ready-meals",
    ],
  },
  {
    slug: "ground-spices-for-ready-meal-production",
    status: "illustrative",
    categories: ["powders", "agricultural"],
    title: "Ground Spices and Onions for Ready-Meal Production",
    subtitle:
      "A curry ready-meal maker sourcing garam masala, coriander powder, garlic powder and fresh onions for its base gravy needs every production run to taste the same.",
    summary:
      "A hypothetical ready-meal manufacturer sets out requirements for garam masala, ground coriander, garlic powder and fresh onions so its curry base gravy stays consistent.",
    industry: "Ready Meals",
    topic: "Consistent ingredients for curry base gravies",
    products: ["garam-masala", "coriander-seeds-powder", "garlic-powder", "onion"],
    keywords: ["ready meals", "curry", "base gravy", "garam masala", "fresh onion", "production"],
    intro: [
      "Many curry ready meals start from a shared base gravy of cooked onions and spices. Fresh onions give body and sweetness, garlic powder a savoury depth, ground coriander a mild warmth, and garam masala the finishing aroma. Because one gravy feeds several products, consistency matters.",
      "This is an illustrative scenario. It describes a hypothetical ready-meal maker whose recipe is fixed in-house and shows how its ingredient requirements might be written.",
    ],
    overview: {
      application: "Chilled and frozen curry ready meals built on a base gravy",
      focus: "Consistency across production runs, with the recipe set by the buyer",
    },
    requirements: {
      intro: "For a base gravy, the manufacturer would usually define:",
      items: [
        {
          title: "Garam masala composition",
          text: "The spices and proportions in writing, so every delivery is blended to the same agreed recipe.",
        },
        {
          title: "Coriander powder character",
          text: "A mild, fresh aroma and a fineness that cooks into the gravy without grittiness.",
        },
        {
          title: "Garlic powder flow",
          text: "A dry, free-flowing powder that doses accurately by weight on the production line.",
        },
        {
          title: "Onion type and size",
          text: "Red, pink or white onions as the recipe prefers, sorted to a stated size range that suits the peeling and chopping equipment.",
        },
        {
          title: "Onion condition and packing",
          text: "Firm bulbs with dry outer skins, in breathable bags that let air move around them.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the manufacturer is scaling up and has met these issues:",
      points: [
        "Different garam masala deliveries smelled different because no composition had been agreed.",
        "Onions arrived in mixed sizes, slowing the preparation line.",
        "Some onion bags showed sprouting after being stored in a damp area.",
        "Garlic powder had caked in an opened sack near the cooking area.",
      ],
    },
    approach: {
      intro: "A structured route to steadier ingredients:",
      steps: [
        {
          title: "Agree the garam masala recipe",
          text: "Share the composition or a reference sample and confirm the blend is prepared to it for each order.",
        },
        {
          title: "Specify each powder separately",
          text: "Record aroma, fineness and moisture expectations for coriander and garlic powder.",
        },
        {
          title: "Set onion requirements",
          text: "State type, size range and packing for fresh onions and confirm availability by season.",
        },
        {
          title: "Plan storage on site",
          text: "Keep onions cool, dry and ventilated, and keep powders sealed away from steam and heat.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits for the ready-meal maker. These are expected benefits of clear requirements, not measured results:",
      points: [
        "A base gravy with more consistent flavour and colour across runs.",
        "Smoother onion preparation with bulbs of a predictable size.",
        "Less waste from sprouting onions or caked powder.",
      ],
    },
    considerations: [
      {
        title: "Seasonal onion supply",
        text: "Onion type availability varies with the season, so confirm what can be supplied for each order.",
      },
      {
        title: "Recipe confidentiality",
        text: "The gravy recipe stays with the manufacturer; the supplier needs only the garam masala composition it blends.",
      },
      {
        title: "Aroma of blended spices",
        text: "Garam masala loses aromatic oils faster than whole spices, so match deliveries to production plans.",
      },
    ],
    takeaways: [
      "One base gravy feeds many products, so its ingredients need tight specifications.",
      "An agreed garam masala recipe removes a major source of variation.",
      "Fresh onions need size, type and ventilated packing stated up front.",
      "Storage on site protects both bulbs and powders.",
    ],
    insights: [
      "how-food-makers-use-garam-masala-in-curries-rice-and-marinades",
      "garlic-powder-in-seasonings-snack-coatings-and-ready-meals",
      "fresh-onion-export-guide-quality-grading-storage-and-buyer-requirements",
    ],
  },
  {
    slug: "matching-a-house-garam-masala-recipe",
    status: "illustrative",
    categories: ["powders", "spices"],
    title: "Matching a House Garam Masala Recipe",
    subtitle:
      "A food brand with its own garam masala recipe must decide whether to have the blend prepared to that recipe or buy cardamom, cloves and cinnamon whole and blend in-house.",
    summary:
      "An illustrative food brand weighs a garam masala made to its own recipe against blending whole cardamom, cloves and cinnamon itself, with recipe confidentiality in mind.",
    industry: "Spice Blending",
    topic: "House garam masala: blended or whole spices",
    products: ["garam-masala", "green-cardamom", "cloves", "cinnamon"],
    keywords: ["garam masala", "house blend", "recipe", "cardamom", "cloves", "cinnamon", "whole spices"],
    intro: [
      "Garam masala recipes vary by region and brand. Typical blends draw on spices such as cumin, coriander, black pepper, cloves, cinnamon and green cardamom, and it is often the warm notes of cardamom, clove and cinnamon that make a house blend recognisable.",
      "This is a hypothetical scenario. It follows an imagined food brand deciding how to source its own garam masala and shows the questions such a buyer might work through.",
    ],
    overview: {
      application: "A branded garam masala and dishes that use it",
      focus: "Recipe matching, confidentiality and whole versus blended supply",
    },
    requirements: {
      intro: "To match a house recipe, the brand would set out:",
      items: [
        {
          title: "Reference sample",
          text: "A retained sample of the house blend that the supplier’s preparation is compared with.",
        },
        {
          title: "Composition or target profile",
          text: "Either the full recipe under agreed confidentiality terms or the aroma profile the blend must reach.",
        },
        {
          title: "Cardamom grade",
          text: "If buying whole, the pod size, colour and grade of green cardamom, which is a different spice from black cardamom.",
        },
        {
          title: "Clove and cinnamon details",
          text: "The grade of whole cloves and the species, grade and form of cinnamon the recipe was built on.",
        },
        {
          title: "Packing to hold aroma",
          text: "Airtight packs for the blend, and whole spices kept sealed and away from heat and light.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the brand has blended in small batches until now and faces:",
      points: [
        "Growing volumes that make in-house grinding harder to manage.",
        "Concern about sharing a recipe that sets its product apart.",
        "Uncertainty about whether a supplier blend would match the house aroma.",
      ],
    },
    approach: {
      intro: "A careful way to choose a route:",
      steps: [
        {
          title: "Agree confidentiality first",
          text: "Set terms for handling the recipe before any composition is shared.",
        },
        {
          title: "Trial a blend against the reference",
          text: "Ask for a sample blended to the agreed recipe and compare it side by side with the house reference.",
        },
        {
          title: "Price whole-spice supply in parallel",
          text: "Request whole cardamom, cloves and cinnamon so in-house blending can be compared on control and handling.",
        },
        {
          title: "Fix the chosen route in writing",
          text: "Record the recipe or whole-spice grades so every future lot follows the same basis.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits for the brand. These are typical benefits of the process, not measured results:",
      points: [
        "A sourcing route chosen on evidence from side-by-side samples.",
        "A house aroma protected by a retained reference and written specification.",
        "Recipe handling agreed before any details are shared.",
      ],
    },
    considerations: [
      {
        title: "Whole spices keep longer",
        text: "Whole cardamom, cloves and cinnamon hold their oils longer than a ground blend, which suits in-house grinding.",
      },
      {
        title: "Blended supply saves steps",
        text: "A ready blend removes grinding and mixing at the brand’s site but depends on an agreed recipe.",
      },
      {
        title: "Cinnamon identity",
        text: "Name the species and grade, as cinnamon and cassia give different results.",
      },
    ],
    takeaways: [
      "A house garam masala needs a reference sample before anything else.",
      "Confidentiality should be agreed before the recipe is shared.",
      "Whole spices give control; a ready blend saves handling.",
      "Writing down grades or composition keeps future lots on the same basis.",
    ],
    insights: [
      "sourcing-garam-masala-agreeing-a-blend-recipe-with-your-supplier",
      "green-cardamom-grading-pod-size-colour-and-aroma",
      "cinnamon-vs-cassia-knowing-what-you-are-sourcing",
    ],
  },
  {
    slug: "private-label-ground-spice-range",
    status: "illustrative",
    categories: ["powders"],
    title: "Planning a Private-Label Ground Spice Range",
    subtitle:
      "A retailer or distributor launching its own jars of black pepper, white pepper, nutmeg and coriander powder must plan pack formats, labels and consistency before the first order.",
    summary:
      "A hypothetical retailer plans a private-label range of ground black pepper, white pepper, nutmeg and coriander, covering pack formats, labelling, artwork and shelf consistency.",
    industry: "Private-Label Retail",
    topic: "Private-label ground spice jars",
    products: ["black-pepper-powder", "white-pepper-powder", "nutmeg-powder", "coriander-seeds-powder"],
    keywords: ["private label", "retail jars", "repacking", "labelling", "artwork", "ground spices"],
    intro: [
      "A private-label spice range puts several ground spices under one brand. Shoppers compare jars on the shelf, so the pepper should look like pepper every time, the white pepper should stay pale, and nutmeg and coriander should smell fresh when opened.",
      "This is an illustrative scenario. It follows a hypothetical retailer planning a first range and shows the decisions that usually come before an order is placed.",
    ],
    overview: {
      application: "Retail jars and refill packs of ground spices",
      focus: "Pack format, labelling, artwork and shelf consistency",
    },
    requirements: {
      intro: "For a private-label range, the retailer would usually decide:",
      items: [
        {
          title: "Bulk or consumer packs",
          text: "Whether spices arrive in bulk for local repacking into jars or in consumer packs, which changes packing and label needs.",
        },
        {
          title: "Grind for each spice",
          text: "A fine or coarse black pepper grind, a fine white pepper, and a fineness for nutmeg and coriander that suits home use.",
        },
        {
          title: "Colour and aroma references",
          text: "Approved samples for each spice so jars look alike from one delivery to the next.",
        },
        {
          title: "Label content",
          text: "Product names, ingredient and origin wording, and lot coding as required by the market where the jars are sold.",
        },
        {
          title: "Artwork responsibility",
          text: "Who designs, approves and supplies artwork if consumer packs are printed for the brand.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the retailer has chosen the four spices but has not yet settled:",
      points: [
        "Whether to repack locally or receive finished consumer packs.",
        "Which label details its market requires for each spice.",
        "How to keep colour and aroma consistent between orders for a shelf range.",
      ],
    },
    approach: {
      intro: "A logical order for planning the range:",
      steps: [
        {
          title: "Choose the pack route",
          text: "Compare bulk supply plus local repacking with consumer-ready packs, considering equipment and lead time.",
        },
        {
          title: "Specify each spice",
          text: "Agree grind, colour and aroma for all four spices against approved samples.",
        },
        {
          title: "Collect label requirements",
          text: "List market-required wording for each jar and confirm which details the supplier provides.",
        },
        {
          title: "Approve artwork and proofs",
          text: "If consumer packs are printed, sign off artwork and proofs before production.",
        },
        {
          title: "Review the first delivery",
          text: "Check jars side by side against references when the first lot arrives.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits for the retailer. These are likely benefits of planning, not measured results:",
      points: [
        "A shelf range where jars look consistent beside each other.",
        "Labels that are checked against market rules before printing.",
        "A clear split of responsibilities between retailer and supplier.",
      ],
    },
    considerations: [
      {
        title: "Aroma in small jars",
        text: "Ground spices lose aroma faster than whole ones, so plan stock so jars reach shelves fresh.",
      },
      {
        title: "Nutmeg dosing",
        text: "Nutmeg is used in small amounts, so jar size can be smaller than for pepper or coriander.",
      },
      {
        title: "Lot coding",
        text: "Make sure lot codes on jars can be traced back to supplier lots.",
      },
    ],
    takeaways: [
      "Private-label spices are judged side by side, so consistency is visible.",
      "The bulk-or-consumer-pack decision shapes everything that follows.",
      "Label wording depends on the market where jars are sold.",
      "Reference samples keep each spice looking the same across orders.",
    ],
    insights: [
      "ground-black-pepper-quality-aroma-grind-and-purity",
      "importing-white-pepper-powder-specifications-and-packing",
      "coriander-seeds-powder-export-guide-colour-aroma-and-packing",
    ],
  },
  {
    slug: "packing-and-storing-moringa-leaf-powder",
    status: "illustrative",
    categories: ["powders"],
    title: "Packing and Storing Moringa Leaf Powder for Export",
    subtitle:
      "An importer wants moringa powder to stay green and fresh between packing and use, which depends on keeping light, moisture and air away from it.",
    summary:
      "An illustrative importer plans packing and storage for moringa leaf powder, covering light, moisture, oxygen, liner choice and conditions at destination.",
    industry: "Packaging & Storage",
    topic: "Keeping moringa powder green in transit",
    products: ["moringa-powder"],
    keywords: ["moringa", "packaging", "liner", "storage", "colour", "transit"],
    intro: [
      "Moringa powder is made from dried, milled leaves of the Moringa oleifera tree. Its green colour and leafy aroma are what buyers look for first, and both are sensitive to light, moisture and air during transit and storage.",
      "This is a hypothetical scenario about an imagined importer. It looks only at packing and storage and makes no nutrition or health claims; any such wording depends on the rules of the destination market.",
    ],
    overview: {
      application: "Imported moringa powder for repacking and food or beverage use",
      focus: "Protection from light, moisture and air through transit and storage",
    },
    requirements: {
      intro: "For moringa powder packing, the importer would typically specify:",
      items: [
        {
          title: "Light protection",
          text: "Outer packaging that blocks light, since exposure can fade the powder’s green colour.",
        },
        {
          title: "Moisture barrier",
          text: "A sealed inner liner that limits moisture pick-up and caking during sea or air transit.",
        },
        {
          title: "Limiting air contact",
          text: "Liners sealed well and pack sizes chosen so that each opened pack is used reasonably quickly.",
        },
        {
          title: "Colour reference",
          text: "An approved sample showing the shade of green expected on arrival.",
        },
        {
          title: "Storage at destination",
          text: "A cool, dry warehouse area away from direct sunlight, planned before the goods arrive.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume an earlier shipment from another source arrived with these problems:",
      points: [
        "Powder near the bag surface looked paler than powder in the middle.",
        "Some packs had soft lumps after a humid voyage.",
        "Large bags stayed open for weeks during repacking.",
      ],
    },
    approach: {
      intro: "Steps the importer could take with the supplier:",
      steps: [
        {
          title: "Agree the pack build",
          text: "Specify outer material, inner liner and sealing method that protect against light and moisture.",
        },
        {
          title: "Right-size the packs",
          text: "Choose pack sizes that match the repacking rate so opened packs are emptied promptly.",
        },
        {
          title: "Plan handling between port and warehouse",
          text: "Keep containers out of direct sun at ports and move goods into dry storage promptly.",
        },
        {
          title: "Inspect on arrival",
          text: "Compare colour and texture with the reference sample and note any lumps before accepting.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits for the importer. These are expected benefits of better packing, not measured results:",
      points: [
        "Powder colour that stays closer to the approved reference.",
        "Fewer lumps from moisture pick-up.",
        "Less time that opened packs sit exposed to air.",
      ],
    },
    considerations: [
      {
        title: "Drying affects colour",
        text: "How the leaves are dried influences the green shade, so discuss it alongside packing.",
      },
      {
        title: "Labelling rules",
        text: "Any descriptive or nutrition wording on repacked moringa must follow the destination market’s rules.",
      },
      {
        title: "Specification per lot",
        text: "Ask for each lot’s specification sheet so arrival checks have a basis.",
      },
    ],
    takeaways: [
      "Light, moisture and air are the main threats to moringa colour and aroma.",
      "Pack size is as important as pack material when powder is repacked.",
      "Storage at destination is part of the packing plan.",
      "A colour reference makes arrival inspection quick and fair.",
    ],
    insights: [
      "how-to-judge-moringa-powder-quality-before-you-import",
      "from-leaf-to-powder-why-drying-matters-for-moringa",
    ],
  },
  {
    slug: "choosing-whole-or-ground-pepper",
    status: "illustrative",
    categories: ["spices", "powders"],
    title: "Choosing Whole or Ground Pepper for a Processing Line",
    subtitle:
      "A food processor weighs buying whole black peppercorns to grind in-house against buying ground black or white pepper ready to use.",
    summary:
      "A hypothetical processor compares whole peppercorns with ground black and white pepper, weighing aroma loss, grinding equipment, hygiene and product colour.",
    industry: "Food Processing",
    topic: "Whole peppercorns versus ground pepper",
    products: ["black-pepper", "black-pepper-powder", "white-pepper-powder"],
    keywords: ["black pepper", "peppercorns", "white pepper", "grinding", "processing", "aroma"],
    intro: [
      "Grinding exposes pepper’s aromatic oils, so ground pepper loses its bite faster than whole peppercorns. A processor that grinds in-house can keep pepper fresher, but takes on milling equipment, dust control and cleaning. Buying ground pepper removes that step.",
      "This is an illustrative scenario. It follows a hypothetical processor deciding between whole and ground pepper, and between black and white pepper for different products.",
    ],
    overview: {
      application: "Seasonings, processed meats and prepared foods",
      focus: "Aroma, equipment, hygiene and colour in the whole-versus-ground choice",
    },
    requirements: {
      intro: "To make the decision, the processor would set out:",
      items: [
        {
          title: "Product range",
          text: "Which products need visible black pepper and which pale products need white pepper without dark flecks.",
        },
        {
          title: "Grind required",
          text: "Fine table grind, coarse or cracked pepper, and whether several grinds are needed from one stock.",
        },
        {
          title: "In-house milling capacity",
          text: "Whether the site has suitable grinding, sieving and dust-control equipment, and staff to run it.",
        },
        {
          title: "Hygiene expectations",
          text: "The cleaning and control steps the processor’s own quality system requires for spice milling.",
        },
        {
          title: "Whole pepper grade",
          text: "If buying whole, the grade and quality parameters the buyer needs, agreed in writing with the quotation.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the processor currently buys ground black pepper only and is reviewing it because:",
      points: [
        "Seasonings made late in a stock cycle taste less peppery.",
        "A new cream-based product shows dark flecks from black pepper.",
        "The team is unsure whether in-house grinding is worth the equipment and hygiene effort.",
      ],
    },
    approach: {
      intro: "A step-by-step comparison:",
      steps: [
        {
          title: "Map products to pepper type",
          text: "Assign black pepper to products where flecks are welcome and white pepper to pale products.",
        },
        {
          title: "Assess grinding on site",
          text: "List the equipment, cleaning and dust handling in-house milling would need.",
        },
        {
          title: "Trial both routes",
          text: "Compare freshly ground whole pepper with supplied ground pepper in the same recipe.",
        },
        {
          title: "Set ordering rhythm",
          text: "If buying ground pepper, order smaller, more frequent lots to keep aroma fresh.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits for the processor. These are anticipated benefits of the comparison, not measured results:",
      points: [
        "A clear rule for where black and white pepper are used.",
        "A decision on in-house grinding based on aroma and practical cost.",
        "Pepper stock that is turned over before aroma fades.",
      ],
    },
    considerations: [
      {
        title: "Whole pepper stores longer",
        text: "Keep peppercorns in airtight packaging in a cool, dry place away from light.",
      },
      {
        title: "White pepper flavour",
        text: "White pepper’s heat is cleaner and earthier, so taste-check recipes when switching.",
      },
      {
        title: "Mixed approach",
        text: "Some processors grind whole pepper for core lines and buy ground pepper for smaller products.",
      },
    ],
    takeaways: [
      "Ground pepper saves a step but loses aroma faster than whole peppercorns.",
      "In-house grinding brings equipment and hygiene duties.",
      "White pepper solves dark flecks in pale products.",
      "A mixed approach can suit lines with different needs.",
    ],
    insights: [
      "black-pepper-for-grinding-seasoning-blends-and-oleoresin",
      "how-black-peppercorns-are-ground-without-losing-aroma",
      "white-pepper-powder-quality-colour-aroma-and-fineness",
    ],
  },
  {
    slug: "specifying-chilli-for-sauces-and-pastes",
    status: "illustrative",
    categories: ["spices", "powders", "agricultural"],
    title: "Specifying Chilli for Sauces and Pastes",
    subtitle:
      "A sauce and paste maker chooses between dried red chillies, red chilli powder and fresh green chillies, balancing colour, heat, form and storage.",
    summary:
      "An illustrative sauce maker compares dried red chilli, chilli powder and fresh green chillies for sauces and pastes, weighing colour against heat and fresh against dried storage.",
    industry: "Sauces & Pastes",
    topic: "Choosing chilli form for sauces and pastes",
    products: ["red-chilli", "red-chilli-powder", "green-chili"],
    keywords: ["chilli sauce", "paste", "dried chilli", "chilli powder", "green chilli", "heat", "colour"],
    intro: [
      "Chilli varieties differ widely in heat and colour. Dried red chillies can be soaked and ground into pastes, red chilli powder blends quickly into wet sauces, and fresh green chillies give a bright, green heat for green sauces and pickles. Each form brings a different look and different handling.",
      "This is a hypothetical scenario. It follows an imagined sauce and paste maker deciding which chilli form to use for each product.",
    ],
    overview: {
      application: "Hot sauces, chilli pastes, green chilli sauces and pickles",
      focus: "Colour versus heat, chilli form and storage of fresh and dried stock",
    },
    requirements: {
      intro: "For its sauce range, the maker would set out:",
      items: [
        {
          title: "Colour or heat priority",
          text: "For each sauce, whether a vivid red colour or strong pungency matters more, since varieties differ in both.",
        },
        {
          title: "Dried chilli form",
          text: "Whole chillies with or without stems, and the variety and heat level the recipe is built on.",
        },
        {
          title: "Chilli powder grade",
          text: "The shade of red, heat level and fineness needed for sauces where powder is used.",
        },
        {
          title: "Fresh green chillies",
          text: "Colour, firmness and selection requirements for fresh pods, with grading and packing confirmed to buyer needs.",
        },
        {
          title: "Storage conditions",
          text: "Dry, light-protected storage for dried chillies and powder, and cool, ventilated handling for fresh chillies.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the maker is expanding from one sauce to three and finds:",
      points: [
        "One red sauce needs bright colour but only gentle heat.",
        "A green sauce depends on fresh chillies, which need faster handling than dried stock.",
        "The same chilli powder used everywhere does not suit every product.",
      ],
    },
    approach: {
      intro: "A way to match each product to a chilli form:",
      steps: [
        {
          title: "Profile each sauce",
          text: "Write down target colour, heat and texture for every product in the range.",
        },
        {
          title: "Match form to process",
          text: "Use whole dried chillies where soaking and grinding suits the paste, and powder where fast blending helps.",
        },
        {
          title: "Plan fresh chilli handling",
          text: "Agree selection, packing and delivery timing for green chillies so they are used while firm.",
        },
        {
          title: "Trial and fix specifications",
          text: "Make test batches with samples of each form and record the agreed specification.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits for the sauce maker. These are likely benefits of matching form to use, not measured results:",
      points: [
        "Sauces whose colour and heat suit their intended style.",
        "Storage planned separately for fresh and dried chillies.",
        "Clear specifications for each chilli form in the range.",
      ],
    },
    considerations: [
      {
        title: "Dried chilli storage",
        text: "Dried chillies keep colour and aroma longest when protected from light and moisture.",
      },
      {
        title: "Fresh chilli condition",
        text: "Fresh green chillies are handled carefully and kept in cool, well-ventilated conditions; plan production around delivery.",
      },
      {
        title: "Variety values",
        text: "Pungency and colour vary by variety and are shared with each quotation, so ask for them per lot.",
      },
    ],
    takeaways: [
      "Colour and heat are separate choices when picking a chilli.",
      "Dried, ground and fresh chillies suit different sauce processes.",
      "Fresh chillies need a faster, cooler handling plan than dried stock.",
      "A profile for each sauce makes the choice of form straightforward.",
    ],
    insights: [
      "teja-byadgi-and-guntur-understanding-indian-chilli-varieties",
      "green-chillies-in-sauces-pickles-and-food-processing",
      "red-chilli-powder-buying-guide-colour-heat-and-grind",
    ],
  },
  {
    slug: "whole-cloves-or-clove-powder",
    status: "illustrative",
    categories: ["spices", "powders"],
    title: "Whole Cloves or Clove Powder: Matching Form to Use",
    subtitle:
      "A buyer supplying both pickles and rice dishes as well as baked goods and blends decides where whole cloves work best and where clove powder is the better form.",
    summary:
      "A hypothetical buyer matches whole cloves to pickles and rice dishes and clove powder to bakery and blends, weighing aroma, oil retention and packaging.",
    industry: "Food Manufacturing",
    topic: "Matching clove form to product",
    products: ["cloves", "clove-powder"],
    keywords: ["cloves", "clove powder", "pickles", "rice dishes", "bakery", "aroma"],
    intro: [
      "Cloves are the dried flower buds of an evergreen tree, with a warm, sweet and pungent aroma. Whole cloves suit pickles, rice dishes and infusions where the buds can stay in or be removed. Clove powder disperses evenly through blends, batters and marinades, with no buds to remove.",
      "This is an illustrative scenario. It follows a hypothetical buyer working out which clove form fits each product in its range.",
    ],
    overview: {
      application: "Pickles, rice dishes, baked goods and spice blends",
      focus: "Whole versus ground clove: aroma, oil retention and packing",
    },
    requirements: {
      intro: "To match form to use, the buyer would set out:",
      items: [
        {
          title: "Product list by form",
          text: "Which products use whole buds and which need an even powder.",
        },
        {
          title: "Whole clove grade",
          text: "Grade and quality parameters for whole cloves, such as heads intact and even colour, confirmed with the quotation.",
        },
        {
          title: "Powder fineness",
          text: "The mesh for clove powder, agreed to suit batters or blends.",
        },
        {
          title: "Tighter packing for powder",
          text: "Grinding exposes clove’s aromatic oils, so powder needs tighter sealing than whole buds.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the buyer currently uses only whole cloves and has found:",
      points: [
        "Grinding small quantities in-house for bakery gives uneven results.",
        "Whole buds are unsuitable in products where nothing should be removed before eating.",
        "Stock of powder ground in advance lost aroma quickly.",
      ],
    },
    approach: {
      intro: "A practical way to split the range:",
      steps: [
        {
          title: "Sort products by form",
          text: "Keep whole cloves for pickles, rice and infusions and move bakery and blends to powder.",
        },
        {
          title: "Specify each form",
          text: "Agree grade for whole cloves and mesh for powder with the supplier.",
        },
        {
          title: "Set packing and quantities",
          text: "Order powder in sealed packs sized for quick use, and whole cloves in airtight bulk packing.",
        },
        {
          title: "Check aroma on arrival",
          text: "Compare both forms with reference samples when each lot arrives.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits for the buyer. These are typical benefits of matching form to use, not measured results:",
      points: [
        "More even clove flavour in baked goods and blends.",
        "Whole cloves kept for products where their form suits.",
        "Less aroma loss from powder held too long.",
      ],
    },
    considerations: [
      {
        title: "Strength",
        text: "A small amount of clove carries strong flavour, so dose carefully when switching forms.",
      },
      {
        title: "Storage",
        text: "Keep both forms airtight in a cool, dry place, protected from light and moisture.",
      },
      {
        title: "Colour",
        text: "Clove powder is dark reddish brown and can show in light products.",
      },
    ],
    takeaways: [
      "Whole cloves suit products where buds can stay in or be removed.",
      "Clove powder spreads evenly but needs tighter packing.",
      "Grade applies to whole cloves; fineness applies to powder.",
      "Ordering powder in smaller, sealed packs helps keep its aroma.",
    ],
    insights: [
      "why-clove-powder-loses-aroma-faster-than-whole-cloves",
      "clove-quality-head-intact-colour-and-oil-content",
      "buying-clove-powder-aroma-colour-and-purity-checks",
    ],
  },
  {
    slug: "nutmeg-and-white-pepper-for-dairy-and-savoury-sauces",
    status: "illustrative",
    categories: ["powders"],
    title: "Nutmeg and White Pepper for Dairy and Savoury Sauces",
    subtitle:
      "A food-service or sauce producer seasoning béchamel, cheese sauces and soups needs small, accurate doses of nutmeg and white pepper with fresh aroma and a fine grind.",
    summary:
      "An illustrative sauce producer specifies nutmeg and white pepper powder for béchamel, cheese sauces and soups, with attention to dosing, aroma, fineness and opened packs.",
    industry: "Food Service",
    topic: "Seasoning dairy-based sauces",
    products: ["nutmeg-powder", "white-pepper-powder"],
    keywords: ["bechamel", "cheese sauce", "nutmeg", "white pepper", "food service", "dosing"],
    intro: [
      "Nutmeg and white pepper are classic partners in béchamel, cheese sauces and creamy soups. Nutmeg brings a sweet, warm and slightly woody aroma; white pepper gives heat without dark specks. Both are used in small amounts, so their strength and fineness matter.",
      "This is a hypothetical scenario about an imagined food-service and sauce producer. It shows how the buyer might specify these two spices and manage them once opened.",
    ],
    overview: {
      application: "Béchamel, cheese sauces, cream soups and dairy dishes",
      focus: "Small dosing, aroma, fine grind and handling of opened packs",
    },
    requirements: {
      intro: "For seasoning dairy sauces, the producer would specify:",
      items: [
        {
          title: "Fine grind",
          text: "A fineness for both spices that disperses through a smooth sauce without grains.",
        },
        {
          title: "Nutmeg aroma",
          text: "A sweet, warm aroma checked against a reference; mace is a separate product from the same fruit.",
        },
        {
          title: "White pepper appearance",
          text: "Off-white to pale cream, with no dark flecks to mark the sauce.",
        },
        {
          title: "Pack size for small doses",
          text: "Smaller sealed packs, since only a little of each spice is used per batch.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the producer’s kitchens have reported:",
      points: [
        "Large spice packs stay open for long periods and lose aroma.",
        "Sauces made from older stock needed extra spice to taste right.",
        "Occasional coarse particles were noticed in smooth sauces.",
      ],
    },
    approach: {
      intro: "A simple plan for both spices:",
      steps: [
        {
          title: "Agree fineness and references",
          text: "Specify a fine grind and keep reference samples for aroma and colour.",
        },
        {
          title: "Choose smaller packs",
          text: "Order pack sizes that a kitchen can use quickly after opening.",
        },
        {
          title: "Set opened-pack rules",
          text: "Reseal after each use and store away from heat, steam and light.",
        },
        {
          title: "Standardise dosing",
          text: "Dose by weight in the recipe so small differences in lot strength are easier to notice.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits for the producer. These are expected benefits of good handling, not measured results:",
      points: [
        "Sauces with a steadier nutmeg and pepper note.",
        "Less aroma loss from packs left open.",
        "Smooth sauces without visible particles.",
      ],
    },
    considerations: [
      {
        title: "Ground spices fade faster",
        text: "Both powders lose aroma faster than whole nutmeg or whole berries, so plan small, regular orders.",
      },
      {
        title: "Kitchen conditions",
        text: "Steam and heat near the cooking line can affect opened packs; store them elsewhere.",
      },
      {
        title: "Specification per quotation",
        text: "Fineness and other parameters are confirmed with each quotation, so check them against the brief.",
      },
    ],
    takeaways: [
      "Spices used in small amounts need fresh aroma and a fine grind.",
      "Smaller packs suit spices that are dosed sparingly.",
      "White pepper keeps pale sauces free of dark flecks.",
      "Rules for opened packs matter as much as the specification.",
    ],
    insights: [
      "storing-nutmeg-powder-to-protect-its-aroma",
      "buying-nutmeg-powder-what-to-check-in-a-sample",
      "using-white-pepper-powder-in-sauces-soups-and-seasonings",
    ],
  },
  {
    slug: "spiced-tea-masala-ingredients",
    status: "illustrative",
    categories: ["spices", "powders"],
    title: "Ingredients for a Spiced Tea (Chai) Masala",
    subtitle:
      "A tea blender building a chai masala combines green cardamom, dry ginger powder and clove powder, and must choose between whole and ground forms and protect their aroma.",
    summary:
      "A hypothetical tea blender sources green cardamom, dry ginger powder and clove powder for a chai masala, weighing whole versus ground forms and aroma-holding packaging.",
    industry: "Beverages & Tea Blends",
    topic: "Spices for a chai masala blend",
    products: ["green-cardamom", "dry-ginger-powder", "clove-powder"],
    keywords: ["chai masala", "spiced tea", "cardamom", "ginger", "cloves", "tea blend"],
    intro: [
      "Green cardamom is central to spiced tea traditions, with a sweet, floral and slightly minty fragrance. Dry ginger powder adds a warm, concentrated pungency, and a little clove brings depth. Together they make a typical chai masala.",
      "This is an illustrative scenario. It follows a hypothetical tea blender assembling its chai masala and makes no health claims about any ingredient.",
    ],
    overview: {
      application: "Chai masala for loose tea, tea bags and instant spiced tea",
      focus: "Cardamom aroma, ginger warmth, whole versus ground, aroma-holding packing",
    },
    requirements: {
      intro: "For a chai masala, the blender would typically specify:",
      items: [
        {
          title: "Cardamom grade",
          text: "Pod size, colour and grade of green cardamom, confirmed with the quotation.",
        },
        {
          title: "Whole or ground cardamom",
          text: "Whether pods are bought whole and ground close to blending, which keeps more aroma.",
        },
        {
          title: "Ginger powder warmth and fineness",
          text: "The pungency the blend needs and a mesh that suits tea bags or instant mixes.",
        },
        {
          title: "Clove powder dose",
          text: "A fine clove powder used sparingly, since a small quantity carries a strong flavour.",
        },
        {
          title: "Aroma-holding packing",
          text: "Airtight packs kept away from heat and light for all three spices.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the blender’s trial batches have shown:",
      points: [
        "Pre-ground cardamom gave a weaker aroma than freshly ground pods.",
        "Ginger powder took up moisture and clumped in the blend.",
        "Too much clove masked the cardamom.",
      ],
    },
    approach: {
      intro: "Steps to a balanced chai masala:",
      steps: [
        {
          title: "Buy cardamom whole",
          text: "Source whole green pods and grind them close to blending.",
        },
        {
          title: "Specify ginger and clove powders",
          text: "Agree mesh and aroma for each, with reference samples.",
        },
        {
          title: "Balance by trial",
          text: "Adjust proportions in-house until cardamom leads and clove supports.",
        },
        {
          title: "Pack and store dry",
          text: "Keep ginger powder sealed, as it absorbs moisture readily, and store all spices airtight.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits for the tea blender. These are typical benefits of careful sourcing, not measured results:",
      points: [
        "A chai masala with a clearer cardamom aroma.",
        "Less clumping from moisture in the ginger component.",
        "A flavour balance set by the blender’s own trials.",
      ],
    },
    considerations: [
      {
        title: "Green versus black cardamom",
        text: "They are different spices; specify green cardamom for a classic chai masala.",
      },
      {
        title: "Labelling",
        text: "Describe the blend by its ingredients; any wellness wording depends on the destination market’s rules.",
      },
      {
        title: "Stock rotation",
        text: "Use ground components promptly, as aroma fades with air and heat.",
      },
    ],
    takeaways: [
      "Cardamom’s aroma leads a chai masala and is best protected by buying whole.",
      "Ginger powder needs dry storage to stay free-flowing.",
      "Clove is strong and should support, not dominate.",
      "Airtight packing protects the whole blend.",
    ],
    insights: [
      "cardamom-in-tea-coffee-sweets-and-bakery",
      "protecting-cardamom-s-green-colour-and-fragrance",
      "exporting-dry-ginger-powder-packaging-labelling-and-shipping",
    ],
  },
  {
    slug: "red-chilli-powder-colour-and-heat-specification",
    status: "illustrative",
    categories: ["powders"],
    title: "Writing a Colour and Heat Specification for Red Chilli Powder",
    subtitle:
      "A buyer defines its own colour (ASTA) and pungency (SHU) requirements for red chilli powder and agrees how they will be tested.",
    summary:
      "An illustrative buyer writes a red chilli powder specification using ASTA colour and SHU pungency as its own targets, and agrees the test method with the supplier.",
    industry: "Quality Specification",
    topic: "ASTA colour and SHU heat in a chilli spec",
    products: ["red-chilli-powder"],
    keywords: ["red chilli powder", "asta", "shu", "pungency", "colour value", "specification"],
    intro: [
      "Red chilli powder contributes both red colour and pungency, and the two do not always go together: a vividly coloured chilli can be mild, and a very hot one may be less red. ASTA colour units are commonly used to express colour, and Scoville Heat Units (SHU) to express pungency.",
      "This is a hypothetical scenario. The buyer sets its own targets from its formulation; no figures here describe any supplier’s product, and values are confirmed with each quotation.",
    ],
    overview: {
      application: "Spice blends, sauces, seasonings and prepared foods",
      focus: "Stating colour and heat requirements and agreeing how they are tested",
    },
    requirements: {
      intro: "A colour and heat specification would usually cover:",
      items: [
        {
          title: "Colour target",
          text: "The colour the product needs, expressed as an ASTA range taken from the buyer’s own formulation work.",
        },
        {
          title: "Pungency target",
          text: "The heat level the recipe is built around, expressed as an SHU range set by the buyer.",
        },
        {
          title: "Test method",
          text: "Which method is used for each value, so supplier and buyer results can be compared.",
        },
        {
          title: "Fineness",
          text: "The grind that suits dry blends, sauces or coatings, as fineness affects how colour appears.",
        },
        {
          title: "Reference sample",
          text: "An approved sample kept as a visual and sensory check alongside the numbers.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the buyer’s previous orders used only general wording, which led to:",
      points: [
        "Lots that matched in heat but differed in colour.",
        "Disagreement over results because each side used a different test method.",
        "Recipe adjustments needed every time a new lot arrived.",
      ],
    },
    approach: {
      intro: "A way to write a clear specification:",
      steps: [
        {
          title: "Derive targets from the product",
          text: "Work out the colour and heat ranges the finished product needs before asking for quotes.",
        },
        {
          title: "Agree test methods",
          text: "Name the method for ASTA and SHU and whether results come from the supplier, a third party or both.",
        },
        {
          title: "Request values with each quotation",
          text: "Ask for colour and pungency values per lot, since they vary by chilli variety and drying.",
        },
        {
          title: "Check on arrival",
          text: "Compare lot values and the reference sample before releasing the powder to production.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits for the buyer. These are likely benefits of a measurable specification, not measured results:",
      points: [
        "Quotations that can be compared on colour and heat directly.",
        "Fewer disputes because the test method is agreed in advance.",
        "Less recipe adjustment between lots.",
      ],
    },
    considerations: [
      {
        title: "Colour fades with light",
        text: "Chilli powder’s colour is sensitive to light and storage conditions, so protect stock after arrival.",
      },
      {
        title: "Blending lots",
        text: "Some buyers blend lots to reach a target; agree whether that is acceptable.",
      },
      {
        title: "Values per quotation",
        text: "Colour and pungency are confirmed with each quotation rather than fixed for all lots.",
      },
    ],
    takeaways: [
      "Colour and heat are separate properties and need separate targets.",
      "ASTA and SHU only help if both sides use the same test method.",
      "Targets should come from the buyer’s own formulation.",
      "A reference sample complements the numbers.",
    ],
    insights: [
      "understanding-asta-colour-and-shu-in-red-chilli-powder",
      "red-chilli-powder-buying-guide-colour-heat-and-grind",
      "storage-and-handling-considerations-for-bulk-chilli-powder",
    ],
  },
  {
    slug: "keeping-dry-mango-powder-free-flowing",
    status: "illustrative",
    categories: ["powders"],
    title: "Keeping Dry Mango Powder Free-Flowing",
    subtitle:
      "An importer whose amchur cakes in humid storage looks at moisture pick-up, packaging barriers, warehouse conditions and arrival checks.",
    summary:
      "A hypothetical importer tackles caking in dry mango powder through moisture and acidity specs, barrier packaging, dry storage and lump checks on arrival.",
    industry: "Packaging & Storage",
    topic: "Preventing caking in amchur",
    products: ["dry-mango-powder"],
    keywords: ["amchur", "dry mango powder", "caking", "humidity", "packaging", "storage"],
    intro: [
      "Dry mango powder is valued as a dry souring agent, but the same dryness makes it eager to absorb moisture. In humid storage it can form lumps or set hard, and exposure can also dull its tang.",
      "This is an illustrative scenario. It follows a hypothetical importer looking for ways to reduce caking, from the specification through to its own warehouse.",
    ],
    overview: {
      application: "Imported amchur for repacking, blending and food processing",
      focus: "Moisture pick-up, packaging barriers, storage and arrival checks",
    },
    requirements: {
      intro: "To limit caking, the importer would specify:",
      items: [
        {
          title: "Moisture and acidity",
          text: "Moisture and acidity expectations set by the importer, with values confirmed with each quotation.",
        },
        {
          title: "Barrier packaging",
          text: "A sealed inner liner with good moisture resistance inside a sturdy outer bag or carton.",
        },
        {
          title: "Pack size",
          text: "Pack sizes that can be used or repacked soon after opening.",
        },
        {
          title: "Arrival inspection",
          text: "A simple lump check and a tang check against a reference sample when goods arrive.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the importer has seen these problems in recent stock:",
      points: [
        "Packs stored through a humid season developed hard lumps.",
        "Opened sacks left in the repacking area clumped within the working week.",
        "Customers noticed that some lots tasted less sour than others.",
      ],
    },
    approach: {
      intro: "Steps from specification to storage:",
      steps: [
        {
          title: "Agree the specification",
          text: "State moisture and acidity requirements and ask for values with each lot.",
        },
        {
          title: "Upgrade the packaging",
          text: "Choose a liner and closure that hold out humidity through transit.",
        },
        {
          title: "Control the warehouse",
          text: "Store packs off the floor in a cool, dry area away from walls and doors that let in damp air.",
        },
        {
          title: "Inspect and record",
          text: "Check for lumps and tang on arrival and note results so problems can be traced.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits for the importer. These are anticipated benefits of good practice, not measured results:",
      points: [
        "Fewer caked packs in storage.",
        "Earlier detection of problem lots through arrival checks.",
        "More even tang for customers who repack or blend the powder.",
      ],
    },
    considerations: [
      {
        title: "Opened packs",
        text: "Reseal partially used packs at once; amchur picks up moisture quickly once exposed.",
      },
      {
        title: "Lumps versus hard set",
        text: "Soft lumps may break up on sieving, while hard-set powder suggests prolonged moisture exposure.",
      },
      {
        title: "Stock turnover",
        text: "Plan orders around demand so powder does not sit through a humid season.",
      },
    ],
    takeaways: [
      "Amchur’s dryness is what makes it absorb humidity so easily.",
      "Barrier packaging and dry storage do most of the work against caking.",
      "Moisture and acidity belong in the buyer’s specification.",
      "Arrival checks catch problems before powder reaches customers.",
    ],
    insights: [
      "dry-mango-powder-quality-tang-colour-and-freshness",
      "from-green-mango-to-amchur-how-dry-mango-powder-is-made",
    ],
  },
];
