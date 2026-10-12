/**
 * Builds the 1200 × 630 social-sharing images for the site's static pages
 * (public/images/og/*.jpg) from existing photographs: the photograph fills
 * the frame, a deep-forest gradient covers the left side, and the page title
 * sits on it in cream. Product, Blog and case study pages share their own
 * photographs instead (see src/lib/seo.ts).
 *
 * Run with `node scripts/generate-og-images.mjs` after changing a source
 * photograph or title; commit the output.
 */
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const W = 1200;
const H = 630;

const pages = [
  { out: "freshland-exports", src: "products/freshland-products-hero.webp", title: ["Freshland", "Exports"], line: "Agricultural products, botanical powders, fruits and spices from India" },
  { out: "about", src: "about/about-hero-farmland-sunset.webp", title: ["About", "Freshland Exports"], line: "Who we are and how we supply global buyers" },
  { out: "products", src: "home/categories/Botanicalpowder.webp", title: ["Our", "Products"], line: "Botanical powders, fresh produce, fruits and whole spices" },
  { out: "farms", src: "farms/farmers-working-together.webp", title: ["Our", "Farms"], line: "The growers and farmland behind our supply" },
  { out: "knowledge-center", src: "r-and-d/rnd-lab-botanical-samples.webp", title: ["Knowledge", "Center"], line: "Sourcing, quality and botanical ingredient insights" },
  { out: "certificates", src: "r-and-d/botanical-sourcing-quality.webp", title: ["Certificates"], line: "Certifications and registrations we hold" },
  { out: "contact", src: "home/contact/contact-world-map.webp", title: ["Contact", "Us"], line: "Enquiries and quotations for international buyers" },
  { out: "faqs", src: "home/categories/Spices.webp", title: ["Frequently Asked", "Questions"], line: "Products, MOQs, quotations and export enquiries" },
  { out: "blog", src: "Resources/Blog/freshland-exports-blog-card.webp", title: ["Freshland Exports", "Blog"], line: "Sourcing, quality, storage and food applications" },
  { out: "case-studies", src: "home/categories/Agriculturalproduct.webp", title: ["Case", "Studies"], line: "Illustrative industry examples across our product range" },
  { out: "signature-ingredients", src: "about/about-hero-turmeric-powder.webp", title: ["Signature", "Ingredients"], line: "Freshland Exports signature botanical ingredients" },
];

const escape = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function overlay({ title, line }) {
  const size = title.some((part) => part.length > 14) ? 66 : 76;
  const titleY = 300 - (title.length - 1) * size * 0.55;
  return Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fade" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="#0D2C1E" stop-opacity="0.94"/>
      <stop offset="0.48" stop-color="#14452F" stop-opacity="0.78"/>
      <stop offset="0.8" stop-color="#14452F" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#fade)"/>
  <rect x="72" y="96" width="44" height="3" fill="#3D7C4A"/>
  <text x="130" y="104" font-family="DejaVu Sans" font-size="20" letter-spacing="4" fill="#C9DEC7">FRESHLAND EXPORTS</text>
  ${title
    .map((part, index) => `<text x="72" y="${titleY + index * size * 1.08}" font-family="DejaVu Serif" font-size="${size}" fill="#FAF8F3">${escape(part)}</text>`)
    .join("\n  ")}
  <text x="72" y="${titleY + title.length * size * 1.08 + 18}" font-family="DejaVu Sans" font-size="24" fill="#E4EDE2">${escape(line)}</text>
  <rect x="0" y="${H - 10}" width="${W}" height="10" fill="#3D7C4A"/>
</svg>`);
}

for (const page of pages) {
  const out = path.join(root, "public/images/og", `${page.out}.jpg`);
  await sharp(path.join(root, "public/images", page.src))
    .resize(W, H, { fit: "cover", position: "attention" })
    .composite([{ input: overlay(page) }])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(out);
  console.log("wrote", path.relative(root, out));
}
