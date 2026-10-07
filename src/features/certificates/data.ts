/**
 * Certificates page content. Titles and descriptions are the brand's own
 * wording — no certificate numbers, dates or further claims are added here.
 *
 * public/images/certificates/ currently holds certification marks only, not
 * the certificate documents. When a document is available, set `file` to its
 * public path (e.g. "/documents/certificates/fssc-22000.pdf") and the card
 * becomes a "View Certificate" link to it; until then the card offers to
 * request the certificate from the team.
 */

const dir = "/images/certificates";

export interface Certificate {
  title: string;
  description: string;
  /** Certification mark. Absent where no mark has been supplied. */
  logo?: { src: string; alt: string };
  /** Text shown in place of a missing mark. */
  monogram?: string;
  /** Public path to the certificate document, once available. */
  file?: string;
}

export const certificatesIntro = {
  heading: "Our Certifications",
  body: "Explore the certifications and registrations relevant to our operations and products.",
} as const;

export const certificates: readonly Certificate[] = [
  {
    title: "FSSC 22000",
    description:
      "A food safety management certification designed to support systematic controls, consistent processes, and food safety throughout applicable operations.",
    logo: { src: `${dir}/FSSC 22000.png`, alt: "FSSC 22000 logo" },
  },
  {
    title: "FSSAI Registration",
    description:
      "Our food business registration supports compliance with applicable food safety requirements in India.",
    logo: { src: `${dir}/FSSAI.png`, alt: "FSSAI logo" },
  },
  {
    title: "FDA Registration",
    description:
      "Relevant facility registration and documentation can support applicable US market requirements.",
    // No FDA mark in the certificates folder; a text tile stands in.
    monogram: "FDA",
  },
  {
    title: "Halal Certification",
    description:
      "Halal certification provides assurance that the products and processes covered by the certificate meet the applicable Halal requirements.",
    logo: { src: `${dir}/Halal India.png`, alt: "Halal India certification mark" },
  },
  {
    title: "Certificate of Registration as Exporter of Spices",
    description:
      "Exporter registration supports eligible spice export activities and compliance with applicable trade requirements.",
    logo: { src: `${dir}/Spices Board India.png`, alt: "Spices Board India emblem" },
  },
  {
    title: "APEDA Registration",
    description:
      "APEDA registration supports eligible agricultural and processed food export activities from India.",
    logo: { src: `${dir}/APEDA.png`, alt: "APEDA logo" },
  },
  {
    title: "NPOP Organic Certification",
    description:
      "Organic certification under India's National Programme for Organic Production applies to the products and operations listed in the certificate's scope.",
    logo: { src: `${dir}/India Organic.png`, alt: "India Organic (NPOP) certification mark" },
  },
  {
    title: "USDA Organic / NOP",
    description:
      "Organic certification under the USDA National Organic Program applies to the products and operations covered by the relevant certificate.",
    logo: { src: `${dir}/USDA Organic.png`, alt: "USDA Organic seal" },
  },
  {
    title: "EU Organic Certification",
    description:
      "Organic certification for products and operations covered by the applicable European Union organic standards.",
    logo: { src: `${dir}/EU Organic.png`, alt: "EU organic logo" },
  },
  {
    title: "Kosher Certification",
    description:
      "Kosher certification confirms that the products and processes covered by the certificate meet the requirements of the issuing certification body.",
    logo: { src: `${dir}/KBD.png`, alt: "KLBD kosher certification mark" },
  },
  {
    title: "ZED Certification",
    description:
      "The Zero Defect Zero Effect programme recognizes eligible businesses for their performance against the applicable quality and environmental criteria.",
    logo: { src: `${dir}/Zed Certification.png`, alt: "MSME ZED certification logo" },
  },
  {
    title: "IEC Code Registration",
    description:
      "Import Export Code registration with India's Directorate General of Foreign Trade, which supports import and export activities from India.",
    // The mark lives with the homepage certification marks (not copied here).
    logo: { src: "/images/home/hero/ICE-Certificate.png", alt: "IEC Code (Import Export Code) registration mark" },
  },
];
