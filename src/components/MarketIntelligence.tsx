"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, TrendingDown, Globe } from "lucide-react";

const indices = [
  { name: "NSE 20", value: "1,824.30", change: "+0.62%", up: true },
  { name: "NSE All Share", value: "176,420", change: "+0.82%", up: true },
  { name: "FTSE NSE 25", value: "4,218.50", change: "-0.14%", up: false },
  { name: "DSE All Share", value: "2,104.80", change: "+1.10%", up: true },
  { name: "USE All Share", value: "988.40", change: "+0.35%", up: true },
  { name: "RSE Index", value: "342.60", change: "+0.08%", up: true },
];

const insights = [
  { cat: "Market Update", title: "NSE records strong Q2 performance amid regional rally", time: "2h ago", tag: "Equities" },
  { cat: "Fixed Income", title: "CBK holds rate steady; T-bond yields ease on demand", time: "5h ago", tag: "Bonds" },
  { cat: "Economy", title: "Kenya GDP revised upward to 5.8% for FY2026", time: "1d ago", tag: "Macro" },
];

export default function MarketIntelligence() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="markets" ref={ref} className="relative py-28 overflow-hidden bg-[#020B18]">
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[#C49220]/5 blur-[120px]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-[#D4A830]/80 font-bold mb-4">
            Market Intelligence
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-2">
            Stay ahead of
            <span className="shimmer-gold"> East African markets</span>
          </h2>
          <div className="w-14 h-1 rounded-full bg-gradient-to-r from-[#C49220] to-[#E8C050] mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8">
          {/* Index cards */}
          <div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {indices.map((idx, i) => (
                <motion.div
                  key={idx.name}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * i + 0.2, duration: 0.55 }}
                  className="glass rounded-xl p-4 hover:border-white/15 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <Globe size={10} className="text-white/30" />
                      <span className="text-[10px] text-white/35 font-medium uppercase tracking-wide">{idx.name}</span>
                    </div>
                    {idx.up ? <TrendingUp size={12} className="text-green-400" /> : <TrendingDown size={12} className="text-red-400" />}
                  </div>
                  <p className="text-xl font-bold text-white">{idx.value}</p>
                  <p className={`text-xs font-bold mt-0.5 ${idx.up ? "text-green-400" : "text-red-400"}`}>{idx.change}</p>
                </motion.div>
              ))}
            </div>

            {/* Ticker */}
            <div className="glass rounded-xl py-3 px-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
              <div className="ticker-track flex gap-10 w-max">
                {[...indices, ...indices].map((idx, i) => (
                  <div key={i} className="flex items-center gap-2 whitespace-nowrap">
                    <span className="text-xs font-bold text-white/55">{idx.name}</span>
                    <span className="text-xs text-white/35">{idx.value}</span>
                    <span className={`text-xs font-bold ${idx.up ? "text-green-400" : "text-red-400"}`}>{idx.change}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Insights panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="glass rounded-2xl p-6"
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-bold mb-5">Latest Insights</p>
            <div className="space-y-5">
              {insights.map((ins, i) => (
                <div key={i} className="group cursor-pointer border-b border-white/5 pb-5 last:border-0 last:pb-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#D4A830]/80">{ins.cat}</span>
                    <span className="text-[10px] text-white/25">· {ins.time}</span>
                  </div>
                  <p className="text-sm font-semibold text-white/70 group-hover:text-white leading-snug transition-colors">{ins.title}</p>
                  <span className="mt-2 inline-block text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#1E4070]/60 text-[#8AB0DE]">{ins.tag}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-5 py-2.5 rounded-lg text-xs font-bold text-[#D4A830]/70 border border-[#D4A830]/20 hover:border-[#D4A830]/50 hover:text-[#D4A830] transition-all duration-200">
              View All Research →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
