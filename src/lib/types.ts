// Article types
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

export interface Article extends ArticleMeta {
  content: string;
  html: string;
  headings: Heading[];
  relatedArticles?: ArticleMeta[];
}

export interface Heading {
  id: string;
  text: string;
  level: number;
}

// Category types
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  articleCount: number;
}

// API Response types
export interface ApiResponse<T> {
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ArticlesListResponse {
  articles: ArticleMeta[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface SearchResponse {
  results: ArticleMeta[];
  query: string;
}

// Contact form
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Alias for API compatibility
export type ContactFormData = ContactForm;
