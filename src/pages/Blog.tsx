import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface Article {
  title: string;
  slug: string;
  date: string;
  category: string;
  description: string;
  author: string;
  tags: string[];
  readTime: number;
  featured: boolean;
}

export function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchArticles() {
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
    <>
      <Helmet>
        <title>Blog - AIToolPeak</title>
        <meta name="description" content="Read the latest AI tools reviews, comparisons, and guides for developers." />
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
        <h1 className="text-4xl font-bold mb-4">AI Tools Blog</h1>
        <p className="text-lg text-[--text-muted] mb-12">
          In-depth reviews and comparisons of AI tools for developers
        </p>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-[--text-muted]">Loading articles...</p>
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[--text-muted]">No articles found.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <a
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="block p-6 border border-[--border] rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-[--primary] text-white rounded mb-3">
                    {article.category}
                  </span>
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-[--text-muted] text-sm mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[--text-muted]">
                    <span>{article.author}</span>
                    <span>{article.readTime} min read</span>
                  </div>
                </a>
              ))}
            </div>
            
            {articles.length >= 9 && (
              <div className="flex justify-center gap-2 mt-12">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 border border-[--border] rounded-lg hover:border-[--primary] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors"
                >
                  Previous
                </button>
                <span className="px-4 py-2 text-[--text-muted]">
                  Page {page}
                </span>
                <button
                  onClick={() => setPage(p => p + 1)}
                  disabled={articles.length < 9}
                  className="px-4 py-2 border border-[--border] rounded-lg hover:border-[--primary] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
