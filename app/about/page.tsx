import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import CTASection from "@/components/sections/CTASection";
import { STATS, BRANCHES } from "@/constants";
import { buildWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Melval Labskin adalah klinik kecantikan spesialis Infuse Whitening & Slimming Treatment. Berdiri sejak 2015 dengan misi menghadirkan perawatan estetika medis yang aman, efektif, dan personal.",
  alternates: { canonical: "/about" },
};

const TIMELINE = [
  {
    year: "2015",
    title: "The Beginning",
    description: "Melval Labskin didirikan dengan visi menghadirkan perawatan kulit medis yang terjangkau namun berkualitas premium.",
  },
  {
    year: "2017",
    title: "First Clinic",
    description: "Membuka klinik pertama dan mulai melayani ratusan pelanggan di bulan pertama operasional.",
  },
  {
    year: "2019",
    title: "Ekspansi",
    description: "Berkembang ke lebih banyak lokasi seiring kepercayaan pelanggan yang terus meningkat.",
  },
  {
    year: "2021",
    title: "Melval Skincare",
    description: "Meluncurkan lini produk skincare sendiri untuk melengkapi hasil treatment dan mendukung perawatan mandiri di rumah.",
  },
  {
    year: "2024",
    title: "Continuous Growth",
    description: "Kini hadir di 3 kota besar Indonesia dengan 6+ klinik aktif dan lebih dari 100.000 pelanggan yang telah merasakan manfaatnya.",
  },
];

const PROMISES = [
  {
    title: "Visible Transformation",
    description:
      "Melval dikenal melalui hasil nyata, customer story, dan perubahan yang membuat pelanggan lebih percaya diri.",
    icon: "✨",
  },
  {
    title: "Warm Personal Care",
    description:
      "Pengalaman perawatan terasa dekat, nyaman, dan personal — bukan sekadar transaksi treatment.",
    icon: "🤝",
  },
  {
    title: "Trusted Continuity",
    description:
      "Perawatan berkesinambungan dengan follow-up dan dukungan produk skincare yang selaras dengan treatment.",
    icon: "🛡️",
  },
];

