import type { Crumb } from "@/components/ui/breadcrumbs";
import { ProductBlog } from "@/features/products/components/product-blog";
import { exportCategories, type ExportProduct } from "@/features/products/export-catalogue";
import { OnionAbout } from "@/features/onion-powder/components/onion-about";
import { OnionApplications } from "@/features/onion-powder/components/onion-applications";
import { OnionContact } from "@/features/onion-powder/components/onion-contact";
import { OnionDetails } from "@/features/onion-powder/components/onion-details";
import { OnionHero } from "@/features/onion-powder/components/onion-hero";

/**
 * Dedicated page for Onion Powder (/products/onion-powder): warm, culinary
 * and light-led, in six sections — Hero · About · Applications · Product
 * Details · Blog · Contact. Uses the site typography; shares building blocks with the
 * Moringa page, but not its compositions.
 */
export function OnionPage({ product }: { product: ExportProduct }) {
  const category = exportCategories[product.category];
  const crumbs: Crumb[] = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: category.name, href: `/products#${category.anchor}` },
    { label: product.name },
  ];

  return (
    <>
      <OnionHero crumbs={crumbs} />
      <OnionAbout />
      <OnionApplications />
      <OnionDetails />
      <ProductBlog slug={product.slug} productName={product.name} className="bg-white" accentClassName="text-rust" />
      <OnionContact productName={product.name} />
    </>
  );
}
