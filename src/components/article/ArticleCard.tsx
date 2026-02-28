import type { ArticleMeta } from "../../lib/types.js";

interface ArticleCardProps {
  article: ArticleMeta;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article className="article-card">
      <a href={`/blog/${article.slug}`} className="article-card-link">
        <div className="article-card-content">
          <div className="article-card-meta">
            <span className="article-card-category">{article.category}</span>
            <span className="article-card-dot">&bull;</span>
            <span className="article-card-date">{formattedDate}</span>
          </div>
          <h3 className="article-card-title">{article.title}</h3>
          <p className="article-card-description">{article.description}</p>
          <div className="article-card-footer">
            <span className="article-card-readtime">{article.readTime} min read</span>
          </div>
        </div>
      </a>
    </article>
  );
}
