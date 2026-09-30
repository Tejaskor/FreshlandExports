import type { CSSProperties } from "react";

import type { Crumb } from "@/components/ui/breadcrumbs";
import { Contact } from "@/features/agri/components/contact";
import { Process, Quality, Specs } from "@/features/agri/components/details";
import { Faq, Varieties } from "@/features/agri/components/extras";
import { Hero } from "@/features/agri/components/hero";
import { Features, Intro } from "@/features/agri/components/intro-features";
import { Uses } from "@/features/agri/components/uses";
import type { AgriProduct, SectionSpec } from "@/features/agri/types";

/**
 * Agricultural and fruit product landing page (/products/<slug>). Renders the
 * product's own section list in order, with its accent palette exposed as
 * --p-accent / --p-deep / --p-tint / --p-soft. Typography is the homepage's.
 */
export function AgriPage({ product }: { product: AgriProduct }) {
  const crumbs: Crumb[] = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: product.category ?? "Agricultural Products" },
    { label: product.name },
  ];

  const palette = {
    "--p-accent": product.theme.accent,
    "--p-deep": product.theme.deep,
    "--p-tint": product.theme.tint,
    "--p-soft": product.theme.soft,
  } as CSSProperties;

  const render = (section: SectionSpec) => {
    switch (section.type) {
      case "hero":
        return <Hero product={product} crumbs={crumbs} variant={section.variant} reverse={section.reverse} />;
      case "intro":
        return <Intro product={product} variant={section.variant} shape={section.shape} reverse={section.reverse} />;
      case "features":
        return <Features product={product} variant={section.variant} />;
      case "uses":
        return <Uses product={product} variant={section.variant} />;
      case "process":
        return <Process product={product} />;
      case "specs":
        return <Specs product={product} variant={section.variant} />;
      case "quality":
        return <Quality product={product} />;
      case "storage":
        return <Quality product={product} kind="storage" />;
      case "commercial":
        return product.commercial ? (
          <Features product={product} variant={section.variant} data={product.commercial} headingId="commercial-heading" />
        ) : null;
      case "varieties":
        return <Varieties product={product} />;
      case "faq":
        return <Faq product={product} variant={section.variant} />;
      case "contact":
        return <Contact product={product} variant={section.variant} />;
    }
  };

  return (
    <div style={palette}>
      {product.sections.map((section, index) => (
        <div key={`${section.type}-${index}`}>
          {/* "Explore Our Product" lands on the first section after the hero. */}
          {index === 1 && <span id="overview" className="block scroll-mt-24" />}
          {render(section)}
        </div>
      ))}
    </div>
  );
}
