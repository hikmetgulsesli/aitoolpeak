import type { Category } from "../../lib/types.js";

interface CategoryCardsProps {
  categories: Category[];
}

export function CategoryCards({ categories }: CategoryCardsProps) {
  if (categories.length === 0) {
    return null;
  }

  return (
    <section className="category-cards">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Browse by Category</h2>
          <p className="section-subtitle">Explore AI tools by use case</p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/blog?category=${category.slug}`}
              className="category-card"
            >
              <div className="category-card-content">
                <h3 className="category-card-title">{category.name}</h3>
                <p className="category-card-description">{category.description}</p>
                <span className="category-card-count">
                  {category.articleCount} {category.articleCount === 1 ? "article" : "articles"}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
