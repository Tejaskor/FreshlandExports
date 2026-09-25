import { QualityIntro } from "@/features/quality/components/quality-intro";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Quality",
  description: "Certified systems, documented controls and independent verification on every batch.",
  path: "/quality",
});

export default function Page() {
  return <QualityIntro />;
}
