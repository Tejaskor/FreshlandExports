import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { Section } from "@/components/ui/section";
import {
  type ExportCategoryId,
  exportCategories,
  exportProductHref,
  exportProducts,
} from "@/features/products/export-catalogue";
import { exportProductMedia } from "@/features/products/export-images";

/**
 * The export range grouped by category. Each group carries its section
 * anchor (/products#powder-products, …).
 */
export function ExportRange() {
  return (
    <Section aria-label="Export product range" className="bg-canvas">
      <Container className="space-y-16">
        {(Object.keys(exportCategories) as ExportCategoryId[]).map((id) => {
          const category = exportCategories[id];
          const items = exportProducts.filter((product) => product.category === id);

          return (
            <div key={id} id={category.anchor} className="scroll-mt-28">
              <Reveal variant="rise">
                <RuledEyebrow>{category.name}</RuledEyebrow>
              </Reveal>
              <Reveal
                as="ul"
                stagger={0.06}
                variant="rise"
                className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
              >
                {items.map((product) => {
                  const media = exportProductMedia(product);
                  return (
                    <li key={product.slug}>
                      <Link
                        href={exportProductHref(product.slug)}
                        className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-card)] transition-[translate,box-shadow] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                      >
                        <span className="relative block aspect-[4/3] overflow-hidden">
                          <Figure
                            image={media.image}
                            alt={media.alt}
                            art={media.art}
                            sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                            className="h-full w-full"
                            mediaClassName="transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.07]"
                          />
                        </span>
                        <span className="flex flex-1 flex-col p-5">
                          <span className="font-display text-[1.25rem] leading-tight text-ink">{product.name}</span>
                          <span className="mt-1.5 mb-4 text-[0.875rem] leading-snug text-ink-muted">
                            {product.summary}
                          </span>
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
                  );
                })}
              </Reveal>
            </div>
          );
        })}
      </Container>
    </Section>
  );
}
