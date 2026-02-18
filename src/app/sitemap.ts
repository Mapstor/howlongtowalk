import { MetadataRoute } from "next";
import { walkingDistances } from "@/data/walking-distances";

/**
 * Generate sitemap.xml for all pages.
 * Next.js automatically serves this at /sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://howlongtowalk.org";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/how-long-to-walk`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Walking distance pages
  const walkingPages: MetadataRoute.Sitemap = walkingDistances.map((config) => ({
    url: `${baseUrl}/how-long-to-walk/${config.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...walkingPages];
}
