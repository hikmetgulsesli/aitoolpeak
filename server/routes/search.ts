import { Router, Request, Response } from 'express';
import { searchArticles } from '../utils/article-loader.js';

const router = Router();

// GET /api/search?q= - Search articles
router.get('/', (req: Request, res: Response) => {
  try {
    const query = req.query.q as string;

    if (!query || query.trim().length === 0) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Search query is required',
          details: [{ field: 'q', message: 'Query parameter "q" is required' }]
        }
      });
      return;
    }

    const results = searchArticles(query.trim());

    res.json({
      data: results,
      meta: {
        query: query.trim(),
        total: results.length
      }
    });
  } catch (error) {
    console.error('Error searching articles:', error);
    res.status(500).json({
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Failed to search articles'
      }
    });
  }
});

export { router as searchRouter };
