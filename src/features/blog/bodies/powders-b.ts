import type { ArticleBody } from "@/features/products/blog";

/**
 * Full text for the powders-b articles in features/products/blog.ts, by product
 * slug, in the same order as that product's articles.
 */
export const powdersBBodies: Record<string, readonly [ArticleBody, ArticleBody, ArticleBody]> = {
  "garlic-powder": [
    // Garlic Powder Buying Guide: Colour, Aroma and Free-Flowing Texture
    [
      {
        heading: "In brief",
        text: "A good garlic powder is off-white to pale cream, smells strongly of garlic, pours freely and is very dry. Before a first order, agree the form and particle size, a low moisture limit, the strength and microbiological criteria your product needs, and whether any anti-caking agent is acceptable.",
      },
      {
        heading: "What you are buying",
        text: "Garlic powder is made from the cloves of [fresh garlic bulbs](/products/garlic), which are dehydrated and then milled. A straight garlic powder contains garlic only, although some specifications permit a food-grade anti-caking agent, which must then be labelled. Its quality depends almost entirely on the garlic that went in and on how carefully it was dried, milled and packed. Dehydrated garlic is also sold in other forms, so name the one you need:",
        list: {
          items: ["Flakes", "Minced", "Kibbled", "Granules"],
        },
      },
      {
        heading: "Judge the colour",
        text: "Good garlic powder is off-white to a light creamy beige. Some variation is natural and depends on the garlic and the drying, but a distinctly brown or greyish tint can point to scorching during dehydration, old stock or exposure to moisture. Compare samples side by side in daylight, and agree a reference sample so that later lots can be checked against the same standard.",
      },
      {
        heading: "Smell and taste",
        text: "Open the sample and the aroma should be clearly and strongly of garlic: pungent and savoury, without musty, burnt or stale notes. A small amount stirred into warm water releases more of the flavour and makes comparison easier. A weak, flat smell usually means the powder has lost much of its character through age, heat or poor packing, and it will need a higher dose in your recipe. Where strength matters, some buyers specify a minimum content of volatile organic sulphur compounds, which carry garlic's flavour. India's FSSAI standard sets a minimum of 0.3 per cent of these compounds, on a dry basis, for dried garlic (FSSAI Food Products Standards and Food Additives Regulations, 2011, section 2.9.26).",
      },
      {
        heading: "Check the texture and moisture",
        text: "Garlic powder should pour freely and look even. Lumps that break easily under a finger are a sign that the powder has picked up moisture; hard cakes suggest it has been exposed for some time, and our guide to [stopping garlic powder from caking in storage and transit](/blog/stopping-garlic-powder-from-caking-in-storage-and-transit) explains how to prevent it. Because dehydrated garlic is so dry, moisture limits are low: India's FSSAI standard sets a maximum of 5 per cent for garlic powder (the same standard, section 2.9.26). State the particle size and moisture limit your process needs and ask for both to be reported per lot.",
      },
      {
        heading: "Microbiology",
        text: "Garlic is dried at temperatures chosen to protect its flavour, which means drying is not a reliable kill step for bacteria. Buyers who use garlic powder in ready-to-eat foods, such as snack seasonings and dips, commonly set microbiological criteria and may require a microbial reduction treatment; our [illustrative case study on sourcing powders for a snack seasoning line](/case-studies/snack-seasoning-powders-for-savoury-coatings) shows the kind of brief involved. Agree these criteria, and any method restrictions in your destination market, on the specification before production.",
      },
      {
        heading: "Agree the specification",
        text: "Before a first order, request a sample, the specification sheet and details of how each lot is checked. Recognised product standards for dried garlic include Codex CXS 347-2019, Standard for Dried or Dehydrated Garlic, and ISO 5560, Dehydrated garlic (Allium sativum L.), Specification, which buyers can refer to when drafting a specification. Confirming the terms in writing up front keeps every shipment consistent with the sample you approved. Freshland Exports supplies garlic powder with a minimum order quantity of 500 kg. When you [request a quotation](/contact), share the points a typical specification covers:",
        list: {
          items: [
            "Form and particle size",
            "Colour",
            "Moisture",
            "Extraneous matter",
            "Flavour strength",
            "Microbiology",
            "Any contaminant tests your customers expect",
            "Packaging and labelling",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Garlic powder is judged on a pale, even colour, a strong clean garlic aroma and a dry, free-flowing texture. Put the form, particle size, moisture limit, flavour strength and microbiological criteria in writing, and keep an approved reference sample. Every later lot can then be checked against the same terms.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask when assessing garlic powder.",
        faq: [
          {
            question: "What colour should garlic powder be?",
            answer: "Off-white to a light creamy beige. A distinctly brown or greyish tint can point to scorching during dehydration, old stock or exposure to moisture.",
          },
          {
            question: "What is the FSSAI moisture limit for garlic powder?",
            answer: "India's FSSAI standard sets a maximum of 5 per cent moisture for garlic powder. Your own specification can set the limit your process needs.",
          },
          {
            question: "How can I compare the aroma of two samples?",
            answer: "Stir a small amount of each into warm water, which releases more of the flavour. A pungent, savoury smell without musty, burnt or stale notes is what to look for.",
          },
          {
            question: "Why does garlic powder need microbiological criteria?",
            answer: "Garlic is dried at temperatures chosen to protect its flavour, so drying is not a reliable kill step for bacteria. Buyers using it in ready-to-eat foods commonly set criteria and may require a microbial reduction treatment.",
          },
          {
            question: "Can garlic powder contain an anti-caking agent?",
            answer: "Some specifications permit a food-grade anti-caking agent, which must then be labelled. A straight garlic powder contains garlic only.",
          },
        ],
      },
    ],
    // Stopping Garlic Powder from Caking in Storage and Transit
    [
      {
        heading: "Why garlic powder cakes",
        text: "Dehydrated garlic readily draws moisture from the air. As the powder takes up humidity, its particles stick together, first into soft lumps and then into hard cakes that will not flow through dosing equipment. Moisture also dulls the aroma and colour. Almost every caking problem comes back to the same cause, so storage and packing are really about keeping humid air away from a product that leaves the mill at only a few per cent moisture. Onion powder behaves the same way, as our guide to [keeping onion powder free-flowing in storage and transit](/blog/keeping-onion-powder-free-flowing-in-storage-and-transit) explains.",
      },
      {
        heading: "Pack for a long journey",
        text: "For export, garlic powder needs packing that acts as a barrier to moisture, such as lined bags or sealed inner liners inside an outer bag or carton. Seal liners well, avoid punctures during filling and handling, and agree the packing format with your supplier before the order is produced. Good packing is the cheapest protection against a container's changing temperatures and humidity.",
      },
      {
        heading: "Anti-caking agents",
        text: "Some buyers allow a small amount of a permitted anti-caking agent to keep garlic powder free-flowing in humid conditions; others want a straight powder with nothing added. Either is workable, but the choice must be agreed in advance, must be permitted in your destination market and must appear on the ingredient list of the finished product. Good packing and storage remain the main protection either way.",
      },
      {
        heading: "Mind the container",
        text: "Sea freight can expose cargo to warm days, cool nights and condensation inside the container. Where shipments cross very humid regions, discuss with your logistics partner whether additional moisture protection is sensible. Several simple measures help:",
        list: {
          items: [
            "Dry, sound containers",
            "Clean floors",
            "Careful stowage away from wet cargo",
            "No longer than necessary standing in hot, damp ports",
          ],
        },
      },
      {
        heading: "Store it cool and dry",
        text: "On arrival, keep garlic powder in a cool, dry warehouse, off the floor and away from walls, direct sunlight and sources of heat or steam. Strong-smelling goods should be kept apart, both to protect the powder and to stop garlic aroma travelling into other products. Rotate stock so that older lots are used first, and keep bags closed until they are needed.",
      },
      {
        heading: "Handle opened bags with care",
        text: "Once a bag is opened, the clock starts again. If soft lumps do appear, they can often be broken up and sieved, but hard caking is a sign that the powder has been exposed for too long and should be checked before use. To keep part-used stock free-flowing:",
        list: {
          items: [
            "Use clean, dry scoops",
            "Reseal the liner tightly straight after use, or move part-used stock into an airtight container",
            "Avoid opening bags in steamy production areas",
          ],
        },
      },
      {
        heading: "Shelf life depends on conditions",
        text: "How long garlic powder stays free-flowing and aromatic depends on its moisture at packing, the packaging and how it is stored, so there is no single figure that fits every shipment. Agree the best-before period and storage conditions on the specification sheet, and check stock regularly for lumps, darkening or a weakening smell. Our [garlic powder buying guide](/blog/garlic-powder-buying-guide-colour-aroma-and-free-flowing-texture) covers the other points to agree.",
      },
      {
        heading: "Conclusion",
        text: "Garlic powder cakes because it draws moisture from the air, so protection comes down to barrier packing, a dry container and cool, dry storage, with careful handling once a bag is opened. Agree the packing format, any anti-caking agent and the best-before period before production. To discuss packing for your route, [request a quotation](/contact).",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about keeping garlic powder free-flowing.",
        faq: [
          {
            question: "Why does garlic powder form lumps?",
            answer: "Dehydrated garlic readily draws moisture from the air, and as it takes up humidity its particles stick together, first into soft lumps and then into hard cakes.",
          },
          {
            question: "What packing suits garlic powder for export?",
            answer: "Packing that acts as a barrier to moisture, such as lined bags or sealed inner liners inside an outer bag or carton. Agree the format with your supplier before the order is produced.",
          },
          {
            question: "Should I accept an anti-caking agent?",
            answer: "Either a straight powder or one with a permitted anti-caking agent is workable. The choice must be agreed in advance, permitted in your destination market and declared on the finished product's ingredient list.",
          },
          {
            question: "Can caked garlic powder still be used?",
            answer: "Soft lumps can often be broken up and sieved. Hard caking means the powder has been exposed for too long and should be checked before use.",
          },
          {
            question: "How long does garlic powder keep?",
            answer: "It depends on its moisture at packing, the packaging and the storage conditions, so there is no single figure. Agree the best-before period and storage conditions on the specification sheet.",
          },
        ],
      },
    ],
    // Garlic Powder in Seasonings, Snack Coatings and Ready Meals
    [
      {
        heading: "Why manufacturers choose powder",
        text: "Fresh garlic brings flavour but also peeling, chopping, waste and a short life. Garlic powder delivers the same savoury character in a dry form that can be weighed, stored and dosed with precision. For food manufacturers that need the same flavour in every batch, a powder that blends evenly into dry mixes and disperses into liquids is often far easier to work with than fresh bulbs.",
      },
      {
        heading: "Seasonings and rubs",
        text: "Garlic powder is a core ingredient in seasoning blends, spice rubs, seasoning salts and herb mixes. Its fine texture lets it mix evenly with salt, pepper, chilli and herbs, and its savoury depth rounds out the blend. Seasoning makers usually specify a particle size that matches the other ingredients, so that the blend stays uniform and does not separate in the pack. Onion powder plays a similar part, as our article on [onion powder in seasonings, sauces and ready meals](/blog/onion-powder-in-seasonings-sauces-and-ready-meals) describes.",
      },
      {
        heading: "Snack coatings",
        text: "In snack production, garlic powder is a familiar part of the coating on chips, crisps, nuts, popcorn and extruded snacks, often alongside onion powder, cheese and spices. A free-flowing powder spreads evenly in tumble drums and sticks well to oiled surfaces. Because the seasoning is applied after frying or baking, it is not cooked again, so snack makers pay particular attention to the microbiological quality of the powder, as in our [illustrative case study on sourcing powders for a snack seasoning line](/case-studies/snack-seasoning-powders-for-savoury-coatings).",
      },
      {
        heading: "Sauces, soups and ready meals",
        text: "In wet applications, garlic powder hydrates and releases its flavour into sauces, dressings, dips, soups, gravies and ready meals. It removes the need to prepare fresh garlic on the line and gives a steady flavour from batch to batch, a need explored in our [illustrative case study on ground spices and onions for ready-meal production](/case-studies/ground-spices-for-ready-meal-production). It also suits instant mixes and dry soup bases, where a dry ingredient is essential and fresh garlic is not an option.",
      },
      {
        heading: "Labelling the finished product",
        text: "Garlic powder is not always treated as a spice on labels. In the United States, for example, FDA rules exclude garlic from the definition of spice, so garlic powder must be declared by its own name rather than within the word spices (21 CFR 101.22(a)(2) and (h)(3)). Check the rules in each market where your product is sold, and declare any anti-caking agent the powder contains.",
      },
      {
        heading: "Food service and repacking",
        text: "Restaurants, caterers and quick-service kitchens use garlic powder for marinades, garlic bread, breading mixes and everyday seasoning, valuing its convenience and consistency. Importers and repackers buy it in bulk for retail and catering packs. Whatever the use, agree with your supplier the points that make the powder suit your process and your market:",
        list: {
          items: ["Particle size", "Packaging", "Quality parameters"],
        },
      },
      {
        heading: "Conclusion",
        text: "Garlic powder gives seasoning blends, snack coatings and ready meals a steady savoury note without the work of fresh garlic. Match the particle size to your process, set microbiological criteria where the powder is not cooked again, and label it correctly for each market. Our [garlic powder buying guide](/blog/garlic-powder-buying-guide-colour-aroma-and-free-flowing-texture) covers the quality checks, and you can [request a quotation](/contact) when your specification is ready.",
      },
      {
        heading: "Frequently asked questions",
        text: "Common questions from food manufacturers.",
        faq: [
          {
            question: "Powder or granules?",
            answer: "Powder disperses fastest and suits seasonings, coatings and smooth sauces. Granules flow with less dust and give a slightly slower flavour release, which some rubs and dry mixes prefer. Test both in your product if you are unsure.",
          },
          {
            question: "How much garlic powder replaces fresh garlic?",
            answer: "It depends on the strength of the powder and on your recipe, so there is no reliable fixed ratio. Run a trial batch with the approved sample and set the dose by taste.",
          },
          {
            question: "Why do snack makers watch the microbiology of garlic powder?",
            answer: "Snack seasoning is applied after frying or baking and is not cooked again, so the powder's microbiological quality carries through to the finished snack.",
          },
          {
            question: "Is garlic powder declared as a spice in the United States?",
            answer: "No. US rules exclude garlic from the definition of spice, so garlic powder must be declared by its own name rather than within the word spices.",
          },
          {
            question: "Why does particle size matter in a seasoning blend?",
            answer: "A particle size that matches the other ingredients keeps the blend uniform and stops it separating in the pack.",
          },
        ],
      },
    ],
  ],
  "dry-mango-powder": [
    // Dry Mango Powder Quality: Tang, Colour and Freshness
    [
      {
        heading: "In brief",
        text: "Amchur is bought for its sourness, so acidity is the parameter that matters most, followed by colour, dryness and freedom from insects and mould. Ask whether the powder contains added salt, agree an acidity range and a moisture limit, and approve a sample before ordering.",
      },
      {
        heading: "What makes good amchur",
        text: "Dry mango powder, or amchur, is valued for one thing above all: a clean, sharp sourness with a fruity edge. Because it is simply unripe green [mango](/products/mango) that has been dried and ground, its quality reflects the fruit, the drying and the grinding, the steps described in our guide [from green mango to amchur](/blog/from-green-mango-to-amchur-how-dry-mango-powder-is-made). When you assess a sample, you are really checking how well each of those steps was carried out and how the powder has been kept since.",
      },
      {
        heading: "Taste the tang, then measure it",
        text: "A small pinch on the tongue should give an immediate, bright sourness, followed by a faint fruity sweetness. Flat, dull or bitter notes can point to fruit picked at the wrong stage or to old stock. Taste is a good first check, but acidity can also be measured: India's FSSAI standard for amchur requires acidity, expressed as anhydrous tartaric acid, of between 12 and 26 per cent by weight (FSSAI Food Products Standards and Food Additives Regulations, 2011, section 2.9.24). If sourness is critical to your recipe, agree an acidity range and ask for it to be reported per lot.",
      },
      {
        heading: "Look at the colour",
        text: "Amchur is naturally pale, ranging from light beige to light brown. Some variation between lots is normal, depending on the fruit and the drying. A noticeably dark or patchy colour can suggest over-drying, scorching or moisture damage during storage. Amchur should not contain added colouring. Agree a reference sample with your supplier so that each shipment can be compared against the same standard.",
      },
      {
        heading: "Check texture, moisture and cleanliness",
        text: "The powder should be fine and dry. Because amchur readily absorbs moisture, soft lumps are common in powder that has been exposed to humid air, and hard cakes or a musty smell are a warning sign; our [illustrative case study on keeping dry mango powder free-flowing](/case-studies/keeping-dry-mango-powder-free-flowing) looks at this problem. For reference, FSSAI sets a maximum of 12 per cent moisture and limits on ash and crude fibre (the same standard); set the moisture limit your product needs on the specification. Dried fruit is also attractive to insects, so look for:",
        list: {
          items: ["Webbing", "Live insects", "Insect fragments"],
        },
      },
      {
        heading: "Salted or unsalted",
        text: "Indian food standards allow edible common salt to be added to amchur, up to 5 per cent by weight on a dry basis (the same standard), and some powder on the market is salted. If your recipe or label needs an unsalted product, say so in your enquiry and on the specification, so that quotations are for the same product.",
      },
      {
        heading: "Agree the paperwork",
        text: "Before a first order, ask for a sample, a specification sheet and details of how each lot is checked. For amchur, the buyer's specification carries particular weight, and confirming it up front makes it far easier to keep every shipment consistent. Freshland Exports supplies dry mango powder (amchur) with a minimum order quantity of 500 kg. When you [request a quotation](/contact), share the parameters that matter for your product and your destination market:",
        list: {
          items: [
            "Acidity",
            "Moisture",
            "Fineness",
            "Salt",
            "Any tests your customers require",
            "Packaging and labelling",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Good amchur has a bright, clean sourness, a pale even colour and a fine, dry texture free from insects and mould. Because sourness is what you are paying for, agree an acidity range alongside moisture, fineness and salt, and approve a reference sample. Each shipment can then be checked against the same written terms.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about amchur quality.",
        faq: [
          {
            question: "Which quality parameter matters most for amchur?",
            answer: "Acidity, because amchur is bought for its sourness. Colour, dryness and freedom from insects and mould follow.",
          },
          {
            question: "What acidity does the FSSAI standard require?",
            answer: "Acidity, expressed as anhydrous tartaric acid, of between 12 and 26 per cent by weight. Agree the range your recipe needs and ask for it to be reported per lot.",
          },
          {
            question: "What colour should amchur be?",
            answer: "Naturally pale, from light beige to light brown. A noticeably dark or patchy colour can suggest over-drying, scorching or moisture damage, and amchur should not contain added colouring.",
          },
          {
            question: "Does amchur contain salt?",
            answer: "Some does. Indian food standards allow edible common salt up to 5 per cent by weight on a dry basis, so state on your enquiry and specification if you need an unsalted product.",
          },
          {
            question: "What is the FSSAI moisture limit for amchur?",
            answer: "A maximum of 12 per cent. Set the moisture limit your own product needs on the specification.",
          },
        ],
      },
    ],
    // From Green Mango to Amchur: How Dry Mango Powder Is Made
    [
      {
        heading: "Starting with unripe fruit",
        text: "Amchur begins with [mangoes](/products/mango) picked while still green and hard. At this stage the fruit is sour rather than sweet, and it is that sourness the powder is prized for. Ripe mangoes would give a sweeter, softer product that is harder to dry, so the choice of fruit and the timing of the harvest set the character of the finished powder. Sound fruit matters too: bruised, diseased or fallen fruit carries a higher risk of mould. From the orchard to the bag, the process runs:",
        list: {
          ordered: true,
          items: [
            "Picking green, unripe mangoes",
            "Washing, peeling, slicing and removing the stone",
            "Drying the slices until brittle",
            "Sorting and cleaning the dried slices",
            "Grinding and sieving to the agreed fineness",
            "Packing in moisture-resistant packaging",
          ],
        },
      },
      {
        heading: "Peeling and slicing",
        text: "The green mangoes are washed, peeled and cut into thin slices, with the stone removed. Slicing thinly matters: it exposes more surface to the air so the fruit dries evenly and more quickly. Uneven or thick pieces dry slowly and can stay moist at the centre, which increases the risk of spoilage and makes the later grinding less uniform.",
      },
      {
        heading: "Drying the slices",
        text: "The slices are then dried, in the sun or in driers, until they are brittle and snap cleanly. Drying removes the water that would otherwise let the fruit spoil and concentrates the sour flavour. Care is needed throughout: too much heat can darken the slices and dull their taste, while drying too slowly in damp conditions can lead to mould. Slices dried in the open also need protecting from dust, birds and insects. Dried slices are traded on their own as well, for grinding later.",
      },
      {
        heading: "Sorting and cleaning the dried slices",
        text: "This is the last practical chance to remove defects, because once the slices are milled, a mouldy or infested piece is mixed through the whole lot. Before grinding, dried slices are sorted to remove:",
        list: {
          items: [
            "Pieces that are mouldy, discoloured, insect-damaged or still soft",
            "Stones and peel",
            "Any foreign matter",
          ],
        },
      },
      {
        heading: "Grinding and sieving",
        text: "The dried slices are ground into powder and sieved to the agreed fineness. Grinding releases the fruit's tang into a form that blends evenly into masalas and seasonings. The particle size is set to suit the buyer's use, whether a fine powder for spice blends or a slightly coarser grind for other applications. If salt is part of the agreed product, it is added and mixed at this stage.",
      },
      {
        heading: "Packing to keep it dry",
        text: "Because amchur absorbs moisture easily, it is packed promptly into moisture-resistant packaging, such as lined bags or sealed inner liners, in the format agreed with the buyer, and each lot is coded so it can be traced. Good packing protects the powder through storage and shipping and keeps it free-flowing and sharp-tasting until it reaches the spice blender, food manufacturer or repacker, a point our [illustrative case study on keeping dry mango powder free-flowing](/case-studies/keeping-dry-mango-powder-free-flowing) follows further.",
      },
      {
        heading: "Conclusion",
        text: "Amchur's quality is set at every step, from picking sound green fruit and slicing it thinly to careful drying, thorough sorting and prompt, moisture-resistant packing. Our guide to [dry mango powder quality](/blog/dry-mango-powder-quality-tang-colour-and-freshness) shows how to check the result in a sample. When you know the fineness, salt and packing you need, [request a quotation](/contact).",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about how amchur is made.",
        faq: [
          {
            question: "Why is amchur made from unripe mangoes?",
            answer: "Green mangoes are sour rather than sweet, and that sourness is what the powder is prized for. Ripe mangoes would give a sweeter, softer product that is harder to dry.",
          },
          {
            question: "Why are the mango slices cut thinly?",
            answer: "Thin slices expose more surface to the air, so the fruit dries evenly and more quickly. Thick pieces can stay moist at the centre, which increases the risk of spoilage.",
          },
          {
            question: "How are the slices dried?",
            answer: "In the sun or in driers, until they are brittle and snap cleanly. Too much heat can darken the slices, while drying too slowly in damp conditions can lead to mould.",
          },
          {
            question: "Why are dried slices sorted before grinding?",
            answer: "It is the last practical chance to remove defects. Once the slices are milled, a mouldy or infested piece is mixed through the whole lot.",
          },
          {
            question: "When is salt added to amchur?",
            answer: "If salt is part of the agreed product, it is added and mixed at the grinding and sieving stage.",
          },
        ],
      },
    ],
    // Dry Mango Powder (Amchur) in Chaat Masala, Chutneys and Snacks
    [
      {
        heading: "A sour note without liquid",
        text: "Many dishes need sourness, but liquid souring agents such as tamarind pulp, vinegar or lemon juice add moisture. Amchur brings a comparable tang in a dry form. That makes it especially useful in spice blends, dry snack seasonings and any product where extra moisture would cause clumping, sogginess or a shorter shelf life.",
      },
      {
        heading: "Chaat masala and other blends",
        text: "Amchur is one of the defining ingredients of chaat masala, giving the blend its familiar sharp, tangy lift. It also appears in many tandoori, chana and vegetable masalas. Spice blend manufacturers rely on it for a consistent sour note, so they usually specify acidity, fineness and colour closely to keep their blends uniform from batch to batch, as in our [illustrative case study on dry mango powder for tangy seasonings and chaat-style blends](/case-studies/amchur-for-tangy-seasoning-and-chaat-blends).",
      },
      {
        heading: "Snack seasonings",
        text: "In the snack industry, amchur adds a tangy edge to namkeen, chips, coated nuts and other savoury snacks, often alongside chilli, black salt and other spices. Because it is dry, it mixes easily with other seasoning ingredients and sticks well to coated snacks, giving a bright flavour that balances salt and heat. Its tendency to absorb moisture means seasoning blends containing amchur need good packing too.",
      },
      {
        heading: "Chutneys, pickles and curries",
        text: "Amchur brings fruity sourness to chutneys, pickles and relishes, as our [illustrative case study on whole spices and amchur for pickle manufacturing](/case-studies/whole-spices-for-pickle-manufacturing) shows, and is used in vegetable curries, dals and stuffed vegetables to brighten rich or earthy flavours. In meat marinades it adds tang alongside other spices. In ready meals and instant mixes, it gives manufacturers a dependable sour note that does not depend on fresh fruit being in season.",
      },
      {
        heading: "Choosing the right supply",
        text: "Whether you are a spice blender, snack maker or importer supplying the food service trade, ask for a sample to test in your own recipe, and confirm how each lot will be checked. Our guide to [dry mango powder quality](/blog/dry-mango-powder-quality-tang-colour-and-freshness) explains what to look for. That way, the amchur you receive behaves the same way in every production run. Before ordering, agree:",
        list: {
          items: ["Acidity", "Fineness", "Salt content", "Packaging", "Quality parameters"],
        },
      },
      {
        heading: "Conclusion",
        text: "Amchur gives chaat masala, snack seasonings, chutneys and curries a bright sour note without adding liquid. Agree acidity, fineness and salt content to suit your product, test a sample in your own recipe, and protect blends that contain it from moisture. When you are ready to source it, [request a quotation](/contact).",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions food makers often ask about amchur.",
        faq: [
          {
            question: "Can amchur replace tamarind or lemon juice?",
            answer: "In many dry and low-moisture products, yes, and it is often chosen for exactly that reason. The flavour is fruitier than vinegar and different from tamarind, so adjust the dose by tasting a trial batch.",
          },
          {
            question: "Is amchur the same as dried mango slices?",
            answer: "Amchur is the powder ground from dried unripe mango slices. The slices themselves are also traded, mainly for grinding or for cooking whole in some regional dishes.",
          },
          {
            question: "Why is amchur used in chaat masala?",
            answer: "It is one of the blend's defining ingredients, giving chaat masala its familiar sharp, tangy lift.",
          },
          {
            question: "What do spice blenders specify for amchur?",
            answer: "They usually specify acidity, fineness and colour closely, so that their blends stay uniform from batch to batch.",
          },
          {
            question: "Do snack seasonings with amchur need special packing?",
            answer: "Yes. Amchur tends to absorb moisture, so seasoning blends that contain it need good packing.",
          },
        ],
      },
    ],
  ],
  "garam-masala": [
    // Sourcing Garam Masala: Agreeing a Blend Recipe with Your Supplier
    [
      {
        heading: "No single recipe",
        text: "Garam masala is not one fixed product. It is a blend of ground spices whose make-up varies by region, by household and by brand. Typical blends draw on spices such as coriander, cumin, black pepper, cloves, cinnamon, green cardamom, Indian bay leaf (tej patta, from Cinnamomum tamala rather than the Mediterranean bay laurel) and nutmeg, but which spices are used, and in what proportions, changes the character of the blend considerably. For a buyer, the recipe is the specification. Our article on [cloves in spice blends, baking and oil extraction](/blog/cloves-in-spice-blends-baking-and-oil-extraction) looks at one of these ingredients in more detail.",
      },
      {
        heading: "Start with your reference",
        text: "The simplest way to begin is to share your own recipe or a reference sample of the blend your customers expect, as in our [illustrative case study on matching a house garam masala recipe](/case-studies/matching-a-house-garam-masala-recipe). A supplier can then prepare trial samples for you to compare side by side. Taste them in the dishes you actually make, not just on their own, because a blend that smells right in the jar can behave differently once cooked into a curry or rice dish.",
      },
      {
        heading: "Agree the details in writing",
        text: "Once a blend is approved, keep a retained sample of it. Agreeing these points clearly at the start makes it far easier to check every later lot against the same standard and to resolve any differences quickly. Record:",
        list: {
          items: [
            "The composition",
            "The fineness of the grind",
            "The colour range you will accept",
            "The moisture limit",
            "Any other parameters that matter to you",
          ],
        },
      },
      {
        heading: "Ingredients drive the blend",
        text: "Because garam masala is made from several spices, its quality depends on each of them. Fresh, aromatic whole spices give a lively blend; old or poorly stored spices give a flat one. Ask your supplier:",
        list: {
          items: [
            "How the individual spices are selected, cleaned and checked before grinding",
            "Whether they are ground together or separately",
            "How the blend is mixed to keep it uniform throughout each batch",
          ],
        },
      },
      {
        heading: "Each ingredient brings its own risks",
        text: "A blend inherits the food-safety profile of its parts. Pepper and nutmeg, for example, are among the spices for which EU law limits aflatoxins, and that limit also applies to mixtures containing them (Commission Regulation (EU) 2023/915, entry 1.1.14). Testing the finished blend against your market's limits for mycotoxins, pesticide residues and microbiology, rather than relying on the individual spices alone, gives you a result for the product you actually receive.",
      },
      {
        heading: "Plan for consistency",
        text: "Natural spices vary from crop to crop, so some small variation in a blend is normal. What matters is that each batch stays close to the approved reference. Agree how samples will be checked before shipment, and keep communication open with your supplier so that any adjustments to the recipe are discussed and approved rather than discovered on arrival. Once the recipe is settled, our guide to [importing garam masala in bulk](/blog/importing-garam-masala-in-bulk-specifications-packing-and-labelling) covers specifications, packing and labelling.",
      },
      {
        heading: "Conclusion",
        text: "With garam masala, the agreed recipe is the specification, so start from your own reference, approve a blend through trial samples and record its composition, grind, colour and moisture in writing. Test the finished blend rather than relying on its individual spices. When your reference is ready, [request a quotation](/contact).",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers often ask before commissioning a garam masala blend.",
        faq: [
          {
            question: "Can a supplier match my existing blend?",
            answer: "Usually a close match can be developed from your recipe or a reference sample, then refined through rounds of samples. Approve the final version in writing and keep it as the reference.",
          },
          {
            question: "Should the recipe be confidential?",
            answer: "If the blend is part of your brand, discuss confidentiality with your supplier before sharing the recipe.",
          },
          {
            question: "Which spices go into garam masala?",
            answer: "Typical blends draw on spices such as coriander, cumin, black pepper, cloves, cinnamon, green cardamom, Indian bay leaf and nutmeg. Which are used, and in what proportions, varies by region, household and brand.",
          },
          {
            question: "How should trial samples be judged?",
            answer: "Taste them in the dishes you actually make, not just on their own, because a blend that smells right in the jar can behave differently once cooked.",
          },
          {
            question: "Why test the finished blend rather than each spice?",
            answer: "A blend inherits the food-safety profile of its parts, and EU aflatoxin limits for spices such as pepper and nutmeg also apply to mixtures containing them. Testing the finished blend gives a result for the product you actually receive.",
          },
        ],
      },
    ],
    // Importing Garam Masala in Bulk: Specifications, Packing and Labelling
    [
      {
        heading: "Build a clear specification",
        text: "A bulk order of garam masala should rest on a written specification, built on the blend recipe you have [agreed with your supplier](/blog/sourcing-garam-masala-agreeing-a-blend-recipe-with-your-supplier). Attach the approved reference sample to the specification so that both sides are judging each lot against the same thing. India's FSSAI standard for mixed masala, for reference, sets a maximum of 12 per cent moisture (FSSAI Food Products Standards and Food Additives Regulations, 2011, section 2.9.20, Mixed Masala). The specification should cover:",
        list: {
          items: [
            "The agreed composition",
            "Fineness",
            "Colour range",
            "Moisture",
            "The quality parameters that you and your destination market require",
          ],
        },
      },
      {
        heading: "Contaminant testing for spice blends",
        text: "Spice blends have drawn regulators' attention in recent years. In April 2024, Hong Kong's Centre for Food Safety reported ethylene oxide in several spice mix products from India and directed the trade to stop selling them (Hong Kong Centre for Food Safety, press release, 5 April 2024). In the European Union, the maximum residue level for ethylene oxide in spices is set at the limit of quantification (Commission Regulation (EU) 2015/868), and aflatoxin and ochratoxin A limits apply to spice mixtures (Commission Regulation (EU) 2023/915, entries 1.1.14 and 1.2.17). Agree before production which residue, mycotoxin and microbiological tests will be carried out on the finished blend, and ask for the results with each lot.",
      },
      {
        heading: "Choose packing that protects aroma",
        text: "Ground spice blends lose their aromatic oils faster than whole spices, and they are sensitive to moisture. Packing should therefore limit air and moisture exchange, for example lined bags, sealed inner liners or cartons with liners, in the size and format that suits your handling or repacking. Agree packing details in advance so the order is produced and packed the way you need it.",
      },
      {
        heading: "Get the labelling right",
        text: "Labelling rules for spice blends differ between markets and change over time, so confirm the current rules where your product is sold.",
      },
      {
        heading: "European Union",
        level: 3,
        text: "Under Regulation (EU) No 1169/2011, a blend sold to consumers lists its ingredients, and where no spice significantly predominates they may be listed in a different order with the words in variable proportion (Annex VII). When garam masala is used at no more than 2 per cent in another food, the manufacturer of that food may declare it simply as spices or mixed spices.",
      },
      {
        heading: "United States",
        level: 3,
        text: "Under 21 CFR 101.22, spices may generally be declared collectively as spice, but spices that also colour, such as turmeric or paprika, must be declared as spice and coloring or by name, and onion and garlic powder must be named. If your blend contains mustard, celery or another ingredient that is a declarable allergen in your market, it must be labelled accordingly.",
      },
      {
        heading: "Documents and planning",
        text: "Ask which documents your importing country requires. Freshland Exports supplies garam masala with a minimum order quantity of 500 kg. When you [request a quotation](/contact), share your composition, quantity, packing and destination early, so that spices can be sourced, blended and packed close to dispatch; our [illustrative case study on ground spices and onions for ready-meal production](/case-studies/ground-spices-for-ready-meal-production) shows this kind of planning. Documents that may accompany each shipment include:",
        list: {
          items: ["The invoice", "The packing list", "A certificate of origin", "Certificates of analysis"],
        },
      },
      {
        heading: "Shipping and arrival",
        text: "During transit, protect the cargo from heat, humidity and strong-smelling goods that could taint a spice blend. On arrival, store it in a cool, dry place, off the floor and away from direct light. Rotate stock so older lots are used first, and keep opened bags tightly sealed so the blend keeps its warm, layered aroma until it is used.",
      },
      {
        heading: "Conclusion",
        text: "Importing garam masala in bulk works best when the recipe, specification, contaminant tests, packing and labelling are all agreed before production. Test the finished blend against your market's limits, and check the labelling rules where it will be sold. Sharing these details early lets the blend be packed close to dispatch so it arrives with its aroma intact.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions importers ask about bulk garam masala.",
        faq: [
          {
            question: "What is the FSSAI moisture limit for garam masala?",
            answer: "India's FSSAI standard for mixed masala sets a maximum of 12 per cent moisture.",
          },
          {
            question: "Which tests should be agreed for a spice blend?",
            answer: "Agree before production which residue, mycotoxin and microbiological tests will be carried out on the finished blend, and ask for the results with each lot.",
          },
          {
            question: "Why is ethylene oxide a concern for spice blends?",
            answer: "In April 2024, Hong Kong's Centre for Food Safety reported ethylene oxide in several spice mix products from India and directed the trade to stop selling them. In the EU, the maximum residue level in spices is set at the limit of quantification.",
          },
          {
            question: "How is garam masala labelled in the EU?",
            answer: "A blend sold to consumers lists its ingredients, and where no spice significantly predominates they may be listed in a different order with the words in variable proportion. Used at no more than 2 per cent in another food, it may be declared simply as spices or mixed spices.",
          },
          {
            question: "What packing suits bulk garam masala?",
            answer: "Packing that limits air and moisture exchange, such as lined bags, sealed inner liners or cartons with liners, in a size and format that suits your handling or repacking.",
          },
        ],
      },
    ],
    // How Food Makers Use Garam Masala in Curries, Rice and Marinades
    [
      {
        heading: "Warmth rather than heat",
        text: "Garam masala means, loosely, a warming spice mix, but its warmth is about aroma rather than fiery heat. In cooking, it adds depth, fragrance and a rounded, sweet-spiced note. Home cooks often add it near the end of cooking so its aroma stays bright, and food manufacturers think in the same way when deciding where in a process to add the blend.",
      },
      {
        heading: "Curries and gravies",
        text: "Curries and gravies are the most familiar home for garam masala, from chicken and lamb curries to paneer dishes, chole and dal makhani. Ready-meal manufacturers use a consistent blend to give each batch the same character, as in our [illustrative case study on ground spices and onions for ready-meal production](/case-studies/ground-spices-for-ready-meal-production), and sauce makers use it in curry sauces and cooking pastes. A uniform grind helps the blend disperse evenly through large batches.",
      },
      {
        heading: "Rice dishes",
        text: "Garam masala gives warmth and fragrance to biryani, pulao and other spiced rice dishes, often alongside whole spices. In frozen and ready-to-heat rice products, a ground blend is easier to dose accurately than whole spices and leaves no hard pieces for the consumer to find. Manufacturers usually test how the aroma holds up through cooking, freezing and reheating.",
      },
      {
        heading: "Meat, marinades and snacks",
        text: "Kebabs, tikka, keema and many marinades use garam masala to build a rich, spiced flavour. In each case, the blend replaces several separate spices with a single, consistent ingredient. Other makers use it too:",
        list: {
          items: [
            "Meat processors, in seasoned products and coatings",
            "Plant-based food makers, in seasoned products and coatings",
            "Snack makers, in fillings such as samosa and in savoury seasonings",
          ],
        },
      },
      {
        heading: "Food service and private label",
        text: "For restaurants and caterers, a ready blend saves time and keeps dishes consistent across kitchens and shifts. Spice brands and repackers buy garam masala in bulk for retail and catering packs, often to their own recipe, which starts with [agreeing a blend recipe with your supplier](/blog/sourcing-garam-masala-agreeing-a-blend-recipe-with-your-supplier). Whatever the end use, test samples in your own dishes before scaling up, and agree with your supplier:",
        list: {
          items: ["The composition", "The fineness", "The packaging"],
        },
      },
      {
        heading: "Conclusion",
        text: "Garam masala adds aroma and depth to curries, rice dishes, marinades and snacks, and a consistent blend gives every batch the same character. Decide where in your process to add it, trial it through cooking, freezing and reheating, and fix the composition and grind with your supplier. When you have a recipe in mind, [request a quotation](/contact).",
      },
      {
        heading: "Frequently asked questions",
        text: "Common questions from food manufacturers.",
        faq: [
          {
            question: "How is garam masala different from curry powder?",
            answer: "Curry powder is usually built around turmeric, coriander and chilli and gives colour and body; garam masala is built around aromatic spices such as cardamom, cinnamon, cloves and pepper and is used for fragrance. Many recipes use both. Our article on [ground coriander in curry powders and masalas](/blog/ground-coriander-in-curry-powders-masalas-and-bakery) explains coriander's part in curry powder.",
          },
          {
            question: "When should it be added in a factory process?",
            answer: "Adding it late, after the main cooking step, keeps more aroma; adding it early gives a mellower, more integrated flavour. Trial batches on your own line are the best guide.",
          },
          {
            question: "Is garam masala hot?",
            answer: "Its warmth is about aroma rather than fiery heat. It adds depth, fragrance and a rounded, sweet-spiced note.",
          },
          {
            question: "Why use a ground blend in frozen rice products?",
            answer: "A ground blend is easier to dose accurately than whole spices and leaves no hard pieces for the consumer to find.",
          },
          {
            question: "Why does a uniform grind matter in curries?",
            answer: "A uniform grind helps the blend disperse evenly through large batches.",
          },
        ],
      },
    ],
  ],
};
