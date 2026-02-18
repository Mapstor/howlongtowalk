/**
 * Core calculation functions for walking and running time/distance.
 * All calculations use standard formulas with documented sources.
 */

// ============================================================================
// WALKING TIME CALCULATIONS
// ============================================================================

/**
 * Calculate walking time for a given distance and speed.
 * @param distanceMiles - Distance in miles
 * @param mph - Walking speed in miles per hour
 * @returns Time in minutes
 *
 * @example
 * calcWalkingTime(1, 3.0) // 20 (1 mile at 3 mph = 20 minutes)
 * calcWalkingTime(5, 3.5) // 85.71 (5 miles at 3.5 mph)
 * calcWalkingTime(0, 3.0) // 0
 */
export function calcWalkingTime(distanceMiles: number, mph: number): number {
  if (distanceMiles <= 0 || mph <= 0) return 0;
  return (distanceMiles / mph) * 60;
}

/**
 * Calculate walking time for a distance in kilometers.
 * @param distanceKm - Distance in kilometers
 * @param kmh - Walking speed in km/h
 * @returns Time in minutes
 *
 * @example
 * calcWalkingTimeKm(1, 4.8) // 12.5 (1 km at 4.8 km/h)
 * calcWalkingTimeKm(5, 5.0) // 60
 */
export function calcWalkingTimeKm(distanceKm: number, kmh: number): number {
  if (distanceKm <= 0 || kmh <= 0) return 0;
  return (distanceKm / kmh) * 60;
}

// ============================================================================
// DISTANCE CALCULATIONS
// ============================================================================

/**
 * Calculate distance walked in a given time at a given speed.
 * @param minutes - Time in minutes
 * @param mph - Walking speed in miles per hour
 * @returns Distance in miles
 *
 * @example
 * calcDistance(30, 3.0) // 1.5 (30 min at 3 mph = 1.5 miles)
 * calcDistance(60, 4.0) // 4.0 (1 hour at 4 mph = 4 miles)
 * calcDistance(0, 3.0) // 0
 */
export function calcDistance(minutes: number, mph: number): number {
  if (minutes <= 0 || mph <= 0) return 0;
  return (minutes / 60) * mph;
}

/**
 * Calculate distance in kilometers.
 * @param minutes - Time in minutes
 * @param kmh - Walking speed in km/h
 * @returns Distance in kilometers
 *
 * @example
 * calcDistanceKm(30, 4.8) // 2.4 (30 min at 4.8 km/h)
 */
export function calcDistanceKm(minutes: number, kmh: number): number {
  if (minutes <= 0 || kmh <= 0) return 0;
  return (minutes / 60) * kmh;
}

// ============================================================================
// STEPS CALCULATION
// ============================================================================

/**
 * Average steps per mile for an adult (varies by height/stride).
 * Source: American College of Sports Medicine
 * Range is typically 2,000-2,500 steps/mile; 2,252 is the commonly cited average.
 */
const STEPS_PER_MILE = 2252;

/**
 * Calculate approximate steps for a given distance.
 * @param distanceMiles - Distance in miles
 * @returns Approximate number of steps
 *
 * @example
 * calcSteps(1) // 2252
 * calcSteps(5) // 11260
 * calcSteps(0.5) // 1126
 */
export function calcSteps(distanceMiles: number): number {
  if (distanceMiles <= 0) return 0;
  return Math.round(distanceMiles * STEPS_PER_MILE);
}

/**
 * Calculate steps for distance in kilometers.
 * @param distanceKm - Distance in kilometers
 * @returns Approximate number of steps
 *
 * @example
 * calcStepsKm(1) // ~1400 (1 km ≈ 0.621 miles)
 */
export function calcStepsKm(distanceKm: number): number {
  if (distanceKm <= 0) return 0;
  const miles = distanceKm * 0.621371;
  return Math.round(miles * STEPS_PER_MILE);
}

// ============================================================================
// CALORIE CALCULATIONS
// ============================================================================

