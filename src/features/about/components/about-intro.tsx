import { PageHeader } from "@/components/layout/page-header";

export function AboutIntro() {
  return (
    <PageHeader
      eyebrow="About Us"
      title={["A botanical house", "grown from the soil up"]}
      lead="Two decades of cultivating, extracting and validating plant actives for formulators who need provenance they can audit."
    />
  );
}
