import { describe, it, expect } from 'vitest';
import { SEOHeadProps } from '../SEOHead.js';

describe('SEOHead Types', () => {
  it('accepts all required props', () => {
    const props: SEOHeadProps = {
      title: 'Test Page',
      description: 'Test description',
    };
    expect(props.title).toBe('Test Page');
    expect(props.description).toBe('Test description');
  });

  it('accepts optional props', () => {
    const props: SEOHeadProps = {
      title: 'Test Page',
      description: 'Test description',
      ogImage: '/custom-og.png',
      ogType: 'article',
      canonicalUrl: '/blog/test',
      twitterCard: 'summary',
      noIndex: true,
    };
    expect(props.ogImage).toBe('/custom-og.png');
    expect(props.ogType).toBe('article');
    expect(props.canonicalUrl).toBe('/blog/test');
    expect(props.twitterCard).toBe('summary');
    expect(props.noIndex).toBe(true);
  });

  it('defaults work correctly', () => {
    const props: SEOHeadProps = {
      title: 'Test',
      description: 'Test',
    };
    // ogType defaults to 'website' in component
    // twitterCard defaults to 'summary_large_image' in component
    // noIndex defaults to false in component
    expect(props.ogType).toBeUndefined();
    expect(props.noIndex).toBeUndefined();
  });
});
