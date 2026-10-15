import type { ArticleBody } from "@/features/products/blog";

/**
 * Full text for the spices-b articles in features/products/blog.ts, by product
 * slug, in the same order as that product's articles.
 */
export const spicesBBodies: Record<string, readonly [ArticleBody, ArticleBody, ArticleBody]> = {
  cloves: [
    // Clove Quality: Head Intact, Colour and Oil Content
    [
      {
        heading: "Look for the head",
        text: "A whole clove is a dried flower bud: a slender stem topped by a small round head made of unopened petals. Buyers prize cloves where that head is still in place, and headless cloves are usually counted against a lot when it is graded. A lot with many headless cloves, or loose heads rattling at the bottom of the bag, has usually been handled roughly or dried too hard, and it will look and smell weaker.",
      },
      {
        heading: "Colour tells a story",
        text: "Well-dried cloves have a rich, even reddish-brown to dark brown colour. Very pale, washed-out pieces can point to buds picked at the wrong stage or dried unevenly, while a dull, greyish or dusty surface often means old stock. Some natural variation is normal, so compare a sample against the reference you agreed rather than expecting every clove to match exactly.",
      },
      {
        heading: "Stems and foreign matter",
        text: "Clove stems are a by-product of harvesting and have far less aroma than the buds. A small amount can find its way into any lot, so check a sample for dust, stones and broken pieces before a full order is packed. Buyers usually set limits on the specification sheet for:",
        list: {
          items: [
            "Stems",
            "Headless cloves",
            "Other foreign matter",
          ],
        },
      },
      {
        heading: "Aroma and oil",
        text: "The value of a clove lies in its aromatic oil. A simple check is to press a clove with a fingernail: good stock feels slightly oily and releases a strong, warm scent. Cloves that feel dry and brittle and smell faint have lost much of that oil. If oil content matters to your use, as it does for [clove oil extraction](/blog/cloves-in-spice-blends-baking-and-oil-extraction), agree how it will be assessed and confirm it per order.",
      },
      {
        heading: "Moisture and soundness",
        text: "Cloves must be dry enough to resist mould but not so over-dried that they shatter in handling. Snap a few: they should be firm, not soft or bendy. Ask for the moisture limit to be stated on the specification sheet, and look for any clumping, musty smell or insect damage when the sample arrives; our guide to [storing cloves to keep their aromatic oils](/blog/storing-cloves-to-keep-their-aromatic-oils) covers care after delivery. Freshland Exports supplies whole cloves with a minimum order quantity of 100 kg to 500 kg. When you [request a quotation](/contact), share the colour you expect, your limits for stems, headless cloves and foreign matter, any oil content needs, the moisture limit and your packing.",
      },
      {
        heading: "Conclusion",
        text: "Good whole cloves keep their heads, show an even reddish-brown to dark brown colour, carry few stems and still feel oily when pressed. Put those points on the specification sheet and check a sample against them; if you are still deciding on the form, our [illustrative case study on whole cloves or clove powder](/case-studies/whole-cloves-or-clove-powder) compares the two.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about clove quality.",
        faq: [
          {
            question: "Why do buyers check whether clove heads are intact?",
            answer: "Buyers prize cloves with the head in place, and headless cloves are usually counted against a lot when it is graded. Loose heads at the bottom of the bag suggest rough handling or drying that was too hard.",
          },
          {
            question: "What colour should good whole cloves be?",
            answer: "A rich, even reddish-brown to dark brown. Very pale pieces can point to picking at the wrong stage or uneven drying, while a dull, greyish surface often means old stock.",
          },
          {
            question: "How can I check the oil in a clove sample?",
            answer: "Press a clove with a fingernail: good stock feels slightly oily and releases a strong, warm scent. Dry, brittle cloves with a faint smell have lost much of their oil.",
          },
          {
            question: "Why limit stems in a clove lot?",
            answer: "Stems are a by-product of harvesting and have far less aroma than the buds, so buyers usually set a limit on them alongside headless cloves and other foreign matter.",
          },
          {
            question: "How dry should whole cloves be?",
            answer: "Dry enough to resist mould but not so over-dried that they shatter in handling. They should snap firm rather than feel soft or bendy, and the moisture limit belongs on the specification sheet.",
          },
        ],
      },
    ],
    // Storing Cloves to Keep Their Aromatic Oils
    [
      {
        heading: "Why aroma escapes",
        text: "The scent of cloves comes from volatile oils that slowly evaporate once the buds are dried. Heat speeds that loss, open air carries it away, and moisture invites mould. Good storage is about slowing all three, so that the cloves you sell or grind months later still smell and taste the way they did when they were packed. Ground cloves are more exposed still, as our article on [why clove powder loses aroma faster than whole cloves](/blog/why-clove-powder-loses-aroma-faster-than-whole-cloves) explains.",
      },
      {
        heading: "Seal it in",
        text: "Cloves keep best in packing that limits air exchange. Lined bags, sealed inner liners or airtight containers hold the aroma far better than loose sacks. Once a bulk bag is opened, reseal it tightly or move the remaining stock into a closed container rather than leaving it to breathe in a warm store.",
      },
      {
        heading: "Cool, dry and dark",
        text: "Store cloves in a cool, dry place, with bags on pallets off the floor. Agree the storage conditions that suit your stock with your supplier rather than relying on a single fixed figure. Keep them away from:",
        list: {
          items: [
            "Direct sunlight",
            "Sources of heat such as roofs, walls that face the sun or machinery",
            "Damp walls",
          ],
        },
      },
      {
        heading: "Keep strong smells apart",
        text: "Cloves both give off and take on strong odours. Store them away from chemicals, fuels, cleaning products and other goods with heavy smells, and think about how shared warehouse space or mixed containers might affect them. Separating them also stops clove aroma transferring to more delicate products nearby, such as cardamom, where [protecting the green colour and fragrance](/blog/protecting-cardamom-s-green-colour-and-fragrance) needs the same care.",
      },
      {
        heading: "Rotate and check",
        text: "Use stock in the order it arrived and check it at intervals, using the same signs described in our guide to [clove quality, head, colour and oil content](/blog/clove-quality-head-intact-colour-and-oil-content). Remove any affected bags promptly so that a small problem does not spread through the store. At each check:",
        list: {
          items: [
            "Press a few cloves to see whether they still release oil and scent",
            "Look for clumping or damp patches",
            "Look for insects",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Cloves hold their aroma when oil loss is slowed: sealed packing, a cool, dry and dark store, distance from strong smells and steady rotation. Agree storage conditions with your supplier, and mention how you will store the stock when you [request a quotation](/contact) so that packing can be matched to it.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about storing cloves.",
        faq: [
          {
            question: "Why do stored cloves lose their scent?",
            answer: "Their scent comes from volatile oils that slowly evaporate after drying. Heat speeds the loss, open air carries it away, and moisture invites mould.",
          },
          {
            question: "What packing keeps cloves aromatic?",
            answer: "Packing that limits air exchange. Lined bags, sealed inner liners or airtight containers hold the aroma far better than loose sacks.",
          },
          {
            question: "What should I do with an opened bulk bag of cloves?",
            answer: "Reseal it tightly or move the remaining stock into a closed container, rather than leaving it to breathe in a warm store.",
          },
          {
            question: "Can cloves share a warehouse with other goods?",
            answer: "Keep them away from chemicals, fuels, cleaning products and other heavily scented goods, because cloves both give off and take on strong odours.",
          },
          {
            question: "How do I check cloves already in storage?",
            answer: "Press a few to see whether they still release oil and scent, and look for clumping, damp patches or insects. Remove affected bags promptly.",
          },
        ],
      },
    ],
    // Cloves in Spice Blends, Baking and Oil Extraction
    [
      {
        heading: "Spice blends and masalas",
        text: "Cloves are a core note in many savoury blends, including garam masala and the spice mixes used for biryani and slow-cooked meat dishes. Blenders usually want whole cloves with good aroma and low stem content, so that the strength of the finished blend stays predictable from batch to batch; our [illustrative case study on matching a house garam masala recipe](/case-studies/matching-a-house-garam-masala-recipe) shows how that is specified.",
      },
      {
        heading: "Whole cloves in cooking",
        text: "Food-service kitchens and retail packers often sell or use cloves whole, to be fried in oil at the start of a dish or added to rice, stews and pickles. Here appearance matters as much as aroma. Shoppers and chefs expect:",
        list: {
          items: [
            "Intact heads",
            "An even brown colour",
            "Very little dust in the pack",
          ],
        },
      },
      {
        heading: "Baking and sweet goods",
        text: "Ground cloves bring warmth to spiced cakes, biscuits, puddings and festive bakes, often alongside cinnamon and nutmeg. Bakery manufacturers may buy whole cloves to grind themselves or source the ground spice, and they generally look for a consistent flavour strength so that recipes do not need adjusting each time. Our article on [using clove powder in meat, sauce and bakery production](/blog/using-clove-powder-in-meat-sauce-and-bakery-production) covers the ground spice, and our [illustrative case study on warm spice powders for bakery and confectionery](/case-studies/warm-spice-powders-for-bakery-and-confectionery) shows a typical brief.",
      },
      {
        heading: "Oil extraction",
        text: "Clove oil is distilled from the buds and sometimes from stems and leaves, and is used in flavourings and other industries. Extractors care most about oil yield and may accept cloves that are less attractive to look at. Confirm with your supplier which material suits your process and how oil content will be assessed, using the checks in our guide to [clove quality, head, colour and oil content](/blog/clove-quality-head-intact-colour-and-oil-content).",
      },
      {
        heading: "Matching cloves to use",
        text: "Share your priority with your enquiry when you [request a quotation](/contact), along with packing and labelling needs. Any claims made on finished-product labels depend on the rules of the destination market. Before ordering, decide which matters most:",
        list: {
          items: [
            "Appearance, for retail packs",
            "Aroma strength, for blends",
            "Oil content, for extraction",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Each use asks something different of cloves: blenders want aroma and low stems, kitchens and retail packers want intact heads and an even colour, bakers want steady strength and extractors want oil yield. Decide which of these matters most to you and agree it on the specification before the order is packed.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about clove uses.",
        faq: [
          {
            question: "What do spice blenders look for in cloves?",
            answer: "Whole cloves with good aroma and low stem content, so that the strength of the finished blend stays predictable from batch to batch.",
          },
          {
            question: "Why does appearance matter for cloves used whole?",
            answer: "Whole cloves are seen in the pack and the dish, so shoppers and chefs expect intact heads, an even brown colour and very little dust.",
          },
          {
            question: "How are cloves used in baking?",
            answer: "Ground cloves bring warmth to spiced cakes, biscuits, puddings and festive bakes, often alongside cinnamon and nutmeg. Bakers look for a consistent flavour strength.",
          },
          {
            question: "Can less attractive cloves be used for oil extraction?",
            answer: "Yes. Extractors care most about oil yield and may accept cloves that are less attractive to look at; clove oil is sometimes distilled from stems and leaves as well as buds.",
          },
          {
            question: "What should I tell a supplier about my clove use?",
            answer: "Whether appearance, aroma strength or oil content matters most, together with your packing and labelling needs.",
          },
        ],
      },
    ],
  ],

  cinnamon: [
    // Buying Cinnamon: Quills, Thickness and Aroma
    [
      {
        heading: "What a quill is",
        text: "Cinnamon is the dried inner bark of the tree. As it dries, the bark curls into rolls called quills, and these are often trimmed to length as sticks. Buyers look at how the quill was formed: thin layers rolled neatly and evenly suggest careful work, while split, flattened or broken quills usually sell at a lower value as pieces or for grinding. Before judging quills, be clear whether you are buying true cinnamon or cassia; our guide to [cinnamon vs cassia](/blog/cinnamon-vs-cassia-knowing-what-you-are-sourcing) explains the difference.",
      },
      {
        heading: "Thickness and diameter",
        text: "Cinnamon is commonly graded by quill diameter, with finer quills generally valued higher. Thickness of the bark also matters, as it affects texture and how the spice behaves when ground or steeped. Agree the diameter range and stick length you need on the specification sheet, and confirm it against a sample before a full order.",
      },
      {
        heading: "Colour and surface",
        text: "Good cinnamon has an even tan to warm brown colour, with a smooth outer surface and no patches of outer bark left on. Dark spots, a greyish tinge or a dusty bloom can signal damp storage or age. Natural variation is expected, so judge colour against a reference sample rather than an ideal shade.",
      },
      {
        heading: "Aroma",
        text: "Snap a stick and smell the broken edge. Good stock releases a sweet, warm scent straight away. A faint or musty smell suggests old or poorly stored bark. Flavour strength varies by type and season, so if aroma is central to your product, evaluate several samples and agree how it will be checked per order.",
      },
      {
        heading: "Dryness and soundness",
        text: "Quills should be dry and crisp enough to snap cleanly, without softness, mould or insect holes. Check the inside of a few rolls, where moisture and pests can hide. Freshland Exports supplies cinnamon with a minimum order quantity of 100 kg to 500 kg. When you [request a quotation](/contact), share whether you need cinnamon or cassia, the form, quill diameter, stick length, aroma expectations and packing. Ask for these to be stated on the specification sheet:",
        list: {
          items: [
            "The moisture limit",
            "Limits on broken pieces",
            "Limits on foreign matter",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Buying cinnamon well comes down to neat, even quills, the right diameter and stick length, a clean colour, a sweet scent at the snap and dry, sound bark. Agree each point on the specification sheet and confirm it against samples; our [illustrative case study on specifying cinnamon or cassia](/case-studies/cinnamon-or-cassia-specifying-the-species) shows why the species belongs there too.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about cinnamon quills.",
        faq: [
          {
            question: "What is a cinnamon quill?",
            answer: "As the inner bark of the tree dries, it curls into rolls called quills, which are often trimmed to length as sticks.",
          },
          {
            question: "How is cinnamon graded?",
            answer: "Commonly by quill diameter, with finer quills generally valued higher. Bark thickness also matters, as it affects texture and how the spice behaves when ground or steeped.",
          },
          {
            question: "What happens to split or broken quills?",
            answer: "They usually sell at a lower value as pieces or for grinding.",
          },
          {
            question: "How can I check cinnamon aroma?",
            answer: "Snap a stick and smell the broken edge. Good stock releases a sweet, warm scent straight away, while a faint or musty smell suggests old or poorly stored bark.",
          },
          {
            question: "What colour faults should I look for in cinnamon?",
            answer: "Dark spots, a greyish tinge or a dusty bloom, which can signal damp storage or age. Judge colour against a reference sample rather than an ideal shade.",
          },
        ],
      },
    ],
    // Cinnamon vs Cassia: Knowing What You Are Sourcing
    [
      {
        heading: "Two related barks",
        text: "In many markets the word cinnamon is used for two different products. True cinnamon and cassia both come from the bark of related trees, but they look, taste and behave differently. For a buyer, the first step in any enquiry is to be clear about which one you want, because the difference affects flavour, appearance, use and how the product may be labelled.",
      },
      {
        heading: "Telling them apart by eye",
        text: "True cinnamon forms thin, papery layers rolled one inside another, giving a fragile, cigar-like quill that crumbles easily. Cassia is usually a single thick layer of harder bark that curls inwards from both edges, with a rougher surface and a darker reddish-brown colour. Ground, the two are much harder to distinguish, which is why specification matters. For judging the quills themselves, see our guide to [buying cinnamon quills by thickness and aroma](/blog/buying-cinnamon-quills-thickness-and-aroma).",
      },
      {
        heading: "Flavour and use",
        text: "True cinnamon has a delicate, sweet and subtle flavour that suits desserts, beverages and lighter dishes. Cassia is stronger and more pungent, and holds up well in baking and robust savoury cooking. Neither is simply better; the right choice depends on your recipe, your customers' expectations and how the spice will be processed. Our article on [cinnamon in bakery, beverages and spice blends](/blog/cinnamon-in-bakery-beverages-and-spice-blends) looks at each use.",
      },
      {
        heading: "Labelling and market rules",
        text: "Markets differ in how they allow each product to be named on a label, and some have specific rules for one or the other in certain foods. Check the requirements of your destination market, and make sure the product name on your specification sheet and documents matches what is actually being shipped. Cassia generally contains far more coumarin than true cinnamon. In the European Union, coumarin may not be added to food as such, and maximum levels apply to coumarin in certain compound foods. These limits apply to finished foods sold in the EU, not to the spice itself, and other markets set their own rules. The EU maximum levels are (Regulation (EC) No 1334/2008, Annex III):",
        list: {
          items: [
            "50 mg/kg in traditional and/or seasonal bakery ware containing a reference to cinnamon in the labelling",
            "20 mg/kg in breakfast cereals, including muesli",
            "15 mg/kg in other fine bakery ware",
            "5 mg/kg in desserts",
          ],
        },
      },
      {
        heading: "Asking the right questions",
        text: "When you enquire, name the product clearly, describe the form you need — quills, cut sticks, pieces or powder — and ask for a sample to confirm it. Agree the description on the specification sheet so that both sides are working from the same understanding before the order is packed, and include it when you [request a quotation](/contact).",
      },
      {
        heading: "Conclusion",
        text: "True cinnamon and cassia differ in structure, flavour and use, and food makers selling in the EU also need to allow for cassia's higher coumarin. Name the product clearly, confirm it with a sample and match your documents to what is shipped; our [illustrative case study on specifying cinnamon or cassia](/case-studies/cinnamon-or-cassia-specifying-the-species) shows how.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about cinnamon and cassia.",
        faq: [
          {
            question: "How can I tell true cinnamon from cassia by eye?",
            answer: "True cinnamon forms thin, papery layers rolled one inside another into a fragile quill. Cassia is usually a single thick, harder layer that curls inwards from both edges, with a rougher surface and a darker reddish-brown colour.",
          },
          {
            question: "Can cinnamon and cassia be told apart once ground?",
            answer: "Much less easily, which is why the product should be named clearly on the specification sheet and confirmed with a sample.",
          },
          {
            question: "Which tastes stronger, cinnamon or cassia?",
            answer: "Cassia is stronger and more pungent and holds up well in baking and robust savoury cooking. True cinnamon is delicate, sweet and subtle.",
          },
          {
            question: "Why does coumarin matter when choosing cassia?",
            answer: "Cassia generally contains far more coumarin than true cinnamon, and the EU sets maximum coumarin levels for certain finished foods, such as cinnamon-labelled seasonal bakery ware, breakfast cereals and desserts.",
          },
          {
            question: "Do the EU coumarin limits apply to the cinnamon itself?",
            answer: "No. They apply to finished foods sold in the EU, not to the spice itself, and other markets set their own rules.",
          },
        ],
      },
    ],
    // Cinnamon in Bakery, Beverages and Spice Blends
    [
      {
        heading: "Bakery and confectionery",
        text: "Ground cinnamon is one of the most familiar flavours in baking, from rolls and pastries to biscuits, cakes and breakfast cereals. Bakery manufacturers usually look for a fine, even grind and consistent flavour strength, so that a recipe tastes the same across batches; our [illustrative case study on warm spice powders for bakery and confectionery](/case-studies/warm-spice-powders-for-bakery-and-confectionery) shows a typical brief. Whether true cinnamon or cassia is preferred depends on the product and the market.",
      },
      {
        heading: "Teas and beverages",
        text: "Cinnamon sticks and pieces are steeped in spiced teas, mulled drinks and coffee blends, and are also used in syrups and flavoured drinks. For infusions, buyers often want clean, cut pieces of a size that suits their tea bags or blends, with little dust, so that brews stay clear and pleasant to look at.",
      },
      {
        heading: "Savoury spice blends",
        text: "In savoury cooking, cinnamon adds warmth to garam masala, biryani spice mixes and slow-cooked meat dishes, and features in many regional blends. Blenders generally buy sticks or pieces to grind in-house, so aroma and freedom from foreign matter matter more to them than perfectly rolled quills. Our [illustrative case study on matching a house garam masala recipe](/case-studies/matching-a-house-garam-masala-recipe) shows how a blender might specify it.",
      },
      {
        heading: "Retail and food service",
        text: "Retail packers selling whole sticks want neat, evenly cut quills that present well through a window or jar. Food-service kitchens may use sticks whole in rice and curries or rely on ground cinnamon for desserts. Share how the spice will be sold or used, and agree stick length and packing per order.",
      },
      {
        heading: "Specifying for your use",
        text: "Whatever the use, the same points belong on the specification, starting with the species; our guide to [cinnamon vs cassia](/blog/cinnamon-vs-cassia-knowing-what-you-are-sourcing) explains that choice. Share your end use when you [request a quotation](/contact), and agree per order:",
        list: {
          items: [
            "Cinnamon or cassia",
            "Form: quills, cut sticks, pieces or powder",
            "Stick length or cut size",
            "Grind, for ground cinnamon",
            "Aroma and flavour strength",
            "Limits on dust and foreign matter",
            "Packing and labelling",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Bakers want an even grind and steady strength, beverage makers want clean cut pieces, blenders want aroma and clean bark, and retail packers want neat quills. Start from your use, settle the species and form, and agree the remaining details per order.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about cinnamon uses.",
        faq: [
          {
            question: "What do bakery manufacturers look for in ground cinnamon?",
            answer: "A fine, even grind and consistent flavour strength, so that a recipe tastes the same across batches.",
          },
          {
            question: "What form of cinnamon suits teas and infusions?",
            answer: "Clean, cut pieces of a size that suits the tea bags or blends, with little dust so that brews stay clear.",
          },
          {
            question: "Do spice blenders need perfectly rolled cinnamon quills?",
            answer: "No. Blenders generally buy sticks or pieces to grind in-house, so aroma and freedom from foreign matter matter more to them.",
          },
          {
            question: "What do retail packers want in cinnamon sticks?",
            answer: "Neat, evenly cut quills that present well through a window or jar.",
          },
          {
            question: "How is cinnamon used in savoury cooking?",
            answer: "It adds warmth to garam masala, biryani spice mixes and slow-cooked meat dishes, and features in many regional blends.",
          },
        ],
      },
    ],
  ],

  "mustard-seeds": [
    // Mustard Seeds Export Guide: Black, Brown and Yellow
    [
      {
        heading: "Three colours, three characters",
        text: "Mustard seeds are traded in broadly black, brown and yellow types. Choosing the right colour starts with how the seed will be used, as our article on [mustard seeds for tempering, pickles and condiments](/blog/mustard-seeds-for-tempering-pickles-and-condiments) shows, so be specific about type in your enquiry. In general:",
        list: {
          items: [
            "Darker seeds are more pungent and are widely used in South Asian cooking.",
            "Yellow seeds are milder and are the usual base for many prepared mustards.",
          ],
        },
      },
      {
        heading: "Seed size and uniformity",
        text: "Mustard seeds are small, but size still varies between lots. An even seed size looks better in retail packs and behaves more predictably in milling and tempering. Agree the size range or grade description you need on the specification sheet and compare it against a sample before the full order is packed.",
      },
      {
        heading: "Purity",
        text: "Spread a sample on a white tray and look closely: mixed colours where you expected one type, or visible debris, are worth raising early. Limits on foreign matter belong on the specification sheet; our guide to [cleaning and grading mustard seeds for export](/blog/cleaning-and-grading-mustard-seeds-for-export) explains how they are met. A good lot is mostly whole, sound seed with very little:",
        list: {
          items: [
            "Dust",
            "Stones",
            "Broken seed",
            "Husk",
            "Seeds of other plants",
          ],
        },
      },
      {
        heading: "Colour and lustre",
        text: "Sound seeds have a consistent colour for their type and a slight natural sheen. Shrivelled, dull or very mixed seeds can point to immature harvest or poor storage. Bite or crush a few: they should be firm and release a sharp, clean pungency once moistened, without any musty or rancid note.",
      },
      {
        heading: "Moisture and storage",
        text: "Mustard seeds contain oil and should be kept dry to avoid mould, clumping and stale flavours. Ask for the moisture limit to be stated on the specification sheet, and store the seeds in clean, dry, ventilated conditions away from strong odours once they arrive. Freshland Exports supplies mustard seeds with a minimum order quantity of 100 kg to 500 kg. When you [request a quotation](/contact), share the seed type, size range or grade, foreign matter and moisture limits, and packing.",
      },
      {
        heading: "Conclusion",
        text: "Sourcing mustard seed starts with choosing black, brown or yellow for your use, then agreeing size, purity, colour and moisture on the specification sheet and checking a sample against it. Our [illustrative case study on mustard seed for condiment production](/case-studies/mustard-seed-for-condiment-production) shows how a manufacturer might set those points.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about sourcing mustard seeds.",
        faq: [
          {
            question: "Which mustard seed is the most pungent?",
            answer: "Darker seeds are generally more pungent than yellow ones and are widely used in South Asian cooking.",
          },
          {
            question: "Which mustard seed is used for prepared mustards?",
            answer: "Yellow seeds are milder and are the usual base for many prepared mustards.",
          },
          {
            question: "Why does seed size matter for mustard?",
            answer: "An even seed size looks better in retail packs and behaves more predictably in milling and tempering.",
          },
          {
            question: "How should I check a mustard seed sample for purity?",
            answer: "Spread it on a white tray and look for dust, stones, broken seed, husk, seeds of other plants, or mixed colours where you expected one type.",
          },
          {
            question: "How should mustard seeds be stored?",
            answer: "Dry, in clean, ventilated conditions away from strong odours. The seeds contain oil and can turn mouldy, clumpy or stale if they get damp.",
          },
        ],
      },
    ],
    // Cleaning and Grading Mustard Seeds for Export
    [
      {
        heading: "Why cleaning matters",
        text: "Mustard seed arrives from the field with dust, chaff, small stones, broken seed and sometimes seeds of other plants. Because the seed is so small, these impurities are easy to miss by eye but can show up in a finished product or a retail pack. Cleaning turns a mixed harvest into a lot that meets an agreed specification. It usually runs through these steps, each described below:",
        list: {
          ordered: true,
          items: [
            "Sieving to separate seeds from larger debris and fine dust",
            "Air separation to lift away light chaff, empty husks and immature seeds",
            "Separating on weight to remove stones and grit",
            "Sorting for colour, where a single colour is required",
          ],
        },
      },
      {
        heading: "Sieving and air separation",
        text: "Cleaning usually begins with sieves that separate seeds from larger debris and fine dust, followed by air separation that lifts away light chaff, empty husks and immature seeds. These steps also help sort the seed by size, which matters for buyers who want an even look and consistent behaviour in processing. The same type of process is used for other seed spices; our article on [machine cleaning and Sortex for cumin](/blog/machine-cleaning-and-sortex-how-cumin-is-prepared-for-export) describes it for cumin.",
      },
      {
        heading: "Removing stones and heavier matter",
        text: "Stones and grit can be close in size to mustard seed, so they are often removed by separating on weight rather than size. This is an important step for grinders and food manufacturers, where hard particles can damage equipment or end up in a finished product. Ask how this step is handled when you agree the specification.",
      },
      {
        heading: "Sorting for colour",
        text: "Where a single colour is required, sorting can remove off-colour seeds that would look out of place in a pack of black or yellow mustard; our [guide to black, brown and yellow mustard seeds](/blog/mustard-seeds-export-guide-black-brown-and-yellow) explains the types. How far a lot is sorted depends on the buyer's needs, so describe the appearance you expect and confirm it against a sample before a full order.",
      },
      {
        heading: "Agreeing the result",
        text: "Agree the result on the specification sheet, check a pre-shipment sample where possible, and confirm the details per order so that each consignment is judged against the same standard. Our [illustrative case study on cleaning standards for whole seed spices](/case-studies/cleaning-standards-for-whole-seed-spices) shows a typical set. The outcome of cleaning and grading should be written down, covering:",
        list: {
          items: [
            "Seed type",
            "Size range",
            "Purity",
            "Foreign matter and moisture limits",
            "Packing",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Sieving, air separation, removal of stones by weight and colour sorting turn a mixed harvest into a clean, even lot. Write the expected result into the specification, check a pre-shipment sample, and share those points when you [request a quotation](/contact) so that every consignment is judged against the same standard.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about cleaning mustard seeds.",
        faq: [
          {
            question: "Why are impurities in mustard seed easy to miss?",
            answer: "The seed is so small that dust, chaff, stones and other seeds are hard to spot by eye, yet they can show up in a finished product or a retail pack.",
          },
          {
            question: "What does air separation remove from mustard seed?",
            answer: "Light chaff, empty husks and immature seeds. Together with sieving, it also helps sort the seed by size.",
          },
          {
            question: "How are stones removed from mustard seed?",
            answer: "Stones and grit can be close in size to the seed, so they are often removed by separating on weight rather than size.",
          },
          {
            question: "Is colour sorting always needed for mustard seed?",
            answer: "No. It is used where a single colour is required, and how far a lot is sorted depends on the buyer's needs.",
          },
          {
            question: "What should a cleaned mustard seed specification cover?",
            answer: "Seed type, size range, purity, foreign matter and moisture limits, and packing.",
          },
        ],
      },
    ],
    // Mustard Seeds for Tempering, Pickles and Condiments
    [
      {
        heading: "Tempering",
        text: "In South Asian cooking, whole mustard seeds are fried in hot oil until they pop, releasing a nutty, sharp flavour that seasons dals, vegetables and rice dishes. For this use, buyers and kitchens tend to prefer darker, bold, clean seeds that pop evenly, with very little dust that would burn in the pan; our [guide to black, brown and yellow mustard seeds](/blog/mustard-seeds-export-guide-black-brown-and-yellow) explains the types.",
      },
      {
        heading: "Pickles",
        text: "Mustard seeds, whole, cracked or ground, are a key ingredient in many Indian pickles, where they add pungency and help carry flavour through the oil. Pickle makers usually look for clean seed with consistent pungency, since the strength of the seed can noticeably change the taste of the finished jar. Our [illustrative case study on whole spices for pickle manufacturing](/case-studies/whole-spices-for-pickle-manufacturing) shows a typical brief.",
      },
      {
        heading: "Prepared mustards and condiments",
        text: "Prepared mustards, mustard sauces and dressings are made by grinding or cracking the seed and mixing it with liquid. Manufacturers often use yellow seed for milder styles and darker seed for hotter ones, and they value a uniform, clean lot that mills consistently and gives a predictable colour and heat, as our [illustrative case study on mustard seed for condiment production](/case-studies/mustard-seed-for-condiment-production) describes.",
      },
      {
        heading: "Seasonings and processed foods",
        text: "Ground mustard appears in seasoning mixes, marinades, spice rubs and a range of processed foods. Blenders may buy whole seed to mill in-house. Tell your supplier the end use, the seed type and any packing or labelling needs, and remember that allergen labelling rules for mustard vary by market. In the European Union, mustard and products thereof are listed among the substances or products causing allergies or intolerances that must be declared on food labels (Regulation (EU) No 1169/2011, Annex II); other markets keep their own lists, so check the rules where the finished product will be sold.",
      },
      {
        heading: "Specifying for your use",
        text: "Whatever the use, agree the same core points per order, and share them when you [request a quotation](/contact):",
        list: {
          items: [
            "Seed type and colour",
            "Whole, cracked or ground",
            "Cleanliness and dust",
            "Consistency of pungency",
            "Packing",
            "Labelling, including allergen declarations for the destination market",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Tempering calls for bold, clean seed that pops evenly, pickles for consistent pungency, and condiments for a uniform lot that mills to a predictable colour and heat. Agree seed type, form and cleanliness for your use, and check allergen labelling rules in the market where the finished product will be sold.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about mustard seed uses.",
        faq: [
          {
            question: "What mustard seed suits tempering?",
            answer: "Darker, bold, clean seeds that pop evenly, with very little dust that would burn in the pan.",
          },
          {
            question: "Why does pungency matter to pickle makers?",
            answer: "The strength of the seed can noticeably change the taste of the finished jar, so pickle makers look for clean seed with consistent pungency.",
          },
          {
            question: "Which mustard seed is used for mild and hot prepared mustards?",
            answer: "Manufacturers often use yellow seed for milder styles and darker seed for hotter ones.",
          },
          {
            question: "Must mustard be declared as an allergen on food labels?",
            answer: "In the European Union, mustard and products thereof must be declared on food labels as a substance or product causing allergies or intolerances. Other markets keep their own lists, so check the rules where the product will be sold.",
          },
          {
            question: "Do seasoning blenders buy whole or ground mustard?",
            answer: "Ground mustard appears in seasoning mixes, marinades and rubs, and blenders may buy whole seed to mill in-house.",
          },
        ],
      },
    ],
  ],

  "fennel-seeds": [
    // Fennel Seeds Quality: Green Colour, Size and Sweetness
    [
      {
        heading: "Start with colour",
        text: "Buyers of fennel seed look first at colour. A fresh, bright green to greenish-yellow tone usually signals careful harvesting and drying, while dull brown or greyish seed can point to late harvest, too much sun during drying or old stock. Colour varies by variety and season, so compare against a reference sample rather than an ideal shade. Our guide to [keeping fennel seeds green and fragrant in storage](/blog/keeping-fennel-seeds-green-and-fragrant-in-storage) covers how to hold that colour after delivery.",
      },
      {
        heading: "Seed size and shape",
        text: "Fennel seeds are long, ridged and slightly curved. Bold, plump, evenly sized seeds are generally preferred for retail and mouth-freshener use, as our [illustrative case study on fennel and cardamom for mouth fresheners](/case-studies/fennel-and-cardamom-for-mouth-fresheners) shows, while smaller seed can suit grinding. Agree the size or grade description you need on the specification sheet and check that a sample is broadly consistent.",
      },
      {
        heading: "Sweetness and aroma",
        text: "Crush a few seeds between your fingers: good fennel releases a sweet, fresh, anise-like aroma straight away. A weak or musty smell suggests the seed has lost much of its oil. If flavour is central to your product, taste and smell samples from more than one lot before committing to a full order.",
      },
      {
        heading: "Purity",
        text: "Fennel can carry fine stems from the flower heads, which are easy to spot on a white tray. Set limits for foreign matter and broken seed on the specification sheet, and check a sample before shipment where possible; our [illustrative case study on cleaning standards for whole seed spices](/case-studies/cleaning-standards-for-whole-seed-spices) shows a typical set. Look for clean seed with little:",
        list: {
          items: [
            "Dust",
            "Stalk",
            "Husk",
            "Broken seed",
            "Stones",
          ],
        },
      },
      {
        heading: "Dryness and soundness",
        text: "Seeds should be dry, firm and free-flowing, without clumping, mould or insect damage. Ask for the moisture limit to be stated on the specification sheet, and keep an eye out for webbing or holes in seeds when a sample arrives, as these point to pest activity in storage. Freshland Exports supplies fennel seeds with a minimum order quantity of 100 kg to 500 kg. When you [request a quotation](/contact), share the colour, seed size or grade, aroma expectations, foreign matter and moisture limits, and packing.",
      },
      {
        heading: "Conclusion",
        text: "Good fennel seed is bright in colour, bold and even in size, sweet in aroma, clean and dry. Compare samples against a reference, put size, foreign matter and moisture limits on the specification sheet, and taste more than one lot if flavour drives your product.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about fennel seed quality.",
        faq: [
          {
            question: "What colour should good fennel seed be?",
            answer: "A fresh, bright green to greenish-yellow. Dull brown or greyish seed can point to late harvest, too much sun during drying or old stock.",
          },
          {
            question: "Which fennel seed size suits mouth fresheners?",
            answer: "Bold, plump, evenly sized seeds are generally preferred for retail and mouth-freshener use, while smaller seed can suit grinding.",
          },
          {
            question: "How do I check the aroma of fennel seed?",
            answer: "Crush a few seeds between your fingers. Good fennel releases a sweet, fresh, anise-like aroma straight away; a weak or musty smell suggests lost oil.",
          },
          {
            question: "What foreign matter is common in fennel seed?",
            answer: "Fine stems from the flower heads, along with dust, husk, broken seed and stones.",
          },
          {
            question: "What signs of pests should I look for in fennel seed?",
            answer: "Webbing or holes in seeds, which point to pest activity in storage.",
          },
        ],
      },
    ],
    // Keeping Fennel Seeds Green and Fragrant in Storage
    [
      {
        heading: "Light fades the green",
        text: "The bright green colour that buyers value in fennel seed is sensitive to light. Seed kept in sunlight or under strong lighting turns dull and brownish over time, even if its flavour holds. Store fennel in a dark place and use packing that blocks light, especially for retail lines where colour is part of the appeal. Green cardamom raises the same issue, as our article on [protecting cardamom's green colour and fragrance](/blog/protecting-cardamom-s-green-colour-and-fragrance) explains.",
      },
      {
        heading: "Heat drives off aroma",
        text: "Fennel's sweet scent comes from volatile oils that escape faster when the seed is warm. Keep stock in a cool store, away from sun-facing walls, roofs and machinery that gives off heat. Agree the storage conditions that suit your stock with your supplier rather than relying on a single fixed figure.",
      },
      {
        heading: "Keep moisture out",
        text: "Damp storage leads to clumping, mould and musty flavours. Lined bags or sealed inner liners help protect both moisture and aroma during long storage or transit. To keep damp away:",
        list: {
          items: [
            "Keep bags on pallets, off the floor",
            "Keep stock away from damp walls",
            "Reseal opened packs promptly",
          ],
        },
      },
      {
        heading: "Watch for pests",
        text: "Seeds in storage can attract insects, particularly in warm conditions. Keep the store clean, separate any affected bags quickly, and store fennel apart from strongly scented goods, as it readily picks up other odours. Inspect stock at intervals for:",
        list: {
          items: [
            "Webbing",
            "Holes in seeds",
            "Live insects",
          ],
        },
      },
      {
        heading: "First in, first out",
        text: "Even well-stored fennel slowly loses colour and aroma, so use stock in the order it arrived. Check a handful from time to time for colour and scent, using the signs in our guide to [fennel seed colour, size and sweetness](/blog/fennel-seeds-quality-green-colour-size-and-sweetness), and plan purchase volumes around your actual usage so seed does not sit in the warehouse longer than necessary.",
      },
      {
        heading: "Conclusion",
        text: "Fennel keeps its colour and scent when it is stored dark, cool and dry, protected from pests and strong odours, and used in the order it arrived. Agree storage conditions with your supplier, and [request a quotation](/contact) for volumes that match your actual usage.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about storing fennel seeds.",
        faq: [
          {
            question: "Why does fennel seed turn brown in storage?",
            answer: "Its green colour is sensitive to light, and seed kept in sunlight or under strong lighting turns dull and brownish over time.",
          },
          {
            question: "Does faded fennel seed always taste weaker?",
            answer: "Not necessarily, as colour can fade even if flavour holds. Heat, however, drives off the volatile oils behind its scent, so keep it cool as well as dark.",
          },
          {
            question: "What packing helps fennel keep its colour and aroma?",
            answer: "Packing that blocks light, and lined bags or sealed inner liners that protect against moisture and aroma loss during long storage or transit.",
          },
          {
            question: "Can fennel be stored next to other spices?",
            answer: "Store it apart from strongly scented goods, as fennel readily picks up other odours.",
          },
          {
            question: "How much fennel should I hold in stock?",
            answer: "Plan purchase volumes around your actual usage and use stock in the order it arrived, since even well-stored fennel slowly loses colour and aroma.",
          },
        ],
      },
    ],
    // Fennel Seeds as Mouth Freshener, in Teas and Baking
    [
      {
        heading: "Mouth fresheners",
        text: "In India, fennel seed is eaten after meals as mukhwas, either plain, roasted or coated with sugar and mixed with other seeds. This use puts appearance first: buyers want bold, bright green, clean seed with a sweet aroma and very little dust, because the product is seen and eaten as it is. Our [illustrative case study on fennel and cardamom for mouth fresheners](/case-studies/fennel-and-cardamom-for-mouth-fresheners) shows how such a brief is set.",
      },
      {
        heading: "Herbal teas and infusions",
        text: "Fennel seed is a common ingredient in herbal tea blends, where it adds a gentle sweetness and anise-like note. Tea blenders usually look for clean seed with good aroma and may ask for lightly crushed seed. Any wording about the tea's qualities on a label depends on the rules of the destination market.",
      },
      {
        heading: "Baking and bread",
        text: "Whole or crushed fennel appears in breads, crackers, biscuits and savoury bakes in many cuisines, and pairs well with rye and olive-oil doughs. Bakeries value consistent flavour strength and clean seed that will not introduce grit or stalks into the dough; our [illustrative case study on fennel seeds for teas and baking](/case-studies/fennel-seeds-for-teas-and-baking) covers both uses.",
      },
      {
        heading: "Sausages and savoury cooking",
        text: "Fennel is a classic seasoning in sausages and cured meats, and is used in curries, spice blends and pickles. Meat processors and blenders often buy whole seed to crack or grind in-house. Share your end use, preferred seed size and packing with your enquiry, and confirm the details per order.",
      },
      {
        heading: "Specifying for your use",
        text: "Each use weights these points differently, so share your end use when you [request a quotation](/contact); our guide to [fennel seed colour, size and sweetness](/blog/fennel-seeds-quality-green-colour-size-and-sweetness) explains how to check each one. Agree per order:",
        list: {
          items: [
            "Seed size and boldness",
            "Colour",
            "Aroma",
            "Whole or crushed",
            "Cleanliness, including dust, stalks and grit",
            "Packing",
            "Label wording, which depends on the destination market's rules",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Mouth fresheners put appearance first, tea blenders and bakeries want clean, aromatic seed, and meat processors often crack or grind whole seed themselves. Start from your end use, agree size, colour, form and cleanliness, and check label wording against the rules of your market.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about fennel seed uses.",
        faq: [
          {
            question: "What is mukhwas?",
            answer: "In India, fennel seed is eaten after meals as mukhwas, either plain, roasted or coated with sugar and mixed with other seeds.",
          },
          {
            question: "Why does appearance matter so much for mouth-freshener fennel?",
            answer: "The product is seen and eaten as it is, so buyers want bold, bright green, clean seed with a sweet aroma and very little dust.",
          },
          {
            question: "Do tea blenders use whole fennel seed?",
            answer: "They look for clean seed with good aroma and may ask for lightly crushed seed.",
          },
          {
            question: "What do bakeries need from fennel seed?",
            answer: "Consistent flavour strength and clean seed that will not introduce grit or stalks into the dough.",
          },
          {
            question: "How do meat processors use fennel seed?",
            answer: "As a classic seasoning in sausages and cured meats, often buying whole seed to crack or grind in-house.",
          },
        ],
      },
    ],
  ],

  turmeric: [
    // Whole Turmeric Fingers: Curcumin, Polish and Moisture
    [
      {
        heading: "Fingers and bulbs",
        text: "Whole turmeric is traded mainly as fingers, the slender side shoots of the rhizome, and bulbs, the rounder central part. Fingers are generally preferred for grinding and retail, while bulbs may suit other uses. State which form you want, along with any preference for finger length, and confirm it against a sample before a full order.",
      },
      {
        heading: "Curcumin content",
        text: "Curcumin is the compound behind turmeric's colour, and many buyers, especially grinders and extract makers, specify a minimum level. Content varies by variety, growing conditions and season, so it should never be assumed. If it matters to you, agree the level and the method of testing on the specification sheet and confirm it per order. The same measure matters for ground turmeric, as our guide to [turmeric powder quality](/blog/turmeric-powder-quality-colour-curcumin-and-purity) explains.",
      },
      {
        heading: "Polish and appearance",
        text: "After drying, turmeric is usually polished to remove the rough outer skin and give a smoother, brighter surface. Well-polished fingers look cleaner and more even in colour. Some buyers prefer a single polish, others a finer finish; describe what you need, and see our [illustrative case study on polished or unpolished turmeric](/case-studies/polished-or-unpolished-turmeric) for how that choice is made. Check that the fingers are free from:",
        list: {
          items: [
            "Soil",
            "Root hairs",
            "Loose skin",
          ],
        },
      },
      {
        heading: "Hardness and moisture",
        text: "Properly cured turmeric is hard and dry. A good finger snaps sharply rather than bending, and the broken face shows a deep orange-yellow colour throughout. Soft or flexible fingers, or a pale core, point to incomplete drying or curing; our article on [how turmeric is boiled, dried and polished](/blog/boiling-drying-and-polishing-how-turmeric-is-cured) explains the process. Ask for the moisture limit to be stated on the specification sheet.",
      },
      {
        heading: "Purity and soundness",
        text: "Check a sample for stones, soil, broken pieces, mould and insect damage. Holes or powdery patches on the fingers can be a sign of pest activity in storage. Agree limits for foreign matter and damaged fingers in advance, and inspect a pre-shipment sample where possible. Freshland Exports supplies whole turmeric with a minimum order quantity of 100 kg to 500 kg. When you [request a quotation](/contact), share the form, the curcumin level and test method if it matters, the polish, the moisture limit and packing.",
      },
      {
        heading: "Conclusion",
        text: "Whole turmeric is judged on form, curcumin where it matters, polish, hardness and freedom from foreign matter and damage. Agree each point on the specification sheet, with a test method for curcumin, and inspect a pre-shipment sample before the full order is packed.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about whole turmeric fingers.",
        faq: [
          {
            question: "What is the difference between turmeric fingers and bulbs?",
            answer: "Fingers are the slender side shoots of the rhizome and bulbs the rounder central part. Fingers are generally preferred for grinding and retail.",
          },
          {
            question: "Is curcumin content the same in every turmeric lot?",
            answer: "No. It varies by variety, growing conditions and season, so if it matters, agree the level and the test method on the specification sheet.",
          },
          {
            question: "Why is whole turmeric polished?",
            answer: "To remove the rough outer skin and give a smoother, brighter surface. Well-polished fingers look cleaner and more even in colour.",
          },
          {
            question: "How can I tell whether turmeric is properly dried?",
            answer: "A good finger snaps sharply rather than bending, and the broken face shows a deep orange-yellow throughout. Soft fingers or a pale core point to incomplete drying or curing.",
          },
          {
            question: "What do holes or powdery patches on turmeric fingers mean?",
            answer: "They can be a sign of pest activity in storage.",
          },
        ],
      },
    ],
    // Boiling, Drying and Polishing: How Turmeric Is Cured
    [
      {
        heading: "Why fresh turmeric is cured",
        text: "Freshly harvested turmeric rhizomes are moist, soft and quick to spoil. Curing turns them into the hard, stable, golden fingers that are traded around the world. The process also sets the colour and aroma that buyers judge, so the way turmeric is cured has a lot to do with the quality that arrives at your warehouse. It runs through these stages, each described below:",
        list: {
          ordered: true,
          items: [
            "Cleaning off soil and roots, and separating the fingers from the bulbs",
            "Boiling or steaming until soft",
            "Drying until hard and brittle",
            "Polishing to remove the rough outer skin",
            "Sorting and packing",
          ],
        },
      },
      {
        heading: "Cleaning and boiling",
        text: "After harvest, the rhizomes are cleaned of soil and roots and the fingers are usually separated from the central bulbs. They are then boiled or steamed until soft. This step softens the tissue, spreads the colour more evenly through each piece and helps the rhizomes dry more uniformly afterwards.",
      },
      {
        heading: "Drying",
        text: "The boiled rhizomes are spread out to dry until they become hard and brittle. This takes time and attention: turning the material and protecting it from rain and dew help avoid mould and uneven drying. Well-dried turmeric snaps cleanly and shows a bright colour inside, while rushed or interrupted drying can leave soft or discoloured pieces.",
      },
      {
        heading: "Polishing",
        text: "Dried turmeric has a rough, scaly surface. Polishing, by hand or in rotating drums, rubs off this outer skin, root bits and dust to give a smoother finger with a better colour. The degree of polish can vary, so describe the finish you expect and confirm it against a sample; our [illustrative case study on polished or unpolished turmeric](/case-studies/polished-or-unpolished-turmeric) weighs the two.",
      },
      {
        heading: "Sorting and packing",
        text: "Finally, the fingers are sorted to remove broken pieces, bulbs and foreign matter, and packed in clean, dry bags. Ask your supplier how each stage is handled, agree the resulting specification for form, moisture and purity on the specification sheet, and confirm the details per order; our guide to [whole turmeric fingers](/blog/whole-turmeric-fingers-curcumin-polish-and-moisture) lists what to check. Fingers bound for grinding then follow the route in our article on [how turmeric rhizomes become fine golden powder](/blog/how-turmeric-rhizomes-become-fine-golden-powder).",
      },
      {
        heading: "Conclusion",
        text: "Curing turns soft, perishable rhizomes into hard, golden fingers through cleaning, boiling, drying, polishing and sorting, and each stage shapes the colour and quality you receive. Ask how each stage is handled, agree the finished specification, and [request a quotation](/contact) with your form, finish and purity needs.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about curing turmeric.",
        faq: [
          {
            question: "Why is fresh turmeric boiled before drying?",
            answer: "Boiling or steaming softens the tissue, spreads the colour more evenly through each piece and helps the rhizomes dry more uniformly.",
          },
          {
            question: "What goes wrong when turmeric is dried badly?",
            answer: "Rushed or interrupted drying can leave soft or discoloured pieces, and material that is not turned or protected from rain and dew risks mould.",
          },
          {
            question: "How is turmeric polished?",
            answer: "By hand or in rotating drums that rub off the rough, scaly outer skin, root bits and dust to give a smoother finger with a better colour.",
          },
          {
            question: "Is all whole turmeric polished to the same degree?",
            answer: "No. The degree of polish can vary, so describe the finish you expect and confirm it against a sample.",
          },
          {
            question: "What happens at the sorting stage of turmeric curing?",
            answer: "Broken pieces, bulbs and foreign matter are removed, and the fingers are packed in clean, dry bags.",
          },
        ],
      },
    ],
    // Whole Turmeric for Grinding, Extraction and Retail
    [
      {
        heading: "Spice grinders",
        text: "Grinders turn whole fingers into turmeric powder for retail, food service and food manufacturing. They usually look for hard, well-dried fingers with a strong colour, low foreign matter and consistent quality across lots, so that the powder they produce has a steady colour and grinds cleanly without clogging equipment. Our [illustrative case study on whole turmeric for in-house grinding](/case-studies/whole-turmeric-for-in-house-grinding) shows a typical brief.",
      },
      {
        heading: "Extract makers",
        text: "Companies that extract colour and other compounds from turmeric focus closely on curcumin content, since it shapes their yield. Appearance and polish matter less to them than the measured level, which varies by variety and season. Agree the level and the testing method in advance and confirm it per order.",
      },
      {
        heading: "Food colouring and manufacturing",
        text: "Turmeric is widely used to give a warm yellow colour to sauces, mustards, rice dishes, snacks and seasonings. Manufacturers who grind or process it in-house want a predictable colour from one consignment to the next, so a clear specification and pre-shipment samples are especially useful. Those who would rather not grind can source our [ground turmeric powder](/products/turmeric-powder) instead.",
      },
      {
        heading: "Retail whole turmeric",
        text: "Some shoppers, particularly in South Asian and specialty grocery, buy whole dried turmeric to grind at home or use in cooking. For this market, appearance counts: well-polished, evenly sized fingers with a bright colour sell best. Share your pack size and labelling needs with your enquiry, as rules differ by market.",
      },
      {
        heading: "Specifying for your use",
        text: "Each buyer weights these points differently; our guide to [whole turmeric fingers](/blog/whole-turmeric-fingers-curcumin-polish-and-moisture) explains how to check each one. Share your end use when you [request a quotation](/contact), and agree per order:",
        list: {
          items: [
            "Fingers or bulbs",
            "Curcumin level and test method, if it matters to your use",
            "Degree of polish",
            "Hardness and moisture limit",
            "Foreign matter limits",
            "Packing and labelling",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Grinders want hard, clean, consistent fingers, extract makers want a measured curcumin level, manufacturers want predictable colour and retail packers want bright, well-polished fingers. Match the specification to your use and confirm it with pre-shipment samples.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about whole turmeric uses.",
        faq: [
          {
            question: "What do spice grinders look for in whole turmeric?",
            answer: "Hard, well-dried fingers with a strong colour, low foreign matter and consistent quality across lots, so that the powder has a steady colour and grinds cleanly.",
          },
          {
            question: "Why do extract makers focus on curcumin?",
            answer: "Curcumin content shapes their yield, so the measured level matters more to them than appearance or polish.",
          },
          {
            question: "Why do food manufacturers need consistent turmeric?",
            answer: "They use it to colour sauces, mustards, rice dishes, snacks and seasonings, and want a predictable colour from one consignment to the next.",
          },
          {
            question: "What whole turmeric sells best at retail?",
            answer: "Well-polished, evenly sized fingers with a bright colour.",
          },
          {
            question: "Who buys whole dried turmeric at retail?",
            answer: "Shoppers, particularly in South Asian and specialty grocery, who grind it at home or use it in cooking.",
          },
        ],
      },
    ],
  ],

  ginger: [
    // Fresh and Dried Ginger: What Importers Should Check
    [
      {
        heading: "In brief",
        text: "Fresh ginger is judged by its skin, plumpness, size of hands and freedom from sprouts and mould; dried ginger by its dryness, cleanliness, aroma and form. The two are different products with [different storage needs](/blog/storing-ginger-to-prevent-sprouting-and-shrivelling) and, in the European Union, different import controls, so specify which one you are buying from the start.",
      },
      {
        heading: "Fresh ginger: maturity and skin",
        text: "Mature ginger is harvested when the plant's tops begin to wilt and die, and good rhizomes are plump, with a dry, bright yellow-brown skin. Look for a firm, fairly smooth skin free from deep cuts, cracks, soft patches and mould. A light layer of soil is normal; wet, wrinkled or shrivelled skin is not. Scrape a hand gently with a fingernail: the flesh underneath should look fresh and moist rather than dry or discoloured.",
      },
      {
        heading: "Fresh ginger: size and shape",
        text: "Ginger is sold as hands, the branching clusters of rhizome. Buyers often prefer large, plump hands with few broken fingers, as they look better on the shelf and give a better yield in processing. Agree the size range and how much breakage is acceptable on the specification sheet, and check a sample against it.",
      },
      {
        heading: "Fibre and pungency",
        text: "Cut a piece and look at the flesh. Younger ginger tends to be juicier and less fibrous, while mature ginger is more pungent and fibrous. Ginger for drying is harvested later, at about seven to eight months, than ginger for fresh use or pickling (ICAR-Indian Institute of Spices Research guidance). Which one suits you depends on use: fresh retail and juicing often favour lower fibre, while drying and processing prefer mature rhizomes; our article on [how dry ginger (sonth) is made](/blog/from-rhizome-to-sonth-how-dry-ginger-powder-is-made) follows that route.",
      },
      {
        heading: "Dried ginger",
        text: "Good stock is hard, dry and free from mould and insect damage, with a strong, clean aroma when broken. Check the colour of the cut surface for evenness, and agree the form, moisture limit and foreign matter limits on the specification sheet. If you need it ground, our [Dry Ginger Powder page](/products/dry-ginger-powder) covers the powder. Dried ginger is traded:",
        list: {
          items: [
            "Whole, split or sliced",
            "Peeled or unpeeled",
            "Bleached or unbleached",
          ],
        },
      },
      {
        heading: "EU controls differ by form",
        text: "In the European Union, the requirements depend on the form. Confirm the requirements for your destination and form before shipment.",
        list: {
          items: [
            "Dried ginger from India is listed with other dried spices in Annex II of Implementing Regulation 2019/1793, as amended in 2026, for pesticide residues: each consignment needs an official certificate and analysis results, and 20 per cent of consignments are checked at the border. It is also subject to EU maximum levels for aflatoxins under Commission Regulation (EU) 2023/915.",
            "Fresh ginger is not in those annexes, but as a plant product it needs a [phytosanitary certificate](/blog/phytosanitary-certificates-and-export-documents-for-fresh-produce).",
          ],
        },
      },
      {
        heading: "Sourcing and export",
        text: "For either form, share the quantity, size or form, packing and destination when you [request a quotation](/contact), and confirm availability, which depends on the season. For the United States, check entry conditions for fresh ginger in the USDA APHIS ACIR database.",
      },
      {
        heading: "Conclusion",
        text: "Fresh and dried ginger are different products, judged on different qualities and, in the EU, subject to different import controls. Decide which form you need, agree size, form, moisture and foreign matter limits on the specification, and confirm the requirements for your destination.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions importers ask about ginger.",
        faq: [
          {
            question: "Is ginger for drying harvested differently?",
            answer: "Yes. Ginger for drying is harvested later, at about seven to eight months, than ginger for fresh use or pickling.",
          },
          {
            question: "Do fresh and dried ginger have the same EU requirements?",
            answer: "No. Dried ginger from India is listed for pesticide residues and is subject to EU limits for aflatoxins, while fresh ginger is not in those annexes but needs a phytosanitary certificate.",
          },
          {
            question: "What does good fresh ginger look like?",
            answer: "Plump rhizomes with a dry, bright yellow-brown skin that is firm and fairly smooth, without deep cuts, cracks, soft patches or mould.",
          },
          {
            question: "In what forms is dried ginger traded?",
            answer: "Whole, split or sliced; peeled or unpeeled; and bleached or unbleached.",
          },
          {
            question: "What belongs on a dried ginger specification?",
            answer: "The form, a moisture limit and foreign matter limits. Good stock is hard, dry and free from mould and insect damage, with a strong, clean aroma.",
          },
        ],
      },
    ],
    // Storing Ginger to Prevent Sprouting and Shrivelling
    [
      {
        heading: "Fresh ginger has several enemies",
        text: "Fresh ginger is a living rhizome. Good storage keeps it in a steady middle ground, so the rhizomes stay firm and plump until they are sold or processed.",
        list: {
          items: [
            "Kept too cold, it suffers chilling injury.",
            "Kept too dry, it loses moisture and shrivels.",
            "Kept wet, it grows mould and can rot.",
            "Held too long, it begins to sprout.",
          ],
        },
      },
      {
        heading: "General reference storage conditions",
        text: "Mature ginger is generally stored at about 12 to 14 °C with 85 to 90 per cent relative humidity (USDA Agriculture Handbook 66, 2016), under which it can keep for roughly two to three months. At lower humidity, around 65 per cent, rhizomes dehydrate and wilt. These are general figures for mature, sound rhizomes; agree the conditions for each shipment with your supplier and logistics provider.",
      },
      {
        heading: "Not too cold",
        text: "Mature ginger is chilling sensitive below about 12 °C. Symptoms include loss of skin colour and pitting, and in severe cases internal breakdown. Ginger should therefore not share a store or container with produce that needs near-freezing temperatures, such as onions, garlic or cabbage held for long storage; our guide to [building a mixed agricultural order](/blog/building-a-mixed-agricultural-order-from-india) covers compatible groupings.",
      },
      {
        heading: "Air without condensation",
        text: "Pack fresh ginger in breathable packing that lets air move around the rhizomes, and avoid condensation, which encourages surface mould. Keep cartons or bags off wet floors, avoid stacking so tightly that air cannot circulate, and do not wash ginger before storage unless it will be used soon. Ginger has a strong odour that other produce, such as [eggplant](/blog/protecting-eggplant-from-chilling-injury-in-transit), can pick up, so store it apart.",
      },
      {
        heading: "Dried ginger needs dry storage",
        text: "Dried ginger is a different product. Keep it in a cool, dry, well-ventilated store away from sunlight and strong odours, in clean bags or lined packing. Moisture is the main risk, bringing mould and insects, and damp storage also raises the risk of mould toxins, so keep it off the floor, reseal opened bags and check stock at intervals; the same principles apply to [packing and shipping dry ginger powder](/blog/exporting-dry-ginger-powder-packaging-labelling-and-shipping).",
      },
      {
        heading: "Check and rotate",
        text: "For both forms, check stock regularly. Remove fresh rhizomes that are soft, sprouting or mouldy, using the [quality checks for fresh and dried ginger](/blog/fresh-and-dried-ginger-what-importers-should-check), and dried pieces showing damp or insect damage, so that problems do not spread. Use stock in the order it arrived and plan volumes around actual demand.",
      },
      {
        heading: "Conclusion",
        text: "Fresh ginger stays firm when it is kept cool but above the chilling range, at fairly high humidity and in breathable packing, while dried ginger needs dry, clean storage. Check both forms regularly, remove damaged stock, and plan volumes around actual demand.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about storing ginger.",
        faq: [
          {
            question: "Why must mature ginger not be chilled?",
            answer: "It is chilling sensitive below about 12 °C, which can cause loss of skin colour, pitting and, in severe cases, internal breakdown.",
          },
          {
            question: "How should dried ginger be stored?",
            answer: "In a cool, dry, well-ventilated store away from sunlight and strong odours, in clean bags or lined packing, kept off the floor and checked at intervals.",
          },
          {
            question: "What conditions suit fresh ginger?",
            answer: "Mature ginger is generally stored at about 12 to 14 °C with 85 to 90 per cent relative humidity, under which it can keep for roughly two to three months.",
          },
          {
            question: "Can ginger share a store with onions or garlic?",
            answer: "Not when those are held near freezing for long storage, because ginger is chilling sensitive. Its odour can also be picked up by produce such as eggplant.",
          },
          {
            question: "Should fresh ginger be washed before storage?",
            answer: "Not unless it will be used soon. Avoid condensation and keep cartons or bags off wet floors.",
          },
        ],
      },
    ],
    // Ginger in Teas, Sauces, Bakery and Beverages
    [
      {
        heading: "Teas and hot drinks",
        text: "Ginger is a familiar flavour in spiced teas, herbal infusions and hot drinks. Tea blenders usually work with dried ginger, cut or crushed to suit their blends, and look for a strong, clean aroma and very little dust; our [illustrative case study on botanical powders for herbal tea and beverage blends](/case-studies/botanical-powders-for-herbal-tea-and-beverage-blends) shows how blenders specify it. Cafés and food service may also use fresh ginger, sliced or grated, in brewed drinks.",
      },
      {
        heading: "Sauces, pastes and cooking",
        text: "Fresh ginger is a base flavour in many Asian cuisines, used in curries, stir-fries, marinades and dipping sauces, and is ground into ginger and ginger-garlic pastes, alongside [fresh garlic for processing](/blog/fresh-garlic-for-food-processing-applications-forms-and-handling). Paste and sauce makers often prefer mature, pungent rhizomes with good yield, and value consistent size so that peeling and cutting lines run smoothly.",
      },
      {
        heading: "Bakery and confectionery",
        text: "Ground dried ginger brings warmth to gingerbread, biscuits, cakes and spiced bakes, and candied ginger appears in confectionery. Bakery manufacturers generally want a consistent flavour strength, fine grind and low foreign matter, whether they grind in-house or buy the ground spice; our [Dry Ginger Powder page](/products/dry-ginger-powder) covers the ground product, and our [illustrative case study on warm spice powders for bakery and confectionery](/case-studies/warm-spice-powders-for-bakery-and-confectionery) shows a typical brief.",
      },
      {
        heading: "Beverages",
        text: "Ginger flavours soft drinks, ginger beers, cordials, juices and shots. Beverage makers may use fresh ginger for pressing, where juiciness and lower fibre help, or dried ginger and extracts for consistency. Claims made on beverage labels are regulated differently in each market, so check local rules before describing any benefit.",
      },
      {
        heading: "Choosing fresh or dried",
        text: "Tell your supplier how the ginger will be used, and agree the form, size and packing per order; our guide to [checking fresh and dried ginger](/blog/fresh-and-dried-ginger-what-importers-should-check) covers what to put on the specification.",
        list: {
          items: [
            "Fresh ginger gives a bright, juicy flavour but needs careful storage at chill-free temperatures and faster use.",
            "Dried ginger is easier to store and ship and gives a deeper, warmer heat, but in some markets, including the EU for ginger from India, it carries additional residue-testing requirements.",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Ginger brings flavour to teas, sauces, pastes, bakery and beverages, and the choice between fresh and dried depends on the product, the storage available and the destination market. Tell your supplier how the ginger will be used, and agree form, size and packing per order.",
      },
      {
        heading: "Frequently asked questions",
        text: "Common questions from food and drink makers.",
        faq: [
          {
            question: "Can fresh ginger be refrigerated?",
            answer: "Ordinary refrigerator temperatures are below the range in which mature ginger keeps best, and can cause chilling injury over time. Cool storage at around 12 to 14 °C is preferred for bulk stock.",
          },
          {
            question: "Is young ginger the same as mature ginger?",
            answer: "Young ginger is harvested early, with thin skin, low fibre and a milder taste, and is more perishable. Mature ginger is more pungent and fibrous and stores longer.",
          },
          {
            question: "Which form of ginger do tea blenders use?",
            answer: "Usually dried ginger, cut or crushed to suit their blends, with a strong, clean aroma and very little dust.",
          },
          {
            question: "What ginger suits pastes and sauces?",
            answer: "Mature, pungent rhizomes with good yield, of consistent size so that peeling and cutting lines run smoothly.",
          },
          {
            question: "How do beverage makers use ginger?",
            answer: "Fresh ginger for pressing, where juiciness and lower fibre help, or dried ginger and extracts for consistency.",
          },
        ],
      },
    ],
  ],
  "other-agricultural-products": [
    // Building a Mixed Agricultural Order from India
    [
      {
        heading: "Why buyers mix orders",
        text: "Many importers, particularly those serving ethnic grocery and food-service markets, need several products in smaller volumes rather than a full load of one item. A mixed order can bring vegetables, tubers, spices and other produce from [our agricultural range](/products#agricultural-products) together in one consignment, which helps fill a container and simplifies receiving at the other end.",
      },
      {
        heading: "Group products that travel together",
        text: "Not every product can share space. Fresh produce differs in the temperature it needs, how it reacts to ethylene and how sensitive it is to odours or moisture. Onions, garlic and cabbage keep best near 0 °C, while cucumbers, okra, eggplant, green chillies and ginger can suffer [chilling injury](/blog/why-cucumbers-need-careful-temperature-control) at that temperature. Cabbage and cucumbers are sensitive to ethylene from ripening fruit, and onions and ginger give off odours other products can absorb. Dry spices travel very differently again. Discuss which items can be combined safely before fixing the order.",
      },
      {
        heading: "One specification per product",
        text: "Putting this in a single order sheet, product by product, makes it easier to quote, pack and check. Confirm each line against a sample where that is practical. Each item in a mixed order still needs its own clear specification:",
        list: {
          items: [
            "Variety or type",
            "Size range",
            "Quality expectations",
            "Packing",
            "Labelling",
          ],
        },
      },
      {
        heading: "Documents for each line",
        text: "Import requirements are set product by product. In the European Union, for example, some vegetables from India, such as green chillies and drumsticks, need an official certificate and residue analysis for every consignment, while others need only the phytosanitary certificate. Check the requirements for each product in the mix, because one missing document can hold up the whole consignment; our guide to [phytosanitary certificates and export documents](/blog/phytosanitary-certificates-and-export-documents-for-fresh-produce) sets out the full list.",
      },
      {
        heading: "Packing and loading plan",
        text: "With several products, the way cartons and bags are arranged matters. Agree packing types and marking for every line, and ask how the load will be planned.",
        list: {
          items: [
            "Heavier goods should not crush lighter ones.",
            "Ventilation paths should stay open.",
            "Each product should be clearly marked for quick unloading.",
          ],
        },
      },
      {
        heading: "Timing it right",
        text: "Each product has its own season and harvest window, so the best mixed order is planned around when every item is available in good condition. Share your full list and expected volumes early when you [request a quotation](/contact), and accept that some lines may need to change depending on the season; our guide to [planning imports around harvests](/blog/seasonality-planning-fresh-produce-imports-around-harvests) explains why.",
      },
      {
        heading: "Conclusion",
        text: "A mixed order works when the products in it can safely travel together, each line has its own specification and documents, and the load is planned for ventilation and unloading. Share your full list and volumes early, and expect some lines to change with the season.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about mixed orders.",
        faq: [
          {
            question: "Can onions and cucumbers travel in the same container?",
            answer: "Not well. Onions keep best near 0 °C, while cucumbers can suffer chilling injury at that temperature, so discuss compatible groupings before fixing the order.",
          },
          {
            question: "Does each product need its own documents?",
            answer: "Yes. Import requirements are set product by product, and one missing document can hold up the whole consignment.",
          },
          {
            question: "Why do importers build mixed orders?",
            answer: "Many need several products in smaller volumes rather than a full load of one item. A mixed order helps fill a container and simplifies receiving.",
          },
          {
            question: "What should a mixed-order specification include?",
            answer: "For each line: variety or type, size range, quality expectations, packing and labelling, ideally in one order sheet, product by product.",
          },
          {
            question: "How should a mixed load be packed?",
            answer: "So that heavier goods do not crush lighter ones, ventilation paths stay open, and each product is clearly marked for quick unloading.",
          },
        ],
      },
    ],
    // Seasonality: Planning Fresh Produce Imports Around Harvests
    [
      {
        heading: "Harvests set the rhythm",
        text: "Fresh produce is available in good condition when it is harvested, and each crop has its own season. Outside that window, supply may come from storage, from other growing areas or not at all. Knowing roughly when your products are in season is the starting point for planning imports that arrive in the condition your customers expect.",
      },
      {
        heading: "Season affects quality and price",
        text: "At the height of a harvest, supply is usually plentiful and quality consistent. Early and late in a season, volumes can be tighter and quality more variable, and prices tend to move with supply. Weather can shift the timing from year to year, so treat any calendar as a guide and confirm availability per order.",
      },
      {
        heading: "Stored crops and fresh crops",
        text: "Some products, such as onions, garlic and many dried spices, can be stored after harvest and shipped across much of the year. India's onions, for example, come from [more than one season](/blog/red-pink-and-white-onions-choosing-the-right-type), with the spring rabi crop making up about 70 to 75 per cent of production (Press Information Bureau, Government of India, 2025). More perishable items, such as okra, beans and green chillies, need to move soon after picking. Planning around this difference helps you decide what to buy steadily and what to buy in concentrated windows.",
      },
      {
        heading: "Policy can move with supply",
        text: "When domestic supply is tight, governments sometimes restrict exports. India, for example, prohibited onion exports from December 2023 to May 2024 before easing and then removing its export duty, as our [fresh onion export guide](/blog/fresh-onion-export-guide-quality-grading-storage-and-buyer-requirements) describes. Build a check on current export policy into your planning for sensitive products.",
      },
      {
        heading: "Plan ahead with your supplier",
        text: "Share the following with your supplier, who can then advise on likely availability, including for a [mixed agricultural order](/blog/building-a-mixed-agricultural-order-from-india), and suggest when to place orders, so that supply is planned rather than chased:",
        list: {
          items: [
            "Your expected volumes for the year",
            "The products you need most",
            "Any periods of peak demand in your market",
          ],
        },
      },
      {
        heading: "Keep some flexibility",
        text: "Even with a plan, seasons change. Build some flexibility into your programme, such as alternative sizes, varieties or shipment dates, so that a late harvest or poor weather does not leave you without stock. Agree how changes will be communicated before the season begins, and [request a quotation](/contact) early for peak periods.",
      },
      {
        heading: "Conclusion",
        text: "Fresh produce supply follows the harvest calendar, and quality, price and even export policy shift with it. Plan purchases with your supplier around the seasons, separate storable crops from perishable ones, and keep some flexibility in your programme.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about seasonality.",
        faq: [
          {
            question: "Why do prices change through the season?",
            answer: "Prices tend to move with supply: at the height of a harvest supply is usually plentiful, while early and late in a season volumes can be tighter.",
          },
          {
            question: "Can export policy affect supply?",
            answer: "Yes. When domestic supply is tight, governments sometimes restrict exports, as India did with onions from December 2023 to May 2024.",
          },
          {
            question: "Which products can be bought steadily through the year?",
            answer: "Products that store after harvest, such as onions, garlic and many dried spices. Perishables such as okra, beans and green chillies need to move soon after picking.",
          },
          {
            question: "What should I share with my supplier to plan the season?",
            answer: "Your expected volumes for the year, the products you need most and any periods of peak demand in your market.",
          },
          {
            question: "How can I protect a programme against a poor harvest?",
            answer: "Build in flexibility, such as alternative sizes, varieties or shipment dates, and agree how changes will be communicated before the season begins.",
          },
        ],
      },
    ],
    // Phytosanitary Certificates and Export Documents for Fresh Produce
    [
      {
        heading: "The phytosanitary certificate",
        text: "Fresh produce is a plant product, so most destination countries require a phytosanitary certificate. In India it is issued by the national plant protection organisation, the Directorate of Plant Protection, Quarantine and Storage, through its online PQMS system, after inspection, and states that the consignment meets the importing country's plant-health requirements. The European Union, under Regulation (EU) 2019/2072, requires one for almost all fresh fruit and vegetables from non-EU countries, with only a handful of exempt fruits such as pineapples, coconuts, durians, bananas and dates.",
      },
      {
        heading: "Additional declarations",
        text: "Some importing countries require specific statements on the phytosanitary certificate about particular pests. EU rules, for example, require additional declarations for fruits of [chillies](/blog/green-chilli-export-guide-pungency-length-and-freshness), [eggplant](/blog/eggplant-export-guide-gloss-shape-and-firmness) and [bitter gourd](/blog/bitter-gourd-quality-ridges-colour-and-firmness) concerning pests such as Thrips palmi and fall armyworm. These must be arranged before harvest and packing, not at the port, so check them early.",
      },
      {
        heading: "Food-safety certificates",
        text: "Plant health and food safety are separate. For certain products and origins, the EU also requires an official certificate and laboratory results showing compliance with pesticide residue limits for every consignment; for India this currently includes fresh chillies, [drumsticks](/blog/fresh-drumsticks-pod-length-tenderness-and-colour), yardlong beans and curry leaves, among others. These documents sit alongside the phytosanitary certificate, not in place of it.",
      },
      {
        heading: "Commercial and transport documents",
        text: "A commercial invoice and packing list accompany almost every shipment, together with the transport document. Details on all of them should match each other and the goods:",
        list: {
          items: [
            "Commercial invoice: sets out the goods, value and terms of sale.",
            "Packing list: details how the goods are packed, marked and weighed.",
            "Bill of lading for sea freight, or air waybill for air freight: records that the carrier has received the goods and is used to collect them at destination.",
          ],
        },
      },
      {
        heading: "Origin, traceability and other documents",
        text: "A certificate of origin may be needed to show where the goods come from, which can matter for duties and trade agreements. For many vegetables exported from India, APEDA's HortiNet traceability system links each consignment to registered farms. Some markets or buyers also ask for treatment records or other certificates. For the United States, the USDA APHIS Agricultural Commodity Import Requirements (ACIR) database, which replaced the older FAVIR database in 2022, sets out the conditions for each commodity and country.",
      },
      {
        heading: "Getting documents right",
        text: "Delays at the border often come from small mismatches between documents, labels and the goods themselves. Agree the document list as part of the order when you [request a quotation](/contact), share the consignee details and any import permits in good time, and check draft documents before the shipment leaves.",
      },
      {
        heading: "Conclusion",
        text: "Fresh produce from India travels with a phytosanitary certificate, any additional declarations or food-safety certificates the destination requires, and matching commercial and transport documents. Agree the document list as part of the order and check drafts before shipment, because small mismatches cause most border delays.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about export documents.",
        faq: [
          {
            question: "Who issues phytosanitary certificates in India?",
            answer: "India's national plant protection organisation, the Directorate of Plant Protection, Quarantine and Storage, through its online PQMS system, after inspection.",
          },
          {
            question: "Is a residue certificate the same as a phytosanitary certificate?",
            answer: "No. Plant health and food safety are separate: where a residue certificate is required, it sits alongside the phytosanitary certificate, not in place of it.",
          },
          {
            question: "Which fresh fruits are exempt from the EU phytosanitary certificate?",
            answer: "Only a handful, such as pineapples, coconuts, durians, bananas and dates, under Regulation (EU) 2019/2072, Annex XI.",
          },
          {
            question: "What are additional declarations?",
            answer: "Specific statements on the phytosanitary certificate about particular pests. For the EU, chillies, eggplant and bitter gourd need them for pests such as Thrips palmi and fall armyworm, arranged before harvest and packing.",
          },
          {
            question: "Where can I check import requirements for the United States?",
            answer: "In the USDA APHIS Agricultural Commodity Import Requirements (ACIR) database, which replaced the older FAVIR database in 2022.",
          },
        ],
      },
    ],
  ],
};
