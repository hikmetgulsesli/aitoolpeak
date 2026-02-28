import type { ArticleMeta } from '../../lib/types.js';
import { CATEGORY_LABELS } from '../../lib/constants.js';

interface ArticleCardProps {
  article: ArticleMeta;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <article className="group bg-white rounded-xl border border-[--border] overflow-hidden hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
      <a href={`/blog/${article.slug}`} className="block">
        {article.ogImage && (
          <div className="aspect-video overflow-hidden bg-[--surface]">
            <img
              src={article.ogImage}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[--primary]/10 text-[--primary]">
              {CATEGORY_LABELS[article.category] || article.category}
            </span>
            <span className="text-xs text-[--text-muted]">
              {article.readTime} min read
            </span>
          </div>

          <h3 className="text-lg font-semibold text-[--text] mb-2 line-clamp-2 group-hover:text-[--primary] transition-colors">
            {article.title}
          </h3>

          <p className="text-sm text-[--text-muted] line-clamp-2 mb-4">
            {article.description}
          </p>

          <div className="flex items-center justify-between text-xs text-[--text-muted]">
            <span>{article.author}</span>
            <span>{formatDate(article.date)}</span>
          </div>
        </div>
      </a>
    </article>
  );
}
