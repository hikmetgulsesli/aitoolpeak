import { useState, useEffect, useCallback } from 'react';
import type { ArticleMeta, PaginatedResponse } from '../lib/types.js';
import { fetchArticles } from '../lib/api.js';

interface UseArticlesOptions {
  category?: string;
  page?: number;
  limit?: number;
}

interface UseArticlesReturn {
  articles: ArticleMeta[];
  meta: PaginatedResponse<ArticleMeta>['meta'] | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useArticles(options: UseArticlesOptions = {}): UseArticlesReturn {
  const [articles, setArticles] = useState<ArticleMeta[]>([]);
  const [meta, setMeta] = useState<PaginatedResponse<ArticleMeta>['meta'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchArticles({
        category: options.category,
        page: options.page,
        limit: options.limit,
      });
      setArticles(response.data);
      setMeta(response.meta);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch articles');
    } finally {
      setLoading(false);
    }
  }, [options.category, options.page, options.limit]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { articles, meta, loading, error, refetch };
}
