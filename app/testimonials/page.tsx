import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/features/TestimonialCard";
import BeforeAfterSlider from "@/components/features/BeforeAfterSlider";
import ButtonLink from "@/components/ui/ButtonLink";
import CTASection from "@/components/sections/CTASection";
import { getTestimonials } from "@/lib/sanity/fetchers";
import { STATS } from "@/constants";
import { buildWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Testimoni Pelanggan",
  description: "Lihat hasil nyata dan cerita transformasi lebih dari 100.000 pelanggan Melval Labskin.",
  alternates: { canonical: "/testimonials" },
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();
  const withBeforeAfter = testimonials.filter((t) => t.beforeImage && t.afterImage).slice(0, 2);

  return (
    <>
      <section className="bg-gradient-luxury pb-16 pt-32 sm:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Proof of Trust" title="Hasil Nyata dari Pelanggan Kami" description="Lebih dari 100.000 pelanggan telah merasakan transformasi bersama Melval Labskin." />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-brand-lg bg-white p-6 text-center shadow-card">
                <p className="font-playfair text-display-xs text-coral">{stat.value}{stat.suffix}</p>
                <p className="mt-1 font-inter text-xs text-brand-gray">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {withBeforeAfter.length > 0 && (
        <section className="py-section-sm sm:py-section">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading eyebrow="Before & After" title="Transformasi yang Bisa Kamu Lihat Sendiri" description="Geser gambar untuk melihat perbandingan sebelum dan sesudah perawatan." />
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
              {withBeforeAfter.map((t) => (
                <div key={t.id}>
                  <BeforeAfterSlider beforeImage={t.beforeImage!} afterImage={t.afterImage!} />
                  <div className="mt-4 text-center">
                    <p className="font-playfair text-lg text-brand-black">{t.name}</p>
                    <p className="font-inter text-sm text-brand-gray">{t.treatment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-cream py-section-sm sm:py-section">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Ulasan Pelanggan" title="Apa Kata Mereka" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-playfair text-display-xs text-brand-black">Sudah Merasakan Manfaatnya?</h2>
          <p className="mt-3 font-inter text-base text-brand-gray">Ceritakan pengalamanmu bersama Melval Labskin.</p>
          <ButtonLink href={buildWhatsAppLink("Halo, saya ingin berbagi testimoni pengalaman saya di Melval Labskin.")} variant="primary" size="lg" className="mt-6">
            Bagikan Ceritamu
          </ButtonLink>
        </div>
      </section>
      <CTASection />
    </>
  );
}
