import { ImageResponse } from "next/og";

export const alt =
  "Érika de Sousa Alves — Product Designer. Discovery, métricas e estratégia.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #f7f4ed 0%, #f0e8d8 40%, #e8d4b8 70%, #d9b38a 100%)",
          fontFamily: "serif",
          color: "#1a1a1a",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#5a4a3a",
            display: "flex",
          }}
        >
          Portfolio · 2026
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.05,
              fontWeight: 400,
              letterSpacing: "-0.02em",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Érika de</span>
            <span style={{ fontStyle: "italic" }}>Sousa Alves</span>
          </div>
          <div
            style={{
              fontSize: 34,
              color: "#3a3a3a",
              maxWidth: 900,
              lineHeight: 1.3,
              display: "flex",
            }}
          >
            Product Designer — discovery, métricas e estratégia transformando
            complexidade em produtos que funcionam.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#5a4a3a",
          }}
        >
          <div style={{ display: "flex" }}>erika-portfolio-pi.vercel.app</div>
          <div style={{ display: "flex" }}>Fortaleza · Brasil</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
