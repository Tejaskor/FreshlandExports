import Link from "next/link";

import { ClipReveal } from "@/animations/clip-reveal";
import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { Section } from "@/components/ui/section";
import { IngredientGrid } from "@/features/signature-ingredients/components/ingredient-grid";
import {
  featured,
  findIngredient,
  ingredientAnchor,
  ingredientHref,
  ingredients,
} from "@/features/signature-ingredients/data";

export function FeaturedIngredients() {
  const lead = findIngredient(featured.slug);
  if (!lead) return null;

  const rest = ingredients.filter((ingredient) => ingredient.slug !== featured.slug);

  return (
    <Section
      id="featured-ingredients"
      aria-labelledby="featured-heading"
      className="scroll-mt-28 overflow-hidden bg-canvas lg:py-24"
    >
      <Container>
        <RevealLines as="h2" id="featured-heading" className="text-display" delay={0.05}>
          <Line>Featured Ingredients</Line>
        </RevealLines>
        <Reveal variant="sweep-left" delay={0.15}>
          <span aria-hidden="true" className="mt-5 block h-0.5 w-14 rounded-full bg-ember" />
        </Reveal>

        {/* Editorial spread: copy on a soft sage ground, the photograph
            breaking out to the right behind a curved edge. */}
        <article
          id={ingredientAnchor(lead.slug)}
          aria-labelledby={`${lead.slug}-title`}
          className="relative mt-10 grid scroll-mt-28 overflow-hidden rounded-[1.75rem] bg-sage-50 lg:mt-12 lg:min-h-[32rem] lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="relative z-10 order-2 flex flex-col justify-center px-7 py-10 sm:px-12 lg:order-1 lg:py-16 lg:pr-4 lg:pl-14">
            <span aria-hidden="true" className="font-mono text-[0.6875rem] tracking-[0.2em] text-eyebrow">
              01 — Signature
            </span>

            <RevealLines as="h3" className="mt-4 text-hero font-medium" delay={0.1}>
              <Line>
                <span id={`${lead.slug}-title`}>{lead.name}</span>
              </Line>
            </RevealLines>

            <Reveal variant="sweep-left" delay={0.3}>
              <p className="mt-5 font-sans text-[1.125rem] font-semibold text-forest">{lead.tagline}</p>
            </Reveal>

            <Reveal variant="sweep-left" delay={0.42}>
              <p className="mt-3 max-w-md text-lead text-ink-muted">{lead.description}</p>
            </Reveal>

            <Reveal variant="rise" delay={0.55} className="mt-8">
              <Link
                href={ingredientHref(lead.slug)}
                className="group/link inline-flex items-center gap-3 text-[1rem] font-semibold text-ember-deep transition-colors duration-300 hover:text-ember"
              >
                <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 ease-[var(--ease-out-expo)] group-hover/link:bg-[length:100%_1px]">
                  Learn More
                </span>
                <span className="flex size-9 items-center justify-center rounded-full border border-ember/40 transition-[background-color,color,border-color,translate] duration-500 ease-[var(--ease-out-expo)] group-hover/link:translate-x-1 group-hover/link:border-ember group-hover/link:bg-ember group-hover/link:text-white">
                  <Icon name="arrow-right" className="size-4" />
                </span>
                <span className="sr-only"> about {lead.name}</span>
              </Link>
            </Reveal>
          </div>

          {/* Curved inner edge: an elliptical left radius on desktop, a
              scooped lower edge when stacked. */}
          <ClipReveal
            from="left"
            duration={1.6}
            className="group relative order-1 h-72 overflow-hidden rounded-b-[45%_2.5rem] sm:h-96 lg:order-2 lg:h-auto lg:rounded-none lg:rounded-l-[42%_50%]"
          >
            <Parallax className="h-full w-full" amount={12} zoom={0.06}>
              <Figure
                image={featured.media.image}
                alt={featured.media.alt}
                art={featured.media.art}
                // Desktop frame ~0.55 of the shell and taller than the photo's
                // 1.62:1, so it is sized by height; overscan adds ~1.24x.
                sizes="(min-width: 1024px) 1100px, 120vw"
                className="h-full w-full"
                mediaClassName="object-[55%_center] transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
              />
            </Parallax>
          </ClipReveal>
        </article>

        <IngredientGrid items={rest} startIndex={2} />
      </Container>
    </Section>
  );
}
