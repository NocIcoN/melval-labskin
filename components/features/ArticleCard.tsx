import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import type { Article } from "@/types";

export interface ArticleCardProps {
  article: Article;
}

/**
 * Blog/article preview card — used on Home (latest articles) and /articles grid.
 */
export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="group flex h-full flex-col">
      <Link href={`/articles/${article.slug}`} className="relative block aspect-[16/10] overflow-hidden">
        <Image
          src={article.coverImage || "/images/articles/default.webp"}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge variant="dark" className="absolute left-4 top-4">
          {article.category}
        </Badge>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-playfair text-lg leading-snug text-brand-black line-clamp-2">
          <Link href={`/articles/${article.slug}`} className="hover:text-gold-600">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 font-inter text-sm text-brand-gray line-clamp-2">
          {article.excerpt}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-brand-border pt-4 font-inter text-xs text-brand-gray">
          <span>{formatDate(article.publishedAt)}</span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {article.readingTime} menit baca
          </span>
        </div>
      </div>
    </Card>
  );
}
