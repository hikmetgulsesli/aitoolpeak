import { useState, useEffect, useCallback } from 'react';
import type { Article } from '../lib/types.js';

interface UseArticleReturn {
  article: Article | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useArticle(slug: string): UseArticleReturn {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/articles/${slug}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Article not found');
        }
        throw new Error('Failed to fetch article');
      }
      const data = await response.json();
      setArticle(data.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch article');
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { article, loading, error, refetch };
}
