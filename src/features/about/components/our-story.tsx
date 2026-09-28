import { ClipReveal } from "@/animations/clip-reveal";
import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { ScrollScrub } from "@/animations/scroll-scrub";
import { Section } from "@/components/ui/section";
import { RuledEyebrow } from "@/features/about/components/ruled-eyebrow";
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
            <Line className="text-ember">Growing Worldwide.</Line>
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
                // Connector to the next step: vertical when stacked, horizontal
                // once the steps sit in a row. Drawn with scroll on desktop.
                <ScrollScrub
                  className="absolute top-14 -bottom-8 left-[1.375rem] w-px origin-top bg-sage-300 md:top-[1.375rem] md:-right-8 md:bottom-auto md:left-16 md:h-px md:w-auto md:origin-left"
                  from={{ scaleX: 0 }}
                  to={{ scaleX: 1 }}
                  start="top 85%"
                  end="top 55%"
                  desktopOnly
                >
                  {null}
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
