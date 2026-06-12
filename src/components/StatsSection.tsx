"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 70, suffix: "+", label: "Years of Excellence", sub: "Est. 1954" },
  { value: 50, suffix: "K+", label: "Active Investors", sub: "East Africa" },
  { value: 100, prefix: "KES ", suffix: "B+", label: "Assets Under Mgmt", sub: "And growing" },
  { value: 6, suffix: "", label: "Regional Markets", sub: "NSE · DSE · USE · More" },
];

function Counter({ value, suffix, prefix, inView }: { value: number; suffix: string; prefix?: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const timer = setInterval(() => {
      start += value / (1800 / 16);
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="text-4xl lg:text-5xl font-bold text-white">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-[#081526]">
      {/* Warm gold horizontal glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[120px] rounded-full bg-[#C49220]/10 blur-[80px]" />
      {/* Gold top border shimmer */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C49220]/60 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C49220]/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div className="mb-1">
                <Counter value={s.value} suffix={s.suffix} prefix={s.prefix} inView={inView} />
              </div>
              <p className="text-sm font-semibold text-white/65 mt-1">{s.label}</p>
              <p className="text-xs text-[#C49220]/60 mt-0.5">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
