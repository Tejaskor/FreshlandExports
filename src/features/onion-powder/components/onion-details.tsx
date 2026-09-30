import { AnchorButton } from "@/components/ui/anchor-button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { FaqAccordion } from "@/features/moringa/components/faq-accordion";
import { type } from "@/features/moringa/styles";
import {
  onionFaqs,
  onionSpecs,
  onionSpecsNote,
  onionSteps,
  onionStorage,
  onionSupply,
} from "@/features/onion-powder/data";
import { cn } from "@/lib/utils";

const subHeading =
  "font-display text-title leading-[1.05]";
const label = "type-label";

/**
 * Product Details on cream: the six-step process as a numbered rail, then
 * the specification table beside storage and global-supply panels, then
 * the FAQs split across two columns.
 */
export function OnionDetails() {
  const half = Math.ceil(onionFaqs.length / 2);

  return (
    <section aria-labelledby="details-heading" className="relative bg-cream py-14 lg:py-20">
      <Container>
        <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal variant="rise">
              <RuledEyebrow>From Farm to Fine Powder</RuledEyebrow>
            </Reveal>
            <RevealLines as="h2" id="details-heading" className={cn(type.section, "mt-5 text-forest")}>
              <Line>
                From Fresh Onions to <span className="text-rust">Fine Powder</span>
              </Line>
            </RevealLines>
          </div>
          <Reveal variant="rise" delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[0.9375rem] leading-relaxed text-ink-muted">
              Our process turns fresh onions into a convenient ingredient while maintaining their
              characteristic flavour and aroma.
            </p>
          </Reveal>
        </div>

        {/* --- Numbered rail ----------------------------------------------- */}
        <div className="relative mt-10">
          <span aria-hidden="true" className="absolute top-[0.6875rem] right-0 left-0 hidden h-0.5 bg-rust/25 lg:block" />
          <span aria-hidden="true" className="absolute top-2 bottom-2 left-[0.6875rem] w-0.5 bg-rust/25 lg:hidden" />
          <Reveal as="ol" stagger={0.07} variant="rise" className="relative grid gap-5 lg:grid-cols-6 lg:gap-6">
            {onionSteps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[1.5rem_1fr] gap-4 lg:block">
                <span aria-hidden="true" className="relative mt-0.5 flex size-6 items-center justify-center rounded-full bg-cream lg:mt-0">
                  <span className="size-3.5 rounded-full border-[3px] border-rust bg-cream" />
                </span>
                <span className="lg:mt-4 lg:block">
                  <span className={cn(label, "block text-rust")}>Step {String(index + 1).padStart(2, "0")}</span>
                  <span className="mt-1 block font-display text-heading leading-tight text-forest">
                    {step.title}
                  </span>
                  <span className="mt-1 block text-[0.8125rem] leading-relaxed text-ink-muted">{step.text}</span>
                </span>
              </li>
            ))}
          </Reveal>
        </div>

        {/* --- Specifications + storage + supply --------------------------- */}
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-12">
          <Reveal variant="rise" className="lg:col-span-7">
            <div className="h-full rounded-[1.75rem] border border-line-strong bg-white p-5 sm:p-7">
              <p className={cn(label, "text-leaf")}>Product details</p>
              <h3 id="specs-heading" className={cn(subHeading, "mt-2 text-forest")}>
                Onion Powder Specifications
              </h3>
              <table className="mt-5 w-full border-collapse text-left text-[0.9375rem]">
                <caption className="sr-only">Onion powder specifications</caption>
                <thead className="sr-only">
                  <tr>
                    <th scope="col">Parameter</th>
                    <th scope="col">Product information</th>
                  </tr>
                </thead>
                <tbody>
                  {onionSpecs.map((row) => (
                    <tr key={row.label} className="border-t border-line even:bg-cream/60">
                      <th scope="row" className="w-[42%] py-2.5 pr-4 pl-3 align-top text-[0.8125rem] font-semibold tracking-[0.04em] text-ink-muted">
                        {row.label}
                      </th>
                      <td className="py-2.5 pr-3 text-forest">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-[0.75rem] leading-relaxed text-ink-muted">{onionSpecsNote}</p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <Reveal variant="rise" delay={0.05}>
              <div className="rounded-[1.75rem] bg-sage-50 p-5 sm:p-7">
                <p className={cn(label, "text-leaf")}>Preserving freshness</p>
                <h3 className={cn(subHeading, "mt-2 text-forest")}>Storage &amp; Shelf Life</h3>
                <ul className="mt-4 space-y-2">
                  {onionStorage.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2.5 text-[0.9375rem] text-ink">
                      <Icon name="check" className="mt-1 size-4 shrink-0 text-leaf" strokeWidth={2.2} />
                      {tip}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-line-strong pt-4 text-[0.8125rem] leading-relaxed text-ink-muted">
                  <strong className="font-semibold text-forest">Shelf life:</strong> {onionStorage.shelfLife}
                </p>
              </div>
            </Reveal>

            <Reveal variant="rise" delay={0.1}>
              <div className="rounded-[1.75rem_0.5rem_1.75rem_1.75rem] bg-forest p-5 text-white sm:p-7">
                <p className={cn(label, "text-highlight-inverse")}>Freshland Exports — Global Supply</p>
                <h3 className={cn(subHeading, "mt-2")}>{onionSupply.heading}</h3>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-white/75">{onionSupply.body}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {onionSupply.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.875rem] text-white">
                      <Icon name="globe" className="mt-0.5 size-4 shrink-0 text-highlight-inverse" />
                      {item}
                    </li>
                  ))}
                </ul>
                <AnchorButton href="#quote-form" size="md" className="mt-6 font-semibold">
                  Request Export Pricing
                </AnchorButton>
              </div>
            </Reveal>
          </div>
        </div>

        {/* --- FAQs --------------------------------------------------------- */}
        <div className="mt-14 border-t border-line-strong pt-12 lg:mt-16 lg:pt-14">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className={cn(label, "text-rust")}>Got questions?</p>
              <h3 className={cn(subHeading, "mt-2 text-forest")}>
                Frequently Asked Questions About Onion Powder
              </h3>
            </div>
          </div>
          <Reveal variant="rise" className="mt-6 grid gap-2.5 lg:grid-cols-2 lg:gap-5">
            <FaqAccordion items={onionFaqs.slice(0, half)} />
            <FaqAccordion items={onionFaqs.slice(half)} offset={half} defaultOpen={null} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
