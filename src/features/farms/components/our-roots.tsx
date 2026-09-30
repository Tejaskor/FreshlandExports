import { ClipReveal } from "@/animations/clip-reveal";
import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { BotanicalLines } from "@/components/media/botanical-lines";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { Section } from "@/components/ui/section";
import { ourRoots } from "@/features/farms/data";

export function OurRoots() {
  const { main, top, bottom } = ourRoots.collage;

  return (
    <Section aria-labelledby="roots-heading" className="overflow-hidden bg-cream lg:py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div className="max-w-xl">
          <Reveal variant="rise">
            <RuledEyebrow>{ourRoots.eyebrow}</RuledEyebrow>
          </Reveal>

          <RevealLines as="h2" id="roots-heading" className="mt-6 text-display" delay={0.05}>
            <Line>
              Where Quality <span className="text-rust">Begins</span>
            </Line>
          </RevealLines>

          <Reveal stagger={0.12} delay={0.2} variant="rise" className="mt-6 space-y-4">
            {ourRoots.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[1rem] leading-relaxed text-ink-muted">
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>

        {/* Asymmetric collage: a tall leaf-shaped field with two companions
            that open from different edges, each drifting at its own pace. */}
        <div className="relative mx-auto aspect-[6/5] w-full max-w-xl lg:max-w-none">
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            className="absolute top-[12%] -right-[6%] w-[62%] text-rust/35"
          >
            <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="0.35" />
          </svg>
          <BotanicalLines className="absolute -bottom-10 -left-8 w-36 text-leaf/35" />

          <ClipReveal
            from="up"
            className="absolute top-[6%] left-0 h-[88%] w-[57%] overflow-hidden mask-organic shadow-[var(--shadow-figure)]"
          >
            <Parallax className="h-full w-full" amount={10}>
              <Figure
                image={main.image}
                alt={main.alt}
                art={main.art}
                // Portrait source in a portrait frame: sized by width, plus overscan.
                sizes="(min-width: 1024px) 420px, 70vw"
                className="h-full w-full"
                mediaClassName="object-center"
              />
            </Parallax>
          </ClipReveal>

          <ClipReveal
            from="left"
            delay={0.15}
            className="absolute top-0 right-0 h-[46%] w-[40%] overflow-hidden rounded-[1.5rem] rounded-tr-[5rem] shadow-[var(--shadow-card)]"
          >
            <Parallax className="h-full w-full" amount={14}>
              <Figure
                image={top.image}
                alt={top.alt}
                art={top.art}
                sizes="(min-width: 1024px) 320px, 50vw"
                className="h-full w-full"
                mediaClassName="object-center"
              />
            </Parallax>
          </ClipReveal>

          <ClipReveal
            from="up"
            delay={0.3}
            className="absolute right-[5%] bottom-0 aspect-square w-[37%] overflow-hidden rounded-full border-4 border-cream shadow-[var(--shadow-card)]"
          >
            <Parallax className="h-full w-full" amount={16}>
              <Figure
                image={bottom.image}
                alt={bottom.alt}
                art={bottom.art}
                sizes="(min-width: 1024px) 280px, 45vw"
                className="h-full w-full"
                mediaClassName="object-[center_30%]"
              />
            </Parallax>
          </ClipReveal>
        </div>
      </Container>
    </Section>
  );
}
