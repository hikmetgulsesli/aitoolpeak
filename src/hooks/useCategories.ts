import { useEffect, useState } from "react";
import { fetchCategories } from "../lib/api.js";
import type { Category } from "../lib/types.js";

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
    let cancelled = false;

    async function loadCategories() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchCategories();
        if (!cancelled) {
          setCategories(response.data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load categories");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadCategories();

    return () => {
      cancelled = true;
    };
  }, []);

  return { categories, loading, error };
}
