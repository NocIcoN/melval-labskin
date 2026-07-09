import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import AccordionItem from "@/components/ui/AccordionItem";
import ButtonLink from "@/components/ui/ButtonLink";
import { FAQS } from "@/constants";
import { buildWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "FAQ — Pertanyaan yang Sering Ditanyakan",
  description:
    "Temukan jawaban atas pertanyaan umum seputar treatment, produk, keamanan, dan layanan Melval Labskin.",
  alternates: { canonical: "/faq" },
};

const GROUPED = FAQS.reduce<Record<string, typeof FAQS>>((acc, faq) => {
  const cat = faq.category ?? "Umum";
  if (!acc[cat]) acc[cat] = [];
  acc[cat].push(faq);
  return acc;
}, {});

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-luxury pb-12 pt-32 sm:pt-40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-coral">
            FAQ
          </span>
          <h1 className="mt-4 font-playfair text-display-md text-brand-black sm:text-display-lg">
            Pertanyaan yang Sering Ditanyakan
          </h1>
          <p className="mt-4 font-inter text-lg text-brand-gray">
            Punya pertanyaan sebelum memulai? Kami jawab di sini. Tidak menemukan
            yang kamu cari? Langsung chat dengan tim kami.
          </p>
        </div>
      </section>

      {/* FAQ grouped by category */}
      <section className="py-section-sm sm:py-section">
        <div className="mx-auto max-w-3xl px-6 space-y-10">
          {Object.entries(GROUPED).map(([category, items]) => (
            <div key={category}>
              <h2 className="mb-4 font-playfair text-xl text-coral">{category}</h2>
              <div className="rounded-brand-lg bg-white px-6 shadow-card sm:px-8">
                {items.map((faq, i) => (
                  <AccordionItem
                    key={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                    defaultOpen={i === 0 && category === Object.keys(GROUPED)[0]}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-playfair text-display-xs text-brand-black">
            Masih Ada Pertanyaan?
          </h2>
          <p className="mt-3 font-inter text-base text-brand-gray">
            Tim kami siap menjawab pertanyaan apapun seputar treatment, produk,
            atau layanan Melval Labskin.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink
              href={buildWhatsAppLink("Halo, saya punya pertanyaan tentang treatment di Melval Labskin.")}
              variant="whatsapp"
              size="lg"
            >
              Chat via WhatsApp
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline" size="lg">
              Halaman Kontak
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
