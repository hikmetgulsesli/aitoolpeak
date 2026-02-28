import { ArticleCard } from "../article/ArticleCard.js";
import type { ArticleMeta } from "../../lib/types.js";

interface LatestArticlesProps {
  articles: ArticleMeta[];
}

export function LatestArticles({ articles }: LatestArticlesProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="latest-articles">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Latest Articles</h2>
          <p className="section-subtitle">Fresh reviews and insights</p>
        </div>
        <div className="articles-grid">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
