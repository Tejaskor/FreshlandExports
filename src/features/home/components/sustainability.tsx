import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Figure } from "@/components/media/figure";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { sustainability } from "@/features/home/data";

export function Sustainability() {
  return (
    <section
      aria-labelledby="sustainability-heading"
      className="relative isolate overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Parallax className="h-full w-full" amount={18} zoom={0.1}>
          <Figure
            image={sustainability.media.image}
            alt={sustainability.media.alt}
            art={sustainability.media.art}
            sizes="100vw"
            className="h-full w-full"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/72 via-forest-deep/42 to-forest-deep/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/55 via-transparent to-forest-deep/22" />
      </div>

      <Container className="grid min-h-[26rem] items-center gap-12 py-section lg:min-h-[31rem] lg:grid-cols-[1.35fr_0.85fr] lg:gap-16">
        <div className="max-w-xl">
          <Reveal variant="rise">
            <Eyebrow tone="inverse">{sustainability.eyebrow}</Eyebrow>
          </Reveal>

          <RevealLines
            as="h2"
            id="sustainability-heading"
            className="mt-5 text-display [&>*]:text-white"
            delay={0.05}
          >
            <Line>Caring for</Line>
            <Line>People and the Planet</Line>
          </RevealLines>

          <Reveal delay={0.2} variant="rise">
            <p className="mt-5 max-w-md text-lead text-white/85">
              {sustainability.body}
            </p>
          </Reveal>

          <Reveal delay={0.35} variant="rise" className="mt-7">
            <Button
              href={sustainability.cta.href}
              variant="outline"
              className="border-white/50 bg-transparent text-white hover:border-white hover:text-white"
            >
              {sustainability.cta.label}
            </Button>
          </Reveal>
        </div>

        <Reveal variant="unveil" delay={0.1}>
          <Reveal
            as="ul"
            stagger={0.16}
            delay={0.35}
            variant="rise"
            className="rounded-card bg-forest-deep/75 p-7 shadow-[var(--shadow-panel)] ring-1 ring-white/10 backdrop-blur-xl lg:p-8"
          >
          {sustainability.points.map((point, index) => (
            <li
              key={point.title}
              className={
                index === 0
                  ? "flex gap-5"
                  : "mt-6 flex gap-5 border-t border-white/12 pt-6"
              }
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-sage-200 ring-1 ring-white/10">
                <Icon name={point.icon} className="size-5" />
              </span>
              <span>
                <h3 className="text-[1rem] font-sans font-medium text-white">
                  {point.title}
                </h3>
                <p className="mt-1.5 text-[0.875rem] text-white/80">
                  {point.description}
                </p>
              </span>
              </li>
            ))}
          </Reveal>
        </Reveal>
      </Container>
    </section>
  );
}
