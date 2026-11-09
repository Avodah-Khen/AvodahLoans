// pages/EmiCalculatorPage.jsx
import EmiCalculator from "../EmiCalculator";
import CalculatorTools from "../CalculatorTools";
import CalculatorHero from "../CalculatorHero";

export default function EmiCalculatorPage() {
  return (
    <div className="emi-page-wrapper">
      {/* ── Screen 1: Hero / Main Section ── */}
      <section className="calc-hero-viewport">
        <CalculatorHero
          badge1="FREE FINANCIAL TOOLS"
          badge2="INSTANT ESTIMATE"
          titleDark="EMI & Financial"
          titleAccent="Calculators"
          description="Plan your loan repayment, check eligibility and make smarter financial decisions — all for free."
          stats={[
            ["100% Free", "No Hidden Charges"],
            ["Instant Results", "Real-Time Updates"],
            ["Multiple Loans", "Personal, Home & More"]
          ]}
        />
      </section>

      {/* ── Screen 2: Actual Calculator Interface ── */}
      <section className="calc-section-screen">
        <EmiCalculator />
      </section>

      {/* ── Screen 3: Calculator Tools ── */}
      <section className="calc-section-screen">
        <CalculatorTools />
      </section>
    </div>
  );
}
