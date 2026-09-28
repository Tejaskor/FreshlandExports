import type { IconName } from "@/components/ui/icon";
import type { MediaSlot } from "@/types/media";

/**
 * Our Farms content. Photography lives in public/images/farms/; the final
 * CTA and the fourth hero arch still draw on the shared library.
 */

const portraitArch = "(min-width: 1024px) 260px, (min-width: 640px) 180px, 140px";

type IconFeature = { icon: IconName; title: string; description: string };
type Cta = { label: string; href: string };

export const farmsHero = {
  eyebrow: "From Indian Farms",
  headline: { lead: "Fresh Produce", emphasis: "with Care" },
  cta: { label: "Explore Our Products", href: "/products" } satisfies Cta,
  background: {
    image: "/images/farms/our-farms-hero-background.webp",
    alt: "A lush green crop field under a warm sunrise sky, edged by palm trees",
    art: "field",
  } satisfies MediaSlot,
  /**
   * Tall arches, left to right; `offset` staggers them vertically (rem).
   * `sizes` follows each photo's shape: portrait sources fill the pill by
   * height at ~0.56x its height, landscape ones at ~1.78x.
   */
  arches: [
    {
      offset: 3.5,
      media: {
        image: "/images/farms/hero-rice-crops.webp",
        alt: "Ripening rice panicles glowing in morning sunlight",
        art: "field",
      },
      position: "object-center",
      sizes: portraitArch,
    },
    {
      offset: 0,
      media: {
        image: "/images/farms/hero-fresh-tomatoes.webp",
        alt: "A cluster of ripe red tomatoes on the vine",
        art: "field",
      },
      position: "object-center",
      sizes: portraitArch,
    },
    {
      offset: 1.75,
      media: {
        image: "/images/farms/hero-green-mangoes.webp",
        alt: "Green mangoes hanging among the leaves of a mango tree",
        art: "leaf",
      },
      position: "object-center",
      sizes: portraitArch,
    },
    {
      // No fourth hero photograph in public/images/farms/ yet.
      offset: 5,
      media: {
        image: "/images/home/categories/botanical-extracts.webp",
        alt: "Dew-covered leaves of a botanical crop",
        art: "leaf",
      },
      position: "object-[40%_center]",
      sizes: "(min-width: 1024px) 780px, (min-width: 640px) 540px, 420px",
    },
  ] as readonly { offset: number; media: MediaSlot; position: string; sizes: string }[],
} as const;

export const ourRoots = {
  eyebrow: "Our Roots",
  paragraphs: [
    "Our commitment to quality starts at the source. We work closely with farming communities and trusted agricultural partners to bring carefully selected botanical ingredients from farms to markets worldwide.",
    "From cultivation and harvesting to sourcing and processing, every stage is an opportunity to maintain quality and build lasting relationships.",
    "Our approach combines traditional agricultural knowledge, responsible sourcing, and modern practices to support a dependable supply chain.",
  ],
  collage: {
    main: {
      image: "/images/farms/our-roots-farm-landscape.webp",
      alt: "A hand lifting freshly harvested carrots from rich farm soil",
      art: "field",
    },
    top: {
      image: "/images/farms/our-roots-young-green-plant.webp",
      alt: "Hands tending a young green plant in freshly turned soil",
      art: "leaf",
    },
    bottom: {
      image: "/images/farms/our-roots-hand-planting.webp",
      alt: "A farmer in a sun hat planting seedlings in a green field",
      art: "leaf",
    },
  } satisfies Record<string, MediaSlot>,
} as const;

export const approach = {
  eyebrow: "Our Approach",
  lead: "Our farms are an important part of our commitment to quality, sustainability, and long-term partnerships.",
  cards: [
    {
      icon: "sprout",
      title: "Responsible Sourcing",
      description:
        "We partner with trusted farmers who follow ethical and responsible agricultural practices.",
    },
    {
      icon: "seedling",
      title: "Quality at the Source",
      description:
        "Careful selection, cultivation and harvesting practices help us maintain consistent, high-quality ingredients.",
    },
    {
      icon: "users",
      title: "Farmer Partnerships",
      description:
        "We value the knowledge and experience of farming communities and build long-term relationships.",
    },
    {
      icon: "globe",
      title: "Sustainable Practices",
      description:
        "We encourage practices that protect natural resources and support healthier ecosystems.",
    },
  ] as readonly IconFeature[],
} as const;

