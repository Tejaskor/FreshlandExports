import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/animations/reveal";
import { Section } from "@/components/ui/section";
import { certifications } from "@/features/home/data";

/**
 * The certification marks already shown in the homepage hero, laid out as a
 * grid. Logos keep their intrinsic proportions inside a fixed tile, so marks
 * of very different shapes sit on one baseline without distortion.
 */
export function CertificatesGrid() {
  return (
    <Section aria-label="Certifications" className="bg-cream-warm">
      <Container>
        <Reveal
          as="ul"
          stagger={0.06}
          variant="rise"
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6"
        >
          {certifications.map((mark) => (
            <li
              key={mark.name}
              className="flex flex-col items-center rounded-[var(--radius-card)] border border-line bg-white px-5 pt-7 pb-5 text-center shadow-[var(--shadow-card)]"
            >
              <span className="relative block h-20 w-full sm:h-24">
                <Image
                  src={mark.image}
                  alt={`${mark.name} certification mark`}
                  fill
                  sizes="(min-width: 1024px) 240px, 45vw"
                  className="object-contain"
                />
              </span>
              <span className="mt-4 text-[0.9375rem] font-medium text-forest">{mark.name}</span>
            </li>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
