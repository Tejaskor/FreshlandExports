import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { faqHeading, homeFaqs } from "@/features/faqs/data";
import { FaqAccordion } from "@/features/moringa/components/faq-accordion";
import { FaqJsonLd } from "@/components/seo/json-ld";

/**
 * Homepage FAQs, between the brochure panel and the contact band: five
 * questions beside their heading, with a link to the full list on /faqs.
 * Continues the brochure section's white ground, so it adds no top padding.
 */
export function HomeFaq() {
  return (
    <section aria-labelledby="home-faq-heading" className="bg-white pb-14 lg:pb-20">
      <Container className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <RevealLines as="h2" id="home-faq-heading" className="font-display text-display text-forest">
              <Line>{faqHeading}</Line>
            </RevealLines>
            <Reveal variant="rise" delay={0.1}>
              <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-ink-muted">
                Quick answers on our products, minimum orders, quotations and export enquiries.
              </p>
              <Button href="/faqs" variant="outline" withArrow className="mt-6">
                View All FAQs
              </Button>
            </Reveal>
          </div>
        </div>
        <Reveal variant="rise" delay={0.1} className="lg:col-span-8">
          <FaqAccordion items={homeFaqs} headingLevel={3} />
          <FaqJsonLd items={homeFaqs} />
        </Reveal>
      </Container>
    </section>
  );
}
