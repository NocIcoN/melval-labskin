import SectionHeading from "@/components/ui/SectionHeading";
import BeforeAfterSlider from "@/components/features/BeforeAfterSlider";
import { TESTIMONIALS } from "@/constants";

/**
 * Showcases real transformation results to support the
 * "Showcase before-after results" business goal.
 * Pulls testimonials that have before/after image pairs.
 */
export default function BeforeAfterSection() {
  const withImages = TESTIMONIALS.filter((t) => t.beforeImage && t.afterImage).slice(0, 2);

  if (withImages.length === 0) return null;

  return (
    <section className="bg-gradient-cream py-section-sm sm:py-section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Bukti Nyata"
          title="Transformasi yang Bisa Kamu Lihat Sendiri"
          description="Geser untuk melihat perbandingan sebelum dan sesudah perawatan dari pelanggan kami."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
          {withImages.map((t) => (
            <div key={t.id}>
              <BeforeAfterSlider
                beforeImage={t.beforeImage!}
                afterImage={t.afterImage!}
              />
              <div className="mt-4 text-center">
                <p className="font-playfair text-lg text-brand-black">{t.name}</p>
                <p className="font-inter text-sm text-brand-gray">{t.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
