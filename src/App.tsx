import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Blog } from './pages/Blog.js';
import { Privacy } from './pages/Privacy.js';
import { About } from './pages/About.js';
import { Contact } from './pages/Contact.js';
import { Terms } from './pages/Terms.js';
import { Disclaimer } from './pages/Disclaimer.js';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[--bg] text-[--foreground]">
          <header className="border-b border-[--border]">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
              <a href="/" className="text-2xl font-bold hover:text-[--primary] transition-colors cursor-pointer">
                AIToolPeak
              </a>
              <div className="hidden md:flex items-center space-x-6">
                <a href="/" className="hover:text-[--primary] transition-colors cursor-pointer">Home</a>
                <a href="/blog" className="hover:text-[--primary] transition-colors cursor-pointer">Blog</a>
                <a href="/categories" className="hover:text-[--primary] transition-colors cursor-pointer">Categories</a>
                <a href="/about" className="hover:text-[--primary] transition-colors cursor-pointer">About</a>
                <a href="/contact" className="hover:text-[--primary] transition-colors cursor-pointer">Contact</a>
              </div>
            </nav>
          </header>
          
          <main>
            <Routes>
              <Route path="/" element={
                <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
                  <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[--primary] to-blue-600 bg-clip-text text-transparent">
                      AI Tools Reviews & Comparisons
                    </h1>
                    <p className="text-xl text-[--text-muted] max-w-2xl mx-auto mb-8">
                      Find the best AI coding assistants, models, and tools for your development workflow.
                    </p>
                    <div className="flex justify-center gap-4">
                      <a href="/blog" className="px-6 py-3 bg-[--primary] text-white rounded-lg hover:bg-[--primary-hover] transition-colors cursor-pointer">
                        Browse Reviews
                      </a>
                      <a href="/categories" className="px-6 py-3 border border-[--border] rounded-lg hover:border-[--primary] transition-colors cursor-pointer">
                        View Categories
                      </a>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 border border-[--border] rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer">
                      <h3 className="text-xl font-semibold mb-2">Coding Assistants</h3>
                      <p className="text-[--text-muted]">AI-powered tools that help you write better code</p>
                    </div>
                    <div className="p-6 border border-[--border] rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer">
                      <h3 className="text-xl font-semibold mb-2">AI Models</h3>
                      <p className="text-[--text-muted]">Large language models and APIs for developers</p>
                    </div>
                    <div className="p-6 border border-[--border] rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer">
                      <h3 className="text-xl font-semibold mb-2">DevOps</h3>
                      <p className="text-[--text-muted]">AI tools for infrastructure and operations</p>
                    </div>
                  </div>
                </div>
              } />
              <Route path="/blog" element={<Blog />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
            </Routes>
          </main>
          
          <footer className="border-t border-[--border] mt-auto">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">AIToolPeak</h4>
                  <p className="text-sm text-[--text-muted]">Your trusted source for AI tools reviews and comparisons.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-sm text-[--text-muted]">
                    <li><a href="/blog" className="hover:text-[--primary] cursor-pointer">Blog</a></li>
                    <li><a href="/categories" className="hover:text-[--primary] cursor-pointer">Categories</a></li>
                    <li><a href="/about" className="hover:text-[--primary] cursor-pointer">About</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Categories</h4>
                  <ul className="space-y-2 text-sm text-[--text-muted]">
                    <li><a href="/category/coding-assistants" className="hover:text-[--primary] cursor-pointer">Coding Assistants</a></li>
                    <li><a href="/category/ai-models" className="hover:text-[--primary] cursor-pointer">AI Models</a></li>
                    <li><a href="/category/devops" className="hover:text-[--primary] cursor-pointer">DevOps</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Legal</h4>
                  <ul className="space-y-2 text-sm text-[--text-muted]">
                    <li><a href="/privacy" className="hover:text-[--primary] cursor-pointer">Privacy Policy</a></li>
                    <li><a href="/terms" className="hover:text-[--primary] cursor-pointer">Terms of Service</a></li>
                    <li><a href="/disclaimer" className="hover:text-[--primary] cursor-pointer">Disclaimer</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-[--border] text-center text-sm text-[--text-muted]">
                © 2026 AIToolPeak. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
