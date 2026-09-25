import { CategoryGrid } from "@/features/categories/components/category-grid";
import { PageHeader } from "@/components/layout/page-header";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Categories",
  description:
    "Botanical extracts, herbal powders, enzymes and probiotics — the four families that make up the Freshland Exports catalogue.",
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Categories"
        title={["Pure ingredients for", "a healthier tomorrow"]}
        lead="Four families of botanical actives, from whole-leaf extracts to science-backed cultures."
      />
      <CategoryGrid />
    </>
  );
}
