import { useState, useEffect, useRef, useCallback } from 'react';
import type { Heading } from '../../lib/types.js';

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const initialSetRef = useRef(false);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      // Set active immediately for better UX
      setActiveId(id);
    }
  }, []);

  // Set initial active heading
  useEffect(() => {
    if (headings.length > 0 && !initialSetRef.current) {
      initialSetRef.current = true;
      // Use requestAnimationFrame to avoid synchronous setState warning
      requestAnimationFrame(() => {
        setActiveId(headings[0]?.id || '');
      });
    }
  }, [headings]);

  // Observe headings for active state
  useEffect(() => {
    if (headings.length === 0) return;

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0,
    });

    // Observe all heading elements
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="bg-[--bg] rounded-xl border border-[--border] p-6 sticky top-24">
      <h3 className="text-sm font-semibold text-[--text] uppercase tracking-wide mb-4">
        Table of Contents
      </h3>
      <ul className="space-y-1">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <li
              key={heading.id}
              style={{ paddingLeft: `${(heading.level - 1) * 0.75}rem` }}
            >
              <a
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className={`text-sm block py-1.5 transition-colors cursor-pointer border-l-2 pl-3 ${
                  isActive
                    ? 'text-[--primary] border-[--primary] font-medium'
                    : 'text-[--text-secondary] border-transparent hover:text-[--primary] hover:border-[--primary]/30'
                }`}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
