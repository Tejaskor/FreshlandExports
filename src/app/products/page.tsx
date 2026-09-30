import { PageHeader } from "@/components/layout/page-header";
import { ExportRange } from "@/features/products/components/export-range";
import { ProductGrid } from "@/features/products/components/product-grid";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Products",
  description:
    "Organic botanical extracts, herbal powders, enzymes and probiotics for food, nutraceutical and cosmetic formulators.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title={["Ingredients that", "make a difference"]}
        lead="Standardised botanical actives, each traceable to the farmland it was grown on and assayed before release."
      />
      <ExportRange />
      <ProductGrid />
    </>
  );
}
