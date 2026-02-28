import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ArticleDetail } from './pages/ArticleDetail.js';
import { NotFound } from './pages/NotFound.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog/:slug" element={<ArticleDetail />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/" element={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">AIToolPeak</h1>
              <p className="text-[--text-muted] mb-6">AI Tools review and comparison blog</p>
              <a
                href="/blog"
                className="inline-block px-6 py-3 bg-[--primary] text-white rounded-lg hover:bg-[--primary-hover] transition-colors cursor-pointer"
              >
                View Blog
              </a>
            </div>
          </div>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
