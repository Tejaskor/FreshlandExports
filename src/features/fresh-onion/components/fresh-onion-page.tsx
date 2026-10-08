import { FreshOnionAbout } from "@/features/fresh-onion/components/fresh-onion-about";
import { FreshOnionContact } from "@/features/fresh-onion/components/fresh-onion-contact";
import { FreshOnionFaq } from "@/features/fresh-onion/components/fresh-onion-faq";
import { FreshOnionFeatures } from "@/features/fresh-onion/components/fresh-onion-features";
import { FreshOnionHero } from "@/features/fresh-onion/components/fresh-onion-hero";
import { FreshOnionSpecs } from "@/features/fresh-onion/components/fresh-onion-specs";
import { FreshOnionUses } from "@/features/fresh-onion/components/fresh-onion-uses";
import { ProductBlog } from "@/features/products/components/product-blog";
import type { ExportProduct } from "@/features/products/export-catalogue";

/**
 * Dedicated page for Fresh Onions (/products/onion) — light, with burgundy
 * and warm-cream onion accents, in eight sections: Hero · Product Overview · Key Features · Applications ·
 * Specifications, MOQ & Storage · FAQ · Blog · Contact. Uses the site typography; shares building blocks with the
 * other product pages, but not their compositions.
 */
export function FreshOnionPage({ product }: { product: ExportProduct }) {
  return (
    <>
      <FreshOnionHero />
      <FreshOnionAbout />
      <FreshOnionFeatures />
      <FreshOnionUses />
      <FreshOnionSpecs />
      <FreshOnionFaq />
      <ProductBlog slug={product.slug} productName="Fresh Onion" className="bg-sage-50" />
      <FreshOnionContact />
    </>
  );
}
