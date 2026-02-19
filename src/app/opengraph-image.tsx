import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tanmay Tambat — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a0a0a",
        backgroundImage:
          "radial-gradient(circle at 25% 25%, #1a1a2e 0%, transparent 50%), radial-gradient(circle at 75% 75%, #16213e 0%, transparent 50%)",
        padding: "40px 80px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: "linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7)",
        }}
      />

      {/* Initials */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: "50%",
          border: "2px solid rgba(139, 92, 246, 0.5)",
          fontSize: 36,
          fontWeight: 700,
          color: "#a855f7",
          marginBottom: 24,
        }}
      >
        TT
      </div>

      {/* Name */}
      <div
        style={{
          display: "flex",
          fontSize: 52,
          fontWeight: 700,
          color: "#ffffff",
          marginBottom: 8,
          letterSpacing: "-0.02em",
        }}
      >
        Tanmay Tambat
      </div>

      {/* Title */}
      <div
        style={{
          display: "flex",
          fontSize: 26,
          color: "#a1a1aa",
          marginBottom: 32,
        }}
      >
        Software Engineer · Full-Stack Developer
      </div>

      {/* Tech tags */}
      <div
        style={{
          display: "flex",
          gap: 12,
        }}
      >
        {["Node.js", "React", "TypeScript", "Python"].map((tech) => (
          <div
            key={tech}
            style={{
              display: "flex",
              padding: "8px 20px",
              borderRadius: 999,
              border: "1px solid rgba(163, 163, 163, 0.2)",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              color: "#d4d4d8",
              fontSize: 18,
            }}
          >
            {tech}
          </div>
        ))}
      </div>

      {/* Bottom URL */}
      <div
        style={{
          display: "flex",
          position: "absolute",
          bottom: 36,
          fontSize: 16,
          color: "#71717a",
        }}
      >
        tanmaytambat.vercel.app
      </div>
    </div>,
    { ...size },
  );
}
