/**
 * Privacy Policy content (/privacy-policy).
 *
 * Written against what the site actually does today:
 * - Enquiry, quote and brochure forms post to one webhook (CONTACT_WEBHOOK_URL),
 *   which passes submissions to an automation service (Make.com) and a
 *   spreadsheet (Google Sheets).
 * - No analytics, advertising or tracking scripts are loaded, and the site
 *   sets no cookies of its own. The brochure form keeps campaign (UTM)
 *   parameters in sessionStorage for the browser session only.
 * - Fonts and images are served from the site itself.
 *
 * Update this text whenever any of that changes: adding analytics, a cookie
 * banner or a new form provider all need a matching change here. A practical
 * draft for business review, not legal advice.
 */

import type { LegalSection } from "@/features/legal/types";

/** ISO date of the business-approved version. Shown only once set. */
export const policyLastUpdated: string | null = null;


export const privacyIntro =
  "Learn how Freshland Exports collects, uses and protects information when you visit our website or contact us about our products and services.";

export const privacySections: readonly LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    blocks: [
      {
        type: "p",
        text: "This Privacy Policy explains how Freshland Exports (“we”, “us” or “our”) handles information collected through this website, including its enquiry, quotation and brochure request forms, and through other interactions related to the website.",
      },
      {
        type: "p",
        text: "Our website is intended for business buyers, such as importers, distributors, wholesalers and food manufacturers, who are interested in our agricultural products, powders, fruits and spices. By using the website or submitting a form, you acknowledge the practices described in this policy.",
      },
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    blocks: [
      { type: "h3", text: "Information you provide" },
      {
        type: "p",
        text: "We collect the information you choose to submit through the forms on our website. Depending on the form, this may include:",
      },
      {
        type: "list",
        items: [
          "Your name, company name, business email address and phone or WhatsApp number.",
          "Your country or market and, for brochure requests, your buyer type.",
          "The products or categories you are interested in and your required or expected quantity.",
          "Any message, specifications or other requirements you include in your enquiry.",
        ],
      },
      { type: "h3", text: "Information collected automatically" },
      {
        type: "p",
        text: "When you visit the website, our hosting provider may automatically record standard technical information in server logs, such as your IP address, browser type, the pages requested and the date and time of the request. This information is used to deliver and secure the website.",
      },
      {
        type: "p",
        text: "If you arrive at the website through a link that carries campaign parameters (for example, utm_source or utm_campaign), those parameters may be included with a brochure request so we can understand how you found us.",
      },
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Information",
    blocks: [
      { type: "p", text: "We use the information described above to:" },
      {
        type: "list",
        items: [
          "Respond to your product enquiries and quotation requests.",
          "Communicate with you about the products, quantities and business requirements you have asked about.",
          "Process brochure requests and provide the brochure you requested.",
          "Understand which of our campaigns and channels lead visitors to the website.",
          "Operate, maintain, secure and improve the website, including preventing spam and misuse of our forms.",
          "Meet applicable legal, regulatory and recordkeeping obligations.",
        ],
      },
    ],
  },
  {
    id: "cookies-and-analytics",
    title: "Cookies and Analytics",
    blocks: [
      {
        type: "p",
        text: "Our website does not currently use analytics, advertising or tracking cookies, and does not set cookies of its own for these purposes.",
      },
      {
        type: "p",
        text: "When you arrive with campaign parameters in the link, the website stores them in your browser’s session storage so they can be attached to a brochure request. This information stays on your device and is cleared when you close the browser tab or window.",
      },
      {
        type: "p",
        text: "If we introduce analytics or other tracking technologies in the future, we will update this policy to describe them before they are used.",
      },
    ],
  },
  {
    id: "sharing-of-information",
    title: "Sharing of Information",
    blocks: [
      {
        type: "p",
        text: "We do not sell your information. We share it only with service providers that help us run the website and handle enquiries on our behalf, including:",
      },
      {
        type: "list",
        items: [
          "Our website hosting provider, which serves the website and processes technical data such as server logs.",
          "An automation service (Make.com), which receives form submissions from the website and passes them to our enquiry records.",
          "A spreadsheet service (Google Sheets), where enquiries and brochure requests are recorded so our team can respond to them.",
        ],
      },
      {
        type: "p",
        text: "These providers process information according to their own terms and privacy policies. We may also disclose information where required by law, to protect our rights or the security of the website, or in connection with a business reorganisation.",
      },
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    blocks: [
      {
        type: "p",
        text: "We keep enquiry and brochure request information for as long as it is reasonably needed for the purposes described in this policy, such as responding to your enquiry and maintaining our business relationship, and for as long as required by applicable law or for legitimate recordkeeping. When it is no longer needed, we delete it or keep it in a form that no longer identifies you.",
      },
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    blocks: [
      {
        type: "p",
        text: "We take reasonable technical and organisational measures intended to protect the information we hold, including serving the website over an encrypted connection and limiting access to enquiry records to the people who need it. However, no method of transmission over the internet or of electronic storage is completely secure, and we cannot guarantee absolute security.",
      },
    ],
  },
  {
    id: "your-privacy-rights",
    title: "Your Privacy Rights",
    blocks: [
      {
        type: "p",
        text: "Depending on where you are located and the law that applies to you, you may have rights in relation to your personal information, such as the right to:",
      },
      {
        type: "list",
        items: [
          "Request access to the personal information we hold about you.",
          "Ask us to correct information that is inaccurate or incomplete.",
          "Ask us to delete your information.",
          "Object to, or ask us to restrict, certain uses of your information.",
          "Withdraw consent where we rely on your consent.",
        ],
      },
      {
        type: "p",
        text: "To make a request, contact us as described in the Contact Us section below. We may need to verify your identity before responding, and some requests may be limited by our legal obligations.",
      },
    ],
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    blocks: [
      {
        type: "p",
        text: "Our website may link to external websites, such as our social media profiles. Those websites are operated by third parties with their own privacy practices, and we are not responsible for their content or how they handle information. We encourage you to review their privacy policies.",
      },
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children’s Privacy",
    blocks: [
      {
        type: "p",
        text: "Our website and products are intended for businesses and are not directed at children. We do not knowingly collect personal information from children. If you believe a child has submitted information to us, please contact us so we can delete it.",
      },
    ],
  },
  {
    id: "international-data-transfers",
    title: "International Data Transfers",
    blocks: [
      {
        type: "p",
        text: "We receive enquiries from visitors in many countries, and the service providers we use may process information in countries other than your own, including India, where we are based. Data protection laws in those countries may differ from those where you live. Where required, we take steps intended to ensure your information remains appropriately protected.",
      },
    ],
  },
  {
    id: "changes-to-this-policy",
    title: "Changes to This Policy",
    blocks: [
      {
        type: "p",
        text: "We may update this Privacy Policy from time to time, for example when our website, services or legal requirements change. The latest version will always be published on this page.",
      },
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    blocks: [
      {
        type: "p",
        text: "If you have questions about this Privacy Policy or would like to make a privacy-related request, please send us a message through the enquiry form on our Contact page, and mention “Privacy request” in your message so we can direct it to the right person.",
      },
      { type: "link", label: "Go to the Contact page", href: "/contact" },
    ],
  },
];
