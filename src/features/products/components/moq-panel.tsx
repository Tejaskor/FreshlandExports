import { AnchorButton } from "@/components/ui/anchor-button";
import { Reveal } from "@/animations/reveal";
import { moqCopy } from "@/features/products/moq";
import { cn } from "@/lib/utils";

/** Ranges such as "500 KG to 1 MT" are set smaller and may wrap, so they fit a phone-width card. */
const rangeLength = 8;

/**
 * Minimum Order Quantity — a compact, light card in the style of the Moringa
 * and Fresh Onion MOQ cards: a bulk-sack icon, the label, the quantity as the
 * dominant figure, one line of copy and the quote button. Pages pass their
 * own ground and accent; text stays dark on a light card for strong contrast.
 */
export function MoqPanel({
  value,
  body = moqCopy.body,
  ctaArrow = false,
  className,
  accentClassName = "text-forest",
  iconClassName = "bg-sage-100 text-forest",
}: {
  /** The quantity, e.g. "500 KG" or "100 KG to 500 KG". */
  value: string;
  /** Replaces the shared one-line description. */
  body?: string;
  /** Adds the arrow disc to the quote button. */
  ctaArrow?: boolean;
  /** Card ground and border. */
  className?: string;
  /** Colour of the label and the quantity. */
  accentClassName?: string;
  /** Icon disc colours. */
  iconClassName?: string;
}) {
  return (
    <Reveal variant="rise">
      <aside
        aria-labelledby="moq-heading"
        className={cn(
          "grid gap-5 rounded-[1.5rem] border border-line-strong p-5 shadow-[var(--shadow-card)] sm:p-7 lg:grid-cols-12 lg:items-center lg:gap-8",
          className,
        )}
      >
        <div className="flex items-center gap-4 sm:gap-5 lg:col-span-5">
          <span
            aria-hidden="true"
            className={cn("flex size-12 shrink-0 items-center justify-center rounded-full sm:size-14", iconClassName)}
          >
            {/* Sack on a scale — bulk quantity. */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-6"
            >
              <path d="M9 4h6l-1.2 2.4c2.7 1.3 4.2 4 4.2 7.1 0 2.3-1.6 3.5-6 3.5s-6-1.2-6-3.5c0-3.1 1.5-5.8 4.2-7.1L9 4Z" />
              <path d="M3.5 20.5h17" />
            </svg>
          </span>
          <div className="min-w-0">
            <p className={cn("type-label text-[0.8125rem] sm:text-[0.875rem]", accentClassName)}>{moqCopy.eyebrow}</p>
            <h2
              id="moq-heading"
              className={cn(
                "mt-1.5 font-display leading-none font-medium tracking-[-0.02em]",
                value.length > rangeLength
                  ? "text-[clamp(1.75rem,1.4rem+1.2vw,2.5rem)] text-balance"
                  : "text-[clamp(2.25rem,1.7rem+1.8vw,3.25rem)] whitespace-nowrap",
                accentClassName,
              )}
            >
              <span className="sr-only">Minimum order quantity: </span>
              {value}
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:col-span-7 lg:gap-8">
          <p className="max-w-md text-[0.9375rem] leading-relaxed text-ink-muted">{body}</p>
          <AnchorButton href="#quote-form" size="md" withArrow={ctaArrow} className="shrink-0 self-start font-semibold sm:self-auto">
            {moqCopy.cta}
          </AnchorButton>
        </div>
      </aside>
    </Reveal>
  );
}
