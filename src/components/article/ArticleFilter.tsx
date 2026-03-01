import type { Category } from '../../lib/types.js';

interface ArticleFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function ArticleFilter({ categories, selectedCategory, onCategoryChange }: ArticleFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors cursor-pointer ${
          selectedCategory === null
            ? 'bg-[--primary] text-white border-[--primary]'
            : 'bg-[--bg] text-[--text] border-[--border] hover:bg-[--surface]'
        }`}
      >
        All
      </button>
      
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors cursor-pointer ${
            selectedCategory === category.id
              ? 'bg-[--primary] text-white border-[--primary]'
              : 'bg-[--bg] text-[--text] border-[--border] hover:bg-[--surface]'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
