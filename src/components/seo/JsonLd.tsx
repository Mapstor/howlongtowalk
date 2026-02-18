/**
 * Generic JSON-LD component for injecting structured data.
 * Renders a <script type="application/ld+json"> tag with the provided data.
 */

interface JsonLdProps {
  /** The structured data object (will be JSON.stringify'd) */
  data: Record<string, unknown>;
}

/**
 * Injects JSON-LD structured data into the page.
 *
 * @example
 * <JsonLd data={{
 *   "@context": "https://schema.org",
 *   "@type": "WebPage",
 *   "name": "How Long to Walk 1 Mile"
 * }} />
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 0),
      }}
    />
  );
}

/**
 * Helper to create a basic WebPage schema.
 */
export function createWebPageSchema({
  name,
  description,
  url,
  dateModified,
  datePublished,
}: {
  name: string;
  description: string;
  url: string;
  dateModified?: string;
  datePublished?: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    publisher: {
      "@type": "Organization",
      name: "howlongtowalk.org",
      url: "https://howlongtowalk.org",
    },
  };
}

/**
 * Helper to create an Article schema.
 */
export function createArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "howlongtowalk.org",
}: {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    author: {
      "@type": "Organization",
      name: authorName,
      url: "https://howlongtowalk.org",
    },
    publisher: {
      "@type": "Organization",
      name: "howlongtowalk.org",
      url: "https://howlongtowalk.org",
    },
  };
}
