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

  const gradient = categoryGradients[article.category] || 'from-blue-600 to-violet-600';

  return (
    <article className="group bg-[--bg] rounded-xl border border-[--border] overflow-hidden hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
      <a href={`/blog/${article.slug}`} className="block">
        <div className={`aspect-[16/9] bg-gradient-to-br ${gradient} flex items-center justify-center p-6`}>
          <span className="text-white/90 text-sm font-medium text-center line-clamp-2">
            {article.title}
          </span>
        </div>
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
