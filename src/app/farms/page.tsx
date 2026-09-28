import { AgriculturalNetwork } from "@/features/farms/components/agricultural-network";
import { FarmsCta } from "@/features/farms/components/farms-cta";
import { FarmsHero } from "@/features/farms/components/farms-hero";
import { OurApproach } from "@/features/farms/components/our-approach";
import { OurPromise } from "@/features/farms/components/our-promise";
import { OurRoots } from "@/features/farms/components/our-roots";
import { PeopleBehind } from "@/features/farms/components/people-behind";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Our Farms",
  description:
    "Freshland Exports works with farming communities and trusted agricultural partners across India to bring carefully selected botanical ingredients to markets worldwide.",
  path: "/farms",
});

/** Server-rendered throughout; only the motion wrappers hydrate. */
export default function Page() {
  return (
    <>
      <FarmsHero />
      <OurRoots />
      <OurApproach />
      <AgriculturalNetwork />
      <PeopleBehind />
      <OurPromise />
      <FarmsCta />
    </>
  );
}
