import type { ArticleBody } from "@/features/products/blog";

/**
 * Full text for the powders-a articles in features/products/blog.ts, by product
 * slug, in the same order as that product's articles.
 */
export const powdersABodies: Record<string, readonly [ArticleBody, ArticleBody, ArticleBody]> = {
  "red-chilli-powder": [
    // Red Chilli Powder Buying Guide: Colour, Heat and Grind
    [
      {
        heading: "In brief",
        text: "Decide first whether your product needs colour, heat or a balance of both, because chilli variety sets both and no single powder is best at everything. Then agree the grind, the moisture limit and the purity tests in writing, approve a sample, and keep part of it as the reference for every later lot.",
      },
      {
        heading: "Start with the variety",
        text: "Red chilli powder is only as good as the chillies it is ground from, and varieties differ enormously. Some are prized for deep red colour with gentle heat, others for sharp pungency with a lighter colour. The red pigment sits in the pod wall, while the compounds that make chillies hot are concentrated in the pale tissue that holds the seeds, so the proportion of pod, seed and stalk in the mill also shifts the colour and heat of the finished powder. Before comparing prices, tell your supplier what the powder is for and ask which variety or mix they propose.",
      },
      {
        heading: "Chilli powder or chili powder?",
        text: "In some markets, particularly the United States, chili powder on a retail shelf usually means a seasoning blend that also contains cumin, oregano, garlic and salt. Spice buyers sourcing from India normally mean 100 per cent ground dried red chillies. State this plainly in your enquiry and on the specification, so that quotations are for the same product and labels in your market describe it correctly.",
      },
      {
        heading: "Heat and colour are agreed per order",
        text: "Because heat and colour depend on the variety, the harvest and how the pods were dried, there is no single standard level for chilli powder. Buyers normally agree a range for each on the specification sheet, usually as an ASTA colour value and a pungency figure in Scoville Heat Units, along with the method that will be used to measure them. If your recipe depends on a precise level, keep an approved sample so that later shipments can be checked against it.",
      },
      {
        heading: "Look at the powder itself",
        text: "Good chilli powder looks even in colour and flows freely. Pale or brownish patches can point to discoloured pods or old stock, while lumps suggest moisture has crept in. Rub a little between your fingers: it should feel dry and uniform, without gritty particles or husk. A fresh, pungent smell is a good sign; a flat or musty smell suggests the powder has aged or been stored badly. An unnaturally bright or uniform red is worth questioning rather than admiring.",
      },
      {
        heading: "Grind and moisture",
        text: "A fine powder blends smoothly into sauces and seasonings, while a slightly coarser grind can suit marinades and dry rubs. Agree the fineness on the specification sheet, since uneven particles can separate in blends and packs. Set a maximum moisture value too: dry powder resists caking and mould. For reference, India's food standards (FSSAI) set a maximum of 11 per cent moisture for chilli powder sold in India; your own limit may be tighter.",
      },
      {
        heading: "Purity and food-safety testing",
        text: "Ground chilli has a history of adulteration that buyers still test for. In 2003 the European Union introduced emergency measures after the illegal dye Sudan I was found in hot chilli products, and testing for illegal dyes has remained a routine request since. Chillies are also among the spices for which EU law sets limits on aflatoxins and ochratoxin A, toxins produced by moulds that can grow when pods are dried or stored damp. Agree in advance which tests your destination and customers expect, such as dyes, mycotoxins, pesticide residues and microbiology, and ask for results per lot.",
      },
      {
        heading: "Packing, quantity and paperwork",
        text: "Chilli powder is sensitive to light and moisture, so agree packing that protects it, such as lined bags or sealed inner liners, along with the pack size and labelling your market requires. Freshland Exports supplies red chilli powder from a minimum order of 500 kg. Share your quantity, destination and timing early, together with the documents you need, so that suitable chillies can be set aside for your lot.",
      },
      {
        heading: "Frequently asked questions",
        text: "Short answers to questions buyers often ask about red chilli powder.",
      },
      {
        heading: "Can I have high colour and high heat in one powder?",
        level: 3,
        text: "Sometimes, but the two are independent and often pull in different directions. Many buyers blend varieties to reach a target, so agree the colour and heat ranges together rather than one at a time.",
      },
      {
        heading: "Should test results come with every lot?",
        level: 3,
        text: "If a value matters to your product or your market, yes. Agree which results accompany each shipment before production, so the paperwork matches the lot you receive.",
      },
      {
        heading: "Standards and references",
        text: "Codex Alimentarius CXS 353-2022, Standard for Dried or Dehydrated Chilli Pepper and Paprika. ISO 972, Chillies and capsicums, whole or ground (powdered). FSSAI Food Safety and Standards (Food Products Standards and Food Additives) Regulations, 2011, section 2.9.3, Chillies and Capsicum. Commission Decision 2003/460/EC on emergency measures regarding hot chilli and hot chilli products (Sudan I). Commission Regulation (EU) 2023/915 on maximum levels for certain contaminants in food. Requirements differ by destination and change over time, so confirm current rules for your market.",
      },
    ],
    // Understanding ASTA Colour and SHU in Red Chilli Powder
    [
      {
        heading: "Two measures, two questions",
        text: "Red chilli powder is usually judged on two things: how much colour it brings and how hot it is. Because chilli varieties differ widely on both, buyers and suppliers use two common measures to describe them. ASTA colour value describes colour, and Scoville Heat Units (SHU) describe pungency. Neither says anything about the other, so a powder can be deeply coloured and mild, or pale and very hot.",
      },
      {
        heading: "What ASTA colour value describes",
        text: "ASTA colour value is named after the American Spice Trade Association, whose analytical method it comes from. Under ASTA Method 20.1, the pigment is extracted from a weighed sample with acetone and the absorbance of the extract is read on a spectrophotometer, so a higher value means more extractable red colour. Buyers who use chilli powder mainly for appearance, for example in sauces, seasonings or coatings, often place more weight on colour value than on heat. ISO 7541 describes a comparable spectrophotometric method for paprika.",
      },
      {
        heading: "What SHU describes",
        text: "Scoville Heat Units express pungency, which comes from capsaicinoids, the compounds that make chillies hot. The original Scoville test relied on a panel tasting diluted extracts. Today pungency is usually measured by high-performance liquid chromatography (HPLC), for example under ASTA Method 21.3 or ISO 7543-2, and the measured capsaicinoid content is converted to Scoville units. A higher figure means a hotter powder.",
      },
      {
        heading: "Why results can differ between laboratories",
        text: "Colour and heat figures depend on the method, the sample and how the sample was taken from the lot. Two laboratories using different methods, or the same method with different calculations, can report different numbers for the same powder. ASTA has also presented a proposed accuracy update to the way Method 21.3 results are converted to SHU, so when you compare figures from different years or laboratories, ask which method and calculation each one used.",
      },
      {
        heading: "Agreeing a specification",
        text: "If your product depends on colour or heat, state the range you need on the specification sheet rather than a single number, name the method that will be used, and agree how samples will be drawn from the lot. Ask for the supporting results with each shipment, and keep an approved reference sample so that a disputed lot can be compared with what you agreed to buy.",
      },
      {
        heading: "Colour and heat over time",
        text: "Colour in chilli powder fades with exposure to light, heat and air, so a value measured at dispatch may not be the value on arrival or months later. Pungency is generally more stable than colour, but it too can change in poor storage. Agree when measurements are taken, at dispatch or on arrival, and how the powder will be packed and stored, so that both sides judge the product on the same basis.",
      },
      {
        heading: "Frequently asked questions",
        text: "Common questions about colour and heat figures in chilli powder.",
      },
      {
        heading: "Does a higher ASTA value mean a hotter powder?",
        level: 3,
        text: "No. ASTA colour value measures extractable colour only. Heat is measured separately, as capsaicinoid content expressed in Scoville Heat Units.",
      },
      {
        heading: "Which figure should I put on my specification?",
        level: 3,
        text: "The one your product depends on. Colour-led products such as sauces and coatings usually specify colour value; hot sauces and spicy snacks usually specify a heat range. Many buyers specify both.",
      },
      {
        heading: "Standards and references",
        text: "ASTA Analytical Method 20.1, Extractable Color in Capsicums and their Oleoresins. ASTA Analytical Method 21.3, Pungency of Capsicums and their Oleoresins (HPLC). ISO 7543-2, Chillies and chilli oleoresins, determination of total capsaicinoid content, Part 2: method using high-performance liquid chromatography. ISO 7541, Paprika, spectrophotometric determination of extractable colour.",
      },
    ],
    // Storage and Handling Considerations for Bulk Chilli Powder
    [
      {
        heading: "Why chilli powder fades",
        text: "The red of chilli powder comes from natural pigments that break down when exposed to light, heat and air. Grinding greatly increases the surface open to those conditions, so powder fades and loses pungency faster than whole chillies. Moisture adds a second problem: it causes caking and, in the worst case, mould. Good storage is about slowing all of these changes.",
      },
      {
        heading: "Keep it dark",
        text: "Light is one of the main causes of fading. Store chilli powder in opaque or lined packaging, and keep bags away from windows, skylights and open loading bays. If powder is moved into smaller containers for use, choose ones that block light rather than clear plastic or glass left on an open shelf.",
      },
      {
        heading: "Cool, dry and sealed",
        text: "Keep chilli powder in a cool, dry store, away from heat sources such as sun-facing walls, roofs and machinery. Stack bags on pallets off the floor and clear of damp walls. Once a bag is opened, reseal it tightly or transfer the remaining powder to an airtight container, since every exposure to humid air raises the risk of lumps.",
      },
      {
        heading: "Moisture, mould and mycotoxins",
        text: "Damp storage does more than cause lumps. Moulds that grow on chillies and chilli powder in warm, humid conditions can produce aflatoxins and ochratoxin A. These cannot be removed by sieving or cooking, and EU law sets maximum levels for both in Capsicum spices: 5 micrograms per kilogram for aflatoxin B1, 10 for total aflatoxins and 20 for ochratoxin A. The best protection after delivery is to keep the powder dry, so that a lot which met its specification on arrival stays within it.",
      },
      {
        heading: "Handling in the factory",
        text: "Chilli powder is an irritant dust. Open and tip bags in a ventilated area, ideally with local dust extraction, and give staff suitable eye and respiratory protection. Keep chilli handling apart from products that must not carry heat or red colour, and clean scoops and hoppers between uses, so that powder does not cross into other lines.",
      },
      {
        heading: "Watch for caking and pests",
        text: "Check stored powder at intervals. Hard lumps, a dull colour or a musty smell are signs that moisture or age has taken hold. Look for insects or webbing around seams and the bottom of stacks. Set affected bags aside promptly so that a small problem does not spread through the store.",
      },
      {
        heading: "Rotate your stock",
        text: "Use chilli powder in the order it arrived, so that older stock is not left at the back of the store while fresher lots are used first. How long the powder keeps its colour depends on the variety, packing and storage conditions, so agree a best-before period and storage conditions with your supplier for your route and warehouse rather than relying on a single figure.",
      },
      {
        heading: "Standards and references",
        text: "Commission Regulation (EU) 2023/915, entries 1.1.14 (aflatoxins in Capsicum spp. and other spices) and 1.2.18 (ochratoxin A in Capsicum spp.). Limits apply in the European Union; other destinations set their own, so confirm the current requirements for your market.",
      },
    ],
  ],
  "black-pepper-powder": [
    // Ground Black Pepper Quality: Aroma, Grind and Purity
    [
      {
        heading: "In brief",
        text: "Judge ground black pepper first by aroma, then by grind consistency and purity. Because adulteration and contamination are harder to see in a powder than in whole peppercorns, the written specification and the test results that accompany each lot matter more than appearance.",
      },
      {
        heading: "Aroma comes first",
        text: "The value of ground black pepper lies in its aroma and bite. Good powder smells sharp, woody and warm the moment the bag is opened; a flat or dusty smell suggests old stock or poorly stored pepper. The aroma comes from volatile oil and the bite from piperine, and both begin to fade once the peppercorns are ground, so freshness and packing matter as much as the peppercorns themselves. Where aroma is critical, buyers often specify a minimum volatile oil content.",
      },
      {
        heading: "Colour and appearance",
        text: "Ground black pepper is usually a greyish brown to dark powder, flecked with lighter particles from the inside of the berry. Some variation is natural and depends on the peppercorns used. What buyers watch for is an even appearance, without unusual pale patches, foreign particles or a dull, washed-out look that can point to ageing or to material other than pepper.",
      },
      {
        heading: "Grind size and consistency",
        text: "Pepper is sold in grinds from fine table powder to coarse cracked pepper, and each suits a different use. Agree the grind on the specification sheet as a particle-size range, and check that a sample is consistent, because a mix of very fine dust and large pieces can separate in blends and feed unevenly through seasoning equipment. Keep an approved sample to check later shipments against.",
      },
      {
        heading: "Purity and the raw peppercorns",
        text: "Much of the purity of ground pepper is decided before milling. Light, hollow or immature berries carry little oil or piperine and dilute the powder, which is why standards for whole pepper limit the proportion of light berries. Ask how the peppercorns are cleaned and graded before grinding, and agree purity, moisture, volatile oil and extraneous matter parameters on the specification. For reference, India's FSSAI standard for ground black pepper sets a maximum of 12 per cent moisture and a minimum volatile oil content of 1.0 ml per 100 g on a dry basis.",
      },
      {
        heading: "Microbiology and contaminants",
        text: "Pepper, like other spices dried in the open, can carry microorganisms from the field and the drying floor. The US Food and Drug Administration's risk profile on spices reported that about 7 per cent of 2,844 imported spice shipments sampled between 2007 and 2009 contained Salmonella, which is why many food manufacturers require a microbial reduction treatment and microbiological results for spices used in ready-to-eat foods. Pepper is also among the spices for which EU law sets limits on aflatoxins. Agree the microbiological criteria, any treatment requirement and the contaminant tests your market expects before the order is placed.",
      },
      {
        heading: "Packing that protects",
        text: "Ground pepper should be packed promptly in packaging that limits air and moisture, such as lined bags or sealed inner liners. Agree the pack size and labelling for your market, and ask how soon after grinding the powder will be packed. Well-sealed packing is the simplest way to make sure the pepper arrives with the aroma your customers expect.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers often raise when specifying ground black pepper.",
      },
      {
        heading: "Why does ground pepper need more checks than whole pepper?",
        level: 3,
        text: "Once pepper is milled, light berries, foreign matter and other material can no longer be picked out or seen, so a specification and per-lot results take the place of visual inspection.",
      },
      {
        heading: "Do I need steam-treated pepper?",
        level: 3,
        text: "It depends on your product. Pepper that is cooked in your process may not need it; pepper sprinkled onto ready-to-eat foods often does. Your food-safety plan and your customers' requirements should decide, and the requirement should be written into the specification.",
      },
      {
        heading: "Standards and references",
        text: "Codex Alimentarius CXS 326-2017, Standard for Black, White and Green Peppers. ISO 959-1, Pepper (Piper nigrum L.), whole or ground, Specification, Part 1: Black pepper. FSSAI Food Products Standards and Food Additives Regulations, 2011, section 2.9.15. US FDA, Risk Profile: Pathogens and Filth in Spices (2017). Commission Regulation (EU) 2023/915, entry 1.1.14. Requirements vary by destination; confirm the current rules for your market.",
      },
    ],
    // How Black Peppercorns Are Ground Without Losing Aroma
    [
      {
        heading: "Starting with the right peppercorns",
        text: "Ground pepper begins with dried black peppercorns: the berries of the Piper nigrum vine, harvested before they ripen and dried until the skin turns dark and wrinkled. Their quality sets the ceiling for the powder. Well-dried, dense, aromatic berries give a bright, pungent powder, while light, hollow or old berries give a weak one. Peppercorns are usually selected and checked for aroma, dryness and cleanliness before any grinding begins.",
      },
      {
        heading: "Cleaning before grinding",
        text: "Before milling, peppercorns are cleaned to remove dust, stones, stems, pinheads and other foreign matter, and light berries can be separated out. This step matters more for powder than for whole pepper, because once ground, any impurity is mixed through the whole lot and cannot be picked out. Buyers often ask suppliers to describe their cleaning process and agree cleanliness parameters on the specification sheet.",
      },
      {
        heading: "Reducing the microbial load",
        text: "Cleaning removes dirt but not microorganisms, so pepper intended for ready-to-eat foods is often given a microbial reduction treatment, such as steam treatment, before or after grinding. The method matters for export: the European Union sets its maximum residue level for ethylene oxide in spices at the limit of quantification, so pepper treated with it cannot be sold there. If your product needs treated pepper, state the requirement and any method restrictions for your market in the specification, and ask how the treatment is validated.",
      },
      {
        heading: "Why heat is the enemy",
        text: "Grinding creates friction, and friction creates heat. The aromatic oils in pepper are volatile, so excess heat during milling drives off some of the aroma before the powder is even packed. Processors manage this through the choice of mill, the feed rate and, in some plants, chilled or cryogenic grinding. If aroma is critical to your product, ask your supplier how they keep milling temperatures under control and whether volatile oil is measured after grinding.",
      },
      {
        heading: "Sieving to the required grind",
        text: "After milling, the powder is sieved to separate it into the grind the buyer has ordered, whether fine table pepper or a coarser cracked texture. Consistent sieving gives an even product that blends well and flows smoothly. Agree the grind with your supplier at the start, and confirm it against a sample before the full order is produced.",
      },
      {
        heading: "Packing straight away",
        text: "Once ground, pepper starts to lose aroma to the air, so it should be packed promptly into sealed, lined packaging and given a lot code that links the bags to their test results. The shorter the time between grinding and packing, the more of the pepper's character reaches the buyer. Ask your supplier how the powder is handled between milling and packing, and how it is stored before dispatch.",
      },
      {
        heading: "Standards and references",
        text: "Commission Regulation (EU) 2015/868, which set the EU maximum residue level for ethylene oxide (sum of ethylene oxide and 2-chloroethanol) in spices at the limit of quantification, 0.1 mg/kg. ISO 959-1, Pepper (Piper nigrum L.), whole or ground, Part 1: Black pepper.",
      },
    ],
    // Black Pepper Powder in Seasonings, Meat Products and Ready Meals
    [
      {
        heading: "Seasoning blends",
        text: "Ground black pepper is one of the most used ingredients in savoury seasonings, from simple salt-and-pepper mixes to complex rubs and masalas. Seasoning makers look for a consistent grind and steady pungency, so that each batch tastes the same and flows evenly through their blending and filling lines. Agreeing the grind as a particle-size range and keeping a reference sample help keep blends consistent.",
      },
      {
        heading: "Meat and poultry products",
        text: "Sausages, burgers, cured meats and marinated poultry all rely on black pepper for warmth and depth. Meat processors often prefer a grind that suits the product, fine for smooth emulsions and coarser for visible speckling in sausages. Because pepper goes into raw meat mixes and brines, processors also pay close attention to its microbiological quality and agree the criteria with their supplier.",
      },
      {
        heading: "Ready meals, soups and sauces",
        text: "In ready meals, soups, gravies and creamy sauces, ground pepper adds warmth without changing the texture. Manufacturers usually want a fine grind that disperses evenly. In very pale sauces, black pepper shows as dark specks, which is why some recipes use white pepper instead. Because cooking and storage can soften the flavour, many run trial batches with a supplier sample to settle the right quantity and grind for each recipe.",
      },
      {
        heading: "Snacks, dressings and ready-to-eat foods",
        text: "Snack makers use ground pepper in chip and nut seasonings, crackers and savoury coatings, while dressing and condiment producers use it in mayonnaise, dips and salad dressings. In these products the pepper is often added after any cooking step, so it reaches the consumer without further heat treatment. That is why buyers for ready-to-eat uses commonly specify microbiologically treated pepper and ask for test results with each lot.",
      },
      {
        heading: "Food service and repacking",
        text: "Restaurants, caterers and repackers buy ground pepper in bulk for kitchens and for retail packing under their own labels. These buyers value a consistent product from one delivery to the next. Agree the grind, pack size, labelling and delivery schedule with your supplier to match how quickly the pepper is used or sold.",
      },
      {
        heading: "Frequently asked questions",
        text: "Practical questions from food manufacturers using ground black pepper.",
      },
      {
        heading: "Which grind should I choose?",
        level: 3,
        text: "Fine grinds disperse evenly in sauces, emulsions and seasonings; coarser grinds give visible specks and a stronger burst of flavour in sausages, rubs and toppings. Test the grind in your own product and write the agreed particle-size range into the specification.",
      },
      {
        heading: "Can I use whole peppercorns instead?",
        level: 3,
        text: "Some processors grind in-house for maximum aroma. Whole black pepper is also available; see our Black Pepper page, or ask our team which form suits your process.",
      },
    ],
  ],
  "coriander-seeds-powder": [
    // Coriander Seeds Powder Export Guide: Colour, Aroma and Packing
    [
      {
        heading: "In brief",
        text: "For an export order of coriander powder, agree four things before production: a written specification with an approved sample, the contaminant and microbiological tests your destination requires, packing that will keep the powder dry and aromatic through a long sea journey, and the documents and labels that must travel with it.",
      },
      {
        heading: "What importers expect",
        text: "Coriander seeds powder, widely known as dhania powder, is ground from the dried fruits, usually called seeds, of Coriandrum sativum. Importers and processors expect a mild, fresh, lightly citrusy aroma and an even colour from light greenish brown to tan. Because it is often the largest ingredient in a curry powder or masala, consistency from one shipment to the next matters a great deal to blenders.",
      },
      {
        heading: "Building the specification",
        text: "A workable specification for coriander powder usually covers colour and aroma against a reference sample, fineness, moisture, total and acid-insoluble ash as indicators of sand and soil, extraneous matter, and any contaminant and microbiological limits. Moisture is especially important for a powder that will spend weeks at sea: India's FSSAI standard sets a maximum of 9 per cent for coriander powder sold in India, and many buyers set their own limit on the specification.",
      },
      {
        heading: "Destination requirements",
        text: "Testing requirements are set by the importing country and by your customers, not by the product alone. In the European Union, for example, the general ochratoxin A limit of 15 micrograms per kilogram for dried spices applies to coriander, and pesticide residue limits, including the limit for ethylene oxide, apply to spices. Many food manufacturers also set microbiological criteria such as Salmonella absence. Confirm the current list for your market, and agree which results will accompany each lot, before the order is confirmed.",
      },
      {
        heading: "Packing for the journey",
        text: "Ground coriander loses its aroma to the air and can cake if it picks up moisture, so packing matters on a long sea journey. Lined bags or sealed inner liners inside a strong outer bag or carton help protect it. Plan how the cargo will be kept dry in the container, away from wet cargo and strong odours, and agree the palletising and marking your warehouse needs.",
      },
      {
        heading: "Documents and labelling",
        text: "A shipment typically travels with commercial documents such as the invoice, packing list and bill of lading, plus whatever origin, health or analysis certificates your destination and customers require. Bag markings usually include the product name, net weight, lot code and dates; retail or food-service packs must follow the labelling rules of the country of sale. Share these requirements early so they are prepared at packing rather than corrected on arrival.",
      },
      {
        heading: "Order quantity and planning",
        text: "Freshland Exports supplies coriander seeds powder from a minimum order of 500 kg. Share your quantity, packing, destination and timing early, so that seed can be selected and grinding planned close to dispatch, and the powder reaches you with as much of its aroma as possible.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions importers often ask before a first order of coriander powder.",
      },
      {
        heading: "Which tests should I ask for?",
        level: 3,
        text: "Start with what your destination requires by law, then add what your customers require. Moisture, ash, microbiology, mycotoxins and pesticide residues are common requests; agree the list and the laboratory before production.",
      },
      {
        heading: "Can I buy whole seed and grind it myself?",
        level: 3,
        text: "Yes. Whole coriander keeps its aroma longer than powder and suits buyers with their own mills. Whole coriander seeds are also available; see our Coriander Seeds page.",
      },
      {
        heading: "Standards and references",
        text: "ISO 2255, Coriander (Coriandrum sativum L.), whole or ground (powdered), Specification. FSSAI Food Products Standards and Food Additives Regulations, 2011, section 2.9.7, Coriander. Commission Regulation (EU) 2023/915, entry 1.2.17 (ochratoxin A in dried spices). Commission Regulation (EU) 2015/868 (ethylene oxide in spices). Confirm current requirements for your destination before shipment.",
      },
    ],
    // Sourcing Coriander Powder: From Whole Seed to Ground Spice
    [
      {
        heading: "It starts with the seed",
        text: "Coriander powder can only be as good as the seed it is ground from. Well-dried seeds with a good colour and fresh aroma give a bright, fragrant powder, while discoloured, weathered, damaged or old seeds give a dull one. Coriander is traded in different seed types and sizes, and their colour and aroma differ, so ask your supplier which seed they propose for your powder and how they check it before it reaches the mill.",
      },
      {
        heading: "Cleaning before milling",
        text: "Whole coriander arrives with dust, stems, chaff, stones and split or damaged seeds. Cleaning, sieving and, where needed, destoning remove as much of this as possible before grinding. For a powder this step is essential, because once the seed is milled, impurities are mixed through the whole lot and cannot be removed. Ash and acid-insoluble ash results on the certificate of analysis are a practical check on how well soil and sand were removed.",
      },
      {
        heading: "Grinding with care",
        text: "Coriander seed contains a volatile oil that gives the powder its citrusy note. Milling generates heat, and too much heat drives off some of that aroma. Processors manage this through their choice of mill, how hard it is run and how quickly the powder is cooled and packed. If aroma is critical to your blend, ask how the seed is ground and whether volatile oil is measured on the finished powder.",
      },
      {
        heading: "Ground to order",
        text: "Because ground coriander loses aroma faster than whole seed, many buyers prefer powder ground close to the time of dispatch rather than taken from long-held stock. Share your order timing early so that your supplier can plan grinding and packing around it. Asking for the grinding date or lot code on the bags makes it easy to see how fresh each delivery is.",
      },
      {
        heading: "Judging a sample",
        text: "When a sample arrives, compare it side by side with your reference in daylight. Look for an even colour without dark specks, smell it straight away for a fresh citrus note rather than a flat or musty one, and rub it between your fingers to check the fineness and dryness. A small test batch in your own blend or recipe tells you more than any description.",
      },
      {
        heading: "Building a steady supply",
        text: "Blenders and processors usually value a supplier who can deliver the same colour, aroma and fineness across many orders. Keep an approved reference sample, agree the specification in writing, and review each new lot against it. Regular communication about volumes and timing helps your supplier plan seed buying and grinding to keep your supply consistent through the year.",
      },
    ],
    // Ground Coriander in Curry Powders, Masalas and Bakery
    [
      {
        heading: "The base of curry powder",
        text: "Ground coriander is often the largest single ingredient in curry powders and many masalas. Its mild, warm flavour gives blends body and balance, carrying stronger spices such as chilli, cumin and pepper without overpowering them. Because it makes up so much of the blend, its colour and aroma have a direct effect on the look and taste of the finished product.",
      },
      {
        heading: "Masalas and seasoning mixes",
        text: "From garam masala and sambar powder to meat and vegetable masalas, coriander powder appears in a wide range of Indian spice mixes. Seasoning makers also use it in rubs, marinades and savoury blends for global markets. Blenders generally want a consistent fineness so that the powder mixes evenly and does not separate from other spices in the pack.",
      },
      {
        heading: "Curries, soups and ready meals",
        text: "In curries, gravies, soups and ready meals, ground coriander adds a gentle, rounded flavour and some body to sauces. Food manufacturers use it alongside other spices to build a balanced base, and usually settle the quantity through trial batches with a supplier sample before moving to full production. Adding it earlier in cooking gives a mellow background note; adding it later keeps more of its citrus character.",
      },
      {
        heading: "Bakery and pickles",
        text: "Coriander's warm, slightly sweet and citrusy note also suits baked goods such as spiced breads, biscuits and cakes, especially in European and Middle Eastern traditions. In pickles and chutneys, ground coriander adds depth and works well with mustard, fenugreek and chilli. These uses tend to favour a fresh, aromatic powder.",
      },
      {
        heading: "Food service and repacking",
        text: "Restaurants, caterers and repackers buy ground coriander in bulk for everyday cooking and for retail packs under their own labels. They usually look for a consistent product, packing that keeps the powder dry and aromatic, and reliable delivery. Agree the fineness, pack size, labelling and schedule with your supplier to match how quickly the stock is used.",
      },
      {
        heading: "Frequently asked questions",
        text: "Common questions from blenders and food manufacturers.",
      },
      {
        heading: "How fine should coriander powder be for blending?",
        level: 3,
        text: "Close to the fineness of the other spices in the blend, so that particles do not separate in the pack. Test the powder in your blend and record the agreed fineness on the specification.",
      },
      {
        heading: "Is ground coriander the same as dried coriander leaf?",
        level: 3,
        text: "No. Coriander powder is ground from the seeds and tastes warm and citrusy; the dried leaf, often called cilantro in North America, is a different herb with a different flavour.",
      },
    ],
  ],
};
