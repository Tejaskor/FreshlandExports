"use client";

import { useId, useState } from "react";

import { Icon } from "@/components/ui/icon";
import { Collapse } from "@/features/moringa/components/collapse";
import type { BlogArticle } from "@/features/products/blog";
import { cn } from "@/lib/utils";

/**
 * "Read Article" disclosure for a Blog card that carries its full article:
 * the text opens in place, below the summary, with the same height animation
 * as the recipe and FAQ panels. Closed, the panel is inert but stays in the
 * page source, so the article is indexed with the product page.
 */
export function ArticleReader({
  body,
  title,
  linkClassName,
}: {
  body: NonNullable<BlogArticle["body"]>;
  title: string;
  linkClassName: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="mt-auto">
      <Collapse id={panelId} open={open}>
        <div className="space-y-5 border-t border-line pt-5 pb-6">
          {body.map((section) => (
            <section key={section.heading}>
              <h4 className="font-display text-heading leading-snug text-forest">{section.heading}</h4>
              <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-muted">{section.text}</p>
            </section>
          ))}
        </div>
      </Collapse>

      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "group/read inline-flex items-center gap-2 text-[0.875rem] font-medium transition-colors duration-300",
          linkClassName,
        )}
      >
        <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 ease-[var(--ease-out-expo)] group-hover/read:bg-[length:100%_1px]">
          {open ? "Close Article" : "Read Article"}
          <span className="sr-only">: {title}</span>
        </span>
        <Icon
          name="arrow-right"
          className={cn(
            "size-3.5 transition-transform duration-500 ease-[var(--ease-out-expo)]",
            open ? "-rotate-90" : "rotate-90 group-hover/read:translate-y-0.5",
          )}
        />
      </button>
    </div>
  );
}
