import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, ImageOff } from "lucide-react";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import Badge from "@/components/ui/Badge";
import ArticleCard from "@/components/features/ArticleCard";
import CTASection from "@/components/sections/CTASection";
import { getArticleBySlug, getArticles } from "@/lib/sanity/fetchers";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/articles/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.coverImage ? [{ url: article.coverImage }] : [],
    },
  };
}

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="font-inter text-base leading-relaxed text-brand-gray">{children}</p>
    ),
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="mt-8 mb-3 font-playfair text-3xl text-brand-black">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="mt-8 mb-3 font-playfair text-2xl text-brand-black">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="mt-6 mb-2 font-playfair text-xl text-brand-black">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="mt-5 mb-2 font-playfair text-lg text-brand-black">{children}</h4>
    ),
    h5: ({ children }: { children?: React.ReactNode }) => (
      <h5 className="mt-4 mb-2 font-playfair text-base text-brand-black">{children}</h5>
    ),
    h6: ({ children }: { children?: React.ReactNode }) => (
      <h6 className="mt-4 mb-2 font-playfair text-sm text-brand-black">{children}</h6>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="my-6 border-l-4 border-coral pl-5 font-inter italic text-brand-gray">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-brand-black">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    underline: ({ children }: { children?: React.ReactNode }) => (
      <span className="underline">{children}</span>
    ),
    link: ({ value, children }: { value?: { href?: string }; children?: React.ReactNode }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-coral underline hover:text-coral-dark"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="ml-4 list-disc space-y-2 font-inter text-base text-brand-gray">
        {children}
      </ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="ml-4 list-decimal space-y-2 font-inter text-base text-brand-gray">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => <li>{children}</li>,
    number: ({ children }: { children?: React.ReactNode }) => <li>{children}</li>,
  },
  types: {
    image: ({ value }: { value: { asset?: { url?: string }; alt?: string } }) => {
      if (!value?.asset?.url) return null;
      return (
        <div className="my-8 overflow-hidden rounded-brand-lg shadow-card">
          <Image
            src={value.asset.url}
            alt={value.alt ?? "Gambar artikel"}
            width={800}
            height={500}
            className="w-full object-cover"
          />
          {value.alt && (
            <p className="bg-brand-gray-light px-4 py-2 text-center font-inter text-xs text-brand-gray">
              {value.alt}
            </p>
          )}
        </div>
      );
    },
  },
};

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const allArticles = await getArticles();
  const related = allArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const body = (article as any).body;

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

          {article.category && <Badge variant="dark">{article.category}</Badge>}

          <h1 className="mt-4 font-playfair text-display-sm text-brand-black sm:text-display-md">
            {article.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-5 font-inter text-sm text-brand-gray">
            {article.author && (
              <span className="flex items-center gap-1.5">
                <User size={14} />
                {article.author}
              </span>
            )}
            {article.publishedAt && (
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {formatDate(article.publishedAt)}
              </span>
            )}
            {article.readingTime && (
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {article.readingTime} menit baca
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Cover image */}
      {article.coverImage ? (
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
      ) : (
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex aspect-[16/9] items-center justify-center rounded-brand-xl bg-cream-200">
            <ImageOff size={40} className="text-brand-gray/30" />
          </div>
        </div>
      )}

      {/* Article body */}
      <article className="mx-auto max-w-3xl px-6 py-12">
        {article.excerpt && (
          <p className="font-inter text-lg font-medium leading-relaxed text-brand-black">
            {article.excerpt}
          </p>
        )}

        {body ? (
          <div className="mt-8 space-y-5">
            <PortableText value={body} components={portableTextComponents} />
          </div>
        ) : (
          <div className="mt-8 rounded-brand-lg bg-cream p-6 text-center">
            <p className="font-inter text-sm text-brand-gray">
              Konten artikel sedang disiapkan.
            </p>
          </div>
        )}

        {article.tags && article.tags.length > 0 && (
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