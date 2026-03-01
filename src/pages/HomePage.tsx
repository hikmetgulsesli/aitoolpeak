import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout.js';
import { SEOHead } from '../components/seo/SEOHead.js';
import { ArticleCard } from '../components/article/ArticleCard.js';
import { LoadingSpinner } from '../components/ui/LoadingSpinner.js';
import { useArticles } from '../hooks/useArticles.js';
import { useCategories } from '../hooks/useCategories.js';
import { SITE_CONFIG } from '../lib/constants.js';
import { Code2, Brain, Terminal, Globe, Scale, ArrowRight } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'coding-assistants': <Code2 className="w-6 h-6" />,
  'ai-models': <Brain className="w-6 h-6" />,
  'devops': <Terminal className="w-6 h-6" />,
  'web-development': <Globe className="w-6 h-6" />,
  'tools-comparison': <Scale className="w-6 h-6" />,
};

export function HomePage() {
  const { articles: featuredArticles, loading: featuredLoading } = useArticles({ featured: true, limit: 3 });
  const { articles: latestArticles, loading: latestLoading } = useArticles({ limit: 6 });
  const { categories, loading: categoriesLoading } = useCategories();

  return (
    <Layout>
      <SEOHead
        title="AI Tools Reviews & Comparisons"
        description={SITE_CONFIG.description}
        canonical="/"
      />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[--surface] via-white to-[--surface]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[--text]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Find the Best{' '}
            <span className="bg-gradient-to-r from-[--primary] to-blue-600 bg-clip-text text-transparent">
              AI Tools
            </span>{' '}
            for Developers
          </h1>
          <p className="text-lg md:text-xl text-[--text-muted] max-w-2xl mx-auto mb-8 leading-relaxed">
            {SITE_CONFIG.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/blog"
              className="px-6 py-3 bg-[--primary] text-white rounded-lg hover:bg-[--primary-hover] transition-colors font-medium cursor-pointer"
            >
              Browse Reviews
            </Link>
            <Link
              to="/categories"
              className="px-6 py-3 border border-[--border] rounded-lg hover:border-[--primary] hover:text-[--primary] transition-colors font-medium cursor-pointer"
            >
              View Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2
              className="text-2xl md:text-3xl font-bold text-[--text]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Featured Reviews
            </h2>
            <Link
              to="/blog"
              className="hidden sm:flex items-center gap-1 text-[--primary] hover:underline font-medium cursor-pointer"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {featuredLoading ? (
            <div className="py-12"><LoadingSpinner size="lg" /></div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-20 bg-[--surface]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              className="text-2xl md:text-3xl font-bold text-[--text] mb-3"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Browse by Category
            </h2>
            <p className="text-[--text-muted]">
              Find the right AI tools for your specific needs
            </p>
          </div>

          {categoriesLoading ? (
            <div className="py-12"><LoadingSpinner size="lg" /></div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/blog?category=${category.slug}`}
                  className="group flex items-center gap-4 p-5 bg-white rounded-xl border border-[--border] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[--primary]/10 rounded-lg flex items-center justify-center text-[--primary] group-hover:bg-[--primary] group-hover:text-white transition-colors">
                    {categoryIcons[category.id] || <Code2 className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[--text] group-hover:text-[--primary] transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-[--text-muted]">
                      {category.articleCount} {category.articleCount === 1 ? 'article' : 'articles'}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2
              className="text-2xl md:text-3xl font-bold text-[--text]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Latest Articles
            </h2>
            <Link
              to="/blog"
              className="hidden sm:flex items-center gap-1 text-[--primary] hover:underline font-medium cursor-pointer"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {latestLoading ? (
            <div className="py-12"><LoadingSpinner size="lg" /></div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          )}

          <div className="text-center mt-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[--primary] text-white rounded-lg hover:bg-[--primary-hover] transition-colors font-medium cursor-pointer"
            >
              See All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
