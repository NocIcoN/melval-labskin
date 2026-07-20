"use client";

import { useState } from "react";
import { Filter } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TreatmentCard from "@/components/features/TreatmentCard";
import CTASection from "@/components/sections/CTASection";
import { cn } from "@/lib/utils";
import type { Treatment, TreatmentCategory } from "@/types";

const CATEGORIES: { label: string; value: TreatmentCategory | "all" }[] = [
  { label: "Semua", value: "all" },
  { label: "Whitening", value: "whitening" },
  { label: "Slimming", value: "slimming" },
  { label: "Facial", value: "facial" },
  { label: "Body", value: "body" },
  { label: "Aesthetic", value: "aesthetic" },
];

interface Props {
  treatments: Treatment[];
}

export default function TreatmentsClient({ treatments }: Props) {
  const validTreatments = treatments.filter(
    t => t.slug
  );
  const [active, setActive] = useState<TreatmentCategory | "all">("all");

  const filtered =
    active === "all"
      ? validTreatments
      : validTreatments.filter((t) => t.category === active);

  return (
    <>
      <section className="bg-gradient-luxury pb-12 pt-32 sm:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Layanan Kami"
            title="Treatment untuk Setiap Kebutuhan Kulitmu"
            description="Setiap perawatan di Melval Labskin dirancang sesuai kondisi dan usia kulit, ditangani langsung oleh dokter bersertifikat dengan teknologi terkini."
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
              <p className="font-inter text-brand-gray">
                Tidak ada treatment di kategori ini.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((treatment) => (
                <TreatmentCard key={treatment.id} treatment={treatment} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
