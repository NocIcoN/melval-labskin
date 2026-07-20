import Image from "next/image";
import { Star, ShieldCheck, Sparkles } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import { buildWhatsAppLink } from "@/lib/utils";

/**
 * Homepage hero. Server Component (no interactivity needed) —
 * entrance animation is handled via CSS animation classes rather than
 * Framer Motion's client-side runtime, to keep this above-the-fold
 * section as light and fast as possible (LCP-critical).
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-luxury pb-20 pt-32 sm:pt-40">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-copper/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8">
        {/* Text content */}
        <div className="relative z-10 animate-fade-up text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/60 px-4 py-1.5 font-inter text-xs font-semibold uppercase tracking-wide text-gold-700 backdrop-blur-sm">
            <Sparkles size={14} />
            Klinik Kecantikan Terpercaya Sejak 2015
          </span>

          <h1 className="mt-6 font-playfair text-display-md leading-[1.1] text-brand-black sm:text-display-lg lg:text-display-xl">
            Cerahkan Kulit,
            <br />
            <span className="text-coral-500">Percaya Diri</span> Tanpa Batas
          </h1>

          <p className="mx-auto mt-6 max-w-md font-inter text-base leading-relaxed text-brand-gray sm:text-lg lg:mx-0">
            Infuse Whitening &amp; Slimming Treatment dengan tenaga medis
            profesional. Hasil nyata, perawatan personal, dan kenyamanan
            premium di setiap kunjungan.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start lg:justify-start justify-center">
            <ButtonLink href="/booking" variant="primary" size="lg">
              Booking Konsultasi Gratis
            </ButtonLink>
            <ButtonLink href={buildWhatsAppLink()} variant="whatsapp" size="lg">
              Chat WhatsApp
            </ButtonLink>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[1, 2, 3].map((i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="font-inter text-sm font-medium text-brand-black">
                4.9/5 dari 100K+ pelanggan
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-gold-600" />
              <span className="font-inter text-sm font-medium text-brand-black">
                Tenaga Medis Bersertifikat
              </span>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="relative z-10 animate-fade-in-slow">
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-brand-xl shadow-luxury">
            <Image
              src="/images/hero/hero.webp"
              alt="Perawatan kulit premium di Melval Labskin"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
          </div>

          {/* Floating stat card */}
          <div className="absolute -left-4 bottom-8 hidden animate-float rounded-brand-lg bg-white p-4 shadow-luxury sm:left-0 sm:block">
            <p className="font-playfair text-2xl text-gold-700">6+</p>
            <p className="font-inter text-xs text-brand-gray">Klinik di 3 Kota</p>
          </div>
        </div>
      </div>
    </section>
  );
}
