import { Layout } from "../components/layout/Layout.js";
import { HeroSection } from "../components/home/HeroSection.js";
import { FeaturedArticles } from "../components/home/FeaturedArticles.js";
import { CategoryCards } from "../components/home/CategoryCards.js";
import { LatestArticles } from "../components/home/LatestArticles.js";
import { useArticles } from "../hooks/useArticles.js";
import { useCategories } from "../hooks/useCategories.js";

export function HomePage() {
  const {
    articles: featuredArticles,
    loading: featuredLoading,
    error: featuredError,
  } = useArticles({ featured: true, limit: 3 });

  const {
    articles: latestArticles,
    loading: latestLoading,
    error: latestError,
  } = useArticles({ limit: 6 });

  const { categories, loading: categoriesLoading, error: categoriesError } =
    useCategories();

  return (
    <Layout>
      <HeroSection />

      {featuredLoading ? (
        <div className="loading-container">Loading featured articles...</div>
      ) : featuredError ? (
        <div className="error-container">{featuredError}</div>
      ) : (
        <FeaturedArticles articles={featuredArticles} />
      )}

      {categoriesLoading ? (
        <div className="loading-container">Loading categories...</div>
      ) : categoriesError ? (
        <div className="error-container">{categoriesError}</div>
      ) : (
        <CategoryCards categories={categories} />
      )}

      {latestLoading ? (
        <div className="loading-container">Loading latest articles...</div>
      ) : latestError ? (
        <div className="error-container">{latestError}</div>
      ) : (
        <LatestArticles articles={latestArticles} />
      )}
    </Layout>
  );
}
