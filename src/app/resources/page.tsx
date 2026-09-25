import { PageHeader } from "@/components/layout/page-header";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Resources",
  description:
    "Documentation, specifications and field notes for formulators working with our botanical actives.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <PageHeader
      eyebrow="Resources"
      title={["Documentation", "and field notes"]}
      lead="Specifications, certificates of analysis and research notes for the teams formulating with our ingredients."
    />
  );
}
