"use client";

import { useState } from "react";
import { Filter } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/features/ProductCard";
import CTASection from "@/components/sections/CTASection";
import { cn } from "@/lib/utils";
import type { Product, ProductCategory } from "@/types";

const CATEGORIES: { label: string; value: ProductCategory | "all" }[] = [
  { label: "Semua", value: "all" },
  { label: "Serum", value: "serum" },
  { label: "Cleanser", value: "cleanser" },
  { label: "Toner", value: "toner" },
  { label: "Moisturizer", value: "moisturizer" },
  { label: "Sunscreen", value: "sunscreen" },
  { label: "Mask", value: "mask" },
];

interface Props {
  products: Product[];
}

function ProductsClient({ products }: Props) {
  const [active, setActive] = useState<ProductCategory | "all">("all");

  const filtered =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <section className="bg-gradient-luxury pb-12 pt-32 sm:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Melval Skincare"
            title="Rawat Kulitmu Setiap Hari"
            description="Lini produk skincare yang diformulasikan oleh tim dokter Melval Labskin untuk melengkapi hasil treatment dan mendukung perawatan mandiri di rumah."
          />
        </div>
      </section>

      <section className="sticky top-[72px] z-30 border-b border-brand-border bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
            <Filter size={16} className="shrink-0 text-brand-gray" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className={cn(
                  "shrink-0 rounded-full px-5 py-2 font-inter text-sm font-medium transition-all duration-200",
                  active === cat.value
                    ? "bg-coral text-white shadow-brand-sm"
                    : "bg-brand-gray-light text-brand-gray hover:bg-coral/10 hover:text-coral"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-sm sm:py-section">
        <div className="mx-auto max-w-7xl px-6">
          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-inter text-brand-gray">Tidak ada produk di kategori ini.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { icon: "🧪", title: "Dermatologist Formulated", desc: "Diformulasikan oleh tim dokter Melval" },
              { icon: "✅", title: "Clinically Tested", desc: "Teruji secara klinis dan aman digunakan" },
              { icon: "🌿", title: "Skin-Friendly", desc: "Cocok untuk semua jenis kulit" },
              { icon: "♻️", title: "Sustainable", desc: "Pilihan yang baik untuk kulit dan lingkungan" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-2 font-playfair text-base text-brand-black">{item.title}</h3>
                <p className="mt-1 font-inter text-xs text-brand-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

// Re-export dengan nama yang sama agar layout.tsx tetap bekerja
export default ProductsClient;
