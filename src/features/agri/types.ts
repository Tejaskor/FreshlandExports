import type { IconName } from "@/components/ui/icon";
import type { Faq } from "@/features/moringa/data";
import type { ImageSlotData as SharedImageSlotData } from "@/features/products/types";

/**
 * Agricultural and fruit product landing pages.
 *
 * Each product is one content object (./content/<slug>.ts): its copy, its
 * accent palette, its image slots, and its `sections` — the ordered list of
 * section designs (and their variants) that make up its page. The section
 * components live in ./components/sections and are shared; the composition,
 * palette and imagery are what make each page its own.
 *
 * Copy is TEMPORARY placeholder content, written to be replaced with final
 * product content. It avoids specific figures, certifications or claims.
 */

export type ImageSlotData = SharedImageSlotData;

/** Product accent palette, exposed to the page as CSS variables. */
export type AgriTheme = {
  /** Main accent — fills, rules, large display words. */
  accent: string;
  /** Deep shade — dark grounds and accent text on light grounds. */
  deep: string;
  /** Pale tint — light section grounds and placeholders. */
  tint: string;
  /** Mid tone — secondary fills and borders. */
  soft: string;
};

export type Feature = { title: string; text: string; icon?: IconName };
export type UseGroup = { title: string; text?: string; items: readonly string[]; image?: ImageSlotData };
/** A confirmed specification; an unconfirmed value is left out, not shown as pending. */
export type SpecRow = { label: string; value: string };
/** A process step; `text` is optional, `image` is used by the "cards" process layout. */
export type Step = { title: string; text?: string; image?: ImageSlotData };

export type HeroVariant =
  | "split"
  | "centered"
  | "stage"
  | "panoramic"
  | "diagonal"
  | "collage"
  | "elongated"
  | "blob"
  | "duo"
  | "orbit"
  | "editorial";

/** One section of a page, in order. Five to seven per product. */
export type SectionSpec =
  /** `wide` (collage only): the main photograph as a wide banner, the two extras beneath — for a landscape hero. */
  | { type: "hero"; variant: HeroVariant; reverse?: boolean; wide?: boolean }
  | { type: "intro"; variant: "split" | "statement" | "overlap"; shape?: ImageShape; reverse?: boolean }
  | { type: "features"; variant: "numbered" | "bento" | "band" | "alternating" }
  | { type: "uses"; variant: "columns" | "gallery" | "list" | "tabs" }
  /** "cards": one photograph card per step, in a row joined by arrows. */
  | { type: "process"; variant?: "rail" | "cards" }
  /** `photo` (sheet only): show `images.specs` as a wide banner above the sheet. */
  | { type: "specs"; variant: "table" | "sheet" | "tiles"; photo?: boolean }
  | { type: "quality" }
  | { type: "varieties" }
  /** `columns`: the band's desktop column count (default 3); 4 suits four items. */
  | { type: "commercial"; variant: "numbered" | "bento" | "band" | "alternating"; columns?: 3 | 4 }
  | { type: "storage" }
  | { type: "faq"; variant: "split" | "center" }
  /** Related products from the central catalogue. */
  | { type: "related" }
  | { type: "contact"; variant: "split" | "band" | "card" | "centered" };

export type ImageShape = "arch" | "circle" | "leaf" | "pill" | "rounded";

export type AgriProduct = {
  slug: string;
  name: string;
  /** Category label; defaults to "Agricultural Products". */
  category?: string;
  theme: AgriTheme;
  hero: {
    eyebrow: string;
    title: string;
    /** Optional explicit title lines (joined, they must read as `title`), e.g. ["Coriander", "Seeds Powder"]. */
    titleLines?: readonly string[];
    tagline: string;
    body: string;
    highlights: readonly string[];
    /** Tighter vertical rhythm in the hero copy (title, tagline, body, buttons, highlights). */
    compact?: boolean;
    /** Editorial hero: small badge over the photograph. */
    badge?: string;
    /** Editorial hero: floating information card beside the photograph. */
    card?: { title: string; text: string };
    /**
     * Hero buttons: "Explore Our Product" + "Request a Quote" (default),
     * "Request a Quote" + "Enquire Now" (enquire), or "View Specifications"
     * + "Request a Quote" (specs).
     */
    secondary?: "explore" | "enquire" | "specs";
  };
  intro: {
    eyebrow: string;
    heading: string;
    /** One-sentence statement for the "statement" intro. */
    statement: string;
    body: readonly string[];
    highlights: readonly { label: string; value: string }[];
  };
  features: { eyebrow: string; heading: string; items: readonly Feature[] };
  uses: { eyebrow: string; heading: string; intro: string; groups: readonly UseGroup[] };
  process?: { eyebrow: string; heading: string; steps: readonly Step[]; note?: string; image?: ImageSlotData };
  specs: {
    eyebrow: string;
    heading: string;
    rows: readonly SpecRow[];
    note: string;
    /** Set false to leave out the "Request Specifications" button and its note. */
    enquiry?: boolean;
  };
  /** Replaces the shared line beside the MOQ figure. */
  moqBody?: string;
  quality?: { heading: string; text: string; points: readonly string[] };
  /** Varieties showcase (e.g. mango varieties). */
  varieties?: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: readonly { name: string; text: string }[];
    note: string;
  };
  /** Shown under the site-wide FAQ heading. */
  faqs?: { items: readonly Faq[] };
  /** Commercial applications, rendered with the feature layouts. */
  commercial?: { eyebrow: string; heading: string; items: readonly Feature[] };
  /** Storage recommendations, rendered as a compact strip. */
  storage?: { heading: string; text: string; points: readonly string[] };
  cta: { eyebrow: string; heading: string; body: string };
  /**
   * Opts the closing section into the business quote form (company, market,
   * quantity), with its own line under the "Looking for …" heading.
   */
  quote?: { body: string };
  images: {
    hero: ImageSlotData;
    detail: ImageSlotData;
    /** Bento features only: a photograph filling the grid's last row. */
    features?: ImageSlotData;
    /** Tabbed / list uses photograph (falls back to `detail`); a banner above the columns layout. */
    uses?: ImageSlotData;
    /** Specifications photograph; falls back to `detail`. */
    specs?: ImageSlotData;
    /** Optional wide (3:1) photograph above the MOQ panel. */
    moq?: ImageSlotData;
    /** Extra photographs used by collage / elongated heroes and galleries. */
    extra?: readonly ImageSlotData[];
    /** An existing small photograph (≤300 px) for a small circular slot. */
    thumb?: string;
  };
  /** Case study card images for this page only, by case study slug. */
  caseStudyImages?: Readonly<Record<string, ImageSlotData>>;
  sections: readonly SectionSpec[];
};
