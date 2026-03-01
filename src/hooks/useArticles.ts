import { useState, useEffect, useCallback } from 'react';
import type { ArticleMeta } from '../lib/types.js';
import { getArticles } from '../lib/api.js';

interface UseArticlesOptions {
  category?: string;
  tag?: string;
  page?: number;
  limit?: number;
  featured?: boolean;
}

interface UseArticlesReturn {
  articles: ArticleMeta[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  } | null;
  loading: boolean;
  error: string | null;
}

export function useArticles(options: UseArticlesOptions = {}): UseArticlesReturn {
  const [articles, setArticles] = useState<ArticleMeta[]>([]);
  const [meta, setMeta] = useState<UseArticlesReturn['meta']>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getArticles(options);
      setArticles(response.data);
      setMeta(response.meta);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch articles');
    } finally {
      setLoading(false);
    }
  }, [options.category, options.tag, options.page, options.limit, options.featured]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { articles, meta, loading, error };
}
