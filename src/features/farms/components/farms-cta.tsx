import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { farmsCta } from "@/features/farms/data";

/**
 * Closing band. The photograph fills the right of a forest-green ground and
 * is feathered into it, so the copy always sits on solid colour.
 */
export function FarmsCta() {
  return (
    <section aria-labelledby="farms-cta-heading" className="relative isolate overflow-hidden bg-forest-deep">
      <div className="absolute inset-0 -z-10 lg:left-[35%]">
        <Parallax className="h-full w-full" amount={16} zoom={0.08}>
          <Figure
            image={farmsCta.media.image}
            alt={farmsCta.media.alt}
            art={farmsCta.media.art}
            // Frame is wider than tall on desktop (~65vw), full-bleed and
            // taller than wide on mobile; overscan adds ~1.26x.
            sizes="(min-width: 1024px) 85vw, 230vw"
            className="h-full w-full bg-forest-deep"
            mediaClassName="object-[58%_center]"
          />
        </Parallax>
        {/* Starts 4px before the photo. From lg the layer's left edge (35%)
            usually falls on a fractional pixel, where the photo's and the
            veil's anti-aliased edges shared one column and let the photo
            bleed through as a thin vertical line. Overhanging onto the
            same-colour ground keeps that column fully covered. */}
        <div className="absolute inset-y-0 right-0 -left-1 bg-gradient-to-r from-forest-deep via-forest-deep/70 to-forest-deep/5 lg:via-forest-deep/35" />
        <div className="absolute inset-0 bg-forest-deep/55 lg:hidden" />
      </div>

      <Container className="py-20 lg:py-28">
        <div className="max-w-xl">
          <Reveal variant="rise">
            <RuledEyebrow tone="inverse">{farmsCta.eyebrow}</RuledEyebrow>
          </Reveal>

          <RevealLines
            as="h2"
            id="farms-cta-heading"
            className="mt-6 text-display text-white"
            delay={0.05}
          >
            <Line>Let&rsquo;s Grow Something</Line>
            <Line className="text-ember">Better Together</Line>
          </RevealLines>

          <Reveal delay={0.2} variant="rise">
            <p className="mt-5 max-w-md text-lead text-white/80">{farmsCta.body}</p>
          </Reveal>

          <Reveal
            delay={0.3}
            stagger={0.1}
            variant="rise"
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button href={farmsCta.primary.href}>{farmsCta.primary.label}</Button>
            <Button
              href={farmsCta.secondary.href}
              variant="outline"
              className="border-white/50 bg-transparent text-white hover:border-white hover:text-white"
            >
              {farmsCta.secondary.label}
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
