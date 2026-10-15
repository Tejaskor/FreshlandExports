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
        heading: "In brief",
        text: "A workable onion powder specification names the form and particle size, the colour type, a low moisture limit, the flavour strength you expect and the microbiological criteria your product needs. Agree each of these against an approved sample, and ask for moisture and microbiology to be reported for every lot.",
      },
      {
        heading: "Form and colour type",
        text: "Dehydrated onion can be made from white, cream, pink or red [onions](/products/onion) (FSSAI Food Products Standards and Food Additives Regulations, 2011, section 2.9.28, Dehydrated Onion). Each form and colour behaves differently: white and cream powders suit pale sauces and seasonings, while pink and red types give a darker colour and often a different flavour. State the form and colour type in your enquiry so that quotations are comparable. Dehydrated onion is sold as:",
        list: {
          items: ["Flakes", "Kibbled pieces", "Minced and chopped pieces", "Granules", "Powder"],
        },
      },
      {
        heading: "Mesh size for your process",
        text: "Particle size changes how onion powder behaves on the line. A fine powder disperses quickly in sauces, soups and dry rubs, while a coarser granule suits seasonings where visible specks are wanted or where dust must be kept down; our article on [onion powder in seasonings, sauces and ready meals](/blog/onion-powder-in-seasonings-sauces-and-ready-meals) covers each use. Tell your supplier how the powder will be used, agree a mesh range on the specification sheet, and check the first lots against it rather than relying on a description.",
      },
      {
        heading: "Colour as a consistency check",
        text: "Within a colour type, the shade varies with the onion variety and how the slices were dried. Darker, brownish powder can point to scorching, browning during storage or older stock. Colour matters most where the powder goes into light sauces or white seasonings, so keep a reference sample and compare each new lot against it in good daylight.",
      },
      {
        heading: "Pungency and aroma",
        text: "Strength varies with variety, season and processing, so two powders labelled the same can taste quite different in a finished product. Open a sample and smell it: it should be sharp and clearly oniony, without musty, burnt or stale notes. If your recipe depends on a particular strength, run a small test batch and agree the expected flavour profile before ordering in volume.",
      },
      {
        heading: "Moisture and flow",
        text: "Dehydrated onion draws in moisture easily, and a powder that is even slightly too damp will lump in hoppers and dosing equipment. Limits are correspondingly low: India's FSSAI standard sets a maximum of 5 per cent moisture for onion powder (the same regulations, section 2.9.28). Set your own maximum in the specification and ask for it to be reported for every lot. A free-flowing sample on arrival is a good sign, but the paperwork is what lets you hold each batch to the same standard, and [keeping onion powder free-flowing in storage and transit](/blog/keeping-onion-powder-free-flowing-in-storage-and-transit) depends on that low starting moisture.",
      },
      {
        heading: "Microbiology",
        text: "Onions are dried at moderate temperatures to protect their flavour, so drying cannot be relied on to remove bacteria. If the powder goes into products that are not cooked after it is added, such as snack seasonings, dips or dressings, agree microbiological criteria and, where your food-safety plan requires it, a microbial reduction treatment that is permitted in your destination market. Our [illustrative case study on snack seasoning powders for savoury coatings](/case-studies/snack-seasoning-powders-for-savoury-coatings) shows how a seasoning buyer approaches this.",
      },
      {
        heading: "Paperwork before the first order",
        text: "Ask for a sample, a specification sheet and a certificate of analysis for the lot you will receive. Check which tests your destination market expects, such as microbiology or residues, and agree them in advance. Confirm packaging, labelling and lot coding at the same time, so traceability is settled before the goods leave. Recognised product standards for dehydrated onion include ISO 5559, which buyers can refer to when drafting a specification. Freshland Exports supplies onion powder with a minimum order quantity of 500 kg. When you [request a quotation](/contact), share:",
        list: {
          items: [
            "The form and colour type you need",
            "Your mesh range",
            "Your maximum moisture",
            "The flavour strength your recipe depends on",
            "The microbiological criteria and other tests your market expects",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Onion powder is consistent only when form, colour type, mesh, moisture, strength and microbiology are all written down and checked against an approved sample. Moisture deserves particular care, because even slightly damp powder lumps on the line. Settle these points and the paperwork before the first order, and each lot can be held to the same standard.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions food manufacturers ask about specifying onion powder.",
        faq: [
          {
            question: "Which onion powder colour should I choose?",
            answer: "White and cream powders suit pale sauces and seasonings, while pink and red types give a darker colour and often a different flavour.",
          },
          {
            question: "What moisture limit applies to onion powder?",
            answer: "India's FSSAI standard sets a maximum of 5 per cent moisture for onion powder. Set your own maximum in the specification and ask for it to be reported for every lot.",
          },
          {
            question: "Why can two onion powders with the same description taste different?",
            answer: "Strength varies with variety, season and processing. If your recipe depends on a particular strength, run a small test batch before ordering in volume.",
          },
          {
            question: "What does a brownish onion powder indicate?",
            answer: "It can point to scorching, browning during storage or older stock. Compare each new lot against a reference sample in good daylight.",
          },
          {
            question: "Does drying make onion powder free of bacteria?",
            answer: "No. Onions are dried at moderate temperatures to protect their flavour, so powder for uncooked products such as snack seasonings, dips or dressings needs agreed microbiological criteria.",
          },
        ],
      },
    ],
    // Keeping Onion Powder Free-Flowing in Storage and Transit
    [
      {
        heading: "Why onion powder cakes",
        text: "Onion powder is naturally hygroscopic: its sugars attract moisture from the air. Once it absorbs even a little, particles stick together, first into soft lumps and then into hard cakes that are difficult to break up and dose. Caking also dulls the aroma and can darken the colour. Almost every storage problem with onion powder comes back to moisture, so the aim throughout is to keep air and humidity away from the product. The same holds for garlic, as our guide to [stopping garlic powder from caking](/blog/stopping-garlic-powder-from-caking-in-storage-and-transit) shows.",
      },
      {
        heading: "Choose barrier packaging",
        text: "Multi-layer bags with a moisture-barrier liner, sealed properly at the top, do far more to protect onion powder than plain woven sacks. Agree the inner liner, outer bag and pack size with your supplier per order, and check seals on arrival. A torn liner or poorly closed bag lets humid air in and is often where caking starts. If you accept a permitted anti-caking agent, agree it in advance and declare it on your label.",
      },
      {
        heading: "Watch for condensation in transit",
        text: "Containers can pass through sharp temperature changes on long routes, and moisture can condense on the inside walls and drip onto cargo. Plan the shipment so the goods do not sit for long periods in hot ports. To limit the risk:",
        list: {
          items: [
            "Use dry, clean containers",
            "Load on sound pallets with protective lining",
            "Avoid loading damp pallets",
            "Keep bags from being stacked directly against container walls",
          ],
        },
      },
      {
        heading: "Dry, cool warehouse storage",
        text: "Once delivered, store onion powder:",
        list: {
          items: [
            "In a dry, cool, well-ventilated store",
            "Off the floor and away from walls",
            "Away from direct sunlight and strongly scented goods",
            "Resealed straight away after opening, or transferred into airtight containers",
            "On a first-in, first-out basis, so older lots are used before newer ones",
          ],
        },
      },
      {
        heading: "Shelf life depends on conditions",
        text: "How long onion powder stays free-flowing and aromatic depends on its [moisture at packing](/blog/onion-powder-for-food-manufacturing-what-to-specify), the packaging and how it is stored, so there is no single figure that applies to every shipment. Agree the best-before period and storage conditions on the specification sheet, and check stock regularly for lumps, fading or darkening colour and a weakening smell.",
      },
      {
        heading: "Conclusion",
        text: "Onion powder stays free-flowing only while moisture is kept out, from barrier packaging and a dry container to a cool, well-ventilated store. Check seals on arrival, reseal opened bags and rotate stock first in, first out. To agree the liner, outer bag and pack size for your route, [request a quotation](/contact).",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about storing onion powder.",
        faq: [
          {
            question: "Why does onion powder cake?",
            answer: "It is hygroscopic: its sugars attract moisture from the air, and once it absorbs even a little, particles stick together into lumps and then hard cakes.",
          },
          {
            question: "What packaging keeps onion powder dry?",
            answer: "Multi-layer bags with a moisture-barrier liner, sealed properly at the top, protect it far better than plain woven sacks.",
          },
          {
            question: "Can I use an anti-caking agent in onion powder?",
            answer: "If you accept a permitted anti-caking agent, agree it with your supplier in advance and declare it on your label.",
          },
          {
            question: "How long does onion powder keep?",
            answer: "There is no single figure, because shelf life depends on moisture at packing, the packaging and storage. Agree the best-before period and storage conditions on the specification sheet.",
          },
          {
            question: "What signs show onion powder is deteriorating?",
            answer: "Lumps, fading or darkening colour and a weakening smell. Check stock regularly for each of these.",
          },
        ],
      },
    ],
    // Onion Powder in Seasonings, Sauces and Ready Meals
    [
      {
        heading: "Seasoning blends and snacks",
        text: "Onion powder is a staple of dry seasonings, from snack coatings and crisps to spice rubs, stock powders and savoury mixes. Because it is already dry and milled, it blends evenly with salt, spices and other powders, and its sweet, savoury flavour rounds out a blend without adding moisture. Blenders usually want a consistent mesh so the powder does not separate from heavier ingredients. Snack seasonings are applied after cooking, so their makers also set microbiological criteria for the powder; our [illustrative case study on snack seasoning powders for savoury coatings](/case-studies/snack-seasoning-powders-for-savoury-coatings) follows one such buyer.",
      },
      {
        heading: "Sauces, soups and dressings",
        text: "In sauces, gravies, soups and dressings, onion powder dissolves into the liquid and gives an even onion flavour with none of the texture of chopped onion. Manufacturers value that it removes the need to peel, chop and cook fresh onions on the line, and that the same dose gives a similar result from batch to batch when the powder is held to a specification. White or cream powder keeps pale sauces pale, as our [illustrative case study on white pepper and allium powders for pale sauces](/case-studies/white-pepper-and-allium-powders-for-pale-sauces) describes.",
      },
      {
        heading: "Ready meals and processed foods",
        text: "Onion powder is easy to weigh and add at the mixing stage, stores in a small space and is available year-round. Processors generally test the powder in their own recipe first, since strength varies by variety and season, which is why [flavour strength belongs in an onion powder specification](/blog/onion-powder-for-food-manufacturing-what-to-specify). It gives background flavour in products such as:",
        list: {
          items: ["Ready meals", "Marinades", "Burgers and sausages", "Meat-free products"],
        },
      },
      {
        heading: "Easy dosing and storage",
        text: "A dry ingredient is simple to handle in bulk: it can be weighed accurately, held in a dry store and added by hand or automatically. That consistency is much of the reason processors choose dehydrated onion powder over fresh onion, often alongside [garlic powder in seasonings and ready meals](/blog/garlic-powder-in-seasonings-snack-coatings-and-ready-meals). Keep the powder dry and sealed so it continues to flow through dosing equipment as intended.",
      },
      {
        heading: "Labelling the finished product",
        text: "Onion powder is not always treated as a spice on labels. In the United States, FDA rules exclude onion from the definition of spice, so onion powder must be declared by its own name rather than within the word spices (21 CFR 101.22(a)(2) and (h)(3)). Check the rules in each market where your product is sold.",
      },
      {
        heading: "Conclusion",
        text: "Onion powder earns its place in seasonings, sauces and ready meals because it blends evenly, adds flavour without moisture and doses the same way every time. Choose powder or granules to suit the process, white or cream types for pale products, and declare it by name where the rules require. When you [request a quotation](/contact), tell us the application so the form and mesh can be matched to it.",
      },
      {
        heading: "Frequently asked questions",
        text: "Common questions from food manufacturers.",
        faq: [
          {
            question: "Powder or granules?",
            answer: "Powder disperses fastest in liquids and fine seasonings; granules flow with less dust and give visible texture in rubs and toppings. Your process and the look of the finished product should decide.",
          },
          {
            question: "How much onion powder replaces fresh onion?",
            answer: "There is no reliable fixed ratio, because powder strength and recipes vary. Set the dose with a trial batch using the approved sample.",
          },
          {
            question: "Which onion powder suits pale sauces?",
            answer: "White or cream powder, which keeps pale sauces pale.",
          },
          {
            question: "Why do snack seasoning makers set microbiological criteria for onion powder?",
            answer: "Snack seasonings are applied after cooking, so the powder is not heated again before the product is eaten.",
          },
          {
            question: "Can onion powder be listed as a spice on a US label?",
            answer: "No. FDA rules exclude onion from the definition of spice, so onion powder must be declared by its own name rather than within the word spices.",
          },
        ],
      },
    ],
  ],

  "turmeric-powder": [
    // Turmeric Powder Quality: Colour, Curcumin and Purity
    [
      {
        heading: "In brief",
        text: "Turmeric powder is bought for colour, so agree a curcumin or colour range and the test method, then make adulteration and contaminant testing part of the specification. Lead chromate and synthetic dyes have both been found in turmeric, and neither can be detected reliably by eye.",
      },
      {
        heading: "Colour comes first",
        text: "Buyers usually judge turmeric powder by its colour before anything else. A bright, even yellow to deep golden orange is expected, though the exact shade varies with the rhizome variety and [how it was processed](/blog/how-turmeric-rhizomes-become-fine-golden-powder). Dull, brownish or patchy powder can suggest old stock, poor drying or mixed lots. Compare samples side by side in daylight and keep a reference sample for checking later lots.",
      },
      {
        heading: "Agree curcumin and colour value",
        text: "Curcumin content and colour value differ widely between varieties and seasons, so they should never be assumed, in [whole turmeric](/products/turmeric) as in the powder. If your product depends on them, state the range you need and the test method on the specification sheet, and ask for the result on the certificate of analysis for every lot. Agreeing the method matters, because a spectrophotometric method such as ASTA 18.0 and an HPLC method can give different figures for the same powder. For reference, India's FSSAI standard requires turmeric powder to have a colouring power, expressed as curcuminoid content, of at least 2.0 per cent on a dry basis (FSSAI Food Products Standards and Food Additives Regulations, 2011, section 2.9.18, Turmeric).",
      },
      {
        heading: "Adulteration to test for",
        text: "Turmeric's value lies in its colour, which has made it a target for adulteration. Peer-reviewed research in Bangladesh has documented lead chromate pigment added to turmeric to brighten it (Forsyth et al., 2019, Environmental Research 179: 108722), and the US FDA has detained turmeric shipments from listed firms for heavy metals under an import alert (US FDA Import Alert 99-42). India's FSSAI publishes test methods for lead chromate and for the synthetic dye metanil yellow in turmeric (FSSAI Manual of Methods for Testing Adulterants, 2019), and its standard requires the lead chromate test to be negative. Starch fillers are another concern, which is why FSSAI also limits total starch in turmeric powder to a maximum of 60 per cent (the same standard, section 2.9.18). Ask for test results covering:",
        list: {
          items: ["Lead chromate", "Synthetic dyes such as metanil yellow", "Starch fillers"],
        },
      },
      {
        heading: "Contaminant limits by market",
        text: "Contaminant limits are set by the importing country. Agree the heavy metal, mycotoxin, residue and microbiological tests your market requires and ask for results per lot. In the European Union, for example:",
        list: {
          items: [
            "Turmeric is among the spices with aflatoxin limits: 5 micrograms per kilogram for aflatoxin B1 and 10 for total aflatoxins (Commission Regulation (EU) 2023/915, entry 1.1.14)",
            "The ochratoxin A limit for dried spices is 15 micrograms per kilogram (the same regulation, entry 1.2.17)",
            "Root and rhizome spices have a maximum lead level of 1.50 mg/kg (entry 3.1.12.4)",
          ],
        },
      },
      {
        heading: "Moisture and mesh size",
        text: "Moisture affects both shelf life and flow; FSSAI sets a maximum of 10 per cent for turmeric powder (the same standard), and many buyers specify their own limit. Agree a mesh range to suit the use: a fine powder for colouring and beverage mixes, or a slightly coarser grind for some spice blends, as our [illustrative case study on supplying a curry powder blender](/case-studies/supplying-a-curry-powder-blender) shows. Consistent particle size helps the powder mix evenly and behave the same in each batch.",
      },
      {
        heading: "Samples and documents",
        text: "Before ordering, request a sample, the specification sheet and a certificate of analysis for the actual lot to be shipped. Confirm the destination market's testing and labelling expectations, along with packaging and lot coding. Settling these details before the first shipment avoids disputes over colour or strength once the goods arrive. Recognised product standards for turmeric include Codex CXS 359-2024 and ISO 5562, which buyers can refer to when drafting a specification. Freshland Exports supplies turmeric powder with a minimum order quantity of 500 kg. When you [request a quotation](/contact), share:",
        list: {
          items: [
            "The curcumin or colour range you need, and the test method",
            "The adulteration and contaminant tests your market requires",
            "Your moisture limit and mesh range",
            "Your packaging, labelling and lot-coding needs",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Turmeric powder is bought for colour, so the colour or curcumin range and its test method belong on the specification sheet, alongside moisture and mesh. Because colour invites adulteration, testing for lead chromate, synthetic dyes and starch fillers, and for the contaminants your market limits, matters as much as the shade itself.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about turmeric powder quality.",
        faq: [
          {
            question: "Why do curcumin results differ between laboratories?",
            answer: "A spectrophotometric method such as ASTA 18.0 and an HPLC method can give different figures for the same powder. Agree the test method on the specification sheet.",
          },
          {
            question: "What curcuminoid level does India's FSSAI standard require?",
            answer: "It requires turmeric powder to have a colouring power, expressed as curcuminoid content, of at least 2.0 per cent on a dry basis.",
          },
          {
            question: "Can adulteration of turmeric be seen by eye?",
            answer: "No. Lead chromate and synthetic dyes have both been found in turmeric, and neither can be detected reliably by eye, so testing belongs in the specification.",
          },
          {
            question: "What is the EU lead limit for turmeric?",
            answer: "Root and rhizome spices, which include turmeric, have a maximum lead level of 1.50 mg/kg in the European Union.",
          },
          {
            question: "What moisture limit applies to turmeric powder?",
            answer: "FSSAI sets a maximum of 10 per cent for turmeric powder, and many buyers specify their own limit.",
          },
        ],
      },
    ],
    // How Turmeric Rhizomes Become Fine Golden Powder
    [
      {
        heading: "The process at a glance",
        text: "Each step from field to bag shapes the colour, aroma and cleanliness of turmeric powder. The process runs in this order:",
        list: {
          ordered: true,
          items: [
            "Harvest the rhizomes, trim the roots and wash away soil",
            "Boil or steam the rhizomes",
            "Dry them until hard and brittle",
            "Polish off the outer skin and remaining root bits",
            "Grind, sieve and pack the powder",
          ],
        },
      },
      {
        heading: "Harvesting and cleaning",
        text: "Turmeric is harvested as underground rhizomes, which come out of the ground covered in soil and fine roots. The first step is to separate the rhizomes, trim the roots and wash away soil thoroughly. Careful cleaning at this stage reduces foreign matter later and gives a cleaner colour in the finished powder, so it is worth asking a supplier how it is done.",
      },
      {
        heading: "Boiling or steaming",
        text: "Fresh rhizomes are traditionally boiled or steamed before drying, a step often called curing, which our article on [how turmeric is cured](/blog/boiling-drying-and-polishing-how-turmeric-is-cured) covers in more depth. This softens them, gelatinises the starch, removes the raw earthy smell and helps the colour spread evenly through the rhizome. The time and method vary between processors and affect the final colour and aroma, which is one reason powders from different sources can look and smell quite different.",
      },
      {
        heading: "Drying with care",
        text: "Cooked rhizomes are then dried until they are hard and brittle. Drying slowly in damp conditions risks mould, while too much heat can dull the colour and drive off aroma. Even, thorough drying matters because moisture left in the rhizome carries through to the powder, shortens its shelf life and raises the risk of mould growth in storage.",
      },
      {
        heading: "Polishing the rhizomes",
        text: "Dried rhizomes are rough and scaly. Polishing, by hand or in rotating drums, removes the outer skin and remaining root bits to leave a smoother, brighter rhizome. Polished turmeric looks better and grinds more cleanly, and removing the outer layer helps reduce the soil and dust that would otherwise end up in the powder. Polishing should never involve adding colour: a natural shine comes from abrasion alone. Our [illustrative case study on polished or unpolished turmeric](/case-studies/polished-or-unpolished-turmeric) weighs the choice for a buyer.",
      },
      {
        heading: "Grinding and packing",
        text: "Finally, the rhizomes are ground and sieved to the agreed mesh size, then packed in moisture-barrier bags. Grinding generates heat, so processors try to keep it controlled to protect colour and aroma. The powder is sampled for testing and given a lot code, so the certificate of analysis can be matched to the bags you receive; our guide to [turmeric powder quality](/blog/turmeric-powder-quality-colour-curcumin-and-purity) explains which results to look for.",
      },
      {
        heading: "Conclusion",
        text: "Turmeric powder's colour, aroma and cleanliness are decided long before grinding, by how the rhizomes are cleaned, cured, dried and polished. Asking a supplier how each step is done tells you much about the powder you will receive. To agree the mesh, packing and testing for your order, [request a quotation](/contact).",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about how turmeric powder is made.",
        faq: [
          {
            question: "Why are turmeric rhizomes boiled before drying?",
            answer: "Boiling or steaming softens the rhizomes, gelatinises the starch, removes the raw earthy smell and helps the colour spread evenly.",
          },
          {
            question: "Why do turmeric powders from different sources look and smell different?",
            answer: "Curing time and method vary between processors and affect the final colour and aroma.",
          },
          {
            question: "What happens if turmeric is not dried properly?",
            answer: "Moisture left in the rhizome carries through to the powder, shortens its shelf life and raises the risk of mould growth in storage.",
          },
          {
            question: "Does polishing add colour to turmeric?",
            answer: "It should not. Polishing removes the outer skin and root bits by abrasion alone, which also reduces the soil and dust that would end up in the powder.",
          },
          {
            question: "Why is grinding heat controlled?",
            answer: "Grinding generates heat, which can harm the powder's colour and aroma, so processors try to keep it controlled.",
          },
        ],
      },
    ],
    // Turmeric Powder in Spice Blends, Food Colouring and Beverages
    [
      {
        heading: "Curry powders and spice blends",
        text: "Turmeric is a base ingredient in many curry powders, masala blends and seasoning mixes, where it gives the familiar golden colour and a warm, earthy flavour. Blenders want consistent colour and aroma from lot to lot, so that each batch of their blend looks and tastes the same. A steady mesh size also helps turmeric mix evenly with heavier whole or cracked spices. Our [illustrative case study on supplying a curry powder blender](/case-studies/supplying-a-curry-powder-blender) follows one such buyer.",
      },
      {
        heading: "Natural food colouring",
        text: "For colouring buyers, colour strength matters more than flavour, so they often specify a [colour value or curcumin range](/blog/turmeric-powder-quality-colour-curcumin-and-purity) and test each lot. The colour can shift with pH and fade under strong light, so trials in the finished product and light-protective packaging are worth considering. Food manufacturers use turmeric powder to colour:",
        list: {
          items: ["Rice dishes", "Sauces and mustards", "Pickles", "Noodles", "Snacks and baked goods"],
        },
      },
      {
        heading: "Labelling turmeric",
        text: "Because turmeric colours food as well as flavouring it, some markets have specific labelling rules. In the United States, for example, FDA rules require turmeric to be declared as spice and coloring, or by its name, rather than within the general term spice (21 CFR 101.22(a)(2)). Check the rules for each market where your product is sold, and do not describe powdered turmeric as an extract or additive it is not.",
      },
      {
        heading: "Beverages and drink mixes",
        text: "Turmeric appears in golden milk mixes, teas, lattes and other beverage blends. These products need a fine, even powder that disperses well and does not leave grit at the bottom of the cup. Low moisture and good flow matter for powdered drink mixes, which are often packed in small sachets on automated lines, and because they are not usually cooked, their makers set microbiological criteria too. Our [illustrative case study on botanical powders for herbal tea and beverage blends](/case-studies/botanical-powders-for-herbal-tea-and-beverage-blends) covers these needs.",
      },
      {
        heading: "Food service and retail",
        text: "Restaurants, caterers and retail packers buy turmeric powder for everyday cooking. They look for bright colour, a clean aroma and reliable packing that keeps the powder dry once opened. Pack size, labelling and lot coding should be agreed per order, as these differ between bulk food-service supply and smaller retail packs.",
      },
      {
        heading: "Conclusion",
        text: "Each turmeric buyer looks for something different: blenders want lot-to-lot consistency, colouring users want measured colour strength, and drink-mix makers need a fine, dry, free-flowing powder. Labelling rules also treat turmeric as a colour in some markets. When you [request a quotation](/contact), tell us the application so the specification can be matched to it.",
      },
      {
        heading: "Frequently asked questions",
        text: "Common questions from food manufacturers.",
        faq: [
          {
            question: "Is a brighter turmeric always better?",
            answer: "Not necessarily. Colour should be confirmed by a curcumin or colour value test, and an unusually vivid powder is a reason to check the adulteration test results rather than a guarantee of quality.",
          },
          {
            question: "Can I make health claims for turmeric on my label?",
            answer: "Rules on health claims are strict and differ by market, and many claims made for turmeric are not authorised. Check your local regulations before describing any benefit.",
          },
          {
            question: "Why does turmeric colour change in some products?",
            answer: "The colour can shift with pH and fade under strong light, so trials in the finished product and light-protective packaging are worth considering.",
          },
          {
            question: "How must turmeric be declared on a US label?",
            answer: "FDA rules require turmeric to be declared as spice and coloring, or by its name, rather than within the general term spice.",
          },
          {
            question: "What do drink-mix makers need from turmeric powder?",
            answer: "A fine, even powder that disperses without grit, with low moisture and good flow for sachet packing, and agreed microbiological criteria because the drinks are not usually cooked.",
          },
        ],
      },
    ],
  ],

  "frozen-peas": [
    // Frozen Green Peas: Size Grading, Colour and IQF Quality
    [
      {
        heading: "In brief",
        text: "Good frozen peas are evenly sized, bright green, free-flowing and tender, with few broken peas or pieces of pod. Agree the size grade, defect limits and pack format on a specification, cook a sample before ordering, and check on arrival that the peas have stayed frozen throughout.",
      },
      {
        heading: "Uniform size",
        text: "Frozen peas are usually graded by size, and an even size within a pack matters both for appearance and for cooking, since peas of similar size cook at the same rate. Smaller peas are often preferred for some retail and premium uses, larger ones for general food service; our article on [frozen peas in ready meals, food service and retail packs](/blog/frozen-peas-in-ready-meals-food-service-and-retail-packs) covers each channel. Agree the size grade you need on the specification sheet and check it against a sample.",
      },
      {
        heading: "Bright, even colour",
        text: "Good frozen peas are a bright, uniform green. Yellowish, pale or greyish peas can indicate over-mature peas at harvest, delays before blanching or temperature problems in storage. Look for a consistent colour across the pack, with few off-colour or blemished peas, and compare lots against a reference sample.",
      },
      {
        heading: "Free-flowing IQF pieces",
        text: "Individually quick frozen (IQF) peas should pour freely from the bag as separate peas. Clumps, ice glazing on the peas or a solid block usually mean the product has partly thawed and refrozen somewhere along the way, which is why [an unbroken cold chain](/blog/maintaining-the-cold-chain-for-frozen-peas) matters. Free flow lets kitchens and processors use only what they need and reseal the rest.",
      },
      {
        heading: "Broken peas and foreign matter",
        text: "Some breakage is normal in frozen peas, but too much affects appearance and yield. Agree acceptable limits for defects and foreign matter on the specification sheet so each lot is judged against the same standard. Check how many of these are in a sample:",
        list: {
          items: [
            "Split, broken or crushed peas",
            "Loose skins",
            "Pieces of pod",
          ],
        },
      },
      {
        heading: "Tenderness and taste",
        text: "Cook a sample before ordering. Peas harvested at the right maturity and blanched promptly should be tender and sweet, while over-mature peas turn starchy and mealy. Since taste and texture vary by variety and season, confirm them against a sample and agree the specification per order.",
      },
      {
        heading: "What the standard covers",
        text: "The Codex Alimentarius standard for quick frozen peas (CXS 41-1981) sets out quality factors and defect allowances, and treats freezing as complete only once the centre of the product reaches −18 °C. Many buyers use it as a reference when drafting their own specification, alongside the microbiological criteria their market or customers require. Our [illustrative case study on specifying frozen peas for food service](/case-studies/specifying-frozen-peas-for-food-service) shows how such a specification comes together.",
      },
      {
        heading: "Ordering",
        text: "Freshland Exports supplies frozen peas with a minimum order quantity of 500 kg to 1 MT. When you [request a quotation](/contact), share the size grade, pack format, quantity and destination together, so the specification and frozen shipping can be confirmed.",
      },
      {
        heading: "Conclusion",
        text: "Good frozen peas are evenly sized, bright green, free-flowing and tender, with few broken peas or pieces of pod. Put the size grade, defect limits and pack format on a written specification, cook a sample before ordering, and check on arrival that the peas have stayed frozen.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about frozen pea quality.",
        faq: [
          {
            question: "Why are frozen peas sometimes clumped together?",
            answer: "Clumps, ice glazing or a solid block usually mean the product has partly thawed and refrozen somewhere along the way.",
          },
          {
            question: "How should I check a frozen pea sample?",
            answer: "Check size uniformity, colour, free flow, broken peas and foreign matter against your specification, and cook the sample to judge tenderness and taste.",
          },
          {
            question: "How are frozen peas graded?",
            answer: "Usually by size. Even size matters for appearance and cooking; smaller peas are often preferred for some retail and premium uses, larger ones for general food service.",
          },
          {
            question: "What colour should frozen peas be?",
            answer: "A bright, uniform green. Yellowish, pale or greyish peas can indicate over-mature peas, delays before blanching or temperature problems in storage.",
          },
          {
            question: "Is there an international standard for frozen peas?",
            answer: "Yes. Codex Alimentarius CXS 41-1981, the Standard for Quick Frozen Peas, sets out quality factors and defect allowances.",
          },
        ],
      },
    ],
    // Maintaining the Cold Chain for Frozen Peas
    [
      {
        heading: "The target temperature",
        text: "International guidance is consistent on the basic rule: quick-frozen foods should be kept at −18 °C or colder at all points in the cold chain. The Codex code of practice for quick-frozen foods (CXC 8-1976) sets this as the standard, and EU rules for quick-frozen foods (Council Directive 89/108/EEC) require the same, allowing only brief upward fluctuations of no more than 3 °C during transport. Agree the set point and the permitted tolerance with your supplier and logistics provider for each shipment.",
      },
      {
        heading: "Why a steady temperature matters",
        text: "Frozen peas keep their texture best when held at a constant deep-frozen temperature. When the temperature rises and falls, ice crystals melt and reform larger, damaging the cells of the peas and making them soft and watery when cooked. Moisture also moves out of the peas and settles as frost inside the pack. Steadiness matters as much as how cold the product is.",
      },
      {
        heading: "Clumping is a warning sign",
        text: "IQF peas that arrive stuck together in lumps, or with heavy frost inside the bag, have usually been through a temperature rise in storage or transit. Quality has suffered, and the cause should be investigated before the product is accepted. Check cartons from different positions in the load on arrival, measure product temperatures, and record what you find, comparing the peas against the [quality points for IQF peas](/blog/frozen-green-peas-size-grading-colour-and-iqf-quality).",
      },
      {
        heading: "Plan the reefer shipment",
        text: "Frozen peas travel in refrigerated containers set to the agreed frozen temperature. Reefer containers maintain temperature rather than pulling warm product down, so warm loading cannot be corrected on the way. Our [illustrative case study on vegetables for frozen vegetable lines](/case-studies/vegetables-for-frozen-vegetable-lines) looks at frozen supply in practice.",
        list: {
          ordered: true,
          items: [
            "Pre-cool the container before loading.",
            "Make sure the product is at the correct temperature when it is loaded.",
            "Load quickly.",
            "Use temperature recorders for a record of conditions throughout the voyage.",
          ],
        },
      },
      {
        heading: "Handover points",
        text: "Minimise the time pallets spend outside cold storage at each step, and move them straight into a freezer store on arrival. Clear responsibilities at each handover help when something does go wrong. Most cold-chain breaks happen at handovers:",
        list: {
          items: [
            "On the dock",
            "At port",
            "During border checks",
            "At the receiving warehouse",
          ],
        },
      },
      {
        heading: "Storage and labelling at destination",
        text: "In the warehouse, keep frozen peas in a freezer store with good air circulation, avoid placing cartons near doors that open often, and rotate stock on a first-in, first-out basis. Consumer packs in the EU must carry storage instructions and a warning not to refreeze after defrosting; our article on [frozen pea pack formats](/blog/frozen-peas-in-ready-meals-food-service-and-retail-packs) covers labelling by channel. Shelf life depends on the product and its storage conditions, so agree the best-before period and storage instructions on the specification sheet.",
      },
      {
        heading: "Conclusion",
        text: "Frozen peas keep their quality only when they stay at −18 °C or colder, at a steady temperature, from the freezing plant to the warehouse. Plan the reefer shipment and every handover carefully, check temperatures on arrival, and investigate any clumping before accepting the product.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about the frozen pea cold chain.",
        faq: [
          {
            question: "What temperature should frozen peas be kept at?",
            answer: "Quick-frozen foods should be kept at −18 °C or colder at all points in the cold chain, as the Codex code of practice and EU rules require, with only brief upward fluctuations allowed in transport.",
          },
          {
            question: "Can a reefer container bring warm product down to temperature?",
            answer: "No. Reefer containers maintain temperature rather than pulling warm product down, so the peas must be at the correct temperature when they are loaded.",
          },
          {
            question: "Why do temperature swings matter if the peas stay frozen?",
            answer: "When the temperature rises and falls, ice crystals melt and reform larger, damaging the peas and making them soft and watery when cooked.",
          },
          {
            question: "Where do cold chains usually break?",
            answer: "At handovers: on the dock, at port, during border checks and at the receiving warehouse.",
          },
          {
            question: "What must EU consumer packs of frozen peas show?",
            answer: "Storage instructions and a warning not to refreeze after defrosting.",
          },
        ],
      },
    ],
    // Frozen Peas in Ready Meals, Food Service and Retail Packs
    [
      {
        heading: "Ready meals and processed foods",
        text: "Manufacturers use frozen peas in ready meals, pies, fried rice, soups, samosa fillings, mixed vegetables and frozen meal kits. They value peas that are uniform in size, consistent in colour and free-flowing, so that they can be dosed accurately on the line, as our [illustrative case study on vegetables for ready-meal manufacturers](/case-studies/vegetables-for-ready-meal-manufacturers) describes. Bulk packs are generally preferred, with the format agreed to suit the buyer's handling equipment.",
      },
      {
        heading: "Food-service kitchens",
        text: "Restaurants, caterers, canteens and hotel kitchens use frozen peas because they are ready to cook, available year-round and need no shelling. Free-flowing IQF peas let kitchens take out just the portion needed and return the rest to the freezer. Food-service buyers often want mid-sized catering packs that are easy to handle and store; see our [illustrative case study on specifying frozen peas for food service](/case-studies/specifying-frozen-peas-for-food-service).",
      },
      {
        heading: "Retail packs",
        text: "For supermarkets and grocers, frozen peas are packed in smaller consumer bags, often with resealable closures. Retail buyers focus on appearance, with bright colour, even size and few broken peas, because the product is seen through the pack or judged as soon as it is opened. Labelling requirements differ by market and should be agreed per order.",
      },
      {
        heading: "Frozen vegetables are cooked, not eaten raw",
        text: "Frozen vegetables are generally not a ready-to-eat product. Between 2015 and 2018, a Listeria monocytogenes outbreak in five European countries, with 47 reported cases and 9 deaths, was linked to frozen sweetcorn from a freezing plant in Hungary, and the joint ECDC and EFSA assessment advised consumers to cook non-ready-to-eat frozen vegetables thoroughly. Industry guidance for EU frozen-vegetable processors (PROFEL, 2020) recommends labelling them clearly as needing cooking, with cooking instructions. Retail and food-service buyers should make sure pack instructions and kitchen practice reflect this.",
      },
      {
        heading: "Choosing the right pack",
        text: "The right pack depends on who will use the peas and how. Agreeing these early avoids repacking at destination, which adds cost and risks breaking the cold chain. When you [request a quotation](/contact), share the following so the specification and packing can be confirmed before production:",
        list: {
          items: [
            "The intended use",
            "The [size grade](/blog/frozen-green-peas-size-grading-colour-and-iqf-quality)",
            "Pack size and carton format",
            "Labelling needs",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Ready-meal makers, kitchens and retailers all use frozen peas differently, so the right pack, grade and labelling depend on the channel. Share your intended use and pack requirements at enquiry stage, and make sure labels and kitchen practice treat frozen peas as a product to be cooked.",
      },
      {
        heading: "Frequently asked questions",
        text: "Common questions from buyers.",
        faq: [
          {
            question: "Can frozen peas be added to salads without cooking?",
            answer: "Frozen peas should be treated as needing cooking unless the producer specifically validates and labels them as ready to eat. Follow the pack instructions.",
          },
          {
            question: "Can thawed peas be refrozen?",
            answer: "Refreezing damages texture and can compromise safety, which is why EU consumer packs carry a do-not-refreeze warning. Keep the product frozen until use, as set out in our [cold-chain guide for frozen peas](/blog/maintaining-the-cold-chain-for-frozen-peas).",
          },
          {
            question: "What do ready-meal manufacturers look for in frozen peas?",
            answer: "Uniform size, consistent colour and free-flowing peas that can be dosed accurately on the line, usually in bulk packs.",
          },
          {
            question: "Why are frozen vegetables labelled for cooking?",
            answer: "A Listeria outbreak in five European countries between 2015 and 2018 was linked to frozen sweetcorn, and European food-safety authorities advised cooking non-ready-to-eat frozen vegetables thoroughly. Industry guidance recommends clear cooking instructions.",
          },
          {
            question: "Which pack sizes suit each channel?",
            answer: "Bulk packs for manufacturers, mid-sized catering packs for food service, and smaller consumer bags, often resealable, for retail.",
          },
        ],
      },
    ],
  ],

  okra: [
    // Selecting Tender Okra for Export: Length and Freshness
    [
      {
        heading: "In brief",
        text: "Export okra is picked young, a few days after flowering, while pods are tender, green and evenly sized. For shipments from India to the European Union, plan for residue testing and border checks as well as quality, because okra from India is subject to increased EU controls for pesticide residues.",
      },
      {
        heading: "Why okra is picked young",
        text: "Okra pods grow quickly and become tough and fibrous within days of reaching a good eating size. Pods reach harvest size, about 7 to 10 cm, four to six days after the flower opens, with picking every few days (Tamil Nadu Agricultural University guidance). Over-mature pods are woody, hard to cut and unpleasant to eat, and they do not sell well in most markets.",
      },
      {
        heading: "Check pod length",
        text: "Pod length is the main grading point for fresh okra, and [different markets and uses](/blog/okra-in-curries-gumbo-and-frozen-food-lines) prefer different ranges. Shorter pods are often favoured where tenderness matters most. Tell your supplier the length range your buyers expect and confirm it against a sample, since length varies with variety and season.",
      },
      {
        heading: "The snap test for tenderness",
        text: "A simple way to check tenderness is to bend the tip of a pod: a fresh, tender pod snaps cleanly, while an older one bends or feels stringy. Pods should feel firm, not limp or rubbery. Cutting a few pods open shows whether the seeds are still small and pale, another sign of young, tender okra.",
      },
      {
        heading: "Colour and surface",
        text: "Good okra is a fresh, even green with a light natural fuzz on the skin. Okra [bruises easily](/blog/handling-okra-gently-to-avoid-bruising-and-browning), and marks from rough handling turn dark quickly, so a sample with many marked pods suggests problems in picking or packing. Look out for:",
        list: {
          items: [
            "Dark streaks",
            "Brown or black marks",
            "Yellowing",
            "Dry, shrivelled tips or stems",
          ],
        },
      },
      {
        heading: "EU controls on okra from India",
        text: "Okra from India, fresh, chilled or frozen, is listed in Annex I of EU Implementing Regulation 2019/1793, as amended in 2026, for pesticide residues, with identity and physical checks on 30 per cent of consignments at the EU border. Consignments that exceed EU maximum residue levels are rejected, so residue control at farm level and testing before dispatch are part of any serious okra programme for that market. Our guide to [export documents for fresh produce](/blog/phytosanitary-certificates-and-export-documents-for-fresh-produce) covers the wider document set.",
      },
      {
        heading: "Traceability in India",
        text: "Okra is among the vegetables covered by APEDA's HortiNet traceability system, under which export produce is sourced from registered farms. Ask your supplier which traceability and residue-monitoring requirements apply to your destination, and which residue results will accompany each shipment.",
      },
      {
        heading: "Planning an order",
        text: "Fresh okra is highly perishable, so plan the shipment carefully. Freshland Exports supplies fresh okra with a minimum order quantity of 500 kg to 1 MT. When you [request a quotation](/contact), share your quantity, length range, packing and destination together, and confirm how the produce will be kept cool, but not cold, and ventilated in transit. Our [illustrative case study on green beans and okra for retail packs](/case-studies/green-beans-and-okra-for-retail-packs) shows a typical retail specification.",
      },
      {
        heading: "Conclusion",
        text: "Export okra is picked young and judged on pod length, tenderness, colour and surface condition, and shipments from India to the EU also need careful residue control. Agree the length range, packing and documents with your supplier, and plan how the pods will be kept cool, but not cold, in transit.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions importers ask about okra.",
        faq: [
          {
            question: "How can I tell whether okra is tender?",
            answer: "Bend the tip of a pod: a fresh, tender pod snaps cleanly, while an older one bends or feels stringy. Cutting a few pods open should show small, pale seeds.",
          },
          {
            question: "Do EU controls apply to frozen okra?",
            answer: "Yes. Okra from India is listed for pesticide residues whether it is fresh, chilled or frozen.",
          },
          {
            question: "When is export okra harvested?",
            answer: "Pods usually reach harvest size, about 7 to 10 cm, four to six days after the flower opens, and are picked every few days.",
          },
          {
            question: "What happens to okra that exceeds EU residue limits?",
            answer: "Consignments that exceed EU maximum residue levels are rejected, so residue control at farm level and testing before dispatch matter.",
          },
          {
            question: "Is there an international quality standard for okra?",
            answer: "Yes. Codex Alimentarius CXS 318-2014 is the Standard for Okra.",
          },
        ],
      },
    ],
    // Handling Okra Gently to Avoid Bruising and Browning
    [
      {
        heading: "Why okra marks so easily",
        text: "Okra skin is thin and delicate. Pressure, rubbing or knocks during picking and packing break surface cells, and within hours these spots darken into brown or black marks. The damage may look minor at first, but it spoils the appearance of a whole pack and often leads to rot. Gentle handling at every stage is the most important thing for okra quality.",
      },
      {
        heading: "General reference storage conditions",
        text: "Okra is generally stored at about 7 to 10 °C with relative humidity above 90 per cent (USDA Agriculture Handbook 66, 2016), under which it keeps for roughly one to two weeks. Okra is highly chilling sensitive: two days at 2 °C is enough to cause chilling injury. Our [illustrative case study on cold-chain planning for perishable vegetables](/case-studies/cold-chain-planning-for-perishable-vegetables) shows how this shapes shipping. These are general figures; agree the conditions for each route with your supplier and logistics provider.",
      },
      {
        heading: "Keep it away from ethylene",
        text: "Exposure to ethylene above about 1 part per million for three days or more causes okra to yellow. Keep okra apart from ripening fruits such as bananas, mangoes and tomatoes in storage and in [mixed loads](/blog/building-a-mixed-agricultural-order-from-india).",
      },
      {
        heading: "Pack in shallow, ventilated cartons",
        text: "Okra keeps best in ventilated cartons that are not packed too deep.",
        list: {
          items: [
            "Keep packing shallow, so the lower pods are not crushed by those above.",
            "Pack pods firmly enough not to shift and rub in transit, but not squeezed.",
            "Stack cartons so their weight rests on the carton walls rather than the produce.",
          ],
        },
      },
      {
        heading: "Cool quickly, keep pods dry",
        text: "Removing field heat soon after harvest slows ageing and keeps pods green and firm. Okra gives off heat and moisture, so it needs good ventilation; wet pods and condensation encourage mould and slimy patches. Avoid sealed packs and do not wash okra before storage.",
      },
      {
        heading: "Inspect and sell quickly",
        text: "Shelf life depends on the condition of the pods at packing and the conditions on the way, so there is no single figure. On arrival, check cartons from different parts of the load for dark marks, softness, pitting and mould against the [signs of fresh, tender okra](/blog/selecting-tender-okra-for-export-length-and-freshness), remove damaged pods and move stock on promptly.",
      },
      {
        heading: "Conclusion",
        text: "Okra marks easily and is very sensitive to cold and ethylene, so gentle handling, shallow ventilated packing and prompt cooling decide how it arrives. Agree storage conditions for each route, keep pods dry, and inspect and sell stock quickly.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about handling okra.",
        faq: [
          {
            question: "Why does okra develop black marks?",
            answer: "Pressure, rubbing or knocks break surface cells, and within hours these spots darken into brown or black marks.",
          },
          {
            question: "Should okra be washed before storage?",
            answer: "No. Wet pods and condensation encourage mould and slimy patches, so okra should be kept dry and not washed before storage.",
          },
          {
            question: "What temperature suits fresh okra?",
            answer: "Okra is generally stored at about 7 to 10 °C with relative humidity above 90 per cent, under which it keeps for roughly one to two weeks.",
          },
          {
            question: "Is okra sensitive to ethylene?",
            answer: "Yes. Exposure above about 1 part per million for three days or more causes okra to yellow.",
          },
          {
            question: "How should okra cartons be packed?",
            answer: "Shallow and ventilated, firm enough that pods do not shift and rub but not squeezed, and stacked so the weight rests on the carton walls.",
          },
        ],
      },
    ],
    // Okra in Curries, Gumbo and Frozen Food Lines
    [
      {
        heading: "South Asian cooking",
        text: "Okra, known as bhindi, is an everyday vegetable in South Asian kitchens. It is stir-fried with spices, stuffed with masala, cooked into curries or fried crisp. Restaurants and grocers serving these cuisines, like those in our [illustrative case study on South Asian vegetables for ethnic grocery importers](/case-studies/south-asian-vegetables-for-ethnic-grocery-importers), want tender, evenly sized pods that cook quickly and evenly, with few fibrous or marked pods.",
      },
      {
        heading: "Stews and gumbo",
        text: "In many cuisines okra is valued for the way it thickens stews and soups as it cooks. It is a familiar ingredient in gumbo and in stews across West Africa, the Middle East and the Caribbean. For these dishes, buyers often accept a wider range of lengths, as pods are usually sliced before cooking.",
      },
      {
        heading: "Frozen okra lines",
        text: "Frozen okra, whole or cut into rounds, lets retailers and food-service buyers offer the vegetable year-round. Processors look for young, tender pods of even size, with bright green colour and few blemishes, because damage and fibre become more obvious after freezing. Pods must reach the processing line quickly and in good condition, [handled gently to avoid bruising](/blog/handling-okra-gently-to-avoid-bruising-and-browning), and frozen okra is normally labelled for cooking before eating.",
      },
      {
        heading: "What processors specify",
        text: "If you are buying for freezing, share the cut style, pack format and intended market with your supplier, so the raw material can be selected to suit; our [illustrative case study on vegetables for frozen vegetable lines](/case-studies/vegetables-for-frozen-vegetable-lines) shows a typical brief. Note that [EU import controls on okra from India](/blog/selecting-tender-okra-for-export-length-and-freshness) apply to frozen okra as well as fresh. Processors usually agree:",
        list: {
          items: [
            "Pod length",
            "The share of damaged or over-mature pods they will accept",
            "How quickly okra must reach the plant after harvest",
            "The residue results they need",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "From bhindi masala to gumbo and frozen packs, okra buyers value young, tender pods of even size that reach the kitchen or plant in good condition. Share your intended dish or product with your supplier so the raw material can be selected to suit, and remember that EU controls cover frozen okra too.",
      },
      {
        heading: "Frequently asked questions",
        text: "Common questions from food businesses.",
        faq: [
          {
            question: "How can okra be cooked without sliminess?",
            answer: "Cooking okra whole or quickly at high heat, or with acidic ingredients, reduces the slippery texture; slow cooking in liquid brings it out, which is why it thickens gumbo.",
          },
          {
            question: "Is frozen okra a good substitute for fresh?",
            answer: "For curries, stews and gumbo, frozen okra works well and is available year-round. For dishes where crisp texture matters, fresh okra is usually preferred.",
          },
          {
            question: "What do South Asian buyers look for in okra?",
            answer: "Tender, evenly sized pods that cook quickly and evenly, with few fibrous or marked pods.",
          },
          {
            question: "Why is okra used in gumbo and stews?",
            answer: "It thickens stews and soups as it cooks. Pods are usually sliced first, so buyers often accept a wider range of lengths.",
          },
          {
            question: "What should I share when buying okra for freezing?",
            answer: "The cut style, pack format and intended market, so the raw material can be selected to suit.",
          },
        ],
      },
    ],
  ],

  "bitter-gourd": [
    // Bitter Gourd Quality: Ridges, Colour and Firmness
    [
      {
        heading: "In brief",
        text: "Good bitter gourd is firm, evenly green and well formed, with pale flesh and soft whitish seeds. Before planning shipments from India to the European Union, check the EU plant-health conditions for Momordica fruit, which are stricter than for most vegetables.",
      },
      {
        heading: "Firm and crisp",
        text: "Good bitter gourd feels firm and heavy for its size, with no soft patches. Press gently along the length: a fresh gourd does not give, while one that feels spongy or hollow has started to age or dry out. Firmness matters because bitter gourd is often stored and sold over several days, and soft fruit spoils first.",
      },
      {
        heading: "Even green colour",
        text: "Bitter gourd is harvested immature, while still green. It should be an even green, from pale to dark depending on the variety. Yellow or orange patches, especially at the blossom end, mean the fruit is ripening; the flesh softens and the seeds harden and turn red inside. Most markets want fully green gourds, so ripening fruit is a key defect to look for; our article on [slowing ripening in storage](/blog/slowing-ripening-storing-bitter-gourd-for-shipment) explains how to limit it.",
      },
      {
        heading: "Well-formed ridges",
        text: "The bumpy, ridged skin is characteristic of bitter gourd, and its form varies by variety, from small spiky types to long fruits with smoother ridges. Ridges should be well formed and intact, without cuts, scars, dark spots or broken tips, since damage to the ridges is where rot often begins.",
      },
      {
        heading: "Size, shape and a look inside",
        text: "Length and shape vary by variety and market, and [different cuisines favour different types](/blog/bitter-gourd-in-asian-cooking-and-juices). Specify the variety type and size range your market expects and confirm them against a sample. Cut open a few gourds: the flesh should be pale and crisp, with soft, whitish seeds. Hard or reddening seeds and spongy flesh indicate fruit that was picked too late or has ripened in transit.",
      },
      {
        heading: "EU plant-health conditions",
        text: "EU plant-health rules treat Momordica fruit as a pathway for the pest Thrips palmi. Separate EU rules on fall armyworm (Implementing Regulation (EU) 2023/1134) also apply to Momordica fruit. Under Regulation (EU) 2019/2072, Annex VII, the routes into the EU are:",
        list: {
          items: [
            "For bitter gourd from India: an official statement on the [phytosanitary certificate](/blog/phytosanitary-certificates-and-export-documents-for-fresh-produce) that the fruit originates either in a country recognised as free from Thrips palmi, or in an area that India's national plant protection organisation has established as free from the pest under international standards, with the further conditions the regulation sets.",
            "Alternative routes based on protected production sites, inspection or a systems approach, currently available only for bitter gourd from Honduras, Mexico, Sri Lanka and Thailand.",
            "In practice, EU shipments from India depend on a recognised pest-free area, so confirm the position with your supplier and India's plant protection authorities before planning a programme.",
          ],
        },
      },
      {
        heading: "Traceability and other markets",
        text: "Bitter gourd is among the vegetables covered by APEDA's HortiNet traceability system. Requirements in other markets differ, so check each destination's import conditions; for the United States, use the USDA APHIS ACIR database.",
      },
      {
        heading: "Ordering",
        text: "Freshland Exports supplies fresh bitter gourd with a minimum order quantity of 500 kg to 1 MT. When you [request a quotation](/contact), share the variety type, size range, quantity, packing and destination together, and confirm which market requirements apply before the season begins.",
      },
      {
        heading: "Conclusion",
        text: "Good bitter gourd is firm, evenly green and well formed, with pale flesh and soft seeds, and ripening fruit is the main defect to look for. For the EU, plant-health conditions on Thrips palmi decide whether shipments are possible at all, so confirm the position before planning a programme.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions importers ask about bitter gourd.",
        faq: [
          {
            question: "Why do bitter gourds turn yellow or orange?",
            answer: "Bitter gourd is harvested immature and keeps ripening after picking. Yellow or orange patches mean the fruit is ripening, with softer flesh and seeds that harden and turn red.",
          },
          {
            question: "Can bitter gourd from India be shipped to the EU?",
            answer: "Only if the plant-health conditions on Thrips palmi are met; in practice, that depends on a recognised pest-free area. Confirm the position with your supplier and India's plant protection authorities first.",
          },
          {
            question: "How should a good bitter gourd feel?",
            answer: "Firm and heavy for its size, with no soft patches. A gourd that feels spongy or hollow has started to age or dry out.",
          },
          {
            question: "What should the inside of a bitter gourd look like?",
            answer: "Pale, crisp flesh with soft, whitish seeds. Hard or reddening seeds and spongy flesh indicate fruit picked too late or ripened in transit.",
          },
          {
            question: "Do other EU rules apply to bitter gourd?",
            answer: "Yes. EU rules on fall armyworm (Implementing Regulation (EU) 2023/1134) also apply to Momordica fruit, alongside the Thrips palmi conditions.",
          },
        ],
      },
    ],
    // Slowing Ripening: Storing Bitter Gourd for Shipment
    [
      {
        heading: "Why bitter gourd turns yellow",
        text: "Bitter gourd is harvested immature, while still green and firm. After picking it continues to ripen, turning yellow and then orange, while the flesh softens and the fruit may split. Warmth speeds this process. The aim of storage and transport is to slow ripening so the gourds arrive green and market-ready.",
      },
      {
        heading: "Cool, not cold",
        text: "Published commercial storage data for bitter gourd are limited. Mixed-load compatibility guidance (USDA Agriculture Handbook 66, 2016) groups bitter melon with produce held at about 13 to 18 °C and 85 to 95 per cent relative humidity, rather than with vegetables stored near freezing. Agree the storage range for your variety and journey with your supplier and logistics provider, and [remove field heat promptly](/blog/pre-cooling-green-beans-for-longer-freshness) after harvest.",
      },
      {
        heading: "Keep apart from ripening fruit",
        text: "Many fruits release ethylene as they ripen, and ethylene speeds ageing in many vegetables. Keeping bitter gourd away from ripening produce such as bananas, mangoes and tomatoes in storage and in [mixed loads](/blog/building-a-mixed-agricultural-order-from-india) is a sensible precaution, and good ventilation helps carry away any ethylene in the store.",
      },
      {
        heading: "Packing that protects",
        text: "Handle cartons carefully to avoid broken tips and crushed fruit.",
        list: {
          items: [
            "Pack gourds in ventilated cartons, firmly enough that they do not roll and rub, but without pressure that bruises the ridges.",
            "Liners can help limit moisture loss, provided they allow air to circulate and do not trap condensation.",
          ],
        },
      },
      {
        heading: "Inspect on arrival",
        text: "How long bitter gourd stays green depends on its maturity at harvest and the conditions on the way, so there is no fixed figure. Check cartons from different positions in the load for yellowing, soft spots and mould against the [quality points for bitter gourd](/blog/bitter-gourd-quality-ridges-colour-and-firmness), separate ripening fruit, and sell older stock first.",
      },
      {
        heading: "Conclusion",
        text: "Bitter gourd keeps ripening after harvest, so cooling promptly, keeping it away from ripening fruit and packing it carefully help it arrive green and firm. Because published storage data are limited, agree the storage range for your variety and route with your supplier and logistics provider.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about storing bitter gourd.",
        faq: [
          {
            question: "Is there a standard storage temperature for bitter gourd?",
            answer: "Published storage data are limited. Mixed-load guidance groups it with produce held at about 13 to 18 °C and 85 to 95 per cent relative humidity.",
          },
          {
            question: "How long does bitter gourd stay green?",
            answer: "There is no fixed figure: it depends on maturity at harvest and the conditions on the way, which is why prompt cooling and inspection on arrival matter.",
          },
          {
            question: "Why keep bitter gourd away from ripening fruit?",
            answer: "Many fruits release ethylene as they ripen, and ethylene speeds ageing in many vegetables, so separation is a sensible precaution.",
          },
          {
            question: "Can liners be used when packing bitter gourd?",
            answer: "Yes, they can help limit moisture loss, provided they allow air to circulate and do not trap condensation.",
          },
          {
            question: "What should be checked on arrival?",
            answer: "Cartons from different positions for yellowing, soft spots and mould. Separate ripening fruit and sell older stock first.",
          },
        ],
      },
    ],
    // Bitter Gourd in Asian Cooking and Juices
    [
      {
        heading: "South Asian dishes",
        text: "Bitter gourd, known as karela, is widely cooked in South Asian homes and restaurants. It is stuffed with spiced fillings, stir-fried, made into crisp fried rings or cooked in curries. Cooks often salt and rinse the slices first to soften the bitterness. For these uses, buyers prefer firm, green gourds with tender seeds; see our [illustrative case study on South Asian vegetables for ethnic grocery importers](/case-studies/south-asian-vegetables-for-ethnic-grocery-importers).",
      },
      {
        heading: "East and Southeast Asian cooking",
        text: "Across East and Southeast Asia, bitter gourd is used in stir-fries with egg, tofu or meat, in soups and stuffed with minced fillings. These cuisines often favour longer, paler varieties with smoother ridges. Knowing which community a product is for helps when choosing the variety and size to order.",
      },
      {
        heading: "Juices and beverages",
        text: "Bitter gourd is also pressed for juice, sold fresh or as packaged drinks and blends. Juice makers look for fresh, green fruit with few defects, as damage and ripening affect taste and colour. Health and nutrition wording on labels is regulated differently in each market, and many claims made for bitter gourd are not authorised, so check local rules before describing any benefit.",
      },
      {
        heading: "Processed and dried products",
        text: "Bitter gourd is also sliced and dried, pickled or made into powder and chips. Processors usually want consistent size and maturity so that slices dry or cook evenly, as our [illustrative case study on bitter gourd for chips, pickles and dried slices](/case-studies/bitter-gourd-for-chips-pickles-and-dried-slices) describes. Share the intended product and processing method with your supplier, so the raw material can be selected to suit.",
      },
      {
        heading: "Conclusion",
        text: "Bitter gourd is used very differently across South Asian, East and Southeast Asian cooking, juices and processed products, and preferred types vary by community. Match the variety and size to the market you serve, specify fully green fruit, and check local labelling rules before describing any benefit.",
      },
      {
        heading: "Frequently asked questions",
        text: "Common questions from buyers.",
        faq: [
          {
            question: "Which bitter gourd type should I order?",
            answer: "South Asian shoppers usually expect darker, spikier gourds; East and Southeast Asian shoppers often prefer longer, paler, smoother types. Match the type to the community you serve.",
          },
          {
            question: "Can ripe yellow bitter gourd be used?",
            answer: "[Ripe fruit](/blog/slowing-ripening-storing-bitter-gourd-for-shipment) is softer and has hard seeds, so it is unsuitable for most culinary and juice uses. Buyers normally specify fully green fruit.",
          },
          {
            question: "How do cooks reduce the bitterness?",
            answer: "Cooks often salt and rinse the slices before cooking.",
          },
          {
            question: "How is bitter gourd used in East and Southeast Asia?",
            answer: "In stir-fries with egg, tofu or meat, in soups and stuffed with minced fillings, often using longer, paler varieties with smoother ridges.",
          },
          {
            question: "Can health benefits be stated on bitter gourd juice labels?",
            answer: "Health and nutrition wording is regulated differently in each market, and many claims made for bitter gourd are not authorised, so check local rules first.",
          },
        ],
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
        text: "The calyx, the leafy cap at the stem end, is one of the best freshness indicators. It should be green and fresh-looking, firmly attached and free from mould. A dry, brown or shrivelled calyx shows the fruit has been stored for a while or exposed to ethylene, and mould on the calyx can spread to the fruit in transit.",
      },
      {
        heading: "Firmness and maturity",
        text: "Good eggplant feels firm and heavy for its size. Press gently with a thumb: fresh flesh springs back, while a fruit that stays dented or feels spongy is past its best or has lost water. Over-mature fruit tends to lose its gloss and to have larger, darker, harder seeds and a more bitter taste. Cutting a few fruits from a sample shows the condition of the flesh and seeds.",
      },
      {
        heading: "Shape and size",
        text: "Shape and size vary widely by variety and market, from round and oval to long and slender. Specify the variety type and size range your customers expect, and confirm them against a sample; our guide to [round, long and baby eggplant](/blog/round-long-and-baby-eggplant-matching-variety-to-market) compares the types. Even sizing within a carton helps both presentation and handling.",
      },
      {
        heading: "Defects to watch for",
        text: "Eggplant skin marks easily, so many scratches or bruises in a sample suggest rough handling. Agree acceptable limits for defects on the specification. Check for:",
        list: {
          items: [
            "Cuts and bruises",
            "Insect holes",
            "Sunken spots",
            "Rot at the blossom end",
            "Pitting or bronzing, which can also be a sign of [chilling injury in transit](/blog/protecting-eggplant-from-chilling-injury-in-transit)",
          ],
        },
      },
      {
        heading: "EU plant-health statements",
        text: "Eggplant fruit entering the EU must meet several plant-health requirements, set out in Annex VII of Regulation (EU) 2019/2072, that are certified on the [phytosanitary certificate](/blog/phytosanitary-certificates-and-export-documents-for-fresh-produce). Confirm with your supplier how each statement will be met before the first shipment. For eggplant from India these include:",
        list: {
          items: [
            "Official statements on freedom from Thrips palmi, which may be met by pest freedom of the country or area or by an official inspection immediately before export.",
            "Requirements on other pests such as Bactrocera latifrons.",
            "Separate EU rules on fall armyworm (Implementing Regulation (EU) 2023/1134).",
          ],
        },
      },
      {
        heading: "Traceability",
        text: "Eggplant is among the vegetables covered by APEDA's HortiNet traceability system. Ask your supplier which traceability and residue requirements apply to your destination.",
      },
      {
        heading: "Ordering",
        text: "Freshland Exports supplies fresh eggplant with a minimum order quantity of 500 kg to 1 MT. When you [request a quotation](/contact), share the variety type, size range, quantity, packing and destination together, so the plant-health statements and transit temperature can be confirmed before packing.",
      },
      {
        heading: "Conclusion",
        text: "Fresh eggplant should have a glossy skin, a green calyx and firm flesh, with few defects. For EU shipments from India, several plant-health statements must appear on the phytosanitary certificate, so confirm how each will be met before the first order.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about eggplant quality.",
        faq: [
          {
            question: "What does the calyx say about freshness?",
            answer: "A green, fresh-looking calyx that is firmly attached indicates fresh fruit. A dry, brown or shrivelled calyx shows the fruit has been stored for a while or exposed to ethylene.",
          },
          {
            question: "What causes pitting or bronzing on eggplant?",
            answer: "Besides rough handling, pitting or bronzing can be a sign of chilling injury in transit.",
          },
          {
            question: "How can I tell an over-mature eggplant?",
            answer: "It tends to lose its gloss, stay dented when pressed, and have larger, darker, harder seeds and a more bitter taste.",
          },
          {
            question: "How is the EU's Thrips palmi requirement met for eggplant from India?",
            answer: "By an official statement on the phytosanitary certificate, based either on pest freedom of the country or area or on an official inspection immediately before export.",
          },
          {
            question: "Is there an international quality standard for eggplant?",
            answer: "Yes. UNECE Standard FFV-05 covers the marketing and commercial quality control of aubergines.",
          },
        ],
      },
    ],
    // Protecting Eggplant from Chilling Injury in Transit
    [
      {
        heading: "Eggplant dislikes the cold",
        text: "Unlike many vegetables, eggplant is sensitive to chilling. The damage often shows only after the fruit returns to warmer conditions, which means a problem in transit may appear at the wholesaler or on the shelf. If held too cold for too long, it develops chilling injury:",
        list: {
          items: [
            "Surface pitting and scald",
            "Browning of the flesh and seeds",
            "In time, Alternaria rot",
          ],
        },
      },
      {
        heading: "General reference storage conditions",
        text: "Eggplant is generally stored at about 10 to 12 °C with 90 to 95 per cent relative humidity (USDA Agriculture Handbook 66, 2016), and quality declines quickly after about two weeks. Its data show visible chilling symptoms after roughly six to seven days at 5 °C for common large eggplant, and much sooner at 0 °C; [Japanese and Chinese types](/blog/round-long-and-baby-eggplant-matching-variety-to-market) take somewhat longer. These are general figures; agree the conditions for each shipment with your supplier and logistics provider, and avoid sharing a container with produce that needs near-freezing settings.",
      },
      {
        heading: "Ethylene and odours",
        text: "Eggplant is moderately to highly sensitive to ethylene: more than 1 part per million can cause the calyx to drop and the fruit to brown. Keep it away from ripening fruit. Eggplant can also take up odours from strongly scented produce such as ginger and onions, so store it apart from them and plan any [mixed load](/blog/building-a-mixed-agricultural-order-from-india) with care.",
      },
      {
        heading: "Limit moisture loss",
        text: "Eggplant loses moisture through its skin, which causes the gloss to fade, the skin to wrinkle and the flesh to turn spongy. Japanese types lose water about three times faster than large American types. Liners or wrapping can help hold moisture, as long as there is enough ventilation to prevent condensation and mould. Never pack eggplant in contact with ice.",
      },
      {
        heading: "Pack to prevent bruising",
        text: "Eggplant skin bruises and scratches easily, and bruises turn brown quickly; the fruit cannot withstand being stacked in bulk. Pack fruit in single layers or with dividers where possible, so that fruits do not rub together or press on each other, and keep the stems from puncturing neighbouring fruit.",
      },
      {
        heading: "Check on arrival",
        text: "Shelf life depends on condition at packing and the conditions on the way, so there is no single figure. When the shipment arrives, inspect fruit from several positions in the load for pitting, browning, soft spots and calyx mould, using the [quality markers for eggplant](/blog/eggplant-export-guide-gloss-shape-and-firmness), and move older stock first.",
      },
      {
        heading: "Conclusion",
        text: "Eggplant is damaged by both cold and ethylene, and chilling injury often shows only after the fruit has warmed again. Agree a transit temperature in the recommended range, pack fruit to prevent bruising and water loss, and inspect consignments carefully on arrival.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about eggplant in transit.",
        faq: [
          {
            question: "What is the right storage temperature for eggplant?",
            answer: "Eggplant is generally stored at about 10 to 12 °C with 90 to 95 per cent relative humidity, and quality declines quickly after about two weeks.",
          },
          {
            question: "Can eggplant be packed with ice?",
            answer: "No. Eggplant is chilling sensitive and should never be packed in contact with ice.",
          },
          {
            question: "What are the symptoms of chilling injury in eggplant?",
            answer: "Surface pitting and scald, browning of the flesh and seeds, and in time Alternaria rot, often showing only after the fruit warms again.",
          },
          {
            question: "Is eggplant sensitive to ethylene?",
            answer: "Moderately to highly. More than 1 part per million can cause the calyx to drop and the fruit to brown.",
          },
          {
            question: "Do some eggplant types lose water faster?",
            answer: "Yes. Japanese types lose water about three times faster than large American types.",
          },
        ],
      },
    ],
    // Round, Long and Baby Eggplant: Matching Variety to Market
    [
      {
        heading: "Round and oval types",
        text: "Large round or oval eggplants, often deep purple, are popular for roasting whole, grilling in thick slices and dishes where the flesh is mashed. Bharta, made from flame-roasted eggplant, is commonly prepared with large round fruit because of its generous, soft flesh. Buyers for these uses usually look for [heavy, glossy fruit](/blog/eggplant-export-guide-gloss-shape-and-firmness) with few seeds; our [illustrative case study on eggplant for grilled and dip products](/case-studies/eggplant-for-grilled-and-dip-products) shows a processor's view.",
      },
      {
        heading: "Long and slender types",
        text: "Long, slim eggplants have thinner skin and cook quickly. They suit stir-fries, curries and grilling in lengths, and are widely used in South Asian and East Asian cooking. Buyers typically specify a length range and look for straight, evenly coloured fruit, as curved or uneven fruit is harder to pack and present. Slender types also tend to lose water faster, so they need [careful packing](/blog/protecting-eggplant-from-chilling-injury-in-transit).",
      },
      {
        heading: "Baby and small eggplants",
        text: "Small round or egg-shaped eggplants, in purple, green, white or striped forms, are often cooked whole or halved, for example stuffed with spice pastes. Restaurants and speciality grocers value them for presentation and even portion size. Uniformity within a pack matters most here, since the fruit is often served whole.",
      },
      {
        heading: "Food service and processing",
        text: "Food-service kitchens and processors use eggplant in curries, grilled vegetable mixes, dips and ready meals. They usually want consistent size for easy preparation and predictable yield, as in our [illustrative case study on vegetables for ready-meal manufacturers](/case-studies/vegetables-for-ready-meal-manufacturers). Share the dish or product, the variety type and the size range with your supplier, so the right fruit can be chosen.",
      },
      {
        heading: "Know your end customer",
        text: "Preferences differ by community and market, and the same variety can be popular in one place and unfamiliar in another. Before ordering, check which shapes, colours and sizes your customers expect, and confirm availability, since varieties vary by season.",
      },
      {
        heading: "Conclusion",
        text: "Round, long and small eggplants each suit different dishes and communities, so the right type depends on who will cook it and how. Check what your customers expect, confirm availability by season, and agree the variety type and size range with your supplier.",
      },
      {
        heading: "Frequently asked questions",
        text: "Common questions from buyers.",
        faq: [
          {
            question: "Does skin colour affect taste?",
            answer: "Colour is mainly a varietal trait; flavour and bitterness depend more on variety and maturity. Taste samples of the types your customers know.",
          },
          {
            question: "Can different types share a shipment?",
            answer: "Usually, if they are packed and marked separately and the transit temperature suits all of them. Agree the split on the order.",
          },
          {
            question: "Which eggplant is used for bharta?",
            answer: "Bharta, made from flame-roasted eggplant, is commonly prepared with large round fruit because of its generous, soft flesh.",
          },
          {
            question: "What are small eggplants used for?",
            answer: "They are often cooked whole or halved, for example stuffed with spice pastes, so uniformity within a pack matters most.",
          },
          {
            question: "Which eggplant suits stir-fries and curries?",
            answer: "Long, slender types, which have thinner skin and cook quickly.",
          },
        ],
      },
    ],
  ],

  drumstick: [
    // Fresh Drumsticks: Pod Length, Tenderness and Colour
    [
      {
        heading: "In brief",
        text: "Good drumsticks are even in length, uniformly green, firm but slightly flexible, with soft flesh and small seeds inside. For the European Union, drumsticks from India must travel with an official certificate and residue analysis results, so plan testing alongside quality.",
      },
      {
        heading: "Even length",
        text: "Drumsticks, the long pods of the moringa tree, Moringa oleifera, are usually sold in bundles of similar length. Even length makes [bundling, packing](/case-studies/grading-and-bundling-drumstick-pods) and presentation easier, and helps food-service buyers cut pieces of consistent size. Pod length varies by variety and season, so agree the length range your market expects and confirm it against a sample.",
      },
      {
        heading: "Varieties",
        text: "Indian research institutions have released improved moringa varieties, such as the annual varieties PKM 1 and PKM 2 from Tamil Nadu Agricultural University, and pod length, thickness and colour differ between varieties. Ask your supplier which variety or source a lot comes from if consistency between shipments matters to you.",
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
        text: "Look for cracks, splits, insect damage and dark sunken patches along the pod. Drumsticks are long and can break if bundled or stacked carelessly, and broken pods dry out and spoil faster; our guide to [keeping drumsticks fresh](/blog/keeping-drumsticks-fresh-from-farm-to-market) covers packing for length. Agree acceptable limits for broken and damaged pods on the specification.",
      },
      {
        heading: "EU controls on drumsticks from India",
        text: "Drumsticks from India, fresh, chilled or frozen, are listed in Annex II of EU Implementing Regulation 2019/1793, as amended in 2026, for pesticide residues. Confirm with your supplier which requirements apply to your destination.",
        list: {
          items: [
            "Each consignment must be accompanied by an official certificate and the results of sampling and analysis.",
            "30 per cent of consignments are subject to identity and physical checks at the EU border; our guide to [export documents for fresh produce](/blog/phytosanitary-certificates-and-export-documents-for-fresh-produce) explains how these sit alongside the phytosanitary certificate.",
            "Drumstick is also covered by APEDA's HortiNet traceability system.",
          ],
        },
      },
      {
        heading: "Planning the order",
        text: "Freshland Exports supplies fresh drumsticks with a minimum order quantity of 500 kg to 1 MT. When you [request a quotation](/contact), share the quantity, length range, bundle size, packing and destination together, and confirm how the pods will be kept cool and protected from drying out in transit.",
      },
      {
        heading: "Conclusion",
        text: "Good drumsticks are even in length, uniformly green and firm, with soft flesh and small seeds inside. For the EU, plan residue testing and certification alongside quality, and agree the length range, bundle size, packing and documents with your supplier.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions importers ask about drumsticks.",
        faq: [
          {
            question: "How can I check whether drumsticks are tender?",
            answer: "Bend a pod gently and cut a few open: the flesh should be moist and soft, the seeds small, and the pod should not feel rigid.",
          },
          {
            question: "What do drumsticks from India need for the EU?",
            answer: "Each consignment must be accompanied by an official certificate and the results of sampling and analysis for pesticide residues, and 30 per cent of consignments are checked at the border.",
          },
          {
            question: "Which drumstick varieties are grown in India?",
            answer: "Indian research institutions have released improved varieties, such as the annual PKM 1 and PKM 2 from Tamil Nadu Agricultural University. Pod length, thickness and colour differ between varieties.",
          },
          {
            question: "What damage should be checked in drumsticks?",
            answer: "Cracks, splits, insect damage and dark sunken patches. Broken pods dry out and spoil faster.",
          },
          {
            question: "Why do buyers want drumsticks of even length?",
            answer: "Even length makes bundling, packing and presentation easier and helps food-service buyers cut pieces of consistent size.",
          },
        ],
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
        text: "Cool storage with fairly high humidity helps drumsticks hold their moisture and colour. Unlike common vegetables, drumsticks have no widely published commercial storage specification, so agree the temperature and humidity with your supplier and logistics provider for each route, and check the first shipments closely. Avoid leaving pods in direct sun or warm loading areas while they wait for dispatch.",
      },
      {
        heading: "Careful bundling",
        text: "Drumsticks are usually tied in bundles of even length, as our [illustrative case study on grading and bundling drumstick pods](/case-studies/grading-and-bundling-drumstick-pods) describes. Bundles should be tight enough to stop the pods shifting and rubbing, but not so tight that they crush or crack the pods. Lining cartons or wrapping bundles can help reduce drying, as long as the packaging does not trap condensation.",
      },
      {
        heading: "Pack for length",
        text: "Because drumsticks are long and fairly brittle, cartons should fit the pod length so that ends are not bent or snapped. Stack cartons so their weight rests on the carton walls, and handle them carefully during loading. Broken pods dry out and spoil faster than whole ones.",
      },
      {
        heading: "Inspect and rotate",
        text: "Shelf life depends on [how tender the pods were at harvest](/blog/fresh-drumsticks-pod-length-tenderness-and-colour) and the conditions on the way, so there is no single figure. On arrival, check bundles for limp, yellowing or split pods, separate them, and sell older stock first.",
      },
      {
        heading: "Conclusion",
        text: "Drumsticks dry out steadily after harvest, so cool, fairly humid conditions, careful bundling and cartons that fit the pod length decide how they arrive. Agree storage conditions for each route with your supplier, and check the first shipments closely.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about keeping drumsticks fresh.",
        faq: [
          {
            question: "Is there a standard storage specification for drumsticks?",
            answer: "Unlike common vegetables, drumsticks have no widely published commercial storage specification, so agree temperature and humidity with your supplier and logistics provider for each route.",
          },
          {
            question: "How should drumsticks be packed?",
            answer: "In bundles of even length, tight enough to stop pods rubbing but not so tight that they crack, in cartons that fit the pod length so ends are not bent or snapped.",
          },
          {
            question: "Why do drumsticks turn fibrous?",
            answer: "They lose water steadily after harvest. As they dry, the pods turn limp and wrinkled and the flesh becomes fibrous.",
          },
          {
            question: "Can wrapping help keep drumsticks fresh?",
            answer: "Lining cartons or wrapping bundles can help reduce drying, as long as the packaging does not trap condensation.",
          },
          {
            question: "How long do drumsticks stay fresh?",
            answer: "There is no single figure: it depends on how tender the pods were at harvest and on the conditions on the way.",
          },
        ],
      },
    ],
    // Drumsticks in Sambar, Curries and Frozen Packs
    [
      {
        heading: "Sambar and South Indian cooking",
        text: "Drumsticks are a familiar ingredient in sambar, the lentil and vegetable stew of South Indian cooking. They are cut into short lengths and simmered until the soft inner flesh can be scraped from the pod. Restaurants and grocers serving South Indian communities, like those in our [illustrative case study on traditional vegetables for restaurants and caterers](/case-studies/traditional-vegetables-for-restaurants-and-caterers), want tender pods of even thickness that cook through at the same rate.",
      },
      {
        heading: "Curries and other dishes",
        text: "Drumsticks also appear in vegetable curries, dals, coconut-based gravies and mixed vegetable dishes across South Asia and in communities abroad. Cooks value them for their mild flavour and the way they absorb the sauce. For these uses, tenderness matters more than exact length, as the pods are always cut before cooking.",
      },
      {
        heading: "Frozen cut drumsticks",
        text: "Frozen drumsticks, cleaned and cut into short pieces, let overseas grocers and food-service buyers offer the vegetable throughout the year. Processors select young, tender pods, because fibrous pods stay tough after freezing. Pieces should be of even length and pack free-flowing, without clumping, and should be kept at −18 °C or colder, with the same [cold-chain discipline as other quick-frozen vegetables](/blog/maintaining-the-cold-chain-for-frozen-peas). EU import conditions for drumsticks from India cover frozen as well as fresh product.",
      },
      {
        heading: "What buyers specify",
        text: "Share your intended use and market with your supplier so the specification can be confirmed per order.",
        list: {
          items: [
            "Fresh drumsticks: buyers usually agree the [length range](/blog/fresh-drumsticks-pod-length-tenderness-and-colour), bundle size and packing.",
            "Frozen packs: they specify the cut length, pack size, labelling and cooking instructions.",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Drumsticks are a staple of sambar and South Asian curries, and frozen cut pieces let overseas buyers offer them all year. Specify tender pods for both fresh and frozen supply, and share your intended use and market so the specification can be confirmed per order.",
      },
      {
        heading: "Frequently asked questions",
        text: "Common questions from buyers.",
        faq: [
          {
            question: "Are drumsticks and moringa leaves the same product?",
            answer: "Both come from the moringa tree, but drumsticks are the pods, cooked as a vegetable, while the leaves are used fresh or dried. Moringa leaf powder is a separate product; see our [Moringa Powder page](/products/moringa-powder).",
          },
          {
            question: "Fresh or frozen?",
            answer: "Fresh drumsticks suit markets with fast distribution; frozen cut pieces suit buyers who need year-round supply and longer storage.",
          },
          {
            question: "How are drumsticks cooked in sambar?",
            answer: "They are cut into short lengths and simmered until the soft inner flesh can be scraped from the pod.",
          },
          {
            question: "Why must drumsticks for freezing be tender?",
            answer: "Fibrous pods stay tough after freezing, so processors select young, tender pods.",
          },
          {
            question: "How are frozen drumsticks stored?",
            answer: "At −18 °C or colder, like other quick-frozen vegetables. EU import conditions for drumsticks from India cover frozen as well as fresh product.",
          },
        ],
      },
    ],
  ],

  beans: [
    // Fresh Green Beans: Snap, Straightness and Size Grading
    [
      {
        heading: "Know which bean you are buying",
        text: "Green beans, also called French or snap beans, are the tender pods of Phaseolus vulgaris. Yardlong beans, Vigna unguiculata, are a different crop with much longer pods, and they are treated differently by some importing countries. Name the bean type clearly in your enquiry so that quotations, specifications and import paperwork all refer to the same product.",
      },
      {
        heading: "The snap test",
        text: "Fresh green beans should snap cleanly when bent, with a crisp sound and a moist break. Beans that bend without breaking, or feel rubbery, have lost moisture or are past their best. Snap is one of the quickest checks a buyer can make on a sample, and it says a lot about how the beans were harvested and handled.",
      },
      {
        heading: "Straight pods",
        text: "Straight beans pack neatly, look better in retail packs and are easier to trim and cut on processing lines; see [how green beans are used in retail, food service and freezing](/blog/green-beans-for-retail-food-service-and-freezing). Some curvature is normal, but many curved, twisted or misshapen pods reduce the grade. Agree how much curvature is acceptable for your market, and compare it against a sample.",
      },
      {
        heading: "Uniform diameter",
        text: "Buyers often grade beans by pod diameter as well as length. Slim beans are usually tender, with small seeds, while thicker beans may be more mature, with visible seed bumps and tougher pods. Specify the diameter and length range you need, since size varies by variety and season.",
      },
      {
        heading: "Bright colour, clean surface",
        text: "Good beans are an even, bright green. Check the tips and stem ends: they should be fresh, not dry or blackened. Look out for:",
        list: {
          items: [
            "Yellowing or brown streaks",
            "Rust spots, which can also be a sign of [chilling injury](/blog/pre-cooling-green-beans-for-longer-freshness)",
            "White patches of mould",
            "Bruises, cuts and insect damage, which spoil quickly in transit",
          ],
        },
      },
      {
        heading: "Import checks to plan for",
        text: "A [phytosanitary certificate](/blog/phytosanitary-certificates-and-export-documents-for-fresh-produce) is normally required for fresh beans. In the European Union, yardlong beans from India are listed in Annex II of Implementing Regulation 2019/1793 for pesticide residues, with an official certificate and analysis results required for each consignment and 50 per cent of consignments checked at the border; green beans of Phaseolus vulgaris from India are not listed there. French, long and cluster beans are among the vegetables covered by APEDA's HortiNet traceability system.",
      },
      {
        heading: "Samples and specification",
        text: "Freshland Exports supplies fresh beans with a minimum order quantity of 500 kg to 1 MT. Before ordering, request a sample and agree on a specification, and include these details when you [request a quotation](/contact):",
        list: {
          items: [
            "Bean type and grade",
            "Size range",
            "Defect limits",
            "Packing",
            "How the beans will be cooled and kept cool in transit",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Good green beans snap cleanly, are straight, evenly sized and bright green, with fresh tips and stem ends. Name the bean type clearly, since yardlong beans face different EU checks, and agree grade, size, defect limits and cooling on a specification before ordering.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about green beans.",
        faq: [
          {
            question: "Are yardlong beans the same as green beans?",
            answer: "No. Green beans are the pods of Phaseolus vulgaris, while yardlong beans are Vigna unguiculata, a different crop with much longer pods, and some importing countries treat them differently.",
          },
          {
            question: "What does the snap test show?",
            answer: "Fresh beans snap cleanly with a moist break. Beans that bend without breaking, or feel rubbery, have lost moisture or are past their best.",
          },
          {
            question: "How are green beans graded?",
            answer: "By length and pod diameter. Slim beans are usually tender with small seeds, while thicker beans may be more mature.",
          },
          {
            question: "Do EU residue checks apply to green beans from India?",
            answer: "Yardlong beans from India are listed for pesticide residues, with 50 per cent of consignments checked at the border; green beans of Phaseolus vulgaris from India are not listed there.",
          },
          {
            question: "Is there an international quality standard for beans?",
            answer: "Yes. UNECE Standard FFV-06 covers the marketing and commercial quality control of beans.",
          },
        ],
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
        text: "The sooner beans are cooled after picking, the better they hold their quality. Pre-cooling is commonly done with chilled air or cold water, depending on the facilities available. Ask how and when beans are cooled before packing, since the time between harvest and cooling makes a real difference to freshness.",
      },
      {
        heading: "General reference storage conditions",
        text: "Snap beans are generally stored at about 5 to 7.5 °C with 95 to 100 per cent relative humidity (USDA Agriculture Handbook 66, 2016), under which they keep for roughly eight to twelve days. These are general figures for good-quality beans; agree the conditions for each route with your supplier and logistics provider.",
      },
      {
        heading: "Cool, not too cold",
        text: "Green beans can suffer chilling injury if held too cold for too long. Avoid holding beans with produce that needs near-freezing temperatures. Our [illustrative case study on cold-chain planning for perishable vegetables](/case-studies/cold-chain-planning-for-perishable-vegetables) shows how this is handled in transit. Typical symptoms are:",
        list: {
          items: [
            "Rusty brown spots at around 5 to 7.5 °C over longer periods.",
            "An opaque discolouration of the whole pod at lower temperatures.",
            "Tolerance of only a few days at 1 to 2.5 °C.",
          ],
        },
      },
      {
        heading: "Ethylene and humidity",
        text: "Beans are sensitive to ethylene: levels above 0.1 part per million can shorten storage life by 30 to 50 per cent, so keep them away from ripening fruit, including in [mixed loads](/blog/building-a-mixed-agricultural-order-from-india). Fairly humid conditions keep pods crisp, but free water encourages mould, so use ventilated cartons and liners that allow airflow, and avoid temperature swings that cause condensation.",
      },
      {
        heading: "Hold the chain",
        text: "Once beans are cooled, keep them cool through packing, loading, transit and storage at destination. Each warm break speeds ageing. On arrival, check a few cartons for limp pods, spotting and mould, and confirm the [snap and colour](/blog/fresh-green-beans-snap-straightness-and-size-grading), and sell older stock first.",
      },
      {
        heading: "Conclusion",
        text: "Removing field heat soon after harvest and holding a steady cool chain are what keep green beans crisp, while chilling, ethylene and free water shorten their life. Ask how beans are pre-cooled, agree transit conditions for each route, and check cartons on arrival.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about pre-cooling beans.",
        faq: [
          {
            question: "Why pre-cool green beans?",
            answer: "Beans picked warm keep respiring quickly, losing moisture and sugars. Removing field heat soon after harvest slows these changes and keeps the pods crisp for longer.",
          },
          {
            question: "What are the reference storage conditions for snap beans?",
            answer: "Snap beans are generally stored at about 5 to 7.5 °C with 95 to 100 per cent relative humidity, under which they keep for roughly eight to twelve days.",
          },
          {
            question: "How are green beans pre-cooled?",
            answer: "Commonly with chilled air or cold water, depending on the facilities available. The time between harvest and cooling makes a real difference.",
          },
          {
            question: "How sensitive are green beans to ethylene?",
            answer: "Levels above 0.1 part per million can shorten storage life by 30 to 50 per cent.",
          },
          {
            question: "What are the signs of chilling injury in green beans?",
            answer: "Rusty brown spots at around 5 to 7.5 °C over longer periods, and an opaque discolouration of the whole pod at lower temperatures.",
          },
        ],
      },
    ],
    // Green Beans for Retail, Food Service and Freezing
    [
      {
        heading: "Retail packs",
        text: "Supermarket and grocery buyers focus on appearance: straight, slim, bright green beans of even length, with very few blemishes. Beans are often sold whole in trays, bags or loose, and some retailers prefer them topped and tailed for convenience. Agree the grade, length and pack format with your supplier, as well as labelling for your market; our [illustrative case study on green beans and okra for retail packs](/case-studies/green-beans-and-okra-for-retail-packs) shows a typical brief.",
      },
      {
        heading: "Food-service kitchens",
        text: "Restaurants, caterers and hotel kitchens want beans that are quick to prepare and cook evenly. Many prefer trimmed beans, which save labour, and value consistent diameter so portions cook at the same rate. Catering-size packs that are easy to store and handle are usually preferred.",
      },
      {
        heading: "Beans for freezing",
        text: "Processors freezing green beans need fresh, tender pods that reach the plant soon after harvest. Beans are usually trimmed and cut before blanching and freezing, so straightness matters less than tenderness, colour and freedom from defects. [Over-mature, fibrous beans](/blog/fresh-green-beans-snap-straightness-and-size-grading) stay tough after freezing and lower the quality of the finished product. Like other frozen vegetables, frozen beans are normally labelled to be cooked before eating and kept at −18 °C or colder; see our [illustrative case study on vegetables for frozen vegetable lines](/case-studies/vegetables-for-frozen-vegetable-lines).",
      },
      {
        heading: "Whole, trimmed or cut",
        text: "The form you specify should follow the end use. Share the intended use, cut style and pack size with your supplier at enquiry stage, so the grade and processing can be confirmed per order.",
        list: {
          items: [
            "Whole beans suit retail and some food-service menus.",
            "Trimmed beans save kitchen time.",
            "Cut beans suit ready meals, mixed vegetables and frozen packs.",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Retail packs, kitchens and freezing lines each call for a different grade and form of green bean, from straight, slim whole beans to tender cut beans. Let the end use set the specification, and share it with your supplier at enquiry stage so grade and processing can be confirmed.",
      },
      {
        heading: "Frequently asked questions",
        text: "Common questions from buyers.",
        faq: [
          {
            question: "Do trimmed beans keep as long as whole beans?",
            answer: "No. Trimming exposes cut ends, so trimmed beans are more perishable and need tighter temperature control and faster use.",
          },
          {
            question: "Are fine beans better than standard beans?",
            answer: "Not better, just different: finer beans are slimmer and often chosen where presentation matters, while standard beans suit general cooking and processing.",
          },
          {
            question: "What do retailers look for in green beans?",
            answer: "Straight, slim, bright green beans of even length with very few blemishes.",
          },
          {
            question: "What do processors need for freezing green beans?",
            answer: "Fresh, tender pods that reach the plant soon after harvest. Tenderness, colour and freedom from defects matter more than straightness.",
          },
          {
            question: "Why do kitchens prefer trimmed beans?",
            answer: "Trimmed beans save labour, and a consistent diameter means portions cook at the same rate.",
          },
        ],
      },
    ],
  ],
};
