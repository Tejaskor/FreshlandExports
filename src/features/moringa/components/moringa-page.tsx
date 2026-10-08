import { exportCategories, exportProductHref, type ExportProduct } from "@/features/products/export-catalogue";
import { MoringaAbout } from "@/features/moringa/components/moringa-about";
import { MoringaApplications } from "@/features/moringa/components/moringa-applications";
import { MoringaCta } from "@/features/moringa/components/moringa-cta";
import { MoringaHero } from "@/features/moringa/components/moringa-hero";
import { MoringaDetails } from "@/features/moringa/components/moringa-details";
import { ProductBlog } from "@/features/products/components/product-blog";
import { WaveDivider } from "@/components/ui/wave-divider";
import { faqs } from "@/features/moringa/data";
import { moringaImages } from "@/features/moringa/images";
import { faqJsonLd, productJsonLd } from "@/lib/seo";

/**
 * Dedicated editorial page for Moringa Powder (/products/moringa-powder).
 * Every other export product keeps the shared ExportProductDetail layout.
 *
 * Six sections, each with its own composition: Hero · About Moringa
 * (intro, nutrition, benefits) · Applications (commercial uses, recipes) ·
 * Product Details (process, quality, specifications, MOQ, FAQs) · Blog ·
 * Contact.
 */
export function MoringaPage({ product }: { product: ExportProduct }) {
  const category = exportCategories[product.category];
  const path = exportProductHref(product.slug);

  // Product and FAQ data for search engines, matching what the
  // page shows.
  const jsonLd = [
    productJsonLd({
      name: product.name,
      description: product.description,
      path,
      image: moringaImages.hero.file,
      category: category.name,
    }),
    faqJsonLd(faqs),
  ];

  return (
    <>
      <MoringaHero />
      <MoringaAbout />
      <MoringaApplications />
      <MoringaDetails />
      {/* Flows into the Contact band's forest green. */}
      <ProductBlog slug={product.slug} productName={product.name} className="bg-cream" after={<WaveDivider fill="text-forest" />} />
      <MoringaCta productName={product.name} />

      <script
        type="application/ld+json"
        // Static, author-controlled JSON — no user input reaches this string.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
