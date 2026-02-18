/**
 * Walking time page configurations.
 * Data extracted from content/how-far-can-i-walk/ markdown files.
 */

export interface WalkingTimeConfig {
  /** URL slug (e.g., "in-30-minutes") */
  slug: string;
  /** Time in minutes */
  minutes: number;
  /** Display name (e.g., "30 Minutes") */
  displayName: string;
  /** SEO meta title */
  metaTitle: string;
  /** SEO meta description */
  metaDescription: string;
  /** Monthly search volume */
  searchVolume: number;
  /** Related page slugs */
  relatedSlugs: string[];
  /** Path to markdown content file */
  contentFile: string;
  /** Category: short, medium, or long duration */
  category: "short" | "medium" | "long";
}

export const walkingTimes: WalkingTimeConfig[] = [
  // Short durations
  {
    slug: "in-10-minutes",
    minutes: 10,
    displayName: "10 Minutes",
    metaTitle: "How Far Can I Walk in 10 Minutes? Distance by Pace",
    metaDescription:
      "At a moderate pace (3 mph), you can walk about 0.5 miles (800 meters) in 10 minutes. See exact distances for all walking speeds plus an interactive map.",
    searchVolume: 2400,
    relatedSlugs: ["in-15-minutes", "in-20-minutes", "in-30-minutes"],
    contentFile: "content/how-far-can-i-walk/how-far-can-i-walk-in-10-minutes.md",
    category: "short",
  },
  {
    slug: "in-15-minutes",
    minutes: 15,
    displayName: "15 Minutes",
    metaTitle: "How Far Can I Walk in 15 Minutes? Distance by Pace",
    metaDescription:
      "At a moderate pace (3 mph), you can walk about 0.75 miles (1.2 km) in 15 minutes. See exact distances for all walking speeds plus an interactive map.",
    searchVolume: 2400,
    relatedSlugs: ["in-10-minutes", "in-20-minutes", "in-30-minutes"],
    contentFile: "content/how-far-can-i-walk/how-far-can-i-walk-in-15-minutes.md",
    category: "short",
  },
  {
    slug: "in-20-minutes",
    minutes: 20,
    displayName: "20 Minutes",
    metaTitle: "How Far Can I Walk in 20 Minutes? Distance by Pace",
    metaDescription:
      "At a moderate pace (3 mph), you can walk about 1 mile (1.6 km) in 20 minutes. See exact distances for all walking speeds plus an interactive map.",
    searchVolume: 1600,
    relatedSlugs: ["in-15-minutes", "in-30-minutes", "in-45-minutes"],
    contentFile: "content/how-far-can-i-walk/how-far-can-i-walk-in-20-minutes.md",
    category: "short",
  },

  // Medium durations
  {
    slug: "in-30-minutes",
    minutes: 30,
    displayName: "30 Minutes",
    metaTitle: "How Far Can I Walk in 30 Minutes? Distance by Pace",
    metaDescription:
      "At a moderate pace (3 mph), you can walk about 1.5 miles (2.4 km) in 30 minutes. See exact distances for all walking speeds plus an interactive map.",
    searchVolume: 6600,
    relatedSlugs: ["in-20-minutes", "in-45-minutes", "in-1-hour"],
    contentFile: "content/how-far-can-i-walk/how-far-can-i-walk-in-30-minutes.md",
    category: "medium",
  },
  {
    slug: "in-45-minutes",
    minutes: 45,
    displayName: "45 Minutes",
    metaTitle: "How Far Can I Walk in 45 Minutes? Distance by Pace",
    metaDescription:
      "At a moderate pace (3 mph), you can walk about 2.25 miles (3.6 km) in 45 minutes. See exact distances for all walking speeds plus an interactive map.",
    searchVolume: 1000,
    relatedSlugs: ["in-30-minutes", "in-1-hour", "in-2-hours"],
    contentFile: "content/how-far-can-i-walk/how-far-can-i-walk-in-45-minutes.md",
    category: "medium",
  },
  {
    slug: "in-1-hour",
    minutes: 60,
    displayName: "1 Hour",
    metaTitle: "How Far Can I Walk in 1 Hour? Distance by Pace",
    metaDescription:
      "At a moderate pace (3 mph), you can walk about 3 miles (4.8 km) in 1 hour. See exact distances for all walking speeds plus an interactive map.",
    searchVolume: 5400,
    relatedSlugs: ["in-45-minutes", "in-2-hours", "in-30-minutes"],
    contentFile: "content/how-far-can-i-walk/how-far-can-i-walk-in-1-hour.md",
    category: "medium",
  },

  // Long durations
  {
    slug: "in-2-hours",
    minutes: 120,
    displayName: "2 Hours",
    metaTitle: "How Far Can I Walk in 2 Hours? Distance by Pace",
    metaDescription:
      "At a moderate pace (3 mph), you can walk about 6 miles (9.6 km) in 2 hours. See exact distances for all walking speeds plus an interactive map.",
    searchVolume: 2900,
    relatedSlugs: ["in-1-hour", "in-3-hours", "in-5-hours"],
    contentFile: "content/how-far-can-i-walk/how-far-can-i-walk-in-2-hours.md",
    category: "long",
  },
  {
    slug: "in-3-hours",
    minutes: 180,
    displayName: "3 Hours",
    metaTitle: "How Far Can I Walk in 3 Hours? Distance by Pace",
    metaDescription:
      "At a moderate pace (3 mph), you can walk about 9 miles (14.5 km) in 3 hours. See exact distances for all walking speeds plus an interactive map.",
    searchVolume: 1300,
    relatedSlugs: ["in-2-hours", "in-5-hours", "in-a-day"],
    contentFile: "content/how-far-can-i-walk/how-far-can-i-walk-in-3-hours.md",
    category: "long",
  },
  {
    slug: "in-5-hours",
    minutes: 300,
    displayName: "5 Hours",
    metaTitle: "How Far Can I Walk in 5 Hours? Distance by Pace",
    metaDescription:
      "At a moderate pace (3 mph), you can walk about 15 miles (24 km) in 5 hours. See exact distances for all walking speeds plus an interactive map.",
    searchVolume: 480,
    relatedSlugs: ["in-3-hours", "in-a-day", "in-2-hours"],
    contentFile: "content/how-far-can-i-walk/how-far-can-i-walk-in-5-hours.md",
    category: "long",
  },
  {
    slug: "in-a-day",
    minutes: 480, // 8 hours of actual walking
    displayName: "All Day",
    metaTitle: "How Far Can I Walk in a Day? Maximum Distance Guide",
    metaDescription:
      "An average person can walk 20-30 miles (32-48 km) in a day with proper preparation. See realistic daily walking distances by fitness level and pace.",
    searchVolume: 4400,
    relatedSlugs: ["in-5-hours", "in-3-hours", "in-2-hours"],
    contentFile: "content/how-far-can-i-walk/how-far-can-i-walk-in-a-day.md",
    category: "long",
  },
];

/**
 * Get a walking time config by slug.
 */
export function getWalkingTimeBySlug(slug: string): WalkingTimeConfig | undefined {
  return walkingTimes.find((t) => t.slug === slug);
}

/**
 * Get all walking time slugs.
 */
export function getAllWalkingTimeSlugs(): string[] {
  return walkingTimes.map((t) => t.slug);
}

/**
 * Get related walking times for a given slug.
 */
export function getRelatedWalkingTimes(slug: string): WalkingTimeConfig[] {
  const config = getWalkingTimeBySlug(slug);
  if (!config) return [];

  return config.relatedSlugs
    .map((s) => getWalkingTimeBySlug(s))
    .filter((c): c is WalkingTimeConfig => c !== undefined);
}

/**
 * Get walking times by category.
 */
export function getWalkingTimesByCategory(
  category: WalkingTimeConfig["category"]
): WalkingTimeConfig[] {
  return walkingTimes.filter((t) => t.category === category);
}

/**
 * Get popular walking times sorted by search volume.
 */
export function getPopularWalkingTimes(limit: number = 6): WalkingTimeConfig[] {
  return [...walkingTimes]
    .sort((a, b) => b.searchVolume - a.searchVolume)
    .slice(0, limit);
}
