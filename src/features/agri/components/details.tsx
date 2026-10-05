import { AnchorButton } from "@/components/ui/anchor-button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/animations/reveal";
import { ProductImage, SectionHeader, label } from "@/features/agri/components/shared";
import type { AgriProduct, SpecRow } from "@/features/agri/types";
import { cn } from "@/lib/utils";

function SpecValue({ row, inverse = false }: { row: SpecRow; inverse?: boolean }) {
  if (row.pending) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-dashed px-3 py-0.5 text-[0.8125rem]",
          inverse ? "border-white/40 text-white/85" : "border-rust/50 text-rust",
        )}
      >
        <span aria-hidden="true" className={cn("size-1.5 rounded-full", inverse ? "bg-white/70" : "bg-rust")} />
        {row.value}
      </span>
    );
  }
  return <span className={cn(inverse ? "text-white" : "text-ink")}>{row.value}</span>;
}

/* ========================================================================
   Process — a numbered horizontal rail (vertical on small screens).
   ======================================================================== */

export function Process({ product }: { product: AgriProduct }) {
  if (!product.process) return null;
  const { process } = product;
  return (
    <section aria-labelledby="process-heading" className="bg-white py-14 lg:py-20">
      <Container>
        <SectionHeader id="process-heading" eyebrow={process.eyebrow} heading={process.heading} intro={process.note} align="start" />
        {/* Optional wide photograph above the steps. */}
        {process.image && (
          <Reveal variant="unveil" className="mt-8 lg:mt-10">
            <ProductImage
              slot={process.image}
              sizes="(min-width: 1024px) 80vw, 100vw"
              className="aspect-[16/9] w-full rounded-[2rem] sm:aspect-[21/8]"
            />
          </Reveal>
        )}
        <div className="relative mt-10">
          <span aria-hidden="true" className="absolute top-[0.6875rem] right-0 left-0 hidden h-0.5 bg-[var(--p-soft)] lg:block" />
          <span aria-hidden="true" className="absolute top-2 bottom-2 left-[0.6875rem] w-0.5 bg-[var(--p-soft)] lg:hidden" />
          <Reveal
            as="ol"
            stagger={0.07}
            variant="rise"
            className={cn(
              "relative grid gap-5 lg:gap-6",
              process.steps.length > 4 ? "lg:grid-cols-5" : "lg:grid-cols-4",
            )}
          >
            {process.steps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[1.5rem_1fr] gap-4 lg:block">
                <span aria-hidden="true" className="relative mt-0.5 flex size-6 items-center justify-center rounded-full bg-white lg:mt-0">
                  <span className="size-3.5 rounded-full border-[3px] border-[var(--p-accent)] bg-white" />
                </span>
                <span className="lg:mt-4 lg:block">
                  <span className={cn(label, "block text-[var(--p-deep)]")}>Step {String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-1 font-display text-heading text-forest">{step.title}</h3>
                  <span className="mt-1 block text-[0.875rem] leading-relaxed text-ink-muted">{step.text}</span>
                </span>
              </li>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ========================================================================
   Quality / Storage — a compact strip of points.
   ======================================================================== */

export function Quality({ product, kind = "quality" }: { product: AgriProduct; kind?: "quality" | "storage" }) {
  const quality = kind === "storage" ? product.storage : product.quality;
  if (!quality) return null;
  const headingId = `${kind}-heading`;
  return (
    <section aria-labelledby={headingId} className="bg-white pb-14 lg:pb-20">
      <Container>
        <Reveal variant="rise">
          <div className="grid gap-5 rounded-[1.75rem] bg-[var(--p-tint)] p-6 sm:p-8 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 id={headingId} className="font-display text-title text-forest">
                {quality.heading}
              </h2>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">{quality.text}</p>
            </div>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:col-span-8 lg:self-center">
              {quality.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[0.9375rem] text-ink">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--p-deep)] text-white">
                    <Icon name="check" className="size-3" strokeWidth={2.6} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ========================================================================
   Specifications
   ======================================================================== */

function EnquiryNote({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-4", inverse ? "text-white/75" : "text-ink-muted")}>
      <AnchorButton href="#quote-form" size="md" className="font-semibold">
        Request Specifications
      </AnchorButton>
      <p className="max-w-xs text-[0.8125rem] leading-relaxed">
        Grades, sizing and packaging are confirmed with each enquiry.
      </p>
    </div>
  );
}

export function Specs({ product, variant }: { product: AgriProduct; variant: "table" | "sheet" | "tiles" }) {
  const { specs, images } = product;

  /* Deep data sheet, two columns of rows. */
  if (variant === "sheet") {
    return (
      <section aria-labelledby="specs-heading" className="bg-white py-14 lg:py-20">
        <Container>
          <Reveal variant="rise">
            <div className="rounded-[2rem_0.75rem_2rem_2rem] bg-[var(--p-deep)] p-6 text-white shadow-[var(--shadow-panel)] sm:p-10">
              <SectionHeader id="specs-heading" eyebrow={specs.eyebrow} heading={specs.heading} inverse align="start" />
              <dl className="mt-8 grid gap-x-10 sm:grid-cols-2">
                {specs.rows.map((row) => (
                  <div key={row.label} className="grid gap-1 border-t border-white/12 py-3 sm:grid-cols-[9rem_1fr] sm:gap-4">
                    <dt className={cn(label, "text-sage-200 sm:pt-1")}>{row.label}</dt>
                    <dd className="text-[0.9375rem]">
                      <SpecValue row={row} inverse />
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-[0.8125rem] leading-relaxed text-white/65">{specs.note}</p>
              <div className="mt-6">
                <EnquiryNote inverse />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    );
  }

  /* Key–value tiles. */
  if (variant === "tiles") {
    return (
      <section aria-labelledby="specs-heading" className="bg-[var(--p-tint)] py-14 lg:py-20">
        <Container>
          <SectionHeader id="specs-heading" eyebrow={specs.eyebrow} heading={specs.heading} intro={specs.note} />
          <Reveal as="dl" stagger={0.04} variant="rise" className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {specs.rows.map((row) => (
              <div key={row.label} className="rounded-[1.25rem] bg-white p-5">
                <dt className={cn(label, "text-[var(--p-deep)]")}>{row.label}</dt>
                <dd className="mt-2 font-display text-heading text-forest">
                  {row.pending ? <SpecValue row={row} /> : row.value}
                </dd>
              </div>
            ))}
          </Reveal>
          <div className="mt-8">
            <EnquiryNote />
          </div>
        </Container>
      </section>
    );
  }

  /* Table beside a photograph and the enquiry card. */
  return (
    <section aria-labelledby="specs-heading" className="bg-white py-14 lg:py-20">
      <Container>
        <SectionHeader id="specs-heading" eyebrow={specs.eyebrow} heading={specs.heading} align="start" />
        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-12 lg:gap-8">
          <Reveal variant="rise" className="lg:col-span-7">
            <div className="h-full rounded-[1.75rem] border border-line-strong p-2 sm:p-3">
              <table className="w-full border-collapse text-left text-[0.9375rem]">
                <caption className="sr-only">{product.name} specifications</caption>
                <tbody>
                  {specs.rows.map((row) => (
                    <tr key={row.label} className="border-t border-line first:border-t-0 odd:bg-[var(--p-tint)]">
                      <th scope="row" className="w-[40%] px-3 py-2.5 align-top font-semibold text-forest sm:px-4">
                        {row.label}
                      </th>
                      <td className="px-3 py-2.5 sm:px-4">
                        <SpecValue row={row} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="px-3 pt-3 pb-2 text-[0.8125rem] leading-relaxed text-ink-muted sm:px-4">{specs.note}</p>
            </div>
          </Reveal>
          <div className="flex flex-col gap-6 lg:col-span-5">
            <Reveal variant="unveil">
              <ProductImage
                slot={images.specs ?? images.detail}
                compact
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[16/10] w-full rounded-[1.75rem]"
              />
            </Reveal>
            <Reveal variant="rise">
              <div className="rounded-[1.5rem] bg-[var(--p-tint)] p-6">
                <p className={cn(label, "text-[var(--p-deep)]")}>Export enquiries</p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">
                  Tell us your market, quantity and packaging, and we will share availability and a
                  quotation.
                </p>
                <div className="mt-5">
                  <EnquiryNote />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
