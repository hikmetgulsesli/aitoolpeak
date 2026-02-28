import { Router, Request, Response } from 'express';
import { getAllArticles } from '../utils/article-loader.js';
import { SITE_URL } from '../index.js';

const router = Router();

// GET /sitemap.xml - Generate XML sitemap
router.get('/', (req: Request, res: Response) => {
  try {
    const baseUrl = SITE_URL || 'https://aitoolpeak.setrox.com.tr';
    const articles = getAllArticles();

    // Static pages
    const staticPages = [
      { url: '/', priority: '1.0', changefreq: 'daily' },
      { url: '/blog', priority: '0.9', changefreq: 'daily' },
      { url: '/categories', priority: '0.8', changefreq: 'weekly' },
      { url: '/about', priority: '0.7', changefreq: 'monthly' },
      { url: '/contact', priority: '0.6', changefreq: 'monthly' },
      { url: '/privacy', priority: '0.4', changefreq: 'yearly' },
      { url: '/terms', priority: '0.4', changefreq: 'yearly' },
      { url: '/disclaimer', priority: '0.4', changefreq: 'yearly' }
    ];

    // Category pages
    const categories = ['coding-assistants', 'ai-models', 'devops', 'web-development', 'tools-comparison'];
    const categoryUrls = categories.map(cat => ({
      url: `/category/${cat}`,
      priority: '0.7',
      changefreq: 'weekly'
    }));

    // Article pages
    const articleUrls = articles.map(article => ({
      url: `/blog/${article.slug}`,
      priority: article.featured ? '0.8' : '0.6',
      changefreq: 'monthly',
      lastmod: article.updated || article.date
    }));

    const allUrls = [...staticPages, ...categoryUrls, ...articleUrls];

    const sitemap = `\u003c?xml version="1.0" encoding="UTF-8"?\u003e
\u003curlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\u003e
${allUrls.map(item => `  \u003curl\u003e
    \u003cloc\u003e${baseUrl}${item.url}\u003c/loc\u003e
    \u003cpriority\u003e${item.priority}\u003c/priority\u003e
    \u003cchangefreq\u003e${item.changefreq}\u003c/changefreq\u003e${item.lastmod ? `
    \u003clastmod\u003e${item.lastmod}\u003c/lastmod\u003e` : ''}
  \u003c/url\u003e`).join('\n')}
\u003c/urlset\u003e`;

    res.setHeader('Content-Type', 'application/xml');
    res.send(sitemap);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).json({
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Failed to generate sitemap'
      }
    });
  }
});

export { router as sitemapRouter };
