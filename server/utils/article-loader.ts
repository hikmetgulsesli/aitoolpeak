import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { marked } from 'marked';
import hljs from 'highlight.js';
import lunr from 'lunr';
import type { Article, ArticleMeta, Category, Heading } from '../types.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ARTICLES_DIR = path.join(__dirname, '../../content/articles');

// Shared slugify function - used by both marked renderer and extractHeadings
export function slugify(text: string): string {
  return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
}

// Lunr search index for performance
let searchIndex: lunr.Index | null = null;

// In-memory cache
const articlesCache = new Map<string, Article>();
const articlesList: ArticleMeta[] = [];

const categories: Category[] = [
  {
    id: 'coding-assistants',
    name: 'Coding Assistants',
    description: 'AI-powered coding assistants and pair programmers',
    slug: 'coding-assistants',
    articleCount: 0
  },
  {
    id: 'ai-models',
    name: 'AI Models',
    description: 'Large language models and AI APIs',
    slug: 'ai-models',
    articleCount: 0
  },
  {
    id: 'devops',
    name: 'DevOps',
    description: 'AI tools for DevOps and infrastructure',
    slug: 'devops',
    articleCount: 0
  },
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'AI tools for web developers',
    slug: 'web-development',
    articleCount: 0
  },
  {
    id: 'tools-comparison',
    name: 'Tools Comparison',
    description: 'Side-by-side comparisons of AI tools',
    slug: 'tools-comparison',
    articleCount: 0
  }
];

// Configure marked with syntax highlighting
marked.use({
  renderer: {
    code({ text, lang }: { text: string; lang?: string }) {
      const validLang = lang && hljs.getLanguage(lang) ? lang : 'plaintext';
      const highlighted = hljs.highlight(text, { language: validLang }).value;
      return `\u003cpre\u003e\u003ccode class="hljs language-${validLang}"\u003e${highlighted}\u003c/code\u003e\u003c/pre\u003e`;
    },
    heading({ text, depth }: { text: string; depth: number }) {
      const id = slugify(text);
      return `\u003ch${depth} id="${id}"\u003e${text}\u003c/h${depth}\u003e`;
    },
    table({ header, rows }: { header: any[]; rows: any[][] }) {
      const gt = (c: any): string => typeof c === "string" ? c : c?.text ?? String(c ?? "");
      const thead = `\u003cthead\u003e\u003ctr\u003e${header.map((h: any) => `\u003cth\u003e${gt(h)}\u003c/th\u003e`).join('')}\u003c/tr\u003e\u003c/thead\u003e`;
      const tbody = `\u003ctbody\u003e${rows.map(row => `\u003ctr\u003e${row.map((cell: any) => `\u003ctd\u003e${gt(cell)}\u003c/td\u003e`).join('')}\u003c/tr\u003e`).join('')}\u003c/tbody\u003e`;
      return `\u003cdiv class="table-wrapper"\u003e\u003ctable\u003e${thead}${tbody}\u003c/table\u003e\u003c/div\u003e`;
    }
  }
});

export async function loadArticles(): Promise<void> {
  try {
    const files = await fs.readdir(ARTICLES_DIR);
    const mdFiles = files.filter(f => f.endsWith('.md'));

    for (const file of mdFiles) {
      const filePath = path.join(ARTICLES_DIR, file);
      const content = await fs.readFile(filePath, 'utf-8');
      const { data, content: markdownContent } = matter(content);
      
      const html = await marked.parse(markdownContent);
      const headings = extractHeadings(markdownContent);

      const article: Article = {
        title: data.title,
        slug: data.slug,
        date: data.date,
        updated: data.updated,
        category: data.category,
        description: data.description,
        author: data.author,
        tags: data.tags || [],
        readTime: data.readTime || estimateReadTime(markdownContent),
        featured: data.featured || false,
        content: markdownContent,
        html,
        headings
      };

      articlesCache.set(article.slug, article);
      articlesList.push({
        title: article.title,
        slug: article.slug,
        date: article.date,
        updated: article.updated,
        category: article.category,
        description: article.description,
        author: article.author,
        tags: article.tags,
        readTime: article.readTime,
        featured: article.featured,
      });
    }

    // Sort by date descending
    articlesList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Update category counts
    updateCategoryCounts();

    console.log(`Loaded ${articlesList.length} articles`);
    
    // Build search index for performant searches
    buildSearchIndex();
  } catch (error) {
    console.error('Error loading articles:', error);
    // Create articles directory if it doesn't exist
    await fs.mkdir(ARTICLES_DIR, { recursive: true });
  }
}

function extractHeadings(content: string): Heading[] {
  const headings: Heading[] = [];
  const lines = content.split('\n');
  
  for (const line of lines) {
    const match = line.match(/^(#{1,6})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      headings.push({ id, text, level });
    }
  }
  
  return headings;
}

function estimateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

function updateCategoryCounts(): void {
  for (const category of categories) {
    category.articleCount = articlesList.filter(a => a.category === category.id).length;
  }
}

export function getArticles(options: {
  category?: string;
  tag?: string;
  featured?: boolean;
  page?: number;
  limit?: number;
} = {}): { data: ArticleMeta[]; meta: { page: number; limit: number; total: number; totalPages: number } } {
  let filtered = [...articlesList];

  if (options.category) {
    filtered = filtered.filter(a => a.category === options.category);
  }

  if (options.tag) {
    filtered = filtered.filter(a => a.tags.includes(options.tag));
  }

  if (options.featured !== undefined) {
    filtered = filtered.filter(a => a.featured === options.featured);
  }

  const page = options.page || 1;
  const limit = options.limit || 9;
  const total = filtered.length;
  const totalPages = Math.ceil(total / limit);
  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    data: filtered.slice(start, end),
    meta: {
      page,
      limit,
      total,
      totalPages
    }
  };
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articlesCache.get(slug);
}

export function getRelatedArticles(slug: string, limit: number = 3): ArticleMeta[] {
  const article = articlesCache.get(slug);
  if (!article) return [];

  return articlesList
    .filter(a => a.slug !== slug && (a.category === article.category || a.tags.some(t => article.tags.includes(t))))
    .slice(0, limit);
}

// Build lunr search index for performance
function buildSearchIndex(): void {
  searchIndex = lunr(function () {
    this.ref('slug');
    this.field('title', { boost: 10 });
    this.field('description', { boost: 5 });
    this.field('tags', { boost: 3 });
    this.field('content');

    articlesList.forEach(article => {
      const fullArticle = articlesCache.get(article.slug);
      this.add({
        slug: article.slug,
        title: article.title,
        description: article.description,
        tags: article.tags.join(' '),
        content: fullArticle?.content || ''
      });
    });
  });
}

export function searchArticles(query: string): ArticleMeta[] {
  if (!searchIndex) {
    buildSearchIndex();
  }
  
  try {
    const results = searchIndex!.search(query);
    return results.map(result => articlesList.find(a => a.slug === result.ref)!).filter(Boolean);
  } catch {
    // Fallback to simple search if query syntax is invalid
    const lowercaseQuery = query.toLowerCase();
    return articlesList.filter(article => {
      const searchable = [
        article.title,
        article.description,
        ...article.tags,
        articlesCache.get(article.slug)?.content || ''
      ].join(' ').toLowerCase();
      
      return searchable.includes(lowercaseQuery);
    });
  }
}

export function getCategories(): Category[] {
  return [...categories];
}

export function getAllArticles(): ArticleMeta[] {
  return [...articlesList];
}
