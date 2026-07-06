import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MESSAGE } from "@/constants";

/**
 * Merge Tailwind classes safely, resolving conflicts (e.g. px-2 vs px-4).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a number as Indonesian Rupiah currency.
 * e.g. 500000 -> "Rp500.000"
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Format an ISO date string into a readable Indonesian date.
 * e.g. "2024-06-10" -> "10 Juni 2024"
 */
export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

/**
 * Build a wa.me deep link with an optional custom message.
 * Falls back to the global default consultation message.
 */
export function buildWhatsAppLink(message?: string, phone: string = WHATSAPP_NUMBER): string {
  const text = encodeURIComponent(message ?? WHATSAPP_DEFAULT_MESSAGE);
  return `https://wa.me/${phone}?text=${text}`;
}

/**
 * Calculate discount percentage between two prices.
 */
export function calculateDiscount(original: number, discounted: number): number {
  if (original <= 0) return 0;
  return Math.round(((original - discounted) / original) * 100);
}

/**
 * Truncate text to a max length, breaking on word boundaries.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  const trimmed = text.slice(0, maxLength);
  return trimmed.slice(0, trimmed.lastIndexOf(" ")) + "…";
}

/**
 * Generate a URL-friendly slug from a string.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Returns remaining time components until a target ISO date.
 * Used by the promo countdown feature. Returns null if expired.
 */
export function getCountdown(targetDate: string) {
  const total = new Date(targetDate).getTime() - Date.now();
  if (total <= 0) return null;

  return {
    total,
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / 1000 / 60) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}
