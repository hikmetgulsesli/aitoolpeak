export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h4 className="footer-title">AIToolPeak</h4>
            <p className="footer-description">
              Your trusted source for AI tool reviews and comparisons.
              Helping developers make informed decisions.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/categories">Categories</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Categories</h4>
            <ul className="footer-links">
              <li><a href="/blog?category=coding-assistants">Coding Assistants</a></li>
              <li><a href="/blog?category=ai-models">AI Models</a></li>
              <li><a href="/blog?category=devops">DevOps</a></li>
              <li><a href="/blog?category=tools-comparison">Comparisons</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/disclaimer">Disclaimer</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} AIToolPeak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
