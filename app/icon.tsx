import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#E25751",
        display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: "serif", fontSize: 20, fontWeight: 700,
          color: "#FFFFFF", lineHeight: 1, marginTop: -1 }}>
          M
        </span>
      </div>
    ),
    { ...size }
  );
}