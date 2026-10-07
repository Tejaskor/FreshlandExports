import { CertificatesGrid } from "@/features/certificates/components/certificates-grid";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Certificates",
  description:
    "Food safety, organic, export and quality certifications and registrations held by Freshland Exports, including FSSC 22000, FSSAI, APEDA, NPOP, USDA Organic and EU Organic.",
  path: "/certificates",
});

export default function Page() {
  return <CertificatesGrid />;
}
