/**
 * AnswerBox - Styled component for the bold first paragraph (quick answer).
 * Displays the key answer prominently at the top of content pages.
 */

interface AnswerBoxProps {
  /** The answer text content */
  children: React.ReactNode;
}

/**
 * Renders a highlighted answer box for the quick answer paragraph.
 *
 * @example
 * <AnswerBox>
 *   <strong>It takes approximately 20 minutes to walk 1 mile</strong> at an
 *   average walking pace of 3.0 mph.
 * </AnswerBox>
 */
export default function AnswerBox({ children }: AnswerBoxProps) {
  return (
    <div className="answer-box mb-8 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-5">
      <p className="text-lg leading-relaxed text-gray-800">{children}</p>
    </div>
  );
}

/**
 * Extract the first paragraph from markdown content.
 * Looks for content after the H1 heading and before the first --- divider.
 */
export function extractFirstParagraph(content: string): string {
  // Remove frontmatter if present
  const withoutFrontmatter = content.replace(/^---[\s\S]*?---\s*/, "");

  // Remove H1 heading
  const withoutH1 = withoutFrontmatter.replace(/^#[^#].*\n+/, "");

  // Find first paragraph (before --- or next heading)
  // Use [\s\S] instead of . with s flag for compatibility
  const match = withoutH1.match(/^([\s\S]+?)(?:\n\n---|\n\n##|\n\n#|$)/);

  if (match && match[1]) {
    // Clean up the paragraph
    return match[1]
      .trim()
      .replace(/\*\*/g, "") // Remove bold markers (we'll re-bold in component)
      .replace(/\n/g, " "); // Join multi-line paragraphs
  }

  return "";
}
