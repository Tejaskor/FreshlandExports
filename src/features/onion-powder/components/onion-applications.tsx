import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { ImageSlot } from "@/features/moringa/components/image-slot";
import { type } from "@/features/moringa/styles";
import { onionApplications } from "@/features/onion-powder/data";
import { onionImages } from "@/features/onion-powder/images";
import { cn } from "@/lib/utils";

/** Applications on soft sage: one culinary photograph beside four compact use cards. */
export function OnionApplications() {
  return (
    <section aria-labelledby="applications-heading" className="bg-sage-50 py-14 lg:py-20">
      <Container>
        <Reveal variant="rise">
          <RuledEyebrow>Applications</RuledEyebrow>
        </Reveal>
        <RevealLines as="h2" id="applications-heading" className={cn(type.section, "mt-5 text-forest")}>
          <Line>
            Where Onion Powder <span className="text-rust">Works Best</span>
          </Line>
        </RevealLines>

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-12 lg:gap-8">
          <Reveal variant="unveil" className="lg:col-span-5">
            <Parallax amount={8} overscan={1.12} className="aspect-[4/3] h-full rounded-[2rem_2rem_2rem_0.5rem] lg:aspect-auto">
              <ImageSlot
                slot={onionImages.cooking}
                tone="warm"
                framed={false}
                sizes="(min-width: 1024px) 40vw, 100vw"
                // Square photo in a wide frame: keep the sprinkling hand and the bowl.
                mediaClassName="object-[center_45%]"
                className="h-full w-full"
              />
            </Parallax>
          </Reveal>

          <Reveal as="ul" stagger={0.08} variant="rise" className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:gap-5">
            {onionApplications.map((application, index) => (
              <li key={application.title} className="rounded-[1.25rem] border border-line bg-white p-6 shadow-[var(--shadow-card)] sm:p-7">
                <span aria-hidden="true" className="font-display text-[1.25rem] leading-none font-medium text-rust">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-[1.375rem] leading-tight text-forest">{application.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">{application.text}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
