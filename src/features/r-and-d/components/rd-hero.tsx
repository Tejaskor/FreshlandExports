import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { BotanicalLines } from "@/components/media/botanical-lines";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { rdHero } from "@/features/r-and-d/data";

/**
 * Framed dark-green stage, like the About hero: a full-bleed dark image would
 * sit under the header's ink navigation and swallow it.
 */
export function RdHero() {
  return (
    <section aria-labelledby="page-heading" className="bg-cream pt-24 lg:pt-28">
      <Container width="wide" className="px-3 sm:px-4 lg:px-5">
        <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-forest-deep">
          <div className="absolute inset-0 -z-10">
            <Parallax className="h-full w-full" amount={12} overscan={1.2} zoom={0.06}>
              <Figure
                image={rdHero.media.image}
                alt={rdHero.media.alt}
                art={rdHero.media.art}
                priority
                // Wide on desktop; on mobile the frame is taller than wide, so
                // the 1.6:1 photo is sized by height (plus overscan).
                sizes="(min-width: 1024px) 100vw, 230vw"
                className="h-full w-full bg-forest-deep"
                mediaClassName="object-[70%_center]"
              />
            </Parallax>
            {/* Deep green veil, heaviest under the copy. */}
            <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/80 via-40% to-forest-deep/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 to-transparent" />
          </div>

          <BotanicalLines className="absolute -right-10 -bottom-20 -z-10 hidden w-72 text-white/10 md:block" />

          {/* Same shell as the site, so the copy meets the page margins. */}
          <Container className="relative flex min-h-[26rem] items-center px-7 py-16 sm:px-12 lg:min-h-[30rem] lg:px-10 lg:py-20 min-[92.5rem]:px-gutter">
            <div className="max-w-xl">
              <Reveal variant="settle">
                <RuledEyebrow tone="inverse">{rdHero.eyebrow}</RuledEyebrow>
              </Reveal>

              <RevealLines
                as="h1"
                id="page-heading"
                className="mt-6 text-hero font-medium text-white"
                delay={0.1}
                intro
              >
                {rdHero.headline.map((line) => (
                  <Line key={line}>{line}</Line>
                ))}
              </RevealLines>

              <Reveal delay={0.45} variant="rise">
                <p className="mt-6 max-w-md text-lead text-white/80">{rdHero.body}</p>
              </Reveal>
            </div>
          </Container>
        </div>
      </Container>
    </section>
  );
}
