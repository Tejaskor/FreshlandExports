import { AboutHero } from "@/features/about/components/about-hero";
import { CoreValues } from "@/features/about/components/core-values";
import { OurStory } from "@/features/about/components/our-story";
import { VisionMission } from "@/features/about/components/vision-mission";
import { WhyChoose } from "@/features/about/components/why-choose";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Freshland Exports partners with farmers, processors and global buyers to deliver high-quality natural and botanical ingredients people can trust.",
  path: "/about",
});

/** Server-rendered throughout; only the motion wrappers hydrate. */
export default function Page() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <VisionMission />
      <CoreValues />
      <WhyChoose />
    </>
  );
}
