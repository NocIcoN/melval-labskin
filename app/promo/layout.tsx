import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promo & Penawaran Spesial",
  description:
    "Dapatkan promo terbatas Melval Labskin: flash sale infus whitening, paket slimming, dan diskon treatment. Segera manfaatkan sebelum kehabisan!",
  alternates: { canonical: "/promo" },
};

export default function PromoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
