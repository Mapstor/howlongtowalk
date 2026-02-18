import { Metadata } from "next";
import Link from "next/link";

import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Average Walking Speed by Age and Gender [Data + Charts]",
  description:
    "The average walking speed is 3.0 mph. See how speed varies by age (20s to 80+), gender, and fitness level. Based on Bohannon's meta-analysis of 23,111 people.",
  alternates: {
    canonical: "https://howlongtowalk.org/walking-speed",
  },
  openGraph: {
    title: "Average Walking Speed by Age and Gender [Data + Charts]",
    description:
      "The average walking speed is 3.0 mph. See how speed varies by age (20s to 80+), gender, and fitness level.",
    url: "https://howlongtowalk.org/walking-speed",
    type: "website",
  },
};

// Walking speed by age data from Bohannon & Andrews (2011)
const walkingSpeedByAge = [
  { age: "20–29", menMs: 1.36, menMph: 3.04, menMinMile: "19:44", womenMs: 1.34, womenMph: 3.0, womenMinMile: "20:00" },
  { age: "30–39", menMs: 1.43, menMph: 3.2, menMinMile: "18:45", womenMs: 1.34, womenMph: 3.0, womenMinMile: "20:00" },
  { age: "40–49", menMs: 1.43, menMph: 3.2, menMinMile: "18:45", womenMs: 1.39, womenMph: 3.11, womenMinMile: "19:17" },
  { age: "50–59", menMs: 1.43, menMph: 3.2, menMinMile: "18:45", womenMs: 1.31, womenMph: 2.93, womenMinMile: "20:28" },
  { age: "60–69", menMs: 1.34, menMph: 3.0, menMinMile: "20:00", womenMs: 1.24, womenMph: 2.77, womenMinMile: "21:40" },
  { age: "70–79", menMs: 1.26, menMph: 2.82, menMinMile: "21:17", womenMs: 1.13, womenMph: 2.53, womenMinMile: "23:43" },
  { age: "80–99", menMs: 0.97, menMph: 2.17, menMinMile: "27:39", womenMs: 0.94, womenMph: 2.1, womenMinMile: "28:34" },
];

// Comfortable vs maximum walking speed data from Bohannon (1997)
const comfortableVsMaxSpeed = [
  { age: "20–29", comfortMen: 1.39, maxMen: 2.53, comfortWomen: 1.4, maxWomen: 2.27 },
  { age: "30–39", comfortMen: 1.46, maxMen: 2.43, comfortWomen: 1.38, maxWomen: 2.14 },
  { age: "40–49", comfortMen: 1.46, maxMen: 2.35, comfortWomen: 1.38, maxWomen: 2.12 },
  { age: "50–59", comfortMen: 1.39, maxMen: 2.18, comfortWomen: 1.4, maxWomen: 2.01 },
  { age: "60–69", comfortMen: 1.36, maxMen: 2.04, comfortWomen: 1.3, maxWomen: 1.77 },
  { age: "70–79", comfortMen: 1.33, maxMen: 1.9, comfortWomen: 1.27, maxWomen: 1.75 },
];

