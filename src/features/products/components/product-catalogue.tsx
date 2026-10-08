import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import {
  type CatalogueCategory,
  type CatalogueCategoryId,
  type CatalogueProduct,
  catalogue,
  catalogueHref,
  catalogueImage,
} from "@/features/products/catalogue";
import { ALL_PRODUCTS_ANCHOR, CategoryNav, JumpLink } from "@/features/products/components/category-nav";
import { cn } from "@/lib/utils";

/**
 * The /products catalogue: a sticky jump bar, then one editorial section per
 * range — the range's introduction and photograph on the left, every one of
 * its products as a compact card on the right. Nothing is hidden behind a
 * carousel or tabs; the detail lives on each product's own page.
 */
export function ProductCatalogue() {
  return (
    <>
      <CategoryNav
        items={catalogue.map((category) => ({
          id: category.anchor,
          label: category.heading,
          image: catalogueImage(category.cover.file),
        }))}
      />
      <div id={ALL_PRODUCTS_ANCHOR} className={anchorClearance}>
        {catalogue.map((category, index) => (
          <CategorySection key={category.id} category={category} index={index} />
        ))}
      </div>
    </>
  );
}

/** Clears the fixed header (64px, 72px from sm) and the sticky jump bar (68px). */
const anchorClearance = "scroll-mt-[8.25rem] sm:scroll-mt-[8.75rem]";

/**
 * Each range's ground, cover shape and CTA. Grounds alternate warm and green;
 * the product grid and cards are the same in every range.
 */
const ranges: Record<CatalogueCategoryId, { ground: string; mask: string; cta: string }> = {
  powders: {
    ground: "bg-cream",
    mask: "mask-organic",
    cta: "Explore Powders",
  },
  agricultural: {
    ground: "bg-sage-50",
    mask: "mask-organic-alt",
    cta: "Explore Fresh Produce",
  },
  fruits: {
    ground: "bg-cream-warm",
    mask: "mask-organic",
    cta: "Explore Fresh Fruits",
  },
  spices: {
    ground: "bg-white",
    mask: "mask-organic-alt",
    cta: "Explore Whole Spices",
  },
};

function CategorySection({ category, index }: { category: CatalogueCategory; index: number }) {
  const range = ranges[category.id];
  const headingId = `${category.anchor}-heading`;
  const listId = `${category.anchor}-range`;

  return (
    <section
      id={category.anchor}
      aria-labelledby={headingId}
      className={cn(anchorClearance, "border-b border-line/70 py-12 lg:py-16", range.ground)}
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,30%)_minmax(0,1fr)] lg:gap-10 xl:gap-14">
          {/* Introduction: text then photograph on desktop; side by side on tablet. */}
          <div className="grid items-center gap-6 sm:grid-cols-[minmax(0,1fr)_13rem] lg:flex lg:flex-col lg:items-stretch lg:gap-0">
            <div>
              <Reveal variant="rise">
                <RuledEyebrow>{`${String(index + 1).padStart(2, "0")} · ${category.heading}`}</RuledEyebrow>
              </Reveal>
              <RevealLines as="h2" id={headingId} className="mt-4 text-title text-forest lg:mt-5">
                <Line>{category.heading}</Line>
              </RevealLines>
              <Reveal variant="rise" delay={0.1}>
                <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-ink-muted lg:mt-4">
                  {category.description}
                </p>
                <JumpLink
                  target={listId}
                  className="group mt-5 inline-flex h-10 items-center gap-2 rounded-full border border-line-strong bg-white/80 pr-1.5 pl-4 text-[0.8125rem] font-medium text-forest transition-colors duration-300 hover:border-leaf hover:text-leaf"
                >
                  {range.cta}
                  <span className="flex size-7 items-center justify-center rounded-full bg-sage-100 transition-colors duration-300 group-hover:bg-leaf group-hover:text-white">
                    <Icon name="arrow-right" className="size-3.5" />
                  </span>
                </JumpLink>
              </Reveal>
            </div>

            <Reveal
              variant="unveil"
              delay={0.15}
              className={cn(
                "relative hidden aspect-square overflow-hidden sm:block lg:mt-8 lg:w-full",
                range.mask,
              )}
            >
              {/* Cut-out photography on near-white: multiply melts its paper
                  into the section ground instead of showing a white tile. */}
              <Image
                src={catalogueImage(category.cover.file) ?? ""}
                alt={category.cover.alt}
                fill
                sizes="(min-width: 1024px) 28vw, 13rem"
                className="object-cover mix-blend-multiply"
              />
            </Reveal>
          </div>

          <div id={listId} className={anchorClearance}>
            {/* One grid for every range: 1 → 2 → 3 → 4 columns, never 5.
                auto-rows-fr gives every row the tallest card's height, so a
                name that wraps cannot make one row taller than the rest. */}
            <Reveal
              as="ul"
              stagger={0.03}
              variant="rise"
              className="grid auto-rows-fr grid-cols-1 gap-4 min-[400px]:grid-cols-2 md:grid-cols-3 lg:gap-5 xl:grid-cols-4"
            >
              {category.products.map((product) => (
                <li key={product.slug}>
                  <ProductCard product={product} />
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * The one product card for every range: a 4:3 photograph, the name, two
 * lines of description (always reserved, so short copy never shortens the
 * card) and "View Product" pinned to the bottom edge.
 */
function ProductCard({ product }: { product: CatalogueProduct }) {
  return (
    <Link
      href={catalogueHref(product.slug)}
      className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-line bg-white shadow-[var(--shadow-card)] transition-[translate,box-shadow,border-color] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-sage-200 hover:shadow-[var(--shadow-lift)]"
    >
      <span className="relative block aspect-[4/3] shrink-0 overflow-hidden">
        <Figure
          image={catalogueImage(product.image)}
          alt={product.alt}
          art="field"
          sizes="(min-width: 1280px) 17vw, (min-width: 1024px) 22vw, (min-width: 768px) 32vw, (min-width: 400px) 50vw, 100vw"
          className="h-full w-full"
          mediaClassName="transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]"
        />
      </span>
      <span className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-display text-[1.0625rem] leading-snug text-forest sm:text-lg">{product.name}</h3>
        <span className="mt-1.5 line-clamp-2 min-h-[3.2em] text-[0.8125rem] leading-[1.6] text-ink-muted">
          {product.description}
        </span>
        <span className="mt-auto inline-flex items-center gap-2 pt-4 text-[0.8125rem] font-semibold text-forest transition-colors duration-300 group-hover:text-leaf">
          View Product
          <Icon name="arrow-right" className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
        </span>
      </span>
    </Link>
  );
}
