import type { Faq } from "@/features/moringa/data";
import { catalogue } from "@/features/products/catalogue";

/** The one heading every FAQ section on the site shows. */
export const faqHeading = "Frequently Asked Questions";

/**
 * The site's main FAQs: the 15 questions on /faqs, and the five the homepage
 * shows. Homepage answers reuse these, so each answer is written once.
 */

const families = catalogue.map((category) => category.heading);

const products: Faq = {
  question: "What products does Freshland Exports offer?",
  answer: `The website features four main product families: ${families.slice(0, -1).join(", ")} and ${families.at(-1)}. Product availability and details should be checked on the relevant product pages.`,
};

/**
 * The general MOQ answer, shared by the homepage and /faqs. Approved wording:
 * keep the figures in step with categoryMoq in features/products/moq.ts.
 * Product pages show their own MOQ (e.g. Red Chilli Powder's).
 */
const moq: Faq = {
  question: "What is the minimum order quantity (MOQ)?",
  answer:
    "MOQ varies by product category. Botanical Powders: 500 kg; Fresh Agricultural Produce: 500 kg–1 MT; Fresh Fruits: 500 kg; Whole Spices: 100–500 kg. Product-specific MOQs, where applicable, take precedence. Please check the relevant product page for details.",
};

const quotation: Faq = {
  question: "Can I request a quotation for bulk orders?",
  answer:
    "Yes. Submit an enquiry through the relevant product page or the contact form. Include your required quantity, destination, packaging preferences and specifications so the team can assess your requirements.",
};

const international: Faq = {
  question: "Can international buyers place enquiries?",
  answer:
    "Yes. International buyers can submit enquiries through the website. Include your destination country, product requirements, order quantity and any applicable import or documentation requirements.",
};

/** The 15 main questions on /faqs, in order. */
export const mainFaqs: readonly Faq[] = [
  {
    question: "What is Freshland Exports?",
    answer:
      "Freshland Exports supplies agricultural products, botanical powders, fruits and spices to wholesale, commercial and international buyers. Explore the product catalogue to learn more about the available products.",
  },
  products,
  {
    question: "Who can purchase products from Freshland Exports?",
    answer:
      "The website is intended for B2B buyers, including wholesalers, food processors, distributors, food-service businesses and other commercial buyers. Contact the team to discuss your specific requirements.",
  },
  {
    question: "How can I enquire about a product?",
    answer:
      "Visit the relevant product detail page and use its enquiry or quotation form. Include the product name, required quantity, destination country and any applicable specifications.",
  },
  moq,
  quotation,
  {
    question: "How can I obtain product specifications?",
    answer:
      "Visit the product detail page and contact the team to request the specifications that apply to your selected product. Confirm all technical requirements before placing an order.",
  },
  {
    question: "Are quality certificates or test reports available?",
    answer:
      "Documentation depends on the product and the applicable requirements. Contact Freshland Exports to confirm which current certificates, test reports or other quality documents are available for your specific order.",
  },
  {
    question: "What packaging options are available?",
    answer:
      "Packaging depends on the product and the order. Share your preferred pack size, packaging format and intended application so the team can confirm the available options.",
  },
  {
    question: "Can I request private-label packaging?",
    answer:
      "If you need private-label or customised packaging, mention it in your enquiry. Availability, minimum quantities, artwork requirements and any other conditions are confirmed by the team.",
  },
  {
    question: "Can I request product samples?",
    answer:
      "Contact Freshland Exports to ask whether samples are available for your selected product. Sample availability, cost, quantity and shipping arrangements are confirmed before proceeding.",
  },
  international,
  {
    question: "Which export documents can be provided?",
    answer:
      "Documentation depends on the product, destination market, shipment and applicable regulations. Contact the team to confirm which documents can be provided for your order.",
  },
  {
    question: "How long does shipping or delivery take?",
    answer:
      "Delivery timelines depend on product availability, order preparation, destination and shipping arrangements. Request an estimated timeline for your specific order before confirming it.",
  },
  {
    question: "How can I contact Freshland Exports?",
    answer:
      "Use the contact form or the contact details shown on this website. For a faster, more relevant response, include your company details, destination country, the products you need and your estimated order quantity.",
  },
];

/** The homepage's five questions: shorter versions of the main ones. */
export const homeFaqs: readonly Faq[] = [
  products,
  moq,
  { question: "How can I request a quotation for bulk orders?", answer: quotation.answer },
  {
    question: "Are product specifications and quality documents available?",
    answer:
      "Specifications can be requested for each product through its product page or the contact form. Certificates, test reports and other quality documents depend on the product and the order, so confirm which are available before placing an order.",
  },
  { question: "Can international buyers enquire about products?", answer: international.answer },
];
