import Link from "next/link";
import {
  getRelatedWalkingDistances,
  type WalkingDistanceConfig,
} from "@/data/walking-distances";
import { calcWalkingTime } from "@/lib/calculations";
import { formatTimeHuman } from "@/lib/formatTime";

interface InternalLinksProps {
  /** Current page slug (to exclude from links) */
  currentSlug: string;
  /** Type of page for correct URL prefix */
  pageType: "walking" | "running" | "how-far";
  /** Optional custom title */
  title?: string;
}

/**
 * Renders a "Related Pages" section with links to related content.
 *
 * @example
 * <InternalLinks currentSlug="1-mile" pageType="walking" />
 */
export default function InternalLinks({
  currentSlug,
  pageType,
  title = "Related Pages",
}: InternalLinksProps) {
  const related = getRelatedWalkingDistances(currentSlug);

  if (related.length === 0) {
    return null;
  }

  const urlPrefix =
    pageType === "walking"
      ? "/how-long-to-walk"
      : pageType === "running"
        ? "/how-long-to-run"
        : "/how-far-can-i-walk";

  return (
    <section className="mt-12 border-t border-gray-200 pt-8">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">{title}</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((config) => (
          <RelatedLink
            key={config.slug}
            config={config}
            urlPrefix={urlPrefix}
          />
        ))}
      </div>
    </section>
  );
}

interface RelatedLinkProps {
  config: WalkingDistanceConfig;
  urlPrefix: string;
}

function RelatedLink({ config, urlPrefix }: RelatedLinkProps) {
  // Calculate time at moderate pace (3.0 mph) for the subtitle
  const distanceInMiles =
    config.unit === "km" ? config.distance * 0.621371 : config.distance;
  const timeMinutes = calcWalkingTime(distanceInMiles, 3.0);
  const timeFormatted = formatTimeHuman(timeMinutes);

  return (
    <Link
      href={`${urlPrefix}/${config.slug}`}
      className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-teal-300 hover:shadow-md"
    >
      <div className="font-semibold text-gray-900 group-hover:text-teal-700">
        {config.displayName}
      </div>
      <div className="mt-1 text-sm text-gray-600">~{timeFormatted} to walk</div>
    </Link>
  );
}

/**
 * Renders a compact list of related links (for sidebars or smaller spaces).
 */
export function InternalLinksCompact({
  currentSlug,
  pageType,
}: Omit<InternalLinksProps, "title">) {
  const related = getRelatedWalkingDistances(currentSlug);

  if (related.length === 0) {
    return null;
  }

  const urlPrefix =
    pageType === "walking"
      ? "/how-long-to-walk"
      : pageType === "running"
        ? "/how-long-to-run"
        : "/how-far-can-i-walk";

  return (
    <div className="flex flex-wrap gap-2">
      {related.map((config) => (
        <Link
          key={config.slug}
          href={`${urlPrefix}/${config.slug}`}
          className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-teal-100 hover:text-teal-800"
        >
          {config.displayName}
        </Link>
      ))}
    </div>
  );
}
