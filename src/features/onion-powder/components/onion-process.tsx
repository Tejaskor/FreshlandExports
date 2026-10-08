import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { type } from "@/features/moringa/styles";
import { onionSteps } from "@/features/onion-powder/data";
import { cn } from "@/lib/utils";

/** Processing & Quality on cream: four steps on a rail — across on desktop, down the left on smaller screens. */
export function OnionProcess() {
  return (
    <section aria-labelledby="process-heading" className="bg-cream py-14 lg:py-20">
      <Container>
        <Reveal variant="rise">
          <RuledEyebrow>Processing &amp; Quality</RuledEyebrow>
        </Reveal>
        <RevealLines as="h2" id="process-heading" className={cn(type.section, "mt-5 text-forest")}>
          <Line>
            From Fresh Onions to <span className="text-rust">Fine Powder</span>
          </Line>
        </RevealLines>

        <div className="relative mt-10 lg:mt-12">
          <span aria-hidden="true" className="absolute top-[0.6875rem] right-0 left-0 hidden h-0.5 bg-rust/25 lg:block" />
          <span aria-hidden="true" className="absolute top-2 bottom-2 left-[0.6875rem] w-0.5 bg-rust/25 lg:hidden" />
          <Reveal as="ol" stagger={0.08} variant="rise" className="relative grid gap-7 lg:grid-cols-4 lg:gap-10">
            {onionSteps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[1.5rem_1fr] gap-4 lg:block">
                <span aria-hidden="true" className="relative mt-0.5 flex size-6 items-center justify-center rounded-full bg-cream lg:mt-0">
                  <span className="size-3.5 rounded-full border-[3px] border-rust bg-cream" />
                </span>
                <span className="lg:mt-5 lg:block">
                  <span className="block font-display text-[1rem] font-medium text-rust">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block font-display text-[1.375rem] leading-tight text-forest">{step.title}</span>
                  <span className="mt-2 block max-w-xs text-[0.9375rem] leading-relaxed text-ink-muted">{step.text}</span>
                </span>
              </li>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
