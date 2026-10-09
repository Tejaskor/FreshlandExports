import { LegalPage } from "@/features/legal/components/legal-page";
import { policyLastUpdated, privacyIntro, privacySections } from "@/features/legal/privacy-policy";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How Freshland Exports collects, uses, shares and protects information submitted through its website, enquiry, quotation and brochure forms.",
  path: "/privacy-policy",
});

/** Content lives in features/legal/privacy-policy.ts. */
export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" intro={privacyIntro} lastUpdated={policyLastUpdated} sections={privacySections} />
  );
}
