import Link from "next/link";
import WalkingTimeCalculator from "@/components/calculators/WalkingTimeCalculator";

export default function Home() {
  return (
    <div className="content-container py-8">
      {/* Hero Section */}
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
          How Long Does It Take to Walk?
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Calculate walking and running times for any distance. Accurate results
          based on research from over 23,000 subjects.
        </p>
      </div>

      {/* Main Calculator */}
      <div className="mx-auto max-w-2xl">
        <WalkingTimeCalculator
          initialDistance={1}
          initialUnit="miles"
          showExtras={true}
          heading="Walking Time Calculator"
        />
      </div>

      {/* Quick Links */}
      <div className="mt-12">
        <h2 className="mb-6 text-center text-xl font-semibold text-gray-900">
          Popular Distances
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {[
            { href: "/how-long-to-walk/1-mile", label: "1 Mile", time: "~20 min" },
            { href: "/how-long-to-walk/2-miles", label: "2 Miles", time: "~40 min" },
            { href: "/how-long-to-walk/5-miles", label: "5 Miles", time: "~1h 40m" },
            { href: "/how-long-to-walk/5-km", label: "5 Km", time: "~1h 2m" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg border border-gray-200 bg-white p-4 text-center transition-all hover:border-teal-200 hover:shadow-md"
            >
              <div className="font-semibold text-gray-900">{link.label}</div>
              <div className="text-sm text-teal-700">{link.time}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Section Links */}
      <div className="mt-12">
        <h2 className="mb-6 text-center text-xl font-semibold text-gray-900">
          Explore Calculators
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/how-long-to-walk"
            className="card card-hover block"
          >
            <h3 className="mb-2 text-lg font-semibold text-teal-700">
              Walking Time Calculator
            </h3>
            <p className="text-sm text-gray-600">
              How long to walk 1 mile, 5 miles, 10km, a half marathon, and more.
            </p>
          </Link>

          <Link
            href="/how-long-to-run"
            className="card card-hover block"
          >
            <h3 className="mb-2 text-lg font-semibold text-teal-700">
              Running Time Calculator
            </h3>
            <p className="text-sm text-gray-600">
              Race time predictions for 5K, 10K, half marathon, and marathon.
            </p>
          </Link>

          <Link
            href="/how-far-can-i-walk"
            className="card card-hover block"
          >
            <h3 className="mb-2 text-lg font-semibold text-teal-700">
              Distance Calculator
            </h3>
            <p className="text-sm text-gray-600">
              How far can I walk in 30 minutes, 1 hour, or 2 hours?
            </p>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-12 rounded-lg border border-gray-200 bg-white p-6">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">
          Why Trust These Calculations?
        </h2>
        <p className="mb-3 text-gray-600">
          Our walking speed data comes from{" "}
          <strong>Bohannon &amp; Andrews (2011)</strong>, a meta-analysis
          published in <em>Physiotherapy</em> that analyzed walking speeds
          across <strong>23,111 subjects</strong> in 7 age groups.
        </p>
        <p className="text-gray-600">
          The average adult walks at approximately <strong>3.0 mph</strong>{" "}
          (4.8 km/h), which we use as our &quot;moderate&quot; pace baseline.
        </p>
        <Link
          href="/about"
          className="mt-4 inline-block text-sm font-medium text-teal-700 hover:text-teal-800"
        >
          Learn more about our methodology →
        </Link>
      </div>
    </div>
  );
}
