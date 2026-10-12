import type { CaseStudyEntry } from "@/features/case-studies/data";

/** Illustrative agricultural case studies: hypothetical buyer scenarios, no real customers or results. */
export const agriculturalCaseStudies: readonly CaseStudyEntry[] = [
  {
    slug: "fresh-vegetables-for-food-service-salad-lines",
    status: "illustrative",
    categories: ["agricultural"],
    title: "Fresh Vegetables for Food-Service Salad Lines",
    subtitle:
      "How a food-service distributor supplying salads and coleslaw to restaurants might specify cucumber, cabbage and green beans so they arrive crisp, uniform and ready for the prep table.",
    summary:
      "A hypothetical food-service distributor plans cucumber, cabbage and green bean supply for salad and coleslaw lines, focusing on crispness, size uniformity and careful cool handling.",
    industry: "Food Service",
    topic: "Crisp, uniform vegetables for salad kitchens",
    products: ["cucumber", "cabbage", "beans"],
    keywords: ["salad", "coleslaw", "food service", "cucumber", "cabbage", "green beans", "restaurants"],
    intro: [
      "Salad and coleslaw lines in food service depend on vegetables that look fresh on the plate and cut cleanly in a busy kitchen. Cucumbers need to stay firm and green, cabbage heads need to be compact enough to shred evenly, and green beans need to keep their snap after blanching. Each of the three handles differently between the farm and the restaurant.",
      "This is a hypothetical, illustrative scenario: a food-service distributor preparing a sourcing brief for cucumber, cabbage and green beans to supply restaurant salad and coleslaw menus. It describes no real customer, order or result.",
    ],
    overview: {
      application: "Restaurant salads, coleslaw and blanched vegetable sides",
      focus: "Freshness, size uniformity and cool handling for three salad vegetables",
    },
    requirements: {
      intro: "A distributor supplying salad kitchens would usually set out:",
      items: [
        {
          title: "Cucumber length and colour",
          text: "A length range and a fresh green appearance, so slices and sticks look consistent across plates and portions.",
        },
        {
          title: "Cabbage head condition",
          text: "Firm, compact heads with tightly layered leaves, and a head size that suits the kitchen’s shredding method.",
        },
        {
          title: "Bean tenderness and length",
          text: "Slender, straight, tender pods sorted to a consistent length, so blanching times stay predictable.",
        },
        {
          title: "Cool handling per vegetable",
          text: "Handling that keeps each vegetable cool without exposing cucumbers to temperatures that cause chilling injury.",
        },
        {
          title: "Pack format",
          text: "Pack sizes that a kitchen or depot can open and use quickly, with ventilated packaging for the beans.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the distributor’s first enquiry treats the three vegetables as one ‘salad mix’ order:",
      points: [
        "No length range is given for cucumbers or beans, so a lot could arrive with mixed sizes that slow portioning.",
        "Cabbage head size is left open, although very large or loose heads shred less evenly.",
        "One storage instruction is applied to all three, even though cucumbers are sensitive to chilling injury and cabbage and beans prefer cool, humid conditions.",
      ],
    },
    approach: {
      intro: "A practical way to turn the ‘salad mix’ request into a usable brief:",
      steps: [
        {
          title: "Specify each vegetable separately",
          text: "Write a short specification for cucumber, cabbage and beans covering size, appearance and condition.",
        },
        {
          title: "Match size to the kitchen task",
          text: "Link cucumber length to slicing, cabbage head size to shredding and bean length to blanching and plating.",
        },
        {
          title: "Separate the handling needs",
          text: "Agree cool, well-ventilated handling for cucumbers that avoids chilling injury, and cool, humid conditions for cabbage and beans.",
        },
        {
          title: "Agree packing and labelling",
          text: "Confirm pack type and size per vegetable so depots can rotate stock and keep products apart where needed.",
        },
        {
          title: "Inspect on arrival",
          text: "Check firmness, colour and length against the brief before produce goes out to restaurants.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of a vegetable-by-vegetable brief. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Cucumber slices and bean portions look consistent from plate to plate.",
        "Cabbage heads shred evenly with less trimming of loose outer leaves.",
        "Handling instructions suit each vegetable instead of one compromise setting.",
        "Fewer rejected cases at the depot because expectations were written down.",
      ],
    },
    considerations: [
      {
        title: "Chilling sensitivity",
        text: "Cucumbers can suffer chilling injury if held too cold, so confirm suitable cool conditions rather than the coldest available store.",
      },
      {
        title: "Seasonal availability",
        text: "Supply of all three vegetables is subject to season, so share expected volumes and timing early.",
      },
      {
        title: "Variety and colour",
        text: "Cucumber and cabbage colour varies with variety; agree what your menus need before the first lot.",
      },
    ],
    takeaways: [
      "A ‘salad mix’ enquiry works better as three short specifications.",
      "Size ranges should follow how the kitchen slices, shreds and blanches.",
      "Cucumbers need cool handling that avoids chilling injury, unlike cabbage and beans.",
      "Arrival checks against a written brief protect restaurant presentation.",
    ],
    insights: [
      "cucumbers-for-salads-pickling-and-fresh-cut-lines",
      "cabbage-for-salads-coleslaw-and-food-processing",
      "green-beans-for-retail-food-service-and-freezing",
    ],
  },
  {
    slug: "vegetables-for-frozen-vegetable-lines",
    status: "illustrative",
    categories: ["agricultural"],
    title: "Vegetables for a Frozen Vegetable Line",
    subtitle:
      "How a frozen food packer might combine ready-frozen peas with fresh green beans and okra for its own cutting and freezing, and what to specify for each.",
    summary:
      "A hypothetical frozen food packer plans mixed and single-vegetable lines using frozen peas plus fresh beans and okra for in-house cutting, grading and freezing.",
    industry: "Frozen Food Processing",
    topic: "Frozen and fresh inputs for frozen vegetable packs",
    products: ["frozen-peas", "beans", "okra"],
    keywords: ["frozen vegetables", "frozen peas", "mixed vegetables", "okra", "green beans", "iqf", "cut and frozen"],
    intro: [
      "A frozen vegetable range often mixes two kinds of raw material. Some items, such as green peas, can be bought already frozen and free-flowing, ready to blend. Others, such as green beans and okra, may be bought fresh and cut and frozen in the packer’s own plant. Each route needs a different specification and a different kind of logistics.",
      "This is a hypothetical, illustrative scenario: a frozen food packer building a mixed-vegetable pack and single-vegetable packs from frozen peas and fresh beans and okra. It describes no real company, volume or result.",
    ],
    overview: {
      application: "Frozen mixed-vegetable and single-vegetable retail and food-service packs",
      focus: "Specifying frozen peas and fresh beans and okra for in-house cutting and freezing",
    },
    requirements: {
      intro: "For a line that blends bought-in frozen peas with fresh produce cut on site, the packer would define:",
      items: [
        {
          title: "Frozen pea grade",
          text: "The pea grade and appearance the mix needs: whole, free-flowing, green peas that blend evenly with the other vegetables.",
        },
        {
          title: "Frozen pack format",
          text: "Bulk pack type and size that feed the mixing line, kept frozen from dispatch to the packer’s store.",
        },
        {
          title: "Bean and okra tenderness",
          text: "Young, tender pods with fewer fibres, since tough pods stay tough after cutting and freezing.",
        },
        {
          title: "Length for cutting",
          text: "A pod length range that suits the cutter, so cut pieces come out even and trim waste stays low.",
        },
        {
          title: "Arrival timing",
          text: "Delivery of fresh beans and okra that fits the plant’s processing schedule, so pods are cut while still fresh.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the packer’s first brief lists all three vegetables with one quantity and one delivery window:",
      points: [
        "Frozen peas and fresh pods are on the same schedule, although one needs a frozen chain and the other needs fast processing.",
        "No pod length is stated, so beans and okra could arrive in sizes the cutter cannot handle efficiently.",
        "Okra’s tendency to bruise and brown with rough handling is not reflected in the packing request.",
        "The pea grade is described only as ‘standard’, which may not match the look of the finished mix.",
      ],
    },
    approach: {
      intro: "A way to align each input with the part of the plant it feeds:",
      steps: [
        {
          title: "Separate frozen and fresh inputs",
          text: "Treat frozen peas as a finished ingredient and beans and okra as raw material for the cutting line.",
        },
        {
          title: "Agree the pea grade with a sample",
          text: "Compare a frozen pea sample against the target mix for size, colour and free flow before confirming.",
        },
        {
          title: "Specify pods for the cutter",
          text: "Set a length range, tenderness and colour for beans and okra that suit the cut style and piece size.",
        },
        {
          title: "Plan two logistics routes",
          text: "Arrange reefer shipment for frozen peas and cool, ventilated handling for fresh pods, timed to processing slots.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of splitting the brief by input type. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Frozen peas arrive in a grade that blends evenly into the mixed pack.",
        "Fresh beans and okra reach the cutter while still firm and tender.",
        "Cut pieces are more even, with less trimming of oversized or fibrous pods.",
      ],
    },
    considerations: [
      {
        title: "Frozen chain integrity",
        text: "Frozen peas should be kept frozen throughout; agree how temperature records are shared during transit.",
      },
      {
        title: "Gentle handling of okra",
        text: "Okra marks and browns easily, so agree packing that limits pressure and movement.",
      },
      {
        title: "Seasonal fresh supply",
        text: "Fresh beans and okra are seasonal, while frozen peas can be offered beyond the fresh season subject to stock.",
      },
    ],
    takeaways: [
      "Bought-in frozen vegetables and fresh vegetables for cutting need separate specifications.",
      "Tenderness and length decide how well fresh pods cut and freeze.",
      "Delivery of fresh pods should follow the plant’s processing slots.",
      "A pea sample checked against the target mix avoids grade surprises.",
    ],
    insights: [
      "frozen-green-peas-size-grading-colour-and-iqf-quality",
      "okra-in-curries-gumbo-and-frozen-food-lines",
      "green-beans-for-retail-food-service-and-freezing",
    ],
  },
  {
    slug: "south-asian-vegetables-for-ethnic-grocery-importers",
    status: "illustrative",
    categories: ["agricultural"],
    title: "South Asian Vegetables for Ethnic Grocery Importers",
    subtitle:
      "How an importer serving South Asian grocery stores might specify okra, bitter gourd, drumstick and eggplant so shoppers find tender, well-graded produce on the shelf.",
    summary:
      "A hypothetical importer supplying South Asian grocery stores plans okra, bitter gourd, drumstick and eggplant, focusing on tenderness, length grading and freshness in transit.",
    industry: "Ethnic Grocery Retail",
    topic: "Tender, graded vegetables for ethnic grocery shelves",
    products: ["okra", "bitter-gourd", "drumstick", "eggplant"],
    keywords: ["ethnic grocery", "south asian", "okra", "bitter gourd", "drumstick", "brinjal", "karela"],
    intro: [
      "Grocery stores serving South Asian communities stock vegetables their shoppers know well and judge closely. Okra should snap rather than bend, bitter gourd should be firm and green, drumstick pods should be long and tender, and eggplant should be glossy and firm. Shoppers who cook bhindi, karela, sambar and baingan bharta notice quickly when produce is tired.",
      "This is a hypothetical, illustrative scenario: an importer supplying South Asian grocery stores and planning a mixed shipment of okra, bitter gourd, drumstick and eggplant. No real importer, store, destination or result is described.",
    ],
    overview: {
      application: "Fresh produce shelves in South Asian grocery stores",
      focus: "Tenderness, length grading and transit freshness for four familiar vegetables",
    },
    requirements: {
      intro: "For a mixed South Asian vegetable shipment, the importer would usually set out:",
      items: [
        {
          title: "Okra tenderness and length",
          text: "Young, tender pods with fresh green colour, sorted to a consistent length that shoppers recognise as good bhindi.",
        },
        {
          title: "Bitter gourd firmness and colour",
          text: "Firm, ridged, green gourds of a consistent size, without signs of ripening.",
        },
        {
          title: "Drumstick pod length",
          text: "Long, slender pods picked while tender, sorted by length and condition and bundled to the importer’s request.",
        },
        {
          title: "Eggplant variety and gloss",
          text: "The shape and colour the stores sell, such as long or round types, with glossy skin and firm flesh.",
        },
        {
          title: "Mixed-load handling",
          text: "Packing and cool handling suited to each vegetable when they travel in the same consignment.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the importer’s enquiry asks for ‘assorted Indian vegetables’ with total quantities only:",
      points: [
        "No length grade is given for okra or drumstick, although shoppers often pick by size.",
        "The eggplant variety is not named, so the shape may not match what stores usually stock.",
        "Eggplant’s sensitivity to chilling injury is not considered when the four vegetables share cool space.",
        "Bitter gourd ripening is not mentioned, although yellowing gourds are hard to sell.",
      ],
    },
    approach: {
      intro: "A structured way to plan the mixed shipment:",
      steps: [
        {
          title: "Name each vegetable and type",
          text: "List okra, bitter gourd, drumstick and the eggplant variety separately, with the shape stores expect.",
        },
        {
          title: "Set grading per vegetable",
          text: "Agree length ranges for okra and drumstick, size for bitter gourd and size and shape for eggplant.",
        },
        {
          title: "Agree packing that protects pods",
          text: "Use packing that keeps drumstick pods straight, limits pressure on okra and protects eggplant skin.",
        },
        {
          title: "Plan cool handling with chilling in mind",
          text: "Keep okra and drumstick cool and well-ventilated, and keep eggplant cool without chilling injury.",
        },
        {
          title: "Check on arrival",
          text: "Inspect tenderness, colour and gloss before produce goes to stores, using the agreed specification.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of a vegetable-by-vegetable plan. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Shoppers find okra and drumstick of a familiar length and tenderness.",
        "Eggplant on display matches the variety stores usually sell.",
        "Fewer yellowing bitter gourds and marked okra pods at unpacking.",
      ],
    },
    considerations: [
      {
        title: "Variety availability",
        text: "Eggplant and bitter gourd varieties depend on availability; confirm the types on offer with each enquiry.",
      },
      {
        title: "Seasonality",
        text: "All four vegetables are seasonal, so plan regular orders around expected availability.",
      },
      {
        title: "Store-ready packing",
        text: "Decide whether stores need bundles, bulk cartons or smaller packs, and agree it in the brief.",
      },
    ],
    takeaways: [
      "Shoppers buying familiar South Asian vegetables judge tenderness and length closely.",
      "Naming the eggplant variety avoids a shape mismatch on the shelf.",
      "A mixed load still needs handling that suits each vegetable, especially chilling-sensitive eggplant.",
      "Packing should protect drumstick pods and okra from bending and bruising.",
    ],
    insights: [
      "selecting-tender-okra-for-export-length-and-freshness",
      "bitter-gourd-quality-ridges-colour-and-firmness",
      "round-long-and-baby-eggplant-matching-variety-to-market",
    ],
  },
  {
    slug: "vegetables-for-ready-meal-manufacturers",
    status: "illustrative",
    categories: ["agricultural"],
    title: "Fresh and Frozen Vegetables for Ready-Meal Manufacturers",
    subtitle:
      "How a ready-meal producer making vegetable curries might specify elephant yam, eggplant and frozen peas for cutting yield, consistent pieces and reliable frozen supply.",
    summary:
      "A hypothetical ready-meal producer plans elephant yam, eggplant and frozen peas for curry recipes, focusing on cutting yield, even pieces and keeping the peas frozen.",
    industry: "Ready Meals",
    topic: "Vegetable inputs for curry-based ready meals",
    products: ["elephant-yam", "eggplant", "frozen-peas"],
    keywords: ["ready meals", "curry", "elephant yam", "suran", "eggplant", "frozen peas", "food manufacturing"],
    intro: [
      "Vegetable curries in a ready-meal range ask a lot of their ingredients. Elephant yam must be peeled and cubed before cooking, eggplant needs to hold its shape in sauce rather than collapse, and peas must arrive frozen and ready to add at the right stage. The way each ingredient is bought shapes yield, piece size and how consistent each portion looks.",
      "This is a hypothetical, illustrative scenario: a ready-meal producer preparing a sourcing brief for elephant yam, eggplant and frozen peas for its curry recipes. It describes no real manufacturer, volume or measured result.",
    ],
    overview: {
      application: "Chilled and frozen vegetable curry ready meals",
      focus: "Cutting yield, even piece size and frozen supply for curry ingredients",
    },
    requirements: {
      intro: "For curry-based ready meals, the producer would usually define:",
      items: [
        {
          title: "Elephant yam tuber size",
          text: "A tuber size that suits the peeling and cubing method, with firm, sound tubers and dense, starchy flesh.",
        },
        {
          title: "Eggplant type",
          text: "A shape and variety that cuts into even pieces and keeps its form in a cooked sauce, with firm flesh and glossy skin.",
        },
        {
          title: "Frozen pea grade",
          text: "Whole, free-flowing green peas in a grade that looks consistent in the finished curry.",
        },
        {
          title: "Delivery to the production plan",
          text: "Fresh vegetables timed to production runs, and frozen peas held frozen until they enter the kitchen.",
        },
        {
          title: "Packaging for the plant",
          text: "Pack types and sizes that suit the plant’s receiving, storage and handling.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the producer’s first brief lists the three ingredients only by name and weight:",
      points: [
        "Tuber size is open, although very irregular tubers lose more flesh during peeling.",
        "The eggplant variety is not stated, so pieces may break down differently from the recipe trials.",
        "Frozen peas and fresh vegetables are on one delivery plan, with no separate frozen handling.",
        "Storage on arrival is not defined for the tubers, which need dry, ventilated conditions.",
      ],
    },
    approach: {
      intro: "A way to connect each ingredient to the recipe and the line:",
      steps: [
        {
          title: "Trial with representative samples",
          text: "Run recipe trials with sample tubers, eggplant and peas that match the grades being quoted.",
        },
        {
          title: "Specify for cutting",
          text: "Write tuber size and condition for elephant yam and shape and firmness for eggplant around the cutting method.",
        },
        {
          title: "Agree the frozen route",
          text: "Arrange frozen peas in reefer shipment, kept frozen until use, separate from fresh deliveries.",
        },
        {
          title: "Set receiving conditions",
          text: "Store elephant yam cool, dry and well-ventilated, and keep eggplant cool while avoiding chilling injury.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of a recipe-led specification. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Better usable yield from tubers sized for the peeling and cubing method.",
        "Eggplant pieces that hold shape in sauce as they did in recipe trials.",
        "Peas that look and cook consistently from batch to batch.",
      ],
    },
    considerations: [
      {
        title: "Flesh colour varies",
        text: "Elephant yam flesh ranges from cream to pinkish depending on variety; confirm what suits the recipe’s appearance.",
      },
      {
        title: "Moisture and tubers",
        text: "Protect elephant yam from excess moisture in transit and storage to keep tubers sound.",
      },
      {
        title: "Frozen and fresh lead times",
        text: "Frozen peas can be offered beyond the fresh season subject to stock, while eggplant and yam follow seasonal availability.",
      },
    ],
    takeaways: [
      "Tuber size should be chosen with the peeling and cubing method in mind.",
      "The eggplant variety matters as much as freshness in a cooked sauce.",
      "Frozen peas need their own frozen route, separate from fresh deliveries.",
      "Recipe trials with representative samples make the specification realistic.",
    ],
    insights: [
      "elephant-yam-in-curries-chips-and-ethnic-retail",
      "frozen-peas-in-ready-meals-food-service-and-retail-packs",
      "eggplant-export-guide-gloss-shape-and-firmness",
    ],
  },
  {
    slug: "onion-garlic-and-chilli-for-paste-manufacturers",
    status: "illustrative",
    categories: ["agricultural"],
    title: "Onion, Garlic and Green Chilli for Paste Manufacturers",
    subtitle:
      "How a paste and sauce maker might specify fresh onions, garlic and green chillies for ginger-garlic, onion and chilli pastes, from bulb size to peeled cloves and pod condition.",
    summary:
      "A hypothetical paste manufacturer plans onions, garlic and green chillies for its pastes and sauces, weighing bulb size, peeled cloves and fresh chilli condition.",
    industry: "Paste Manufacturing",
    topic: "Fresh aromatics for paste and sauce production",
    products: ["onion", "garlic", "green-chili"],
    keywords: ["paste", "ginger garlic paste", "onion paste", "chilli sauce", "peeled garlic", "food processing"],
    intro: [
      "Paste and sauce makers turn fresh aromatics into consistent products, and the raw material sets the limits. Onion size and skin condition affect peeling, garlic can be bought as whole bulbs or as peeled cloves, and green chillies vary in heat by variety and must be fresh and firm when they reach the grinder.",
      "This is a hypothetical, illustrative scenario: a manufacturer of ginger-garlic, onion and chilli pastes preparing a brief for fresh onions, garlic and green chillies. It describes no real company, quantity or result.",
    ],
    overview: {
      application: "Ginger-garlic paste, onion paste, chilli pastes and sauces",
      focus: "Bulb size, garlic form and fresh chilli condition for paste production",
    },
    requirements: {
      intro: "For paste production, the manufacturer would typically set out:",
      items: [
        {
          title: "Onion type and bulb size",
          text: "Red, pink or white onions chosen for the paste’s colour, with a bulb size that suits the peeling method.",
        },
        {
          title: "Onion condition",
          text: "Firm bulbs with dry outer skins and no visible damage, since soft bulbs cause waste at peeling.",
        },
        {
          title: "Garlic form",
          text: "Whole bulbs sized for the plant’s peeling equipment, or peeled cloves on request where in-house peeling is not wanted.",
        },
        {
          title: "Green chilli condition and heat",
          text: "Whole, firm, glossy pods with damaged pods removed, and a variety chosen for the heat the recipe needs.",
        },
        {
          title: "Packaging",
          text: "Breathable bags for onions, mesh bags or cartons for garlic, and packing for chillies agreed with the supplier.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the manufacturer’s enquiry asks only for ‘processing grade’ onion, garlic and chilli:",
      points: [
        "‘Processing grade’ is not defined, so bulb size and condition could vary widely between offers.",
        "It is unclear whether whole garlic or peeled cloves would suit the plant better.",
        "Chilli heat is not mentioned, although it varies by variety and affects the recipe.",
        "Green chillies are perishable and need to be processed while fresh, but no timing is planned.",
      ],
    },
    approach: {
      intro: "A structured way to define processing-grade aromatics:",
      steps: [
        {
          title: "Define ‘processing grade’ in writing",
          text: "List the acceptable bulb size, skin and firmness for onions and garlic, and pod condition for chillies.",
        },
        {
          title: "Decide on garlic form",
          text: "Compare in-house peeling of whole bulbs with buying peeled cloves on request, and choose one per product line.",
        },
        {
          title: "Match chilli variety to heat",
          text: "Agree the variety and heat expectation using samples tested in the actual paste recipe.",
        },
        {
          title: "Plan storage and timing",
          text: "Keep onions and garlic cool, dry and well-ventilated, and schedule chilli deliveries close to processing.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of a defined processing grade. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Less peeling waste from bulbs sized for the equipment.",
        "More consistent paste colour and pungency across batches.",
        "Fresh chillies reach the grinder in firm condition.",
        "Quotations that describe the same grade, so they can be compared.",
      ],
    },
    considerations: [
      {
        title: "Moisture and sprouting",
        text: "Moisture encourages sprouting and mould in onions, so agree breathable packing and dry storage.",
      },
      {
        title: "Seasonal supply",
        text: "Onion, garlic and chilli supply is seasonal; share annual volumes so supply can be planned.",
      },
      {
        title: "Recipe trials",
        text: "Heat and flavour vary by variety, so test samples in the real recipe before confirming.",
      },
    ],
    takeaways: [
      "‘Processing grade’ needs a written definition of size and condition.",
      "Whole bulbs or peeled cloves is a choice about the plant, not just price.",
      "Chilli heat varies by variety, so specify it through recipe trials.",
      "Fresh chillies should be scheduled close to processing.",
    ],
    insights: [
      "fresh-garlic-for-food-processing-applications-forms-and-handling",
      "green-chillies-in-sauces-pickles-and-food-processing",
      "red-pink-and-white-onions-choosing-the-right-type",
    ],
  },
  {
    slug: "cold-chain-planning-for-perishable-vegetables",
    status: "illustrative",
    categories: ["agricultural"],
    title: "Cold-Chain Planning for Perishable Vegetables",
    subtitle:
      "How an importer might plan cool transport for cucumber, green chilli, green beans and okra, recognising that each has different handling needs and that some are sensitive to chilling.",
    summary:
      "A hypothetical importer plans reefer transport for cucumber, green chilli, beans and okra, covering prompt cooling, per-product conditions, chilling injury and transit time.",
    industry: "Cold-Chain Logistics",
    topic: "Cool-chain planning for highly perishable vegetables",
    products: ["cucumber", "green-chili", "beans", "okra"],
    keywords: ["cold chain", "reefer", "pre-cooling", "chilling injury", "perishable", "transit", "humidity"],
    intro: [
      "Cucumbers, green chillies, green beans and okra are all highly perishable, but they are not perishable in the same way. Cucumbers can suffer chilling injury if held too cold, beans keep best cool and humid, okra prefers cool and well-ventilated conditions and bruises easily, and green chillies are stored cool, dry and well-ventilated. A single setting for all four is a compromise that needs to be planned rather than assumed.",
      "This is a hypothetical, illustrative scenario: an importer planning reefer transport for these four vegetables. Conditions are described qualitatively from the product pages; no real shipment, temperature record or result is described.",
    ],
    overview: {
      application: "Fresh vegetable imports for wholesale and food-service distribution",
      focus: "Prompt cooling, per-product storage conditions and transit planning",
    },
    requirements: {
      intro: "Before booking reefer space, the importer would usually establish:",
      items: [
        {
          title: "Storage needs per vegetable",
          text: "Cucumber: cool, well-ventilated, suitable humidity, avoid chilling injury. Beans: cool and humid. Okra and green chilli: cool and well-ventilated.",
        },
        {
          title: "Prompt cooling after harvest",
          text: "How quickly produce is cooled after picking and packing, since field heat shortens freshness.",
        },
        {
          title: "Reefer settings",
          text: "Temperature, humidity and ventilation settings agreed between buyer, supplier and carrier for the specific load.",
        },
        {
          title: "Transit time",
          text: "A realistic door-to-door transit time, including waiting at ports or depots.",
        },
        {
          title: "Ventilated, protective packing",
          text: "Packing that allows cool air to circulate and protects okra and chillies from pressure.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the importer’s plan treats the four vegetables as one ‘fresh vegetables’ load:",
      points: [
        "One reefer setting is chosen without checking whether it risks chilling injury to cucumbers.",
        "There is no plan for cooling produce promptly after harvest before it is loaded.",
        "Packing for okra and chillies does not consider airflow or protection from crushing.",
        "Transit time is estimated from sailing time only, without depot and clearance delays.",
      ],
    },
    approach: {
      intro: "A practical sequence for planning the cool chain:",
      steps: [
        {
          title: "List each product’s storage conditions",
          text: "Write down the storage conditions stated for each vegetable and note where they conflict, such as cucumber chilling sensitivity.",
        },
        {
          title: "Decide whether to combine or split",
          text: "Judge whether one setting can suit the mixed load, or whether chilling-sensitive cucumbers should travel separately.",
        },
        {
          title: "Plan cooling at origin",
          text: "Agree that produce is cooled promptly after harvest and packing, and loaded without long waits in the heat.",
        },
        {
          title: "Agree settings and monitoring",
          text: "Confirm reefer settings with the supplier and carrier, and how conditions in transit will be recorded.",
        },
        {
          title: "Inspect on arrival",
          text: "Check firmness, colour and signs of chilling injury or bruising before produce is distributed.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of product-by-product cold-chain planning. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Fewer cucumbers showing chilling injury after transit.",
        "Beans, okra and chillies that stay firmer and fresher on arrival.",
        "Clearer responsibility between supplier, carrier and importer for conditions in transit.",
      ],
    },
    considerations: [
      {
        title: "Chilling injury",
        text: "Cucumbers can be damaged by temperatures that are too low; agree settings that keep them cool without chilling.",
      },
      {
        title: "Shelf life depends on handling",
        text: "How long produce stays fresh depends on grade, storage and handling, so plan transit time conservatively.",
      },
      {
        title: "Buyer-specific requirements",
        text: "Share your own storage and transport requirements so they can be followed from packing to loading.",
      },
    ],
    takeaways: [
      "Perishable vegetables differ in how they should be kept cool.",
      "Cucumbers need protection from chilling injury, not just cold.",
      "Prompt cooling after harvest is part of the cold chain.",
      "Realistic transit times include depot and clearance delays.",
    ],
    insights: [
      "why-cucumbers-need-careful-temperature-control",
      "pre-cooling-green-beans-for-longer-freshness",
      "how-to-store-fresh-green-chillies-temperature-handling-and-shelf-life",
    ],
  },
  {
    slug: "shipping-onions-garlic-and-elephant-yam",
    status: "illustrative",
    categories: ["agricultural"],
    title: "Shipping Onions, Garlic and Elephant Yam Over Long Distances",
    subtitle:
      "How a buyer of storable bulbs and tubers might plan ventilation, dry storage and breathable packing so onions, garlic and elephant yam arrive firm and sound.",
    summary:
      "A hypothetical buyer plans long-distance shipments of onions, garlic and elephant yam, focusing on curing, ventilation, dry storage and breathable packaging.",
    industry: "Wholesale Distribution",
    topic: "Ventilation and dry storage for bulbs and tubers",
    products: ["onion", "garlic", "elephant-yam"],
    keywords: ["onion", "garlic", "elephant yam", "ventilation", "curing", "sprouting", "breathable packaging"],
    intro: [
      "Onions, garlic and elephant yam are among the more storable fresh products, which is why they are often shipped long distances. They still need care. Moisture encourages sprouting and mould in onions, garlic should be kept cool, dry and well-ventilated, and elephant yam tubers need protection from excess moisture and rough handling.",
      "This is a hypothetical, illustrative scenario: a buyer of storable bulbs and tubers planning long-distance shipments of onions, garlic and elephant yam. It describes no real buyer, route or measured result.",
    ],
    overview: {
      application: "Wholesale and ethnic-retail distribution of bulbs and tubers",
      focus: "Ventilation, dry storage, curing and breathable packaging over long journeys",
    },
    requirements: {
      intro: "For long-distance bulb and tuber shipments, the buyer would usually define:",
      items: [
        {
          title: "Sound, well-cured produce",
          text: "Onions with dry outer skins, firm garlic bulbs and firm, well-cured elephant yam tubers, free from visible damage.",
        },
        {
          title: "Breathable packaging",
          text: "Breathable bags for onions rather than sealed plastic, mesh bags or cartons for garlic, and packing for yam agreed per shipment.",
        },
        {
          title: "Airflow in the load",
          text: "Stacking that leaves space for air to move and avoids crushing the lower layers.",
        },
        {
          title: "Cool, dry storage",
          text: "Cool, dry and well-ventilated conditions for all three, away from moisture, heat and direct sunlight.",
        },
        {
          title: "Size and grade",
          text: "Bulb and tuber sizes as per the buyer’s market, agreed before packing.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the buyer has so far treated these products as ‘hardy’ and planned little beyond the booking:",
      points: [
        "No packaging type is specified, and sealed plastic could trap moisture around the bulbs.",
        "Container stacking and airflow are not discussed, so lower layers may be crushed or poorly ventilated.",
        "The condition of skins and curing at packing is not part of the brief.",
        "Storage after arrival is not planned, although produce may wait in a depot before sale.",
      ],
    },
    approach: {
      intro: "A way to protect bulbs and tubers from packing to sale:",
      steps: [
        {
          title: "Specify condition at packing",
          text: "Require firm bulbs with dry skins and firm, sound tubers, with soft or damaged units removed before packing.",
        },
        {
          title: "Choose breathable packaging",
          text: "Agree breathable bags or cartons that let air move around the produce, and avoid sealed plastic.",
        },
        {
          title: "Plan stacking and ventilation",
          text: "Confirm how bags are stacked to keep airflow and avoid crushing, and how the container is ventilated.",
        },
        {
          title: "Keep it cool and dry at every stage",
          text: "Store in cool, dry, well-ventilated conditions at origin, in transit and at the depot, away from moisture and sun.",
        },
        {
          title: "Inspect and rotate",
          text: "Check stock regularly after arrival and remove soft, sprouting or damaged units early.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of planning for ventilation and dryness. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Fewer sprouting or mouldy onions and garlic bulbs on arrival.",
        "Elephant yam tubers that stay firm and sound through the journey.",
        "Less crushing damage in the lower layers of the load.",
      ],
    },
    considerations: [
      {
        title: "Shelf life varies",
        text: "How long onions keep depends on variety and storage conditions, so plan sales timing around the actual lot.",
      },
      {
        title: "Gentle handling",
        text: "Handle bags and tubers gently during loading and unloading to prevent bruising and skin damage.",
      },
      {
        title: "Onion type",
        text: "Red, pink and white onions are available depending on season; confirm which your market prefers.",
      },
    ],
    takeaways: [
      "Storable produce still needs ventilation and dryness to stay sound.",
      "Breathable packaging is part of the specification for onions and garlic.",
      "Stacking for airflow protects the lower layers of the load.",
      "Regular inspection after arrival catches sprouting and soft units early.",
    ],
    insights: [
      "ventilation-and-curing-keeping-onions-sound-in-transit",
      "how-to-store-fresh-garlic-prevent-sprouting-and-maintain-quality",
      "handling-and-storing-elephant-yam-for-long-journeys",
    ],
  },
  {
    slug: "cabbage-and-cucumber-for-pickles-and-fermented-foods",
    status: "illustrative",
    categories: ["agricultural"],
    title: "Cabbage and Cucumber for Pickles and Fermented Foods",
    subtitle:
      "How a processor making sauerkraut, kimchi-style ferments and pickles might specify cabbage firmness and cucumber size so the raw vegetables suit fermentation and brining.",
    summary:
      "A hypothetical processor plans cabbage and cucumber for sauerkraut, kimchi-style ferments and pickles, focusing on head firmness, cucumber size and freshness at processing.",
    industry: "Pickles & Fermented Foods",
    topic: "Raw vegetables for fermentation and pickling",
    products: ["cabbage", "cucumber"],
    keywords: ["sauerkraut", "kimchi", "pickles", "fermentation", "cabbage", "cucumber", "brine"],
    intro: [
      "Fermented and pickled vegetables keep the character of the raw material. Cabbage for sauerkraut or kimchi-style ferments should be firm and tightly layered so shreds stay crisp, and cucumbers for pickling should be firm and of a size that suits the jar or the cut. Vegetables that have softened before processing tend to soften further in brine.",
      "This is a hypothetical, illustrative scenario: a processor of sauerkraut, kimchi-style ferments and pickles planning cabbage and cucumber supply. It describes no real company, recipe or measured result.",
    ],
    overview: {
      application: "Sauerkraut, kimchi-style ferments, pickles and relishes",
      focus: "Head firmness, cucumber size and freshness at the point of processing",
    },
    requirements: {
      intro: "For fermentation and pickling, the processor would usually define:",
      items: [
        {
          title: "Firm, compact cabbage",
          text: "Firm heads with tightly layered leaves and a head size that suits coring and shredding.",
        },
        {
          title: "Leaf condition",
          text: "Heads checked for leaf condition, with damaged outer leaves kept to a level the processor can trim.",
        },
        {
          title: "Cucumber size for the pickle",
          text: "A length and size range that suits whole pickles, spears or slices, agreed for each product.",
        },
        {
          title: "Firmness at processing",
          text: "Firm, crisp cucumbers and cabbage delivered close to the processing date.",
        },
        {
          title: "Variety",
          text: "Cucumber and cabbage variety discussed with the supplier, since colour and texture vary by variety.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the processor’s first order uses fresh-market descriptions only:",
      points: [
        "Cucumber size is not linked to the pickle format, so some fruit may not fit jars or cut evenly.",
        "Cabbage head size and compactness are not specified, although loose heads give softer shreds.",
        "Delivery timing is not tied to fermentation batches, so vegetables may wait and lose crispness.",
      ],
    },
    approach: {
      intro: "A way to specify vegetables for fermentation rather than for the shelf:",
      steps: [
        {
          title: "Start from the product format",
          text: "List each ferment and pickle, and the cabbage shred or cucumber size each one needs.",
        },
        {
          title: "Specify firmness and compactness",
          text: "Require firm, compact cabbage heads and firm, crisp cucumbers, checked against samples.",
        },
        {
          title: "Plan storage before processing",
          text: "Keep cabbage cool, humid and well-ventilated, and cucumbers cool without chilling injury, until processing.",
        },
        {
          title: "Schedule deliveries to batches",
          text: "Time deliveries so vegetables move into brine or salting soon after they arrive.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of a fermentation-focused specification. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Crisper shreds in sauerkraut and kimchi-style ferments.",
        "Cucumbers that fit the pickle format with less sorting.",
        "Fewer soft pieces caused by vegetables waiting before processing.",
      ],
    },
    considerations: [
      {
        title: "Seasonal supply",
        text: "Cabbage and cucumber supply is seasonal; align fermentation calendars with expected availability.",
      },
      {
        title: "Chilling injury in cucumbers",
        text: "Cucumbers held too cold can be damaged, which affects texture after pickling.",
      },
      {
        title: "Trimming allowance",
        text: "Agree how much outer-leaf trimming on cabbage is acceptable before shredding.",
      },
    ],
    takeaways: [
      "Fermented products reflect the firmness of the raw vegetables.",
      "Cucumber size should follow the pickle format.",
      "Compact cabbage heads give crisper shreds.",
      "Deliveries timed to batches keep vegetables crisp until processing.",
    ],
    insights: [
      "cabbage-for-salads-coleslaw-and-food-processing",
      "cucumbers-for-salads-pickling-and-fresh-cut-lines",
    ],
  },
  {
    slug: "traditional-vegetables-for-restaurants-and-caterers",
    status: "illustrative",
    categories: ["agricultural"],
    title: "Traditional Vegetables for Restaurants and Caterers",
    subtitle:
      "How a food-service buyer supplying Indian restaurants and caterers might specify drumstick, bitter gourd and elephant yam for sambar, stir-fries and curries.",
    summary:
      "A hypothetical food-service buyer plans drumstick, bitter gourd and elephant yam for Indian restaurants and caterers, focusing on pod length, tenderness, trimming and steady supply.",
    industry: "Restaurants & Catering",
    topic: "Traditional vegetables for Indian food-service menus",
    products: ["drumstick", "bitter-gourd", "elephant-yam"],
    keywords: ["restaurants", "catering", "sambar", "drumstick", "karela", "elephant yam", "indian cuisine"],
    intro: [
      "Indian restaurants and caterers rely on traditional vegetables for dishes such as sambar, stuffed karela and yam curries. Chefs want drumstick pods that are tender rather than woody, bitter gourds that are firm and green, and elephant yam tubers that are sound and easy to peel and cut. When one of them is missing or poor, a menu item suffers.",
      "This is a hypothetical, illustrative scenario: a food-service buyer supplying Indian restaurants and caterers with drumstick, bitter gourd and elephant yam. No real buyer, restaurant or result is described.",
    ],
    overview: {
      application: "Indian restaurant and catering kitchens: sambar, stir-fries, stuffed dishes and curries",
      focus: "Pod length, tenderness, trimming and consistent supply for menu vegetables",
    },
    requirements: {
      intro: "A food-service buyer would usually set out:",
      items: [
        {
          title: "Drumstick length and tenderness",
          text: "Long, slender pods picked while tender, cleaned and trimmed, in a length that suits cutting for sambar and curries.",
        },
        {
          title: "Bitter gourd firmness and size",
          text: "Firm, ridged, green gourds of a consistent size for slicing or stuffing.",
        },
        {
          title: "Elephant yam tuber size",
          text: "Firm, well-cured tubers in a size that kitchen staff can peel and cube without excess waste.",
        },
        {
          title: "Kitchen-friendly packing",
          text: "Bundled drumsticks and pack sizes that suit restaurant and catering stores.",
        },
        {
          title: "Regular delivery pattern",
          text: "Repeat deliveries matched to menu demand, with seasonal gaps discussed in advance.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the buyer orders these vegetables on an ad hoc basis:",
      points: [
        "Drumstick pods vary in length and some arrive fibrous, which slows prep and affects dishes.",
        "Bitter gourd size varies, so stuffed karela portions are uneven.",
        "Elephant yam tubers arrive in very mixed sizes, making peeling harder for kitchen staff.",
        "There is no plan for seasonal availability, so menu items are sometimes unavailable.",
      ],
    },
    approach: {
      intro: "A way to give kitchens dependable traditional vegetables:",
      steps: [
        {
          title: "Ask chefs what they need",
          text: "Agree pod length, gourd size and tuber size with the chefs who prepare the dishes.",
        },
        {
          title: "Write a short specification",
          text: "Record tenderness, length, firmness and size for each vegetable, with photos or samples as a reference.",
        },
        {
          title: "Agree trimming and bundling",
          text: "Confirm that drumsticks are cleaned, trimmed and bundled, and how gourds and tubers are packed.",
        },
        {
          title: "Plan a delivery calendar",
          text: "Set regular deliveries around menu demand and seasonal availability, discussed with the supplier.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of a chef-led specification. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Faster kitchen prep with more uniform, tender pods and gourds.",
        "More even portions for stuffed and sliced dishes.",
        "Fewer menu gaps thanks to a planned delivery calendar.",
      ],
    },
    considerations: [
      {
        title: "Storage in the kitchen",
        text: "Keep drumsticks cool and well-ventilated, and elephant yam cool, dry and well-ventilated, away from moisture.",
      },
      {
        title: "Bitter gourd ripening",
        text: "Bitter gourd is used green; confirm handling and storage with the supplier so gourds are used before they turn.",
      },
      {
        title: "Seasonal availability",
        text: "All three are seasonal; plan alternatives or larger orders around expected gaps.",
      },
    ],
    takeaways: [
      "Chefs should help set the length, size and tenderness specification.",
      "Tender drumstick pods matter more for sambar than long ones alone.",
      "Tuber size affects peeling time and waste in busy kitchens.",
      "A delivery calendar keeps traditional dishes on the menu.",
    ],
    insights: [
      "drumsticks-in-sambar-curries-and-frozen-packs",
      "bitter-gourd-in-asian-cooking-and-juices",
      "elephant-foot-yam-what-importers-should-look-for",
    ],
  },
  {
    slug: "eggplant-for-grilled-and-dip-products",
    status: "illustrative",
    categories: ["agricultural"],
    title: "Eggplant for Grilled Products and Dips",
    subtitle:
      "How a processor making grilled eggplant and smoky dips such as baba ganoush might choose variety and shape, specify glossy, firm fruit and plan around chilling injury.",
    summary:
      "A hypothetical processor plans eggplant for grilled slices and baba ganoush-style dips, focusing on variety and shape, glossy firm fruit, chilling injury and processing timing.",
    industry: "Food Processing",
    topic: "Eggplant variety and condition for grilling and dips",
    products: ["eggplant"],
    keywords: ["eggplant", "aubergine", "brinjal", "baba ganoush", "grilled", "dips", "chilling injury"],
    intro: [
      "Eggplant comes in many shapes and colours, and the right one depends on the product. Grilled slices benefit from fruit that cuts into even rounds or lengths, while smoky dips such as baba ganoush depend on fruit that roasts well and has firm, sound flesh. Eggplant is also sensitive to chilling injury, which can mark the skin and affect the flesh.",
      "This is a hypothetical, illustrative scenario: a processor of grilled eggplant and eggplant dips preparing a sourcing brief. It describes no real processor, recipe or measured result.",
    ],
    overview: {
      application: "Grilled-and-frozen eggplant, grilled antipasti and roasted eggplant dips",
      focus: "Variety and shape choice, fruit condition and timing to processing",
    },
    requirements: {
      intro: "For grilled products and dips, the processor would usually define:",
      items: [
        {
          title: "Variety and shape",
          text: "The shape and colour that suit each product, such as long fruit for lengthwise grilling or rounder fruit for roasting.",
        },
        {
          title: "Glossy, firm fruit",
          text: "Firm fruit with glossy skin and no soft spots, since dull, soft fruit tends to be past its best.",
        },
        {
          title: "Size range",
          text: "A size range that suits the slicer or roasting method, so pieces and roasting times stay even.",
        },
        {
          title: "Cool storage without chilling",
          text: "Cool conditions that avoid chilling injury from packing to the processing plant.",
        },
        {
          title: "Processing timing",
          text: "Delivery scheduled so fruit is grilled or roasted soon after it arrives.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the processor’s enquiry asks only for ‘eggplant, processing quality’:",
      points: [
        "No variety or shape is named, so the fruit may not suit lengthwise grilling.",
        "Size is open, which leads to uneven slices and roasting times.",
        "Storage is planned at the coldest available setting, risking chilling injury.",
        "Delivery is not linked to production days, so fruit may wait and soften.",
      ],
    },
    approach: {
      intro: "A way to match eggplant to each product:",
      steps: [
        {
          title: "Define each product’s needs",
          text: "Describe the cut for grilled products and the roasting method for dips, and the fruit each needs.",
        },
        {
          title: "Choose variety from what is available",
          text: "Ask which shapes and colours are available and trial them in both products.",
        },
        {
          title: "Write condition criteria",
          text: "Specify glossy skin, firmness, size range and freedom from soft spots, using samples as reference.",
        },
        {
          title: "Plan cool handling and timing",
          text: "Agree cool storage that avoids chilling injury, and deliveries timed to production days.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of a product-led eggplant specification. These are typical results of good preparation, not measured outcomes:",
      points: [
        "More even grilled slices from fruit of a suitable shape and size.",
        "Dips made from firm, sound fruit with fewer soft spots to remove.",
        "Fewer fruit marked by chilling injury on arrival.",
      ],
    },
    considerations: [
      {
        title: "Variety availability",
        text: "The eggplant varieties offered depend on availability; confirm shapes and colours with each enquiry.",
      },
      {
        title: "Chilling sensitivity",
        text: "Eggplant should be kept cool, but conditions that are too cold can cause chilling injury.",
      },
      {
        title: "Two products, two specs",
        text: "Grilled products and dips may suit different shapes; consider separate specifications.",
      },
    ],
    takeaways: [
      "The best eggplant for grilling may differ from the best for dips.",
      "Glossy skin and firm flesh are simple, visible quality checks.",
      "Cool storage should avoid chilling injury.",
      "Processing soon after arrival protects texture.",
    ],
    insights: [
      "round-long-and-baby-eggplant-matching-variety-to-market",
      "protecting-eggplant-from-chilling-injury-in-transit",
      "eggplant-export-guide-gloss-shape-and-firmness",
    ],
  },
  {
    slug: "specifying-frozen-peas-for-food-service",
    status: "illustrative",
    categories: ["agricultural"],
    title: "Specifying Frozen Peas for Food-Service Kitchens",
    subtitle:
      "How a food-service distributor might specify frozen green peas by grade, appearance and pack size, and keep them frozen from the supplier’s store to the kitchen freezer.",
    summary:
      "A hypothetical food-service distributor plans frozen green peas, focusing on free-flowing peas, grade, kitchen-friendly pack sizes and keeping the product frozen throughout.",
    industry: "Food Service",
    topic: "Grade, pack size and frozen handling for peas",
    products: ["frozen-peas"],
    keywords: ["frozen peas", "green peas", "food service", "free-flowing", "pack size", "reefer", "frozen storage"],
    intro: [
      "Frozen peas are a kitchen staple because they need no shelling and can be portioned straight from the bag. That convenience depends on the peas staying whole and free-flowing, which in turn depends on the grade bought and on the product staying frozen from the supplier’s store to the kitchen freezer.",
      "This is a hypothetical, illustrative scenario: a food-service distributor preparing a specification for frozen green peas. It describes no real distributor, volume or measured result.",
    ],
    overview: {
      application: "Restaurant, catering and institutional kitchens",
      focus: "Pea grade, free flow, pack size and keeping the product frozen",
    },
    requirements: {
      intro: "For food-service frozen peas, the distributor would usually set out:",
      items: [
        {
          title: "Grade",
          text: "The pea grade wanted for the distributor’s customers, agreed against a sample.",
        },
        {
          title: "Appearance",
          text: "Whole, green, free-flowing peas that portion easily without breaking apart clumps.",
        },
        {
          title: "Pack size",
          text: "Pack sizes that suit kitchen use and freezer space, as per the distributor’s requirements.",
        },
        {
          title: "Frozen chain",
          text: "Product kept frozen as per its specification and shipped frozen in reefer containers.",
        },
        {
          title: "Labelling",
          text: "Pack labelling that meets the destination market’s rules and the distributor’s own needs.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the distributor’s current approach is to buy whichever frozen peas are cheapest:",
      points: [
        "Grade varies between lots, so kitchens notice changes in the look of their dishes.",
        "Some packs arrive with clumped peas, a sign that they may have partly thawed and refrozen.",
        "Pack sizes do not suit smaller kitchens, leading to opened packs sitting in freezers.",
      ],
    },
    approach: {
      intro: "A structured way to specify frozen peas for kitchens:",
      steps: [
        {
          title: "Set the grade with samples",
          text: "Compare samples for size, colour and free flow, and agree one grade for regular supply.",
        },
        {
          title: "Choose pack sizes",
          text: "Offer pack sizes that match how much a typical customer kitchen uses at a time.",
        },
        {
          title: "Confirm the frozen route",
          text: "Agree reefer shipment, frozen storage and how temperature records are shared at each handover.",
        },
        {
          title: "Check on receipt",
          text: "Inspect packs for free flow and signs of thawing before they enter the distributor’s freezer.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of a written frozen pea specification. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Consistent pea appearance from lot to lot.",
        "Free-flowing peas that are quick to portion in kitchens.",
        "Clearer checks for thawing at each handover.",
      ],
    },
    considerations: [
      {
        title: "Availability",
        text: "Frozen peas can be offered beyond the fresh season, subject to stock; share your timing early.",
      },
      {
        title: "Frozen storage on arrival",
        text: "Move packs into frozen storage promptly; delays at the dock are a common weak point.",
      },
      {
        title: "Market labelling rules",
        text: "Pack labelling depends on destination-market rules; confirm requirements before printing.",
      },
    ],
    takeaways: [
      "A defined grade keeps dishes looking the same from lot to lot.",
      "Free-flowing peas are a quick check that the product stayed frozen.",
      "Pack size should match how kitchens actually use peas.",
      "Every handover is part of the frozen chain.",
    ],
    insights: [
      "maintaining-the-cold-chain-for-frozen-peas",
      "frozen-green-peas-size-grading-colour-and-iqf-quality",
      "frozen-peas-in-ready-meals-food-service-and-retail-packs",
    ],
  },
  {
    slug: "green-beans-and-okra-for-retail-packs",
    status: "illustrative",
    categories: ["agricultural"],
    title: "Green Beans and Okra for Supermarket Retail Packs",
    subtitle:
      "How a retail packer selling prepacked green beans and okra might specify length, colour and pack format so packs look uniform on the shelf despite a short fresh life.",
    summary:
      "A hypothetical retail packer plans prepacked green beans and okra, focusing on length uniformity, fresh colour, pack format and the short fresh life of both.",
    industry: "Supermarket Retail",
    topic: "Uniform beans and okra for prepacked retail",
    products: ["beans", "okra"],
    keywords: ["retail packs", "supermarket", "green beans", "okra", "prepacked", "uniform length", "shelf"],
    intro: [
      "In a clear retail pack, every pod is on display. Shoppers notice when green beans vary in length or colour, or when okra pods are marked or browning. Both vegetables also have a short fresh life, so the time between harvest, packing and the shelf matters as much as how they are graded.",
      "This is a hypothetical, illustrative scenario: a retail packer preparing prepacked green beans and okra for supermarkets. It describes no real packer, retailer or measured result.",
    ],
    overview: {
      application: "Prepacked fresh green beans and okra for supermarket shelves",
      focus: "Length uniformity, colour, pack format and short fresh life",
    },
    requirements: {
      intro: "For prepacked retail beans and okra, the packer would usually define:",
      items: [
        {
          title: "Length uniformity",
          text: "A narrow length range for beans and okra so pods line up neatly in each pack.",
        },
        {
          title: "Colour and freshness",
          text: "Bright green beans and fresh green okra, without yellowing, browning or marks.",
        },
        {
          title: "Tenderness",
          text: "Young, tender okra and crisp, straight beans that snap rather than bend.",
        },
        {
          title: "Bulk pack for the packhouse",
          text: "Ventilated bulk packaging that protects pods until they are repacked into retail packs.",
        },
        {
          title: "Cool handling",
          text: "Cool, humid conditions for beans and cool, well-ventilated conditions for okra.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the packer currently buys loose beans and okra and sorts them in-house:",
      points: [
        "Without a length range, a large share of pods needs re-sorting before packing.",
        "Okra arrives with pressure marks from packing that limits airflow and adds weight on the pods.",
        "Produce sometimes waits before packing, which shortens the time it looks fresh on the shelf.",
      ],
    },
    approach: {
      intro: "A way to bring retail-ready raw material into the packhouse:",
      steps: [
        {
          title: "Define the retail look",
          text: "Agree the length range, colour and tenderness that the finished packs must show.",
        },
        {
          title: "Grade at origin",
          text: "Ask for beans and okra sorted by length and condition before shipment, against the agreed ranges.",
        },
        {
          title: "Protect the pods",
          text: "Use ventilated packaging and gentle handling to limit bruising and browning of okra.",
        },
        {
          title: "Shorten waiting time",
          text: "Schedule deliveries close to packing days and keep produce cool until it is packed.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of grading for retail before shipment. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Retail packs that look more uniform with less in-house re-sorting.",
        "Fewer marked or browning okra pods at packing.",
        "More time on the shelf looking fresh, thanks to shorter waits before packing.",
      ],
    },
    considerations: [
      {
        title: "Short fresh life",
        text: "Beans and okra are highly perishable; plan delivery frequency around packing and sales.",
      },
      {
        title: "Grading tolerance",
        text: "Agree how much variation in length is acceptable, since natural produce is never perfectly even.",
      },
      {
        title: "Retail labelling",
        text: "Retail pack labelling depends on destination-market rules and the retailer’s requirements.",
      },
    ],
    takeaways: [
      "Clear retail packs make length and colour differences obvious.",
      "Grading at origin reduces re-sorting at the packhouse.",
      "Okra needs gentle, ventilated packing to avoid marks and browning.",
      "Short waits before packing extend how long produce looks fresh.",
    ],
    insights: [
      "fresh-green-beans-snap-straightness-and-size-grading",
      "handling-okra-gently-to-avoid-bruising-and-browning",
      "green-beans-for-retail-food-service-and-freezing",
    ],
  },
  {
    slug: "cabbage-for-coleslaw-and-shredded-packs",
    status: "illustrative",
    categories: ["agricultural"],
    title: "Cabbage for Coleslaw and Shredded Salad Packs",
    subtitle:
      "How a fresh-cut processor making coleslaw and shredded packs might specify firm, compact cabbage heads of the right size to improve shredding yield and reduce trimming.",
    summary:
      "A hypothetical fresh-cut processor plans cabbage for coleslaw and shredded packs, focusing on firm compact heads, head size for coring and shredding, cool storage and trim loss.",
    industry: "Fresh-Cut Processing",
    topic: "Cabbage heads for coring and shredding",
    products: ["cabbage"],
    keywords: ["cabbage", "coleslaw", "shredded cabbage", "fresh-cut", "salad packs", "head size", "trimming"],
    intro: [
      "For a fresh-cut processor, a cabbage head is raw material for a machine. Heads that are firm and compact core and shred cleanly and give crisp, even strands, while loose or oversized heads slow the line and lose more leaves to trimming. The condition of the outer leaves decides how much is removed before the head even reaches the shredder.",
      "This is a hypothetical, illustrative scenario: a fresh-cut processor sourcing cabbage for coleslaw and shredded salad packs. It describes no real processor, yield figure or measured result.",
    ],
    overview: {
      application: "Coleslaw, shredded salad packs and fresh-cut mixes",
      focus: "Head firmness, head size for coring and shredding, and trim loss",
    },
    requirements: {
      intro: "For shredding lines, the processor would usually define:",
      items: [
        {
          title: "Firm, compact heads",
          text: "Round, firm heads with tightly layered leaves that shred into crisp, even strands.",
        },
        {
          title: "Head size for the line",
          text: "A head size range that suits the coring and shredding equipment, as per the processor’s requirements.",
        },
        {
          title: "Outer leaf condition",
          text: "Heads checked for leaf condition, with a clear limit on damaged or loose outer leaves.",
        },
        {
          title: "Colour",
          text: "Green colour, subject to variety, that gives the coleslaw its expected look.",
        },
        {
          title: "Cool storage",
          text: "Cool, humid and well-ventilated conditions from packing to the processing plant.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the processor’s current cabbage arrives in a wide range of head sizes and conditions:",
      points: [
        "Oversized heads have to be cut by hand before coring, slowing the line.",
        "Loose heads give softer, uneven shreds in coleslaw.",
        "Damaged outer leaves add to trimming waste before processing starts.",
      ],
    },
    approach: {
      intro: "A way to specify cabbage for the shredding line:",
      steps: [
        {
          title: "Measure what the line handles",
          text: "Note the head size the corer and shredder handle best and use it to set the size range.",
        },
        {
          title: "Specify firmness and compactness",
          text: "Require firm, compact heads, checked against samples, rather than buying by weight alone.",
        },
        {
          title: "Set an outer-leaf standard",
          text: "Agree how much outer-leaf damage is acceptable and how heads are protected in packing.",
        },
        {
          title: "Keep heads cool until processing",
          text: "Store cool, humid and well-ventilated, away from excessive heat, and process in order of arrival.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of a line-led cabbage specification. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Smoother coring and shredding with fewer heads cut by hand.",
        "Crisper, more even shreds in coleslaw and salad packs.",
        "Less trimming of damaged outer leaves.",
      ],
    },
    considerations: [
      {
        title: "Variety and season",
        text: "Head size and colour vary with variety and season; confirm availability with each enquiry.",
      },
      {
        title: "Handling damage",
        text: "Heads should be handled carefully in loading and unloading to protect outer leaves.",
      },
      {
        title: "Shelf life of fresh-cut packs",
        text: "Fresh-cut shelf life depends on the processor’s own hygiene and packing, as well as raw cabbage quality.",
      },
    ],
    takeaways: [
      "Cabbage for shredding should be specified by the line, not only by weight.",
      "Firm, compact heads give crisper coleslaw.",
      "Outer-leaf condition decides trimming loss.",
      "Cool, humid storage keeps heads crisp until processing.",
    ],
    insights: [
      "choosing-export-quality-cabbage-head-weight-and-compactness",
      "keeping-cabbage-crisp-with-cool-chain-handling",
      "cabbage-for-salads-coleslaw-and-food-processing",
    ],
  },
  {
    slug: "bitter-gourd-for-chips-pickles-and-dried-slices",
    status: "illustrative",
    categories: ["agricultural"],
    title: "Bitter Gourd for Chips, Pickles and Dried Slices",
    subtitle:
      "How a processor turning bitter gourd into chips, pickles and dried slices might specify firm green fruit, size for slicing and prompt processing to avoid ripening.",
    summary:
      "A hypothetical processor plans bitter gourd for chips, pickles and dried slices, focusing on firm green fruit, size for slicing, ripening as a defect and processing soon after arrival.",
    industry: "Food Processing",
    topic: "Firm green bitter gourd for slicing and preserving",
    products: ["bitter-gourd"],
    keywords: ["bitter gourd", "karela", "bitter melon", "chips", "pickles", "dried slices", "processing"],
    intro: [
      "Bitter gourd (Momordica charantia) is processed into chips, pickles and dried slices as well as cooked fresh. For processing, the fruit should be firm and green with its characteristic ridged skin. As bitter gourd ripens it turns yellow and softens, which makes it less suitable for slicing and spoils the appearance of finished products.",
      "This is a hypothetical, illustrative scenario: a processor of bitter gourd chips, pickles and dried slices preparing a sourcing brief. It describes no real processor, product claim or measured result. Any labelling or claims on finished products depend on destination-market rules.",
    ],
    overview: {
      application: "Bitter gourd chips, pickles and dried slices",
      focus: "Firm green fruit, slicing size, ripening control and processing timing",
    },
    requirements: {
      intro: "For bitter gourd processing, the processor would usually define:",
      items: [
        {
          title: "Firm green fruit",
          text: "Firm, elongated, ridged gourds with fresh green colour, as green shades vary by variety.",
        },
        {
          title: "Size for slicing",
          text: "A size range that suits the slicer and gives even rounds for chips and dried slices.",
        },
        {
          title: "Ripening as a defect",
          text: "Yellowing, soft or overripe fruit listed as a defect to be removed at sorting.",
        },
        {
          title: "Processing timing",
          text: "Deliveries scheduled so fruit is sliced and processed soon after arrival.",
        },
        {
          title: "Handling and storage",
          text: "Storage and handling conditions agreed with the supplier to keep fruit green and firm in transit.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the processor’s current supply has no defined size or ripeness standard:",
      points: [
        "Some gourds arrive yellowing, which spoils the colour of chips and dried slices.",
        "Mixed sizes give uneven slices that fry or dry at different rates.",
        "Fruit sometimes waits before processing, allowing ripening to continue.",
        "Different varieties arrive in one lot, with different shades of green.",
      ],
    },
    approach: {
      intro: "A way to specify bitter gourd for slicing and preserving:",
      steps: [
        {
          title: "Set a ripeness standard",
          text: "Define acceptable colour and firmness, and treat yellowing or soft fruit as a defect.",
        },
        {
          title: "Agree a slicing size range",
          text: "Choose a size range that suits the slicer and the finished product, and ask for fruit sorted by size.",
        },
        {
          title: "Confirm variety",
          text: "Agree the variety or colour range so lots look consistent from delivery to delivery.",
        },
        {
          title: "Plan handling and timing",
          text: "Agree storage and handling with the supplier and schedule processing soon after arrival.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of a processing-focused bitter gourd specification. These are typical results of good preparation, not measured outcomes:",
      points: [
        "More even slices that fry and dry consistently.",
        "Chips and dried slices with a more uniform green appearance.",
        "Fewer yellowing fruit removed at sorting.",
      ],
    },
    considerations: [
      {
        title: "Ripening continues after harvest",
        text: "Bitter gourd can keep ripening after harvest, so short waits before processing matter.",
      },
      {
        title: "Product claims",
        text: "Make no health claims without checking destination-market rules; labelling depends on those rules.",
      },
      {
        title: "Seasonal availability",
        text: "Supply is seasonal; plan processing runs around expected availability.",
      },
    ],
    takeaways: [
      "Firm green fruit is the starting point for good chips and dried slices.",
      "Yellowing should be written into the brief as a defect.",
      "Even sizing gives even frying and drying.",
      "Processing soon after arrival limits further ripening.",
    ],
    insights: [
      "bitter-gourd-quality-ridges-colour-and-firmness",
      "slowing-ripening-storing-bitter-gourd-for-shipment",
    ],
  },
  {
    slug: "grading-and-bundling-drumstick-pods",
    status: "illustrative",
    categories: ["agricultural"],
    title: "Grading and Bundling Drumstick Pods for Export",
    subtitle:
      "How an importer might specify drumstick pod length, tenderness, bundling and packing so long, slender pods arrive straight, unbroken and ready for sale.",
    summary:
      "A hypothetical importer specifies drumstick pod length, tenderness, bundling and packing so pods arrive straight and unbroken for retail and food-service customers.",
    industry: "Grading & Packing",
    topic: "Pod length, bundling and packing for drumsticks",
    products: ["drumstick"],
    keywords: ["drumstick", "moringa pods", "sambar", "bundling", "pod length", "grading", "packing"],
    intro: [
      "Drumsticks are the long, slender, ridged seed pods of the Moringa oleifera tree, cooked in sambar, curries and soups. Their length makes them awkward to pack: pods can bend or snap if bundles are loose or cartons are too short. Buyers also want pods picked while tender, since older pods become fibrous.",
      "This is a hypothetical, illustrative scenario: an importer specifying drumstick grading, bundling and packing. It describes no real importer, destination or measured result, and makes no nutrition or health claims about the product.",
    ],
    overview: {
      application: "Fresh drumsticks for ethnic grocery retail and food-service kitchens",
      focus: "Pod length, tenderness, bundling and packing for long pods",
    },
    requirements: {
      intro: "For drumstick imports, the importer would usually define:",
      items: [
        {
          title: "Pod length",
          text: "A length range for each grade, agreed with the supplier and suited to the importer’s customers.",
        },
        {
          title: "Tenderness",
          text: "Pods picked while tender, with fibrous or overmature pods excluded at sorting.",
        },
        {
          title: "Colour and condition",
          text: "Green pods sorted by condition, cleaned and trimmed before bundling.",
        },
        {
          title: "Bundling",
          text: "Pods of similar length bundled together, with bundle size agreed to suit retail or kitchen use.",
        },
        {
          title: "Packing for long pods",
          text: "Cartons or packing long enough to keep pods straight and protect them from breaking.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the importer’s previous orders asked only for ‘fresh drumsticks’ by weight:",
      points: [
        "Pods of mixed length are bundled together, making retail bundles look uneven.",
        "Some pods arrive bent or snapped because the packing was too short or too loose.",
        "A share of pods is fibrous, suggesting they were picked late.",
        "Bundles shift in transit, rubbing and marking the pods.",
      ],
    },
    approach: {
      intro: "A structured way to specify drumsticks for export:",
      steps: [
        {
          title: "Define length grades",
          text: "Set one or more length ranges and ask for pods sorted by length and condition before bundling.",
        },
        {
          title: "Specify tenderness",
          text: "Agree that pods are picked while tender, and describe how fibrous pods are identified and removed.",
        },
        {
          title: "Agree bundle and pack design",
          text: "Bundle pods of similar length firmly, and use packing long enough to keep bundles straight and still.",
        },
        {
          title: "Plan cool, ventilated handling",
          text: "Keep pods in cool, well-ventilated conditions from packing through to the importer’s store.",
        },
        {
          title: "Inspect on arrival",
          text: "Check length, straightness, breakage and tenderness against the agreed grades.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of defined grading and bundling. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Retail bundles that look even, with pods of similar length.",
        "Fewer bent or broken pods at unpacking.",
        "Fewer fibrous pods reaching customers.",
      ],
    },
    considerations: [
      {
        title: "Packing dimensions",
        text: "Pod length decides the packing size; agree both together rather than separately.",
      },
      {
        title: "Seasonal supply",
        text: "Drumstick supply is seasonal; plan regular orders around expected availability.",
      },
      {
        title: "Product claims",
        text: "Avoid nutrition or health claims on retail labels unless destination-market rules allow them.",
      },
    ],
    takeaways: [
      "Length grading makes drumstick bundles look even on the shelf.",
      "Tenderness is set at harvest, so it belongs in the specification.",
      "Packing must fit the pod length to prevent bending and breakage.",
      "Cool, well-ventilated handling keeps pods fresh in transit.",
    ],
    insights: [
      "fresh-drumsticks-pod-length-tenderness-and-colour",
      "keeping-drumsticks-fresh-from-farm-to-market",
    ],
  },
];
