import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Blog } from './pages/Blog.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog" element={<Blog />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
