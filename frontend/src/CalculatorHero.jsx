// CalculatorHero.jsx - Standardized Hero Section for all calculator pages
import React from "react";

export default function CalculatorHero({
  badge1 = "FREE TOOL",
  badge2 = "INSTANT RESULT",
  badge1Color = "#2563eb",
  badge1Bg = "rgba(59,130,246,0.15)",
  badge2Color = "#16a34a",
  badge2Bg = "rgba(34,197,94,0.15)",
  titleDark,
  titleAccent,
  description,
  stats = [],
  dark = false,
  background,
  children
}) {
  const isDark = dark;
  const bg = background || (isDark ? "linear-gradient(135deg,#1a0800,#2d1200)" : "#ffffff");
  const darkTextColor = isDark ? "#ffffff" : "#111827";
  const descColor = isDark ? "rgba(255,255,255,0.8)" : "#475569";
  const statValColor = isDark ? "#fb923c" : "#3b82f6";
  const statLblColor = isDark ? "rgba(255,255,255,0.7)" : "#64748b";

  return (
    <div style={{
      background: bg,
      padding: "clamp(32px, 5vh, 60px) clamp(16px, 3vw, 32px)",
      width: "100%",
      boxSizing: "border-box",
      position: "relative",
      overflow: "hidden",
      borderBottom: isDark ? "none" : "1px solid #f1f5f9"
    }}>
      {!isDark && (
        <>
          <div style={{ position: "absolute", right: 80, top: 20, width: 260, height: 260, borderRadius: "50%", background: "rgba(59,130,246,0.08)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: 140, top: 60, width: 120, height: 120, borderRadius: "50%", background: "rgba(59,130,246,0.05)", pointerEvents: "none" }} />
        </>
      )}
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: isDark ? "center" : "left" }}>
        {(badge1 || badge2) && (
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: isDark ? "center" : "flex-start",
            gap: 8,
            marginBottom: 14,
            flexWrap: "wrap"
          }}>
            {badge1 && (
              <div style={{ background: badge1Bg, borderRadius: 20, padding: "4px 12px" }}>
                <span style={{ color: badge1Color, fontSize: 12, fontWeight: 600 }}>{badge1}</span>
              </div>
            )}
            {badge2 && (
              <div style={{ background: badge2Bg, borderRadius: 20, padding: "4px 12px" }}>
                <span style={{ color: badge2Color, fontSize: 12, fontWeight: 600 }}>{badge2}</span>
              </div>
            )}
          </div>
        )}

        <h1 style={{
          fontSize: "clamp(32px, 6vw, 48px)",
          fontWeight: 800,
          color: darkTextColor,
          lineHeight: 1.2,
          margin: "0 0 14px",
          letterSpacing: "-0.5px"
        }}>
          {titleDark && <span style={{ color: darkTextColor }}>{titleDark} </span>}
          {titleAccent && <span style={{ color: "#f97316" }}>{titleAccent}</span>}
        </h1>

        {description && (
          <p style={{
            color: descColor,
            fontSize: "clamp(14px, 4vw, 16px)",
            lineHeight: 1.7,
            maxWidth: 580,
            margin: isDark ? "0 auto clamp(8px, 1.2vh, 14px)" : "0 0 clamp(8px, 1.2vh, 14px)"
          }}>
            {description}
          </p>
        )}

        {stats && stats.length > 0 && (
          <div style={{
            display: "flex",
            justifyContent: isDark ? "center" : "flex-start",
            gap: "clamp(16px, 4vw, 28px)",
            flexWrap: "wrap"
          }}>
            {stats.map(([val, lbl]) => (
              <div key={lbl} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "clamp(18px, 4vw, 22px)", fontWeight: 800, color: statValColor, lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: 11, color: statLblColor, marginTop: 3, fontWeight: 500 }}>{lbl}</div>
              </div>
            ))}
          </div>
        )}

        {children}
      </div>
    </div>
  );
}

