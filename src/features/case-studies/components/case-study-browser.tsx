"use client";

import { type ReactNode, useId, useMemo, useState } from "react";

import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import type { CaseStudyCardData } from "@/features/case-studies/card-data";
import { CaseStudyCard } from "@/features/case-studies/components/case-study-card";
import type { CatalogueCategoryId } from "@/features/products/catalogue";
import { cn } from "@/lib/utils";

type Filter = CatalogueCategoryId | "all";

/**
 * The case studies listing: a hero on the site container (heading left,
 * search right, category filters beneath), then the card grid. Search and filters apply together;
 * the result count is announced to screen readers, and an empty state offers
 * a way back to every case study.
 */
export function CaseStudyBrowser({
  studies,
  categories,
  intro,
}: {
  studies: readonly CaseStudyCardData[];
  categories: readonly { id: CatalogueCategoryId; heading: string }[];
  /** The hero's heading and subtitle, rendered above the search. */
  intro: ReactNode;
}) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const searchId = useId();

  const results = useMemo(() => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    return studies.filter(
      (study) =>
        (filter === "all" || study.categories.some((category) => category.id === filter)) &&
        terms.every((term) => study.search.includes(term)),
    );
  }, [studies, query, filter]);

  const reset = () => {
    setQuery("");
    setFilter("all");
  };

  const filters: readonly { id: Filter; label: string }[] = [
    { id: "all", label: "All Case Studies" },
    ...categories.map((category) => ({ id: category.id, label: category.heading })),
  ];

  return (
    <>
      <section aria-labelledby="case-studies-heading" className="bg-sage-50 pt-28 pb-12 lg:pt-[7.5rem] lg:pb-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">{intro}</div>

            <div className="lg:col-span-5">
              <label htmlFor={searchId} className="sr-only">
                Search case studies
              </label>
              <div className="relative">
                <Icon
                  name="search"
                  className="pointer-events-none absolute top-1/2 left-5 size-4 -translate-y-1/2 text-ink-muted"
                />
                <input
                  id={searchId}
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by product, category or topic"
                  className="h-14 w-full rounded-full border border-line bg-white pr-14 pl-12 text-[0.9375rem] text-ink shadow-[var(--shadow-card)] placeholder:text-ink-muted/80 focus:border-leaf focus:outline-none focus-visible:ring-2 focus-visible:ring-leaf/40 [&::-webkit-search-cancel-button]:hidden"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="absolute top-1/2 right-3 flex size-8 -translate-y-1/2 items-center justify-center rounded-full text-ink-muted transition-colors duration-300 hover:bg-sage-100 hover:text-forest focus-visible:outline-2 focus-visible:outline-leaf"
                  >
                    <Icon name="close" className="size-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div
            role="group"
            aria-label="Filter by category"
            className="mt-8 flex flex-wrap gap-2 border-t border-line-strong/70 pt-6"
          >
            {filters.map((item) => {
              const active = item.id === filter;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(item.id)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-[0.8125rem] font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf",
                    active
                      ? "border-forest bg-forest text-white"
                      : "border-line-strong bg-white text-forest hover:border-leaf hover:text-leaf",
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      <section aria-label="Case studies" className="bg-white py-12 lg:py-16">
        <Container>
          <p aria-live="polite" className="sr-only">
            {results.length === 1 ? "1 case study found" : `${results.length} case studies found`}
          </p>

          {results.length > 0 ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {results.map((study) => (
                <li key={study.slug}>
                  <CaseStudyCard study={study} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-xl border border-dashed border-line-strong bg-white px-6 py-12 text-center">
              <p className="font-display text-[1.375rem] text-forest">No case studies match your search</p>
              <p className="mx-auto mt-2 max-w-md text-[0.9375rem] text-ink-muted">
                Try a different product or topic, or clear the filters to see every case study.
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-5 rounded-full border border-forest px-5 py-2.5 text-[0.875rem] font-semibold text-forest transition-colors duration-300 hover:bg-forest hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
              >
                Show all case studies
              </button>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
