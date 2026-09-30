import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { BotanicalLines } from "@/components/media/botanical-lines";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { Section } from "@/components/ui/section";
import { promise } from "@/features/farms/data";

export function OurPromise() {
  return (
    <Section aria-labelledby="promise-heading" className="relative isolate overflow-hidden bg-cream lg:py-24">
      <BotanicalLines className="absolute -top-10 -left-12 -z-10 hidden w-44 text-sage-200 md:block" />

      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div className="max-w-xl">
          <Reveal variant="rise">
            <RuledEyebrow>{promise.eyebrow}</RuledEyebrow>
          </Reveal>

          <RevealLines as="h2" id="promise-heading" className="mt-6 text-display" delay={0.05}>
            <Line>From Farm to</Line>
            <Line className="text-rust">Finished Ingredient</Line>
          </RevealLines>

          <Reveal stagger={0.12} delay={0.2} variant="rise" className="mt-6 space-y-4">
            {promise.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[1rem] leading-relaxed text-ink-muted">
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>

        <Reveal
          as="ul"
          stagger={0.15}
          variant="rise"
          delay={0.15}
          className="grid gap-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-line"
        >
          {promise.features.map((feature, index) => (
            <li key={feature.title} className="group text-center sm:px-6">
              <Reveal variant="bloom" delay={0.35 + index * 0.15}>
                {/* Double ring: an outer hairline around a filled disc. */}
                <span className="mx-auto flex size-20 items-center justify-center rounded-full border border-sage-300 p-1.5 transition-[border-color] duration-500 group-hover:border-leaf">
                  <span className="flex size-full items-center justify-center rounded-full bg-sage-100 text-leaf transition-[background-color,color] duration-500 ease-[var(--ease-out-expo)] group-hover:bg-leaf group-hover:text-white">
                    <Icon
                      name={feature.icon}
                      className="size-7 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-110"
                    />
                  </span>
                </span>
              </Reveal>
              <h3 className="mt-6 text-[1.25rem] leading-tight">{feature.title}</h3>
              <p className="mx-auto mt-2.5 max-w-[14rem] text-[0.9375rem] leading-relaxed text-ink-muted">
                {feature.description}
              </p>
            </li>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
