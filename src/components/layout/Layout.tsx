import { useState } from 'react'
import type { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { Header } from './Header.js'
import { Footer } from './Footer.js'
import { MobileMenu } from './MobileMenu.js'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
  canonicalUrl?: string
}

export function Layout({
  children,
  title = 'AIToolPeak - AI Tools Reviews for Developers',
  description = 'Honest reviews and comparisons of AI tools for developers. Find the best AI coding assistants, models, and DevOps tools.',
  canonicalUrl,
}: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const siteUrl = 'https://aitoolpeak.setrox.com.tr'
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={fullCanonicalUrl} />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={fullCanonicalUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--surface)' }}>
        <Header onMenuToggle={setIsMobileMenuOpen} />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
