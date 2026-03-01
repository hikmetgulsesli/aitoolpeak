import { useState, useCallback, useEffect } from 'react';
import type { ArticleMeta } from '../lib/types.js';
import { searchArticles } from '../lib/api.js';

interface UseSearchReturn {
  results: ArticleMeta[];
  query: string;
  setQuery: (query: string) => void;
  loading: boolean;
  error: string | null;
  search: (query: string) => Promise<void>;
  clear: () => void;
}

export function useSearch(): UseSearchReturn {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ArticleMeta[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const data = await searchArticles(searchQuery);
      setResults(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search articles');
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const clear = useCallback(() => {
    setQuery('');
    setResults([]);
    setError(null);
  }, []);

  // Debounced search when query changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        search(query);
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query, search]);

  return { results, query, setQuery, loading, error, search, clear };
}
