# Project Memory

## Completed Stories
### US-005: Layout Components [done]
- Files: Created Button component with primary/secondary/ghost variants; Created Badge component with category-specific colors for all 5 categories; Created Card component with hover lift animation (translateY + shadow); Updated Pagination component with accessibility (ARIA labels, focus states); Created ScrollToTop component with scroll threshold and smooth scroll; Updated LoadingSpinner with accessibility (role=status, aria-label); Created index.ts barrel export for all UI components; Updated index.css with design tokens and dark mode support

### US-002: Markdown Content System [done]
- Files: Fixed lint errors in useTheme.ts (useSyncExternalStore for theme state) and useArticles.ts (dependency array). All markdown content system functionality already implemented in article-loader.ts including: article loading from content/articles/, YAML frontmatter parsing with gray-matter, markdown to HTML conversion with heading IDs via marked, syntax highlighting via highlight.js, Map-based article caching, Lunr search index building, and TypeScript types (ArticleMeta, Article, Heading).

### US-003: Express API Routes [done]
- Files: Implemented Express API routes: GET /api/articles (paginated with category/tag/featured filters), GET /api/articles/:slug (full article + HTML + related), GET /api/categories (with article counts), GET /api/search (full-text search via lunr), POST /api/contact (JSONL logging), GET /sitemap.xml (XML generation). Configured Express server with static file serving (1-year cache for /assets/) and SPA catch-all.