/**
 * Calories burned per mile per pound of body weight.
 * Source: "Energy Expenditure of Walking and Running" - Medicine & Science in Sports & Exercise
 * Formula: ~0.53 cal/lb/mile for walking at moderate pace (3-4 mph)
 */
const CALORIES_PER_POUND_PER_MILE = 0.53;

/**
 * Calculate approximate calories burned walking.
 * @param weightLbs - Body weight in pounds
 * @param distanceMiles - Distance in miles
 * @returns Approximate calories burned
 *
 * @example
 * calcCalories(150, 1) // 79.5 (150 lb person walking 1 mile)
 * calcCalories(180, 3) // 286.2 (180 lb person walking 3 miles)
 * calcCalories(0, 1) // 0
 */
export function calcCalories(weightLbs: number, distanceMiles: number): number {
  if (weightLbs <= 0 || distanceMiles <= 0) return 0;
  return Math.round(weightLbs * distanceMiles * CALORIES_PER_POUND_PER_MILE * 10) / 10;
}

/**
 * Calculate calories with metric inputs.
 * @param weightKg - Body weight in kilograms
 * @param distanceKm - Distance in kilometers
 * @returns Approximate calories burned
 *
 * @example
 * calcCaloriesMetric(70, 5) // ~128
 */
export function calcCaloriesMetric(weightKg: number, distanceKm: number): number {
  if (weightKg <= 0 || distanceKm <= 0) return 0;
  const weightLbs = weightKg * 2.20462;
  const distanceMiles = distanceKm * 0.621371;
  return calcCalories(weightLbs, distanceMiles);
}

// ============================================================================
// RUNNING TIME CALCULATIONS
// ============================================================================

/**
 * Calculate running time for a given distance and pace.
 * @param distanceMiles - Distance in miles
 * @param paceMinPerMile - Pace in minutes per mile
 * @returns Time in minutes
 *
 * @example
 * calcRunningTime(1, 8) // 8 (1 mile at 8:00/mile pace)
 * calcRunningTime(26.2, 10) // 262 (marathon at 10:00/mile = 4:22)
 * calcRunningTime(3.107, 9) // 27.96 (5K at 9:00/mile)
 */
export function calcRunningTime(distanceMiles: number, paceMinPerMile: number): number {
  if (distanceMiles <= 0 || paceMinPerMile <= 0) return 0;
  return distanceMiles * paceMinPerMile;
}

/**
 * Calculate running time with metric inputs.
 * @param distanceKm - Distance in kilometers
 * @param paceMinPerKm - Pace in minutes per kilometer
 * @returns Time in minutes
 *
 * @example
 * calcRunningTimeKm(5, 5) // 25 (5K at 5:00/km)
 * calcRunningTimeKm(10, 6) // 60 (10K at 6:00/km)
 */
export function calcRunningTimeKm(distanceKm: number, paceMinPerKm: number): number {
  if (distanceKm <= 0 || paceMinPerKm <= 0) return 0;
  return distanceKm * paceMinPerKm;
}

// ============================================================================
// UNIT CONVERSIONS
// ============================================================================

/**
 * Convert miles to kilometers.
 * @example milesToKm(1) // 1.60934
 */
export function milesToKm(miles: number): number {
  return miles * 1.60934;
}

/**
 * Convert kilometers to miles.
 * @example kmToMiles(1) // 0.621371
 */
export function kmToMiles(km: number): number {
  return km * 0.621371;
}

/**
 * Convert mph to km/h.
 * @example mphToKmh(3) // 4.828
 */
export function mphToKmh(mph: number): number {
  return mph * 1.60934;
}

/**
 * Convert km/h to mph.
 * @example kmhToMph(5) // 3.107
 */
export function kmhToMph(kmh: number): number {
  return kmh * 0.621371;
}

/**
 * Convert pounds to kilograms.
 * @example lbsToKg(150) // 68.04
 */
export function lbsToKg(lbs: number): number {
  return lbs * 0.453592;
}

/**
 * Convert kilograms to pounds.
 * @example kgToLbs(70) // 154.32
 */
export function kgToLbs(kg: number): number {
  return kg * 2.20462;
}
