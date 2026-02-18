import { Metadata } from "next";
import Link from "next/link";

import Breadcrumbs from "@/components/layout/Breadcrumbs";
import WalkingTimeCalculator from "@/components/calculators/WalkingTimeCalculator";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { createWebAppSchema } from "@/components/seo/WebAppSchema";
import JsonLd from "@/components/seo/JsonLd";
import { walkingDistances } from "@/data/walking-distances";

/**
 * Walking Time Calculator Hub Page
 * Central page with calculator and links to all distance-specific pages.
 */

const pageUrl = "https://howlongtowalk.org/how-long-to-walk";

export const metadata: Metadata = {
  title: "Walking Time Calculator — How Long to Walk Any Distance",
  description:
    "Calculate how long it takes to walk any distance. Times by pace, age, and fitness level. Based on data from 23,111 participants.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Walking Time Calculator — How Long to Walk Any Distance",
    description:
      "Calculate how long it takes to walk any distance. Times by pace, age, and fitness level.",
    url: pageUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Walking Time Calculator — How Long to Walk Any Distance",
    description:
      "Calculate how long it takes to walk any distance. Times by pace, age, and fitness level.",
  },
};

// Organize distances by category
const shortDistances = walkingDistances.filter(
  (d) =>
    d.unit === "miles" &&
    d.distance < 3 &&
    !["13-miles", "26-miles", "100-miles"].includes(d.slug)
);
const mediumDistances = walkingDistances.filter(
  (d) =>
    d.unit === "miles" &&
    d.distance >= 3 &&
    d.distance <= 10 &&
    !["13-miles", "26-miles", "100-miles"].includes(d.slug)
);
const longDistances = walkingDistances.filter(
  (d) =>
    d.unit === "miles" &&
    (d.distance > 10 || ["13-miles", "26-miles", "100-miles"].includes(d.slug))
);
const metricDistances = walkingDistances.filter((d) => d.unit === "km");

// Pace data
const paces = [
  {
    name: "Leisurely",
    speed: "2.0 mph (3.2 km/h)",
    minPerMile: "30:00",
    who: "Window shopping, strolling",
  },
  {
    name: "Easy",
    speed: "2.5 mph (4.0 km/h)",
    minPerMile: "24:00",
    who: "Relaxed walk, conversation easy",
  },
  {
    name: "Moderate",
    speed: "3.0 mph (4.8 km/h)",
    minPerMile: "20:00",
    who: "Most adults' natural pace",
    highlight: true,
  },
  {
    name: "Brisk",
    speed: "3.5 mph (5.6 km/h)",
    minPerMile: "17:08",
    who: "Walking with purpose, breathing harder",
  },
  {
    name: "Fast",
    speed: "4.0 mph (6.4 km/h)",
    minPerMile: "15:00",
    who: "Power walking",
  },
  {
    name: "Very Fast",
    speed: "4.5 mph (7.2 km/h)",
    minPerMile: "13:20",
    who: "Race walking, athletic",
  },
];

// Age speed data
const ageData = [
  { age: "20–29", men: "3.04", women: "3.00" },
  { age: "30–39", men: "3.20", women: "3.00" },
  { age: "40–49", men: "3.20", women: "3.11" },
  { age: "50–59", men: "3.20", women: "2.93" },
  { age: "60–69", men: "3.00", women: "2.77" },
  { age: "70–79", men: "2.82", women: "2.53" },
  { age: "80+", men: "2.17", women: "2.10" },
];

