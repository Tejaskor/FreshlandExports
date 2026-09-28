import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { Section } from "@/components/ui/section";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { coreValues } from "@/features/about/data";

/**
 * Four values on hairlines rather than in cards — the section should feel
 * like a principle sheet, not a pricing table.
 */
export function CoreValues() {
  return (
    <Section aria-labelledby="values-heading" className="bg-canvas lg:py-24">
      <Container>
        <Reveal variant="rise">
          <RuledEyebrow>{coreValues.eyebrow}</RuledEyebrow>
        </Reveal>

        <RevealLines as="h2" id="values-heading" className="mt-6 text-display" delay={0.05}>
          <Line>{coreValues.heading}</Line>
        </RevealLines>

        <Reveal
          as="ul"
          stagger={0.14}
          variant="rise"
          delay={0.1}
          className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-x-12"
        >
          {coreValues.values.map((value, index) => (
            <li key={value.title} className="group relative border-t border-line pt-8">
              {/* Hover draws a leaf-green stroke over the hairline. */}
              <span
                aria-hidden="true"
                className="absolute -top-px left-0 h-px w-full origin-left scale-x-0 bg-leaf transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-x-100"
              />

              <Reveal variant="bloom" delay={0.3 + index * 0.14}>
                <span className="flex size-16 items-center justify-center rounded-full bg-sage-100 text-forest transition-[background-color,color] duration-500 ease-[var(--ease-out-expo)] group-hover:bg-leaf group-hover:text-white">
                  <Icon
                    name={value.icon}
                    className="size-7 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-0.5 group-hover:scale-110"
                  />
                </span>
              </Reveal>

              <h3 className="mt-6 text-[1.375rem] leading-tight">{value.title}</h3>
              <p className="mt-3 max-w-xs text-[0.9375rem] leading-relaxed text-ink-muted">
                {value.description}
              </p>
            </li>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
