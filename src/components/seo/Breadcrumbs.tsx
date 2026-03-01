import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { SITE_CONFIG } from '../../lib/constants.js';
import { JsonLd } from './JsonLd.js';
import { createBreadcrumbSchema } from './schema.js';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Build schema.org structured data
  const schemaItems = [
    { name: 'Home', url: SITE_CONFIG.url },
    ...items.map(item => ({
      name: item.label,
      url: item.href ? `${SITE_CONFIG.url}${item.href}` : ''
    })).filter(item => item.url)
  ];

  return (
    <>
      <JsonLd data={createBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-1 text-sm">
          <li className="flex items-center">
            <Link
              to="/"
              className="flex items-center text-[--text-secondary] hover:text-[--primary] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[--primary] rounded"
              aria-label="Home"
            >
              <Home className="w-4 h-4" />
            </Link>
          </li>
          {items.map((item) => (
            <li key={item.label} className="flex items-center gap-1">
              <ChevronRight className="w-4 h-4 text-[--text-muted]" />
              {item.href ? (
                <Link
                  to={item.href}
                  className="text-[--text-secondary] hover:text-[--primary] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[--primary] rounded"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[--text]" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
