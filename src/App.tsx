import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { HomePage } from './pages/HomePage.js';
import { Blog } from './pages/Blog.js';
import { ArticleDetail } from './pages/ArticleDetail.js';
import { Categories } from './pages/Categories.js';
import { About } from './pages/About.js';
import { Contact } from './pages/Contact.js';
import { Privacy } from './pages/Privacy.js';
import { Terms } from './pages/Terms.js';
import { Disclaimer } from './pages/Disclaimer.js';
import { NotFound } from './pages/NotFound.js';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<ArticleDetail />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
