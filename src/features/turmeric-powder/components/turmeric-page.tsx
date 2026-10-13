import { ProductBlog } from "@/features/products/components/product-blog";
import { exportCategories, exportProductHref, type ExportProduct } from "@/features/products/export-catalogue";
import { turmericImages } from "@/features/turmeric-powder/images";
import { JsonLd } from "@/components/seo/json-ld";
import { productJsonLd } from "@/lib/seo";
import { TurmericAbout } from "@/features/turmeric-powder/components/turmeric-about";
import { TurmericApplications } from "@/features/turmeric-powder/components/turmeric-applications";
import { TurmericContact } from "@/features/turmeric-powder/components/turmeric-contact";
import { TurmericDetails } from "@/features/turmeric-powder/components/turmeric-details";
import { TurmericHero } from "@/features/turmeric-powder/components/turmeric-hero";
import turmeric from "@/features/turmeric-powder/turmeric.module.css";
import { ProductCaseStudies } from "@/features/case-studies/components/product-case-studies";

/**
 * Dedicated page for Turmeric Powder (/products/turmeric-powder): golden and
 * botanical, in six sections — Hero · About · Applications · Product
 * Details · Blog · Contact. Uses the site typography; shares building blocks with the
 * Moringa page, adding its own muted gold palette.
 */
export function TurmericPage({ product }: { product: ExportProduct }) {
  // Product data for search engines, matching what the page shows (the
  // FAQ section publishes its own FAQPage). No offer: prices are quoted.
  const jsonLd = productJsonLd({
    name: product.name,
    description: product.description,
    path: exportProductHref(product.slug),
    image: turmericImages.hero.file,
    category: exportCategories[product.category].name,
  });

  return (
    <div className={turmeric.palette}>
      <TurmericHero />
      <TurmericAbout />
      <TurmericApplications />
      <TurmericDetails />
      <ProductBlog slug={product.slug} productName={product.name} className="bg-[var(--t-pale)]" accentClassName="text-rust" />
      <ProductCaseStudies slug={product.slug} productName={product.name} className="bg-white" />
      <TurmericContact productName={product.name} />
      <JsonLd data={jsonLd} />
    </div>
  );
}
