import type { Metadata } from "next";
import { GraduationCap, BadgeCheck, ShieldCheck } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import CTASection from "@/components/sections/CTASection";
import { DOCTORS, BRANCHES } from "@/constants";
import { buildWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tim Dokter Kami",
  description:
    "Kenali tim dokter profesional Melval Labskin. Semua dokter bersertifikat dengan spesialisasi di bidang estetika, whitening, dan body contouring.",
  alternates: { canonical: "/doctors" },
};

const TRUST_POINTS = [
  { icon: ShieldCheck, title: "Bersertifikat Resmi", desc: "Semua dokter memiliki sertifikasi resmi dari lembaga medis terpercaya." },
  { icon: GraduationCap, title: "Pendidikan Terstandar", desc: "Lulus dari universitas kedokteran terkemuka di Indonesia dan luar negeri." },
  { icon: BadgeCheck, title: "Pengalaman Bertahun-tahun", desc: "Rata-rata pengalaman 6–8 tahun di bidang estetika medis." },
];

export default function DoctorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-luxury pb-16 pt-32 sm:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Tim Medis Kami"
            title="Perawatanmu di Tangan yang Tepat"
            description="Setiap treatment di Melval Labskin dilakukan dan diawasi langsung oleh dokter bersertifikat. Kepercayaan dan keamanan kamu adalah prioritas utama kami."
          />

          {/* Trust points */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {TRUST_POINTS.map((point) => (
              <div key={point.title} className="flex items-start gap-4 rounded-brand-lg bg-white p-6 shadow-card">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-coral-50">
                  <point.icon size={22} className="text-coral" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg text-brand-black">{point.title}</h3>
                  <p className="mt-1 font-inter text-sm text-brand-gray">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors grid */}
      <section className="py-section-sm sm:py-section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {DOCTORS.map((doctor) => {
              const branch = BRANCHES.find((b) => b.id === doctor.branch);
              return (
                <div key={doctor.id} className="group rounded-brand-xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover overflow-hidden">
                  {/* Photo */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-cream-200">
                    <Image
                      src={doctor.photo}
                      alt={doctor.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h2 className="font-playfair text-2xl text-white">{doctor.name}</h2>
                      <p className="font-inter text-sm text-coral-200">{doctor.specialty}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="font-inter text-sm leading-relaxed text-brand-gray">
                      {doctor.bio}
                    </p>

                    {/* Education */}
                    <div className="mt-5">
                      <h3 className="mb-2 font-inter text-xs font-semibold uppercase tracking-wide text-brand-gray">
                        Pendidikan
                      </h3>
                      <ul className="space-y-1.5">
                        {doctor.education.map((edu, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <GraduationCap size={14} className="mt-0.5 shrink-0 text-coral" />
                            <span className="font-inter text-xs text-brand-gray">{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Certifications */}
                    <div className="mt-4">
                      <h3 className="mb-2 font-inter text-xs font-semibold uppercase tracking-wide text-brand-gray">
                        Sertifikasi
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {doctor.certifications.map((cert, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-coral-50 px-3 py-1 font-inter text-xs text-coral-700"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Branch + CTA */}
                    <div className="mt-5 flex items-center justify-between border-t border-brand-border pt-4">
                      {branch && (
                        <span className="rounded-full bg-gold-50 px-3 py-1 font-inter text-xs font-medium text-gold-700">
                          📍 {branch.city}
                        </span>
                      )}
                      <ButtonLink
                        href={buildWhatsAppLink(`Halo, saya ingin konsultasi dengan ${doctor.name}.`)}
                        variant="primary"
                        size="sm"
                      >
                        Konsultasi
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-playfair text-display-xs text-brand-black">
            Ingin Bergabung Bersama Tim Kami?
          </h2>
          <p className="mt-3 font-inter text-base text-brand-gray">
            Melval Labskin membuka peluang kemitraan bagi tenaga medis profesional
            yang memiliki passion di bidang estetika.
          </p>
          <ButtonLink
            href={buildWhatsAppLink("Halo, saya tertarik untuk bergabung sebagai tenaga medis di Melval Labskin.")}
            variant="outline"
            size="lg"
            className="mt-6"
          >
            Hubungi Kami
          </ButtonLink>
        </div>
      </section>

      <CTASection />
    </>
  );
}
