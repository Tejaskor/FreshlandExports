import { ClipReveal } from "@/animations/clip-reveal";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { ImageSlot } from "@/features/moringa/components/image-slot";
import { type } from "@/features/moringa/styles";
import {
  onionAbout,
  onionComparison,
  onionFeatures,
  onionHealth,
  onionHealthNote,
  onionNutrition,
  onionNutritionNote,
} from "@/features/onion-powder/data";
import { onionImages } from "@/features/onion-powder/images";
import { cn } from "@/lib/utils";

const subHeading =
  "font-display text-title leading-[1.05]";
const label = "type-label";

/**
 * About Onion Powder: what it is and its highlights, why buyers choose it,
 * how it compares with fresh onions, its nutritional profile, and its
 * nutritional properties with the health note — four compact blocks.
 */
export function OnionAbout() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-24 bg-white py-14 lg:py-20"
    >
      <Container>
        {/* --- About + highlights ------------------------------------------- */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <ClipReveal from="up" className="lg:col-span-4">
            {/* Fresh onions photograph. */}
            <ImageSlot
              slot={onionImages.freshOnions}
              tone="warm"
              sizes="(min-width: 1024px) 30vw, 100vw"
              // Portrait crop of a landscape photo: centre on the knife and onions.
              mediaClassName="object-[42%_center]"
              className="aspect-[4/5] w-full rounded-[1.5rem_7rem_1.5rem_7rem] sm:aspect-[16/11] lg:aspect-[4/5]"
            />
          </ClipReveal>

          <div className="lg:col-span-8">
            <Reveal variant="rise">
              <RuledEyebrow>{onionAbout.eyebrow}</RuledEyebrow>
            </Reveal>
            <RevealLines as="h2" id="about-heading" className={cn(type.section, "mt-5 text-forest")}>
              <Line>{onionAbout.heading[0]}</Line>
              <Line>
                <span className="text-rust">{onionAbout.heading[1]}</span>
              </Line>
            </RevealLines>
            <Reveal variant="rise" delay={0.1} className="mt-6 grid gap-4 lg:grid-cols-2 lg:gap-8">
              {onionAbout.body.map((paragraph) => (
                <p key={paragraph} className="text-[1rem] leading-relaxed text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal variant="rise" delay={0.2} className="mt-7 rounded-[1.25rem] bg-cream p-5 sm:p-6">
              <h3 className={cn(label, "text-leaf")}>Product Highlights</h3>
              <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {onionAbout.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.9375rem] text-ink">
                    <Icon name="check" className="mt-1 size-4 shrink-0 text-rust" strokeWidth={2.2} />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* --- Why choose ----------------------------------------------------- */}
        <div className="mt-14 lg:mt-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h3 className={cn(subHeading, "text-forest")}>
              Why Choose <span className="text-rust">Onion Powder?</span>
            </h3>
            <p className={cn(label, "text-ink-muted")}>Everything you need in one ingredient</p>
          </div>
          <Reveal as="ol" stagger={0.06} variant="rise" className="mt-6 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {onionFeatures.map((feature, index) => (
              <li key={feature.title} className="flex gap-4 border-t border-line-strong py-5">
                <span aria-hidden="true" className="font-display text-[1.5rem] leading-none font-medium text-rust/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-display text-heading leading-tight text-forest">
                    {feature.title}
                  </span>
                  <span className="mt-1 block text-[0.875rem] leading-relaxed text-ink-muted">{feature.text}</span>
                </span>
              </li>
            ))}
          </Reveal>
        </div>

        {/* --- Powder vs fresh + nutrition table ----------------------------- */}
        {/* grid-cols-1 (minmax(0, 1fr)) keeps the stacked column to the screen
            width, so the nutrition table scrolls in its own wrapper instead
            of widening the page. */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-12">
          <Reveal variant="rise" className="lg:col-span-7">
            <div className="h-full rounded-[1.75rem] border border-line-strong p-5 sm:p-7">
              <p className={cn(label, "text-leaf")}>Understanding the difference</p>
              <h3 className={cn(subHeading, "mt-2 text-forest")}>Onion Powder vs. Fresh Onions</h3>

              <div className="mt-5 -mx-1 overflow-x-auto px-1">
                <table className="w-full min-w-[30rem] border-collapse text-left text-[0.875rem]">
                  <caption className="sr-only">Comparison of onion powder and fresh onions</caption>
                  <thead>
                    <tr className="type-label">
                      <th scope="col" className="pb-3 font-semibold text-ink-muted">Feature</th>
                      <th scope="col" className="rounded-t-xl bg-cream px-3 pt-3 pb-3 font-semibold text-rust">
                        Onion Powder
                      </th>
                      <th scope="col" className="px-3 pb-3 font-semibold text-ink-muted">Fresh Onions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {onionComparison.map((row, index) => (
                      <tr key={row.feature} className="border-t border-line">
                        <th scope="row" className="py-2.5 pr-3 font-semibold text-forest">{row.feature}</th>
                        <td
                          className={cn(
                            "bg-cream px-3 py-2.5 text-ink",
                            index === onionComparison.length - 1 && "rounded-b-xl",
                          )}
                        >
                          {row.powder}
                        </td>
                        <td className="px-3 py-2.5 text-ink-muted">{row.fresh}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-[0.8125rem] text-ink-muted">
                Both forms are useful in different recipes and food applications.
              </p>
            </div>
          </Reveal>

          <Reveal variant="rise" delay={0.1} className="lg:col-span-5">
            <div className="h-full rounded-[1.75rem] bg-forest p-5 text-white sm:p-7">
              <p className={cn(label, "text-highlight-inverse")}>Nutritional information</p>
              <h3 className={cn(subHeading, "mt-2 text-white")}>Onion Powder Nutritional Profile</h3>
              <table className="mt-5 w-full border-collapse text-[0.9375rem]">
                <caption className="pb-2 text-left text-[0.8125rem] text-white/70">
                  Approximate values per 100 g
                </caption>
                <tbody>
                  {onionNutrition.map((row) => (
                    <tr key={row.nutrient} className="border-t border-white/12">
                      <th scope="row" className="py-2 text-left font-medium text-white/85">{row.nutrient}</th>
                      <td className="py-2 text-right font-display font-medium whitespace-nowrap">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-[0.75rem] leading-relaxed text-white/65">{onionNutritionNote}</p>
            </div>
          </Reveal>
        </div>

        {/* --- Health & nutrition ------------------------------------------- */}
        <Reveal variant="rise" className="mt-6">
          <div className="rounded-[1.75rem] bg-sage-50 p-5 sm:p-7">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h3 className={cn(subHeading, "text-forest")}>The Nutritional Properties of Onion Powder</h3>
              <p className={cn(label, "text-leaf")}>Naturally from onions</p>
            </div>
            <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
              {onionHealth.map((point) => (
                <li key={point.title}>
                  <span className="block font-display text-heading leading-tight text-forest">
                    {point.title}
                  </span>
                  <span className="mt-1.5 block text-[0.8125rem] leading-relaxed text-ink-muted">{point.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-start gap-3 border-t border-line-strong pt-4 text-[0.8125rem] leading-relaxed text-ink">
              <span
                aria-hidden="true"
                className="mt-px flex size-5 shrink-0 items-center justify-center rounded-full border border-rust/60 font-display text-[0.6875rem] font-medium text-rust"
              >
                i
              </span>
              <span>
                <strong className="font-semibold">Note:</strong> {onionHealthNote}
              </span>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
