import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { BotanicalLines } from "@/components/media/botanical-lines";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { ScrollScrub } from "@/animations/scroll-scrub";
import { Section } from "@/components/ui/section";
import { philosophy } from "@/features/signature-ingredients/data";
import { cn } from "@/lib/utils";

const tones = {
  forest: "bg-forest",
  // ember-deep rather than ember: white text holds 4:1, and every line on
  // these panels is set at 24px+ (large text), clearing WCAG AA.
  ember: "bg-ember-deep",
  leaf: "bg-leaf",
} as const;

/** Small ember diamond on a hairline — the page's section ornament. */
export function Ornament({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 80 12" className={cn("h-3 w-20 text-ember", className)}>
      <path d="M0 6h30M50 6h30" stroke="currentColor" strokeWidth="1" />
      <path d="M40 1.5 44.5 6 40 10.5 35.5 6Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function BrandPhilosophy() {
  return (
    <Section
      aria-labelledby="philosophy-heading"
      className="relative isolate overflow-hidden bg-cream-warm lg:py-24"
    >
      {/* Line-art sprigs frame the heading and drift against the scroll. */}
      <ScrollScrub
        className="absolute top-10 -left-14 -z-10 w-40 text-sage-300 sm:w-52"
        from={{ y: 40, rotate: -6 }}
        to={{ y: -40, rotate: 4 }}
        desktopOnly
      >
        <BotanicalLines className="w-full -scale-x-100" />
      </ScrollScrub>
      <ScrollScrub
        className="absolute top-4 -right-14 -z-10 w-40 text-sage-300 sm:w-56"
        from={{ y: -30, rotate: 6 }}
        to={{ y: 50, rotate: -4 }}
        desktopOnly
      >
        <BotanicalLines className="w-full" />
      </ScrollScrub>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="bloom">
            <Ornament className="mx-auto" />
          </Reveal>

          <RevealLines as="h2" id="philosophy-heading" className="mt-6 text-display" delay={0.05}>
            <Line>{philosophy.heading[0]}</Line>
            <Line className="text-ember">{philosophy.heading[1]}</Line>
          </RevealLines>

          <Reveal delay={0.2} variant="rise">
            <p className="mx-auto mt-6 max-w-xl text-lead text-ink-muted">{philosophy.body}</p>
          </Reveal>
        </div>

        {/* Staggered heights — the middle pillar sits lower — so the three
            read as a composed triptych rather than a row of tiles. */}
        <Reveal
          as="ul"
          stagger={0.16}
          variant="unveil"
          delay={0.1}
          className="mt-14 grid gap-5 md:grid-cols-3 md:items-start lg:mt-16 lg:gap-7"
        >
          {philosophy.pillars.map((pillar, index) => (
            <li key={pillar.title} className={cn(index === 1 && "md:mt-12")}>
              <article
                className={cn(
                  "group relative isolate flex min-h-64 flex-col justify-end overflow-hidden rounded-[var(--radius-card)] p-8 text-white shadow-[var(--shadow-card)] transition-[translate,box-shadow] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)] lg:min-h-80 lg:p-10",
                  tones[pillar.tone],
                )}
              >
                {/* Oversized outlined numeral set into the panel. */}
                <span
                  aria-hidden="true"
                  className="absolute -top-6 -right-2 -z-10 font-display text-[9rem] leading-none text-transparent transition-transform duration-700 ease-[var(--ease-out-expo)] [-webkit-text-stroke:1px_rgb(255_255_255/0.22)] group-hover:-translate-x-2 group-hover:translate-y-2"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                {/* Soft light that slides across on hover. */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgb(255_255_255/0.16),transparent_60%)] opacity-60 transition-opacity duration-700 group-hover:opacity-100"
                />

                <Reveal variant="bloom" delay={0.35 + index * 0.16} className="mb-auto">
                  <span className="flex size-14 items-center justify-center rounded-full border border-white/35 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-1 group-hover:rotate-[-8deg]">
                    <Icon name={pillar.icon} className="size-7" />
                  </span>
                </Reveal>

                <h3 className="mt-10 text-title text-white">{pillar.title}</h3>
                <p className="mt-2 font-display text-[1.5rem] leading-snug text-white/90">
                  {pillar.text}
                </p>
              </article>
            </li>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
