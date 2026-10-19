import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { freshOnionVarieties } from "@/features/fresh-onion/data";
import { ImageSlot } from "@/features/products/components/image-slot";
import { type } from "@/features/products/styles";
import { cn } from "@/lib/utils";

/**
 * Onion varieties: five cards, each with its own photograph, heading and
 * note. Two columns on tablets, three on small desktops, all five in a row
 * from xl; every card fills its row height.
 */
export function FreshOnionVarieties() {
  const { eyebrow, heading, intro, items } = freshOnionVarieties;

  return (
    <section aria-labelledby="varieties-heading" className="bg-[#F7EEEA] py-14 lg:py-20">
      <Container>
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal variant="rise">
              <RuledEyebrow>{eyebrow}</RuledEyebrow>
            </Reveal>
            <RevealLines as="h2" id="varieties-heading" className={cn(type.section, "mt-5 text-forest")}>
              <Line>{heading}</Line>
            </RevealLines>
          </div>
          <Reveal variant="rise" delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[1rem] leading-relaxed text-ink-muted">{intro}</p>
          </Reveal>
        </div>

        <Reveal
          as="ul"
          stagger={0.06}
          variant="rise"
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 xl:grid-cols-5"
        >
          {items.map((item) => (
            <li key={item.title}>
              <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line-strong bg-white transition-[translate,box-shadow] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]">
                <ImageSlot
                  slot={item.image}
                  tone="light"
                  framed={false}
                  sizes="(min-width: 1280px) 18vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="aspect-[4/3] w-full"
                />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-heading leading-tight text-forest">{item.title}</h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-muted">{item.text}</p>
                </div>
              </article>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
