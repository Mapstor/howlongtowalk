import { MetadataRoute } from "next";
import { walkingDistances } from "@/data/walking-distances";
import { runningDistances } from "@/data/running-distances";
import { walkingTimes } from "@/data/walking-times";

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
    {
      url: `${baseUrl}/how-long-to-run`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-far-can-i-walk`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/walking-speed`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Walking distance pages
  const walkingPages: MetadataRoute.Sitemap = walkingDistances.map((config) => ({
    url: `${baseUrl}/how-long-to-walk/${config.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Running distance pages
  const runningPages: MetadataRoute.Sitemap = runningDistances.map((config) => ({
    url: `${baseUrl}/how-long-to-run/${config.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Walking time pages (how far can I walk)
  const walkingTimePages: MetadataRoute.Sitemap = walkingTimes.map((config) => ({
    url: `${baseUrl}/how-far-can-i-walk/${config.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...walkingPages, ...runningPages, ...walkingTimePages];
}
