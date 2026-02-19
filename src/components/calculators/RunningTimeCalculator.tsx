"use client";

import { useState, useMemo } from "react";
import { milesToKm, kmToMiles } from "@/lib/calculations";
import { formatTimeHuman } from "@/lib/formatTime";

type Unit = "miles" | "km";

// Running pace data with levels
const runningPaces = [
  { minPerMile: 6, level: "Elite", color: "text-purple-700" },
  { minPerMile: 7, level: "Advanced", color: "text-blue-700" },
  { minPerMile: 8, level: "Intermediate", color: "text-teal-700" },
  { minPerMile: 9, level: "Intermediate", color: "text-teal-700" },
  { minPerMile: 10, level: "Beginner", color: "text-green-700" },
  { minPerMile: 11, level: "Beginner", color: "text-green-700" },
  { minPerMile: 12, level: "Beginner", color: "text-green-700" },
  { minPerMile: 13, level: "Beginner", color: "text-green-700" },
  { minPerMile: 15, level: "Walk/Run", color: "text-gray-600" },
];

// Preset race distances
const presets = [
  { label: "1 Mile", distance: 1, unit: "miles" as Unit },
  { label: "5K", distance: 5, unit: "km" as Unit },
  { label: "10K", distance: 10, unit: "km" as Unit },
  { label: "Half Marathon", distance: 13.109, unit: "miles" as Unit },
  { label: "Marathon", distance: 26.219, unit: "miles" as Unit },
];

interface RunningTimeCalculatorProps {
  /** Pre-fill the distance input */
  initialDistance?: number;
  /** Initial unit selection */
  initialUnit?: Unit;
  /** Preset race to pre-select */
  presetRace?: string;
  /** Optional heading above calculator */
  heading?: string;
}

