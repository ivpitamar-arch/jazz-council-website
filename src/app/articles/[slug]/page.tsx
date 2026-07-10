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

function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-bold text-white">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}

function renderContentBlock(block: string, key: number) {
  const trimmed = block.trim();

  if (trimmed === "---") {
    return <hr key={key} className="my-8 border-border" />;
  }

  if (/^\*\*[^*]+\*\*$/.test(trimmed)) {
    return (
      <h2 key={key} className="text-xl font-bold text-white mt-8 mb-3">
        {trimmed.slice(2, -2)}
      </h2>
    );
  }

  const lines = trimmed.split("\n");
  if (lines.every((line) => line.trim().startsWith("- "))) {
    return (
      <ul key={key} className="list-disc pr-6 space-y-2">
        {lines.map((line, i) => (
          <li key={i} className="text-muted leading-relaxed">
            {renderInline(line.trim().slice(2))}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p key={key} className="text-muted leading-relaxed text-justify">
      {renderInline(trimmed)}
    </p>
  );
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
          {article.content
            .split("\n\n")
            .map((block, i) => renderContentBlock(block, i))}
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
