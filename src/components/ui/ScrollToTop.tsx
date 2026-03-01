import { useState, useEffect, useCallback } from 'react';
import { ArrowUp } from 'lucide-react';

export interface ScrollToTopProps {
  threshold?: number;
  className?: string;
}

export function ScrollToTop({ 
  threshold = 300,
  className = '',
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    if (window.scrollY > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [threshold]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [toggleVisibility]);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50
        p-3 rounded-full
        bg-[var(--primary)] text-white
        shadow-lg
        transition-all duration-200
        hover:bg-[var(--primary-hover)]
        hover:shadow-xl
        hover:-translate-y-0.5
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]
        cursor-pointer
        ${className}
      `}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" aria-hidden="true" />
    </button>
  );
}
