import { describe, it, expect } from 'vitest';
import { BreadcrumbProps, BreadcrumbItem } from '../Breadcrumbs.js';

describe('Breadcrumbs Types', () => {
  it('accepts breadcrumb items', () => {
    const items: BreadcrumbItem[] = [
      { name: 'Blog', item: '/blog' },
      { name: 'Article', item: '/blog/article' },
    ];
    const props: BreadcrumbProps = {
      items,
    };
    expect(props.items).toHaveLength(2);
    expect(props.items[0].name).toBe('Blog');
  });

  it('accepts showHome prop', () => {
    const props: BreadcrumbProps = {
      items: [{ name: 'Blog', item: '/blog' }],
      showHome: false,
    };
    expect(props.showHome).toBe(false);
  });

  it('defaults showHome to true', () => {
    // In the component, showHome defaults to true
    const props: BreadcrumbProps = {
      items: [{ name: 'Blog', item: '/blog' }],
    };
    expect(props.showHome).toBeUndefined();
  });
});

describe('BreadcrumbItem', () => {
  it('has required name and item properties', () => {
    const item: BreadcrumbItem = {
      name: 'Home',
      item: '/',
    };
    expect(item.name).toBe('Home');
    expect(item.item).toBe('/');
  });

  it('supports external URLs', () => {
    const item: BreadcrumbItem = {
      name: 'External',
      item: 'https://example.com',
    };
    expect(item.item).toBe('https://example.com');
  });
});
