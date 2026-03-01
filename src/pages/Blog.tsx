import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '../components/layout/Layout.js';
import { ArticleCard } from '../components/article/ArticleCard.js';
import { SEOHead } from '../components/seo/SEOHead.js';
import { CATEGORIES, CATEGORY_LABELS } from '../lib/constants.js';
import type { ArticleMeta, PaginatedResponse } from '../lib/types.js';

export function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articles, setArticles] = useState<ArticleMeta[]>([]);
  const [meta, setMeta] = useState<PaginatedResponse<ArticleMeta>['meta'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const category = searchParams.get('category') || '';
  const page = parseInt(searchParams.get('page') || '1', 10);

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      params.set('page', page.toString());
      params.set('limit', '9');
      if (category) {
        params.set('category', category);
      }

      const response = await fetch(`/api/articles?${params.toString()}`);
      if (!response.ok) {
        throw new Error('Failed to fetch articles');
      }
      const result = await response.json() as PaginatedResponse<ArticleMeta>;
      setArticles(result.data || []);
      setMeta(result.meta || null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [category, page]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const handleCategoryChange = (newCategory: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (newCategory === category) {
      newParams.delete('category');
    } else {
      newParams.set('category', newCategory);
    }
    newParams.set('page', '1');
    setSearchParams(newParams);
  };

  const handleClearFilter = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('category');
    newParams.set('page', '1');
    setSearchParams(newParams);
  };

  const handlePageChange = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', newPage.toString());
    setSearchParams(newParams);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      <SEOHead
        title="Blog - AIToolPeak"
        description="Read the latest AI tools reviews, comparisons, and guides for developers. In-depth analysis of AI coding assistants, models, and DevOps tools."
        canonical="/blog"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-[--text] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              AI Tools Blog
            </h1>
            <p className="text-lg text-[--text-muted] max-w-2xl">
              In-depth reviews and comparisons of AI tools for developers. 
              Hands-on testing, real-world insights, and honest recommendations.
            </p>
          </div>

          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-[--text-muted] mr-2">Filter by:</span>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                    cursor-pointer focus-visible:ring-2 focus-visible:ring-[--primary] focus-visible:ring-offset-2 focus-visible:outline-none
                    ${category === cat.id
                      ? 'bg-[--primary] text-white'
                      : 'bg-[--surface] text-[--text-muted] hover:bg-[--border] hover:text-[--text]'
                    }
                  `}
                >
                  {cat.name}
                </button>
              ))}
              {category && (
                <button
                  onClick={handleClearFilter}
                  className="ml-2 px-3 py-2 text-sm text-[--text-muted] hover:text-[--text] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[--primary] focus-visible:ring-offset-2 focus-visible:outline-none rounded"
                >
                  Clear filter
                </button>
              )}
            </div>
            {category && (
              <p className="mt-3 text-sm text-[--text-muted]">
                Showing articles in <span className="font-medium text-[--text]">{CATEGORY_LABELS[category]}</span>
              </p>
            )}
          </div>

          {loading && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-[--primary] border-t-transparent rounded-full animate-spin" />
              </div>
              <p className="mt-4 text-[--text-muted]">Loading articles...</p>
            </div>
          )}

          {!loading && error && (
            <div className="text-center py-20">
              <p className="text-red-500 mb-4">{error}</p>
              <button
                onClick={fetchArticles}
                className="px-4 py-2 bg-[--primary] text-white rounded-lg hover:bg-[--primary-hover] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[--primary] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Try again
              </button>
            </div>
          )}

          {!loading && !error && articles.length === 0 && (
            <div className="text-center py-20 bg-[--surface] rounded-2xl border border-[--border]">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[--bg] flex items-center justify-center">
                <svg 
                  className="w-8 h-8 text-[--text-muted]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[--text] mb-2">
                No articles found
              </h3>
              <p className="text-[--text-muted] max-w-md mx-auto mb-6">
                {category 
                  ? `There are no articles in the "${CATEGORY_LABELS[category]}" category yet. Check back soon or browse other categories.`
                  : "There are no articles available yet. Check back soon for new content."
                }
              </p>
              {category && (
                <button
                  onClick={handleClearFilter}
                  className="px-4 py-2 bg-[--primary] text-white rounded-lg hover:bg-[--primary-hover] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[--primary] focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  View all articles
                </button>
              )}
            </div>
          )}

          {!loading && !error && articles.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>

              {meta && meta.totalPages > 1 && (
                <div className="mt-16 flex items-center justify-center gap-2">
                  <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                    className="px-4 py-2 border border-[--border] rounded-lg text-[--text] hover:border-[--primary] hover:text-[--primary] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-[--border] disabled:hover:text-[--text] cursor-pointer transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[--primary] focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    Previous
                  </button>
                  
                  <div className="flex items-center gap-1">
                    {Array.from({ length: meta.totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`
                          w-10 h-10 rounded-lg text-sm font-medium transition-colors duration-200
                          cursor-pointer focus-visible:ring-2 focus-visible:ring-[--primary] focus-visible:ring-offset-2 focus-visible:outline-none
                          ${pageNum === page
                            ? 'bg-[--primary] text-white'
                            : 'text-[--text-muted] hover:bg-[--surface] hover:text-[--text]'
                          }
                        `}
                      >
                        {pageNum}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === meta.totalPages}
                    className="px-4 py-2 border border-[--border] rounded-lg text-[--text] hover:border-[--primary] hover:text-[--primary] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-[--border] disabled:hover:text-[--text] cursor-pointer transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[--primary] focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    Next
                  </button>
                </div>
              )}

              <p className="mt-6 text-center text-sm text-[--text-muted]">
                Showing {articles.length} of {meta?.total || 0} articles
                {category && ` in ${CATEGORY_LABELS[category]}`}
              </p>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}
