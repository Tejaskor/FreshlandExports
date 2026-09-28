import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Figure } from "@/components/media/figure";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { ScrollScrub } from "@/animations/scroll-scrub";
import { CountUp } from "@/animations/count-up";
import { WaveDivider } from "@/components/ui/wave-divider";
import { CertificationMarquee } from "@/features/home/components/certification-marquee";
import { hero, stats } from "@/features/home/data";

/**
 * Full-bleed hero with the statistics band and organic wave transition.
 *
 * The R3F/WebGL scene will mount as an absolutely positioned sibling of the
 * Figure below, behind the copy column — no layout change required.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate">
      <div className="absolute inset-0 -z-10">
        <Parallax className="h-full w-full" amount={10} overscan={1.22} zoom={0.06}>
          <Figure
            image={hero.media.image}
            alt={hero.media.alt}
            art={hero.media.art}
            priority
            sizes="100vw"
            className="h-full w-full"
            mediaClassName="object-[70%_center] md:object-[58%_center]"
          />
        </Parallax>
        {/* Readability scrim: strong only under the copy column, fully clear
            from 66% so the facility stays photographic rather than washed. */}
        <div className="absolute inset-0 bg-gradient-to-r from-white from-8% via-white/85 via-40% to-transparent to-66%" />
        {/* Grounds the image into the cream wave below. */}
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-cream to-transparent" />
        {/* Below md the copy spans the full width, so it needs a flat veil. */}
        <div className="absolute inset-0 bg-white/35 md:hidden" />
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
            className="mt-6 text-hero font-medium"
            delay={0.15}
            intro
          >
            <Line>{hero.headline.lead}</Line>
            <Line>
              {hero.headline.emphasisPrefix}{" "}
              <span className="text-leaf-bright">{hero.headline.emphasis}</span>
            </Line>
          </RevealLines>

          <Reveal delay={0.45} variant="rise">
            <p className="mt-6 max-w-md text-lead text-ink-muted">{hero.body}</p>
          </Reveal>

          <Reveal
            delay={0.6}
            stagger={0.12}
            variant="rise"
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <Button href={hero.primaryCta.href} size="lg" className="font-semibold">
              {hero.primaryCta.label}
            </Button>

            <Link
              href={hero.secondaryCta.href}
              className="group/play flex items-center gap-3 text-[0.875rem] font-semibold text-ink-muted"
            >
              <span className="flex size-10 items-center justify-center rounded-full border border-line-strong bg-white transition-[background-color,color,border-color] duration-500 ease-[var(--ease-out-expo)] group-hover/play:border-leaf group-hover/play:text-leaf">
                <Icon name="play" className="size-3.5 translate-x-px" />
              </span>
              {hero.secondaryCta.label}
            </Link>
          </Reveal>
        </ScrollScrub>

        <Reveal delay={0.75} variant="rise" className="mt-10 w-full md:w-2/3 lg:mt-12 lg:w-1/2">
          <CertificationMarquee />
        </Reveal>
      </Container>

      <div className="relative">
        <WaveDivider className="-mb-px" fill="text-cream" />

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
                <div key={stat.label} className="px-2 text-center sm:px-8 sm:text-left">
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
