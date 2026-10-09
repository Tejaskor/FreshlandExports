import Image from "next/image";

import { Icon } from "@/components/ui/icon";
import { BrochureButton } from "@/features/brochure/brochure-button";
import { cn } from "@/lib/utils";

/**
 * Brochure prompt for a blog article's sidebar (and below the article on
 * phones). The button opens the shared brochure request form; the PDF is
 * released only after that form is submitted successfully.
 */
export function BrochureCard({ className }: { className?: string }) {
  return (
    <section
      aria-labelledby="brochure-card-heading"
      className={cn("rounded-xl border border-line bg-white p-5", className)}
    >
      <Image
        src="/images/Blog/Guide/Guide.webp"
        alt="Cover of the Freshland Exports product brochure, Complete Guide to Our Products"
        width={1408}
        height={1117}
        sizes="(min-width: 1024px) 16rem, (min-width: 768px) 13rem, 90vw"
        className="mx-auto h-auto w-full max-w-[18rem] rounded-lg"
      />
      <h2 id="brochure-card-heading" className="mt-4 font-display text-[1.125rem] leading-snug text-forest">
        Freshland Exports Product Brochure
      </h2>
      <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-muted">
        Explore our botanical powders, fresh agricultural produce, fruits and whole spices for your business sourcing
        needs.
      </p>
      <BrochureButton
        source="blog_brochure"
        className="mt-4 inline-flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-forest px-5 text-[0.875rem] font-semibold text-white transition-colors duration-300 hover:bg-forest-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
      >
        <Icon name="download" className="size-4" strokeWidth={2} />
        Download Brochure
      </BrochureButton>
    </section>
  );
}
