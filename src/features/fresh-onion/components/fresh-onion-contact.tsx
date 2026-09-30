import { AnchorButton } from "@/components/ui/anchor-button";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { siteConfig } from "@/config/site";
import { freshOnionCta } from "@/features/fresh-onion/data";

/**
 * Contact & Export Enquiry on light cream: the invitation and buttons on
 * the left, the existing inquiry form on the right. The form's message is
 * pre-filled with the product and the details a bulk buyer needs to give.
 */
export function FreshOnionContact() {
  return (
    <section
      id="quote"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden border-t border-line bg-cream-warm py-14 lg:py-20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(40%_60%_at_80%_50%,rgb(90_161_95/0.12)_0%,transparent_70%)]"
      />
      <Container className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal variant="rise">
            <RuledEyebrow>{freshOnionCta.eyebrow}</RuledEyebrow>
          </Reveal>
          <RevealLines
            as="h2"
            id="cta-heading"
            className="mt-6 font-display text-display text-forest"
          >
            <Line>{freshOnionCta.heading[0]}</Line>
            <Line>
              <span className="text-leaf">{freshOnionCta.heading[1]}</span>
            </Line>
          </RevealLines>
          <Reveal variant="rise" delay={0.15} className="mt-5 space-y-3">
            {freshOnionCta.body.map((paragraph) => (
              <p key={paragraph} className="text-[1rem] leading-relaxed text-ink-muted">
                {paragraph}
              </p>
            ))}
          </Reveal>
          <Reveal variant="rise" delay={0.25} className="mt-7 flex flex-wrap items-center gap-3">
            <AnchorButton href="#quote-form" size="md" className="font-semibold">
              Request a Quote
            </AnchorButton>
            <Button href="/contact" size="md" variant="outline" className="font-semibold">
              Contact Our Team
            </Button>
          </Reveal>
          <Reveal variant="rise" delay={0.35} className="mt-7 space-y-3 border-t border-line-strong pt-5 text-[0.9375rem]">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-3 text-forest transition-colors duration-300 hover:text-leaf"
            >
              <Icon name="mail" className="size-4 shrink-0" /> {siteConfig.contact.email}
            </a>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-forest transition-colors duration-300 hover:text-leaf"
            >
              <Icon name="phone" className="size-4 shrink-0" /> {siteConfig.contact.phone}
            </a>
          </Reveal>
        </div>

        <div id="quote-form" className="scroll-mt-28 lg:col-span-7">
          <Reveal variant="rise">
            <ContactForm
              title="Inquiry: Fresh Onions"
              defaultMessage={"I'd like a quote for Fresh Onions.\nCompany: \nRequired quantity: \nPackaging preference: \n"}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
