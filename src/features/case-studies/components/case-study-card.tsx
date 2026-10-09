import Link from "next/link";

import { Figure } from "@/components/media/figure";
import { Icon } from "@/components/ui/icon";
import type { CaseStudyCardData } from "@/features/case-studies/card-data";
import { cn } from "@/lib/utils";

/** The scenario-status badge, shown on every card and detail page. */
export function StatusBadge({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-rust/30 bg-white/95 px-3 py-1 text-[0.75rem] font-semibold text-rust-deep",
        className,
      )}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-rust" />
      {label}
    </span>
  );
}

/**
 * One case study card: photograph with the status badge, title, a meta line
 * (category and products), a short excerpt and a "Read Case Study" button.
 * The title link is stretched over the card, so the card is one tab stop and
 * the button is its visible cue.
 */
export function CaseStudyCard({ study }: { study: CaseStudyCardData }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-[translate,box-shadow,border-color] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-line-strong hover:shadow-[var(--shadow-card)] has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-leaf/50 motion-reduce:hover:translate-y-0">
      <div className="relative">
        <Figure
          image={study.image.src}
          alt={study.image.alt}
          art={study.image.art}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="aspect-[16/10] w-full"
          mediaClassName="transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
        />
        {study.illustrative && <StatusBadge label={study.status} className="absolute top-4 left-4" />}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[1.25rem] leading-snug font-semibold tracking-[-0.01em] text-balance text-forest">
          <Link href={study.href} className="outline-none after:absolute after:inset-0 after:content-['']">
            {study.title}
          </Link>
        </h3>
        <p className="mt-2 text-[0.8125rem] text-ink-muted">
          {study.categories.map((category) => category.heading).join(" · ")}
          <span aria-hidden="true" className="mx-1.5">
            |
          </span>
          {study.products.join(", ")}
        </p>
        <p className="mt-3 line-clamp-3 text-[0.9375rem] leading-relaxed text-ink-muted">{study.summary}</p>
        <div className="mt-auto pt-6">
          <span className="inline-flex h-11 items-center gap-2 rounded-lg bg-forest px-5 text-[0.875rem] font-semibold text-white transition-colors duration-300 group-hover:bg-forest-deep">
            Read Case Study
            <Icon
              name="arrow-right"
              className="size-3.5 transition-transform duration-500 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
            />
          </span>
        </div>
      </div>
    </article>
  );
}
