import Link from "next/link";

import { CircleButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { Reveal } from "@/animations/reveal";
import { Section } from "@/components/ui/section";
import { categories } from "@/features/categories/data";

/** Full category listing for /categories. */
export function CategoryGrid() {
  return (
    <Section aria-labelledby="categories-listing" className="bg-sage-50">
      <Container>
        <h2 id="categories-listing" className="sr-only">
          All categories
        </h2>

        <ul className="grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <Reveal
              key={category.href}
              as="li"
              variant="unveil"
              delay={index * 0.13}
              className="group/card"
            >
              <Link href={category.href} className="block">
                <div
                  className={
                    index % 2 === 0
                      ? "mask-organic relative aspect-3/4 overflow-hidden bg-sage-100 shadow-[var(--shadow-figure)]"
                      : "mask-organic-alt relative aspect-3/4 overflow-hidden bg-sage-100 shadow-[var(--shadow-figure)]"
                  }
                >
                  <Figure
                    image={category.image}
                    alt={category.alt}
                    art={category.art}
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 46vw, 92vw"
                    className="h-full w-full"
                    mediaClassName="transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover/card:scale-[1.06]"
                  />
                </div>

                <div className="mt-8 flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-heading">{category.title}</h3>
                    <p className="mt-2 text-[0.875rem] text-ink-muted">
                      {category.description}
                    </p>
                  </div>
                  <CircleButton
                    as="span"
                    label={category.title}
                    className="mt-0.5 group-hover/card:border-leaf group-hover/card:bg-leaf group-hover/card:text-white"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
