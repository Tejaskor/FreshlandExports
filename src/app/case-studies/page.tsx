import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { toCaseStudyCard } from "@/features/case-studies/card-data";
import { CaseStudyBrowser } from "@/features/case-studies/components/case-study-browser";
import { caseStudies } from "@/features/case-studies/data";
import { catalogue } from "@/features/products/catalogue";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Agricultural Sourcing Case Studies",
  description:
    "Illustrative B2B sourcing scenarios across botanical powders, whole spices, fresh agricultural produce and fruits: what buyers can define before requesting a quote.",
  path: "/case-studies",
  image: { url: caseStudies[0].image.src, alt: caseStudies[0].image.alt },
});

export default function CaseStudiesPage() {
  const cards = caseStudies.map(toCaseStudyCard);
  const categories = catalogue.map((category) => ({ id: category.id, heading: category.heading }));

  return (
    <CaseStudyBrowser
      studies={cards}
      categories={categories}
      intro={
        <>
          <p className="type-label font-semibold text-leaf">Sourcing Insights</p>
          <RevealLines
            as="h1"
            id="case-studies-heading"
            className="mt-4 font-display text-[clamp(2.25rem,1.5rem+2.6vw,3.5rem)] leading-[1.08] font-medium tracking-[-0.025em] text-balance text-forest-deep"
            intro
          >
            <Line>Agricultural Sourcing Case Studies</Line>
          </RevealLines>
          <Reveal variant="rise" delay={0.15}>
            <p className="mt-4 max-w-2xl text-lead text-ink-muted">
              Understanding Buyer Requirements. Exploring Practical Sourcing Approaches.
            </p>
          </Reveal>
        </>
      }
    />
  );
}
