import ButtonLink from "@/components/ui/ButtonLink";
import { buildWhatsAppLink } from "@/lib/utils";

/**
 * High-intent closing CTA section placed right before the footer —
 * last chance to convert a scrolling visitor into a booking.
 */
export default function CTASection() {
  return (
    <section className="py-section-sm sm:py-section">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-brand-xl bg-gradient-coral px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <h2 className="relative font-playfair text-display-sm text-white sm:text-display-md">
            Mulai Perjalanan Kulit Cerahmu Hari Ini
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl font-inter text-base text-white/85">
            Konsultasi gratis dengan dokter profesional kami. Tanpa biaya,
            tanpa komitmen — cukup ceritakan kebutuhan kulitmu.
          </p>

          <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="/booking" variant="secondary" size="lg">
              Booking Konsultasi Gratis
            </ButtonLink>
            <ButtonLink href={buildWhatsAppLink()} variant="whatsapp" size="lg">
              Chat WhatsApp Sekarang
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
