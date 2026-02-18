import Link from "next/link";

export default function Home() {
  return (
    <div className="content-container py-12">
      <h1 className="mb-4 text-3xl font-bold text-gray-900">
        How Long Does It Take to Walk?
      </h1>
      <p className="mb-8 text-lg text-gray-600">
        Calculate walking and running times for any distance. Based on research
        from over 23,000 subjects.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <Link
          href="/how-long-to-walk"
          className="card card-hover block text-center"
        >
          <h2 className="mb-2 text-xl font-semibold text-teal-700">
            Walking Calculator
          </h2>
          <p className="text-sm text-gray-600">
            How long to walk 1 mile, 5 miles, 10km...
          </p>
        </Link>

        <Link
          href="/how-long-to-run"
          className="card card-hover block text-center"
        >
          <h2 className="mb-2 text-xl font-semibold text-teal-700">
            Running Calculator
          </h2>
          <p className="text-sm text-gray-600">
            Race times for 5K, 10K, marathon...
          </p>
        </Link>

        <Link
          href="/how-far-can-i-walk"
          className="card card-hover block text-center"
        >
          <h2 className="mb-2 text-xl font-semibold text-teal-700">
            Distance Calculator
          </h2>
          <p className="text-sm text-gray-600">
            How far can I walk in 30 minutes...
          </p>
        </Link>
      </div>

      <p className="mt-8 text-center text-sm text-gray-500">
        Full site coming soon. Building calculators for 59 distance pages.
      </p>
    </div>
  );
}
