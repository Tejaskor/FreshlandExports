import { Container } from "@/components/ui/container";
import { Reveal } from "@/animations/reveal";
import { SectionHeader } from "@/features/agri/components/shared";
import type { AgriProduct } from "@/features/agri/types";
import { FaqAccordion } from "@/features/moringa/components/faq-accordion";
import { cn } from "@/lib/utils";

/* ========================================================================
   Varieties — a row of variety cards, each opened by a large initial.
   ======================================================================== */

export function Varieties({ product }: { product: AgriProduct }) {
  if (!product.varieties) return null;
  const { varieties } = product;
  return (
    <section aria-labelledby="varieties-heading" className="bg-[var(--p-tint)] py-14 lg:py-20">
      <Container>
        <SectionHeader id="varieties-heading" eyebrow={varieties.eyebrow} heading={varieties.heading} intro={varieties.intro} />
        <Reveal as="ul" stagger={0.07} variant="rise" className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {varieties.items.map((item, index) => (
            <li
              key={item.name}
              className={cn(
                "group relative overflow-hidden rounded-[2rem] bg-white p-6 transition-[translate,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]",
                index % 2 === 1 && "lg:mt-8",
              )}
            >
              <span
                aria-hidden="true"
                className="flex size-14 items-center justify-center rounded-[45%_55%_50%_50%/55%_45%_55%_45%] bg-[var(--p-soft)] font-display text-[1.5rem] font-medium text-[var(--p-deep)] transition-colors duration-500 group-hover:bg-[var(--p-accent)] group-hover:text-white"
              >
                {item.name.charAt(0)}
              </span>
              <h3 className="mt-5 font-display text-heading text-forest">{item.name}</h3>
              <p className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-muted">{item.text}</p>
            </li>
          ))}
        </Reveal>
        <p className="mt-6 text-[0.8125rem] text-ink-muted">{varieties.note}</p>
      </Container>
    </section>
  );
}

/* ========================================================================
   FAQ — the site's accordion, beside the heading or centred under it.
   ======================================================================== */

export function Faq({ product, variant }: { product: AgriProduct; variant: "split" | "center" }) {
  if (!product.faqs) return null;
  const { faqs } = product;

  if (variant === "center") {
    return (
      <section aria-labelledby="faq-heading" className="bg-white py-14 lg:py-20">
        <Container>
          <SectionHeader id="faq-heading" eyebrow={faqs.eyebrow} heading={faqs.heading} align="center" />
          <Reveal variant="rise" className="mx-auto mt-8 max-w-3xl">
            <FaqAccordion items={faqs.items} />
          </Reveal>
        </Container>
      </section>
    );
  }

  return (
    <section aria-labelledby="faq-heading" className="bg-white py-14 lg:py-20">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeader id="faq-heading" eyebrow={faqs.eyebrow} heading={faqs.heading} align="start" />
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-muted">
              Temporary answers — final details are confirmed with each enquiry.
            </p>
          </div>
        </div>
        <Reveal variant="rise" className="lg:col-span-8">
          <FaqAccordion items={faqs.items} />
        </Reveal>
      </Container>
    </section>
  );
}
