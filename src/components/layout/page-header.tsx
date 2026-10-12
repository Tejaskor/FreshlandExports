import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

/**
 * Shared masthead for interior routes. Keeps the homepage's editorial voice
 * and motion language on every page without each feature re-implementing it.
 */
export function PageHeader({
  eyebrow,
  title,
  lead,
  align = "start",
  children,
}: {
  /** Small label above the title; leave out for the title alone. */
  eyebrow?: string;
  /** Rendered as the page's single h1, split into masked lines. */
  title: readonly string[];
  lead: string;
  /** Centres the eyebrow, title and lead. */
  align?: "start" | "center";
  /** Optional content under the lead, such as a row of highlights. */
  children?: ReactNode;
}) {
  return (
    <Section aria-labelledby="page-heading" className="bg-cream pt-40 lg:pt-48">
      <Container className={cn(align === "center" && "text-center")}>
        {eyebrow && (
          <Reveal variant="rise">
            <Eyebrow className={cn(align === "center" && "flex justify-center")}>{eyebrow}</Eyebrow>
          </Reveal>
        )}

        <RevealLines as="h1" id="page-heading" className={cn("text-display", eyebrow && "mt-7")} intro>
          {title.map((line) => (
            <Line key={line}>{line}</Line>
          ))}
        </RevealLines>

        <Reveal delay={0.2} variant="rise">
          <p className={cn("mt-8 max-w-xl text-lead text-ink-muted", align === "center" && "mx-auto")}>{lead}</p>
        </Reveal>

        {children}
      </Container>
    </Section>
  );
}
