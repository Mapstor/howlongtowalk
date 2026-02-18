import { Metadata } from "next";
import Link from "next/link";

import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Privacy Policy | howlongtowalk.org",
  description:
    "Privacy Policy for howlongtowalk.org. Learn how we collect, use, and protect your data when using our walking and running calculators.",
  alternates: {
    canonical: "https://howlongtowalk.org/privacy",
  },
  openGraph: {
    title: "Privacy Policy | howlongtowalk.org",
    description:
      "Privacy Policy for howlongtowalk.org. Learn how we collect, use, and protect your data.",
    url: "https://howlongtowalk.org/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://howlongtowalk.org/" },
    { name: "Privacy Policy", url: "https://howlongtowalk.org/privacy" },
  ];

  const lastUpdated = "February 18, 2026";

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="content-container py-8">
        <Breadcrumbs segments={[{ label: "Privacy Policy", href: "/privacy" }]} />

        <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
          Privacy Policy
        </h1>

        <p className="mb-8 text-sm text-gray-500">
          Last updated: {lastUpdated}
        </p>

        <div className="prose prose-gray max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Introduction
            </h2>
            <p className="mb-4 text-gray-700">
              At howlongtowalk.org, we are committed to protecting your privacy and ensuring
              transparency about how we handle your information. This Privacy Policy explains
              what information we collect, how we use it, and your rights regarding your data.
            </p>
            <p className="text-gray-700">
              By using howlongtowalk.org, you agree to the collection and use of information
              in accordance with this policy. We are committed to maintaining the trust and
              confidence of our visitors.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Information We Collect
            </h2>

            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Information You Provide
            </h3>
            <p className="mb-4 text-gray-700">
              When you use our calculators, you may input information such as:
            </p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>Walking or running distances</li>
              <li>Pace preferences</li>
              <li>Age range (for age-adjusted calculations)</li>
              <li>Time durations for distance calculations</li>
            </ul>
            <p className="mb-6 text-gray-700">
              <strong>Important:</strong> This calculator input data is processed entirely in
              your browser and is not transmitted to or stored on our servers. We do not collect,
              store, or have access to the specific values you enter into our calculators.
            </p>

            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Automatically Collected Information
            </h3>
            <p className="mb-4 text-gray-700">
              Like most websites, we automatically collect certain information when you visit
              howlongtowalk.org, including:
            </p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>
                <strong>Log Data:</strong> Your browser type, browser version, the pages you
                visit, the time and date of your visit, time spent on pages, and other statistics
              </li>
              <li>
                <strong>Device Information:</strong> Information about your device including
                device type, operating system, and screen resolution
              </li>
              <li>
                <strong>IP Address:</strong> Your Internet Protocol address, which may be used
                to determine your approximate geographic location
              </li>
              <li>
                <strong>Referral Information:</strong> The website that referred you to our site
              </li>
            </ul>

            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Location Information
            </h3>
            <p className="text-gray-700">
              Our &quot;How Far Can I Walk&quot; feature includes an optional map that can show
              walkable distances from your location. If you choose to use this feature, your
              browser will ask for permission to access your location. This location data is
              used only to center the map and is processed entirely in your browser. We do not
              store or transmit your location data to our servers.
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Cookies and Tracking Technologies
            </h2>

            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              What Are Cookies?
            </h3>
            <p className="mb-4 text-gray-700">
              Cookies are small text files that are placed on your computer or mobile device
              when you visit a website. They are widely used to make websites work more
              efficiently and to provide information to website owners.
            </p>

            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              How We Use Cookies
            </h3>
            <p className="mb-4 text-gray-700">
              howlongtowalk.org uses cookies for the following purposes:
            </p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>
                <strong>Essential Cookies:</strong> Required for the website to function properly
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how visitors interact
                with our website by collecting and reporting information anonymously
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your settings and preferences
                (such as unit preferences - miles vs. kilometers)
              </li>
            </ul>

            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Third-Party Cookies
            </h3>
            <p className="mb-4 text-gray-700">
              We may use third-party services that place cookies on your device:
            </p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>
                <strong>Google Analytics:</strong> We use Google Analytics to understand how
                visitors use our site. Google Analytics collects information anonymously and
                reports website trends without identifying individual visitors.{" "}
                <a
                  href="https://policies.google.com/privacy"
                  className="text-teal-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google&apos;s Privacy Policy
                </a>
              </li>
              <li>
                <strong>OpenStreetMap:</strong> Our map feature uses OpenStreetMap tiles, which
                may set cookies to improve map performance.{" "}
                <a
                  href="https://wiki.osmfoundation.org/wiki/Privacy_Policy"
                  className="text-teal-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OpenStreetMap Privacy Policy
                </a>
              </li>
            </ul>

            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Managing Cookies
            </h3>
            <p className="text-gray-700">
              Most web browsers allow you to control cookies through their settings. You can
              set your browser to refuse cookies or to alert you when cookies are being sent.
              However, if you disable cookies, some features of our website may not function
              properly.
            </p>
          </section>

          {/* How We Use Information */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              How We Use Your Information
            </h2>
            <p className="mb-4 text-gray-700">
              We use the information we collect for the following purposes:
            </p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>To provide and maintain our website and calculators</li>
              <li>To understand how visitors use our website so we can improve it</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To analyze trends and gather demographic information about our user base</li>
              <li>To respond to your inquiries if you contact us</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Data Sharing and Disclosure
            </h2>
            <p className="mb-4 text-gray-700">
              We do not sell, trade, or rent your personal information to third parties.
              We may share information in the following limited circumstances:
            </p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>
                <strong>Service Providers:</strong> We may share information with third-party
                service providers who assist us in operating our website (such as hosting
                providers and analytics services)
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information if required
                by law or in response to valid requests by public authorities
              </li>
              <li>
                <strong>Protection of Rights:</strong> We may disclose information to protect
                the rights, property, or safety of howlongtowalk.org, our users, or others
              </li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Data Security
            </h2>
            <p className="mb-4 text-gray-700">
              We take reasonable measures to protect the information we collect from
              unauthorized access, use, alteration, or destruction. Our website uses HTTPS
              encryption to secure data transmission between your browser and our servers.
            </p>
            <p className="text-gray-700">
              However, no method of transmission over the Internet or electronic storage is
              100% secure. While we strive to protect your information, we cannot guarantee
              its absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Data Retention
            </h2>
            <p className="text-gray-700">
              We retain automatically collected data (such as analytics data) for a period
              necessary to fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required or permitted by law. Analytics data is
              typically retained for 26 months.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Children&apos;s Privacy
            </h2>
            <p className="mb-4 text-gray-700">
              howlongtowalk.org is intended for general audiences and is not directed at
              children under the age of 13. We do not knowingly collect personal information
              from children under 13.
            </p>
            <p className="text-gray-700">
              If you are a parent or guardian and believe that your child has provided us
              with personal information, please contact us at{" "}
              <a
                href="mailto:info@howlongtowalk.org"
                className="text-teal-700 hover:underline"
              >
                info@howlongtowalk.org
              </a>
              . If we discover that a child under 13 has provided us with personal information,
              we will delete such information from our systems.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Your Rights
            </h2>
            <p className="mb-4 text-gray-700">
              Depending on your location, you may have certain rights regarding your personal
              information, including:
            </p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>
                <strong>Right to Access:</strong> You may request information about the
                personal data we hold about you
              </li>
              <li>
                <strong>Right to Rectification:</strong> You may request that we correct
                inaccurate personal data
              </li>
              <li>
                <strong>Right to Erasure:</strong> You may request that we delete your
                personal data
              </li>
              <li>
                <strong>Right to Restrict Processing:</strong> You may request that we
                limit how we use your data
              </li>
              <li>
                <strong>Right to Data Portability:</strong> You may request a copy of your
                data in a structured, machine-readable format
              </li>
              <li>
                <strong>Right to Object:</strong> You may object to our processing of your
                personal data
              </li>
            </ul>
            <p className="text-gray-700">
              To exercise any of these rights, please contact us at{" "}
              <a
                href="mailto:info@howlongtowalk.org"
                className="text-teal-700 hover:underline"
              >
                info@howlongtowalk.org
              </a>
              .
            </p>
          </section>

          {/* International Users */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              International Users
            </h2>
            <p className="text-gray-700">
              howlongtowalk.org is operated from the United States. If you are accessing our
              website from outside the United States, please be aware that your information
              may be transferred to, stored, and processed in the United States where our
              servers are located. By using our website, you consent to the transfer of your
              information to the United States.
            </p>
          </section>

          {/* GDPR Compliance */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              GDPR Compliance (European Users)
            </h2>
            <p className="mb-4 text-gray-700">
              If you are located in the European Economic Area (EEA), you have additional
              rights under the General Data Protection Regulation (GDPR). We process your
              data based on the following legal bases:
            </p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>
                <strong>Consent:</strong> Where you have given us consent to process your
                data (e.g., for analytics)
              </li>
              <li>
                <strong>Legitimate Interests:</strong> Where processing is necessary for
                our legitimate interests (e.g., website security, service improvement)
              </li>
              <li>
                <strong>Legal Obligation:</strong> Where we are required to process data
                by law
              </li>
            </ul>
          </section>

          {/* California Privacy Rights */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              California Privacy Rights (CCPA)
            </h2>
            <p className="mb-4 text-gray-700">
              If you are a California resident, you have specific rights under the California
              Consumer Privacy Act (CCPA), including:
            </p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>The right to know what personal information we collect</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to opt-out of the sale of your personal information (we do not sell personal information)</li>
              <li>The right to non-discrimination for exercising your privacy rights</li>
            </ul>
          </section>

          {/* Changes to Policy */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Changes to This Privacy Policy
            </h2>
            <p className="mb-4 text-gray-700">
              We may update our Privacy Policy from time to time. We will notify you of any
              changes by posting the new Privacy Policy on this page and updating the
              &quot;Last updated&quot; date at the top of this policy.
            </p>
            <p className="text-gray-700">
              We encourage you to review this Privacy Policy periodically for any changes.
              Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Contact Us
            </h2>
            <p className="mb-4 text-gray-700">
              If you have any questions about this Privacy Policy or our data practices,
              please contact us:
            </p>
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-gray-700">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@howlongtowalk.org"
                  className="text-teal-700 hover:text-teal-900 hover:underline"
                >
                  info@howlongtowalk.org
                </a>
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Website:</strong>{" "}
                <a
                  href="https://howlongtowalk.org"
                  className="text-teal-700 hover:text-teal-900 hover:underline"
                >
                  howlongtowalk.org
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Related Links */}
        <section className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/terms"
              className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Terms of Use
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700"
            >
              About Us
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
