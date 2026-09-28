import { Button } from "@/components/ui/button";
import { ClipReveal } from "@/animations/clip-reveal";
import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { BotanicalLines } from "@/components/media/botanical-lines";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { Section } from "@/components/ui/section";
import { network } from "@/features/farms/data";

export function AgriculturalNetwork() {
  return (
    <Section aria-labelledby="network-heading" className="relative isolate overflow-hidden bg-canvas lg:py-24">
      <BotanicalLines className="absolute top-1/3 -left-14 -z-10 hidden w-40 -rotate-12 text-sage-200 lg:block" />

      <Container className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.4fr] lg:gap-14">
        <div className="max-w-md">
          <Reveal variant="rise">
            <RuledEyebrow>{network.eyebrow}</RuledEyebrow>
          </Reveal>

          <RevealLines as="h2" id="network-heading" className="mt-6 text-display" delay={0.05}>
            <Line>Connecting Farms to</Line>
            <Line className="text-ember">Global Markets</Line>
          </RevealLines>

          <Reveal delay={0.2} variant="rise">
            <p className="mt-5 text-[1rem] leading-relaxed text-ink-muted">{network.body}</p>
          </Reveal>
        </div>

        <Reveal stagger={0.16} variant="rise" delay={0.1} className="grid gap-6 sm:grid-cols-2">
          {network.cards.map((card, index) => (
            <div key={card.title}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-card)] transition-[translate,box-shadow] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                <ClipReveal from="up" delay={0.2 + index * 0.16} className="aspect-[16/10] overflow-hidden">
                  <Figure
                    image={card.media.image}
                    alt={card.media.alt}
                    art={card.media.art}
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full"
                    mediaClassName="transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]"
                  />
                </ClipReveal>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-[1.25rem] leading-tight">{card.title}</h3>
                  <p className="mt-3 mb-6 text-[0.9375rem] leading-relaxed text-ink-muted">
                    {card.description}
                  </p>
                  <Button href={card.cta.href} size="sm" className="mt-auto self-start">
                    {card.cta.label}
                  </Button>
                </div>
              </article>
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
