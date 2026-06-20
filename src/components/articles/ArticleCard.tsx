import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/types";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("he-IL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="bg-surface border border-border flex flex-col h-full group hover:border-accent/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Article image or placeholder */}
      <div className="relative h-40 border-b border-border overflow-hidden bg-border">
        {article.image && (
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        {article.category && (
          <span className="text-accent text-xs font-semibold uppercase tracking-wide mb-3">
            {article.category}
          </span>
        )}

        <h3 className="text-white font-bold text-xl leading-tight mb-3 group-hover:text-accent transition-colors">
          <Link href={`/articles/${article.slug}`}>{article.title}</Link>
        </h3>

        <p className="text-muted text-sm leading-relaxed flex-1 mb-4">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <time className="text-muted text-xs">{formatDate(article.date)}</time>
          <Link
            href={`/articles/${article.slug}`}
            className="text-accent text-sm font-semibold hover:text-accent-light transition-colors"
          >
            קראו עוד ←
          </Link>
        </div>
      </div>
    </article>
  );
}
