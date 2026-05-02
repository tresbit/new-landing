import { ImageResponse } from "next/og"

export const alt = "Tresbit | Entrega Rápida · Time to Market"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0b1120 0%, #142033 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: "32px",
            fontWeight: "700",
            color: "#5ba8d8",
            marginBottom: "32px",
            letterSpacing: "-0.5px",
            display: "flex",
          }}
        >
          Tresbit
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: "62px",
              fontWeight: "800",
              color: "#ffffff",
              lineHeight: 1.1,
              display: "flex",
            }}
          >
            Ideas a producción
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: "62px",
              fontWeight: "800",
              color: "#5ba8d8",
              lineHeight: 1.1,
              display: "flex",
            }}
          >
            en 4-6 semanas
          </div>
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: "26px",
            color: "#94a3b8",
            lineHeight: 1.4,
            display: "flex",
          }}
        >
          MVPs bien definidos. Iteraciones semanales. CI/CD.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "6px",
            background: "linear-gradient(90deg, #286291 0%, #5ba8d8 100%)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size },
  )
}
