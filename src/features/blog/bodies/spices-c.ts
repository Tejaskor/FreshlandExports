import type { ArticleBody } from "@/features/products/blog";

/**
 * Full text for the spices-c articles in features/products/blog.ts, by product
 * slug, in the same order as that product's articles.
 */
export const spicesCBodies: Record<string, readonly [ArticleBody, ArticleBody, ArticleBody]> = {
  "fenugreek-seeds": [
    // Fenugreek Seeds Quality: Colour, Cleanliness and Seed Condition
    [
      {
        heading: "What good fenugreek looks like",
        text: "Whole fenugreek seeds are small, hard and angular, each with a deep groove running across one side. A good lot has an even golden yellow to light amber colour, with seeds of fairly uniform size. When you pour a sample onto a white tray, it should look bright and clean rather than dusty, and the seeds should feel dry and rattle freely instead of clinging together in clumps.",
      },
      {
        heading: "Colour and what it signals",
        text: "Colour is the quickest guide to how a lot has been grown, dried and stored. Dull, dark or patchy seeds can point to rain at harvest, uneven drying or old stock that has spent too long in a warm store. Some natural variation between crops is normal, so agree a reference sample with your supplier and judge each shipment against it, in daylight, side by side.",
      },
      {
        heading: "Cleanliness and foreign matter",
        text: "Fenugreek is threshed from dried pods, so foreign matter can find its way into a lot. Cleaning removes most of it, but the standard you need depends on your use: a grinder making [curry powders and seasonings with fenugreek](/blog/fenugreek-seeds-in-curry-powders-pickles-and-seasonings) may accept a different level from a retail packer. State the limits for foreign matter and broken seeds on the specification sheet and confirm them per order. Look out for:",
        list: {
          items: ["Chaff and broken pod pieces", "Dust", "Small stones", "Weed seeds"],
        },
      },
      {
        heading: "Sound, dry seeds",
        text: "Break a few seeds open. They should be hard and dry, with no soft, shrivelled or insect-damaged pieces, and no musty smell. A light, warm aroma is normal; a sour or mouldy note is not. Ask for the moisture limit to be stated on the specification sheet, and inspect bags on arrival for webbing, clumping or damp patches that suggest a problem in storage or transit. Our guide to [storing fenugreek seeds against moisture, pests and loss of aroma](/blog/storing-fenugreek-seeds-moisture-pests-and-aroma) covers how to keep the seed in this condition.",
      },
      {
        heading: "Agree the paperwork early",
        text: "Before a first order, request a sample, a specification sheet and details of the tests your destination market expects, such as pesticide residues or microbiology. Agree which documents travel with each lot and how results will be reported. Settling these points at the start avoids delays at the port and gives both sides a clear basis for checking every shipment against the agreed standard. Freshland Exports supplies fenugreek seeds with a minimum order quantity of 100 kg to 500 kg. When you [request a quotation](/contact), share:",
        list: {
          items: [
            "How the seed will be used, such as grinding, pickles or retail packing",
            "Your limits for foreign matter and broken seeds",
            "Your moisture limit",
            "The tests your destination market expects",
            "The documents you need with each lot",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Good fenugreek is even in colour, clean, hard and dry, with a light, warm aroma and no musty or sour note. Judge each lot against an agreed reference sample, and put the limits for foreign matter, broken seeds and moisture in writing. With those terms settled, every shipment can be checked on arrival against the same standard.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about fenugreek seed quality.",
        faq: [
          {
            question: "What colour should good fenugreek seeds be?",
            answer: "An even golden yellow to light amber, with seeds of fairly uniform size. Some natural variation between crops is normal, so judge each lot against an agreed reference sample.",
          },
          {
            question: "What do dull or dark fenugreek seeds indicate?",
            answer: "They can point to rain at harvest, uneven drying or old stock that has spent too long in a warm store.",
          },
          {
            question: "What foreign matter is found in fenugreek?",
            answer: "Because the seed is threshed from dried pods, lots can carry chaff, broken pod pieces, dust, small stones and weed seeds. Cleaning removes most of this.",
          },
          {
            question: "How can I tell if fenugreek seeds are sound?",
            answer: "Break a few open. They should be hard and dry, with no soft, shrivelled or insect-damaged pieces, and a light, warm aroma rather than a sour or mouldy note.",
          },
          {
            question: "Does the cleanliness standard depend on how the seed is used?",
            answer: "Yes. A grinder making curry powder may accept a different level of foreign matter from a retail packer, so state your limits on the specification sheet.",
          },
        ],
      },
    ],
    // Fenugreek Seeds in Curry Powders, Pickles and Seasonings
    [
      {
        heading: "A little goes a long way",
        text: "Fenugreek is used with a light hand. Raw seeds are distinctly bitter, but brief roasting or frying in oil softens that bitterness and brings out a warm, nutty, slightly maple-like aroma. That change is why the seed appears in so many recipes in small amounts: it rounds out a blend and adds depth without dominating, and food businesses value it as a supporting flavour rather than a lead.",
      },
      {
        heading: "Curry powders and masalas",
        text: "Ground fenugreek is a familiar part of many curry powders and South Indian spice mixes such as sambar powder. Blend manufacturers usually buy whole seeds and roast and grind them in-house, so they can control the depth of roast and keep the flavour fresh. Whole seed also allows the buyer to check [colour, cleanliness and seed condition](/blog/fenugreek-seeds-quality-colour-cleanliness-and-seed-condition) before the seed disappears into a finished powder. Our [illustrative case study on fenugreek seeds for curry powders and seasonings](/case-studies/fenugreek-seeds-for-curry-powders-and-seasonings) looks at this use from a blender's side.",
      },
      {
        heading: "Pickles and preserves",
        text: "Fenugreek is a classic ingredient in Indian pickles, especially mango and lime pickles, where its bitterness balances the sourness of the fruit and the heat of chilli. Pickle makers use the seeds whole, lightly crushed or ground, often roasted first. For this use, buyers tend to focus on clean, sound seeds with good colour, since the seeds stay visible in the jar. Our [illustrative case study on whole spices for pickle manufacturing](/case-studies/whole-spices-for-pickle-manufacturing) covers sourcing for this kind of buyer.",
      },
      {
        heading: "Tempering and seasonings",
        text: "In home and restaurant kitchens, fenugreek seeds are fried briefly in hot oil at the start of dals, vegetable curries and sambar, and form one of the five seeds in the Bengali blend panch phoron. Seasoning manufacturers also use fenugreek where its warm note supports other spices such as cumin, coriander and turmeric, including in:",
        list: {
          items: ["Savoury rubs", "Snack seasonings", "Soup mixes"],
        },
      },
      {
        heading: "Choosing the right form",
        text: "Whatever the end use, share how the seed will be processed when you [request a quotation](/contact), so that cleaning, packaging and any grinding requirements can be agreed on the specification sheet from the outset. Buyers typically choose:",
        list: {
          items: [
            "Industrial buyers: whole seeds for flexibility and freshness, grinding to their own particle size when needed",
            "Food service and retail packers: whole seeds in smaller packs",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Fenugreek earns its place as a supporting flavour: roasted or fried, its bitterness turns warm and nutty, rounding out curry powders, pickles and seasonings. Most buyers take whole seed so they can check it, roast it and grind it themselves. Tell your supplier how the seed will be used so the specification matches the job.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about using fenugreek seeds.",
        faq: [
          {
            question: "Why is fenugreek roasted before use?",
            answer: "Raw seeds are distinctly bitter. Brief roasting or frying in oil softens the bitterness and brings out a warm, nutty, slightly maple-like aroma.",
          },
          {
            question: "Why do curry powder makers buy whole fenugreek rather than ground?",
            answer: "Roasting and grinding in-house lets them control the depth of roast and keep the flavour fresh. Whole seed also lets them check colour and cleanliness first.",
          },
          {
            question: "What does fenugreek do in a pickle?",
            answer: "In mango and lime pickles, its bitterness balances the sourness of the fruit and the heat of chilli.",
          },
          {
            question: "Why does seed appearance matter for pickle makers?",
            answer: "The seeds stay visible in the jar, so pickle makers tend to focus on clean, sound seeds with good colour.",
          },
          {
            question: "Which seasonings use fenugreek?",
            answer: "It is one of the five seeds in panch phoron, and seasoning manufacturers use it in savoury rubs, snack seasonings and soup mixes alongside spices such as cumin, coriander and turmeric.",
          },
        ],
      },
    ],
    // Storing Fenugreek Seeds: Moisture, Pests and Aroma
    [
      {
        heading: "Why storage matters",
        text: "Fenugreek seeds are hard and keep well compared with many spices, but they are not immune to poor storage. Damp, warm conditions dull their colour, encourage mould and attract storage insects, while long exposure to air and light slowly flattens their aroma. Good storage keeps the seed looking and tasting the way it did when it was cleaned and packed.",
      },
      {
        heading: "Keep it dry",
        text: "Moisture is the main risk. To keep it out:",
        list: {
          items: [
            "Store bags in a cool, dry, well-ventilated area",
            "Raise bags on pallets, away from walls and floors where condensation collects",
            "Use lined bags or inner liners in humid climates",
            "After opening a bulk bag, reseal it or move the remaining stock into a closed container rather than leaving it open in a warm store",
          ],
        },
      },
      {
        heading: "Watch for pests",
        text: "Like other whole seeds, fenugreek can attract storage insects if it is kept warm and undisturbed for long periods. Clean stores, regular inspection and a first-in, first-out rotation keep the risk low. Keep spices apart from grain and flour stocks that may carry their own infestations, and check incoming bags for:",
        list: {
          items: ["Webbing", "Holes", "Fine dust around seams"],
        },
      },
      {
        heading: "Protect the aroma",
        text: "Fenugreek has a strong character of its own and can also pick up odours from its surroundings. Store it away from strongly scented goods, chemicals and fuels. Whole seeds hold their aroma much longer than ground fenugreek, which is one reason many buyers keep stock whole and grind only what they need for each production run. The same principles apply to other aromatic seeds, as our guide to [keeping fennel seeds green and fragrant in storage](/blog/keeping-fennel-seeds-green-and-fragrant-in-storage) shows.",
      },
      {
        heading: "In transit",
        text: "Sea freight brings changes in temperature and humidity that can cause condensation inside a container. Dry packaging, sound pallets and, where agreed, moisture absorbers help protect the cargo. Agree packaging and loading arrangements with your supplier before shipment, and inspect the goods promptly on arrival, checking [colour, cleanliness and seed condition](/blog/fenugreek-seeds-quality-colour-cleanliness-and-seed-condition), so that any issue can be raised while the evidence is still fresh.",
      },
      {
        heading: "Conclusion",
        text: "Fenugreek keeps well if it stays dry, is rotated first in, first out and is kept away from insects and strong odours. Holding stock whole and grinding only what each run needs protects the aroma for longer. To agree packaging and loading arrangements for your route, [request a quotation](/contact) with your destination and quantities.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about storing fenugreek seeds.",
        faq: [
          {
            question: "What is the main storage risk for fenugreek seeds?",
            answer: "Moisture. Damp, warm conditions dull the colour, encourage mould and attract storage insects.",
          },
          {
            question: "How should an opened bulk bag of fenugreek be stored?",
            answer: "Reseal it or move the remaining stock into a closed container rather than leaving it open in a warm store.",
          },
          {
            question: "What signs of insects should I look for on fenugreek bags?",
            answer: "Webbing, holes or fine dust around the seams of incoming bags.",
          },
          {
            question: "Why keep fenugreek away from other goods?",
            answer: "It can pick up odours from strongly scented goods, chemicals and fuels, and grain and flour stocks may carry their own infestations.",
          },
          {
            question: "Does whole fenugreek keep its aroma longer than ground?",
            answer: "Yes. Whole seeds hold their aroma much longer, which is why many buyers keep stock whole and grind only what each production run needs.",
          },
        ],
      },
    ],
  ],
  "psyllium-seed": [
    // Buying Psyllium Seed for Husk Processing: What to Check
    [
      {
        heading: "Why buyers want whole seed",
        text: "Most whole psyllium seed (Plantago ovata, known in India as isabgol) is bought as raw material for husk processing. The thin, pale husk around each seed is the valuable part, and processors remove it by milling and sifting to produce psyllium husk and husk powder, as our guide to [how whole psyllium seed is processed into husk](/blog/from-psyllium-seed-to-husk-how-whole-seed-is-processed) explains. A good lot of whole seed therefore needs to suit the processor's equipment and give a clean, consistent husk.",
      },
      {
        heading: "Appearance and colour",
        text: "Psyllium seeds are small, glossy and boat-shaped, ranging from pinkish grey to brown. A good lot looks even in colour and size, and pours freely. Unusually dark, dull or mixed seeds can point to weather damage at harvest, poor drying or older stock. Compare each lot against a reference sample agreed with your supplier, rather than judging a single sample on its own.",
      },
      {
        heading: "Cleanliness and foreign matter",
        text: "Because psyllium is a small seed harvested from low-growing plants, lots can carry foreign matter. Processors usually clean seed again before dehusking, but the cleaner the incoming lot, the better the yield and the less waste to handle. Set limits for foreign matter and damaged seeds on the specification sheet and confirm them with each order; our [illustrative case study on cleaning standards for whole seed spices](/case-studies/cleaning-standards-for-whole-seed-spices) looks at agreeing such limits. Typical foreign matter includes:",
        list: {
          items: ["Dust and sand", "Small stones", "Plant debris", "Weed seeds"],
        },
      },
      {
        heading: "Keeping it dry",
        text: "The husk absorbs water readily and swells into a gel, so moisture is a particular concern for psyllium. Damp seed can clump, discolour and become harder to process. Ask for the moisture limit to be stated on the specification sheet, check bags on arrival for damp patches or caking, and make sure your own store is dry and well ventilated.",
      },
      {
        heading: "Samples and specifications",
        text: "Clear terms at the start make it straightforward to check every lot against the same standard. Freshland Exports supplies whole psyllium seed with a minimum order quantity of 100 kg to 500 kg. When you [request a quotation](/contact), share your limits for foreign matter, damaged seeds and moisture, the documents you need and your destination. Before a first order:",
        list: {
          items: [
            "Request a representative sample and a specification sheet",
            "Run a trial through your own line if you can",
            "Agree how purity, moisture and other parameters will be tested and reported",
            "Agree which documents travel with each shipment",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Whole psyllium seed for husk processing should be even in colour and size, clean and dry, because each of these affects yield and how easily the husk separates. Agree a reference sample and written limits, and trial the seed on your own line before committing to volume. Our [illustrative case study on sourcing psyllium seed for husk processing](/case-studies/sourcing-psyllium-seed-for-husk-processing) shows these checks from a processor's side.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about buying psyllium seed.",
        faq: [
          {
            question: "Why do processors buy whole psyllium seed?",
            answer: "The thin, pale husk around each seed is the valuable part. Processors remove it by milling and sifting to produce psyllium husk and husk powder.",
          },
          {
            question: "What should a good lot of psyllium seed look like?",
            answer: "Small, glossy, boat-shaped seeds from pinkish grey to brown, even in colour and size, that pour freely.",
          },
          {
            question: "Why does cleanliness matter if processors clean the seed again?",
            answer: "The cleaner the incoming lot, the better the yield and the less waste the processor has to handle.",
          },
          {
            question: "Why is moisture a particular concern for psyllium seed?",
            answer: "The husk absorbs water readily and swells into a gel, so damp seed can clump, discolour and become harder to process.",
          },
          {
            question: "Should I trial psyllium seed before a full order?",
            answer: "Yes. Request a representative sample and a specification sheet, and run a trial through your own line if you can.",
          },
        ],
      },
    ],
    // From Psyllium Seed to Husk: How Whole Seed Is Processed
    [
      {
        heading: "Seed and husk",
        text: "Each psyllium seed is wrapped in a thin, translucent coat, the husk, which forms a clear gel when it meets water. That gel-forming property is what makes the husk useful as a food and fibre ingredient. Processing is about separating this husk cleanly from the inner seed, then grading it, without letting moisture or contamination spoil the material along the way. In outline, the sequence runs:",
        list: {
          ordered: true,
          items: [
            "Clean the incoming whole seed",
            "Mill the cleaned seed gently to loosen the husk",
            "Sift and air-separate the husk from the inner seed and fine particles",
            "Grade the husk by purity and particle size",
            "Mill some husk further into husk powder",
            "Pack the finished material promptly in moisture-resistant packaging",
          ],
        },
      },
      {
        heading: "Cleaning the incoming seed",
        text: "Processing begins with cleaning. Whole seed passes through sieves, aspirators and similar equipment to remove dust, sand, stones, plant debris and weed seeds. This step protects the milling equipment and improves the purity of the final husk. Well-cleaned incoming seed makes this stage faster and reduces waste, which is why processors pay close attention to the condition of the seed they buy; our guide to [buying psyllium seed for husk processing](/blog/buying-psyllium-seed-for-husk-processing-what-to-check) sets out what to check.",
      },
      {
        heading: "Dehusking and sifting",
        text: "Cleaned seed is milled gently so that the husk is loosened and rubbed away from the seed rather than crushed into it. Repeated sifting and air separation then divide the light husk from the heavier inner seed and fine particles. Processors adjust their equipment and number of passes to reach the purity their customers require, which is agreed on the husk specification.",
      },
      {
        heading: "Grading and milling",
        text: "Separated husk is graded by purity and particle size. Some is sold as whole husk; some is milled further into husk powder for food manufacturers and ingredient blenders who need a finer, more uniform material. The remaining inner seed is a by-product of the process and is generally sold separately, often for animal feed, according to local practice and regulations.",
      },
      {
        heading: "Handling the finished product",
        text: "Because husk and powder absorb moisture readily, finished material is packed promptly in moisture-resistant packaging and stored in dry conditions. Whole seed needs the same care on its way to the processor, as our guide to [exporting psyllium seed, including packing and labelling](/blog/exporting-psyllium-seed-documentation-packing-and-labelling) explains. Food manufacturers then use the husk in products such as breads, cereals and drink mixes. How the husk may be described on a label, including any claims, depends on the rules of each destination market and is the responsibility of the brand owner.",
      },
      {
        heading: "Conclusion",
        text: "Turning psyllium seed into husk is a sequence of cleaning, gentle milling, sifting and grading, with moisture kept out at every step. The cleaner the incoming seed, the faster and less wasteful the process. Our [illustrative case study on sourcing psyllium seed for husk processing](/case-studies/sourcing-psyllium-seed-for-husk-processing) looks at buying seed for this work; to discuss seed for your own line, [request a quotation](/contact).",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about psyllium husk processing.",
        faq: [
          {
            question: "What part of the psyllium seed becomes husk?",
            answer: "The thin, translucent coat around each seed. It forms a clear gel when it meets water, which is what makes it useful as a food and fibre ingredient.",
          },
          {
            question: "Why is psyllium seed cleaned before dehusking?",
            answer: "Cleaning removes dust, sand, stones, plant debris and weed seeds, which protects the milling equipment and improves the purity of the final husk.",
          },
          {
            question: "How is the husk separated from the seed?",
            answer: "The seed is milled gently so the husk is rubbed away rather than crushed, then repeated sifting and air separation divide the light husk from the heavier inner seed.",
          },
          {
            question: "What is the difference between psyllium husk and husk powder?",
            answer: "Husk powder is husk milled further into a finer, more uniform material for food manufacturers and ingredient blenders.",
          },
          {
            question: "Can psyllium husk carry health claims on its label?",
            answer: "That depends on the rules of each destination market, and how the husk is described on a label is the responsibility of the brand owner.",
          },
        ],
      },
    ],
    // Exporting Psyllium Seed: Documentation, Packing and Labelling
    [
      {
        heading: "Know your buyer's use",
        text: "Psyllium seed is shipped to husk processors, ingredient makers, food manufacturers and distributors, and each has different priorities. A processor will focus on cleanliness and suitability for dehusking (see [how whole psyllium seed is processed into husk](/blog/from-psyllium-seed-to-husk-how-whole-seed-is-processed)); a distributor may care more about packing and presentation. Clarify how the seed will be used before quoting, so that cleaning, packaging and documentation can be matched to the buyer from the start.",
      },
      {
        heading: "Specifications and testing",
        text: "Every export lot should be covered by a specification sheet that both sides have agreed, listing the parameters that matter, such as purity, foreign matter and moisture; our guide to [what to check when buying psyllium seed](/blog/buying-psyllium-seed-for-husk-processing-what-to-check) covers these in detail. Importing countries may also expect tests for pesticide residues, contaminants or microbiology. So that clearance is not held up at the destination, agree in advance:",
        list: {
          items: [
            "Which tests are required",
            "Who carries them out",
            "How results will be shared",
          ],
        },
      },
      {
        heading: "Packing for the journey",
        text: "Moisture is the key risk in transit. Psyllium seed is usually packed in strong bags with suitable liners, palletised where required and loaded into clean, dry containers. Long sea voyages bring temperature swings that can cause condensation, so agree packaging, any moisture absorbers and loading arrangements with your supplier before shipment rather than after a problem arises. Our [illustrative case study on exporting psyllium seed with the right documents and packing](/case-studies/exporting-psyllium-seed-documents-and-packing) brings these points together.",
      },
      {
        heading: "Labelling and claims",
        text: "Bag markings typically show the product name, lot reference, weights and the buyer's own requirements. Labelling for retail or finished products is a separate matter: what may be said about psyllium, including any health or nutrition claims, depends on the rules of the destination market. Importers and brand owners should confirm these requirements with their local regulator before products are sold.",
      },
      {
        heading: "Building a reliable supply",
        text: "Psyllium is a seasonal crop, so availability and pricing can move with each harvest. Buyers who plan volumes early, agree specifications clearly and keep in regular contact with their supplier are better placed to secure consistent lots. Freshland Exports supplies whole psyllium seed with a minimum order quantity of 100 kg to 500 kg. When you [request a quotation](/contact), share your expected quantities, how the seed will be used, packaging, required tests and destination, and our team will confirm availability for the coming season.",
      },
      {
        heading: "Conclusion",
        text: "A smooth psyllium export rests on knowing the buyer's use, an agreed specification with testing settled in advance, and packing that keeps moisture out over a long voyage. Retail labelling and any claims follow the destination market's rules, so importers should confirm them locally. Planning volumes early around each harvest makes consistent supply easier to secure.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about exporting psyllium seed.",
        faq: [
          {
            question: "What should a psyllium seed specification sheet cover?",
            answer: "The parameters that matter for the lot, such as purity, foreign matter and moisture, agreed by both sides.",
          },
          {
            question: "Which tests might an importing country expect for psyllium seed?",
            answer: "Importing countries may expect tests for pesticide residues, contaminants or microbiology. Agree in advance which tests are required, who carries them out and how results are shared.",
          },
          {
            question: "How is psyllium seed packed for export?",
            answer: "Usually in strong bags with suitable liners, palletised where required and loaded into clean, dry containers, with any moisture absorbers agreed before shipment.",
          },
          {
            question: "What health claims can be made about psyllium?",
            answer: "That depends on the rules of the destination market. Importers and brand owners should confirm requirements with their local regulator before products are sold.",
          },
          {
            question: "Why does psyllium availability change through the year?",
            answer: "Psyllium is a seasonal crop, so availability and pricing can move with each harvest. Planning volumes early helps secure consistent lots.",
          },
        ],
      },
    ],
  ],
};
