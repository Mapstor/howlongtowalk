import Link from "next/link";

export interface BreadcrumbSegment {
  /** Display label for this segment */
  label: string;
  /** URL path for this segment (omit for current page) */
  href?: string;
}

interface BreadcrumbsProps {
  /** Array of breadcrumb segments from root to current page */
  segments: BreadcrumbSegment[];
}

/**
 * Breadcrumb navigation component.
 * Renders: Home > Section > Current Page
 *
 * @example
 * <Breadcrumbs segments={[
 *   { label: "Home", href: "/" },
 *   { label: "How Long to Walk", href: "/how-long-to-walk" },
 *   { label: "1 Mile" }
 * ]} />
 */
export default function Breadcrumbs({ segments }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-4 text-sm text-gray-500"
    >
      <ol className="flex flex-wrap items-center gap-1">
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;

          return (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && (
                <span className="mx-1 text-gray-300" aria-hidden="true">
                  /
                </span>
              )}

              {segment.href && !isLast ? (
                <Link
                  href={segment.href}
                  className="transition-colors hover:text-teal-700"
                >
                  {segment.label}
                </Link>
              ) : (
                <span
                  className={isLast ? "text-gray-700" : ""}
                  aria-current={isLast ? "page" : undefined}
                >
                  {segment.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * Helper to generate breadcrumb segments for walking pages.
 */
export function getWalkingBreadcrumbs(pageLabel: string): BreadcrumbSegment[] {
  return [
    { label: "Home", href: "/" },
    { label: "How Long to Walk", href: "/how-long-to-walk" },
    { label: pageLabel },
  ];
}

/**
 * Helper to generate breadcrumb segments for running pages.
 */
export function getRunningBreadcrumbs(pageLabel: string): BreadcrumbSegment[] {
  return [
    { label: "Home", href: "/" },
    { label: "How Long to Run", href: "/how-long-to-run" },
    { label: pageLabel },
  ];
}

/**
 * Helper to generate breadcrumb segments for "how far" pages.
 */
export function getHowFarBreadcrumbs(pageLabel: string): BreadcrumbSegment[] {
  return [
    { label: "Home", href: "/" },
    { label: "How Far Can I Walk", href: "/how-far-can-i-walk" },
    { label: pageLabel },
  ];
}
