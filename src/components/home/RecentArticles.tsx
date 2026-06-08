import { getRecentArticles } from "@/data/articles";
import ArticleCard from "@/components/articles/ArticleCard";
import Button from "@/components/ui/Button";
import SectionContainer from "@/components/ui/SectionContainer";

export default function RecentArticles() {
  const articles = getRecentArticles(3);

  return (
    <SectionContainer className="bg-surface" id="articles">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <div className="w-10 h-1 bg-accent mb-5" />
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            עדכונים ומאמרים
          </h2>
        </div>
        <Button href="/articles" variant="secondary">
          כל המאמרים
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </SectionContainer>
  );
}
