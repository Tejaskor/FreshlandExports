import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { ImageSlot } from "@/features/moringa/components/image-slot";
import { type } from "@/features/moringa/styles";
import { turmericIndustries, turmericUses } from "@/features/turmeric-powder/data";
import { turmericImages } from "@/features/turmeric-powder/images";
import { cn } from "@/lib/utils";

/**
 * Applications on cream, in two tiers: the four culinary uses as light cards
 * beside a tall culinary photograph, then the five industries on a deep-green
 * band — the everyday kitchen first, commercial markets beneath it.
 */
export function TurmericApplications() {
  return (
    <section aria-labelledby="applications-heading" className="relative bg-cream py-14 lg:py-20">
      <Container>
        <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal variant="rise">
              <RuledEyebrow>Versatile Uses of Turmeric Powder</RuledEyebrow>
            </Reveal>
            <RevealLines as="h2" id="applications-heading" className={cn(type.section, "mt-5 text-forest")}>
              <Line>One Ingredient,</Line>
              <Line>
                <span className="text-rust">Endless Possibilities</span>
              </Line>
            </RevealLines>
          </div>
          <Reveal variant="rise" delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[0.9375rem] leading-relaxed text-ink-muted">
              A versatile spice used in traditional recipes, modern cuisine, beverages, and food
              manufacturing.
            </p>
          </Reveal>
        </div>

        {/* --- Culinary uses ------------------------------------------------ */}
        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-12">
          <Reveal variant="unveil" className="lg:col-span-4">
            <Parallax
              amount={8}
              overscan={1.12}
              className="aspect-[16/10] h-full rounded-t-[10rem] rounded-b-[1.75rem] sm:aspect-[16/9] lg:aspect-auto lg:min-h-full"
            >
              {/* Turmeric powder in culinary use. */}
              <ImageSlot
                slot={turmericImages.culinary}
                tone="golden"
                framed={false}
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="h-full w-full"
              />
            </Parallax>
          </Reveal>

          <Reveal as="ol" stagger={0.07} variant="rise" className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {turmericUses.map((use, index) => (
              <li key={use.title} className="rounded-[1.5rem] border border-line-strong bg-white p-5 sm:p-6">
                <div className="flex items-baseline gap-3">
                  <span aria-hidden="true" className="font-display text-[1rem] font-medium text-rust">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-heading leading-tight text-forest">{use.title}</h3>
                </div>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-muted">{use.text}</p>
                <ul aria-label={`${use.title} applications`} className="mt-4 flex flex-wrap gap-1.5">
                  {use.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-[var(--t-pale)] px-3 py-1 text-[0.8125rem] font-medium text-forest ring-1 ring-[var(--t-gold)]/35"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </Reveal>
        </div>

        {/* --- Industries ---------------------------------------------------- */}
        <Reveal variant="rise" className="mt-10 lg:mt-12">
          <div className="rounded-[2rem] bg-forest p-5 text-white sm:p-8">
            <div className="grid gap-3 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="type-label text-[var(--t-gold)]">
                  Beyond the kitchen
                </p>
                <h3 className="mt-2 font-display text-title leading-[1.05] text-white">
                  Turmeric Powder Across Industries
                </h3>
              </div>
              <p className="text-[0.9375rem] leading-relaxed text-white/75 lg:col-span-5">
                Its natural colour, flavour, and plant compounds make it useful in several industries.
              </p>
            </div>
            <ul className="mt-6 grid gap-px overflow-hidden rounded-[1.25rem] bg-white/12 sm:grid-cols-2 lg:grid-cols-5">
              {turmericIndustries.items.map((item) => (
                <li key={item.title} className="bg-forest p-5 transition-colors duration-500 hover:bg-forest-deep">
                  <span aria-hidden="true" className="block size-2.5 rounded-full bg-[var(--t-gold)]" />
                  <span className="mt-3 block font-display text-heading leading-tight">{item.title}</span>
                  <span className="mt-1.5 block text-[0.8125rem] leading-relaxed text-white/70">{item.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[0.75rem] leading-relaxed text-white/65">{turmericIndustries.note}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
