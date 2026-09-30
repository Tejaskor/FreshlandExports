import type { Crumb } from "@/components/ui/breadcrumbs";
import { exportCategories, type ExportProduct } from "@/features/products/export-catalogue";
import { MoringaAbout } from "@/features/moringa/components/moringa-about";
import { MoringaApplications } from "@/features/moringa/components/moringa-applications";
import { MoringaCta } from "@/features/moringa/components/moringa-cta";
import { MoringaHero } from "@/features/moringa/components/moringa-hero";
import { MoringaDetails } from "@/features/moringa/components/moringa-details";

/**
 * Dedicated editorial page for Moringa Powder (/products/moringa-powder).
 * Every other export product keeps the shared ExportProductDetail layout.
 *
 * Five sections, each with its own composition: Hero · About Moringa
 * (intro, nutrition, benefits) · Applications (commercial uses, recipes) ·
 * Product Details (process, quality, specifications, MOQ, FAQs) · Contact.
 */
export function MoringaPage({ product }: { product: ExportProduct }) {
  const category = exportCategories[product.category];
  const crumbs: Crumb[] = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: category.name, href: `/products#${category.anchor}` },
    { label: product.name },
  ];

  return (
    <>
      <MoringaHero crumbs={crumbs} />
      <MoringaAbout />
      <MoringaApplications />
      <MoringaDetails />
      <MoringaCta productName={product.name} />
    </>
  );
}
