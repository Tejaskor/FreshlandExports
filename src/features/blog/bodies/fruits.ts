import type { ArticleBody } from "@/features/products/blog";

/**
 * Full text for the fruits articles in features/products/blog.ts, by product
 * slug, in the same order as that product's articles.
 */
export const fruitsBodies: Record<string, readonly [ArticleBody, ArticleBody, ArticleBody]> = {
  mango: [
    // Importing Indian Mangoes: Varieties, Ripeness and Season
    [
      {
        heading: "Start with the variety",
        text: "Indian mangoes are not one product. Each well-known variety suits a different customer and comes into season at a different time, so decide which one your market expects before you ask for prices, and confirm availability of that variety at the time of your enquiry.",
        list: {
          items: [
            "Alphonso: known for its rich aroma and smooth, fibre-free flesh.",
            "Kesar: valued for its sweetness and saffron-coloured pulp.",
            "Banganapalli: larger, with a milder flavour.",
          ],
        },
      },
      {
        heading: "Working with a short season",
        text: "The Indian mango season is concentrated into a few months, and the window for any single variety is shorter still. Weather can move the start and end of the season from year to year. Share your intended shipment dates early, and keep some flexibility in your plan, so your supplier can match orders to the fruit that is actually ready. Our guide to [planning fresh produce imports around harvests](/blog/seasonality-planning-fresh-produce-imports-around-harvests) explains how to build that flexibility in.",
      },
      {
        heading: "Ripeness at harvest",
        text: "Mangoes for export are picked mature but still firm, so they can survive handling and ripen on arrival. For most cultivars, two signs of maturity are that the fruit's shoulders have risen above the stem end and that there is a slight colour break on the first fruit of a crop (USDA Agriculture Handbook 66, 2016). Fruit picked too early may never develop full flavour; fruit picked too ripe softens and bruises in transit. Agree the stage you want for your transit time on the specification sheet.",
      },
      {
        heading: "Check a sample",
        text: "Before a full order, look at a sample for shape typical of the variety, smooth skin without sap burn or black spots, and a firm feel with no soft patches. Cut a fruit once it has [ripened under the right conditions](/blog/ripening-and-storing-mangoes-after-arrival) to check flesh colour, texture and aroma. A sample tells you far more about a lot than a description can.",
      },
      {
        heading: "Plan the logistics together",
        text: "Mangoes are perishable, so the route matters as much as the fruit. Discuss whether the order will travel by air or by sea, how it will be kept cool, and what your destination requires before the fruit can enter; some markets require a specific [treatment or inspection](/blog/mango-export-quality-treatment-grading-and-inspection). Agree packing, labelling and documents in writing before the harvest begins.",
      },
      {
        heading: "Ordering",
        text: "Freshland Exports supplies fresh mangoes with a minimum order quantity of 500 kg. When you [request a quotation](/contact), share the variety, size or count, ripeness stage, packing, destination and shipment window together, so availability can be confirmed for the season.",
      },
      {
        heading: "Conclusion",
        text: "Buying Indian mangoes well starts with the right variety for your market, a realistic plan around a short season and fruit picked at the right maturity for its journey. Agree variety, stage, packing and route in writing, and check a ripened sample before committing to a full order. Our [illustrative case study on planning seasonal Indian fruit purchases](/case-studies/planning-seasonal-indian-fruit-purchases) shows how buyers schedule around the harvest.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions importers ask about Indian mangoes.",
        faq: [
          {
            question: "Which Indian mango variety should I import?",
            answer: "The one your customers expect. Alphonso is known for its aroma and fibre-free flesh, Kesar for its sweetness and saffron-coloured pulp, and Banganapalli for its larger size and milder flavour.",
          },
          {
            question: "How long is the Indian mango season?",
            answer: "It is concentrated into a few months, and each variety's window is shorter still. Weather can shift the timing from year to year, so share your shipment dates early.",
          },
          {
            question: "How is mango maturity judged before picking?",
            answer: "For most cultivars, the fruit's shoulders rising above the stem end and a slight colour break on the first fruit of a crop are general signs of maturity.",
          },
          {
            question: "Why are export mangoes picked firm?",
            answer: "Firm, mature fruit survives handling and ripens on arrival. Fruit picked too ripe softens and bruises in transit, while fruit picked too early may never develop full flavour.",
          },
          {
            question: "What should I check in a mango sample?",
            answer: "Shape typical of the variety, smooth skin without sap burn or black spots, and firm fruit with no soft patches. Ripen a fruit and cut it to judge flesh colour, texture and aroma.",
          },
        ],
      },
    ],
    // Mango Export Quality: Treatment, Grading and Inspection
    [
      {
        heading: "Why treatment comes up",
        text: "Many importing countries set plant-health rules for fresh mangoes, mainly because mangoes can carry fruit flies and other pests. Some require the fruit to be treated or inspected before it can be shipped. The rules differ from one destination to another and can change, so check the current requirements for your market first, then agree with your supplier which treatment or inspection steps apply to your order.",
      },
      {
        heading: "The United States: irradiation",
        text: "For the United States, Indian mangoes must be treated by irradiation at a minimum absorbed dose of 400 gray in a facility certified by the USDA's Animal and Plant Health Inspection Service (APHIS), with the treatment monitored by APHIS inspectors, under the rule that opened the US market to Indian mangoes in 2007 (7 CFR 305.31). Build the treatment and inspection steps into your shipping plan and costs.",
      },
      {
        heading: "Other markets and documents",
        text: "Fresh mangoes are a plant product, so destination countries generally require a phytosanitary certificate issued in India after inspection; our guide to [phytosanitary certificates and export documents](/blog/phytosanitary-certificates-and-export-documents-for-fresh-produce) explains what it covers. Mango is also among the fruits covered by APEDA's HortiNet traceability system for horticultural exports. Confirm each destination's current conditions with your supplier before the season starts.",
      },
      {
        heading: "Grading by size",
        text: "Mangoes are sorted by weight or count so that each box holds fruit of a similar size. Retailers often want an even count per box for display, while processors may accept a wider range. State the size or count you need on your enquiry and confirm it per order, as the spread of sizes available varies with the season.",
      },
      {
        heading: "Colour and skin finish",
        text: "Skin colour depends on the variety and on maturity, and a mature mango is not always fully coloured. Buyers usually look for clean skin with no sap burn, scars, black spots or bruising. Agree what level of minor skin marking is acceptable, because a blemish that matters on a supermarket shelf may not matter for pulping; our [illustrative case study on fruit for pulp, juice and nectar processing](/case-studies/fruit-for-pulp-juice-and-nectar-processing) shows how processors specify differently.",
      },
      {
        heading: "Inspection before packing",
        text: "Fruit is checked as it is sorted and packed, and anything soft, split, damaged or showing signs of rot is taken out. Ask what is checked at this stage and how. Where your destination requires an official inspection, build the time it takes into your shipping plan.",
      },
      {
        heading: "Putting it in writing",
        text: "A clear written specification protects both sides and makes it straightforward to resolve any question when the fruit arrives. For each order, write down the following, and choose the [variety and harvest stage](/blog/importing-indian-mangoes-varieties-ripeness-and-season) to suit your route:",
        list: {
          items: [
            "Variety",
            "Size or count per box",
            "Maturity stage",
            "Skin finish and acceptable marks",
            "Treatment and inspection required by the destination",
            "Packing and labelling",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Mango export quality depends on clear grading, clean skin and careful inspection, but the destination's plant-health rules decide what treatment the fruit needs before it can travel. For the United States that means irradiation under APHIS supervision. Confirm the requirements for your market early and write every quality and treatment point into the specification.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions importers ask about mango export quality.",
        faq: [
          {
            question: "Do Indian mangoes need treatment for the United States?",
            answer: "Yes. They must be irradiated at a minimum absorbed dose of 400 gray in an APHIS-certified facility, under APHIS monitoring, as set out in 7 CFR 305.31.",
          },
          {
            question: "Why do importing countries regulate mangoes?",
            answer: "Mangoes can carry fruit flies and other pests, so many countries set plant-health rules that may require treatment, inspection or a phytosanitary certificate.",
          },
          {
            question: "Is a fully coloured mango always mature?",
            answer: "No. Skin colour depends on variety as well as maturity, and a mature mango is not always fully coloured.",
          },
          {
            question: "How are mangoes graded?",
            answer: "By weight or count, so that each box holds fruit of a similar size. Retail buyers usually want an even count per box.",
          },
          {
            question: "What defects are removed at packing?",
            answer: "Fruit that is soft, split, damaged or showing signs of rot is taken out as the fruit is sorted and packed.",
          },
        ],
      },
    ],
    // Ripening and Storing Mangoes After Arrival
    [
      {
        heading: "Unload and check promptly",
        text: "Early checks let you sort the fruit by ripeness and decide which lots to sell first.",
        list: {
          ordered: true,
          items: [
            "Move mangoes out of the container or air freight unit quickly and into suitable storage.",
            "Open a few boxes from different parts of the load.",
            "Check firmness, skin condition and any sign of soft spots or mould.",
          ],
        },
      },
      {
        heading: "Reference storage conditions",
        text: "General reference conditions for mangoes are listed below (USDA Agriculture Handbook 66, 2016). Diseases are the main factor limiting storage life, and the right conditions depend on variety and maturity, so agree them per shipment.",
        list: {
          items: [
            "Mature green fruit: 10 to 13 °C with 85 to 90 per cent relative humidity, giving a shelf life of 14 to 28 days depending on variety.",
            "Ripe fruit: 7 to 8 °C.",
            "Ripening: 20 to 23 °C for best appearance, flavour and decay control.",
          ],
        },
      },
      {
        heading: "Ripening evenly",
        text: "Mangoes ripen best in steady, moderate conditions with good air movement around the boxes, and ripening rooms are often used to bring a whole lot to the same stage before sale. Ethylene brings about faster and more even softening, but treating immature fruit softens it without good flavour. Agree an approach with your ripening partner; our [illustrative case study on managing ripeness for climacteric fruit in transit](/case-studies/managing-ripeness-for-climacteric-fruit-in-transit) covers the planning involved.",
      },
      {
        heading: "Signs of ripeness",
        text: "A ripe mango gives slightly under gentle pressure and has a sweet aroma near the stem. Skin colour alone can mislead, as some varieties stay partly green when ripe. Train staff to judge by feel and smell, and handle fruit gently, since ripe mangoes bruise easily.",
      },
      {
        heading: "Avoid the cold trap",
        text: "Most mango cultivars show chilling injury below 10 °C, especially fruit that has only just reached maturity; symptoms include greyish, scald-like skin discoloration, pitting, uneven ripening and poor flavour and colour. Tolerance to chilling increases as the fruit ripens. Keep mangoes away from strong-smelling goods and out of direct sun, and plan any [mixed load](/blog/building-a-mixed-agricultural-order-from-india) with care.",
      },
      {
        heading: "Selling at the right moment",
        text: "Mangoes have a short window between ripe and overripe. Plan deliveries to stores so fruit reaches the shelf at or near eating ripeness, and rotate stock carefully. Fruit that softens too far can still suit juicing or pulping, which helps reduce waste; [how mangoes are graded for export](/blog/mango-export-quality-treatment-grading-and-inspection) affects which lots go where.",
      },
      {
        heading: "Conclusion",
        text: "Mangoes reach customers in good condition when they are unloaded and checked promptly, held at the right cool temperature for their stage and ripened evenly at moderate warmth. Avoid chilling unripe fruit below about 10 °C, judge ripeness by feel and aroma rather than colour, and plan sales around the short ripe window.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about ripening and storing mangoes.",
        faq: [
          {
            question: "At what temperature should unripe mangoes be stored?",
            answer: "Mature green mangoes are generally stored at around 10 to 13 °C with 85 to 90 per cent relative humidity. Storage life, typically 14 to 28 days, varies by variety, maturity and handling.",
          },
          {
            question: "What temperature is best for ripening mangoes?",
            answer: "Around 20 to 23 °C gives the best appearance, flavour and decay control.",
          },
          {
            question: "Can mangoes be refrigerated?",
            answer: "Unripe mangoes are damaged by chilling; most cultivars show injury below 10 °C. Ripe fruit tolerates cooler storage, generally around 7 to 8 °C.",
          },
          {
            question: "How can I tell when a mango is ripe?",
            answer: "It gives slightly under gentle pressure and smells sweet near the stem. Skin colour alone can mislead, as some varieties stay partly green when ripe.",
          },
          {
            question: "What can be done with overripe mangoes?",
            answer: "Fruit that softens too far for retail can often still be used for juicing or pulping.",
          },
        ],
      },
    ],
  ],
  banana: [
    // Banana Export Guide: Finger Length, Grade and Maturity
    [
      {
        heading: "Hands, clusters and fingers",
        text: "Bananas are bought and packed by the hand or cluster, and each banana is a finger. Buyers usually specify how fingers should be presented, whole hands or smaller clusters, and how many clusters go into a box. Agree this format at the start, as it shapes how the fruit is cut, washed and packed.",
      },
      {
        heading: "Finger length and curvature",
        text: "Finger length and thickness are the main size measures, and retail buyers often want them consistent across a box. Curvature varies naturally by variety. State the length range and appearance you need on the specification sheet, and confirm it against a sample, because what is available varies with variety and season.",
      },
      {
        heading: "Maturity at harvest",
        text: "Bananas are harvested mature but green and ripened under controlled conditions at destination; fruit ripened on the plant often splits and has poor texture (USDA Agriculture Handbook 66, 2016). Maturity is judged by the fullness of the fingers and the age of the bunch, and the right stage depends on the transit time. Picked too full, bananas may ripen on the way; picked too lean, they may lack flavour. Our guide to [green shipping and controlled ripening](/blog/green-shipping-and-controlled-ripening-for-bananas) explains what happens next.",
      },
      {
        heading: "Peel condition",
        text: "Look for clean, even green peel without scars, bruises, latex stains or crown rot. Small marks may be acceptable for some markets and not for others. The crown, where fingers join, should be cleanly cut and dry, as this is where rot often begins.",
      },
      {
        heading: "Documents",
        text: "Bananas are one of the few fresh fruits that the European Union exempts from its phytosanitary certificate requirement (Regulation (EU) 2019/2072, Annex XI), but other destinations set their own rules. Our guide to [export documents for fresh produce](/blog/phytosanitary-certificates-and-export-documents-for-fresh-produce) covers the commercial and transport documents every shipment needs. Confirm your market's requirements before the first order.",
      },
      {
        heading: "What to send with your enquiry",
        text: "Freshland Exports supplies bananas with a minimum order quantity of 500 kg. When you [request a quotation](/contact), include the following, so your supplier can confirm what can be supplied and keep shipments consistent:",
        list: {
          items: [
            "Variety, such as [Cavendish, Robusta or red bananas]({B3})",
            "Finger length and cluster format",
            "Box weight",
            "Maturity stage",
            "Labelling needs",
            "Your expected shipment schedule",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "A good banana order is defined by finger length, cluster format, harvest maturity and clean green peel with a sound crown. Because bananas are ripened at destination, agree the maturity stage against your transit time, and put every specification point in writing before packing begins.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions importers ask about export bananas.",
        faq: [
          {
            question: "Why are export bananas harvested green?",
            answer: "Bananas are harvested mature but green and ripened under controlled conditions at destination; fruit ripened on the plant often splits and has poor texture.",
          },
          {
            question: "How is banana maturity judged?",
            answer: "By the fullness of the fingers and the age of the bunch, matched to how long the fruit will spend in transit.",
          },
          {
            question: "Where does crown rot start?",
            answer: "At the crown, where the fingers join, which is why the crown should be cleanly cut and dry.",
          },
          {
            question: "Do bananas need a phytosanitary certificate for the EU?",
            answer: "No. Bananas are among the few fresh fruits exempt from the EU's phytosanitary certificate requirement, but other destinations set their own rules.",
          },
          {
            question: "What should a banana specification include?",
            answer: "Variety, finger length, cluster format, box weight, maturity stage, labelling and the shipment schedule.",
          },
        ],
      },
    ],
    // Green Shipping and Controlled Ripening for Bananas
    [
      {
        heading: "Why bananas travel green",
        text: "Green bananas are firm, less easily bruised and ripen slowly, which makes them far better suited to long journeys than yellow fruit. Shipping green also lets the importer decide when ripening begins, so fruit can be timed to reach stores at the stage customers want.",
      },
      {
        heading: "Steady cool conditions in transit",
        text: "Green bananas are generally held at 13 to 14 °C with 90 to 95 per cent relative humidity (USDA Agriculture Handbook 66, 2016). Fruit that gets too warm may start ripening early. Agree the transit settings with your supplier and shipping line for each order, and keep good air circulation through the load.",
      },
      {
        heading: "Chilling injury",
        text: "Chilling injury is an important disorder of bananas. It results from exposure to temperatures below about 13 °C for a few hours to a few days, depending on cultivar, maturity and the length of exposure, and green fruit is slightly more sensitive than ripe fruit. Chilled fruit develops dull peel and ripens poorly, so avoid sharing a container with produce held near freezing.",
      },
      {
        heading: "Ethylene and premature ripening",
        text: "Bananas are sensitive to ethylene at levels as low as 0.3 to 0.5 parts per million in normal air. Keep green fruit away from ripening fruit and other ethylene sources in transit and storage, or it may start ripening before you are ready; our guide to [building a mixed agricultural order](/blog/building-a-mixed-agricultural-order-from-india) explains which products can travel together.",
      },
      {
        heading: "Controlled ripening at destination",
        text: "On arrival, bananas are usually moved into ripening rooms where conditions are managed to bring the whole load through ripening together. Ripening rates vary between lots with cultivar, growing conditions, transit temperature and maturity, and less full fruit takes longer to ripen. Work the programme out with your ripening partner rather than relying on a single fixed recipe; our [illustrative case study on managing ripeness for climacteric fruit in transit](/case-studies/managing-ripeness-for-climacteric-fruit-in-transit) shows the planning involved.",
      },
      {
        heading: "Handling the ripening fruit",
        text: "As bananas turn yellow they become softer and mark easily. Move boxes gently, avoid stacking too high, and keep the fruit away from heat and direct sun. Uneven ripening in a box is often a sign of mixed maturity or temperature swings, so note it and raise it with your supplier; [harvest maturity](/blog/banana-export-guide-finger-length-grade-and-maturity) is the first thing to check.",
      },
      {
        heading: "Conclusion",
        text: "Bananas travel green so that ripening can be controlled at destination. Keeping them at a steady 13 to 14 °C, away from chilling and from ethylene, protects that control, and a well-run ripening room then brings each lot to the stage customers want.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about shipping and ripening bananas.",
        faq: [
          {
            question: "What temperature should green bananas be shipped at?",
            answer: "Green bananas are generally held at 13 to 14 °C with 90 to 95 per cent relative humidity.",
          },
          {
            question: "What happens if bananas get too cold?",
            answer: "Below about 13 °C they can suffer chilling injury, which dulls the peel and spoils ripening. Green fruit is slightly more sensitive than ripe fruit.",
          },
          {
            question: "Why must green bananas be kept away from other fruit?",
            answer: "Bananas respond to ethylene at levels as low as 0.3 to 0.5 parts per million, and ethylene from ripening fruit can start them ripening early.",
          },
          {
            question: "Is there one standard ripening programme?",
            answer: "No. Ripening rates vary with cultivar, growing conditions, transit temperature and maturity, so programmes are worked out per lot with your ripening partner.",
          },
          {
            question: "What causes uneven ripening within a box?",
            answer: "It is often a sign of mixed maturity at harvest or temperature swings in transit.",
          },
        ],
      },
    ],
    // Cavendish, Robusta and Red Bananas: Choosing for Your Market
    [
      {
        heading: "Cavendish types",
        text: "Cavendish bananas are the familiar long, curved yellow banana found in most supermarkets. They are popular for retail because they pack well, ripen predictably and look uniform on the shelf. Many buyers new to Indian bananas start here because customers already know the fruit; our [banana export guide](/blog/banana-export-guide-finger-length-grade-and-maturity) covers how they are graded.",
      },
      {
        heading: "Robusta",
        text: "Robusta is a widely grown Indian banana in the Cavendish group, valued for its sweetness and good size. It is used for fresh retail and also suits processing. Ask how it compares with the type your market already buys in finger size and ripening behaviour, and check a sample before committing.",
      },
      {
        heading: "Red bananas",
        text: "Red bananas have reddish-purple peel and creamy flesh with a distinctive sweet flavour. They are a speciality item, often sold to ethnic and premium grocers. Volumes tend to be smaller and handling needs extra care, so plan orders with your supplier and confirm availability for your dates.",
      },
      {
        heading: "Retail or processing",
        text: "Tell your supplier what the bananas will be used for, as this changes how they are selected and packed. Our [illustrative case study on a fresh fruit programme for supermarket importers](/case-studies/fresh-fruit-programme-for-supermarket-importers) and our [illustrative case study on tropical fruit for smoothie and dessert producers](/case-studies/tropical-fruit-for-smoothie-and-dessert-producers) show how the two channels specify differently.",
        list: {
          items: [
            "Retail: appearance, finger size and ripening consistency matter most.",
            "Processing into chips, purée or dried products: flesh quality and maturity may matter more than peel finish.",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Cavendish bananas suit mainstream retail, Robusta adds an Indian Cavendish-group option with good size and sweetness, and red bananas serve speciality grocers. Choose by what your customers know and how the fruit will be used, and confirm availability and handling needs before ordering.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about banana types.",
        faq: [
          {
            question: "Is Robusta a Cavendish banana?",
            answer: "Yes. Robusta is a widely grown Indian banana in the Cavendish group, valued for its sweetness and good size.",
          },
          {
            question: "Why do supermarkets favour Cavendish bananas?",
            answer: "They pack well, ripen predictably and look uniform on the shelf, and customers already know them.",
          },
          {
            question: "Who buys red bananas?",
            answer: "They are a speciality item, often sold to ethnic and premium grocers, usually in smaller volumes.",
          },
          {
            question: "Do processors need the same bananas as retailers?",
            answer: "Not always. For chips, purée or dried products, flesh quality and maturity may matter more than peel finish.",
          },
          {
            question: "Should I sample a new banana type before ordering?",
            answer: "Yes. Compare it with the type your market already buys for finger size and ripening behaviour before committing.",
          },
        ],
      },
    ],
  ],
  grapes: [
    // Table Grapes from India: Berry Size, Sugar and Colour
    [
      {
        heading: "Berry size",
        text: "Berry diameter is one of the first things grape buyers specify, as larger, even berries usually suit premium retail while smaller berries may suit other channels. Bunches should have berries of a similar size throughout. State the size range you need and confirm it per order, since berry size varies with variety and season.",
      },
      {
        heading: "Sweetness and balance",
        text: "Grapes do not continue to sweeten after picking, so they must be harvested when they have reached the right sugar level for the variety; sugar content, measured as soluble solids, is used as a harvest index for grapes (USDA Agriculture Handbook 66, 2016). Many buyers also look at the balance between sweetness and acidity, which shapes flavour. Agree how sweetness will be checked and recorded on the specification sheet before harvest.",
      },
      {
        heading: "Firmness and attachment",
        text: "Good table grapes are firm and crisp, and stay attached to the stem when the bunch is handled. Soft berries, loose berries or splits shorten shelf life and look poor in a punnet. When you check a sample, shake a bunch gently and press a few berries to judge both.",
      },
      {
        heading: "Even colour across the bunch",
        text: "Green grapes should be an even green to yellow-green; black and red grapes should be coloured evenly from shoulder to tip. Patchy colour can point to uneven ripening. Agree the colour you expect and check it against a sample, remembering that colour can vary with weather during the season; our guide to [seedless green, black and red grapes](/blog/seedless-green-black-and-red-grapes-what-buyers-prefer) compares what buyers look for in each.",
      },
      {
        heading: "Stems and bloom",
        text: "Green, fresh-looking stems show grapes were handled and cooled promptly; brown, dry stems suggest age or poor cold handling, which our article on [cold storage and packing for grapes](/blog/cold-storage-and-packing-that-keep-grapes-fresh) explains. Many grapes also carry a natural pale bloom on the skin. Ask for careful handling during packing so the bloom is not rubbed away.",
      },
      {
        heading: "Residue monitoring and documents",
        text: "Grapes exported from India to the European Union go through APEDA's GrapeNet system, which traces each lot from registered farms and records pesticide residue testing so that consignments meet EU requirements. A phytosanitary certificate is also normally required; our guide to [export documents for fresh produce](/blog/phytosanitary-certificates-and-export-documents-for-fresh-produce) covers the full set. Confirm the requirements for your destination before the season.",
      },
      {
        heading: "Ordering",
        text: "Freshland Exports supplies table grapes with a minimum order quantity of 500 kg. When you [request a quotation](/contact), share the colour, variety preference, berry size, packing format, destination and preferred shipment weeks together.",
      },
      {
        heading: "Conclusion",
        text: "Good table grapes have even berry size, the right sweetness for the variety at harvest, firm berries that stay attached, even colour and fresh green stems. Agree each of these on a written specification, check a sample, and plan EU shipments around GrapeNet residue monitoring.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions importers ask about table grapes from India.",
        faq: [
          {
            question: "Do grapes sweeten after picking?",
            answer: "No. Grapes must be harvested once they have reached the right sugar level for the variety, as they do not continue to sweeten afterwards.",
          },
          {
            question: "What do green stems tell me?",
            answer: "Fresh green stems show the grapes were handled and cooled promptly. Brown, dry stems suggest age or poor cold handling.",
          },
          {
            question: "What is GrapeNet?",
            answer: "APEDA's traceability and residue-monitoring system for grapes exported from India to the EU, linking each lot to registered farms and its residue test results.",
          },
          {
            question: "How can I check firmness and attachment in a sample?",
            answer: "Shake a bunch gently and press a few berries: good table grapes are firm and crisp and stay attached to the stem.",
          },
          {
            question: "Why does colour vary between seasons?",
            answer: "Colour development depends partly on weather during the season, so agree the colour you expect and check it against a sample.",
          },
        ],
      },
    ],
    // Cold Storage and Packing That Keep Grapes Fresh
    [
      {
        heading: "Cool quickly after harvest",
        text: "Grapes lose freshness quickly while they are warm. Rapid pre-cooling soon after picking removes field heat and slows moisture loss from berries and stems. Ask your supplier how quickly grapes are cooled after harvest, as this step has a large effect on how well they travel.",
      },
      {
        heading: "Reference storage conditions",
        text: "The following conditions are recommended for table grapes (USDA Agriculture Handbook 66, 2016); agree the transit settings with your supplier and shipping line for each order:",
        list: {
          items: [
            "Storage rooms at −1 to 0 °C with 90 to 95 per cent relative humidity and moderate airflow.",
            "Fruit held at a pulp temperature of −0.5 to 0 °C throughout its postharvest life.",
            "Table grapes are not chilling sensitive, but less mature grapes can be damaged by freezing.",
          ],
        },
      },
      {
        heading: "Guarding against mould",
        text: "Grey mould is a major storage disease of grapes. For long-distance export, sulphur dioxide-generating pads are used: they contain sodium metabisulphite and release sulphur dioxide slowly during shipping and marketing, often with a perforated box liner. Destinations may set rules on sulphur dioxide residues and labelling, so check the requirements for your market and confirm the approach with your supplier.",
      },
      {
        heading: "Packing that protects",
        text: "Grapes are commonly packed in punnets or bags inside ventilated boxes, which protect the bunches and let cold air reach the fruit. The packing format affects both shelf presentation and how much handling the grapes need at destination. Agree punnet or bag type, box weight and labelling before packing starts.",
      },
      {
        heading: "Steady cold through the chain",
        text: "Once cooled, grapes should stay cold and steady all the way to the store. Each break in the cold chain causes condensation and speeds decay. Because grapes need near-freezing storage, they should not share a container with chilling-sensitive produce; our guide to [building a mixed agricultural order](/blog/building-a-mixed-agricultural-order-from-india) explains which products can travel together.",
      },
      {
        heading: "On arrival",
        text: "Move the fruit into cold storage quickly and sell in rotation, oldest first. Check samples from different parts of the load for the points in our [table grape quality guide](/blog/table-grapes-from-india-berry-size-sugar-and-colour):",
        list: {
          items: [
            "Stem colour",
            "Berry firmness",
            "Loose berries",
            "Any sign of mould",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Grapes keep their quality when they are cooled quickly after harvest, held near 0 °C with high humidity and protected from grey mould on long voyages. Agree packing, mould control and transit settings before the order is packed; our [illustrative case study on a fresh fruit programme for supermarket importers](/case-studies/fresh-fruit-programme-for-supermarket-importers) shows how this fits into a retail supply programme.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about storing and packing grapes.",
        faq: [
          {
            question: "At what temperature should table grapes be stored?",
            answer: "Table grapes are generally stored at −1 to 0 °C with 90 to 95 per cent relative humidity, with the fruit held at a pulp temperature of −0.5 to 0 °C.",
          },
          {
            question: "Are grapes damaged by cold?",
            answer: "Table grapes are not chilling sensitive, but less mature grapes can be damaged by freezing.",
          },
          {
            question: "What are sulphur dioxide pads?",
            answer: "Pads containing sodium metabisulphite that release sulphur dioxide slowly in the box to control grey mould during long shipments.",
          },
          {
            question: "Why does pre-cooling matter so much?",
            answer: "Grapes lose freshness quickly while warm; prompt pre-cooling removes field heat and slows moisture loss from berries and stems.",
          },
          {
            question: "Can grapes share a container with other fruit?",
            answer: "Only with products that also need near-freezing storage; chilling-sensitive produce should travel separately.",
          },
        ],
      },
    ],
    // Seedless Green, Black and Red Grapes: What Buyers Prefer
    [
      {
        heading: "Seedless green",
        text: "Seedless green grapes are a mainstay of retail fruit aisles in many markets. Buyers often look for long, well-filled bunches, crisp berries and a clean green to yellow-green colour. Thompson Seedless and its selections are commonly grown in India for this segment, but confirm which varieties are available for your dates.",
      },
      {
        heading: "Black grapes",
        text: "Black seedless grapes appeal to customers who want a deeper, richer flavour and a striking shelf colour. Even colour across the bunch is especially important, as uncoloured berries stand out. Ask for a sample during the season to judge [colour and sweetness](/blog/table-grapes-from-india-berry-size-sugar-and-colour) together.",
      },
      {
        heading: "Red grapes",
        text: "Red grapes sit between green and black in flavour and look attractive in mixed punnets and fruit displays. Colour development depends on weather, so some seasons give more evenly coloured fruit than others. Agree acceptable colour standards in writing before the order is packed.",
      },
      {
        heading: "Timing the Indian season",
        text: "Indian table grapes are harvested in a defined season, and the timing of each variety shifts a little from year to year. Many buyers plan Indian grapes to fill a gap in their supply calendar. Share your intended weeks early so your supplier can match orders to the harvest; our [illustrative case study on planning seasonal Indian fruit purchases](/case-studies/planning-seasonal-indian-fruit-purchases) shows how.",
      },
      {
        heading: "Matching grapes to the channel",
        text: "Supermarkets, wholesale markets and food-service buyers each want different pack sizes and presentations. Tell your supplier where the grapes will be sold so that variety, bunch size and [packing](/blog/cold-storage-and-packing-that-keep-grapes-fresh) are chosen to suit.",
      },
      {
        heading: "Conclusion",
        text: "Green, black and red seedless grapes each have their own buyers, and colour evenness matters most for the coloured types. Choose the colour and variety your market expects, plan around the Indian harvest window, and match bunch size and packing to the channel.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about grape colours and varieties.",
        faq: [
          {
            question: "Which seedless green grapes are grown in India?",
            answer: "Thompson Seedless and its selections are commonly grown in India for the seedless green segment; confirm availability for your dates.",
          },
          {
            question: "Why is colour so important for black grapes?",
            answer: "Uncoloured berries stand out against dark fruit, so even colour across the bunch matters especially for black grapes.",
          },
          {
            question: "Why do red grapes vary in colour between seasons?",
            answer: "Colour development depends on weather, so some seasons give more evenly coloured fruit than others.",
          },
          {
            question: "How do buyers use Indian grapes in their calendar?",
            answer: "Many plan Indian grapes to fill a gap in their supply calendar, since the Indian harvest falls in a defined season.",
          },
          {
            question: "Do different channels need different packs?",
            answer: "Yes. Supermarkets, wholesale markets and food-service buyers each want different pack sizes and presentations.",
          },
        ],
      },
    ],
  ],
  pomegranate: [
    // Pomegranate Export Quality: Aril Colour, Size and Skin
    [
      {
        heading: "Aril colour",
        text: "Inside, buyers usually want deep red, juicy arils that are evenly coloured throughout the fruit. Pale or white patches can disappoint customers who cut the fruit at home. Cut open a few fruits from any sample to check aril colour, as the outside of a pomegranate does not always show what is inside.",
      },
      {
        heading: "Seed softness",
        text: "Many markets prefer pomegranates with softer seeds that are easy to eat. Seed softness depends largely on variety. Bhagwa is one variety widely grown in India and known for red arils, but ask your supplier which varieties are available and how their seeds compare.",
      },
      {
        heading: "Maturity at harvest",
        text: "Pomegranates do not ripen further after harvest, so they must be picked at eating maturity. Pomegranates are harvested when they reach a certain size and skin colour, and maturity indices such as sugar and acidity depend on the cultivar (USDA Agriculture Handbook 66, 2016).",
      },
      {
        heading: "Size and weight",
        text: "Pomegranates are graded by weight or count so that boxes hold fruit of a similar size. Larger fruit often suits premium retail, while smaller fruit may suit other channels or processing. State the size or count you need and confirm it per order, as the spread of sizes varies by season.",
      },
      {
        heading: "Skin, crown and weight for size",
        text: "Minor surface marks may be acceptable for some buyers, so agree a tolerance on the specification sheet; fruit with marks can often go to [aril extraction or juice](/blog/pomegranates-for-fresh-retail-arils-and-juice) instead. When checking a sample, look for:",
        list: {
          items: [
            "A bright, smooth rind free from cracks, splits, sunburn and deep scars.",
            "An intact, dry crown at the top.",
            "Fruit that feels heavy for its size, which usually means juicy arils; light fruit may be drying out.",
          ],
        },
      },
      {
        heading: "Export requirements",
        text: "For the United States, fresh pomegranates from India must be irradiated at a minimum absorbed dose of 400 gray under the APHIS rule published in the Federal Register on 10 February 2012. For the European Union, APEDA's AnarNet system supports testing and certification of pomegranate exports from India. A phytosanitary certificate is normally required; our guide to [export documents for fresh produce](/blog/phytosanitary-certificates-and-export-documents-for-fresh-produce) covers it.",
      },
      {
        heading: "Ordering",
        text: "Freshland Exports supplies pomegranates with a minimum order quantity of 500 kg. When you [request a quotation](/contact), share the variety preference, size or count, end use, packing and destination together.",
      },
      {
        heading: "Conclusion",
        text: "Good export pomegranates have deep red, juicy arils, soft seeds for the variety, an unmarked rind and a dry crown, and they feel heavy for their size. Cut samples before ordering, agree size and defect tolerances in writing, and check the destination's requirements, including irradiation for the United States. Our article on [why pomegranates travel well](/blog/why-pomegranates-travel-well-and-how-to-keep-them-fresh) covers what happens after packing.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions importers ask about pomegranate quality.",
        faq: [
          {
            question: "How can I check aril colour before buying?",
            answer: "Cut open a few fruits from the sample, because the outside of a pomegranate does not always show what is inside.",
          },
          {
            question: "Do pomegranates ripen after picking?",
            answer: "No. They do not ripen further after harvest, so they must be picked at eating maturity.",
          },
          {
            question: "What does seed softness depend on?",
            answer: "Largely on variety. Ask your supplier which varieties are available and how their seeds compare.",
          },
          {
            question: "Do Indian pomegranates need treatment for the United States?",
            answer: "Yes. They must be irradiated at a minimum absorbed dose of 400 gray under the APHIS rule of February 2012.",
          },
          {
            question: "What is AnarNet?",
            answer: "APEDA's system for testing and certification of pomegranates exported from India to the European Union.",
          },
        ],
      },
    ],
    // Why Pomegranates Travel Well, and How to Keep Them Fresh
    [
      {
        heading: "A naturally sturdy fruit",
        text: "The thick rind of a pomegranate protects the arils inside, and the fruit does not ripen further after harvest; pomegranates produce very little ethylene and are not particularly sensitive to it. This makes them better suited to longer journeys than many softer fruits. They still need care, as the rind can lose moisture and harden over time.",
      },
      {
        heading: "Cool storage, but not too cold",
        text: "Pomegranates keep best in cool storage where the air is not too dry, which helps prevent the rind shrivelling and losing its shine. Optimum temperature varies with cultivar, growing area and treatment; 6 °C with 90 per cent relative humidity is recommended for one cultivar, and storage below 5 °C should be avoided (USDA Agriculture Handbook 66, 2016). Agree the transit and storage conditions with your supplier and shipping line for each order.",
      },
      {
        heading: "Chilling injury",
        text: "Below 5 °C, pomegranates are susceptible to chilling injury, and symptoms can show inside as well as outside. They include:",
        list: {
          items: [
            "Rind pitting and brown discoloration of the skin",
            "Increased susceptibility to decay",
            "Pale arils and browning of the white segments between them",
          ],
        },
      },
      {
        heading: "Preventing splits",
        text: "Splits often start before harvest, but rough handling can open small cracks further. Fruit should be packed in single layers or with dividers so it does not knock together. Remove any split fruit at packing, as exposed arils can attract mould that spreads; [skin and crown condition](/blog/pomegranate-export-quality-aril-colour-size-and-skin) are worth checking at every stage.",
      },
      {
        heading: "Packing and ventilation",
        text: "Ventilated cartons let cool air reach every fruit while protecting it from knocks. Some exporters also use liners that help limit moisture loss. Agree the carton type, liner and fruit count per box before packing.",
      },
      {
        heading: "On arrival",
        text: "Keep fruit cool and away from direct sun, and sell in rotation. Fruit with minor rind marks can often go to aril extraction rather than whole-fruit retail, as our [illustrative case study on pomegranate for aril and juice processors](/case-studies/pomegranate-for-aril-and-juice-processors) describes. Check samples for:",
        list: {
          items: [
            "Rind condition",
            "Splits",
            "Decay at the crown",
            "Aril colour",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Pomegranates travel well because of their thick rind and low ethylene activity, but they still need cool, humid storage above 5 °C and careful packing to avoid splits and moisture loss. Agree conditions per shipment and check rind, crown and arils on arrival; our [illustrative case study on a fresh fruit programme for supermarket importers](/case-studies/fresh-fruit-programme-for-supermarket-importers) shows how pomegranates fit a retail programme.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about storing pomegranates.",
        faq: [
          {
            question: "How cold can pomegranates be stored?",
            answer: "Not below 5 °C. Pomegranates are susceptible to chilling injury below that temperature.",
          },
          {
            question: "What are the signs of chilling injury in pomegranates?",
            answer: "Rind pitting, brown skin, more decay, pale arils and browning of the white segments between the arils.",
          },
          {
            question: "Are pomegranates sensitive to ethylene?",
            answer: "Not particularly. They produce very little ethylene and are not very sensitive to it.",
          },
          {
            question: "Why does the rind harden in storage?",
            answer: "The rind loses moisture over time, which is why pomegranates keep best where the air is not too dry.",
          },
          {
            question: "What can be done with fruit that has rind marks?",
            answer: "Fruit that is sound inside can often go to aril extraction rather than whole-fruit retail.",
          },
        ],
      },
    ],
    // Pomegranates for Fresh Retail, Arils and Juice
    [
      {
        heading: "Whole fruit for retail",
        text: "Retail buyers look first at appearance: bright, unmarked rind, even size and a good shape. Customers often judge a pomegranate by its colour and weight in the hand. Uniform boxes with attractive fruit sell best, so external quality carries the most weight for this channel.",
      },
      {
        heading: "Ready-to-eat arils",
        text: "Processors who sell fresh arils in tubs care most about what is inside: deep colour, juicy arils and soft seeds that are easy to eat. Rind marks matter less, as the rind is removed, so fruit that is sound inside but less perfect outside can suit this use well. Our [illustrative case study on pomegranate for aril and juice processors](/case-studies/pomegranate-for-aril-and-juice-processors) shows what such buyers specify.",
      },
      {
        heading: "Juice and processing",
        text: "Juice processors look for high juice content, good colour and a flavour that suits their blend. They often buy larger volumes and may accept a wider range of sizes. Agree how the fruit will be checked and what defects are acceptable before the order is packed.",
      },
      {
        heading: "Tell your supplier the end use",
        text: "Because each channel values different qualities, say at the start whether the fruit is for retail, arils or juice, so your supplier can select and grade accordingly rather than sending retail-grade fruit to a processor or the reverse. Our [pomegranate export quality guide](/blog/pomegranate-export-quality-aril-colour-size-and-skin) covers the checks for each.",
        list: {
          items: [
            "Retail: rind appearance, size and shape",
            "Arils: aril colour, juiciness and seed softness",
            "Juice: juice content, colour and flavour",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Retail, aril and juice buyers value different things in a pomegranate, from rind appearance to aril colour and juice yield. State the end use at enquiry stage so the right fruit is selected, and keep sound fruit with minor rind marks for processing; [cool storage above 5 °C](/blog/why-pomegranates-travel-well-and-how-to-keep-them-fresh) protects quality for every channel.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about pomegranate uses.",
        faq: [
          {
            question: "What do retail buyers look for in pomegranates?",
            answer: "A bright, unmarked rind, even size and a good shape, as customers judge the fruit by colour and weight in the hand.",
          },
          {
            question: "Why can marked fruit suit aril processors?",
            answer: "The rind is removed, so what matters is aril colour, juiciness and seed softness rather than surface marks.",
          },
          {
            question: "What do juice processors look for?",
            answer: "High juice content, good colour and a flavour that suits their blend, often across a wider range of sizes.",
          },
          {
            question: "Why should I tell my supplier the end use?",
            answer: "Each channel values different qualities, so the fruit can be selected and graded to suit.",
          },
          {
            question: "Do aril buyers care about seed softness?",
            answer: "Yes. Soft seeds that are easy to eat are an important quality for ready-to-eat arils.",
          },
        ],
      },
    ],
  ],
  orange: [
    // Sourcing Oranges: Juice Content, Peel and Size
    [
      {
        heading: "Juice content",
        text: "For many buyers, juice is the heart of the specification. A juicy orange feels heavy for its size and gives slightly under firm pressure. Juice content varies with variety, maturity and season, so ask how it is judged and agree a target on the specification sheet rather than relying on appearance alone.",
      },
      {
        heading: "Sweetness and acidity",
        text: "The balance between sugar and acid shapes how an orange tastes: too much acid and it is sharp, too little and it can taste flat. Once oranges are harvested their quality will not improve (USDA Agriculture Handbook 66, 2016), so they must be picked at the right maturity. Taste a sample and agree a flavour standard with your supplier.",
      },
      {
        heading: "Peel colour and texture",
        text: "Peel colour depends on variety and on growing conditions, and a fully mature orange is not always fully orange. Buyers generally look for firm, fresh peel without soft spots, deep scars or mould. Agree what colour and surface marks are acceptable for your market.",
      },
      {
        heading: "Size grading",
        text: "Oranges are sorted by diameter or count so each carton holds fruit of a similar size. Retail packs, [juice bars and processors](/blog/oranges-for-the-fruit-bowl-juice-bars-and-processing) often want different sizes. State the size range you need and confirm availability per order, as sizes vary through the season.",
      },
      {
        heading: "Check before you commit",
        text: "Ask for a sample. A short sample check now saves disputes later.",
        list: {
          ordered: true,
          items: [
            "Check weight, peel condition, aroma and flavour.",
            "Cut a few fruits to look at juiciness, seed count and segment colour.",
          ],
        },
      },
      {
        heading: "Documents and traceability",
        text: "Fresh oranges are a plant product, so a phytosanitary certificate is normally required by the importing country; our guide to [export documents for fresh produce](/blog/phytosanitary-certificates-and-export-documents-for-fresh-produce) covers it. Citrus fruits are also among the products covered by APEDA's HortiNet traceability system. Confirm your destination's requirements before the first order.",
      },
      {
        heading: "Ordering",
        text: "Freshland Exports supplies oranges with a minimum order quantity of 500 kg. When you [request a quotation](/contact), share the end use, variety preference, size range, peel standard, packing and destination together.",
      },
      {
        heading: "Conclusion",
        text: "Good oranges for export feel heavy for their size, taste balanced and carry firm, fresh peel, and because quality does not improve after harvest, maturity at picking decides the result. Agree juice, flavour, size and peel standards in writing, check a cut sample, and plan [storage conditions](/blog/storing-oranges-to-preserve-juiciness-and-peel-quality) for the journey.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions importers ask about sourcing oranges.",
        faq: [
          {
            question: "How can I judge juice content without equipment?",
            answer: "A juicy orange feels heavy for its size and gives slightly under firm pressure, but agree how juice content is measured on the specification.",
          },
          {
            question: "Do oranges improve after picking?",
            answer: "No. Once oranges are harvested their quality will not improve, so they must be picked at the right maturity.",
          },
          {
            question: "Is a green-tinged orange immature?",
            answer: "Not necessarily. Peel colour depends on variety and growing conditions, and a fully mature orange is not always fully orange.",
          },
          {
            question: "What should I check when cutting a sample?",
            answer: "Juiciness, seed count and segment colour, alongside weight, peel condition, aroma and flavour.",
          },
          {
            question: "Are citrus exports from India traceable?",
            answer: "Citrus fruits are among the products covered by APEDA's HortiNet traceability system for horticultural exports.",
          },
        ],
      },
    ],
    // Storing Oranges to Preserve Juiciness and Peel Quality
    [
      {
        heading: "Moisture loss is the main risk",
        text: "Oranges lose water through the peel over time, which makes them soft, light and dull. Keeping them cool slows this down. Cartons should not sit in warm yards or direct sun at any stage, from packing house to warehouse.",
      },
      {
        heading: "Reference storage conditions",
        text: "Oranges can be stored for up to 12 weeks under optimum conditions, but recommended conditions differ by growing region, and storage life depends on cultivar, maturity and handling (USDA Agriculture Handbook 66, 2016). Agree the transit and storage settings with your supplier and shipping line for each order, and keep them steady to avoid condensation.",
        list: {
          items: [
            "Florida and Texas oranges: 0 to 1 °C with 85 to 90 per cent relative humidity.",
            "California and Arizona oranges: 3 to 8 °C with 90 to 95 per cent relative humidity.",
            "Oranges begin to freeze at about −1 °C.",
          ],
        },
      },
      {
        heading: "Chilling injury",
        text: "Some oranges are damaged by cold: California and Arizona oranges may develop chilling injury below about 3 to 5 °C, while Florida and Texas oranges rarely do. Symptoms include pitting, brown staining, increased decay, internal discoloration, off flavours and watery breakdown, sometimes showing only after the fruit is moved to room temperature. Because sensitivity varies, confirm a safe temperature for the oranges you buy.",
      },
      {
        heading: "Ventilated packing",
        text: "Ventilated cartons let air circulate and carry away moisture and heat. Pack fruit firmly enough that it does not roll and bruise, but not so tightly that it is crushed. Agree carton type, count and labelling before packing begins.",
      },
      {
        heading: "Watch for mould",
        text: "A single mouldy orange can spread spores through a carton, and fruit with cuts or bruises is most at risk, so careful handling at every stage matters. Precool fruit before storage and inspect it often for decay. On arrival, check samples from different parts of the load and remove affected fruit quickly; our [orange sourcing guide](/blog/sourcing-oranges-juice-content-peel-and-size) lists the quality points to check.",
      },
      {
        heading: "Keep away from strong odours",
        text: "Citrus can pick up odours from other goods and can pass its own scent on. Store oranges separately from strongly flavoured products where you can, plan any [mixed load](/blog/building-a-mixed-agricultural-order-from-india) with care, and rotate stock so older fruit is sold first.",
      },
      {
        heading: "Conclusion",
        text: "Oranges keep their juiciness and peel quality when moisture loss is slowed, temperatures are steady and suited to the fruit, and mould is caught early. Because safe storage temperatures differ by growing region and cultivar, agree conditions per shipment; our [illustrative case study on a fresh fruit programme for supermarket importers](/case-studies/fresh-fruit-programme-for-supermarket-importers) shows oranges in a retail programme.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about storing oranges.",
        faq: [
          {
            question: "How long can oranges be stored?",
            answer: "Up to about 12 weeks under optimum conditions, depending on cultivar, maturity, preharvest conditions and handling.",
          },
          {
            question: "What temperature should oranges be stored at?",
            answer: "It depends on where they were grown: reference conditions are 0 to 1 °C for Florida and Texas oranges and 3 to 8 °C for California and Arizona oranges.",
          },
          {
            question: "What are the signs of chilling injury in oranges?",
            answer: "Pitting, brown staining, more decay, internal discoloration, off flavours and watery breakdown, sometimes appearing only after warming.",
          },
          {
            question: "Why do oranges go soft in storage?",
            answer: "They lose water through the peel, which makes them soft, light and dull; cool storage slows this.",
          },
          {
            question: "At what temperature do oranges freeze?",
            answer: "Oranges begin to freeze at about −1 °C.",
          },
        ],
      },
    ],
    // Oranges for the Fruit Bowl, Juice Bars and Processing
    [
      {
        heading: "Fresh retail",
        text: "Retail customers choose oranges by eye and by hand, so bright peel, even size and a firm, heavy feel matter most. Easy-peeling types are popular for snacking. Uniform cartons with attractive fruit help shelf presentation and reduce waste; our [illustrative case study on a fresh fruit programme for supermarket importers](/case-studies/fresh-fruit-programme-for-supermarket-importers) shows a typical retail brief.",
      },
      {
        heading: "Juice bars and food service",
        text: "Juice bars want plenty of juice with a pleasant, consistent flavour. Peel appearance matters less, but a bitter or sharp taste can spoil a drink. Size can matter for juicing machines, so mention any limits when you send your enquiry; our [illustrative case study on oranges for juicing in food service](/case-studies/oranges-for-juicing-in-food-service) covers what such buyers specify.",
      },
      {
        heading: "Processing",
        text: "Processors making juice, segments or flavourings buy for yield and flavour. They may accept a wider range of sizes and minor peel marks, but expect consistent juice quality. Agree how the fruit will be checked and what defects are acceptable before the order is packed; our [illustrative case study on fruit for pulp, juice and nectar processing](/case-studies/fruit-for-pulp-juice-and-nectar-processing) shows a processor's view.",
      },
      {
        heading: "Writing the right specification",
        text: "Because each buyer values different qualities, state the end use on your enquiry along with the following, so your supplier can select fruit to suit and both sides know what to expect when it arrives. Our [orange sourcing guide](/blog/sourcing-oranges-juice-content-peel-and-size) explains each point.",
        list: {
          items: [
            "Variety",
            "Size",
            "Peel standard",
            "Packing",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Fresh retail, juice bars and processors each want something different from an orange: appearance and feel, consistent juice and flavour, or yield. State the end use at enquiry stage so variety, size and peel standard can be chosen to suit.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about orange uses.",
        faq: [
          {
            question: "What matters most for retail oranges?",
            answer: "Bright peel, even size and a firm, heavy feel, as customers choose by eye and by hand.",
          },
          {
            question: "What do juice bars look for?",
            answer: "Plenty of juice with a pleasant, consistent flavour; peel appearance matters less, but bitterness or sharpness can spoil a drink.",
          },
          {
            question: "Does size matter for juicing?",
            answer: "It can, because of juicing machines, so mention any size limits in your enquiry.",
          },
          {
            question: "Do processors accept marked fruit?",
            answer: "Processors often accept a wider range of sizes and minor peel marks, but expect consistent juice quality.",
          },
          {
            question: "What should an orange specification include?",
            answer: "The end use, variety, size, peel standard and packing.",
          },
        ],
      },
    ],
  ],
  chikoo: [
    // Chikoo (Sapota) Export Guide: Maturity and Sweetness
    [
      {
        heading: "Know the fruit",
        text: "Chikoo, also called sapota or sapodilla, is a small brown fruit with a rough, sandy-looking skin and soft, sweet flesh with a caramel-like flavour. The fruit weighs about 70 to 300 g, with a thin skin and a pleasant aroma, and is very susceptible to mechanical injury (USDA Agriculture Handbook 66, 2016). It looks much the same from outside whether it is mature or not, which makes judging maturity the most important part of buying it.",
      },
      {
        heading: "Signs of maturity",
        text: "Harvest timing is difficult because chikoo trees flower erratically and carry fruit at all stages of development at once. Growers judge maturity by changes in skin colour and texture, and by how the fruit responds when the skin is lightly scratched. Ask your supplier how maturity is checked before picking, and agree the stage on the specification sheet.",
      },
      {
        heading: "Why timing matters for flavour",
        text: "Chikoo is a climacteric fruit that does not ripen on the tree, so it is picked mature but firm and ripens after harvest. Fruit harvested later than the optimum softens very rapidly and becomes hard to handle, while fruit harvested before physiological maturity may not soften at all. The right stage depends on transit time, so plan the harvest and shipment together; our article on [handling chikoo](/blog/handling-chikoo-a-delicate-fruit-that-ripens-fast) covers what happens next.",
      },
      {
        heading: "Checking a sample",
        text: "Once a sample has ripened, cut a fruit to check flesh colour, sweetness and texture: a smooth, grainy-sweet flesh without astringency is what most buyers want. Look for:",
        list: {
          items: [
            "Fruit of an even size and shape",
            "Clean, unbroken skin",
            "No cracks or soft patches",
          ],
        },
      },
      {
        heading: "Size and packing",
        text: "Chikoo is graded by size so each box holds similar fruit. Agree size, box type and fruit count per box per order, and remember that availability varies by season.",
      },
      {
        heading: "Ordering",
        text: "Freshland Exports supplies chikoo with a minimum order quantity of 500 kg. When you [request a quotation](/contact), share the end use, size, packing, destination and shipment window together, so harvest and transit can be planned as one.",
      },
      {
        heading: "Conclusion",
        text: "Buying chikoo comes down to maturity: fruit picked too late softens before sale, and fruit picked too early may never ripen. Agree how maturity is judged, ripen and cut a sample, and plan harvest and shipment together; our [illustrative case study on speciality fruits for ethnic retail](/case-studies/speciality-fruits-for-ethnic-retail) shows how buyers serve this market, and [chikoo's uses in shakes and desserts](/blog/chikoo-in-milkshakes-desserts-and-ice-cream) explain where softer fruit can go.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions importers ask about chikoo.",
        faq: [
          {
            question: "Is chikoo the same as sapota and sapodilla?",
            answer: "Yes. Chikoo, sapota and sapodilla are names for the same fruit.",
          },
          {
            question: "Why is chikoo maturity hard to judge?",
            answer: "The trees flower erratically and carry fruit at all stages at once, and the fruit looks much the same from outside whether it is mature or not.",
          },
          {
            question: "Does chikoo ripen after picking?",
            answer: "Yes. It is a climacteric fruit that does not ripen on the tree; it is picked mature but firm and ripens after harvest.",
          },
          {
            question: "What happens if chikoo is picked too early?",
            answer: "Fruit harvested before physiological maturity may not soften properly and can taste astringent.",
          },
          {
            question: "What should a ripe chikoo taste like?",
            answer: "Sweet, with a smooth, slightly grainy texture and no astringency.",
          },
        ],
      },
    ],
    // Handling Chikoo: A Delicate Fruit That Ripens Fast
    [
      {
        heading: "A short window",
        text: "Once chikoo starts to ripen it moves quickly from firm to soft, and soft fruit bruises and spoils easily. Every step after harvest is about slowing that process and avoiding damage. Shipments need careful planning so fruit arrives with enough life left for sale; our [illustrative case study on managing ripeness for climacteric fruit in transit](/case-studies/managing-ripeness-for-climacteric-fruit-in-transit) covers the planning involved.",
      },
      {
        heading: "Gentle packing",
        text: "Chikoo skin is thin and marks easily, and the fruit is very susceptible to mechanical injury. Agree the box type and fruit count with your supplier before packing.",
        list: {
          items: [
            "Pack fruit in shallow layers.",
            "Use cushioning or dividers so fruit does not rub or press together.",
            "Avoid overfilled boxes and deep stacks.",
          ],
        },
      },
      {
        heading: "Cool, but beware of chilling",
        text: "Cool storage slows ripening, but chikoo is highly susceptible to chilling injury: storage at 6 to 10 °C causes irreversible damage and poor flavour, and injury has also been reported in fruit held for 21 days at 10 °C (USDA Agriculture Handbook 66, 2016). Agree the transit settings with your supplier and shipping line for each order, and keep conditions steady.",
      },
      {
        heading: "Ethylene and ripening",
        text: "Chikoo produces ethylene as it ripens; removing ethylene delays ripening, and modified atmospheres with ethylene removal extend storage life. Keep chikoo away from ripening fruit that gives off ethylene; our guide to [building a mixed agricultural order](/blog/building-a-mixed-agricultural-order-from-india) explains which products can travel together.",
      },
      {
        heading: "On arrival",
        text: "Unload promptly and check samples for softness, bruising and any sign of mould around the stem. Sort fruit by ripeness so the softest lots are sold or used first. Ripe chikoo is best handled as little as possible.",
      },
      {
        heading: "A use for softer fruit",
        text: "Fruit that has ripened beyond the retail stage can still be well suited to pulp, desserts and shakes, as our article on [chikoo in milkshakes, desserts and ice cream](/blog/chikoo-in-milkshakes-desserts-and-ice-cream) describes. Having a processing outlet in mind helps reduce waste on a fruit with such a short shelf window.",
      },
      {
        heading: "Conclusion",
        text: "Chikoo is delicate, ripens fast once it starts and is easily damaged by both rough handling and chilling. Pack it gently in shallow layers, keep it cool but out of the chilling range, separate it from ethylene sources, and plan a processing outlet for softer fruit. [Picking at the right maturity](/blog/chikoo-sapota-export-guide-maturity-and-sweetness) gives every shipment the best start.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about handling chikoo.",
        faq: [
          {
            question: "Can chikoo be stored in a cold room?",
            answer: "Only with care. Storage at 6 to 10 °C causes irreversible chilling damage and poor flavour.",
          },
          {
            question: "Why does chikoo bruise so easily?",
            answer: "Its skin is thin and the fruit is very susceptible to mechanical injury, especially once it softens.",
          },
          {
            question: "How can chikoo ripening be slowed?",
            answer: "Cool storage above the chilling range and removing ethylene both delay ripening.",
          },
          {
            question: "How should chikoo be packed?",
            answer: "In shallow layers with cushioning or dividers, in boxes that are not overfilled or stacked too deep.",
          },
          {
            question: "What can be done with overripe chikoo?",
            answer: "It can still suit pulp, desserts and shakes, which helps reduce waste.",
          },
        ],
      },
    ],
    // Chikoo in Milkshakes, Desserts and Ice Cream
    [
      {
        heading: "A distinctive sweetness",
        text: "Chikoo's caramel-like, malty sweetness makes it stand out among tropical fruits. It blends smoothly with milk and cream, which is why it is popular in drinks and desserts. Customers who know the fruit often look for it specifically.",
      },
      {
        heading: "Milkshakes and beverages",
        text: "Chikoo milkshakes are a favourite in many cafés and juice bars. For this use, ripe fruit with soft, sweet flesh works best, and appearance matters less than flavour. Food-service buyers may prefer ready pulp to save preparation time; our [illustrative case study on speciality fruits for ethnic retail](/case-studies/speciality-fruits-for-ethnic-retail) looks at the wider market for chikoo.",
      },
      {
        heading: "Ice cream and frozen desserts",
        text: "Ice cream makers use chikoo pulp for its natural sweetness and flavour. They usually want consistent colour, flavour and texture across batches. Agree the pulp specification and packing format with your supplier, and confirm it per order.",
      },
      {
        heading: "Fresh fruit and desserts",
        text: "Ripe chikoo is also eaten fresh, scooped from the skin, and used in fruit salads, puddings and sweets. Retail buyers want well-shaped fruit that [ripens evenly](/blog/chikoo-sapota-export-guide-maturity-and-sweetness). Tell your supplier whether you need whole fruit or pulp so the right stage and handling are chosen.",
      },
      {
        heading: "Choosing fruit for each use",
        text: "Fruit that has ripened too far for retail can still suit shakes and desserts, which is one reason [careful handling](/blog/handling-chikoo-a-delicate-fruit-that-ripens-fast) and a processing outlet go together.",
        list: {
          items: [
            "Milkshakes and beverages: ripe, soft, sweet flesh; appearance matters less.",
            "Ice cream: consistent colour, flavour and texture across batches.",
            "Fresh retail: well-shaped fruit that ripens evenly.",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Chikoo's caramel-like sweetness suits milkshakes, ice cream and desserts as well as fresh eating. Choose the stage and form for the use, whole fruit for retail or ripe fruit and pulp for drinks and desserts, and agree the specification per order.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about chikoo uses.",
        faq: [
          {
            question: "What does chikoo taste like?",
            answer: "Sweet, with a caramel-like, malty flavour that blends smoothly with milk and cream.",
          },
          {
            question: "Which chikoo suits milkshakes?",
            answer: "Ripe fruit with soft, sweet flesh; appearance matters less than flavour.",
          },
          {
            question: "What do ice cream makers look for?",
            answer: "Chikoo pulp with consistent colour, flavour and texture across batches.",
          },
          {
            question: "How is fresh chikoo eaten?",
            answer: "Ripe chikoo is scooped from the skin and also used in fruit salads, puddings and sweets.",
          },
          {
            question: "Should I buy whole fruit or pulp?",
            answer: "It depends on the use: retail needs whole, well-shaped fruit, while drinks and desserts often use ripe fruit or pulp.",
          },
        ],
      },
    ],
  ],
  papaya: [
    // Papaya Export Guide: Colour Break, Weight and Firmness
    [
      {
        heading: "What colour break means",
        text: "Colour break is the point at which a green papaya first shows a streak of yellow at the blossom end. Fruit picked at this stage is mature enough to ripen well, yet firm enough to handle and ship. Agree the harvest stage with your supplier, as the right point depends on transit time.",
      },
      {
        heading: "Too early or too late",
        text: "Papayas picked fully green may soften without developing good flavour or colour. Fruit picked with a lot of yellow ripens quickly and bruises in transit. Getting the harvest stage right is the single most important step in a papaya shipment; our article on [shipping papaya](/blog/shipping-papaya-temperature-ripening-and-handling) covers the conditions that follow.",
      },
      {
        heading: "Weight and size grading",
        text: "Papayas range widely in size by variety, from smaller single-serve fruit to large fruit for cutting. Buyers grade by weight so each box is consistent. State the weight range you need and confirm availability per order, as sizes vary with variety and season.",
      },
      {
        heading: "Firmness and skin",
        text: "Fruit should be firm, smooth and free from defects. Latex marks and small blemishes may be acceptable for some channels, so agree a tolerance on the specification sheet. Small, dry, brown-black freckles on the skin are not caused by disease and do not affect ripening or flavour (USDA Agriculture Handbook 66, 2016). Reject fruit with:",
        list: {
          items: [
            "Cuts or deep scars",
            "Sunburn",
            "Soft or sunken spots, which can be a sign of disease and should be checked",
          ],
        },
      },
      {
        heading: "Checking a sample",
        text: "Once a sample has ripened, cut fruit to check flesh colour, sweetness and texture. Most buyers want even orange or red flesh and a clean seed cavity. A sample check helps match variety and maturity to your market, whether it is [fresh retail, fruit salads or pulp](/blog/papaya-for-fresh-retail-fruit-salads-and-pulp).",
      },
      {
        heading: "Ordering",
        text: "Freshland Exports supplies papaya with a minimum order quantity of 500 kg. When you [request a quotation](/contact), share the variety preference, weight range, harvest stage, packing and destination together.",
      },
      {
        heading: "Conclusion",
        text: "A successful papaya shipment starts with fruit picked at colour break, graded by weight, with firm, clean skin. Agree the harvest stage against your transit time, set skin tolerances in writing, and ripen and cut a sample before ordering; our [illustrative case study on managing ripeness for climacteric fruit in transit](/case-studies/managing-ripeness-for-climacteric-fruit-in-transit) shows how buyers plan it.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions importers ask about papaya.",
        faq: [
          {
            question: "What is colour break in papaya?",
            answer: "The point at which a green papaya first shows a streak of yellow at the blossom end; fruit picked then ripens well but is firm enough to ship.",
          },
          {
            question: "What happens if papaya is picked fully green?",
            answer: "It may soften without developing good flavour or colour.",
          },
          {
            question: "Are brown freckles on papaya skin a problem?",
            answer: "Small, dry, brown-black freckles are not caused by disease and do not affect ripening or flavour.",
          },
          {
            question: "How is papaya graded?",
            answer: "By weight, so each box is consistent; sizes range widely by variety.",
          },
          {
            question: "What should the flesh of a good papaya look like?",
            answer: "Even orange or red flesh with a clean seed cavity, once the fruit has ripened.",
          },
        ],
      },
    ],
    // Shipping Papaya: Temperature, Ripening and Handling
    [
      {
        heading: "Reference conditions in transit",
        text: "Papaya is generally held at 7 to 13 °C with 90 to 95 per cent relative humidity (USDA Agriculture Handbook 66, 2016). Agree the transit settings with your supplier and shipping line for each order.",
        list: {
          items: [
            "At 7 to 10 °C, storage life is limited by chilling injury.",
            "At 10 to 13 °C, fruit ripens slowly.",
            "Fruit at the colour-break stage can be held at 7 °C for 14 days and still ripen normally at room temperature.",
            "Ripe, full-colour fruit can be held for more than a week at 1 to 3 °C.",
          ],
        },
      },
      {
        heading: "Too cold or too warm",
        text: "Fruit held too cold for its stage can fail to ripen properly and develop skin damage, while fruit held too warm ripens on the way. Because the safe temperature depends on how ripe the fruit is, [harvest stage](/blog/papaya-export-guide-colour-break-weight-and-firmness) and transit settings should be agreed together.",
      },
      {
        heading: "Protective packing",
        text: "Papaya skin bruises and scars easily. Fruit is often wrapped individually or packed with cushioning in single layers so it does not knock together. Agree the wrap, box type and fruit count per box before packing.",
      },
      {
        heading: "Ripening after arrival",
        text: "Papayas picked at colour break continue to ripen at destination. Keep them at moderate room conditions with good airflow, away from direct sun, and check them daily. Yellow spreading across the skin and a slight give under gentle pressure show the fruit is close to ripe; our [illustrative case study on managing ripeness for climacteric fruit in transit](/case-studies/managing-ripeness-for-climacteric-fruit-in-transit) shows how ripening is planned.",
      },
      {
        heading: "Gentle handling",
        text: "Each drop or squeeze leaves a mark that shows up as the fruit ripens. Train staff to lift boxes rather than slide or throw them, and avoid stacking too high. Careful handling at every stage pays off in better-looking fruit on the shelf.",
      },
      {
        heading: "Sorting on arrival",
        text: "Check samples from across the load for firmness, colour stage and any soft or sunken spots. Sort by ripeness so that fruit closest to ready is sold first, and move overripe fruit to cutting or pulping; our [illustrative case study on tropical fruit for smoothie and dessert producers](/case-studies/tropical-fruit-for-smoothie-and-dessert-producers) shows one such outlet.",
      },
      {
        heading: "Conclusion",
        text: "Papaya ships best at colour break, held at 7 to 13 °C depending on its stage, packed so the fruit cannot knock together, and ripened at moderate room conditions on arrival. Agree harvest stage and transit settings together, handle the fruit gently throughout, and sort it by ripeness when it lands.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about shipping papaya.",
        faq: [
          {
            question: "What temperature should papaya be shipped at?",
            answer: "Papaya is generally held at 7 to 13 °C with 90 to 95 per cent relative humidity; at 7 to 10 °C chilling limits storage life, and at 10 to 13 °C fruit ripens slowly.",
          },
          {
            question: "Can colour-break papaya be held cold?",
            answer: "Colour-break fruit can be held at 7 °C for 14 days and still ripen normally at room temperature.",
          },
          {
            question: "How can ripe papaya be held?",
            answer: "Ripe, full-colour fruit can be held for more than a week at 1 to 3 °C.",
          },
          {
            question: "How do I know papaya is nearly ripe?",
            answer: "Yellow spreads across the skin and the fruit gives slightly under gentle pressure.",
          },
          {
            question: "Why is papaya packed in single layers?",
            answer: "Its skin bruises and scars easily, and marks show up as the fruit ripens.",
          },
        ],
      },
    ],
    // Papaya for Fresh Retail, Fruit Salads and Pulp
    [
      {
        heading: "Whole fruit for retail",
        text: "Retail buyers want attractive, evenly shaped papayas that ripen to a good colour and flavour. Smaller fruit often suits households, while larger fruit may suit markets where papaya is bought to share. Tell your supplier the size your customers prefer, and agree [weight grading](/blog/papaya-export-guide-colour-break-weight-and-firmness) on the specification.",
      },
      {
        heading: "Fresh-cut cups and fruit salads",
        text: "Fresh-cut processors need fruit that ripens evenly, with firm, colourful flesh that holds its shape when cubed. Skin marks matter less, but flesh texture and colour matter a great deal. Consistent ripeness across a delivery helps them plan production.",
      },
      {
        heading: "Pulp and purée",
        text: "Papaya pulp is used in drinks, smoothies and desserts. Processors look for good colour, flavour and yield rather than appearance. Agree the pulp specification and packing format per order, and confirm any labelling your market requires; our [illustrative case study on tropical fruit for smoothie and dessert producers](/case-studies/tropical-fruit-for-smoothie-and-dessert-producers) and our [illustrative case study on fruit for pulp, juice and nectar processing](/case-studies/fruit-for-pulp-juice-and-nectar-processing) show what such buyers specify.",
      },
      {
        heading: "Choosing the right fruit for the job",
        text: "Because each buyer values different qualities, state the end use on your enquiry, so your supplier can choose variety, size and maturity to suit.",
        list: {
          items: [
            "Retail: shape, size and ripening to good colour and flavour",
            "Fresh-cut: even ripening and firm, colourful flesh",
            "Pulp: colour, flavour and yield",
          ],
        },
      },
      {
        heading: "Conclusion",
        text: "Retail, fresh-cut and pulp buyers each value different qualities in papaya, from shape and size to firm flesh and yield. State the end use at enquiry stage, and plan ripening so fruit reaches each channel in the right condition.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about papaya uses.",
        faq: [
          {
            question: "What size papaya suits retail?",
            answer: "Smaller fruit often suits households, while larger fruit may suit markets where papaya is bought to share.",
          },
          {
            question: "What do fresh-cut processors need?",
            answer: "Fruit that ripens evenly, with firm, colourful flesh that holds its shape when cubed.",
          },
          {
            question: "What is papaya pulp used for?",
            answer: "Drinks, smoothies and desserts, where colour, flavour and yield matter more than appearance.",
          },
          {
            question: "Do skin marks matter for processing?",
            answer: "Less than for retail; flesh texture, colour and yield matter more.",
          },
          {
            question: "Why should I share the end use?",
            answer: "So your supplier can choose variety, size and maturity to suit the channel.",
          },
        ],
      },
    ],
  ],
  guava: [
    // Guava Sourcing: White vs Pink Flesh, Size and Aroma
    [
      {
        heading: "White or pink flesh",
        text: "Guavas are broadly divided into white-fleshed and pink-fleshed types. Decide which your market wants, then confirm which varieties are available for your dates; our article on [guava in juices, jams and fresh retail](/blog/guava-in-juices-jams-and-fresh-retail) shows where each is used.",
        list: {
          items: [
            "White guavas: often eaten fresh and valued for their crisp texture and sweet flavour.",
            "Pink guavas: prized for colour and aroma and popular for juice and processing.",
          ],
        },
      },
      {
        heading: "Size and shape",
        text: "Guavas are graded by size so each box holds similar fruit. Buyers usually look for round to slightly pear-shaped fruit with a regular form. State the size range you need and confirm it per order, as sizes vary with variety and season.",
      },
      {
        heading: "Harvest stage",
        text: "The harvest stage depends on how the fruit will be eaten: guavas eaten green are harvested mature and firm, while fruit to be eaten soft and ripe is picked when it shows some colour change from green to yellow and initial softening (USDA Agriculture Handbook 66, 2016). Immature fruit does not ripen properly. Agree the stage on the specification sheet to suit your transit time.",
      },
      {
        heading: "Firmness and skin",
        text: "Fruit for shipping should be firm, with smooth skin that is green to light yellow-green depending on the stage. Look for fruit free from cracks, bruises, soft patches and insect marks. Agree what level of minor skin marking is acceptable on the specification sheet.",
      },
      {
        heading: "Aroma",
        text: "A ripe guava has a strong, sweet fragrance that customers notice straight away. Aroma develops as the fruit ripens, so firm fruit picked for shipping may smell faint. Ripen a sample and judge its fragrance and flavour together.",
      },
      {
        heading: "Seeds and texture",
        text: "Guavas contain small hard seeds, and seed quantity and texture vary by variety. Some markets prefer varieties with fewer or softer seeds. Cut a ripe sample to check flesh thickness, seediness and texture before placing a full order.",
      },
      {
        heading: "Ordering",
        text: "Freshland Exports supplies guava with a minimum order quantity of 500 kg. When you [request a quotation](/contact), share the flesh colour, size range, harvest stage, packing and destination together, and plan [post-harvest care](/blog/extending-guava-shelf-life-with-careful-post-harvest-care) for the route.",
      },
      {
        heading: "Conclusion",
        text: "Sourcing guava starts with the choice between white and pink flesh, then size, harvest stage, firm clean skin and seediness. Ripen a sample to judge aroma and flavour, agree stage and tolerances in writing, and plan for a fruit that ripens quickly; our [illustrative case study on speciality fruits for ethnic retail](/case-studies/speciality-fruits-for-ethnic-retail) shows one market for guava.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions importers ask about guava.",
        faq: [
          {
            question: "What is the difference between white and pink guava?",
            answer: "White guavas are often eaten fresh for their crisp texture and sweet flavour; pink guavas are prized for colour and aroma and are popular for juice and processing.",
          },
          {
            question: "When are guavas harvested?",
            answer: "It depends on use: fruit eaten green is picked mature and firm, while fruit eaten ripe is picked at the first colour change from green to yellow and initial softening.",
          },
          {
            question: "Why does firm guava smell faint?",
            answer: "Aroma develops as the fruit ripens, so firm fruit picked for shipping may smell faint until it ripens.",
          },
          {
            question: "Do guava varieties differ in seeds?",
            answer: "Yes. Seed quantity and texture vary by variety, and some markets prefer fewer or softer seeds.",
          },
          {
            question: "What skin defects should I check for?",
            answer: "Cracks, bruises, soft patches and insect marks.",
          },
        ],
      },
    ],
    // Extending Guava Shelf Life with Careful Post-Harvest Care
    [
      {
        heading: "A fast-ripening fruit",
        text: "Guavas ripen quickly once picked and soften soon after; at 20 °C, shelf life is about 7 days. Fruit for export is harvested mature but firm, at a stage chosen to suit the transit time. Ask your supplier how harvest maturity is judged and agree it, using our [guava sourcing guide](/blog/guava-sourcing-white-vs-pink-flesh-size-and-aroma).",
      },
      {
        heading: "Reference storage conditions",
        text: "General reference conditions for guava are listed below (USDA Agriculture Handbook 66, 2016). Agree transit settings with your supplier and shipping line per order.",
        list: {
          items: [
            "Mature green and partially ripe fruit: 2 to 3 weeks at 8 to 10 °C.",
            "Ripe, soft fruit: about 1 week at 5 to 8 °C.",
            "Relative humidity of 90 to 95 per cent.",
          ],
        },
      },
      {
        heading: "Chilling injury",
        text: "Mature green and partially ripe guavas can be damaged by chilling, with skin scald, pitting, browning of the flesh and failure to ripen; decay also increases. Ripe, soft fruit is less sensitive. Keep unripe fruit in its reference range rather than in ordinary refrigerated storage.",
      },
      {
        heading: "Cool promptly",
        text: "Removing field heat soon after harvest slows ripening and moisture loss, and prompt cooling and avoiding mechanical injury help reduce decay. Fruit should then be kept cool and steady through packing and transit.",
      },
      {
        heading: "Gentle packing",
        text: "Guava skin bruises easily, and bruises turn brown as fruit ripens. Fruit is often wrapped or packed with cushioning in shallow layers. Agree the packing format, fruit count and labelling before packing, and avoid overfilled boxes.",
      },
      {
        heading: "Keep it moving",
        text: "Because guavas have a short window, delays at any step cost shelf life. Plan dispatch, clearance and delivery together, and have your receiving team ready when the shipment lands.",
      },
      {
        heading: "On arrival",
        text: "Check samples for firmness, bruising and any soft or dark patches. Sort by ripeness and sell the most advanced fruit first. Fruit that has ripened too far for retail can still suit [juice or pulp](/blog/guava-in-juices-jams-and-fresh-retail), as our [illustrative case study on fruit for pulp, juice and nectar processing](/case-studies/fruit-for-pulp-juice-and-nectar-processing) describes.",
      },
      {
        heading: "Conclusion",
        text: "Guava keeps longest when it is picked at the right stage, cooled promptly, held at 8 to 10 °C while still firm and handled gently. Avoid chilling unripe fruit, keep shipments moving, and send fruit that ripens too far to juice or pulp.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about guava shelf life.",
        faq: [
          {
            question: "How long does guava keep at room temperature?",
            answer: "About 7 days at 20 °C.",
          },
          {
            question: "What is the best storage temperature for firm guavas?",
            answer: "Mature green and partially ripe guavas are generally held at 8 to 10 °C, where they keep for 2 to 3 weeks.",
          },
          {
            question: "Can ripe guavas be stored colder?",
            answer: "Yes. Ripe, soft fruit is less sensitive to chilling and can be held for about a week at 5 to 8 °C.",
          },
          {
            question: "What does chilling injury look like in guava?",
            answer: "Skin scald, pitting, browning of the flesh and failure to ripen, with more decay.",
          },
          {
            question: "Why do guava bruises matter?",
            answer: "Guava skin bruises easily, and bruises turn brown as the fruit ripens.",
          },
        ],
      },
    ],
    // Guava in Juices, Jams and Fresh Retail
    [
      {
        heading: "Juices and nectars",
        text: "Guava's strong aroma and sweet-tart flavour make it a favourite for nectars and juice blends. Pink-fleshed guavas are often chosen for the colour they give a drink. Processors look for consistent flavour, aroma and yield from batch to batch; our [illustrative case study on fruit for pulp, juice and nectar processing](/case-studies/fruit-for-pulp-juice-and-nectar-processing) shows what they specify.",
      },
      {
        heading: "Jams, jellies and pastes",
        text: "Guava is naturally rich in pectin, which helps jams and jellies set, and it is used for sweet pastes and confectionery in many cuisines. Makers want ripe, aromatic fruit with good flesh colour. Appearance of the skin matters less than flavour and yield.",
      },
      {
        heading: "What processors look for in pulp",
        text: "Pulp buyers also need reliable packing and storage so the pulp keeps its quality; agree the pulp specification and format per order, along with any labelling your market requires. Our [illustrative case study on tropical fruit for smoothie and dessert producers](/case-studies/tropical-fruit-for-smoothie-and-dessert-producers) shows a typical brief. Pulp buyers specify:",
        list: {
          items: [
            "Colour",
            "Aroma",
            "Consistency",
            "How the seeds are removed",
          ],
        },
      },
      {
        heading: "Fresh retail and snacking",
        text: "Fresh guavas are eaten whole or sliced, often with a little salt or spice. Retail buyers want firm, well-shaped fruit with clean skin that ripens to a good fragrance. Tell your supplier whether fruit is for retail or processing so it is selected and graded to suit, using the points in our [guava sourcing guide](/blog/guava-sourcing-white-vs-pink-flesh-size-and-aroma).",
      },
      {
        heading: "Conclusion",
        text: "Guava serves juice and nectar makers, jam and paste producers, pulp buyers and fresh retail, with pink flesh favoured for colour and white flesh often eaten fresh. Tell your supplier the end use so the right type, stage and grade are chosen.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about guava uses.",
        faq: [
          {
            question: "Why is pink guava used for juice?",
            answer: "Pink-fleshed guavas are often chosen for the colour they give a drink, alongside guava's strong aroma.",
          },
          {
            question: "Why does guava suit jams and jellies?",
            answer: "It is naturally rich in pectin, which helps jams and jellies set.",
          },
          {
            question: "What do pulp buyers specify?",
            answer: "Colour, aroma, consistency and how the seeds are removed, together with packing and storage that keep the pulp's quality.",
          },
          {
            question: "How is fresh guava eaten?",
            answer: "Whole or sliced, often with a little salt or spice.",
          },
          {
            question: "Does skin appearance matter for processing?",
            answer: "Less than for retail; flavour, aroma and yield matter more.",
          },
        ],
      },
    ],
  ],
};
