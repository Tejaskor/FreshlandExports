import type { IconName } from "@/components/ui/icon";
import type { MediaSlot } from "@/types/media";

/**
 * Signature ingredients content. Photography lives in
 * public/images/signature ingredients/ (the folder name contains a space;
 * next/image encodes it). There is no dedicated hero photograph yet, so the
 * hero borrows the closest image in the shared library.
 */

const dir = "/images/signature ingredients";

export interface SignatureIngredient {
  slug: string;
  name: string;
  /** One-line positioning statement shown on cards and the detail page. */
  tagline: string;
  /** Longer copy — only supplied where the brand has provided it. */
  description?: string;
  /** Round selector thumbnail and grid image. */
  media: MediaSlot;
}

export const ingredientHref = (slug: string) => `/signature-ingredients/${slug}`;
export const ingredientAnchor = (slug: string) => `ingredient-${slug}`;

export const ingredients: readonly SignatureIngredient[] = [
  {
    slug: "ashwalite",
    name: "Ashwalite",
    tagline: "All-Day Calm. All-Day Energy.",
    description:
      "A standardized Ashwagandha extract designed for balanced energy, focus, and overall well-being.",
    media: {
      image: `${dir}/ashwalite-roots.webp`,
      alt: "Dried ashwagandha roots piled on a wooden table",
      art: "ashwagandha",
    },
  },
  {
    slug: "fenugreen",
    name: "Fenugreen",
    tagline: "Advanced SapoMannan Complex",
    media: {
      image: `${dir}/fenugreek-seeds.webp`,
      alt: "A wooden bowl of golden fenugreek seeds beside fresh fenugreek leaves",
      art: "ginger",
    },
  },
  {
    slug: "cinaplus",
    name: "Cinaplus",
    tagline: "Balanced Blood Sugar Support",
    media: {
      image: `${dir}/cinaplus-cinnamon.webp`,
      alt: "Cinnamon sticks beside a wooden bowl of ground cinnamon",
      art: "ginger",
    },
  },
  {
    slug: "ocibos",
    name: "Ocibos",
    tagline: "Natural Menopause Support",
    media: {
      image: `${dir}/ocibos-tulsi.webp`,
      alt: "A bunch of fresh green tulsi leaves on a wooden surface",
      art: "leaf",
    },
  },
  {
    slug: "mobeetx",
    name: "MobeetX",
    tagline: "Energy & Recovery",
    media: {
      image: `${dir}/mobeetx-beetroot.webp`,
      alt: "Whole and halved beetroots with their leafy green tops",
      art: "powder",
    },
  },
  {
    slug: "theamind",
    name: "TheaMind",
    tagline: "Mental Clarity",
    media: {
      image: `${dir}/theamind-tulsi.webp`,
      alt: "A flowering holy basil plant with purple blossoms",
      art: "leaf",
    },
  },
  {
    slug: "peatrix",
    name: "Peatrix",
    tagline: "Pure Plant Power for Your Body",
    media: {
      image: `${dir}/peatrix-pea-powder.webp`,
      alt: "A bowl of green pea protein powder beside fresh pea pods",
      art: "moringa",
    },
  },
];

export function findIngredient(slug: string) {
  return ingredients.find((ingredient) => ingredient.slug === slug);
}

export const signatureHero = {
  headline: { lead: "Our Signature", emphasis: "Ingredients" },
  body: "A carefully curated range of science-backed botanical ingredients, developed to support nutrition, wellness and functional applications across global industries.",
  cta: { label: "Explore Our Ingredients", href: "#featured-ingredients" },
  attributes: [
    { icon: "flask", label: "Research-Driven Formulations" },
    { icon: "shield", label: "Consistent Quality" },
    { icon: "globe", label: "Global Applications" },
    { icon: "sprout", label: "Sustainably Sourced" },
  ] as readonly { icon: IconName; label: string }[],
  media: {
    image: "/images/about/about-hero-turmeric-powder.webp",
    alt: "Sunlit wooden bowls of turmeric powder and whole spices on a forest table",
    art: "turmeric",
  } satisfies MediaSlot,
} as const;

export const philosophy = {
  heading: ["More Than Ingredients", "A Commitment to Better Living"],
  body: "Our signature ingredients are designed to support a healthier, more balanced lifestyle through the power of botanicals.",
  pillars: [
    { icon: "users", title: "People", text: "Supporting everyday wellness", tone: "forest" },
    { icon: "flask", title: "Purity", text: "Consistent and reliable quality", tone: "rust" },
    { icon: "sprout", title: "Planet", text: "Sustainably sourced botanicals", tone: "leaf" },
  ] as readonly { icon: IconName; title: string; text: string; tone: "forest" | "rust" | "leaf" }[],
} as const;

export const featured = {
  slug: "ashwalite",
  media: {
    image: `${dir}/ashwalite-featured.webp`,
    alt: "Ashwagandha roots and a bowl of fine ashwagandha extract powder among fresh leaves",
    art: "ashwagandha",
  } satisfies MediaSlot,
} as const;

export const ingredientsCta = {
  heading: ["Ready to Explore Our", "Signature Ingredients?"],
  body: "Connect with our team to learn more about our ingredients, applications, and how we can support your business.",
  cta: { label: "Get In Touch", href: "/contact" },
  media: {
    image: `${dir}/signature-ingredients-cta-bg.webp`,
    alt: "",
    art: "leaf",
  } satisfies MediaSlot,
} as const;
