import type { MouseEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const handlePageClick = (page: number) => (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  const baseButtonClasses = 'inline-flex items-center justify-center min-w-[40px] h-10 px-3 text-sm font-medium rounded-lg border transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';
  const inactiveClasses = 'bg-[var(--bg)] text-[var(--text)] border-[var(--border)] hover:bg-[var(--surface)]';
  const activeClasses = 'bg-[var(--primary)] text-white border-[var(--primary)] hover:bg-[var(--primary-hover)]';

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2">
      <button
        onClick={handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${baseButtonClasses} ${inactiveClasses}`}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </button>

      <div className="flex items-center gap-1">
        {getPageNumbers().map((page, index) => (
          page === '...' ? (
            <span key={`ellipsis-${index}`} className="px-2 text-[var(--text-muted)]">...</span>
          ) : (
            <button
              key={page}
              onClick={handlePageClick(page as number)}
              className={`${baseButtonClasses} ${currentPage === page ? activeClasses : inactiveClasses}`}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          )
        ))}
      </div>

      <button
        onClick={handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${baseButtonClasses} ${inactiveClasses}`}
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </button>
    </nav>
  );
}
