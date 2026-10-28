import type { MetadataRoute } from "next";

// This is an undeployed, fictional concept demo — disallow-all intentionally.
// See RULES.md ("SEO").
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
