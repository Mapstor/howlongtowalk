import JsonLd from "./JsonLd";

interface WebAppSchemaProps {
  /** Name of the application/calculator */
  name: string;
  /** Description of what the calculator does */
  description: string;
  /** Full URL of the page */
  url: string;
  /** Type of calculator */
  applicationCategory?: string;
  /** Operating system (typically "All" for web apps) */
  operatingSystem?: string;
  /** Browser requirements */
  browserRequirements?: string;
  /** Offer details (free) */
  offers?: {
    price: string;
    priceCurrency: string;
  };
}

/**
 * Generates WebApplication JSON-LD schema for calculator pages.
 *
 * Schema.org spec: https://schema.org/WebApplication
 *
 * @example
 * <WebAppSchema
 *   name="Walking Time Calculator"
 *   description="Calculate how long it takes to walk any distance based on your pace."
 *   url="https://howlongtowalk.org/how-long-to-walk"
 *   applicationCategory="HealthApplication"
 * />
 */
export default function WebAppSchema({
  name,
  description,
  url,
  applicationCategory = "HealthApplication",
  operatingSystem = "All",
  browserRequirements = "Requires JavaScript. Requires HTML5.",
  offers = { price: "0", priceCurrency: "USD" },
}: WebAppSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url,
    applicationCategory,
    operatingSystem,
    browserRequirements,
    offers: {
      "@type": "Offer",
      price: offers.price,
      priceCurrency: offers.priceCurrency,
    },
    provider: {
      "@type": "Organization",
      name: "howlongtowalk.org",
      url: "https://howlongtowalk.org",
    },
  };

  return <JsonLd data={schema} />;
}

/**
 * Create WebApplication schema object directly (without rendering).
 */
export function createWebAppSchema({
  name,
  description,
  url,
  applicationCategory = "HealthApplication",
}: {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url,
    applicationCategory,
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    provider: {
      "@type": "Organization",
      name: "howlongtowalk.org",
      url: "https://howlongtowalk.org",
    },
  };
}

/**
 * Predefined calculator types for the site.
 */
export const calculatorSchemas = {
  walkingTime: (url: string) =>
    createWebAppSchema({
      name: "Walking Time Calculator",
      description:
        "Calculate how long it takes to walk any distance. Shows times for 6 different walking paces from leisurely (2.0 mph) to very fast (4.5 mph).",
      url,
      applicationCategory: "HealthApplication",
    }),

  runningTime: (url: string) =>
    createWebAppSchema({
      name: "Running Time Calculator",
      description:
        "Calculate running times for any distance. Shows finish times at different paces from 6:00/mile to 15:00/mile.",
      url,
      applicationCategory: "HealthApplication",
    }),

  walkingDistance: (url: string) =>
    createWebAppSchema({
      name: "Walking Distance Calculator",
      description:
        "Calculate how far you can walk in a given time. Shows distances at different walking paces.",
      url,
      applicationCategory: "HealthApplication",
    }),
};
