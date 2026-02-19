/**
 * Time formatting utilities for displaying walking/running times.
 * Handles various output formats and edge cases.
 */

// ============================================================================
// HUMAN-READABLE FORMAT (e.g., "1h 23m")
// ============================================================================

/**
 * Format minutes to human-readable string (e.g., "1h 23m", "45m", "2h").
 * Uses hours and minutes only, no seconds.
 *
 * @param totalMinutes - Time in minutes (can be decimal)
 * @returns Formatted string
 *
 * @example
 * formatTimeHuman(90) // "1h 30m"
 * formatTimeHuman(45) // "45m"
 * formatTimeHuman(120) // "2h"
 * formatTimeHuman(0) // "0m"
 * formatTimeHuman(0.5) // "1m" (rounds up)
 * formatTimeHuman(1440) // "24h"
 * formatTimeHuman(1500) // "25h"
 */
export function formatTimeHuman(totalMinutes: number): string {
  if (totalMinutes <= 0) return "0 min";

  // Round to nearest minute
  const roundedMinutes = Math.round(totalMinutes);

  const hours = Math.floor(roundedMinutes / 60);
  const minutes = roundedMinutes % 60;

  if (hours === 0) {
    return `${minutes} min`;
  }

  if (minutes === 0) {
    return `${hours} hr`;
  }

  return `${hours} hr ${minutes} min`;
}

// ============================================================================
// CLOCK FORMAT (e.g., "1:23:45")
// ============================================================================

/**
 * Format minutes to clock-style string (e.g., "1:23:45", "0:45:30").
 * Always shows hours:minutes:seconds.
 *
 * @param totalMinutes - Time in minutes (can be decimal)
 * @returns Formatted string in H:MM:SS format
 *
 * @example
 * formatTimeClock(90) // "1:30:00"
 * formatTimeClock(90.5) // "1:30:30"
 * formatTimeClock(45.75) // "0:45:45"
 * formatTimeClock(0) // "0:00:00"
 * formatTimeClock(262) // "4:22:00" (marathon time)
 */
export function formatTimeClock(totalMinutes: number): string {
  if (totalMinutes <= 0) return "0:00:00";

  const totalSeconds = Math.round(totalMinutes * 60);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const minStr = minutes.toString().padStart(2, "0");
  const secStr = seconds.toString().padStart(2, "0");

  return `${hours}:${minStr}:${secStr}`;
}

/**
 * Format minutes to clock-style without seconds (e.g., "1:30").
 * For shorter display when seconds aren't needed.
 *
 * @param totalMinutes - Time in minutes
 * @returns Formatted string in H:MM or M format
 *
 * @example
 * formatTimeClockShort(90) // "1:30"
 * formatTimeClockShort(45) // "45"
 * formatTimeClockShort(120) // "2:00"
 */
export function formatTimeClockShort(totalMinutes: number): string {
  if (totalMinutes <= 0) return "0";

  const roundedMinutes = Math.round(totalMinutes);
  const hours = Math.floor(roundedMinutes / 60);
  const minutes = roundedMinutes % 60;

  if (hours === 0) {
    return `${minutes}`;
  }

  const minStr = minutes.toString().padStart(2, "0");
  return `${hours}:${minStr}`;
}

// ============================================================================
// PACE FORMAT (e.g., "8:30")
// ============================================================================

/**
 * Format minutes to pace string (e.g., "8:30" for 8.5 min/mile).
 * Always shows minutes:seconds.
 *
 * @param minutes - Pace in minutes (can be decimal)
 * @returns Formatted string in M:SS format
 *
 * @example
 * formatPace(8) // "8:00"
 * formatPace(8.5) // "8:30"
 * formatPace(10.25) // "10:15"
 * formatPace(6.75) // "6:45"
 */
