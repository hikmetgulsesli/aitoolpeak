import type { PaginatedResponse, ArticleMeta, Article, Category, ContactFormData } from './types.js';

const API_BASE = '/api';

async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: { message: 'Unknown error' } }));
    throw new Error(error.error?.message || `HTTP ${response.status}`);
  }

  return response.json();
}

export async function getArticles(params?: {
  category?: string;
  tag?: string;
  page?: number;
  limit?: number;
  featured?: boolean;
}): Promise<PaginatedResponse<ArticleMeta>> {
  const searchParams = new URLSearchParams();
  if (params?.category) searchParams.set('category', params.category);
  if (params?.tag) searchParams.set('tag', params.tag);
  if (params?.page) searchParams.set('page', params.page.toString());
  if (params?.limit) searchParams.set('limit', params.limit.toString());
  if (params?.featured) searchParams.set('featured', 'true');

  const query = searchParams.toString();
  const result = await fetchApi<{ data: ArticleMeta[]; meta: PaginatedResponse<ArticleMeta>['meta'] }>(`/articles${query ? `?${query}` : ''}`);
  return result;
}

export async function getArticle(slug: string): Promise<Article> {
  const result = await fetchApi<{ data: Article }>(`/articles/${slug}`);
  return result.data;
}

export async function getCategories(): Promise<Category[]> {
  const result = await fetchApi<{ data: Category[] }>('/categories');
  return result.data;
}

export async function searchArticles(query: string): Promise<ArticleMeta[]> {
  const result = await fetchApi<{ data: ArticleMeta[] }>(`/search?q=${encodeURIComponent(query)}`);
  return result.data;
}

export async function submitContact(data: ContactFormData): Promise<{ id: string; message: string }> {
  const result = await fetchApi<{ data: { id: string; message: string } }>('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return result.data;
}
