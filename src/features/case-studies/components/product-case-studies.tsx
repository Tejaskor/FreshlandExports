import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { type CaseStudyCardData, toCaseStudyCard } from "@/features/case-studies/card-data";
import { CaseStudyCard } from "@/features/case-studies/components/case-study-card";
import { type CaseStudy, productCaseStudies } from "@/features/case-studies/data";
import { cn } from "@/lib/utils";

/** The card with a page-specific photograph in place of the study's own, when one is given. */
function withCardImage(card: CaseStudyCardData, image?: { file: string; alt: string }): CaseStudyCardData {
  return image ? { ...card, image: { ...card.image, src: image.file, alt: image.alt } } : card;
}

/**
 * The "Case Studies" section: a centred heading (no eyebrow) and short
 * introduction, three cards, an optional "View All Case Studies" link and an
 * optional divider flush with its bottom edge. Used under the Blog section on
 * the homepage, every product page and every Blog article.
 */
export function CaseStudiesSection({
  studies,
  description,
  viewAll = false,
  headingId = "case-studies-heading",
  className,
  after,
  images,
}: {
  studies: readonly CaseStudy[];
  description: string;
  viewAll?: boolean;
  headingId?: string;
  className?: string;
  after?: ReactNode;
  /** Card images for this section only, by case study slug. */
  images?: Readonly<Record<string, { file: string; alt: string }>>;
}) {
  if (studies.length === 0) return null;

  return (
    <section aria-labelledby={headingId} className={cn("relative overflow-hidden bg-cream", className)}>
      <Container className="py-14 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <RevealLines as="h2" id={headingId} className="font-display text-display text-forest">
            <Line>Case Studies</Line>
          </RevealLines>
          <Reveal variant="rise" delay={0.1}>
            <p className="mt-5 text-lead text-ink-muted">{description}</p>
            <p className="mt-3 text-[0.8125rem] text-ink-faint">
              Illustrative industry case studies: typical applications, not reports of Freshland Exports customer
              projects.
            </p>
          </Reveal>
        </div>

        <Reveal as="ul" stagger={0.08} variant="rise" className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">
          {studies.map((study) => (
            <li key={study.slug}>
              <CaseStudyCard study={withCardImage(toCaseStudyCard(study), images?.[study.slug])} />
            </li>
          ))}
        </Reveal>

        {viewAll && (
          <Reveal variant="rise" className="mt-10 flex justify-center lg:mt-12">
            <Button href="/case-studies" variant="outline" withArrow>
              View All Case Studies
            </Button>
          </Reveal>
        )}
      </Container>
      {after}
    </section>
  );
}

/** A product's three case studies, introduced by the product's name. */
export function ProductCaseStudies({
  slug,
  productName,
  className,
  after,
  images,
}: {
  slug: string;
  productName: string;
  className?: string;
  after?: ReactNode;
  /** Card images for this page only, by case study slug. */
  images?: Readonly<Record<string, { file: string; alt: string }>>;
}) {
  return (
    <CaseStudiesSection
      studies={productCaseStudies(slug)}
      description={`Explore how ${productName} is used across different industries and markets, with relevant applications and sourcing insights.`}
      className={className}
      after={after}
      images={images}
    />
  );
}
