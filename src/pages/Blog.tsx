import { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useArticles } from '../hooks/useArticles.js';
import { useCategories } from '../hooks/useCategories.js';
import { ArticleCard } from '../components/article/ArticleCard.js';
import { ArticleFilter } from '../components/article/ArticleFilter.js';
import { Pagination } from '../components/ui/Pagination.js';
import { LoadingSpinner } from '../components/ui/LoadingSpinner.js';
import { ARTICLES_PER_PAGE } from '../lib/constants.js';

export function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get('category')
  );
  const [currentPage, setCurrentPage] = useState(() => {
    const page = parseInt(searchParams.get('page') || '1', 10);
    return isNaN(page) || page < 1 ? 1 : page;
  });

  const { articles, meta, loading, error } = useArticles({
    category: selectedCategory || undefined,
    page: currentPage,
    limit: ARTICLES_PER_PAGE,
  });

  const { categories, loading: categoriesLoading } = useCategories();

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategory) {
      params.set('category', selectedCategory);
    }
    if (currentPage > 1) {
      params.set('page', currentPage.toString());
    }
    setSearchParams(params, { replace: true });
  }, [selectedCategory, currentPage, setSearchParams]);

  const handleCategoryChange = useCallback((category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    // Scroll to top of article grid
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[--surface]">
      {/* Header */}
      <header className="bg-white border-b border-[--border]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[--text] mb-2">
            Blog
          </h1>
          <p className="text-[--text-muted] max-w-2xl">
            Discover the latest AI tools, reviews, and comparisons to help you choose the right tools for your development workflow.
          </p>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <section className="mb-8">
          {categoriesLoading ? (
            <div className="h-10 flex items-center">
              <LoadingSpinner size="sm" />
            </div>
          ) : (
            <ArticleFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          )}
        </section>

        {/* Results Count */}
        {meta && (
          <div className="mb-6 text-sm text-[--text-muted]">
            Showing {articles.length} of {meta.total} articles
            {selectedCategory && ` in ${categories.find(c => c.id === selectedCategory)?.name || selectedCategory}`}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="py-16">
            <LoadingSpinner size="lg" />
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="py-16 text-center">
            <div className="text-red-600 mb-4">Failed to load articles</div>
            <p className="text-[--text-muted] mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-[--primary] text-white rounded-lg hover:bg-[--primary-hover] transition-colors cursor-pointer"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && articles.length === 0 && (
          <div className="py-16 text-center">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-[--text] mb-2">
              No articles found
            </h3>
            <p className="text-[--text-muted] mb-6">
              {selectedCategory
                ? 'No articles in this category yet. Check back soon!'
                : 'No articles available yet. Check back soon!'}
            </p>
            {selectedCategory && (
              <button
                onClick={() => handleCategoryChange(null)}
                className="px-4 py-2 bg-[--primary] text-white rounded-lg hover:bg-[--primary-hover] transition-colors cursor-pointer"
              >
                View All Articles
              </button>
            )}
          </div>
        )}

        {/* Article Grid */}
        {!loading && !error && articles.length > 0 && (
          <>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </section>

            {/* Pagination */}
            {meta && meta.totalPages > 1 && (
              <section className="py-8 border-t border-[--border]">
                <Pagination
                  currentPage={currentPage}
                  totalPages={meta.totalPages}
                  onPageChange={handlePageChange}
                />
              </section>
            )}
          </>
        )}
      </main>
    </div>
  );
}
