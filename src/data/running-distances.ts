/**
 * Running distance page configurations.
 * Data extracted from content/how-long-to-run/ markdown files.
 */

export interface RunningDistanceConfig {
  /** URL slug (e.g., "a-mile", "a-5k") */
  slug: string;
  /** Distance value */
  distance: number;
  /** Unit of measurement */
  unit: "miles" | "km";
  /** Display name (e.g., "1 Mile", "5K") */
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
  /** Race type category */
  category: "race" | "training" | "ultra" | "metric";
}

export const runningDistances: RunningDistanceConfig[] = [
  // Race Distances
  {
    slug: "a-mile",
    distance: 1,
    unit: "miles",
    displayName: "1 Mile",
    metaTitle: "How Long to Run a Mile? Average Times by Age & Level",
    metaDescription:
      "The average mile time is about 9-10 minutes for recreational runners. See times by pace, age, and experience level. Based on race data from 35 million results.",
    searchVolume: 5400,
    relatedSlugs: ["1-5-miles", "2-miles", "a-5k"],
    contentFile: "content/how-long-to-run/how-long-to-run-a-mile.md",
    category: "race",
  },
  {
    slug: "a-5k",
    distance: 3.107,
    unit: "miles",
    displayName: "5K",
    metaTitle: "How Long to Run a 5K? Average Times by Age & Level",
    metaDescription:
      "The average 5K time is about 32 minutes. See where your time ranks by age, gender, and experience level. Based on race data from 35 million results.",
    searchVolume: 3600,
    relatedSlugs: ["a-mile", "3-miles", "a-10k", "5-km"],
    contentFile: "content/how-long-to-run/how-long-to-run-a-5k.md",
    category: "race",
  },
  {
    slug: "a-10k",
    distance: 6.214,
    unit: "miles",
    displayName: "10K",
    metaTitle: "How Long to Run a 10K? Average Times by Age & Level",
    metaDescription:
      "The average 10K time is about 56 minutes. See where your time ranks by age, gender, and experience. Based on race data from 35 million results.",
    searchVolume: 1000,
    relatedSlugs: ["a-5k", "6-miles", "a-half-marathon", "10-km"],
    contentFile: "content/how-long-to-run/how-long-to-run-a-10k.md",
    category: "race",
  },
  {
    slug: "a-half-marathon",
    distance: 13.109,
    unit: "miles",
    displayName: "Half Marathon",
    metaTitle: "How Long to Run a Half Marathon? Average Finish Times",
    metaDescription:
      "The average half marathon finish time is about 2 hours 1 minute. See where your time ranks by age, gender, and level. Based on 35 million race results.",
    searchVolume: 1900,
    relatedSlugs: ["a-10k", "10-miles", "15-miles", "a-marathon"],
    contentFile: "content/how-long-to-run/how-long-to-run-a-half-marathon.md",
    category: "race",
  },
  {
    slug: "a-marathon",
    distance: 26.219,
    unit: "miles",
    displayName: "Marathon",
    metaTitle: "How Long to Run a Marathon? Average Finish Times",
    metaDescription:
      "The average marathon finish time is about 4 hours 21 minutes. See where your time ranks by age, gender, and experience. Based on 35 million race results.",
    searchVolume: 4400,
    relatedSlugs: ["a-half-marathon", "20-miles", "a-50k"],
    contentFile: "content/how-long-to-run/how-long-to-run-a-marathon.md",
    category: "race",
  },
  {
    slug: "a-50k",
    distance: 31.069,
    unit: "miles",
    displayName: "50K",
    metaTitle: "How Long to Run a 50K? Average Ultramarathon Times",
    metaDescription:
      "The average 50K finish time is about 5:30-6:00. See times by level, terrain, and experience. The entry point to ultramarathon running. 50K = 31.07 miles.",
    searchVolume: 10,
    relatedSlugs: ["a-marathon", "30-miles", "100-miles"],
    contentFile: "content/how-long-to-run/how-long-to-run-a-50k.md",
    category: "ultra",
  },

  // Training Distances
  {
    slug: "1-5-miles",
    distance: 1.5,
    unit: "miles",
    displayName: "1.5 Miles",
    metaTitle: "How Long to Run 1.5 Miles? Average & Military Times",
    metaDescription:
      "The average 1.5-mile run takes 12-15 minutes for fit adults. See times by pace, age, and fitness level. The standard Air Force, Navy, and FBI fitness test distance.",
    searchVolume: 210,
    relatedSlugs: ["a-mile", "2-miles", "3-miles"],
    contentFile: "content/how-long-to-run/how-long-to-run-1-5-miles.md",
    category: "training",
  },
  {
    slug: "2-miles",
    distance: 2,
    unit: "miles",
    displayName: "2 Miles",
    metaTitle: "How Long to Run 2 Miles? Average & Military Times",
    metaDescription:
      "The average 2-mile run takes 16-20 minutes for recreational runners. See times by pace, age, and fitness level. The standard US Army fitness test distance.",
    searchVolume: 1000,
    relatedSlugs: ["1-5-miles", "a-mile", "3-miles"],
    contentFile: "content/how-long-to-run/how-long-to-run-2-miles.md",
    category: "training",
  },
  {
    slug: "3-miles",
    distance: 3,
    unit: "miles",
    displayName: "3 Miles",
    metaTitle: "How Long to Run 3 Miles? Average & Marine PFT Times",
    metaDescription:
      "The average 3-mile run takes 24-30 minutes for recreational runners. See times by pace, age, and fitness level. The Marine Corps PFT distance and classic daily run.",
    searchVolume: 1300,
    relatedSlugs: ["2-miles", "a-5k", "4-miles"],
    contentFile: "content/how-long-to-run/how-long-to-run-3-miles.md",
    category: "training",
  },
  {
    slug: "4-miles",
    distance: 4,
    unit: "miles",
    displayName: "4 Miles",
    metaTitle: "How Long to Run 4 Miles? Average Times by Age & Level",
    metaDescription:
      "The average 4-mile run takes 32-40 minutes for recreational runners. See times by pace, age, and fitness level. A versatile training and race distance.",
    searchVolume: 590,
    relatedSlugs: ["3-miles", "5-miles", "a-5k"],
    contentFile: "content/how-long-to-run/how-long-to-run-4-miles.md",
    category: "training",
  },
  {
    slug: "5-miles",
    distance: 5,
    unit: "miles",
    displayName: "5 Miles",
    metaTitle: "How Long to Run 5 Miles? Average Times by Age & Level",
    metaDescription:
      "The average 5-mile run takes 40-50 minutes for recreational runners. See times by pace, age, and fitness level. The classic midweek training distance.",
    searchVolume: 1300,
    relatedSlugs: ["4-miles", "6-miles", "a-5k"],
    contentFile: "content/how-long-to-run/how-long-to-run-5-miles.md",
    category: "training",
  },
  {
    slug: "6-miles",
    distance: 6,
    unit: "miles",
    displayName: "6 Miles",
    metaTitle: "How Long to Run 6 Miles? Average Times by Age & Level",
    metaDescription:
      "The average 6-mile run takes 48-60 minutes for recreational runners. See times by pace, age, and level. Nearly a 10K — the standard long-run starter distance.",
    searchVolume: 590,
    relatedSlugs: ["5-miles", "7-miles", "a-10k"],
    contentFile: "content/how-long-to-run/how-long-to-run-6-miles.md",
    category: "training",
  },
  {
    slug: "7-miles",
    distance: 7,
    unit: "miles",
    displayName: "7 Miles",
    metaTitle: "How Long to Run 7 Miles? Average Times by Age & Level",
    metaDescription:
      "The average 7-mile run takes 56-70 minutes for recreational runners. See times by pace, age, and level. The bridge between daily runs and long runs.",
    searchVolume: 260,
    relatedSlugs: ["6-miles", "8-miles", "a-10k"],
    contentFile: "content/how-long-to-run/how-long-to-run-7-miles.md",
    category: "training",
  },
  {
    slug: "8-miles",
    distance: 8,
    unit: "miles",
    displayName: "8 Miles",
    metaTitle: "How Long to Run 8 Miles? Average Times by Age & Level",
    metaDescription:
      "The average 8-mile run takes 64-80 minutes for recreational runners. See times by pace, age, and level. A key half marathon training distance.",
    searchVolume: 320,
    relatedSlugs: ["7-miles", "10-miles", "a-half-marathon"],
    contentFile: "content/how-long-to-run/how-long-to-run-8-miles.md",
    category: "training",
  },
  {
    slug: "10-miles",
    distance: 10,
    unit: "miles",
    displayName: "10 Miles",
    metaTitle: "How Long to Run 10 Miles? Average Times by Age & Level",
    metaDescription:
      "The average 10-mile run takes 80-100 minutes for recreational runners. See times by pace, age, and level. The signature long-run distance for race training.",
    searchVolume: 1000,
    relatedSlugs: ["8-miles", "a-half-marathon", "15-miles"],
    contentFile: "content/how-long-to-run/how-long-to-run-10-miles.md",
    category: "training",
  },

  // Long Run & Ultra Distances
  {
    slug: "15-miles",
    distance: 15,
    unit: "miles",
    displayName: "15 Miles",
    metaTitle: "How Long to Run 15 Miles? Average Times by Age & Level",
    metaDescription:
      "The average 15-mile run takes 2-2.5 hours for recreational runners. See times by pace, age, and level. A key marathon training long run distance.",
    searchVolume: 170,
    relatedSlugs: ["10-miles", "a-half-marathon", "20-miles"],
    contentFile: "content/how-long-to-run/how-long-to-run-15-miles.md",
    category: "ultra",
  },
  {
    slug: "20-miles",
    distance: 20,
    unit: "miles",
    displayName: "20 Miles",
    metaTitle: "How Long to Run 20 Miles? The Marathon Training Peak",
    metaDescription:
      "The average 20-mile run takes 2:40-3:20 for recreational runners. See times by pace and level. The most important long run in marathon training.",
    searchVolume: 260,
    relatedSlugs: ["15-miles", "a-marathon", "a-half-marathon"],
    contentFile: "content/how-long-to-run/how-long-to-run-20-miles.md",
    category: "ultra",
  },
  {
    slug: "30-miles",
    distance: 30,
    unit: "miles",
    displayName: "30 Miles",
    metaTitle: "How Long to Run 30 Miles? Ultra Distance Running Times",
    metaDescription:
      "The average 30-mile run takes 4-5 hours for trained runners. See times by pace and level. The entry point to ultramarathon distances.",
    searchVolume: 110,
    relatedSlugs: ["20-miles", "a-50k", "100-miles"],
    contentFile: "content/how-long-to-run/how-long-to-run-30-miles.md",
    category: "ultra",
  },
  {
    slug: "100-miles",
    distance: 100,
    unit: "miles",
    displayName: "100 Miles",
    metaTitle: "How Long to Run 100 Miles? Ultramarathon Finish Times",
    metaDescription:
      "The average 100-mile ultramarathon takes 24-30 hours. See finish times by level, plus training, nutrition, and pacing strategies for the ultimate endurance event.",
    searchVolume: 590,
    relatedSlugs: ["a-50k", "30-miles", "a-marathon"],
    contentFile: "content/how-long-to-run/how-long-to-run-100-miles.md",
    category: "ultra",
  },

  // Metric Distances
  {
    slug: "5-km",
    distance: 5,
    unit: "km",
    displayName: "5 km",
    metaTitle: "How Long to Run 5 km? Average 5K Times by Age & Level",
    metaDescription:
      "The average 5K running time is about 32 minutes. See where your time ranks by age, gender, and experience. 5 km = 3.1 miles. Based on 35 million race results.",
    searchVolume: 1000,
    relatedSlugs: ["a-5k", "10-km", "3-miles"],
    contentFile: "content/how-long-to-run/how-long-to-run-5-km.md",
    category: "metric",
  },
  {
    slug: "10-km",
    distance: 10,
    unit: "km",
    displayName: "10 km",
    metaTitle: "How Long to Run 10 km? Average 10K Times by Age & Level",
    metaDescription:
      "The average 10K running time is about 56 minutes. See where your time ranks by age, gender, and experience. 10 km = 6.2 miles. Based on 35 million results.",
    searchVolume: 1000,
    relatedSlugs: ["a-10k", "5-km", "6-miles"],
    contentFile: "content/how-long-to-run/how-long-to-run-10-km.md",
    category: "metric",
  },
];

/**
 * Get a running distance config by slug.
 */
export function getRunningDistanceBySlug(
  slug: string
): RunningDistanceConfig | undefined {
  return runningDistances.find((d) => d.slug === slug);
}

/**
 * Get all running distance slugs.
 */
export function getAllRunningDistanceSlugs(): string[] {
  return runningDistances.map((d) => d.slug);
}

/**
 * Get related running distances for a given slug.
 */
export function getRelatedRunningDistances(
  slug: string
): RunningDistanceConfig[] {
  const config = getRunningDistanceBySlug(slug);
  if (!config) return [];

  return config.relatedSlugs
    .map((s) => getRunningDistanceBySlug(s))
    .filter((c): c is RunningDistanceConfig => c !== undefined);
}

/**
 * Get running distances by category.
 */
export function getRunningDistancesByCategory(
  category: RunningDistanceConfig["category"]
): RunningDistanceConfig[] {
  return runningDistances.filter((d) => d.category === category);
}

/**
 * Get popular running distances sorted by search volume.
 */
export function getPopularRunningDistances(
  limit: number = 6
): RunningDistanceConfig[] {
  return [...runningDistances]
    .sort((a, b) => b.searchVolume - a.searchVolume)
    .slice(0, limit);
}
