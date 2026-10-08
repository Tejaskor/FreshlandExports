import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { ImageSlot } from "@/features/moringa/components/image-slot";
import { MoringaSprig } from "@/features/moringa/components/moringa-sprig";
import { RecipesPanel } from "@/features/moringa/components/moringa-recipes";
import { applications } from "@/features/moringa/data";
import { type } from "@/features/moringa/styles";
import { cn } from "@/lib/utils";

/**
 * Irregular grid, in data order. Desktop: a 12 × 3 mosaic that tiles exactly
 * (5+4+3, 5+4+3, 7+5). Tablet: two columns with the lead card spanning two
 * rows and the last one full width.
 */
const tiles = [
  "sm:row-span-2 lg:col-span-5 lg:row-span-2",
  "lg:col-span-4",
  "lg:col-span-3 lg:row-span-2",
  "lg:col-span-4",
  "lg:col-span-7",
  "sm:col-span-2 lg:col-span-5",
];

/** Two cards take a soft organic corner; the rest stay crisp. */
const radii = [
  "rounded-[3.5rem_1.25rem_1.25rem_1.25rem]",
  "rounded-[1.25rem]",
  "rounded-[1.25rem_1.25rem_3.5rem_1.25rem]",
  "rounded-[1.25rem]",
  "rounded-[1.25rem]",
  "rounded-[1.25rem_3.5rem_1.25rem_1.25rem]",
];

/** Image object positions tailored to frame each application product clearly. */
const itemMediaPositions = [
  "object-[center_38%]", // 01 Health Food Products
  "object-[center_32%]", // 02 Functional Beverages
  "object-center",        // 03 Bakery Products
  "object-[center_55%]", // 04 Nutritional Snacks
  "object-[center_45%]", // 05 Herbal Blends
  "object-[center_35%]", // 06 Food Supplements
];

/**
 * Applications & Recipes: the commercial uses as an irregular photo grid on
 * deep green, then the recipes and everyday uses on a cream panel below —
 * the industrial and the kitchen side of the same ingredient.
 */
export function MoringaApplications() {
  return (
    <section
      aria-labelledby="applications-heading"
      className="relative isolate overflow-hidden bg-forest-deep py-12 text-cream lg:py-20"
    >
      <MoringaSprig
        variant="line"
        className="absolute -top-16 -left-20 -z-10 h-[30rem] w-auto rotate-[140deg] text-white/[0.05]"
      />

      <Container>
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal variant="rise">
              <RuledEyebrow tone="inverse" className="text-sage-300">Applications</RuledEyebrow>
            </Reveal>
            <RevealLines as="h2" id="applications-heading" className={cn(type.section, "mt-6 text-cream")}>
              <Line>More Than Just</Line>
              <Line>
                a <span className="text-leaf-bright">Superfood</span>
              </Line>
            </RevealLines>
          </div>
          <Reveal variant="rise" delay={0.2} className="lg:col-span-4 lg:col-start-9">
            <p className={cn(type.lead, "text-sage-100")}>
              A versatile green ingredient for manufacturers, supplied in bulk to your
              specification.
            </p>
          </Reveal>
        </div>

        <Reveal
          as="ul"
          stagger={0.08}
          variant="rise"
          className="mt-8 grid auto-rows-[12rem] gap-4 sm:grid-cols-2 sm:auto-rows-[13rem] lg:mt-10 lg:grid-cols-12 lg:auto-rows-[11.5rem] xl:auto-rows-[12.5rem]"
        >
          {applications.map((item, index) => (
            <li key={item.title} className={tiles[index]}>
              <div className={cn("group relative block h-full overflow-hidden", radii[index])}>
                <ImageSlot
                  image={item.image}
                  tone="dark"
                  compact
                  framed={false}
                  sizes="(min-width: 1024px) 45vw, (min-width: 640px) 50vw, 100vw"
                  className="absolute inset-0"
                  mediaClassName={cn(
                    itemMediaPositions[index],
                    "transition-[scale] duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]",
                  )}
                />
                {/* Subtle bottom gradient veil keeps the caption legible while leaving the photograph clear and bright. */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-forest-deep/95 via-forest-deep/50 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <div className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                    <span className="font-display text-[0.875rem] font-medium text-sage-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 font-display text-[clamp(1rem,0.9rem+0.28vw,1.25rem)] leading-[1.05] text-cream">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[0.8125rem] text-sage-100">{item.text}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </Reveal>

        <RecipesPanel className="mt-10 lg:mt-12" />
      </Container>
    </section>
  );
}
