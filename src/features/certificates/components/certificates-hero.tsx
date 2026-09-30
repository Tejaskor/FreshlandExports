import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { certificatesHero } from "@/features/certificates/data";

/**
 * Light botanical hero. The plate is bright, so unlike the dark heroes it can
 * run full-bleed beneath the header without swallowing the ink navigation; a
 * soft cream bloom behind the copy keeps the heading crisp over the foliage.
 */
export function CertificatesHero() {
  return (
    <section aria-labelledby="page-heading" className="relative isolate overflow-hidden bg-cream-warm">
      <div className="absolute inset-0 -z-10">
        <Parallax className="h-full w-full" amount={10} overscan={1.2} zoom={0.05}>
          <Figure
            image={certificatesHero.media.image}
            alt={certificatesHero.media.alt}
            art={certificatesHero.media.art}
            priority
            // A 3:1 plate in a frame taller than that ratio is sized by
            // height — ~140vw on desktop, far wider on tall phone heroes.
            sizes="(min-width: 1024px) 140vw, 480vw"
            className="h-full w-full bg-cream-warm"
          />
        </Parallax>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(250_248_243/0.88)_0%,rgb(250_248_243/0.55)_45%,rgb(250_248_243/0)_75%)]" />
        {/* Fades into the section below instead of ending on a hard edge. */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream-warm to-transparent" />
      </div>

      <Container className="flex min-h-[30rem] flex-col items-center justify-center pt-36 pb-20 text-center lg:min-h-[36rem] lg:pt-40 lg:pb-24">
        <RevealLines as="h1" id="page-heading" className="text-hero font-medium" delay={0.1} intro>
          {certificatesHero.heading.map((line) => (
            <Line key={line}>{line}</Line>
          ))}
        </RevealLines>

        <Reveal delay={0.45} variant="rise">
          <p className="mx-auto mt-6 max-w-2xl text-lead text-ink">{certificatesHero.body}</p>
        </Reveal>
      </Container>
    </section>
  );
}
