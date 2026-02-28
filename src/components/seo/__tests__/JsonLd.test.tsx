import { describe, it, expect } from 'vitest';
import { 
  createWebSiteSchema, 
  createArticleSchema, 
  createBreadcrumbListSchema 
} from '../schema-helpers.js';

describe('createWebSiteSchema', () => {
  it('creates valid WebSite schema', () => {
    const schema = createWebSiteSchema();
    
    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('WebSite');
    expect(schema.name).toBe('AIToolPeak');
    expect(schema.url).toBe('https://aitoolpeak.setrox.com.tr');
    expect(schema.description).toContain('AI Tools');
  });

  it('includes search action when searchUrl provided', () => {
    const schema = createWebSiteSchema('/search?q={search_term_string}');
    
    expect(schema.potentialAction).toEqual({
      '@type': 'SearchAction',
      target: 'https://aitoolpeak.setrox.com.tr/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    });
  });

  it('does not include search action when searchUrl not provided', () => {
    const schema = createWebSiteSchema();
    
    expect(schema.potentialAction).toBeUndefined();
  });
});

describe('createArticleSchema', () => {
  it('creates valid Article schema', () => {
    const schema = createArticleSchema({
      title: 'Test Article',
      description: 'Test description',
      slug: 'test-article',
      date: '2026-03-01',
      author: 'John Doe',
    });
    
    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('Article');
    expect(schema.headline).toBe('Test Article');
    expect(schema.description).toBe('Test description');
    expect(schema.author['@type']).toBe('Person');
    expect(schema.author.name).toBe('John Doe');
    expect(schema.publisher['@type']).toBe('Organization');
    expect(schema.mainEntityOfPage['@type']).toBe('WebPage');
  });

  it('includes dateModified when updated provided', () => {
    const schema = createArticleSchema({
      title: 'Test',
      description: 'Test',
      slug: 'test',
      date: '2026-03-01',
      updated: '2026-03-02',
      author: 'John',
    });
    
    expect(schema.dateModified).toBeDefined();
    expect(schema.dateModified).toContain('2026-03-02');
  });

  it('uses provided ogImage when available', () => {
    const schema = createArticleSchema({
      title: 'Test',
      description: 'Test',
      slug: 'test',
      date: '2026-03-01',
      author: 'John',
      ogImage: '/custom-image.png',
    });
    
    expect(schema.image).toContain('https://aitoolpeak.setrox.com.tr/custom-image.png');
  });

  it('handles absolute URLs for ogImage', () => {
    const schema = createArticleSchema({
      title: 'Test',
      description: 'Test',
      slug: 'test',
      date: '2026-03-01',
      author: 'John',
      ogImage: 'https://cdn.example.com/image.png',
    });
    
    expect(schema.image).toContain('https://cdn.example.com/image.png');
  });

  it('includes authorImage when provided', () => {
    const schema = createArticleSchema({
      title: 'Test',
      description: 'Test',
      slug: 'test',
      date: '2026-03-01',
      author: 'John',
      authorImage: '/john.png',
    });
    
    expect(schema.author.image).toBe('/john.png');
  });
});

describe('createBreadcrumbListSchema', () => {
  it('creates valid BreadcrumbList schema', () => {
    const schema = createBreadcrumbListSchema([
      { name: 'Home', item: '/' },
      { name: 'Blog', item: '/blog' },
      { name: 'Article', item: '/blog/article' },
    ]);
    
    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('BreadcrumbList');
    expect(schema.itemListElement).toHaveLength(3);
    expect(schema.itemListElement[0]['@type']).toBe('ListItem');
    expect(schema.itemListElement[0].position).toBe(1);
    expect(schema.itemListElement[0].name).toBe('Home');
    expect(schema.itemListElement[0].item).toBe('https://aitoolpeak.setrox.com.tr/');
  });

  it('handles absolute URLs in items', () => {
    const schema = createBreadcrumbListSchema([
      { name: 'External', item: 'https://example.com/page' },
    ]);
    
    expect(schema.itemListElement[0].item).toBe('https://example.com/page');
  });
});
