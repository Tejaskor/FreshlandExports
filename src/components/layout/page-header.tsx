import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { Section } from "@/components/ui/section";

/**
 * Shared masthead for interior routes. Keeps the homepage's editorial voice
 * and motion language on every page without each feature re-implementing it.
 */
export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  /** Rendered as the page's single h1, split into masked lines. */
  title: readonly string[];
  lead: string;
  /** Optional content under the lead, such as a row of highlights. */
  children?: ReactNode;
}) {
  return (
    <Section aria-labelledby="page-heading" className="bg-cream pt-40 lg:pt-48">
      <Container>
        <Reveal variant="rise">
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>

        <RevealLines as="h1" id="page-heading" className="mt-7 text-display" intro>
          {title.map((line) => (
            <Line key={line}>{line}</Line>
          ))}
        </RevealLines>

        <Reveal delay={0.2} variant="rise">
          <p className="mt-8 max-w-xl text-lead text-ink-muted">{lead}</p>
        </Reveal>

        {children}
      </Container>
    </Section>
  );
}
