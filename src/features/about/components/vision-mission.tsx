import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { ScrollScrub } from "@/animations/scroll-scrub";
import { Section } from "@/components/ui/section";
import { RuledEyebrow } from "@/features/about/components/ruled-eyebrow";
import { visionMission } from "@/features/about/data";
import { cn } from "@/lib/utils";

const tones = {
  leaf: { disc: "bg-sage-100 text-leaf", rule: "bg-leaf" },
  ember: { disc: "bg-ember/10 text-ember", rule: "bg-ember" },
} as const;

export function VisionMission() {
  return (
    <Section
      aria-labelledby="purpose-heading"
      className="relative isolate overflow-hidden bg-cream-warm lg:py-24"
    >
      {/* Leaf plate behind the cards. The drifting layer bleeds 4% past both
          edges so its ±3% travel never uncovers a seam against the ground. */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <ScrollScrub
          className="absolute inset-x-0 -inset-y-[4%]"
          from={{ yPercent: 3 }}
          to={{ yPercent: -3 }}
          desktopOnly
        >
          <Image
            src={visionMission.media.image}
            alt={visionMission.media.alt}
            aria-hidden="true"
            fill
            sizes="100vw"
            className="object-cover object-[85%_center]"
          />
        </ScrollScrub>
        {/* Below lg the cards span the width; a veil keeps them on a calm ground. */}
        <div className="absolute inset-0 bg-cream-warm/55 lg:hidden" />
      </div>

      <Container>
        <div className="max-w-2xl">
          <Reveal variant="rise">
            <RuledEyebrow>{visionMission.eyebrow}</RuledEyebrow>
          </Reveal>

          <RevealLines as="h2" id="purpose-heading" className="mt-6 text-display" delay={0.05}>
            <Line>A Clear Purpose</Line>
            <Line>for a Better Tomorrow.</Line>
          </RevealLines>
        </div>

        <Reveal
          stagger={0.18}
          variant="rise"
          delay={0.1}
          className="mt-12 grid max-w-4xl gap-6 md:grid-cols-2 lg:mt-14 lg:gap-8 xl:max-w-[56rem]"
        >
          {visionMission.cards.map((card, index) => {
            const tone = tones[card.tone];

            return (
              // The wrapper takes GSAP's entrance transform; the card keeps
              // its own for the hover lift so the two never collide.
              <div key={card.title}>
                <article className="group relative flex h-full flex-col rounded-[var(--radius-card)] border border-sage-200 bg-cream-warm/90 p-8 shadow-[var(--shadow-card)] backdrop-blur-sm transition-[translate,box-shadow,border-color] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:border-sage-300 hover:shadow-[var(--shadow-lift)] sm:p-10">
                  <Reveal variant="bloom" delay={0.35 + index * 0.18}>
                    <span
                      className={cn(
                        "flex size-14 items-center justify-center rounded-full transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-105 group-hover:-rotate-6",
                        tone.disc,
                      )}
                    >
                      <Icon name={card.icon} className="size-6" />
                    </span>
                  </Reveal>

                  <h3 className="mt-7 text-[1.625rem] leading-tight">{card.title}</h3>
                  <p className="mt-3 mb-8 text-[1rem] leading-relaxed text-ink-muted">
                    {card.description}
                  </p>

                  <span
                    aria-hidden="true"
                    className={cn(
                      "mt-auto block h-0.5 w-16 origin-left scale-x-50 rounded-full transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-x-100",
                      tone.rule,
                    )}
                  />
                </article>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </Section>
  );
}
