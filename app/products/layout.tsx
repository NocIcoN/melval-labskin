import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produk Skincare",
  description:
    "Temukan lini produk skincare Melval Labskin: serum, toner, moisturizer, sunscreen, dan cleanser yang diformulasikan oleh dokter untuk merawat kulit setiap hari.",
  alternates: { canonical: "/products" },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
