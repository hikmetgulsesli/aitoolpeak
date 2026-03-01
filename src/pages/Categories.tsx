import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout.js';
import { SEOHead } from '../components/seo/SEOHead.js';
import { LoadingSpinner } from '../components/ui/LoadingSpinner.js';
import { getCategories } from '../lib/api.js';
import type { Category } from '../lib/types.js';
import { Code2, Brain, Terminal, Globe, Scale } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'coding-assistants': <Code2 className="w-8 h-8" />,
  'ai-models': <Brain className="w-8 h-8" />,
  'devops': <Terminal className="w-8 h-8" />,
  'web-development': <Globe className="w-8 h-8" />,
  'tools-comparison': <Scale className="w-8 h-8" />,
};

export function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch categories');
      } finally {
        setLoading(false);
      }
    }
    loadCategories();
  }, []);

  return (
    <Layout>
      <SEOHead
        title="Categories"
        description="Browse AI tools by category. Find coding assistants, AI models, DevOps tools, web development resources, and detailed tool comparisons."
        canonical="/categories"
      />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-[--surface]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 text-[--text]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Browse by Category
            </h1>
            <p className="text-xl text-[--text-muted] leading-relaxed">
              Explore our AI tool reviews organized by category. 
              Find exactly what you need for your development workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {loading && (
            <div className="py-16">
              <LoadingSpinner size="lg" />
            </div>
          )}

          {error && !loading && (
            <div className="py-16 text-center">
              <div className="text-red-600 mb-4">Failed to load categories</div>
              <p className="text-[--text-muted] mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-[--primary] text-white rounded-lg hover:bg-[--primary-hover] transition-colors cursor-pointer"
              >
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && categories.length === 0 && (
            <div className="py-16 text-center">
              <h3 className="text-xl font-semibold text-[--text] mb-2">
                No categories found
              </h3>
              <p className="text-[--text-muted]">
                Categories will appear here once articles are published.
              </p>
            </div>
          )}

          {!loading && !error && categories.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/blog?category=${category.slug}`}
                  className="group block p-8 bg-[--surface] rounded-xl border border-[--border] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-[--primary]/10 rounded-xl flex items-center justify-center text-[--primary] group-hover:bg-[--primary] group-hover:text-white transition-colors duration-200">
                      {categoryIcons[category.id] || <Code2 className="w-8 h-8" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2
                        className="text-xl font-semibold text-[--text] mb-2 group-hover:text-[--primary] transition-colors duration-200"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {category.name}
                      </h2>
                      <p className="text-[--text-muted] text-sm leading-relaxed mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium text-[--primary]">
                          {category.articleCount}
                        </span>
                        <span className="text-[--text-muted]">
                          {category.articleCount === 1 ? 'article' : 'articles'}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
