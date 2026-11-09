// EmiCalculator.jsx
import { useState } from "react";
import { IndianRupee, Percent, Calendar, TrendingUp, Calculator, CheckCircle } from "lucide-react";
import { fmtINR } from "./styles";

export default function EmiCalculator() {
  const [loanAmt, setLoanAmt] = useState(5000000);
  const [rate,    setRate]    = useState(8.5);
  const [tenure,  setTenure]  = useState(20);

  const r        = rate / 12 / 100;
  const n        = tenure * 12;
  const emi      = loanAmt * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  const total    = emi * n;
  const interest = total - loanAmt;
  const pPct     = Math.round((loanAmt / total) * 100);

  const rangeStyle = (val, min, max) => {
    const pct = ((val - min) / (max - min)) * 100;
    return { background: `linear-gradient(to right, #f97316 ${pct}%, #fed7aa ${pct}%)` };
  };

  return (
    <section className="section calc-section" style={{ width: "100%", padding: "clamp(8px, 1.5vh, 16px) 0", background: "transparent", boxSizing: "border-box" }}>
      <div className="calc-container-wide">
        <h2 className="section-title" style={{
          fontSize: "clamp(20px, 2.6vh, 28px)",
          fontWeight: "700",
          marginBottom: "clamp(4px, 0.6vh, 8px)",
          lineHeight: "1.2",
          color: "#0f172a",
          letterSpacing: "-0.5px",
          textAlign: "center"
        }}>EMI Calculator</h2>
        <p className="section-sub" style={{
          fontSize: "clamp(12px, 1.4vh, 14px)",
          color: "#64748b",
          marginBottom: "clamp(12px, 1.6vh, 20px)",
          maxWidth: "700px",
          margin: "0 auto clamp(12px, 1.6vh, 20px)",
          textAlign: "center",
          lineHeight: "1.5"
        }}>Instantly calculate your monthly EMI, total interest and plan your loan repayment.</p>

        <div className="calc-wrapper">
          {/* ── Input side ── */}
          <div className="calc-box" style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "clamp(16px, 2.2vh, 24px) clamp(20px, 2.4vw, 32px)",
            boxShadow: "0 12px 24px -10px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.02)",
            border: "1px solid #e2e8f0",
            display: "flex",
            flexDirection: "column"
          }}>
            <div className="calc-field" style={{ marginBottom: "clamp(8px, 1.2vh, 13px)" }}>
              <div className="calc-field-label" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "clamp(3px, 0.5vh, 6px)",
                fontSize: "clamp(11px, 1.2vh, 12px)",
                fontWeight: "500",
                color: "#334155"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <IndianRupee size={12} />
                  Loan Amount
                </div>
                <span style={{ fontWeight: "700", color: "#f97316" }}>{fmtINR(loanAmt)}</span>
              </div>
              <input type="range" className="range-input"
                min={100000} max={10000000} step={50000}
                value={loanAmt} onChange={e => setLoanAmt(+e.target.value)}
                style={{
                  width: "100%",
                  height: "5px",
                  borderRadius: "10px",
                  WebkitAppearance: "none",
                  ...rangeStyle(loanAmt, 100000, 10000000)
                }} />
            </div>
            <div className="calc-field" style={{ marginBottom: "clamp(8px, 1.2vh, 13px)" }}>
              <div className="calc-field-label" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "clamp(3px, 0.5vh, 6px)",
                fontSize: "clamp(11px, 1.2vh, 12px)",
                fontWeight: "500",
                color: "#334155"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Percent size={12} />
                  Interest Rate
                </div>
                <span style={{ fontWeight: "700", color: "#f97316" }}>{rate.toFixed(1)}%</span>
              </div>
              <input type="range" className="range-input"
                min={6} max={20} step={0.1}
                value={rate} onChange={e => setRate(+e.target.value)}
                style={{
                  width: "100%",
                  height: "5px",
                  borderRadius: "10px",
                  WebkitAppearance: "none",
                  ...rangeStyle(rate, 6, 20)
                }} />
            </div>
            <div className="calc-field" style={{ marginBottom: "clamp(10px, 1.4vh, 16px)" }}>
              <div className="calc-field-label" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "clamp(3px, 0.5vh, 6px)",
                fontSize: "clamp(11px, 1.2vh, 12px)",
                fontWeight: "500",
                color: "#334155"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Calendar size={12} />
                  Loan Tenure
                </div>
                <span style={{ fontWeight: "700", color: "#f97316" }}>{tenure} Years</span>
              </div>
              <input type="range" className="range-input"
                min={1} max={30} step={1}
                value={tenure} onChange={e => setTenure(+e.target.value)}
                style={{
                  width: "100%",
                  height: "5px",
                  borderRadius: "10px",
                  WebkitAppearance: "none",
                  ...rangeStyle(tenure, 1, 30)
                }} />
            </div>
            <button className="btn-solid" style={{
              width: "100%",
              height: "clamp(34px, 4.2vh, 40px)",
              marginTop: "auto",
              background: "#f97316",
              color: "#ffffff",
              border: "none",
              borderRadius: "10px",
              fontSize: "clamp(12px, 1.4vh, 13.5px)",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}>
              <TrendingUp size={14} />
              Calculate EMI
            </button>
          </div>

          {/* ── Result side ── */}
          <div className="calc-result" style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            borderRadius: "16px",
            padding: "clamp(16px, 2.2vh, 24px) clamp(20px, 2.4vw, 32px)",
            color: "#ffffff",
            boxShadow: "0 12px 24px -10px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column"
          }}>
            <div className="result-label" style={{
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              opacity: "0.7",
              marginBottom: "2px"
            }}>Monthly EMI</div>
            <div className="result-emi" style={{
              fontSize: "clamp(24px, 3.4vh, 34px)",
              fontWeight: "800",
              marginBottom: "clamp(8px, 1.2vh, 12px)",
              color: "#f97316",
              letterSpacing: "-1px",
              lineHeight: 1.1
            }}>₹{Math.round(emi).toLocaleString("en-IN")}</div>
            <div className="result-grid" style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "clamp(6px, 1vh, 10px)",
              marginBottom: "clamp(8px, 1.2vh, 12px)"
            }}>
              {[
                ["Principal Amount", fmtINR(loanAmt), IndianRupee],
                ["Total Interest",   fmtINR(interest), Percent],
                ["Total Payment",    fmtINR(total), TrendingUp],
                ["Interest %",       (100 - pPct) + "%", null],
              ].map(([label, val, Icon]) => (
                <div className="result-item" key={label} style={{
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  paddingBottom: "clamp(3px, 0.5vh, 6px)"
                }}>
                  <div className="result-item-label" style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "9.5px",
                    opacity: "0.7",
                    marginBottom: "2px"
                  }}>
                    {Icon && <Icon size={10} />}
                    {label}
                  </div>
                  <div className="result-item-val" style={{
                    fontSize: "clamp(12px, 1.5vh, 13.5px)",
                    fontWeight: "700"
                  }}>{val}</div>
                </div>
              ))}
            </div>
            <div className="pie-bar" style={{
              display: "flex",
              height: "5px",
              borderRadius: "10px",
              overflow: "hidden",
              marginBottom: "clamp(5px, 0.7vh, 8px)",
              background: "rgba(255,255,255,0.1)"
            }}>
              <div className="pie-principal" style={{ width: pPct + "%", background: "#f97316" }} />
              <div className="pie-interest" style={{ flex: 1, background: "rgba(255,255,255,0.2)" }} />
            </div>
            <div className="pie-legend" style={{
              display: "flex",
              gap: "14px",
              marginBottom: "clamp(8px, 1.2vh, 12px)"
            }}>
              <div className="legend-item" style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "10.5px" }}>
                <div className="legend-dot" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f97316" }} />
                <span>Principal</span>
              </div>
              <div className="legend-item" style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "10.5px" }}>
                <div className="legend-dot" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(255,255,255,0.3)" }} />
                <span>Interest</span>
              </div>
            </div>
            <button className="btn-apply-calc" style={{
              width: "100%",
              marginTop: "auto",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#ffffff",
              padding: "clamp(8px, 1vh, 10px)",
              borderRadius: "10px",
              fontSize: "clamp(11.5px, 1.3vh, 13px)",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}>
              <CheckCircle size={14} />
              Apply for This Loan →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
