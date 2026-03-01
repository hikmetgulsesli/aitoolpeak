import { useState } from 'react';
import type { ArticleMeta } from '../../lib/types.js';
import { CATEGORY_LABELS } from '../../lib/constants.js';

const categoryGradients: Record<string, string> = {
  'coding-assistants': 'from-blue-600 to-violet-600',
  'ai-models': 'from-violet-600 to-pink-500',
  'devops': 'from-orange-500 to-red-500',
  'web-development': 'from-emerald-500 to-cyan-500',
  'tools-comparison': 'from-amber-500 to-orange-500',
};

interface ArticleCardProps {
  article: ArticleMeta;
  showAuthor?: boolean;
}

export function ArticleCard({ article, showAuthor = true }: ArticleCardProps) {
  const [imageError, setImageError] = useState(false);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const gradient = categoryGradients[article.category] || 'from-blue-600 to-violet-600';
  const hasOgImage = article.ogImage && !imageError;

  return (
    <article className="group bg-[--bg] rounded-xl border border-[--border] overflow-hidden hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
      <a href={`/blog/${article.slug}`} className="block">
        {hasOgImage ? (
          <div className="aspect-[16/9] overflow-hidden bg-[--surface]">
            <img
              src={article.ogImage}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className={`aspect-[16/9] bg-gradient-to-br ${gradient} flex items-center justify-center p-6`}>
            <span className="text-white/90 text-sm font-medium text-center line-clamp-2">
              {article.title}
            </span>
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[--primary]/10 text-[--primary]">
              {CATEGORY_LABELS[article.category] || article.category}
            </span>
            <span className="text-xs text-[--text-secondary]">
              {article.readTime} min read
            </span>
          </div>

          <h3 className="text-lg font-semibold text-[--text] mb-2 line-clamp-2 group-hover:text-[--primary] transition-colors">
            {article.title}
          </h3>

          <p className="text-sm text-[--text-secondary] line-clamp-2 mb-4">
            {article.description}
          </p>

          {showAuthor && (
            <div className="flex items-center gap-2">
              {article.authorImage ? (
                <img
                  src={article.authorImage}
                  alt={article.author}
                  className="w-6 h-6 rounded-full object-cover"
                />
              ) : (
                <div className="w-6 h-6 rounded-full bg-[--primary]/10 flex items-center justify-center">
                  <span className="text-xs font-medium text-[--primary]">
                    {article.author.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <span className="text-xs text-[--text-secondary] truncate">
                {article.author}
              </span>
              <span className="text-xs text-[--text-secondary]">•</span>
              <span className="text-xs text-[--text-secondary]">
                {formatDate(article.date)}
              </span>
            </div>
          )}
        </div>
      </a>
    </article>
  );
}
