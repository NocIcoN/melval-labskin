import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import ArticleCard from "@/components/features/ArticleCard";
import { ARTICLES } from "@/constants";

/**
 * Latest articles section for the homepage — supports SEO and
 * positions Melval as an authority (Beauty Hack content).
 */
export default function ArticlesSection() {
  const latest = ARTICLES.slice(0, 3);

  return (
    <section className="py-section-sm sm:py-section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Beauty Hack"
          title="Tips & Edukasi Seputar Kecantikan"
          description="Artikel terbaru dari tim medis Melval Labskin seputar perawatan kulit, treatment, dan gaya hidup sehat."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((article) => (
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
