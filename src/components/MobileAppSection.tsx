"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Smartphone, Bell, BarChart2, Lock, Zap } from "lucide-react";

const appFeatures = [
  { icon: BarChart2, label: "Live Market Data", desc: "NSE prices streaming in real-time" },
  { icon: Bell, label: "Price Alerts", desc: "Get notified on your watchlist" },
  { icon: Zap, label: "One-Tap Trading", desc: "Execute trades in seconds" },
  { icon: Lock, label: "Bank-Grade Security", desc: "Biometric & 2FA authentication" },
];

export default function MobileAppSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden bg-[#040D1A]">
      <div className="absolute inset-0" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[400px] -translate-y-1/2 rounded-full bg-[#1E4070]/12 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -55 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-[#D4A830]/80 font-semibold mb-4">
              Mobile Platform
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Trade anywhere
              <br />
              <span className="gradient-gold">with the Edge App</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              The Dyer &amp; Blair Edge App puts the full power of the NSE in your pocket.
              Live quotes, instant execution, portfolio tracking, and research — all in one
              elegantly designed mobile experience.
            </p>

            <div className="space-y-4 mb-10">
              {appFeatures.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#1E4070]/50 border border-[#4A7BC4]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <f.icon size={16} className="text-[#8AB0DE]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/85">{f.label}</p>
                    <p className="text-xs text-white/40">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* App store badges */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="flex items-center gap-3 px-5 py-3 glass rounded-xl border border-white/12 hover:border-white/25 transition-all duration-200 group"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <p className="text-[9px] text-white/40 uppercase tracking-wider">Download on the</p>
                  <p className="text-sm font-bold text-white">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-5 py-3 glass rounded-xl border border-white/12 hover:border-white/25 transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white">
                  <path d="M3.18 23.76c.3.17.64.22.99.14l12.12-6.97-2.54-2.54-10.57 9.37zm-1.14-20.4C2 3.62 2 3.87 2 4.15v15.7c0 .28 0 .53.04.79l.09.08 8.8-8.79v-.2L2.13 3.28l-.09.08zm18.08 8.65l-2.37-1.36-2.83 2.83 2.83 2.82 2.4-1.38c.68-.39.68-1.03-.03-1.91zM3.18.24l10.58 9.37 2.54-2.54L4.17.1C3.82-.02 3.48.07 3.18.24z" />
                </svg>
                <div>
                  <p className="text-[9px] text-white/40 uppercase tracking-wider">Get it on</p>
                  <p className="text-sm font-bold text-white">Google Play</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-radial from-[#D4A830]/10 to-transparent rounded-full blur-3xl" />

            {/* Phone frame */}
            <div className="relative w-64 h-[520px] glass rounded-[3rem] border-2 border-white/12 overflow-hidden shadow-2xl">
              {/* Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />

              {/* Screen content */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#060F1E] to-[#0C1D35] p-5 pt-12">
                {/* Status bar */}
                <div className="flex justify-between items-center mb-5">
                  <span className="text-[10px] text-white/40">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-2 rounded-sm bg-white/40" />
                    <div className="w-3 h-2 rounded-sm bg-white/40" />
                    <div className="w-3 h-2 rounded-sm bg-white/40" />
                  </div>
                </div>

                {/* App header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[10px] text-white/35 mb-0.5">Portfolio Value</p>
                    <p className="text-xl font-bold text-white">KES 1.24M</p>
                    <p className="text-xs text-green-400 font-semibold">↑ +8.3% all time</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#D4A830]/20 border border-[#D4A830]/30 flex items-center justify-center">
                    <Smartphone size={14} className="text-[#D4A830]" />
                  </div>
                </div>

                {/* Mini chart */}
                <div className="h-20 rounded-xl bg-white/3 mb-4 overflow-hidden relative">
                  <svg viewBox="0 0 240 80" className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="mobileChart" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#D4A830" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#D4A830" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,60 C30,55 50,48 80,38 C110,28 130,42 160,30 C190,18 210,12 240,6 L240,80 L0,80 Z" fill="url(#mobileChart)" />
                    <path d="M0,60 C30,55 50,48 80,38 C110,28 130,42 160,30 C190,18 210,12 240,6" fill="none" stroke="#D4A830" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* Holdings list */}
                <p className="text-[10px] text-white/30 uppercase tracking-wider mb-3">My Holdings</p>
                {[
                  { symbol: "SCOM", shares: "1,200", pnl: "+14.2%" },
                  { symbol: "EQTY", shares: "800", pnl: "+8.7%" },
                  { symbol: "KCB", shares: "2,500", pnl: "+22.1%" },
                ].map((h) => (
                  <div key={h.symbol} className="flex items-center justify-between py-2 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-[#1E4070]/70 flex items-center justify-center">
                        <span className="text-[8px] font-bold text-white/70">{h.symbol.slice(0, 2)}</span>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-white/80">{h.symbol}</p>
                        <p className="text-[8px] text-white/30">{h.shares} shares</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-green-400">{h.pnl}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
