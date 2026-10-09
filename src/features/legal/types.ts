/** Content model shared by the legal pages (Privacy Policy, Terms & Conditions). */
export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: readonly string[] }
  | { type: "h3"; text: string }
  | { type: "link"; label: string; href: string };

export type LegalSection = { id: string; title: string; blocks: readonly LegalBlock[] };
