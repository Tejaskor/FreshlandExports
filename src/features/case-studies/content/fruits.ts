import type { CaseStudyEntry } from "@/features/case-studies/data";

/** Illustrative fruit case studies: hypothetical buyer scenarios, no real customers or results. */
export const fruitCaseStudies: readonly CaseStudyEntry[] = [
  {
    slug: "fruit-for-pulp-juice-and-nectar-processing",
    status: "illustrative",
    categories: ["fruits"],
    title: "Fruit for Pulp, Juice and Nectar Processing",
    subtitle:
      "How a juice and pulp processor might brief fresh mango, guava, papaya and orange supplies around ripeness at the line, flavour, colour and the seasons each fruit follows.",
    summary:
      "A hypothetical processor plans fresh mango, guava, papaya and orange intake for pulp, juice and nectar, defining ripeness on arrival, flesh colour, flavour and seasonal timing.",
    industry: "Juice & Pulp Processing",
    topic: "Fresh fruit intake for pulp and juice lines",
    products: ["mango", "guava", "papaya", "orange"],
    keywords: ["pulp", "juice", "nectar", "processing", "ripeness", "flesh colour", "tropical fruit"],
    intro: [
      "A processor buying fresh fruit for pulp, juice or nectar is not buying for the shelf. Appearance matters less than what is inside: how sweet and aromatic the flesh is, its colour once blended, and whether the fruit is ripe enough to process on the day it arrives. Mango, guava, papaya and orange each behave differently on that last point, because mango and papaya continue to ripen after harvest while oranges do not.",
      "This is a hypothetical scenario. It follows an illustrative processor preparing a fresh fruit brief for four fruits and shows the details that help a supplier quote for fruit suited to a processing line rather than a retail display.",
    ],
    overview: {
      application: "Fruit pulp, purée, juice and nectar manufacturing",
      focus: "Matching fruit ripeness, flavour and colour to processing schedules",
    },
    requirements: {
      intro: "For a processing brief covering several fruits, the buyer typically sets out:",
      items: [
        {
          title: "Ripeness at processing",
          text: "Whether mango and papaya should arrive ready to pulp or slightly firm to finish ripening on site, and how much ripening time the plant can hold.",
        },
        {
          title: "Flesh colour",
          text: "The colour the finished pulp or nectar needs, such as deep orange mango, pink or white guava flesh, or orange-to-coral papaya.",
        },
        {
          title: "Flavour and aroma",
          text: "The sweetness, acidity and aroma the recipe depends on, ideally agreed against a reference sample of each fruit.",
        },
        {
          title: "Variety preferences",
          text: "Any variety the recipe is built around, on the understanding that availability depends on the season and is confirmed with each enquiry.",
        },
        {
          title: "Cosmetic tolerance",
          text: "Which skin marks or size variations are acceptable for processing fruit, since retail grading rules may be stricter than the line needs.",
        },
        {
          title: "Packing and delivery rhythm",
          text: "Crate or carton type and how deliveries should be spaced to match the plant’s daily processing capacity.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the processor’s first enquiry lists the four fruits and a seasonal volume, but leaves these points open:",
      points: [
        "No ripeness stage is given, so mango and papaya could arrive either too firm to pulp or too soft to hold.",
        "Guava is requested without stating white or pink flesh, which changes the colour of the finished nectar.",
        "Oranges are listed alongside the tropical fruits without noting that they will not ripen further after harvest.",
        "The brief assumes all four fruits are available at the same time of year.",
      ],
    },
    approach: {
      intro: "A practical way to turn the enquiry into a processing-ready brief:",
      steps: [
        {
          title: "Define ripeness on arrival per fruit",
          text: "Agree a target ripeness for mango and papaya, and specify oranges as fully mature at harvest, since they do not sweeten after picking.",
        },
        {
          title: "Fix flesh colour and flavour",
          text: "Choose white or pink guava and record the colour and flavour each pulp should reach, using reference samples where possible.",
        },
        {
          title: "Separate cosmetic and internal quality",
          text: "Agree which surface marks are acceptable for processing so sound fruit is not excluded for appearance alone.",
        },
        {
          title: "Map seasons and stagger intake",
          text: "Ask the supplier to outline when each fruit is expected to be available, noting that seasons vary by variety and region and should be confirmed.",
        },
        {
          title: "Match deliveries to line capacity",
          text: "Space consignments so ripe fruit is processed promptly rather than waiting in storage.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of a processing-focused brief. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Fruit arrives closer to the ripeness the line needs, with less on-site holding.",
        "Pulp and nectar colour stays more consistent from one delivery to the next.",
        "Sound fruit with minor skin marks can be accepted where the brief allows it.",
        "Production planning follows realistic seasonal windows for each fruit.",
      ],
    },
    considerations: [
      {
        title: "Ripening after harvest",
        text: "Mango and papaya keep ripening after picking; oranges do not, so their harvest maturity decides juice quality.",
      },
      {
        title: "Seasonal windows",
        text: "Each fruit has its own season, which varies by variety and region; confirm expected timing before planning production.",
      },
      {
        title: "Processing capacity",
        text: "Ripe fruit has limited holding time, so delivery volumes should match what the plant can process.",
      },
      {
        title: "Destination documents",
        text: "Confirm the phytosanitary and import documents the destination requires for each fresh fruit.",
      },
    ],
    takeaways: [
      "For processing fruit, ripeness on arrival matters as much as grade.",
      "Choosing guava flesh colour and mango character early keeps pulp colour predictable.",
      "Oranges must be mature at harvest; they will not improve in the warehouse.",
      "Planning intake around each fruit’s season avoids gaps on the processing line.",
    ],
    insights: [
      "importing-indian-mangoes-varieties-ripeness-and-season",
      "guava-in-juices-jams-and-fresh-retail",
      "papaya-for-fresh-retail-fruit-salads-and-pulp",
    ],
  },
  {
    slug: "fresh-fruit-programme-for-supermarket-importers",
    status: "illustrative",
    categories: ["fruits"],
    title: "A Fresh Fruit Programme for Supermarket Importers",
    subtitle:
      "How a retail importer could plan a rolling programme of bananas, grapes, pomegranates and oranges, with grades, retail packs, import requirements and transit agreed up front.",
    summary:
      "A hypothetical supermarket importer sets out grades, sizes, retail packaging, residue and import requirements, and transit handling for a fresh fruit programme of four fruits.",
    industry: "Supermarket Retail",
    topic: "Grades, retail packs and import rules for fresh fruit",
    products: ["banana", "grapes", "pomegranate", "orange"],
    keywords: ["supermarket", "retail", "fresh fruit programme", "grading", "retail packs", "residue", "import"],
    intro: [
      "A supermarket programme asks more of fresh fruit than a one-off purchase. Shoppers expect bananas, grapes, pomegranates and oranges to look and eat the same each week, retail packs must fit store shelves and labelling, and every consignment has to clear the destination’s residue and plant health checks. Each fruit also travels differently: bananas and grapes are far more delicate in transit than pomegranates or oranges.",
      "This is an illustrative, hypothetical scenario. It follows a retail importer planning a multi-fruit programme and shows how a written specification makes supplier offers comparable and import checks more predictable.",
    ],
    overview: {
      application: "Supermarket and multiple-retail fresh produce",
      focus: "Consistent grading, retail packing and import compliance across four fruits",
    },
    requirements: {
      intro: "A retail fruit programme usually needs the importer to set out:",
      items: [
        {
          title: "Grade and size per fruit",
          text: "Banana finger length and hand count, grape bunch shape and berry size, pomegranate and orange size bands, agreed per fruit rather than as one general grade.",
        },
        {
          title: "Colour and appearance",
          text: "Grape colour (green, red or black), pomegranate skin colour and orange peel colour, recognising that colour varies by variety.",
        },
        {
          title: "Ripeness stage",
          text: "For bananas, the stage at which fruit should be shipped so it can be ripened to retail colour at destination.",
        },
        {
          title: "Retail packaging",
          text: "Punnets, bags or display cartons, pack weights and labelling fields the retailer requires on each pack.",
        },
        {
          title: "Residue and import rules",
          text: "The destination market’s pesticide residue limits and plant health requirements, listed so the supplier can confirm what it can document.",
        },
        {
          title: "Transit handling",
          text: "Cold-chain expectations for each fruit, including humidity control for grapes and avoiding chilling for bananas.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the importer’s request names the four fruits and weekly volumes, but leaves these points unresolved:",
      points: [
        "‘Export quality’ is the only grade given, so offers could describe different sizes and bunch or hand standards.",
        "Retail pack formats and labelling are not specified, although the stores need shelf-ready packs.",
        "Destination residue limits and import documents are not listed, so compliance cannot be checked before shipment.",
        "All four fruits are planned on one transit setting, despite their different handling needs.",
      ],
    },
    approach: {
      intro: "One way to build the programme into a workable specification:",
      steps: [
        {
          title: "Write a specification sheet per fruit",
          text: "Record grade, size band, colour and acceptable defects separately for bananas, grapes, pomegranates and oranges.",
        },
        {
          title: "Agree retail packs and labels",
          text: "Confirm pack type, weight and the label fields required, and check samples of the packed product before the programme starts.",
        },
        {
          title: "List import and residue requirements",
          text: "Share the destination’s residue limits and plant health rules, and confirm which documents and test reports the supplier can provide.",
        },
        {
          title: "Set transit conditions per fruit",
          text: "Agree cold-chain settings suited to each fruit and avoid mixing loads that need conflicting conditions.",
        },
        {
          title: "Plan around seasonal supply",
          text: "Ask the supplier to outline expected availability for each fruit, since seasons vary by variety and region and should be confirmed.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of a detailed retail specification. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Supplier offers describe the same grades and pack formats, so they can be compared directly.",
        "Fruit arrives in shelf-ready packs that suit store handling.",
        "Import documents and residue information are checked before the fruit is packed.",
        "Transit conditions suit each fruit, reducing avoidable quality loss on arrival.",
      ],
    },
    considerations: [
      {
        title: "Residue limits",
        text: "Residue limits differ by destination market; share the applicable rules and agree how compliance will be documented.",
      },
      {
        title: "Banana ripening",
        text: "Bananas are usually shipped before they reach retail colour, so plan ripening capacity at destination.",
      },
      {
        title: "Delicate fruit",
        text: "Grapes bruise and lose freshness quickly if the cold chain breaks; agree packing that protects bunches in transit.",
      },
      {
        title: "Seasonal continuity",
        text: "Availability shifts through the year; confirm which fruits can be supplied in which periods before committing to store promotions.",
      },
    ],
    takeaways: [
      "A retail programme needs a separate grade and pack specification for every fruit.",
      "Residue and import rules belong in the brief, not in the post-arrival inspection.",
      "Transit settings that suit oranges or pomegranates may not suit bananas or grapes.",
      "Seasonal availability should shape the programme calendar from the start.",
    ],
    insights: [
      "banana-export-guide-finger-length-grade-and-maturity",
      "cold-storage-and-packing-that-keep-grapes-fresh",
      "pomegranate-export-quality-aril-colour-size-and-skin",
    ],
  },
  {
    slug: "planning-seasonal-indian-fruit-purchases",
    status: "illustrative",
    categories: ["fruits"],
    title: "Planning Seasonal Indian Fruit Purchases",
    subtitle:
      "How an importer might plan mango, grape, pomegranate and chikoo purchases around Indian growing seasons, booking ahead while keeping room for variety and timing changes.",
    summary:
      "A hypothetical importer builds a purchase calendar for Indian mango, grapes, pomegranate and chikoo, confirming seasonal windows by variety and region and keeping plans flexible.",
    industry: "Procurement Planning",
    topic: "Purchase planning around Indian fruit seasons",
    products: ["mango", "grapes", "pomegranate", "chikoo"],
    keywords: ["seasonal", "indian fruit", "harvest", "purchase planning", "availability", "booking"],
    intro: [
      "Indian fruit follows the harvest, not the buyer’s calendar. Mango, grapes, pomegranate and chikoo each come into season at different times, and within each fruit the timing shifts with variety, growing region and the weather in a given year. An importer who plans as though supply is constant risks paying for gaps or accepting substitutes at short notice.",
      "This is a hypothetical scenario used for illustration. It follows an importer planning a year of purchases across four Indian fruits and shows how to book ahead without locking into dates the harvest may not meet.",
    ],
    overview: {
      application: "Fresh fruit import and wholesale distribution",
      focus: "Aligning purchase plans with seasonal availability by fruit, variety and region",
    },
    requirements: {
      intro: "To plan seasonal purchases, the importer typically defines:",
      items: [
        {
          title: "Fruits and acceptable varieties",
          text: "Which fruits are needed and which varieties the market will accept, with alternatives named in case a preferred variety is not available.",
        },
        {
          title: "Expected seasonal windows",
          text: "The period in which each fruit is expected, confirmed with the supplier for the relevant variety and region rather than assumed.",
        },
        {
          title: "Volumes per period",
          text: "Approximate quantities for each fruit across its season, separating firm needs from volumes that can flex.",
        },
        {
          title: "Quality specification",
          text: "Grade, size and ripeness requirements for each fruit, so that shifting harvest timing does not also mean shifting quality.",
        },
        {
          title: "Booking and confirmation points",
          text: "When volumes are reserved, when they are confirmed against the actual crop, and how much notice each side needs.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the importer drafts a twelve-month plan with these weaknesses:",
      points: [
        "Equal monthly volumes are planned for every fruit, although each is seasonal.",
        "Mango is planned around a single preferred variety with no alternative named.",
        "The plan treats season dates as fixed, with no allowance for an early or late harvest.",
        "Chikoo is scheduled for long transit without considering how quickly it ripens.",
      ],
    },
    approach: {
      intro: "A flexible way to plan around the harvest:",
      steps: [
        {
          title: "Ask for a seasonal outline",
          text: "Request the supplier’s expected availability for each fruit and variety, and treat it as guidance that varies by region and year.",
        },
        {
          title: "Name preferred and alternative varieties",
          text: "List acceptable alternatives for mango, grapes and pomegranate so a variety change does not stop the programme.",
        },
        {
          title: "Book ahead, confirm against the crop",
          text: "Reserve core volumes early and confirm final quantities once the crop’s timing and condition are known.",
        },
        {
          title: "Plan transit by fruit",
          text: "Allow for fast-ripening chikoo and ripening mango when choosing routes and arrival timing.",
        },
        {
          title: "Agree how changes are handled",
          text: "Set out how shifted harvests, smaller crops or variety changes will be communicated and priced.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of season-led planning. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Orders follow realistic availability instead of fixed monthly assumptions.",
        "Variety changes are handled through agreed alternatives rather than last-minute decisions.",
        "Early bookings secure core volumes while final quantities follow the actual crop.",
        "Customers can be told in advance when each fruit is likely to be available.",
      ],
    },
    considerations: [
      {
        title: "Season variation",
        text: "Season timing varies by variety, region and year; confirm expected windows with the supplier before each season.",
      },
      {
        title: "Variety availability",
        text: "Preferred varieties may not be available every season, so agree acceptable alternatives in advance.",
      },
      {
        title: "Ripening in transit",
        text: "Mango and chikoo ripen after harvest, which affects how long they can travel and how they should be packed.",
      },
      {
        title: "Communication",
        text: "Agree regular crop updates during the season so plans can be adjusted early.",
      },
    ],
    takeaways: [
      "Indian fruit supply follows the harvest, which differs by fruit, variety and region.",
      "Booking ahead works best when final volumes are confirmed against the actual crop.",
      "Naming alternative varieties keeps a programme running when a favourite is short.",
      "Fast-ripening fruit like chikoo needs its own transit plan.",
    ],
    insights: [
      "importing-indian-mangoes-varieties-ripeness-and-season",
      "table-grapes-from-india-berry-size-sugar-and-colour",
      "chikoo-sapota-export-guide-maturity-and-sweetness",
    ],
  },
  {
    slug: "managing-ripeness-for-climacteric-fruit-in-transit",
    status: "illustrative",
    categories: ["fruits"],
    title: "Managing Ripeness for Fruit That Ripens After Harvest",
    subtitle:
      "How a buyer handling banana, papaya, chikoo and mango can agree harvest maturity, transit conditions and ripening at destination for fruit that keeps ripening after picking.",
    summary:
      "A hypothetical buyer of banana, papaya, chikoo and mango agrees harvest maturity, temperature and ethylene handling, and the ripening stage on arrival, for fruit that ripens after harvest.",
    industry: "Ripening & Logistics",
    topic: "Harvest maturity and ripening for climacteric fruit",
    products: ["banana", "papaya", "chikoo", "mango"],
    keywords: ["climacteric", "ripening", "ethylene", "harvest maturity", "cold chain", "chilling injury"],
    intro: [
      "Banana, papaya, chikoo and mango are climacteric fruits: they continue to ripen after they are picked, and they produce ethylene, the gas that drives ripening. That makes them easier to ship than fruit which must be picked fully ripe, but it also means ripening keeps going in the container. Harvested too early, the fruit may never develop full flavour; shipped too ripe, it may soften before it reaches the shelf.",
      "This is an illustrative, hypothetical scenario. It follows a buyer who handles all four fruits and shows how agreeing maturity, transit conditions and ripening at destination gives more predictable arrivals.",
    ],
    overview: {
      application: "Fresh fruit import, ripening and distribution",
      focus: "Controlling ripening from harvest to sale for fruit that ripens after picking",
    },
    requirements: {
      intro: "For climacteric fruit, the buyer typically needs to agree:",
      items: [
        {
          title: "Harvest maturity",
          text: "The maturity at which each fruit should be picked so it can still ripen properly, rather than being harvested immature to buy transit time.",
        },
        {
          title: "Shipping stage",
          text: "Whether bananas are shipped green, papaya at an early colour break, and mango and chikoo firm-mature, matched to the transit time.",
        },
        {
          title: "Transit temperature",
          text: "Conditions cool enough to slow ripening but not so cold that they cause chilling injury, which bananas and papaya are prone to.",
        },
        {
          title: "Ethylene management",
          text: "Ventilation in transit and storage, and keeping fruit that releases ethylene away from produce sensitive to it.",
        },
        {
          title: "Ripening at destination",
          text: "Whether the buyer has ripening rooms, and the colour or firmness stage at which fruit should be released to customers.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the buyer has been ordering all four fruits with one instruction, ‘ship fresh’, and sees these problems:",
      points: [
        "Some banana lots arrive with uneven colour because they started ripening during transit.",
        "Papaya and mango that left firm arrive soft, while others never ripen evenly.",
        "Chikoo softens quickly after arrival, leaving little time to sell it.",
        "The fruits share storage space without any thought for ethylene release.",
      ],
    },
    approach: {
      intro: "A step-by-step way to bring ripening under control:",
      steps: [
        {
          title: "Agree maturity indicators per fruit",
          text: "Describe the maturity at harvest for each fruit, such as banana finger fullness or papaya colour break, with photographs where helpful.",
        },
        {
          title: "Match shipping stage to transit time",
          text: "Ship fruit less ripe for longer routes and closer to ready for shorter ones, and confirm the stage before packing.",
        },
        {
          title: "Set temperature and ventilation",
          text: "Agree transit conditions suited to each fruit’s ripeness, avoiding chilling for bananas and papaya.",
        },
        {
          title: "Separate ethylene sources",
          text: "Plan storage so ripening fruit does not hasten other produce, and ventilate rooms where fruit ripens.",
        },
        {
          title: "Plan ripening and release",
          text: "Agree the stage at which each fruit is released for sale and how ripening rooms are scheduled after arrival.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of agreeing ripeness from the start. These are typical results of good preparation, not measured outcomes:",
      points: [
        "More even ripening within each lot after arrival.",
        "Fewer lots that arrive too soft to sell or too immature to ripen well.",
        "Better use of ripening rooms and storage space.",
        "A clearer basis for discussing any quality issue with the supplier.",
      ],
    },
    considerations: [
      {
        title: "Chilling sensitivity",
        text: "Bananas and papaya can be damaged by temperatures that are too low; agree transit conditions with this in mind.",
      },
      {
        title: "Harvest timing",
        text: "Fruit picked too early may not ripen to full flavour, so maturity at harvest should be specified, not left open.",
      },
      {
        title: "Ripening facilities",
        text: "Controlled ripening at destination gives more even results; confirm what facilities are available before choosing a shipping stage.",
      },
      {
        title: "Shelf life",
        text: "Shelf life depends on variety, ripeness and storage, so plan sales around the ripening stage rather than a fixed number of days.",
      },
    ],
    takeaways: [
      "Fruit that ripens after harvest still needs to be picked at the right maturity.",
      "The shipping stage should be matched to the transit time, fruit by fruit.",
      "Cool is good, too cold is not: bananas and papaya are prone to chilling injury.",
      "Ethylene management and planned ripening rooms make arrivals more predictable.",
    ],
    insights: [
      "green-shipping-and-controlled-ripening-for-bananas",
      "shipping-papaya-temperature-ripening-and-handling",
      "ripening-and-storing-mangoes-after-arrival",
    ],
  },
  {
    slug: "pomegranate-for-aril-and-juice-processors",
    status: "illustrative",
    categories: ["fruits"],
    title: "Pomegranate for Aril and Juice Processors",
    subtitle:
      "How a processor extracting arils or pressing juice might specify pomegranates by aril colour, fruit size and internal quality, rather than by skin appearance alone.",
    summary:
      "A hypothetical processor briefs pomegranate for aril extraction and juice, defining aril colour, sweet-tart balance and fruit size, and agreeing how skin marks relate to internal quality.",
    industry: "Juice & Aril Processing",
    topic: "Aril colour, size and internal quality for processing",
    products: ["pomegranate"],
    keywords: ["pomegranate", "arils", "juice", "aril colour", "processing", "punica granatum"],
    intro: [
      "Pomegranates sold whole are judged largely by their skin: colour, shape and freedom from marks. A processor who extracts arils for ready-to-eat packs or presses juice sees the fruit differently. What counts is the colour of the arils, their sweet-tart balance, how easily they separate, and how much usable fruit each pomegranate yields, and a leathery skin with minor marks can still hold excellent arils.",
      "This is a hypothetical scenario created for illustration. It follows a processor preparing a pomegranate brief for aril and juice lines and shows how to specify internal quality without paying for retail cosmetics it does not need.",
    ],
    overview: {
      application: "Fresh aril packs, pomegranate juice and processed products",
      focus: "Specifying internal fruit quality for extraction rather than retail appearance",
    },
    requirements: {
      intro: "For processing pomegranates, the buyer usually sets out:",
      items: [
        {
          title: "Aril colour",
          text: "The depth of red the arils or juice should have, agreed against a reference sample, since aril colour varies by variety.",
        },
        {
          title: "Flavour balance",
          text: "The sweet-tart profile the product needs, particularly for juice, where acidity affects the final taste.",
        },
        {
          title: "Fruit size",
          text: "A size range suited to the extraction equipment or hand-processing method, rather than the retail size bands.",
        },
        {
          title: "Skin condition tolerance",
          text: "Which skin marks, scratches or colour variations are acceptable, as long as the fruit is sound and the arils are unaffected.",
        },
        {
          title: "Internal defects",
          text: "How internal browning, cracked fruit or damaged arils will be checked and what level is unacceptable.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the processor has been buying on a retail specification and runs into these issues:",
      points: [
        "The price reflects cosmetic grading that the extraction line does not need.",
        "Aril colour is not specified, so juice colour shifts between lots.",
        "Fruit size varies widely, which slows extraction and makes yield harder to plan.",
        "Internal quality is only discovered once fruit is cut on the line.",
      ],
    },
    approach: {
      intro: "A processing-focused way to specify pomegranates:",
      steps: [
        {
          title: "Set aril colour and flavour references",
          text: "Agree a reference for aril colour and sweet-tart balance and use it to judge samples from each season.",
        },
        {
          title: "Define a processing size range",
          text: "Choose a size band that suits the extraction method and ask for fruit graded to it.",
        },
        {
          title: "Agree a skin tolerance",
          text: "Describe which surface marks are acceptable for processing, with photographs, so sound fruit is not graded out.",
        },
        {
          title: "Check internal quality on cut samples",
          text: "Cut a sample of fruit from each lot before dispatch to check aril colour and internal defects.",
        },
        {
          title: "Plan storage before processing",
          text: "Agree cool, humid holding conditions so fruit does not dry out or lose quality while waiting for the line.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of a processing specification for pomegranate. These are typical results of good preparation, not measured outcomes:",
      points: [
        "More consistent aril and juice colour from lot to lot.",
        "Purchasing focused on internal quality rather than retail cosmetics.",
        "Fruit size that suits the extraction line, making throughput easier to plan.",
        "Internal defects identified before shipment rather than on the line.",
      ],
    },
    considerations: [
      {
        title: "Variety and colour",
        text: "Aril colour and flavour vary by variety; confirm what is available in the season before fixing a colour reference.",
      },
      {
        title: "Storage conditions",
        text: "Pomegranates keep best in cool, humid conditions; agree storage and transit settings that prevent the skin drying out.",
      },
      {
        title: "Skin versus inside",
        text: "Skin marks do not always indicate poor arils, but cracked fruit can let decay in, so define what is acceptable.",
      },
      {
        title: "Food safety for arils",
        text: "Ready-to-eat aril packs are subject to the destination market’s food safety rules; confirm what documentation is needed.",
      },
    ],
    takeaways: [
      "For processors, pomegranate quality is mainly about aril colour, flavour and yield.",
      "A skin tolerance stops sound fruit being graded out for cosmetic reasons.",
      "Cutting samples before dispatch reveals internal quality early.",
      "A processing size range keeps extraction lines running smoothly.",
    ],
    insights: [
      "pomegranates-for-fresh-retail-arils-and-juice",
      "pomegranate-export-quality-aril-colour-size-and-skin",
      "why-pomegranates-travel-well-and-how-to-keep-them-fresh",
    ],
  },
  {
    slug: "speciality-fruits-for-ethnic-retail",
    status: "illustrative",
    categories: ["fruits"],
    title: "Chikoo and Guava for Speciality and Ethnic Retail",
    subtitle:
      "How an importer supplying speciality and ethnic grocery stores might source chikoo and guava, two fragrant, delicate fruits that need careful ripeness and handling decisions.",
    summary:
      "A hypothetical importer serving ethnic grocers plans chikoo and guava supply, agreeing ripeness at dispatch, gentle packing and fast distribution for two delicate, short-lived fruits.",
    industry: "Ethnic Grocery Retail",
    topic: "Ripeness and handling for delicate speciality fruit",
    products: ["chikoo", "guava"],
    keywords: ["chikoo", "sapodilla", "guava", "ethnic retail", "speciality fruit", "handling"],
    intro: [
      "Chikoo and guava have loyal customers in speciality and ethnic grocery stores, where shoppers know exactly how a ripe chikoo should yield and how a good guava should smell. Both fruits are delicate. Chikoo, with its soft, grainy, caramel-sweet flesh, ripens quickly once it starts; guava bruises easily and its fragrance and texture change fast after ripening. Smaller stores also sell more slowly than supermarkets, which leaves less margin for fruit that arrives too ripe.",
      "This is an illustrative, hypothetical scenario. It follows an importer that supplies independent grocers and shows how ripeness, packing and distribution decisions affect how long chikoo and guava last on the shelf.",
    ],
    overview: {
      application: "Speciality, ethnic and independent grocery retail",
      focus: "Protecting delicate, fast-ripening fruit from packing to store shelf",
    },
    requirements: {
      intro: "For chikoo and guava destined for smaller stores, the importer typically defines:",
      items: [
        {
          title: "Ripeness at dispatch",
          text: "The firmness at which chikoo and guava should be packed, so they ripen close to the point of sale rather than in the container.",
        },
        {
          title: "Guava flesh colour",
          text: "Whether customers expect white or pink guava, recognising that availability depends on the season.",
        },
        {
          title: "Size and evenness",
          text: "A size range and how uniform fruit within a pack should be, since speciality shoppers often buy by eye.",
        },
        {
          title: "Protective packing",
          text: "Single-layer trays, cushioning or individual wraps that limit bruising of soft-skinned fruit.",
        },
        {
          title: "Pack size for small stores",
          text: "Carton sizes a small shop can sell through quickly, rather than large packs that sit in the back room.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the importer currently buys chikoo and guava on the same terms as hardier fruit, and sees these problems:",
      points: [
        "Chikoo arrives already soft, giving stores very little time to sell it.",
        "Guava shows bruising from deep cartons and rough handling.",
        "Large cartons are split between stores, causing extra handling and damage.",
        "Shoppers find pink and white guava mixed without labelling.",
      ],
    },
    approach: {
      intro: "A way to source these two delicate fruits with more care:",
      steps: [
        {
          title: "Agree a firmer dispatch stage",
          text: "Ask for chikoo and guava to be packed firm-mature, so most ripening happens close to sale.",
        },
        {
          title: "Specify protective packaging",
          text: "Use shallow, cushioned packs that keep fruit in a single layer and reduce pressure bruising.",
        },
        {
          title: "Separate and label guava types",
          text: "Pack white and pink guava separately and label them, so stores can sell each to the right customers.",
        },
        {
          title: "Choose small-store pack sizes",
          text: "Agree carton sizes that match what an independent store can sell before the fruit over-ripens.",
        },
        {
          title: "Plan fast onward distribution",
          text: "Move fruit from arrival to stores quickly and keep it cool, avoiding long storage at the importer’s warehouse.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of handling chikoo and guava as delicate fruit. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Fruit reaches stores with more selling time left.",
        "Less bruising from packing and repeated handling.",
        "Shoppers can choose between clearly labelled white and pink guava.",
        "Store orders match what each shop can sell while the fruit is at its best.",
      ],
    },
    considerations: [
      {
        title: "Short shelf life",
        text: "Shelf life depends on variety, ripeness and storage, and both fruits soften quickly once ripe, so plan distribution tightly.",
      },
      {
        title: "Seasonal availability",
        text: "Supply of each fruit, and of white or pink guava, varies by season and region; confirm before promising stores.",
      },
      {
        title: "Gentle handling",
        text: "Every extra handling step adds bruising risk; agree pack formats that can go to stores unopened.",
      },
      {
        title: "Import requirements",
        text: "Confirm the destination’s plant health requirements for each fruit before the first shipment.",
      },
    ],
    takeaways: [
      "Chikoo and guava need firmer dispatch and gentler packing than hardier fruit.",
      "Pack sizes should suit how quickly a small store can sell the fruit.",
      "Labelling white and pink guava separately serves speciality shoppers better.",
      "Fast, cool onward distribution matters as much as the sea or air leg.",
    ],
    insights: [
      "handling-chikoo-a-delicate-fruit-that-ripens-fast",
      "extending-guava-shelf-life-with-careful-post-harvest-care",
      "guava-sourcing-white-vs-pink-flesh-size-and-aroma",
    ],
  },
  {
    slug: "oranges-for-juicing-in-food-service",
    status: "illustrative",
    categories: ["fruits"],
    title: "Oranges for Juicing in Food Service",
    subtitle:
      "How a juice bar chain or food-service buyer might source oranges for fresh-squeezed juice, where juiciness, taste, peel condition and storage matter more than shelf looks.",
    summary:
      "A hypothetical juice bar chain specifies oranges for fresh juice, focusing on juiciness, sweet-tart taste, peel condition and storage, and choosing suitable varieties with the supplier.",
    industry: "Food Service",
    topic: "Juiciness, peel and storage for juicing oranges",
    products: ["orange"],
    keywords: ["orange", "juice", "juice bar", "food service", "fresh squeezed", "citrus", "peel"],
    intro: [
      "For a juice bar, an orange is only as good as the juice it gives. Bright peel colour and a perfect shape matter less than how juicy the fruit is, how its sweetness and tang balance, and whether the peel is sound enough to pass through a juicer cleanly. Because oranges do not continue to ripen after harvest, the quality of the juice is largely set when the fruit is picked.",
      "This is a hypothetical, illustrative scenario. It follows a food-service buyer sourcing oranges for fresh-squeezed juice and shows how to write a brief around juicing quality rather than retail appearance.",
    ],
    overview: {
      application: "Juice bars, cafés, hotels and food-service kitchens",
      focus: "Selecting oranges for juiciness, flavour and handling in daily juicing",
    },
    requirements: {
      intro: "A juicing brief for oranges typically sets out:",
      items: [
        {
          title: "Juiciness",
          text: "That fruit should be selected for juice content, since juiciness depends on variety and maturity at harvest.",
        },
        {
          title: "Taste profile",
          text: "The sweet-tart balance the menu needs, agreed against a tasting sample, as taste varies between varieties and through the season.",
        },
        {
          title: "Size for the juicer",
          text: "A size range that suits the juicing equipment, since very large or very small fruit can juice less efficiently.",
        },
        {
          title: "Peel condition",
          text: "Sound, clean peel without splits or soft spots, because the whole fruit passes through the juicer and peel defects can affect taste.",
        },
        {
          title: "Storage at site",
          text: "How fruit will be held between delivery and use, in cool, ventilated conditions that keep peel and juice in good order.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the chain orders oranges on a retail specification and notices these issues:",
      points: [
        "Juice taste changes noticeably from one delivery to the next.",
        "Some lots look attractive but give little juice per fruit.",
        "Fruit with soft spots or damaged peel reaches the juicing counter.",
        "Oranges are kept in warm back rooms between deliveries.",
      ],
    },
    approach: {
      intro: "A juicing-led approach to orange sourcing:",
      steps: [
        {
          title: "Ask which varieties suit juicing",
          text: "Ask the supplier which varieties are best for juice in the current season, rather than naming a variety that may not be available.",
        },
        {
          title: "Judge samples by the glass",
          text: "Squeeze sample fruit and assess juiciness and taste against the menu’s reference before confirming an order.",
        },
        {
          title: "Set peel and size criteria",
          text: "Agree sound-peel requirements and a size band that suits the juicers in use.",
        },
        {
          title: "Plan delivery and storage",
          text: "Schedule deliveries to limit holding time and store fruit cool and ventilated at each outlet.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of specifying oranges for juicing. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Steadier juice taste across deliveries and outlets.",
        "Fruit chosen for juiciness rather than appearance alone.",
        "Fewer damaged or soft oranges reaching the juicing counter.",
        "Storage practices that keep fruit in better condition until use.",
      ],
    },
    considerations: [
      {
        title: "Harvest maturity",
        text: "Oranges do not ripen further after picking, so maturity at harvest decides sweetness and juiciness.",
      },
      {
        title: "Seasonal changes",
        text: "Varieties and taste change through the season, and seasons vary by variety and region; confirm what is available ahead of time.",
      },
      {
        title: "Storage",
        text: "Keep oranges in cool conditions with good ventilation to preserve peel quality and juiciness.",
      },
      {
        title: "Food-service hygiene",
        text: "Whole fruit used for juicing should arrive clean and sound; agree any washing or handling expectations with the supplier.",
      },
    ],
    takeaways: [
      "For juicing, specify oranges by juiciness and taste, not by peel colour alone.",
      "Juice quality is set at harvest, because oranges do not ripen after picking.",
      "Squeezing samples is the simplest way to compare offers.",
      "Cool, ventilated storage at each outlet protects the fruit until it is used.",
    ],
    insights: [
      "oranges-for-the-fruit-bowl-juice-bars-and-processing",
      "sourcing-oranges-juice-content-peel-and-size",
      "storing-oranges-to-preserve-juiciness-and-peel-quality",
    ],
  },
  {
    slug: "tropical-fruit-for-smoothie-and-dessert-producers",
    status: "illustrative",
    categories: ["fruits"],
    title: "Tropical Fruit for Smoothie and Dessert Producers",
    subtitle:
      "How a smoothie or dessert producer using banana, papaya and guava might time ripeness for sweetness, process fruit promptly and weigh fresh fruit against frozen pulp.",
    summary:
      "A hypothetical smoothie and dessert producer plans banana, papaya and guava supply, timing ripeness for sweetness, processing soon after ripening and choosing between fresh fruit and frozen pulp.",
    industry: "Smoothies & Desserts",
    topic: "Ripeness timing for smoothie and dessert fruit",
    products: ["banana", "papaya", "guava"],
    keywords: ["smoothie", "dessert", "banana", "papaya", "guava", "ripeness", "frozen pulp"],
    intro: [
      "Smoothies and fruit desserts rely on fruit at its sweetest. A banana with too little colour tastes starchy in a smoothie, papaya needs to be soft and buttery to blend well, and guava brings its fragrance only when ripe. Once ripe, though, all three soften quickly, so the window between ‘ready’ and ‘too far’ is short. A producer has to time ripening and processing together, and decide where fresh fruit is worth that effort and where frozen pulp makes more sense.",
      "This is a hypothetical scenario for illustration only. It follows a smoothie and dessert producer planning banana, papaya and guava supply and shows how ripeness timing and form choices affect flavour consistency.",
    ],
    overview: {
      application: "Smoothies, shakes, fruit desserts and ice cream",
      focus: "Using fruit at consistent ripeness and choosing between fresh fruit and frozen pulp",
    },
    requirements: {
      intro: "For a smoothie or dessert line, the producer typically defines:",
      items: [
        {
          title: "Eating-ripe stage",
          text: "The colour and softness at which each fruit is used, such as banana peel colour or papaya softness, agreed with reference photographs.",
        },
        {
          title: "Shipping stage",
          text: "The ripeness at which fruit should arrive, so it can be ripened on site to the eating-ripe stage when the line needs it.",
        },
        {
          title: "Flavour and colour",
          text: "The sweetness and colour the recipe expects, including whether guava should be white or pink fleshed.",
        },
        {
          title: "Fresh or frozen form",
          text: "Which products need fresh fruit and which could use frozen pulp, with the pulp specification agreed separately if chosen.",
        },
        {
          title: "Delivery rhythm",
          text: "Smaller, more frequent deliveries that match production rather than large lots that ripen faster than they can be used.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the producer orders all three fruits in large weekly lots and faces these issues:",
      points: [
        "Fruit is processed when production allows, not when it is at the right ripeness.",
        "Bananas used too early add starchiness; papaya used too late turns mushy.",
        "Ripe guava’s fragrance fades before the fruit reaches the line.",
        "Fresh fruit is used even in products where frozen pulp would be more practical.",
      ],
    },
    approach: {
      intro: "A way to align ripeness, production and form:",
      steps: [
        {
          title: "Define ripeness by recipe",
          text: "Record the eating-ripe stage each recipe needs and share reference photographs with the supplier.",
        },
        {
          title: "Coordinate ripening with production",
          text: "Order fruit at a stage that can be ripened on site to meet the production schedule, not ahead of it.",
        },
        {
          title: "Process soon after ripening",
          text: "Plan prep so ripe fruit is peeled, cut or blended promptly, before it softens past the recipe’s needs.",
        },
        {
          title: "Weigh fresh fruit against frozen pulp",
          text: "Use fresh fruit where texture or fresh flavour matters most, and assess frozen pulp for lines that need year-round consistency.",
        },
        {
          title: "Match delivery size to use",
          text: "Agree delivery volumes and frequency that the kitchen can use while each fruit is at its best.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of timing ripeness to production. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Smoothies and desserts that taste more consistent from batch to batch.",
        "Less fruit lost to over-ripening before use.",
        "A clearer split between products made with fresh fruit and those suited to frozen pulp.",
        "Deliveries sized to what the production line actually uses.",
      ],
    },
    considerations: [
      {
        title: "Ripening after harvest",
        text: "Banana, papaya and guava continue to ripen after picking, so arrival stage and on-site ripening need to be planned together.",
      },
      {
        title: "Chilling sensitivity",
        text: "Bananas and papaya can suffer chilling injury if stored too cold; agree storage conditions suited to each fruit.",
      },
      {
        title: "Seasonal supply",
        text: "Guava flesh colour and fruit availability vary by season and region; confirm options before fixing a recipe.",
      },
      {
        title: "Labelling",
        text: "Product labelling and any claims depend on the destination market’s rules; check them for each finished product.",
      },
    ],
    takeaways: [
      "Smoothie and dessert quality depends on using fruit at a defined ripeness.",
      "Ripening and production should be scheduled together, not separately.",
      "Ripe tropical fruit needs processing promptly before it softens too far.",
      "Fresh fruit and frozen pulp each have a place; choose by product, not by habit.",
    ],
    insights: [
      "green-shipping-and-controlled-ripening-for-bananas",
      "papaya-export-guide-colour-break-weight-and-firmness",
      "guava-in-juices-jams-and-fresh-retail",
    ],
  },
];
