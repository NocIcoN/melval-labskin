import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import TestimonialCard from "@/components/features/TestimonialCard";
import { TESTIMONIALS } from "@/constants";

/**
 * Testimonials section for the homepage — builds trust via social proof.
 */
export default function TestimonialsSection() {
  const featured = TESTIMONIALS.slice(0, 3);

  return (
    <section className="bg-cream py-section-sm sm:py-section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Apa Kata Mereka"
          title="Dipercaya Lebih dari 100.000 Pelanggan"
          description="Cerita nyata dari pelanggan yang sudah merasakan transformasi bersama Melval Labskin."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink href="/testimonials" variant="outline" size="md">
            Lihat Semua Testimoni
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
