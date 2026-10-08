import { ProductBlog } from "@/features/products/components/product-blog";
import type { ExportProduct } from "@/features/products/export-catalogue";
import { TurmericAbout } from "@/features/turmeric-powder/components/turmeric-about";
import { TurmericApplications } from "@/features/turmeric-powder/components/turmeric-applications";
import { TurmericContact } from "@/features/turmeric-powder/components/turmeric-contact";
import { TurmericDetails } from "@/features/turmeric-powder/components/turmeric-details";
import { TurmericHero } from "@/features/turmeric-powder/components/turmeric-hero";
import turmeric from "@/features/turmeric-powder/turmeric.module.css";

/**
 * Dedicated page for Turmeric Powder (/products/turmeric-powder): golden and
 * botanical, in six sections — Hero · About · Applications · Product
 * Details · Blog · Contact. Uses the site typography; shares building blocks with the
 * Moringa page, adding its own muted gold palette.
 */
export function TurmericPage({ product }: { product: ExportProduct }) {
  return (
    <div className={turmeric.palette}>
      <TurmericHero />
      <TurmericAbout />
      <TurmericApplications />
      <TurmericDetails />
      <ProductBlog slug={product.slug} productName={product.name} className="bg-[var(--t-pale)]" accentClassName="text-rust" />
      <TurmericContact productName={product.name} />
    </div>
  );
}
