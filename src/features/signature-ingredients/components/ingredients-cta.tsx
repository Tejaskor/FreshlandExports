import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { Ornament } from "@/components/ui/ornament";
import { ingredientsCta } from "@/features/signature-ingredients/data";

/**
 * Closing band on the leaf-framed plate. The photograph's own foliage sits at
 * the edges, so the veil only needs to deepen the centre behind the copy.
 */
export function IngredientsCta() {
  return (
    <section
      aria-labelledby="ingredients-cta-heading"
      className="relative isolate overflow-hidden bg-forest-deep"
    >
      <div className="absolute inset-0 -z-10">
        <Parallax className="h-full w-full" amount={14} overscan={1.2} zoom={0.1}>
          <Figure
            image={ingredientsCta.media.image}
            alt={ingredientsCta.media.alt}
            art={ingredientsCta.media.art}
            // 2.67:1 plate: wider than the band on desktop, sized by height
            // on phones where the band is tall.
            sizes="(min-width: 1024px) 120vw, 400vw"
            className="h-full w-full bg-forest-deep"
          />
        </Parallax>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(13_44_30/0.8)_0%,rgb(13_44_30/0.55)_50%,rgb(13_44_30/0.15)_100%)]" />
        <div className="absolute inset-0 bg-forest-deep/35 md:hidden" />
      </div>

      <Container className="py-24 text-center lg:py-32">
        <Reveal variant="bloom">
          <Ornament className="mx-auto text-highlight-inverse" />
        </Reveal>

        <RevealLines
          as="h2"
          id="ingredients-cta-heading"
          className="mx-auto mt-6 max-w-3xl text-display text-white"
          delay={0.05}
        >
          <Line>{ingredientsCta.heading[0]}</Line>
          <Line className="text-highlight-inverse">{ingredientsCta.heading[1]}</Line>
        </RevealLines>

        <Reveal delay={0.3} variant="rise">
          <p className="mx-auto mt-6 max-w-xl text-lead text-white/85">{ingredientsCta.body}</p>
        </Reveal>

        <Reveal delay={0.45} variant="bloom" className="mt-9">
          <Button href={ingredientsCta.cta.href} size="lg">
            {ingredientsCta.cta.label}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
