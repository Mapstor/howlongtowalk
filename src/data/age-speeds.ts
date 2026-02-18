/**
 * Walking speeds by age group and gender.
 * Source: Bohannon & Andrews (2011), Physiotherapy, 97(3), 182-189.
 * Meta-analysis of 23,111 subjects across multiple studies.
 */

export interface AgeSpeedData {
  /** Age range in years */
  ageGroup: string;
  /** Average walking speed for men in mph */
  menMph: number;
  /** Average walking speed for women in mph */
  womenMph: number;
}

export const ageSpeeds: readonly AgeSpeedData[] = [
  { ageGroup: "20–29", menMph: 3.04, womenMph: 3.00 },
  { ageGroup: "30–39", menMph: 3.20, womenMph: 3.00 },
  { ageGroup: "40–49", menMph: 3.20, womenMph: 3.11 },
  { ageGroup: "50–59", menMph: 3.20, womenMph: 2.93 },
  { ageGroup: "60–69", menMph: 3.00, womenMph: 2.77 },
  { ageGroup: "70–79", menMph: 2.82, womenMph: 2.53 },
  { ageGroup: "80–99", menMph: 2.17, womenMph: 2.10 },
] as const;

/** Citation for the data source */
export const BOHANNON_CITATION = "Bohannon RW, Andrews AW. Normal walking speed: a descriptive meta-analysis. Physiotherapy. 2011;97(3):182-189.";

/** Total number of subjects in the meta-analysis */
export const TOTAL_SUBJECTS = 23111;

/**
 * Get walking speed for a specific age and gender.
 * @param age - Age in years
 * @param gender - "men" or "women"
 * @returns Walking speed in mph, or undefined if age not in range
 *
 * @example
 * getSpeedForAge(25, "men") // 3.04
 * getSpeedForAge(65, "women") // 2.77
 */
export function getSpeedForAge(age: number, gender: "men" | "women"): number | undefined {
  const ageData = ageSpeeds.find((data) => {
    const [min, max] = data.ageGroup.split("–").map(Number);
    return age >= min && age <= max;
  });

  if (!ageData) return undefined;
  return gender === "men" ? ageData.menMph : ageData.womenMph;
}

/**
 * Get the average walking speed across all age groups and genders.
 * @returns Average walking speed in mph
 *
 * @example
 * getAverageSpeed() // ~2.93
 */
export function getAverageSpeed(): number {
  const allSpeeds = ageSpeeds.flatMap((d) => [d.menMph, d.womenMph]);
  return allSpeeds.reduce((sum, speed) => sum + speed, 0) / allSpeeds.length;
}
