import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { Section } from "@/components/ui/section";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { coreValues } from "@/features/about/data";

/**
 * Four values as open columns rather than boxed cards — the section should
 * feel like a principle sheet, not a pricing table. Only hover frames one.
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
            <li key={value.title} className="group relative pt-8">
              {/* Hover draws a rounded leaf-green outline around the whole
                  value, clockwise from the top-left corner, and unwinds when
                  the pointer leaves. The SVG has no viewBox, so the rect is
                  sized in real pixels and follows the card at every
                  breakpoint; pathLength=1 lets the dash run 1 → 0 whatever the
                  perimeter. It sits in the gutter and grid gaps, so the card's
                  own size and spacing are untouched. Under reduced motion the
                  outline simply appears. */}
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute -top-3 -left-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)] overflow-visible text-leaf sm:-top-5 sm:-left-5 sm:h-[calc(100%+2.5rem)] sm:w-[calc(100%+2.5rem)]"
              >
                <rect
                  width="100%"
                  height="100%"
                  rx="20"
                  pathLength={1}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.25}
                  className="[stroke-dasharray:1] [stroke-dashoffset:1] transition-[stroke-dashoffset] duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:[stroke-dashoffset:0] motion-reduce:transition-none"
                />
              </svg>

              <Reveal variant="bloom" delay={0.3 + index * 0.14}>
                <span className="flex size-16 items-center justify-center rounded-full bg-sage-100 text-forest">
                  <Icon
                    name={value.icon}
                    className="size-7"
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
