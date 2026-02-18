/**
 * Walking pace definitions with speed, metabolic equivalent, and descriptions.
 * Used across all walking time calculations.
 */

export interface WalkingPace {
  /** Display label for the pace */
  label: string;
  /** Speed in miles per hour */
  mph: number;
  /** Speed in kilometers per hour */
  kmh: number;
  /** Minutes required to walk one mile */
  minPerMile: number;
  /** Metabolic Equivalent of Task - energy expenditure ratio */
  met: number;
  /** Human-readable description of the pace */
  description: string;
}

export const walkingPaces: readonly WalkingPace[] = [
  { label: "Leisurely", mph: 2.0, kmh: 3.2, minPerMile: 30, met: 2.8, description: "Casual stroll" },
  { label: "Easy", mph: 2.5, kmh: 4.0, minPerMile: 24, met: 3.0, description: "Relaxed walk" },
  { label: "Moderate", mph: 3.0, kmh: 4.8, minPerMile: 20, met: 3.5, description: "Average adult pace" },
  { label: "Brisk", mph: 3.5, kmh: 5.6, minPerMile: 17.14, met: 4.3, description: "Purpose-driven" },
  { label: "Fast", mph: 4.0, kmh: 6.4, minPerMile: 15, met: 5.0, description: "Power walking" },
  { label: "Very Fast", mph: 4.5, kmh: 7.2, minPerMile: 13.33, met: 7.0, description: "Race walking" },
] as const;

/** The default/highlighted pace - "Moderate" at 3.0 mph */
export const DEFAULT_PACE = walkingPaces[2];

/** Get a pace by its label */
export function getPaceByLabel(label: string): WalkingPace | undefined {
  return walkingPaces.find((p) => p.label.toLowerCase() === label.toLowerCase());
}
