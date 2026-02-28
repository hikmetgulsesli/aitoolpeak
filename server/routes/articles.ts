import { Router, Request, Response } from 'express';
import { getArticles, getArticleBySlug, getRelatedArticles } from '../utils/article-loader.js';

const router = Router();

// GET /api/articles - List articles with pagination and filters
router.get('/', (req: Request, res: Response) => {
  try {
    const category = req.query.category as string | undefined;
    const tag = req.query.tag as string | undefined;
    const featured = req.query.featured === 'true' ? true : 
                     req.query.featured === 'false' ? false : undefined;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 9;

    const result = getArticles({
      category,
      tag,
      featured,
      page,
      limit
    });

    res.json({
      data: result.data,
      meta: result.meta
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Failed to fetch articles'
      }
    });
  }
});

// GET /api/articles/:slug - Get single article with full content
router.get('/:slug', (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const article = getArticleBySlug(slug);

    if (!article) {
      res.status(404).json({
        error: {
          code: 'NOT_FOUND',
          message: `Article with slug "${slug}" not found`
        }
      });
      return;
    }

    const relatedArticles = getRelatedArticles(slug, 3);

    res.json({
      data: {
        ...article,
        relatedArticles
      }
    });
  } catch (error) {
    console.error('Error fetching article:', error);
    res.status(500).json({
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Failed to fetch article'
      }
    });
  }
});

export { router as articlesRouter };
