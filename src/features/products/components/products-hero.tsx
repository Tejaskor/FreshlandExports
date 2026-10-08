import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Figure } from "@/components/media/figure";
import { Icon, type IconName } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";

const trustPoints: readonly { icon: IconName; label: string }[] = [
  { icon: "award", label: "Premium Quality" },
  { icon: "sprout", label: "Direct Farm Sourcing" },
  { icon: "globe", label: "Global Export" },
  { icon: "handshake", label: "Reliable Supply" },
];

/**
 * Compact masthead for /products: the promise and four trust points on the
 * left, a wide farm photograph on the right. Kept short so the catalogue
 * starts within the first scroll.
 */
export function ProductsHero() {
  return (
    <section aria-labelledby="page-heading" className="relative bg-cream pt-28 pb-12 lg:pt-36 lg:pb-16">
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <Reveal variant="rise">
            <Eyebrow>Our Products</Eyebrow>
          </Reveal>

          <RevealLines as="h1" id="page-heading" className="mt-6 text-display" intro>
            <Line>From Indian Farms</Line>
            <Line>to Global Markets</Line>
          </RevealLines>

          <Reveal delay={0.2} variant="rise">
            <p className="mt-6 max-w-xl text-lead text-ink-muted">
              Freshland Exports supplies fresh agricultural produce, fruits, botanical powders and whole spices
              from Indian farms to wholesale, food-service, processing and export buyers.
            </p>
          </Reveal>

          <Reveal
            as="ul"
            delay={0.3}
            stagger={0.06}
            variant="rise"
            className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4"
          >
            {trustPoints.map((point) => (
              <li key={point.label} className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2.5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-sage-200 bg-white text-leaf">
                  <Icon name={point.icon} className="size-[1.125rem]" />
                </span>
                <span className="text-[0.8125rem] leading-snug font-medium text-forest">{point.label}</span>
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal variant="unveil" delay={0.15} className="lg:col-span-6">
          <Figure
            image="/images/products/freshland-products-hero.webp"
            alt="Bowls of moringa, turmeric and chilli powders with onions, dried red chillies and whole spices before green farmland and hills"
            art="field"
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="mask-organic aspect-[3/2] w-full shadow-[var(--shadow-figure)]"
          />
        </Reveal>
      </Container>
    </section>
  );
}
