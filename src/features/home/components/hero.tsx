import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { ScrollScrub } from "@/animations/scroll-scrub";
import { CountUp } from "@/animations/count-up";
import { WaveDivider } from "@/components/ui/wave-divider";
import { CertificationMarquee } from "@/features/home/components/certification-marquee";
import { HeroVideo } from "@/features/home/components/hero-video";
import { hero, stats } from "@/features/home/data";

/**
 * Full-bleed hero with the statistics band and organic wave transition. The
 * background is a looping film (HeroVideo) behind the copy.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate">
      {/* The photograph's stage: the copy and the wave only. The layer used
          to span the whole section, stats band included, so object-cover
          sized the photo for that taller box (cropping its sides) and the
          solid band then hid its lower quarter — the building's grounds. */}
      <div className="relative isolate">
        <div className="absolute inset-0 -z-10">
          {/* Near-natural framing. Scaling by s hides (s - 1)/2 of the height
            past each edge, so the drift can travel at most (s - 1) x 100%:
            at 1.03x a 2.5% travel (±1.25%) keeps the frame fully covered with
            a margin. No push-in, so the whole facility and setting show. */}
          <Parallax
            className="h-full w-full"
            amount={2.5}
            overscan={1.03}
            zoom={0}
          >
            {/* The background film, edge to edge. */}
            <HeroVideo />
          </Parallax>
          {/* Warm-cream wash (globals.css hero-wash): strong behind the copy
              on the left, about a quarter by the centre, clear on the right.
              Above the film, below the copy; hero only, never takes clicks. */}
          <div aria-hidden="true" className="hero-wash pointer-events-none absolute inset-0" />
        </div>

        <Container className="flex min-h-[30rem] flex-col justify-center pt-36 pb-16 md:min-h-[32rem] lg:min-h-[33rem] lg:pt-40 lg:pb-16">
          <ScrollScrub
            className="max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-[72rem]"
            triggerSelector="section"
            start="top top"
            end="bottom top"
            from={{ yPercent: 0, opacity: 1 }}
            to={{ yPercent: -18, opacity: 0.15 }}
          >
            <Reveal variant="settle">
              <Eyebrow>{hero.eyebrow}</Eyebrow>
            </Reveal>

            <RevealLines
              as="h1"
              id="hero-heading"
              className="mt-6 text-hero font-medium text-black"
              delay={0.15}
              intro
            >
              <Line>{hero.headline.lead}</Line>
              <Line>
                {hero.headline.emphasisPrefix}{" "}
                <span className="text-forest">{hero.headline.emphasis}</span>
              </Line>
            </RevealLines>

            <Reveal delay={0.45} variant="rise">
              <p className="mt-6 max-w-md text-lead text-ink">
                {hero.body}
              </p>
            </Reveal>

            <Reveal
              delay={0.6}
              stagger={0.12}
              variant="rise"
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <Button
                href={hero.primaryCta.href}
                size="lg"
                className="font-semibold"
              >
                {hero.primaryCta.label}
              </Button>

              <Link
                href={hero.secondaryCta.href}
                className="group/play flex items-center gap-3 text-[0.875rem] font-semibold text-ink"
              >
                <span className="flex size-10 items-center justify-center rounded-full border border-line-strong bg-white transition-[background-color,color,border-color] duration-500 ease-[var(--ease-out-expo)] group-hover/play:border-leaf group-hover/play:text-leaf">
                  <Icon name="play" className="size-3.5 translate-x-px" />
                </span>
                {hero.secondaryCta.label}
              </Link>
            </Reveal>
          </ScrollScrub>

          <Reveal
            delay={0.75}
            variant="rise"
            className="mt-10 w-full md:w-2/3 lg:mt-12 lg:w-1/2"
          >
            <CertificationMarquee />
          </Reveal>
        </Container>

        <WaveDivider className="-mb-px" fill="text-cream" />
      </div>

      <div className="relative">
        <div className="bg-cream pb-8 lg:pb-10">
          <Container className="relative">
            <ScrollScrub
              className="pointer-events-none absolute right-gutter top-0 hidden lg:block"
              triggerSelector="section"
              from={{ y: 22, rotate: 1.5 }}
              to={{ y: -22, rotate: -1.5 }}
              desktopOnly
            >
              <p
                aria-hidden="true"
                className="max-w-[16rem] text-right font-display text-[1.625rem] leading-relaxed text-forest"
              >
                {hero.script.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </ScrollScrub>

            <Reveal
              as="dl"
              stagger={0.12}
              variant="settle"
              className="grid max-w-4xl grid-cols-2 gap-y-8 sm:grid-cols-4 sm:divide-x sm:divide-line"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="px-2 text-center sm:px-5 sm:text-left lg:px-8"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <CountUp
                      value={stat.value}
                      className="block font-display text-stat text-forest"
                    />
                    <span className="mt-2.5 block text-[0.9375rem] text-ink-muted">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </Reveal>
          </Container>
        </div>
      </div>
    </section>
  );
}
