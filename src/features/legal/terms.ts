/**
 * Terms & Conditions content (/terms-and-conditions).
 *
 * General website-use terms only: commercial terms (price, payment,
 * delivery, specifications) belong in each order's written agreement.
 * Minimum order quantities are read from features/products/moq so they match
 * the product pages. A governing-law and disputes section is deliberately
 * absent until the business confirms its jurisdiction and dispute terms.
 * A practical draft for business and legal review, not legal advice.
 */

import type { LegalSection } from "@/features/legal/types";
import { catalogue } from "@/features/products/catalogue";
import { categoryMoq, findMoq } from "@/features/products/moq";

/** ISO date of the business-approved version. Shown only once set. */
export const termsLastUpdated: string | null = null;

export const termsIntro =
  "These terms govern your use of the Freshland Exports website and the product information and enquiry services provided through it.";

/** Products whose published MOQ differs from their category's. */
const moqExceptions = catalogue.flatMap((category) =>
  category.products
    .filter((product) => findMoq(product.slug) !== categoryMoq[category.id])
    .map((product) => `${product.name}: ${findMoq(product.slug)}`),
);

export const termsSections: readonly LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    blocks: [
      {
        type: "p",
        text: "These Terms & Conditions govern your access to and use of the Freshland Exports website (“we”, “us” or “our”). Please read them before using the website or submitting an enquiry. By using the website, you agree to use it in line with these terms.",
      },
    ],
  },
  {
    id: "about-our-website",
    title: "About Our Website",
    blocks: [
      {
        type: "p",
        text: "Our website provides information about Freshland Exports and our range of fresh agricultural produce, botanical powders, fresh fruits and whole spices, together with ways to contact us, request a quotation or download our brochure.",
      },
    ],
  },
  {
    id: "website-use",
    title: "Website Use",
    blocks: [
      { type: "p", text: "You may use the website only for lawful purposes. When using it, you must not:" },
      {
        type: "list",
        items: [
          "Attempt to gain unauthorised access to the website, its servers or any connected systems.",
          "Interfere with, disrupt or compromise the operation or security of the website.",
          "Use the website to transmit malicious software or any unlawful, harmful or offensive material.",
          "Misuse the website’s forms, including submitting automated, spam or deliberately misleading information.",
        ],
      },
    ],
  },
  {
    id: "product-information",
    title: "Product Information",
    blocks: [
      {
        type: "p",
        text: "Product descriptions, photographs, illustrations and other content on the website are provided for general information. Images may be representative and may not show the exact product supplied.",
      },
      {
        type: "p",
        text: "Actual product characteristics, such as grade, colour, size, specifications, packaging and availability, can vary by product, season and the requirements agreed for each order. Not every specification or option is available for every product. Please confirm the specifications that matter to you before placing an order.",
      },
    ],
  },
  {
    id: "enquiries-and-quotations",
    title: "Enquiries and Quotations",
    blocks: [
      {
        type: "p",
        text: "Submitting a contact form, brochure request or quotation enquiry through the website does not create a contract to buy or supply any product. It simply lets us understand your requirements and respond.",
      },
      {
        type: "p",
        text: "Any quotation we provide is subject to the terms, validity period and availability stated in that quotation, where applicable.",
      },
    ],
  },
  {
    id: "orders-and-commercial-agreements",
    title: "Orders and Commercial Agreements",
    blocks: [
      {
        type: "p",
        text: "Orders are governed by the order documents or separate written agreement made between you and Freshland Exports. Pricing, payment terms, delivery arrangements, quantities, product specifications and all other commercial conditions are set out in those documents, not on this website. If those documents differ from anything on the website, the agreed documents apply.",
      },
    ],
  },
  {
    id: "minimum-order-quantities",
    title: "Minimum Order Quantities",
    blocks: [
      {
        type: "p",
        text: "Minimum order quantities (MOQs) differ by product category. The MOQ shown on each product page is our published indicative requirement for that product, subject to the final written quotation or agreement. Our current MOQs are:",
      },
      { type: "list", items: catalogue.map((category) => `${category.heading}: ${categoryMoq[category.id]}`) },
      ...(moqExceptions.length > 0
        ? [
            {
              type: "p" as const,
              text: `Where a product page shows a different MOQ from its category, the product page applies (${moqExceptions.join("; ")}).`,
            },
          ]
        : []),
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    blocks: [
      {
        type: "p",
        text: "The text, branding, logos, design elements, photographs and other original content on this website are protected by applicable intellectual property laws. You may view and print pages for your own business evaluation, but you must not reproduce, distribute or commercially reuse protected material without our permission, except where the law allows.",
      },
      {
        type: "p",
        text: "Third-party names, marks and materials that appear on the website remain the property of their respective owners.",
      },
    ],
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    blocks: [
      {
        type: "p",
        text: "The website may link to third-party websites, such as social media platforms. We do not control those websites and are not responsible for their content, availability or policies. Your use of them is subject to their own terms.",
      },
    ],
  },
  {
    id: "website-availability",
    title: "Website Availability",
    blocks: [
      {
        type: "p",
        text: "We make reasonable efforts to keep the website available and working, but we cannot guarantee uninterrupted or error-free access. The website may occasionally be unavailable because of maintenance, updates, technical issues or disruptions to services provided by third parties.",
      },
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    blocks: [
      {
        type: "p",
        text: "Content on the website is general business and product information. It is not a substitute for your own assessment, testing, regulatory checks in your market or confirmation of the specifications agreed for your order. While we aim to keep the website accurate and current, we do not warrant that all content is complete, accurate or up to date at all times.",
      },
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    blocks: [
      {
        type: "p",
        text: "To the extent permitted by applicable law, Freshland Exports is not liable for loss or damage arising from your use of, or inability to use, the website or from reliance on its general information. Liability relating to any order is governed by the agreed order documents.",
      },
      {
        type: "p",
        text: "Nothing in these terms excludes or limits any liability that cannot be excluded or limited under applicable law.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy",
    blocks: [
      {
        type: "p",
        text: "Personal information you submit through the website’s forms is handled in accordance with our Privacy Policy.",
      },
      { type: "link", label: "Read our Privacy Policy", href: "/privacy-policy" },
    ],
  },
  {
    id: "changes-to-these-terms",
    title: "Changes to These Terms",
    blocks: [
      {
        type: "p",
        text: "We may update these Terms & Conditions from time to time, for example when our website or services change. The current version will always be published on this page, so please review it periodically.",
      },
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    blocks: [
      {
        type: "p",
        text: "If you have questions about these Terms & Conditions, please send us a message through the enquiry form on our Contact page.",
      },
      { type: "link", label: "Go to the Contact page", href: "/contact" },
    ],
  },
];
