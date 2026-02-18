import JsonLd from "./JsonLd";

export interface BreadcrumbItem {
  /** Display name for this breadcrumb */
  name: string;
  /** Full URL for this breadcrumb (required for all except last item) */
  url?: string;
}

interface BreadcrumbSchemaProps {
  /** Array of breadcrumb items from root to current page */
  items: BreadcrumbItem[];
}

/**
 * Generates BreadcrumbList JSON-LD schema.
 *
 * Schema.org spec: https://schema.org/BreadcrumbList
 * Google guidelines: https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
 *
 * @example
 * <BreadcrumbSchema items={[
 *   { name: "Home", url: "https://howlongtowalk.org" },
 *   { name: "How Long to Walk", url: "https://howlongtowalk.org/how-long-to-walk" },
 *   { name: "1 Mile" }
 * ]} />
 */
export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  if (!items || items.length === 0) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };

  return <JsonLd data={schema} />;
}

/**
 * Create BreadcrumbList schema object directly (without rendering).
 */
export function createBreadcrumbSchema(items: BreadcrumbItem[]): Record<string, unknown> | null {
  if (!items || items.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
}

const BASE_URL = "https://howlongtowalk.org";

/**
 * Helper to generate breadcrumb items for walking pages.
 */
export function getWalkingBreadcrumbItems(pageLabel: string): BreadcrumbItem[] {
  return [
    { name: "Home", url: BASE_URL },
    { name: "How Long to Walk", url: `${BASE_URL}/how-long-to-walk` },
    { name: pageLabel },
  ];
}

/**
 * Helper to generate breadcrumb items for running pages.
 */
export function getRunningBreadcrumbItems(pageLabel: string): BreadcrumbItem[] {
  return [
    { name: "Home", url: BASE_URL },
    { name: "How Long to Run", url: `${BASE_URL}/how-long-to-run` },
    { name: pageLabel },
  ];
}

/**
 * Helper to generate breadcrumb items for "how far" pages.
 */
export function getHowFarBreadcrumbItems(pageLabel: string): BreadcrumbItem[] {
  return [
    { name: "Home", url: BASE_URL },
    { name: "How Far Can I Walk", url: `${BASE_URL}/how-far-can-i-walk` },
    { name: pageLabel },
  ];
}

/**
 * Helper to generate breadcrumb items from a URL path.
 *
 * @example
 * getBreadcrumbItemsFromPath("/how-long-to-walk/1-mile")
 * // Returns: [
 * //   { name: "Home", url: "https://howlongtowalk.org" },
 * //   { name: "How Long to Walk", url: "https://howlongtowalk.org/how-long-to-walk" },
 * //   { name: "1 Mile" }
 * // ]
 */
export function getBreadcrumbItemsFromPath(
  path: string,
  lastSegmentLabel?: string
): BreadcrumbItem[] {
  const segments = path.split("/").filter(Boolean);
  const items: BreadcrumbItem[] = [{ name: "Home", url: BASE_URL }];

  let currentPath = "";
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;

    // Format segment name: "how-long-to-walk" -> "How Long to Walk"
    const formattedName =
      isLast && lastSegmentLabel
        ? lastSegmentLabel
        : segment
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

    items.push({
      name: formattedName,
      ...(isLast ? {} : { url: `${BASE_URL}${currentPath}` }),
    });
  });

  return items;
}
