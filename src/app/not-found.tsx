import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Page not found",
  description: "This page has been moved or never existed.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <Section className="flex min-h-[70vh] items-center bg-cream">
      <Container>
        <Eyebrow>Error 404</Eyebrow>
        <h1 className="mt-6 max-w-[16ch] text-display">
          This path has gone to seed.
        </h1>
        <p className="mt-5 max-w-md text-lead text-ink-muted">
          The page you asked for has moved or never existed.
        </p>
        <Button href="/" className="mt-9">
          Back to the beginning
        </Button>
      </Container>
    </Section>
  );
}
