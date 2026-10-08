import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { type } from "@/features/moringa/styles";
import { onionStorage } from "@/features/onion-powder/data";
import { cn } from "@/lib/utils";

/** Storage & Handling on white: the guidance beside a small panel of packaging and shelf-life notes. */
export function OnionStorage() {
  return (
    <section aria-labelledby="storage-heading" className="bg-white py-14 lg:py-20">
      <Container className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <Reveal variant="rise">
            <RuledEyebrow>Storage &amp; Handling</RuledEyebrow>
          </Reveal>
          <RevealLines as="h2" id="storage-heading" className={cn(type.section, "mt-5 text-forest")}>
            <Line>
              Storage &amp; <span className="text-rust">Shelf Life</span>
            </Line>
          </RevealLines>
          <Reveal variant="rise" delay={0.1}>
            <p className="mt-6 max-w-2xl text-lead text-ink-muted">{onionStorage.body}</p>
          </Reveal>
        </div>

        <Reveal variant="rise" delay={0.15} className="lg:col-span-5">
          <dl className="rounded-[1.5rem] bg-sage-50 p-6 sm:p-8">
            {onionStorage.facts.map((fact) => (
              <div key={fact.label} className="border-t border-line-strong py-4 first:border-t-0 first:pt-0 last:pb-0">
                <dt className="text-[0.9375rem] font-semibold text-ink-muted">{fact.label}</dt>
                <dd className="mt-1 font-display text-[1.25rem] leading-snug text-forest">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
