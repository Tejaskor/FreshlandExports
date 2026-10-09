import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import type { LegalBlock, LegalSection } from "@/features/legal/types";

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "h3":
      return <h3 className="pt-1.5 text-[1.0625rem] leading-snug font-semibold text-ink">{block.text}</h3>;
    case "list":
      return (
        <ul className="space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-[0.625rem] size-1.5 shrink-0 rounded-full bg-leaf" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "link":
      return (
        <div className="pt-1">
          <Button href={block.href} variant="forest" size="md">
            {block.label}
          </Button>
        </div>
      );
    default:
      return <p>{block.text}</p>;
  }
}

/**
 * A legal page on one warm ground: a centred title block (eyebrow, heading,
 * introduction and a short meta line), a divider, then each numbered section
 * in its own white card, its text set against a thin rule. The "Last updated"
 * date appears only once a business-approved date is set.
 */
export function LegalPage({
  title,
  intro,
  lastUpdated,
  sections,
}: {
  title: string;
  intro: string;
  /** ISO date of the approved version, or null until one is confirmed. */
  lastUpdated: string | null;
  sections: readonly LegalSection[];
}) {
  const updated = lastUpdated
    ? new Date(lastUpdated).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
    : null;

  return (
    <div className="bg-cream-warm pt-28 pb-14 lg:pt-[7.5rem] lg:pb-20">
      {/* Same container as the header, so the cards line up with it. */}
      <Container>
        <header className="border-b border-line-strong pb-8 text-center lg:pb-10">
          <Eyebrow className="flex justify-center">Legal</Eyebrow>
          <h1 id="legal-heading" className="mt-4 font-display text-display text-forest-deep">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lead text-ink-muted">{intro}</p>
          <p className="mt-4 text-[0.8125rem] text-ink-muted">
            {updated && lastUpdated && (
              <>
                Last updated: <time dateTime={lastUpdated}>{updated}</time>
                <span aria-hidden="true" className="mx-2">
                  ·
                </span>
              </>
            )}
            Freshland Exports (“we”, “us” or “our”)
          </p>
        </header>

        <article aria-labelledby="legal-heading" className="mt-8 space-y-4 lg:mt-10 lg:space-y-5">
          {sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-heading`}
              className="scroll-mt-28 rounded-[1.25rem] border border-line bg-white p-5 shadow-[var(--shadow-card)] sm:p-7 lg:px-8"
            >
              <h2
                id={`${section.id}-heading`}
                className="flex items-baseline gap-3 font-display text-[1.25rem] leading-tight text-forest sm:text-[1.375rem]"
              >
                <span aria-hidden="true" className="size-2 shrink-0 -translate-y-0.5 rounded-full bg-leaf" />
                <span>
                  {index + 1}. {section.title}
                </span>
              </h2>
              <div className="mt-4 space-y-3.5 border-l-2 border-line-strong pl-4 text-[0.9375rem] leading-relaxed text-ink-muted sm:ml-1 sm:pl-5 sm:text-[1rem]">
                {section.blocks.map((block, blockIndex) => (
                  <Block key={blockIndex} block={block} />
                ))}
              </div>
            </section>
          ))}
        </article>
      </Container>
    </div>
  );
}
