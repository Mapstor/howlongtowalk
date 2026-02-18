import { Metadata } from "next";
import Link from "next/link";

import TabbedCalculator from "@/components/calculators/TabbedCalculator";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { createWebAppSchema } from "@/components/seo/WebAppSchema";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "How Long to Walk or Run Any Distance | howlongtowalk.org",
  description:
    "Free calculators for walking and running times. Find how long it takes to walk 1 mile, run a 5K, or cover any distance — by pace, age, and fitness level.",
  alternates: {
    canonical: "https://howlongtowalk.org",
  },
  openGraph: {
    title: "How Long to Walk or Run Any Distance | howlongtowalk.org",
    description:
      "Free calculators for walking and running times. Find how long it takes to walk 1 mile, run a 5K, or cover any distance — by pace, age, and fitness level.",
    url: "https://howlongtowalk.org",
    type: "website",
  },
};

// Popular walking distances for the quick reference
const popularWalkingDistances = [
  { label: "Half a mile", time: "10:00", briskTime: "8:34", slug: "half-a-mile" },
  { label: "1 mile", time: "20:00", briskTime: "17:08", slug: "1-mile" },
  { label: "2 miles", time: "40:00", briskTime: "34:17", slug: "2-miles" },
  { label: "3 miles", time: "1:00:00", briskTime: "51:26", slug: "3-miles" },
  { label: "5 miles", time: "1:40:00", briskTime: "1:25:43", slug: "5-miles" },
  { label: "10 miles", time: "3:20:00", briskTime: "2:51:26", slug: "10-miles" },
];

// Popular running distances
const popularRunningDistances = [
  { label: "1 mile", beginner: "10:00–13:00", intermediate: "7:00–10:00", advanced: "Under 7:00", slug: "a-mile" },
  { label: "5K (3.1 mi)", beginner: "30:00–40:00", intermediate: "22:00–30:00", advanced: "Under 22:00", slug: "a-5k" },
  { label: "10K (6.2 mi)", beginner: "1:00–1:20", intermediate: "45:00–1:00", advanced: "Under 45:00", slug: "a-10k" },
  { label: "Half Marathon", beginner: "2:15–3:00", intermediate: "1:45–2:15", advanced: "Under 1:45", slug: "a-half-marathon" },
  { label: "Marathon", beginner: "4:30–6:00", intermediate: "3:30–4:30", advanced: "Under 3:30", slug: "a-marathon" },
];

// Common time windows for distance calculator
const commonTimeWindows = [
  { label: "15 minutes", moderate: "0.75 miles", brisk: "0.88 miles", slug: "in-15-minutes" },
  { label: "30 minutes", moderate: "1.50 miles", brisk: "1.75 miles", slug: "in-30-minutes" },
  { label: "1 hour", moderate: "3.00 miles", brisk: "3.50 miles", slug: "in-1-hour" },
  { label: "2 hours", moderate: "6.00 miles", brisk: "7.00 miles", slug: "in-2-hours" },
];

