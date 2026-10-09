import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { cn } from "@/lib/utils";

/**
 * The left side of every product page's Request a Quote section: the
 * eyebrow, "Looking for <product> for Your Business?" and one short
 * paragraph — no buttons or contact details, so the form beside it is the
 * section's only action. Each page keeps its own section ground; `inverse`
 * switches the text to light for dark grounds, and `accentClassName`
 * colours the product name in the page's palette.
 */
export function QuoteIntro({
  productName,
  inverse = false,
  center = false,
  headingId = "cta-heading",
  accentClassName,
  eyebrowClassName,
  body = "Tell us your required quantity, specifications and destination. Our team will get back to you with availability and pricing.",
}: {
  productName: string;
  /** Light text for dark section grounds. */
  inverse?: boolean;
  /** Centred, for layouts with the form beneath rather than beside. */
  center?: boolean;
  /** The id the section's aria-labelledby points at. */
  headingId?: string;
  /** Colour of the product name; defaults to the site's leaf greens. */
  accentClassName?: string;
  eyebrowClassName?: string;
  /** The paragraph under the heading; a page can word it for its product. */
  body?: string;
}) {
  return (
    <div className={cn(center && "mx-auto max-w-2xl text-center")}>
      <Reveal variant="rise">
        <RuledEyebrow tone={inverse ? "inverse" : "default"} align={center ? "center" : "start"} className={eyebrowClassName}>
          Request a Quote
        </RuledEyebrow>
      </Reveal>
      <RevealLines
        as="h2"
        id={headingId}
        className={cn("mt-6 font-display text-display", inverse ? "text-cream" : "text-forest")}
      >
        <Line>Looking for</Line>
        <Line>
          <span className={accentClassName ?? (inverse ? "text-leaf-bright" : "text-leaf")}>{productName}</span>
        </Line>
        <Line>for Your Business?</Line>
      </RevealLines>
      <Reveal variant="rise" delay={0.2}>
        <p
          className={cn(
            "mt-5 text-[1rem] leading-relaxed",
            center ? "mx-auto max-w-xl" : "max-w-md",
            inverse ? "text-sage-100" : "text-ink-muted",
          )}
        >
          {body}
        </p>
      </Reveal>
    </div>
  );
}
