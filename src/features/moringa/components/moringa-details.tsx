import { AnchorButton } from "@/components/ui/anchor-button";
import { ClipReveal } from "@/animations/clip-reveal";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { FaqBlock } from "@/features/moringa/components/moringa-faq";
import { ImageSlot } from "@/features/moringa/components/image-slot";
import { MoringaSprig } from "@/features/moringa/components/moringa-sprig";
import {
  moringaMoq,
  processSteps,
  qualityPoints,
  specifications,
} from "@/features/moringa/data";
import { type } from "@/features/moringa/styles";
import { cn } from "@/lib/utils";

/**
 * Product Details — everything a buyer checks before asking for a quote, in
 * reading order: how it is made and what each lot ships with, the data sheet
 * and minimum order, then the FAQs. The Blog section follows.
 */
export function MoringaDetails() {
  return (
    <section aria-labelledby="details-heading" className="relative overflow-hidden bg-white">
      <Container className="pt-12 lg:pt-20">
        <div className="max-w-2xl">
          <Reveal variant="rise">
            <RuledEyebrow>Product Details</RuledEyebrow>
          </Reveal>
          <RevealLines as="h2" id="details-heading" className={cn(type.section, "mt-5 text-forest")}>
            <Line>
              From <span className="text-leaf">Leaf</span> to Powder
            </Line>
          </RevealLines>
        </div>

        <ProcessTimeline />
        <QualityStrip />

        {/* --- Specifications + MOQ ------------------------------------------ */}
        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-12 lg:gap-8">
          <Reveal variant="sweep-right" className="lg:col-span-7">
            <DataSheet />
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <ClipReveal from="up">
              <ImageSlot
                image="packaging"
                tone="sage"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[4/3] w-full rounded-[1.5rem_4rem_1.5rem_1.5rem]"
                mediaClassName="object-cover object-center"
              />
            </ClipReveal>
            <Reveal variant="rise">
              <MoqCard />
            </Reveal>
          </div>
        </div>
      </Container>

      <FaqBlock className="mt-12 border-t border-line pt-12 pb-14 lg:mt-14 lg:pt-14 lg:pb-20" />
    </section>
  );
}

/**
 * Six stages in one row on desktop — photo, number, caption — threaded by
 * a dashed line through the photos; a vertical list on smaller screens.
 */
function ProcessTimeline() {
  return (
    <div className="mt-10 lg:mt-12">
      <div className="mb-6 flex justify-end">
        <p className="inline-flex items-center gap-2 rounded-full border border-line-strong px-3.5 py-1.5 text-[0.75rem] text-ink-muted">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-rust" />
          Images are illustrative
        </p>
      </div>

      <div className="relative">
        {/* Desktop thread through the photo centres (7rem photos). */}
        <ClipReveal
          from="left"
          duration={1.6}
          className="absolute inset-x-[8%] top-14 hidden h-px bg-[repeating-linear-gradient(90deg,var(--color-leaf)_0_10px,transparent_10px_18px)] lg:block"
        >
          <span aria-hidden="true" className="block h-full" />
        </ClipReveal>
        {/* Mobile thread through the 4rem photo centres. */}
        <span
          aria-hidden="true"
          className="absolute top-8 bottom-8 left-8 w-px bg-[repeating-linear-gradient(180deg,var(--color-leaf)_0_8px,transparent_8px_14px)] lg:hidden"
        />

        <Reveal as="ol" stagger={0.08} variant="rise" className="relative space-y-4 lg:grid lg:grid-cols-6 lg:gap-5 lg:space-y-0">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="group grid grid-cols-[4rem_1fr] items-center gap-4 lg:flex lg:flex-col lg:items-center lg:gap-0 lg:text-center"
            >
              <div className="relative">
                <ImageSlot
                  image={step.image}
                  tone={index % 2 === 0 ? "sage" : "light"}
                  bare
                  framed={false}
                  sizes="7rem"
                  className="size-16 rounded-full ring-[5px] ring-white transition-[box-shadow] duration-500 group-hover:ring-leaf-bright/60 lg:size-28"
                  mediaClassName="object-center transition-[scale] duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.08]"
                />
                <span
                  aria-hidden="true"
                  className="absolute -top-1 -right-1 flex size-6 items-center justify-center rounded-full bg-forest font-display text-[0.6875rem] font-medium text-white lg:size-8 lg:text-[0.8125rem]"
                >
                  {index + 1}
                </span>
              </div>
              <div className="lg:mt-3">
                <h3 className="font-display text-heading leading-none text-forest">
                  {step.title}
                </h3>
                <p className="mt-1 text-[0.8125rem] leading-relaxed text-ink-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </div>
  );
}

