import { ImageResponse } from "next/og";

export const alt = "How Long to Walk - Walking & Running Time Calculator";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 50%, #99f6e4 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Main card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            borderRadius: "24px",
            padding: "60px 80px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
          }}
        >
          {/* Icon */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
              height: "100px",
              background: "linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)",
              borderRadius: "20px",
              marginBottom: "30px",
            }}
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="5" r="2" />
              <path d="M10 22l3-8-2-2-4 4" />
              <path d="M14 22l-3-8 4-4" />
              <path d="M9 12l-2-2" />
              <path d="M15 12l2-2" />
            </svg>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            How Long To Walk
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "28px",
              color: "#6b7280",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Walking & Running Time Calculator
          </div>

          {/* Features */}
          <div
            style={{
              display: "flex",
              gap: "40px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                backgroundColor: "#f0fdfa",
                padding: "16px 24px",
                borderRadius: "12px",
              }}
            >
              <span style={{ fontSize: "24px" }}>🚶</span>
              <span style={{ fontSize: "20px", color: "#0d9488", fontWeight: 600 }}>
                Walking Time
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                backgroundColor: "#f0fdfa",
                padding: "16px 24px",
                borderRadius: "12px",
              }}
            >
              <span style={{ fontSize: "24px" }}>🏃</span>
              <span style={{ fontSize: "20px", color: "#0d9488", fontWeight: 600 }}>
                Running Time
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                backgroundColor: "#f0fdfa",
                padding: "16px 24px",
                borderRadius: "12px",
              }}
            >
              <span style={{ fontSize: "24px" }}>📍</span>
              <span style={{ fontSize: "20px", color: "#0d9488", fontWeight: 600 }}>
                Distance
              </span>
            </div>
          </div>
        </div>

        {/* Domain */}
        <div
          style={{
            marginTop: "40px",
            fontSize: "24px",
            color: "#0d9488",
            fontWeight: 600,
          }}
        >
          howlongtowalk.org
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
