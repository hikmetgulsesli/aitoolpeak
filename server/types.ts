export interface ArticleMeta {
  title: string;
  slug: string;
  date: string;
  updated?: string;
  category: string;
  description: string;
  author: string;
  tags: string[];
  readTime: number;
  featured?: boolean;
}

export interface Article extends ArticleMeta {
  content: string;
  html: string;
  headings: Heading[];
}

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
  articleCount: number;
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

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
}
