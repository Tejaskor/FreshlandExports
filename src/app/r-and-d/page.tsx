import { AboutResearch } from "@/features/r-and-d/components/about-research";
import { LabGallery } from "@/features/r-and-d/components/lab-gallery";
import { RdHero } from "@/features/r-and-d/components/rd-hero";
import { ResearchCapabilities } from "@/features/r-and-d/components/research-capabilities";
import { ResearchFocus } from "@/features/r-and-d/components/research-focus";
import { ResearchNotes } from "@/features/r-and-d/components/research-notes";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Knowledge Center",
  description:
    "The Freshland Exports Knowledge Center — research and innovation: botanical formulation, microbiology, phytochemical analysis and quality assurance for plant-based ingredients.",
  path: "/r-and-d",
});

/** Server-rendered throughout; only the motion wrappers and gallery hydrate. */
export default function Page() {
  return (
    <>
      <RdHero />
      <AboutResearch />
      <ResearchCapabilities />
      <ResearchFocus />
      <ResearchNotes />
      <LabGallery />
    </>
  );
}
