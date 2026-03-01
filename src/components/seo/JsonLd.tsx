import { Helmet } from 'react-helmet-async';

interface JsonLdProps {
  data: Record<string, unknown>;
}

// Escape </script> to prevent XSS
function escapeJsonLd(json: string): string {
  return json.replace(/<\/script>/gi, '<\\/script>');
}

export function JsonLd({ data }: JsonLdProps) {
  const jsonString = escapeJsonLd(JSON.stringify(data));
  return (
    <Helmet>
      <script type="application/ld+json">
        {jsonString}
      </script>
    </Helmet>
  );
}
