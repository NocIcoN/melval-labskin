import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShoppingBag } from "lucide-react";
import Badge from "@/components/ui/Badge";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/features/ProductCard";
import CTASection from "@/components/sections/CTASection";
import { PRODUCTS } from "@/constants";
import { formatCurrency, buildWhatsAppLink } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/products/${slug}` },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const waMessage = `Halo Melval Labskin, saya ingin tahu lebih lanjut tentang produk ${product.name}.`;

  return (
    <>
      {/* Breadcrumb */}
      <section className="border-b border-brand-border bg-cream pt-28 sm:pt-36">
        <div className="mx-auto max-w-7xl px-6 pb-4">
          <div className="flex items-center gap-2 font-inter text-sm text-brand-gray">
            <Link href="/" className="hover:text-coral">Beranda</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-coral">Produk</Link>
            <span>/</span>
            <span className="text-brand-black">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Detail hero */}
      <section className="bg-cream py-10 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-brand-xl bg-cream-200 shadow-luxury">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover p-8"
            />
            <div className="absolute left-4 top-4 flex flex-col gap-2">
              {product.isBestSeller && <Badge variant="gold">Best Seller</Badge>}
              {product.isNew && <Badge variant="coral">New</Badge>}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <Link
              href="/products"
              className="mb-4 flex w-fit items-center gap-1.5 font-inter text-sm text-brand-gray hover:text-coral"
            >
              <ArrowLeft size={14} />
              Kembali ke Produk
            </Link>

            <span className="font-inter text-sm font-semibold uppercase tracking-wide text-copper">
              Melval Skincare
            </span>
            <h1 className="mt-2 font-playfair text-display-sm text-brand-black sm:text-display-md">
              {product.name}
            </h1>
            <p className="mt-2 font-inter text-base italic text-coral-600">
              "{product.tagline}"
            </p>
            <p className="mt-4 font-inter text-base leading-relaxed text-brand-gray">
              {product.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {product.volume && (
                <span className="rounded-full bg-white px-4 py-2 font-inter text-sm shadow-card">
                  📦 {product.volume}
                </span>
              )}
              {product.skinType?.map((s) => (
                <span key={s} className="rounded-full bg-white px-4 py-2 font-inter text-sm shadow-card">
                  🌿 {s}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-playfair text-display-xs text-coral-600">
                {formatCurrency(product.price)}
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={buildWhatsAppLink(waMessage)}
                variant="primary"
                size="lg"
                className="flex-1 justify-center"
              >
                <ShoppingBag size={18} />
                Beli via WhatsApp
              </ButtonLink>
              <ButtonLink
                href="/booking"
                variant="outline"
                size="lg"
                className="flex-1 justify-center"
              >
                Konsultasi Dulu
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-section-sm sm:py-section">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            eyebrow="Manfaat Produk"
            title="Apa yang Kamu Dapatkan"
          />
          <ul className="mt-8 space-y-4">
            {product.benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-coral" />
                <span className="font-inter text-base text-brand-black">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-cream py-section-sm sm:py-section">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Produk Lainnya"
              title="Lengkapi Rutinitas Kulitmu"
              align="left"
            />
            <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