export const network = {
  eyebrow: "Our Agricultural Network",
  body: "Our sourcing network connects agricultural producers with businesses around the world. Through our partnerships, we aim to make botanical ingredients accessible while maintaining a focus on quality and reliability.",
  cards: [
    {
      title: "India – Botanical Sourcing",
      description:
        "India's diverse agricultural regions provide access to a wide range of botanical ingredients. We work with sourcing partners to identify suitable raw materials for different applications.",
      cta: { label: "Explore Ingredients", href: "/products" },
      media: {
        image: "/images/farms/agricultural-network-indian-farm.webp",
        alt: "A farmer harvesting herbs beside baskets of turmeric, roots and spices on an Indian farm",
        art: "turmeric",
      },
    },
    {
      title: "Global Agricultural Partnerships",
      description:
        "Our international sourcing network helps us connect with agricultural suppliers and expand access to botanical ingredients for global markets.",
      cta: { label: "Discover Our Network", href: "/about" },
      media: {
        image: "/images/farms/agricultural-network-global-farms.webp",
        alt: "Farmers gathering herbs in hillside fields beside baskets of harvested roots and spices",
        art: "jar",
      },
    },
  ] as readonly { title: string; description: string; cta: Cta; media: MediaSlot }[],
} as const;

export const people = {
  eyebrow: "People Behind Our Ingredients",
  paragraphs: [
    "Behind every ingredient is a network of people whose knowledge and dedication make agricultural production possible.",
    "We believe that strong relationships with farmers and suppliers are essential to building a dependable supply chain. By working together, we aim to create opportunities for collaboration, encourage responsible practices, and support long-term agricultural partnerships.",
  ],
  cta: { label: "Learn About Our Approach", href: "/about" } satisfies Cta,
  collage: [
    {
      image: "/images/farms/farmer-portrait-indian-farmer.webp",
      alt: "A smiling farmer picking fresh herbs in a flowering field",
      art: "powder",
    },
    {
      image: "/images/farms/farmer-cultivating-crops.webp",
      alt: "Women farmers harvesting leafy crops in rows beneath the hills",
      art: "field",
    },
    {
      image: "/images/farms/farmers-working-together.webp",
      alt: "A farmer and a sourcing specialist inspecting baskets of dried roots and herbs",
      art: "powder",
    },
    {
      image: "/images/farms/farmer-hand-planting-crops.webp",
      alt: "Two farmers kneeling in a field, examining fresh herb plants together",
      art: "powder",
    },
  ] as readonly MediaSlot[],
} as const;

export const promise = {
  eyebrow: "Our Promise",
  paragraphs: [
    "We understand that ingredient quality begins long before processing. That's why we focus on responsible sourcing, careful selection, and consistent quality checks throughout our supply chain.",
    "Our goal is to provide businesses with botanical ingredients they can confidently incorporate into their products.",
  ],
  features: [
    {
      icon: "sprout",
      title: "Responsible Sourcing",
      description: "Ethical and transparent sourcing practices.",
    },
    {
      icon: "shield",
      title: "Quality-Focused Processes",
      description: "Careful handling and selection at every stage.",
    },
    {
      icon: "globe",
      title: "Reliable Global Supply",
      description: "A dependable network for consistent availability.",
    },
  ] as readonly IconFeature[],
} as const;

export const farmsCta = {
  eyebrow: "Let's Work Together",
  body: "Looking for a reliable sourcing partner for botanical ingredients? Connect with Freshland Exports to explore our products and discuss your requirements.",
  primary: { label: "Get a Quote", href: "/contact" } satisfies Cta,
  secondary: { label: "Explore Products", href: "/products" } satisfies Cta,
  media: {
    image: "/images/home/categories/conventional.webp",
    alt: "A young plant growing from rich soil in a field at sunrise",
    art: "field",
  } satisfies MediaSlot,
} as const;
