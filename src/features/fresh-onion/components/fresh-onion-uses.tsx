import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { freshOnionUses } from "@/features/fresh-onion/data";
import { ImageSlot } from "@/features/moringa/components/image-slot";
import { type } from "@/features/moringa/styles";
import { cn } from "@/lib/utils";

/**
 * Uses of Fresh Onions: an image-led editorial gallery on deep green. Two
 * columns, the second set lower so the four groups read as a staggered
 * spread; each photograph carries its group's number, with the title and
 * applications beneath.
 */
export function FreshOnionUses() {
  return (
    <section
      aria-labelledby="uses-heading"
      className="relative overflow-hidden bg-[#3B1720] py-14 text-white lg:py-20"
    >
      <Container>
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal variant="rise">
              <RuledEyebrow tone="inverse">Applications</RuledEyebrow>
            </Reveal>
            <RevealLines as="h2" id="uses-heading" className={cn(type.section, "mt-5 text-white")}>
              <Line>Discover the Many Ways</Line>
              <Line>
                to Use <span className="text-highlight-inverse">Fresh Onions</span>
              </Line>
            </RevealLines>
          </div>
          <Reveal variant="rise" delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[1rem] leading-relaxed text-white/75">
              From home kitchens to food factories and restaurants, fresh onions are a staple for
              every kind of food business we supply.
            </p>
          </Reveal>
        </div>

        <Reveal as="ul" stagger={0.08} variant="unveil" className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-12">
          {freshOnionUses.map((use, index) => (
            <li key={use.title} className={cn(index % 2 === 1 && "sm:mt-16")}>
              <figure>
                <div className="group relative overflow-hidden rounded-[1.75rem]">
                  {/* Uses — {use.image.label}. */}
                  <ImageSlot
                    slot={use.image}
                    tone="dark"
                    sizes="(min-width: 640px) 45vw, 100vw"
                    className="aspect-[16/10] w-full"
                    mediaClassName="transition-[scale] duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute top-4 left-4 flex size-10 items-center justify-center rounded-full bg-cream font-display text-[0.9375rem] font-medium text-forest"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <figcaption className="mt-5">
                  <h3 className="font-display text-heading leading-tight text-white">{use.title}</h3>
                  <ul aria-label={`${use.title} applications`} className="mt-3 flex flex-wrap gap-2">
                    {use.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/20 px-3.5 py-1.5 text-[0.875rem] text-white/85"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </figcaption>
              </figure>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
