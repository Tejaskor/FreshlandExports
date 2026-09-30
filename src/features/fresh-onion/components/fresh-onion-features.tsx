import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { freshOnionFeatures } from "@/features/fresh-onion/data";
import { type } from "@/features/moringa/styles";
import { cn } from "@/lib/utils";

/**
 * Why Choose Fresh Onions: an editorial bento rather than six equal cards —
 * the first feature large on forest green, four compact cards beside it,
 * and the last as a full-width strip.
 */
export function FreshOnionFeatures() {
  const [lead, ...rest] = freshOnionFeatures;
  const middle = rest.slice(0, 4);
  const closing = rest[4];

  return (
    <section aria-labelledby="features-heading" className="bg-cream py-14 lg:py-20">
      <Container>
        <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal variant="rise">
              <RuledEyebrow>Product Features</RuledEyebrow>
            </Reveal>
            <RevealLines as="h2" id="features-heading" className={cn(type.section, "mt-5 text-forest")}>
              <Line>A Versatile Essential</Line>
              <Line>
                for <span className="text-leaf">Every Kitchen</span>
              </Line>
            </RevealLines>
          </div>
        </div>

        <Reveal as="ul" stagger={0.06} variant="rise" className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {/* Lead feature — large, on forest green. */}
          <li className="sm:col-span-2 lg:row-span-2">
            <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem_2rem_2rem_0.75rem] bg-[#5A1F2B] p-7 text-white sm:p-9">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-10 -right-6 font-display text-[11rem] leading-none font-medium text-white/[0.06]"
              >
                01
              </span>
              <span className="flex size-12 items-center justify-center rounded-full bg-white/10 text-highlight-inverse">
                <Icon name={lead.icon} className="size-6" />
              </span>
              <div className="mt-10">
                <h3 className="font-display text-title leading-[1.05]">
                  {lead.title}
                </h3>
                <p className="mt-3 max-w-md text-[1rem] leading-relaxed text-white/80">{lead.text}</p>
              </div>
            </article>
          </li>

          {middle.map((feature, index) => (
            <li key={feature.title}>
              <article className="group h-full rounded-[1.5rem] border border-line-strong bg-white p-6 transition-[border-color,translate,box-shadow] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-0.5 hover:border-leaf/50 hover:shadow-[var(--shadow-card)]">
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-full bg-sage-100 text-forest transition-colors duration-500 group-hover:bg-leaf group-hover:text-white">
                    <Icon name={feature.icon} className="size-[1.125rem]" />
                  </span>
                  <span aria-hidden="true" className="font-display text-[0.875rem] font-medium text-rust/70">
                    {String(index + 2).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-heading leading-tight text-forest">{feature.title}</h3>
                <p className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-muted">{feature.text}</p>
              </article>
            </li>
          ))}

          {/* Closing feature — a full-width strip. */}
          <li className="sm:col-span-2 lg:col-span-4">
            <article className="flex flex-col gap-4 rounded-[1.5rem] bg-sage-100 p-6 sm:flex-row sm:items-center sm:gap-6 sm:px-8">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-forest text-white">
                <Icon name={closing.icon} className="size-6" />
              </span>
              <h3 className="font-display text-heading leading-tight text-forest sm:w-56 sm:shrink-0">
                {closing.title}
              </h3>
              <p className="text-[0.9375rem] leading-relaxed text-ink-muted sm:flex-1">{closing.text}</p>
              <span aria-hidden="true" className="font-display text-[0.875rem] font-medium text-rust/70 sm:ml-auto">
                06
              </span>
            </article>
          </li>
        </Reveal>
      </Container>
    </section>
  );
}