function QualityStrip() {
  return (
    <Reveal variant="rise" className="mt-8 lg:mt-10">
      <div className="rounded-[1.5rem] bg-cream-warm p-5 sm:p-6">
        <h3 className="type-label text-leaf">
          Product Quality
        </h3>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-line-strong">
          {qualityPoints.map((point) => (
            <li key={point.title} className="flex gap-3 lg:px-6 lg:first:pl-0 lg:last:pr-0">
              <span
                aria-hidden="true"
                className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-sage-100 text-forest"
              >
                <Icon name="check" className="size-3.5" strokeWidth={2.2} />
              </span>
              <span>
                <span className="block font-display text-heading leading-tight text-forest">
                  {point.title}
                </span>
                <span className="mt-1 block text-[0.8125rem] leading-relaxed text-ink-muted">
                  {point.text}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

/** Deep-green data sheet. Pending values are flagged, not guessed. */
function DataSheet() {
  return (
    <div className="relative h-full overflow-hidden rounded-[2rem_0.75rem_2rem_2rem] bg-forest-deep p-6 text-cream shadow-[var(--shadow-panel)] sm:p-8">
      <MoringaSprig
        variant="line"
        className="absolute -top-8 -right-10 h-56 w-auto rotate-[30deg] text-white/[0.08]"
      />

      <div className="relative flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-b border-white/15 pb-5">
        <h3 id="specs-heading" className="font-display text-[1.6rem] leading-none font-medium text-cream">
          Product Specifications
        </h3>
        <p className="type-label text-sage-300">
          Moringa · Powder
        </p>
      </div>

      <dl className="relative divide-y divide-white/10">
        {specifications.map((row) => (
          <div
            key={row.label}
            className="grid gap-1 py-2.5 sm:grid-cols-[10rem_1fr] sm:items-baseline sm:gap-6"
          >
            <dt className="type-label text-sage-300">
              {row.label}
            </dt>
            <dd>
              {row.pending ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-leaf-bright/60 px-3 py-0.5 text-[0.8125rem] text-leaf-bright">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-leaf-bright" />
                  {row.value}
                </span>
              ) : (
                <span className="font-display text-[clamp(1rem,0.9rem+0.28vw,1.25rem)] leading-tight text-cream">{row.value}</span>
              )}
            </dd>
          </div>
        ))}
      </dl>

      <div className="relative mt-6">
        <AnchorButton href="#quote-form" size="md" className="font-semibold">
          Request Specification Sheet
        </AnchorButton>
      </div>
    </div>
  );
}

/**
 * Compact minimum-order card. The quantity is the one figure set in accent
 * brown, so it reads first without the card growing larger.
 */
function MoqCard() {
  return (
    <aside
      aria-labelledby="moq-heading"
      className="rounded-[1.25rem] border border-line-strong bg-white p-5 shadow-[var(--shadow-card)] sm:p-6"
    >
      <div className="flex items-start gap-4 sm:gap-5">
        <span
          aria-hidden="true"
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sage-100 text-leaf sm:size-12"
        >
          {/* Sack on a scale — bulk quantity. */}
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

        <div className="min-w-0">
          <p className="type-label text-[0.8125rem] text-leaf sm:text-[0.875rem]">
            {moringaMoq.label}
          </p>
          <h3
            id="moq-heading"
            className="mt-2 font-display text-[clamp(1.5rem,1.2rem+1vw,1.9rem)] leading-[1.1] font-medium text-forest"
          >
            {moringaMoq.heading} <span className="whitespace-nowrap text-rust">{moringaMoq.quantity}</span>
          </h3>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">{moringaMoq.body}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-line pt-4 sm:pl-[4.25rem]">
        <span className="inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2 text-[0.8125rem] font-semibold tracking-[0.06em] text-white">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-highlight-inverse" />
          {moringaMoq.highlight}
        </span>
        <AnchorButton href="#quote-form" size="sm" className="font-semibold">
          Request a Quote
        </AnchorButton>
      </div>
    </aside>
  );
}
