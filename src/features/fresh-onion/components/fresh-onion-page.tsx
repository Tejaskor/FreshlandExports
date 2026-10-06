import type { Crumb } from "@/components/ui/breadcrumbs";
import { FreshOnionAbout } from "@/features/fresh-onion/components/fresh-onion-about";
import { FreshOnionContact } from "@/features/fresh-onion/components/fresh-onion-contact";
import { FreshOnionFaq } from "@/features/fresh-onion/components/fresh-onion-faq";
import { FreshOnionFeatures } from "@/features/fresh-onion/components/fresh-onion-features";
import { FreshOnionHero } from "@/features/fresh-onion/components/fresh-onion-hero";
import { FreshOnionSpecs } from "@/features/fresh-onion/components/fresh-onion-specs";
import { FreshOnionUses } from "@/features/fresh-onion/components/fresh-onion-uses";
import { ProductBlog } from "@/features/products/components/product-blog";
import { exportCategories, type ExportProduct } from "@/features/products/export-catalogue";

/**
 * Dedicated page for Fresh Onions (/products/onion) — light, with burgundy
 * and warm-cream onion accents, in eight sections: Hero · Product Overview · Key Features · Applications ·
 * Specifications, MOQ & Storage · FAQ · Blog · Contact. Uses the site typography; shares building blocks with the
 * other product pages, but not their compositions.
 */
export function FreshOnionPage({ product }: { product: ExportProduct }) {
  const category = exportCategories[product.category];
  const crumbs: Crumb[] = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: category.name, href: `/products#${category.anchor}` },
    { label: "Fresh Onions" },
  ];

  return (
    <>
      <FreshOnionHero crumbs={crumbs} />
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
