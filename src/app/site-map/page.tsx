import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { Section } from "@/components/ui/section";
import { SiteMapTree } from "@/features/site-map/components/site-map-tree";
import { siteMapGroups, siteMapProducts } from "@/features/site-map/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Sitemap",
  description:
    "Every page on the Freshland Exports website in one place: products by category, company pages, the blog and resources.",
  path: "/site-map",
});

/** The human-readable site map; crawlers use /sitemap.xml. */
export default function SiteMapPage() {
  return (
    <Section aria-labelledby="site-map-heading" className="bg-cream pt-28 pb-12 lg:pt-[7.5rem] lg:pb-16">
      <Container>
        <RevealLines
          as="h1"
          id="site-map-heading"
          className="font-display text-[clamp(2.5rem,1.6rem+3vw,4rem)] leading-none font-medium tracking-[-0.03em] text-forest"
          intro
        >
          <Line>
            Site<span className="text-leaf">map</span>
          </Line>
        </RevealLines>
        <span aria-hidden="true" className="mt-3 block h-1 w-14 rounded-full bg-gradient-to-r from-forest to-leaf-bright" />
        <Reveal variant="rise" delay={0.15}>
          <p className="mt-3 max-w-md text-lead text-ink-muted">Every page on our website, in one place.</p>
          <div className="mt-5">
            <Button href="/contact" variant="outline" size="sm">
              Contact Us
            </Button>
          </div>
        </Reveal>

        <SiteMapTree groups={siteMapGroups} products={siteMapProducts} />
      </Container>
    </Section>
  );
}
