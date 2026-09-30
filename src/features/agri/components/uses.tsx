import { Container } from "@/components/ui/container";
import { Reveal } from "@/animations/reveal";
import { ProductImage, SectionHeader } from "@/features/agri/components/shared";
import type { AgriProduct } from "@/features/agri/types";
import { UseTabs } from "@/features/onion-powder/components/use-tabs";
import { cn } from "@/lib/utils";

function Chips({ items, inverse = false }: { items: readonly string[]; inverse?: boolean }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "rounded-full px-3 py-1 text-[0.8125rem]",
            inverse ? "border border-white/20 text-white/85" : "bg-[var(--p-tint)] text-forest ring-1 ring-[var(--p-soft)]",
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Uses({
  product,
  variant,
}: {
  product: AgriProduct;
  variant: "columns" | "gallery" | "list" | "tabs";
}) {
  const { uses, images } = product;

  /* Tabs on the product's deep shade — one group at a time. */
  if (variant === "tabs") {
    const categories = uses.groups.map((group, index) => ({
      id: `use-${index}`,
      title: group.title,
      text: group.text ?? "",
      items: group.items,
    }));
    return (
      <section aria-labelledby="uses-heading" className="bg-[var(--p-deep)] py-14 text-white lg:py-20">
        <Container>
          <SectionHeader id="uses-heading" eyebrow={uses.eyebrow} heading={uses.heading} intro={uses.intro} inverse />
          <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-10">
            <Reveal variant="unveil" className="lg:col-span-5">
              <ProductImage
                slot={images.detail}
                dark
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[4/3] w-full rounded-[2rem_2rem_2rem_0.5rem]"
              />
            </Reveal>
            <Reveal variant="rise" delay={0.1} className="lg:col-span-7">
              <UseTabs categories={categories} />
            </Reveal>
          </div>
        </Container>
      </section>
    );
  }

  /* Staggered photographs, each with its group beneath. */
  if (variant === "gallery") {
    return (
      <section aria-labelledby="uses-heading" className="bg-white py-14 lg:py-20">
        <Container>
          <SectionHeader id="uses-heading" eyebrow={uses.eyebrow} heading={uses.heading} intro={uses.intro} />
          <Reveal as="ul" stagger={0.08} variant="unveil" className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-12">
            {uses.groups.map((group, index) => (
              <li key={group.title} className={cn(index % 2 === 1 && "sm:mt-14")}>
                <ProductImage
                  slot={group.image ?? images.detail}
                  compact
                  sizes="(min-width: 640px) 45vw, 100vw"
                  className="aspect-[16/10] w-full rounded-[1.75rem]"
                />
                <h3 className="mt-5 font-display text-heading text-forest">{group.title}</h3>
                {group.text && <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-muted">{group.text}</p>}
                <Chips items={group.items} />
              </li>
            ))}
          </Reveal>
        </Container>
      </section>
    );
  }

  /* A photograph beside the groups as ruled rows. */
  if (variant === "list") {
    return (
      <section aria-labelledby="uses-heading" className="bg-[var(--p-tint)] py-14 lg:py-20">
        <Container>
          <SectionHeader id="uses-heading" eyebrow={uses.eyebrow} heading={uses.heading} intro={uses.intro} />
          <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-12">
            <Reveal variant="unveil" className="lg:col-span-5">
              <ProductImage
                slot={images.detail}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[4/3] w-full rounded-[2rem] lg:aspect-[4/5]"
              />
            </Reveal>
            <Reveal as="ol" stagger={0.07} variant="rise" className="lg:col-span-7">
              {uses.groups.map((group, index) => (
                <li key={group.title} className="grid gap-2 border-t border-[var(--p-soft)] py-5 sm:grid-cols-[12rem_1fr] sm:gap-6">
                  <h3 className="font-display text-heading text-forest">
                    <span aria-hidden="true" className="mr-2 text-[var(--p-accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {group.title}
                  </h3>
                  <div>
                    {group.text && <p className="text-[0.9375rem] leading-relaxed text-ink-muted">{group.text}</p>}
                    <Chips items={group.items} />
                  </div>
                </li>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>
    );
  }

  /* Four columns, each topped with an accent rule. */
  return (
    <section aria-labelledby="uses-heading" className="bg-white py-14 lg:py-20">
      <Container>
        <SectionHeader id="uses-heading" eyebrow={uses.eyebrow} heading={uses.heading} intro={uses.intro} />
        <Reveal as="ul" stagger={0.06} variant="rise" className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {uses.groups.map((group) => (
            <li key={group.title} className="rounded-[1.5rem] border border-line bg-white p-6">
              <span aria-hidden="true" className="block h-1 w-10 rounded-full bg-[var(--p-accent)]" />
              <h3 className="mt-4 font-display text-heading text-forest">{group.title}</h3>
              {group.text && <p className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-muted">{group.text}</p>}
              <ul className="mt-3 space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[0.875rem] text-ink">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--p-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
