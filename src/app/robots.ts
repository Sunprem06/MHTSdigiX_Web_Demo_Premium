import type { MetadataRoute } from "next";

// Required for static export (output: "export") — see MEMORY.md 2026-10-29.
export const dynamic = "force-static";

// This is an undeployed, fictional concept demo — disallow-all intentionally.
// See RULES.md ("SEO").
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
