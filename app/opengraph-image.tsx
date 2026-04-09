import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "JT Ads — Paid Media para Empresas en LATAM";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0E1A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Blue left accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 6,
            height: "100%",
            background: "#2563EB",
          }}
        />

        {/* Logo text — fallback since we can't embed the PNG in edge runtime easily */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <span
            style={{
              fontSize: 80,
              fontWeight: 800,
              color: "#F9FAFB",
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            JT
          </span>
          <span
            style={{
              fontSize: 22,
              fontWeight: 400,
              color: "#6B7280",
              marginLeft: 20,
              letterSpacing: "4px",
              textTransform: "uppercase",
              lineHeight: 1.4,
              display: "flex",
              flexDirection: "column",
            }}
          >
            ADS CONSULTING{"\n"}& PERFORMANCE
          </span>
        </div>

        <div
          style={{
            fontSize: 44,
            fontWeight: 700,
            color: "#F9FAFB",
            lineHeight: 1.2,
            maxWidth: 900,
            marginBottom: 24,
          }}
        >
          Paid media para empresas en LATAM + USA
        </div>

        <div
          style={{
            fontSize: 24,
            color: "#9CA3AF",
            marginBottom: 48,
          }}
        >
          Diagnóstico en vivo · Equipo senior · Sin contratos largos
        </div>

        <div
          style={{
            fontSize: 20,
            color: "#2563EB",
            fontWeight: 600,
          }}
        >
          ads.juantabares.co
        </div>
      </div>
    ),
    { ...size }
  );
}
