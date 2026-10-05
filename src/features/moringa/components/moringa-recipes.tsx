import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { ImageSlot } from "@/features/moringa/components/image-slot";
import { RecipeDetails } from "@/features/moringa/components/recipe-details";
import { type Recipe, recipes, usageTip, uses } from "@/features/moringa/data";
import { type } from "@/features/moringa/styles";
import { cn } from "@/lib/utils";

/** Each compact card takes a slightly different leaf-cut corner. */
const compactShapes = [
  "rounded-[2rem_2rem_2rem_0.5rem]",
  "rounded-[0.5rem_2rem_2rem_2rem]",
  "rounded-[2rem_0.5rem_2rem_2rem]",
];

/**
 * Recipes and everyday uses, as a cream panel inside the Applications &
 * Recipes section: the ways to use the powder and the serving tip up top,
 * then one featured recipe beside three compact ones. Methods open in place.
 */
export function RecipesPanel({ className }: { className?: string }) {
  const [featured, ...rest] = recipes;

  return (
    <div
      className={cn(
        "rounded-[2rem] bg-cream-warm px-5 py-8 text-ink sm:px-8 lg:rounded-[2.5rem] lg:px-10 lg:py-10",
        className,
      )}
    >
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <RevealLines
            as="h3"
            id="recipes-heading"
            className={cn(type.sub, "text-forest")}
          >
            <Line>Bring Your Recipes</Line>
            <Line>
              to <span className="text-leaf">Life</span>
            </Line>
          </RevealLines>
          <Reveal as="ul" stagger={0.05} variant="rise" aria-label="Ways to use moringa powder" className="mt-5 flex flex-wrap gap-2">
            {uses.map((use) => (
              <li
                key={use.name}
                className="rounded-full border border-line-strong bg-white px-4 py-1.5 text-[0.8125rem] font-medium text-forest"
              >
                {use.name}
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal variant="settle" delay={0.15} className="lg:col-span-4">
          <aside
            aria-label="Serving tip"
            className="max-w-sm rotate-[-1.5deg] rounded-[1.5rem_1.5rem_1.5rem_0.5rem] bg-sage-100 p-5 transition-[rotate] duration-700 ease-[var(--ease-out-expo)] hover:rotate-0 lg:ml-auto"
          >
            <span className="type-label text-leaf">Tip</span>
            <p className="mt-2 font-display text-heading leading-snug text-forest">
              {usageTip}
            </p>
          </aside>
        </Reveal>
      </div>

      <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-12 lg:gap-10">
        <FeaturedRecipe recipe={featured} />

        <Reveal as="ul" stagger={0.12} variant="sweep-left" className="space-y-4 lg:col-span-5">
          {rest.map((recipe, index) => (
            <li key={recipe.id}>
              <article
                className={cn(
                  "grid grid-cols-[6rem_1fr] items-start gap-4 bg-white p-5 sm:grid-cols-[8.5rem_1fr] sm:gap-6 sm:p-6",
                  compactShapes[index],
                )}
              >
                <ImageSlot
                  image={recipe.image}
                  tone="sage"
                  bare
                  framed={false}
                  sizes="(min-width: 640px) 9rem, 6rem"
                  className="aspect-square w-full rounded-2xl ring-4 ring-cream-warm shadow-xs"
                  mediaClassName={cn(
                    recipe.image === "herbalDrink" ? "object-[62%_center]" : "object-center",
                    "transition-transform duration-700 hover:scale-105",
                  )}
                />
                <div className="min-w-0">
                  <RecipeMeta recipe={recipe} />
                  <h4 className="mt-1.5 font-display text-heading leading-[1.1] text-forest">
                    {recipe.title}
                  </h4>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-muted">
                    {recipe.ingredients.slice(0, 3).join(" · ")}
                    {recipe.ingredients.length > 3 && ` · +${recipe.ingredients.length - 3} more`}
                  </p>
                  <RecipeDetails recipe={recipe} withIngredients className="mt-4" />
                </div>
              </article>
            </li>
          ))}
        </Reveal>
      </div>
    </div>
  );
}

function RecipeMeta({ recipe }: { recipe: Recipe }) {
  return (
    <p className="type-label text-leaf">
      {recipe.time} <span aria-hidden="true">·</span> {recipe.serves}
    </p>
  );
}

function FeaturedRecipe({ recipe }: { recipe: Recipe }) {
  return (
    <article className="lg:col-span-7">
      <Reveal variant="unveil">
        <ImageSlot
          image={recipe.image}
          tone="sage"
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="aspect-[5/4] w-full rounded-[3rem_3rem_3rem_0.75rem] lg:rounded-[5rem_3rem_3rem_0.75rem]"
          mediaClassName="object-center"
        />
      </Reveal>

      <Reveal
        variant="rise"
        delay={0.2}
        className="relative z-10 mx-3 -mt-20 sm:mr-auto sm:ml-10 sm:max-w-lg lg:-mt-32"
      >
        <div className="rounded-[2rem] bg-white p-6 shadow-[var(--shadow-lift)] sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <span className="type-label rounded-full bg-sage-100 px-3 py-1 text-forest">
              Featured
            </span>
            <RecipeMeta recipe={recipe} />
          </div>
          <h4 className="mt-5 font-display text-title leading-[1.02] text-forest">
            {recipe.title}
          </h4>
          <ul className="mt-5 grid gap-x-6 gap-y-1.5 text-[0.875rem] text-ink-muted sm:grid-cols-2">
            {recipe.ingredients.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-leaf-bright" />
                {item}
              </li>
            ))}
          </ul>
          <RecipeDetails recipe={recipe} className="mt-6" />
        </div>
      </Reveal>
    </article>
  );
}
