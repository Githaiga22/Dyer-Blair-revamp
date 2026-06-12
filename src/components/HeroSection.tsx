"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Shield, Award } from "lucide-react";

/* ─── Canvas particle-network animation ─── */
function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let W = 0, H = 0;

    interface Particle {
      x: number; y: number;
      vx: number; vy: number;
      r: number;
      gold: boolean;
    }

    let particles: Particle[] = [];

    function init() {
      W = canvas!.width = window.innerWidth;
      H = canvas!.height = window.innerHeight;
      particles = Array.from({ length: 90 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.6,
        gold: Math.random() < 0.18,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);

      // Draw edges
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 160) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            const alpha = (1 - d / 160) * 0.18;
            ctx!.strokeStyle = `rgba(74,123,196,${alpha})`;
            ctx!.lineWidth = 0.6;
            ctx!.stroke();
          }
        }
      }

      // Draw nodes
      particles.forEach((p) => {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = p.gold
          ? "rgba(212,168,48,0.75)"
          : "rgba(74,123,196,0.6)";
        ctx!.fill();

        // Move
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      });

      raf = requestAnimationFrame(draw);
    }

    init();
    draw();

    const resize = () => { init(); };
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.55 }}
    />
  );
}

/* ─── Mini sparkline ─── */
function Sparkline({ up }: { up: boolean }) {
  const pts = up
    ? "0,32 18,26 36,20 54,24 72,14 90,8 108,4"
    : "0,8 18,12 36,20 54,16 72,26 90,30 108,36";
  const c = up ? "#4ade80" : "#f87171";
  return (
    <svg width="108" height="40" viewBox="0 0 108 40" fill="none" className="opacity-80">
      <defs>
        <linearGradient id={`sg${up}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c} stopOpacity="0.35" />
          <stop offset="100%" stopColor={c} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={pts} fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const stocks = [
  { sym: "SCOM", name: "Safaricom", val: "29.80", chg: "+1.4%", up: true },
  { sym: "EQTY", name: "Equity Group", val: "52.25", chg: "+0.8%", up: true },
  { sym: "KCB", name: "KCB Group", val: "38.75", chg: "+2.1%", up: true },
  { sym: "EABL", name: "E.A. Breweries", val: "175.50", chg: "-0.5%", up: false },
];

/* ─── Slide-from-left variants ─── */
const slideLeft = {
  hidden: { opacity: 0, x: -56 },
  show: (d = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, delay: d, ease: [0.16, 1, 0.3, 1] },
  }),
};

const slideRight = {
  hidden: { opacity: 0, x: 56 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#020B18]">
      {/* ── Background layers ── */}
      <div className="absolute inset-0">
        {/* Base deep navy */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020B18] via-[#040E20] to-[#081526]" />
        {/* Animated canvas */}
        <HeroCanvas />
        {/* Gold glow top-right */}
        <div className="orb-1 absolute top-[-100px] right-[-100px] w-[640px] h-[640px] rounded-full bg-[#C49220]" style={{ filter: "blur(130px)", opacity: 0.08 }} />
        {/* Blue glow bottom-left */}
        <div className="orb-2 absolute bottom-[-80px] left-[-80px] w-[500px] h-[500px] rounded-full bg-[#1E4070]" style={{ filter: "blur(120px)", opacity: 0.18 }} />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Bottom fade to white (for transition to next section) */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#020B18]" />
      </div>

      {/* ── Hero content ── */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">

          {/* LEFT */}
          <div className="flex flex-col gap-6">
            {/* Badge — slides from left */}
            <motion.div variants={slideLeft} custom={0.15} initial="hidden" animate="show">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4A830]/35 bg-[#D4A830]/8 text-[#D4A830] text-[11px] font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A830] animate-pulse" />
                NSE Licensed · Est. 1954 · CMA Regulated
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={slideLeft}
              custom={0.28}
              initial="hidden"
              animate="show"
              className="text-5xl sm:text-6xl lg:text-[4.25rem] font-bold leading-[1.04] tracking-tight text-white"
            >
              The Future of{" "}
              <span className="shimmer-gold">Investment</span>
              <br />
              Banking in{" "}
              <br className="hidden sm:block" />
              <span className="shimmer-gold">East Africa.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={slideLeft}
              custom={0.4}
              initial="hidden"
              animate="show"
              className="text-base lg:text-lg text-white/55 leading-relaxed max-w-[440px]"
            >
              World-class brokerage, wealth management, and capital markets services — backed by seven decades of East African market expertise.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={slideLeft} custom={0.52} initial="hidden" animate="show" className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#C49220] to-[#E8C050] text-[#020B18] font-bold text-sm hover:opacity-95 transition-all duration-200 shadow-xl hover:shadow-[0_0_32px_rgba(212,168,48,0.4)] hover:scale-[1.02]"
              >
                Open an Account
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-semibold text-sm transition-all duration-200 hover:bg-white/6 backdrop-blur-sm"
              >
                Explore Products
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.div variants={slideLeft} custom={0.62} initial="hidden" animate="show" className="flex flex-wrap gap-6 pt-1">
              {[
                { icon: Shield, text: "CMA Regulated" },
                { icon: Award, text: "NSE Licensed Broker" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-white/38 text-xs font-medium">
                  <Icon size={13} className="text-[#D4A830]/65" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — dashboard widget */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="show"
            className="relative hidden lg:block"
          >
            {/* Glow */}
            <div className="absolute -inset-6 bg-gradient-to-br from-[#D4A830]/8 to-[#1E4070]/15 rounded-3xl blur-2xl" />

            {/* Card */}
            <div className="relative glass rounded-2xl p-6 shadow-2xl border-white/6">
              {/* Header row */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/35 font-semibold mb-0.5">Portfolio Overview</p>
                  <p className="text-2xl font-bold text-white">KES 4,821,340</p>
                </div>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500/12 text-green-400 text-xs font-bold">
                  <TrendingUp size={12} /> +12.4%
                </span>
              </div>

              {/* Chart */}
              <div className="relative h-[100px] mb-5 rounded-xl bg-white/3 overflow-hidden">
                <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D4A830" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#D4A830" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,80 C40,72 70,62 110,48 C150,34 170,55 210,42 C250,29 280,18 320,10 C360,3 380,8 400,5 L400,100 L0,100 Z" fill="url(#cg)" />
                  <path d="M0,80 C40,72 70,62 110,48 C150,34 170,55 210,42 C250,29 280,18 320,10 C360,3 380,8 400,5" fill="none" stroke="#D4A830" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="absolute top-2 right-3 text-[10px] text-white/28 font-medium">12-Month</span>
              </div>

              {/* Tickers */}
              <div className="space-y-1.5">
                {stocks.map((s) => (
                  <div key={s.sym} className="flex items-center justify-between py-1.5 px-2.5 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#1E4070]/70 flex items-center justify-center">
                        <span className="text-[9px] font-bold text-white/65">{s.sym.slice(0, 2)}</span>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white/88">{s.sym}</p>
                        <p className="text-[10px] text-white/32">{s.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sparkline up={s.up} />
                      <div className="text-right w-14">
                        <p className="text-xs font-semibold text-white/88">{s.val}</p>
                        <p className={`text-[10px] font-bold ${s.up ? "text-green-400" : "text-red-400"}`}>{s.chg}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating NSE chip */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-5 glass rounded-xl px-4 py-3 shadow-xl float"
            >
              <p className="text-[10px] text-white/35 uppercase tracking-wider mb-0.5">NSE 20 Share</p>
              <p className="text-sm font-bold text-white">1,824.30</p>
              <p className="text-xs text-green-400 font-bold">↑ 0.62%</p>
            </motion.div>

            {/* Floating client chip */}
            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-5 -left-5 glass rounded-xl px-4 py-3 shadow-xl border-[#D4A830]/20 float-slow"
            >
              <p className="text-[10px] text-[#D4A830]/75 uppercase tracking-wider mb-0.5">Active Clients</p>
              <p className="text-sm font-bold text-white">50,000+</p>
              <p className="text-[10px] text-white/32">East Africa</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom market ticker bar ── */}
      <div className="relative z-10 border-t border-white/8 bg-black/30 backdrop-blur-md py-2.5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="ticker-track flex gap-12 w-max px-4">
          {[...stocks, ...stocks, ...stocks].map((s, i) => (
            <div key={i} className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-xs font-bold text-white/55">{s.sym}</span>
              <span className="text-xs text-white/38">{s.val}</span>
              <span className={`text-xs font-bold ${s.up ? "text-green-400" : "text-red-400"}`}>{s.chg}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
