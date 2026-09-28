import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ClipReveal } from "@/animations/clip-reveal";
import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { Icon } from "@/components/ui/icon";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/animations/reveal";
import { Section } from "@/components/ui/section";
import type { SignatureIngredient } from "@/features/signature-ingredients/data";

/**
 * Placeholder detail page. It shows only what the brand has supplied — name,
 * positioning line, description where one exists, photograph — and routes
 * everything else (specifications, dosage, documentation) to the team rather
 * than inventing it. Extend SignatureIngredient as real content arrives.
 */
export function IngredientDetail({ ingredient }: { ingredient: SignatureIngredient }) {
  return (
    <>
      <PageHeader
        eyebrow="Signature Ingredient"
        title={[ingredient.name]}
        lead={ingredient.description ?? ingredient.tagline}
      />

      <Section className="bg-cream-warm">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <ClipReveal
            from="left"
            className="overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-figure)]"
          >
            <div className="aspect-[3/2] w-full">
              <Figure
                image={ingredient.media.image}
                alt={ingredient.media.alt}
                art={ingredient.media.art}
                sizes="(min-width: 1024px) 700px, 100vw"
                className="h-full w-full"
              />
            </div>
          </ClipReveal>

          <Reveal variant="rise" className="max-w-md">
            {ingredient.description && (
              <p className="font-sans text-[1.125rem] font-semibold text-forest">{ingredient.tagline}</p>
            )}
            <p className="mt-3 text-lead text-ink-muted">
              Detailed specifications, applications and documentation for {ingredient.name} are
              available on request from our team.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button href="/contact">Request Details</Button>
              <Link
                href="/signature-ingredients"
                className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-forest transition-colors duration-300 hover:text-leaf"
              >
                <Icon
                  name="arrow-left"
                  className="size-4 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-x-1"
                />
                All signature ingredients
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
