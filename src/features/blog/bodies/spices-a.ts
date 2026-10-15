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
        text: "Pungency is the first thing to settle, because it shapes everything else in the order. A sauce maker chasing fire wants a very different chilli from a paprika-style blend that is mostly about colour; our guide to [Teja, Byadgi and Guntur chilli varieties](/blog/teja-byadgi-and-guntur-understanding-indian-chilli-varieties) shows how Indian types differ. Tell your supplier the heat level your product needs, ask how it is measured (our explainer on [ASTA colour and SHU in red chilli](/blog/understanding-asta-colour-and-shu-in-red-chilli-powder) covers the usual measures), and agree the method and an acceptable range on the specification sheet so that later lots can be compared fairly.",
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
        text: "Pod length and shape vary by variety and season, so agree a range rather than a single figure. A small share of broken pieces is normal in a dried crop; what you want is a lot that matches the sample you approved. Check a sample for:",
        list: {
          items: [
            "Broken pods",
            "Loose seeds",
            "Discoloured or spotted pods",
            "Foreign matter",
          ],
        },
      },
      {
        heading: "Paperwork before the first order",
        text: "Agree packing, labelling and how each lot will be checked against the specification before shipment, so that both sides are working from the same document. Our illustrative case study on [defining requirements for bulk spice procurement](/case-studies/defining-requirements-for-bulk-spice-procurement) shows how such a specification comes together. Freshland Exports supplies dried red chillies with a minimum order quantity of 100 kg to 500 kg. When you [request a quotation](/contact), share the heat level and colour you need, stem or stemless, the pod length range, packing and your destination market. Before the first order, ask for:",
        list: {
          items: [
            "A sample",
            "The specification sheet",
            "The analysis your destination market expects, which may cover moisture, aflatoxin, pesticide residues or other parameters",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Buying dried red chilli well comes down to settling heat first, then colour, stem preference and pod condition, and writing each into the specification. Approve a sample, agree the tests your market needs, and check every lot against that sample before it ships.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about dried red chilli quality.",
        faq: [
          {
            question: "Should I buy stem-on or stemless dried chillies?",
            answer: "Stemless pods suit grinding and save a processing step, while stem-on pods are often preferred for whole-spice retail and some traditional uses. If you buy stemless, agree how much stray stem is acceptable.",
          },
          {
            question: "What does poor colour in dried chillies indicate?",
            answer: "Pale, patchy, brownish or white-spotted pods suggest over-drying, sun bleaching, age or mould.",
          },
          {
            question: "How should I compare chilli samples for colour?",
            answer: "Ask how colour value is assessed, then compare samples side by side in daylight rather than under warehouse lighting.",
          },
          {
            question: "Why agree a pod length range rather than one figure?",
            answer: "Pod length and shape vary by variety and season, so a range is more realistic than a single figure.",
          },
          {
            question: "Are some broken pods acceptable in dried chilli?",
            answer: "A small share of broken pieces is normal in a dried crop. What matters is that the lot matches the sample you approved.",
          },
        ],
      },
    ],
    // Teja, Byadgi and Guntur: Understanding Indian Chilli Varieties
    [
      {
        heading: "Why variety matters",
        text: "Indian chillies are sold under trade names that signal a particular balance of heat, colour and pod shape. Buyers use these names as shorthand, but they are a starting point rather than a guarantee, so always judge the actual lot against a sample, using the checks in our [dried red chilli export guide](/blog/dried-red-chilli-export-guide-heat-colour-and-stem). Within any named type, heat and colour shift with:",
        list: {
          items: [
            "Season",
            "Growing conditions",
            "How the crop was dried",
          ],
        },
      },
      {
        heading: "Teja for heat",
        text: "Teja is generally known in the trade as a hot chilli with a bright red colour and a fairly small, slender pod. It is a common choice where pungency is the priority, such as hot sauces, chilli flakes and spicy seasoning blends. If your recipe depends on a strong kick, this is often the name buyers ask for first. Our illustrative case study on [specifying chilli for sauces and pastes](/case-studies/specifying-chilli-for-sauces-and-pastes) shows how such a brief is put together.",
      },
      {
        heading: "Byadgi for colour",
        text: "Byadgi is usually prized more for colour than for fire. Its wrinkled pods give a deep red with comparatively mild heat, which makes it popular where a rich colour is wanted without overwhelming pungency — curry powders, spice pastes and dishes that should look red but taste balanced. Colour-focused buyers often blend it with hotter types.",
      },
      {
        heading: "Guntur as a trade family",
        text: "Guntur is widely used as a broad trade name covering several chilli types rather than a single variety. These are typically all-round chillies with moderate to high heat and good colour, used across ground chilli and general seasoning; our [red chilli powder buying guide](/blog/red-chilli-powder-buying-guide-colour-heat-and-grind) covers colour, heat and grind for the ground product. Because the name covers more than one type, specify the exact variety or characteristics you need rather than relying on the name alone.",
      },
      {
        heading: "Matching variety to product",
        text: "Start from what your finished product needs: heat, colour, or a balance of both. Many processors blend varieties to hit a consistent target year round. To find the right match:",
        list: {
          ordered: true,
          items: [
            "Share your end use with your supplier",
            "Request samples of more than one type",
            "Agree heat and colour expectations on the specification sheet for each order",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Teja is generally the choice for heat, Byadgi for colour with milder pungency, and Guntur is a broad trade family that needs a closer specification. Treat the names as shorthand, compare samples side by side, and [request a quotation](/contact) with your end use and target heat and colour.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about Indian chilli varieties.",
        faq: [
          {
            question: "Which Indian chilli is known for heat?",
            answer: "Teja is generally known in the trade as a hot chilli with a bright red colour and a fairly small, slender pod. It is a common choice for hot sauces, chilli flakes and spicy seasoning blends.",
          },
          {
            question: "Why is Byadgi chilli used?",
            answer: "Byadgi is prized more for colour than for fire. Its wrinkled pods give a deep red with comparatively mild heat, which suits curry powders, spice pastes and dishes that should look red but taste balanced.",
          },
          {
            question: "Is Guntur a single chilli variety?",
            answer: "No. Guntur is widely used as a broad trade name covering several chilli types, so specify the exact variety or characteristics you need.",
          },
          {
            question: "Does a variety name guarantee heat and colour?",
            answer: "No. Heat and colour shift with season, growing conditions and how the crop was dried, so judge each lot against a sample.",
          },
          {
            question: "Why do processors blend chilli varieties?",
            answer: "Blending helps them hit a consistent heat and colour target year round. Colour-focused buyers often blend Byadgi with hotter types.",
          },
        ],
      },
    ],
    // Storing Dried Chillies to Protect Colour and Prevent Mould
    [
      {
        heading: "Light fades the red",
        text: "The red pigment in dried chillies breaks down with exposure to light, especially direct sunlight. Pods left in the open or near bright windows gradually turn dull and orange-brown, and that loss of colour cannot be reversed. Keep stock in opaque packaging and in a dark store, and avoid leaving bags on loading bays or in yards for longer than necessary. Colour is one of the first things buyers check, as our [dried red chilli export guide](/blog/dried-red-chilli-export-guide-heat-colour-and-stem) explains.",
      },
      {
        heading: "Moisture invites mould",
        text: "Dried chillies take up moisture from humid air. Once they become damp they soften, lose their crispness and become vulnerable to mould, which shows as white or dark patches, often near the stem. To keep stock dry:",
        list: {
          items: [
            "Store bags off the floor on pallets",
            "Keep bags away from walls",
            "Keep the store dry",
            "Never pack pods that feel limp or leathery",
          ],
        },
      },
      {
        heading: "Keep it cool",
        text: "Warmth speeds the loss of both colour and aroma, so a cool store is better than a warm one. Avoid stacking chillies next to heat sources or under hot roofs. Some buyers use cold storage for longer holding; if you do, agree the conditions with your supplier and take care to avoid condensation when stock is moved back into warm air.",
      },
      {
        heading: "Pack and stack with care",
        text: "Dried pods are brittle, and heavy stacking crushes them into broken pieces and loose seed. Use packaging suited to the weight, stack within sensible limits and handle bags gently. Good packaging also keeps out insects and dust, so check that bags are intact on arrival and before they go into store. If you also hold ground chilli, see our guide to [storing and handling bulk chilli powder](/blog/storage-and-handling-considerations-for-bulk-chilli-powder).",
      },
      {
        heading: "Inspect and rotate",
        text: "Remove any affected bags promptly before a problem spreads, and use older stock first. How long dried chillies hold their quality depends on the lot and the storage conditions, so agree expectations with your supplier for your route and market. Our illustrative case study on [planning seasonal whole-spice purchases](/case-studies/planning-seasonal-whole-spice-purchases) looks at timing purchases and holding stock. Check stock regularly for:",
        list: {
          items: [
            "Musty smells",
            "Soft pods",
            "Insect activity",
            "Fading",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Dried chillies lose colour to light and warmth and invite mould once damp, and faded colour cannot be put right later. Keep stock dark, dry and cool, handle it gently and rotate it, and agree storage expectations with your supplier when you [request a quotation](/contact).",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about storing dried chillies.",
        faq: [
          {
            question: "Can faded chilli colour be restored?",
            answer: "No. Light breaks down the red pigment, and once pods turn dull and orange-brown the loss cannot be reversed.",
          },
          {
            question: "How do I spot mould on dried chillies?",
            answer: "Mould shows as white or dark patches, often near the stem. Pods that have taken up moisture soften and lose their crispness first.",
          },
          {
            question: "Is cold storage suitable for dried chillies?",
            answer: "Some buyers use it for longer holding. Agree the conditions with your supplier and avoid condensation when stock is moved back into warm air.",
          },
          {
            question: "Why do dried chillies break up in storage?",
            answer: "Dried pods are brittle, and heavy stacking crushes them into broken pieces and loose seed.",
          },
          {
            question: "How long do dried chillies keep their quality?",
            answer: "It depends on the lot and the storage conditions, so agree expectations with your supplier for your route and market.",
          },
        ],
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
        text: "Larger, even berries look better in whole-spice retail and grinders, while processors focused on flavour may accept a broader size mix, as our article on [black pepper for grinding, seasoning blends and oleoresin](/blog/black-pepper-for-grinding-seasoning-blends-and-oleoresin) explains. Check a sample for uniformity: a lot with many small or shrivelled berries alongside large ones suggests mixed material. State the size range your product requires and confirm it per order; our guide to [Malabar and Tellicherry pepper grades](/blog/malabar-and-tellicherry-indian-black-pepper-grades-explained) shows how size relates to grade names.",
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
        text: "Look for stems, dust, stones and other foreign matter, and agree an acceptable limit. Agree packing and labelling in advance, and check each shipment against the approved sample. If you are weighing up the form to buy, our illustrative case study on [choosing whole or ground pepper](/case-studies/choosing-whole-or-ground-pepper) sets out the trade-offs. Freshland Exports supplies whole black pepper with a minimum order quantity of 100 kg to 500 kg. When you [request a quotation](/contact), share the bulk density, berry size range, limits on light berries and pinheads, moisture, packing and destination. Before the first order, request:",
        list: {
          items: [
            "A sample",
            "A specification sheet",
            "The tests your destination market expects, such as microbiology or pesticide residues",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Bulk density, berry size and uniformity, light berry and pinhead limits, moisture and aroma together define a lot of black pepper. Write each into the specification, smell the sample as well as measuring it, and check every shipment against what you approved.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about black pepper quality.",
        faq: [
          {
            question: "What does bulk density show in black pepper?",
            answer: "It is the weight of a fixed volume of berries. A higher density usually means more solid pepper and fewer hollow berries.",
          },
          {
            question: "What are light berries in pepper?",
            answer: "Immature, hollow or poorly developed berries that float, crush easily and carry little flavour.",
          },
          {
            question: "What are pinheads in black pepper?",
            answer: "Very small, undeveloped berries. They reduce value, so buyers usually set a maximum level for them.",
          },
          {
            question: "How should good black pepper smell?",
            answer: "Sharp, warm and woody, with a lively pungency when crushed. Musty, flat or earthy notes point to poor drying or old stock.",
          },
          {
            question: "Does berry size matter if pepper will be ground?",
            answer: "Less so. Larger, even berries matter most for whole-spice retail and grinders, while processors focused on flavour may accept a broader size mix.",
          },
        ],
      },
    ],
    // Malabar and Tellicherry: Indian Black Pepper Grades Explained
    [
      {
        heading: "Names with history",
        text: "Malabar and Tellicherry are among the best-known names in the pepper trade. Over time they have come to describe types and grades of Indian black pepper as much as any place. Buyers use them as a quick signal of what to expect, but the full specification — size, density, moisture and cleanliness — is what defines a particular lot. Our guide to [black pepper quality: bulk density, size and aroma](/blog/black-pepper-quality-bulk-density-size-and-aroma) explains each of these measures.",
      },
      {
        heading: "Malabar as the standard",
        text: "Malabar pepper is generally understood as a sound, well-cleaned Indian black pepper of regular size. It is a workhorse for grinding, food service and seasoning manufacture, where consistent flavour and pungency matter more than a premium appearance; our article on [black pepper for grinding, seasoning blends and oleoresin](/blog/black-pepper-for-grinding-seasoning-blends-and-oleoresin) covers those uses. Different Malabar grades are separated by attributes such as density and the level of light berries.",
      },
      {
        heading: "Tellicherry and berry size",
        text: "Tellicherry usually refers to the larger berries, sorted out by size from the wider crop. Bigger, fully developed berries are often associated with a fuller, more rounded aroma, and they look impressive in whole-pepper packs and table grinders. That is why the name is commonly used for premium retail. Ask for the size band behind any Tellicherry offer.",
      },
      {
        heading: "How size sets the grade",
        text: "Pepper is graded by passing it through sieves, so berries are separated by diameter. The larger fractions command more, and smaller ones go to grinding. Exact grade definitions can vary between traders and markets, so do not rely on a name alone. Agree in writing:",
        list: {
          items: [
            "The sieve size",
            "Density",
            "Other limits, such as moisture, light berries and cleanliness",
          ],
        },
      },
      {
        heading: "Choosing the right grade",
        text: "Request samples of more than one grade and compare them against your product before committing. As a rule, match the grade to the job:",
        list: {
          items: [
            "If the pepper will be ground, paying for large berries may add cost without adding value.",
            "If it will be sold whole, appearance matters and a bolder grade may be worth it.",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Malabar generally signals sound, regular pepper for grinding and seasoning, while Tellicherry usually means larger berries for premium whole-pepper retail. Because grade definitions vary between traders, put size, density and other limits in writing, and [request a quotation](/contact) with samples of the grades you are comparing.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about Malabar and Tellicherry pepper grades.",
        faq: [
          {
            question: "What is the difference between Malabar and Tellicherry pepper?",
            answer: "Malabar is generally understood as a sound, well-cleaned Indian black pepper of regular size, while Tellicherry usually refers to the larger berries sorted out by size from the wider crop.",
          },
          {
            question: "Why is Tellicherry pepper used for premium retail?",
            answer: "Bigger, fully developed berries are often associated with a fuller, more rounded aroma, and they look impressive in whole-pepper packs and table grinders.",
          },
          {
            question: "How is black pepper graded by size?",
            answer: "It is passed through sieves that separate berries by diameter. The larger fractions command more, and smaller ones go to grinding.",
          },
          {
            question: "Are Malabar and Tellicherry grade definitions fixed?",
            answer: "No. Exact definitions can vary between traders and markets, so agree size, density and other limits in writing rather than relying on the name.",
          },
          {
            question: "Is Tellicherry pepper worth buying for grinding?",
            answer: "Often not. If the pepper will be ground, paying for large berries may add cost without adding value.",
          },
        ],
      },
    ],
    // Black Pepper for Grinding, Seasoning Blends and Oleoresin
    [
      {
        heading: "Retail grinding and packing",
        text: "Packers selling ground pepper want steady pungency and aroma from lot to lot, so customers notice no change between packs. Berry appearance matters less once ground, but cleanliness, low moisture and colour of the ground product do. Agree particle size for your grind and keep a reference sample to compare each new lot against. If you would rather buy ready-ground, see our [black pepper powder](/products/black-pepper-powder).",
      },
      {
        heading: "Whole pepper for grinders",
        text: "Whole pepper for table grinders and whole-spice retail is judged largely by the eye. Buyers here look for bold, even, dark berries with few light berries, stems or broken pieces. A uniform grade also grinds more evenly in consumer mills. Specify size and cleanliness tightly for this use and check the first shipment carefully; our guide to [Malabar and Tellicherry pepper grades](/blog/malabar-and-tellicherry-indian-black-pepper-grades-explained) explains how size grades are named.",
      },
      {
        heading: "Seasoning blends",
        text: "Seasoning manufacturers use pepper in meat rubs, snack seasonings, sauces and ready meals, often alongside salt, garlic and herbs. Some ask for treated pepper to meet their microbiological limits; agree the requirement and method with your supplier in advance. Our illustrative case study on [black pepper for meat and savoury seasoning](/case-studies/black-pepper-for-meat-and-savoury-seasoning) shows a typical brief. Seasoning makers typically specify:",
        list: {
          items: [
            "A particular mesh",
            "A consistent flavour strength",
            "Microbiological limits suited to their process",
          ],
        },
      },
      {
        heading: "Extraction and oleoresin",
        text: "Extraction buyers turn pepper into oleoresin and essential oil, so they care most about the content of pungent and aromatic compounds rather than looks. Smaller or lighter grades can suit this use if their yield is acceptable. These buyers often specify the compounds they test for and the method. Agree those on the specification sheet before ordering.",
      },
      {
        heading: "Share your process",
        text: "The quickest way to the right pepper is to tell your supplier what will happen to it. Requirements vary between buyers and markets, so confirm the details per order rather than assuming one grade fits every use. When you [request a quotation](/contact), include:",
        list: {
          items: [
            "The end use: whole retail, grinding, blending or extraction",
            "Your target market",
            "Packing and labelling",
            "Any testing you need",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Retail grinders need steady pungency and aroma, whole-pepper buyers need bold, even berries, seasoning makers need a set mesh and microbiological limits, and extractors care most about pungent and aromatic compounds. Name the end use from the start and the right grade follows from it.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about black pepper for processing.",
        faq: [
          {
            question: "What matters most in pepper for retail grinding?",
            answer: "Steady pungency and aroma from lot to lot, along with cleanliness, low moisture and the colour of the ground product. A reference sample helps compare each new lot.",
          },
          {
            question: "What do buyers look for in whole pepper for table grinders?",
            answer: "Bold, even, dark berries with few light berries, stems or broken pieces. A uniform grade also grinds more evenly in consumer mills.",
          },
          {
            question: "Why do some seasoning makers ask for treated pepper?",
            answer: "To meet the microbiological limits their process needs. The requirement and method should be agreed with the supplier in advance.",
          },
          {
            question: "Can smaller pepper grades be used for oleoresin?",
            answer: "Yes, smaller or lighter grades can suit extraction if their yield is acceptable, since these buyers care most about pungent and aromatic compounds.",
          },
          {
            question: "Does berry appearance matter once pepper is ground?",
            answer: "Less so. Cleanliness, low moisture and the colour of the ground product matter more.",
          },
        ],
      },
    ],
  ],
  "cumin-seeds": [
    // Cumin Seeds Export Guide: Purity, Colour and Aroma
    [
      {
        heading: "Purity is the headline",
        text: "Cumin is commonly traded on purity — the share of the lot that is clean cumin seed, with the rest being dust, stems, broken seed, other seeds and similar material. Higher purity means less waste for the buyer. Agree the purity level you need and how it will be measured, and check it against the approved sample on arrival. Purity depends largely on cleaning; our article on [machine cleaning and Sortex for cumin](/blog/machine-cleaning-and-sortex-how-cumin-is-prepared-for-export) describes the steps.",
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
        text: "Cumin fields can carry weed seeds that look similar at a glance, so examine a sample closely. Agree maximum limits for foreign matter and admixture on the specification sheet, along with moisture; our illustrative case study on [cleaning standards for whole seed spices](/case-studies/cleaning-standards-for-whole-seed-spices) shows how such limits fit into a brief. Check the sample for:",
        list: {
          items: [
            "Stones and soil",
            "Straw",
            "Insect damage",
            "Other seeds mixed in",
          ],
        },
      },
      {
        heading: "Testing for your market",
        text: "Destination markets differ in what they test cumin for, which may include pesticide residues, microbiology and other parameters. Find out what your market requires and agree the tests with your supplier before the first order. Freshland Exports supplies cumin seeds with a minimum order quantity of 100 kg to 500 kg. When you [request a quotation](/contact), share the purity level, colour, limits for moisture, foreign matter and admixture, the tests your market requires, packing and destination. For each lot, request:",
        list: {
          items: [
            "A sample",
            "The specification sheet",
            "The analysis",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Cumin is bought on purity, but colour, seed shape and aroma show how well it was dried and stored. Set purity, foreign matter, admixture and moisture limits in writing, agree the tests your market needs, and check each arrival against the approved sample.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about cumin seed quality.",
        faq: [
          {
            question: "What does purity mean for cumin seeds?",
            answer: "It is the share of the lot that is clean cumin seed, with the rest being dust, stems, broken seed, other seeds and similar material.",
          },
          {
            question: "What colour should good cumin seeds be?",
            answer: "An even greyish-brown to greenish-brown. Very dark, blackened or dull seeds may point to poor drying, age or damp storage.",
          },
          {
            question: "How can I check the aroma of cumin seeds?",
            answer: "Rub a few seeds between your palms and smell them. Fresh cumin has a strong, warm, earthy aroma with a slightly bitter edge.",
          },
          {
            question: "Why look closely for other seeds in cumin?",
            answer: "Cumin fields can carry weed seeds that look similar at a glance, so buyers set a maximum limit for admixture.",
          },
          {
            question: "What tests does cumin need for export?",
            answer: "It depends on the destination market and may include pesticide residues, microbiology and other parameters. Agree the tests with your supplier before the first order.",
          },
        ],
      },
    ],
    // Machine Cleaning and Sortex: How Cumin Is Prepared for Export
    [
      {
        heading: "From field to cleaning line",
        text: "Harvested cumin arrives with dust, stalks, small stones and broken material from threshing. The aim of cleaning is a uniform lot that matches the agreed purity and looks consistent from bag to bag; our [cumin seeds export guide](/blog/cumin-seeds-export-guide-purity-colour-and-aroma) explains how purity, colour and aroma are judged. Before it can be offered for export, the seed goes through a series of steps, each removing a different kind of impurity:",
        list: {
          ordered: true,
          items: [
            "Sieving and air cleaning to remove stalks, clods, dust, broken seed, husk and chaff",
            "Destoning and gravity separation to remove stones and soil",
            "Colour sorting to reject discoloured seeds and foreign particles",
            "Grading to the agreed purity and packing",
          ],
        },
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
        text: "Optical colour sorters, often called Sortex in the trade, examine seeds as they fall and reject discoloured seeds and foreign particles with a puff of air. Sortex is a brand name of colour sorter, used loosely for colour sorting in general. Sorting improves the visual uniformity of the lot. Buyers sometimes specify whether they want sorted material, so make your preference clear when you enquire.",
      },
      {
        heading: "Grading and packing",
        text: "After cleaning, the seed is graded to the agreed purity and packed in clean bags suited to the route. Ask your supplier which steps are applied to your lot. Our illustrative case study on [cleaning standards for whole seed spices](/case-studies/cleaning-standards-for-whole-seed-spices) shows how these steps tie into a buyer's specification, and a similar process is described in our article on [cleaning and grading mustard seeds for export](/blog/cleaning-and-grading-mustard-seeds-for-export). So the processing matches what you expect to receive, agree on the specification sheet:",
        list: {
          items: [
            "Final purity",
            "Moisture",
            "Foreign matter limits",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Export cumin is cleaned in stages: sieves and air remove oversized and light material, destoners and gravity separators take out heavy matter, and colour sorters reject discoloured seed. Ask which steps your lot receives, agree the final limits, and [request a quotation](/contact) stating whether you want sorted material.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about cleaning and sorting cumin.",
        faq: [
          {
            question: "Why can't sieves alone remove stones from cumin?",
            answer: "Stones and soil particles can be close in size to cumin seed, so destoners and gravity separators use differences in weight and density instead.",
          },
          {
            question: "What does air aspiration remove from cumin?",
            answer: "Light material such as husk and chaff.",
          },
          {
            question: "What is Sortex?",
            answer: "Sortex is a brand name of optical colour sorter, used loosely in the trade for colour sorting. These machines reject discoloured seeds and foreign particles with a puff of air.",
          },
          {
            question: "Do I need colour-sorted cumin?",
            answer: "Sorting improves visual uniformity. Buyers sometimes specify whether they want sorted material, so state your preference when you enquire.",
          },
          {
            question: "Why does destoning matter to grinders?",
            answer: "Removing stones matters for safety and protects buyers' grinding equipment.",
          },
        ],
      },
    ],
    // Cumin in Spice Blends, Ground Cumin and Food Processing
    [
      {
        heading: "Curry powders and masalas",
        text: "Cumin is a backbone of curry powders, [garam masala](/products/garam-masala) and many regional spice mixes, where its warm, earthy flavour blends with coriander, chilli and turmeric. Blenders need steady aroma from lot to lot so that the finished mix tastes the same. A reference sample helps confirm each new shipment before it goes into production; our illustrative case study on [supplying a curry powder blender](/case-studies/supplying-a-curry-powder-blender) shows this in practice.",
      },
      {
        heading: "Ground cumin",
        text: "Ground cumin sold to retail and food service must be clean before milling, since impurities cannot be removed afterwards. Agree the mesh and any microbiological requirements, and ask whether the seed has been [machine cleaned and colour sorted](/blog/machine-cleaning-and-sortex-how-cumin-is-prepared-for-export). Grinders typically ask for:",
        list: {
          items: [
            "High-purity seed",
            "Low moisture",
            "A particle size suited to their packs",
          ],
        },
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
        text: "Whether you sell whole seed, grind it, or blend it into seasonings, share the end use when you [request a quotation](/contact). That helps your supplier propose the right purity, cleaning level and packing. Requirements vary by buyer and market, so confirm the details on the specification sheet for every order.",
      },
      {
        heading: "Conclusion",
        text: "Blenders need steady aroma, grinders need clean, high-purity seed before milling, seasoning makers need consistent strength, and whole-seed retail needs bold, clean seed with a strong aroma. Stating the end use up front lets your supplier match purity, cleaning level and packing to it.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about cumin for blends and processing.",
        faq: [
          {
            question: "Why must cumin be clean before grinding?",
            answer: "Impurities cannot be removed once the seed is milled, so grinders ask for high-purity seed.",
          },
          {
            question: "What do curry powder blenders need from cumin?",
            answer: "Steady aroma from lot to lot so the finished mix tastes the same. A reference sample helps confirm each new shipment.",
          },
          {
            question: "Does roasting change how cumin is specified?",
            answer: "It can. Some processors toast or roast cumin to deepen its flavour, which may change how they specify the raw seed.",
          },
          {
            question: "What do whole-seed retail buyers look for in cumin?",
            answer: "Bold, clean, evenly coloured seed with a strong aroma, since customers see and smell exactly what they buy.",
          },
          {
            question: "Does seed appearance matter for cumin used in seasonings?",
            answer: "Less than consistent strength and a clean flavour, since cumin is often one ingredient among many.",
          },
        ],
      },
    ],
  ],
  "coriander-seeds": [
    // Coriander Seeds: Colour, Split Content and Aroma
    [
      {
        heading: "Greenish or golden",
        text: "Coriander seeds range in colour from greenish to golden to light brown, and buyers often have a firm preference. A greenish tint is often valued for whole-spice retail because it looks fresh, while golden seed is widely used for grinding. Discoloured, dark or blackish seeds can point to weather damage at harvest or poor storage. Trade names often signal colour too; see our guide to [Eagle, Scooter and Badami coriander grades](/blog/eagle-scooter-and-badami-coriander-grades-explained).",
      },
      {
        heading: "Whole versus split",
        text: "Coriander is a round fruit made of two halves that separate easily, so some split seed is normal. Split content matters to whole-spice packers, who want round, intact seeds, and to pickle makers, as our article on [coriander seeds in spice mixes, pickling and brewing](/blog/coriander-seeds-in-spice-mixes-pickling-and-brewing) explains; it matters much less to grinders. Agree the maximum split content your product can accept, and check it on the sample you approve.",
      },
      {
        heading: "Aroma when crushed",
        text: "Crush a few seeds and smell them. Fresh coriander has a warm, citrusy, slightly floral aroma. A faint or flat smell suggests old stock, and musty notes point to moisture problems. Aroma strength is especially important to grinders and blenders, since it carries through to the finished product.",
      },
      {
        heading: "Purity and foreign matter",
        text: "Agree purity, foreign matter and moisture limits on the specification sheet. Clean, well-sorted lots save buyers time and losses during their own processing; our illustrative case study on [cleaning standards for whole seed spices](/case-studies/cleaning-standards-for-whole-seed-spices) looks at this from the buyer's side. Look for the following in the sample:",
        list: {
          items: [
            "Stalks",
            "Dust",
            "Stones",
            "Shrivelled seeds",
            "Other seeds",
          ],
        },
      },
      {
        heading: "Samples and testing",
        text: "Request a sample, the specification sheet and the analysis your destination market expects before the first order. Agree packing and labelling at the same time. Because colour and size vary with season, compare each new lot with the sample you originally approved. Freshland Exports supplies coriander seeds with a minimum order quantity of 100 kg to 500 kg. When you [request a quotation](/contact), share the colour you prefer, the maximum split content, purity and moisture limits, packing and destination.",
      },
      {
        heading: "Conclusion",
        text: "Coriander seed is judged on colour, split content, aroma and purity, and how much each matters depends on whether you pack it whole or grind it. Agree limits for each, and compare every new lot with the sample you approved, since colour and size vary with season.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about coriander seed quality.",
        faq: [
          {
            question: "Which coriander seed colour is best?",
            answer: "It depends on the use. A greenish tint is often valued for whole-spice retail because it looks fresh, while golden seed is widely used for grinding.",
          },
          {
            question: "Why is some split coriander seed normal?",
            answer: "Coriander is a round fruit made of two halves that separate easily, so some split seed is expected.",
          },
          {
            question: "Does split content matter for grinding coriander?",
            answer: "Much less than for whole-spice packing, where round, intact seeds are wanted.",
          },
          {
            question: "How should fresh coriander seed smell?",
            answer: "Warm, citrusy and slightly floral when crushed. A faint or flat smell suggests old stock, and musty notes point to moisture problems.",
          },
          {
            question: "What causes dark coriander seeds?",
            answer: "Discoloured, dark or blackish seeds can point to weather damage at harvest or poor storage.",
          },
        ],
      },
    ],
    // Eagle, Scooter and Badami: Coriander Grades Explained
    [
      {
        heading: "Trade names, not standards",
        text: "Eagle, Scooter and Badami are names used in the Indian coriander trade to describe broad types and qualities of seed. They are useful shorthand, but definitions can differ between traders and seasons. Treat them as a starting point, using the checks in our guide to [coriander seed colour, split content and aroma](/blog/coriander-seeds-colour-split-content-and-aroma), and always pin down on the specification sheet:",
        list: {
          items: [
            "Colour",
            "Size",
            "Split content",
            "Purity",
          ],
        },
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
        text: "Badami typically refers to a type with a more golden to brownish colour and a slightly oval seed. It is widely used for grinding, where colour and shape matter less than aroma and cleanliness. Some buyers favour it for the flavour it gives in ground coriander and spice mixes; our guide to [sourcing coriander powder from whole seed to ground spice](/blog/sourcing-coriander-powder-from-whole-seed-to-ground-spice) follows that path.",
      },
      {
        heading: "Choosing a grade",
        text: "Request samples of more than one grade and confirm the details per order. As a guide:",
        list: {
          items: [
            "If you sell whole seed, a bolder, greener grade with low split content may be worth the premium.",
            "If you grind or blend, a more economical grade with good aroma and purity is often the sensible choice.",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Eagle generally signals bold, greener seed for whole-spice retail, Scooter a more mixed seed for grinding and blending, and Badami a golden, oval seed favoured for grinding. Since definitions shift between traders and seasons, compare samples and [request a quotation](/contact) against a written specification.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about coriander grades.",
        faq: [
          {
            question: "Are Eagle, Scooter and Badami official standards?",
            answer: "No. They are trade names whose definitions can differ between traders and seasons, so pin down colour, size, split content and purity on the specification sheet.",
          },
          {
            question: "Which coriander grade suits whole-spice retail?",
            answer: "Eagle is a common choice: bolder, rounder and greener or brighter in colour, with fewer splits and discoloured seeds.",
          },
          {
            question: "What is Scooter coriander used for?",
            answer: "It is often used for grinding and blending, where appearance matters less, offering a practical balance between quality and cost.",
          },
          {
            question: "How does Badami coriander differ from Eagle?",
            answer: "Badami typically has a more golden to brownish colour and a slightly oval seed, and is widely used for grinding rather than whole-spice retail.",
          },
          {
            question: "Is a premium coriander grade worth it for grinding?",
            answer: "Often not. A more economical grade with good aroma and purity is usually the sensible choice for grinding or blending.",
          },
        ],
      },
    ],
    // Coriander Seeds in Spice Mixes, Pickling and Brewing
    [
      {
        heading: "Spice mixes and curry powders",
        text: "Coriander is often a major ingredient in curry powders and garam masala, providing body and a mild, citrusy warmth that balances hotter spices. Blenders need consistent aroma and clean seed, and often specify a particular grind. Ground coriander loses aroma faster than whole seed, so many processors grind close to use; our article on [ground coriander in curry powders, masalas and bakery](/blog/ground-coriander-in-curry-powders-masalas-and-bakery) covers the ground form.",
      },
      {
        heading: "Pickling spice",
        text: "Whole coriander seeds are a familiar part of pickling spice, alongside mustard seed, peppercorns, bay and dill. Here appearance counts, since the seeds are visible in the jar. Our guide to [Eagle, Scooter and Badami coriander grades](/blog/eagle-scooter-and-badami-coriander-grades-explained) explains which grades tend to have fewer splits. Pickle makers typically want:",
        list: {
          items: [
            "Round, intact seeds",
            "Low split content",
            "Minimal foreign matter",
          ],
        },
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
        text: "Our illustrative case study on [whole seeds for tempering and spice mixes](/case-studies/whole-seeds-for-tempering-and-spice-mixes) shows how a whole-seed brief is set out. When you [request a quotation](/contact), tell your supplier how the coriander will be used and where it will be sold, and agree the specification, packing and labelling per order. Focus on what matters for your use:",
        list: {
          items: [
            "Whole-seed users: colour, split content and appearance",
            "Grinders and brewers: aroma, purity and moisture",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Coriander serves blenders, pickle makers, brewers and meat and bakery processors, and each looks for something different: aroma and clean seed for blends, intact seed for pickling, a bright aroma for brewing. Matching the specification to the use avoids paying for qualities you do not need.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about coriander seed uses.",
        faq: [
          {
            question: "Why is coriander used in curry powders?",
            answer: "It provides body and a mild, citrusy warmth that balances hotter spices.",
          },
          {
            question: "Why do processors grind coriander close to use?",
            answer: "Ground coriander loses aroma faster than whole seed.",
          },
          {
            question: "What do pickle makers want from coriander seed?",
            answer: "Round, intact seeds with low split content and minimal foreign matter, since the seeds are visible in the jar.",
          },
          {
            question: "How do brewers use coriander seed?",
            answer: "Some add it to certain beer styles for citrusy, spicy notes, often with orange peel, and crush it shortly before use to keep its aroma fresh.",
          },
          {
            question: "Why do meat and bakery processors toast coriander?",
            answer: "Toasting the seeds brings out a nuttier flavour.",
          },
        ],
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
        text: "Buyers prize a uniform, vivid green. Colour reflects how carefully the pods were picked and dried, and how they have been stored since. Pale, yellowish, brownish or patchy pods often point to over-drying, age or exposure to light; our guide to [protecting cardamom's green colour and fragrance](/blog/protecting-cardamom-s-green-colour-and-fragrance) covers storage. Compare samples side by side in daylight to judge colour fairly.",
      },
      {
        heading: "Plump and well filled",
        text: "Good pods feel plump and firm, not flat or hollow. Split one open: the seeds inside should be dark, sticky and fragrant. Empty, shrivelled or pale-seeded pods carry less flavour. Agree acceptable levels before ordering, as buyers often look at the share of:",
        list: {
          items: [
            "Split pods",
            "Open pods",
            "Immature pods",
          ],
        },
      },
      {
        heading: "Aroma is the real value",
        text: "Cardamom's worth lies in its fragrance. Crush a pod and smell it: you want a strong, sweet, slightly eucalyptus-like aroma. A faint smell suggests old or poorly stored stock. For grinders and extract buyers, aroma strength may matter more than pod size, so specify accordingly; our article on [cardamom in tea, coffee, sweets and bakery](/blog/cardamom-in-tea-coffee-sweets-and-bakery) shows how needs differ by use.",
      },
      {
        heading: "Samples and specifications",
        text: "Request a sample, a specification sheet and the analysis your destination market expects, such as pesticide residues, and check each shipment against the sample you approved. Freshland Exports supplies green cardamom with a minimum order quantity of 100 kg to 500 kg. When you [request a quotation](/contact), share the size band, colour, aroma expectations, limits on splits, packing and destination. Agree in writing:",
        list: {
          items: [
            "Size",
            "Colour",
            "Moisture",
            "Limits on splits and foreign matter",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Green cardamom is graded on pod size, but colour, fullness and above all aroma decide its worth. Agree a size band and limits in writing, judge colour in daylight, crush a pod to check its fragrance, and check each shipment against the approved sample.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about green cardamom grading.",
        faq: [
          {
            question: "How is green cardamom graded by size?",
            answer: "Pods are passed through sieves and graded by size in millimetres. Grade bands and names vary between traders and markets, so agree the band you need.",
          },
          {
            question: "Why do larger cardamom pods cost more?",
            answer: "Partly for their appearance and partly because they tend to be well filled.",
          },
          {
            question: "What does pale or yellowish cardamom indicate?",
            answer: "Pale, yellowish, brownish or patchy pods often point to over-drying, age or exposure to light.",
          },
          {
            question: "How can I tell if cardamom pods are well filled?",
            answer: "Good pods feel plump and firm. Split one open: the seeds inside should be dark, sticky and fragrant.",
          },
          {
            question: "Do grinders need large cardamom pods?",
            answer: "Not necessarily. For grinders and extract buyers, aroma strength may matter more than pod size.",
          },
        ],
      },
    ],
    // Protecting Cardamom's Green Colour and Fragrance
    [
      {
        heading: "Light is the main threat",
        text: "Cardamom's green colour fades with exposure to light, turning pods pale or yellowish over time. Once lost, the colour cannot be recovered, and faded pods sell for less, since colour is a key point in [green cardamom grading](/blog/green-cardamom-grading-pod-size-colour-and-aroma). Use light-proof packaging and keep stock in a dark store. Avoid open display or bags left in bright areas during handling.",
      },
      {
        heading: "Seal in the aroma",
        text: "The fragrance comes from volatile oils that escape slowly from the pods. Airtight packaging, such as lined bags or sealed containers, helps keep the aroma in. Keep pods whole until needed, since seeds and ground cardamom lose their fragrance much faster than intact pods. Cloves face the same issue; see our guide to [storing cloves to keep their aromatic oils](/blog/storing-cloves-to-keep-their-aromatic-oils).",
      },
      {
        heading: "Cool and dry",
        text: "Warmth speeds the loss of both colour and aroma, and moisture invites mould and dulls the pods. Store cardamom in a cool, dry place, away from heat sources and damp walls. Some buyers use cold storage; if so, let sealed packs reach room temperature before opening to avoid condensation on the pods.",
      },
      {
        heading: "Keep it apart",
        text: "Cardamom can pick up strong odours from nearby goods, and its own aroma can taint other products. Handle packs gently, too, as crushed or split pods lose their aroma faster. Store it away from:",
        list: {
          items: [
            "Chemicals",
            "Strongly scented spices",
            "Anything with a strong smell",
          ],
        },
      },
      {
        heading: "Check and rotate",
        text: "Use older stock first. How long cardamom keeps its colour and fragrance depends on the lot, packing and storage conditions, so agree expectations with your supplier for your route and market. Inspect stock regularly for:",
        list: {
          items: [
            "Fading",
            "Musty smells",
            "Insect activity",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Light, air, warmth, moisture and strong odours all take colour or fragrance from cardamom, and faded colour cannot be recovered. Keep pods whole, sealed, dark, cool and apart from other goods, inspect stock regularly for fading, musty smells or insect activity, use older stock first, and agree storage expectations for your route when you [request a quotation](/contact).",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about storing green cardamom.",
        faq: [
          {
            question: "Can faded cardamom regain its green colour?",
            answer: "No. Once lost, the colour cannot be recovered, and faded pods sell for less.",
          },
          {
            question: "Why keep cardamom pods whole until use?",
            answer: "Seeds and ground cardamom lose their fragrance much faster than intact pods.",
          },
          {
            question: "How do I avoid condensation on cardamom after cold storage?",
            answer: "Let sealed packs reach room temperature before opening them.",
          },
          {
            question: "Can cardamom pick up other smells?",
            answer: "Yes. It can pick up strong odours from nearby goods, and its own aroma can taint other products, so store it apart.",
          },
          {
            question: "What packaging protects cardamom best?",
            answer: "Light-proof packaging protects the colour, and airtight packaging, such as lined bags or sealed containers, helps keep the aroma in.",
          },
        ],
      },
    ],
    // Cardamom in Tea, Coffee, Sweets and Bakery
    [
      {
        heading: "Masala chai",
        text: "Cardamom is the defining note in many masala chai blends, alongside ginger, cinnamon, cloves and black pepper. Tea blenders may use whole pods, cracked pods or ground seed depending on the format. Consistent aroma matters most, since it carries through to the brewed cup. Agree the form and particle size with your supplier; our illustrative case study on [spiced tea masala ingredients](/case-studies/spiced-tea-masala-ingredients) shows a typical brief.",
      },
      {
        heading: "Arabic coffee",
        text: "In Arabic coffee traditions, cardamom is brewed with lightly roasted coffee, often in generous amounts. Buyers for this market tend to be particular about colour, size and aroma, and many prefer bold, bright green pods. Understanding your customers' expectations helps you choose the right grade, and our guide to [green cardamom grading by pod size, colour and aroma](/blog/green-cardamom-grading-pod-size-colour-and-aroma) explains what to check.",
      },
      {
        heading: "Sweets and desserts",
        text: "Cardamom flavours many South Asian and Middle Eastern sweets, from milk puddings and kheer to halwa and syrups. It also appears in ice creams and confectionery. Dessert makers often use ground seed and want a clean, intense aroma. Grinding close to use helps keep that fragrance fresh, and our guide to [protecting cardamom's colour and fragrance](/blog/protecting-cardamom-s-green-colour-and-fragrance) covers storage before then.",
      },
      {
        heading: "Bakery",
        text: "Cardamom is a familiar flavour in sweet breads, buns, pastries and biscuits in several baking traditions. Bakers usually work with ground cardamom or decorticated seed and need a consistent strength so that recipes taste the same each time. Trial bakes help set the right inclusion level.",
      },
      {
        heading: "Choosing the right form",
        text: "Tell your supplier how the cardamom will be used and where it will be sold. Labelling rules vary by market, so check local requirements, and agree specification, packing and labelling per order when you [request a quotation](/contact). As a guide:",
        list: {
          items: [
            "Whole pods: retail, coffee and premium tea",
            "Seeds and powder: bakery, desserts and blends",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Aroma is what tea blenders, coffee buyers, dessert makers and bakers are paying for in cardamom, but each needs it in a different form, from bold green pods to ground seed. Settle the form and the use first, then choose the grade to match.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about cardamom in food and drink.",
        faq: [
          {
            question: "What form of cardamom do tea blenders use?",
            answer: "Whole pods, cracked pods or ground seed, depending on the format of the blend.",
          },
          {
            question: "What cardamom do Arabic coffee buyers prefer?",
            answer: "Many prefer bold, bright green pods, and buyers for this market tend to be particular about colour, size and aroma.",
          },
          {
            question: "What form of cardamom do bakers use?",
            answer: "Usually ground cardamom or decorticated seed, with a consistent strength so recipes taste the same each time.",
          },
          {
            question: "How do dessert makers keep cardamom's aroma fresh?",
            answer: "They often use ground seed and grind it close to use.",
          },
          {
            question: "How is the cardamom level set in baked goods?",
            answer: "Trial bakes help set the right inclusion level.",
          },
        ],
      },
    ],
  ],
};
