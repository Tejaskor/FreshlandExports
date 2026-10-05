import { AnchorButton } from "@/components/ui/anchor-button";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { siteConfig } from "@/config/site";
import { TurmericSun } from "@/features/turmeric-powder/components/turmeric-sun";
import { turmericCta } from "@/features/turmeric-powder/data";

/**
 * Contact: a deep-green band lit by a golden glow, with the inquiry form on
 * the left and the invitation on the right. The form's message is
 * pre-filled with the enquiry details the supplied brief asks for.
 */
export function TurmericContact({ productName }: { productName: string }) {
  return (
    <section
      id="quote"
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden bg-forest-deep py-14 text-white lg:py-20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(45%_70%_at_85%_20%,rgb(214_166_72/0.22)_0%,transparent_70%)]"
      />
      <TurmericSun className="absolute -top-24 right-[6%] -z-10 hidden size-80 text-[var(--t-gold)]/15 lg:block" />

      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:order-2 lg:col-span-5">
          <Reveal variant="rise">
            <RuledEyebrow tone="inverse">{turmericCta.eyebrow}</RuledEyebrow>
          </Reveal>
          <RevealLines
            as="h2"
            id="cta-heading"
            className="mt-6 font-display text-display text-white"
          >
            <Line>{turmericCta.heading[0]}</Line>
            <Line>
              <span className="text-[var(--t-gold)]">{turmericCta.heading[1]}</span>
            </Line>
          </RevealLines>
          <Reveal variant="rise" delay={0.15} className="mt-5 space-y-3">
            {turmericCta.body.map((paragraph) => (
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
              className="border-white/30 bg-transparent font-semibold text-white hover:border-[var(--t-gold)] hover:text-[var(--t-gold)]"
            >
              Contact Our Team
            </Button>
          </Reveal>
          <Reveal variant="rise" delay={0.35} className="mt-7 space-y-3 border-t border-white/15 pt-5 text-[0.9375rem]">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-3 transition-colors duration-300 hover:text-[var(--t-gold)]"
            >
              <Icon name="mail" className="size-4 shrink-0" /> {siteConfig.contact.email}
            </a>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 transition-colors duration-300 hover:text-[var(--t-gold)]"
            >
              <Icon name="phone" className="size-4 shrink-0" /> {siteConfig.contact.phone}
            </a>
            <p className="pt-2 font-display text-heading leading-snug text-[var(--t-gold)]">
              {turmericCta.signoff}
            </p>
          </Reveal>
        </div>

        <div id="quote-form" className="scroll-mt-28 lg:order-1 lg:col-span-7">
          <Reveal variant="rise" className="text-ink">
            <ContactForm
              title={`Inquiry: ${productName}`}
              defaultMessage={`I'd like a quote for ${productName}.\nCompany: \nRequired quantity: \nPackaging preference: \n`}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
