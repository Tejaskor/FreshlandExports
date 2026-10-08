"use client";

import { type KeyboardEvent, type ReactNode, useId, useRef, useState } from "react";

import { Reveal } from "@/animations/reveal";
import { MoringaSprig } from "@/features/moringa/components/moringa-sprig";
import { benefitsDisclaimer, nutrients, nutrientsNote } from "@/features/moringa/data";
import { cn } from "@/lib/utils";

/** Sub-heading size for the two panels. */
const panelHeading = "font-display text-title leading-[1.05]";

/**
 * Nutrition explorer: the six nutrients on sage are tabs; the warm-cream
 * panel beside them shows the selected nutrient's benefits (Vitamin A first).
 *
 * Height never changes on selection: every nutrient's panel is rendered in
 * the same grid cell, so the cell is always as tall as the longest one, and
 * only the selected panel is visible. Only that content fades — the cards and
 * the section stay still.
 *
 * `media` is the round nutrition photograph, rendered on the server (its
 * ImageSlot checks the file on disk) and passed in.
 */
export function MoringaNutrients({ media }: { media: ReactNode }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  // Arrow keys move between nutrients, Home/End jump to the ends.
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = nutrients.length - 1;
    const next =
      event.key === "ArrowRight" || event.key === "ArrowDown"
        ? (index + 1) % nutrients.length
        : event.key === "ArrowLeft" || event.key === "ArrowUp"
          ? (index - 1 + nutrients.length) % nutrients.length
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? last
              : null;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-2">
      {/* Nutritional value — the selector */}
      <Reveal variant="rise" className="h-full">
        <div className="flex h-full flex-col rounded-[2rem] bg-sage-100 p-5 sm:p-6">
          <div className="flex items-center gap-4">
            {media}
            <h3 id={`${id}-nutrition`} className={cn(panelHeading, "text-forest")}>
              Nature&apos;s <span className="text-leaf">Nutritional</span> Treasure
            </h3>
          </div>

          <div role="tablist" aria-labelledby={`${id}-nutrition`} className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {nutrients.map((item, index) => {
              const selected = index === active;
              return (
                <button
                  key={item.name}
                  ref={(node) => {
                    tabs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`${id}-tab-${index}`}
                  aria-selected={selected}
                  aria-controls={`${id}-panel-${index}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                  className={cn(
                    "group flex cursor-pointer items-center gap-3 rounded-2xl border p-2.5 pr-4 text-left transition-[background-color,border-color,box-shadow] duration-300 focus-visible:ring-2 focus-visible:ring-leaf focus-visible:outline-none",
                    selected
                      ? "border-leaf bg-white shadow-[var(--shadow-card)]"
                      : "border-transparent bg-white/70 hover:border-sage-300 hover:bg-white",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "flex size-10 shrink-0 items-center justify-center rounded-full font-display text-[0.9375rem] font-medium text-white transition-colors duration-300",
                      selected ? "bg-leaf" : "bg-forest",
                    )}
                  >
                    {item.symbol}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-heading leading-tight text-forest">{item.name}</span>
                    <span className="block text-[0.8125rem] leading-snug text-ink-muted">{item.role}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-auto pt-4 text-[0.75rem] leading-relaxed text-ink-muted">{nutrientsNote}</p>
        </div>
      </Reveal>

      {/* Benefits of the selected nutrient */}
      <Reveal variant="rise" delay={0.1} className="h-full">
        <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-sage-200 bg-cream p-5 text-forest sm:p-6">
          <MoringaSprig
            variant="line"
            className="absolute -top-10 -right-12 h-56 w-auto rotate-[30deg] text-sage-200/70"
          />
          <p className="type-eyebrow relative text-leaf">Goodness in Every Spoonful</p>

          {/* Every panel shares one cell: the tallest sets the height. */}
          <div className="relative mt-3 mb-5 grid">
            {nutrients.map((item, index) => {
              const selected = index === active;
              return (
                <div
                  key={item.name}
                  role="tabpanel"
                  id={`${id}-panel-${index}`}
                  aria-labelledby={`${id}-tab-${index}`}
                  inert={!selected}
                  aria-hidden={!selected}
                  className={cn(
                    "[grid-area:1/1] transition-[opacity,translate] duration-500 ease-[var(--ease-out-expo)] motion-reduce:transition-none",
                    selected ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1.5 opacity-0",
                  )}
                >
                  <h3 className={cn(panelHeading, "text-forest")}>
                    {item.name} <span className="text-leaf-bright">Benefits</span>
                  </h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-muted">{item.summary}</p>
                  <ol className="mt-4 grid gap-3.5">
                    {item.benefits.map((benefit, point) => (
                      <li key={benefit.title} className="flex gap-3">
                        <span className="font-display text-[0.8125rem] font-medium text-leaf">
                          {String(point + 1).padStart(2, "0")}
                        </span>
                        <span>
                          <span className="block font-display text-[clamp(1rem,0.9rem+0.28vw,1.25rem)] leading-tight text-forest">
                            {benefit.title}
                          </span>
                          <span className="mt-0.5 block text-[0.8125rem] leading-relaxed text-ink-muted">
                            {benefit.text}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            })}
          </div>

          <p className="relative mt-auto flex items-start gap-3 border-t border-sage-200 pt-4 text-[0.75rem] leading-relaxed text-ink-muted">
            <span
              aria-hidden="true"
              className="mt-px flex size-5 shrink-0 items-center justify-center rounded-full border border-leaf/60 font-display text-[0.6875rem] font-medium text-leaf"
            >
              i
            </span>
            {benefitsDisclaimer}
          </p>
        </div>
      </Reveal>
    </div>
  );
}
