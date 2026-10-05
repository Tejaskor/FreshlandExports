import { AnchorButton } from "@/components/ui/anchor-button";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { siteConfig } from "@/config/site";
import { MoringaSprig } from "@/features/moringa/components/moringa-sprig";
import { moringaCta } from "@/features/moringa/data";
import { cn } from "@/lib/utils";

/**
 * Contact — a compact closing band on forest green: the invitation, buttons
 * and direct contact details beside the inquiry form every "Request a Quote"
 * on the page scrolls to.
 */
export function MoringaCta({ productName }: { productName: string }) {
  return (
    <section
      id="quote"
      aria-labelledby="cta-heading"
      className="relative isolate -mt-px overflow-hidden bg-forest pt-8 pb-14 text-cream lg:pt-10 lg:pb-20"
    >
      <MoringaSprig
        variant="line"
        className="absolute -bottom-16 -left-16 -z-10 h-[26rem] w-auto rotate-[-24deg] text-white/[0.06]"
      />

      <Container className="grid items-start gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal variant="rise">
            <RuledEyebrow tone="inverse" className="text-sage-300">{moringaCta.eyebrow}</RuledEyebrow>
          </Reveal>
          <RevealLines
            as="h2"
            id="cta-heading"
            className={cn(
              "mt-6 font-display text-display text-cream",
            )}
          >
            <Line>
              Bring Nature&apos;s <span className="text-leaf-bright">Goodness</span>
            </Line>
            <Line>{moringaCta.lines[1]}</Line>
          </RevealLines>
          <Reveal variant="rise" delay={0.2}>
            <p className="mt-5 max-w-md text-[1rem] leading-relaxed text-sage-100">{moringaCta.body}</p>
          </Reveal>
          <Reveal variant="rise" delay={0.3} className="mt-7 flex flex-wrap items-center gap-3">
            <AnchorButton href="#quote-form" size="md" className="font-semibold">
              Request a Quote
            </AnchorButton>
            <Button
              href="/contact"
              size="md"
              variant="outline"
              className="border-white/40 bg-transparent font-semibold text-cream hover:border-leaf-bright hover:text-leaf-bright"
            >
              Contact Our Team
            </Button>
          </Reveal>
          <Reveal variant="rise" delay={0.4} className="mt-7 space-y-3 border-t border-white/15 pt-5 text-[0.9375rem] text-sage-100">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-3 text-cream transition-colors duration-300 hover:text-leaf-bright"
            >
              <Icon name="mail" className="size-4 shrink-0 text-leaf-bright" /> {siteConfig.contact.email}
            </a>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-cream transition-colors duration-300 hover:text-leaf-bright"
            >
              <Icon name="phone" className="size-4 shrink-0 text-leaf-bright" /> {siteConfig.contact.phone}
            </a>
          </Reveal>
        </div>

        <div id="quote-form" className="scroll-mt-28 lg:col-span-7">
          <Reveal variant="rise" className="text-ink">
            <ContactForm
              title={`Inquiry: ${productName}`}
              defaultMessage={`I'd like a quote for ${productName}. `}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
