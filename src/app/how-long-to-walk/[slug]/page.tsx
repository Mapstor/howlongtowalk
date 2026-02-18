import { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

import {
  walkingDistances,
  getWalkingDistanceBySlug,
} from "@/data/walking-distances";
import Breadcrumbs, { getWalkingBreadcrumbs } from "@/components/layout/Breadcrumbs";
import WalkingTimeCalculator from "@/components/calculators/WalkingTimeCalculator";
import AnswerBox from "@/components/content/AnswerBox";
import InternalLinks from "@/components/content/InternalLinks";
import FAQSchema, { extractFAQsFromMarkdown } from "@/components/seo/FAQSchema";
import BreadcrumbSchema, {
  getWalkingBreadcrumbItems,
} from "@/components/seo/BreadcrumbSchema";
import { createWebAppSchema } from "@/components/seo/WebAppSchema";
import JsonLd from "@/components/seo/JsonLd";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generate static paths for all walking distance pages.
 */
export async function generateStaticParams() {
  return walkingDistances.map((config) => ({
    slug: config.slug,
  }));
}

/**
 * Generate metadata for each walking distance page.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = getWalkingDistanceBySlug(slug);

  if (!config) {
    return {
      title: "Page Not Found",
    };
  }

  const canonicalUrl = `https://howlongtowalk.org/how-long-to-walk/${slug}`;

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
 * Read and parse markdown content for a walking distance page.
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
  // Look for the calculator placeholder and skip it
  let mainContent = "";
  if (parts.length > 1) {
    // Skip the calculator placeholder section (second part after first ---)
    // The calculator placeholder is: *[INTERACTIVE CALCULATOR...]*
    const afterCalculator = parts.slice(2).join("\n---\n");
    mainContent = afterCalculator.trim();
  }

  return { title, firstParagraph, mainContent };
}

/**
 * Convert markdown to simple HTML with Next.js Link components.
 * This is a simplified renderer for our specific markdown format.
 */
function MarkdownContent({ content }: { content: string }) {
  // Split content into blocks
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
  const dataLines = lines.slice(2); // Skip header and separator

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
  // Parse inline markdown: **bold**, *italic*, [links](/path)
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
      // No match found, add the character and continue
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
 * Walking Distance Page Component
 */
export default async function WalkingDistancePage({ params }: PageProps) {
  const { slug } = await params;
  const config = getWalkingDistanceBySlug(slug);

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
  const pageUrl = `https://howlongtowalk.org/how-long-to-walk/${slug}`;
  const breadcrumbItems = getWalkingBreadcrumbItems(config.displayName);
  const webAppSchema = createWebAppSchema({
    name: `${config.displayName} Walking Time Calculator`,
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
        <Breadcrumbs segments={getWalkingBreadcrumbs(config.displayName)} />

        {/* Page Title */}
        <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
          {title || `How Long Does It Take to Walk ${config.displayName}?`}
        </h1>

        {/* Answer Box (First Paragraph) */}
        <AnswerBox>
          <InlineMarkdown text={firstParagraph} />
        </AnswerBox>

        {/* Calculator */}
        <div className="mb-10">
          <WalkingTimeCalculator
            initialDistance={config.distance}
            initialUnit={config.unit}
            showExtras={true}
            heading="Calculate Your Walking Time"
          />
        </div>

        {/* Main Content */}
        <MarkdownContent content={mainContent} />

        {/* Related Pages */}
        <InternalLinks currentSlug={slug} pageType="walking" />
      </div>
    </>
  );
}
