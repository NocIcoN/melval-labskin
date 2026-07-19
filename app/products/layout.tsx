import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";
import { getProducts } from "@/lib/sanity/fetchers";

export const metadata: Metadata = {
  title: "Produk Skincare",
  description:
    "Temukan lini produk skincare Melval Labskin: serum, toner, moisturizer, sunscreen, dan cleanser yang diformulasikan oleh dokter untuk merawat kulit setiap hari.",
  alternates: { canonical: "/products" },
};

export default async function ProductsPage() {
  const products = await getProducts();
  return <ProductsClient products={products} />;
}
