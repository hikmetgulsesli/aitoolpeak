import { ArticleCard } from "../article/ArticleCard.js";
import type { ArticleMeta } from "../../lib/types.js";

interface FeaturedArticlesProps {
  articles: ArticleMeta[];
}

export function FeaturedArticles({ articles }: FeaturedArticlesProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="featured-articles">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Articles</h2>
          <p className="section-subtitle">Hand-picked reviews and comparisons</p>
        </div>
        <div className="featured-grid">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
