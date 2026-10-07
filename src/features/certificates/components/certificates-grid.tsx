import { Container } from "@/components/ui/container";
import { BotanicalLines } from "@/components/media/botanical-lines";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Ornament } from "@/components/ui/ornament";
import { Reveal } from "@/animations/reveal";
import { ScrollScrub } from "@/animations/scroll-scrub";
import { Section } from "@/components/ui/section";
import { CertificateCard } from "@/features/certificates/components/certificate-card";
import { certificates, certificatesIntro } from "@/features/certificates/data";

export function CertificatesGrid() {
  return (
    <Section
      aria-labelledby="certificates-heading"
      // The page has no hero: the top padding clears the fixed header (88px)
      // with ~24–32px to spare, so the content starts right below it.
      className="relative isolate overflow-hidden bg-cream-warm pt-28 lg:pt-[7.5rem] lg:pb-24"
    >
      {/* Line-art sprigs at the margins, drifting against the scroll. */}
      <ScrollScrub
        className="absolute top-24 -left-16 -z-10 hidden w-48 text-sage-200 md:block"
        from={{ y: 60, rotate: -6 }}
        to={{ y: -60, rotate: 4 }}
        desktopOnly
      >
        <BotanicalLines className="w-full -scale-x-100" />
      </ScrollScrub>
      <ScrollScrub
        className="absolute top-1/2 -right-16 -z-10 hidden w-48 text-sage-200 md:block"
        from={{ y: -40, rotate: 6 }}
        to={{ y: 60, rotate: -4 }}
        desktopOnly
      >
        <BotanicalLines className="w-full" />
      </ScrollScrub>

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal variant="bloom">
            <Ornament className="mx-auto" />
          </Reveal>
          {/* The page's only heading now the hero is gone, so it is the h1. */}
          <RevealLines as="h1" id="certificates-heading" className="mt-5 text-display" delay={0.05} intro>
            <Line>{certificatesIntro.heading}</Line>
          </RevealLines>
          <Reveal delay={0.15} variant="rise">
            <p className="mt-4 text-lead text-ink-muted">{certificatesIntro.body}</p>
          </Reveal>
        </div>

        <Reveal
          as="ul"
          stagger={0.08}
          variant="rise"
          delay={0.1}
          className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2 lg:mt-14 lg:gap-6"
        >
          {certificates.map((certificate) => (
            // Wrapper takes the entrance transform; the card owns its hover lift.
            <li key={certificate.title}>
              <CertificateCard certificate={certificate} />
            </li>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
