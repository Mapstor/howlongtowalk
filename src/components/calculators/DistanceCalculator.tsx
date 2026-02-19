"use client";

import { useState, useMemo } from "react";
import { walkingPaces } from "@/data/paces";
import { milesToKm, kmToMiles } from "@/lib/calculations";

interface DistanceCalculatorProps {
  /** Pre-fill the time input in minutes */
  initialMinutes?: number;
  /** Optional heading above calculator */
  heading?: string;
}

// Preset time buttons
const presets = [
  { label: "15 min", minutes: 15 },
  { label: "30 min", minutes: 30 },
  { label: "1 hr", minutes: 60 },
  { label: "2 hr", minutes: 120 },
];

export default function DistanceCalculator({
  initialMinutes = 30,
  heading,
}: DistanceCalculatorProps) {
  const [time, setTime] = useState<string>(initialMinutes.toString());
  const [activePreset, setActivePreset] = useState<number | null>(
    presets.find((p) => p.minutes === initialMinutes)?.minutes ?? null
  );
  const [showResults, setShowResults] = useState<boolean>(false);

  // Parse time as number, default to 0 if invalid
  const timeNum = useMemo(() => {
    const parsed = parseFloat(time);
    return isNaN(parsed) || parsed < 0 ? 0 : parsed;
  }, [time]);

  // Calculate distances for each pace
  const results = useMemo(() => {
    return walkingPaces.map((pace) => {
      // Distance = speed × time (time in hours)
      const distanceMiles = pace.mph * (timeNum / 60);
      const distanceKm = pace.kmh * (timeNum / 60);

      return {
        pace,
        distanceMiles,
        distanceKm,
        distanceMilesFormatted: distanceMiles.toFixed(2),
        distanceKmFormatted: distanceKm.toFixed(2),
        // Meters for map radius
        distanceMeters: distanceKm * 1000,
      };
    });
  }, [timeNum]);

  // Get moderate pace distance for summary
  const moderateResult = results.find((r) => r.pace.label === "Moderate");

  // Format time display
  const timeDisplay = useMemo(() => {
    if (timeNum === 0) return "0 minutes";
    const hours = Math.floor(timeNum / 60);
    const mins = Math.round(timeNum % 60);
    if (hours === 0) return `${mins} minute${mins !== 1 ? "s" : ""}`;
    if (mins === 0) return `${hours} hour${hours !== 1 ? "s" : ""}`;
    return `${hours} hour${hours !== 1 ? "s" : ""} ${mins} minute${mins !== 1 ? "s" : ""}`;
  }, [timeNum]);

  // Handle preset click
  function handlePreset(preset: (typeof presets)[0]) {
    setTime(preset.minutes.toString());
    setActivePreset(preset.minutes);
  }

  return (
    <div className="card">
      {heading && (
        <h2 className="mb-4 text-xl font-semibold text-gray-900">{heading}</h2>
      )}

      {/* Preset Buttons */}
      <div className="mb-4">
        <div className="mb-2 text-sm font-medium text-gray-700">
          Quick select time
        </div>
        <div className="flex flex-wrap gap-2">
          {presets.map((preset) => (
            <button
              key={preset.minutes}
              type="button"
              onClick={() => handlePreset(preset)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                activePreset === preset.minutes
                  ? "bg-teal-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input Section */}
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Or enter custom time
        </label>
        <div className="relative" style={{ maxWidth: "200px" }}>
          <input
            type="number"
            inputMode="decimal"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
              setActivePreset(null);
            }}
            placeholder="Enter time"
            className="calc-input pr-20"
            min="0"
            step="any"
            aria-label="Time in minutes"
          />
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
            minutes
          </span>
        </div>

        {/* Time display */}
        {timeNum > 0 && (
          <p className="mt-2 text-sm text-gray-500">
            Time: <span className="font-medium">{timeDisplay}</span>
          </p>
        )}

        {/* Calculate Button */}
        <button
          type="button"
          onClick={() => setShowResults(true)}
          disabled={timeNum === 0}
          className="mt-4 w-full rounded-lg bg-teal-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
        >
          Calculate Distance
        </button>
      </div>

      {/* Results Table */}
      {showResults && timeNum > 0 && (
      <>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Pace</th>
              <th>Speed</th>
              <th>Distance</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => {
              const isModerate = result.pace.label === "Moderate";
              return (
                <tr key={result.pace.label} className={isModerate ? "highlight" : ""}>
                  <td>
                    <div className="font-medium text-gray-900">
                      {result.pace.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {result.pace.description}
                    </div>
                  </td>
                  <td>
                    <div className="text-gray-900">{result.pace.mph} mph</div>
                    <div className="text-xs text-gray-500">
                      {result.pace.kmh} km/h
                    </div>
                  </td>
                  <td>
                    <div className="text-lg font-semibold text-teal-700">
                      {result.distanceMilesFormatted} mi
                    </div>
                    <div className="text-xs text-gray-500">
                      {result.distanceKmFormatted} km
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Moderate pace callout */}
      {moderateResult && (
        <div className="mt-4 rounded-lg bg-amber-50 p-3 text-sm">
          <p className="text-gray-700">
            <span className="font-semibold text-amber-700">Most common:</span>{" "}
            At a <strong>moderate pace</strong> (3.0 mph / 4.8 km/h), you can walk{" "}
            <strong className="text-teal-700">
              {moderateResult.distanceMilesFormatted} miles ({moderateResult.distanceKmFormatted} km)
            </strong>{" "}
            in <strong>{timeDisplay}</strong>.
          </p>
        </div>
      )}
      </>
      )}

      {/* No time entered state */}
      {!showResults && (
        <div className="mt-4 rounded-lg bg-gray-50 p-4 text-center text-gray-500">
          Enter a time above and click Calculate to see walking distances.
        </div>
      )}
    </div>
  );
}
