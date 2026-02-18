import { Metadata } from "next";
import Link from "next/link";

import DistanceCalculator from "@/components/calculators/DistanceCalculator";
import MapRadiusWrapper from "@/components/calculators/MapRadiusWrapper";
import {
  walkingTimes,
  getWalkingTimesByCategory,
} from "@/data/walking-times";
import { walkingPaces } from "@/data/paces";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { createWebAppSchema } from "@/components/seo/WebAppSchema";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "How Far Can I Walk? Walking Distance Calculator + Map",
  description:
    "Calculate exactly how far you can walk in any time period. Interactive calculator shows distances at 6 walking paces with a map of your walkable radius. Based on CDC walking speed data.",
  alternates: {
    canonical: "https://howlongtowalk.org/how-far-can-i-walk",
  },
  openGraph: {
    title: "How Far Can I Walk? Walking Distance Calculator + Map",
    description:
      "Calculate exactly how far you can walk in any time period. Interactive calculator shows distances at 6 walking paces with a map of your walkable radius.",
    url: "https://howlongtowalk.org/how-far-can-i-walk",
    type: "website",
  },
};

export default function HowFarCanIWalkPage() {
  const shortDurations = getWalkingTimesByCategory("short");
  const mediumDurations = getWalkingTimesByCategory("medium");
  const longDurations = getWalkingTimesByCategory("long");

  // Build schema data
  const breadcrumbItems = [
    { name: "Home", url: "https://howlongtowalk.org/" },
    { name: "Walking Distance Calculator", url: "https://howlongtowalk.org/how-far-can-i-walk" },
  ];
  const webAppSchema = createWebAppSchema({
    name: "Walking Distance Calculator",
    description:
      "Calculate exactly how far you can walk in any time period at different paces.",
    url: "https://howlongtowalk.org/how-far-can-i-walk",
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
          segments={[
            { label: "Walking Distance Calculator", href: "/how-far-can-i-walk" },
          ]}
        />

        {/* Hero Section */}
        <div className="mb-10">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            How Far Can I Walk? Distance Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Calculate exactly how far you can walk in any amount of time. Enter your
            available time below to see distances at six different walking paces, from
            a leisurely stroll (2.0 mph) to race walking (4.5 mph). The map shows your
            walkable radius from your current location.
          </p>
        </div>

        {/* Calculator Section */}
        <div className="mb-8">
          <DistanceCalculator
            initialMinutes={30}
            heading="Calculate Your Walking Distance"
          />
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <MapRadiusWrapper
            minutes={30}
            showAllPaces={true}
            height="400px"
            heading="Your Walkable Radius"
          />
        </div>

        {/* Quick Answer Box */}
        <div className="mb-12 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-5">
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            Quick Answer
          </h2>
          <p className="text-gray-700">
            At a <strong>moderate walking pace of 3.0 mph</strong>, you can walk{" "}
            <strong>0.5 miles in 10 minutes</strong>,{" "}
            <strong>1.5 miles in 30 minutes</strong>, or{" "}
            <strong>3 miles in 1 hour</strong>. Pace matters more than duration: a
            brisk walker covers double the distance of a leisurely walker in the same time.
          </p>
        </div>

        {/* Walking Distance by Time Tables */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Walking Distance by Time Duration
          </h2>

          {/* Short Durations */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Short Walks (10-20 minutes)
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {shortDurations.map((config) => {
                const moderateMiles = (3.0 * (config.minutes / 60)).toFixed(2);
                const moderateKm = (4.8 * (config.minutes / 60)).toFixed(2);
                return (
                  <Link
                    key={config.slug}
                    href={`/how-far-can-i-walk/${config.slug}`}
                    className="group rounded-lg border border-gray-200 bg-white p-5 transition-all hover:border-teal-300 hover:shadow-md"
                  >
                    <div className="mb-2 text-lg font-bold text-gray-900 group-hover:text-teal-700">
                      {config.displayName}
                    </div>
                    <div className="text-sm text-gray-600">
                      At moderate pace: <span className="font-semibold text-teal-700">{moderateMiles} mi</span> ({moderateKm} km)
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Medium Durations */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Medium Walks (30 minutes - 1 hour)
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {mediumDurations.map((config) => {
                const moderateMiles = (3.0 * (config.minutes / 60)).toFixed(2);
                const moderateKm = (4.8 * (config.minutes / 60)).toFixed(2);
                return (
                  <Link
                    key={config.slug}
                    href={`/how-far-can-i-walk/${config.slug}`}
                    className="group rounded-lg border border-gray-200 bg-white p-5 transition-all hover:border-teal-300 hover:shadow-md"
                  >
                    <div className="mb-2 text-lg font-bold text-gray-900 group-hover:text-teal-700">
                      {config.displayName}
                    </div>
                    <div className="text-sm text-gray-600">
                      At moderate pace: <span className="font-semibold text-teal-700">{moderateMiles} mi</span> ({moderateKm} km)
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Long Durations */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Long Walks (2+ hours)
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {longDurations.map((config) => {
                const moderateMiles = (3.0 * (config.minutes / 60)).toFixed(1);
                const moderateKm = (4.8 * (config.minutes / 60)).toFixed(1);
                return (
                  <Link
                    key={config.slug}
                    href={`/how-far-can-i-walk/${config.slug}`}
                    className="group rounded-lg border border-gray-200 bg-white p-5 transition-all hover:border-teal-300 hover:shadow-md"
                  >
                    <div className="mb-2 text-lg font-bold text-gray-900 group-hover:text-teal-700">
                      {config.displayName}
                    </div>
                    <div className="text-sm text-gray-600">
                      At moderate pace: <span className="font-semibold text-teal-700">{moderateMiles} mi</span> ({moderateKm} km)
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Reference Table: Distance by Pace */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Walking Distance Reference Table
          </h2>
          <p className="mb-4 text-gray-600">
            How far you can walk at each pace level in common time durations:
          </p>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Pace</th>
                  <th>Speed</th>
                  <th>15 min</th>
                  <th>30 min</th>
                  <th>1 hour</th>
                  <th>2 hours</th>
                </tr>
              </thead>
              <tbody>
                {walkingPaces.map((pace) => {
                  const isModerate = pace.label === "Moderate";
                  return (
                    <tr key={pace.label} className={isModerate ? "highlight" : ""}>
                      <td>
                        <div className="font-medium text-gray-900">{pace.label}</div>
                        <div className="text-xs text-gray-500">{pace.description}</div>
                      </td>
                      <td>
                        <div>{pace.mph} mph</div>
                        <div className="text-xs text-gray-500">{pace.kmh} km/h</div>
                      </td>
                      <td>{(pace.mph * 0.25).toFixed(2)} mi</td>
                      <td>{(pace.mph * 0.5).toFixed(2)} mi</td>
                      <td>{pace.mph.toFixed(1)} mi</td>
                      <td>{(pace.mph * 2).toFixed(1)} mi</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* How the Calculator Works */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            How the Calculator Works
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="mb-4 text-gray-700">
              The walking distance calculator uses the simple formula:{" "}
              <strong>Distance = Speed × Time</strong>. Enter any time duration, and
              the calculator shows how far you can walk at six scientifically-defined
              pace levels from the CDC and Compendium of Physical Activities.
            </p>
            <p className="mb-4 text-gray-700">
              The interactive map draws a circle around your location showing your
              walkable radius. At a <strong>moderate 3.0 mph pace</strong>, a 30-minute
              walk covers 1.5 miles — everything within that radius is reachable on foot.
              The colored rings show ranges for all six pace levels.
            </p>
          </div>
        </section>

        {/* Factors Affecting Walking Distance */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Factors That Affect Walking Distance
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-5">
              <h3 className="mb-2 font-semibold text-gray-900">Age & Fitness</h3>
              <p className="text-sm text-gray-600">
                Walking speed peaks in your 30s-40s and gradually declines. A 70-year-old
                typically walks 15-20% slower than a 40-year-old, covering proportionally
                less distance in the same time (Bohannon & Andrews, 2011).
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-5">
              <h3 className="mb-2 font-semibold text-gray-900">Terrain</h3>
              <p className="text-sm text-gray-600">
                Flat pavement allows fastest walking. Hills, sand, or uneven trails can
                reduce your speed by 20-40%, significantly decreasing the distance you
                cover in a given time.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-5">
              <h3 className="mb-2 font-semibold text-gray-900">Purpose</h3>
              <p className="text-sm text-gray-600">
                Walking with a destination in mind typically increases pace by 10-15%
                compared to aimless strolling. This can add 0.1-0.2 miles to a 30-minute walk.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-5">
              <h3 className="mb-2 font-semibold text-gray-900">Stops & Interruptions</h3>
              <p className="text-sm text-gray-600">
                Traffic lights, crosswalks, and brief pauses can reduce actual walking time
                by 10-20%, meaning a &quot;30-minute walk&quot; may only include 25 minutes of movement.
              </p>
            </div>
          </div>
        </section>

        {/* All Walking Time Pages */}
        <section className="mb-12 rounded-lg bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            Browse All Walking Time Pages
          </h2>
          <div className="flex flex-wrap gap-2">
            {walkingTimes.map((config) => (
              <Link
                key={config.slug}
                href={`/how-far-can-i-walk/${config.slug}`}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-teal-50 hover:text-teal-700"
              >
                {config.displayName}
              </Link>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="border-t border-gray-200 pt-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Sources</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              Bohannon, R.W. & Andrews, A.W. (2011). &quot;Normal walking speed: a descriptive
              meta-analysis.&quot; <em>Physiotherapy</em>, 97(3), 182-189.
            </li>
            <li>
              CDC Physical Activity Guidelines for Americans, 2nd edition (2018).
            </li>
            <li>
              Compendium of Physical Activities — MET values and walking pace definitions.
            </li>
            <li>
              British Journal of Sports Medicine (2018) — Brisk walking defined as ~100 steps/minute.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
