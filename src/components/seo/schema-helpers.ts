export interface WebSiteSchema {
  '@context': 'https://schema.org';
  '@type': 'WebSite';
  name: string;
  url: string;
  description: string;
  potentialAction?: {
    '@type': 'SearchAction';
    target: string;
    'query-input': string;
  };
}

export interface ArticleSchema {
  '@context': 'https://schema.org';
  '@type': 'Article';
  headline: string;
  description: string;
  image: string[];
  datePublished: string;
  dateModified?: string;
  author: {
    '@type': 'Person' | 'Organization';
    name: string;
    image?: string;
  };
  publisher: {
    '@type': 'Organization';
    name: string;
    logo: {
      '@type': 'ImageObject';
      url: string;
    };
  };
  mainEntityOfPage: {
    '@type': 'WebPage';
    '@id': string;
  };
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface BreadcrumbListSchema {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }>;
}

export type JsonLdSchema = WebSiteSchema | ArticleSchema | BreadcrumbListSchema;

const SITE_URL = 'https://aitoolpeak.setrox.com.tr';
const SITE_NAME = 'AIToolPeak';
const LOGO_URL = `${SITE_URL}/logo.png`;

export function createWebSiteSchema(
  searchUrl?: string
): WebSiteSchema {
  const schema: WebSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'AI Tools review and comparison blog for developers. Discover the best AI coding assistants, models, and devops tools.',
  };

  if (searchUrl) {
    schema.potentialAction = {
      '@type': 'SearchAction',
      target: `${SITE_URL}${searchUrl}`,
      'query-input': 'required name=search_term_string',
    };
  }

  return schema;
}

export interface ArticleSchemaInput {
  title: string;
  description: string;
  slug: string;
  date: string;
  updated?: string;
  author: string;
  authorImage?: string;
  ogImage?: string;
}

export function createArticleSchema(input: ArticleSchemaInput): ArticleSchema {
  const articleUrl = `${SITE_URL}/blog/${input.slug}`;
  const images = input.ogImage 
    ? [input.ogImage.startsWith('http') ? input.ogImage : `${SITE_URL}${input.ogImage}`]
    : [`${SITE_URL}/og-default.png`];

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    image: images,
    datePublished: new Date(input.date).toISOString(),
    ...(input.updated && { dateModified: new Date(input.updated).toISOString() }),
    author: {
      '@type': 'Person',
      name: input.author,
      ...(input.authorImage && { image: input.authorImage }),
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
  };
}

export function createBreadcrumbListSchema(
  items: BreadcrumbItem[]
): BreadcrumbListSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item.startsWith('http') ? item.item : `${SITE_URL}${item.item}`,
    })),
  };
}
