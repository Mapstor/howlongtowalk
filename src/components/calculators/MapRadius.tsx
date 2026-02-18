"use client";

import { useEffect, useState, useMemo } from "react";
import { walkingPaces, DEFAULT_PACE } from "@/data/paces";

// Leaflet types - will be dynamically imported
type LatLngExpression = [number, number];

interface MapRadiusProps {
  /** Time in minutes to calculate radius */
  minutes?: number;
  /** Show rings for all paces */
  showAllPaces?: boolean;
  /** Map height */
  height?: string;
  /** Optional heading */
  heading?: string;
}

// Default center (New York City)
const DEFAULT_CENTER: LatLngExpression = [40.7128, -74.006];

// Pace colors for rings
const paceColors: Record<string, string> = {
  Leisurely: "#94a3b8", // slate-400
  Easy: "#a3e635", // lime-400
  Moderate: "#0d9488", // teal-600
  Brisk: "#3b82f6", // blue-500
  Fast: "#8b5cf6", // violet-500
  "Very Fast": "#ec4899", // pink-500
};

function MapRadiusInner({
  minutes = 30,
  showAllPaces = false,
  height = "400px",
  heading,
}: MapRadiusProps) {
  const [center, setCenter] = useState<LatLngExpression>(DEFAULT_CENTER);
  const [locationStatus, setLocationStatus] = useState<
    "loading" | "success" | "error" | "idle"
  >("idle");
  const [L, setL] = useState<typeof import("leaflet") | null>(null);
  const [MapComponents, setMapComponents] = useState<{
    MapContainer: React.ComponentType<Record<string, unknown>>;
    TileLayer: React.ComponentType<Record<string, unknown>>;
    Circle: React.ComponentType<Record<string, unknown>>;
    Marker: React.ComponentType<Record<string, unknown>>;
    Popup: React.ComponentType<Record<string, unknown>>;
  } | null>(null);

  // Calculate radii for each pace
  const radii = useMemo(() => {
    return walkingPaces.map((pace) => {
      // Distance in km = speed (km/h) × time (hours)
      const distanceKm = pace.kmh * (minutes / 60);
      // Convert to meters for Leaflet
      const radiusMeters = distanceKm * 1000;

      return {
        pace,
        radiusMeters,
        color: paceColors[pace.label] || "#0d9488",
      };
    });
  }, [minutes]);

  // Get moderate pace radius
  const moderateRadius = radii.find((r) => r.pace.label === "Moderate");

  // Load Leaflet dynamically
  useEffect(() => {
    async function loadLeaflet() {
      const leaflet = await import("leaflet");
      const reactLeaflet = await import("react-leaflet");

      // Fix default marker icon
      delete (leaflet.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
      leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });

      setL(leaflet);
      setMapComponents({
        MapContainer: reactLeaflet.MapContainer as unknown as React.ComponentType<Record<string, unknown>>,
        TileLayer: reactLeaflet.TileLayer as unknown as React.ComponentType<Record<string, unknown>>,
        Circle: reactLeaflet.Circle as unknown as React.ComponentType<Record<string, unknown>>,
        Marker: reactLeaflet.Marker as unknown as React.ComponentType<Record<string, unknown>>,
        Popup: reactLeaflet.Popup as unknown as React.ComponentType<Record<string, unknown>>,
      });
    }

    loadLeaflet();
  }, []);

  // Get user location
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationStatus("error");
      return;
    }

    setLocationStatus("loading");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCenter([position.coords.latitude, position.coords.longitude]);
        setLocationStatus("success");
      },
      () => {
        // Use default center on error
        setLocationStatus("error");
      },
      {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 600000, // Cache for 10 minutes
      }
    );
  }, []);

  // Calculate appropriate zoom level based on radius
  const zoom = useMemo(() => {
    const maxRadius = moderateRadius?.radiusMeters || 2400;
    if (maxRadius > 50000) return 8;
    if (maxRadius > 20000) return 9;
    if (maxRadius > 10000) return 10;
    if (maxRadius > 5000) return 11;
    if (maxRadius > 2000) return 12;
    return 13;
  }, [moderateRadius]);

  if (!L || !MapComponents) {
    return (
      <div
        className="flex items-center justify-center rounded-lg bg-gray-100"
        style={{ height }}
      >
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  const { MapContainer, TileLayer, Circle, Marker, Popup } = MapComponents;

  return (
    <div className="card">
      {heading && (
        <h2 className="mb-4 text-xl font-semibold text-gray-900">{heading}</h2>
      )}

      {/* Location status */}
      <div className="mb-3 text-sm text-gray-500">
        {locationStatus === "loading" && "📍 Getting your location..."}
        {locationStatus === "success" && "📍 Showing your location"}
        {locationStatus === "error" && "📍 Using default location (New York)"}
        {locationStatus === "idle" && "📍 Map centered on New York"}
      </div>

      {/* Map */}
      <div className="overflow-hidden rounded-lg border border-gray-200" style={{ height }}>
        <MapContainer
          center={center}
          zoom={zoom}
          style={{ height: "100%", width: "100%" }}
          key={`${center[0]}-${center[1]}`}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Center marker */}
          <Marker position={center}>
            <Popup>Your location</Popup>
          </Marker>

          {/* Pace rings */}
          {showAllPaces ? (
            // Show all pace rings (outer to inner for proper layering)
            [...radii].reverse().map((r) => (
              <Circle
                key={r.pace.label}
                center={center}
                radius={r.radiusMeters}
                pathOptions={{
                  color: r.color,
                  fillColor: r.color,
                  fillOpacity: 0.1,
                  weight: 2,
                }}
              />
            ))
          ) : (
            // Show only moderate pace ring
            moderateRadius && (
              <Circle
                center={center}
                radius={moderateRadius.radiusMeters}
                pathOptions={{
                  color: "#0d9488",
                  fillColor: "#0d9488",
                  fillOpacity: 0.15,
                  weight: 3,
                }}
              />
            )
          )}
        </MapContainer>
      </div>

      {/* Legend */}
      {showAllPaces && (
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {radii.map((r) => (
            <div key={r.pace.label} className="flex items-center gap-2 text-xs">
              <span
                className="inline-block h-3 w-3 rounded-full"
                style={{ backgroundColor: r.color }}
              />
              <span className="text-gray-600">
                {r.pace.label}: {(r.radiusMeters / 1000).toFixed(1)} km
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Summary */}
      {!showAllPaces && moderateRadius && (
        <div className="mt-3 text-sm text-gray-600">
          <strong>Walkable radius at moderate pace:</strong>{" "}
          {(moderateRadius.radiusMeters / 1000).toFixed(2)} km (
          {(moderateRadius.radiusMeters / 1609.34).toFixed(2)} miles)
        </div>
      )}
    </div>
  );
}

// Export with dynamic import wrapper for SSR safety
export default MapRadiusInner;
