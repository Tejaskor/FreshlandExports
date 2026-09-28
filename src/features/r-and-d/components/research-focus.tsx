import { Button } from "@/components/ui/button";
import { ClipReveal } from "@/animations/clip-reveal";
import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { Section } from "@/components/ui/section";
import { researchFocus } from "@/features/r-and-d/data";

export function ResearchFocus() {
  return (
    <Section aria-labelledby="focus-heading" className="overflow-hidden bg-canvas lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <ClipReveal
          from="up"
          className="group overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-figure)]"
        >
          <Parallax className="aspect-[4/3] w-full lg:aspect-[5/4]" amount={10} overscan={1.12}>
            <Figure
              image={researchFocus.media.image}
              alt={researchFocus.media.alt}
              art={researchFocus.media.art}
              // A 16:9 photo cropped to 4:3 / 5:4 is sized by height.
              sizes="(min-width: 1024px) 1020px, 150vw"
              className="h-full w-full"
              mediaClassName="object-center transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
            />
          </Parallax>
        </ClipReveal>

        <div className="max-w-xl">
          <Reveal variant="rise">
            <RuledEyebrow>{researchFocus.eyebrow}</RuledEyebrow>
          </Reveal>

          <RevealLines as="h2" id="focus-heading" className="mt-6 text-display" delay={0.05}>
            <Line>
              Our Research <span className="text-ember">Focus</span>
            </Line>
          </RevealLines>

          <Reveal delay={0.15} variant="rise">
            <p className="mt-5 text-lead text-ink-muted">{researchFocus.lead}</p>
          </Reveal>

          <Reveal as="ul" stagger={0.1} variant="sweep-right" delay={0.2} className="mt-9 space-y-6">
            {researchFocus.items.map((item) => (
              <li key={item.title} className="group flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-sage-300 text-forest transition-[background-color,border-color,color] duration-500 ease-[var(--ease-out-expo)] group-hover:border-leaf group-hover:bg-leaf group-hover:text-white">
                  <Icon name={item.icon} className="size-5" />
                </span>
                <div>
                  <h3 className="font-sans text-[1rem] font-semibold tracking-normal text-forest">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </Reveal>

          <Reveal delay={0.3} variant="rise" className="mt-9">
            <Button href={researchFocus.cta.href}>{researchFocus.cta.label}</Button>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
