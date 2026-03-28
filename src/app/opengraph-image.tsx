import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #050505 0%, #0f0f1a 50%, #050505 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Glow effects */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "-10%",
            width: "40%",
            height: "40%",
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            right: "-10%",
            width: "40%",
            height: "40%",
            background: "radial-gradient(circle, rgba(147,51,234,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        {/* Content */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: "-2px",
          }}
        >
          One Rep Max
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
            backgroundClip: "text",
            color: "transparent",
            textAlign: "center",
            lineHeight: 1.2,
            letterSpacing: "-2px",
            marginBottom: 28,
          }}
        >
          Calculator
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#9ca3af",
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          Bench Press · Squat · Deadlift
        </div>
        <div
          style={{
            display: "flex",
            gap: "24px",
          }}
        >
          {["Epley Formula", "Brzycki Formula", "% Training Charts"].map((label) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                padding: "10px 20px",
                fontSize: 18,
                color: "#6b7280",
              }}
            >
              {label}
            </div>
          ))}
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#374151",
            marginTop: 36,
          }}
        >
          onerepmaxcalculator.org · Free · No Signup
        </div>
      </div>
    ),
    size
  );
}
