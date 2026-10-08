import { ProductBlog } from "@/features/products/components/product-blog";
import type { ExportProduct } from "@/features/products/export-catalogue";
import { OnionApplications } from "@/features/onion-powder/components/onion-applications";
import { OnionFaq } from "@/features/onion-powder/components/onion-faq";
import { OnionHero } from "@/features/onion-powder/components/onion-hero";
import { OnionOverview } from "@/features/onion-powder/components/onion-overview";
import { OnionProcess } from "@/features/onion-powder/components/onion-process";
import { OnionSpecs } from "@/features/onion-powder/components/onion-specs";
import { OnionStorage } from "@/features/onion-powder/components/onion-storage";
import { OnionContact } from "@/features/onion-powder/components/onion-contact";

/**
 * Dedicated page for Onion Powder (/products/onion-powder), written for B2B
 * buyers: Hero · Overview · Applications · Specifications · Processing &
 * Quality · Storage & Handling · MOQ + FAQ · Insights · Quote. Grounds
 * alternate white, sage and cream; deep green is kept for the closing quote.
 */
export function OnionPage({ product }: { product: ExportProduct }) {
  return (
    <>
      <OnionHero />
      <OnionOverview />
      <OnionApplications />
      <OnionSpecs />
      <OnionProcess />
      <OnionStorage />
      <OnionFaq />
      <ProductBlog slug={product.slug} productName={product.name} className="bg-white" accentClassName="text-rust" />
      <OnionContact productName={product.name} />
    </>
  );
}
