import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { faqHeading } from "@/features/faqs/data";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { MoqPanel } from "@/features/products/components/moq-panel";
import { moqFor } from "@/features/products/moq";
import { type } from "@/features/moringa/styles";
import { onionFaqs, onionMoqBody } from "@/features/onion-powder/data";
import { cn } from "@/lib/utils";
import { FaqJsonLd } from "@/components/seo/json-ld";

/** MOQ + FAQ on cream: the shared minimum-order card, then the questions beside their heading. */
export function OnionFaq() {
  return (
    <section aria-labelledby="faq-heading" className="bg-cream py-14 lg:py-20">
      <Container>
        <MoqPanel value={moqFor("onion-powder")} body={onionMoqBody} ctaArrow className="bg-white" accentClassName="text-forest" />

        <div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <RevealLines as="h2" id="faq-heading" className={cn(type.section, "text-forest")}>
              <Line>{faqHeading}</Line>
            </RevealLines>
          </div>
          <Reveal variant="rise" delay={0.1} className="lg:col-span-8">
            <FaqAccordion items={onionFaqs} />
            <FaqJsonLd items={onionFaqs} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
