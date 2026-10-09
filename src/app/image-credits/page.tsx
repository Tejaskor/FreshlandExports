import { LegalPage } from "@/features/legal/components/legal-page";
import { creditsIntro, creditsSections } from "@/features/legal/image-credits";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Image Credits",
  description: "Authors, sources and licences of the third-party photographs used on the Freshland Exports website.",
  path: "/image-credits",
});

/** Content is built in features/legal/image-credits.ts. */
export default function ImageCreditsPage() {
  return <LegalPage title="Image Credits" intro={creditsIntro} lastUpdated={null} sections={creditsSections} />;
}
