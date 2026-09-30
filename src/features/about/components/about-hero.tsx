import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { ScrollScrub } from "@/animations/scroll-scrub";
import { BotanicalLines } from "@/components/media/botanical-lines";
import { HeroPanels } from "@/features/about/components/hero-panels";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { aboutHero } from "@/features/about/data";

/**
 * A framed forest-green stage rather than a full-bleed image: the header's
 * dark navigation keeps its cream ground, and the slanted photo strips read
 * as one composed plate.
 */
export function AboutHero() {
  return (
    <section aria-labelledby="page-heading" className="bg-cream pt-24 lg:pt-28">
      <Container width="wide" className="px-3 sm:px-4 lg:px-5">
        <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-forest-deep lg:min-h-[34rem]">
          {/* Slow scroll-linked glow — the only motion on the dark ground. */}
          <ScrollScrub
            className="absolute -top-1/4 -left-1/4 -z-10 size-[42rem] max-w-none"
            triggerSelector="section"
            start="top top"
            end="bottom top"
            from={{ xPercent: 0, yPercent: 0 }}
            to={{ xPercent: 14, yPercent: 18 }}
          >
            <div className="size-full rounded-full bg-[radial-gradient(closest-side,rgb(61_124_74/0.42),transparent)]" />
          </ScrollScrub>

          <BotanicalLines className="absolute -bottom-16 left-[18%] -z-10 hidden w-72 text-white/[0.07] sm:block lg:left-[22%]" />

          {/* Same shell as every other section, so the copy's left edge meets the
              logo and page margins. Below the shell width the frame's own inset
              already supplies part of the margin, so the padding keeps a floor
              that holds the copy off the rounded edge; from 92.5rem (shell plus
              frame inset) the gutter alone lines it up exactly. */}
          <Container className="relative px-7 py-12 sm:px-12 sm:py-14 lg:flex lg:min-h-[34rem] lg:items-center lg:px-10 lg:py-20 min-[92.5rem]:px-gutter">
            {/* Capped by viewport so it always ends before the slanted strips,
                which begin at roughly 39% of the frame. */}
            <div className="lg:w-full lg:max-w-[min(21rem,calc(39vw-7rem))]">
              <Reveal variant="settle">
                <RuledEyebrow tone="inverse">{aboutHero.eyebrow}</RuledEyebrow>
              </Reveal>

              <RevealLines
                as="h1"
                id="page-heading"
                className="mt-5 text-hero font-medium text-white"
                delay={0.1}
                intro
              >
                <Line>
                  About <span className="text-highlight-inverse">Us</span>
                </Line>
              </RevealLines>

              <Reveal delay={0.4} variant="rise">
                <p className="mt-5 max-w-xs font-display text-[1.25rem] leading-snug text-white/70 lg:mt-6">
                  {aboutHero.tagline}
                </p>
              </Reveal>
            </div>
          </Container>

          {/* Bleeds past the frame on both sides so only the inner slants show. */}
          <HeroPanels
            panels={aboutHero.panels}
            className="-mx-[8%] h-64 sm:h-80 lg:absolute lg:inset-y-0 lg:right-[-5%] lg:mx-0 lg:h-auto lg:w-[66%]"
          />
        </div>
      </Container>
    </section>
  );
}
