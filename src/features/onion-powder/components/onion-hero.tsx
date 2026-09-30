import { AnchorButton } from "@/components/ui/anchor-button";
import { Breadcrumbs, type Crumb } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { ImageSlot } from "@/features/moringa/components/image-slot";
import { onionHero } from "@/features/onion-powder/data";
import { onionImages } from "@/features/onion-powder/images";
import { OnionRings } from "@/features/onion-powder/components/onion-rings";
import { cn } from "@/lib/utils";

/**
 * Light, full-width editorial opening on cream — the header's ink navigation
 * sits directly on it. An oversized two-line title on the left; the product
 * photograph in a circle on the right, ringed like a sliced onion.
 */
export function OnionHero({ crumbs }: { crumbs: readonly Crumb[] }) {
  return (
    <section
      aria-labelledby="onion-heading"
      className="relative overflow-hidden bg-cream pt-28 pb-14 lg:pt-32 lg:pb-20"
    >
      {/* Soft onion-skin warmth behind the photograph. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(45%_60%_at_78%_52%,rgb(150_63_23/0.07)_0%,transparent_70%)]"
      />

      <Container className="relative">
        <Reveal variant="rise">
          <Breadcrumbs items={crumbs} />
        </Reveal>

        <div className="mt-8 grid items-center gap-12 lg:mt-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal variant="settle">
              <RuledEyebrow>{onionHero.label}</RuledEyebrow>
            </Reveal>

            <RevealLines
              as="h1"
              id="onion-heading"
              className="mt-6 font-display text-[clamp(3.75rem,1.6rem+6.4vw,8.5rem)] leading-[0.9] font-medium tracking-[-0.035em] text-forest"
              delay={0.1}
              intro
            >
              <Line>Onion</Line>
              <Line className="text-rust">Powder</Line>
            </RevealLines>

            <Reveal delay={0.35} variant="rise">
              <p className="mt-6 font-display text-title leading-snug text-forest">
                {onionHero.tagline.map((phrase, index) => (
                  <span key={phrase}>
                    {index > 0 && (
                      <span aria-hidden="true" className="mx-2 text-rust">
                        ·
                      </span>
                    )}
                    {phrase}
                  </span>
                ))}
              </p>
            </Reveal>

            <Reveal delay={0.45} variant="rise" className="mt-6 max-w-xl space-y-3">
              {onionHero.body.map((paragraph) => (
                <p key={paragraph} className="text-[1rem] leading-relaxed text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal delay={0.55} variant="rise" className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <AnchorButton href="#about" size="lg" className="font-semibold">
                Explore Our Product
              </AnchorButton>
              <AnchorButton href="#quote-form" size="lg" variant="forest" className="font-semibold">
                Request a Quote
              </AnchorButton>
            </Reveal>
          </div>

          {/* Product photograph in a circle, inside the onion rings. */}
          <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <OnionRings className="absolute -inset-[14%] h-[128%] w-[128%] text-rust/25" />
            <Reveal variant="bloom" delay={0.2} className="relative">
              <Parallax
                amount={6}
                overscan={1.1}
                className="aspect-square rounded-full shadow-[var(--shadow-figure)] ring-[10px] ring-cream"
              >
                {/* Onion powder product photograph. */}
                <ImageSlot
                  slot={onionImages.hero}
                  tone="warm"
                  priority
                  framed={false}
                  sizes="(min-width: 1024px) 36vw, 90vw"
                  className="h-full w-full"
                />
              </Parallax>
            </Reveal>
            <Reveal variant="sweep-left" delay={0.7} className="absolute right-0 bottom-6 sm:right-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white px-4 py-2 text-[0.8125rem] font-medium text-forest shadow-[var(--shadow-card)]">
                <span aria-hidden="true" className="size-2 rounded-full bg-rust" />
                Fine, uniform texture
              </span>
            </Reveal>
          </div>
        </div>
      </Container>

      {/* Thin rule echoing an onion's papery skin line. */}
      <div aria-hidden="true" className={cn("absolute inset-x-0 bottom-0 h-px bg-line-strong")} />
    </section>
  );
}
