import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";

// No published case studies yet: the page stays out of search results and
// the sitemap until the first one is written.
export const metadata = createMetadata({
  title: "Case Studies",
  description: "Case studies from Freshland Exports on sourcing, quality and supply for buyers worldwide.",
  path: "/case-studies",
  noIndex: true,
});

export default function CaseStudiesPage() {
  return (
    <Section className="flex min-h-[70vh] items-center bg-cream pt-32 lg:pt-36">
      <Container>
        <Eyebrow>Resources</Eyebrow>
        <h1 className="mt-6 max-w-[16ch] text-display">Case Studies</h1>
        <p className="mt-5 max-w-md text-lead text-ink-muted">
          We are preparing case studies on how we work with buyers on sourcing, quality and supply. In the
          meantime, our blog covers buyer guidance across our product range.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/resources">Read Our Blog</Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </Container>
    </Section>
  );
}
