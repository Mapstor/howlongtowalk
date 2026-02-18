import Link from "next/link";

const footerLinks = [
  {
    title: "Calculators",
    links: [
      { href: "/how-long-to-walk", label: "Walking Time" },
      { href: "/how-long-to-run", label: "Running Time" },
      { href: "/how-far-can-i-walk", label: "Walking Distance" },
    ],
  },
  {
    title: "Popular Pages",
    links: [
      { href: "/how-long-to-walk/1-mile", label: "Walk 1 Mile" },
      { href: "/how-long-to-walk/5-miles", label: "Walk 5 Miles" },
      { href: "/how-long-to-run/a-marathon", label: "Run a Marathon" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/walking-speed", label: "Walking Speed Guide" },
      { href: "/about", label: "About & Methodology" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-4xl px-4 py-10">
        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
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

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-100 pt-6">
          <div className="flex flex-col items-center gap-4 text-center text-sm text-gray-500 md:flex-row md:justify-between md:text-left">
            <div>
              <p>
                Walking speed data from{" "}
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/21549699/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 underline decoration-teal-700/30 transition-colors hover:text-teal-800 hover:decoration-teal-700"
                >
                  Bohannon &amp; Andrews (2011)
                </a>
              </p>
              <p className="mt-1">
                Meta-analysis of 23,111 subjects across 7 age groups.
              </p>
            </div>
            <p className="text-gray-400">
              &copy; {currentYear} howlongtowalk.org
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
