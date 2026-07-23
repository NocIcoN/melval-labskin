import type { Metadata } from "next";
import { getGalleryItems } from "@/lib/sanity/fetchers";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Galeri Melval Labskin",
  description:
    "Lihat foto klinik, proses treatment, produk skincare, dan tim dokter Melval Labskin. Temukan suasana nyaman dan profesional klinik kecantikan kami.",
  alternates: { canonical: "/gallery" },
};

export default async function GalleryPage() {
  const items = await getGalleryItems();
  return <GalleryClient items={items} />;
}