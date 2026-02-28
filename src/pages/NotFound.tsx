export function NotFound() {
  return (
    <div className="min-h-screen bg-[--surface] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold text-[--primary] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[--text] mb-4">Page Not Found</h2>
        <p className="text-[--text-muted] mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-[--primary] text-white rounded-lg hover:bg-[--primary-hover] transition-colors cursor-pointer"
          >
            Go Home
          </a>
          <a
            href="/blog"
            className="inline-block px-6 py-3 border border-[--border] text-[--text] rounded-lg hover:bg-[--surface] transition-colors cursor-pointer"
          >
            View Blog
          </a>
        </div>
      </div>
    </div>
  );
}
