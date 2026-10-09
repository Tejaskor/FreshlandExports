import { llmsFullText, textResponse } from "@/lib/llms";

// Built once at build time from the catalogue and blog.
export const dynamic = "force-static";

export function GET() {
  return textResponse(llmsFullText(), "text/markdown");
}
