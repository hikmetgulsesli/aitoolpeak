import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { JsonLd } from './JsonLd.js';
import { createBreadcrumbListSchema, type BreadcrumbItem } from './schema-helpers.js';

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  showHome?: boolean;
}

export function Breadcrumbs({ items, showHome = true }: BreadcrumbProps) {
  // Build full items array with home if requested
  const fullItems: BreadcrumbItem[] = showHome
    ? [{ name: 'Home', item: '/' }, ...items]
    : items;

  // Create schema for JSON-LD
  const breadcrumbSchema = createBreadcrumbListSchema(fullItems);

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-[--text-muted]">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;
            const isHome = item.item === '/';

            return (
              <li key={item.item} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                )}
                {isLast ? (
                  <span
                    className="font-medium text-[--text]"
                    aria-current="page"
                  >
                    {isHome && <Home className="inline h-4 w-4 mr-1" />}
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.item}
                    className="hover:text-[--primary] transition-colors duration-200 flex items-center"
                  >
                    {isHome && <Home className="inline h-4 w-4 mr-1" />}
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
