import { Helmet } from 'react-helmet-async';
import type { JsonLdSchema } from './schema-helpers.js';

interface JsonLdProps {
  schema: JsonLdSchema | JsonLdSchema[];
}

export function JsonLd({ schema }: JsonLdProps) {
  const schemas = Array.isArray(schema) ? schema : [schema];
  const jsonLdString = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);

  return (
    <Helmet>
      <script type="application/ld+json">{jsonLdString}</script>
    </Helmet>
  );
}

export type { JsonLdSchema } from './schema-helpers.js';
