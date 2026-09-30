"use client";

import { type KeyboardEvent, useId, useRef, useState } from "react";

import type { UseCategory } from "@/features/onion-powder/data";
import { cn } from "@/lib/utils";

/**
 * The five everyday-use categories as tabs. Every panel stays in the markup
 * (inactive ones are `hidden`), so all applications remain in the page for
 * search engines and no-JS readers. Arrow keys move between tabs.
 */
export function UseTabs({ categories }: { categories: readonly UseCategory[] }) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const next = (active + step + categories.length) % categories.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Everyday uses" className="flex flex-wrap gap-2">
        {categories.map((category, index) => {
          const selected = index === active;
          return (
            <button
              key={category.id}
              ref={(node) => {
                tabs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${category.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${category.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={onKeyDown}
              className={cn(
                "rounded-full border px-4 py-2 text-[0.875rem] font-semibold transition-[background-color,border-color,color] duration-300",
                selected
                  ? "border-cream bg-cream text-forest-deep"
                  : "border-white/25 text-white/85 hover:border-highlight-inverse hover:text-highlight-inverse",
              )}
            >
              {category.title}
            </button>
          );
        })}
      </div>

      {categories.map((category, index) => (
        <div
          key={category.id}
          role="tabpanel"
          id={`${baseId}-panel-${category.id}`}
          aria-labelledby={`${baseId}-tab-${category.id}`}
          hidden={index !== active}
          className="mt-6"
        >
          <p className="max-w-xl text-[0.9375rem] leading-relaxed text-white/80">{category.text}</p>
          <p className="type-label mt-5 text-highlight-inverse">
            Applications
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
            {category.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-[0.9375rem] text-white"
              >
                <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-highlight-inverse" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
