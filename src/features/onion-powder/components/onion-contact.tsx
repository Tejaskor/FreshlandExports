import { AnchorButton } from "@/components/ui/anchor-button";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { siteConfig } from "@/config/site";
import { onionCta } from "@/features/onion-powder/data";
import { OnionRings } from "@/features/onion-powder/components/onion-rings";

/**
 * Contact: a deep-green card sitting on white, the invitation on the left
 * and the existing inquiry form on the right. The form's message is
 * pre-filled with the details a bulk buyer usually needs to give.
 */
export function OnionContact({ productName }: { productName: string }) {
  return (
    <section id="quote" aria-labelledby="cta-heading" className="bg-white py-10 lg:py-16">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-forest-deep px-5 py-10 text-white sm:px-10 lg:rounded-[2.75rem] lg:px-14 lg:py-14">
          <OnionRings className="absolute -bottom-48 -left-48 -z-10 size-[36rem] text-highlight-inverse/[0.08]" />

          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <Reveal variant="rise">
                <RuledEyebrow tone="inverse">{onionCta.eyebrow}</RuledEyebrow>
              </Reveal>
              <RevealLines
                as="h2"
                id="cta-heading"
                className="mt-6 font-display text-display text-white"
              >
                <Line>{onionCta.heading[0]}</Line>
                <Line>
                  <span className="text-highlight-inverse">{onionCta.heading[1]}</span>
                </Line>
              </RevealLines>
              <Reveal variant="rise" delay={0.15} className="mt-5 space-y-3">
                {onionCta.body.map((paragraph) => (
                  <p key={paragraph} className="text-[0.9375rem] leading-relaxed text-white/80">
                    {paragraph}
                  </p>
                ))}
              </Reveal>
              <Reveal variant="rise" delay={0.25} className="mt-7 flex flex-wrap items-center gap-3">
                <AnchorButton href="#quote-form" size="md" className="font-semibold">
                  Request a Quote
                </AnchorButton>
                <Button
                  href="/contact"
                  size="md"
                  variant="outline"
                  className="border-white/30 bg-transparent font-semibold text-white hover:border-highlight-inverse hover:text-highlight-inverse"
                >
                  Contact Us
                </Button>
              </Reveal>
              <Reveal variant="rise" delay={0.35} className="mt-7 space-y-3 border-t border-white/15 pt-5 text-[0.9375rem]">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 transition-colors duration-300 hover:text-highlight-inverse"
                >
                  <Icon name="mail" className="size-4 shrink-0" /> {siteConfig.contact.email}
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 transition-colors duration-300 hover:text-highlight-inverse"
                >
                  <Icon name="phone" className="size-4 shrink-0" /> {siteConfig.contact.phone}
                </a>
                <p className="pt-2 font-display text-heading leading-snug text-highlight-inverse">
                  {onionCta.signoff}
                </p>
              </Reveal>
            </div>

            <div id="quote-form" className="scroll-mt-28 lg:col-span-7">
              <Reveal variant="rise" className="text-ink">
                <ContactForm
                  title={`Inquiry: ${productName}`}
                  defaultMessage={`I'd like a quote for ${productName}.\nCompany: \nRequired quantity: \nPackaging preference: \n`}
                />
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
