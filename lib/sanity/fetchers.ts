import { sanityClient } from "./client";
import {
  treatmentsQuery,
  featuredTreatmentsQuery,
  treatmentBySlugQuery,
  productsQuery,
  productBySlugQuery,
  doctorsQuery,
  articlesQuery,
  latestArticlesQuery,
  articleBySlugQuery,
  testimonialsQuery,
  featuredTestimonialsQuery,
  promosQuery,
  flashSalePromoQuery,
  faqsQuery,
  branchesQuery,
} from "./queries";

// Fallback constants (dummy data) used when Sanity is not yet configured
import {
  TREATMENTS,
  PRODUCTS,
  DOCTORS,
  ARTICLES,
  TESTIMONIALS,
  PROMOS,
  FAQS,
  BRANCHES,
} from "@/constants";

import type {
  Treatment,
  Product,
  Doctor,
  Article,
  Testimonial,
  Promo,
  FAQ,
  Branch,
} from "@/types";

/**
 * Returns true when Sanity env vars are present and non-empty.
 * When false, all fetchers fall back to the dummy constants so the
 * site works out of the box without a Sanity project configured yet.
 */
function isSanityConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "your-project-id"
  );
}

async function fetchSanity<T>(query: string, params?: Record<string, string>): Promise<T[]> {
  try {
    return await sanityClient.fetch<T[]>(query, params ?? {});
  } catch {
    return [];
  }
}

// ─── Treatments ─────────────────────────────────────────────
export async function getTreatments(): Promise<Treatment[]> {
  if (!isSanityConfigured()) return TREATMENTS;
  const data = await fetchSanity<Treatment>(treatmentsQuery);
  return data.length ? data : TREATMENTS;
}

export async function getFeaturedTreatments(): Promise<Treatment[]> {
  if (!isSanityConfigured()) return TREATMENTS.filter((t) => t.isFeatured).slice(0, 3);
  const data = await fetchSanity<Treatment>(featuredTreatmentsQuery);
  return data.length ? data : TREATMENTS.filter((t) => t.isFeatured).slice(0, 3);
}

export async function getTreatmentBySlug(slug: string): Promise<Treatment | null> {
  if (!isSanityConfigured()) return TREATMENTS.find((t) => t.slug === slug) ?? null;
  try {
    const data = await sanityClient.fetch<Treatment>(treatmentBySlugQuery, { slug });
    return data ?? TREATMENTS.find((t) => t.slug === slug) ?? null;
  } catch {
    return TREATMENTS.find((t) => t.slug === slug) ?? null;
  }
}

// ─── Products ────────────────────────────────────────────────
export async function getProducts(): Promise<Product[]> {
  if (!isSanityConfigured()) return PRODUCTS;
  const data = await fetchSanity<Product>(productsQuery);
  return data.length ? data : PRODUCTS;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (!isSanityConfigured()) return PRODUCTS.find((p) => p.slug === slug) ?? null;
  try {
    const data = await sanityClient.fetch<Product>(productBySlugQuery, { slug });
    return data ?? PRODUCTS.find((p) => p.slug === slug) ?? null;
  } catch {
    return PRODUCTS.find((p) => p.slug === slug) ?? null;
  }
}

// ─── Doctors ─────────────────────────────────────────────────
export async function getDoctors(): Promise<Doctor[]> {
  if (!isSanityConfigured()) return DOCTORS;
  const data = await fetchSanity<Doctor>(doctorsQuery);
  return data.length ? data : DOCTORS;
}

// ─── Articles ────────────────────────────────────────────────
export async function getArticles(): Promise<Article[]> {
  if (!isSanityConfigured()) return ARTICLES;
  const data = await fetchSanity<Article>(articlesQuery);
  return data.length ? data : ARTICLES;
}

export async function getLatestArticles(): Promise<Article[]> {
  if (!isSanityConfigured()) return ARTICLES.slice(0, 3);
  const data = await fetchSanity<Article>(latestArticlesQuery);
  return data.length ? data : ARTICLES.slice(0, 3);
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  if (!isSanityConfigured()) return ARTICLES.find((a) => a.slug === slug) ?? null;
  try {
    const data = await sanityClient.fetch<Article>(articleBySlugQuery, { slug });
    return data ?? ARTICLES.find((a) => a.slug === slug) ?? null;
  } catch {
    return ARTICLES.find((a) => a.slug === slug) ?? null;
  }
}

// ─── Testimonials ────────────────────────────────────────────
export async function getTestimonials(): Promise<Testimonial[]> {
  if (!isSanityConfigured()) return TESTIMONIALS;
  const data = await fetchSanity<Testimonial>(testimonialsQuery);
  return data.length ? data : TESTIMONIALS;
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  if (!isSanityConfigured()) return TESTIMONIALS.slice(0, 6);
  const data = await fetchSanity<Testimonial>(featuredTestimonialsQuery);
  return data.length ? data : TESTIMONIALS.slice(0, 6);
}

// ─── Promos ──────────────────────────────────────────────────
export async function getPromos(): Promise<Promo[]> {
  if (!isSanityConfigured()) return PROMOS;
  const data = await fetchSanity<Promo>(promosQuery);
  return data.length ? data : PROMOS;
}

export async function getFlashSalePromo(): Promise<Promo | null> {
  if (!isSanityConfigured()) return PROMOS.find((p) => p.isFlashSale) ?? null;
  try {
    const data = await sanityClient.fetch<Promo>(flashSalePromoQuery);
    return data ?? PROMOS.find((p) => p.isFlashSale) ?? null;
  } catch {
    return PROMOS.find((p) => p.isFlashSale) ?? null;
  }
}

// ─── FAQs ────────────────────────────────────────────────────
export async function getFAQs(): Promise<FAQ[]> {
  if (!isSanityConfigured()) return FAQS;
  const data = await fetchSanity<FAQ>(faqsQuery);
  return data.length ? data : FAQS;
}

// ─── Branches ────────────────────────────────────────────────
export async function getBranches(): Promise<Branch[]> {
  if (!isSanityConfigured()) return BRANCHES;
  const data = await fetchSanity<Branch>(branchesQuery);
  return data.length ? data : BRANCHES;
}
