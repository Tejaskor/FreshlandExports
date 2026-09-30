import { ClipReveal } from "@/animations/clip-reveal";
import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { ImageSlot } from "@/features/moringa/components/image-slot";
import { type } from "@/features/moringa/styles";
import { TurmericSun } from "@/features/turmeric-powder/components/turmeric-sun";
import {
  turmericBenefits,
  turmericIntro,
  turmericNutrition,
  turmericPopular,
} from "@/features/turmeric-powder/data";
import { turmericImages } from "@/features/turmeric-powder/images";
import { cn } from "@/lib/utils";

const subHeading =
  "font-display text-title leading-[1.05]";
const label = "type-label";

/**
 * About Turmeric: the introduction beside a specimen card of product
 * highlights, the six nutritional properties, the five potential benefits
 * on a deep-green panel with their disclaimer, and why it is popular.
 */
export function TurmericAbout() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative scroll-mt-24 bg-white py-14 lg:py-20">
      <Container>
        {/* --- Introduction + specimen card ---------------------------------- */}
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7 lg:pt-4">
            <Reveal variant="rise">
              <RuledEyebrow>{turmericIntro.eyebrow}</RuledEyebrow>
            </Reveal>
            <RevealLines as="h2" id="about-heading" className={cn(type.section, "mt-5 text-forest")}>
              <Line>{turmericIntro.heading[0]}</Line>
              <Line>
                <span className="text-rust">{turmericIntro.heading[1]}</span>
              </Line>
            </RevealLines>
            <Reveal variant="rise" delay={0.1} className="mt-6 max-w-2xl space-y-3">
              {turmericIntro.body.map((paragraph) => (
                <p key={paragraph} className="text-[1rem] leading-relaxed text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>

          <Reveal variant="sweep-left" className="lg:col-span-5">
            <div className="overflow-hidden rounded-[1.75rem] border border-[var(--t-gold)]/45 bg-[var(--t-pale)]">
              <ClipReveal from="up">
                {/* Fresh turmeric rhizomes. */}
                <ImageSlot
                  slot={turmericImages.rhizomes}
                  tone="golden"
                  compact
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  className="aspect-[16/10] w-full"
                />
              </ClipReveal>
              <div className="p-5 sm:p-6">
                <h3 className={cn(label, "text-rust")}>Product Highlights</h3>
                <dl className="mt-3">
                  {turmericIntro.highlights.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-baseline justify-between gap-4 border-t border-dashed border-[var(--t-gold)]/50 py-2"
                    >
                      <dt className="text-[0.8125rem] font-semibold text-ink-muted">{row.label}</dt>
                      <dd className="text-right font-display text-heading leading-tight text-forest">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>
        </div>

        {/* --- Nutritional properties ---------------------------------------- */}
        <div className="mt-14 lg:mt-16">
          <div className="grid gap-3 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className={cn(label, "text-leaf")}>Nutritional properties</p>
              <h3 className={cn(subHeading, "mt-2 text-forest")}>{turmericNutrition.heading}</h3>
            </div>
            <p className="text-[0.9375rem] leading-relaxed text-ink-muted lg:col-span-5">{turmericNutrition.intro}</p>
          </div>
          <Reveal as="ul" stagger={0.05} variant="rise" className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {turmericNutrition.items.map((item) => (
              <li key={item.title} className="border-l-[3px] border-[var(--t-gold)] pl-4">
                <span className="block font-display text-heading leading-tight text-forest">{item.title}</span>
                <span className="mt-1 block text-[0.875rem] leading-relaxed text-ink-muted">{item.text}</span>
              </li>
            ))}
          </Reveal>
          <p className="mt-5 text-[0.8125rem] text-ink-muted">{turmericNutrition.note}</p>
        </div>

        {/* --- Potential health benefits ------------------------------------- */}
        <Reveal variant="rise" className="mt-12 lg:mt-14">
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-forest-deep p-5 text-white sm:p-8 lg:p-10">
            <TurmericSun className="absolute -top-20 -right-20 -z-10 size-72 text-[var(--t-gold)]/15" />
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-4">
                <p className={cn(label, "text-[var(--t-gold)]")}>Potential health benefits</p>
                <h3 className={cn(subHeading, "mt-2")}>{turmericBenefits.heading}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/75">{turmericBenefits.intro}</p>
                <p className="mt-5 flex items-start gap-3 rounded-xl border border-white/15 p-4 text-[0.8125rem] leading-relaxed text-white/80">
                  <span
                    aria-hidden="true"
                    className="mt-px flex size-5 shrink-0 items-center justify-center rounded-full border border-[var(--t-gold)] font-display text-[0.6875rem] font-medium text-[var(--t-gold)]"
                  >
                    i
                  </span>
                  <span>
                    <strong className="font-semibold text-white">Note:</strong> {turmericBenefits.note}
                  </span>
                </p>
              </div>
              <ol className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:col-span-8">
                {turmericBenefits.items.map((item, index) => (
                  <li key={item.title} className="flex gap-4 border-t border-white/12 pt-4">
                    <span aria-hidden="true" className="font-display text-[1.25rem] leading-none font-medium text-[var(--t-gold)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block font-display text-heading leading-tight">{item.title}</span>
                      <span className="mt-1 block text-[0.8125rem] leading-relaxed text-white/70">{item.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>

        {/* --- Why popular worldwide ---------------------------------------- */}
        <div className="mt-12 lg:mt-14">
          <p className={cn(label, "text-leaf")}>Why turmeric is popular worldwide</p>
          <h3 className={cn(subHeading, "mt-2 text-forest")}>{turmericPopular.heading}</h3>
          <Reveal as="ul" stagger={0.05} variant="rise" className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {turmericPopular.items.map((item) => (
              <li key={item.title} className="rounded-[1.25rem] bg-[var(--t-pale)] p-4">
                <span aria-hidden="true" className="block h-1 w-8 rounded-full bg-[var(--t-gold)]" />
                <span className="mt-3 block font-display text-heading leading-tight text-forest">{item.title}</span>
                <span className="mt-1 block text-[0.8125rem] leading-relaxed text-ink-muted">{item.text}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
