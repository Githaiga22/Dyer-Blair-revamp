"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ArrowRight, Lock, Zap, Users, BarChart2 } from "lucide-react";

const features = [
  { icon: BarChart2, title: "Bespoke Portfolios", desc: "Strategies built around your risk profile, goals, and time horizon." },
  { icon: Lock, title: "Capital Preservation", desc: "Disciplined risk management across all market cycles." },
  { icon: Zap, title: "Alternative Access", desc: "Private equity, REITs, and structured products for eligible investors." },
  { icon: Users, title: "Dedicated Manager", desc: "A senior investment professional assigned exclusively to you." },
];

const capabilities = [
  "Discretionary portfolio management",
  "Estate and succession planning",
  "Tax-efficient structuring",
  "Multi-currency access",
  "Offshore investment solutions",
  "Philanthropic advisory",
];

export default function WealthManagement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="wealth" ref={ref} className="relative py-28 bg-[#F7F9FC] overflow-hidden">
      {/* Subtle gold corner accent */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-[#C49220]/5 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — text + checklist, slides from left */}
          <motion.div
            initial={{ opacity: 0, x: -55 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-[#C49220] font-bold mb-4">
              Private Wealth
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#081526] leading-tight mb-5">
              Wealth management
              <br />
              <span className="gradient-gold">at its finest</span>
            </h2>
            <div className="w-14 h-1 rounded-full bg-gradient-to-r from-[#C49220] to-[#E8C050] mb-6" />
            <p className="text-[#4A6080] text-lg leading-relaxed mb-8">
              For discerning investors who demand more. Our Private Wealth division delivers institutional-grade investment management, estate planning, and bespoke advisory for high-net-worth individuals across East Africa.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {capabilities.map((c, i) => (
                <motion.li
                  key={c}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-2.5 text-sm text-[#4A6080]"
                >
                  <CheckCircle2 size={14} className="text-[#C49220] flex-shrink-0" />
                  {c}
                </motion.li>
              ))}
            </ul>

            <Link
              href="#"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#081526] text-white font-bold text-sm hover:bg-[#1E4070] transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Speak with an Advisor
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* RIGHT — feature cards, slide from right */}
          <motion.div
            initial={{ opacity: 0, x: 55 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.1 }}
                className="bg-white rounded-xl p-5 border border-[#E0E8F4] hover:border-[#C49220]/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#FDF6E3] border border-[#C49220]/20 flex items-center justify-center mb-4 group-hover:bg-[#C49220]/10 transition-colors">
                  <f.icon size={17} className="text-[#C49220]" />
                </div>
                <h4 className="text-sm font-bold text-[#081526] mb-2">{f.title}</h4>
                <p className="text-xs text-[#7090B0] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
