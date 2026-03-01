import type { ArticleMeta } from '../../lib/types.js';
import { CATEGORY_LABELS } from '../../lib/constants.js';

const categoryGradients: Record<string, string> = {
  'coding-assistants': 'from-blue-600 to-violet-600',
  'ai-models': 'from-violet-600 to-pink-500',
  'devops': 'from-orange-500 to-red-500',
  'web-development': 'from-emerald-500 to-cyan-500',
  'tools-comparison': 'from-amber-500 to-orange-500',
};

interface RelatedArticlesProps {
  articles: ArticleMeta[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <section className="mt-16 pt-12 border-t border-[--border]">
      <h2 className="text-2xl font-bold text-[--text] mb-8">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => {
          const gradient = categoryGradients[article.category] || 'from-blue-600 to-violet-600';
          return (
            <article
              key={article.slug}
              className="group bg-[--bg] rounded-xl border border-[--border] overflow-hidden hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
            >
              <a href={`/blog/${article.slug}`} className="block">
                <div className={`aspect-video bg-gradient-to-br ${gradient} flex items-center justify-center p-4`}>
                  <span className="text-white/80 text-xs font-medium px-2 py-1 bg-black/20 rounded">
                    {CATEGORY_LABELS[article.category] || article.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-[--text-muted]">
                      {article.readTime} min read
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[--text] mb-2 line-clamp-2 group-hover:text-[--primary] transition-colors"
                  >
                    {article.title}
                  </h3>
                  <p className="text-sm text-[--text-muted] line-clamp-2 mb-3">
                    {article.description}
                  </p>
                  <div className="text-xs text-[--text-muted]">
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
