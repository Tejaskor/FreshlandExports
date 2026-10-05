import { AnchorButton } from "@/components/ui/anchor-button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { FaqAccordion } from "@/features/moringa/components/faq-accordion";
import { MoqPanel } from "@/features/products/components/moq-panel";
import { findMoq } from "@/features/products/moq";
import { type } from "@/features/moringa/styles";
import { TurmericSun } from "@/features/turmeric-powder/components/turmeric-sun";
import {
  turmericFaqs,
  turmericSpecs,
  turmericStorage,
  turmericWhyChoose,
} from "@/features/turmeric-powder/data";
import { cn } from "@/lib/utils";

const subHeading =
  "font-display text-title leading-[1.05]";
const label = "type-label";

/**
 * Product Details on white: a golden specification panel beside the
 * "why choose us" and storage panels, then the FAQs as one centred column.
 */
export function TurmericDetails() {
  return (
    <section aria-labelledby="details-heading" className="relative bg-white py-14 lg:py-20">
      <Container>
        <div className="max-w-3xl">
          <Reveal variant="rise">
            <RuledEyebrow>Why Choose Freshland Exports?</RuledEyebrow>
          </Reveal>
          <RevealLines as="h2" id="details-heading" className={cn(type.section, "mt-5 text-forest")}>
            <Line>Your Partner for Quality</Line>
            <Line>
              <span className="text-rust">Agricultural Exports</span>
            </Line>
          </RevealLines>
        </div>

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-12">
          {/* --- Specification panel ------------------------------------------ */}
          <Reveal variant="rise" className="lg:col-span-7">
            <div className="relative isolate h-full overflow-hidden rounded-[2rem] border border-[var(--t-gold)]/45 bg-[var(--t-pale)] p-5 sm:p-8">
              <TurmericSun className="absolute -right-16 -bottom-16 -z-10 size-64 text-[var(--t-gold)]/25" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 id="specs-heading" className="font-display text-[1.6rem] leading-none font-medium text-forest">
                  Product Specifications
                </h3>
                <p className={cn(label, "text-rust")}>Turmeric · Powder</p>
              </div>
              <dl className="mt-5 grid gap-x-8 sm:grid-cols-2">
                {turmericSpecs.map((row) => (
                  <div key={row.label} className="border-t border-[var(--t-gold)]/40 py-3">
                    <dt className="type-label text-ink-muted">{row.label}</dt>
                    <dd className="mt-1">
                      {row.pending ? (
                        <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-rust/50 px-3 py-0.5 text-[0.8125rem] text-rust">
                          <span aria-hidden="true" className="size-1.5 rounded-full bg-rust" />
                          {row.value}
                        </span>
                      ) : (
                        <span className="font-display text-heading leading-tight text-forest">{row.value}</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <AnchorButton href="#quote-form" size="md" className="font-semibold">
                  Request Specifications
                </AnchorButton>
                <p className="max-w-xs text-[0.8125rem] leading-relaxed text-ink-muted">
                  Curcumin content and export specifications are shared on enquiry.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-5">
            {/* --- Why choose us ------------------------------------------------ */}
            <Reveal variant="rise" delay={0.05}>
              <div className="rounded-[2rem] bg-forest p-5 text-white sm:p-7">
                <p className={cn(label, "text-[var(--t-gold)]")}>Our product highlights</p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/80">{turmericWhyChoose.body}</p>
                <ul className="mt-4 space-y-2">
                  {turmericWhyChoose.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.875rem]">
                      <Icon name="check" className="mt-0.5 size-4 shrink-0 text-[var(--t-gold)]" strokeWidth={2.2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* --- Freshness & storage ------------------------------------------ */}
            <Reveal variant="rise" delay={0.1}>
              <div className="rounded-[2rem] bg-sage-50 p-5 sm:p-7">
                <p className={cn(label, "text-leaf")}>Freshness and storage</p>
                <h3 className={cn(subHeading, "mt-2 text-forest")}>{turmericStorage.heading}</h3>
                <ul className="mt-4 grid gap-x-5 gap-y-2 sm:grid-cols-2">
                  {turmericStorage.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2.5 text-[0.875rem] text-ink">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--t-gold)]" />
                      {tip}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-line-strong pt-3 text-[0.8125rem] leading-relaxed text-ink-muted">
                  {turmericStorage.bulkNote}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* --- Minimum order quantity ------------------------------------------ */}
        <div className="mt-10 lg:mt-12">
          <MoqPanel
            value={findMoq("turmeric-powder")}
            className="border-[var(--t-gold)]/45 bg-[var(--t-pale)]"
            accentClassName="text-forest"
            iconClassName="bg-[var(--t-glow)] text-forest"
          />
        </div>

        {/* --- FAQs ------------------------------------------------------------ */}
        <div className="mx-auto mt-14 max-w-3xl lg:mt-16">
          <div className="text-center">
            <p className={cn(label, "text-rust")}>Frequently asked questions</p>
            <h3 className={cn(subHeading, "mt-2 text-forest")}>Everything About Turmeric Powder</h3>
          </div>
          <Reveal variant="rise" className="mt-6">
            <FaqAccordion items={turmericFaqs} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
