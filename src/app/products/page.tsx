import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/animations/reveal";
import { ProductCatalogue } from "@/features/products/components/product-catalogue";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Products",
  description:
    "Freshland Exports product catalogue: fresh agricultural produce, botanical powders, fruits and whole spices from India, supplied in bulk for wholesale, food-service, processing and export buyers.",
  path: "/products",
});

const highlights = [
  "Fresh agricultural produce",
  "Botanical powders",
  "Fruits",
  "Whole spices",
  "Bulk & export supply",
];

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Products"
        title={["From Indian Farms", "to Global Markets"]}
        lead="Fresh agricultural produce, botanical powders, fruits and spices carefully sourced for wholesale, food-service, processing and international buyers."
      >
        <Reveal as="ul" delay={0.3} stagger={0.05} variant="rise" aria-label="What we supply" className="mt-8 flex flex-wrap gap-2">
          {highlights.map((item) => (
            <li
              key={item}
              className="rounded-full border border-line-strong bg-white px-4 py-1.5 text-[0.8125rem] font-medium text-forest"
            >
              {item}
            </li>
          ))}
        </Reveal>
      </PageHeader>
      <ProductCatalogue />
    </>
  );
}
