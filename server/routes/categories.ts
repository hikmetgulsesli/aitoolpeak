import { Router, Request, Response } from 'express';
import { getCategories } from '../utils/article-loader.js';

const router = Router();

// GET /api/categories - List all categories with article counts
router.get('/', (req: Request, res: Response) => {
  try {
    const categories = getCategories();
    res.json({
      data: categories
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Failed to fetch categories'
      }
    });
  }
});

export { router as categoriesRouter };
