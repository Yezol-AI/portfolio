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
          background: "#0B0F14",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, color: "#22D3EE" }}>
          {"< Shah />"}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 84,
            fontWeight: 700,
            color: "#E6EDF3",
          }}
        >
          Websites and mobile apps
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 36,
            color: "#8B98A5",
          }}
        >
          Software engineer and web developer
        </div>
      </div>
    ),
    size,
  );
}