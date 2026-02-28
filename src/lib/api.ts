import type { ArticleMeta, Category, PaginatedResponse } from './types.js';

const API_BASE = '/api';

export async function fetchArticles(params: {
  category?: string;
  page?: number;
  limit?: number;
} = {}): Promise<PaginatedResponse<ArticleMeta>> {
  const searchParams = new URLSearchParams();
  if (params.category) searchParams.set('category', params.category);
  if (params.page) searchParams.set('page', params.page.toString());
  if (params.limit) searchParams.set('limit', params.limit.toString());

  const response = await fetch(`${API_BASE}/articles?${searchParams.toString()}`);
  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  return response.json();
}

export async function fetchCategories(): Promise<{ data: Category[] }> {
  const response = await fetch(`${API_BASE}/categories`);
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  return response.json();
}
