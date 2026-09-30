import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { Section } from "@/components/ui/section";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { whyChoose } from "@/features/about/data";

export function WhyChoose() {
  return (
    <Section aria-labelledby="why-heading" className="overflow-hidden bg-cream-warm lg:py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          <Reveal variant="rise">
            <RuledEyebrow>{whyChoose.eyebrow}</RuledEyebrow>
          </Reveal>

          <RevealLines as="h2" id="why-heading" className="mt-6 text-display" delay={0.05}>
            <Line>Your Partner for</Line>
            <Line>Natural Ingredients</Line>
          </RevealLines>

          <Reveal
            as="ul"
            stagger={0.12}
            variant="sweep-left"
            delay={0.15}
            className="mt-10 space-y-7"
          >
            {whyChoose.features.map((feature) => (
              <li key={feature.title} className="group flex gap-5">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-rust/10 text-rust transition-[background-color,color] duration-500 ease-[var(--ease-out-expo)] group-hover:bg-rust group-hover:text-white">
                  <Icon
                    name={feature.icon}
                    className="size-5 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-[-8deg]"
                  />
                </span>
                <div>
                  <h3 className="font-sans text-[1.0625rem] font-semibold tracking-normal text-forest">
                    {feature.title}
                  </h3>
                  <p className="mt-1 max-w-md text-[0.9375rem] leading-relaxed text-ink-muted">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </Reveal>

          <Reveal delay={0.3} variant="rise" className="mt-10">
            <Link
              href={whyChoose.cta.href}
              className="group/link inline-flex items-center gap-2.5 text-[0.9375rem] font-medium text-forest transition-colors duration-300 hover:text-leaf"
            >
              {/* Underline draws in from the left rather than snapping on. */}
              <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 ease-[var(--ease-out-expo)] group-hover/link:bg-[length:100%_1px]">
                {whyChoose.cta.label}
              </span>
              <Icon
                name="arrow-right"
                className="size-4 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover/link:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>

        <Reveal variant="bloom" className="relative">
          {/* Soft sage plinth offset behind the photograph. */}
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 h-2/3 w-2/3 rounded-[2rem] bg-sage-100 sm:-bottom-6 sm:-left-6"
          />
          <Parallax
            className="group relative aspect-[4/3] w-full rounded-[2rem] shadow-[var(--shadow-figure)] sm:aspect-[5/4] lg:aspect-[9/10]"
            amount={10}
            zoom={0.08}
          >
            <Figure
              image={whyChoose.media.image}
              alt={whyChoose.media.alt}
              art={whyChoose.media.art}
              // Portrait 9:10 frame on desktop crops a 1.28:1 photo by height,
              // then the parallax overscans ~1.26x.
              sizes="(min-width: 1024px) min(81vw, 1100px), 130vw"
              className="h-full w-full"
              mediaClassName="object-[44%_center] transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
            />
          </Parallax>
        </Reveal>
      </Container>
    </Section>
  );
}
