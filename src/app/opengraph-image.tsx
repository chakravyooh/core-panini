import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Core Panini — Senior Technology Specialists";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#000",
          color: "#fafafa",
          padding: "80px",
          fontFamily: "sans-serif",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "100% 64px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "#fafafa",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#000",
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            ⌗
          </div>
          <span style={{ fontSize: "30px", fontWeight: 600, letterSpacing: "-0.02em" }}>
            Core Panini
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <span
            style={{
              fontSize: "26px",
              color: "#71717a",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            IT Consultancy
          </span>
          <div style={{ display: "flex", fontSize: "76px", lineHeight: 1.05, fontWeight: 600, letterSpacing: "-0.04em", maxWidth: "900px" }}>
            Senior technology specialists for problems that decide outcomes.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#71717a", fontSize: "26px" }}>
          <span>corepanini.com</span>
          <span>Strategy · AI · Cloud · Security</span>
        </div>
      </div>
    ),
    size
  );
}
