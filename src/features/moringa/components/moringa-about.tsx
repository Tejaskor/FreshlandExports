import { ClipReveal } from "@/animations/clip-reveal";
import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { ImageSlot } from "@/features/moringa/components/image-slot";
import { MoringaSprig } from "@/features/moringa/components/moringa-sprig";
import { benefits, benefitsDisclaimer, moringaIntro, nutrients } from "@/features/moringa/data";
import { type } from "@/features/moringa/styles";
import { cn } from "@/lib/utils";

/** Sub-heading size for the two panels. */
const panelHeading = "font-display text-title leading-[1.05]";

/**
 * About Moringa: the plant, what it contains and what that contributes.
 * An intro row (copy beside a leaf-masked photograph), then two panels side
 * by side — nutritional value on sage, health benefits on forest green.
 */
export function MoringaAbout() {
  return (
    <section
      id="discover"
      aria-labelledby="discover-heading"
      className="relative scroll-mt-24 overflow-hidden bg-cream-warm py-12 lg:py-20"
    >
      <Container>
        {/* --- Introduction ------------------------------------------------ */}
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Reveal variant="rise">
              <RuledEyebrow>{moringaIntro.eyebrow}</RuledEyebrow>
            </Reveal>
            <RevealLines as="h2" id="discover-heading" className={cn(type.section, "mt-4 text-forest")}>
              <Line>Discover the Power</Line>
              <Line>
                of <span className="text-leaf">Moringa</span>
              </Line>
            </RevealLines>
            <Reveal variant="rise" delay={0.1}>
              <p className={cn(type.lead, "mt-5 max-w-xl text-ink-muted")}>{moringaIntro.body}</p>
            </Reveal>
            <Reveal as="ul" stagger={0.06} variant="rise" delay={0.2} className="mt-5 flex flex-wrap gap-2">
              {moringaIntro.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line-strong bg-white px-4 py-1.5 text-[0.8125rem] font-medium text-forest"
                >
                  {tag}
                </li>
              ))}
            </Reveal>
          </div>

          <div className="relative lg:col-span-6">
            <ClipReveal from="left" className="mask-organic-alt overflow-hidden shadow-[var(--shadow-figure)]">
              <Parallax amount={8} overscan={1.1} className="aspect-[16/11]">
                <ImageSlot
                  image="tree"
                  tone="sage"
                  framed={false}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="h-full w-full"
                  mediaClassName="object-center"
                />
              </Parallax>
            </ClipReveal>
            <Reveal
              variant="sweep-right"
              delay={0.3}
              className="relative -mt-10 ml-4 max-w-xs sm:ml-8 lg:absolute lg:-bottom-8 lg:-left-8 lg:ml-0"
            >
              <figure className="flex items-start gap-3 rounded-[1.5rem_0.5rem_1.5rem_1.5rem] bg-forest p-5 text-cream shadow-[var(--shadow-lift)]">
                <MoringaSprig className="h-10 w-auto shrink-0 text-leaf-bright" />
                <figcaption className="font-display text-[clamp(1rem,0.9rem+0.28vw,1.25rem)] leading-snug text-cream">
                  {moringaIntro.caption}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* --- Nutrition + benefits ------------------------------------------ */}
        <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-2">
          {/* Nutritional value */}
          <Reveal variant="rise" className="h-full">
            <div className="flex h-full flex-col rounded-[2rem] bg-sage-100 p-5 sm:p-7">
              <div className="flex items-center gap-5">
                <ImageSlot
                  image="nutrition"
                  tone="light"
                  bare
                  framed={false}
                  sizes="6rem"
                  className="size-20 shrink-0 rounded-full ring-4 ring-cream-warm sm:size-24"
                  mediaClassName="object-cover object-center"
                />
                <h3 id="nutrition-heading" className={cn(panelHeading, "text-forest")}>
                  Nature&apos;s <span className="text-leaf">Nutritional</span> Treasure
                </h3>
              </div>

              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {nutrients.map((item) => (
                  <li key={item.name} className="flex items-center gap-3 rounded-2xl bg-white/80 p-2.5 pr-4">
                    <span
                      aria-hidden="true"
                      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-forest font-display text-[0.9375rem] font-medium text-white"
                    >
                      {item.symbol}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-heading leading-tight text-forest">
                        {item.name}
                      </span>
                      <span className="block text-[0.8125rem] leading-snug text-ink-muted">{item.role}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-auto pt-4 text-[0.75rem] leading-relaxed text-ink-muted">
                Roles shown are what each nutrient does in the body in general. Levels vary by crop
                and processing and are confirmed on each lot&apos;s specification sheet.
              </p>
            </div>
          </Reveal>

          {/* Health benefits */}
          <Reveal variant="rise" delay={0.1} className="h-full">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-forest p-5 text-cream sm:p-7">
              <MoringaSprig
                variant="line"
                className="absolute -top-10 -right-12 h-56 w-auto rotate-[30deg] text-white/[0.07]"
              />
              <h3 id="benefits-heading" className={cn(panelHeading, "relative text-cream")}>
                Goodness in Every <span className="text-leaf-bright">Spoonful</span>
              </h3>

              <ul className="relative mt-5 mb-5 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <li key={benefit.title} className="flex gap-3">
                    <span className="font-display text-[0.8125rem] font-medium text-leaf-bright">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block font-display text-[clamp(1rem,0.9rem+0.28vw,1.25rem)] leading-tight text-cream">
                        {benefit.title}
                      </span>
                      <span className="mt-1 block text-[0.8125rem] leading-relaxed text-sage-200">
                        {benefit.text}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <p className="relative mt-auto flex items-start gap-3 border-t border-white/15 pt-4 text-[0.75rem] leading-relaxed text-sage-200">
                <span
                  aria-hidden="true"
                  className="mt-px flex size-5 shrink-0 items-center justify-center rounded-full border border-leaf-bright/60 font-display text-[0.6875rem] font-medium text-leaf-bright"
                >
                  i
                </span>
                {benefitsDisclaimer}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