// Helper to calculate walking time
function calcTime(distanceMiles: number, speedMph: number): string {
  const totalMinutes = (distanceMiles / speedMph) * 60;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.floor(totalMinutes % 60);
  const seconds = Math.round((totalMinutes % 1) * 60);

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export default function WalkingHubPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://howlongtowalk.org/" },
    { name: "Walking Time Calculator", url: pageUrl },
  ];

  const webAppSchema = createWebAppSchema({
    name: "Walking Time Calculator",
    description:
      "Calculate how long it takes to walk any distance. Times by pace, age, and fitness level.",
    url: pageUrl,
    applicationCategory: "HealthApplication",
  });

  return (
    <>
      {/* Schema.org JSON-LD */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <JsonLd data={webAppSchema} />

      <div className="content-container py-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          segments={[{ label: "Walking Time Calculator", href: "/how-long-to-walk" }]}
        />

        {/* Page Title */}
        <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          Walking Time Calculator
        </h1>

        {/* Intro */}
        <p className="mb-8 text-lg text-gray-700">
          <strong>Enter any distance and get your walking time</strong> — broken
          down by six pace levels, adjusted for age, with steps and calories
          included.
        </p>

        {/* Calculator */}
        <div className="mb-12">
          <WalkingTimeCalculator
            initialDistance={1}
            initialUnit="miles"
            showExtras={true}
          />
        </div>

        {/* Distance Tables */}
        <div className="prose prose-gray max-w-none">
          <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
            How Long Does It Take to Walk...
          </h2>
          <p className="mb-6 text-gray-700">
            Quick answers at a moderate 3.0 mph pace, with links to full
            breakdowns:
          </p>

          {/* Short Distances */}
          <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
            Short Distances (Under 3 Miles)
          </h3>
          <DistanceTable distances={shortDistances} unit="miles" />

          {/* Medium Distances */}
          <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
            Medium Distances (3–10 Miles)
          </h3>
          <DistanceTable distances={mediumDistances} unit="miles" />

          {/* Long Distances */}
          <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
            Long Distances (10+ Miles)
          </h3>
          <DistanceTable distances={longDistances} unit="miles" />

          {/* Metric Distances */}
          <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
            Metric Distances
          </h3>
          <DistanceTable distances={metricDistances} unit="km" />

          {/* Pace Reference */}
          <h2 className="mb-4 mt-10 text-2xl font-bold text-gray-900">
            Walking Pace Reference
          </h2>
          <p className="mb-4 text-gray-700">
            All times are based on six standard pace levels:
          </p>
          <div className="table-container mb-6">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Pace</th>
                  <th>Speed</th>
                  <th>Min/Mile</th>
                  <th>Who Walks This Fast</th>
                </tr>
              </thead>
              <tbody>
                {paces.map((pace) => (
                  <tr
                    key={pace.name}
                    className={pace.highlight ? "highlight-row" : ""}
                  >
                    <td>{pace.name}</td>
                    <td>{pace.speed}</td>
                    <td>{pace.minPerMile}</td>
                    <td>{pace.who}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mb-6 text-sm text-gray-600">
            The CDC defines moderate-intensity walking as 2.5–4.0 mph. The
            British Journal of Sports Medicine (2018) defines brisk walking as
            approximately 100 steps per minute.
          </p>

          {/* Age Data */}
          <h2 className="mb-4 mt-10 text-2xl font-bold text-gray-900">
            Walking Speed by Age
          </h2>
          <p className="mb-4 text-gray-700">
            Your comfortable walking speed changes with age. Based on Bohannon &
            Andrews (2011):
          </p>
          <div className="table-container mb-6">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Age Group</th>
                  <th>Men (mph)</th>
                  <th>Women (mph)</th>
                </tr>
              </thead>
              <tbody>
                {ageData.map((row) => (
                  <tr key={row.age}>
                    <td>{row.age}</td>
                    <td>{row.men}</td>
                    <td>{row.women}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sources */}
          <h2 className="mb-4 mt-10 text-2xl font-bold text-gray-900">
            Sources
          </h2>
          <ol className="mb-4 list-decimal space-y-2 pl-6 text-gray-700">
            <li>
              Bohannon, R.W. & Andrews, A.W. (2011).{" "}
              <em>Physiotherapy</em>, 97(3), 182–189.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/21820535/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 hover:text-teal-900 hover:underline"
              >
                PubMed
              </a>
            </li>
            <li>CDC Physical Activity Guidelines for Americans, 2nd edition (2018).</li>
            <li>British Journal of Sports Medicine (2018). Brisk walking definition.</li>
            <li>Compendium of Physical Activities — MET values.</li>
          </ol>
        </div>
      </div>
    </>
  );
}

interface DistanceTableProps {
  distances: typeof walkingDistances;
  unit: "miles" | "km";
}

function DistanceTable({ distances, unit }: DistanceTableProps) {
  // For km, use km/h speeds
  const moderateSpeed = unit === "km" ? 4.8 : 3.0;
  const briskSpeed = unit === "km" ? 5.6 : 3.5;

  return (
    <div className="table-container mb-6">
      <table className="data-table">
        <thead>
          <tr>
            <th>Distance</th>
            <th>
              Moderate ({unit === "km" ? "4.8 km/h" : "3.0 mph"})
            </th>
            <th>
              Brisk ({unit === "km" ? "5.6 km/h" : "3.5 mph"})
            </th>
            <th>Full Page</th>
          </tr>
        </thead>
        <tbody>
          {distances.map((d) => {
            // Convert km to miles for calculation if needed
            const distanceInMiles =
              unit === "km" ? d.distance * 0.621371 : d.distance;

            return (
              <tr key={d.slug}>
                <td>{d.displayName}</td>
                <td>{calcTime(distanceInMiles, moderateSpeed)}</td>
                <td>{calcTime(distanceInMiles, briskSpeed)}</td>
                <td>
                  <Link
                    href={`/how-long-to-walk/${d.slug}`}
                    className="text-teal-700 hover:text-teal-900 hover:underline"
                  >
                    Details →
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
