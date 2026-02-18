import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import RunningTimeCalculator from "@/components/calculators/RunningTimeCalculator";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { createWebAppSchema } from "@/components/seo/WebAppSchema";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Running Time Calculator — How Long to Run Any Distance",
  description:
    "Calculate running times for any distance from 1 mile to ultramarathons. See where your time ranks by pace, age, and experience level.",
  alternates: {
    canonical: "https://howlongtowalk.org/how-long-to-run",
  },
  openGraph: {
    title: "Running Time Calculator — How Long to Run Any Distance",
    description:
      "Calculate running times for any distance from 1 mile to ultramarathons. See where your time ranks by pace, age, and experience level.",
    url: "https://howlongtowalk.org/how-long-to-run",
    type: "website",
  },
};

export default function RunningHubPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://howlongtowalk.org/" },
    { name: "Running Time Calculator", url: "https://howlongtowalk.org/how-long-to-run" },
  ];

  const webAppSchema = createWebAppSchema({
    name: "Running Time Calculator",
    description:
      "Calculate running times for any distance from 1 mile to ultramarathons. See where your time ranks by pace, age, and experience level.",
    url: "https://howlongtowalk.org/how-long-to-run",
    applicationCategory: "HealthApplication",
  });

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <JsonLd data={webAppSchema} />

      <div className="content-container py-8">
        <Breadcrumbs
          segments={[{ label: "Running Time Calculator", href: "/how-long-to-run" }]}
        />

        {/* Page Header */}
        <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          Running Time Calculator
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          <strong>Enter any distance and see your finish time</strong> — by pace,
          experience level, and how you compare to other runners. Based on data from 35
          million race results.
        </p>

        {/* Calculator */}
        <div className="mb-12">
          <RunningTimeCalculator />
        </div>

        {/* Race Distances Table */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            How Long Does It Take to Run...
          </h2>

          <h3 className="mb-3 text-xl font-semibold text-gray-800">Race Distances</h3>
          <div className="table-container mb-8">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Race</th>
                  <th>Average (All)</th>
                  <th>Top 50% Men</th>
                  <th>Top 50% Women</th>
                  <th>Full Page</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">1 mile</td>
                  <td>8:00–12:00</td>
                  <td>Under 8:00</td>
                  <td>Under 10:00</td>
                  <td>
                    <Link
                      href="/how-long-to-run/a-mile"
                      className="text-teal-700 hover:underline"
                    >
                      Details →
                    </Link>
                  </td>
                </tr>
                <tr className="highlight-row">
                  <td className="font-medium">5K (3.1 mi)</td>
                  <td>~32:00</td>
                  <td>Under 28:00</td>
                  <td>Under 34:00</td>
                  <td>
                    <Link
                      href="/how-long-to-run/a-5k"
                      className="text-teal-700 hover:underline"
                    >
                      Details →
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="font-medium">10K (6.2 mi)</td>
                  <td>~1:02</td>
                  <td>Under 57:15</td>
                  <td>Under 1:07</td>
                  <td>
                    <Link
                      href="/how-long-to-run/a-10k"
                      className="text-teal-700 hover:underline"
                    >
                      Details →
                    </Link>
                  </td>
                </tr>
                <tr className="highlight-row">
                  <td className="font-medium">Half Marathon</td>
                  <td>~2:13</td>
                  <td>Under 2:00</td>
                  <td>Under 2:24</td>
                  <td>
                    <Link
                      href="/how-long-to-run/a-half-marathon"
                      className="text-teal-700 hover:underline"
                    >
                      Details →
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="font-medium">Marathon</td>
                  <td>~4:21</td>
                  <td>Under 4:14</td>
                  <td>Under 4:42</td>
                  <td>
                    <Link
                      href="/how-long-to-run/a-marathon"
                      className="text-teal-700 hover:underline"
                    >
                      Details →
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="font-medium">50K (31.1 mi)</td>
                  <td>5:00–7:00</td>
                  <td>—</td>
                  <td>—</td>
                  <td>
                    <Link
                      href="/how-long-to-run/a-50k"
                      className="text-teal-700 hover:underline"
                    >
                      Details →
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Training Distances Table */}
        <section className="mb-10">
          <h3 className="mb-3 text-xl font-semibold text-gray-800">Training Distances</h3>
          <div className="table-container mb-8">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Distance</th>
                  <th>Beginner</th>
                  <th>Intermediate</th>
                  <th>Advanced</th>
                  <th>Full Page</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">1.5 miles</td>
                  <td>15:00–20:00</td>
                  <td>10:00–15:00</td>
                  <td>Under 10:00</td>
                  <td>
                    <Link
                      href="/how-long-to-run/1-5-miles"
                      className="text-teal-700 hover:underline"
                    >
                      Details →
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="font-medium">2 miles</td>
                  <td>20:00–26:00</td>
                  <td>14:00–20:00</td>
                  <td>Under 14:00</td>
                  <td>
                    <Link
                      href="/how-long-to-run/2-miles"
                      className="text-teal-700 hover:underline"
                    >
                      Details →
                    </Link>
                  </td>
                </tr>
                <tr className="highlight-row">
                  <td className="font-medium">3 miles</td>
                  <td>30:00–39:00</td>
                  <td>21:00–30:00</td>
                  <td>Under 21:00</td>
                  <td>
                    <Link
                      href="/how-long-to-run/3-miles"
                      className="text-teal-700 hover:underline"
                    >
                      Details →
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="font-medium">4 miles</td>
                  <td>40:00–52:00</td>
                  <td>28:00–40:00</td>
                  <td>Under 28:00</td>
                  <td>
                    <Link
                      href="/how-long-to-run/4-miles"
                      className="text-teal-700 hover:underline"
                    >
                      Details →
                    </Link>
                  </td>
                </tr>
                <tr className="highlight-row">
                  <td className="font-medium">5 miles</td>
                  <td>50:00–65:00</td>
                  <td>35:00–50:00</td>
                  <td>Under 35:00</td>
                  <td>
                    <Link
                      href="/how-long-to-run/5-miles"
                      className="text-teal-700 hover:underline"
                    >
                      Details →
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="font-medium">6 miles</td>
                  <td>1:00–1:18</td>
                  <td>42:00–1:00</td>
                  <td>Under 42:00</td>
                  <td>
                    <Link
                      href="/how-long-to-run/6-miles"
                      className="text-teal-700 hover:underline"
                    >
                      Details →
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="font-medium">7 miles</td>
                  <td>1:10–1:31</td>
                  <td>49:00–1:10</td>
                  <td>Under 49:00</td>
                  <td>
                    <Link
                      href="/how-long-to-run/7-miles"
                      className="text-teal-700 hover:underline"
                    >
                      Details →
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="font-medium">8 miles</td>
                  <td>1:20–1:44</td>
                  <td>56:00–1:20</td>
                  <td>Under 56:00</td>
                  <td>
                    <Link
                      href="/how-long-to-run/8-miles"
                      className="text-teal-700 hover:underline"
                    >
                      Details →
                    </Link>
                  </td>
                </tr>
                <tr className="highlight-row">
                  <td className="font-medium">10 miles</td>
                  <td>1:40–2:10</td>
                  <td>1:10–1:40</td>
                  <td>Under 1:10</td>
                  <td>
                    <Link
                      href="/how-long-to-run/10-miles"
                      className="text-teal-700 hover:underline"
                    >
                      Details →
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Long Run & Ultra Distances */}
        <section className="mb-10">
          <h3 className="mb-3 text-xl font-semibold text-gray-800">
            Long Run & Ultra Distances
          </h3>
          <div className="table-container mb-8">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Distance</th>
                  <th>Typical Range</th>
                  <th>Full Page</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">15 miles</td>
                  <td>1:45–3:00</td>
                  <td>
                    <Link
                      href="/how-long-to-run/15-miles"
                      className="text-teal-700 hover:underline"
                    >
                      Details →
                    </Link>
                  </td>
                </tr>
                <tr className="highlight-row">
                  <td className="font-medium">20 miles</td>
                  <td>2:20–4:00</td>
                  <td>
                    <Link
                      href="/how-long-to-run/20-miles"
                      className="text-teal-700 hover:underline"
                    >
                      Details →
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="font-medium">30 miles</td>
                  <td>3:30–6:00</td>
                  <td>
                    <Link
                      href="/how-long-to-run/30-miles"
                      className="text-teal-700 hover:underline"
                    >
                      Details →
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="font-medium">100 miles</td>
                  <td>14:00–30:00+</td>
                  <td>
                    <Link
                      href="/how-long-to-run/100-miles"
                      className="text-teal-700 hover:underline"
                    >
                      Details →
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Metric Distances */}
        <section className="mb-10">
          <h3 className="mb-3 text-xl font-semibold text-gray-800">Metric Distances</h3>
          <div className="table-container mb-8">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Distance</th>
                  <th>Beginner</th>
                  <th>Intermediate</th>
                  <th>Full Page</th>
                </tr>
              </thead>
              <tbody>
                <tr className="highlight-row">
                  <td className="font-medium">5 km</td>
                  <td>30:00–40:00</td>
                  <td>22:00–30:00</td>
                  <td>
                    <Link
                      href="/how-long-to-run/5-km"
                      className="text-teal-700 hover:underline"
                    >
                      Details →
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="font-medium">10 km</td>
                  <td>1:00–1:20</td>
                  <td>45:00–1:00</td>
                  <td>
                    <Link
                      href="/how-long-to-run/10-km"
                      className="text-teal-700 hover:underline"
                    >
                      Details →
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pace Quick Reference */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Running Pace Quick Reference
          </h2>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Pace (min/mile)</th>
                  <th>5K</th>
                  <th>10K</th>
                  <th>Half Marathon</th>
                  <th>Marathon</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">6:00</td>
                  <td>18:38</td>
                  <td>37:17</td>
                  <td>1:18:35</td>
                  <td>2:37:19</td>
                </tr>
                <tr>
                  <td className="font-medium">7:00</td>
                  <td>21:45</td>
                  <td>43:30</td>
                  <td>1:31:41</td>
                  <td>3:03:33</td>
                </tr>
                <tr>
                  <td className="font-medium">8:00</td>
                  <td>24:51</td>
                  <td>49:42</td>
                  <td>1:44:48</td>
                  <td>3:29:46</td>
                </tr>
                <tr className="highlight-row">
                  <td className="font-medium">9:00</td>
                  <td>27:58</td>
                  <td>55:55</td>
                  <td>1:57:54</td>
                  <td>3:56:00</td>
                </tr>
                <tr>
                  <td className="font-medium">10:00</td>
                  <td>31:04</td>
                  <td>1:02:08</td>
                  <td>2:11:01</td>
                  <td>4:22:13</td>
                </tr>
                <tr>
                  <td className="font-medium">11:00</td>
                  <td>34:11</td>
                  <td>1:08:21</td>
                  <td>2:24:07</td>
                  <td>4:48:26</td>
                </tr>
                <tr>
                  <td className="font-medium">12:00</td>
                  <td>37:17</td>
                  <td>1:14:34</td>
                  <td>2:37:14</td>
                  <td>5:14:40</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Sources */}
        <section className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Sources</h2>
          <ol className="list-decimal space-y-2 pl-6 text-sm text-gray-600">
            <li>
              RunRepeat (2024). Race statistics from 35 million results.{" "}
              <a
                href="https://runrepeat.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 hover:underline"
              >
                runrepeat.com
              </a>
            </li>
            <li>
              Marathon Handbook (2024). Finish time data.{" "}
              <a
                href="https://marathonhandbook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 hover:underline"
              >
                marathonhandbook.com
              </a>
            </li>
            <li>The Running Channel (2024). Pace charts and averages.</li>
            <li>Compendium of Physical Activities — MET values.</li>
          </ol>
        </section>
      </div>
    </>
  );
}
