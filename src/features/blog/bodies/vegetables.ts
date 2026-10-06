import type { ArticleBody } from "@/features/products/blog";

/**
 * Full text for the vegetables articles in features/products/blog.ts, by product
 * slug, in the same order as that product's articles.
 */
export const vegetablesBodies: Record<string, readonly [ArticleBody, ArticleBody, ArticleBody]> = {
  "onion-powder": [
    // Onion Powder for Food Manufacturing: What to Specify
    [
      {
        heading: "Mesh size for your process",
        text: "Particle size changes how onion powder behaves on the line. A fine powder disperses quickly in sauces, soups and dry rubs, while a coarser granule suits seasonings where visible specks are wanted or where dust must be kept down. Tell your supplier how the powder will be used, agree a mesh range on the specification sheet, and check the first lots against it rather than relying on a description.",
      },
      {
        heading: "Colour as a consistency check",
        text: "Onion powder ranges from creamy white to pale beige depending on the onion variety and how the slices were dried. Darker, brownish powder can point to scorching or older stock. Colour matters most where the powder goes into light sauces or white seasonings, so keep a reference sample and compare each new lot against it in good daylight.",
      },
      {
        heading: "Pungency and aroma",
        text: "Strength varies with variety, season and processing, so two powders labelled the same can taste quite different in a finished product. Open a sample and smell it: it should be sharp and clearly oniony, without musty, burnt or stale notes. If your recipe depends on a particular strength, run a small test batch and agree the expected flavour profile before ordering in volume.",
      },
      {
        heading: "Moisture and flow",
        text: "Dehydrated onion draws in moisture easily, and a powder that is even slightly too damp will lump in hoppers and dosing equipment. Set a maximum moisture value in your specification and ask for it to be reported for every lot. A free-flowing sample on arrival is a good sign, but the paperwork is what lets you hold each batch to the same standard.",
      },
      {
        heading: "Paperwork before the first order",
        text: "Ask for a sample, a specification sheet and a certificate of analysis for the lot you will receive. Check which tests your destination market expects, such as microbiology or residues, and agree them in advance. Confirm packaging, labelling and lot coding at the same time, so traceability is settled before the goods leave.",
      },
    ],
    // Keeping Onion Powder Free-Flowing in Storage and Transit
    [
      {
        heading: "Why onion powder cakes",
        text: "Onion powder is naturally hygroscopic: its sugars attract moisture from the air. Once it absorbs even a little, particles stick together, first into soft lumps and then into hard cakes that are difficult to break up and dose. Caking also dulls the aroma. Almost every storage problem with onion powder comes back to moisture, so the aim throughout is to keep air and humidity away from the product.",
      },
      {
        heading: "Choose barrier packaging",
        text: "Multi-layer bags with a moisture-barrier liner, sealed properly at the top, do far more to protect onion powder than plain woven sacks. Agree the inner liner, outer bag and pack size with your supplier per order, and check seals on arrival. A torn liner or poorly closed bag lets humid air in and is often where caking starts.",
      },
      {
        heading: "Watch for condensation in transit",
        text: "Containers can pass through sharp temperature changes on long routes, and moisture can condense on the inside walls and drip onto cargo. Dry, clean containers, sound pallets and protective lining all help. Avoid loading damp pallets or stacking bags directly against container walls, and plan the shipment so the goods do not sit for long periods in hot ports.",
      },
      {
        heading: "Dry, cool warehouse storage",
        text: "Once delivered, keep onion powder in a dry, cool, well-ventilated store, off the floor and away from walls, direct sunlight and strongly scented goods. Reseal opened bags straight away or transfer the contents into airtight containers. Work on a first-in, first-out basis so older lots are used before newer ones.",
      },
      {
        heading: "Shelf life depends on conditions",
        text: "How long onion powder stays free-flowing and aromatic depends on its moisture at packing, the packaging and how it is stored, so there is no single figure that applies to every shipment. Agree the best-before period and storage conditions on the specification sheet, and check stock regularly for lumps, fading colour or a weakening smell.",
      },
    ],
    // Onion Powder in Seasonings, Sauces and Ready Meals
    [
      {
        heading: "Seasoning blends and snacks",
        text: "Onion powder is a staple of dry seasonings, from snack coatings and crisps to spice rubs, stock powders and savoury mixes. Because it is already dry and milled, it blends evenly with salt, spices and other powders, and its sweet, savoury flavour rounds out a blend without adding moisture. Blenders usually want a consistent mesh so the powder does not separate from heavier ingredients.",
      },
      {
        heading: "Sauces, soups and dressings",
        text: "In sauces, gravies, soups and dressings, onion powder dissolves into the liquid and gives an even onion flavour with none of the texture of chopped onion. Manufacturers value that it removes the need to peel, chop and cook fresh onions on the line, and that the same dose gives a similar result from batch to batch when the powder is held to a specification.",
      },
      {
        heading: "Ready meals and processed foods",
        text: "Ready meals, marinades, burgers, sausages and meat-free products often use onion powder for background flavour. It is easy to weigh and add at the mixing stage, stores in a small space and is available year-round. Processors generally test the powder in their own recipe first, since strength varies by variety and season.",
      },
      {
        heading: "Easy dosing and storage",
        text: "A dry ingredient is simple to handle in bulk: it can be weighed accurately, held in a dry store and added by hand or automatically. That consistency is much of the reason processors choose dehydrated onion powder over fresh onion. Keep the powder dry and sealed so it continues to flow through dosing equipment as intended.",
      },
    ],
  ],

  "turmeric-powder": [
    // Turmeric Powder Quality: Colour, Curcumin and Purity
    [
      {
        heading: "Colour comes first",
        text: "Buyers usually judge turmeric powder by its colour before anything else. A bright, even yellow to deep golden orange is expected, though the exact shade varies with the rhizome variety and how it was processed. Dull, brownish or patchy powder can suggest old stock, poor drying or mixed lots. Compare samples side by side in daylight and keep a reference sample for checking later lots.",
      },
      {
        heading: "Agree curcumin and colour value",
        text: "Curcumin content and colour value differ widely between varieties and seasons, so they should never be assumed. If your product depends on them, state the range you need and the test method on the specification sheet, and ask for the result on the certificate of analysis for every lot. Agreeing the method matters, because different methods can give different figures for the same powder.",
      },
      {
        heading: "Purity and foreign matter",
        text: "Good turmeric powder should be made only from cleaned, dried rhizomes. Ask your supplier how the rhizomes are cleaned and sorted before grinding, and what checks are made for foreign matter. Where your market expects testing for adulterants, residues or heavy metals, agree those tests in advance so that every lot is reported against the same list.",
      },
      {
        heading: "Moisture and mesh size",
        text: "Moisture affects both shelf life and flow. Set a maximum moisture value in your specification and check it per lot. Agree a mesh range to suit the use: a fine powder for colouring and beverage mixes, or a slightly coarser grind for some spice blends. Consistent particle size helps the powder mix evenly and behave the same in each batch.",
      },
      {
        heading: "Samples and documents",
        text: "Before ordering, request a sample, the specification sheet and a certificate of analysis for the actual lot to be shipped. Confirm the destination market's testing and labelling expectations, along with packaging and lot coding. Settling these details before the first shipment avoids disputes over colour or strength once the goods arrive.",
      },
    ],
    // How Turmeric Rhizomes Become Fine Golden Powder
    [
      {
        heading: "Harvesting and cleaning",
        text: "Turmeric is harvested as underground rhizomes, which come out of the ground covered in soil and fine roots. The first step is to separate the rhizomes, trim the roots and wash away soil thoroughly. Careful cleaning at this stage reduces foreign matter later and gives a cleaner colour in the finished powder, so it is worth asking a supplier how it is done.",
      },
      {
        heading: "Boiling or steaming",
        text: "Fresh rhizomes are traditionally boiled or steamed before drying. This softens them, gelatinises the starch, removes the raw earthy smell and helps the colour spread evenly through the rhizome. The time and method vary between processors and affect the final colour and aroma, which is one reason powders from different sources can look and smell quite different.",
      },
      {
        heading: "Drying with care",
        text: "Cooked rhizomes are then dried until they are hard and brittle. Drying slowly in damp conditions risks mould, while too much heat can dull the colour and drive off aroma. Even, thorough drying matters because moisture left in the rhizome carries through to the powder and can shorten its shelf life.",
      },
      {
        heading: "Polishing the rhizomes",
        text: "Dried rhizomes are rough and scaly. Polishing, by hand or in rotating drums, removes the outer skin and remaining root bits to leave a smoother, brighter rhizome. Polished turmeric looks better and grinds more cleanly, and removing the outer layer helps reduce the soil and dust that would otherwise end up in the powder.",
      },
      {
        heading: "Grinding and packing",
        text: "Finally, the rhizomes are ground and sieved to the agreed mesh size, then packed in moisture-barrier bags. Grinding generates heat, so processors try to keep it controlled to protect colour and aroma. The powder is sampled for testing and given a lot code, so the certificate of analysis can be matched to the bags you receive.",
      },
    ],
    // Turmeric Powder in Spice Blends, Food Colouring and Beverages
    [
      {
        heading: "Curry powders and spice blends",
        text: "Turmeric is a base ingredient in many curry powders, masala blends and seasoning mixes, where it gives the familiar golden colour and a warm, earthy flavour. Blenders want consistent colour and aroma from lot to lot, so that each batch of their blend looks and tastes the same. A steady mesh size also helps turmeric mix evenly with heavier whole or cracked spices.",
      },
      {
        heading: "Natural food colouring",
        text: "Food manufacturers use turmeric powder to colour rice dishes, sauces, mustards, pickles, noodles, snacks and baked goods. For these buyers, colour strength matters more than flavour, so they often specify colour value or curcumin range and test each lot. Labelling rules for colours vary by market, so the description used on the pack should be checked locally.",
      },
      {
        heading: "Beverages and drink mixes",
        text: "Turmeric appears in golden milk mixes, teas, lattes and other beverage blends. These products need a fine, even powder that disperses well and does not leave grit at the bottom of the cup. Low moisture and good flow matter for powdered drink mixes, which are often packed in small sachets on automated lines.",
      },
      {
        heading: "Food service and retail",
        text: "Restaurants, caterers and retail packers buy turmeric powder for everyday cooking. They look for bright colour, a clean aroma and reliable packing that keeps the powder dry once opened. Pack size, labelling and lot coding should be agreed per order, as these differ between bulk food-service supply and smaller retail packs.",
      },
    ],
  ],

  "frozen-peas": [
    // Frozen Green Peas: Size Grading, Colour and IQF Quality
    [
      {
        heading: "Uniform size",
        text: "Frozen peas are usually graded by size, and an even size within a pack matters both for appearance and for cooking, since peas of similar size cook at the same rate. Smaller peas are often preferred for some retail and premium uses, larger ones for general food service. Agree the size grade you need on the specification sheet and check it against a sample.",
      },
      {
        heading: "Bright, even colour",
        text: "Good frozen peas are a bright, uniform green. Yellowish, pale or greyish peas can indicate over-mature peas at harvest, delays before blanching or temperature problems in storage. Look for a consistent colour across the pack, with few off-colour or blemished peas, and compare lots against a reference sample.",
      },
      {
        heading: "Free-flowing IQF pieces",
        text: "Individually quick frozen (IQF) peas should pour freely from the bag as separate peas. Clumps, ice glazing on the peas or a solid block usually mean the product has partly thawed and refrozen somewhere along the way. Free flow lets kitchens and processors use only what they need and reseal the rest.",
      },
      {
        heading: "Broken peas and foreign matter",
        text: "Check how many split, broken or crushed peas, loose skins and pieces of pod are in a sample. Some breakage is normal in frozen peas, but too much affects appearance and yield. Agree acceptable limits for defects and foreign matter on the specification sheet so each lot is judged against the same standard.",
      },
      {
        heading: "Tenderness and taste",
        text: "Cook a sample before ordering. Peas harvested at the right maturity and blanched promptly should be tender and sweet, while over-mature peas turn starchy and mealy. Since taste and texture vary by variety and season, confirm them against a sample and agree the specification per order.",
      },
    ],
    // Maintaining the Cold Chain for Frozen Peas
    [
      {
        heading: "Why a steady temperature matters",
        text: "Frozen peas keep their texture best when held at a constant deep-frozen temperature. When the temperature rises and falls, ice crystals melt and reform larger, damaging the cells of the peas and making them soft and watery when cooked. Moisture also moves out of the peas and settles as frost inside the pack. Steadiness matters as much as how cold the product is.",
      },
      {
        heading: "Clumping is a warning sign",
        text: "IQF peas that arrive stuck together in lumps, or with heavy frost inside the bag, have usually been through a temperature rise in storage or transit. The product may still be safe, but its quality has suffered. Check a few cartons from different positions in the load on arrival, and record what you find.",
      },
      {
        heading: "Plan the reefer shipment",
        text: "Frozen peas travel in refrigerated containers set to the agreed frozen temperature. Agree the set point with your supplier and logistics provider per order, make sure the container is pre-cooled before loading, and keep loading quick. Temperature recorders in the container give a record of conditions throughout the voyage.",
      },
      {
        heading: "Handover points",
        text: "Most cold-chain breaks happen at handovers: on the dock, at port, during customs checks and at the receiving warehouse. Minimise the time pallets spend outside cold storage at each step, and move them straight into a freezer store on arrival. Clear responsibilities at each handover help when something does go wrong.",
      },
      {
        heading: "Storage at destination",
        text: "In the warehouse, keep frozen peas in a freezer store with good air circulation, avoid placing cartons near doors that open often, and rotate stock on a first-in, first-out basis. Shelf life depends on the product and its storage conditions, so agree the best-before period and storage instructions on the specification sheet.",
      },
    ],
    // Frozen Peas in Ready Meals, Food Service and Retail Packs
    [
      {
        heading: "Ready meals and processed foods",
        text: "Manufacturers use frozen peas in ready meals, pies, fried rice, soups, samosa fillings, mixed vegetables and frozen meal kits. They value peas that are uniform in size, consistent in colour and free-flowing, so that they can be dosed accurately on the line. Bulk packs are generally preferred, with the format agreed to suit the buyer's handling equipment.",
      },
      {
        heading: "Food-service kitchens",
        text: "Restaurants, caterers, canteens and hotel kitchens use frozen peas because they are ready to cook, available year-round and need no shelling or washing. Free-flowing IQF peas let kitchens take out just the portion needed and return the rest to the freezer. Food-service buyers often want mid-sized catering packs that are easy to handle and store.",
      },
      {
        heading: "Retail packs",
        text: "For supermarkets and grocers, frozen peas are packed in smaller consumer bags, often with resealable closures. Retail buyers focus on appearance — bright colour, even size and few broken peas — because the product is seen through the pack or judged as soon as it is opened. Labelling requirements differ by market and should be agreed per order.",
      },
      {
        heading: "Choosing the right pack",
        text: "The right pack depends on who will use the peas and how. Share the intended use, pack size, carton format and labelling needs with your supplier at enquiry stage, so the specification and packing can be confirmed before production. Agreeing these early avoids repacking at destination, which adds cost and risks breaking the cold chain.",
      },
    ],
  ],

  okra: [
    // Selecting Tender Okra for Export: Length and Freshness
    [
      {
        heading: "Why okra is picked young",
        text: "Okra pods grow quickly and become tough and fibrous within days of reaching a good eating size. That is why export okra is harvested young, while pods are still tender and the seeds inside are small and soft. Over-mature pods are woody, hard to cut and unpleasant to eat, and they do not sell well in most markets.",
      },
      {
        heading: "Check pod length",
        text: "Pod length is the main grading point for fresh okra, and different markets prefer different ranges. Shorter pods are often favoured where tenderness matters most. Tell your supplier the length range your buyers expect and confirm it against a sample, since length and grade are supplied as per buyer requirements and vary with variety and season.",
      },
      {
        heading: "The snap test for tenderness",
        text: "A simple way to check tenderness is to bend the tip of a pod: a fresh, tender pod snaps cleanly, while an older one bends or feels stringy. Pods should feel firm, not limp or rubbery. Cutting a few pods open shows whether the seeds are still small and pale, which is another sign of young, tender okra.",
      },
      {
        heading: "Colour and surface",
        text: "Good okra is a fresh, even green with a light natural fuzz on the skin. Look out for dark streaks, brown or black marks, yellowing and dry, shrivelled tips or stems. Okra bruises easily, and marks from rough handling turn dark quickly, so a sample with many marked pods suggests problems in picking or packing.",
      },
      {
        heading: "Planning an order",
        text: "Fresh okra is highly perishable, so plan the shipment carefully. Share your quantity, length range, packing and destination with your supplier together, and confirm how the produce will be kept cool and ventilated in transit. Check the documents and inspections your destination requires before the first consignment leaves.",
      },
    ],
    // Handling Okra Gently to Avoid Bruising and Browning
    [
      {
        heading: "Why okra marks so easily",
        text: "Okra skin is thin and delicate. Pressure, rubbing or knocks during picking and packing break surface cells, and within hours these spots darken into brown or black marks. The damage may look minor at first, but it spoils the appearance of a whole pack and often leads to rot. Gentle handling at every stage is the most important thing for okra quality.",
      },
      {
        heading: "Pack in shallow, ventilated cartons",
        text: "Okra keeps best in ventilated cartons that are not packed too deep, so the lower pods are not crushed by those above. Pods should be packed firmly enough not to shift and rub in transit, but not squeezed. Avoid overfilling, and stack cartons so their weight rests on the carton walls rather than the produce.",
      },
      {
        heading: "Cool quickly, but not too cold",
        text: "Removing field heat soon after harvest slows ageing and keeps pods green and firm. At the same time, okra is sensitive to chilling and can develop pitting and discolouration if held too cold. The right storage range should be agreed with your supplier and logistics provider for the route rather than set by guesswork.",
      },
      {
        heading: "Keep air moving, keep pods dry",
        text: "Okra needs good ventilation to remove the heat and moisture it gives off. Wet pods and condensation encourage mould and slimy patches, so avoid sealed packs and do not wash okra before storage. Packs should allow air to flow freely through the load in the container.",
      },
      {
        heading: "Inspect and sell quickly",
        text: "Shelf life depends on the condition of the pods at packing and the storage conditions on the way, so there is no single figure. On arrival, check cartons from different parts of the load for dark marks, softness and mould, remove damaged pods and move stock on promptly.",
      },
    ],
    // Okra in Curries, Gumbo and Frozen Food Lines
    [
      {
        heading: "South Asian cooking",
        text: "Okra, known as bhindi, is an everyday vegetable in South Asian kitchens. It is stir-fried with spices, stuffed with masala, cooked into curries or fried crisp. Restaurants and grocers serving these cuisines want tender, evenly sized pods that cook quickly and evenly, with few fibrous or marked pods.",
      },
      {
        heading: "Stews and gumbo",
        text: "In many cuisines okra is valued for the way it thickens stews and soups as it cooks. It is a familiar ingredient in gumbo and in stews across West Africa, the Middle East and the Caribbean. For these dishes, buyers often accept a wider range of lengths, as pods are usually sliced before cooking.",
      },
      {
        heading: "Frozen okra lines",
        text: "Frozen okra, whole or cut into rounds, lets retailers and food-service buyers offer the vegetable year-round. Processors look for young, tender pods of even size, with bright green colour and few blemishes, because damage and fibre become more obvious after freezing. Pods must reach the processing line quickly and in good condition.",
      },
      {
        heading: "What processors specify",
        text: "Processors usually agree pod length, the share of damaged or over-mature pods they will accept and how quickly okra must reach the plant after harvest. If you are buying for freezing, share the cut style, pack format and intended market with your supplier, so the raw material can be selected to suit.",
      },
    ],
  ],

  "bitter-gourd": [
    // Bitter Gourd Quality: Ridges, Colour and Firmness
    [
      {
        heading: "Firm and crisp",
        text: "Good bitter gourd feels firm and heavy for its size, with no soft patches. Press gently along the length: a fresh gourd does not give, while one that feels spongy or hollow has started to age or dry out. Firmness matters because bitter gourd is often stored and sold over several days, and soft fruit spoils first.",
      },
      {
        heading: "Even green colour",
        text: "Bitter gourd should be an even green, from pale to dark depending on the variety. Yellow or orange patches, especially at the blossom end, mean the fruit is ripening; the flesh softens and the seeds harden and turn red inside. Most markets want fully green gourds, so ripening fruit is a key defect to look for.",
      },
      {
        heading: "Well-formed ridges",
        text: "The bumpy, ridged skin is characteristic of bitter gourd, and its form varies by variety, from small spiky types to long fruits with smoother ridges. Ridges should be well formed and intact, without cuts, scars, dark spots or broken tips, since damage to the ridges is where rot often begins.",
      },
      {
        heading: "Size and shape",
        text: "Length and shape vary by variety and market. Some buyers want short, spiky gourds; others prefer longer, straighter fruit. Specify the variety type and size range your market expects and confirm them against a sample, as grading is supplied as per buyer requirements. Even sizing within a carton also helps the produce present well on arrival.",
      },
      {
        heading: "Check inside a sample",
        text: "Cut open a few gourds from a sample. The flesh should be pale and crisp, with soft, whitish seeds. Hard or reddening seeds and spongy flesh indicate fruit that was picked too late or has ripened in transit. This simple check tells you more than the outside alone.",
      },
    ],
    // Slowing Ripening: Storing Bitter Gourd for Shipment
    [
      {
        heading: "Why bitter gourd turns yellow",
        text: "Bitter gourd is harvested immature, while still green and firm. After picking it continues to ripen, turning yellow and then orange, while the flesh softens and the fruit may split. Warmth speeds this process. The aim of storage and transport is to slow ripening so the gourds arrive green and market-ready.",
      },
      {
        heading: "Cool, but not cold",
        text: "Cool storage slows ripening, but bitter gourd can be damaged by excessive cold, with pitting and discolouration appearing later. The right range depends on the variety and journey, so agree storage conditions with your supplier and logistics provider rather than applying a general setting. Removing field heat promptly after harvest helps from the start.",
      },
      {
        heading: "Keep apart from ripening fruit",
        text: "Many fruits release ethylene as they ripen, and exposure to it speeds yellowing in bitter gourd. Avoid storing or shipping bitter gourd alongside ripening produce such as bananas, mangoes or tomatoes. Good ventilation helps carry away any ethylene the gourds produce themselves.",
      },
      {
        heading: "Packing that protects",
        text: "Pack gourds in ventilated cartons, firmly enough that they do not roll and rub, but without pressure that bruises the ridges. Protective liners can help limit moisture loss, provided they allow air to circulate and do not trap condensation. Handle cartons carefully to avoid broken tips and crushed fruit.",
      },
      {
        heading: "Inspect on arrival",
        text: "How long bitter gourd stays green depends on its maturity at harvest and the conditions on the way, so there is no fixed figure. Check cartons from different positions in the load for yellowing, soft spots and mould, separate ripening fruit, and sell older stock first.",
      },
    ],
    // Bitter Gourd in Asian Cooking and Juices
    [
      {
        heading: "South Asian dishes",
        text: "Bitter gourd, known as karela, is widely cooked in South Asian homes and restaurants. It is stuffed with spiced fillings, stir-fried, made into crisp fried rings or cooked in curries. Cooks often salt and rinse the slices first to soften the bitterness. For these uses, buyers prefer firm, green gourds with tender seeds.",
      },
      {
        heading: "East and Southeast Asian cooking",
        text: "Across East and Southeast Asia, bitter gourd is used in stir-fries with egg, tofu or meat, in soups and stuffed with minced fillings. These cuisines often favour longer, paler varieties with smoother ridges. Knowing which community a product is for helps when choosing the variety and size to order.",
      },
      {
        heading: "Juices and beverages",
        text: "There is steady interest in bitter gourd juice and blends, both freshly pressed and as packaged products. Juice makers look for fresh, green fruit with good moisture content and few defects, as damage and ripening affect taste and colour. Health and nutrition wording on labels is regulated differently in each market and should be checked locally.",
      },
      {
        heading: "Processed and dried products",
        text: "Bitter gourd is also sliced and dried, pickled or made into powder and chips. Processors usually want consistent size and maturity so that slices dry or cook evenly. Share the intended product and processing method with your supplier, so the raw material can be selected to suit.",
      },
    ],
  ],

  eggplant: [
    // Eggplant Export Guide: Gloss, Shape and Firmness
    [
      {
        heading: "Look for a glossy skin",
        text: "A fresh eggplant has a tight, shiny skin. As the fruit ages or loses moisture, the gloss fades and the skin turns dull and may wrinkle. Colour depends on variety, from deep purple and near black to striped, green or white, but in every case the skin should look bright and even, without brown patches, scars or soft marks.",
      },
      {
        heading: "Green calyx",
        text: "The calyx, the leafy cap at the stem end, is one of the best freshness indicators. It should be green and fresh-looking, firmly attached and free from mould. A dry, brown or shrivelled calyx shows the fruit has been stored for a while, and mould on the calyx can spread to the fruit in transit.",
      },
      {
        heading: "Firmness and weight",
        text: "Good eggplant feels firm and heavy for its size. Press gently with a thumb: fresh flesh springs back, while a fruit that stays dented or feels spongy is past its best. Very hard, light fruit can be over-mature, with larger, darker seeds and a more bitter taste. Cutting a few fruits from a sample shows the condition of the flesh and seeds.",
      },
      {
        heading: "Shape and size",
        text: "Shape and size vary widely by variety and market, from round and oval to long and slender. Specify the variety type and size range your customers expect, and confirm them against a sample, as grade is supplied as per buyer requirements. Even sizing within a carton helps both presentation and handling.",
      },
      {
        heading: "Defects to watch for",
        text: "Check for cuts, bruises, insect holes, sunken spots and rot at the blossom end. Eggplant skin marks easily, so many scratches or bruises in a sample suggest rough handling. Agree acceptable limits for defects on the specification, and confirm the documents and inspections your destination requires.",
      },
    ],
    // Protecting Eggplant from Chilling Injury in Transit
    [
      {
        heading: "Eggplant dislikes the cold",
        text: "Unlike many vegetables, eggplant is sensitive to chilling. If held too cold for too long, it develops chilling injury: small sunken pits on the skin, bronzing or browning, and darkening of the flesh and seeds. The damage often shows only after the fruit returns to warmer conditions, which means a problem in transit may appear at the wholesaler or on the shelf.",
      },
      {
        heading: "Agree the storage range",
        text: "Eggplant needs cool storage to slow ageing, but not so cold that chilling injury sets in. The right range depends on variety, maturity and journey length, so agree storage conditions with your supplier and logistics provider per shipment. Avoid sharing a container with produce that needs much colder settings.",
      },
      {
        heading: "Limit moisture loss",
        text: "Eggplant loses moisture through its skin, which causes the gloss to fade and the skin to wrinkle. Protective liners or wrapping can help hold moisture, as long as there is enough ventilation to prevent condensation and mould. Keep fruit out of direct sun and hot loading areas while waiting for dispatch.",
      },
      {
        heading: "Pack to prevent bruising",
        text: "Eggplant skin bruises and scratches easily, and bruises turn brown quickly. Pack fruit in single layers or with dividers where possible, so that fruits do not rub together or press on each other. Handle cartons carefully during loading, and keep the stems from puncturing neighbouring fruit.",
      },
      {
        heading: "Check on arrival",
        text: "Shelf life depends on condition at packing and the storage conditions on the way, so there is no single figure. When the shipment arrives, inspect fruit from several positions in the load for pitting, browning, soft spots and calyx mould, and move older stock first.",
      },
    ],
    // Round, Long and Baby Eggplant: Matching Variety to Market
    [
      {
        heading: "Round and oval types",
        text: "Large round or oval eggplants, often deep purple, are popular for roasting whole, grilling in thick slices and dishes where the flesh is mashed. Bharta, made from flame-roasted eggplant, is commonly prepared with large round fruit because of its generous, soft flesh. Buyers for these uses usually look for heavy, glossy fruit with few seeds.",
      },
      {
        heading: "Long and slender types",
        text: "Long, slim eggplants have thinner skin and fewer seeds, and cook quickly. They suit stir-fries, curries and grilling in lengths, and are widely used in South Asian and East Asian cooking. Buyers typically specify a length range and look for straight, evenly coloured fruit, as curved or uneven fruit is harder to pack and present.",
      },
      {
        heading: "Baby and small eggplants",
        text: "Small round or egg-shaped eggplants, in purple, green, white or striped forms, are often cooked whole or halved, for example stuffed with spice pastes. Restaurants and speciality grocers value them for presentation and even portion size. Uniformity within a pack matters most here, since the fruit is often served whole.",
      },
      {
        heading: "Food service and processing",
        text: "Food-service kitchens and processors use eggplant in curries, grilled vegetable mixes, dips and ready meals. They usually want consistent size for easy preparation and predictable yield. Share the dish or product, the variety type and the size range with your supplier, so the right fruit can be chosen.",
      },
      {
        heading: "Know your end customer",
        text: "Preferences differ by community and market, and the same variety can be popular in one place and unfamiliar in another. Before ordering, check which shapes, colours and sizes your customers expect, and confirm availability, since varieties vary by season.",
      },
    ],
  ],

  drumstick: [
    // Fresh Drumsticks: Pod Length, Tenderness and Colour
    [
      {
        heading: "Even length",
        text: "Drumsticks, the long pods of the moringa tree, are usually sold in bundles of similar length. Even length makes bundling, packing and presentation easier, and helps food-service buyers cut pieces of consistent size. Pod length varies by variety and season, so agree the length range your market expects and confirm it against a sample.",
      },
      {
        heading: "Firm, green pods",
        text: "Fresh drumsticks are a uniform green, firm along their length and slightly flexible without being limp. Pods that are yellowing, browning or wrinkled have been stored too long or have dried out. Check the ends as well: dry, split or blackened tips suggest the pods are ageing.",
      },
      {
        heading: "Tender flesh inside",
        text: "Buyers want pods picked while the inner flesh is still soft and the seeds are small. Over-mature drumsticks become hard and woody, with large seeds and fibrous flesh that cannot be eaten. Bend a pod gently and cut a few open: the flesh should be moist and soft, and the pod should not feel rigid.",
      },
      {
        heading: "Check for damage",
        text: "Look for cracks, splits, insect damage and dark sunken patches along the pod. Drumsticks are long and can break if bundled or stacked carelessly, and broken pods dry out and spoil faster. Agree acceptable limits for broken and damaged pods on the specification.",
      },
      {
        heading: "Planning the order",
        text: "Share the quantity, length range, bundle size, packing and destination with your supplier together. Drumsticks are perishable, so confirm the documents and inspections your destination requires and how the pods will be kept cool and protected from drying out in transit.",
      },
    ],
    // Keeping Drumsticks Fresh from Farm to Market
    [
      {
        heading: "Moisture loss is the main risk",
        text: "Drumsticks lose water steadily after harvest. As they dry, the pods turn limp and wrinkled and the flesh inside becomes fibrous and less pleasant to eat. Most of the work of keeping drumsticks fresh is about slowing this moisture loss, from the moment the pods are picked until they reach the customer.",
      },
      {
        heading: "Cool and humid conditions",
        text: "Cool storage with fairly high humidity helps drumsticks hold their moisture and colour. The right conditions depend on the produce and route, so agree them with your supplier and logistics provider per shipment. Avoid leaving pods in direct sun or warm loading areas while they wait for dispatch.",
      },
      {
        heading: "Careful bundling",
        text: "Drumsticks are usually tied in bundles of even length. Bundles should be tight enough to stop the pods shifting and rubbing, but not so tight that they crush or crack the pods. Lining cartons or wrapping bundles can help reduce drying, as long as the packaging does not trap condensation.",
      },
      {
        heading: "Pack for length",
        text: "Because drumsticks are long and fairly brittle, cartons should fit the pod length so that ends are not bent or snapped. Stack cartons so their weight rests on the carton walls, and handle them carefully during loading. Broken pods dry out and spoil faster than whole ones.",
      },
      {
        heading: "Inspect and rotate",
        text: "Shelf life depends on how tender the pods were at harvest and the conditions on the way, so there is no single figure. On arrival, check bundles for limp, yellowing or split pods, separate them, and sell older stock first.",
      },
    ],
    // Drumsticks in Sambar, Curries and Frozen Packs
    [
      {
        heading: "Sambar and South Indian cooking",
        text: "Drumsticks are a familiar ingredient in sambar, the lentil and vegetable stew of South Indian cooking. They are cut into short lengths and simmered until the soft inner flesh can be scraped from the pod. Restaurants and grocers serving South Indian communities want tender pods of even thickness that cook through at the same rate.",
      },
      {
        heading: "Curries and other dishes",
        text: "Drumsticks also appear in vegetable curries, dals, coconut-based gravies and mixed vegetable dishes across South Asia and in communities abroad. Cooks value them for their mild flavour and the way they absorb the sauce. For these uses, tenderness matters more than exact length, as the pods are always cut before cooking.",
      },
      {
        heading: "Frozen cut drumsticks",
        text: "Frozen drumsticks, cleaned and cut into short pieces, let overseas grocers and food-service buyers offer the vegetable throughout the year. Processors select young, tender pods, because fibrous pods stay tough after freezing. Pieces should be of even length and pack free-flowing, without clumping.",
      },
      {
        heading: "What buyers specify",
        text: "For fresh drumsticks, buyers usually agree the length range, bundle size and packing. For frozen packs, they specify the cut length, pack size and labelling. Share your intended use and market with your supplier so the specification can be confirmed per order.",
      },
    ],
  ],

  beans: [
    // Fresh Green Beans: Snap, Straightness and Size Grading
    [
      {
        heading: "The snap test",
        text: "Fresh green beans should snap cleanly when bent, with a crisp sound and a moist break. Beans that bend without breaking, or feel rubbery, have lost moisture or are past their best. Snap is one of the quickest checks a buyer can make on a sample, and it says a lot about how the beans were harvested and handled.",
      },
      {
        heading: "Straight pods",
        text: "Straight beans pack neatly, look better in retail packs and are easier to trim and cut on processing lines. Some curvature is normal, but many curved, twisted or misshapen pods reduce the grade. Agree how much curvature is acceptable for your market, and compare it against a sample.",
      },
      {
        heading: "Uniform diameter",
        text: "Buyers often grade beans by pod diameter as well as length. Slim beans are usually tender, with small seeds, while thicker beans may be more mature, with visible seed bumps and tougher pods. Specify the diameter and length range you need, since size and grade are supplied as per buyer requirements and vary by variety and season.",
      },
      {
        heading: "Bright colour, clean surface",
        text: "Good beans are an even, bright green, without yellowing, brown streaks, rust spots or white patches of mould. Check the tips and stem ends: they should be fresh, not dry or blackened. Look out too for bruises, cuts and insect damage, which spoil quickly in transit.",
      },
      {
        heading: "Samples and specification",
        text: "Before ordering, request a sample and agree the grade, size range, defect limits and packing on a specification. Fresh beans are perishable, so also confirm the documents and inspections your destination requires and how the beans will be cooled and kept cool in transit.",
      },
    ],
    // Pre-Cooling Green Beans for Longer Freshness
    [
      {
        heading: "What field heat does",
        text: "Beans picked in warm weather carry heat from the field. While they stay warm, they continue to respire quickly, losing moisture and sugars, and they soon turn limp and dull. Removing this field heat soon after harvest, before the beans are packed and shipped, slows these changes and keeps the pods crisp for longer.",
      },
      {
        heading: "Cooling promptly",
        text: "The sooner beans are cooled after picking, the better they hold their quality. Pre-cooling is commonly done with chilled air or cold water, depending on the facilities available. Ask your supplier how and when beans are cooled before packing, since the time between harvest and cooling makes a real difference to freshness.",
      },
      {
        heading: "Cool, not too cold",
        text: "Green beans need cool storage, but they can suffer chilling injury if held too cold for too long, which shows as pitting, rust-coloured spots and water-soaked patches. Agree the right storage range with your supplier and logistics provider for the route, rather than relying on a general setting.",
      },
      {
        heading: "Keep humidity up, condensation down",
        text: "Beans lose moisture readily, so fairly humid conditions help them stay crisp. At the same time, free water on the pods encourages mould. Ventilated cartons, liners that allow airflow, and avoiding temperature swings that cause condensation help keep this balance.",
      },
      {
        heading: "Hold the chain",
        text: "Once beans are cooled, keep them cool through packing, loading, transit and storage at destination. Each warm break speeds ageing. On arrival, check a few cartons for limp pods, spotting and mould, and sell older stock first, since shelf life depends on these conditions.",
      },
    ],
    // Green Beans for Retail, Food Service and Freezing
    [
      {
        heading: "Retail packs",
        text: "Supermarket and grocery buyers focus on appearance: straight, slim, bright green beans of even length, with very few blemishes. Beans are often sold whole in trays, bags or loose, and some retailers prefer them topped and tailed for convenience. Agree the grade, length and pack format with your supplier, as well as labelling for your market.",
      },
      {
        heading: "Food-service kitchens",
        text: "Restaurants, caterers and hotel kitchens want beans that are quick to prepare and cook evenly. Many prefer trimmed beans, which save labour, and value consistent diameter so portions cook at the same rate. Catering-size packs that are easy to store and handle are usually preferred.",
      },
      {
        heading: "Beans for freezing",
        text: "Processors freezing green beans need fresh, tender pods that reach the plant soon after harvest. Beans are usually trimmed and cut before blanching and freezing, so straightness matters less than tenderness, colour and freedom from defects. Over-mature, fibrous beans stay tough after freezing and lower the quality of the finished product.",
      },
      {
        heading: "Whole, trimmed or cut",
        text: "The form you specify should follow the end use. Whole beans suit retail and some food-service menus; trimmed beans save kitchen time; cut beans suit ready meals, mixed vegetables and frozen packs. Share the intended use, cut style and pack size with your supplier at enquiry stage, so the grade and processing can be confirmed per order.",
      },
    ],
  ],
};
