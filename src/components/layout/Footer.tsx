import Link from "next/link";

const footerLinks = [
  {
    title: "Calculators",
    links: [
      { href: "/how-long-to-walk", label: "Walking Time Calculator" },
      { href: "/how-long-to-run", label: "Running Time Calculator" },
      { href: "/how-far-can-i-walk", label: "Walking Distance Calculator" },
    ],
  },
  {
    title: "Popular Pages",
    links: [
      { href: "/how-long-to-walk/1-mile", label: "Walk 1 Mile" },
      { href: "/how-long-to-walk/5-miles", label: "Walk 5 Miles" },
      { href: "/how-long-to-run/a-5k", label: "Run a 5K" },
      { href: "/how-long-to-run/a-marathon", label: "Run a Marathon" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/walking-speed", label: "Walking Speed Guide" },
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Use" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10">
        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-3 text-sm font-semibold text-gray-900">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors hover:text-teal-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-10 rounded-lg bg-gray-50 p-6">
          <p className="text-center text-sm text-gray-600">
            <strong>Our Mission:</strong> Help people move more, more often. Walking is the most
            accessible form of exercise on the planet, and we&apos;re here to help you plan your
            walks and runs with confidence.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-100 pt-6">
          <div className="flex flex-col items-center gap-4 text-center text-sm text-gray-500 md:flex-row md:justify-between md:text-left">
            <div>
              <p>
                Walking speed data from{" "}
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/21820535/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 underline decoration-teal-700/30 transition-colors hover:text-teal-800 hover:decoration-teal-700"
                >
                  Bohannon &amp; Andrews (2011)
                </a>
                {" "}&mdash; meta-analysis of 23,111 participants across 41 studies.
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 md:items-end">
              <p className="text-gray-400">
                &copy; {currentYear} howlongtowalk.org
              </p>
              <p className="text-xs text-gray-400">
                <a href="mailto:info@howlongtowalk.org" className="hover:text-teal-700">
                  info@howlongtowalk.org
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-center text-xs text-gray-400">
          <p>
            The information provided on howlongtowalk.org is for general informational purposes only
            and is not intended as medical advice. Always consult a healthcare professional before
            starting any exercise program.
          </p>
        </div>
      </div>
    </footer>
  );
}
