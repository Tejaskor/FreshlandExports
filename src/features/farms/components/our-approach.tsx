import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { BotanicalLines } from "@/components/media/botanical-lines";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { ScrollScrub } from "@/animations/scroll-scrub";
import { Section } from "@/components/ui/section";
import { approach } from "@/features/farms/data";

export function OurApproach() {
  return (
    <Section
      aria-labelledby="approach-heading"
      className="relative isolate overflow-hidden bg-sage-50 lg:py-24"
    >
      <ScrollScrub
        className="absolute top-8 -right-12 -z-10 hidden w-56 text-sage-300 md:block"
        from={{ rotate: 6, y: 30 }}
        to={{ rotate: -6, y: -30 }}
        desktopOnly
      >
        <BotanicalLines className="w-full" />
      </ScrollScrub>
      <BotanicalLines className="absolute -bottom-10 -left-10 -z-10 w-44 -scale-x-100 text-sage-200" />

      <Container>
        <div className="max-w-2xl">
          <Reveal variant="rise">
            <RuledEyebrow>{approach.eyebrow}</RuledEyebrow>
          </Reveal>

          <RevealLines as="h2" id="approach-heading" className="mt-6 text-display" delay={0.05}>
            <Line>
              More Than Just <span className="text-rust">Agriculture</span>
            </Line>
          </RevealLines>

          <Reveal delay={0.2} variant="rise">
            <p className="mt-5 max-w-lg text-lead text-ink-muted">{approach.lead}</p>
          </Reveal>
        </div>

        <Reveal
          stagger={0.12}
          variant="rise"
          delay={0.1}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4"
        >
          {approach.cards.map((card, index) => (
            // Wrapper takes the entrance transform; the card owns its hover lift.
            <div key={card.title}>
              <article className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white/85 p-7 shadow-[var(--shadow-card)] backdrop-blur-sm transition-[translate,box-shadow,border-color] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:border-sage-300 hover:shadow-[var(--shadow-lift)]">
                <div className="flex items-center gap-4">
                  <Reveal variant="bloom" delay={0.3 + index * 0.12}>
                    <span className="flex size-12 items-center justify-center rounded-full bg-sage-100 text-leaf transition-[background-color,color] duration-500 ease-[var(--ease-out-expo)] group-hover:bg-leaf group-hover:text-white">
                      <Icon
                        name={card.icon}
                        className="size-5 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-rotate-12"
                      />
                    </span>
                  </Reveal>
                  <h3 className="text-[1.25rem] leading-tight">{card.title}</h3>
                </div>

                <p className="mt-5 mb-6 text-[0.9375rem] leading-relaxed text-ink-muted">
                  {card.description}
                </p>

                <span
                  aria-hidden="true"
                  className="mt-auto block h-0.5 w-12 origin-left scale-x-50 rounded-full bg-rust transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-x-100"
                />
              </article>
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
