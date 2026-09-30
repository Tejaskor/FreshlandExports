import { Button } from "@/components/ui/button";
import { ClipReveal } from "@/animations/clip-reveal";
import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { Section } from "@/components/ui/section";
import { people } from "@/features/farms/data";
import { cn } from "@/lib/utils";

/**
 * Four frames on an offset grid — uneven widths and heights so the collage
 * reads as a contact sheet rather than a gallery. `sizes` follows each
 * frame's crop: landscape photos in taller frames are sized by height.
 */
const frames = [
  {
    box: "top-0 left-0 h-[48%] w-[52%]",
    from: "up",
    amount: 10,
    sizes: "(min-width: 1024px) 460px, 75vw",
    position: "object-[68%_center]",
  },
  {
    box: "top-[6%] right-0 h-[46%] w-[46%]",
    from: "left",
    amount: 14,
    sizes: "(min-width: 1024px) 440px, 75vw",
    position: "object-[35%_center]",
  },
  {
    box: "bottom-0 left-0 h-[48%] w-[44%]",
    from: "left",
    amount: 14,
    sizes: "(min-width: 1024px) 460px, 75vw",
    position: "object-center",
  },
  {
    box: "right-0 bottom-[2%] h-[42%] w-[54%]",
    from: "up",
    amount: 10,
    sizes: "(min-width: 1024px) 400px, 60vw",
    position: "object-center",
  },
] as const;

export function PeopleBehind() {
  return (
    <Section aria-labelledby="people-heading" className="overflow-hidden bg-cream-warm lg:py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="relative aspect-[7/6] w-full">
          {people.collage.map((media, index) => {
            const frame = frames[index];
            return (
              <ClipReveal
                key={media.alt}
                from={frame.from}
                delay={index * 0.12}
                className={cn("absolute overflow-hidden rounded-[1.5rem] shadow-[var(--shadow-card)]", frame.box)}
              >
                <Parallax className="group h-full w-full" amount={frame.amount}>
                  <Figure
                    image={media.image}
                    alt={media.alt}
                    art={media.art}
                    sizes={frame.sizes}
                    className="h-full w-full"
                    mediaClassName={cn(
                      frame.position,
                      "transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]",
                    )}
                  />
                </Parallax>
              </ClipReveal>
            );
          })}
        </div>

        <div className="max-w-xl">
          <Reveal variant="rise">
            <RuledEyebrow>{people.eyebrow}</RuledEyebrow>
          </Reveal>

          <RevealLines as="h2" id="people-heading" className="mt-6 text-display" delay={0.05}>
            <Line>Growing Together,</Line>
            <Line className="text-rust">From the Ground Up</Line>
          </RevealLines>

          <Reveal stagger={0.12} delay={0.2} variant="rise" className="mt-6 space-y-4">
            {people.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[1rem] leading-relaxed text-ink-muted">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.35} variant="rise" className="mt-8">
            <Button href={people.cta.href}>{people.cta.label}</Button>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
