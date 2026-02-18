"use client";

import { useState, useMemo } from "react";
import { walkingPaces } from "@/data/paces";
import {
  calcWalkingTime,
  calcWalkingTimeKm,
  calcSteps,
  calcStepsKm,
  calcCalories,
  calcCaloriesMetric,
  milesToKm,
  kmToMiles,
} from "@/lib/calculations";
import { formatTimeHuman } from "@/lib/formatTime";

type Unit = "miles" | "km";

interface WalkingTimeCalculatorProps {
  /** Pre-fill the distance input */
  initialDistance?: number;
  /** Initial unit selection */
  initialUnit?: Unit;
  /** Show the steps and calories section */
  showExtras?: boolean;
  /** Optional heading above calculator */
  heading?: string;
}

export default function WalkingTimeCalculator({
  initialDistance = 1,
  initialUnit = "miles",
  showExtras = true,
  heading,
}: WalkingTimeCalculatorProps) {
  const [distance, setDistance] = useState<string>(initialDistance.toString());
  const [unit, setUnit] = useState<Unit>(initialUnit);
  const [weight, setWeight] = useState<string>("");
  const [weightUnit, setWeightUnit] = useState<"lbs" | "kg">("lbs");

  // Parse distance as number, default to 0 if invalid
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
    return walkingPaces.map((pace) => {
      const timeMinutes =
        unit === "miles"
          ? calcWalkingTime(distanceNum, pace.mph)
          : calcWalkingTimeKm(distanceNum, pace.kmh);

      return {
        pace,
        timeMinutes,
        timeFormatted: formatTimeHuman(timeMinutes),
      };
    });
  }, [distanceNum, unit]);

  // Calculate steps
  const steps = useMemo(() => {
    return unit === "miles"
      ? calcSteps(distanceNum)
      : calcStepsKm(distanceNum);
  }, [distanceNum, unit]);

  // Calculate calories if weight is provided
  const calories = useMemo(() => {
    const weightNum = parseFloat(weight);
    if (isNaN(weightNum) || weightNum <= 0) return null;

    return weightUnit === "lbs"
      ? calcCalories(weightNum, distanceMiles)
      : calcCaloriesMetric(weightNum, unit === "km" ? distanceNum : milesToKm(distanceNum));
  }, [weight, weightUnit, distanceMiles, distanceNum, unit]);

  // Format the distance display
  const distanceDisplay = useMemo(() => {
    if (distanceNum === 0) return "0";
    // Show conversion in parentheses
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

      {/* Input Section */}
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Enter distance
        </label>
        <div className="flex flex-wrap gap-3">
          {/* Distance Input */}
          <div className="relative flex-1" style={{ minWidth: "150px" }}>
            <input
              type="number"
              inputMode="decimal"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
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
              onClick={() => setUnit("miles")}
              aria-pressed={unit === "miles"}
            >
              Miles
            </button>
            <button
              type="button"
              className={`toggle-btn ${unit === "km" ? "active" : ""}`}
              onClick={() => setUnit("km")}
              aria-pressed={unit === "km"}
            >
              Km
            </button>
          </div>
        </div>

        {/* Distance display with conversion */}
        {distanceNum > 0 && (
          <p className="mt-2 text-sm text-gray-500">
            Distance: <span className="font-medium">{distanceDisplay}</span>
          </p>
        )}
      </div>

      {/* Results Table */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Pace</th>
              <th>Speed</th>
              <th>Time</th>
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
                    <div className="text-gray-900">
                      {unit === "miles"
                        ? `${result.pace.mph} mph`
                        : `${result.pace.kmh} km/h`}
                    </div>
                    <div className="text-xs text-gray-500">
                      {result.pace.minPerMile.toFixed(0)} min/mi
                    </div>
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

      {/* Moderate pace callout */}
      {distanceNum > 0 && (
        <div className="mt-4 rounded-lg bg-amber-50 p-3 text-sm">
          <p className="text-gray-700">
            <span className="font-semibold text-amber-700">Most common:</span>{" "}
            At a <strong>moderate pace</strong> (3.0 mph / 4.8 km/h), walking{" "}
            <strong>{distanceDisplay}</strong> takes approximately{" "}
            <strong className="text-teal-700">
              {results.find((r) => r.pace.label === "Moderate")?.timeFormatted}
            </strong>
            .
          </p>
        </div>
      )}

      {/* Steps and Calories Section */}
      {showExtras && distanceNum > 0 && (
        <div className="mt-6 border-t border-gray-100 pt-6">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Additional Info
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Steps */}
            <div className="rounded-lg bg-gray-50 p-4">
              <div className="text-sm font-medium text-gray-500">
                Approximate Steps
              </div>
              <div className="mt-1 text-2xl font-bold text-gray-900">
                {steps.toLocaleString()}
              </div>
              <div className="mt-1 text-xs text-gray-500">
                Based on ~2,252 steps per mile
              </div>
            </div>

            {/* Calories */}
            <div className="rounded-lg bg-gray-50 p-4">
              <div className="mb-2 text-sm font-medium text-gray-500">
                Calories Burned
              </div>

              {calories !== null ? (
                <>
                  <div className="text-2xl font-bold text-gray-900">
                    {Math.round(calories)} cal
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    Estimated for {weight} {weightUnit}
                  </div>
                </>
              ) : (
                <div className="flex flex-wrap items-center gap-2">
                  <input
                    type="number"
                    inputMode="decimal"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Weight"
                    className="w-20 rounded border border-gray-300 px-2 py-1 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    min="0"
                    aria-label="Body weight"
                  />
                  <div className="toggle-group">
                    <button
                      type="button"
                      className={`toggle-btn !px-2 !py-1 text-xs ${
                        weightUnit === "lbs" ? "active" : ""
                      }`}
                      onClick={() => setWeightUnit("lbs")}
                    >
                      lbs
                    </button>
                    <button
                      type="button"
                      className={`toggle-btn !px-2 !py-1 text-xs ${
                        weightUnit === "kg" ? "active" : ""
                      }`}
                      onClick={() => setWeightUnit("kg")}
                    >
                      kg
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* No distance entered state */}
      {distanceNum === 0 && (
        <div className="mt-4 rounded-lg bg-gray-50 p-4 text-center text-gray-500">
          Enter a distance above to see walking times.
        </div>
      )}
    </div>
  );
}
