import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri Melval Labskin",
  description:
    "Lihat foto klinik, proses treatment, produk skincare, dan tim dokter Melval Labskin. Temukan suasana nyaman dan profesional klinik kecantikan kami.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
