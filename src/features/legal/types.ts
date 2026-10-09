/** Content model shared by the legal pages (Privacy Policy, Terms & Conditions, Image Credits). */
export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: readonly string[] }
  | { type: "h3"; text: string }
  | { type: "link"; label: string; href: string }
  /** Photo credits: each title links to its source page, each licence to its terms. */
  | { type: "credits"; items: readonly PhotoCreditItem[] };

export type PhotoCreditItem = {
  title: string;
  /** Where the photograph appears on this site. */
  usedOn: string;
  author: string;
  license: string;
  licenseUrl?: string;
  source: string;
  changes?: string;
};

export type LegalSection = { id: string; title: string; blocks: readonly LegalBlock[] };
