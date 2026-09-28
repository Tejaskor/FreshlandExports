import { ClipReveal } from "@/animations/clip-reveal";
import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { Section } from "@/components/ui/section";
import { aboutResearch } from "@/features/r-and-d/data";

export function AboutResearch() {
  return (
    <Section aria-labelledby="research-heading" className="bg-cream lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="max-w-xl">
          <Reveal variant="rise">
            <RuledEyebrow>{aboutResearch.eyebrow}</RuledEyebrow>
          </Reveal>

          <RevealLines as="h2" id="research-heading" className="mt-6 text-display" delay={0.05}>
            <Line>
              About Our <span className="text-ember">Research</span>
            </Line>
          </RevealLines>

          <Reveal delay={0.2} variant="rise">
            <p className="mt-6 text-lead text-ink-muted">{aboutResearch.body}</p>
          </Reveal>
        </div>

        <ClipReveal
          from="left"
          className="group overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-figure)]"
        >
          <Parallax className="aspect-[4/3] w-full" amount={12} zoom={0.05}>
            <Figure
              image={aboutResearch.media.image}
              alt={aboutResearch.media.alt}
              art={aboutResearch.media.art}
              // 16:9 photo in a 4:3 frame is sized by height, plus overscan.
              sizes="(min-width: 1024px) 1040px, 160vw"
              className="h-full w-full"
              mediaClassName="object-[60%_center] transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
            />
          </Parallax>
        </ClipReveal>
      </Container>
    </Section>
  );
}
