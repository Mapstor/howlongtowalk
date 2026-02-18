import { Metadata } from "next";
import Link from "next/link";

import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Terms of Use | howlongtowalk.org",
  description:
    "Terms of Use for howlongtowalk.org. Read our terms and conditions for using our walking and running time calculators and fitness resources.",
  alternates: {
    canonical: "https://howlongtowalk.org/terms",
  },
  openGraph: {
    title: "Terms of Use | howlongtowalk.org",
    description:
      "Terms of Use for howlongtowalk.org. Read our terms and conditions for using our walking and running time calculators.",
    url: "https://howlongtowalk.org/terms",
    type: "website",
  },
};

export default function TermsPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://howlongtowalk.org/" },
    { name: "Terms of Use", url: "https://howlongtowalk.org/terms" },
  ];

  const lastUpdated = "February 18, 2026";

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="content-container py-8">
        <Breadcrumbs segments={[{ label: "Terms of Use", href: "/terms" }]} />

        <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
          Terms of Use
        </h1>

        <p className="mb-8 text-sm text-gray-500">
          Last updated: {lastUpdated}
        </p>

        <div className="prose prose-gray max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              1. Acceptance of Terms
            </h2>
            <p className="mb-4 text-gray-700">
              Welcome to howlongtowalk.org. By accessing or using our website, you agree to be
              bound by these Terms of Use and all applicable laws and regulations. If you do not
              agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
            <p className="text-gray-700">
              These Terms of Use apply to all visitors, users, and others who access or use
              howlongtowalk.org, including our walking time calculators, running time calculators,
              distance calculators, and all related content and services.
            </p>
          </section>

          {/* Description of Service */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              2. Description of Service
            </h2>
            <p className="mb-4 text-gray-700">
              howlongtowalk.org provides free online calculators and informational resources
              related to walking and running, including:
            </p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>Walking time calculators for various distances</li>
              <li>Running time calculators for common race distances</li>
              <li>Distance calculators based on walking duration</li>
              <li>Walking speed reference data by age and gender</li>
              <li>Educational content about physical activity and wellness</li>
              <li>Research-backed data on average walking and running speeds</li>
            </ul>
            <p className="text-gray-700">
              Our calculators use peer-reviewed research data, including the Bohannon & Andrews
              (2011) meta-analysis of walking speeds from 23,111 participants across 41 studies.
            </p>
          </section>

          {/* Use License */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              3. Use License
            </h2>
            <p className="mb-4 text-gray-700">
              Permission is granted to temporarily access and use the materials on howlongtowalk.org
              for personal, non-commercial use only. This license does not include:
            </p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>Modifying or copying our materials for commercial purposes</li>
              <li>Using our materials for any commercial purpose or public display</li>
              <li>Attempting to reverse engineer any software contained on the website</li>
              <li>Removing any copyright or proprietary notations from the materials</li>
              <li>Transferring the materials to another person or mirroring the materials on another server</li>
            </ul>
            <p className="text-gray-700">
              This license shall automatically terminate if you violate any of these restrictions
              and may be terminated by howlongtowalk.org at any time.
            </p>
          </section>

          {/* Disclaimer */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              4. Disclaimer
            </h2>
            <div className="rounded-lg bg-amber-50 p-4 mb-4">
              <h3 className="font-semibold text-amber-900">Not Medical Advice</h3>
              <p className="mt-1 text-amber-800">
                The information provided on howlongtowalk.org is for general informational and
                educational purposes only. It is not intended to be a substitute for professional
                medical advice, diagnosis, or treatment.
              </p>
            </div>
            <p className="mb-4 text-gray-700">
              The materials on howlongtowalk.org are provided on an &quot;as is&quot; basis.
              howlongtowalk.org makes no warranties, expressed or implied, and hereby disclaims
              and negates all other warranties including, without limitation:
            </p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>Implied warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties that the materials will be accurate, reliable, or error-free</li>
              <li>Warranties regarding the accuracy of walking or running time calculations</li>
              <li>Any warranty that the website will be available or uninterrupted</li>
            </ul>
            <p className="text-gray-700">
              Always consult with a qualified healthcare provider before beginning any exercise
              program, especially if you have any medical conditions, injuries, or concerns about
              your physical fitness.
            </p>
          </section>

          {/* Limitations */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              5. Limitations of Liability
            </h2>
            <p className="mb-4 text-gray-700">
              In no event shall howlongtowalk.org or its operators be liable for any damages
              (including, without limitation, damages for loss of data or profit, or due to
              business interruption) arising out of the use or inability to use the materials
              on howlongtowalk.org.
            </p>
            <p className="text-gray-700">
              This limitation applies even if howlongtowalk.org or an authorized representative
              has been notified orally or in writing of the possibility of such damage. Because
              some jurisdictions do not allow limitations on implied warranties or limitations
              of liability for consequential or incidental damages, these limitations may not
              apply to you.
            </p>
          </section>

          {/* Accuracy of Materials */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              6. Accuracy of Materials
            </h2>
            <p className="mb-4 text-gray-700">
              The materials appearing on howlongtowalk.org may include technical, typographical,
              or photographic errors. We do not warrant that any of the materials on our website
              are accurate, complete, or current.
            </p>
            <p className="mb-4 text-gray-700">
              While our calculators are based on peer-reviewed research, individual results may
              vary based on factors including but not limited to:
            </p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>Individual fitness level and health conditions</li>
              <li>Terrain, weather, and environmental conditions</li>
              <li>Walking or running technique</li>
              <li>Rest breaks and pacing strategy</li>
              <li>Age, weight, and physical characteristics</li>
            </ul>
            <p className="text-gray-700">
              howlongtowalk.org may make changes to the materials contained on its website at
              any time without notice.
            </p>
          </section>

          {/* User Conduct */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              7. User Conduct
            </h2>
            <p className="mb-4 text-gray-700">
              When using howlongtowalk.org, you agree not to:
            </p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>Use the website for any unlawful purpose or in violation of any laws</li>
              <li>Attempt to gain unauthorized access to any portion of the website</li>
              <li>Use automated systems or software to extract data from the website (scraping)</li>
              <li>Interfere with or disrupt the website or servers connected to the website</li>
              <li>Transmit any viruses, malware, or other harmful code</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Use the website in any manner that could damage or overburden our infrastructure</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              8. Intellectual Property
            </h2>
            <p className="mb-4 text-gray-700">
              All content on howlongtowalk.org, including but not limited to text, graphics,
              logos, images, calculators, data compilations, and software, is the property of
              howlongtowalk.org or its content suppliers and is protected by international
              copyright laws.
            </p>
            <p className="text-gray-700">
              The compilation of all content on this site is the exclusive property of
              howlongtowalk.org and is protected by international copyright laws.
            </p>
          </section>

          {/* Links */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              9. External Links
            </h2>
            <p className="mb-4 text-gray-700">
              howlongtowalk.org has not reviewed all of the sites linked to its website and is
              not responsible for the contents of any such linked site. The inclusion of any
              link does not imply endorsement by howlongtowalk.org of the site.
            </p>
            <p className="text-gray-700">
              Use of any such linked website is at the user&apos;s own risk. We encourage you to
              review the terms and privacy policies of any third-party websites you visit.
            </p>
          </section>

          {/* Modifications */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              10. Modifications to Terms
            </h2>
            <p className="mb-4 text-gray-700">
              howlongtowalk.org may revise these Terms of Use at any time without notice. By
              using this website, you are agreeing to be bound by the then-current version of
              these Terms of Use.
            </p>
            <p className="text-gray-700">
              We recommend that you periodically review these Terms of Use to stay informed of
              any changes. Your continued use of the website following the posting of revised
              Terms of Use means that you accept and agree to the changes.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              11. Governing Law
            </h2>
            <p className="text-gray-700">
              These Terms of Use and any disputes arising out of or related to the use of
              howlongtowalk.org shall be governed by and construed in accordance with applicable
              laws, without regard to conflict of law principles.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              12. Contact Information
            </h2>
            <p className="mb-4 text-gray-700">
              If you have any questions about these Terms of Use, please contact us:
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@howlongtowalk.org"
                className="text-teal-700 hover:text-teal-900 hover:underline"
              >
                info@howlongtowalk.org
              </a>
            </p>
          </section>
        </div>

        {/* Related Links */}
        <section className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/privacy"
              className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Privacy Policy
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
