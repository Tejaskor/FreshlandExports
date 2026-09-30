"use client";

import { useId, useState } from "react";

import { Collapse } from "@/features/moringa/components/collapse";
import type { Faq } from "@/features/moringa/data";
import { cn } from "@/lib/utils";

/**
 * One-open-at-a-time accordion; by default the first answer starts open.
 * `offset` continues the numbering when one list is split across columns.
 */
export function FaqAccordion({
  items,
  offset = 0,
  defaultOpen = 0,
}: {
  items: readonly Faq[];
  offset?: number;
  defaultOpen?: number | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <ul className="space-y-2.5">
      {items.map((item, index) => {
        const open = openIndex === index;
        const buttonId = `${baseId}-q${index}`;
        const panelId = `${baseId}-a${index}`;

        return (
          <li
            key={item.question}
            className={cn(
              "rounded-[1.75rem] border transition-[background-color,border-color,box-shadow] duration-500 ease-[var(--ease-out-expo)]",
              open
                ? "border-transparent bg-cream-warm shadow-[var(--shadow-card)]"
                : "border-line-strong hover:border-leaf/50",
            )}
          >
            <h4>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="group flex w-full items-center gap-4 rounded-[1.75rem] px-5 py-4 text-left sm:gap-5 sm:px-6"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "font-display text-[0.875rem] font-medium transition-colors duration-500",
                    open ? "text-leaf" : "text-ink-muted",
                  )}
                >
                  {String(offset + index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-display text-heading leading-tight text-forest">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-full transition-[background-color,color,rotate] duration-500 ease-[var(--ease-out-expo)]",
                    open
                      ? "rotate-45 bg-forest text-white"
                      : "bg-sage-100 text-forest group-hover:bg-leaf group-hover:text-white",
                  )}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-4">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
            </h4>
            <Collapse id={panelId} open={open}>
              <p
                role="region"
                aria-labelledby={buttonId}
                className="px-5 pb-5 pl-[3.6rem] text-[0.9375rem] leading-relaxed text-ink-muted sm:px-6 sm:pl-[4.15rem]"
              >
                {item.answer}
              </p>
            </Collapse>
          </li>
        );
      })}
    </ul>
  );
}
