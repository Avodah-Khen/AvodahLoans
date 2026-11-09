// pages/Support.jsx
import { useState } from "react";
import {
  Search,
  HelpCircle,
  FileText,
  CreditCard,
  BarChart3,
  Home,
  Shield,
  Phone,
  MessageCircle,
  Minus,
  Plus,
} from "lucide-react";

const faqs = [
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

const helpTopics = [
  {
    icon: <FileText size={20} />,
    title: "Loan Application",
    desc: "How to apply, documents needed, and tracking your application status.",
    color: "#fff7ed",
  },
  {
    icon: <CreditCard size={20} />,
    title: "EMI & Repayment",
    desc: "EMI calculation, due dates, auto-debit setup, and prepayment options.",
    color: "#fefce8",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Eligibility & CIBIL",
    desc: "Understand your loan eligibility and how your credit score affects rates.",
    color: "#f0fdf4",
  },
  {
    icon: <Home size={20} />,
    title: "Home Loan Queries",
    desc: "Property valuation, legal verification, RERA and registration process.",
    color: "#eff6ff",
  },
  {
    icon: <Shield size={20} />,
    title: "Account & Privacy",
    desc: "Update your profile, manage data preferences and security settings.",
    color: "#fdf4ff",
  },
  {
    icon: <Phone size={20} />,
    title: "Talk to an Advisor",
    desc: "Schedule a free 1-on-1 call with our loan experts at your convenience.",
    color: "#fff7ed",
  },
];

export default function Support() {
  const [open, setOpen] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        background: "#fafaf8",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      {/* ── Screen 1: Support Hero & Help Topics ── */}
      <section className="calc-hero-screen" style={{ width: "100%" }}>
        {/* Header */}
        <div
          style={{
            background: "#1C0D38",
            padding: "clamp(16px, 2.4vh, 32px) 0",
            textAlign: "center",
            width: "100%",
          }}
        >
          <div className="page-container-h">
            <h1
              style={{
                fontFamily: "'Sora',sans-serif",
                fontSize: "clamp(26px, 3.2vh, 36px)",
                fontWeight: 700,
                color: "white",
                marginBottom: "clamp(4px, 0.8vh, 10px)",
                lineHeight: 1.2,
              }}
            >
              Support & Help
            </h1>

            <p
              style={{
                color: "rgba(255,255,255,.65)",
                fontSize: "clamp(13px, 1.4vh, 15px)",
                maxWidth: 480,
                margin: "0 auto clamp(12px, 1.8vh, 22px)",
                lineHeight: 1.6,
              }}
            >
              Find answers to common questions or connect with our team directly.
            </p>

            {/* Search */}
            <div
              style={{
                maxWidth: 520,
                margin: "0 auto",
                position: "relative",
              }}
            >
              <Search
                size={18}
                style={{
                  position: "absolute",
                  left: 16,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#78716c",
                }}
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search your question..."
                style={{
                  width: "100%",
                  height: "clamp(42px, 5vh, 48px)",
                  borderRadius: 12,
                  border: "none",
                  outline: "none",
                  paddingLeft: 46,
                  paddingRight: 16,
                  fontSize: 14,
                  fontFamily: "'DM Sans',sans-serif",
                  color: "#1c1108",
                  boxSizing: "border-box",
                  boxShadow: "0 6px 24px rgba(0,0,0,.25)",
                }}
              />
            </div>
          </div>
        </div>

        <div
          className="calc-screen-body page-container-h"
          style={{
            padding: "clamp(12px, 1.8vh, 24px) 32px",
            maxWidth: 1280,
            margin: "0 auto",
            boxSizing: "border-box",
            width: "100%",
          }}
        >
          {/* Topics */}
          <h2
            style={{
              fontFamily: "'Sora',sans-serif",
              fontSize: "clamp(18px, 2.2vh, 22px)",
              fontWeight: 700,
              color: "#1a0800",
              marginBottom: "clamp(8px, 1.2vh, 16px)",
            }}
          >
            Browse by Topic
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "clamp(10px, 1.4vh, 16px)",
              marginBottom: 0,
            }}
          >
            {helpTopics.map((t) => (
              <div
                key={t.title}
                style={{
                  background: "white",
                  borderRadius: 14,
                  border: "1.5px solid #fed7aa",
                  padding: "clamp(12px, 1.6vh, 18px)",
                  cursor: "pointer",
                  transition: "all .2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#f97316";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(249,115,22,.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#fed7aa";
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "clamp(36px, 4vh, 42px)",
                    height: "clamp(36px, 4vh, 42px)",
                    borderRadius: 10,
                    background: t.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "clamp(6px, 0.8vh, 10px)",
                    color: "#f97316",
                  }}
                >
                  {t.icon}
                </div>

                <h3
                  style={{
                    fontFamily: "'Sora',sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#1a0800",
                    marginBottom: 4,
                  }}
                >
                  {t.title}
                </h3>

                <p
                  style={{
                    fontSize: 12.5,
                    color: "#78716c",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Screen 2: Frequently Asked Questions ── */}
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
          {/* FAQ */}
          <h2
            style={{
              fontFamily: "'Sora',sans-serif",
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
            {search
              ? `${filtered.length} result${
                  filtered.length !== 1 ? "s" : ""
                } for "${search}"`
              : `${faqs.length} questions answered`}
          </p>

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
                      fontFamily: "'Sora',sans-serif",
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
                          ? "linear-gradient(135deg,#f97316,#eab308)"
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
                  No results found for "<strong>{search}</strong>". Try different
                  keywords or{" "}
                  <span style={{ color: "#f97316", cursor: "pointer" }}>
                    contact us
                  </span>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Screen 3: Direct Contact CTA ── */}
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
          {/* CTA */}
          <div
            style={{
              background: "linear-gradient(135deg,#f97316,#eab308)",
              borderRadius: 20,
              padding: "clamp(32px, 5vh, 48px) clamp(24px, 4vw, 36px)",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontFamily: "'Sora',sans-serif",
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
                color: "rgba(255,255,255,.9)",
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
                  background: "rgba(255,255,255,.2)",
                  color: "white",
                  border: "2px solid rgba(255,255,255,.6)",
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
