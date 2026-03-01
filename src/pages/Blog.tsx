import { useState, useEffect } from 'react';
import { Layout } from '../components/layout/Layout.js';
import { SEOHead } from '../components/seo/SEOHead.js';
import { ArticleCard } from '../components/article/ArticleCard.js';
import { LoadingSpinner } from '../components/ui/LoadingSpinner.js';
import type { ArticleMeta } from '../lib/types.js';

export function Blog() {
  const [articles, setArticles] = useState<ArticleMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchArticles() {
      setLoading(true);
      try {
        const response = await fetch(`/api/articles?page=${page}&limit=9`);
        const data = await response.json();
        setArticles(data.data || []);
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, [page]);

  return (
    <Layout>
      <SEOHead
        title="Blog"
        description="Read the latest AI tools reviews, comparisons, and guides for developers."
        canonical="/blog"
      />

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-[--surface]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 text-[--text]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            AI Tools Blog
          </h1>
          <p className="text-lg text-[--text-muted] max-w-2xl">
            In-depth reviews and comparisons of AI tools for developers
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="py-16">
              <LoadingSpinner size="lg" />
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-[--text-muted] text-lg">No articles found.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>

              {articles.length >= 9 && (
                <div className="flex justify-center items-center gap-3 mt-12">
                  <button
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-5 py-2.5 border border-[--border] rounded-lg text-sm font-medium hover:border-[--primary] hover:text-[--primary] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors"
                  >
                    Previous
                  </button>
                  <span className="px-4 py-2 text-sm text-[--text-muted]">
                    Page {page}
                  </span>
                  <button
                    onClick={() => setPage(p => p + 1)}
                    disabled={articles.length < 9}
                    className="px-5 py-2.5 border border-[--border] rounded-lg text-sm font-medium hover:border-[--primary] hover:text-[--primary] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}
