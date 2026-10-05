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
import { cn } from "@/lib/utils";

/**
 * The /products catalogue: a jump bar to the four ranges, then one section per
 * range. The cards share one vocabulary — photograph, category label, name,
 * a single line, "View Product" — but each range sits on its own ground with
 * its own card composition, so the page reads as a catalogue rather than one
 * long uniform grid.
 */
export function ProductCatalogue() {
  return (
    <>
      <CategoryNav />
      {catalogue.map((category, index) => (
        <CategorySection key={category.id} category={category} index={index} />
      ))}
    </>
  );
}

/** Sticky-free jump links to each range, with its product count. */
function CategoryNav() {
  return (
    <nav aria-label="Product ranges" className="border-y border-line bg-white">
      <Container>
        <ul className="flex flex-wrap gap-2 py-5">
          {catalogue.map((category) => (
            <li key={category.id}>
              <a
                href={`#${category.anchor}`}
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-[0.875rem] font-medium text-forest transition-colors duration-300 hover:border-leaf hover:bg-sage-50"
              >
                {category.heading}
                <span className="font-mono text-[0.75rem] text-ink-muted">{category.products.length}</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}

/** Each range's ground and grid. */
const layouts: Record<CatalogueCategoryId, { ground: string; grid: string }> = {
  powders: { ground: "bg-cream", grid: "sm:grid-cols-2 lg:grid-cols-3" },
  agricultural: { ground: "bg-white", grid: "sm:grid-cols-2 lg:grid-cols-4" },
  fruits: { ground: "bg-sage-50", grid: "sm:grid-cols-2 lg:grid-cols-4" },
  spices: { ground: "bg-cream-warm", grid: "sm:grid-cols-2 lg:grid-cols-3" },
};

function CategorySection({ category, index }: { category: CatalogueCategory; index: number }) {
  const layout = layouts[category.id];
  const headingId = `${category.anchor}-heading`;

  return (
    <section
      id={category.anchor}
      aria-labelledby={headingId}
      className={cn("scroll-mt-24 py-14 lg:py-20", layout.ground)}
    >
      <Container>
        <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal variant="rise">
              <RuledEyebrow>{`${String(index + 1).padStart(2, "0")} · ${category.label}`}</RuledEyebrow>
            </Reveal>
            <RevealLines as="h2" id={headingId} className="mt-5 text-display text-forest">
              <Line>{category.heading}</Line>
            </RevealLines>
          </div>
          <Reveal variant="rise" delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[0.9375rem] leading-relaxed text-ink-muted">{category.description}</p>
            <p className="mt-2 type-label text-leaf">{category.products.length} products</p>
          </Reveal>
        </div>

        <Reveal as="ul" stagger={0.05} variant="rise" className={cn("mt-10 grid gap-5 lg:mt-12 lg:gap-6", layout.grid)}>
          {category.products.map((product) => (
            <li key={product.slug}>
              {category.id === "spices" ? (
                <RowCard product={product} label={category.label} />
              ) : (
                <StackCard product={product} label={category.label} variant={category.id} />
              )}
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

const cardBase =
  "group flex h-full overflow-hidden border border-line bg-white shadow-[var(--shadow-card)] transition-[translate,box-shadow,border-color] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-sage-200 hover:shadow-[var(--shadow-lift)]";

/** Card titles outside the featured powders: one step up from text-heading
    (17–21px instead of 16–20px), at medium weight. Line height and tracking
    match text-heading so card spacing is unchanged. */
const cardTitle =
  "text-[clamp(1.0625rem,0.96rem+0.28vw,1.3125rem)] leading-[1.28] font-medium tracking-[-0.01em]";

const photoHover =
  "transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]";

/** Photograph-on-top card: large for powders, compact for produce, centred for fruit. */
function StackCard({
  product,
  label,
  variant,
}: {
  product: CatalogueProduct;
  label: string;
  variant: Exclude<CatalogueCategoryId, "spices">;
}) {
  const featured = variant === "powders";
  const fruit = variant === "fruits";

  return (
    <Link
      href={catalogueHref(product.slug)}
      className={cn(
        cardBase,
        "flex-col",
        featured ? "rounded-[2rem_2rem_2rem_0.75rem]" : "rounded-[var(--radius-card)]",
      )}
    >
      <span
        className={cn(
          "relative block overflow-hidden",
          featured ? "aspect-[5/4]" : fruit ? "m-3 mb-0 aspect-square rounded-[1.5rem_1.5rem_1.5rem_0.5rem]" : "aspect-[4/3]",
        )}
      >
        <Figure
          image={catalogueImage(product.image)}
          alt={product.alt}
          art="field"
          sizes={featured ? "(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 22vw, (min-width: 640px) 50vw, 100vw"}
          className="h-full w-full"
          mediaClassName={photoHover}
        />
      </span>
      <div className={cn("flex flex-1 flex-col", featured ? "p-6 sm:p-7" : "p-5", fruit && "items-center text-center")}>
        <span className="type-label text-leaf">{label}</span>
        <h3 className={cn("mt-2 font-display leading-tight text-forest", featured ? "text-title" : cardTitle)}>
          {product.name}
        </h3>
        <p className="mt-2 mb-5 text-[0.875rem] leading-relaxed text-ink-muted">{product.description}</p>
        <ViewProduct />
      </div>
    </Link>
  );
}

/** Spices: a horizontal card — square photograph beside the text. */
function RowCard({ product, label }: { product: CatalogueProduct; label: string }) {
  return (
    <Link href={catalogueHref(product.slug)} className={cn(cardBase, "items-stretch rounded-[1.5rem]")}>
      <span className="relative block min-h-32 w-28 shrink-0 overflow-hidden sm:w-32">
        <Figure
          image={catalogueImage(product.image)}
          alt={product.alt}
          art="field"
          sizes="8rem"
          className="h-full w-full"
          mediaClassName={photoHover}
        />
      </span>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <span className="type-label text-rust">{label}</span>
        <h3 className={cn("mt-1.5 font-display leading-tight text-forest", cardTitle)}>{product.name}</h3>
        <p className="mt-1.5 mb-3 text-[0.8125rem] leading-relaxed text-ink-muted">{product.description}</p>
        <ViewProduct />
      </div>
    </Link>
  );
}

function ViewProduct() {
  return (
    <span className="mt-auto inline-flex items-center gap-2 text-[0.875rem] font-semibold text-forest transition-colors duration-300 group-hover:text-leaf">
      View Product
      <Icon name="arrow-right" className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
    </span>
  );
}
