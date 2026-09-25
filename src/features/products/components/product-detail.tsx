import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Figure } from "@/components/media/figure";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { Section } from "@/components/ui/section";
import type { Product } from "@/features/products/types";

/** Detail view for /products/[slug]. */
export function ProductDetail({ product }: { product: Product }) {
  return (
    <Section aria-labelledby="product-heading" className="bg-cream pt-40 lg:pt-48">
      <Container className="grid items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <div>
          <Reveal variant="sweep-left">
            <Eyebrow>{product.descriptor}</Eyebrow>
          </Reveal>

          <RevealLines as="h1" id="product-heading" className="mt-7 text-display" intro>
            <Line>{product.name}</Line>
          </RevealLines>

          <Reveal delay={0.2} variant="sweep-left">
            <p className="mt-8 max-w-md text-lead text-ink-muted">{product.alt}</p>
          </Reveal>

          <Reveal delay={0.3} variant="sweep-left" className="mt-11">
            <Button href="/contact">Request a specification</Button>
          </Reveal>
        </div>

        <Reveal variant="sweep-right">
          <Parallax
            className="mask-organic-alt aspect-5/4 w-full shadow-[var(--shadow-figure)]"
            amount={10}
          >
            <Figure
              image={product.image}
              alt={product.alt}
              art={product.art}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-full w-full"
            />
          </Parallax>
        </Reveal>
      </Container>
    </Section>
  );
}
