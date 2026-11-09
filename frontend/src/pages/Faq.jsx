// pages/Faq.jsx - AvodahLoans FAQ Component & Standalone Page
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export const faqs = [
  {
    q: "How do I check my loan eligibility?",
    a: "Click 'Check Eligibility' on the homepage, fill in your monthly income, employment type and loan amount. You'll get an instant result — no documents needed and no impact on your credit score.",
  },
  {
    q: "Does checking eligibility affect my CIBIL score?",
    a: "No. We use a soft inquiry to check your eligibility, which does not affect your CIBIL or credit score in any way.",
  },
  {
    q: "How long does loan approval take?",
    a: "Most lenders on our platform approve loans within 24–48 hours for salaried applicants. Self-employed applicants may take 3–5 working days depending on the lender.",
  },
  {
    q: "What documents are required for a home loan?",
    a: "Typically: PAN card, Aadhaar, last 3 months salary slips (salaried) or 2 years ITR (self-employed), last 6 months bank statement, and property documents. Requirements vary by lender.",
  },
  {
    q: "Is AvodahLoans a direct lender?",
    a: "No — we are a loan comparison and facilitation platform. We partner with 50+ banks and NBFCs and help you find the best offer. You apply through us and the lender disburses directly.",
  },
  {
    q: "Are there any charges for using AvodahLoans?",
    a: "Our service is completely free for borrowers. We are compensated by lenders when a loan is disbursed. There are zero hidden charges from our side.",
  },
  {
    q: "What is the minimum CIBIL score required?",
    a: "Most lenders require a minimum CIBIL score of 700–750 for home loans and 720+ for personal loans. Some NBFCs accept scores as low as 650 with a higher interest rate.",
  },
  {
    q: "Can I prepay my loan?",
    a: "Yes. Most banks allow prepayment. For floating-rate loans, RBI guidelines prohibit prepayment penalties. Fixed-rate loans may carry a 2–4% prepayment charge depending on the lender.",
  },
];

export default function Faq({ searchQuery = "", showCta = true }) {
  const [open, setOpen] = useState(null);

  const filtered = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      style={{
        background: "#fafaf8",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      {/* ── Screen 1: Frequently Asked Questions (All 8 questions in one column, fit in 100vh) ── */}
      <section
        id="faq-section"
        className="faq-section-screen calc-section-screen"
        style={{
          minHeight: "calc(100vh - 95px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          padding: "clamp(10px, 1.5vh, 20px) 0",
          boxSizing: "border-box",
        }}
      >
        <div
          className="page-container-h"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            boxSizing: "border-box",
            width: "100%",
          }}
        >
          {/* FAQ Heading */}
          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(20px, 2.5vh, 26px)",
              fontWeight: 700,
              color: "#1a0800",
              marginBottom: "clamp(2px, 0.4vh, 4px)",
              lineHeight: 1.2,
            }}
          >
            Frequently Asked Questions
          </h2>

          <p
            style={{
              fontSize: "clamp(12px, 1.3vh, 13.5px)",
              color: "#78716c",
              marginBottom: "clamp(8px, 1.2vh, 14px)",
              lineHeight: 1.3,
            }}
          >
            {searchQuery
              ? `${filtered.length} result${
                  filtered.length !== 1 ? "s" : ""
                } for "${searchQuery}"`
              : `${faqs.length} questions answered`}
          </p>

          {/* Single vertical column: exactly one FAQ card per row */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(5px, 0.7vh, 8px)",
              maxWidth: 780,
              width: "100%",
            }}
          >
            {filtered.map((f, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: 12,
                  border: `1.5px solid ${
                    open === i ? "#f97316" : "#fed7aa"
                  }`,
                  overflow: "hidden",
                  transition: "border-color .2s",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "clamp(7px, 1vh, 10px) clamp(14px, 1.6vw, 20px)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: 12,
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontSize: "clamp(13px, 1.5vh, 14.5px)",
                      fontWeight: 600,
                      color: "#1a0800",
                      lineHeight: 1.35,
                    }}
                  >
                    {f.q}
                  </span>

                  <span
                    style={{
                      width: "clamp(22px, 2.6vh, 26px)",
                      height: "clamp(22px, 2.6vh, 26px)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      background:
                        open === i
                          ? "linear-gradient(135deg, #f97316, #eab308)"
                          : "#fff7ed",
                      color: open === i ? "white" : "#f97316",
                    }}
                  >
                    {open === i ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                {open === i && (
                  <div
                    style={{
                      padding: "0 clamp(14px, 1.6vw, 20px) clamp(8px, 1.2vh, 14px)",
                      fontSize: "clamp(12.5px, 1.4vh, 13.5px)",
                      color: "#57534e",
                      lineHeight: 1.6,
                    }}
                  >
                    {f.a}
                  </div>
                )}
              </div>
            ))}

            {filtered.length === 0 && (
              <div
                style={{
                  textAlign: "center",
                  padding: "30px 20px",
                  color: "#78716c",
                }}
              >
                <HelpCircle size={40} style={{ marginBottom: 12 }} />
                <p>
                  No results found for "<strong>{searchQuery}</strong>". Try different
                  keywords or contact our support team.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Screen 2: Direct Contact CTA (Only if showCta is true) ── */}
      {showCta && (
        <section
          className="calc-section-screen"
          style={{
            minHeight: "calc(100vh - 95px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            padding: "clamp(24px, 4vh, 48px) 0",
            boxSizing: "border-box",
          }}
        >
          <div
            className="page-container-h"
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              boxSizing: "border-box",
              width: "100%",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, #f97316, #eab308)",
                borderRadius: 20,
                padding: "clamp(32px, 5vh, 48px) clamp(24px, 4vw, 36px)",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: 26,
                  fontWeight: 700,
                  color: "white",
                  marginBottom: 10,
                }}
              >
                Still need help?
              </h3>

              <p
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: 15,
                  marginBottom: 28,
                }}
              >
                Our loan advisors are available Mon–Sat, 9am–7pm to help you
                personally.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 14,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <button
                  style={{
                    height: 48,
                    padding: "0 30px",
                    background: "#1a0800",
                    color: "white",
                    border: "none",
                    borderRadius: 10,
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Call Us Now
                </button>

                <button
                  style={{
                    height: 48,
                    padding: "0 30px",
                    background: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    border: "2px solid rgba(255, 255, 255, 0.6)",
                    borderRadius: 10,
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  WhatsApp Us
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <style>{`
        @media (max-width: 900px) {
          .faq-section-screen {
            min-height: auto !important;
            padding: 24px 0 !important;
          }
        }
      `}</style>
    </div>
  );
}

