import Link from "next/link";

import { Figure } from "@/components/media/figure";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/animations/reveal";
import {
  type SignatureIngredient,
  ingredientAnchor,
  ingredientHref,
} from "@/features/signature-ingredients/data";

/**
 * Six ingredients in a two-column ledger. Every card is one link; images hold
 * a fixed 4:3 ratio and stay large — a third of the card on desktop, full
 * width when stacked on phones.
 */
export function IngredientGrid({
  items,
  startIndex,
}: {
  items: readonly SignatureIngredient[];
  /** Number shown on the first card, continuing from the featured one. */
  startIndex: number;
}) {
  return (
    <Reveal
      as="ul"
      stagger={0.1}
      variant="rise"
      className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:gap-x-7 lg:gap-y-6"
    >
      {items.map((ingredient, index) => (
        <li key={ingredient.slug} id={ingredientAnchor(ingredient.slug)} className="scroll-mt-28">
          <Link
            href={ingredientHref(ingredient.slug)}
            className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-card)] transition-[background-color,translate,box-shadow,border-color] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-sage-200 hover:bg-sage-50 hover:shadow-[var(--shadow-lift)] sm:flex-row sm:items-center"
          >
            <span className="relative block aspect-[4/3] w-full shrink-0 overflow-hidden sm:w-[46%] sm:self-stretch sm:aspect-auto sm:min-h-44">
              <Figure
                image={ingredient.media.image}
                alt={ingredient.media.alt}
                art={ingredient.media.art}
                // 3:2 photo: full card width on phones, ~46% of a half-grid
                // column above, sized by height at sm–lg.
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 115vw"
                className="h-full w-full"
                mediaClassName="transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.08]"
              />
            </span>

            <span className="flex flex-1 items-center gap-4 p-6 sm:py-5 sm:pr-5 sm:pl-6">
              <span className="flex-1">
                <span aria-hidden="true" className="block font-mono text-[0.625rem] tracking-[0.2em] text-eyebrow">
                  {String(startIndex + index).padStart(2, "0")}
                </span>
                <span className="mt-1.5 block font-display text-[1.5rem] leading-tight text-forest">
                  {ingredient.name}
                </span>
                <span className="mt-1.5 block text-[0.9375rem] leading-snug text-ink-muted">
                  {ingredient.tagline}
                </span>
              </span>

              {/* Arrow slides forward and the disc fills on hover. */}
              <span className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-sage-100 text-forest transition-[background-color,color] duration-500 ease-[var(--ease-out-expo)] group-hover:bg-ember group-hover:text-white">
                <Icon
                  name="arrow-right"
                  className="size-4 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-0.5"
                />
              </span>
            </span>
          </Link>
        </li>
      ))}
    </Reveal>
  );
}