export function formatPace(minutes: number): string {
  if (minutes <= 0) return "0:00";

  const totalSeconds = Math.round(minutes * 60);
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;

  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

// ============================================================================
// RANGE DESCRIPTIONS
// ============================================================================

/**
 * Format a time range for display (e.g., "20-30 minutes").
 *
 * @param minMinutes - Lower bound in minutes
 * @param maxMinutes - Upper bound in minutes
 * @returns Formatted range string
 *
 * @example
 * formatTimeRange(15, 25) // "15–25 minutes"
 * formatTimeRange(60, 90) // "1h–1h 30m"
 * formatTimeRange(30, 30) // "30 minutes"
 */
export function formatTimeRange(minMinutes: number, maxMinutes: number): string {
  if (minMinutes === maxMinutes) {
    return minMinutes < 60
      ? `${Math.round(minMinutes)} minutes`
      : formatTimeHuman(minMinutes);
  }

  // If both under an hour, use simple format
  if (minMinutes < 60 && maxMinutes < 60) {
    return `${Math.round(minMinutes)}–${Math.round(maxMinutes)} minutes`;
  }

  // Use human format for longer times
  return `${formatTimeHuman(minMinutes)}–${formatTimeHuman(maxMinutes)}`;
}

// ============================================================================
// PARSING
// ============================================================================

/**
 * Parse a time string back to minutes.
 * Handles formats: "1h 30m", "90", "1:30:00", "1:30"
 *
 * @param timeStr - Time string to parse
 * @returns Time in minutes, or NaN if invalid
 *
 * @example
 * parseTimeToMinutes("1h 30m") // 90
 * parseTimeToMinutes("90") // 90
 * parseTimeToMinutes("1:30:00") // 90
 * parseTimeToMinutes("1:30") // 90 (assumes h:mm) or 1.5 (assumes m:ss if <10)
 */
export function parseTimeToMinutes(timeStr: string): number {
  const trimmed = timeStr.trim();

  // Handle "1h 30m" format
  const humanMatch = trimmed.match(/^(\d+)h\s*(\d+)?m?$/i);
  if (humanMatch) {
    const hours = parseInt(humanMatch[1], 10);
    const minutes = humanMatch[2] ? parseInt(humanMatch[2], 10) : 0;
    return hours * 60 + minutes;
  }

  // Handle "45m" format
  const minOnlyMatch = trimmed.match(/^(\d+)m$/i);
  if (minOnlyMatch) {
    return parseInt(minOnlyMatch[1], 10);
  }

  // Handle clock format "H:MM:SS" or "H:MM"
  const clockMatch = trimmed.match(/^(\d+):(\d{2})(?::(\d{2}))?$/);
  if (clockMatch) {
    const first = parseInt(clockMatch[1], 10);
    const second = parseInt(clockMatch[2], 10);
    const third = clockMatch[3] ? parseInt(clockMatch[3], 10) : 0;

    if (clockMatch[3]) {
      // H:MM:SS format
      return first * 60 + second + third / 60;
    } else {
      // H:MM format - assume hours:minutes if first number >= 1
      return first * 60 + second;
    }
  }

  // Try plain number (minutes)
  const num = parseFloat(trimmed);
  return isNaN(num) ? NaN : num;
}

// ============================================================================
// UTILITY
// ============================================================================

/**
 * Round minutes to a sensible precision for display.
 * @param minutes - Time in minutes
 * @returns Rounded minutes
 *
 * @example
 * roundMinutes(20.333) // 20
 * roundMinutes(20.666) // 21
 * roundMinutes(120.5) // 121
 */
export function roundMinutes(minutes: number): number {
  return Math.round(minutes);
}

/**
 * Round minutes to one decimal place.
 * @param minutes - Time in minutes
 * @returns Rounded minutes
 *
 * @example
 * roundMinutesDecimal(20.333) // 20.3
 * roundMinutesDecimal(20.666) // 20.7
 */
export function roundMinutesDecimal(minutes: number): number {
  return Math.round(minutes * 10) / 10;
}
