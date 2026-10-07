import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { Section } from "@/components/ui/section";
import { catalogueHref, catalogueImage, relatedCatalogueProducts } from "@/features/products/catalogue";
import { cn } from "@/lib/utils";

/**
 * "Related Products" strip for a product page, drawn from the central
 * catalogue — the product's own `related` list, else its category. Same card
 * design as the export product pages' related strip.
 */
export function RelatedProducts({ slug, className }: { slug: string; className?: string }) {
  const related = relatedCatalogueProducts(slug);
  if (related.length === 0) return null;

  return (
    <Section aria-labelledby="related-heading" className={cn("bg-canvas lg:py-20", className)}>
      <Container>
        <RevealLines as="h2" id="related-heading" className="text-title">
          <Line>Related Products</Line>
        </RevealLines>
        <Reveal as="ul" stagger={0.08} variant="rise" className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <li key={item.slug}>
              <Link
                href={catalogueHref(item.slug)}
                className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-card)] transition-[translate,box-shadow] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <span className="relative block aspect-[4/3] overflow-hidden">
                  <Figure
                    image={catalogueImage(item.image)}
                    alt={item.alt}
                    art="field"
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full"
                    mediaClassName="transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.07]"
                  />
                </span>
                <span className="flex flex-1 flex-col p-5">
                  <span className="text-[0.75rem] font-medium tracking-wide text-ink-muted uppercase">
                    {item.category.label}
                  </span>
                  <span className="mt-1.5 font-display text-[1.25rem] leading-tight text-ink">{item.name}</span>
                  <span className="mt-1.5 mb-4 text-[0.875rem] leading-snug text-ink-muted">{item.description}</span>
                  <span className="mt-auto inline-flex items-center gap-2 text-[0.875rem] font-semibold text-forest">
                    View product
                    <Icon
                      name="arrow-right"
                      className="size-3.5 transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
