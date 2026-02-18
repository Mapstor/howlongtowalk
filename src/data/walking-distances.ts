/**
 * Walking distance page data.
 * Each entry corresponds to a markdown content file and generates a static page.
 */

export interface WalkingDistanceConfig {
  /** URL slug (e.g., "1-mile", "5-km") */
  slug: string;
  /** Numeric distance value */
  distance: number;
  /** Unit of measurement */
  unit: "miles" | "km";
  /** Display name for UI (e.g., "1 Mile", "5 km") */
  displayName: string;
  /** SEO meta title from frontmatter */
  metaTitle: string;
  /** SEO meta description from frontmatter */
  metaDescription: string;
  /** Monthly search volume (for prioritization) */
  searchVolume: number;
  /** Related page slugs for internal linking */
  relatedSlugs: string[];
  /** Path to markdown content file */
  contentFile: string;
}

/**
 * All 22 walking distance pages.
 * Ordered by distance (miles first, then km).
 */
export const walkingDistances: WalkingDistanceConfig[] = [
  // Fractional miles
  {
    slug: "half-a-mile",
    distance: 0.5,
    unit: "miles",
    displayName: "Half a Mile",
    metaTitle: "How Long to Walk Half a Mile? Time by Pace & Age",
    metaDescription:
      "It takes 10 minutes to walk half a mile at an average pace. See exact times by pace, age, and fitness level. Based on walking speed data from 23,111 subjects.",
    searchVolume: 1900,
    relatedSlugs: ["1-mile", "1-5-miles", "1-km"],
    contentFile: "content/how-long-to-walk/how-long-to-walk-half-a-mile.md",
  },
  {
    slug: "1-mile",
    distance: 1,
    unit: "miles",
    displayName: "1 Mile",
    metaTitle: "How Long to Walk 1 Mile? Time by Pace & Age [Calculator]",
    metaDescription:
      "It takes 20 minutes to walk 1 mile at an average pace. Use our calculator for exact times by pace, age, and fitness level. Based on real walking speed data.",
    searchVolume: 22200,
    relatedSlugs: ["half-a-mile", "1-5-miles", "2-miles", "1-km"],
    contentFile: "content/how-long-to-walk/how-long-to-walk-1-mile.md",
  },
  {
    slug: "1-5-miles",
    distance: 1.5,
    unit: "miles",
    displayName: "1.5 Miles",
    metaTitle: "How Long to Walk 1.5 Miles? Time by Pace & Age",
    metaDescription:
      "It takes 30 minutes to walk 1.5 miles at an average pace. See exact times by pace, age, and fitness level. Based on walking speed data from 23,111 subjects.",
    searchVolume: 880,
    relatedSlugs: ["1-mile", "2-miles", "2-5-miles", "2-km"],
    contentFile: "content/how-long-to-walk/how-long-to-walk-1-5-miles.md",
  },
  {
    slug: "2-miles",
    distance: 2,
    unit: "miles",
    displayName: "2 Miles",
    metaTitle: "How Long to Walk 2 Miles? Time by Pace & Age",
    metaDescription:
      "It takes 40 minutes to walk 2 miles at an average pace. See exact times by pace, age, and fitness level. Based on walking speed data from 23,111 subjects.",
    searchVolume: 5400,
    relatedSlugs: ["1-mile", "1-5-miles", "2-5-miles", "3-miles", "3-km"],
    contentFile: "content/how-long-to-walk/how-long-to-walk-2-miles.md",
  },
  {
    slug: "2-5-miles",
    distance: 2.5,
    unit: "miles",
    displayName: "2.5 Miles",
    metaTitle: "How Long to Walk 2.5 Miles? Time by Pace & Age",
    metaDescription:
      "It takes 50 minutes to walk 2.5 miles at an average pace. See exact times by pace, age, and fitness level. Based on walking speed data from 23,111 subjects.",
    searchVolume: 720,
    relatedSlugs: ["2-miles", "3-miles", "3-5-miles"],
    contentFile: "content/how-long-to-walk/how-long-to-walk-2-5-miles.md",
  },
  {
    slug: "3-miles",
    distance: 3,
    unit: "miles",
    displayName: "3 Miles",
    metaTitle: "How Long to Walk 3 Miles? Time by Pace & Age",
    metaDescription:
      "It takes 1 hour to walk 3 miles at an average pace. See exact times by pace, age, and fitness level. Based on walking speed data from 23,111 subjects.",
    searchVolume: 500,
    relatedSlugs: ["2-miles", "2-5-miles", "3-5-miles", "4-miles", "5-km"],
    contentFile: "content/how-long-to-walk/how-long-to-walk-3-miles.md",
  },
  {
    slug: "3-5-miles",
    distance: 3.5,
    unit: "miles",
    displayName: "3.5 Miles",
    metaTitle: "How Long to Walk 3.5 Miles? Time by Pace & Age",
    metaDescription:
      "It takes 1 hour 10 minutes to walk 3.5 miles at an average pace. See exact times by pace, age, and fitness level. Based on real walking speed data.",
    searchVolume: 390,
    relatedSlugs: ["3-miles", "4-miles", "5-miles", "5-km"],
    contentFile: "content/how-long-to-walk/how-long-to-walk-3-5-miles.md",
  },
  {
    slug: "4-miles",
    distance: 4,
    unit: "miles",
    displayName: "4 Miles",
    metaTitle: "How Long to Walk 4 Miles? Time by Pace & Age",
    metaDescription:
      "It takes 1 hour 20 minutes to walk 4 miles at an average pace. See exact times by pace, age, and fitness level. Based on real walking speed data.",
    searchVolume: 500,
    relatedSlugs: ["3-miles", "3-5-miles", "5-miles", "6-miles"],
    contentFile: "content/how-long-to-walk/how-long-to-walk-4-miles.md",
  },
  {
    slug: "5-miles",
    distance: 5,
    unit: "miles",
    displayName: "5 Miles",
    metaTitle: "How Long to Walk 5 Miles? Time by Pace & Age [Calculator]",
    metaDescription:
      "It takes 1 hour 40 minutes to walk 5 miles at an average pace. Use our calculator for exact times by pace, age, and fitness level. Based on real walking speed data.",
    searchVolume: 8100,
    relatedSlugs: ["4-miles", "6-miles", "7-miles", "10-km"],
    contentFile: "content/how-long-to-walk/how-long-to-walk-5-miles.md",
  },
  {
    slug: "6-miles",
    distance: 6,
    unit: "miles",
    displayName: "6 Miles",
    metaTitle: "How Long to Walk 6 Miles? Time by Pace & Age",
    metaDescription:
      "It takes 2 hours to walk 6 miles at an average pace. See exact times by pace, age, and fitness level. Roughly a 10K on foot. Based on real walking speed data.",
    searchVolume: 1900,
    relatedSlugs: ["5-miles", "7-miles", "8-miles", "10-km"],
    contentFile: "content/how-long-to-walk/how-long-to-walk-6-miles.md",
  },
  {
    slug: "7-miles",
    distance: 7,
    unit: "miles",
    displayName: "7 Miles",
    metaTitle: "How Long to Walk 7 Miles? Time by Pace & Age",
    metaDescription:
      "It takes 2 hours 20 minutes to walk 7 miles at an average pace. See exact times by pace, age, and fitness level. Based on real walking speed data.",
    searchVolume: 1600,
    relatedSlugs: ["6-miles", "8-miles", "10-miles"],
    contentFile: "content/how-long-to-walk/how-long-to-walk-7-miles.md",
  },
  {
    slug: "8-miles",
    distance: 8,
    unit: "miles",
    displayName: "8 Miles",
    metaTitle: "How Long to Walk 8 Miles? Time by Pace & Age",
    metaDescription:
      "It takes 2 hours 40 minutes to walk 8 miles at an average pace. See exact times by pace, age, and fitness level. Based on real walking speed data.",
    searchVolume: 500,
    relatedSlugs: ["7-miles", "10-miles", "13-miles"],
    contentFile: "content/how-long-to-walk/how-long-to-walk-8-miles.md",
  },
  {
    slug: "10-miles",
    distance: 10,
    unit: "miles",
    displayName: "10 Miles",
    metaTitle: "How Long to Walk 10 Miles? Time by Pace & Age",
    metaDescription:
      "It takes 3 hours 20 minutes to walk 10 miles at an average pace. See exact times by pace and age, plus preparation tips. Based on real walking speed data.",
    searchVolume: 2900,
    relatedSlugs: ["8-miles", "13-miles", "15-miles"],
    contentFile: "content/how-long-to-walk/how-long-to-walk-10-miles.md",
  },
  {
    slug: "13-miles",
    distance: 13,
    unit: "miles",
    displayName: "13 Miles",
    metaTitle: "How Long to Walk 13 Miles? Half Marathon Walking Time",
    metaDescription:
      "It takes about 4 hours 22 minutes to walk 13 miles (half marathon distance) at average pace. See times by pace and age, plus race walking tips.",
    searchVolume: 590,
    relatedSlugs: ["10-miles", "15-miles", "26-miles"],
    contentFile: "content/how-long-to-walk/how-long-to-walk-13-miles.md",
  },
  {
    slug: "15-miles",
    distance: 15,
    unit: "miles",
    displayName: "15 Miles",
    metaTitle: "How Long to Walk 15 Miles? Time by Pace & Age",
    metaDescription:
      "It takes 5 hours to walk 15 miles at an average pace. See exact times by pace, age, and fitness, plus preparation tips for this full-day walk.",
    searchVolume: 1000,
    relatedSlugs: ["10-miles", "13-miles", "26-miles"],
    contentFile: "content/how-long-to-walk/how-long-to-walk-15-miles.md",
  },
  {
    slug: "26-miles",
    distance: 26.2,
    unit: "miles",
    displayName: "26 Miles (Marathon)",
    metaTitle: "How Long to Walk a Marathon? 26.2 Mile Walking Time",
    metaDescription:
      "It takes about 8 hours 44 minutes to walk a marathon (26.2 miles) at average pace. See times by pace and age, plus marathon walking tips and training.",
    searchVolume: 390,
    relatedSlugs: ["13-miles", "15-miles", "100-miles"],
    contentFile: "content/how-long-to-walk/how-long-to-walk-26-miles.md",
  },
  {
    slug: "100-miles",
    distance: 100,
    unit: "miles",
    displayName: "100 Miles",
    metaTitle: "How Long to Walk 100 Miles? Multi-Day Planning Guide",
    metaDescription:
      "It takes 33-50 hours of walking to cover 100 miles — typically 4-7 days. See daily mileage plans, preparation tips, and famous 100-mile walking routes.",
    searchVolume: 1000,
    relatedSlugs: ["26-miles", "15-miles"],
    contentFile: "content/how-long-to-walk/how-long-to-walk-100-miles.md",
  },
  // Kilometers
  {
    slug: "1-km",
    distance: 1,
    unit: "km",
    displayName: "1 km",
    metaTitle: "How Long to Walk 1 km? Time by Pace & Age",
    metaDescription:
      "It takes about 12 minutes to walk 1 km at an average pace. See exact times by pace, age, and fitness level. 1 km = 0.62 miles.",
    searchVolume: 500,
    relatedSlugs: ["half-a-mile", "1-mile", "2-km"],
    contentFile: "content/how-long-to-walk/how-long-to-walk-1-km.md",
  },
  {
    slug: "2-km",
    distance: 2,
    unit: "km",
    displayName: "2 km",
    metaTitle: "How Long to Walk 2 km? Time by Pace & Age",
    metaDescription:
      "It takes about 25 minutes to walk 2 km at an average pace. See exact times by pace, age, and fitness level. 2 km = 1.24 miles.",
    searchVolume: 170,
    relatedSlugs: ["1-km", "1-mile", "1-5-miles", "3-km"],
    contentFile: "content/how-long-to-walk/how-long-to-walk-2-km.md",
  },
  {
    slug: "3-km",
    distance: 3,
    unit: "km",
    displayName: "3 km",
    metaTitle: "How Long to Walk 3 km? Time by Pace & Age",
    metaDescription:
      "It takes about 37 minutes to walk 3 km at an average pace. See exact times by pace, age, and fitness level. 3 km = 1.86 miles.",
    searchVolume: 140,
    relatedSlugs: ["2-km", "2-miles", "5-km"],
    contentFile: "content/how-long-to-walk/how-long-to-walk-3-km.md",
  },
  {
    slug: "5-km",
    distance: 5,
    unit: "km",
    displayName: "5 km",
    metaTitle: "How Long to Walk 5 km (5K)? Time by Pace & Age",
    metaDescription:
      "It takes about 52 minutes to walk 5 km at an average pace. See exact times by pace, age, and fitness level. 5 km = 3.1 miles. Based on real walking speed data.",
    searchVolume: 2000,
    relatedSlugs: ["3-km", "3-miles", "10-km"],
    contentFile: "content/how-long-to-walk/how-long-to-walk-5-km.md",
  },
  {
    slug: "10-km",
    distance: 10,
    unit: "km",
    displayName: "10 km",
    metaTitle: "How Long to Walk 10 km (10K)? Time by Pace & Age",
    metaDescription:
      "It takes about 2 hours 5 minutes to walk 10 km at an average pace. See exact times by pace, age, and fitness level. 10 km = 6.2 miles.",
    searchVolume: 720,
    relatedSlugs: ["5-km", "5-miles", "6-miles"],
    contentFile: "content/how-long-to-walk/how-long-to-walk-10-km.md",
  },
];

/**
 * Lookup a walking distance config by slug.
 */
export function getWalkingDistanceBySlug(
  slug: string
): WalkingDistanceConfig | undefined {
  return walkingDistances.find((d) => d.slug === slug);
}

/**
 * Get all walking distance slugs for static generation.
 */
export function getAllWalkingDistanceSlugs(): string[] {
  return walkingDistances.map((d) => d.slug);
}

/**
 * Get related walking distance configs.
 */
export function getRelatedWalkingDistances(
  slug: string
): WalkingDistanceConfig[] {
  const config = getWalkingDistanceBySlug(slug);
  if (!config) return [];

  return config.relatedSlugs
    .map((s) => getWalkingDistanceBySlug(s))
    .filter((c): c is WalkingDistanceConfig => c !== undefined);
}

/**
 * Get popular walking distances (sorted by search volume).
 */
export function getPopularWalkingDistances(
  limit: number = 10
): WalkingDistanceConfig[] {
  return [...walkingDistances]
    .sort((a, b) => b.searchVolume - a.searchVolume)
    .slice(0, limit);
}
