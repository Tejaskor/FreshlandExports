import { ClipReveal } from "@/animations/clip-reveal";
import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { ScrollScrub } from "@/animations/scroll-scrub";
import { Section } from "@/components/ui/section";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { ourStory } from "@/features/about/data";

export function OurStory() {
  const lastIndex = ourStory.features.length - 1;

  return (
    <Section aria-labelledby="story-heading" className="bg-cream lg:pt-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="rise">
            <RuledEyebrow align="center">{ourStory.eyebrow}</RuledEyebrow>
          </Reveal>

          <RevealLines as="h2" id="story-heading" className="mt-6 text-display" delay={0.05}>
            <Line>Rooted in Trust,</Line>
            <Line className="text-rust">Growing Worldwide.</Line>
          </RevealLines>

          <Reveal delay={0.2} variant="rise">
            <p className="mx-auto mt-6 max-w-2xl text-lead text-ink-muted">{ourStory.body}</p>
          </Reveal>
        </div>

        <Reveal
          as="ol"
          stagger={0.16}
          variant="rise"
          delay={0.1}
          className="mx-auto mt-14 grid max-w-5xl gap-10 md:mt-16 md:grid-cols-3 md:gap-8"
        >
          {ourStory.features.map((feature, index) => (
            <li key={feature.title} className="relative flex gap-5 md:block">
              {index < lastIndex && (
                // Arrow to the next step, centred in the gap between the two
                // circles: pointing down beside the stacked steps, right once
                // they sit in a row. Slides in with scroll on desktop.
                <ScrollScrub
                  className="absolute top-11 -bottom-10 left-0 flex w-11 items-center justify-center text-sage-300 md:top-0 md:-right-8 md:bottom-auto md:left-11 md:h-11 md:w-auto"
                  from={{ opacity: 0, x: -10 }}
                  to={{ opacity: 1, x: 0 }}
                  start="top 85%"
                  end="top 55%"
                  desktopOnly
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 40 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.25}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-10 rotate-90 md:rotate-0"
                  >
                    <path d="M1 6h37M33 1.5 38 6l-5 4.5" />
                  </svg>
                </ScrollScrub>
              )}

              <span className="relative flex size-11 shrink-0 items-center justify-center rounded-full border border-sage-300 bg-cream font-mono text-[0.8125rem] text-forest">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="md:mt-6">
                <h3 className="text-[1.375rem] leading-tight">{feature.title}</h3>
                <p className="mt-2.5 max-w-xs text-[0.9375rem] leading-relaxed text-ink-muted">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </Reveal>

        <ClipReveal className="mt-14 overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-figure)] md:mt-20">
          {/* The source is a 5.75:1 panorama; the frame widens with the viewport
              so the crop keeps the sorting hands at every size. */}
          <Parallax className="aspect-[4/3] w-full sm:aspect-[16/7] lg:aspect-[16/5]" amount={12} zoom={0.05}>
            <Figure
              image={ourStory.media.image}
              alt={ourStory.media.alt}
              art={ourStory.media.art}
              // A 5.75:1 panorama in a 16:5 / 16:7 / 4:3 frame is sized by
              // height, then overscanned ~1.23x by the parallax.
              sizes="(min-width: 1024px) min(221vw, 2760px), (min-width: 640px) 309vw, 530vw"
              className="h-full w-full"
              mediaClassName="object-[34%_center] sm:object-[40%_center]"
            />
          </Parallax>
        </ClipReveal>
      </Container>
    </Section>
  );
}