export default function WalkingSpeedPage() {
  // Schema data
  const breadcrumbItems = [
    { name: "Home", url: "https://howlongtowalk.org/" },
    { name: "Walking Speed Reference", url: "https://howlongtowalk.org/walking-speed" },
  ];

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the average walking speed for adults?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The average adult walking speed is 3.0 mph (4.8 km/h), which translates to a 20-minute mile. This is based on data from 23,111 participants in the Bohannon & Andrews (2011) meta-analysis.",
        },
      },
      {
        "@type": "Question",
        name: "What is considered brisk walking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Brisk walking is generally 3.5–4.0 mph (5.6–6.4 km/h), which translates to a 15:00–17:00 minute mile or approximately 100 steps per minute. You should be breathing noticeably harder than at rest, able to speak but not sing.",
        },
      },
      {
        "@type": "Question",
        name: "How does walking speed change with age?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Walking speed peaks in the 30s-50s at around 3.2 mph for men and 3.1 mph for women, then gradually declines. The decline accelerates after 70, with adults 80+ averaging about 2.1 mph.",
        },
      },
    ],
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <JsonLd data={faqSchema} />

      <div className="content-container py-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          segments={[
            { label: "Walking Speed Reference", href: "/walking-speed" },
          ]}
        />

        {/* Page Title */}
        <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
          Average Walking Speed by Age and Gender
        </h1>

        {/* Quick Answer */}
        <div className="answer-box mb-8">
          <p>
            <strong>The average adult walking speed is 3.0 mph (4.8 km/h)</strong>, which
            translates to a 20-minute mile. But this single number hides significant variation
            by age, gender, and fitness level.
          </p>
        </div>

        <p className="mb-8 text-gray-700">
          This page presents the most comprehensive walking speed data available, drawn from the
          landmark Bohannon & Andrews (2011) meta-analysis of 23,111 participants across 41 studies.
        </p>

        {/* Quick Summary Table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Average Walking Speed: The Quick Answer
          </h2>
          <p className="mb-4 text-gray-700">
            Most healthy adults walk at <strong>2.5 to 4.0 mph</strong> during everyday walking.
            Here&apos;s what the research shows:
          </p>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Measure</th>
                  <th>Speed</th>
                </tr>
              </thead>
              <tbody>
                <tr className="highlight">
                  <td className="font-medium text-gray-900">Overall average (all adults)</td>
                  <td>3.0 mph (4.8 km/h)</td>
                </tr>
                <tr>
                  <td className="font-medium text-gray-900">Men&apos;s average (all ages)</td>
                  <td>3.0–3.2 mph</td>
                </tr>
                <tr>
                  <td className="font-medium text-gray-900">Women&apos;s average (all ages)</td>
                  <td>2.8–3.1 mph</td>
                </tr>
                <tr>
                  <td className="font-medium text-gray-900">CDC moderate-intensity range</td>
                  <td>2.5–4.0 mph</td>
                </tr>
                <tr>
                  <td className="font-medium text-gray-900">Brisk walking (~100 steps/min)</td>
                  <td>~3.5 mph</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            These are comfortable, self-selected speeds — how fast people naturally walk when told
            to walk at their &quot;normal&quot; pace.
          </p>
        </section>

        {/* Walking Speed by Age */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Walking Speed by Age: Complete Data
          </h2>
          <p className="mb-4 text-gray-700">
            The following table is derived from Bohannon & Andrews (2011), published in{" "}
            <em>Physiotherapy</em>. This remains the gold standard for normative walking speed data.
          </p>
          <p className="mb-4 text-gray-700">
            The study was a meta-analysis combining data from 41 individual studies with a total of
            23,111 healthy, community-dwelling adult participants. All subjects walked at a
            self-selected comfortable pace.
          </p>

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Age Group</th>
                  <th>Men m/s</th>
                  <th>Men mph</th>
                  <th>Men min/mile</th>
                  <th>Women m/s</th>
                  <th>Women mph</th>
                  <th>Women min/mile</th>
                </tr>
              </thead>
              <tbody>
                {walkingSpeedByAge.map((row) => (
                  <tr key={row.age} className={row.age === "30–39" || row.age === "40–49" ? "highlight" : ""}>
                    <td className="font-medium text-gray-900">{row.age}</td>
                    <td>{row.menMs}</td>
                    <td>{row.menMph}</td>
                    <td>{row.menMinMile}</td>
                    <td>{row.womenMs}</td>
                    <td>{row.womenMph}</td>
                    <td>{row.womenMinMile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Key Findings */}
          <div className="mt-8">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">Key Findings</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-blue-50 p-4">
                <h4 className="font-semibold text-blue-900">Men peak at 30–59</h4>
                <p className="mt-1 text-sm text-blue-800">
                  Male walking speed holds remarkably steady at 1.43 m/s (3.20 mph) across three
                  decades, from the 30s through the 50s. The decline begins at 60.
                </p>
              </div>
              <div className="rounded-lg bg-pink-50 p-4">
                <h4 className="font-semibold text-pink-900">Women peak at 40–49</h4>
                <p className="mt-1 text-sm text-pink-800">
                  Female walking speed peaks slightly later than expected at 1.39 m/s (3.11 mph)
                  in the 40–49 bracket. This may reflect increased fitness focus in middle age.
                </p>
              </div>
              <div className="rounded-lg bg-amber-50 p-4">
                <h4 className="font-semibold text-amber-900">Decline accelerates after 70</h4>
                <p className="mt-1 text-sm text-amber-800">
                  Walking speed drops about 10% per decade from 60 to 79, then drops more steeply
                  after 80 — roughly 25% between the 70s and 80s.
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-4">
                <h4 className="font-semibold text-gray-900">Gender gap is small</h4>
                <p className="mt-1 text-sm text-gray-700">
                  Men walk only 5–10% faster than women in most age brackets. The gap widens
                  slightly in older age groups.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comfortable vs Maximum Speed */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Comfortable vs. Maximum Walking Speed
          </h2>
          <p className="mb-4 text-gray-700">
            Bohannon (1997) measured both comfortable and maximum walking speeds in 230 healthy
            volunteers aged 20–79:
          </p>

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Age Group</th>
                  <th>Comfort (Men)</th>
                  <th>Maximum (Men)</th>
                  <th>Comfort (Women)</th>
                  <th>Maximum (Women)</th>
                </tr>
              </thead>
              <tbody>
                {comfortableVsMaxSpeed.map((row) => (
                  <tr key={row.age}>
                    <td className="font-medium text-gray-900">{row.age}</td>
                    <td>{row.comfortMen} m/s</td>
                    <td>{row.maxMen} m/s</td>
                    <td>{row.comfortWomen} m/s</td>
                    <td>{row.maxWomen} m/s</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-700">
            <strong>Maximum speed declines faster than comfortable speed.</strong> A man in his 20s
            can walk 82% faster than his comfortable pace. By his 70s, the reserve drops to 43%.
            This &quot;speed reserve&quot; is an important marker of functional fitness.
          </p>
        </section>

        {/* What Counts as Brisk Walking */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            What Counts as &quot;Brisk&quot; Walking?
          </h2>
          <p className="mb-4 text-gray-700">
            The CDC and most health organizations recommend &quot;brisk&quot; walking for health benefits,
            but rarely define it precisely.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <h3 className="font-semibold text-gray-900">By speed</h3>
              <p className="mt-2 text-2xl font-bold text-teal-700">3.5–4.0 mph</p>
              <p className="mt-1 text-sm text-gray-600">
                (5.6–6.4 km/h) — translates to a 15:00–17:00 minute mile.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <h3 className="font-semibold text-gray-900">By steps</h3>
              <p className="mt-2 text-2xl font-bold text-teal-700">~100 steps/min</p>
              <p className="mt-1 text-sm text-gray-600">
                Count your steps for 15 seconds and multiply by 4 to check.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <h3 className="font-semibold text-gray-900">By feel</h3>
              <p className="mt-2 text-2xl font-bold text-teal-700">Talk test</p>
              <p className="mt-1 text-sm text-gray-600">
                Breathing harder than at rest, able to speak but not sing.
              </p>
            </div>
          </div>
        </section>

        {/* Walking Speed as Health Indicator */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Walking Speed as a Health Indicator
          </h2>
          <p className="mb-4 text-gray-700">
            Walking speed has been called &quot;the sixth vital sign&quot; by Fritz & Lusardi (2009) in
            the <em>Journal of Geriatric Physical Therapy</em>, alongside heart rate, blood pressure,
            respiratory rate, temperature, and pain level.
          </p>
          <p className="mb-4 text-gray-700">
            <strong>Why it matters:</strong> Comfortable walking speed correlates strongly with
            overall health, functional independence, and mortality risk in older adults. A speed
            below 0.8 m/s (1.8 mph) is associated with increased fall risk, hospitalization, and
            difficulty with activities of daily living.
          </p>
          <p className="text-gray-700">
            <strong>Studenski et al. (2011)</strong> published a landmark study in <em>JAMA</em>{" "}
            showing that gait speed predicted survival in older adults — each 0.1 m/s increase in
            walking speed was associated with a 12% reduction in mortality risk.
          </p>
        </section>

        {/* Factors That Affect Walking Speed */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Factors That Affect Walking Speed
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg bg-gray-50 p-4">
              <h3 className="font-semibold text-gray-900">Age</h3>
              <p className="mt-1 text-gray-700">
                The strongest predictor, as the Bohannon data shows. The decline is gradual from
                30 to 60, then accelerates.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4">
              <h3 className="font-semibold text-gray-900">Height</h3>
              <p className="mt-1 text-gray-700">
                Taller people have longer strides. Bohannon (1997) found significant correlations
                between height and gait speed (r ≥ 0.220). A 6-foot person naturally walks faster
                than a 5-foot person at the same perceived effort.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4">
              <h3 className="font-semibold text-gray-900">Lower extremity strength</h3>
              <p className="mt-1 text-gray-700">
                Correlates with walking speed at r ≥ 0.210 (Bohannon, 1997). Stronger leg muscles
                = faster walking. This is why strength training preserves walking speed in older adults.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4">
              <h3 className="font-semibold text-gray-900">Terrain</h3>
              <p className="mt-1 text-gray-700">
                Changes effective speed dramatically. The Compendium of Physical Activities rates
                flat walking at MET 3.5, mild uphill (1–5% grade) at MET 5.3, and steep uphill
                (6–15%) at MET 8.0. Most people slow 20–40% on hilly terrain.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4">
              <h3 className="font-semibold text-gray-900">Fitness level</h3>
              <p className="mt-1 text-gray-700">
                Varies independently of age. Within any age group, there&apos;s a wide range of speeds
                based on how active the individual is.
              </p>
            </div>
          </div>
        </section>

        {/* How to Measure Your Walking Speed */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            How to Measure Your Walking Speed
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <h3 className="font-semibold text-gray-900">Simple method</h3>
              <p className="mt-1 text-gray-700">
                Walk a known distance (like a track — 4 laps = 1 mile) at your comfortable pace.
                Divide the distance by the time in hours.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <h3 className="font-semibold text-gray-900">Treadmill method</h3>
              <p className="mt-1 text-gray-700">
                Walk on a treadmill and note the speed where you feel naturally comfortable —
                not pushing, not holding back. That&apos;s your comfortable walking speed.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <h3 className="font-semibold text-gray-900">Step method</h3>
              <p className="mt-1 text-gray-700">
                Count steps for one minute at your natural pace. If you&apos;re at 100+ steps per
                minute, you&apos;re walking briskly (roughly 3.5 mph). At 120+ steps, you&apos;re fast
                walking (roughly 4.0 mph).
              </p>
            </div>
          </div>
        </section>

        {/* How to Improve Your Walking Speed */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            How to Improve Your Walking Speed
          </h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-700">1</span>
              <div>
                <h3 className="font-semibold text-gray-900">Walk more frequently</h3>
                <p className="text-gray-700">
                  Consistent daily walking naturally increases pace over weeks as fitness improves.
                  A new walker might start at 2.5 mph and reach 3.5 mph within 2–3 months.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-700">2</span>
              <div>
                <h3 className="font-semibold text-gray-900">Focus on posture</h3>
                <p className="text-gray-700">
                  Walk tall with shoulders back, eyes forward. Slouching reduces stride length
                  and slows pace.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-700">3</span>
              <div>
                <h3 className="font-semibold text-gray-900">Swing your arms</h3>
                <p className="text-gray-700">
                  Arm movement contributes 10–15% of walking propulsion. Bend elbows to roughly
                  90 degrees and swing naturally.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-700">4</span>
              <div>
                <h3 className="font-semibold text-gray-900">Strengthen your legs</h3>
                <p className="text-gray-700">
                  Squats, lunges, and calf raises directly improve the muscles responsible for
                  walking speed. This is especially impactful for adults over 60.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-700">5</span>
              <div>
                <h3 className="font-semibold text-gray-900">Add intervals</h3>
                <p className="text-gray-700">
                  Alternate 2 minutes of fast walking with 2 minutes of easy walking. This builds
                  speed more effectively than steady-pace walking alone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sources */}
        <section className="border-t border-gray-200 pt-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Sources</h2>
          <ol className="space-y-2 text-sm text-gray-600">
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
              6. British Journal of Sports Medicine (2018). Brisk walking ~100 steps/minute.
            </li>
            <li>
              7. Compendium of Physical Activities — MET values.{" "}
              <a href="https://sites.google.com/site/compendiumofphysicalactivities/" className="text-teal-700 hover:underline" target="_blank" rel="noopener noreferrer">
                compendiumofphysicalactivities.com
              </a>
            </li>
          </ol>
        </section>

        {/* Related Links */}
        <section className="mt-8 border-t border-gray-200 pt-8">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/how-long-to-walk"
              className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Walking Time Calculator
            </Link>
            <Link
              href="/about"
              className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700"
            >
              About & Methodology
            </Link>
            <Link
              href="/how-far-can-i-walk"
              className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Walking Distance Calculator
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
