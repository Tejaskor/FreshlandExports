import { AnchorButton } from "@/components/ui/anchor-button";
import { Breadcrumbs, type Crumb } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { ImageSlot } from "@/features/moringa/components/image-slot";
import { MoringaSprig } from "@/features/moringa/components/moringa-sprig";
import { OrbitBadge } from "@/features/moringa/components/orbit-badge";
import { moringaHero } from "@/features/moringa/data";
import styles from "@/features/moringa/moringa.module.css";
import { type } from "@/features/moringa/styles";
import { cn } from "@/lib/utils";

/**
 * Cinematic opening on a framed deep-green stage. Like the About and R&D
 * heroes, the stage sits just inside the viewport edge so the header's ink
 * navigation stays on cream above it. The product image breaks the grid on
 * the right inside an asymmetric organic mask.
 */
export function MoringaHero({ crumbs }: { crumbs: readonly Crumb[] }) {
  return (
    <section aria-labelledby="moringa-heading" className="bg-cream pt-24 lg:pt-28">
      <Container className="pb-4">
        <Reveal variant="rise">
          <Breadcrumbs items={crumbs} />
        </Reveal>
      </Container>

      <Container width="wide" className="px-3 sm:px-4 lg:px-5">
        <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-forest-deep lg:rounded-[2.5rem]">
          {/* Atmosphere: a leaf-green glow behind the product, a darker pool
              under the copy, and an oversized watermark. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(55%_65%_at_78%_45%,rgb(90_161_95/0.28)_0%,transparent_70%),radial-gradient(60%_80%_at_0%_100%,rgb(20_69_47/0.9)_0%,transparent_70%)]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-[0.18em] -left-[0.04em] -z-10 font-display text-[clamp(7rem,22vw,22rem)] leading-none font-medium text-white/[0.035] select-none"
          >
            Moringa
          </span>
          <MoringaSprig
            variant="line"
            className="absolute -top-10 left-[38%] -z-10 hidden h-80 w-auto rotate-[24deg] text-white/[0.07] lg:block"
          />

          {/* Above 1440px this wrapper cancels the stage's side inset, so the
              Container below is the same full-width, 90rem shell with the same
              gutter as the header — the copy lines up with the logo. */}
          <div className="min-[1441px]:-mx-5">
            <Container className="relative grid items-center gap-12 px-6 pt-14 pb-16 sm:px-10 lg:min-h-[44rem] lg:grid-cols-[1fr_1.08fr] lg:gap-6 lg:px-10 lg:py-20 min-[1441px]:grid-cols-[1.15fr_1fr] min-[1441px]:gap-10 min-[1441px]:px-gutter">
              {/* Copy */}
              <div className="relative z-10 max-w-xl min-[1441px]:max-w-none">
                <Reveal variant="settle">
                  <RuledEyebrow tone="inverse">{moringaHero.eyebrow}</RuledEyebrow>
                </Reveal>

                <RevealLines
                  as="h1"
                  id="moringa-heading"
                  className={cn(
                    type.main,
                    "mt-7 text-white",
                    // Large screens: fixed four-line layout, never re-wrapped.
                    // Fraunces sets "Nature's Green" at ~7.2em; capped at 5.75rem it
                  // stays inside the ~697px column.
                    "min-[1441px]:text-[clamp(5.25rem,1.6rem+4vw,5.75rem)] min-[1441px]:whitespace-nowrap",
                  )}
                  delay={0.1}
                  intro
                >
                  {/* "Moringa" and "Powder —" share a line that wraps naturally
                      up to 1440px and splits into two fixed lines above it. */}
                  <Line>
                    <span className="min-[1441px]:block">{moringaHero.lines[0]}</span>{" "}
                    <span className="min-[1441px]:block">{moringaHero.lines[1]}</span>
                  </Line>
                  <Line>
                    <span className="text-highlight-inverse">{moringaHero.lines[2]}</span>
                  </Line>
                  <Line>{moringaHero.lines[3]}</Line>
                </RevealLines>

                <Reveal delay={0.45} variant="rise">
                  <p className={cn(type.lead, "mt-7 max-w-md text-white/80")}>{moringaHero.body}</p>
                </Reveal>

                <Reveal delay={0.55} variant="rise" className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
                  <AnchorButton href="#discover" size="lg" className="font-semibold">
                    Explore Product
                  </AnchorButton>
                  <AnchorButton
                    href="#quote-form"
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-transparent font-semibold text-white hover:border-highlight-inverse hover:text-highlight-inverse"
                  >
                    Request a Quote
                  </AnchorButton>
                </Reveal>

                <Reveal
                  as="dl"
                  delay={0.7}
                  stagger={0.08}
                  variant="rise"
                  className="mt-12 grid max-w-md grid-cols-3 divide-x divide-white/15 border-t border-white/15 pt-6"
                >
                  {moringaHero.facts.map((fact) => (
                    <div key={fact.label} className="px-4 first:pl-0">
                      <dt className="type-label text-white/55">
                        {fact.label}
                      </dt>
                      <dd className="mt-1.5 font-display text-heading leading-tight text-white">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </Reveal>
              </div>

              {/* Product image — asymmetric organic mask with an offset outline. */}
              {/* Above 1440px the visual stays inside the shell: the right
                  margin leaves room for the offset outline ring. */}
              <div className="relative lg:-mr-6 lg:ml-4 min-[1441px]:mr-6 min-[1441px]:ml-0">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-3 -translate-y-4 rounded-[44%_56%_38%_62%/52%_40%_60%_48%] border border-white/15 lg:translate-x-6 lg:-translate-y-6"
                />
                <Reveal variant="bloom" delay={0.2}>
                  <Parallax
                    amount={8}
                    overscan={1.12}
                    className="aspect-[16/11] rounded-[44%_56%_38%_62%/52%_40%_60%_48%] shadow-[var(--shadow-panel)] sm:aspect-[16/10]"
                  >
                    <ImageSlot
                      image="hero"
                      tone="dark"
                      priority
                      framed={false}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="h-full w-full"
                    />
                  </Parallax>
                </Reveal>

                <Reveal
                  variant="bloom"
                  delay={0.6}
                  className="absolute right-2 -bottom-6 w-28 sm:w-36 lg:right-auto lg:-bottom-10 lg:-left-8 lg:w-40"
                >
                  <OrbitBadge id="orbit-hero" className="w-full ring-8 ring-forest-deep" />
                </Reveal>

                <Reveal variant="sweep-left" delay={0.8} className="absolute top-4 right-2 sm:top-8 lg:-right-2">
                  <span
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border border-white/15 bg-forest/80 px-4 py-2 text-[0.8125rem] text-white backdrop-blur-sm",
                      styles.float,
                    )}
                  >
                    <span className="size-2 rounded-full bg-leaf-bright" />
                    Fine green leaf powder
                  </span>
                </Reveal>
              </div>
            </Container>
          </div>
        </div>
      </Container>
    </section>
  );
}
