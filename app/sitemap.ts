import type { MetadataRoute } from "next";
import { TREATMENTS, PRODUCTS, ARTICLES, SEO_DEFAULTS } from "@/constants";

/**
 * Dynamically generated sitemap.xml — covers all static routes plus
 * every treatment/product/article detail page so search engines can
 * discover and index them.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO_DEFAULTS.siteUrl;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/treatments`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/products`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/doctors`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/testimonials`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/articles`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/gallery`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/promo`, changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/faq`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/booking`, changeFrequency: "monthly", priority: 0.9 },
  ];

  const treatmentRoutes: MetadataRoute.Sitemap = TREATMENTS.map((t) => ({
    url: `${baseUrl}/treatments/${t.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const articleRoutes: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${baseUrl}/articles/${a.slug}`,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...treatmentRoutes, ...productRoutes, ...articleRoutes];
}
