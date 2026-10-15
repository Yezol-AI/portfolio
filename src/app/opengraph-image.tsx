
import { ImageResponse } from "next/og";

export const alt = "Shah | Software Engineer & Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0a0a12",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, color: "#a78bfa" }}>
          {"< Shah />"}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 84,
            fontWeight: 700,
            color: "#f4f2fa",
          }}
        >
          Websites and mobile apps
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 36,
            color: "#9a97ab",
          }}
        >
          Software engineer and web developer
        </div>
      </div>
    ),
    size,
  );
}