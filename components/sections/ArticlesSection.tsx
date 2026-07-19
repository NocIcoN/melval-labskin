import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import ArticleCard from "@/components/features/ArticleCard";
import { getLatestArticles } from "@/lib/sanity/fetchers";

export default async function ArticlesSection() {
  const articles = await getLatestArticles();

  return (
    <section className="py-section-sm sm:py-section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Beauty Hack"
          title="Tips & Edukasi Seputar Kecantikan"
          description="Artikel terbaru dari tim medis Melval Labskin seputar perawatan kulit, treatment, dan gaya hidup sehat."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <ButtonLink href="/articles" variant="outline" size="md">
            Baca Artikel Lainnya
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
