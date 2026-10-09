import { siteConfig } from "@/config/site";
import { textResponse } from "@/lib/llms";

// Built once at build time; the URL follows NEXT_PUBLIC_SITE_URL.
export const dynamic = "force-static";

export function GET() {
  return textResponse(
    [
      "/* SITE */",
      `Name: ${siteConfig.name}`,
      `URL: ${siteConfig.url}`,
      "Language: English",
      "Standards: HTML5, CSS3",
      "Components: Next.js, React, TypeScript, Tailwind CSS",
      "",
    ].join("\n"),
  );
}
