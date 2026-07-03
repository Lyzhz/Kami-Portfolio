import { ImageResponse } from "next/og";

export const alt = "Camila Brito · Designer Gráfica";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 28,
          background: "#f5f2ec",
          padding: "80px 88px",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: "#9a7b5f" }}>
          DESIGNER GRÁFICA · SÃO PAULO, BRASIL
        </div>
        <div style={{ display: "flex", fontSize: 150, lineHeight: 1, color: "#2b2825" }}>
          Camila Brito
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#4a453d" }}>
          Identidade visual · Social media · Design gráfico
        </div>
      </div>
    ),
    { ...size }
  );
}
