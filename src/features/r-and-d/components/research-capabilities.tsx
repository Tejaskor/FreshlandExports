import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { BotanicalLines } from "@/components/media/botanical-lines";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { Section } from "@/components/ui/section";
import { capabilities } from "@/features/r-and-d/data";

export function ResearchCapabilities() {
  return (
    <Section
      aria-labelledby="capabilities-heading"
      className="relative isolate overflow-hidden bg-sage-50 lg:py-24"
    >
      <BotanicalLines className="absolute -top-12 -right-10 -z-10 hidden w-52 text-sage-200 md:block" />

      <Container>
        <Reveal variant="rise">
          <RuledEyebrow>{capabilities.eyebrow}</RuledEyebrow>
        </Reveal>

        <RevealLines as="h2" id="capabilities-heading" className="mt-6 text-display" delay={0.05}>
          <Line>Our Research Capabilities</Line>
        </RevealLines>

        <Reveal
          stagger={0.12}
          variant="rise"
          delay={0.1}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4"
        >
          {capabilities.cards.map((card, index) => (
            // Wrapper takes the entrance transform; the card owns its hover lift.
            <div key={card.title}>
              <article className="group relative flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-7 shadow-[var(--shadow-card)] transition-[translate,box-shadow,border-color] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:border-sage-300 hover:shadow-[var(--shadow-lift)]">
                <Reveal variant="bloom" delay={0.3 + index * 0.12}>
                  <span className="flex size-12 items-center justify-center rounded-full bg-ember/10 text-ember transition-[background-color,color] duration-500 ease-[var(--ease-out-expo)] group-hover:bg-ember group-hover:text-white">
                    <Icon
                      name={card.icon}
                      className="size-6 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-rotate-8"
                    />
                  </span>
                </Reveal>

                <h3 className="mt-6 text-[1.25rem] leading-tight">{card.title}</h3>
                <p className="mt-3 mb-6 text-[0.9375rem] leading-relaxed text-ink-muted">
                  {card.description}
                </p>

                <Link
                  href={card.link.href}
                  className="group/link mt-auto inline-flex items-center gap-2 self-start text-[0.875rem] font-medium text-ember-deep transition-colors duration-300 hover:text-ember"
                >
                  <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 ease-[var(--ease-out-expo)] group-hover/link:bg-[length:100%_1px]">
                    {card.link.label}
                  </span>
                  <Icon
                    name="arrow-right"
                    className="size-3.5 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover/link:translate-x-1"
                  />
                  <span className="sr-only"> about {card.title}</span>
                </Link>
              </article>
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
