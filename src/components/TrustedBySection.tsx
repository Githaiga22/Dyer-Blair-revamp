"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const institutions = [
  "Kenya National Treasury",
  "NSSF Kenya",
  "Centum Investment",
  "Britam Asset Managers",
  "Old Mutual Kenya",
  "Jubilee Holdings",
  "ICEA LION Group",
  "CIC Insurance Group",
];

export default function TrustedBySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-16 overflow-hidden border-y border-white/5"
    >
      <div className="absolute inset-0 bg-[#051020]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-[11px] uppercase tracking-[0.25em] text-white/30 font-semibold mb-10"
        >
          Trusted by leading institutions across East Africa
        </motion.p>

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="ticker-track flex gap-16 w-max">
            {[...institutions, ...institutions].map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-3 whitespace-nowrap"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4A830]/50" />
                <span className="text-sm font-semibold text-white/35 hover:text-white/65 transition-colors cursor-default">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
