import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { ImageSlot } from "@/features/moringa/components/image-slot";
import { type } from "@/features/moringa/styles";
import { OnionRings } from "@/features/onion-powder/components/onion-rings";
import { UseTabs } from "@/features/onion-powder/components/use-tabs";
import {
  onionHowTo,
  onionIndustries,
  onionUsageTip,
  onionUses,
} from "@/features/onion-powder/data";
import { onionImages } from "@/features/onion-powder/images";
import { cn } from "@/lib/utils";

const subHeading =
  "font-display text-title leading-[1.05]";

/**
 * Applications on forest green, in three tiers: everyday uses (tabs beside a
 * cooking photograph), how to use it (a compact list beside the usage tip),
 * and industrial applications (a hairline grid beside a production photo).
 */
export function OnionApplications() {
  return (
    <section
      aria-labelledby="applications-heading"
      className="relative isolate overflow-hidden bg-forest-deep py-14 text-white lg:py-20"
    >
      <OnionRings className="absolute -top-40 -right-40 -z-10 size-[34rem] text-white/[0.05]" />

      <Container>
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal variant="rise">
              <RuledEyebrow tone="inverse">One Ingredient, Endless Possibilities</RuledEyebrow>
            </Reveal>
            <RevealLines as="h2" id="applications-heading" className={cn(type.section, "mt-5 text-white")}>
              <Line>Discover the Many Ways</Line>
              <Line>
                to Use <span className="text-highlight-inverse">Onion Powder</span>
              </Line>
            </RevealLines>
          </div>
          <Reveal variant="rise" delay={0.15} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[1rem] leading-relaxed text-white/75">
              From everyday meals to commercial food production, onion powder adds flavour and
              convenience to countless recipes.
            </p>
          </Reveal>
        </div>

        {/* --- Everyday uses ------------------------------------------------ */}
        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-10">
          <Reveal variant="unveil" className="lg:col-span-5">
            <Parallax amount={8} overscan={1.12} className="aspect-[4/3] rounded-[2rem_2rem_2rem_0.5rem]">
              {/* Onion powder in food preparation. */}
              <ImageSlot
                slot={onionImages.cooking}
                tone="warm"
                framed={false}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-full w-full"
              />
            </Parallax>
          </Reveal>
          <Reveal variant="rise" delay={0.1} className="lg:col-span-7">
            <UseTabs categories={onionUses} />
          </Reveal>
        </div>

        {/* --- How to use + tip ------------------------------------------- */}
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <p className="type-label text-highlight-inverse">
              Simple to use, easy to enjoy
            </p>
            <h3 className={cn(subHeading, "mt-2")}>How to Use Onion Powder</h3>
            <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-white/75">
              Its fine texture mixes easily with liquids, sauces, and dry seasonings, so it fits
              into everyday recipes with minimal preparation.
            </p>
            <Reveal as="ul" stagger={0.04} variant="rise" className="mt-5 grid gap-x-8 sm:grid-cols-2">
              {onionHowTo.map((item) => (
                <li key={item.title} className="flex gap-3 border-t border-white/12 py-3">
                  <span className="w-28 shrink-0 font-display text-heading leading-tight text-highlight-inverse">
                    {item.title}
                  </span>
                  <span className="text-[0.875rem] leading-relaxed text-white/75">{item.text}</span>
                </li>
              ))}
            </Reveal>
          </div>

          <Reveal variant="settle" delay={0.15} className="lg:col-span-4 lg:self-center">
            <aside
              aria-labelledby="onion-tip-heading"
              className="rounded-[1.75rem_1.75rem_1.75rem_0.5rem] bg-cream p-6 text-forest sm:p-7"
            >
              <h3 id="onion-tip-heading" className="type-label text-rust">
                Usage tip
              </h3>
              <p aria-hidden="true" className="mt-3 font-display text-[clamp(2.25rem,1.8rem+1.4vw,3rem)] leading-none font-medium">
                1 tsp <span className="text-rust">≈</span>
              </p>
              <p aria-hidden="true" className="mt-1 font-display text-heading leading-tight">
                1 small onion
              </p>
              <p className="mt-4 border-t border-line-strong pt-4 text-[0.9375rem] leading-relaxed text-ink">
                {onionUsageTip}
              </p>
            </aside>
          </Reveal>
        </div>

        {/* --- Industrial applications -------------------------------------- */}
        <div className="mt-12 lg:mt-16">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="type-label text-highlight-inverse">
                Powering the food industry
              </p>
              <h3 className={cn(subHeading, "mt-2")}>Industrial Applications</h3>
            </div>
            <p className="max-w-md text-[0.9375rem] leading-relaxed text-white/75">
              Widely used for its concentrated flavour, convenient format, and versatility.
            </p>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-12">
            <Reveal variant="unveil" className="lg:col-span-4">
              {/* Industrial use — onion powder in snack seasoning. */}
              <ImageSlot
                slot={onionImages.industrial}
                tone="warm"
                compact
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="aspect-[16/9] h-full w-full rounded-[1.5rem] lg:aspect-auto lg:min-h-[14rem]"
              />
            </Reveal>
            <Reveal
              as="ol"
              stagger={0.05}
              variant="rise"
              className="grid gap-px overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/12 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3"
            >
              {onionIndustries.map((industry, index) => (
                <li key={industry.title} className="bg-forest-deep p-5 transition-colors duration-500 hover:bg-forest">
                  <span aria-hidden="true" className="font-display text-[0.875rem] font-medium text-highlight-inverse">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-2 block font-display text-heading leading-tight">
                    {industry.title}
                  </span>
                  <span className="mt-1.5 block text-[0.8125rem] leading-relaxed text-white/70">{industry.text}</span>
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
