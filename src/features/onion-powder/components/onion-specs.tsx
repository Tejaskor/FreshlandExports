import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { type } from "@/features/moringa/styles";
import { onionSpecs, onionSpecsNote } from "@/features/onion-powder/data";
import { cn } from "@/lib/utils";

/** Product Specifications on white: heading and note beside one readable table. The hero's "View Specifications" lands here. */
export function OnionSpecs() {
  return (
    <section id="specifications" aria-labelledby="specs-heading" className="scroll-mt-24 bg-white py-14 lg:py-20">
      <Container className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <Reveal variant="rise">
            <RuledEyebrow>Product Specifications</RuledEyebrow>
          </Reveal>
          <RevealLines as="h2" id="specs-heading" className={cn(type.section, "mt-5 text-forest")}>
            <Line>Onion Powder</Line>
            <Line>
              <span className="text-rust">Specifications</span>
            </Line>
          </RevealLines>
          <Reveal variant="rise" delay={0.1}>
            <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-ink-muted">{onionSpecsNote}</p>
          </Reveal>
        </div>

        <Reveal variant="rise" delay={0.1} className="lg:col-span-8">
          <div className="overflow-hidden rounded-[1.5rem] border border-line-strong">
            <table className="w-full border-collapse text-left text-[1rem]">
              <caption className="sr-only">Onion powder specifications</caption>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col">Detail</th>
                </tr>
              </thead>
              <tbody>
                {onionSpecs.map((row) => (
                  <tr key={row.label} className="border-t border-line first:border-t-0 even:bg-cream/70">
                    <th scope="row" className="w-[42%] px-5 py-3.5 align-top text-[0.9375rem] font-semibold text-ink-muted sm:px-6">
                      {row.label}
                    </th>
                    <td className="px-5 py-3.5 text-forest sm:px-6">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
