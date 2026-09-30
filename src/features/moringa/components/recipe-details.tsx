"use client";

import { useId, useState } from "react";

import { Button } from "@/components/ui/button";
import { Collapse } from "@/features/moringa/components/collapse";
import type { Recipe } from "@/features/moringa/data";
import { cn } from "@/lib/utils";

/**
 * "View Recipe" disclosure. Compact cards list the full ingredients inside
 * the panel (their face shows only a summary); the featured card already
 * shows them, so its panel carries only the method.
 */
export function RecipeDetails({
  recipe,
  withIngredients = false,
  className,
}: {
  recipe: Recipe;
  withIngredients?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={className}>
      <Button
        variant={open ? "forest" : "outline"}
        size="sm"
        withArrow={false}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="gap-2 font-semibold"
      >
        <span className="inline-flex items-center gap-2">
          {open ? "Hide Recipe" : "View Recipe"}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
            className={cn(
              "size-3.5 transition-[rotate] duration-500 ease-[var(--ease-out-expo)]",
              open && "rotate-45",
            )}
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </Button>

      <Collapse id={panelId} open={open}>
        <div className="pt-6">
          {withIngredients && (
            <>
              <p className="type-label text-leaf">
                Ingredients
              </p>
              <ul className="mt-2 space-y-1 text-[0.875rem] text-ink-muted">
                {recipe.ingredients.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-leaf-bright" />
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
          <p
            className={cn(
              "type-label text-leaf",
              withIngredients && "mt-5",
            )}
          >
            Method
          </p>
          <ol className="mt-2 space-y-2 text-[0.875rem] leading-relaxed text-ink-muted">
            {recipe.method.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="font-display text-[0.875rem] font-medium text-forest">{index + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </Collapse>
    </div>
  );
}
