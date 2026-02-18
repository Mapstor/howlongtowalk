import { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

import {
  walkingTimes,
  getWalkingTimeBySlug,
  getRelatedWalkingTimes,
} from "@/data/walking-times";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import DistanceCalculator from "@/components/calculators/DistanceCalculator";
import MapRadiusWrapper from "@/components/calculators/MapRadiusWrapper";
import FAQSchema, { extractFAQsFromMarkdown } from "@/components/seo/FAQSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { createWebAppSchema } from "@/components/seo/WebAppSchema";
import JsonLd from "@/components/seo/JsonLd";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generate static paths for all walking time pages.
 */
export async function generateStaticParams() {
  return walkingTimes.map((config) => ({
    slug: config.slug,
  }));
}

/**
 * Generate metadata for each walking time page.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = getWalkingTimeBySlug(slug);

  if (!config) {
    return {
      title: "Page Not Found",
    };
  }

  const canonicalUrl = `https://howlongtowalk.org/how-far-can-i-walk/${slug}`;

  return {
    title: config.metaTitle,
    description: config.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url: canonicalUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.metaTitle,
      description: config.metaDescription,
    },
  };
}

/**
 * Read and parse markdown content for a walking time page.
 */
function getMarkdownContent(contentFile: string): {
  content: string;
  data: Record<string, unknown>;
} {
  const filePath = path.join(process.cwd(), contentFile);

  if (!fs.existsSync(filePath)) {
    return { content: "", data: {} };
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  return { content, data };
}

/**
 * Parse markdown content into structured sections.
 */
function parseMarkdownSections(content: string): {
  title: string;
  firstParagraph: string;
  mainContent: string;
} {
  // Extract title from H1
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : "";

  // Remove frontmatter and H1
  let body = content.replace(/^---[\s\S]*?---\s*/, "").trim();
  body = body.replace(/^#\s+.+\n+/, "").trim();

  // Split by first divider (---)
  const parts = body.split(/\n---\n/);

  // First paragraph is before the first divider
  const firstParagraph = parts[0]?.trim() || "";

  // Main content is after the calculator placeholder
  let mainContent = "";
  if (parts.length > 1) {
    const afterCalculator = parts.slice(2).join("\n---\n");
    mainContent = afterCalculator.trim();
  }

  return { title, firstParagraph, mainContent };
}

/**
 * Convert markdown to simple HTML with Next.js Link components.
 */
function MarkdownContent({ content }: { content: string }) {
  const blocks = content.split(/\n\n+/);

  return (
    <div className="prose prose-gray max-w-none">
      {blocks.map((block, index) => (
        <MarkdownBlock key={index} content={block} />
      ))}
    </div>
  );
}

function MarkdownBlock({ content }: { content: string }) {
  const trimmed = content.trim();

  if (!trimmed) return null;

  // Headings
  if (trimmed.startsWith("## ")) {
    return (
      <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
        <InlineMarkdown text={trimmed.slice(3)} />
      </h2>
    );
  }

  if (trimmed.startsWith("### ")) {
    return (
      <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
        <InlineMarkdown text={trimmed.slice(4)} />
      </h3>
    );
  }

  // Tables
  if (trimmed.includes("|") && trimmed.includes("---")) {
    return <MarkdownTable content={trimmed} />;
  }

  // Horizontal rule
  if (trimmed === "---") {
    return <hr className="my-8 border-gray-200" />;
  }

  // List items
  if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
    const items = trimmed.split(/\n/).filter((line) => line.trim());
    return (
      <ul className="mb-4 list-disc space-y-2 pl-6">
        {items.map((item, i) => (
          <li key={i} className="text-gray-700">
            <InlineMarkdown text={item.replace(/^[-*]\s+/, "")} />
          </li>
        ))}
      </ul>
    );
  }

  // Numbered list
  if (/^\d+\.\s/.test(trimmed)) {
    const items = trimmed.split(/\n/).filter((line) => line.trim());
    return (
      <ol className="mb-4 list-decimal space-y-2 pl-6">
        {items.map((item, i) => (
          <li key={i} className="text-gray-700">
            <InlineMarkdown text={item.replace(/^\d+\.\s+/, "")} />
          </li>
        ))}
      </ol>
    );
  }

  // Default: paragraph
  return (
    <p className="mb-4 text-gray-700">
      <InlineMarkdown text={trimmed} />
    </p>
  );
}

function MarkdownTable({ content }: { content: string }) {
  const lines = content.trim().split("\n");
  const headerLine = lines[0];
  const dataLines = lines.slice(2);

  const headers = headerLine
    .split("|")
    .map((h) => h.trim())
    .filter(Boolean);

  const rows = dataLines.map((line) =>
    line
      .split("|")
      .map((cell) => cell.trim())
      .filter((_, i) => i > 0 && i <= headers.length)
  );

  return (
    <div className="table-container mb-6">
      <table className="data-table">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={
                row[0]?.toLowerCase().includes("moderate") ? "highlight-row" : ""
              }
            >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>
                  <InlineMarkdown text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function InlineMarkdown({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Check for links [text](/path)
    const linkMatch = remaining.match(/^\[([^\]]+)\]\(([^)]+)\)/);
    if (linkMatch) {
      const [full, linkText, href] = linkMatch;
      if (href.startsWith("/")) {
        parts.push(
          <Link
            key={key++}
            href={href}
            className="text-teal-700 hover:text-teal-900 hover:underline"
          >
            {linkText}
          </Link>
        );
      } else {
        parts.push(
          <a
            key={key++}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 hover:text-teal-900 hover:underline"
          >
            {linkText}
          </a>
        );
      }
      remaining = remaining.slice(full.length);
      continue;
    }

    // Check for bold **text**
    const boldMatch = remaining.match(/^\*\*([^*]+)\*\*/);
    if (boldMatch) {
      parts.push(
        <strong key={key++} className="font-semibold">
          {boldMatch[1]}
        </strong>
      );
      remaining = remaining.slice(boldMatch[0].length);
      continue;
    }

    // Check for italic *text*
    const italicMatch = remaining.match(/^\*([^*]+)\*/);
    if (italicMatch) {
      parts.push(<em key={key++}>{italicMatch[1]}</em>);
      remaining = remaining.slice(italicMatch[0].length);
      continue;
    }

    // Find next special character
    const nextSpecial = remaining.search(/[\[*]/);
    if (nextSpecial === -1) {
      parts.push(remaining);
      break;
    } else if (nextSpecial === 0) {
      parts.push(remaining[0]);
      remaining = remaining.slice(1);
    } else {
      parts.push(remaining.slice(0, nextSpecial));
      remaining = remaining.slice(nextSpecial);
    }
  }

  return <>{parts}</>;
}

/**
 * Answer Box Component
 */
function AnswerBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="answer-box mb-8 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-5">
      <p className="text-lg leading-relaxed text-gray-800">{children}</p>
    </div>
  );
}

/**
 * Related Walking Time Pages Component
 */
function RelatedWalkingTimePages({ currentSlug }: { currentSlug: string }) {
  const related = getRelatedWalkingTimes(currentSlug);

  if (related.length === 0) return null;

  return (
    <section className="mt-12 border-t border-gray-200 pt-8">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">Related Pages</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((config) => (
          <Link
            key={config.slug}
            href={`/how-far-can-i-walk/${config.slug}`}
            className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-teal-300 hover:shadow-md"
          >
            <div className="font-semibold text-gray-900 group-hover:text-teal-700">
              Walk {config.displayName}
            </div>
            <div className="mt-1 text-sm text-gray-600">
              {config.minutes < 60
                ? `${config.minutes} minutes`
                : config.minutes === 60
                  ? "1 hour"
                  : `${config.minutes / 60} hours`}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/**
 * Walking Time Page Component
 */
export default async function WalkingTimePage({ params }: PageProps) {
  const { slug } = await params;
  const config = getWalkingTimeBySlug(slug);

  if (!config) {
    notFound();
  }

  // Read markdown content
  const { content } = getMarkdownContent(config.contentFile);

  if (!content) {
    notFound();
  }

  // Parse sections
  const { title, firstParagraph, mainContent } = parseMarkdownSections(content);

  // Extract FAQs from content
  const faqs = extractFAQsFromMarkdown(content);

  // Build schema data
  const pageUrl = `https://howlongtowalk.org/how-far-can-i-walk/${slug}`;
  const breadcrumbItems = [
    { name: "Home", url: "https://howlongtowalk.org/" },
    { name: "Walking Distance Calculator", url: "https://howlongtowalk.org/how-far-can-i-walk" },
    { name: config.displayName, url: pageUrl },
  ];
  const webAppSchema = createWebAppSchema({
    name: `${config.displayName} Walking Distance Calculator`,
    description: config.metaDescription,
    url: pageUrl,
    applicationCategory: "HealthApplication",
  });

  return (
    <>
      {/* Schema.org JSON-LD */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <JsonLd data={webAppSchema} />
      {faqs.length > 0 && <FAQSchema faqs={faqs} />}

      <div className="content-container py-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          segments={[
            { label: "Walking Distance Calculator", href: "/how-far-can-i-walk" },
            { label: config.displayName, href: `/how-far-can-i-walk/${slug}` },
          ]}
        />

        {/* Page Title */}
        <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
          {title || `How Far Can I Walk in ${config.displayName}?`}
        </h1>

        {/* Answer Box (First Paragraph) */}
        <AnswerBox>
          <InlineMarkdown text={firstParagraph} />
        </AnswerBox>

        {/* Calculator */}
        <div className="mb-8">
          <DistanceCalculator
            initialMinutes={config.minutes}
            heading="Calculate Your Walking Distance"
          />
        </div>

        {/* Map Radius */}
        <div className="mb-10">
          <MapRadiusWrapper
            minutes={config.minutes}
            showAllPaces={true}
            height="350px"
            heading="Your Walkable Radius"
          />
        </div>

        {/* Main Content */}
        <MarkdownContent content={mainContent} />

        {/* Related Pages */}
        <RelatedWalkingTimePages currentSlug={slug} />
      </div>
    </>
  );
}
