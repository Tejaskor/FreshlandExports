import { llmsText, textResponse } from "@/lib/llms";

// Built once at build time from the catalogue.
export const dynamic = "force-static";

export function GET() {
  return textResponse(llmsText(), "text/markdown");
}
