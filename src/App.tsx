import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { About } from './pages/About.js';
import { Contact } from './pages/Contact.js';
import { Privacy } from './pages/Privacy.js';
import { Terms } from './pages/Terms.js';
import { Disclaimer } from './pages/Disclaimer.js';
import { Categories } from './pages/Categories.js';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">AIToolPeak</h1>
                <p className="text-[--text-muted] mb-6">AI Tools review and comparison blog</p>
                <a
                  href="/about"
                  className="inline-block px-6 py-3 bg-[--primary] text-white rounded-lg hover:bg-[--primary-hover] transition-colors cursor-pointer"
                >
                  About Us
                </a>
              </div>
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
