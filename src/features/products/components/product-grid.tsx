import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { Reveal } from "@/animations/reveal";
import { Section } from "@/components/ui/section";
import { products } from "@/features/products/data";

/** Full catalogue listing for /products. */
export function ProductGrid() {
  return (
    <Section aria-labelledby="catalogue-heading" className="bg-white">
      <Container>
        <h2 id="catalogue-heading" className="sr-only">
          Product catalogue
        </h2>

        <ul className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-9">
          {products.map((product, index) => (
            <Reveal
              key={product.href}
              as="li"
              variant="rise"
              delay={index * 0.08}
              className="group/card relative overflow-hidden rounded-card border border-line bg-white transition-all duration-700 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:border-sage-200 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="overflow-hidden bg-sage-50">
                <Figure
                  image={product.image}
                  alt={product.alt}
                  art={product.art}
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 46vw, 92vw"
                  className="h-64 w-full lg:h-72"
                  mediaClassName="transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover/card:scale-[1.07]"
                />
              </div>

              <div className="px-7 pt-7 pb-7 text-center">
                <h3 className="text-heading">
                  <Link href={product.href} className="after:absolute after:inset-0">
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-2 text-[0.875rem] text-ink-muted">
                  {product.descriptor}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
