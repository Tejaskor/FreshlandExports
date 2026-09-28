"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { Reveal } from "@/animations/reveal";
import { useSmoothScroll } from "@/components/providers/smooth-scroll-provider";
import { ANCHOR_OFFSET } from "@/features/signature-ingredients/components/anchor-button";
import { ingredientAnchor, ingredients } from "@/features/signature-ingredients/data";
import { cn } from "@/lib/utils";

/**
 * Ingredient selector: a numbered row of portraits strung on a hairline, not
 * a product carousel. Each entry is a real in-page link (works without JS),
 * upgraded to a Lenis glide. The entry whose ingredient is on screen is marked
 * current, tracked with one IntersectionObserver rather than scroll handlers.
 *
 * Below lg the row becomes a native horizontal scroller with snap points —
 * touch-friendly and no transform fighting the user's own panning.
 */
export function IngredientNavigation() {
  const { scrollTo } = useSmoothScroll();
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const targets = ingredients
      .map((ingredient) => document.getElementById(ingredientAnchor(ingredient.slug)))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      // A thin band across the middle of the viewport decides "current".
      { rootMargin: "-45% 0px -45% 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Signature ingredients" className="bg-cream py-12 lg:py-16">
      <Container>
        <div className="relative">
          {/* The hairline the portraits hang from, desktop only — at the
              circles' centre (8px top padding + half the diameter). At lg the
              circles stop at 7.625rem: seven of them plus the 16px gaps must
              fit a ~962px row at 1024px without scrolling. */}
          <span
            aria-hidden="true"
            className="absolute inset-x-[7%] top-[3.8125rem] hidden xl:top-[4.625rem] h-px bg-gradient-to-r from-transparent via-sage-300 to-transparent lg:block"
          />

          <Reveal
            as="ol"
            stagger={0.08}
            variant="bloom"
            className="scrollbar-none -mx-gutter flex snap-x snap-mandatory gap-6 overflow-x-auto px-gutter pt-2 pb-4 lg:mx-0 lg:justify-between lg:gap-4 lg:overflow-visible lg:px-0"
          >
            {ingredients.map((ingredient, index) => {
              const id = ingredientAnchor(ingredient.slug);
              const current = active === id;

              return (
                <li key={ingredient.slug} className="shrink-0 snap-start">
                  <a
                    href={`#${id}`}
                    aria-current={current ? "location" : undefined}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollTo(`#${id}`, ANCHOR_OFFSET);
                    }}
                    className="group flex w-[7.25rem] flex-col items-center rounded-2xl text-center sm:w-[8rem] lg:w-[7.625rem] xl:w-[8.25rem]"
                  >
                    <span
                      className={cn(
                        "relative block size-[7.25rem] rounded-full bg-cream p-1 ring-1 transition-[scale,box-shadow] duration-500 ease-[var(--ease-out-expo)] group-hover:scale-105 sm:size-[8rem] lg:size-[7.625rem] xl:size-[8.25rem]",
                        current ? "ring-2 ring-ember" : "ring-sage-300 group-hover:ring-leaf",
                      )}
                    >
                      <Figure
                        image={ingredient.media.image}
                        alt=""
                        art={ingredient.media.art}
                        // 3:2 photo in a circle of up to 132px is sized by
                        // height, plus the hover zoom.
                        sizes="230px"
                        className="h-full w-full rounded-full"
                        mediaClassName="transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.14]"
                      />
                    </span>

                    <span aria-hidden="true" className="mt-3 font-mono text-[0.625rem] tracking-[0.2em] text-eyebrow">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "mt-1 bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-bottom bg-no-repeat pb-0.5 text-[0.9375rem] font-medium transition-[color,background-size] duration-500 ease-[var(--ease-out-expo)] group-hover:bg-[length:100%_1px]",
                        current ? "text-ember-deep" : "text-forest group-hover:text-ember-deep",
                      )}
                    >
                      {ingredient.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </Reveal>
        </div>
      </Container>
    </nav>
  );
}
