import type { CaseStudyEntry } from "@/features/case-studies/data";

/** Illustrative spice case studies: hypothetical buyer scenarios, no real customers or results. */
export const spiceCaseStudies: readonly CaseStudyEntry[] = [
  {
    slug: "whole-spices-for-pickle-manufacturing",
    status: "illustrative",
    categories: ["spices", "powders"],
    title: "Whole Spices and Amchur for Pickle Manufacturing",
    subtitle:
      "How a pickle maker might specify mustard seeds, fenugreek, dried red chilli and dry mango powder so every batch of oil-based pickle starts from dry, clean and consistent ingredients.",
    summary:
      "A hypothetical pickle manufacturer sets out seed type, cleanliness, dryness and consistency for mustard, fenugreek, red chilli and amchur before asking for quotations.",
    industry: "Pickle Manufacturing",
    topic: "Dry, clean spice inputs for oil-based pickles",
    products: ["mustard-seeds", "fenugreek-seeds", "red-chilli", "dry-mango-powder"],
    keywords: ["pickle", "achar", "mustard", "methi", "dried chilli", "amchur", "pickling spice"],
    intro: [
      "Indian-style pickles depend on a small group of spices: mustard seeds for bite, fenugreek for its bitter-sweet depth, dried red chilli for heat and colour, and amchur for a dry, fruity sourness. Because these pickles are preserved in oil, salt and acid rather than cooked to order, anything that carries moisture, dust or plant debris into the jar can undermine the batch.",
      "This is an illustrative scenario. It follows a hypothetical pickle manufacturer preparing a combined brief for four spice inputs and shows the points worth agreeing before quotations are compared. It describes no real customer, order or result.",
    ],
    overview: {
      application: "Oil-based mango, lime and mixed vegetable pickles",
      focus: "Cleanliness, dryness and batch-to-batch consistency across four pickle spices",
    },
    requirements: {
      intro: "For a pickle line, the buyer needs to pin down for each input:",
      items: [
        {
          title: "Mustard seed type and form",
          text: "Whether the recipe uses yellow, brown or black mustard seed, and whether it needs whole seed or cracked seed for the pickle masala.",
        },
        {
          title: "Fenugreek seed condition",
          text: "Clean, whole golden seeds free from dust, chaff and stones, since fenugreek is often fried or roasted before grinding into the pickle masala.",
        },
        {
          title: "Red chilli form and character",
          text: "Whole chillies with or without stems, or crushed chilli, and whether the recipe leans on colour, heat or a balance of both.",
        },
        {
          title: "Amchur tang and flow",
          text: "A fine, dry dry mango powder whose sourness suits the recipe, packed so it does not clump before use.",
        },
        {
          title: "Dryness",
          text: "Moisture expectations for every input, set by the buyer’s own process, because damp spice is a risk in an oil-based product.",
        },
      ],
    },
    challenge: {
      intro:
        "In this scenario, we assume the manufacturer has bought these spices on general descriptions and has run into avoidable problems:",
      points: [
        "Mustard seed arrives as a mix of colours when the recipe was built around one type.",
        "Chilli lots include loose stems and calyx pieces that have to be picked out by hand.",
        "Amchur has clumped in storage and no longer disperses evenly through the masala.",
        "No reference samples exist, so each new lot is judged against memory rather than a standard.",
      ],
    },
    approach: {
      intro: "A practical way to bring the four inputs under one specification:",
      steps: [
        {
          title: "Write the recipe’s needs per spice",
          text: "Record the mustard type, the fenugreek condition, the chilli form and the amchur tang each pickle recipe depends on.",
        },
        {
          title: "Agree cleaning and foreign-matter limits",
          text: "Set expectations for dust, stones, husk, stems and other plant matter for each spice, in writing.",
        },
        {
          title: "Keep reference samples",
          text: "Approve a sample of each input and hold it, so incoming lots can be compared side by side.",
        },
        {
          title: "Plan packing for dryness",
          text: "Ask for lined or moisture-resistant packing, especially for amchur, which absorbs humidity readily.",
        },
        {
          title: "Check on arrival",
          text: "Inspect each lot for colour, cleanliness and dryness before it goes to the pickle kitchen.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of a structured pickle-spice brief. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Less hand sorting of stems, husk and stones before spices go into the masala.",
        "Mustard bite and chilli colour that stay closer to the approved recipe.",
        "Amchur that stays free-flowing until it is used.",
        "A clear basis for raising a query when a lot does not match the reference sample.",
      ],
    },
    considerations: [
      {
        title: "Recipe-specific types",
        text: "Yellow, brown and black mustard seed taste different; name the type rather than asking for ‘mustard seed’.",
      },
      {
        title: "Chilli stems",
        text: "Decide whether stemless chillies are needed, as stems add labour and debris in a pickle kitchen.",
      },
      {
        title: "Moisture and storage",
        text: "Store all four inputs cool, dry and sealed, and use opened amchur packs promptly.",
      },
    ],
    takeaways: [
      "Pickles reward dry, clean spice inputs because the product is preserved rather than cooked fresh.",
      "Naming the mustard type and chilli form removes most of the guesswork from quotations.",
      "Reference samples turn a description into a standard every lot can be checked against.",
      "Amchur needs moisture-resistant packing as much as it needs the right tang.",
    ],
    insights: [
      "mustard-seeds-for-tempering-pickles-and-condiments",
      "fenugreek-seeds-in-curry-powders-pickles-and-seasonings",
      "storing-dried-chillies-to-protect-colour-and-prevent-mould",
    ],
  },
  {
    slug: "fennel-and-cardamom-for-mouth-fresheners",
    status: "illustrative",
    categories: ["spices"],
    title: "Fennel, Cardamom and Cloves for Mouth Fresheners and Sweets",
    subtitle:
      "How a mukhwas and sweets maker might specify fennel seeds, green cardamom and cloves when appearance and aroma matter as much as flavour.",
    summary:
      "A hypothetical mouth-freshener and confectionery maker defines colour, size, aroma and presentation for fennel, green cardamom and whole cloves before sourcing.",
    industry: "Confectionery",
    topic: "Colour, size and aroma for visible spices",
    products: ["fennel-seeds", "green-cardamom", "cloves"],
    keywords: ["mukhwas", "mouth freshener", "saunf", "elaichi", "cloves", "confectionery", "sweets"],
    intro: [
      "In mouth fresheners and many sweets, whole spices are not hidden inside a blend; they are on display. Fennel seeds are judged by how green and plump they look, green cardamom by the size and colour of its three-sided pods, and cloves by their intact, rounded heads. Aroma matters too, because the product is chewed or eaten as it is.",
      "This scenario is hypothetical and for illustration only. It follows an imagined mukhwas and sweets maker setting out appearance and aroma requirements for three spices, and does not describe any real company, order or result.",
    ],
    overview: {
      application: "After-meal mouth fresheners, mithai and festive sweets",
      focus: "Visual quality and aroma for spices sold whole and on display",
    },
    requirements: {
      intro: "For spices that customers see and chew, the buyer typically defines:",
      items: [
        {
          title: "Fennel colour and size",
          text: "A pale-green, slender seed with a sweet, anise-like aroma, and a size range that suits coated and plain mouth-freshener mixes.",
        },
        {
          title: "Cardamom pod grade",
          text: "Plump, three-sided green pods with an even colour; pod size and grade are agreed with the supplier for each quotation.",
        },
        {
          title: "Clove head condition",
          text: "Whole, nail-shaped cloves with the rounded head intact, in a reddish to dark brown colour.",
        },
        {
          title: "Aroma",
          text: "A fresh, sweet aroma for fennel, a floral note for cardamom and a warm, intense fragrance for cloves, checked on samples.",
        },
        {
          title: "Packing that protects colour",
          text: "Airtight packing kept away from light, as green colour and volatile aroma fade with exposure.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the maker’s current supplies are acceptable for flavour but not for presentation:",
      points: [
        "Fennel lots vary from bright green to brownish, making the finished mix look uneven.",
        "Cardamom pods are mixed in size, with some pale or split pods.",
        "Clove lots include headless stems and broken pieces that look poor in a sweet box.",
      ],
    },
    approach: {
      intro: "A presentation-led way to brief the supplier:",
      steps: [
        {
          title: "Start from the finished product",
          text: "Photograph or sample the mukhwas and sweets the spices go into, so the supplier understands how they will be seen.",
        },
        {
          title: "Specify grade by appearance",
          text: "Describe colour and size for fennel and cardamom, and intact heads for cloves, against approved samples.",
        },
        {
          title: "Check aroma on samples",
          text: "Crush or chew sample seeds and pods to confirm the aroma is fresh before approving the lot.",
        },
        {
          title: "Agree light-proof packing",
          text: "Ask for sealed, opaque or lined packing that keeps light and air away from green spices.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of an appearance-focused brief. These are typical results of good preparation, not measured outcomes:",
      points: [
        "A more even colour in fennel-based mouth-freshener mixes.",
        "Cardamom pods that look consistent in sweets and gift packs.",
        "Fewer headless or broken cloves to sort out by hand.",
        "Aroma that is checked before purchase rather than discovered after packing.",
      ],
    },
    considerations: [
      {
        title: "Grade and price",
        text: "Larger, greener grades usually cost more, so match the grade to where the spice is visible.",
      },
      {
        title: "Storage after delivery",
        text: "Keep fennel and cardamom sealed, cool and dark between deliveries to hold their green colour.",
      },
      {
        title: "Labelling",
        text: "Ingredient names and any claims on mouth-freshener packs depend on the rules of the destination market.",
      },
    ],
    takeaways: [
      "When spices are on display, appearance belongs in the specification alongside flavour.",
      "Fennel and cardamom colour fades with light and air, so packing is part of quality.",
      "Intact clove heads are a simple, visible marker of a well-sorted lot.",
    ],
    insights: [
      "fennel-seeds-as-mouth-freshener-in-teas-and-baking",
      "green-cardamom-grading-pod-size-colour-and-aroma",
      "clove-quality-head-intact-colour-and-oil-content",
    ],
  },
  {
    slug: "sourcing-psyllium-seed-for-husk-processing",
    status: "illustrative",
    categories: ["spices"],
    title: "Sourcing Psyllium Seed for Husk Processing",
    subtitle:
      "What a husk processor might specify when buying whole psyllium seed, since the quality of the husk it mills depends on the seed it starts with.",
    summary:
      "A hypothetical processor buying whole psyllium (isabgol) seed defines purity, foreign matter and moisture, and evaluates samples before milling seed into husk.",
    industry: "Husk Processing",
    topic: "Seed purity and condition for husk milling",
    products: ["psyllium-seed"],
    keywords: ["psyllium", "isabgol", "husk", "dehusking", "plantago ovata", "fibre ingredient"],
    intro: [
      "Whole psyllium seed (Plantago ovata, known in India as isabgol) is traded mainly as the raw material for psyllium husk. Each small, boat-shaped seed is wrapped in a thin, pale husk that the processor separates by milling, sifting and grading. What arrives at the mill largely sets how much clean husk can be recovered and how hard the line has to work.",
      "This is an illustrative scenario. It imagines a husk processor preparing a seed-buying specification and does not describe any real customer, shipment, yield or test result.",
    ],
    overview: {
      application: "Milling whole psyllium seed into husk and husk powder",
      focus: "Seed purity, foreign matter and moisture as the basis of husk quality",
    },
    requirements: {
      intro: "A processor buying seed for dehusking usually defines:",
      items: [
        {
          title: "Seed identity",
          text: "Whole Plantago ovata seed, with the expected pinkish-grey to brown colour and smooth, boat-shaped appearance.",
        },
        {
          title: "Purity",
          text: "The proportion of sound psyllium seed the processor needs, stated as the buyer’s own specification and confirmed with each quotation.",
        },
        {
          title: "Foreign matter",
          text: "Limits for dust, stones, other seeds and plant matter, which otherwise have to be removed on the processor’s own line.",
        },
        {
          title: "Moisture",
          text: "A moisture limit set by the processor, because the husk takes up water readily and damp seed can cake or spoil in store.",
        },
        {
          title: "Packing",
          text: "Lined or moisture-resistant bags suited to the processor’s warehouse and intake.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the processor has been buying seed on price and a short description:",
      points: [
        "Lots vary in cleanliness, so the pre-cleaning step before dehusking changes from one lot to the next.",
        "Moisture is not specified, and some bags arrive feeling damp after a humid transit.",
        "There is no agreed sample, so it is hard to tell whether a slow milling run comes from the seed or the line.",
      ],
    },
    approach: {
      intro: "A step-by-step way to link seed buying to mill performance:",
      steps: [
        {
          title: "Translate the line into a spec",
          text: "Write down the purity, foreign-matter and moisture levels the dehusking and grading line handles well.",
        },
        {
          title: "Trial samples on the mill",
          text: "Run representative samples through a small milling trial and compare husk recovery and cleanliness.",
        },
        {
          title: "Agree the specification in writing",
          text: "Confirm the parameters with the supplier so each quotation refers to the same seed quality.",
        },
        {
          title: "Plan dry handling",
          text: "Agree lined packing, palletised stacking and protection from humidity from store to container.",
        },
        {
          title: "Check each lot on intake",
          text: "Sample incoming seed against the approved reference before releasing it to the mill.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of a seed-buying specification. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Seed lots that can be compared on the parameters that matter to the mill.",
        "A steadier pre-cleaning workload before dehusking.",
        "Lower risk of damp seed caking in storage.",
        "A clearer basis for discussing a lot that does not match the approved sample.",
      ],
    },
    considerations: [
      {
        title: "Yield depends on seed",
        text: "Husk recovery depends on seed quality and the processor’s equipment, so treat it as something to trial rather than assume.",
      },
      {
        title: "Moisture control",
        text: "Keep seed in a cool, dry, ventilated store, stacked off the floor, away from humidity.",
      },
      {
        title: "End-use rules",
        text: "Husk sold as a food or fibre ingredient must meet destination-market labelling rules; confirm them before planning claims.",
      },
    ],
    takeaways: [
      "Husk quality starts with the seed, so the seed specification is the first quality control step.",
      "Purity, foreign matter and moisture are best set from the processor’s own line, not a generic grade.",
      "A milling trial on samples says more than a description on a quotation.",
    ],
    insights: [
      "buying-psyllium-seed-for-husk-processing-what-to-check",
      "from-psyllium-seed-to-husk-how-whole-seed-is-processed",
    ],
  },
  {
    slug: "exporting-psyllium-seed-documents-and-packing",
    status: "illustrative",
    categories: ["spices"],
    title: "Exporting Psyllium Seed: Documents, Packing and Labelling",
    subtitle:
      "How an importer of whole psyllium seed might plan paperwork, moisture-safe packing and compliant labelling before the first container is booked.",
    summary:
      "A hypothetical psyllium seed importer lists the documents, packing and label wording its market requires, and checks claim rules before seed is packed.",
    industry: "Export Documentation",
    topic: "Documents, packing and labels for psyllium imports",
    products: ["psyllium-seed"],
    keywords: ["psyllium", "isabgol", "export documents", "labelling", "packing", "import"],
    intro: [
      "Psyllium seed is a dry, compact commodity, but it has two features that shape how it is shipped: its husk takes up moisture readily, and psyllium products are often subject to rules about what may be said on the label. An importer who plans documents, packing and labelling together avoids most last-minute problems.",
      "This scenario is illustrative and hypothetical. It follows an imagined importer of whole psyllium seed and does not describe any real customer, destination, shipment or regulatory decision.",
    ],
    overview: {
      application: "Importing whole psyllium seed for processing, repacking or retail",
      focus: "Documentation, moisture-safe packing and label compliance",
    },
    requirements: {
      intro: "Before booking a shipment, the importer usually needs to confirm:",
      items: [
        {
          title: "Import documents",
          text: "The documents its authorities and customers expect, for example a phytosanitary certificate, certificate of origin and specification sheet, confirmed per destination.",
        },
        {
          title: "Quality documents",
          text: "Any analysis or test reports the importer’s customers require, listed up front so they can be checked against what is available.",
        },
        {
          title: "Packing",
          text: "Lined or moisture-resistant bags, a pack size suited to the importer’s warehouse, and palletising or stacking instructions.",
        },
        {
          title: "Bag marking",
          text: "Product name, botanical name, lot identification and any other markings the importer’s system or authorities need on each bag.",
        },
        {
          title: "Label wording",
          text: "How the product will be named and described on resale packs, checked against destination-market rules.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the importer has agreed quality and price but left the shipping details open:",
      points: [
        "The document list is assumed rather than checked with the importer’s customs agent.",
        "Packing is described only as ‘standard bags’, with nothing said about moisture protection in a long transit.",
        "Draft retail labels include wording about effects on the body that the destination market may not permit.",
      ],
    },
    approach: {
      intro: "A planning sequence that brings documents, packing and labels together:",
      steps: [
        {
          title: "Confirm documents with the destination",
          text: "Ask the customs agent or regulator which documents psyllium seed needs, then share the list with the supplier before the order is packed.",
        },
        {
          title: "Specify moisture-safe packing",
          text: "Agree lined bags, dry container conditions and stacking off the floor to protect the hygroscopic husk.",
        },
        {
          title: "Agree bag marking",
          text: "Fix the marking text and lot coding in advance so documents and bags refer to the same lot.",
        },
        {
          title: "Review labels and claims",
          text: "Check product names and any claims against the destination market’s rules before artwork is printed.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of planning paperwork, packing and labels together. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Documents that match the destination’s requirements before the shipment leaves.",
        "Packing chosen with moisture risk in mind rather than as an afterthought.",
        "Retail labels that are reviewed for compliance before printing.",
      ],
    },
    considerations: [
      {
        title: "Health and function claims",
        text: "Do not assume claims used in one market are allowed in another; confirm them with the local regulator.",
      },
      {
        title: "Lot traceability",
        text: "Keep bag marking, documents and samples tied to the same lot for easier queries later.",
      },
      {
        title: "Transit humidity",
        text: "Long sea transits and humid ports increase moisture risk, so discuss container conditions with the forwarder.",
      },
    ],
    takeaways: [
      "Documents are confirmed with the destination, not assumed from a previous shipment.",
      "Psyllium’s husk absorbs water, so moisture-safe packing is part of the product, not just the logistics.",
      "Labelling and claims depend on destination-market rules and should be checked before artwork is printed.",
    ],
    insights: ["exporting-psyllium-seed-documentation-packing-and-labelling"],
  },
  {
    slug: "cleaning-standards-for-whole-seed-spices",
    status: "illustrative",
    categories: ["spices"],
    title: "Agreeing Cleaning Standards for Whole Seed Spices",
    subtitle:
      "How a buyer of small seed spices might choose between machine cleaning and sortex cleaning, and write foreign-matter and broken-seed limits into the order.",
    summary:
      "A hypothetical buyer of psyllium, cumin, fennel and coriander seeds agrees cleaning method, foreign-matter limits and broken-seed expectations before ordering.",
    industry: "Quality Specification",
    topic: "Machine cleaning, sortex and foreign matter",
    products: ["psyllium-seed", "cumin-seeds", "fennel-seeds", "coriander-seeds"],
    keywords: ["sortex", "machine cleaned", "foreign matter", "seed spices", "cumin", "coriander", "fennel"],
    intro: [
      "Small seed spices such as cumin, fennel, coriander and psyllium are harvested, dried and threshed in the field, so they often carry dust, small stones, chaff, stems and seeds of other plants. Cleaning removes much of this, but ‘cleaned’ can mean anything from a single pass through a machine to optical sorting. The word alone does not tell a buyer what to expect.",
      "This is a hypothetical, illustrative scenario. It follows an imagined spice buyer turning the word ‘cleaned’ into a written standard and describes no real customer, lot or inspection result.",
    ],
    overview: {
      application: "Spice packing, grinding and blending from whole seed",
      focus: "Defining cleaning method, foreign matter and broken-seed limits per spice",
    },
    requirements: {
      intro: "For each seed spice, the buyer typically sets out:",
      items: [
        {
          title: "Cleaning method",
          text: "Machine cleaning, or sortex (optical) cleaning on request where the product page offers it, for example for cumin and coriander seeds.",
        },
        {
          title: "Foreign matter",
          text: "What counts as foreign matter (dust, stones, stems, chaff, other seeds) and the limit the buyer will accept, written as the buyer’s specification.",
        },
        {
          title: "Broken and split seed",
          text: "Whether split coriander is acceptable or wanted, and how much broken cumin or fennel seed the buyer’s use can tolerate.",
        },
        {
          title: "Colour uniformity",
          text: "An even greyish-brown for cumin, pale green for fennel and straw colour for coriander, agreed against a reference sample.",
        },
        {
          title: "Psyllium purity",
          text: "For psyllium, the share of sound seed and the absence of other seeds and plant matter, since it goes on to be milled into husk.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the buyer’s orders simply say ‘machine cleaned’ or ‘cleaned’, and that has led to:",
      points: [
        "Cumin lots that look clean in the bag but leave stones and stems on the buyer’s sieves.",
        "Coriander that arrives with more split seed than a whole-seed retail pack can carry.",
        "Fennel and psyllium lots with visible other seeds, judged differently by buyer and supplier.",
      ],
    },
    approach: {
      intro: "A method for agreeing cleaning standards that both sides can check:",
      steps: [
        {
          title: "Decide the cleaning level per use",
          text: "Grinding stock may need less visual sorting than retail whole seed, so choose machine or sortex cleaning accordingly.",
        },
        {
          title: "Define foreign matter in writing",
          text: "List the items that count as foreign matter and the acceptable limits, so both sides measure the same thing.",
        },
        {
          title: "Approve cleaned samples",
          text: "Ask for samples cleaned to the chosen standard and keep them as references.",
        },
        {
          title: "Agree how lots are checked",
          text: "Decide how samples are drawn and checked at dispatch and on arrival, and what happens if a lot falls outside the standard.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of a written cleaning standard. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Clear expectations of what ‘cleaned’ means for each spice.",
        "Less re-cleaning or sieving at the buyer’s facility.",
        "Quicker, less subjective intake checks against approved samples.",
        "A cleaner basis for comparing quotations that offer different cleaning methods.",
      ],
    },
    considerations: [
      {
        title: "Cost of extra cleaning",
        text: "Sortex cleaning adds a processing step, so request it where the end use needs it.",
      },
      {
        title: "Whole versus split",
        text: "For coriander, specify whole, split or a mix; for grinding, split seed may be perfectly acceptable.",
      },
      {
        title: "Sampling method",
        text: "Agree how samples are drawn from a lot, since a few bags may not represent a whole shipment.",
      },
    ],
    takeaways: [
      "‘Cleaned’ is not a specification until the method and limits are written down.",
      "Different end uses justify different cleaning levels for the same spice.",
      "Approved, cleaned reference samples make intake checks faster and fairer.",
    ],
    insights: [
      "machine-cleaning-and-sortex-how-cumin-is-prepared-for-export",
      "coriander-seeds-colour-split-content-and-aroma",
      "buying-psyllium-seed-for-husk-processing-what-to-check",
    ],
  },
  {
    slug: "whole-turmeric-for-in-house-grinding",
    status: "illustrative",
    categories: ["spices", "powders"],
    title: "Whole Turmeric Fingers for In-House Grinding",
    subtitle:
      "Why a spice grinder might choose dried turmeric fingers over ready-made powder, and what to specify so its own milling produces a consistent golden powder.",
    summary:
      "A hypothetical spice grinder weighs buying whole turmeric fingers to mill in-house against buying turmeric powder, and sets out finish, colour and curcumin as buyer specs.",
    industry: "Spice Grinding",
    topic: "Whole fingers versus ready-ground turmeric",
    products: ["turmeric", "turmeric-powder"],
    keywords: ["turmeric", "haldi", "turmeric fingers", "grinding", "curcumin", "milling", "spice grinder"],
    intro: [
      "Turmeric (Curcuma longa) is boiled, dried and traded as hard fingers and rounded bulbs before it is ground into powder. Some buyers take the powder ready-made; others prefer to grind whole turmeric themselves so they control fineness, blending and the time between grinding and packing.",
      "This illustrative scenario follows a hypothetical spice grinder deciding whether to switch from buying turmeric powder to milling whole fingers. It is not a description of any real company, order or test result.",
    ],
    overview: {
      application: "Milling turmeric powder for retail packs and spice blends",
      focus: "Choosing between whole turmeric and powder, and specifying whole fingers for grinding",
    },
    requirements: {
      intro: "To buy whole turmeric for grinding, the grinder needs to decide:",
      items: [
        {
          title: "Form",
          text: "Fingers, bulbs or a mix, based on how the mill handles each shape and which the buyer’s customers expect.",
        },
        {
          title: "Finish",
          text: "Polished or unpolished turmeric; polishing smooths the outer skin, which can affect the colour and cleanliness of the ground powder.",
        },
        {
          title: "Colour",
          text: "The golden to deep orange interior colour the finished powder needs, agreed against a broken-finger reference sample.",
        },
        {
          title: "Curcumin",
          text: "Any curcumin requirement written as the buyer’s own specification; values are shared with each quotation and vary by variety.",
        },
        {
          title: "Dryness",
          text: "Fingers dried hard enough for the grinder’s mill, with a moisture expectation set by the buyer’s process.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the grinder is weighing the following trade-offs:",
      points: [
        "Ready-made powder is convenient, but the grinder cannot adjust its fineness or colour blend.",
        "Whole fingers give control, but add milling, sieving and cleaning steps on site.",
        "The team has no specification for whole turmeric and does not know which parameters to ask for.",
      ],
    },
    approach: {
      intro: "A structured way to make and act on the decision:",
      steps: [
        {
          title: "Compare total handling",
          text: "List the milling, sieving and packing work whole turmeric would add, alongside the control it would bring.",
        },
        {
          title: "Specify the whole turmeric",
          text: "Write down form, finish, colour, curcumin and dryness requirements for the fingers.",
        },
        {
          title: "Trial-grind samples",
          text: "Mill supplier samples on the grinder’s own equipment and compare the powder with the current product.",
        },
        {
          title: "Keep powder as an option",
          text: "Retain a specification for turmeric powder, so ready-ground supply can cover peaks or mill downtime.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of a considered whole-versus-powder decision. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Greater control over fineness and colour blending in the grinder’s own powder.",
        "A whole-turmeric specification that suppliers can quote against.",
        "A fallback powder specification for times when milling capacity is short.",
      ],
    },
    considerations: [
      {
        title: "Grinding and freshness",
        text: "Grinding close to packing helps keep turmeric’s aroma, but needs space and equipment on site.",
      },
      {
        title: "Storage of whole turmeric",
        text: "Store fingers cool, dry and away from light and moisture until they are milled.",
      },
      {
        title: "Product claims",
        text: "Any claims made on retail turmeric packs depend on destination-market labelling rules.",
      },
    ],
    takeaways: [
      "Whole turmeric gives a grinder control; powder gives convenience. Both have a place.",
      "Form, finish, colour and curcumin are the core parameters for whole turmeric bought for milling.",
      "A trial grind on the buyer’s own mill is the most useful sample test.",
    ],
    insights: [
      "whole-turmeric-for-grinding-extraction-and-retail",
      "how-turmeric-rhizomes-become-fine-golden-powder",
      "whole-turmeric-fingers-curcumin-polish-and-moisture",
    ],
  },
  {
    slug: "polished-or-unpolished-turmeric",
    status: "illustrative",
    categories: ["spices"],
    title: "Polished or Unpolished Turmeric: Specifying the Finish",
    subtitle:
      "How a buyer might choose between polished and unpolished turmeric, and between fingers and bulbs, depending on whether the turmeric is sold whole or processed.",
    summary:
      "A hypothetical buyer serving both retail and processing customers decides which turmeric finish and form each channel needs, and writes it into the order.",
    industry: "Retail & Processing",
    topic: "Finish and form for retail and processing",
    products: ["turmeric"],
    keywords: ["turmeric", "polished turmeric", "unpolished turmeric", "fingers", "bulbs", "haldi"],
    intro: [
      "After boiling and drying, turmeric rhizomes have a rough, dull outer skin. Many lots are then polished, a step that smooths the skin and gives the fingers a cleaner, more even look; others are sold unpolished. Turmeric is also traded in two forms: slender fingers and rounder bulbs, the central part of the rhizome.",
      "This scenario is hypothetical and illustrative. It follows an imagined distributor with retail and processing customers and does not describe any real company, shipment or result.",
    ],
    overview: {
      application: "Whole turmeric for retail packs and for grinding customers",
      focus: "Matching turmeric finish and form to each sales channel",
    },
    requirements: {
      intro: "For each channel, the buyer typically specifies:",
      items: [
        {
          title: "Finish",
          text: "Polished turmeric for a smooth, even appearance, or unpolished turmeric where the buyer’s process does not need it.",
        },
        {
          title: "Form",
          text: "Fingers, bulbs or a mix; retail buyers often prefer uniform fingers, while some grinders accept bulbs.",
        },
        {
          title: "Size and uniformity",
          text: "How even the fingers should be in length and thickness, agreed against an approved sample.",
        },
        {
          title: "Colour",
          text: "The golden to deep orange interior colour, which varies by variety and is best judged on a broken finger.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the distributor’s single order description has caused mismatches:",
      points: [
        "Retail customers find unpolished, mixed-size turmeric looks rough on the shelf.",
        "Grinding customers question paying for a polished finish they do not need.",
        "Fingers and bulbs arrive mixed, so neither channel gets a consistent product.",
      ],
    },
    approach: {
      intro: "A channel-by-channel approach to specifying the finish:",
      steps: [
        {
          title: "Split the requirement by channel",
          text: "Write one specification for retail whole turmeric and another for processing stock.",
        },
        {
          title: "Choose finish and form for each",
          text: "Set polished or unpolished and fingers or bulbs separately for each specification.",
        },
        {
          title: "Approve samples",
          text: "Request samples of each finish and form, break a few fingers to check colour, and keep approved references.",
        },
        {
          title: "Label lots by channel",
          text: "Ask for bag marking that shows the finish and form, so stock is not mixed in the warehouse.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of specifying finish and form per channel. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Retail packs with a more uniform, presentable appearance.",
        "Processing stock bought without paying for finishing it does not need.",
        "Less mixing of fingers and bulbs between channels.",
      ],
    },
    considerations: [
      {
        title: "Polish is about appearance",
        text: "Polishing changes the surface, not the variety, so colour and curcumin still need to be specified separately.",
      },
      {
        title: "Storage",
        text: "Keep both finishes cool, dry and away from light and moisture.",
      },
      {
        title: "Retail labelling",
        text: "Product naming on whole turmeric packs must follow the destination market’s labelling rules.",
      },
    ],
    takeaways: [
      "Finish and form are separate choices, and both belong in the order.",
      "Retail and processing buyers often need different finishes from the same spice.",
      "Breaking a sample finger is the simplest way to check interior colour.",
    ],
    insights: [
      "boiling-drying-and-polishing-how-turmeric-is-cured",
      "whole-turmeric-fingers-curcumin-polish-and-moisture",
    ],
  },
  {
    slug: "planning-seasonal-whole-spice-purchases",
    status: "illustrative",
    categories: ["spices"],
    title: "Planning Seasonal Purchases of Whole Spices",
    subtitle:
      "How a procurement team might plan a year of turmeric, red chilli, cumin and coriander buying around each crop’s harvest, so it is not caught short mid-season.",
    summary:
      "A hypothetical procurement team maps annual needs for turmeric, chilli, cumin and coriander against crop cycles, storage capacity and forward planning with the supplier.",
    industry: "Procurement Planning",
    topic: "Annual buying around spice harvest cycles",
    products: ["turmeric", "red-chilli", "cumin-seeds", "coriander-seeds"],
    keywords: ["harvest", "new crop", "procurement", "planning", "turmeric", "chilli", "cumin", "coriander"],
    intro: [
      "Turmeric, red chilli, cumin and coriander are agricultural crops, each with its own growing and harvest cycle. Availability, quality and price shift through the year as one crop is harvested and the previous one is drawn down. A buyer who orders only when the warehouse is empty is often buying at the least convenient point in that cycle.",
      "This is an illustrative scenario. It imagines a procurement team building an annual buying plan and does not describe any real customer, contract, date or price.",
    ],
    overview: {
      application: "Year-round supply of whole spices for blending and grinding",
      focus: "Forward planning around harvest cycles, storage and call-offs",
    },
    requirements: {
      intro: "To plan a year of buying, the team typically needs:",
      items: [
        {
          title: "Annual volume per spice",
          text: "A forecast of how much turmeric, chilli, cumin and coriander the business uses, and how evenly through the year.",
        },
        {
          title: "Crop cycle information",
          text: "When new-crop supply of each spice usually becomes available, discussed with the supplier rather than assumed.",
        },
        {
          title: "Storage capacity and conditions",
          text: "How much the buyer can hold in a cool, dry store, and for how long each spice keeps its colour and aroma there.",
        },
        {
          title: "Specification per spice",
          text: "Agreed quality parameters, so a forward purchase describes the same product as today’s spot purchase.",
        },
        {
          title: "Delivery pattern",
          text: "Whether goods are shipped in one lot or called off in stages through the year.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the team has been buying reactively:",
      points: [
        "Orders are placed only when stock is low, leaving little time to approve samples.",
        "Some purchases fall late in a crop year, when the choice of lots is narrower.",
        "Storage space is used unevenly: overfull after one purchase, nearly empty before the next.",
      ],
    },
    approach: {
      intro: "A planning cycle that links buying to the crop calendar:",
      steps: [
        {
          title: "Build the annual forecast",
          text: "Estimate monthly use of each spice from past consumption and planned products.",
        },
        {
          title: "Map supply cycles with the supplier",
          text: "Ask when each crop is typically harvested and processed, and when samples of new crop can be sent.",
        },
        {
          title: "Match purchases to storage",
          text: "Plan purchase sizes around warehouse space and the conditions each spice needs.",
        },
        {
          title: "Agree call-offs",
          text: "Where useful, agree scheduled deliveries against a forward plan rather than single large shipments.",
        },
        {
          title: "Review each season",
          text: "Compare actual use and quality with the plan after each crop and adjust the next year’s schedule.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of a seasonal buying plan. These are typical results of good preparation, not measured outcomes:",
      points: [
        "More time to compare new-crop samples before committing.",
        "Fewer emergency purchases when stock runs out.",
        "Storage space used more evenly through the year.",
        "Clearer conversations with the supplier about volumes and timing.",
      ],
    },
    considerations: [
      {
        title: "Weather and crop variation",
        text: "Harvests vary from year to year, so treat a buying plan as a guide and keep some flexibility.",
      },
      {
        title: "Storage quality",
        text: "Chilli colour and the aroma of cumin and coriander fade with heat, light and air; plan holding times accordingly.",
      },
      {
        title: "Price movements",
        text: "Prices for agricultural spices move with each crop; agree how forward purchases will be priced before committing.",
      },
    ],
    takeaways: [
      "Each spice has its own crop cycle, so one buying date rarely suits all four.",
      "Forward planning gives time to approve samples instead of accepting whatever is available.",
      "Storage conditions decide how far ahead it is sensible to buy.",
    ],
    insights: [
      "cumin-seeds-export-guide-purity-colour-and-aroma",
      "storing-dried-chillies-to-protect-colour-and-prevent-mould",
      "eagle-scooter-and-badami-coriander-grades-explained",
    ],
  },
  {
    slug: "cinnamon-or-cassia-specifying-the-species",
    status: "illustrative",
    categories: ["spices"],
    title: "Cinnamon or Cassia: Specifying the Species",
    subtitle:
      "How a buyer might make sure the ‘cinnamon’ in a specification is the species its recipe, label and market expect, true cinnamon or cassia.",
    summary:
      "A hypothetical bakery-ingredient buyer clarifies whether it needs true cinnamon (Cinnamomum verum) or cassia, and checks appearance, flavour and labelling before ordering.",
    industry: "Quality Specification",
    topic: "True cinnamon versus cassia in a specification",
    products: ["cinnamon"],
    keywords: ["cinnamon", "cassia", "ceylon cinnamon", "cinnamomum verum", "coumarin", "quills", "bakery"],
    intro: [
      "‘Cinnamon’ is used in trade for the dried inner bark of several Cinnamomum species. True cinnamon (Cinnamomum verum, often called Ceylon cinnamon) forms thin, layered, papery quills with a delicate, sweet flavour. Cassia comes from related species and is usually thicker, harder and darker, with a stronger, more pungent taste. Both are sold as cinnamon in many markets, which is why the species belongs in the specification.",
      "This scenario is illustrative and hypothetical. It follows an imagined bakery-ingredient buyer and does not describe any real customer, shipment, test result or regulatory decision.",
    ],
    overview: {
      application: "Bakery fillings, beverages and spice blends",
      focus: "Naming the species and its consequences for flavour, appearance and labelling",
    },
    requirements: {
      intro: "To avoid a species mix-up, the buyer typically specifies:",
      items: [
        {
          title: "Species",
          text: "Cinnamomum verum or cassia, named botanically, since species and grade are confirmed with each enquiry.",
        },
        {
          title: "Form",
          text: "Quills, quill cuts or bark pieces, depending on whether the buyer grinds, infuses or sells whole.",
        },
        {
          title: "Appearance",
          text: "Thin, multi-layered quills for true cinnamon, or thicker single-layer bark for cassia, agreed against a reference sample.",
        },
        {
          title: "Flavour profile",
          text: "Delicate and sweet, or stronger and more pungent, matched to the recipe the ingredient was developed for.",
        },
        {
          title: "Labelling and coumarin rules",
          text: "How the product must be named on the label, and whether the destination market limits coumarin in certain foods; cassia generally carries more coumarin than true cinnamon.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the buyer’s documents leave the species open:",
      points: [
        "The specification and purchase order say only ‘cinnamon’.",
        "A new sample tastes stronger and looks thicker than the product used in recipe development.",
        "The label team is unsure whether the ingredient name on the pack still fits the product.",
      ],
    },
    approach: {
      intro: "A species-first way to brief the supplier:",
      steps: [
        {
          title: "Identify the reference species",
          text: "Confirm which species the recipe was developed with, using the original sample or supplier documents.",
        },
        {
          title: "Name it in the specification",
          text: "Add the botanical name and form to the specification and every purchase order.",
        },
        {
          title: "Compare samples physically",
          text: "Check quill thickness, layering, colour and flavour against the reference before approving a lot.",
        },
        {
          title: "Check market rules",
          text: "Confirm labelling and any coumarin limits with the destination market before the product is reformulated or relabelled.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of naming the species. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Quotations and samples that refer to the same species.",
        "Flavour in finished products that stays closer to the original recipe.",
        "Labels reviewed against the actual species in the pack.",
      ],
    },
    considerations: [
      {
        title: "Cost differences",
        text: "True cinnamon and cassia are priced differently, so compare quotations only within the same species.",
      },
      {
        title: "Ground product",
        text: "Species is harder to tell apart once ground, so agree it before grinding rather than after.",
      },
      {
        title: "Storage",
        text: "Keep quills in airtight packing in a cool, dry place, away from light, to hold their aroma.",
      },
    ],
    takeaways: [
      "‘Cinnamon’ alone is not a specification; the species is.",
      "Quill thickness and layering are useful first checks on a whole sample.",
      "Labelling and coumarin rules differ by market and should be confirmed for the species bought.",
    ],
    insights: [
      "cinnamon-vs-cassia-knowing-what-you-are-sourcing",
      "buying-cinnamon-quills-thickness-and-aroma",
      "cinnamon-in-bakery-beverages-and-spice-blends",
    ],
  },
  {
    slug: "whole-seeds-for-tempering-and-spice-mixes",
    status: "illustrative",
    categories: ["spices"],
    title: "Whole Seeds for Tempering and Spice-Mix Makers",
    subtitle:
      "How a spice-mix packer or restaurant group might specify fenugreek, coriander and mustard seeds that are used whole in hot oil or roasted and ground into blends.",
    summary:
      "A hypothetical spice-mix packer and restaurant group sets seed size, colour, cleanliness and storage needs for fenugreek, coriander and mustard used in tempering and blends.",
    industry: "Spice Mixes & Food Service",
    topic: "Seed size, colour and cleanliness for tempering",
    products: ["fenugreek-seeds", "coriander-seeds", "mustard-seeds"],
    keywords: ["tadka", "tempering", "spice mix", "fenugreek", "coriander", "mustard", "restaurant"],
    intro: [
      "In tempering, whole seeds are dropped into hot oil for seconds: mustard seeds pop and turn nutty, fenugreek turns golden, and coriander releases its citrus note. Because the seeds stay whole and visible, and cook very quickly, uneven sizes or grit are noticed. The same seeds are often roasted and ground into curry powders and spice mixes, where cleanliness and aroma matter more than looks.",
      "This is a hypothetical scenario for illustration only. It imagines a spice-mix packer supplying a restaurant group and describes no real company, order or result.",
    ],
    overview: {
      application: "Tempering in commercial kitchens and packed spice mixes",
      focus: "Seed size, colour, cleanliness and storage for seeds used whole and ground",
    },
    requirements: {
      intro: "For each seed, the buyer typically defines:",
      items: [
        {
          title: "Mustard seed type",
          text: "Black, brown or yellow seed, since tempering recipes and pickling blends call for different types.",
        },
        {
          title: "Fenugreek condition",
          text: "Whole, golden-yellow to amber seeds, clean of dust, chaff and stones, as a burnt or gritty seed is obvious in tempering.",
        },
        {
          title: "Coriander form",
          text: "Whole seed for tempering and visible mixes, or split seed for grinding, with an even straw colour.",
        },
        {
          title: "Size uniformity",
          text: "Reasonably even seed size so that seeds in the same pan cook at the same rate.",
        },
        {
          title: "Kitchen-friendly packing",
          text: "Pack sizes and sealed packaging suited to restaurant stores, where seeds are opened and used over time.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the packer and its restaurant customers report:",
      points: [
        "Mixed-size mustard seeds that pop unevenly, with some scorching before others open.",
        "Small stones found in fenugreek during tempering.",
        "Coriander that loses its fresh, citrus aroma in kitchen storage.",
      ],
    },
    approach: {
      intro: "A practical sequence for seeds used both whole and ground:",
      steps: [
        {
          title: "Separate whole-seed and grinding grades",
          text: "Specify tighter appearance and cleaning standards for seeds used whole, and accept split or less uniform seed for grinding.",
        },
        {
          title: "Agree cleaning",
          text: "Ask for machine-cleaned seed, with sortex cleaning for coriander where visible quality is critical.",
        },
        {
          title: "Test in the pan",
          text: "Temper and roast samples in a kitchen trial to check popping, colour and aroma before approval.",
        },
        {
          title: "Plan storage",
          text: "Supply sealed packs sized to how quickly kitchens use each seed, and store them cool and dry.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of a tempering-focused seed brief. These are typical results of good preparation, not measured outcomes:",
      points: [
        "More even cooking of seeds in tempering.",
        "Fewer complaints about grit or stones in finished dishes.",
        "Aroma that lasts longer in kitchen storage thanks to suitable pack sizes.",
      ],
    },
    considerations: [
      {
        title: "Grade by use",
        text: "Paying for a premium whole-seed grade makes sense only where seeds are seen; grinding stock can be specified differently.",
      },
      {
        title: "Pest control",
        text: "Fenugreek and other seeds stored in warm, damp conditions can attract pests; keep stores dry and bags off the floor.",
      },
      {
        title: "Odour pick-up",
        text: "Store seeds away from strong-smelling goods, as they can take on other odours.",
      },
    ],
    takeaways: [
      "Seeds used whole in tempering need tighter size and cleanliness standards than grinding stock.",
      "A kitchen trial is the most practical test of a tempering seed.",
      "Pack size and storage matter as much as grade for seeds opened and used over weeks.",
    ],
    insights: [
      "mustard-seeds-for-tempering-pickles-and-condiments",
      "coriander-seeds-in-spice-mixes-pickling-and-brewing",
      "fenugreek-seeds-quality-colour-cleanliness-and-seed-condition",
    ],
  },
  {
    slug: "mustard-seed-for-condiment-production",
    status: "illustrative",
    categories: ["spices"],
    title: "Mustard Seed for Condiment Production",
    subtitle:
      "How a condiment maker might choose between yellow, brown and black mustard seed, since the seed type largely decides the heat and colour of prepared mustard.",
    summary:
      "A hypothetical condiment maker decides which mustard seed type suits its prepared mustards and sauces, and specifies type purity and cleaning before sourcing.",
    industry: "Condiment Production",
    topic: "Choosing mustard seed type for condiments",
    products: ["mustard-seeds"],
    keywords: ["mustard", "prepared mustard", "condiment", "yellow mustard", "brown mustard", "sauces", "dressings"],
    intro: [
      "Mustard seeds are mild while whole; their sharp heat develops when the seed is crushed or ground and mixed with liquid. Yellow mustard seed generally gives a milder, brighter-coloured condiment, while brown and black seed give stronger heat and a darker colour. For a condiment maker, the seed type is therefore a recipe decision, not just a purchasing one.",
      "This is an illustrative, hypothetical scenario. It follows an imagined condiment maker and describes no real customer, recipe, order or test result.",
    ],
    overview: {
      application: "Prepared mustard, mustard sauces and dressings",
      focus: "Seed type, type purity and cleaning as drivers of heat and colour",
    },
    requirements: {
      intro: "For condiment production, the buyer typically specifies:",
      items: [
        {
          title: "Seed type",
          text: "Yellow, brown or black mustard seed, chosen per product according to the heat and colour each recipe needs.",
        },
        {
          title: "Type purity",
          text: "How far a lot should be one type only, since a mix of yellow and brown seed changes heat and colour.",
        },
        {
          title: "Cleaning",
          text: "Seed cleaned of dust, stones, husk and other seeds, as foreign matter ends up in a ground, smooth product.",
        },
        {
          title: "Seed condition",
          text: "Hard, whole, round seeds that are dry and sound, since damaged or damp seed can affect flavour.",
        },
        {
          title: "Packing",
          text: "Sealed, dry packing suited to the condiment plant’s intake and storage.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the maker is seeing batch-to-batch variation:",
      points: [
        "Some batches of prepared mustard are noticeably hotter or darker than others.",
        "Seed lots contain a mix of colours, though the order asked for one type.",
        "There is no approved seed sample to compare incoming lots against.",
      ],
    },
    approach: {
      intro: "A recipe-led way to specify mustard seed:",
      steps: [
        {
          title: "Link each product to a seed type",
          text: "Record which seed type, or blend of types, each condiment recipe uses.",
        },
        {
          title: "Specify type purity and cleaning",
          text: "Set expectations for other seed types and foreign matter in each lot, as the buyer’s specification.",
        },
        {
          title: "Approve by test batch",
          text: "Make a small batch of the condiment from each sample and compare heat and colour with the standard.",
        },
        {
          title: "Hold reference samples",
          text: "Keep approved seed samples for each type to check future lots.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of a seed-type specification. These are typical results of good preparation, not measured outcomes:",
      points: [
        "More consistent heat and colour in prepared mustard.",
        "Fewer mixed-type lots reaching production.",
        "A clear standard to raise with the supplier if a lot falls short.",
      ],
    },
    considerations: [
      {
        title: "Availability by type",
        text: "Not every type is available at all times; the types on offer are confirmed with each enquiry.",
      },
      {
        title: "Allergen labelling",
        text: "Mustard is a labelled allergen in some markets; confirm the destination’s labelling rules for finished condiments.",
      },
      {
        title: "Storage",
        text: "Whole mustard seed keeps well when cool, dry and sealed; grind close to use where possible.",
      },
    ],
    takeaways: [
      "The seed type sets the heat and colour of prepared mustard, so it belongs in the recipe and the order.",
      "Type purity is as important as cleanliness for a condiment maker.",
      "A test batch of the condiment is the most relevant sample check.",
    ],
    insights: [
      "mustard-seeds-export-guide-black-brown-and-yellow",
      "cleaning-and-grading-mustard-seeds-for-export",
      "mustard-seeds-for-tempering-pickles-and-condiments",
    ],
  },
  {
    slug: "black-pepper-for-meat-and-savoury-seasoning",
    status: "illustrative",
    categories: ["spices", "powders"],
    title: "Black Pepper for Meat Processing and Savoury Seasoning",
    subtitle:
      "How a meat processor or seasoning supplier might specify whole and ground black pepper with garlic powder for rubs, sausages and savoury blends.",
    summary:
      "A hypothetical meat-seasoning supplier sets grind, aroma, microbiological expectations and documents for black pepper, ground pepper and garlic powder used in rubs and sausages.",
    industry: "Meat Processing",
    topic: "Pepper grind and microbiology for meat products",
    products: ["black-pepper", "black-pepper-powder", "garlic-powder"],
    keywords: ["black pepper", "cracked pepper", "garlic powder", "meat seasoning", "sausage", "rub", "microbiology"],
    intro: [
      "Black pepper and garlic powder are among the most common ingredients in meat seasonings, from sausage blends to steak rubs. Meat products bring extra scrutiny: spices are agricultural products that can carry microbial load, and meat processors usually set their own microbiological requirements for every ingredient. Grind also matters, from fine pepper in sausage meat to coarse, cracked pepper on the surface of a rub.",
      "This scenario is hypothetical and illustrative. It follows an imagined seasoning supplier to meat processors and does not describe any real company, order, test result or treatment.",
    ],
    overview: {
      application: "Sausage seasonings, meat rubs and savoury blends",
      focus: "Grind, aroma, microbiological expectations and documentation",
    },
    requirements: {
      intro: "For meat seasonings, the buyer typically sets out:",
      items: [
        {
          title: "Pepper form and grind",
          text: "Whole peppercorns for in-house cracking, or ground pepper in a fine or coarse grind agreed with each enquiry.",
        },
        {
          title: "Aroma",
          text: "A sharp, woody pepper aroma, bearing in mind that ground pepper loses its bite faster than whole peppercorns.",
        },
        {
          title: "Garlic powder texture",
          text: "A fine, free-flowing, off-white to creamy powder with a particle size suited to the blend.",
        },
        {
          title: "Microbiological requirements",
          text: "The limits the meat customer applies, and whether a treated or reduced-microbial ingredient is required, stated as the buyer’s specification.",
        },
        {
          title: "Documents",
          text: "Specification sheets, analysis reports or other documents the meat customer requires for each lot, listed before ordering.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the seasoning supplier has been asked by a meat customer to tighten its ingredient controls:",
      points: [
        "Microbiological requirements exist in the customer’s specification but have not been passed on to the spice supplier.",
        "Ground pepper arrives in a grind that suits table pepper but not the coarse rub texture required.",
        "Garlic powder has caked in storage and does not flow through the blending equipment.",
      ],
    },
    approach: {
      intro: "A step-by-step way to align spice sourcing with meat-industry requirements:",
      steps: [
        {
          title: "Cascade the customer’s spec",
          text: "Pass the meat customer’s microbiological and documentation requirements on to the spice supplier in writing.",
        },
        {
          title: "Decide whole or ground",
          text: "Choose whole pepper for in-house cracking or ground pepper in an agreed grind, depending on equipment and freshness needs.",
        },
        {
          title: "Confirm what can be supplied",
          text: "Ask the supplier which parameters, treatments and documents are available, rather than assuming them.",
        },
        {
          title: "Trial in the product",
          text: "Make test batches of the rub or sausage seasoning from samples and check flavour, texture and flow.",
        },
        {
          title: "Plan moisture-safe packing",
          text: "Agree sealed packing for garlic powder and ground pepper, and store them cool and dry.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of aligning spice specifications with meat-customer requirements. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Ingredient specifications that reflect the meat customer’s real requirements.",
        "Grinds that match each product, from fine sausage seasoning to coarse rubs.",
        "Garlic powder that stays free-flowing in storage and in the blender.",
        "Documents available for each lot when the meat customer asks for them.",
      ],
    },
    considerations: [
      {
        title: "Microbiology is buyer-specified",
        text: "Limits and any treatment must be agreed per order; do not assume a standard spice meets meat-industry requirements.",
      },
      {
        title: "Grinding and aroma",
        text: "Pepper ground close to use keeps more aroma; weigh this against the convenience of buying ground pepper.",
      },
      {
        title: "Caking risk",
        text: "Garlic powder absorbs moisture from the air, so keep it sealed and away from humid areas.",
      },
    ],
    takeaways: [
      "Meat customers’ microbiological requirements should flow through to every spice specification.",
      "Grind is a product decision: fine for sausages, coarse or cracked for rubs.",
      "Free-flowing garlic powder depends on moisture-safe packing and storage.",
    ],
    insights: [
      "black-pepper-powder-in-seasonings-meat-products-and-ready-meals",
      "black-pepper-for-grinding-seasoning-blends-and-oleoresin",
      "stopping-garlic-powder-from-caking-in-storage-and-transit",
    ],
  },
  {
    slug: "fennel-seeds-for-teas-and-baking",
    status: "illustrative",
    categories: ["spices"],
    title: "Fennel Seeds for Herbal Teas and Baking",
    subtitle:
      "How a tea blender or bakery might specify fennel seeds so their sweet, anise-like aroma and green colour carry through into the finished product.",
    summary:
      "A hypothetical tea blender and bakery define fennel seed colour, sweetness, aroma and storage, so seeds keep their fresh character in infusions and baked goods.",
    industry: "Teas & Baking",
    topic: "Colour and aroma retention in fennel seed",
    products: ["fennel-seeds"],
    keywords: ["fennel", "saunf", "herbal tea", "infusion", "baking", "seeded bread", "anise"],
    intro: [
      "Fennel seeds (Foeniculum vulgare) are slender, ridged and pale green, with a sweet aroma reminiscent of anise. In herbal tea blends the seed is visible and its aroma is the product; in breads, biscuits and crackers it adds a sweet note and a visible seed. Both uses depend on the seed keeping its colour and fragrance until it is used.",
      "This is an illustrative scenario. It imagines a tea blender and bakery ingredient buyer and describes no real company, product, shipment or result.",
    ],
    overview: {
      application: "Herbal tea blends, seeded breads and biscuits",
      focus: "Green colour, sweetness and aroma retention through storage",
    },
    requirements: {
      intro: "For tea and bakery use, the buyer typically specifies:",
      items: [
        {
          title: "Colour",
          text: "A pale-green seed rather than a dull brown one, agreed against a reference sample.",
        },
        {
          title: "Sweetness and aroma",
          text: "A sweet, fresh, anise-like aroma, checked by crushing or infusing sample seeds.",
        },
        {
          title: "Seed size and cleanliness",
          text: "Even, whole seeds free from dust, stems and other seeds, as they are visible in loose tea and on bread crusts.",
        },
        {
          title: "Packing",
          text: "Airtight packing that keeps light and air away from the seed.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the buyer is seeing quality slip between delivery and use:",
      points: [
        "Seeds that arrive green turn duller after weeks on an open shelf.",
        "Tea blends made late in a delivery cycle smell noticeably weaker.",
        "Lots differ in sweetness, which shows in a single-ingredient fennel tea.",
      ],
    },
    approach: {
      intro: "A freshness-focused approach to buying fennel:",
      steps: [
        {
          title: "Set colour and aroma standards",
          text: "Agree a reference sample for colour and an infusion test for aroma and sweetness.",
        },
        {
          title: "Specify protective packing",
          text: "Ask for airtight, lined or opaque packing that limits exposure to light and air.",
        },
        {
          title: "Match deliveries to use",
          text: "Plan delivery sizes so that each lot is used while its aroma is still fresh.",
        },
        {
          title: "Store cool and dark",
          text: "Keep opened and unopened packs in a cool, dry, dark store away from strong odours.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of a freshness-focused fennel brief. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Fennel that keeps more of its green colour until use.",
        "Tea blends with a more consistent aroma across a delivery cycle.",
        "Lots approved on sweetness and aroma, not just appearance.",
      ],
    },
    considerations: [
      {
        title: "Fennel is not anise",
        text: "Fennel and anise are different plants; name fennel specifically in specifications and on labels.",
      },
      {
        title: "Tea labelling",
        text: "Any claims made for herbal tea blends depend on the destination market’s rules.",
      },
      {
        title: "Grade and use",
        text: "The greenest grades suit tea and visible toppings; seeds baked into dough may not need the top grade.",
      },
    ],
    takeaways: [
      "Fennel’s colour and aroma fade with light and air, so packing and storage are quality decisions.",
      "An infusion test is a practical way to judge fennel for tea.",
      "Delivery size should follow how quickly the seed is used.",
    ],
    insights: [
      "keeping-fennel-seeds-green-and-fragrant-in-storage",
      "fennel-seeds-quality-green-colour-size-and-sweetness",
      "fennel-seeds-as-mouth-freshener-in-teas-and-baking",
    ],
  },
  {
    slug: "fenugreek-seeds-for-curry-powders-and-seasonings",
    status: "illustrative",
    categories: ["spices"],
    title: "Fenugreek Seeds for Curry Powders and Seasonings",
    subtitle:
      "How a seasoning manufacturer might specify whole fenugreek seeds for roasting and grinding into curry powders, where a little goes a long way.",
    summary:
      "A hypothetical seasoning maker specifies fenugreek seed colour, cleanliness and dryness for in-house roasting and grinding, and plans storage against moisture and pests.",
    industry: "Seasoning Manufacturing",
    topic: "Fenugreek for in-house roasting and grinding",
    products: ["fenugreek-seeds"],
    keywords: ["fenugreek", "methi", "curry powder", "seasoning", "roasting", "grinding", "storage"],
    intro: [
      "Fenugreek (Trigonella foenum-graecum), known in India as methi, is used in small amounts in curry powders and seasonings, yet it has a strong influence on the result. Raw seeds are bitter; roasting brings out a warm, nutty, maple-like note. Because the seed is used sparingly, its quality and the way it is roasted can tip a blend towards pleasant depth or harsh bitterness.",
      "This scenario is hypothetical and illustrative. It follows an imagined seasoning manufacturer and does not describe any real company, recipe, order or result.",
    ],
    overview: {
      application: "Curry powders, sambar-style blends and savoury seasonings",
      focus: "Seed quality for in-house roasting and grinding, and safe storage",
    },
    requirements: {
      intro: "For curry powder production, the buyer typically sets out:",
      items: [
        {
          title: "Colour",
          text: "Golden-yellow to amber seeds of an even shade, as discoloured seed can roast unevenly.",
        },
        {
          title: "Cleanliness",
          text: "Seeds cleaned of dust, chaff and stones, since anything left in the seed ends up in the ground powder.",
        },
        {
          title: "Seed condition",
          text: "Hard, whole, angular seeds that are sound and dry, with purity and moisture confirmed with each quotation.",
        },
        {
          title: "Form",
          text: "Whole seed for in-house roasting and grinding, which lets the manufacturer control roast depth.",
        },
        {
          title: "Packing for storage",
          text: "Lined or airtight packing suited to holding stock between grinding runs.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the manufacturer has noticed:",
      points: [
        "Curry powder batches that taste more bitter when a new fenugreek lot is used.",
        "Grit in some lots that only shows up after grinding.",
        "Signs of insects in bags stored through a warm, humid period.",
      ],
    },
    approach: {
      intro: "A process-linked way to buy and handle fenugreek:",
      steps: [
        {
          title: "Trial-roast every sample",
          text: "Roast and grind samples under the plant’s normal conditions and taste them in the curry powder before approval.",
        },
        {
          title: "Agree cleaning in writing",
          text: "Set the cleaning standard and foreign-matter expectations with the supplier for each order.",
        },
        {
          title: "Protect against moisture and pests",
          text: "Store bags off the floor in a cool, dry store, away from strong odours, and rotate stock first in, first out.",
        },
        {
          title: "Inspect stored stock",
          text: "Check bags regularly for damp, clumping or insect activity, especially in warm months.",
        },
      ],
    },
    outcome: {
      intro: "Expected benefits of a fenugreek specification linked to roasting. These are typical results of good preparation, not measured outcomes:",
      points: [
        "Less variation in bitterness between curry powder batches.",
        "Fewer foreign particles reaching the grinder.",
        "Lower risk of pest problems in stored seed.",
      ],
    },
    considerations: [
      {
        title: "Small dose, big effect",
        text: "Because fenugreek is used sparingly, even small differences between lots can change the blend; keep reference samples.",
      },
      {
        title: "Roasting control",
        text: "Roast depth changes bitterness and aroma, so record roasting conditions alongside seed lot numbers.",
      },
      {
        title: "Ground fenugreek",
        text: "Ground fenugreek can be discussed separately, but whole seed gives the manufacturer control over roasting.",
      },
    ],
    takeaways: [
      "Fenugreek’s bitterness depends on both the seed and the roast, so test samples the way they will be used.",
      "Cleanliness matters more once seed is ground, as grit cannot be removed from powder.",
      "Dry, cool, pest-aware storage protects fenugreek between grinding runs.",
    ],
    insights: [
      "fenugreek-seeds-in-curry-powders-pickles-and-seasonings",
      "storing-fenugreek-seeds-moisture-pests-and-aroma",
      "fenugreek-seeds-quality-colour-cleanliness-and-seed-condition",
    ],
  },
];
