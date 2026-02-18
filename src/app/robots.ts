import { MetadataRoute } from "next";

/**
 * Generate robots.txt for search engine crawlers.
 * Next.js automatically serves this at /robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://howlongtowalk.org/sitemap.xml",
  };
}
