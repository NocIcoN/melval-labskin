import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import Badge from "@/components/ui/Badge";
import ArticleCard from "@/components/features/ArticleCard";
import CTASection from "@/components/sections/CTASection";
import { ARTICLES } from "@/constants";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/articles/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.coverImage }],
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = ARTICLES.filter(
    (a) => a.category === article.category && a.id !== article.id
  ).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <section className="border-b border-brand-border bg-cream pt-28 sm:pt-36">
        <div className="mx-auto max-w-4xl px-6 pb-4">
          <div className="flex items-center gap-2 font-inter text-sm text-brand-gray">
            <Link href="/" className="hover:text-coral">Beranda</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-coral">Artikel</Link>
            <span>/</span>
            <span className="line-clamp-1 text-brand-black">{article.title}</span>
          </div>
        </div>
      </section>

      {/* Article hero */}
      <section className="bg-cream py-10 sm:py-14">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/articles"
            className="mb-6 flex w-fit items-center gap-1.5 font-inter text-sm text-brand-gray hover:text-coral"
          >
            <ArrowLeft size={14} />
            Kembali ke Artikel
          </Link>

          <Badge variant="dark">{article.category}</Badge>
          <h1 className="mt-4 font-playfair text-display-sm text-brand-black sm:text-display-md">
            {article.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-5 font-inter text-sm text-brand-gray">
            <span className="flex items-center gap-1.5">
              <User size={14} />
              {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {formatDate(article.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {article.readingTime} menit baca
            </span>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-brand-xl shadow-luxury">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Article body */}
      <article className="mx-auto max-w-3xl px-6 py-12">
        {/* Excerpt as lead paragraph */}
        <p className="font-inter text-lg font-medium leading-relaxed text-brand-black">
          {article.excerpt}
        </p>

        {/* Dummy body content - replace with CMS content later */}
        <div className="prose-melval mt-8 space-y-6 font-inter text-base leading-relaxed text-brand-gray">
          <p>
            Perawatan kulit yang tepat dimulai dari pemahaman mendalam tentang kebutuhan
            kulit kamu. Setiap orang memiliki jenis kulit yang berbeda, dan pendekatan
            yang personal adalah kunci untuk mendapatkan hasil yang optimal.
          </p>
          <p>
            Di Melval Labskin, kami percaya bahwa setiap treatment harus disesuaikan
            dengan kondisi kulit, usia, dan tujuan kecantikan masing-masing pelanggan.
            Itulah mengapa setiap sesi dimulai dengan konsultasi mendalam bersama dokter.
          </p>

          <h2 className="font-playfair text-2xl text-brand-black">
            Mengapa Konsultasi Itu Penting?
          </h2>
          <p>
            Konsultasi bukan sekadar formalitas. Ini adalah saat di mana dokter kami
            benar-benar memahami kondisi kulit kamu, riwayat perawatan sebelumnya,
            dan apa yang ingin kamu capai. Dari sini, kami bisa merancang program
            perawatan yang paling tepat dan efektif untuk kamu.
          </p>
          <p>
            Banyak pelanggan yang datang ke klinik kami sudah pernah mencoba berbagai
            produk dan treatment di tempat lain tanpa hasil yang memuaskan. Setelah
            menjalani konsultasi dan program yang tepat di Melval Labskin, mereka
            akhirnya mendapatkan perubahan yang selama ini mereka inginkan.
          </p>

          <h2 className="font-playfair text-2xl text-brand-black">
            Tips Merawat Kulit Setelah Treatment
          </h2>
          <p>
            Setelah menjalani treatment di klinik, perawatan mandiri di rumah sangat
            menentukan seberapa lama dan maksimal hasilnya bertahan. Beberapa hal
            penting yang perlu diperhatikan:
          </p>
          <ul className="ml-4 space-y-2 list-disc">
            <li>Gunakan sunscreen setiap hari, bahkan saat di dalam ruangan</li>
            <li>Jaga hidrasi kulit dengan moisturizer yang sesuai jenis kulit</li>
            <li>Hindari paparan sinar matahari langsung terutama di jam 10.00–14.00</li>
            <li>Ikuti rekomendasi produk skincare dari dokter yang menanganimu</li>
            <li>Lakukan treatment follow-up sesuai jadwal yang disarankan</li>
          </ul>
        </div>

        {/* Tags */}
        {article.tags && (
          <div className="mt-10 flex flex-wrap gap-2 border-t border-brand-border pt-6">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-brand-gray-light px-3 py-1 font-inter text-xs text-brand-gray"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="bg-cream py-section-sm sm:py-section">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-playfair text-display-xs text-brand-black">
              Artikel Terkait
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
