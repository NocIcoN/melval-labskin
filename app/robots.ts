import type { MetadataRoute } from "next";
import { SEO_DEFAULTS } from "@/constants";

/**
 * Dynamically generated robots.txt — allows full crawling except
 * private/admin routes, and points crawlers to the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api/"],
      },
    ],
    sitemap: `${SEO_DEFAULTS.siteUrl}/sitemap.xml`,
  };
}
