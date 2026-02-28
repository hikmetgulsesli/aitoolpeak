import { useEffect, useMemo, useState } from "react";
import { fetchArticles } from "../lib/api.js";
import type { ArticleMeta, ArticlesResponse } from "../lib/types.js";

interface UseArticlesOptions {
  category?: string;
  tag?: string;
  featured?: boolean;
  page?: number;
  limit?: number;
}

interface UseArticlesReturn {
  articles: ArticleMeta[];
  meta: ArticlesResponse["meta"] | null;
  loading: boolean;
  error: string | null;
}

export function useArticles(options: UseArticlesOptions = {}): UseArticlesReturn {
  const [articles, setArticles] = useState<ArticleMeta[]>([]);
  const [meta, setMeta] = useState<ArticlesResponse["meta"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Serialize options for stable dependency comparison
  const optionsKey = useMemo(() => JSON.stringify(options), [options]);

  useEffect(() => {
    let cancelled = false;

    async function loadArticles() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchArticles(options);
        if (!cancelled) {
          setArticles(response.data);
          setMeta(response.meta);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load articles");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadArticles();

    return () => {
      cancelled = true;
    };
  }, [optionsKey, options]);

  return { articles, meta, loading, error };
}
