import { useState, useEffect } from 'react';
import type { Category } from '../lib/types.js';
import { fetchCategories } from '../lib/api.js';

interface UseCategoriesReturn {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

export function useCategories(): UseCategoriesReturn {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await fetchCategories();
        setCategories(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch categories');
      } finally {
        setLoading(false);
      }
    }
    loadCategories();
  }, []);

  return { categories, loading, error };
}
