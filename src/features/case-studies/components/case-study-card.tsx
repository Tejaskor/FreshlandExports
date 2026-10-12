import Link from "next/link";

import { Figure } from "@/components/media/figure";
import { Icon } from "@/components/ui/icon";
import type { CaseStudyCardData } from "@/features/case-studies/card-data";

/**
 * One case study card, shared by the homepage, product pages, Blog articles
 * and /case-studies: photograph with the industry label over it, title, a
 * short description, a hairline, then "Read Case Study" with the scenario
 * status beside it. The title link is stretched over the card, so the card is
 * one tab stop; equal-height cards keep the links on one line.
 */
export function CaseStudyCard({
  study,
  label = "industry",
}: {
  study: CaseStudyCardData;
  /** Label over the photograph: the industry, or the product category. */
  label?: "industry" | "category";
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_1px_2px_rgb(26_58_42/0.04)] transition-[translate,box-shadow,border-color] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-line-strong hover:shadow-[var(--shadow-card)] has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-leaf/50 motion-reduce:hover:translate-y-0">
      <div className="relative">
        <Figure
          image={study.image.src}
          alt={study.image.alt}
          art={study.image.art}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="aspect-[16/10] w-full"
          mediaClassName="transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
        />
        <span className="absolute top-4 left-4 inline-flex rounded-full bg-white/95 px-3 py-1 text-[0.75rem] font-semibold text-forest shadow-[0_1px_2px_rgb(26_58_42/0.08)]">
          {label === "category" ? study.categories[0].heading : study.industry}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[1.25rem] leading-snug font-semibold tracking-[-0.01em] text-balance text-forest">
          <Link href={study.href} className="outline-none after:absolute after:inset-0 after:content-['']">
            {study.title}
          </Link>
        </h3>
        <p className="mt-3 mb-5 line-clamp-3 text-[0.9375rem] leading-relaxed text-ink-muted">{study.summary}</p>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4">
          <span className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-forest transition-colors duration-300 group-hover:text-leaf">
            Read Case Study
            <Icon
              name="arrow-right"
              className="size-3.5 transition-transform duration-500 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
            />
          </span>
          {study.illustrative && <span className="text-right text-[0.75rem] text-ink-faint">{study.status}</span>}
        </div>
      </div>
    </article>
  );
}
