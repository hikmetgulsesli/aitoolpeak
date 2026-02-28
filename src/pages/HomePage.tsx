import { Helmet } from 'react-helmet-async'

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>AIToolPeak - AI Tools Reviews & Comparisons</title>
        <meta 
          name="description" 
          content="Honest reviews and comparisons of AI tools for developers. Find the best AI coding assistants, models, and DevOps tools." 
        />
        <link rel="canonical" href="https://aitoolpeak.setrox.com.tr/" />
      </Helmet>

      <section 
        className="py-16 lg:py-24"
        style={{ backgroundColor: 'var(--surface)' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ 
                fontFamily: 'var(--font-heading)', 
                color: 'var(--text)',
                letterSpacing: 'var(--tracking-tight)'
              }}
            >
              Find the Best{' '}
              <span style={{ color: 'var(--primary)' }}>AI Tools</span>
              {' '}for Developers
            </h1>
            
            <p 
              className="text-lg md:text-xl mb-8"
              style={{ color: 'var(--text-muted)' }}
            >
              Honest reviews, hands-on testing, and detailed comparisons of 
              AI coding assistants, models, and DevOps tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all"
                style={{ 
                  backgroundColor: 'var(--primary)', 
                  color: 'var(--surface)',
                }}
              >
                Browse Articles
              </a>
              <a 
                href="/categories"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all border"
                style={{ 
                  borderColor: 'var(--border)',
                  color: 'var(--text)',
                }}
              >
                Explore Categories
              </a>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="py-16 lg:py-24"
        style={{ backgroundColor: 'var(--surface-alt)' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}
            >
              Coming Soon
            </h2>
            <p 
              className="text-lg"
              style={{ color: 'var(--text-muted)' }}
            >
              15 in-depth articles covering the best AI tools for developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Coding Assistants', desc: 'Claude Code, Cursor, Aider, and more' },
              { name: 'AI Models', desc: 'GPT-4, Claude, Gemini, Kimi, MiniMax' },
              { name: 'DevOps Tools', desc: 'AI-powered monitoring and automation' },
              { name: 'Web Development', desc: 'AI tools for frontend and full-stack' },
              { name: 'Comparisons', desc: 'Head-to-head tool showdowns' },
            ].map((category) => (
              <div 
                key={category.name}
                className="p-6 rounded-xl border transition-all hover:-translate-y-0.5"
                style={{ 
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border)',
                }}
              >
                <h3 
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}
                >
                  {category.name}
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {category.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
