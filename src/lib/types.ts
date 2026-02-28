export interface ArticleMeta {
  title: string;
  slug: string;
  date: string;
  updated?: string;
  category: string;
  description: string;
  author: string;
  authorImage?: string;
  tags: string[];
  readTime: number;
  featured?: boolean;
  ogImage?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
  articleCount: number;
}

export interface ArticlesResponse {
  data: ArticleMeta[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface CategoriesResponse {
  data: Category[];
}
