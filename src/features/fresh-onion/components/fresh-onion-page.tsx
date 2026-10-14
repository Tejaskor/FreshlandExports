import { FreshOnionAbout } from "@/features/fresh-onion/components/fresh-onion-about";
import { FreshOnionContact } from "@/features/fresh-onion/components/fresh-onion-contact";
import { FreshOnionFaq } from "@/features/fresh-onion/components/fresh-onion-faq";
import { FreshOnionFeatures } from "@/features/fresh-onion/components/fresh-onion-features";
import { FreshOnionHero } from "@/features/fresh-onion/components/fresh-onion-hero";
import { FreshOnionSpecs } from "@/features/fresh-onion/components/fresh-onion-specs";
import { FreshOnionUses } from "@/features/fresh-onion/components/fresh-onion-uses";
import { ProductBlog } from "@/features/products/components/product-blog";
import { exportCategories, exportProductHref, type ExportProduct } from "@/features/products/export-catalogue";
import { freshOnionImages } from "@/features/fresh-onion/images";
import { JsonLd } from "@/components/seo/json-ld";
import { productJsonLd } from "@/lib/seo";
import { ProductCaseStudies } from "@/features/case-studies/components/product-case-studies";

/**
 * Dedicated page for Fresh Onions (/products/onion) — light, with burgundy
 * and warm-cream onion accents, in eight sections: Hero · Product Overview · Key Features · Applications ·
 * Specifications, MOQ & Storage · FAQ · Blog · Contact. Uses the site typography; shares building blocks with the
 * other product pages, but not their compositions.
 */
export function FreshOnionPage({ product }: { product: ExportProduct }) {
  // Product data for search engines, matching what the page shows (the
  // FAQ section publishes its own FAQPage). No offer: prices are quoted.
  const jsonLd = productJsonLd({
    name: product.name,
    description: product.description,
    path: exportProductHref(product.slug),
    image: freshOnionImages.hero.file,
    category: exportCategories[product.category].name,
  });

  return (
    <>
      <FreshOnionHero />
      <FreshOnionAbout />
      <FreshOnionFeatures />
      <FreshOnionUses />
      <FreshOnionSpecs />
      <FreshOnionFaq />
      <ProductBlog slug={product.slug} productName="Fresh Onion" className="bg-sage-50" />
      <ProductCaseStudies slug={product.slug} productName="Fresh Onion" className="bg-white" />
      <FreshOnionContact productSlug={product.slug} />
      <JsonLd data={jsonLd} />
    </>
  );
}
