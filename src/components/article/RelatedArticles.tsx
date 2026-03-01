import { useState } from 'react';
import type { ArticleMeta } from '../../lib/types.js';
import { CATEGORY_LABELS } from '../../lib/constants.js';

interface RelatedArticlesProps {
  articles: ArticleMeta[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  
  if (articles.length === 0) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const handleImageError = (slug: string) => {
    setImageErrors((prev) => ({ ...prev, [slug]: true }));
  };

  // Get category gradient for placeholder
  const getCategoryGradient = (category: string) => {
    const gradients: Record<string, string> = {
      'coding-assistants': 'from-blue-600 to-violet-600',
      'ai-models': 'from-violet-600 to-pink-500',
      'devops': 'from-orange-500 to-red-500',
      'web-development': 'from-emerald-500 to-cyan-500',
      'tools-comparison': 'from-amber-500 to-orange-500',
    };
    return gradients[category] || 'from-blue-600 to-violet-600';
  };

  return (
    <section className="mt-16 pt-12 border-t border-[--border]">
      <h2 className="text-2xl font-bold text-[--text] mb-8">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.slice(0, 3).map((article) => {
          const hasImage = article.ogImage && !imageErrors[article.slug];
          
          return (
            <article
              key={article.slug}
              className="group bg-[--bg] rounded-xl border border-[--border] overflow-hidden hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
            >
              <a href={`/blog/${article.slug}`} className="block">
                {hasImage ? (
                  <div className="aspect-video overflow-hidden bg-[--surface]">
                    <img
                      src={article.ogImage}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={() => handleImageError(article.slug)}
                    />
                  </div>
                ) : (
                  <div className={`aspect-video bg-gradient-to-br ${getCategoryGradient(article.category)} flex items-center justify-center p-4`}>
                    <span className="text-white/90 text-xs font-medium text-center line-clamp-2">
                      {article.title}
                    </span>
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[--primary]/10 text-[--primary]">
                      {CATEGORY_LABELS[article.category] || article.category}
                    </span>
                    <span className="text-xs text-[--text-secondary]">
                      {article.readTime} min read
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[--text] mb-2 line-clamp-2 group-hover:text-[--primary] transition-colors"
                  >
                    {article.title}
                  </h3>
                  <p className="text-sm text-[--text-secondary] line-clamp-2 mb-3">
                    {article.description}
                  </p>
                  <div className="text-xs text-[--text-secondary]">
                    {formatDate(article.date)}
                  </div>
                </div>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
