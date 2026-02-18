"use client";

import dynamic from "next/dynamic";

// Dynamic import for MapRadius (client-only with Leaflet)
const MapRadius = dynamic(
  () => import("@/components/calculators/MapRadius"),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex items-center justify-center rounded-lg bg-gray-100"
        style={{ height: "400px" }}
      >
        <div className="text-gray-500">Loading map...</div>
      </div>
    ),
  }
);

interface MapRadiusWrapperProps {
  /** Time in minutes to calculate radius */
  minutes?: number;
  /** Show rings for all paces */
  showAllPaces?: boolean;
  /** Map height */
  height?: string;
  /** Optional heading */
  heading?: string;
}

/**
 * Client-side wrapper for MapRadius to enable dynamic import with ssr: false.
 * Use this component in Server Components instead of MapRadius directly.
 */
export default function MapRadiusWrapper(props: MapRadiusWrapperProps) {
  return <MapRadius {...props} />;
}
