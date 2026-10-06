import type { ArticleBody } from "@/features/products/blog";

/**
 * Full text for the spices-a articles in features/products/blog.ts, by product
 * slug, in the same order as that product's articles.
 */
export const spicesABodies: Record<string, readonly [ArticleBody, ArticleBody, ArticleBody]> = {
  "red-chilli": [
    // Dried Red Chilli Export Guide: Heat, Colour and Stem
    [
      {
        heading: "Decide on heat first",
        text: "Pungency is the first thing to settle, because it shapes everything else in the order. A sauce maker chasing fire wants a very different chilli from a paprika-style blend that is mostly about colour. Tell your supplier the heat level your product needs, ask how it is measured, and agree the method and an acceptable range on the specification sheet so that later lots can be compared fairly.",
      },
      {
        heading: "Look closely at colour",
        text: "A good dried chilli has a deep, even red with a natural sheen. Pale, patchy, brownish or white-spotted pods suggest over-drying, sun bleaching, age or mould. If colour matters most to you, as it does for ground chilli and seasoning makers, ask how colour value is assessed and compare samples side by side in daylight rather than under warehouse lighting.",
      },
      {
        heading: "Stem or stemless",
        text: "Chillies are traded with the stalk on or removed. Stemless pods suit grinding and save buyers a processing step, while stem-on pods are often preferred for whole-spice retail and some traditional uses. State which you need, and if you buy stemless, agree how much stray stem is acceptable, since loose stalks add weight without adding flavour or colour.",
      },
      {
        heading: "Pod length and condition",
        text: "Pod length and shape vary by variety and season, so agree a range rather than a single figure. Check a sample for broken pods, loose seeds, discoloured or spotted pods and foreign matter. A small share of broken pieces is normal in a dried crop; what you want is a lot that matches the sample you approved.",
      },
      {
        heading: "Paperwork before the first order",
        text: "Ask for a sample, the specification sheet and the analysis your destination market expects, which may cover moisture, aflatoxin, pesticide residues or other parameters. Agree packing, labelling and how each lot will be checked against the specification before shipment, so that both sides are working from the same document.",
      },
    ],
    // Teja, Byadgi and Guntur: Understanding Indian Chilli Varieties
    [
      {
        heading: "Why variety matters",
        text: "Indian chillies are sold under trade names that signal a particular balance of heat, colour and pod shape. Buyers use these names as shorthand, but they are a starting point rather than a guarantee. Within any named type, heat and colour shift with season, growing conditions and how the crop was dried, so always judge the actual lot against a sample.",
      },
      {
        heading: "Teja for heat",
        text: "Teja is generally known in the trade as a hot chilli with a bright red colour and a fairly small, slender pod. It is a common choice where pungency is the priority, such as hot sauces, chilli flakes and spicy seasoning blends. If your recipe depends on a strong kick, this is often the name buyers ask for first.",
      },
      {
        heading: "Byadgi for colour",
        text: "Byadgi is usually prized more for colour than for fire. Its wrinkled pods give a deep red with comparatively mild heat, which makes it popular where a rich colour is wanted without overwhelming pungency — curry powders, spice pastes and dishes that should look red but taste balanced. Colour-focused buyers often blend it with hotter types.",
      },
      {
        heading: "Guntur as a trade family",
        text: "Guntur is widely used as a broad trade name covering several chilli types rather than a single variety. These are typically all-round chillies with moderate to high heat and good colour, used across ground chilli and general seasoning. Because the name covers more than one type, specify the exact variety or characteristics you need rather than relying on the name alone.",
      },
      {
        heading: "Matching variety to product",
        text: "Start from what your finished product needs: heat, colour, or a balance of both. Many processors blend varieties to hit a consistent target year round. Share your end use with your supplier, request samples of more than one type, and agree heat and colour expectations on the specification sheet for each order.",
      },
    ],
    // Storing Dried Chillies to Protect Colour and Prevent Mould
    [
      {
        heading: "Light fades the red",
        text: "The red pigment in dried chillies breaks down with exposure to light, especially direct sunlight. Pods left in the open or near bright windows gradually turn dull and orange-brown, and that loss of colour cannot be reversed. Keep stock in opaque packaging and in a dark store, and avoid leaving bags on loading bays or in yards for longer than necessary.",
      },
      {
        heading: "Moisture invites mould",
        text: "Dried chillies take up moisture from humid air. Once they become damp they soften, lose their crispness and become vulnerable to mould, which shows as white or dark patches, often near the stem. Store bags off the floor on pallets, away from walls, and keep the store dry. Never pack pods that feel limp or leathery.",
      },
      {
        heading: "Keep it cool",
        text: "Warmth speeds the loss of both colour and aroma, so a cool store is better than a warm one. Avoid stacking chillies next to heat sources or under hot roofs. Some buyers use cold storage for longer holding; if you do, agree the conditions with your supplier and take care to avoid condensation when stock is moved back into warm air.",
      },
      {
        heading: "Pack and stack with care",
        text: "Dried pods are brittle, and heavy stacking crushes them into broken pieces and loose seed. Use packaging suited to the weight, stack within sensible limits and handle bags gently. Good packaging also keeps out insects and dust, so check that bags are intact on arrival and before they go into store.",
      },
      {
        heading: "Inspect and rotate",
        text: "Check stock regularly for musty smells, soft pods, insect activity or fading, and remove any affected bags promptly before the problem spreads. Use older stock first. How long dried chillies hold their quality depends on the lot and the storage conditions, so agree expectations with your supplier for your route and market.",
      },
    ],
  ],
  "black-pepper": [
    // Black Pepper Quality: Bulk Density, Size and Aroma
    [
      {
        heading: "Bulk density tells a story",
        text: "Bulk density — the weight of a fixed volume of berries — is one of the most widely used measures in the pepper trade. Well-formed, mature berries are heavier for their size, so a higher density usually means more solid pepper and fewer hollow berries. Agree the figure you need and how it will be measured on the specification sheet.",
      },
      {
        heading: "Berry size and uniformity",
        text: "Larger, even berries look better in whole-spice retail and grinders, while processors focused on flavour may accept a broader size mix. Check a sample for uniformity: a lot with many small or shrivelled berries alongside large ones suggests mixed material. State the size range your product requires and confirm it per order.",
      },
      {
        heading: "Light berries and pinheads",
        text: "Light berries are immature, hollow or poorly developed berries that float, crush easily and carry little flavour. Pinheads are very small, undeveloped berries. Both reduce value, so buyers usually set a maximum level for each. Ask how they are assessed and agree the limits before ordering, rather than discovering them at arrival.",
      },
      {
        heading: "Moisture and aroma",
        text: "Pepper that is too moist risks mould and loses its crisp, dry feel. Set a maximum moisture value and check it on the analysis for each lot. Then smell the sample: good black pepper is sharp, warm and woody, with a lively pungency when crushed. Musty, flat or earthy notes point to poor drying or old stock.",
      },
      {
        heading: "Cleanliness and paperwork",
        text: "Look for stems, dust, stones and other foreign matter, and agree an acceptable limit. Request a sample, a specification sheet and the tests your destination market expects, such as microbiology or pesticide residues. Agree packing and labelling in advance, and check each shipment against the approved sample.",
      },
    ],
    // Malabar and Tellicherry: Indian Black Pepper Grades Explained
    [
      {
        heading: "Names with history",
        text: "Malabar and Tellicherry are among the best-known names in the pepper trade. Over time they have come to describe types and grades of Indian black pepper as much as any place. Buyers use them as a quick signal of what to expect, but the full specification — size, density, moisture and cleanliness — is what defines a particular lot.",
      },
      {
        heading: "Malabar as the standard",
        text: "Malabar pepper is generally understood as a sound, well-cleaned Indian black pepper of regular size. It is a workhorse for grinding, food service and seasoning manufacture, where consistent flavour and pungency matter more than a premium appearance. Different Malabar grades are separated by attributes such as density and the level of light berries.",
      },
      {
        heading: "Tellicherry and berry size",
        text: "Tellicherry usually refers to the larger berries, sorted out by size from the wider crop. Bigger, fully developed berries are often associated with a fuller, more rounded aroma, and they look impressive in whole-pepper packs and table grinders. That is why the name is commonly used for premium retail. Ask for the size band behind any Tellicherry offer.",
      },
      {
        heading: "How size sets the grade",
        text: "Pepper is graded by passing it through sieves, so berries are separated by diameter. The larger fractions command more, and smaller ones go to grinding. Exact grade definitions can vary between traders and markets, so do not rely on a name alone. Agree the sieve size, density and other limits in writing.",
      },
      {
        heading: "Choosing the right grade",
        text: "Match the grade to the job. If the pepper will be ground, paying for large berries may add cost without adding value. If it will be sold whole, appearance matters and a bolder grade may be worth it. Request samples of more than one grade and compare them against your product before committing.",
      },
    ],
    // Black Pepper for Grinding, Seasoning Blends and Oleoresin
    [
      {
        heading: "Retail grinding and packing",
        text: "Packers selling ground pepper want steady pungency and aroma from lot to lot, so customers notice no change between packs. Berry appearance matters less once ground, but cleanliness, low moisture and colour of the ground product do. Agree particle size for your grind and keep a reference sample to compare each new lot against.",
      },
      {
        heading: "Whole pepper for grinders",
        text: "Whole pepper for table grinders and whole-spice retail is judged largely by the eye. Buyers here look for bold, even, dark berries with few light berries, stems or broken pieces. A uniform grade also grinds more evenly in consumer mills. Specify size and cleanliness tightly for this use and check the first shipment carefully.",
      },
      {
        heading: "Seasoning blends",
        text: "Seasoning manufacturers use pepper in meat rubs, snack seasonings, sauces and ready meals, often alongside salt, garlic and herbs. They typically specify a particular mesh, a consistent flavour strength and microbiological limits suited to their process. Some ask for treated pepper to meet those limits; agree the requirement and method with your supplier in advance.",
      },
      {
        heading: "Extraction and oleoresin",
        text: "Extraction buyers turn pepper into oleoresin and essential oil, so they care most about the content of pungent and aromatic compounds rather than looks. Smaller or lighter grades can suit this use if their yield is acceptable. These buyers often specify the compounds they test for and the method. Agree those on the specification sheet before ordering.",
      },
      {
        heading: "Share your process",
        text: "The quickest way to the right pepper is to tell your supplier what will happen to it: whole retail, grinding, blending or extraction. Include your target market, packing, labelling and any testing you need. Requirements vary between buyers and markets, so confirm the details per order rather than assuming one grade fits every use.",
      },
    ],
  ],
  "cumin-seeds": [
    // Cumin Seeds Export Guide: Purity, Colour and Aroma
    [
      {
        heading: "Purity is the headline",
        text: "Cumin is commonly traded on purity — the share of the lot that is clean cumin seed, with the rest being dust, stems, broken seed, other seeds and similar material. Higher purity means less waste for the buyer. Agree the purity level you need and how it will be measured, and check it against the approved sample on arrival.",
      },
      {
        heading: "Colour and seed shape",
        text: "Good cumin seeds are elongated and ridged, with an even greyish-brown to greenish-brown colour. Very dark, blackened or dull seeds may point to poor drying, age or damp storage. Compare samples in daylight and look for uniformity: a mix of plump and shrivelled seeds suggests material from different lots blended together.",
      },
      {
        heading: "Rub and smell",
        text: "Rub a few seeds between your palms and smell them. Fresh cumin has a strong, warm, earthy aroma with a slightly bitter edge. A weak smell suggests old stock, while musty or mouldy notes indicate moisture problems. For grinders and blenders, aroma strength matters as much as appearance, so judge both.",
      },
      {
        heading: "Foreign matter and look-alikes",
        text: "Check for stones, soil, straw, insect damage and other seeds mixed in. Cumin fields can carry weed seeds that look similar at a glance, so examine a sample closely. Agree maximum limits for foreign matter and admixture on the specification sheet, along with moisture.",
      },
      {
        heading: "Testing for your market",
        text: "Destination markets differ in what they test cumin for, which may include pesticide residues, microbiology and other parameters. Find out what your market requires and agree the tests with your supplier before the first order. Request a sample, the specification sheet and the analysis for each lot.",
      },
    ],
    // Machine Cleaning and Sortex: How Cumin Is Prepared for Export
    [
      {
        heading: "From field to cleaning line",
        text: "Harvested cumin arrives with dust, stalks, small stones and broken material from threshing. Before it can be offered for export it goes through a series of cleaning steps, each removing a different kind of impurity. The aim is a uniform lot that matches the agreed purity and looks consistent from bag to bag.",
      },
      {
        heading: "Sieving and air cleaning",
        text: "Vibrating sieves separate material by size, removing larger stalks and clods as well as fine dust and broken seed. Air aspiration then lifts out light material such as husk and chaff. These early steps take out the bulk of the obvious impurities and prepare the seed for finer sorting.",
      },
      {
        heading: "Removing stones and heavy matter",
        text: "Stones and soil particles can be close in size to cumin seed, so sieves alone do not remove them. Gravity separators and destoners use differences in weight and density to separate heavy material from the lighter seed. This step matters for safety and for protecting buyers' grinding equipment.",
      },
      {
        heading: "Colour sorting",
        text: "Optical colour sorters, often called Sortex in the trade, examine seeds as they fall and reject discoloured seeds and foreign particles with a puff of air. Sorting improves the visual uniformity of the lot. Buyers sometimes specify whether they want sorted material, so make your preference clear when you enquire.",
      },
      {
        heading: "Grading and packing",
        text: "After cleaning, the seed is graded to the agreed purity and packed in clean bags suited to the route. Ask your supplier which steps are applied to your lot, and agree the final purity, moisture and foreign matter limits on the specification sheet so the processing matches what you expect to receive.",
      },
    ],
    // Cumin in Spice Blends, Ground Cumin and Food Processing
    [
      {
        heading: "Curry powders and masalas",
        text: "Cumin is a backbone of curry powders, garam masala and many regional spice mixes, where its warm, earthy flavour blends with coriander, chilli and turmeric. Blenders need steady aroma from lot to lot so that the finished mix tastes the same. A reference sample helps confirm each new shipment before it goes into production.",
      },
      {
        heading: "Ground cumin",
        text: "Ground cumin sold to retail and food service must be clean before milling, since impurities cannot be removed afterwards. Grinders typically ask for high-purity seed, low moisture and a particle size suited to their packs. Agree the mesh and any microbiological requirements, and ask whether the seed has been cleaned and sorted.",
      },
      {
        heading: "Seasonings and snacks",
        text: "Seasoning makers use cumin in taco and chilli seasonings, meat rubs, snack coatings and sauces. Here it is often one ingredient among many, so consistent strength and a clean flavour matter more than seed appearance. Some processors toast or roast cumin to deepen its flavour, which may change how they specify the raw seed.",
      },
      {
        heading: "Whole seed in cooking",
        text: "Whole cumin is widely used in restaurants and home cooking, often fried in hot oil at the start of a dish or toasted and sprinkled over food. Whole-spice retail buyers look for bold, clean, evenly coloured seed with a strong aroma, since customers see and smell exactly what they buy.",
      },
      {
        heading: "Tell your supplier the end use",
        text: "Whether you sell whole seed, grind it, or blend it into seasonings, share the end use when you enquire. That helps your supplier propose the right purity, cleaning level and packing. Requirements vary by buyer and market, so confirm the details on the specification sheet for every order.",
      },
    ],
  ],
  "coriander-seeds": [
    // Coriander Seeds: Colour, Split Content and Aroma
    [
      {
        heading: "Greenish or golden",
        text: "Coriander seeds range in colour from greenish to golden to light brown, and buyers often have a firm preference. A greenish tint is often valued for whole-spice retail because it looks fresh, while golden seed is widely used for grinding. Discoloured, dark or blackish seeds can point to weather damage at harvest or poor storage.",
      },
      {
        heading: "Whole versus split",
        text: "Coriander is a round fruit made of two halves that separate easily, so some split seed is normal. Split content matters to whole-spice packers, who want round, intact seeds, and much less to grinders. Agree the maximum split content your product can accept, and check it on the sample you approve.",
      },
      {
        heading: "Aroma when crushed",
        text: "Crush a few seeds and smell them. Fresh coriander has a warm, citrusy, slightly floral aroma. A faint or flat smell suggests old stock, and musty notes point to moisture problems. Aroma strength is especially important to grinders and blenders, since it carries through to the finished product.",
      },
      {
        heading: "Purity and foreign matter",
        text: "Look for stalks, dust, stones, shrivelled seeds and other seeds in the sample. Agree purity, foreign matter and moisture limits on the specification sheet. Clean, well-sorted lots save buyers time and losses during their own processing.",
      },
      {
        heading: "Samples and testing",
        text: "Request a sample, the specification sheet and the analysis your destination market expects before the first order. Agree packing and labelling at the same time. Because colour and size vary with season, compare each new lot with the sample you originally approved.",
      },
    ],
    // Eagle, Scooter and Badami: Coriander Grades Explained
    [
      {
        heading: "Trade names, not standards",
        text: "Eagle, Scooter and Badami are names used in the Indian coriander trade to describe broad types and qualities of seed. They are useful shorthand, but definitions can differ between traders and seasons. Treat them as a starting point, and always pin down colour, size, split content and purity on the specification sheet.",
      },
      {
        heading: "Eagle",
        text: "Eagle is generally used for the better-looking seed: bolder, rounder and greener or brighter in colour, with fewer splits and discoloured seeds. It is a common choice for whole-spice retail, where appearance on the shelf matters. Expect it to sit at the higher end of the range.",
      },
      {
        heading: "Scooter",
        text: "Scooter usually describes a more mixed seed, with more variation in colour and size and a higher share of splits or discoloured seed than Eagle. It is often used where appearance matters less, such as grinding and blending, offering a practical balance between quality and cost.",
      },
      {
        heading: "Badami",
        text: "Badami typically refers to a type with a more golden to brownish colour and a slightly oval seed. It is widely used for grinding, where colour and shape matter less than aroma and cleanliness. Some buyers favour it for the flavour it gives in ground coriander and spice mixes.",
      },
      {
        heading: "Choosing a grade",
        text: "If you sell whole seed, a bolder, greener grade with low split content may be worth the premium. If you grind or blend, a more economical grade with good aroma and purity is often the sensible choice. Request samples of more than one grade and confirm the details per order.",
      },
    ],
    // Coriander Seeds in Spice Mixes, Pickling and Brewing
    [
      {
        heading: "Spice mixes and curry powders",
        text: "Coriander is often the largest single ingredient in curry powders and garam masala, providing body and a mild, citrusy warmth that balances hotter spices. Blenders need consistent aroma and clean seed, and often specify a particular grind. Ground coriander loses aroma faster than whole seed, so many processors grind close to use.",
      },
      {
        heading: "Pickling spice",
        text: "Whole coriander seeds are a familiar part of pickling spice, alongside mustard seed, peppercorns, bay and dill. Here appearance counts, since the seeds are visible in the jar. Pickle makers typically want round, intact seeds with low split content and minimal foreign matter.",
      },
      {
        heading: "Brewing",
        text: "Some brewers use coriander seed to add citrusy, spicy notes to certain beer styles, often alongside orange peel. They usually crush the seed shortly before use to keep its aroma fresh. Brewing buyers tend to care most about a clean, bright aroma and consistent quality from batch to batch.",
      },
      {
        heading: "Meat, bakery and seasonings",
        text: "Coriander appears in sausages, cured meats, seasoning blends, sauces and some breads and baked goods. Processors often toast the seeds to bring out a nuttier flavour. Requirements differ widely here, from whole seed to fine powder, so agree the form, mesh and any microbiological limits in advance.",
      },
      {
        heading: "Specifying for your use",
        text: "Whole-seed users should focus on colour, split content and appearance; grinders and brewers on aroma, purity and moisture. Tell your supplier how the coriander will be used and where it will be sold, and agree the specification, packing and labelling per order.",
      },
    ],
  ],
  "green-cardamom": [
    // Green Cardamom Grading: Pod Size, Colour and Aroma
    [
      {
        heading: "Size in millimetres",
        text: "Green cardamom is graded largely by pod size, measured in millimetres by passing pods through sieves. Larger pods generally command more, partly for their appearance and partly because they tend to be well filled. Grade bands and names vary between traders and markets, so agree the size band you need on the specification sheet.",
      },
      {
        heading: "Colour signals care",
        text: "Buyers prize a uniform, vivid green. Colour reflects how carefully the pods were picked and dried, and how they have been stored since. Pale, yellowish, brownish or patchy pods often point to over-drying, age or exposure to light. Compare samples side by side in daylight to judge colour fairly.",
      },
      {
        heading: "Plump and well filled",
        text: "Good pods feel plump and firm, not flat or hollow. Split one open: the seeds inside should be dark, sticky and fragrant. Empty, shrivelled or pale-seeded pods carry less flavour. Buyers often look at the share of split, open or immature pods, so agree acceptable levels before ordering.",
      },
      {
        heading: "Aroma is the real value",
        text: "Cardamom's worth lies in its fragrance. Crush a pod and smell it: you want a strong, sweet, slightly eucalyptus-like aroma. A faint smell suggests old or poorly stored stock. For grinders and extract buyers, aroma strength may matter more than pod size, so specify accordingly.",
      },
      {
        heading: "Samples and specifications",
        text: "Request a sample, a specification sheet and the analysis your destination market expects, such as pesticide residues. Agree size, colour, moisture and limits on splits and foreign matter in writing, and check each shipment against the sample you approved.",
      },
    ],
    // Protecting Cardamom's Green Colour and Fragrance
    [
      {
        heading: "Light is the main threat",
        text: "Cardamom's green colour fades with exposure to light, turning pods pale or yellowish over time. Once lost, the colour cannot be recovered, and faded pods sell for less. Use light-proof packaging and keep stock in a dark store. Avoid open display or bags left in bright areas during handling.",
      },
      {
        heading: "Seal in the aroma",
        text: "The fragrance comes from volatile oils that escape slowly from the pods. Airtight packaging, such as lined bags or sealed containers, helps keep the aroma in. Keep pods whole until needed, since seeds and ground cardamom lose their fragrance much faster than intact pods.",
      },
      {
        heading: "Cool and dry",
        text: "Warmth speeds the loss of both colour and aroma, and moisture invites mould and dulls the pods. Store cardamom in a cool, dry place, away from heat sources and damp walls. Some buyers use cold storage; if so, let sealed packs reach room temperature before opening to avoid condensation on the pods.",
      },
      {
        heading: "Keep it apart",
        text: "Cardamom can pick up strong odours from nearby goods, and its own aroma can taint other products. Store it away from chemicals, strongly scented spices and anything with a strong smell. Handle packs gently, too, as crushed or split pods lose their aroma faster.",
      },
      {
        heading: "Check and rotate",
        text: "Inspect stock regularly for fading, musty smells or insect activity, and use older stock first. How long cardamom keeps its colour and fragrance depends on the lot, packing and storage conditions, so agree expectations with your supplier for your route and market.",
      },
    ],
    // Cardamom in Tea, Coffee, Sweets and Bakery
    [
      {
        heading: "Masala chai",
        text: "Cardamom is the defining note in many masala chai blends, alongside ginger, cinnamon, cloves and black pepper. Tea blenders may use whole pods, cracked pods or ground seed depending on the format. Consistent aroma matters most, since it carries through to the brewed cup. Agree the form and particle size with your supplier.",
      },
      {
        heading: "Arabic coffee",
        text: "In Arabic coffee traditions, cardamom is brewed with lightly roasted coffee, often in generous amounts. Buyers for this market tend to be particular about colour, size and aroma, and many prefer bold, bright green pods. Understanding your customers' expectations helps you choose the right grade.",
      },
      {
        heading: "Sweets and desserts",
        text: "Cardamom flavours many South Asian and Middle Eastern sweets, from milk puddings and kheer to halwa and syrups. It also appears in ice creams and confectionery. Dessert makers often use ground seed and want a clean, intense aroma. Grinding close to use helps keep that fragrance fresh.",
      },
      {
        heading: "Bakery",
        text: "Cardamom is a familiar flavour in sweet breads, buns, pastries and biscuits in several baking traditions. Bakers usually work with ground cardamom or decorticated seed and need a consistent strength so that recipes taste the same each time. Trial bakes help set the right inclusion level.",
      },
      {
        heading: "Choosing the right form",
        text: "Whole pods suit retail, coffee and premium tea; seeds and powder suit bakery, desserts and blends. Tell your supplier how the cardamom will be used and where it will be sold. Labelling rules vary by market, so check local requirements, and agree specification, packing and labelling per order.",
      },
    ],
  ],
};
