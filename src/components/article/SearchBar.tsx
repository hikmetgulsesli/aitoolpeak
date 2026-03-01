import { useState, useRef, useEffect, useCallback } from 'react';
import type { ArticleMeta } from '../../lib/types.js';
import { CATEGORY_LABELS } from '../../lib/constants.js';

interface SearchBarProps {
  query: string;
  onQueryChange: (query: string) => void;
  results: ArticleMeta[];
  loading: boolean;
  onClear: () => void;
  placeholder?: string;
}

export function SearchBar({
  query,
  onQueryChange,
  results,
  loading,
  onClear,
  placeholder = 'Search articles...',
}: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Show dropdown when query changes and has results - using layout effect pattern
  const shouldShowDropdown = query.trim() && (results.length > 0 || loading);
  
  useEffect(() => {
    if (shouldShowDropdown && !isOpen) {
      // Use requestAnimationFrame to avoid synchronous setState warning
      requestAnimationFrame(() => {
        setIsOpen(true);
      });
    }
  }, [shouldShowDropdown, isOpen]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onQueryChange(e.target.value);
    if (e.target.value.trim()) {
      setIsOpen(true);
    }
  }, [onQueryChange]);

  const handleClear = useCallback(() => {
    onClear();
    setIsOpen(false);
    inputRef.current?.focus();
  }, [onClear]);

  const handleResultClick = useCallback(() => {
    setIsOpen(false);
    onClear();
  }, [onClear]);

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-[--text-secondary]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => query.trim() && setIsOpen(true)}
          placeholder={placeholder}
          className="block w-full pl-10 pr-10 py-2.5 border border-[--border] rounded-lg bg-[--bg] text-[--text] placeholder:text-[--text-secondary] focus:outline-none focus:ring-2 focus:ring-[--primary] focus:border-transparent transition-colors"
          aria-label="Search articles"
          aria-expanded={isOpen}
          aria-autocomplete="list"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-[--text-secondary] hover:text-[--text] transition-colors cursor-pointer"
            aria-label="Clear search"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Dropdown Results */}
      {isOpen && (
        <div className="absolute z-50 mt-2 w-full bg-[--bg] border border-[--border] rounded-lg shadow-lg overflow-hidden">
          {loading ? (
            <div className="p-4 text-center text-[--text-secondary]">
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-[--primary] border-t-transparent rounded-full animate-spin" />
                <span className="text-sm">Searching...</span>
              </div>
            </div>
          ) : results.length > 0 ? (
            <ul className="max-h-80 overflow-y-auto py-2">
              {results.map((article) => (
                <li key={article.slug}>
                  <a
                    href={`/blog/${article.slug}`}
                    onClick={handleResultClick}
                    className="block px-4 py-3 hover:bg-[--surface] transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[--text] truncate">
                          {article.title}
                        </p>
                        <p className="text-xs text-[--text-secondary] mt-0.5 line-clamp-1">
                          {article.description}
                        </p>
                        <div className="flex items-center gap-2 mt-1.5">
                          <span className="text-xs px-2 py-0.5 rounded-full bg-[--primary]/10 text-[--primary]">
                            {CATEGORY_LABELS[article.category] || article.category}
                          </span>
                          <span className="text-xs text-[--text-secondary]">
                            {article.readTime} min read
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          ) : query.trim() ? (
            <div className="p-4 text-center text-[--text-secondary]">
              <svg
                className="mx-auto h-8 w-8 mb-2 opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm">No articles found for "{query}"</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
