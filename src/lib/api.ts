import type { ArticleMeta, Category } from "./types.js";

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

const API_BASE = "/api";

export async function fetchArticles(params?: {
  category?: string;
  tag?: string;
  featured?: boolean;
  page?: number;
  limit?: number;
}): Promise<ArticlesResponse> {
  const searchParams = new URLSearchParams();
  if (params?.category) searchParams.set("category", params.category);
  if (params?.tag) searchParams.set("tag", params.tag);
  if (params?.featured !== undefined)
    searchParams.set("featured", String(params.featured));
  if (params?.page) searchParams.set("page", String(params.page));
  if (params?.limit) searchParams.set("limit", String(params.limit));

  const url = `${API_BASE}/articles?${searchParams.toString()}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch articles: ${response.statusText}`);
  }

  return response.json();
}

export async function fetchCategories(): Promise<CategoriesResponse> {
  const response = await fetch(`${API_BASE}/categories`);

  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.statusText}`);
  }

  return response.json();
}
