import { AnchorButton } from "@/components/ui/anchor-button";
import { Breadcrumbs, type Crumb } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { ImageSlot } from "@/features/moringa/components/image-slot";
import { TurmericSun } from "@/features/turmeric-powder/components/turmeric-sun";
import { turmericHero } from "@/features/turmeric-powder/data";
import { turmericImages } from "@/features/turmeric-powder/images";

/**
 * Centred, symmetrical opening on pale gold: the title across the top, then
 * a golden arch holding the product photograph, flanked by the introduction
 * and buttons on one side and three key facts on the other.
 */
export function TurmericHero({ crumbs }: { crumbs: readonly Crumb[] }) {
  return (
    <section
      aria-labelledby="turmeric-heading"
      className="relative overflow-hidden bg-[var(--t-pale)] pt-28 pb-14 lg:pt-32 lg:pb-20"
    >
      {/* Golden glow rising behind the arch. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(40%_55%_at_50%_78%,rgb(214_166_72/0.28)_0%,transparent_70%)]"
      />

      <Container className="relative">
        <Reveal variant="rise">
          <Breadcrumbs items={crumbs} />
        </Reveal>

        <div className="mt-8 text-center lg:mt-10">
          <Reveal variant="settle">
            <RuledEyebrow align="center">{turmericHero.subtitle}</RuledEyebrow>
          </Reveal>
          <RevealLines
            as="h1"
            id="turmeric-heading"
            className="mt-6 font-display text-[clamp(3.25rem,1.5rem+5.4vw,7.25rem)] leading-[0.95] font-medium tracking-[-0.03em] text-forest"
            delay={0.1}
            intro
          >
            <Line>{turmericHero.title}</Line>
          </RevealLines>
          <Reveal variant="rise" delay={0.3}>
            <p className="mt-4 font-display text-title leading-snug text-rust">
              {turmericHero.tagline}
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid items-center gap-10 lg:mt-12 lg:grid-cols-[1fr_minmax(0,22rem)_1fr] lg:gap-12 xl:grid-cols-[1fr_minmax(0,24rem)_1fr]">
          {/* Golden arch — first on small screens, centre on desktop. */}
          <div className="relative mx-auto w-full max-w-[20rem] lg:order-2 lg:max-w-none">
            <TurmericSun className="absolute -top-16 left-1/2 w-[140%] -translate-x-1/2 text-[var(--t-gold)]/50" />
            <Reveal variant="unveil" delay={0.2} className="relative">
              <Parallax
                amount={6}
                overscan={1.1}
                className="aspect-[4/5] rounded-t-full rounded-b-[2rem] shadow-[var(--shadow-figure)] ring-[10px] ring-[var(--t-glow)]"
              >
                {/* Turmeric powder product photograph. */}
                <ImageSlot
                  slot={turmericImages.hero}
                  tone="golden"
                  priority
                  framed={false}
                  sizes="(min-width: 1024px) 24rem, 20rem"
                  className="h-full w-full"
                />
              </Parallax>
            </Reveal>
          </div>

          <Reveal variant="sweep-right" delay={0.35} className="text-center lg:order-1 lg:text-right">
            <p className="mx-auto max-w-md text-[1rem] leading-relaxed text-ink-muted lg:mr-0">{turmericHero.body}</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-end">
              <AnchorButton href="#quote-form" size="lg" className="font-semibold">
                Request a Quote
              </AnchorButton>
              <Button href="/contact" size="lg" variant="forest" className="font-semibold">
                Enquire Now
              </Button>
            </div>
          </Reveal>

          <Reveal
            as="dl"
            stagger={0.08}
            variant="sweep-left"
            delay={0.45}
            className="mx-auto grid w-full max-w-md grid-cols-3 gap-4 text-center lg:order-3 lg:ml-0 lg:max-w-xs lg:grid-cols-1 lg:gap-0 lg:divide-y lg:divide-[var(--t-gold)]/40 lg:text-left"
          >
            {turmericHero.facts.map((fact) => (
              <div key={fact.label} className="lg:py-4 lg:first:pt-0 lg:last:pb-0">
                <dt className="type-label text-ink-muted">{fact.label}</dt>
                <dd className="mt-1 font-display text-heading leading-tight text-forest">
                  {fact.value}
                </dd>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
