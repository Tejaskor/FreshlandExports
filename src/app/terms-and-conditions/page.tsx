import { LegalPage } from "@/features/legal/components/legal-page";
import { termsIntro, termsLastUpdated, termsSections } from "@/features/legal/terms";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms & Conditions",
  description:
    "The terms that govern use of the Freshland Exports website, its product information, enquiry and quotation forms, and published minimum order quantities.",
  path: "/terms-and-conditions",
});

/** Content lives in features/legal/terms.ts. */
export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" intro={termsIntro} lastUpdated={termsLastUpdated} sections={termsSections} />
  );
}
