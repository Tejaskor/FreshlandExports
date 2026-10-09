import type { IconName } from "@/components/ui/icon";
import { featureFlags } from "@/config/features";
import type { MediaSlot } from "@/types/media";

/** Knowledge Center (formerly R&D Lab) content. Photography lives in public/images/r-and-d/. */

type Link = { label: string; href: string };
type IconItem = { icon: IconName; title: string; description: string };

/** The old /quality page is now Our Signature Ingredients; while that is hidden, the catalogue. */
const qualityHref = featureFlags.signatureIngredients ? "/signature-ingredients" : "/products";

export const rdHero = {
  eyebrow: "Knowledge Center",
  headline: ["Research &", "Innovation"],
  body: "Blending the wisdom of nature with modern science to create high-quality, plant-based ingredients for a healthier, more sustainable future.",
  media: {
    image: "/images/r-and-d/rnd-lab-hero-leaves.webp",
    alt: "Dew-covered green leaves glowing in soft sunlight",
    art: "leaf",
  } satisfies MediaSlot,
} as const;

export const aboutResearch = {
  eyebrow: "Our Approach",
  body: "At Freshland Exports, our research and innovation efforts focus on understanding the true potential of botanicals. We combine scientific expertise, advanced technology, and traditional knowledge to develop natural ingredients that are safe, effective, and suitable for global markets.",
  media: {
    image: "/images/r-and-d/rnd-lab-about-research.webp",
    alt: "A researcher pipetting a botanical sample beside flasks, test tubes and fresh leaves",
    art: "dropper",
  } satisfies MediaSlot,
} as const;

export const capabilities = {
  eyebrow: "Our Strengths",
  cards: [
    {
      icon: "sprout",
      title: "Botanical Formulation",
      description:
        "Developing standardized herbal formulations to ensure consistent quality and functionality.",
      link: { label: "Learn more", href: "/products" },
    },
    {
      icon: "flask",
      title: "Microbiology & Safety",
      description:
        "Ensuring purity, safety, and microbial quality at every stage of development.",
      link: { label: "Learn more", href: qualityHref },
    },
    {
      icon: "molecule",
      title: "Phytochemical Analysis",
      description:
        "Identifying and quantifying bioactive compounds using advanced analytical techniques.",
      link: { label: "Learn more", href: qualityHref },
    },
    {
      icon: "shield",
      title: "Quality Assurance",
      description:
        "Rigorous testing and validation to meet international quality and regulatory standards.",
      link: { label: "Learn more", href: qualityHref },
    },
  ] as readonly (IconItem & { link: Link })[],
} as const;

export const researchFocus = {
  eyebrow: "Our Focus",
  lead: "We explore nature's versatility through scientific research to develop innovative, plant-based ingredients.",
  items: [
    {
      icon: "sprout",
      title: "Sustainable Sourcing",
      description:
        "Studying botanicals from responsible sources to protect long-term availability and ecosystem balance.",
    },
    {
      icon: "flask",
      title: "Advanced Extraction Methods",
      description:
        "Refining extraction techniques that preserve the natural integrity of active compounds.",
    },
    {
      icon: "clipboard",
      title: "Functional Ingredient Development",
      description: "Creating natural ingredients for food, nutraceutical and wellness applications.",
    },
    {
      icon: "globe",
      title: "Global Compliance",
      description:
        "Aligning our research with international quality, safety and sustainability standards.",
    },
  ] as readonly IconItem[],
  cta: { label: "Explore Our Research", href: "/blog" } satisfies Link,
  media: {
    image: "/images/r-and-d/rnd-lab-research-focus.webp",
    alt: "Dried botanicals, glassware and a microscope on a bright laboratory bench",
    art: "powder",
  } satisfies MediaSlot,
} as const;

export const researchNotes = {
  eyebrow: "Publications & Insights",
  lead: "A look into our latest research, studies and technical insights on botanical ingredients.",
  articles: [
    {
      title: "Botanical Sourcing and Quality Parameters for Herbal Ingredients",
      description:
        "An overview of the key factors that influence the quality and purity of botanical raw materials.",
      href: "/blog",
      media: {
        image: "/images/r-and-d/botanical-sourcing-quality.webp",
        alt: "Fresh young leaves on a healthy botanical plant",
        art: "leaf",
      },
    },
    {
      title: "Comparative Study of Extraction Methods for Plant-Based Compounds",
      description:
        "How different extraction techniques shape the phytochemical profile of plant-based compounds.",
      href: "/blog",
      media: {
        image: "/images/r-and-d/plant-extraction-methods.webp",
        alt: "A dropper releasing a drop of plant extract into a petri dish of green leaves",
        art: "dropper",
      },
    },
    {
      title: "Stability Evaluation of Natural Ingredients in Functional Products",
      description:
        "Insights into maintaining the stability and efficacy of botanical ingredients in finished products.",
      href: "/blog",
      media: {
        image: "/images/r-and-d/natural-ingredient-stability.webp",
        alt: "Test tubes of botanical extracts in a rack beside flasks and dried herbs",
        art: "capsule",
      },
    },
  ] as readonly { title: string; description: string; href: string; media: MediaSlot }[],
} as const;

export const labGallery = {
  eyebrow: "Gallery",
  lead: "A glimpse into our research facilities, processes and ongoing studies.",
  items: [
    {
      caption: "Seedling Research",
      media: {
        image: "/images/r-and-d/rnd-lab-seedling-research.webp",
        alt: "Rows of young seedlings growing in trays inside a research greenhouse",
        art: "leaf",
      },
    },
    {
      caption: "Glassware Experiments",
      media: {
        image: "/images/r-and-d/rnd-lab-glassware-experiments.webp",
        alt: "Flasks and beakers holding leaves in clear solution on a lab bench",
        art: "dropper",
      },
    },
    {
      caption: "Botanical Samples",
      media: {
        image: "/images/r-and-d/rnd-lab-botanical-samples.webp",
        alt: "Wooden bowls of dried petals, herbs and flowers laid out as samples",
        art: "powder",
      },
    },
    {
      caption: "Microscope Analysis",
      media: {
        image: "/images/r-and-d/rnd-lab-microscope-analysis.webp",
        alt: "A microscope examining a leaf sample beside vials and research notes",
        art: "dropper",
      },
    },
    {
      caption: "Plant Extracts",
      media: {
        image: "/images/r-and-d/rnd-lab-plant-extracts.webp",
        alt: "A researcher handling dried herbs beside small bottles of plant extracts",
        art: "jar",
      },
    },
    {
      caption: "Herbal Testing",
      media: {
        image: "/images/r-and-d/rnd-lab-herbal-testing.webp",
        alt: "A researcher using tweezers to test a leaf sample in a petri dish",
        art: "dropper",
      },
    },
  ] as readonly { caption: string; media: MediaSlot }[],
} as const;
