import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../../lib/constants.js';
import { createWebSiteSchema, createArticleSchema } from './schema.js';

interface ArticleData {
  title: string;
  description: string;
  url: string;
  image?: string;
  author: string;
  publishedTime: string;
  modifiedTime?: string;
}

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  article?: ArticleData;
}

// Escape </script> to prevent XSS
function escapeJsonLd(json: string): string {
  return json.replace(/<\/script>/gi, '<\\/script>');
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  noindex = false,
  article,
}: SEOHeadProps) {
  const fullTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name;
  const metaDescription = description || SITE_CONFIG.description;
  const canonicalUrl = canonical ? `${SITE_CONFIG.url}${canonical}` : SITE_CONFIG.url;
  const imageUrl = ogImage || `${SITE_CONFIG.url}/og-image.jpg`;

  const schemaJson = article 
    ? escapeJsonLd(JSON.stringify(createArticleSchema(article)))
    : escapeJsonLd(JSON.stringify(createWebSiteSchema()));

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {schemaJson}
      </script>
    </Helmet>
  );
}
