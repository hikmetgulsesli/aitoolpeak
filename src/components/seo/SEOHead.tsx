import { Helmet } from 'react-helmet-async';

export interface SEOHeadProps {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  canonicalUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  noIndex?: boolean;
}

const SITE_NAME = 'AIToolPeak';
const DEFAULT_OG_IMAGE = '/og-default.png';
const SITE_URL = 'https://aitoolpeak.setrox.com.tr';

export function SEOHead({
  title,
  description,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  canonicalUrl,
  twitterCard = 'summary_large_image',
  noIndex = false,
}: SEOHeadProps) {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const fullCanonicalUrl = canonicalUrl ? `${SITE_URL}${canonicalUrl}` : undefined;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Canonical URL */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {fullCanonicalUrl && <meta property="og:url" content={fullCanonicalUrl} />}
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Theme Color */}
      <meta name="theme-color" content="#0f172a" />
      <meta name="color-scheme" content="light dark" />
    </Helmet>
  );
}
