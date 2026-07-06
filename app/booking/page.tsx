import type { Metadata } from "next";
import { MapPin, Clock, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import BookingForm from "@/components/features/BookingForm";
import { BRANCHES } from "@/constants";

export const metadata: Metadata = {
  title: "Booking Konsultasi Gratis",
  description:
    "Booking konsultasi gratis dengan dokter profesional Melval Labskin. Pilih cabang, treatment, dan jadwal sesuai keinginanmu.",
  alternates: { canonical: "/booking" },
};

/**
 * Dedicated booking page — the primary conversion route linked from
 * every CTA across the site (Navbar, Hero, CTASection, Promo).
 */
export default function BookingPage() {
  return (
    <div className="bg-gradient-cream pb-section-sm pt-32 sm:pb-section sm:pt-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Booking Konsultasi"
          title="Jadwalkan Konsultasi Gratismu"
          description="Isi form di bawah ini dan tim kami akan menghubungi kamu untuk konfirmasi jadwal. Tanpa biaya, tanpa komitmen."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-brand-xl bg-white p-6 shadow-card sm:p-10">
            <BookingForm />
          </div>

          <div className="space-y-6">
            <div className="rounded-brand-lg bg-white p-6 shadow-card">
              <h3 className="font-playfair text-xl text-brand-black">Cabang Kami</h3>
              <div className="mt-4 space-y-5">
                {BRANCHES.map((branch) => (
                  <div key={branch.id} className="border-b border-brand-border pb-5 last:border-0 last:pb-0">
                    <p className="font-inter text-sm font-semibold text-brand-black">
                      {branch.name}
                    </p>
                    <div className="mt-2 flex gap-2">
                      <MapPin size={14} className="mt-0.5 shrink-0 text-gold-600" />
                      <p className="font-inter text-xs text-brand-gray">{branch.address}</p>
                    </div>
                    <div className="mt-2 flex gap-2">
                      <Clock size={14} className="mt-0.5 shrink-0 text-gold-600" />
                      <p className="font-inter text-xs text-brand-gray">
                        {branch.operatingHours[0].days}: {branch.operatingHours[0].hours}
                      </p>
                    </div>
                    <div className="mt-2 flex gap-2">
                      <Phone size={14} className="mt-0.5 shrink-0 text-gold-600" />
                      <a
                        href={`tel:${branch.phone.replace(/\s/g, "")}`}
                        className="font-inter text-xs text-brand-gray hover:text-gold-700"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-brand-lg bg-brand-black p-6 text-white">
              <h3 className="font-playfair text-lg text-gold">Butuh Respon Cepat?</h3>
              <p className="mt-2 font-inter text-sm text-white/70">
                Chat langsung dengan tim kami via WhatsApp untuk konsultasi instan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
