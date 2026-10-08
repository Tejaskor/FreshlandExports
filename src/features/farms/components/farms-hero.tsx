import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { BotanicalLines } from "@/components/media/botanical-lines";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { WaveDivider } from "@/components/ui/wave-divider";
import { FarmArches } from "@/features/farms/components/farm-arches";
import { farmsHero } from "@/features/farms/data";

/**
 * Landscape hero. The scrim is light rather than dark so the header's ink
 * navigation reads over it, matching the homepage hero.
 */
export function FarmsHero() {
  return (
    <section aria-labelledby="page-heading" className="relative isolate overflow-hidden bg-cream">
      {/* Stops 10px short of the bottom edge. The parallax layer is
          composited and pixel-snapped on its own, so where the section ended
          on a fractional pixel it could peek out below the wave as a thin
          line. The wave's bottom 25% (15px / 22px) is always solid cream, so
          the gap stays hidden behind it and the edge is cream on cream. */}
      <div className="absolute inset-x-0 top-0 bottom-2.5 -z-10">
        <Parallax className="h-full w-full" amount={10} overscan={1.2} zoom={0.05}>
          <Figure
            image={farmsHero.background.image}
            alt={farmsHero.background.alt}
            art={farmsHero.background.art}
            priority
            sizes="100vw"
            className="h-full w-full"
            mediaClassName="object-[center_70%]"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 via-35% to-transparent to-65%" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/70 to-transparent" />
        <div className="absolute inset-0 bg-white/40 lg:hidden" />
      </div>

      <BotanicalLines className="absolute top-28 right-[3%] hidden w-40 -scale-x-100 text-white/70 lg:block" />

      <Container className="grid items-center gap-12 pt-32 pb-16 lg:min-h-[42rem] lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:pt-36 lg:pb-20">
        <div className="max-w-xl">
          <Reveal variant="settle">
            <Eyebrow>{farmsHero.eyebrow}</Eyebrow>
          </Reveal>

          <RevealLines
            as="h1"
            id="page-heading"
            // The fluid hero size tracks the viewport, but this column stops
            // growing with the shell (~515px at most), so on very wide screens "Fresh
            // Produce" (~5.85em in Fraunces) overflowed it and broke onto a
            // third line. Capped at 4.5rem it keeps 12%+ headroom at every
            // width, which lets each designed line hold together on desktop.
            className="mt-6 text-hero font-medium lg:text-[length:min(var(--text-hero),4.5rem)]"
            delay={0.15}
            intro
          >
            <Line className="lg:whitespace-nowrap">{farmsHero.headline.lead}</Line>
            <Line className="text-rust lg:whitespace-nowrap">
              {farmsHero.headline.emphasis}
            </Line>
          </RevealLines>

          <Reveal delay={0.5} variant="rise" className="mt-9">
            <Button href={farmsHero.cta.href} variant="forest" size="lg">
              {farmsHero.cta.label}
            </Button>
          </Reveal>
        </div>

        <FarmArches arches={farmsHero.arches} className="lg:pb-10" />
      </Container>

      <WaveDivider className="-mb-px" fill="text-cream" />
    </section>
  );
}
