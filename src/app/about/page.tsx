import { Metadata } from "next";
import Link from "next/link";

import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About Us | howlongtowalk.org — Our Mission & Methodology",
  description:
    "Learn about howlongtowalk.org's mission to help people move more. Our walking and running calculators are based on peer-reviewed research from 23,111 participants.",
  alternates: {
    canonical: "https://howlongtowalk.org/about",
  },
  openGraph: {
    title: "About Us | howlongtowalk.org — Our Mission & Methodology",
    description:
      "Learn about howlongtowalk.org's mission to help people move more through research-backed walking and running calculators.",
    url: "https://howlongtowalk.org/about",
    type: "website",
  },
};

export default function AboutPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://howlongtowalk.org/" },
    { name: "About", url: "https://howlongtowalk.org/about" },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="content-container py-8">
        <Breadcrumbs segments={[{ label: "About", href: "/about" }]} />

        <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
          About howlongtowalk.org
        </h1>

        {/* Mission Statement */}
        <section className="mb-12 rounded-lg bg-gradient-to-r from-teal-50 to-emerald-50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Our Mission
          </h2>
          <p className="mb-4 text-lg text-gray-700">
            <strong>We believe walking is the most accessible form of exercise on the planet.</strong>
          </p>
          <p className="mb-4 text-gray-700">
            Our mission at howlongtowalk.org is simple: <strong>help people move more, more often.</strong>{" "}
            We want to remove the guesswork from walking and running so that anyone — regardless of
            age, fitness level, or experience — can confidently plan their physical activity.
          </p>
          <p className="text-gray-700">
            Whether you&apos;re a senior planning a walk to the grocery store, a busy professional
            wondering if you can walk to work, a new runner training for your first 5K, or a parent
            planning a family hike, we provide the precise, research-backed information you need to
            make movement a natural part of your daily life.
          </p>
        </section>

        {/* Why This Site Exists */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Why We Built This
          </h2>
          <p className="mb-4 text-gray-700">
            We built howlongtowalk.org because every other &quot;how long to walk a mile&quot; result
            on the internet gives you the same vague answer: &quot;15 to 22 minutes.&quot; No context.
            No data source. No adjustment for age, pace, or fitness level.
          </p>
          <p className="mb-4 text-gray-700">
            That&apos;s not helpful if you&apos;re a 68-year-old wondering whether you can walk to the
            store in 20 minutes, or a 30-year-old figuring out if walking to work is feasible.
          </p>
          <p className="mb-4 text-gray-700">
            We wanted to build the <strong>definitive resource</strong> — one site where anyone can get
            a precise, research-backed answer for any walking or running distance. No fluff. No
            SEO-stuffed filler content. Just accurate data presented clearly.
          </p>
          <p className="text-gray-700">
            Every number on this site is traceable to a specific, peer-reviewed study or authoritative
            dataset. We never make up data, estimate loosely, or cite &quot;research shows&quot;
            without naming the research.
          </p>
        </section>

        {/* What We Offer */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            What howlongtowalk.org Offers
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-3 text-xl font-semibold text-teal-700">
                Walking Time Calculator
              </h3>
              <p className="text-gray-600">
                Calculate how long it takes to walk any distance — from half a mile to 100 miles.
                Adjust for pace (leisurely to very fast) and see age-adjusted estimates based on
                real research data.
              </p>
              <Link
                href="/how-long-to-walk"
                className="mt-3 inline-block text-sm font-medium text-teal-700 hover:underline"
              >
                Try the walking calculator →
              </Link>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-3 text-xl font-semibold text-teal-700">
                Running Time Calculator
              </h3>
              <p className="text-gray-600">
                Get accurate running time estimates for any distance — from a mile to an ultramarathon.
                See times by experience level (beginner to elite) and compare to average race finish times.
              </p>
              <Link
                href="/how-long-to-run"
                className="mt-3 inline-block text-sm font-medium text-teal-700 hover:underline"
              >
                Try the running calculator →
              </Link>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-3 text-xl font-semibold text-teal-700">
                Distance Calculator
              </h3>
              <p className="text-gray-600">
                Find out how far you can walk in a given time. Perfect for planning walks during lunch
                breaks, figuring out your walkable radius, or understanding what&apos;s reachable on foot.
              </p>
              <Link
                href="/how-far-can-i-walk"
                className="mt-3 inline-block text-sm font-medium text-teal-700 hover:underline"
              >
                Try the distance calculator →
              </Link>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-3 text-xl font-semibold text-teal-700">
                Walking Speed Reference
              </h3>
              <p className="text-gray-600">
                Comprehensive walking speed data broken down by age and gender. Understand how walking
                speed changes across the lifespan and where you fall compared to research averages.
              </p>
              <Link
                href="/walking-speed"
                className="mt-3 inline-block text-sm font-medium text-teal-700 hover:underline"
              >
                View walking speed data →
              </Link>
            </div>
          </div>
        </section>

        {/* Health & Wellness Focus */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Supporting Health & Wellness
          </h2>
          <p className="mb-4 text-gray-700">
            Physical activity is one of the most important things you can do for your health. According
            to the CDC Physical Activity Guidelines for Americans, adults should get at least 150 minutes
            of moderate-intensity aerobic activity (like brisk walking) per week.
          </p>
          <p className="mb-4 text-gray-700">
            Walking has been shown to provide numerous health benefits:
          </p>
          <ul className="mb-4 list-disc pl-6 text-gray-700">
            <li><strong>Cardiovascular health:</strong> Regular walking reduces the risk of heart disease and stroke</li>
            <li><strong>Mental wellbeing:</strong> Walking can reduce symptoms of depression and anxiety</li>
            <li><strong>Weight management:</strong> A consistent walking routine supports healthy weight maintenance</li>
            <li><strong>Bone and muscle strength:</strong> Walking is a weight-bearing exercise that maintains bone density</li>
            <li><strong>Longevity:</strong> Studies link walking speed to life expectancy in older adults</li>
            <li><strong>Cognitive function:</strong> Regular physical activity is associated with better brain health</li>
          </ul>
          <p className="text-gray-700">
            Our goal is to make it easier for you to incorporate walking into your daily routine by
            providing the information you need to plan effectively.
          </p>
        </section>

        {/* Our Data Sources */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Our Data Sources
          </h2>
          <p className="mb-6 text-gray-700">
            Every calculation on this site is grounded in peer-reviewed research. We believe in
            transparency, so here are our primary sources:
          </p>

          {/* Walking Speed Data */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Walking Speed Data
            </h3>
            <div className="mb-4">
              <h4 className="font-semibold text-teal-700">Primary Source</h4>
              <p className="mt-1 text-gray-700">
                Bohannon, R.W. & Andrews, A.W. (2011). &quot;Normal walking speed: a descriptive
                meta-analysis.&quot; <em>Physiotherapy</em>, 97(3), 182–189.
              </p>
              <p className="mt-2 text-gray-700">
                This is the <strong>largest meta-analysis of normal walking speed ever published</strong>.
                It consolidated data from <strong>41 individual studies</strong> with a combined total of{" "}
                <strong>23,111 healthy, community-dwelling adult participants</strong>. The study reported
                comfortable walking speeds stratified by age decade and gender.
              </p>
              <p className="mt-2 text-gray-700">
                We use this data for all age-adjusted calculations on the site.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-teal-700">Secondary Source</h4>
              <p className="mt-1 text-gray-700">
                Bohannon, R.W. (1997). &quot;Comfortable and maximum walking speed of adults aged
                20–79 years.&quot; <em>Age and Ageing</em>, 26(1), 15–19.
              </p>
              <p className="mt-2 text-gray-700">
                This study of 230 healthy volunteers provided both comfortable and maximum walking
                speeds, along with correlations to height and lower extremity muscle strength.
              </p>
            </div>
          </div>

          {/* Running & Race Data */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Running & Race Data
            </h3>
            <div className="mb-4">
              <h4 className="font-semibold text-teal-700">Primary Source</h4>
              <p className="mt-1 text-gray-700">
                RunRepeat (2024). Analysis of 35 million race results across 28,000 races worldwide
                over 20 years.
              </p>
              <p className="mt-2 text-gray-700">
                We use RunRepeat&apos;s data for average race finish times, percentile rankings, and
                gender-based performance comparisons across 5K, 10K, half marathon, and marathon distances.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-teal-700">Supporting Sources</h4>
              <p className="mt-1 text-gray-700">
                Marathon Handbook (2024, 400,000+ US results), Outside Magazine (2024, 1 million half
                marathon results).
              </p>
            </div>
          </div>

          {/* Calorie & Activity Data */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Calorie & Activity Data
            </h3>
            <div>
              <h4 className="font-semibold text-teal-700">Primary Source</h4>
              <p className="mt-1 text-gray-700">
                Compendium of Physical Activities. MET values for walking and running at various
                speeds and inclines.
              </p>
              <p className="mt-2 text-gray-700">
                We calculate calories using standard MET-based formulas rather than simplified rules of thumb.
              </p>
            </div>
          </div>

          {/* Steps Data */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Steps Data
            </h3>
            <div>
              <h4 className="font-semibold text-teal-700">Primary Source</h4>
              <p className="mt-1 text-gray-700">
                ACSM&apos;s Health & Fitness Journal (2008). Step counts per mile at various walking
                and running speeds.
              </p>
            </div>
          </div>

          {/* Health Guidelines */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Health Guidelines
            </h3>
            <div>
              <h4 className="font-semibold text-teal-700">Primary Source</h4>
              <p className="mt-1 text-gray-700">
                CDC Physical Activity Guidelines for Americans, 2nd edition (2018). Published by the
                U.S. Department of Health and Human Services.
              </p>
            </div>
          </div>
        </section>

        {/* Our Methodology */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Our Methodology
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Walking Time Calculations
              </h3>
              <p className="text-gray-700">
                Walking time = Distance ÷ Speed. Simple math, but the value is in providing accurate
                speed inputs.
              </p>
              <p className="mt-2 text-gray-700">
                We offer six standard pace levels (2.0 to 4.5 mph), each grounded in the Compendium of
                Physical Activities and CDC pace definitions. The &quot;moderate&quot; pace of 3.0 mph
                reflects the average comfortable walking speed across all adults in the Bohannon
                meta-analysis.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Age Adjustments
              </h3>
              <p className="text-gray-700">
                When we show &quot;walking time by age,&quot; we use the specific speed for that
                age-gender bracket directly from Bohannon & Andrews (2011). We do not extrapolate or
                estimate between brackets.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Running Time Calculations
              </h3>
              <p className="text-gray-700">
                Running times are calculated from pace (minutes per mile) and distance. Experience-level
                brackets (beginner, intermediate, advanced, elite) are derived from RunRepeat percentile
                data and standard coaching benchmarks.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Calorie Calculations
              </h3>
              <p className="text-gray-700">
                We use two methods depending on available data. The quick formula (body weight in lbs ×
                0.53 per mile walking, × 0.75 per mile running) provides estimates consistent with
                MET-based calculations. For more detailed estimates, we use the full MET formula:
                Calories = MET × 3.5 × body weight (kg) / 200 × minutes.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Our Values
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                <svg className="h-8 w-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">Accuracy</h3>
              <p className="text-sm text-gray-600">
                Every calculation is grounded in peer-reviewed research. We cite our sources and never
                make up data.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                <svg className="h-8 w-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">Simplicity</h3>
              <p className="text-sm text-gray-600">
                Fast, clear answers without walls of SEO filler. Get the information you need and get moving.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                <svg className="h-8 w-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">Accessibility</h3>
              <p className="text-sm text-gray-600">
                Built for everyone — young and old, beginner and athlete. Walking is for everybody.
              </p>
            </div>
          </div>
        </section>

        {/* What This Site Is Not */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            What This Site Is Not
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg bg-red-50 p-4">
              <h3 className="font-semibold text-red-900">Not Medical Advice</h3>
              <p className="mt-1 text-red-800">
                We provide exercise data, not medical advice. Consult a healthcare provider before
                starting any exercise program, especially if you have health conditions.
              </p>
            </div>
            <div className="rounded-lg bg-amber-50 p-4">
              <h3 className="font-semibold text-amber-900">Not a Route Planner</h3>
              <p className="mt-1 text-amber-800">
                We calculate time and distance, not directions. For route planning, we recommend tools
                like Google Maps, Strava, or MapMyWalk.
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-4">
              <h3 className="font-semibold text-blue-900">Not a Fitness Tracker</h3>
              <p className="mt-1 text-blue-800">
                We provide reference data and calculators. For tracking your actual walks and runs,
                use a fitness app or wearable.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Contact Us
          </h2>
          <p className="mb-4 text-gray-700">
            Questions about our data, methodology, or suggestions for the site? We&apos;d love to hear
            from you.
          </p>
          <p className="mb-3">
            <a
              href="mailto:info@howlongtowalk.org"
              className="font-medium text-teal-700 hover:text-teal-900 hover:underline"
            >
              info@howlongtowalk.org
            </a>
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-teal-600 px-6 py-3 font-medium text-white hover:bg-teal-700"
          >
            Visit Contact Page
          </Link>
        </section>

        {/* Complete Sources List */}
        <section className="border-t border-gray-200 pt-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            Sources (Complete List)
          </h2>
          <ol className="space-y-3 text-sm text-gray-600">
            <li>
              1. Bohannon, R.W. & Andrews, A.W. (2011). &quot;Normal walking speed: a descriptive
              meta-analysis.&quot; <em>Physiotherapy</em>, 97(3), 182–189.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/21820535/" className="text-teal-700 hover:underline" target="_blank" rel="noopener noreferrer">
                PubMed: 21820535
              </a>
            </li>
            <li>
              2. Bohannon, R.W. (1997). &quot;Comfortable and maximum walking speed of adults aged
              20–79 years.&quot; <em>Age and Ageing</em>, 26(1), 15–19.{" "}
              <a href="https://academic.oup.com/ageing/article/26/1/15/35875" className="text-teal-700 hover:underline" target="_blank" rel="noopener noreferrer">
                Oxford Academic
              </a>
            </li>
            <li>
              3. Fritz, S. & Lusardi, M. (2009). &quot;White paper: Walking speed — the sixth vital
              sign.&quot; <em>Journal of Geriatric Physical Therapy</em>, 32(2), 2–5.
            </li>
            <li>
              4. Studenski, S. et al. (2011). &quot;Gait speed and survival in older adults.&quot;{" "}
              <em>JAMA</em>, 305(1), 50–58.
            </li>
            <li>
              5. CDC Physical Activity Guidelines for Americans, 2nd edition (2018).{" "}
              <a href="https://health.gov/sites/default/files/2019-09/Physical_Activity_Guidelines_2nd_edition.pdf" className="text-teal-700 hover:underline" target="_blank" rel="noopener noreferrer">
                health.gov
              </a>
            </li>
            <li>
              6. RunRepeat (2024). Race statistics from 35 million results.{" "}
              <a href="https://runrepeat.com/" className="text-teal-700 hover:underline" target="_blank" rel="noopener noreferrer">
                runrepeat.com
              </a>
            </li>
            <li>
              7. Marathon Handbook (2024). US finish time data.{" "}
              <a href="https://marathonhandbook.com/" className="text-teal-700 hover:underline" target="_blank" rel="noopener noreferrer">
                marathonhandbook.com
              </a>
            </li>
            <li>
              8. ACSM&apos;s Health & Fitness Journal (2008). Step counts per mile at various speeds.
            </li>
            <li>
              9. Compendium of Physical Activities.{" "}
              <a href="https://sites.google.com/site/compendiumofphysicalactivities/" className="text-teal-700 hover:underline" target="_blank" rel="noopener noreferrer">
                compendiumofphysicalactivities.com
              </a>
            </li>
            <li>
              10. British Journal of Sports Medicine (2018). Brisk walking defined as ~100 steps per minute.
            </li>
            <li>
              11. World Athletics. Walking and running records.{" "}
              <a href="https://worldathletics.org/" className="text-teal-700 hover:underline" target="_blank" rel="noopener noreferrer">
                worldathletics.org
              </a>
            </li>
          </ol>
        </section>

        {/* Related Links */}
        <section className="mt-8 border-t border-gray-200 pt-8">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/walking-speed"
              className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Walking Speed Reference
            </Link>
            <Link
              href="/how-long-to-walk"
              className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Walking Time Calculator
            </Link>
            <Link
              href="/how-long-to-run"
              className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Running Time Calculator
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Contact Us
            </Link>
            <Link
              href="/privacy"
              className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Terms of Use
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
