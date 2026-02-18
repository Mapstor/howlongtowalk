import { Metadata } from "next";
import Link from "next/link";

import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Contact Us | howlongtowalk.org",
  description:
    "Get in touch with howlongtowalk.org. Questions about our walking calculators, running time estimates, or methodology? We'd love to hear from you.",
  alternates: {
    canonical: "https://howlongtowalk.org/contact",
  },
  openGraph: {
    title: "Contact Us | howlongtowalk.org",
    description:
      "Get in touch with howlongtowalk.org. Questions about our calculators or methodology? We'd love to hear from you.",
    url: "https://howlongtowalk.org/contact",
    type: "website",
  },
};

export default function ContactPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://howlongtowalk.org/" },
    { name: "Contact", url: "https://howlongtowalk.org/contact" },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="content-container py-8">
        <Breadcrumbs segments={[{ label: "Contact", href: "/contact" }]} />

        <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
          Contact Us
        </h1>

        <p className="mb-8 text-lg text-gray-600">
          Have questions, feedback, or suggestions? We&apos;d love to hear from you.
          Our team is committed to helping people move more and live healthier lives.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Get in Touch
            </h2>

            {/* Email Card */}
            <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                  <svg
                    className="h-6 w-6 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                  <p className="mt-1 text-gray-600">
                    For general inquiries, questions, and feedback
                  </p>
                  <a
                    href="mailto:info@howlongtowalk.org"
                    className="mt-2 inline-block text-lg font-medium text-teal-700 hover:text-teal-900 hover:underline"
                  >
                    info@howlongtowalk.org
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="rounded-lg bg-teal-50 p-4">
              <p className="text-sm text-teal-800">
                <strong>Response Time:</strong> We typically respond to emails within
                1-2 business days. Thank you for your patience.
              </p>
            </div>
          </div>

          {/* What We Can Help With */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              How Can We Help?
            </h2>

            <div className="space-y-4">
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <h3 className="font-semibold text-gray-900">
                  Questions About Our Calculators
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Need help using our walking time, running time, or distance calculators?
                  Have a specific distance or scenario you&apos;d like us to add?
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <h3 className="font-semibold text-gray-900">
                  Data & Methodology Questions
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Curious about where our walking speed data comes from? Want to know more
                  about the research behind our calculations?
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <h3 className="font-semibold text-gray-900">
                  Bug Reports & Technical Issues
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Found something that doesn&apos;t work correctly? Please let us know so we
                  can fix it. Include your browser and device if possible.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <h3 className="font-semibold text-gray-900">
                  Suggestions & Feature Requests
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Have an idea for a new calculator or feature? We&apos;re always looking for
                  ways to help more people get active.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <h3 className="font-semibold text-gray-900">
                  Partnership & Collaboration
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Interested in partnering with us or using our data? Reach out and let&apos;s
                  discuss how we can work together.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-gray-900">
                Where does your walking speed data come from?
              </h3>
              <p className="mt-2 text-gray-600">
                Our data comes from the Bohannon & Andrews (2011) meta-analysis published in
                <em> Physiotherapy</em>, which consolidated data from 41 studies with 23,111
                participants. This is the largest study of normal walking speeds ever published.
                Read more on our{" "}
                <Link href="/about" className="text-teal-700 hover:underline">
                  About page
                </Link>
                .
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-gray-900">
                Why are my actual walking times different from the calculator?
              </h3>
              <p className="mt-2 text-gray-600">
                Our calculators provide estimates based on average walking speeds. Your actual
                time may vary based on terrain, weather, fitness level, rest breaks, and many
                other factors. Use our calculations as a starting point and adjust based on
                your experience.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-gray-900">
                Can I use your calculators for route planning?
              </h3>
              <p className="mt-2 text-gray-600">
                Our calculators estimate time based on distance, not specific routes. For actual
                route planning with turn-by-turn directions, we recommend using Google Maps,
                Apple Maps, or dedicated walking apps like AllTrails or MapMyWalk.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-gray-900">
                Do you offer an API or data licensing?
              </h3>
              <p className="mt-2 text-gray-600">
                We don&apos;t currently offer a public API. If you&apos;re interested in using
                our data or methodology for your project, please contact us to discuss
                partnership opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="mt-12 rounded-lg bg-gradient-to-r from-teal-50 to-emerald-50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Our Commitment to You
          </h2>
          <p className="mb-4 text-gray-700">
            At howlongtowalk.org, we&apos;re passionate about helping people incorporate more
            movement into their daily lives. Whether you&apos;re planning a walking commute,
            training for your first 5K, or simply curious how long it takes to walk to the
            park, we&apos;re here to provide accurate, research-backed answers.
          </p>
          <p className="text-gray-700">
            We believe that small steps lead to big changes. Every walk counts, and we&apos;re
            honored to be part of your wellness journey.
          </p>
        </section>

        {/* Related Links */}
        <section className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Learn More</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/about"
              className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700"
            >
              About Us
            </Link>
            <Link
              href="/walking-speed"
              className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Walking Speed Reference
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
