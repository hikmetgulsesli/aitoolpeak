import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b"
      style={{ 
        backgroundColor: 'var(--surface)', 
        borderColor: 'var(--border)' 
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="text-xl font-bold"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)' }}
          >
            AIToolPeak
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-sm font-medium transition-colors hover:text-[var(--primary)]"
              style={{ color: 'var(--text-muted)' }}
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className="text-sm font-medium transition-colors hover:text-[var(--primary)]"
              style={{ color: 'var(--text-muted)' }}
            >
              Blog
            </Link>
            <Link 
              to="/categories" 
              className="text-sm font-medium transition-colors hover:text-[var(--primary)]"
              style={{ color: 'var(--text-muted)' }}
            >
              Categories
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium transition-colors hover:text-[var(--primary)]"
              style={{ color: 'var(--text-muted)' }}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium transition-colors hover:text-[var(--primary)]"
              style={{ color: 'var(--text-muted)' }}
            >
              Contact
            </Link>
          </nav>
          
          <button 
            className="md:hidden p-2 rounded-md"
            style={{ color: 'var(--text-muted)' }}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
