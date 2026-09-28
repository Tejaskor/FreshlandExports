import { PageHeader } from "@/components/layout/page-header";
import { CertificatesGrid } from "@/features/certificates/components/certificates-grid";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Certificates",
  description:
    "Organic, food-safety and export certifications and registrations held by Freshland Exports.",
  path: "/certificates",
});

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Certificates"
        title={["Our Certifications"]}
        lead="The organic, food-safety and export certifications and registrations held by Freshland Exports."
      />
      <CertificatesGrid />
    </>
  );
}
