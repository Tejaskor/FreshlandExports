import { PageHeader } from "@/components/layout/page-header";

export function RandDIntro() {
  return (
    <PageHeader
      eyebrow="R&D Lab"
      title={["Extraction, assay", "and validation"]}
      lead="Supercritical and low-temperature processes developed in-house, then confirmed against reference methods."
    />
  );
}
