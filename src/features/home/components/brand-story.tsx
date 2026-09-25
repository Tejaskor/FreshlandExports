import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Figure } from "@/components/media/figure";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { Section } from "@/components/ui/section";
import { story } from "@/features/home/data";

export function BrandStory() {
  return (
    <Section aria-labelledby="story-heading" className="overflow-hidden bg-cream">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.3fr] lg:gap-14">
        <div className="order-2 lg:order-1">
          <Reveal variant="sweep-left">
            <Eyebrow>
              {story.eyebrow.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </Eyebrow>
          </Reveal>

          <RevealLines
            as="h2"
            id="story-heading"
            className="mt-5 text-display"
            delay={0.05}
          >
            <Line>Connecting Nature</Line>
            <Line>Across the World</Line>
          </RevealLines>

          <Reveal delay={0.2} variant="sweep-left">
            <p className="mt-5 max-w-md text-lead text-ink-muted">{story.body}</p>
          </Reveal>

          <Reveal delay={0.3} variant="sweep-left" className="mt-7">
            <Button href={story.cta.href} variant="forest">
              {story.cta.label}
            </Button>
          </Reveal>

          <Reveal
            as="ul"
            stagger={0.14}
            variant="bloom"
            delay={0.15}
            className="mt-10 flex flex-wrap gap-10 sm:gap-12"
          >
            {story.features.map((feature) => (
              <li key={feature.label} className="w-24 text-center">
                <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-sage-100 text-leaf">
                  <Icon name={feature.icon} className="size-6" />
                </span>
                <span className="mt-4 block text-[0.8125rem] leading-snug text-ink-muted">
                  {feature.label}
                </span>
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal variant="sweep-right" className="relative order-1 lg:order-2">
          <Parallax
            className="mask-organic-alt aspect-7/5 w-full shadow-[var(--shadow-figure)]"
            amount={10}
            zoom={0.06}
          >
            <Figure
              image={story.media.image}
              alt={story.media.alt}
              art={story.media.art}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="h-full w-full"
            />
          </Parallax>
        </Reveal>
      </Container>
    </Section>
  );
}
