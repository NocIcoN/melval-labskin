import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Clock, CheckCircle2, Users, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import TreatmentCard from "@/components/features/TreatmentCard";
import CTASection from "@/components/sections/CTASection";
import { TREATMENTS } from "@/constants";
import { formatCurrency, buildWhatsAppLink } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TREATMENTS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = TREATMENTS.find((t) => t.slug === slug);
  if (!treatment) return {};
  return {
    title: treatment.name,
    description: treatment.description,
    alternates: { canonical: `/treatments/${slug}` },
  };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const treatment = TREATMENTS.find((t) => t.slug === slug);
  if (!treatment) notFound();

  const related = TREATMENTS.filter(
    (t) => t.category === treatment.category && t.id !== treatment.id
  ).slice(0, 3);

  const waMessage = `Halo Melval Labskin, saya ingin konsultasi mengenai treatment ${treatment.name}.`;

  return (
    <>
      {/* Breadcrumb */}
      <section className="border-b border-brand-border bg-cream pt-28 sm:pt-36">
        <div className="mx-auto max-w-7xl px-6 pb-4">
          <div className="flex items-center gap-2 font-inter text-sm text-brand-gray">
            <Link href="/" className="hover:text-coral">Beranda</Link>
            <span>/</span>
            <Link href="/treatments" className="hover:text-coral">Treatment</Link>
            <span>/</span>
            <span className="text-brand-black">{treatment.name}</span>
          </div>
        </div>
      </section>

      {/* Hero Detail */}
      <section className="bg-cream py-10 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-brand-xl shadow-luxury">
            <Image
              src={treatment.image}
              alt={treatment.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {treatment.isBestSeller && (
              <Badge variant="gold" className="absolute left-4 top-4">
                Best Seller
              </Badge>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <Link
              href="/treatments"
              className="mb-4 flex w-fit items-center gap-1.5 font-inter text-sm text-brand-gray hover:text-coral"
            >
              <ArrowLeft size={14} />
              Kembali ke Treatment
            </Link>

            {treatment.targetAge && (
              <span className="font-inter text-sm font-semibold uppercase tracking-wide text-copper">
                {treatment.targetAge}
              </span>
            )}

            <h1 className="mt-2 font-playfair text-display-sm text-brand-black sm:text-display-md">
              {treatment.name}
            </h1>
            <p className="mt-3 font-inter text-lg text-coral-600 italic">
              "{treatment.tagline}"
            </p>
            <p className="mt-4 font-inter text-base leading-relaxed text-brand-gray">
              {treatment.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-card">
                <Clock size={16} className="text-coral" />
                <span className="font-inter text-sm text-brand-black">{treatment.duration}</span>
              </div>
              {treatment.targetAge && (
                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-card">
                  <Users size={16} className="text-coral" />
                  <span className="font-inter text-sm text-brand-black">{treatment.targetAge}</span>
                </div>
              )}
            </div>

            {/* Packages */}
            <div className="mt-8">
              <h3 className="font-playfair text-xl text-brand-black">Paket & Harga</h3>
              <div className="mt-3 space-y-3">
                {treatment.packages.map((pkg, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-brand border border-brand-border bg-white px-5 py-4"
                  >
                    <span className="font-inter text-sm font-medium text-brand-black">
                      {pkg.name}
                    </span>
                    <span className="font-playfair text-lg font-semibold text-coral-600">
                      {formatCurrency(pkg.price)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/booking" variant="primary" size="lg" className="flex-1 justify-center">
                Booking Sekarang
              </ButtonLink>
              <ButtonLink
                href={buildWhatsAppLink(waMessage)}
                variant="whatsapp"
                size="lg"
                className="flex-1 justify-center"
              >
                Tanya via WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Ingredients */}
      <section className="py-section-sm sm:py-section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Benefits */}
            <div>
              <h2 className="font-playfair text-display-xs text-brand-black">
                Manfaat Treatment
              </h2>
              <ul className="mt-6 space-y-3">
                {treatment.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-coral" />
                    <span className="font-inter text-base text-brand-black">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ingredients */}
            {treatment.ingredients && treatment.ingredients.length > 0 && (
              <div>
                <h2 className="font-playfair text-display-xs text-brand-black">
                  Kandungan Aktif
                </h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {treatment.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-coral/30 bg-coral-50 px-4 py-2 font-inter text-sm font-medium text-coral-700"
                    >
                      {ing}
                    </span>
                  ))}
                </div>

                {/* Trust note */}
                <div className="mt-8 rounded-brand-lg bg-cream p-6">
                  <p className="font-inter text-sm leading-relaxed text-brand-gray">
                    Seluruh kandungan yang digunakan telah melalui uji klinis dan
                    diawasi langsung oleh dokter profesional bersertifikat Melval
                    Labskin. Keamanan dan kenyamanan pasien adalah prioritas utama kami.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Treatments */}
      {related.length > 0 && (
        <section className="bg-cream py-section-sm sm:py-section">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Treatment Lainnya"
              title="Mungkin Kamu Juga Tertarik"
              align="left"
            />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <TreatmentCard key={t.id} treatment={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
