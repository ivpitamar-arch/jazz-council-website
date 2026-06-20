import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticleBySlug } from "@/data/articles";

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(
  props: PageProps<"/articles/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | מועצת הג'אז הישראלי`,
    description: article.excerpt,
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("he-IL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlePage(props: PageProps<"/articles/[slug]">) {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-base min-h-screen">
      {/* Article hero */}
      <div className="bg-gradient-to-b from-primary-dark to-primary py-20">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-white/70 hover:text-accent text-sm mb-8 transition-colors"
          >
            → חזרה למאמרים
          </Link>
          {article.category && (
            <div className="text-accent text-sm font-semibold uppercase tracking-wide mb-4">
              {article.category}
            </div>
          )}
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
            {article.title}
          </h1>
          <time className="text-white/60 text-sm">{formatDate(article.date)}</time>
        </div>
      </div>

      {/* Article content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Excerpt */}
        <p className="text-lg text-muted leading-relaxed text-justify border-r-4 border-accent pr-6 mb-10">
          {article.excerpt}
        </p>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-dark leading-relaxed space-y-4">
          {article.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
              return (
                <h2
                  key={i}
                  className="text-xl font-bold text-white mt-8 mb-3"
                >
                  {paragraph.replace(/\*\*/g, "")}
                </h2>
              );
            }
            return (
              <p key={i} className="text-muted leading-relaxed text-justify">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-white font-semibold hover:text-accent transition-colors"
          >
            → חזרה לכל המאמרים
          </Link>
        </div>
      </div>
    </div>
  );
}
