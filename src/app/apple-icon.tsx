import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "36px",
        }}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Walking person icon */}
          <circle cx="12" cy="5" r="2" />
          <path d="M10 22l3-8-2-2-4 4" />
          <path d="M14 22l-3-8 4-4" />
          <path d="M9 12l-2-2" />
          <path d="M15 12l2-2" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
