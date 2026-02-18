/**
 * Running pace definitions from elite (6:00/mile) to beginner (15:00/mile).
 * Used for running time calculations.
 */

export interface RunningPace {
  /** Display label (e.g., "6:00") */
  label: string;
  /** Minutes per mile */
  minPerMile: number;
  /** Speed in miles per hour */
  mph: number;
  /** Speed in kilometers per hour */
  kmh: number;
  /** Minutes per kilometer */
  minPerKm: number;
  /** Skill level category */
  level: "Elite" | "Advanced" | "Intermediate" | "Beginner";
}

/**
 * Convert min/mile pace to mph
 * @example minPerMileToMph(10) // 6.0
 */
function minPerMileToMph(minPerMile: number): number {
  return 60 / minPerMile;
}

/**
 * Convert min/mile to min/km
 * @example minPerMileToMinPerKm(10) // ~6.21
 */
function minPerMileToMinPerKm(minPerMile: number): number {
  return minPerMile / 1.60934;
}

/**
 * Determine skill level based on pace
 */
function getLevel(minPerMile: number): RunningPace["level"] {
  if (minPerMile <= 7) return "Elite";
  if (minPerMile <= 9) return "Advanced";
  if (minPerMile <= 11) return "Intermediate";
  return "Beginner";
}

/**
 * Generate running paces from 6:00 to 15:00 min/mile
 */
function generateRunningPaces(): RunningPace[] {
  const paces: RunningPace[] = [];

  for (let min = 6; min <= 15; min++) {
    const mph = minPerMileToMph(min);
    const minPerKm = minPerMileToMinPerKm(min);

    paces.push({
      label: `${min}:00`,
      minPerMile: min,
      mph: Math.round(mph * 100) / 100,
      kmh: Math.round(mph * 1.60934 * 100) / 100,
      minPerKm: Math.round(minPerKm * 100) / 100,
      level: getLevel(min),
    });
  }

  return paces;
}

export const runningPaces: readonly RunningPace[] = generateRunningPaces();

/** Preset race distances in miles */
export const raceDistances = {
  "1 Mile": 1,
  "5K": 3.10686,
  "10K": 6.21371,
  "Half Marathon": 13.1094,
  "Marathon": 26.2188,
  "50K": 31.0686,
} as const;

export type RaceDistance = keyof typeof raceDistances;

/**
 * Get a running pace by its label
 * @example getPaceByLabel("8:00") // { label: "8:00", minPerMile: 8, ... }
 */
export function getRunningPaceByLabel(label: string): RunningPace | undefined {
  return runningPaces.find((p) => p.label === label);
}

/**
 * Get paces filtered by skill level
 * @example getPacesByLevel("Beginner") // paces 12:00-15:00
 */
export function getPacesByLevel(level: RunningPace["level"]): RunningPace[] {
  return runningPaces.filter((p) => p.level === level);
}