export default function HomePage() {
  // Schema data
  const breadcrumbItems = [
    { name: "Home", url: "https://howlongtowalk.org/" },
  ];
  const webAppSchema = createWebAppSchema({
    name: "Walking & Running Time Calculator",
    description:
      "Free calculators for walking and running times. Find how long it takes to walk 1 mile, run a 5K, or cover any distance.",
    url: "https://howlongtowalk.org",
    applicationCategory: "HealthApplication",
  });

  return (
    <>
      {/* Schema.org JSON-LD */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <JsonLd data={webAppSchema} />

      <div className="content-container py-8">
        {/* Hero Section */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            How Long Does It Take to Walk or Run Any Distance?
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            <strong>Find your answer in seconds.</strong> Enter a distance, pick your pace,
            and get exact walking or running times — personalized by age and fitness level.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            All calculations based on peer-reviewed walking speed data from{" "}
            <Link href="/about" className="text-teal-700 hover:underline">
              Bohannon & Andrews (2011)
            </Link>
            , a meta-analysis of 23,111 participants across 41 studies.
          </p>
        </div>

        {/* Main Calculator */}
        <div className="mb-12">
          <TabbedCalculator initialTab="walk" />
        </div>

        {/* Walking Time Section */}
        <section className="mb-12">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            Walking Time Calculator
          </h2>
          <p className="mb-6 text-gray-600">
            How long does it take to walk a specific distance? Select a distance below
            or use the calculator above.
          </p>

          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Most Popular Walking Distances
          </h3>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Distance</th>
                  <th>Average (3.0 mph)</th>
                  <th>Brisk (3.5 mph)</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {popularWalkingDistances.map((row) => (
                  <tr key={row.slug}>
                    <td className="font-medium text-gray-900">{row.label}</td>
                    <td>{row.time}</td>
                    <td>{row.briskTime}</td>
                    <td>
                      <Link
                        href={`/how-long-to-walk/${row.slug}`}
                        className="text-teal-700 hover:text-teal-900 hover:underline"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-right">
            <Link
              href="/how-long-to-walk"
              className="text-sm font-medium text-teal-700 hover:text-teal-900 hover:underline"
            >
              See all walking distances
            </Link>
          </div>
        </section>

        {/* Running Time Section */}
        <section className="mb-12">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            Running Time Calculator
          </h2>
          <p className="mb-6 text-gray-600">
            How long does it take to run a specific distance? Get times by pace and
            experience level.
          </p>

          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Popular Running Distances
          </h3>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Distance</th>
                  <th>Beginner</th>
                  <th>Intermediate</th>
                  <th>Advanced</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {popularRunningDistances.map((row) => (
                  <tr key={row.slug}>
                    <td className="font-medium text-gray-900">{row.label}</td>
                    <td>{row.beginner}</td>
                    <td>{row.intermediate}</td>
                    <td>{row.advanced}</td>
                    <td>
                      <Link
                        href={`/how-long-to-run/${row.slug}`}
                        className="text-teal-700 hover:text-teal-900 hover:underline"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-right">
            <Link
              href="/how-long-to-run"
              className="text-sm font-medium text-teal-700 hover:text-teal-900 hover:underline"
            >
              See all running distances
            </Link>
          </div>
        </section>

        {/* Walking Distance Section */}
        <section className="mb-12">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            Walking Distance Calculator
          </h2>
          <p className="mb-6 text-gray-600">
            How far can you walk in a given amount of time? Find out — and see it on a map.
          </p>

          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Common Time Windows
          </h3>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Moderate (3.0 mph)</th>
                  <th>Brisk (3.5 mph)</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {commonTimeWindows.map((row) => (
                  <tr key={row.slug}>
                    <td className="font-medium text-gray-900">{row.label}</td>
                    <td>{row.moderate}</td>
                    <td>{row.brisk}</td>
                    <td>
                      <Link
                        href={`/how-far-can-i-walk/${row.slug}`}
                        className="text-teal-700 hover:text-teal-900 hover:underline"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-right">
            <Link
              href="/how-far-can-i-walk"
              className="text-sm font-medium text-teal-700 hover:text-teal-900 hover:underline"
            >
              See all time durations
            </Link>
          </div>
        </section>

        {/* Why This Site Exists */}
        <section className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Why This Site Exists
          </h2>
          <p className="mb-4 text-gray-700">
            Most &quot;how long to walk a mile&quot; results give you a vague range and a wall of
            SEO filler. We built something better.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900">Real data.</h3>
              <p className="text-gray-600">
                Every calculation is grounded in the Bohannon & Andrews (2011) meta-analysis — the
                largest study of normal walking speeds ever published. Not guesses. Not AI-generated fluff.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Age-adjusted.</h3>
              <p className="text-gray-600">
                Walking speed changes with age. Our calculator accounts for this using decade-by-decade
                data from 23,111 participants.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Every distance.</h3>
              <p className="text-gray-600">
                From half a mile to 100 miles. From a 5K to an ultramarathon. One site, one
                calculator, every answer.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Quick Reference: Average Walking Speed
          </h2>
          <p className="mb-4 text-gray-700">
            The average adult walks at <strong>3.0 mph</strong> (4.8 km/h), which equals a 20-minute mile.
          </p>
          <p className="mb-4 text-gray-700">
            This varies by age and gender. Men aged 30–59 average 3.20 mph. Women aged 40–49
            peak at 3.11 mph. Adults over 80 average about 2.1 mph.
          </p>
          <p className="text-gray-700">
            For the full breakdown, see our{" "}
            <Link href="/walking-speed" className="font-medium text-teal-700 hover:text-teal-900 hover:underline">
              average walking speed reference
            </Link>
            .
          </p>
        </section>

        {/* Footer Links */}
        <section className="border-t border-gray-200 pt-8">
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/about" className="text-teal-700 hover:text-teal-900 hover:underline">
              About & Methodology
            </Link>
            <Link href="/walking-speed" className="text-teal-700 hover:text-teal-900 hover:underline">
              Walking Speed Reference
            </Link>
            <Link href="/how-long-to-walk" className="text-teal-700 hover:text-teal-900 hover:underline">
              All Walking Distances
            </Link>
            <Link href="/how-long-to-run" className="text-teal-700 hover:text-teal-900 hover:underline">
              All Running Distances
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
