"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, ImageOff } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/types";

interface Props {
  items: GalleryItem[];
}

const CATEGORIES = ["Semua", "Klinik", "Treatment", "Produk", "Tim"];

export default function GalleryClient({ items }: Props) {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    activeCategory === "Semua"
      ? items
      : items.filter((g) => g.category === activeCategory);

  const activeLightboxItem = items.find((g) => g.id === lightbox);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-luxury pb-12 pt-32 sm:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Galeri"
            title="Sekilas Dunia Melval Labskin"
            description="Dari suasana klinik yang nyaman hingga proses treatment dan hasil yang nyata — lihat sendiri seperti apa pengalaman di Melval Labskin."
          />
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-[72px] z-30 border-b border-brand-border bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "shrink-0 rounded-full px-5 py-2 font-inter text-sm font-medium transition-all duration-200",
                  activeCategory === cat
                    ? "bg-coral text-white shadow-brand-sm"
                    : "bg-brand-gray-light text-brand-gray hover:bg-coral/10 hover:text-coral"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="py-section-sm sm:py-section">
        <div className="mx-auto max-w-7xl px-6">
          {items.length === 0 ? (
            // Belum ada foto di Sanity
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <ImageOff size={48} className="text-brand-border" />
              <p className="mt-4 font-playfair text-xl text-brand-black">
                Galeri Sedang Disiapkan
              </p>
              <p className="mt-2 font-inter text-sm text-brand-gray">
                Foto-foto klinik, treatment, dan tim kami akan segera hadir di sini.
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-inter text-brand-gray">
                Tidak ada foto di kategori ini.
              </p>
            </div>
          ) : (
            <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="group mb-4 cursor-pointer overflow-hidden rounded-brand-lg break-inside-avoid shadow-card transition-all duration-300 hover:shadow-card-hover"
                  onClick={() => setLightbox(item.id)}
                >
                  <div className="relative">
                    {item.src ? (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={400}
                        height={300}
                        className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-48 w-full items-center justify-center bg-cream-200">
                        <ImageOff size={24} className="text-brand-gray/40" />
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
                      <ZoomIn
                        size={28}
                        className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </div>
                    {item.category && (
                      <span className="absolute bottom-2 left-2 rounded-full bg-black/50 px-2 py-0.5 font-inter text-xs text-white">
                        {item.category}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && activeLightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={() => setLightbox(null)}
            aria-label="Tutup"
          >
            <X size={24} />
          </button>
          <div
            className="relative max-h-[90vh] max-w-4xl w-full overflow-hidden rounded-brand-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {activeLightboxItem.src && (
              <Image
                src={activeLightboxItem.src}
                alt={activeLightboxItem.alt}
                width={1200}
                height={900}
                className="h-auto w-full object-contain"
              />
            )}
            <p className="bg-black/60 px-4 py-2 font-inter text-sm text-white">
              {activeLightboxItem.caption ?? activeLightboxItem.alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
}