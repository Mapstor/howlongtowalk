import JsonLd from "./JsonLd";

export interface FAQItem {
  /** The question text */
  question: string;
  /** The answer text (can include basic HTML) */
  answer: string;
}

interface FAQSchemaProps {
  /** Array of FAQ question/answer pairs */
  faqs: FAQItem[];
}

/**
 * Generates FAQPage JSON-LD schema from question/answer pairs.
 *
 * Schema.org spec: https://schema.org/FAQPage
 * Google guidelines: https://developers.google.com/search/docs/appearance/structured-data/faqpage
 *
 * @example
 * <FAQSchema faqs={[
 *   { question: "How long to walk 1 mile?", answer: "About 15-20 minutes at a moderate pace." },
 *   { question: "What is a moderate walking pace?", answer: "3.0 mph or about 20 minutes per mile." }
 * ]} />
 */
export default function FAQSchema({ faqs }: FAQSchemaProps) {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={schema} />;
}

/**
 * Helper to extract FAQ items from markdown content.
 * Looks for ### headings that end with "?" and the following paragraph.
 *
 * @param content - Markdown content string
 * @returns Array of FAQ items
 *
 * @example
 * const faqs = extractFAQsFromMarkdown(`
 * ### How long does it take to walk 1 mile?
 * It takes about 15-20 minutes at a moderate pace.
 *
 * ### What factors affect walking time?
 * Your pace, terrain, and fitness level all play a role.
 * `);
 * // Returns: [
 * //   { question: "How long does it take to walk 1 mile?", answer: "It takes about 15-20 minutes..." },
 * //   { question: "What factors affect walking time?", answer: "Your pace, terrain..." }
 * // ]
 */
export function extractFAQsFromMarkdown(content: string): FAQItem[] {
  const faqs: FAQItem[] = [];

  // Match ### headings that contain a question mark
  const faqRegex = /###\s+(.+\?)\s*\n+([^#]+?)(?=\n###|\n##|\n#|$)/gi;

  let match;
  while ((match = faqRegex.exec(content)) !== null) {
    const question = match[1].trim();
    // Clean up the answer: remove extra whitespace, keep it as plain text
    const answer = match[2]
      .trim()
      .replace(/\n+/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    if (question && answer) {
      faqs.push({ question, answer });
    }
  }

  return faqs;
}

/**
 * Create FAQPage schema object directly (without rendering).
 * Useful for combining with other schemas.
 */
export function createFAQSchema(faqs: FAQItem[]): Record<string, unknown> | null {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
