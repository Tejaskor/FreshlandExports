import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Figure } from "@/components/media/figure";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { ScrollScrub } from "@/animations/scroll-scrub";
import { Tilt } from "@/animations/tilt";
import { Section } from "@/components/ui/section";
import { featuredProducts } from "@/features/home/data";

export function FeaturedProducts() {
  return (
    <Section aria-labelledby="products-heading" className="bg-white">
      <Container>
        <Carousel
          drift
          scrollable
          label="Featured products"
          heading={
            <div className="flex flex-1 flex-wrap items-end justify-between gap-8">
              <div>
                <Reveal variant="rise">
                  <Eyebrow>Featured Products</Eyebrow>
                </Reveal>
                <RevealLines
                  as="h2"
                  id="products-heading"
                  className="mt-5 text-display"
                  delay={0.05}
                >
                  <Line>Ingredients That Make a Difference</Line>
                </RevealLines>
              </div>

              <Reveal delay={0.2} variant="bloom" className="pb-2">
                <Link
                  href="/products"
                  className="group/link inline-flex items-center gap-2 text-[0.875rem] font-medium text-forest transition-colors duration-300 hover:text-leaf"
                >
                  View All Products
                  <Icon name="arrow-right" className="size-4" />
                </Link>
              </Reveal>
            </div>
          }
        >
          {featuredProducts.map((product, index) => (
            <Reveal
              key={product.href}
              as="article"
              variant="rise"
              delay={index * 0.11}
              className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[calc((100%_-_6rem)*0.25)]"
            >
              <Tilt className="h-full">
                <div className="group/card relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-white transition-all duration-700 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:border-sage-200 hover:shadow-[var(--shadow-lift)]">
                  <div className="overflow-hidden bg-sage-50">
                    <ScrollScrub
                      from={{ scale: 1.07 }}
                      to={{ scale: 1 }}
                      desktopOnly
                    >
                      <Figure
                        image={product.image}
                        alt={product.alt}
                        art={product.art}
                        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 46vw, 78vw"
                        className="h-64 w-full lg:h-72"
                        mediaClassName="transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover/card:scale-[1.07]"
                      />
                    </ScrollScrub>
                  </div>

                  <div className="flex flex-1 flex-col items-center px-6 pt-5 pb-6 text-center">
                <h3 className="text-heading">
                  <Link href={product.href} className="after:absolute after:inset-0">
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-1.5 mb-5 text-[0.8125rem] text-ink-muted">
                  {product.descriptor}
                </p>

                    <Button
                      href="/contact"
                      variant="outline"
                      size="sm"
                      className="relative z-10 mt-auto"
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </Carousel>
      </Container>
    </Section>
  );
}
