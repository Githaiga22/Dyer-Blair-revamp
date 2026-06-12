"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { BookOpen, ArrowUpRight, Clock } from "lucide-react";

const reports = [
  {
    category: "Equities Research",
    title: "East African Equities Outlook H2 2026: Selective opportunities amid macro headwinds",
    excerpt:
      "Our research team identifies high-conviction stock picks across the NSE, DSE, and USE as regional economies navigate global rate normalization.",
    readTime: "12 min read",
    date: "Jun 5, 2026",
    tag: "Featured",
  },
  {
    category: "Fixed Income",
    title: "Kenya Government Securities: Yield curve dynamics and optimal duration positioning",
    excerpt:
      "An in-depth analysis of Treasury bill and bond yields, CBK monetary policy trajectory, and implications for fixed income portfolios.",
    readTime: "8 min read",
    date: "May 28, 2026",
    tag: "Fixed Income",
  },
  {
    category: "Macro Strategy",
    title: "East Africa 2026 Investment Climate Report: Resilience through structural reform",
    excerpt:
      "A comprehensive assessment of macroeconomic trends, policy shifts, and investment opportunities across Kenya, Tanzania, Uganda, and Rwanda.",
    readTime: "20 min read",
    date: "May 15, 2026",
    tag: "Macro",
  },
];

export default function ResearchInsights() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="research" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#040D1A]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1E4070]/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-[#D4A830]/80 font-semibold mb-4">
              Research &amp; Insights
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Institutional-grade
              <br />
              <span className="gradient-gold">market intelligence</span>
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4A830]/80 hover:text-[#D4A830] transition-colors whitespace-nowrap"
          >
            <BookOpen size={15} />
            View Research Library
            <ArrowUpRight size={13} />
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {reports.map((r, i) => (
            <motion.article
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 + 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group glass rounded-2xl p-6 hover:border-white/15 transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4A830]/80 font-bold">
                  {r.category}
                </span>
                <span
                  className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    r.tag === "Featured"
                      ? "bg-[#D4A830]/15 text-[#D4A830]"
                      : "bg-[#1E4070]/60 text-[#8AB0DE]"
                  }`}
                >
                  {r.tag}
                </span>
              </div>

              <h3 className="text-base font-bold text-white/85 group-hover:text-white leading-snug mb-3 transition-colors flex-1">
                {r.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed mb-5">{r.excerpt}</p>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-3 text-xs text-white/30">
                  <span>{r.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {r.readTime}
                  </span>
                </div>
                <ArrowUpRight
                  size={15}
                  className="text-white/25 group-hover:text-[#D4A830] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
