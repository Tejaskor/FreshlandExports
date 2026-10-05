import { AnchorButton } from "@/components/ui/anchor-button";
import { ClipReveal } from "@/animations/clip-reveal";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import {
  freshOnionMoq,
  freshOnionSpecs,
  freshOnionSpecsNote,
  freshOnionStorage,
} from "@/features/fresh-onion/data";
import { freshOnionImages } from "@/features/fresh-onion/images";
import { ImageSlot } from "@/features/moringa/components/image-slot";
import { type } from "@/features/moringa/styles";
import { cn } from "@/lib/utils";

/**
 * Product Specifications & Storage: the specification table beside a
 * product photograph and the MOQ card, then a compact storage strip.
 */
export function FreshOnionSpecs() {
  return (
    <section aria-labelledby="specs-heading" className="bg-white py-14 lg:py-20">
      <Container>
        <Reveal variant="rise">
          <RuledEyebrow>Product Specifications</RuledEyebrow>
        </Reveal>
        <RevealLines as="h2" id="specs-heading" className={cn(type.section, "mt-5 text-forest")}>
          <Line>
            Fresh Onion <span className="text-leaf">Specifications</span>
          </Line>
        </RevealLines>

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-12 lg:gap-8">
          {/* --- Specification table ------------------------------------------- */}
          <Reveal variant="rise" className="lg:col-span-7">
            <div className="h-full rounded-[1.75rem] border border-line-strong p-2 sm:p-3">
              <table className="w-full border-collapse text-left text-[0.9375rem]">
                <caption className="sr-only">Fresh onion specifications</caption>
                <thead>
                  <tr className="type-label text-ink-muted">
                    <th scope="col" className="px-3 pt-3 pb-2 font-semibold sm:px-4">Parameter</th>
                    <th scope="col" className="px-3 pt-3 pb-2 font-semibold sm:px-4">Product Information</th>
                  </tr>
                </thead>
                <tbody>
                  {freshOnionSpecs.map((row) => (
                    <tr key={row.label} className="border-t border-line odd:bg-sage-50/70">
                      <th scope="row" className="w-[38%] px-3 py-2.5 align-top font-semibold text-forest sm:px-4">
                        {row.label}
                      </th>
                      <td className="px-3 py-2.5 text-ink sm:px-4">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="flex items-start gap-2.5 px-3 pt-3 pb-2 text-[0.8125rem] leading-relaxed text-ink-muted sm:px-4">
                <Icon name="clipboard" className="mt-0.5 size-4 shrink-0 text-rust" />
                <span>
                  <strong className="font-semibold text-forest">Important:</strong> {freshOnionSpecsNote}
                </span>
              </p>
            </div>
          </Reveal>

          {/* --- Photograph + MOQ --------------------------------------------- */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <ClipReveal from="up">
              {/* Specifications — onions laid out for quality inspection. */}
              <ImageSlot
                slot={freshOnionImages.display}
                tone="light"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[16/10] w-full rounded-[1.75rem]"
              />
            </ClipReveal>

            <Reveal variant="rise">
              {/* Compact MOQ card: label, the quantity as the main figure,
                  a one-line note, and the quote button. */}
              <aside
                aria-labelledby="moq-heading"
                className="rounded-[1.25rem] border border-line-strong bg-cream p-5 shadow-[var(--shadow-card)] sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="type-label text-[0.8125rem] text-leaf sm:text-[0.875rem]">
                      {freshOnionMoq.label}
                    </p>
                    <h3 id="moq-heading" className="mt-1.5 font-display leading-none font-medium text-forest">
                      <span className="sr-only">Minimum order quantity: </span>
                      <span className="text-[clamp(2.5rem,2rem+1.6vw,3.25rem)]">{freshOnionMoq.quantity}</span>
                      <span className="ml-1.5 text-[1.5rem] text-rust">{freshOnionMoq.unit}</span>
                    </h3>
                  </div>
                  {/* Scale — bulk quantity. */}
                  <span
                    aria-hidden="true"
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sage-100 text-forest"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5"
                    >
                      <path d="M9 4h6l-1.2 2.4c2.7 1.3 4.2 4 4.2 7.1 0 2.3-1.6 3.5-6 3.5s-6-1.2-6-3.5c0-3.1 1.5-5.8 4.2-7.1L9 4Z" />
                      <path d="M3.5 20.5h17" />
                    </svg>
                  </span>
                </div>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">{freshOnionMoq.body}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-line-strong pt-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-forest px-3.5 py-1.5 text-[0.8125rem] font-semibold tracking-[0.04em] text-white">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-highlight-inverse" />
                    {freshOnionMoq.highlight}
                  </span>
                  <AnchorButton href="#quote-form" size="sm" className="font-semibold">
                    Request a Quote
                  </AnchorButton>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>

        {/* --- Storage ----------------------------------------------------------- */}
        <Reveal variant="rise" className="mt-6 lg:mt-8">
          <div className="grid gap-5 rounded-[1.75rem] bg-sage-50 p-6 sm:p-8 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <ImageSlot
                slot={freshOnionImages.storage}
                tone="light"
                compact
                sizes="(min-width: 1024px) 28vw, 100vw"
                className="mb-5 aspect-[16/10] w-full rounded-[1.25rem]"
              />
              <h3 className="font-display text-title leading-tight text-forest">
                {freshOnionStorage.heading}
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">{freshOnionStorage.body}</p>
            </div>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:col-span-8 lg:self-center">
              {freshOnionStorage.tips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-[0.9375rem] text-ink">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-leaf text-white">
                    <Icon name="check" className="size-3" strokeWidth={2.6} />
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
