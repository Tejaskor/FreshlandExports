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
        text: "Indian mangoes are not one product. Alphonso is known for its rich aroma and smooth, fibre-free flesh; Kesar for its sweetness and saffron-coloured pulp; Banganapalli for its larger size and milder flavour. Each suits a different customer, and each comes into season at a different time. Decide which variety your market expects before you ask for prices, and confirm availability of that variety at the time of your enquiry.",
      },
      {
        heading: "Working with a short season",
        text: "The Indian mango season is concentrated into a few months, and the window for any single variety is shorter still. Weather can move the start and end of the season from year to year. Share your intended shipment dates early, and keep some flexibility in your plan, so your supplier can match orders to the fruit that is actually ready.",
      },
      {
        heading: "Ripeness at harvest",
        text: "Mangoes for export are picked mature but still firm, so they can survive handling and ripen on arrival. Fruit picked too early may never develop full flavour; fruit picked too ripe softens and bruises in transit. Ask how maturity is judged before picking, and agree the stage you want for your transit time on the specification sheet.",
      },
      {
        heading: "Check a sample",
        text: "Before a full order, look at a sample for shape typical of the variety, smooth skin without sap burn or black spots, and a firm feel with no soft patches. Cut a fruit once it has ripened to check flesh colour, texture and aroma. A sample tells you far more about a lot than a description can.",
      },
      {
        heading: "Plan the logistics together",
        text: "Mangoes are perishable, so the route matters as much as the fruit. Discuss with your supplier whether the order will travel by air or by sea, how it will be kept cool, and what your destination requires before the fruit can enter. Agree packing, labelling and documents in writing before the harvest begins.",
      },
    ],
    // Mango Export Quality: Treatment, Grading and Inspection
    [
      {
        heading: "Why treatment comes up",
        text: "Many importing countries set plant health rules for fresh mangoes, and some require the fruit to be treated or inspected before it can be shipped. The rules differ from one destination to another and can change, so check the current requirements for your market first, then agree with your supplier which treatment or inspection steps apply to your order.",
      },
      {
        heading: "Grading by size",
        text: "Mangoes are sorted by weight or count so that each box holds fruit of a similar size. Retailers often want an even count per box for display, while processors may accept a wider range. State the size or count you need on your enquiry and confirm it per order, as the spread of sizes available varies with the season.",
      },
      {
        heading: "Colour and skin finish",
        text: "Skin colour depends on the variety and on maturity, and a mature mango is not always fully coloured. Buyers usually look for clean skin with no sap burn, scars, black spots or bruising. Agree what level of minor skin marking is acceptable, because a blemish that matters on a supermarket shelf may not matter for pulping.",
      },
      {
        heading: "Inspection before packing",
        text: "Fruit is checked as it is sorted and packed, and anything soft, split, damaged or showing signs of rot is taken out. Ask what is checked at this stage and how. Where your destination requires an official inspection, build the time it takes into your shipping plan.",
      },
      {
        heading: "Putting it in writing",
        text: "Variety, size, maturity, skin finish, treatment and packing should all be written into the specification sheet for each order. A clear written specification protects both sides and makes it straightforward to resolve any question when the fruit arrives.",
      },
    ],
    // Ripening and Storing Mangoes After Arrival
    [
      {
        heading: "Unload and check promptly",
        text: "Move mangoes out of the container or air freight unit quickly and into suitable storage. Open a few boxes from different parts of the load and check firmness, skin condition and any sign of soft spots or mould. Early checks let you sort the fruit by ripeness and decide which lots to sell first.",
      },
      {
        heading: "Ripening evenly",
        text: "Mangoes ripen best in steady, moderate conditions with good air movement around the boxes. Ripening rooms are often used to bring a whole lot to the same stage before sale. The right conditions depend on the variety and how mature the fruit was at harvest, so agree an approach with your ripening partner.",
      },
      {
        heading: "Signs of ripeness",
        text: "A ripe mango gives slightly under gentle pressure and has a sweet aroma near the stem. Skin colour alone can mislead, as some varieties stay partly green when ripe. Train staff to judge by feel and smell, and handle fruit gently, since ripe mangoes bruise easily.",
      },
      {
        heading: "Avoid the cold trap",
        text: "Unripe mangoes can be damaged by storage that is too cold, which may stop them ripening properly and mark the skin. Once fruit is ripe, cooler storage can help hold it for a short time. Keep mangoes away from strong-smelling goods and out of direct sun.",
      },
      {
        heading: "Selling at the right moment",
        text: "Mangoes have a short window between ripe and overripe. Plan deliveries to stores so fruit reaches the shelf at or near eating ripeness, and rotate stock carefully. Fruit that softens too far can still suit juicing or pulping, which helps reduce waste.",
      },
    ],
  ],
  banana: [
    // Banana Export Guide: Finger Length, Grade and Maturity
    [
      {
        heading: "Hands, clusters and fingers",
        text: "Bananas are bought and packed by the hand or cluster, and each banana is a finger. Buyers usually specify how fingers should be presented — whole hands or smaller clusters — and how many clusters go into a box. Agree this format at the start, as it shapes how the fruit is cut, washed and packed.",
      },
      {
        heading: "Finger length and curvature",
        text: "Finger length and thickness are the main size measures, and retail buyers often want them consistent across a box. Curvature varies naturally by variety. State the length range and appearance you need on the specification sheet, and confirm it against a sample, because what is available varies with variety and season.",
      },
      {
        heading: "Maturity at harvest",
        text: "Export bananas are harvested mature but green, judged by the fullness of the fingers and the age of the bunch. The right stage depends on how long the fruit will spend in transit. Picked too full, bananas may ripen on the way; picked too lean, they may lack flavour. Agree the maturity stage per order.",
      },
      {
        heading: "Peel condition",
        text: "Look for clean, even green peel without scars, bruises, latex stains or crown rot. Small marks may be acceptable for some markets and not for others. The crown, where fingers join, should be cleanly cut and dry, as this is where rot often begins.",
      },
      {
        heading: "What to send with your enquiry",
        text: "Include the variety, finger length, cluster format, box weight, maturity stage, labelling needs and your expected shipment schedule. The clearer the specification, the easier it is for your supplier to confirm what can be supplied and keep shipments consistent.",
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
        text: "Bananas are carried in refrigerated containers held at a steady cool setting with good air circulation. Fruit that gets too warm may start ripening early; fruit that gets too cold can suffer chilling injury, which dulls the peel and spoils ripening. Agree the transit settings with your supplier and shipping line for each order.",
      },
      {
        heading: "Controlled ripening at destination",
        text: "On arrival, bananas are usually moved into ripening rooms where conditions are managed to bring the whole load through ripening together. Ripening programmes differ with variety, maturity and how quickly the fruit is needed, so work them out with your ripening partner rather than relying on a single fixed recipe.",
      },
      {
        heading: "Handling the ripening fruit",
        text: "As bananas turn yellow they become softer and mark easily. Move boxes gently, avoid stacking too high, and keep the fruit away from heat and direct sun. Uneven ripening in a box is often a sign of mixed maturity or temperature swings, so note it and raise it with your supplier.",
      },
    ],
    // Cavendish, Robusta and Red Bananas: Choosing for Your Market
    [
      {
        heading: "Cavendish types",
        text: "Cavendish bananas are the familiar long, curved yellow banana found in most supermarkets. They are popular for retail because they pack well, ripen predictably and look uniform on the shelf. Many buyers new to Indian bananas start here because customers already know the fruit.",
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
        text: "For retail, appearance, finger size and ripening consistency matter most. For processing into chips, purée or dried products, flesh quality and maturity may matter more than peel finish. Tell your supplier what the bananas will be used for, as this changes how they are selected and packed.",
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
        text: "Grapes do not continue to sweeten after picking, so they must be harvested when they have reached the right sugar level for the variety. Many buyers also look at the balance between sweetness and acidity, which shapes flavour. Agree how sweetness will be checked and recorded on the specification sheet before harvest.",
      },
      {
        heading: "Firmness and attachment",
        text: "Good table grapes are firm and crisp, and stay attached to the stem when the bunch is handled. Soft berries, loose berries or splits shorten shelf life and look poor in a punnet. When you check a sample, shake a bunch gently and press a few berries to judge both.",
      },
      {
        heading: "Even colour across the bunch",
        text: "Green grapes should be an even green to yellow-green; black and red grapes should be coloured evenly from shoulder to tip. Patchy colour can point to uneven ripening. Agree the colour you expect and check it against a sample, remembering that colour can vary with weather during the season.",
      },
      {
        heading: "Stems and bloom",
        text: "Green, fresh-looking stems show grapes were handled and cooled promptly; brown, dry stems suggest age or poor cold handling. Many grapes also carry a natural pale bloom on the skin. Ask for careful handling during packing so the bloom is not rubbed away.",
      },
    ],
    // Cold Storage and Packing That Keep Grapes Fresh
    [
      {
        heading: "Cool quickly after harvest",
        text: "Grapes lose freshness quickly while they are warm. Rapid pre-cooling soon after picking removes field heat and slows moisture loss from berries and stems. Ask your supplier how quickly grapes are cooled after harvest, as this step has a large effect on how well they travel.",
      },
      {
        heading: "Packing that protects",
        text: "Grapes are commonly packed in punnets or bags inside ventilated boxes, which protect the bunches and let cold air reach the fruit. The packing format affects both shelf presentation and how much handling the grapes need at destination. Agree punnet or bag type, box weight and labelling before packing starts.",
      },
      {
        heading: "Guarding against mould",
        text: "Moisture and long voyages can encourage mould on grapes. Exporters commonly use measures inside the box to help control it, and destinations may set rules on what is allowed. Check the requirements for your market and confirm the approach with your supplier per order.",
      },
      {
        heading: "Steady cold through the chain",
        text: "Once cooled, grapes should stay cold and steady all the way to the store. Each break in the cold chain causes condensation and speeds decay. Agree the transit settings with your supplier and shipping line, and keep the fruit in cold storage promptly after unloading.",
      },
      {
        heading: "On arrival",
        text: "Check samples from different parts of the load for stem colour, berry firmness, loose berries and any sign of mould. Move the fruit into cold storage quickly and sell in rotation, oldest first.",
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
        text: "Black seedless grapes appeal to customers who want a deeper, richer flavour and a striking shelf colour. Even colour across the bunch is especially important, as uncoloured berries stand out. Ask for a sample during the season to judge colour and sweetness together.",
      },
      {
        heading: "Red grapes",
        text: "Red grapes sit between green and black in flavour and look attractive in mixed punnets and fruit displays. Colour development depends on weather, so some seasons give more evenly coloured fruit than others. Agree acceptable colour standards in writing before the order is packed.",
      },
      {
        heading: "Timing the Indian season",
        text: "Indian table grapes are harvested in a defined season, and the timing of each variety shifts a little from year to year. Many buyers plan Indian grapes to fill a gap in their supply calendar. Share your intended weeks early so your supplier can match orders to the harvest.",
      },
      {
        heading: "Matching grapes to the channel",
        text: "Supermarkets, wholesale markets and food-service buyers each want different pack sizes and presentations. Tell your supplier where the grapes will be sold so that variety, bunch size and packing are chosen to suit.",
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
        heading: "Size and weight",
        text: "Pomegranates are graded by weight or count so that boxes hold fruit of a similar size. Larger fruit often suits premium retail, while smaller fruit may suit other channels or processing. State the size or count you need and confirm it per order, as the spread of sizes varies by season.",
      },
      {
        heading: "Skin and crown",
        text: "The rind should be bright, smooth and free from cracks, splits, sunburn and deep scars. Minor surface marks may be acceptable for some buyers, so agree a tolerance on the specification sheet. The crown at the top should be intact and dry.",
      },
      {
        heading: "Weight for size",
        text: "A good pomegranate feels heavy for its size, which usually means juicy arils. Fruit that feels light may be drying out. When checking a sample, compare fruits of similar size by hand — it is a quick, practical test.",
      },
    ],
    // Why Pomegranates Travel Well, and How to Keep Them Fresh
    [
      {
        heading: "A naturally sturdy fruit",
        text: "The thick rind of a pomegranate protects the arils inside, and the fruit does not ripen further after harvest. This makes pomegranates better suited to longer journeys than many softer fruits. They still need care, though, as the rind can lose moisture and harden over time.",
      },
      {
        heading: "Cool storage with moisture in the air",
        text: "Pomegranates keep best in cool storage where the air is not too dry, which helps prevent the rind shrivelling and losing its shine. Very cold storage for long periods can cause chilling damage. Agree the transit and storage conditions with your supplier and shipping line for each order.",
      },
      {
        heading: "Preventing splits",
        text: "Splits often start before harvest, but rough handling can open small cracks further. Fruit should be packed in single layers or with dividers so it does not knock together. Remove any split fruit at packing, as exposed arils can attract mould that spreads.",
      },
      {
        heading: "Packing and ventilation",
        text: "Ventilated cartons let cool air reach every fruit while protecting it from knocks. Some exporters also use liners that help limit moisture loss. Agree the carton type, liner and fruit count per box before packing.",
      },
      {
        heading: "On arrival",
        text: "Check samples for rind condition, splits, decay at the crown and aril colour. Keep fruit cool and away from direct sun, and sell in rotation. Fruit with minor rind marks can often go to aril extraction rather than whole-fruit retail.",
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
        text: "Processors who sell fresh arils in tubs care most about what is inside — deep colour, juicy arils and soft seeds that are easy to eat. Rind marks matter less, as the rind is removed. Fruit that is sound inside but less perfect outside can suit this use well.",
      },
      {
        heading: "Juice and processing",
        text: "Juice processors look for high juice content, good colour and a flavour that suits their blend. They often buy larger volumes and may accept a wider range of sizes. Agree how the fruit will be checked and what defects are acceptable before the order is packed.",
      },
      {
        heading: "Tell your supplier the end use",
        text: "Because each channel values different qualities, say at the start whether the fruit is for retail, arils or juice. Your supplier can then select and grade accordingly, rather than sending retail-grade fruit to a processor or the reverse.",
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
        text: "The balance between sugar and acid shapes how an orange tastes — too much acid and it is sharp, too little and it can taste flat. Oranges do not improve much after picking, so they must be harvested at the right maturity. Taste a sample and agree a flavour standard with your supplier.",
      },
      {
        heading: "Peel colour and texture",
        text: "Peel colour depends on variety and on growing conditions, and a fully mature orange is not always fully orange. Buyers generally look for firm, fresh peel without soft spots, deep scars or mould. Agree what colour and surface marks are acceptable for your market.",
      },
      {
        heading: "Size grading",
        text: "Oranges are sorted by diameter or count so each carton holds fruit of a similar size. Retail packs, juice bars and processors often want different sizes. State the size range you need and confirm availability per order, as sizes vary through the season.",
      },
      {
        heading: "Check before you commit",
        text: "Ask for a sample and check it for weight, peel condition, aroma and flavour. Cut a few fruits to look at juiciness, seed count and segment colour. A short sample check now saves disputes later.",
      },
    ],
    // Storing Oranges to Preserve Juiciness and Peel Quality
    [
      {
        heading: "Moisture loss is the main risk",
        text: "Oranges lose water through the peel over time, which makes them soft, light and dull. Keeping them cool slows this down. Cartons should not sit in warm yards or direct sun at any stage, from packing house to warehouse.",
      },
      {
        heading: "Cool, steady storage",
        text: "Cool storage helps oranges keep their firmness and fresh peel, but citrus can be damaged by conditions that are too cold for the variety. Agree the transit and storage settings with your supplier and shipping line for each order, and keep them steady to avoid condensation.",
      },
      {
        heading: "Ventilated packing",
        text: "Ventilated cartons let air circulate and carry away moisture and heat. Pack fruit firmly enough that it does not roll and bruise, but not so tightly that it is crushed. Agree carton type, count and labelling before packing begins.",
      },
      {
        heading: "Watch for mould",
        text: "A single mouldy orange can spread spores through a carton. Fruit with cuts or bruises is most at risk, so careful handling at every stage matters. On arrival, check samples from different parts of the load and remove affected fruit quickly.",
      },
      {
        heading: "Keep away from strong odours",
        text: "Citrus can pick up odours from other goods and can pass its own scent on. Store oranges separately from strongly flavoured products where you can, and rotate stock so older fruit is sold first.",
      },
    ],
    // Oranges for the Fruit Bowl, Juice Bars and Processing
    [
      {
        heading: "Fresh retail",
        text: "Retail customers choose oranges by eye and by hand, so bright peel, even size and a firm, heavy feel matter most. Easy-peeling types are popular for snacking. Uniform cartons with attractive fruit help shelf presentation and reduce waste.",
      },
      {
        heading: "Juice bars and food service",
        text: "Juice bars want plenty of juice with a pleasant, consistent flavour. Peel appearance matters less, but a bitter or sharp taste can spoil a drink. Size can matter for juicing machines, so mention any limits when you send your enquiry.",
      },
      {
        heading: "Processing",
        text: "Processors making juice, segments or flavourings buy for yield and flavour. They may accept a wider range of sizes and minor peel marks, but expect consistent juice quality. Agree how the fruit will be checked and what defects are acceptable before the order is packed.",
      },
      {
        heading: "Writing the right specification",
        text: "Because each buyer values different qualities, state the end use on your enquiry along with variety, size, peel standard and packing. Your supplier can then select fruit to suit, and both sides know what to expect when it arrives.",
      },
    ],
  ],
  chikoo: [
    // Chikoo (Sapota) Export Guide: Maturity and Sweetness
    [
      {
        heading: "Know the fruit",
        text: "Chikoo, also called sapota, is a small brown fruit with a rough, sandy-looking skin and soft, sweet flesh with a caramel-like flavour. It looks much the same from outside whether it is mature or not, which makes judging maturity at harvest the most important part of buying it.",
      },
      {
        heading: "Signs of maturity",
        text: "Growers judge maturity by changes in skin colour and texture, and by how the fruit responds when the skin is lightly scratched. Immature chikoo may never ripen properly and can taste astringent. Ask your supplier how maturity is checked before picking, and agree the stage on the specification sheet.",
      },
      {
        heading: "Why timing matters for flavour",
        text: "Chikoo is picked mature but firm and ripens after harvest. Picked too early, it may stay hard or bland; picked too late, it softens before it reaches the shelf. The right stage depends on transit time, so plan the harvest and shipment together.",
      },
      {
        heading: "Checking a sample",
        text: "Look for fruit of an even size and shape with clean, unbroken skin and no cracks or soft patches. Once a sample has ripened, cut a fruit to check flesh colour, sweetness and texture. A smooth, grainy-sweet flesh without astringency is what most buyers want.",
      },
      {
        heading: "Size and packing",
        text: "Chikoo is graded by size so each box holds similar fruit. Agree size, box type and fruit count per box per order, and remember that availability varies by season.",
      },
    ],
    // Handling Chikoo: A Delicate Fruit That Ripens Fast
    [
      {
        heading: "A short window",
        text: "Once chikoo starts to ripen it moves quickly from firm to soft, and soft fruit bruises and spoils easily. Every step after harvest is about slowing that process and avoiding damage. Shipments need careful planning so fruit arrives with enough life left for sale.",
      },
      {
        heading: "Gentle packing",
        text: "Chikoo skin is thin and marks easily. Fruit should be packed in shallow layers, with cushioning or dividers so it does not rub or press together. Avoid overfilled boxes and deep stacks, and agree the box type and fruit count with your supplier before packing.",
      },
      {
        heading: "Keep it cool",
        text: "Cool storage slows ripening and helps chikoo hold its condition in transit. Fruit should be cooled promptly after packing and kept cool without breaks. Agree the transit settings with your supplier and shipping line for each order, as very cold storage can harm the fruit.",
      },
      {
        heading: "On arrival",
        text: "Unload promptly and check samples for softness, bruising and any sign of mould around the stem. Sort fruit by ripeness so the softest lots are sold or used first. Ripe chikoo is best handled as little as possible.",
      },
      {
        heading: "A use for softer fruit",
        text: "Fruit that has ripened beyond the retail stage can still be well suited to pulp, desserts and shakes. Having a processing outlet in mind helps reduce waste on a fruit with such a short shelf window.",
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
        text: "Chikoo milkshakes are a favourite in many cafés and juice bars. For this use, ripe fruit with soft, sweet flesh works best, and appearance matters less than flavour. Food-service buyers may prefer ready pulp to save preparation time.",
      },
      {
        heading: "Ice cream and frozen desserts",
        text: "Ice cream makers use chikoo pulp for its natural sweetness and flavour. They usually want consistent colour, flavour and texture across batches. Agree the pulp specification and packing format with your supplier, and confirm it per order.",
      },
      {
        heading: "Fresh fruit and desserts",
        text: "Ripe chikoo is also eaten fresh, scooped from the skin, and used in fruit salads, puddings and sweets. Retail buyers want well-shaped fruit that ripens evenly. Tell your supplier whether you need whole fruit or pulp so the right stage and handling are chosen.",
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
        text: "Papayas picked fully green may soften without developing good flavour or colour. Fruit picked with a lot of yellow ripens quickly and bruises in transit. Getting the harvest stage right is the single most important step in a papaya shipment.",
      },
      {
        heading: "Weight and size grading",
        text: "Papayas range widely in size by variety, from smaller single-serve fruit to large fruit for cutting. Buyers grade by weight so each box is consistent. State the weight range you need and confirm availability per order, as sizes vary with variety and season.",
      },
      {
        heading: "Firmness and skin",
        text: "Fruit should be firm, smooth and free from cuts, deep scars, sunburn and soft or sunken spots. Latex marks and small blemishes may be acceptable for some channels, so agree a tolerance on the specification sheet. Sunken patches can be a sign of disease and should be checked.",
      },
      {
        heading: "Checking a sample",
        text: "Once a sample has ripened, cut fruit to check flesh colour, sweetness and texture. Most buyers want even orange or red flesh and a clean seed cavity. A sample check helps match variety and maturity to your market.",
      },
    ],
    // Shipping Papaya: Temperature, Ripening and Handling
    [
      {
        heading: "Steady conditions in transit",
        text: "Papayas travel best in cool, steady conditions that slow ripening without chilling the fruit. Fruit held too cold can fail to ripen properly and develop skin damage, while fruit held too warm ripens on the way. Agree transit settings with your supplier and shipping line for each order.",
      },
      {
        heading: "Protective packing",
        text: "Papaya skin bruises and scars easily. Fruit is often wrapped individually or packed with cushioning in single layers so it does not knock together. Agree the wrap, box type and fruit count per box before packing.",
      },
      {
        heading: "Ripening after arrival",
        text: "Papayas picked at colour break continue to ripen at destination. Keep them at moderate room conditions with good airflow, away from direct sun, and check them daily. Yellow spreading across the skin and a slight give under gentle pressure show the fruit is close to ripe.",
      },
      {
        heading: "Gentle handling",
        text: "Each drop or squeeze leaves a mark that shows up as the fruit ripens. Train staff to lift boxes rather than slide or throw them, and avoid stacking too high. Careful handling at every stage pays off in better-looking fruit on the shelf.",
      },
      {
        heading: "Sorting on arrival",
        text: "Check samples from across the load for firmness, colour stage and any soft or sunken spots. Sort by ripeness so that fruit closest to ready is sold first, and move overripe fruit to cutting or pulping.",
      },
    ],
    // Papaya for Fresh Retail, Fruit Salads and Pulp
    [
      {
        heading: "Whole fruit for retail",
        text: "Retail buyers want attractive, evenly shaped papayas that ripen to a good colour and flavour. Smaller fruit often suits households, while larger fruit may suit markets where papaya is bought to share. Tell your supplier the size your customers prefer.",
      },
      {
        heading: "Fresh-cut cups and fruit salads",
        text: "Fresh-cut processors need fruit that ripens evenly, with firm, colourful flesh that holds its shape when cubed. Skin marks matter less, but flesh texture and colour matter a great deal. Consistent ripeness across a delivery helps them plan production.",
      },
      {
        heading: "Pulp and purée",
        text: "Papaya pulp is used in drinks, smoothies, desserts and baby food blends. Processors look for good colour, flavour and yield rather than appearance. Agree the pulp specification and packing format per order, and confirm any labelling your market requires.",
      },
      {
        heading: "Choosing the right fruit for the job",
        text: "Because each buyer values different qualities, state the end use on your enquiry. Your supplier can then choose variety, size and maturity to suit, so fruit reaches the right channel in the right condition.",
      },
    ],
  ],
  guava: [
    // Guava Sourcing: White vs Pink Flesh, Size and Aroma
    [
      {
        heading: "White or pink flesh",
        text: "Guavas are broadly divided into white-fleshed and pink-fleshed types. White guavas are often eaten fresh and valued for their crisp texture and sweet flavour; pink guavas are prized for colour and aroma and are popular for juice and processing. Decide which your market wants, then confirm which varieties are available for your dates.",
      },
      {
        heading: "Size and shape",
        text: "Guavas are graded by size so each box holds similar fruit. Buyers usually look for round to slightly pear-shaped fruit with a regular form. State the size range you need and confirm it per order, as sizes vary with variety and season.",
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
    ],
    // Extending Guava Shelf Life with Careful Post-Harvest Care
    [
      {
        heading: "A fast-ripening fruit",
        text: "Guavas ripen quickly once picked and soften soon after. Fruit for export is harvested mature but firm, at a stage chosen to suit the transit time. Ask your supplier how harvest maturity is judged and agree it on the specification sheet.",
      },
      {
        heading: "Cool promptly",
        text: "Removing field heat soon after harvest slows ripening and moisture loss. Fruit should then be kept cool and steady through packing and transit. Agree transit settings with your supplier and shipping line per order, as storage that is too cold can damage the skin.",
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
        text: "Check samples for firmness, bruising and any soft or dark patches. Sort by ripeness and sell the most advanced fruit first. Fruit that has ripened too far for retail can still suit juice or pulp.",
      },
    ],
    // Guava in Juices, Jams and Fresh Retail
    [
      {
        heading: "Juices and nectars",
        text: "Guava's strong aroma and sweet-tart flavour make it a favourite for nectars and juice blends. Pink-fleshed guavas are often chosen for the colour they give a drink. Processors look for consistent flavour, aroma and yield from batch to batch.",
      },
      {
        heading: "Jams, jellies and pastes",
        text: "Guava is naturally rich in pectin, which helps jams and jellies set, and it is used for sweet pastes and confectionery in many cuisines. Makers want ripe, aromatic fruit with good flesh colour. Appearance of the skin matters less than flavour and yield.",
      },
      {
        heading: "What processors look for in pulp",
        text: "Pulp buyers specify colour, aroma, consistency and how the seeds are removed. They also need reliable packing and storage so the pulp keeps its quality. Agree the pulp specification and format per order, along with any labelling your market requires.",
      },
      {
        heading: "Fresh retail and snacking",
        text: "Fresh guavas are eaten whole or sliced, often with a little salt or spice. Retail buyers want firm, well-shaped fruit with clean skin that ripens to a good fragrance. Tell your supplier whether fruit is for retail or processing so it is selected and graded to suit.",
      },
    ],
  ],
};
