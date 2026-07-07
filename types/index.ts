// ============================================================
// MELVAL LABSKIN — TypeScript Type Definitions
// ============================================================

// ─── Navigation ─────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ─── Treatment ──────────────────────────────────────────────
export type TreatmentCategory =
  | "whitening"
  | "slimming"
  | "facial"
  | "body"
  | "aesthetic";

export interface TreatmentPackage {
  name: string;
  price: number;
  description?: string;
}

export interface Treatment {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: TreatmentCategory;
  image: string;
  duration: string;
  targetAge?: string;
  benefits: string[];
  ingredients?: string[];
  packages: TreatmentPackage[];
  isBestSeller?: boolean;
  isFeatured?: boolean;
  order?: number;
}

// ─── Doctor ─────────────────────────────────────────────────
export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  photo: string;
  bio: string;
  education: string[];
  certifications: string[];
  branch: BranchId;
}

// ─── Testimonial ────────────────────────────────────────────
export interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  treatment: string;
  rating: number;
  review: string;
  beforeImage?: string;
  afterImage?: string;
  branch: BranchId;
  date: string;
}

// ─── Product ────────────────────────────────────────────────
export type ProductCategory =
  | "serum"
  | "moisturizer"
  | "cleanser"
  | "sunscreen"
  | "toner"
  | "mask";

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ProductCategory;
  image: string;
  price: number;
  volume?: string;
  benefits: string[];
  skinType?: string[];
  isBestSeller?: boolean;
  isNew?: boolean;
}

// ─── Article / Blog ─────────────────────────────────────────
export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  coverImage: string;
  category: string;
  author: string;
  publishedAt: string;
  readingTime: number;
  tags?: string[];
}

// ─── Branch / Location ──────────────────────────────────────
export type BranchId = "jakarta" | "malang" | "surabaya" | "bali";

export interface Branch {
  id: BranchId;
  name: string;
  address: string;
  city: string;
  phone: string;
  whatsapp: string;
  maps: string;
  image: string;
  operatingHours: OperatingHour[];
}

export interface OperatingHour {
  days: string;
  hours: string;
}

// ─── Promo ──────────────────────────────────────────────────
export interface Promo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge?: string;
  originalPrice?: number;
  discountedPrice?: number;
  discountPercent?: number;
  expiresAt?: string;
  ctaLabel: string;
  ctaHref: string;
  isFlashSale?: boolean;
  treatment?: string;
}

// ─── FAQ ────────────────────────────────────────────────────
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// ─── Booking Form ───────────────────────────────────────────
export interface BookingFormData {
  fullName: string;
  phone: string;
  email?: string;
  branch: BranchId;
  treatment: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}

// ─── Stats / Numbers ────────────────────────────────────────
export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
  icon?: string;
}

// ─── Gallery ────────────────────────────────────────────────
export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category?: string;
  caption?: string;
}

// ─── SEO ────────────────────────────────────────────────────
export interface PageSEO {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

// ─── API Response ───────────────────────────────────────────
export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  success: boolean;
}
