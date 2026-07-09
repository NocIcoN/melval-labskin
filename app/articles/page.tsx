import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ArticleCard from "@/components/features/ArticleCard";
import { ARTICLES } from "@/constants";

export const metadata: Metadata = {
  title: "Artikel & Beauty Hack",
  description:
    "Baca tips kecantikan, edukasi skincare, dan informasi treatment terbaru dari tim dokter Melval Labskin.",
  alternates: { canonical: "/articles" },
};

const CATEGORIES = ["Semua", "Beauty Hack", "Skincare Tips", "Body Treatment", "Beauty Science"];

export default function ArticlesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-luxury pb-12 pt-32 sm:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Beauty Hack"
            title="Tips & Edukasi Kecantikan"
            description="Artikel terpercaya dari tim medis Melval Labskin seputar perawatan kulit, treatment, dan gaya hidup sehat yang ditulis oleh dokter profesional."
          />
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-section-sm sm:py-section">
        <div className="mx-auto max-w-7xl px-6">
          {ARTICLES.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-inter text-brand-gray">Belum ada artikel yang tersedia.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ARTICLES.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
