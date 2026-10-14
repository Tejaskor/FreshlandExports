/**
 * Type roles for the product pages, mapped onto the homepage's typography
 * tokens (globals.css): Fraunces for headings, Inter for body and buttons,
 * Geist Mono for labels (type-label). Weights follow the homepage — 500 for
 * page titles, 400 for section and sub-headings.
 */
export const type = {
  /** Page-level headline (hero). Homepage h1 weight and tracking; the size
      stays larger than text-hero where a hero layout is built around it. */
  main: "font-display font-medium text-[clamp(2.75rem,1.4rem+4vw,5.75rem)] leading-[0.98] tracking-[-0.032em]",
  /** Section headings (h2) — the homepage's text-display. */
  section: "font-display text-display",
  /** Sub-headings inside a section (h3) — the homepage's text-title. */
  sub: "font-display text-title",
  /** Card and item titles — the homepage's text-heading. */
  item: "font-display text-heading",
  lead: "text-lead",
} as const;
