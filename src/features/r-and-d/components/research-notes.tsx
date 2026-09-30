import Link from "next/link";

import { ClipReveal } from "@/animations/clip-reveal";
import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { Section } from "@/components/ui/section";
import { researchNotes } from "@/features/r-and-d/data";

export function ResearchNotes() {
  return (
    <Section aria-labelledby="notes-heading" className="bg-cream lg:py-24">
      <Container>
        <Reveal variant="rise">
          <RuledEyebrow>{researchNotes.eyebrow}</RuledEyebrow>
        </Reveal>

        <RevealLines as="h2" id="notes-heading" className="mt-6 text-display" delay={0.05}>
          <Line>Research Notes</Line>
        </RevealLines>

        <Reveal delay={0.15} variant="rise">
          <p className="mt-4 max-w-2xl text-lead text-ink-muted">{researchNotes.lead}</p>
        </Reveal>

        <Reveal
          stagger={0.14}
          variant="rise"
          delay={0.1}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8"
        >
          {researchNotes.articles.map((article, index) => (
            <div key={article.title}>
              {/* The whole card is one link; the title carries its name. */}
              <Link
                href={article.href}
                className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-card)] transition-[translate,box-shadow] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]"
              >
                <ClipReveal from="up" delay={0.2 + index * 0.14} className="aspect-[16/10] overflow-hidden">
                  <Figure
                    image={article.media.image}
                    alt={article.media.alt}
                    art={article.media.art}
                    sizes="(min-width: 1024px) 460px, (min-width: 640px) 60vw, 110vw"
                    className="h-full w-full"
                    mediaClassName="transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]"
                  />
                </ClipReveal>

                <article className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-[1.1875rem] leading-snug">{article.title}</h3>
                  <p className="mt-3 mb-6 text-[0.9375rem] leading-relaxed text-ink-muted">
                    {article.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 text-[0.875rem] font-medium text-rust-deep transition-colors duration-300 group-hover:text-rust">
                    <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 ease-[var(--ease-out-expo)] group-hover:bg-[length:100%_1px]">
                      Read Article
                    </span>
                    <Icon
                      name="arrow-right"
                      className="size-3.5 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1"
                    />
                  </span>
                </article>
              </Link>
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