const STRENGTHS = [
  "Service Excellence — konsultasi, kenyamanan, profesionalisme, follow-up",
  "Clinical & Team Credibility — dokter, tenaga profesional, standar proses",
  "Proof of Trust — testimoni, review, milestone, customer story",
  "Support Self-care Product — lini produk untuk maintenance & repeat care",
  "Footprint & Growth Potential — 3 kota, 6+ klinik aktif",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-luxury pb-16 pt-32 sm:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-coral">
                Tentang Kami
              </span>
              <h1 className="mt-4 font-playfair text-display-md text-brand-black sm:text-display-lg">
                From Customer Trust to{" "}
                <span className="text-coral">Partnership Confidence</span>
              </h1>
              <p className="mt-6 font-inter text-lg leading-relaxed text-brand-gray">
                Melval Labskin adalah klinik kecantikan yang memposisikan diri
                sebagai mitra perawatan estetika dan lini produk self-care sesuai
                kebutuhan customer. Bukan sekadar klinik — kami adalah
                "communication anchor" kepercayaan kecantikan kamu.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="/booking" variant="primary" size="lg">
                  Konsultasi Gratis
                </ButtonLink>
                <ButtonLink href={buildWhatsAppLink()} variant="outline" size="lg">
                  Hubungi Kami
                </ButtonLink>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-brand-xl shadow-luxury">
              <Image
                src="/images/about/hero.webp"
                alt="Klinik Melval Labskin"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-brand-border bg-white py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-playfair text-display-xs text-coral sm:text-display-sm">
                {stat.value}{stat.suffix}
              </p>
              <p className="mt-1 font-inter text-xs text-brand-gray sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-section-sm sm:py-section">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Brand Promise"
            title="Tiga Pilar Janji Melval"
            description="Setiap interaksi dengan Melval Labskin dibangun di atas tiga nilai inti yang tidak pernah kami kompromikan."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {PROMISES.map((p) => (
              <div
                key={p.title}
                className="rounded-brand-lg border border-brand-border bg-white p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span className="text-4xl">{p.icon}</span>
                <h3 className="mt-4 font-playfair text-xl text-brand-black">{p.title}</h3>
                <p className="mt-3 font-inter text-sm leading-relaxed text-brand-gray">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Model */}
      <section className="bg-brand-black py-section-sm sm:py-section">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="The Melval Care Model"
            title="Perjalanan Perawatan Kamu"
            description="Setiap pelanggan melewati tiga tahap yang kami rancang untuk memastikan hasil terbaik."
            className="[&_h2]:text-white [&_span]:text-coral-300 [&_p]:text-white/60"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Discover",
                desc: "Kamu mengenal Melval lewat berbagai channel komunikasi — media sosial, Google, atau rekomendasi.",
              },
              {
                step: "02",
                title: "Eksplore",
                desc: "Kamu melihat, mencari tahu, dan bertanya soal layanan & produk yang tersedia.",
              },
              {
                step: "03",
                title: "Consult",
                desc: "Titik krusial: Melval memahami kebutuhan, memberi rekomendasi relevan, dan membangun kepercayaan.",
                highlight: true,
              },
            ].map((item) => (
              <div
                key={item.step}
                className={`rounded-brand-lg p-8 ${
                  item.highlight
                    ? "bg-gradient-coral text-white"
                    : "bg-white/10 text-white"
                }`}
              >
                <span className={`font-playfair text-4xl font-bold ${item.highlight ? "text-white/40" : "text-coral/40"}`}>
                  {item.step}
                </span>
                <h3 className="mt-3 font-playfair text-2xl">{item.title}</h3>
                <p className={`mt-3 font-inter text-sm leading-relaxed ${item.highlight ? "text-white/80" : "text-white/60"}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="py-section-sm sm:py-section">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our Story"
            title="Perjalanan Pertumbuhan Kami"
          />
          <div className="relative mt-12">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-brand-border sm:left-1/2 sm:block" />
            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col sm:flex-row sm:items-center sm:gap-8 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-coral sm:left-1/2 sm:block" />
                  {/* Content */}
                  <div className={`w-full rounded-brand-lg bg-white p-6 shadow-card sm:w-[45%] ${i % 2 !== 0 ? "sm:text-right" : ""}`}>
                    <span className="font-playfair text-2xl font-bold text-coral">{item.year}</span>
                    <h3 className="mt-1 font-playfair text-lg text-brand-black">{item.title}</h3>
                    <p className="mt-2 font-inter text-sm leading-relaxed text-brand-gray">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="bg-cream py-section-sm sm:py-section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="What Will Build Trust"
                title="5 Hal yang Membuat Kami Berbeda"
                align="left"
              />
              <ul className="mt-8 space-y-4">
                {STRENGTHS.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-coral" />
                    <span className="font-inter text-base text-brand-black">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-brand-xl shadow-luxury">
              <Image
                src="/images/about/team.webp"
                alt="Tim Melval Labskin"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="py-section-sm sm:py-section">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Lokasi Kami"
            title="Temukan Cabang Terdekat"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {BRANCHES.map((branch) => (
              <div key={branch.id} className="rounded-brand-lg border border-brand-border bg-white p-6 shadow-card">
                <h3 className="font-playfair text-xl text-brand-black">{branch.city}</h3>
                <div className="mt-3 flex gap-2">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-coral" />
                  <p className="font-inter text-sm text-brand-gray">{branch.address}</p>
                </div>
                <div className="mt-4 space-y-1">
                  {branch.operatingHours.map((h) => (
                    <p key={h.days} className="font-inter text-xs text-brand-gray">
                      {h.days}: <span className="font-medium text-brand-black">{h.hours}</span>
                    </p>
                  ))}
                </div>
                <a
                  href={branch.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 font-inter text-sm font-medium text-coral hover:underline"
                >
                  Lihat di Maps →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
