"use client"; // Error boundaries must be Client Components.

import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

/**
 * A page failed to render. The header and footer (root layout) stay in
 * place; the visitor can try the page again or head back to the catalogue.
 */
export default function ErrorPage({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section aria-labelledby="error-heading" className="bg-cream-warm pt-[5.5rem]">
      <Container className="py-24 text-center sm:py-32">
        <h1
          id="error-heading"
          className="font-display text-[clamp(2.25rem,1.5rem+2.6vw,4rem)] leading-[1.05] font-medium tracking-[-0.025em] text-forest-deep"
        >
          Something went wrong
        </h1>
        <p className="mx-auto mt-4 max-w-[40.625rem] text-[1rem] leading-relaxed text-ink-muted sm:text-[1.0625rem]">
          This page couldn’t be loaded just now. Please try again, or continue browsing our products.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Button type="button" onClick={() => retry()} variant="forest" size="lg">
            Try again
          </Button>
          <Button href="/products" variant="outline" size="lg" className="border-forest/50">
            Browse Products
          </Button>
        </div>
      </Container>
    </section>
  );
}
