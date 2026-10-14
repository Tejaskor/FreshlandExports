import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/animations/reveal";
import { faqHeading, mainFaqs } from "@/features/faqs/data";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { createMetadata, ogCard } from "@/lib/seo";
import { FaqJsonLd } from "@/components/seo/json-ld";

export const metadata = createMetadata({
  image: ogCard("faqs", "Frequently asked questions about Freshland Exports products and export enquiries"),
  title: "Frequently Asked Questions",
  description:
    "Answers for B2B buyers on Freshland Exports products, minimum order quantities, quotations, specifications, quality documents, packaging and export enquiries.",
  path: "/faqs",
});

/**
 * /faqs — the 15 main questions (features/faqs/data.ts) as one accordion,
 * then a contact prompt. Linked from the footer only. The FAQPage data
 * repeats exactly the questions and answers on the page.
 */
export default function FaqsPage() {
  return (
    <>
      <PageHeader
        align="center"
        title={[faqHeading]}
        lead="Answers to help buyers understand our products, ordering, quality, packaging and export enquiries."
      />

      <section aria-label="Questions and answers" className="bg-cream pb-14 lg:pb-20">
        <Container>
          <Reveal variant="rise">
            <FaqAccordion items={mainFaqs} headingLevel={2} />
          </Reveal>

          <Reveal variant="rise" className="mt-12 lg:mt-16">
            <div className="flex flex-col items-center gap-6 rounded-[2rem] bg-forest-deep px-6 py-8 text-center sm:px-10 sm:py-10">
              <div>
                <h2 className="font-display text-title text-cream">Need more information?</h2>
                <p className="mx-auto mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-sage-200">
                  Tell us the products you need, your quantity and destination, and our team will get back to you.
                </p>
              </div>
              <Button href="/contact" variant="primary" withArrow>
                Contact Our Team
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <FaqJsonLd items={mainFaqs} />
    </>
  );
}
