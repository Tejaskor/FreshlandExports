import type { IconName } from "@/components/ui/icon";
import type { MediaSlot } from "@/types/media";

/**
 * About page content. Photography lives in public/images/about/; `art` is the
 * generated fallback Figure renders if an image path is ever cleared.
 */

type Feature = { title: string; description: string };
type IconFeature = Feature & { icon: IconName };

export const aboutHero = {
  eyebrow: "About Us",
  tagline: "Pure botanicals. Global possibilities.",
  /** Tall panels, left to right. Widths are relative flex weights. */
  panels: [
    {
      weight: 1.1,
      media: {
        image: "/images/about/about-hero-botanical-plant.webp",
        alt: "Sunlit botanical shoots on a hillside plantation",
        art: "leaf",
      },
      position: "object-[72%_center]",
    },
    {
      weight: 0.85,
      media: {
        image: "/images/about/about-hero-turmeric-powder.webp",
        alt: "A wooden bowl heaped with turmeric powder among whole spices",
        art: "turmeric",
      },
      position: "object-[46%_center]",
    },
    {
      weight: 1.25,
      media: {
        image: "/images/about/about-hero-fresh-herbs.webp",
        alt: "Dried green herbs in wooden bowls surrounded by fresh leaves",
        art: "moringa",
      },
      position: "object-[52%_center]",
    },
    {
      weight: 0.8,
      media: {
        image: "/images/about/about-hero-dried-red-spices.webp",
        alt: "Dried hibiscus petals in a wooden bowl beside fresh red flowers",
        art: "powder",
      },
      position: "object-[58%_center]",
    },
    {
      weight: 1,
      media: {
        image: "/images/about/about-hero-farmland-sunset.webp",
        alt: "Rows of green crops across rolling farmland at sunset",
        art: "field",
      },
      position: "object-[56%_center]",
    },
  ] as readonly { weight: number; media: MediaSlot; position: string }[],
} as const;

export const ourStory = {
  eyebrow: "Our Story",
  body: "At Freshland Exports, our journey is driven by a simple belief — nature has the power to create a healthier, better future. We work closely with farmers, processors, and global partners to deliver high-quality natural ingredients that people can trust.",
  features: [
    {
      title: "Responsible Sourcing",
      description:
        "We partner with trusted farmers and communities to source authentic, high-quality raw ingredients.",
    },
    {
      title: "Careful Processing",
      description:
        "Our ingredients are handled with attention to quality and consistency at every stage.",
    },
    {
      title: "Global Partnerships",
      description:
        "We build lasting relationships with clients and partners across international markets.",
    },
  ] as readonly Feature[],
  media: {
    image: "/images/about/our-story-processing.webp",
    alt: "Gloved hands sorting dried hibiscus, herbs and marigold petals on a processing table",
    art: "powder",
  } satisfies MediaSlot,
} as const;

export const visionMission = {
  eyebrow: "Our Vision & Mission",
  /** Decorative backdrop — leaves sit on the right, clear of the cards. */
  media: {
    image: "/images/about/vision-mission-leaves.webp",
    alt: "",
    art: "leaf",
  } satisfies MediaSlot,
  cards: [
    {
      icon: "eye",
      tone: "leaf",
      title: "Our Vision",
      description:
        "To become a globally trusted partner for natural and plant-based ingredients by promoting quality, responsible sourcing, and sustainable growth.",
    },
    {
      icon: "target",
      tone: "ember",
      title: "Our Mission",
      description:
        "To deliver high-quality botanical ingredients that meet diverse industry needs while building transparent, reliable, and long-lasting partnerships.",
    },
  ] as readonly (IconFeature & { tone: "leaf" | "ember" })[],
} as const;

export const coreValues = {
  eyebrow: "Our Core Values",
  heading: "The Values That Guide Us",
  values: [
    {
      icon: "award",
      title: "Quality First",
      description:
        "We ensure quality at every stage, from sourcing to delivery, meeting high standards.",
    },
    {
      icon: "handshake",
      title: "Integrity & Transparency",
      description: "We believe in honest communication and ethical business practices.",
    },
    {
      icon: "users",
      title: "Customer Commitment",
      description:
        "We focus on understanding our customers' needs and providing tailored solutions.",
    },
    {
      icon: "seedling",
      title: "Sustainability",
      description:
        "We support responsible sourcing and environmentally conscious practices for a healthier planet.",
    },
  ] as readonly IconFeature[],
} as const;

export const whyChoose = {
  eyebrow: "Why Choose Freshland Exports",
  features: [
    {
      icon: "layers",
      title: "Diverse Ingredient Range",
      description:
        "Botanical extracts, herbal powders, and plant-based ingredients for multiple industries.",
    },
    {
      icon: "shield",
      title: "Quality-Focused Approach",
      description:
        "Careful attention to quality and consistency throughout the sourcing process.",
    },
    {
      icon: "globe",
      title: "Global Supply Solutions",
      description: "Reliable sourcing and logistics support for international markets.",
    },
    {
      icon: "users",
      title: "Personalized Service",
      description: "Dedicated support to understand your business requirements.",
    },
  ] as readonly IconFeature[],
  cta: { label: "Talk to our sourcing team", href: "/contact" },
  media: {
    image: "/images/about/why-choose-botanical-ingredients.webp",
    alt: "A wooden bowl of dried petals, herbs and flowers beside a mortar and pestle",
    art: "moringa",
  } satisfies MediaSlot,
} as const;
