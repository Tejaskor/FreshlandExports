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
        text: "Red chilli powder is only as good as the chillies it is ground from, and varieties differ enormously. Some are prized for deep red colour with gentle heat, others for sharp pungency with a lighter colour; our guide to [Teja, Byadgi and Guntur chilli varieties](/blog/teja-byadgi-and-guntur-understanding-indian-chilli-varieties) explains how the main Indian types compare. The red pigment sits in the pod wall, while the compounds that make chillies hot are concentrated in the pale tissue that holds the seeds, so the proportion of pod, seed and stalk in the mill also shifts the colour and heat of the finished powder. Before comparing prices, tell your supplier what the powder is for and ask which variety or mix they propose.",
      },
      {
        heading: "Chilli powder or chili powder?",
        text: "In some markets, particularly the United States, chili powder on a retail shelf usually means a seasoning blend that also contains cumin, oregano, garlic and salt. Spice buyers sourcing from India normally mean 100 per cent ground dried red chillies. State this plainly in your enquiry and on the specification, so that quotations are for the same product and labels in your market describe it correctly.",
      },
      {
        heading: "Heat and colour are agreed per order",
        text: "Because heat and colour depend on the variety, the harvest and how the pods were dried, there is no single standard level for chilli powder. Buyers normally agree a range for each on the specification sheet, usually as an [ASTA colour value and a pungency figure in Scoville Heat Units](/blog/understanding-asta-colour-and-shu-in-red-chilli-powder), along with the method that will be used to measure them. If your recipe depends on a precise level, keep an approved sample so that later shipments can be checked against it. Our [illustrative case study on a red chilli powder colour and heat specification](/case-studies/red-chilli-powder-colour-and-heat-specification) shows how such a specification can be set out.",
      },
      {
        heading: "Look at the powder itself",
        text: "Good chilli powder looks even in colour and flows freely. A fresh, pungent smell is a good sign. When a sample arrives, watch for:",
        list: {
          items: [
            "Pale or brownish patches, which can point to discoloured pods or old stock",
            "Lumps, which suggest moisture has crept in",
            "Gritty particles or husk when you rub a little between your fingers",
            "A flat or musty smell, which suggests the powder has aged or been stored badly",
            "An unnaturally bright or uniform red, which is worth questioning rather than admiring",
          ],
        },
      },
      {
        heading: "Grind and moisture",
        text: "A fine powder blends smoothly into sauces and seasonings, while a slightly coarser grind can suit marinades and dry rubs. Agree the fineness on the specification sheet, since uneven particles can separate in blends and packs. Set a maximum moisture value too: dry powder resists caking and mould. For reference, India's food standards set a maximum of 11 per cent moisture for chilli powder sold in India (FSSAI Food Products Standards and Food Additives Regulations, 2011, section 2.9.3, Chillies and Capsicum); your own limit may be tighter.",
      },
      {
        heading: "Purity and food-safety testing",
        text: "Ground chilli has a history of adulteration that buyers still test for. In 2003 the European Union introduced emergency measures after the illegal dye Sudan I was found in hot chilli products (Commission Decision 2003/460/EC), and testing for illegal dyes has remained a routine request since. Chillies are also among the spices for which EU law sets limits on aflatoxins and ochratoxin A, toxins produced by moulds that can grow when pods are dried or stored damp (Commission Regulation (EU) 2023/915, entries 1.1.14 and 1.2.18). Requirements differ by destination and change over time, so agree in advance which tests your destination and customers expect, and ask for results per lot. Common requests include:",
        list: {
          items: ["Illegal dyes", "Mycotoxins", "Pesticide residues", "Microbiology"],
        },
      },
      {
        heading: "Packing, quantity and paperwork",
        text: "Chilli powder is sensitive to light and moisture, so agree packing that protects it, such as lined bags or sealed inner liners, along with the pack size and labelling your market requires; our guide to [storage and handling for bulk chilli powder](/blog/storage-and-handling-considerations-for-bulk-chilli-powder) covers its care after delivery. Recognised product standards for chilli powder include Codex CXS 353-2022 (Dried or Dehydrated Chilli Pepper and Paprika) and ISO 972 (Chillies and capsicums, whole or ground), which buyers can refer to when drafting a specification. Freshland Exports supplies red chilli powder with a minimum order quantity of 100 kg to 500 kg. When you [request a quotation](/contact), share your quantity, destination and timing early, together with the documents you need, so that suitable chillies can be set aside for your lot.",
      },
      {
        heading: "Conclusion",
        text: "Buying red chilli powder well starts with the variety and ends with a written specification: colour and heat ranges with their methods, the grind, a moisture limit and the purity tests your market expects. Approve a sample, keep part of it as the reference, and check every later lot and its results against it.",
      },
      {
        heading: "Frequently asked questions",
        text: "Short answers to questions buyers often ask about red chilli powder.",
        faq: [
          {
            question: "Can I have high colour and high heat in one powder?",
            answer: "Sometimes, but the two are independent and often pull in different directions. Many buyers blend varieties to reach a target, so agree the colour and heat ranges together rather than one at a time.",
          },
          {
            question: "Should test results come with every lot?",
            answer: "If a value matters to your product or your market, yes. Agree which results accompany each shipment before production, so the paperwork matches the lot you receive.",
          },
          {
            question: "Is red chilli powder the same as chili powder in the United States?",
            answer: "Not usually. In the United States, chili powder on a retail shelf usually means a seasoning blend that also contains cumin, oregano, garlic and salt, while spice buyers sourcing from India normally mean 100 per cent ground dried red chillies.",
          },
          {
            question: "What moisture limit should chilli powder have?",
            answer: "India's FSSAI standard sets a maximum of 11 per cent moisture for chilli powder sold in India, and your own limit may be tighter. Dry powder resists caking and mould.",
          },
          {
            question: "Why do buyers test chilli powder for illegal dyes?",
            answer: "In 2003 the European Union introduced emergency measures after the illegal dye Sudan I was found in hot chilli products, and testing for illegal dyes has remained a routine request since.",
          },
        ],
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
        text: "ASTA colour value is named after the American Spice Trade Association, whose analytical method it comes from. Under ASTA Method 20.1 (Extractable Color in Capsicums and their Oleoresins), the pigment is extracted from a weighed sample with acetone and the absorbance of the extract is read on a spectrophotometer, so a higher value means more extractable red colour. Buyers who use chilli powder mainly for appearance, for example in sauces, seasonings or coatings, often place more weight on colour value than on heat. ISO 7541 (Paprika, spectrophotometric determination of extractable colour) describes a comparable method for paprika.",
      },
      {
        heading: "What SHU describes",
        text: "Scoville Heat Units express pungency, which comes from capsaicinoids, the compounds that make chillies hot. The original Scoville test relied on a panel tasting diluted extracts. Today pungency is usually measured by high-performance liquid chromatography (HPLC), for example under ASTA Method 21.3 (Pungency of Capsicums and their Oleoresins) or ISO 7543-2 (Chillies and chilli oleoresins, determination of total capsaicinoid content by HPLC), and the measured capsaicinoid content is converted to Scoville units. A higher figure means a hotter powder.",
      },
      {
        heading: "Why results can differ between laboratories",
        text: "Colour and heat figures depend on the method, the sample and how the sample was taken from the lot. Two laboratories using different methods, or the same method with different calculations, can report different numbers for the same powder. When you compare figures from different years or laboratories, ask each one:",
        list: {
          items: [
            "Which method was used",
            "Which calculation was used to convert the result",
            "How the sample was drawn from the lot",
          ],
        },
      },
      {
        heading: "Agreeing a specification",
        text: "If your product depends on colour or heat, settle these points with your supplier before the order, as the [red chilli powder buying guide](/blog/red-chilli-powder-buying-guide-colour-heat-and-grind) also recommends:",
        list: {
          ordered: true,
          items: [
            "State the range you need on the specification sheet rather than a single number",
            "Name the method that will be used",
            "Agree how samples will be drawn from the lot",
            "Ask for the supporting results with each shipment",
            "Keep an approved reference sample, so that a disputed lot can be compared with what you agreed to buy",
          ],
        },
      },
      {
        heading: "Colour and heat over time",
        text: "Colour in chilli powder fades with exposure to light, heat and air, so a value measured at dispatch may not be the value on arrival or months later. Pungency is generally more stable than colour, but it too can change in poor storage. Agree when measurements are taken, at dispatch or on arrival, and how the powder will be packed and stored, so that both sides judge the product on the same basis. Our guide to [storage and handling for bulk chilli powder](/blog/storage-and-handling-considerations-for-bulk-chilli-powder) explains how to slow fading after delivery.",
      },
      {
        heading: "Conclusion",
        text: "ASTA colour value and SHU answer two separate questions, and both depend on the method, the calculation and the sampling behind them. Write the range, the method and the timing of measurement into your specification; our [illustrative case study on a red chilli powder colour and heat specification](/case-studies/red-chilli-powder-colour-and-heat-specification) shows one way to set this out. When you [request a quotation](/contact), include the colour and heat ranges your product needs.",
      },
      {
        heading: "Frequently asked questions",
        text: "Common questions about colour and heat figures in chilli powder.",
        faq: [
          {
            question: "Does a higher ASTA value mean a hotter powder?",
            answer: "No. ASTA colour value measures extractable colour only. Heat is measured separately, as capsaicinoid content expressed in Scoville Heat Units.",
          },
          {
            question: "Which figure should I put on my specification?",
            answer: "The one your product depends on. Colour-led products such as sauces and coatings usually specify colour value; hot sauces and spicy snacks usually specify a heat range. Many buyers specify both.",
          },
          {
            question: "How is chilli pungency measured today?",
            answer: "Usually by high-performance liquid chromatography (HPLC), which measures the capsaicinoid content; the result is then converted to Scoville Heat Units. The original Scoville test relied on a panel tasting diluted extracts.",
          },
          {
            question: "Why can two laboratories report different figures for the same powder?",
            answer: "They may use different methods, or the same method with different calculations, and the sample may have been drawn from the lot differently. Ask each laboratory which method and calculation it used.",
          },
          {
            question: "Does the colour value of chilli powder change after dispatch?",
            answer: "It can. Colour fades with exposure to light, heat and air, so agree whether measurements are taken at dispatch or on arrival. Pungency is generally more stable than colour.",
          },
        ],
      },
    ],
    // Storage and Handling Considerations for Bulk Chilli Powder
    [
      {
        heading: "Why chilli powder fades",
        text: "The red of chilli powder comes from natural pigments that break down when exposed to light, heat and air. Grinding greatly increases the surface open to those conditions, so powder fades and loses pungency faster than whole chillies, which is why the [ASTA colour value](/blog/understanding-asta-colour-and-shu-in-red-chilli-powder) measured at dispatch may not hold months later. Moisture adds a second problem: it causes caking and, in the worst case, mould. Good storage is about slowing all of these changes; for whole pods, see our guide to [storing dried chillies to protect colour and prevent mould](/blog/storing-dried-chillies-to-protect-colour-and-prevent-mould).",
      },
      {
        heading: "Keep it dark",
        text: "Light is one of the main causes of fading. Store chilli powder in opaque or lined packaging, and keep bags away from windows, skylights and open loading bays. If powder is moved into smaller containers for use, choose ones that block light rather than clear plastic or glass left on an open shelf.",
      },
      {
        heading: "Cool, dry and sealed",
        text: "Every exposure to humid air raises the risk of lumps, so the store and the packing both matter. In practice:",
        list: {
          items: [
            "Keep chilli powder in a cool, dry store, away from heat sources such as sun-facing walls, roofs and machinery",
            "Stack bags on pallets off the floor and clear of damp walls",
            "Once a bag is opened, reseal it tightly or transfer the remaining powder to an airtight container",
          ],
        },
      },
      {
        heading: "Moisture, mould and mycotoxins",
        text: "Damp storage does more than cause lumps. Moulds that grow on chillies and chilli powder in warm, humid conditions can produce aflatoxins and ochratoxin A. These cannot be removed by sieving or cooking, and EU law sets maximum levels for both in Capsicum spices: 5 micrograms per kilogram for aflatoxin B1, 10 for total aflatoxins and 20 for ochratoxin A (Commission Regulation (EU) 2023/915, entries 1.1.14 and 1.2.18). Other destinations set their own limits. The best protection after delivery is to keep the powder dry, so that a lot which met its specification on arrival stays within it.",
      },
      {
        heading: "Handling in the factory",
        text: "Chilli powder is an irritant dust. Open and tip bags in a ventilated area, ideally with local dust extraction, and give staff suitable eye and respiratory protection. Keep chilli handling apart from products that must not carry heat or red colour, and clean scoops and hoppers between uses, so that powder does not cross into other lines.",
      },
      {
        heading: "Watch for caking and pests",
        text: "Check stored powder at intervals, and set affected bags aside promptly so that a small problem does not spread through the store. Signs to look for:",
        list: {
          items: [
            "Hard lumps, a dull colour or a musty smell, which show that moisture or age has taken hold",
            "Insects or webbing around seams and the bottom of stacks",
          ],
        },
      },
      {
        heading: "Rotate your stock",
        text: "Use chilli powder in the order it arrived, so that older stock is not left at the back of the store while fresher lots are used first. How long the powder keeps its colour depends on the variety, packing and storage conditions, so agree a best-before period and storage conditions with your supplier for your route and warehouse rather than relying on a single figure.",
      },
      {
        heading: "Conclusion",
        text: "Chilli powder keeps its colour and stays safe when it is kept dark, cool, dry and sealed, handled with dust control and used in the order it arrived. Put the best-before period and storage conditions on the same specification as the grind and tests covered in our [red chilli powder buying guide](/blog/red-chilli-powder-buying-guide-colour-heat-and-grind), and share your route and warehouse conditions when you [request a quotation](/contact).",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about storing chilli powder.",
        faq: [
          {
            question: "Why does chilli powder fade faster than whole chillies?",
            answer: "Grinding greatly increases the surface exposed to light, heat and air, which break down the natural red pigments. Powder also loses pungency faster than whole chillies.",
          },
          {
            question: "Can sieving or cooking remove aflatoxins from chilli powder?",
            answer: "No. Aflatoxins and ochratoxin A cannot be removed by sieving or cooking, so the best protection is to keep the powder dry.",
          },
          {
            question: "What are the EU limits for mycotoxins in chilli powder?",
            answer: "EU law sets 5 micrograms per kilogram for aflatoxin B1, 10 for total aflatoxins and 20 for ochratoxin A in Capsicum spices.",
          },
          {
            question: "What precautions should staff take when handling chilli powder?",
            answer: "Chilli powder is an irritant dust, so open and tip bags in a ventilated area, ideally with local dust extraction, and give staff suitable eye and respiratory protection.",
          },
          {
            question: "How long does chilli powder keep its colour?",
            answer: "It depends on the variety, packing and storage conditions. Agree a best-before period and storage conditions with your supplier for your route and warehouse.",
          },
        ],
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
        text: "The value of ground black pepper lies in its aroma and bite. Good powder smells sharp, woody and warm the moment the bag is opened; a flat or dusty smell suggests old stock or poorly stored pepper. The aroma comes from volatile oil and the bite from piperine, and both begin to fade once the peppercorns are ground, so freshness and packing matter as much as the peppercorns themselves; our guide to [how black peppercorns are ground without losing aroma](/blog/how-black-peppercorns-are-ground-without-losing-aroma) explains why. Where aroma is critical, buyers often specify a minimum volatile oil content.",
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
        text: "Much of the purity of ground pepper is decided before milling. Light, hollow or immature berries carry little oil or piperine and dilute the powder, which is why [quality standards for whole black pepper](/blog/black-pepper-quality-bulk-density-size-and-aroma) limit the proportion of light berries. Ask how the peppercorns are cleaned and graded before grinding. For reference, India's FSSAI standard for ground black pepper sets a maximum of 12 per cent moisture and a minimum volatile oil content of 1.0 ml per 100 g on a dry basis (FSSAI Food Products Standards and Food Additives Regulations, 2011, section 2.9.15, Black, White and Green Peppers). Recognised product standards for ground black pepper include Codex CXS 326-2017 (Black, White and Green Peppers) and ISO 959-1 (Pepper, whole or ground, Part 1: Black pepper), which buyers can refer to when drafting a specification. On the specification, agree limits for:",
        list: {
          items: ["Purity", "Moisture", "Volatile oil", "Extraneous matter"],
        },
      },
      {
        heading: "Microbiology and contaminants",
        text: "Pepper, like other spices dried in the open, can carry microorganisms from the field and the drying floor. The US Food and Drug Administration reported that about 6.6 per cent of imported spice shipments sampled in fiscal years 2007 to 2009 contained Salmonella (US FDA, Risk Profile: Pathogens and Filth in Spices, 2017), which is why many food manufacturers require a microbial reduction treatment and microbiological results for spices used in ready-to-eat foods. Pepper is also among the spices for which EU law sets limits on aflatoxins (Commission Regulation (EU) 2023/915, entry 1.1.14). Agree the microbiological criteria, any treatment requirement and the contaminant tests your market expects before the order is placed.",
      },
      {
        heading: "Packing that protects",
        text: "Ground pepper should be packed promptly in packaging that limits air and moisture, such as lined bags or sealed inner liners. Agree the pack size and labelling for your market, and ask how soon after grinding the powder will be packed. Well-sealed packing is the simplest way to make sure the pepper arrives with the aroma your customers expect. Freshland Exports supplies ground black pepper with a minimum order quantity of 500 kg. When you [request a quotation](/contact), share the grind, pack size, labelling and any treatment requirement, along with the tests your market expects.",
      },
      {
        heading: "Conclusion",
        text: "Good ground black pepper smells sharp and warm, has an even grind and comes from clean, dense peppercorns. Because milling hides what went into the powder, the specification and per-lot results do the work that inspection does for whole pepper. If you are deciding between the two forms, our [illustrative case study on choosing whole or ground pepper](/case-studies/choosing-whole-or-ground-pepper) sets out the trade-offs.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers often raise when specifying ground black pepper.",
        faq: [
          {
            question: "Why does ground pepper need more checks than whole pepper?",
            answer: "Once pepper is milled, light berries, foreign matter and other material can no longer be picked out or seen, so a specification and per-lot results take the place of visual inspection.",
          },
          {
            question: "Do I need steam-treated pepper?",
            answer: "It depends on your product. Pepper that is cooked in your process may not need it; pepper sprinkled onto ready-to-eat foods often does. Your food-safety plan and your customers' requirements should decide, and the requirement should be written into the specification.",
          },
          {
            question: "What gives ground black pepper its aroma and bite?",
            answer: "The aroma comes from volatile oil and the bite from piperine. Both begin to fade once the peppercorns are ground, so freshness and packing matter.",
          },
          {
            question: "What moisture and volatile oil levels does India's standard set for ground black pepper?",
            answer: "India's FSSAI standard sets a maximum of 12 per cent moisture and a minimum volatile oil content of 1.0 ml per 100 g on a dry basis.",
          },
          {
            question: "Why do light berries matter in ground pepper?",
            answer: "Light, hollow or immature berries carry little oil or piperine and dilute the powder. Once ground, they can no longer be picked out, so ask how the peppercorns are cleaned and graded before milling.",
          },
        ],
      },
    ],
    // How Black Peppercorns Are Ground Without Losing Aroma
    [
      {
        heading: "Starting with the right peppercorns",
        text: "Ground pepper begins with dried black peppercorns: the berries of the Piper nigrum vine, harvested before they ripen and dried until the skin turns dark and wrinkled. Their quality sets the ceiling for the powder. Well-dried, dense, aromatic berries give a bright, pungent powder, while light, hollow or old berries give a weak one. Peppercorns are usually selected and checked for aroma, dryness and cleanliness before any grinding begins; our guide to [Malabar and Tellicherry black pepper grades](/blog/malabar-and-tellicherry-indian-black-pepper-grades-explained) explains the Indian grades they are often drawn from.",
      },
      {
        heading: "Cleaning before grinding",
        text: "This step matters more for powder than for whole pepper, because once ground, any impurity is mixed through the whole lot and cannot be picked out. Buyers often ask suppliers to describe their cleaning process and agree cleanliness parameters on the specification sheet. Before milling, peppercorns are cleaned to remove:",
        list: {
          items: [
            "Dust and stones",
            "Stems and pinheads",
            "Other foreign matter",
            "Light berries, which can be separated out",
          ],
        },
      },
      {
        heading: "Reducing the microbial load",
        text: "Cleaning removes dirt but not microorganisms, so pepper intended for ready-to-eat foods is often given a microbial reduction treatment, such as steam treatment, before or after grinding. The method matters for export: the European Union sets its maximum residue level for ethylene oxide in spices at the limit of quantification, 0.1 mg/kg for the sum of ethylene oxide and 2-chloroethanol (Commission Regulation (EU) 2015/868), so pepper treated with it cannot be sold there. If your product needs treated pepper, state the requirement and any method restrictions for your market in the specification, and ask how the treatment is validated.",
      },
      {
        heading: "Why heat is the enemy",
        text: "Grinding creates friction, and friction creates heat. The aromatic oils in pepper are volatile, so excess heat during milling drives off some of the aroma before the powder is even packed. If aroma is critical to your product, ask your supplier how they keep milling temperatures under control and whether volatile oil is measured after grinding. Processors manage the heat through:",
        list: {
          items: ["The choice of mill", "The feed rate", "In some plants, chilled or cryogenic grinding"],
        },
      },
      {
        heading: "Sieving to the required grind",
        text: "After milling, the powder is sieved to separate it into the grind the buyer has ordered, whether fine table pepper or a coarser cracked texture. Consistent sieving gives an even product that blends well and flows smoothly. Agree the grind with your supplier at the start, and confirm it against a sample before the full order is produced. ISO 959-1 (Pepper, whole or ground, Part 1: Black pepper) is a recognised product standard that buyers can refer to when drafting a specification, and our guide to [ground black pepper quality](/blog/ground-black-pepper-quality-aroma-grind-and-purity) covers the other points to check.",
      },
      {
        heading: "Packing straight away",
        text: "Once ground, pepper starts to lose aroma to the air, so it should be packed promptly into sealed, lined packaging and given a lot code that links the bags to their test results. The shorter the time between grinding and packing, the more of the pepper's character reaches the buyer. Ask your supplier how the powder is handled between milling and packing, and how it is stored before dispatch.",
      },
      {
        heading: "Conclusion",
        text: "Keeping pepper's aroma through grinding comes down to good peppercorns, thorough cleaning, controlled milling temperatures and prompt, sealed packing. If you are weighing ground pepper against grinding in-house, our [illustrative case study on choosing whole or ground pepper](/case-studies/choosing-whole-or-ground-pepper) looks at both options. When you [request a quotation](/contact), ask how each of these steps is handled.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask about how pepper is ground.",
        faq: [
          {
            question: "What is black pepper powder ground from?",
            answer: "Dried black peppercorns: the berries of the Piper nigrum vine, harvested before they ripen and dried until the skin turns dark and wrinkled.",
          },
          {
            question: "Why are peppercorns cleaned before grinding rather than after?",
            answer: "Once the pepper is ground, any impurity is mixed through the whole lot and cannot be picked out, so dust, stones, stems and light berries must be removed first.",
          },
          {
            question: "Does grinding heat affect the aroma of pepper?",
            answer: "Yes. The aromatic oils are volatile, so excess heat during milling drives off some of the aroma. Processors manage this through the choice of mill, the feed rate and, in some plants, chilled or cryogenic grinding.",
          },
          {
            question: "Can pepper treated with ethylene oxide be sold in the European Union?",
            answer: "No. The EU sets its maximum residue level for ethylene oxide in spices at the limit of quantification, 0.1 mg/kg, so pepper treated with it cannot be sold there.",
          },
          {
            question: "Why should ground pepper be packed straight away?",
            answer: "Once ground, pepper starts to lose aroma to the air. The shorter the time between grinding and sealed packing, the more of its character reaches the buyer.",
          },
        ],
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
        text: "Sausages, burgers, cured meats and marinated poultry all rely on black pepper for warmth and depth. Because pepper goes into raw meat mixes and brines, processors also pay close attention to its microbiological quality and agree the criteria with their supplier; our [illustrative case study on black pepper for meat and savoury seasoning](/case-studies/black-pepper-for-meat-and-savoury-seasoning) follows this kind of buyer. Meat processors often prefer a grind that suits the product:",
        list: {
          items: ["Fine for smooth emulsions", "Coarser for visible speckling in sausages"],
        },
      },
      {
        heading: "Ready meals, soups and sauces",
        text: "In ready meals, soups, gravies and creamy sauces, ground pepper adds warmth without changing the texture. Manufacturers usually want a fine grind that disperses evenly. In very pale sauces, black pepper shows as dark specks, which is why some recipes use [white pepper powder in sauces and soups](/blog/using-white-pepper-powder-in-sauces-soups-and-seasonings) instead. Because cooking and storage can soften the flavour, many run trial batches with a supplier sample to settle the right quantity and grind for each recipe.",
      },
      {
        heading: "Snacks, dressings and ready-to-eat foods",
        text: "In these products the pepper is often added after any cooking step, so it reaches the consumer without further heat treatment. That is why buyers for ready-to-eat uses commonly specify microbiologically treated pepper and ask for test results with each lot. Typical uses include:",
        list: {
          items: [
            "Chip and nut seasonings, crackers and savoury coatings",
            "Mayonnaise, dips and salad dressings",
          ],
        },
      },
      {
        heading: "Food service and repacking",
        text: "Restaurants, caterers and repackers buy ground pepper in bulk for kitchens and for retail packing under their own labels. These buyers value a consistent product from one delivery to the next. Agree the grind, pack size, labelling and delivery schedule with your supplier to match how quickly the pepper is used or sold, and use our guide to [ground black pepper quality](/blog/ground-black-pepper-quality-aroma-grind-and-purity) to check each delivery.",
      },
      {
        heading: "Conclusion",
        text: "Each use of black pepper powder asks for something different: an even grind for seasoning lines, a grind to suit the product for meat, fine dispersion for sauces and treated pepper for ready-to-eat foods. Test a sample in your own recipe, write the result into the specification, and tell us your application when you [request a quotation](/contact).",
      },
      {
        heading: "Frequently asked questions",
        text: "Practical questions from food manufacturers using ground black pepper.",
        faq: [
          {
            question: "Which grind should I choose?",
            answer: "Fine grinds disperse evenly in sauces, emulsions and seasonings; coarser grinds give visible specks and a stronger burst of flavour in sausages, rubs and toppings. Test the grind in your own product and write the agreed particle-size range into the specification.",
          },
          {
            question: "Can I use whole peppercorns instead?",
            answer: "Some processors grind in-house for maximum aroma. [Whole black pepper](/products/black-pepper) is also available, or ask our team which form suits your process.",
          },
          {
            question: "Why is treated pepper specified for ready-to-eat foods?",
            answer: "In snacks, dressings and similar products the pepper is often added after any cooking step, so it reaches the consumer without further heat treatment.",
          },
          {
            question: "Why do some sauces use white pepper instead of black?",
            answer: "In very pale sauces, black pepper shows as dark specks, so some recipes use white pepper instead.",
          },
          {
            question: "What do meat processors look for in ground black pepper?",
            answer: "A grind that suits the product, fine for smooth emulsions and coarser for visible speckling, and agreed microbiological criteria, because the pepper goes into raw meat mixes and brines.",
          },
        ],
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
        text: "Coriander seeds powder, widely known as dhania powder, is ground from the dried fruits, usually called seeds, of Coriandrum sativum. Importers and processors expect a mild, fresh, lightly citrusy aroma and an even colour from light greenish brown to tan. Because it is often a major ingredient in a curry powder or masala, consistency from one shipment to the next matters a great deal to blenders, as our [illustrative case study on supplying a curry powder blender](/case-studies/supplying-a-curry-powder-blender) shows.",
      },
      {
        heading: "Building the specification",
        text: "Moisture is especially important for a powder that will spend weeks at sea: India's FSSAI standard sets a maximum of 9 per cent for coriander powder sold in India (FSSAI Food Products Standards and Food Additives Regulations, 2011, section 2.9.7, Coriander), and many buyers set their own limit on the specification. Recognised product standards for coriander powder include ISO 2255 (Coriander, whole or ground (powdered), Specification), which buyers can refer to when drafting a specification. Much of the quality is set before milling, as our guide to [sourcing coriander powder from whole seed to ground spice](/blog/sourcing-coriander-powder-from-whole-seed-to-ground-spice) explains. A workable specification for coriander powder usually covers:",
        list: {
          items: [
            "Colour and aroma against a reference sample",
            "Fineness",
            "Moisture",
            "Total and acid-insoluble ash, as indicators of sand and soil",
            "Extraneous matter",
            "Any contaminant and microbiological limits",
          ],
        },
      },
      {
        heading: "Destination requirements",
        text: "Testing requirements are set by the importing country and by your customers, not by the product alone. In the European Union, for example, the general ochratoxin A limit of 15 micrograms per kilogram for dried spices applies to coriander (Commission Regulation (EU) 2023/915, entry 1.2.17), and pesticide residue limits, including the limit for ethylene oxide, apply to spices (Commission Regulation (EU) 2015/868). Many food manufacturers also set microbiological criteria such as Salmonella absence. Confirm the current list for your market, and agree which results will accompany each lot, before the order is confirmed.",
      },
      {
        heading: "Packing for the journey",
        text: "Ground coriander loses its aroma to the air and can cake if it picks up moisture, so packing matters on a long sea journey. Lined bags or sealed inner liners inside a strong outer bag or carton help protect it. Plan how the cargo will be kept dry in the container, away from wet cargo and strong odours, and agree the palletising and marking your warehouse needs.",
      },
      {
        heading: "Documents and labelling",
        text: "Retail or food-service packs must follow the labelling rules of the country of sale. Share these requirements early so they are prepared at packing rather than corrected on arrival. A shipment typically travels with:",
        list: {
          items: [
            "Commercial documents such as the invoice, packing list and bill of lading",
            "Whatever origin, health or analysis certificates your destination and customers require",
            "Bag markings, usually including the product name, net weight, lot code and dates",
          ],
        },
      },
      {
        heading: "Order quantity and planning",
        text: "Freshland Exports supplies coriander seeds powder with a minimum order quantity of 500 kg. When you [request a quotation](/contact), share your quantity, packing, destination and timing early, so that seed can be selected and grinding planned close to dispatch, and the powder reaches you with as much of its aroma as possible.",
      },
      {
        heading: "Conclusion",
        text: "A smooth export order of coriander powder rests on a written specification with an approved sample, the tests your destination requires, packing that keeps the powder dry at sea and documents prepared before packing. Settle these with your supplier before production, and plan grinding close to dispatch so the aroma arrives intact.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions importers often ask before a first order of coriander powder.",
        faq: [
          {
            question: "Which tests should I ask for?",
            answer: "Start with what your destination requires by law, then add what your customers require. Moisture, ash, microbiology, mycotoxins and pesticide residues are common requests; agree the list and the laboratory before production.",
          },
          {
            question: "Can I buy whole seed and grind it myself?",
            answer: "Yes. Whole coriander keeps its aroma longer than powder and suits buyers with their own mills. [Whole coriander seeds](/products/coriander-seeds) are also available.",
          },
          {
            question: "What moisture limit applies to coriander powder?",
            answer: "India's FSSAI standard sets a maximum of 9 per cent for coriander powder sold in India, and many buyers set their own limit on the specification.",
          },
          {
            question: "Which ochratoxin A limit applies to coriander in the European Union?",
            answer: "The general limit of 15 micrograms per kilogram for dried spices applies to coriander.",
          },
          {
            question: "How should coriander powder be packed for a sea journey?",
            answer: "In lined bags or sealed inner liners inside a strong outer bag or carton, kept dry in the container and away from wet cargo and strong odours.",
          },
        ],
      },
    ],
    // Sourcing Coriander Powder: From Whole Seed to Ground Spice
    [
      {
        heading: "It starts with the seed",
        text: "Coriander powder can only be as good as the seed it is ground from. Well-dried seeds with a good colour and fresh aroma give a bright, fragrant powder, while discoloured, weathered, damaged or old seeds give a dull one; our guide to [coriander seed colour, split content and aroma](/blog/coriander-seeds-colour-split-content-and-aroma) covers how to judge the whole seed. Coriander is traded in [different seed types and sizes](/blog/eagle-scooter-and-badami-coriander-grades-explained), and their colour and aroma differ, so ask your supplier which seed they propose for your powder and how they check it before it reaches the mill.",
      },
      {
        heading: "Cleaning before milling",
        text: "Cleaning, sieving and, where needed, destoning remove as much as possible before grinding. For a powder this step is essential, because once the seed is milled, impurities are mixed through the whole lot and cannot be removed. Ash and acid-insoluble ash results on the certificate of analysis are a practical check on how well soil and sand were removed. Whole coriander arrives with:",
        list: {
          items: ["Dust", "Stems and chaff", "Stones", "Split or damaged seeds"],
        },
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
        text: "When a sample arrives, compare it side by side with your reference in daylight:",
        list: {
          ordered: true,
          items: [
            "Look for an even colour without dark specks",
            "Smell it straight away for a fresh citrus note rather than a flat or musty one",
            "Rub it between your fingers to check the fineness and dryness",
            "Make a small test batch in your own blend or recipe, which tells you more than any description",
          ],
        },
      },
      {
        heading: "Building a steady supply",
        text: "Blenders and processors usually value a supplier who can deliver the same colour, aroma and fineness across many orders. Keep an approved reference sample, agree the specification in writing, and review each new lot against it. Regular communication about volumes and timing helps your supplier plan seed buying and grinding to keep your supply consistent through the year. For shipments abroad, our [coriander seeds powder export guide](/blog/coriander-seeds-powder-export-guide-colour-aroma-and-packing) covers testing, packing and documents.",
      },
      {
        heading: "Conclusion",
        text: "Good coriander powder is decided at every step: the seed chosen, how well it is cleaned, how gently it is ground and how soon it is packed. Judge each sample against your reference and keep the specification in writing. When you [request a quotation](/contact), share your timing so grinding can be planned close to dispatch.",
      },
      {
        heading: "Frequently asked questions",
        text: "Questions buyers ask when sourcing coriander powder.",
        faq: [
          {
            question: "Why does seed quality matter so much for coriander powder?",
            answer: "The powder can only be as good as the seed. Well-dried seeds with good colour and fresh aroma give a bright, fragrant powder, while discoloured, weathered, damaged or old seeds give a dull one.",
          },
          {
            question: "Why must coriander be cleaned before it is ground?",
            answer: "Once the seed is milled, impurities are mixed through the whole lot and cannot be removed, so dust, stems, stones and damaged seeds have to come out first.",
          },
          {
            question: "How can I tell how well soil and sand were removed?",
            answer: "Check the ash and acid-insoluble ash results on the certificate of analysis.",
          },
          {
            question: "Why buy coriander powder ground close to dispatch?",
            answer: "Ground coriander loses aroma faster than whole seed, so powder ground close to dispatch arrives fresher than powder taken from long-held stock. A grinding date or lot code on the bags shows how fresh each delivery is.",
          },
          {
            question: "Does grinding affect the aroma of coriander?",
            answer: "It can. Milling generates heat, and too much heat drives off some of the volatile oil that gives the powder its citrusy note.",
          },
        ],
      },
    ],
    // Ground Coriander in Curry Powders, Masalas and Bakery
    [
      {
        heading: "The base of curry powder",
        text: "Ground coriander is often a major ingredient in curry powders and many masalas. Its mild, warm flavour gives blends body and balance, carrying stronger spices such as chilli, cumin and pepper without overpowering them. Because it makes up so much of many blends, its colour and aroma have a direct effect on the look and taste of the finished product.",
      },
      {
        heading: "Masalas and seasoning mixes",
        text: "Seasoning makers also use coriander powder in rubs, marinades and savoury blends for global markets. Blenders generally want a consistent fineness so that the powder mixes evenly and does not separate from other spices in the pack. It appears in a wide range of Indian spice mixes, including:",
        list: {
          items: ["[Garam masala](/products/garam-masala)", "Sambar powder", "Meat masalas", "Vegetable masalas"],
        },
      },
      {
        heading: "Curries, soups and ready meals",
        text: "In curries, gravies, soups and ready meals, ground coriander adds a gentle, rounded flavour and some body to sauces. Food manufacturers use it alongside other spices to build a balanced base, and usually settle the quantity through trial batches with a supplier sample before moving to full production; our [illustrative case study on ground spices for ready meal production](/case-studies/ground-spices-for-ready-meal-production) looks at this kind of buyer. Adding it earlier in cooking gives a mellow background note; adding it later keeps more of its citrus character.",
      },
      {
        heading: "Bakery and pickles",
        text: "Coriander's warm, slightly sweet and citrusy note also suits baked goods such as spiced breads, biscuits and cakes, especially in European and Middle Eastern traditions. In pickles and chutneys, ground coriander adds depth and works well with mustard, fenugreek and chilli. These uses tend to favour a fresh, aromatic powder.",
      },
      {
        heading: "Food service and repacking",
        text: "Restaurants, caterers and repackers buy ground coriander in bulk for everyday cooking and for retail packs under their own labels. They usually look for a consistent product, packing that keeps the powder dry and aromatic, and reliable delivery. Agree the fineness, pack size, labelling and schedule with your supplier to match how quickly the stock is used. Our guide to [sourcing coriander powder from whole seed to ground spice](/blog/sourcing-coriander-powder-from-whole-seed-to-ground-spice) explains how seed, cleaning and grinding shape what you receive.",
      },
      {
        heading: "Conclusion",
        text: "From curry powders and masalas to ready meals, bakery and pickles, ground coriander supplies body and a gentle citrus warmth, so its colour, aroma and fineness show in the finished product. Test a sample in your own blend or recipe, record the agreed fineness, and tell us your application when you [request a quotation](/contact).",
      },
      {
        heading: "Frequently asked questions",
        text: "Common questions from blenders and food manufacturers.",
        faq: [
          {
            question: "How fine should coriander powder be for blending?",
            answer: "Close to the fineness of the other spices in the blend, so that particles do not separate in the pack. Test the powder in your blend and record the agreed fineness on the specification.",
          },
          {
            question: "Is ground coriander the same as dried coriander leaf?",
            answer: "No. Coriander powder is ground from the seeds and tastes warm and citrusy; the dried leaf, often called cilantro in North America, is a different herb with a different flavour.",
          },
          {
            question: "Why does coriander quality matter so much in curry powder?",
            answer: "Coriander is often a major ingredient in curry powders, so its colour and aroma have a direct effect on the look and taste of the finished product.",
          },
          {
            question: "When should ground coriander be added during cooking?",
            answer: "Adding it earlier gives a mellow background note; adding it later keeps more of its citrus character.",
          },
          {
            question: "Which bakery products use ground coriander?",
            answer: "Spiced breads, biscuits and cakes, especially in European and Middle Eastern traditions, where its warm, slightly sweet and citrusy note suits the bake.",
          },
        ],
      },
    ],
  ],
};
