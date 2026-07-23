/**
 * GROQ queries for all Melval Labskin content types.
 * Centralizing queries here means page components stay clean —
 * they just import the fetch function they need.
 */

// ─── Treatments ─────────────────────────────────────────────
export const treatmentsQuery = `*[_type == "treatment"] | order(order asc) {
  _id,
  "id": _id,
  name,
  "slug": slug.current,
  tagline,
  description,
  category,
  "image": image.asset->url,
  duration,
  targetAge,
  benefits,
  ingredients,
  packages,
  isBestSeller,
  isFeatured,
  order
}`;

export const featuredTreatmentsQuery = `*[_type == "treatment" && isFeatured == true] | order(order asc)[0...3] {
  _id,
  "id": _id,
  name,
  "slug": slug.current,
  tagline,
  description,
  category,
  "image": image.asset->url,
  duration,
  targetAge,
  benefits,
  packages,
  isBestSeller,
  isFeatured,
  order
}`;

export const treatmentBySlugQuery = `*[_type == "treatment" && slug.current == $slug][0] {
  _id,
  "id": _id,
  name,
  "slug": slug.current,
  tagline,
  description,
  category,
  "image": image.asset->url,
  duration,
  targetAge,
  benefits,
  ingredients,
  packages,
  isBestSeller,
  isFeatured
}`;

// ─── Products ────────────────────────────────────────────────
export const productsQuery = `*[_type == "product"] | order(_createdAt desc) {
  _id,
  "id": _id,
  name,
  "slug": slug.current,
  tagline,
  description,
  category,
  "image": image.asset->url,
  price,
  volume,
  benefits,
  skinType,
  isBestSeller,
  isNew
}`;

export const productBySlugQuery = `*[_type == "product" && slug.current == $slug][0] {
  _id,
  "id": _id,
  name,
  "slug": slug.current,
  tagline,
  description,
  category,
  "image": image.asset->url,
  price,
  volume,
  benefits,
  skinType,
  isBestSeller,
  isNew
}`;

// ─── Doctors ─────────────────────────────────────────────────
export const doctorsQuery = `*[_type == "doctor"] | order(_createdAt asc) {
  _id,
  "id": _id,
  name,
  title,
  specialty,
  "photo": photo.asset->url,
  bio,
  education,
  certifications,
  branch
}`;

// ─── Articles ────────────────────────────────────────────────
export const articlesQuery = `*[_type == "article"] | order(publishedAt desc) {
  _id,
  "id": _id,
  title,
  "slug": slug.current,
  excerpt,
  "coverImage": coverImage.asset->url,
  category,
  author,
  "publishedAt": publishedAt,
  readingTime,
  tags
}`;

export const latestArticlesQuery = `*[_type == "article"] | order(publishedAt desc)[0...3] {
  _id,
  "id": _id,
  title,
  "slug": slug.current,
  excerpt,
  "coverImage": coverImage.asset->url,
  category,
  author,
  "publishedAt": publishedAt,
  readingTime,
  tags
}`;

export const articleBySlugQuery = `*[_type == "article" && slug.current == $slug][0] {
  _id,
  "id": _id,
  title,
  "slug": slug.current,
  excerpt,
  body,
  "coverImage": coverImage.asset->url,
  category,
  author,
  "publishedAt": publishedAt,
  readingTime,
  tags
}`;

// ─── Testimonials ────────────────────────────────────────────
export const testimonialsQuery = `*[_type == "testimonial"] | order(_createdAt desc) {
  _id,
  "id": _id,
  name,
  "avatar": avatar.asset->url,
  treatment,
  rating,
  review,
  "beforeImage": beforeImage.asset->url,
  "afterImage": afterImage.asset->url,
  branch,
  date
}`;

export const featuredTestimonialsQuery = `*[_type == "testimonial" && isFeatured == true][0...6] {
  _id,
  "id": _id,
  name,
  "avatar": avatar.asset->url,
  treatment,
  rating,
  review,
  "beforeImage": beforeImage.asset->url,
  "afterImage": afterImage.asset->url,
  branch,
  date
}`;

// ─── Promos ──────────────────────────────────────────────────
export const promosQuery = `*[_type == "promo" && isActive == true] | order(_createdAt desc) {
  _id,
  "id": _id,
  title,
  subtitle,
  description,
  "image": image.asset->url,
  badge,
  originalPrice,
  discountedPrice,
  expiresAt,
  ctaLabel,
  ctaHref,
  isFlashSale,
  treatment
}`;

export const flashSalePromoQuery = `*[_type == "promo" && isFlashSale == true && isActive == true][0] {
  _id,
  "id": _id,
  title,
  subtitle,
  description,
  "image": image.asset->url,
  badge,
  originalPrice,
  discountedPrice,
  expiresAt,
  ctaLabel,
  ctaHref,
  isFlashSale,
  treatment
}`;

// ─── FAQs ────────────────────────────────────────────────────
export const faqsQuery = `*[_type == "faq"] | order(order asc) {
  _id,
  "id": _id,
  question,
  answer,
  category
}`;

// ─── Branches ────────────────────────────────────────────────
export const branchesQuery = `*[_type == "branch"] | order(_createdAt asc) {
  _id,
  id,
  name,
  address,
  city,
  phone,
  whatsapp,
  maps,
  mapsEmbed,
  "image": image.asset->url,
  operatingHours
}`;

// ─── Gallery ────────────────────────────────────────────────
export const galleryQuery = `*[_type == "gallery"] | order(order asc, _createdAt desc) {
  _id,
  "id": _id,
  "src": image.asset->url,
  alt,
  category,
  caption
}`;