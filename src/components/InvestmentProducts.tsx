"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { BarChart3, Building2, Gem, PieChart, ArrowRight } from "lucide-react";

const products = [
  {
    icon: BarChart3,
    title: "Brokerage Services",
    description: "Trade equities, bonds, ETFs, and government securities on the Nairobi Securities Exchange with real-time market access.",
    features: ["NSE Direct Trading", "Online & Mobile Platform", "Research-Backed Advice"],
    accent: "#1E4070",
    lightAccent: "#E8F0FA",
  },
  {
    icon: Building2,
    title: "Investment Banking",
    description: "Capital raising, M&A advisory, and structured finance solutions for corporations, governments, and development institutions.",
    features: ["IPO Structuring", "Debt & Equity Capital", "M&A Advisory"],
    accent: "#C49220",
    lightAccent: "#FDF6E3",
    featured: true,
  },
  {
    icon: Gem,
    title: "Private Wealth",
    description: "Personalized wealth planning and portfolio management for high-net-worth individuals and family offices.",
    features: ["Portfolio Management", "Estate Planning", "Alternative Investments"],
    accent: "#1E4070",
    lightAccent: "#E8F0FA",
  },
  {
    icon: PieChart,
    title: "Asset Management",
    description: "Professionally managed, diversified portfolios across equities, fixed income, and money market instruments.",
    features: ["Unit Trust Funds", "Discretionary Portfolios", "Pension Solutions"],
    accent: "#1E4070",
    lightAccent: "#E8F0FA",
  },
];

export default function InvestmentProducts() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="products" ref={ref} className="relative py-28 bg-white overflow-hidden">
      {/* Subtle background detail */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #1E4070 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header — slides from left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-[#C49220] font-bold mb-4">
            Our Services
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#081526] leading-tight">
              Your gateway to East African
              <br />
              <span className="gradient-gold">Capital Markets</span>
            </h2>
            <p className="text-[#4A6080] max-w-sm text-base leading-relaxed">
              Comprehensive financial services for institutional and individual investors seeking to build and protect wealth.
            </p>
          </div>
          {/* Gold accent line */}
          <div className="mt-6 w-16 h-1 rounded-full bg-gradient-to-r from-[#C49220] to-[#E8C050]" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-2xl p-6 border transition-all duration-300 cursor-pointer overflow-hidden ${
                p.featured
                  ? "bg-[#081526] border-[#C49220]/30 hover:border-[#C49220]/60 shadow-xl"
                  : "bg-white border-[#E0E8F4] hover:border-[#1E4070]/30 hover:shadow-lg shadow-sm"
              }`}
            >
              {p.featured && (
                <span className="absolute top-4 right-4 text-[9px] uppercase tracking-[0.2em] font-bold text-[#D4A830] border border-[#D4A830]/30 rounded-full px-2 py-0.5">
                  Featured
                </span>
              )}

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                style={{ background: p.featured ? "rgba(212,168,48,0.12)" : p.lightAccent, border: `1px solid ${p.accent}20` }}
              >
                <p.icon size={20} style={{ color: p.featured ? "#D4A830" : p.accent }} />
              </div>

              <h3 className={`text-base font-bold mb-2.5 ${p.featured ? "text-white" : "text-[#081526]"}`}>
                {p.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-5 ${p.featured ? "text-white/50" : "text-[#6080A0]"}`}>
                {p.description}
              </p>

              <ul className="space-y-2 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs">
                    <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: p.featured ? "#D4A830" : p.accent }} />
                    <span className={p.featured ? "text-white/55" : "text-[#6080A0]"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-bold transition-all duration-200 group/link"
                style={{ color: p.featured ? "#D4A830" : p.accent }}
              >
                Learn more
                <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>

              {/* Hover top-edge accent */}
              <div
                className="absolute top-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${p.featured ? "#D4A830" : p.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
