import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionContainer from "@/components/ui/SectionContainer";
import ArticleCard from "@/components/articles/ArticleCard";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "מאמרים | מועצת הג'אז הישראלי",
  description: "עדכונים, מאמרים וידיעות מעולם הג'אז הישראלי.",
};

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        title="מאמרים ועדכונים"
        subtitle="חדשות, ראיונות, ניתוחים ועדכונים מעולם הג'אז הישראלי"
      />

      <SectionContainer className="bg-base">
        {/* TODO: replace articles array with CMS / Notion / API call when ready */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
