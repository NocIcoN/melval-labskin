import type { Metadata } from "next";
import { getPromos } from "@/lib/sanity/fetchers";
import PromoClient from "./PromoClient";

export const metadata: Metadata = {
  title: "Promo & Penawaran Spesial",
  description:
    "Dapatkan promo terbatas Melval Labskin: flash sale infus whitening, paket slimming, dan diskon treatment. Segera manfaatkan sebelum kehabisan!",
  alternates: { canonical: "/promo" },
};

/**
 * Server Component — fetch data promo dari Sanity,
 * lalu pass ke PromoClient (Client Component) untuk countdown timer.
 */
export default async function PromoPage() {
  const promos = await getPromos();
  return <PromoClient promos={promos} />;
}