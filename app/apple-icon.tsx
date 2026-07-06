import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: 180, height: 180, borderRadius: 40, background: "#E25751",
        display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: "serif", fontSize: 110, fontWeight: 700,
          color: "#FFFFFF", lineHeight: 1, marginTop: -4 }}>
          M
        </span>
      </div>
    ),
    { ...size }
  );
}