export default function RunningTimeCalculator({
  initialDistance = 1,
  initialUnit = "miles",
  presetRace,
  heading,
}: RunningTimeCalculatorProps) {
  // Find preset if specified
  const matchedPreset = presetRace
    ? presets.find(
        (p) => p.label.toLowerCase().replace(/\s+/g, "-") === presetRace.toLowerCase()
      )
    : null;

  const [distance, setDistance] = useState<string>(
    matchedPreset ? matchedPreset.distance.toString() : initialDistance.toString()
  );
  const [unit, setUnit] = useState<Unit>(
    matchedPreset ? matchedPreset.unit : initialUnit
  );
  const [activePreset, setActivePreset] = useState<string | null>(
    matchedPreset ? matchedPreset.label : null
  );
  const [showResults, setShowResults] = useState<boolean>(false);

  // Parse distance as number
  const distanceNum = useMemo(() => {
    const parsed = parseFloat(distance);
    return isNaN(parsed) || parsed < 0 ? 0 : parsed;
  }, [distance]);

  // Convert to miles for calculations
  const distanceMiles = useMemo(() => {
    return unit === "miles" ? distanceNum : kmToMiles(distanceNum);
  }, [distanceNum, unit]);

  // Calculate times for each pace
  const results = useMemo(() => {
    return runningPaces.map((pace) => {
      const timeMinutes = distanceMiles * pace.minPerMile;
      const mph = 60 / pace.minPerMile;
      const kmh = mph * 1.60934;

      return {
        pace,
        timeMinutes,
        timeFormatted: formatTimeHuman(timeMinutes),
        mph: mph.toFixed(1),
        kmh: kmh.toFixed(1),
        paceDisplay: formatPace(pace.minPerMile),
      };
    });
  }, [distanceMiles]);

  // Format pace as mm:ss
  function formatPace(minPerMile: number): string {
    const minutes = Math.floor(minPerMile);
    const seconds = Math.round((minPerMile - minutes) * 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  // Handle preset click
  function handlePreset(preset: (typeof presets)[0]) {
    setDistance(preset.distance.toString());
    setUnit(preset.unit);
    setActivePreset(preset.label);
  }

  // Format distance display
  const distanceDisplay = useMemo(() => {
    if (distanceNum === 0) return "0";
    if (unit === "miles") {
      const km = milesToKm(distanceNum);
      return `${distanceNum} mi (${km.toFixed(2)} km)`;
    } else {
      const mi = kmToMiles(distanceNum);
      return `${distanceNum} km (${mi.toFixed(2)} mi)`;
    }
  }, [distanceNum, unit]);

  return (
    <div className="card">
      {heading && (
        <h2 className="mb-4 text-xl font-semibold text-gray-900">{heading}</h2>
      )}

      {/* Preset Buttons */}
      <div className="mb-4">
        <div className="mb-2 text-sm font-medium text-gray-700">
          Quick select race distance
        </div>
        <div className="flex flex-wrap gap-2">
          {presets.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => handlePreset(preset)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                activePreset === preset.label
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
          Or enter custom distance
        </label>
        <div className="flex flex-wrap gap-3">
          {/* Distance Input */}
          <div className="relative flex-1" style={{ minWidth: "150px" }}>
            <input
              type="number"
              inputMode="decimal"
              value={distance}
              onChange={(e) => {
                setDistance(e.target.value);
                setActivePreset(null);
              }}
              placeholder="Enter distance"
              className="calc-input pr-16"
              min="0"
              step="any"
              aria-label={`Distance in ${unit}`}
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              {unit}
            </span>
          </div>

          {/* Unit Toggle */}
          <div className="toggle-group">
            <button
              type="button"
              className={`toggle-btn ${unit === "miles" ? "active" : ""}`}
              onClick={() => {
                setUnit("miles");
                setActivePreset(null);
              }}
              aria-pressed={unit === "miles"}
            >
              Miles
            </button>
            <button
              type="button"
              className={`toggle-btn ${unit === "km" ? "active" : ""}`}
              onClick={() => {
                setUnit("km");
                setActivePreset(null);
              }}
              aria-pressed={unit === "km"}
            >
              Km
            </button>
          </div>
        </div>

        {/* Distance display */}
        {distanceNum > 0 && (
          <p className="mt-2 text-sm text-gray-500">
            Distance: <span className="font-medium">{distanceDisplay}</span>
          </p>
        )}

        {/* Calculate Button */}
        <button
          type="button"
          onClick={() => setShowResults(true)}
          disabled={distanceNum === 0}
          className="mt-4 w-full rounded-lg bg-teal-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
        >
          Calculate Running Time
        </button>
      </div>

      {/* Results Table */}
      {showResults && distanceNum > 0 && (
      <>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Pace</th>
              <th>Level</th>
              <th>Speed</th>
              <th>Finish Time</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => {
              const isHighlighted = result.pace.minPerMile === 9;
              return (
                <tr
                  key={result.pace.minPerMile}
                  className={isHighlighted ? "highlight" : ""}
                >
                  <td>
                    <div className="font-medium text-gray-900">
                      {result.paceDisplay}/mi
                    </div>
                    <div className="text-xs text-gray-500">
                      {formatPace(result.pace.minPerMile / 1.60934)}/km
                    </div>
                  </td>
                  <td>
                    <span className={`font-medium ${result.pace.color}`}>
                      {result.pace.level}
                    </span>
                  </td>
                  <td>
                    <div className="text-gray-900">{result.mph} mph</div>
                    <div className="text-xs text-gray-500">{result.kmh} km/h</div>
                  </td>
                  <td>
                    <div className="text-lg font-semibold text-teal-700">
                      {result.timeFormatted}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Average pace callout */}
      {distanceNum > 0 && (
        <div className="mt-4 rounded-lg bg-amber-50 p-3 text-sm">
          <p className="text-gray-700">
            <span className="font-semibold text-amber-700">Average runner:</span>{" "}
            At a <strong>9:00/mile pace</strong> (6:40 mph), running{" "}
            <strong>{distanceDisplay}</strong> takes approximately{" "}
            <strong className="text-teal-700">
              {results.find((r) => r.pace.minPerMile === 9)?.timeFormatted}
            </strong>
            .
          </p>
        </div>
      )}

      {/* Pace level guide */}
      <div className="mt-6 border-t border-gray-100 pt-4">
        <h3 className="mb-3 text-sm font-semibold text-gray-700">Pace Levels</h3>
        <div className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-4">
          <div className="rounded bg-purple-50 p-2">
            <span className="font-semibold text-purple-700">Elite</span>
            <div className="text-gray-600">&lt;7:00/mi pace</div>
          </div>
          <div className="rounded bg-blue-50 p-2">
            <span className="font-semibold text-blue-700">Advanced</span>
            <div className="text-gray-600">7:00–8:00/mi</div>
          </div>
          <div className="rounded bg-teal-50 p-2">
            <span className="font-semibold text-teal-700">Intermediate</span>
            <div className="text-gray-600">8:00–10:00/mi</div>
          </div>
          <div className="rounded bg-green-50 p-2">
            <span className="font-semibold text-green-700">Beginner</span>
            <div className="text-gray-600">10:00–13:00/mi</div>
          </div>
        </div>
      </div>
      </>
      )}

      {/* No distance entered state */}
      {!showResults && (
        <div className="mt-4 rounded-lg bg-gray-50 p-4 text-center text-gray-500">
          Select a race or enter a distance above and click Calculate to see running times.
        </div>
      )}
    </div>
  );
}
