import Link from "next/link";

import { Carousel } from "@/components/ui/carousel";
import { CircleButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Figure } from "@/components/media/figure";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { ScrollScrub } from "@/animations/scroll-scrub";
import { Section } from "@/components/ui/section";
import { categories } from "@/features/home/data";

export function ProductCategories() {
  return (
    <Section aria-labelledby="categories-heading" className="bg-sage-50">
      <Container>
        <Carousel
          scrollable
          label="Product categories"
          heading={
            <div className="grid flex-1 gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-20">
              <div>
                <Reveal variant="rise">
                  <Eyebrow>Our Categories</Eyebrow>
                </Reveal>
                <RevealLines
                  as="h2"
                  id="categories-heading"
                  className="mt-5 text-display"
                  delay={0.05}
                >
                  <Line>Pure Ingredients</Line>
                  <Line>for a Healthier Tomorrow</Line>
                </RevealLines>
              </div>

              <Reveal delay={0.2} variant="rise" className="lg:pb-1">
                <p className="max-w-sm text-lead text-ink-muted">
                  From botanical extracts to functional ingredients, we deliver
                  nature&rsquo;s goodness for a healthier world.
                </p>
              </Reveal>
            </div>
          }
        >
          {categories.map((category, index) => (
            <Reveal
              key={category.href}
              as="article"
              variant="unveil"
              delay={index * 0.13}
              className="group/card w-[82%] shrink-0 snap-start transition-transform duration-700 ease-[var(--ease-out-expo)] hover:-translate-y-2 sm:w-[48%] lg:w-[calc((100%_-_6rem)*0.25)]"
            >
              <Link href={category.href} className="block">
                <div
                  className={
                    index % 2 === 0
                      ? "mask-organic relative aspect-5/4 overflow-hidden bg-sage-100 shadow-[var(--shadow-figure)]"
                      : "mask-organic-alt relative aspect-5/4 overflow-hidden bg-sage-100 shadow-[var(--shadow-figure)]"
                  }
                >
                  <ScrollScrub
                    className="h-full w-full"
                    from={{ yPercent: -4.5, scale: 1.12 }}
                    to={{ yPercent: 4.5, scale: 1.12 }}
                    desktopOnly
                  >
                    <Figure
                      image={category.image}
                      alt={category.alt}
                      art={category.art}
                      sizes="(min-width: 1024px) 21vw, (min-width: 640px) 48vw, 82vw"
                      className="h-full w-full"
                      mediaClassName="transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover/card:scale-[1.06]"
                    />
                  </ScrollScrub>
                </div>

                {/* The row itself is plain markup and the arrow sits outside
                    any Reveal: gsap.from() sets opacity:0 on its targets the
                    moment it mounts, so anything it owns is invisible until
                    its ScrollTrigger fires. Only the text is animated, which
                    keeps the arrow visible on every card unconditionally —
                    including with JS disabled or motion reduced. */}
                <div className="mt-5 flex items-start justify-between gap-4">
                  <Reveal
                    delay={index * 0.13 + 0.18}
                    variant="rise"
                    className="min-w-0"
                  >
                    <h3 className="text-heading">{category.title}</h3>
                    <p className="mt-1.5 text-[0.875rem] text-ink-muted lg:text-[0.9375rem]">
                      {category.description}
                    </p>
                  </Reveal>

                  <CircleButton
                    as="span"
                    label={category.title}
                    className="mt-0.5 bg-white group-hover/card:border-leaf group-hover/card:bg-leaf group-hover/card:text-white"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </Carousel>
      </Container>
    </Section>
  );
}
