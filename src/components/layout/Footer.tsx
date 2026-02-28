import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer 
      className="border-t py-12"
      style={{ 
        backgroundColor: 'var(--surface-alt)', 
        borderColor: 'var(--border)' 
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link 
              to="/" 
              className="text-lg font-bold"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)' }}
            >
              AIToolPeak
            </Link>
            <p 
              className="mt-4 text-sm"
              style={{ color: 'var(--text-muted)' }}
            >
              Honest reviews and comparisons of AI tools for developers. 
              Helping you find the right AI assistant for your workflow.
            </p>
          </div>
          
          <div>
            <h4 
              className="text-sm font-semibold mb-4"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-sm transition-colors hover:text-[var(--primary)]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-sm transition-colors hover:text-[var(--primary)]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-sm transition-colors hover:text-[var(--primary)]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-sm transition-colors hover:text-[var(--primary)]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 
              className="text-sm font-semibold mb-4"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}
            >
              Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/categories/coding-assistants" 
                  className="text-sm transition-colors hover:text-[var(--primary)]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Coding Assistants
                </Link>
              </li>
              <li>
                <Link 
                  to="/categories/ai-models" 
                  className="text-sm transition-colors hover:text-[var(--primary)]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  AI Models
                </Link>
              </li>
              <li>
                <Link 
                  to="/categories/devops" 
                  className="text-sm transition-colors hover:text-[var(--primary)]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  DevOps
                </Link>
              </li>
              <li>
                <Link 
                  to="/categories/tools-comparison" 
                  className="text-sm transition-colors hover:text-[var(--primary)]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Comparisons
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 
              className="text-sm font-semibold mb-4"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}
            >
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacy" 
                  className="text-sm transition-colors hover:text-[var(--primary)]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-sm transition-colors hover:text-[var(--primary)]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/disclaimer" 
                  className="text-sm transition-colors hover:text-[var(--primary)]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div 
          className="mt-12 pt-8 border-t text-center text-sm"
          style={{ borderColor: 'var(--border)', color: 'var(--text-subtle)' }}
        >
          <p>© {new Date().getFullYear()} AIToolPeak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
