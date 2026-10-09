import type { ArtVariant } from "@/components/media/botanical-art";
import { type CatalogueCategoryId, catalogue, findCatalogueProduct } from "@/features/products/catalogue";
import { categoryMoq } from "@/features/products/moq";

/**
 * Case studies (/case-studies and /case-studies/<slug>).
 *
 * The first entries are ILLUSTRATIVE sourcing scenarios: they explain what a
 * buyer typically prepares for a product category, and describe no real
 * customer, order, date, destination or result. Their `status` keeps the
 * "Illustrative Sourcing Scenario" label visible on cards and pages. When an
 * approved customer story is available, add it with `status: "verified"` and
 * its own documented details; the pages render either kind unchanged.
 *
 * Products are catalogue slugs, so names, images and links come from the
 * catalogue; MOQs come from features/products/moq.
 */

export type CaseStudyStatus = "illustrative" | "verified";

export const statusLabel: Record<CaseStudyStatus, string> = {
  illustrative: "Illustrative Sourcing Scenario",
  verified: "Customer Case Study",
};

type Item = { title: string; text: string };

export type CaseStudy = {
  slug: string;
  status: CaseStudyStatus;
  /** Catalogue categories, in order; the first is the card's label. */
  categories: readonly CatalogueCategoryId[];
  title: string;
  subtitle: string;
  /** Card summary and meta description. */
  summary: string;
  /** Short sourcing topic shown on the card. */
  topic: string;
  /** Catalogue product slugs the scenario covers. */
  products: readonly string[];
  /** Extra words the listing search should match. */
  keywords: readonly string[];
  /** `position`: CSS object-position for the portrait hero crop (default centred). */
  image: { src: string; alt: string; art: ArtVariant; position?: string };
  intro: readonly string[];
  overview: { application: string; focus: string };
  requirements: { intro: string; items: readonly Item[] };
  challenge: { intro: string; points: readonly string[] };
  approach: { intro: string; steps: readonly Item[] };
  /** Buyer considerations; the MOQ card is added from the category rules. */
  considerations: readonly Item[];
  takeaways: readonly string[];
  /** Blog article slugs to show as related reading (must exist). */
  insights: readonly string[];
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "planning-a-botanical-powder-sourcing-brief",
    status: "illustrative",
    categories: ["powders"],
    title: "Planning a Botanical Powder Sourcing Brief",
    subtitle:
      "A practical guide to the product details, technical requirements, packaging preferences and order quantities buyers can prepare before requesting a quotation for botanical powder ingredients.",
    summary:
      "How a food or ingredient buyer might define application, colour, particle size, packaging and documents before asking for a quote on moringa, onion or turmeric powder.",
    topic: "Specification brief for powder ingredients",
    products: ["moringa-powder", "onion-powder", "turmeric-powder"],
    keywords: ["moringa", "onion powder", "turmeric", "particle size", "mesh", "specification", "powder"],
    image: {
      src: "/images/home/categories/Botanicalpowder.webp",
      alt: "Bowls of moringa, turmeric and onion powders with turmeric root and onions on a sunlit stone surface",
      art: "powder",
      // Keeps all three bowls in the portrait crop.
      position: "62% 60%",
    },
    intro: [
      "Botanical powders such as moringa, onion and turmeric powder look simple on a product list, but the same name can describe powders that behave very differently in a recipe. Colour, fineness, moisture and how the powder is packed all affect how well it suits a seasoning blend, a beverage or a food product.",
      "This scenario follows a hypothetical ingredient buyer preparing a brief for these three powders, and shows the details that make a first quotation request clear and comparable.",
    ],
    overview: {
      application: "Seasoning blends, beverage mixes and food manufacturing",
      focus: "Turning a product list into a clear, comparable specification brief",
    },
    requirements: {
      intro: "Before asking for a quotation, a powder buyer usually needs to set out:",
      items: [
        {
          title: "Ingredient identity",
          text: "The exact product: moringa leaf powder, dehydrated onion powder or ground turmeric, rather than a general description such as ‘green powder’ or ‘spice powder’.",
        },
        {
          title: "Intended application",
          text: "Whether the powder goes into a dry blend, a beverage, a sauce or a finished food, since dispersion, colour and flavour matter differently in each.",
        },
        {
          title: "Colour and appearance",
          text: "The colour range the finished product needs, such as the shade of green in moringa or the depth of yellow in turmeric, ideally against a reference sample.",
        },
        {
          title: "Particle size and moisture",
          text: "The fineness (often expressed as a mesh size) and any moisture limit the buyer’s process needs, plus any other agreed technical parameters.",
        },
        {
          title: "Packaging",
          text: "Pack type, pack size and inner lining that suit storage and handling at the buyer’s facility.",
        },
        {
          title: "Documentation",
          text: "The certificates, specification sheets or test reports the buyer’s market or customers require, listed up front.",
        },
      ],
    },
    challenge: {
      intro:
        "In this scenario, we assume the buyer’s first enquiry lists the three powders and a total quantity, but leaves several points open:",
      points: [
        "No particle size or moisture requirement is given, so quotes may describe different grades of powder.",
        "The application is not stated, so it is unclear whether colour or flavour matters most.",
        "Packaging is described only as ‘bulk’, without a pack size or lining.",
        "The documents needed for the buyer’s market are not listed, so they cannot be checked against what is available.",
      ],
    },
    approach: {
      intro: "A structured way to close those gaps before pricing is discussed:",
      steps: [
        {
          title: "Define each powder and its use",
          text: "Name each powder precisely and link it to the product it will go into.",
        },
        {
          title: "Document technical requirements",
          text: "Record colour, particle size, moisture and any other agreed parameters, using a reference sample where one exists.",
        },
        {
          title: "Clarify packaging, quantity and documents",
          text: "Confirm pack type and size, the quantity per powder and the documents required for the destination market.",
        },
        {
          title: "Review specifications and samples",
          text: "Compare the supplier’s available specifications, and samples where relevant, against the brief before confirming.",
        },
        {
          title: "Align the quotation",
          text: "Request a quotation against the agreed brief, so price, specification and packing describe the same product.",
        },
      ],
    },
    considerations: [
      {
        title: "Technical specifications",
        text: "Agree particle size, moisture, colour and any other parameters in writing before ordering.",
      },
      {
        title: "Intended use",
        text: "Share the application so the most suitable powder grade can be discussed.",
      },
      {
        title: "Packaging requirements",
        text: "Powders are sensitive to moisture and light, so agree sealed, suitable packing for storage and transit.",
      },
      {
        title: "Required documentation",
        text: "List the documents your market and customers expect, and confirm them before the order is packed.",
      },
    ],
    takeaways: [
      "A precise product name and application make powder quotations easier to compare.",
      "Writing down colour, particle size and moisture early avoids receiving offers for different grades.",
      "Packaging and documents are part of the specification, not an afterthought.",
      "A brief agreed before pricing keeps the quotation, the sample and the shipment describing the same product.",
    ],
    insights: [
      "onion-powder-for-food-manufacturing-what-to-specify",
      "turmeric-powder-quality-colour-curcumin-and-purity",
      "how-to-judge-moringa-powder-quality-before-you-import",
    ],
  },
  {
    slug: "defining-requirements-for-bulk-spice-procurement",
    status: "illustrative",
    categories: ["spices"],
    title: "Defining Requirements for Bulk Spice Procurement",
    subtitle:
      "How a commercial spice buyer can set out flavour, colour, form and packing expectations before requesting bulk quotations.",
    summary:
      "A walk-through of the requirements a food manufacturer or spice blender might define when sourcing red chilli, black pepper, cumin and coriander seeds in bulk.",
    topic: "Flavour, colour and form requirements for spices",
    products: ["red-chilli", "black-pepper", "cumin-seeds", "coriander-seeds"],
    keywords: ["red chilli", "black pepper", "cumin", "coriander", "spice", "pungency", "aroma", "seasoning"],
    image: {
      src: "/images/home/categories/Spices.webp",
      alt: "Bowls of red chillies, cinnamon, black pepper, cumin, cloves and cardamom on a sunlit stone surface",
      art: "powder",
    },
    intro: [
      "Whole spices are bought for flavour, aroma and colour, and those qualities vary with variety, harvest and handling. Two lots of red chilli or black pepper can differ noticeably in heat, pungency or appearance, which matters to a manufacturer whose recipe depends on them.",
      "This scenario follows a hypothetical spice blender planning a bulk purchase of red chilli, black pepper, cumin seeds and coriander seeds, and shows how clear requirements make supplier discussions more productive.",
    ],
    overview: {
      application: "Spice blends, seasonings and food processing",
      focus: "Agreeing flavour, colour, form and packing before bulk quotations",
    },
    requirements: {
      intro: "A spice buyer usually needs to define, for each spice:",
      items: [
        {
          title: "Product form",
          text: "Whole spice or ground form. The catalogue also lists Red Chilli Powder and Black Pepper Powder for buyers who need them ground.",
        },
        {
          title: "Flavour and colour expectations",
          text: "Heat and colour for red chilli, pungency and aroma for black pepper, and the characteristic aroma expected of cumin and coriander seeds.",
        },
        {
          title: "Appearance and cleanliness",
          text: "Expectations for size, colour uniformity and freedom from foreign matter, agreed against a reference sample where possible.",
        },
        {
          title: "Intended application",
          text: "Whether each spice goes into a blend, a seasoning, a sauce or retail packing, as this shapes which qualities matter most.",
        },
        {
          title: "Quality parameters",
          text: "Any moisture, purity or other parameters the buyer’s own specification or market requires.",
        },
        {
          title: "Packaging and documentation",
          text: "Pack type and size, labelling and the documents needed for import into the destination market.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the buyer’s draft enquiry raises a few common issues:",
      points: [
        "Red chilli is requested ‘with good colour’, without saying whether heat or colour matters more.",
        "It is not clear whether black pepper is needed whole or ground for the blending line.",
        "The same quality wording is used for all four spices, although each is judged differently.",
        "Packaging and the destination market’s document requirements have not yet been confirmed.",
      ],
    },
    approach: {
      intro: "A proposed sequence for turning the draft into a usable brief:",
      steps: [
        {
          title: "Confirm each spice and its use",
          text: "List each spice with its form and the blend or product it will be used in.",
        },
        {
          title: "Set spice-specific requirements",
          text: "Describe the flavour, colour and appearance expected for each spice separately, with reference samples where available.",
        },
        {
          title: "Clarify packing, quantity and documents",
          text: "Agree pack type and size, the quantity for each spice and the import documents required.",
        },
        {
          title: "Review availability and samples",
          text: "Check current availability and, where relevant, review samples against the agreed requirements.",
        },
        {
          title: "Align quotation and shipment planning",
          text: "Request quotations against the brief and plan shipment timing around availability and the agreed packing.",
        },
      ],
    },
    considerations: [
      {
        title: "Spice-specific specifications",
        text: "Judge each spice on its own qualities rather than one shared description.",
      },
      {
        title: "Whole or ground",
        text: "Decide the form for each spice early, as it changes handling, packing and specification.",
      },
      {
        title: "Packaging requirements",
        text: "Agree packing that protects aroma and keeps spices dry through storage and transit.",
      },
      {
        title: "Required documentation",
        text: "Confirm the documents your destination market requires before the order is packed.",
      },
    ],
    takeaways: [
      "Each spice needs its own requirements: heat and colour for chilli, pungency for pepper, aroma for seed spices.",
      "Deciding between whole and ground forms early avoids re-quoting later.",
      "Reference samples give both sides a shared standard for qualities that are hard to describe in words.",
      "Clear packing and document requirements make shipment planning more predictable.",
    ],
    insights: [
      "dried-red-chilli-export-guide-heat-colour-and-stem",
      "black-pepper-quality-bulk-density-size-and-aroma",
      "cumin-seeds-export-guide-purity-colour-and-aroma",
    ],
  },
  {
    slug: "preparing-a-fresh-produce-buying-brief",
    status: "illustrative",
    categories: ["agricultural", "fruits"],
    title: "Preparing a Fresh Produce Buying Brief",
    subtitle:
      "What an importer or distributor can define before sourcing fresh onions, garlic, mangoes and grapes for export.",
    summary:
      "How a produce buyer might plan variety, grade, size, seasonal availability, packing and shipment requirements for fresh vegetables and fruits.",
    topic: "Seasonality, grade and packing for fresh produce",
    products: ["onion", "garlic", "mango", "grapes"],
    keywords: ["onion", "garlic", "mango", "grapes", "fresh", "season", "grade", "size", "shipment", "produce", "fruit"],
    image: {
      src: "/images/home/categories/Agriculturalproduct.webp",
      alt: "Fresh cabbage, onions, garlic, cucumbers, beans and green chillies on a sunlit stone surface",
      art: "field",
    },
    intro: [
      "Fresh produce is seasonal and perishable, so a buying brief has to cover more than the product name. Variety, grade, size, timing and packing all decide whether a consignment suits the buyer’s market when it arrives.",
      "This scenario follows a hypothetical importer planning purchases of fresh onions and garlic alongside mangoes and grapes, and sets out the details that help a supplier confirm what can be offered and when.",
    ],
    overview: {
      application: "Wholesale, retail and food-service distribution",
      focus: "Matching variety, grade, season and packing to the buyer’s market",
    },
    requirements: {
      intro: "A fresh produce buyer usually needs to define:",
      items: [
        {
          title: "Product and variety",
          text: "The exact product and preferred variety or type, such as red or white onions, or a particular mango variety.",
        },
        {
          title: "Grade and size",
          text: "The size range and grade expected, for example bulb size for onions and garlic or fruit size for mangoes and grapes.",
        },
        {
          title: "Seasonal availability",
          text: "When the produce is needed, checked against the harvest season for each product.",
        },
        {
          title: "Quantity",
          text: "The quantity per product and how it might be split across shipments.",
        },
        {
          title: "Packaging",
          text: "Pack type, such as mesh bags or cartons, pack weight and any labelling the buyer’s market needs.",
        },
        {
          title: "Destination and shipping",
          text: "The destination market, its import requirements and the transport conditions the produce will need.",
        },
      ],
    },
    challenge: {
      intro: "In this scenario, we assume the importer’s first enquiry has gaps that are common with fresh produce:",
      points: [
        "Mangoes and grapes are requested for a period that has not been checked against their seasons.",
        "Onion and garlic sizes are described as ‘export quality’ rather than as a size range.",
        "Packing preferences differ between the importer’s wholesale and retail customers but are not separated.",
        "The destination market’s import and documentation requirements are still to be confirmed.",
      ],
    },
    approach: {
      intro: "A general sequence for building a workable fresh produce brief:",
      steps: [
        {
          title: "Define products, varieties and uses",
          text: "List each product with its variety or type and the customers it will supply.",
        },
        {
          title: "Set grade and size requirements",
          text: "Replace general wording with size ranges and grade expectations for each product.",
        },
        {
          title: "Clarify packing, quantity and documents",
          text: "Agree pack types for each customer group, quantities and the documents the destination requires.",
        },
        {
          title: "Check seasonal availability",
          text: "Review availability for each product against the planned timing, and adjust timing where needed.",
        },
        {
          title: "Plan quotation and shipment",
          text: "Align quotations and shipment planning with the agreed requirements and the transport conditions fresh produce needs.",
        },
      ],
    },
    considerations: [
      {
        title: "Grade and size",
        text: "State size ranges and grade expectations for each product rather than general quality wording.",
      },
      {
        title: "Seasonal timing",
        text: "Plan purchases around each product’s season, and allow flexibility for harvest timing.",
      },
      {
        title: "Packaging requirements",
        text: "Choose packing suited to the product, the customer and the journey, such as ventilated packs for onions.",
      },
      {
        title: "Destination requirements",
        text: "Confirm import rules, documents and transport conditions for the destination market before shipment.",
      },
    ],
    takeaways: [
      "Fresh produce briefs work best when they start from the season, not only the product list.",
      "Size ranges and grades give clearer quotations than general quality descriptions.",
      "Different customer groups may need different packing, which is easier to plan in advance.",
      "Confirming destination requirements early helps shipments clear on arrival.",
    ],
    insights: [
      "fresh-onion-export-guide-quality-grading-storage-and-buyer-requirements",
      "fresh-garlic-buying-guide-grades-bulb-size-packaging-and-export-supply",
      "importing-indian-mangoes-varieties-ripeness-and-season",
    ],
  },
];

export function findCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export const caseStudyHref = (slug: string) => `/case-studies/${slug}`;

/** The catalogue heading of a category, e.g. "Botanical Powders". */
export function categoryHeading(id: CatalogueCategoryId) {
  return catalogue.find((category) => category.id === id)?.heading ?? id;
}

/** Catalogue products a case study covers, in its own order. */
export function caseStudyProducts(study: CaseStudy) {
  return study.products.map((slug) => {
    const product = findCatalogueProduct(slug);
    if (!product) throw new Error(`Case study "${study.slug}": no catalogue product "${slug}"`);
    return product;
  });
}

/** The MOQ consideration, one line per category the case study covers. */
export function moqConsideration(study: CaseStudy) {
  return {
    title: "Quantity and MOQ",
    text: `${study.categories
      .map((id) => `${categoryHeading(id)}: ${categoryMoq[id]}`)
      .join("; ")}. The final quantity is confirmed in the written quotation.`,
  };
}
