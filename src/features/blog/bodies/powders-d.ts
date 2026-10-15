import type { ArticleBody } from "@/features/products/blog";

/**
 * Full text for the powders-d articles in features/products/blog.ts, by product
 * slug, in the same order as that product's articles.
 */
export const powdersDBodies: Record<string, readonly [ArticleBody, ArticleBody, ArticleBody]> = {
  "dry-ginger-powder": [
    // Dry Ginger Powder Quality: Colour, Pungency and Fibre
    [
      {
        heading: "In brief",
        text: "Check a sample of dry ginger powder for colour, a warm lemony aroma, a clear peppery heat and a soft, even texture. Then agree in writing whether you need bleached or unbleached ginger, the mesh size, the moisture and volatile oil limits, and the contaminant tests your market requires.",
      },
      {
        heading: "What sonth should look like",
        text: "Dry ginger powder, or sonth, is ground from dried ginger rhizomes, and good powder is a pale cream to light beige. A darker brown or greyish tint can mean the rhizomes were dried slowly, scorched, stored damp or milled with a lot of dirty skin; our guide to [how dry ginger powder is made](/blog/from-rhizome-to-sonth-how-dry-ginger-powder-is-made) explains where each of these can happen. Judge colour in daylight and against a reference sample you have agreed, because some natural variation between lots is normal and should not be mistaken for a defect.",
      },
      {
        heading: "Bleached or unbleached",
        text: "Dried ginger is traded both unbleached and bleached. Bleached ginger has traditionally been treated with lime to give a paler, more uniform surface, which raises its calcium and ash content; India's FSSAI standard therefore sets different ash and calcium oxide limits for the two types (FSSAI Food Products Standards and Food Additives Regulations, 2011, section 2.9.11). The choice affects colour, labelling and specification, so state which type you need, and check that the treatment is acceptable in your destination market.",
      },
      {
        heading: "Smell before you taste",
        text: "Open the sample bag and smell it at once. Fresh sonth has a warm, spicy and slightly lemony aroma that is easy to recognise. A faint, flat or dusty smell suggests old stock or long exposure to air, while a musty or sour note is a warning of moisture during drying or storage. Aroma fades faster from a powder than from [whole dried ginger](/blog/fresh-and-dried-ginger-what-importers-should-check), so the smell test tells you a great deal about how the lot has been kept. Where aroma strength matters, a minimum volatile oil content can be written into the specification.",
      },
      {
        heading: "Pungency and taste",
        text: "The heat of dry ginger is what most buyers pay for. Taste a small pinch: good powder gives a clear, peppery warmth that builds and lingers, rather than a weak or bitter finish. Pungency varies with the ginger used and how it was dried, so if your recipe depends on a consistent heat level, agree how it will be assessed and confirm it with each quotation rather than relying on a description.",
      },
      {
        heading: "Fibre and fineness",
        text: "Ginger is a fibrous rhizome, and those fibres end up in the powder. Rub a little between your fingers: a well-milled powder feels soft and even, while a coarse, stringy or gritty texture points to uneven grinding or poor sieving. The right fineness depends on your use, since beverage and instant mixes usually need a finer grind than spice blends, so state the mesh size you need on the specification sheet.",
      },
      {
        heading: "Agree the paperwork early",
        text: "Before a first order, ask for a sample, a specification sheet and the test reports your market expects. For reference, the same FSSAI standard sets a maximum of 12 per cent moisture and a minimum of 1.0 per cent volatile oil on a dry basis for dried ginger powder. Dried ginger is also named in the EU limits for aflatoxins, so mycotoxin testing is a common requirement for that market (Commission Regulation (EU) 2023/915, entry 1.1.15). Recognised product standards for dried ginger include Codex CXS 343-2021, Standard for Dried or Dehydrated Ginger, and ISO 1003, which buyers can refer to when drafting a specification. Packing and labelling matter too; our guide to [exporting dry ginger powder](/blog/exporting-dry-ginger-powder-packaging-labelling-and-shipping) covers them. Write these points down and confirm them per lot. Common parameters include:",
        list: {
          items: [
            "Moisture",
            "Volatile oil",
            "Ash, with calcium oxide for bleached ginger",
            "Extraneous matter",
            "Microbiology",
            "Aflatoxins, where your market sets limits",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Good sonth is pale, aromatic, clearly pungent and soft to the touch, and each of these qualities can be checked on a sample before you commit. Put the ginger type, mesh size, moisture, volatile oil and contaminant limits in writing so that every lot is judged the same way. To discuss a specification for your use, [request a quotation](/contact).",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about dry ginger powder quality.",
        faq: [
          {
            question: "What colour should good dry ginger powder be?",
            answer: "A pale cream to light beige. A darker brown or greyish tint can mean slow drying, scorching, damp storage or a lot of dirty skin milled in with the rhizomes.",
          },
          {
            question: "What is the difference between bleached and unbleached dry ginger?",
            answer: "Bleached ginger has traditionally been treated with lime for a paler, more uniform surface, which raises its calcium and ash content. India's FSSAI standard sets different ash and calcium oxide limits for the two types.",
          },
          {
            question: "How can I tell if dry ginger powder is old?",
            answer: "Smell it as soon as the bag is opened. A faint, flat or dusty smell suggests old stock or long exposure to air, while a musty or sour note points to moisture during drying or storage.",
          },
          {
            question: "Why does some ginger powder feel stringy?",
            answer: "Ginger is a fibrous rhizome, and a coarse, stringy or gritty texture points to uneven grinding or poor sieving. A well-milled powder feels soft and even.",
          },
          {
            question: "What moisture and volatile oil limits apply to dry ginger powder in India?",
            answer: "FSSAI sets a maximum of 12 per cent moisture and a minimum of 1.0 per cent volatile oil on a dry basis for dried ginger powder.",
          },
        ],
      },
    ],
    // From Rhizome to Sonth: How Dry Ginger Powder Is Made
    [
      {
        heading: "The process at a glance",
        text: "Dry ginger powder is made in a short sequence of steps, and each one affects the colour, aroma and texture of the finished powder:",
        list: {
          ordered: true,
          items: [
            "Harvest mature rhizomes and wash and sort them",
            "Peel or scrape the skin, where the style requires it",
            "Dry the ginger to roughly 10 per cent moisture",
            "Bleach, only where the buyer specifies it",
            "Clean, grind and sieve to the agreed mesh size",
            "Pack straight away and code each lot",
          ],
        },
      },
      {
        heading: "Choosing the rhizomes",
        text: "Dry ginger powder starts with mature rhizomes. Ginger lifted early, around five to six months after planting, is tender and juicy and suits fresh use, pickles and candy. For dried ginger, harvesting is recommended later, at about seven to eight months, once the leaves have turned yellow and begun to dry, when the rhizomes have built up more fibre, flavour and dry matter (ICAR-Indian Institute of Spices Research, Ginger extension pamphlet, November 2015). The rhizomes are washed to remove soil, and damaged, mouldy or shrivelled pieces are set aside.",
      },
      {
        heading: "Peeling or scraping",
        text: "The outer skin of ginger is often scraped or peeled before drying. Removing it gives a paler, cleaner powder and helps the rhizome dry more evenly, while unpeeled ginger produces a darker, more rustic product. Some buyers specify one style for its colour and appearance, so it is worth asking how the ginger was prepared when you compare samples from different suppliers; our guide to [dry ginger powder quality: colour, pungency and fibre](/blog/dry-ginger-powder-quality-colour-pungency-and-fibre) covers what to look for.",
      },
      {
        heading: "Drying the ginger",
        text: "Drying is the step that turns fresh ginger into sonth. Fresh rhizomes are around four-fifths water, and they are dried in the sun or in driers to roughly 10 per cent moisture, until they are hard and brittle enough to snap cleanly. That loss of water is why only about a fifth to a quarter of the fresh weight is recovered as dried ginger (the same pamphlet). Slicing speeds drying, and control matters: drying too slowly invites mould, while too much heat can darken the ginger and drive off its aromatic compounds. Our guide to [what importers should check in fresh and dried ginger](/blog/fresh-and-dried-ginger-what-importers-should-check) covers the whole rhizome before it is milled.",
      },
      {
        heading: "Bleaching, where specified",
        text: "Some dried ginger is bleached, traditionally by treating it with lime, to give a paler, more uniform appearance. This is a buyer choice rather than a necessary step, and it changes the product's calcium and ash content, which is why India's FSSAI standard sets separate limits for bleached and unbleached ginger (FSSAI Food Products Standards and Food Additives Regulations, 2011, section 2.9.11). If you need unbleached ginger, say so clearly when you enquire.",
      },
      {
        heading: "Grinding and sieving",
        text: "The dried ginger is cleaned again to remove dust and foreign matter, then milled. Because ginger is fibrous, grinding is usually followed by sieving to separate coarse particles and produce an even powder. The grind can be adjusted to the buyer's needs, from a very fine powder for drink mixes to a slightly coarser texture for spice blends, and the agreed mesh size is checked before packing. Our [illustrative case study on botanical powders for herbal tea and beverage blends](/case-studies/botanical-powders-for-herbal-tea-and-beverage-blends) looks at fine powders for drinks.",
      },
      {
        heading: "Packing straight away",
        text: "Freshly milled ginger powder is packed quickly into clean, lined packaging so it does not pick up moisture or lose aroma while waiting. Packing format, net weight and labelling follow buyer requirements, and each lot is coded so it can be matched to its test results. From there, the powder is stored in a cool, dry place until dispatch.",
      },
      {
        heading: "Conclusion",
        text: "Good sonth depends on mature rhizomes, careful drying and even milling, with bleaching added only when a buyer asks for it. Knowing these steps helps you ask the right questions about preparation, drying and mesh size when you compare samples. To discuss powder milled to your specification, [request a quotation](/contact).",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about how dry ginger powder is made.",
        faq: [
          {
            question: "When is ginger harvested for drying?",
            answer: "At about seven to eight months after planting, once the leaves have turned yellow and begun to dry. Ginger lifted at five to six months is more tender and suits fresh use.",
          },
          {
            question: "How much dried ginger comes from fresh ginger?",
            answer: "About a fifth to a quarter of the fresh weight. Fresh rhizomes are around four-fifths water and are dried to roughly 10 per cent moisture.",
          },
          {
            question: "Is dry ginger always peeled before drying?",
            answer: "It is often scraped or peeled, which gives a paler, cleaner powder. Unpeeled ginger produces a darker, more rustic product, so ask how the ginger was prepared.",
          },
          {
            question: "Is bleaching a necessary step?",
            answer: "No. Bleaching is a buyer choice, and it changes the product's calcium and ash content. If you need unbleached ginger, say so when you enquire.",
          },
          {
            question: "Why is ginger powder sieved after grinding?",
            answer: "Ginger is fibrous, so sieving separates coarse particles and gives an even powder. The agreed mesh size is checked before packing.",
          },
        ],
      },
    ],
    // Exporting Dry Ginger Powder: Packaging, Labelling and Shipping
    [
      {
        heading: "Packaging that keeps moisture out",
        text: "Dry ginger powder readily absorbs moisture from the air, and damp powder cakes, loses aroma and is more prone to spoilage. Export packing should therefore use lined bags, sealed inner liners or other moisture-resistant formats, with outer packaging strong enough to survive handling. Agree the pack size, liner type and palletising with your supplier, as these choices matter more for a powder than for whole dried ginger.",
      },
      {
        heading: "Testing for the destination",
        text: "The tests a shipment needs are set by the importing country and your customers. In the European Union, for example, dried ginger has its own entry in the aflatoxin limits (5 micrograms per kilogram for aflatoxin B1 and 10 for total aflatoxins), the ochratoxin A limit for dried spices is 15 micrograms per kilogram, and the maximum residue level for ethylene oxide in spices is set at the limit of quantification (Commission Regulation (EU) 2023/915, entries 1.1.15 and 1.2.17; Commission Regulation (EU) 2015/868). Microbiological criteria are common too. Agree the list and the laboratory before production, and confirm the current rules for your market, as they change over time.",
      },
      {
        heading: "Labelling for the destination",
        text: "Each market has its own labelling rules for spices, covering the product name, net weight, lot or batch code, dates and the importer's details. Some buyers also want the local name, such as sonth, alongside dry ginger powder, and bleached ginger may need to be described as such. Share your label requirements and artwork early, so that bags are printed or stickered correctly at packing rather than relabelled after arrival.",
      },
      {
        heading: "Documents",
        text: "The exact documents depend on the destination, so confirm the list before the order is placed. Asking for the specification sheet and lot test reports to accompany each shipment makes receiving checks faster, and our guide to [dry ginger powder quality](/blog/dry-ginger-powder-quality-colour-pungency-and-fibre) explains what the specification should cover. Codex CXS 343-2021 is a recognised product standard for dried ginger that buyers can refer to when drafting one. A shipment of ginger powder usually travels with:",
        list: {
          items: [
            "The commercial invoice",
            "The packing list",
            "The bill of lading",
            "Whatever origin, health or analysis certificates the importing country and your customers expect",
          ],
        },
      },
      {
        heading: "Protecting the powder in transit",
        text: "Sea freight can expose cargo to heat and humidity, and containers can sweat as temperatures change during the voyage. Dry, clean containers, sound packaging and sensible stowage help keep the powder in good condition. On arrival, move the goods to a cool, dry store quickly and check a sample from several bags for:",
        list: {
          items: ["Caking", "Off-odours", "Packaging damage"],
        },
      },
      {
        heading: "Order quantity and repeat supply",
        text: "Freshland Exports supplies dry ginger powder with a minimum order quantity of 500 kg. When you [request a quotation](/contact), share your forecast volumes, preferred packing and delivery windows. Many buyers use the powder steadily through the year in blends, bakery and beverages, and our [illustrative case study on spiced tea masala ingredients](/case-studies/spiced-tea-masala-ingredients) looks at one such use. Planning ahead lets milling and packing be scheduled so that each lot arrives fresh rather than sitting in a warehouse. Our team confirms availability and packaging with each enquiry.",
      },
      {
        heading: "Conclusion",
        text: "Exporting dry ginger powder well comes down to keeping moisture out, testing against the destination's limits and getting labels and documents right before the goods leave. Settle packaging, tests and paperwork at the enquiry stage, and check a sample from several bags as soon as the shipment arrives.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about exporting dry ginger powder.",
        faq: [
          {
            question: "What EU aflatoxin limits apply to dried ginger?",
            answer: "Dried ginger has its own entry in the EU aflatoxin limits: 5 micrograms per kilogram for aflatoxin B1 and 10 for total aflatoxins.",
          },
          {
            question: "Is there an EU ochratoxin A limit for ginger powder?",
            answer: "Yes. The EU ochratoxin A limit for dried spices is 15 micrograms per kilogram.",
          },
          {
            question: "What packaging suits dry ginger powder for export?",
            answer: "Lined bags, sealed inner liners or other moisture-resistant formats, with outer packaging strong enough to survive handling. Agree the pack size, liner type and palletising with your supplier.",
          },
          {
            question: "Does bleached ginger need to be labelled as bleached?",
            answer: "In some markets bleached ginger may need to be described as such. Share your label requirements and artwork early so bags are labelled correctly at packing.",
          },
          {
            question: "What should I check when a ginger powder shipment arrives?",
            answer: "Move the goods to a cool, dry store quickly and check a sample from several bags for caking, off-odours and packaging damage.",
          },
        ],
      },
    ],
  ],
  "clove-powder": [
    // Buying Clove Powder: Aroma, Colour and Purity Checks
    [
      {
        heading: "Why powder needs closer checks",
        text: "Whole cloves are easy to inspect: you can see the heads, count the stems and press a bud to feel its oil, as our guide to [inspecting whole cloves](/blog/clove-quality-head-intact-colour-and-oil-content) explains. Once cloves are ground, most of those clues disappear. That makes clove powder harder to judge by eye, and it is why buyers rely more on smell, colour, a simple taste test and agreed specifications when they assess a sample before placing an order. Our [illustrative case study on choosing between whole cloves and clove powder](/case-studies/whole-cloves-or-clove-powder) looks at that trade-off.",
      },
      {
        heading: "Aroma is the first test",
        text: "Good clove powder smells strong, sweet and warm the moment the bag is opened, and a pinch rubbed between the fingers should feel very slightly oily. A weak, flat or dusty smell suggests old stock, poor storage or the use of spent cloves from which oil has already been extracted; our guide on [why clove powder loses aroma faster than whole cloves](/blog/why-clove-powder-loses-aroma-faster-than-whole-cloves) explains the storage side. Compare samples side by side, because aroma differences between lots are often obvious when they sit next to each other. A minimum volatile oil content on the specification turns this check into a number.",
      },
      {
        heading: "Colour and texture",
        text: "Clove powder is a dark reddish brown. A noticeably paler, greyer or woody-looking powder can indicate that clove stems or other plant material have been milled in with the buds, since stems are cheaper and less aromatic. Texture should be even and free-flowing, without lumps, grit or coarse fibres. Agree the mesh size your process needs and check a sample against it.",
      },
      {
        heading: "Purity, moisture and foreign matter",
        text: "Because adulteration is easier to hide in a ground spice, purity should be stated clearly in the specification rather than assumed. Ask how the cloves were cleaned before grinding and whether stems are removed. For reference, India's FSSAI standard sets a maximum of 10 per cent moisture for clove powder (FSSAI Food Products Standards and Food Additives Regulations, 2011, section 2.9.6). Recognised product standards for cloves include Codex CXS 344-2021, Standard for Cloves, and ISO 2254, which buyers can refer to when drafting a specification. Confirm the parameters with each quotation and check them against the documents for every lot. Agree limits for:",
        list: {
          items: ["Moisture", "Volatile oil", "Ash", "Foreign matter"],
        },
      },
      {
        heading: "Food-safety tests",
        text: "Beyond purity, agree the food-safety tests your destination and customers expect, such as microbiology, pesticide residues and mycotoxins. In the European Union, for example, the general ochratoxin A limit for dried spices, 15 micrograms per kilogram, applies to cloves (Commission Regulation (EU) 2023/915, entry 1.2.17).",
      },
      {
        heading: "Start with a sample",
        text: "The simplest protection is to approve a sample before production and keep part of it as a reference. When the shipment arrives, compare a few bags against that reference for aroma, colour and texture. Pair the sample with a specification sheet and agreed packaging, and you have a clear standard that both buyer and supplier can work to on repeat orders. Freshland Exports supplies clove powder with a minimum order quantity of 500 kg. When you [request a quotation](/contact), share:",
        list: {
          items: [
            "The mesh size your process needs",
            "Your limits for moisture, volatile oil, ash and foreign matter",
            "The food-safety tests your destination and customers expect",
            "Your packaging requirements",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Grinding hides most of the clues that whole cloves show, so aroma, colour, texture and a written specification do most of the work when buying clove powder. Approve a sample, keep part of it as a reference and check every lot against it on arrival.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask when assessing clove powder.",
        faq: [
          {
            question: "What colour should clove powder be?",
            answer: "A dark reddish brown, with an even, free-flowing texture and no lumps, grit or coarse fibres.",
          },
          {
            question: "How can I tell if clove powder contains stems?",
            answer: "A noticeably paler, greyer or woody-looking powder can indicate that stems or other plant material were milled in with the buds. Ask whether stems are removed before grinding.",
          },
          {
            question: "What does a weak smell in clove powder indicate?",
            answer: "A weak, flat or dusty smell suggests old stock, poor storage or spent cloves from which oil has already been extracted.",
          },
          {
            question: "What moisture limit applies to clove powder in India?",
            answer: "India's FSSAI standard sets a maximum of 10 per cent moisture for clove powder.",
          },
          {
            question: "Which EU ochratoxin A limit applies to clove powder?",
            answer: "The general EU ochratoxin A limit for dried spices, 15 micrograms per kilogram, applies to cloves.",
          },
        ],
      },
    ],
    // Why Clove Powder Loses Aroma Faster Than Whole Cloves
    [
      {
        heading: "Grinding opens the oil",
        text: "The warmth of cloves comes from aromatic oils held inside the dried bud, chiefly eugenol. In a whole clove those oils are protected by the bud's own structure, but grinding breaks that structure open and spreads the oil across a huge surface area. From that moment the aroma begins to escape far more quickly, which is why ground cloves need tighter storage than whole ones to stay at their best.",
      },
      {
        heading: "Seal against air",
        text: "Air carries aroma away and slowly dulls the flavour of any ground spice. Clove powder keeps best in lined bags, sealed inner liners or airtight containers with as little headspace as practical. Once a bulk bag is opened, reseal it tightly or transfer the remaining powder to a smaller closed container, rather than leaving it loosely folded in the store.",
      },
      {
        heading: "Keep it cool and dark",
        text: "Heat speeds the loss of volatile oils, and strong light can fade both colour and aroma. Store clove powder in a cool, shaded area, away from ovens, sunny walls and roof spaces that heat up during the day. Steady conditions matter as well: repeated warming and cooling can draw moisture into packaging and shorten the useful life of the powder.",
      },
      {
        heading: "Moisture and odours",
        text: "Clove powder can absorb moisture from humid air, which leads to caking and, in time, a musty smell. Its powerful scent can also transfer to nearby goods, and it can pick up other odours. In the store:",
        list: {
          items: [
            "Keep it off the floor on pallets",
            "Keep it away from damp walls and wet-process areas",
            "Use clean, dry scoops",
            "Store it apart from strongly smelling products and chemicals",
          ],
        },
      },
      {
        heading: "Rotate stock and buy to plan",
        text: "The surest way to use clove powder at full strength is to avoid holding it too long. Our guide to [aroma, colour and purity checks for clove powder](/blog/buying-clove-powder-aroma-colour-and-purity-checks) covers judging a lot on arrival; after that:",
        list: {
          items: [
            "Work on a first-in, first-out basis",
            "Label opened containers with the date",
            "Size orders to match your production rather than buying far ahead",
            "Agree a best-before period and storage conditions with your supplier instead of relying on a general figure",
          ],
        },
      },
      {
        heading: "Whole cloves for longer storage",
        text: "Some processors keep whole cloves for long-term stock and buy powder only for near-term use, or grind in-house as needed; our guide to [storing cloves to keep their aromatic oils](/blog/storing-cloves-to-keep-their-aromatic-oils) covers the whole spice. Whole cloves are also available; see our [whole cloves product page](/products/cloves), or ask our team which form suits your schedule.",
      },
      {
        heading: "Conclusion",
        text: "Clove powder loses aroma faster than whole cloves because grinding exposes its oils, so air, heat, light and moisture all need controlling. Seal opened bags, store the powder cool and dry, rotate stock and buy to your production plan. To agree packaging and order sizes that suit your schedule, [request a quotation](/contact).",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about keeping clove powder aromatic.",
        faq: [
          {
            question: "Why does clove powder lose aroma faster than whole cloves?",
            answer: "In a whole clove the aromatic oils are protected by the bud's structure. Grinding breaks that structure and spreads the oil across a huge surface area, so the aroma escapes far more quickly.",
          },
          {
            question: "What packaging keeps clove powder fresh?",
            answer: "Lined bags, sealed inner liners or airtight containers with as little headspace as practical. Reseal opened bulk bags tightly or move the powder to a smaller closed container.",
          },
          {
            question: "Where should clove powder be stored?",
            answer: "In a cool, shaded area away from ovens, sunny walls and roof spaces that heat up during the day. Steady conditions help, because repeated warming and cooling can draw moisture into packaging.",
          },
          {
            question: "Can clove powder affect other goods in the store?",
            answer: "Yes. Its powerful scent can transfer to nearby goods, and it can pick up other odours, so store it apart from strongly smelling products and chemicals.",
          },
          {
            question: "Should I keep whole cloves or clove powder for long-term stock?",
            answer: "Some processors keep whole cloves for long-term stock and buy powder only for near-term use, or grind in-house as needed.",
          },
        ],
      },
    ],
    // Using Clove Powder in Meat, Sauce and Bakery Production
    [
      {
        heading: "A spice that dominates easily",
        text: "Clove is one of the most powerful spices in a production kitchen, and in powder form its flavour is released quickly and evenly. That makes it efficient, but also easy to overdo: too much gives a medicinal, numbing edge that can overwhelm a product. Most manufacturers use it as a supporting note and set the dose through trial batches rather than by scaling up a home recipe.",
      },
      {
        heading: "Meat products and marinades",
        text: "Ground cloves are a traditional part of seasoning for sausages, cured and cooked meats, and many marinades and rubs. In powder form they mix evenly into dry seasoning blends and brines, avoiding hard whole buds in the finished product. Because the flavour carries strongly through cooking and smoking, processors usually blend clove with milder spices such as pepper, nutmeg and coriander. Our [illustrative case study on black pepper for meat and savoury seasoning](/case-studies/black-pepper-for-meat-and-savoury-seasoning) looks at one of those partner spices.",
      },
      {
        heading: "Sauces, ketchups and chutneys",
        text: "Clove powder adds warmth and depth to tomato ketchups, barbecue and brown sauces, chutneys and pickles. It disperses well in liquid systems, but it is best added to a pre-mix of dry ingredients first so it does not clump. Heat processing can soften some of its sharper notes, so final flavour checks are best done on the finished, cooled sauce rather than during cooking.",
      },
      {
        heading: "Bakery and sweet goods",
        text: "In bakery, clove powder is a key part of mixed spice and pumpkin spice blends, and it appears in spiced cakes, biscuits, fruit pies and seasonal products. Its dark colour can slightly tint pale doughs and batters, which is usually welcome in spiced lines. Adding it with the flour or as part of a pre-blended spice mix helps spread it evenly through the batch. Our [illustrative case study on warm spice powders for bakery and confectionery](/case-studies/warm-spice-powders-for-bakery-and-confectionery) looks at this use from a baker's side.",
      },
      {
        heading: "Consistency from lot to lot",
        text: "Because clove powder is used at small inclusion rates, a weaker or stronger lot can change the taste of a product noticeably. Our team confirms specifications and packaging with each enquiry. To keep strength steady from lot to lot:",
        list: {
          ordered: true,
          items: [
            "Agree a specification with your supplier, including a minimum volatile oil content if strength matters",
            "Agree a reference sample",
            "Check each new lot against it; our guide to [checking clove powder for aroma, colour and purity](/blog/buying-clove-powder-aroma-colour-and-purity-checks) sets out how",
            "Keep good storage so that the powder's strength does not drift while it waits to be used",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Clove powder works best as a supporting note, dosed through trial batches and added with the other dry ingredients so it spreads evenly. Holding each lot to an agreed specification and reference sample keeps meat products, sauces and bakery lines tasting the same from batch to batch. To discuss clove powder for your production, [request a quotation](/contact).",
      },
      {
        heading: "Frequently asked questions",
        text: "Common questions from food manufacturers.",
        faq: [
          {
            question: "Why does clove taste numbing in my product?",
            answer: "Usually the dose is too high for the recipe or the lot is stronger than the last. Reduce the inclusion in a trial batch and check new lots against your reference sample.",
          },
          {
            question: "Should clove be added before or after cooking?",
            answer: "Clove's flavour survives cooking well, so it is usually added with the other dry ingredients. Check the final flavour on the cooled product.",
          },
          {
            question: "How do I stop clove powder clumping in sauces?",
            answer: "Add it to a pre-mix of dry ingredients first rather than straight into the liquid. It then disperses evenly.",
          },
          {
            question: "Will clove powder change the colour of a dough?",
            answer: "Its dark colour can slightly tint pale doughs and batters, which is usually welcome in spiced lines.",
          },
          {
            question: "Which spices are usually blended with clove in meat seasonings?",
            answer: "Milder spices such as pepper, nutmeg and coriander, because clove's flavour carries strongly through cooking and smoking.",
          },
        ],
      },
    ],
  ],
};
