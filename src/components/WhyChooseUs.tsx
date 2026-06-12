"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Zap, Globe, HeartHandshake, Landmark, Award } from "lucide-react";

const reasons = [
  { icon: Landmark, title: "70 Years of Trust", desc: "At the forefront of East African capital markets since 1954 — navigating every cycle with discipline and integrity." },
  { icon: Globe, title: "Pan-East African Reach", desc: "Deep local expertise across Kenya, Tanzania, Uganda, Rwanda and beyond with on-the-ground intelligence." },
  { icon: Shield, title: "Regulated & Transparent", desc: "Fully regulated by Kenya's Capital Markets Authority and licensed by the Nairobi Securities Exchange." },
  { icon: Zap, title: "Technology-First", desc: "The Edge App and Online Trading Platform bring institutional-grade tools directly to your fingertips." },
  { icon: HeartHandshake, title: "Client-First Philosophy", desc: "Our incentives are fully aligned with your outcomes. We succeed only when our clients succeed." },
  { icon: Award, title: "Award-Winning Research", desc: "Comprehensive capital markets analysis trusted by leading institutional investors across the region." },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="company" ref={ref} className="relative py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#E8F0FA]/70 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-[#C49220] font-bold mb-4">
            Why Dyer &amp; Blair
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#081526] leading-tight">
            The investment partner
            <br />
            <span className="gradient-gold">East Africa trusts</span>
          </h2>
          <div className="mt-5 w-14 h-1 rounded-full bg-gradient-to-r from-[#C49220] to-[#E8C050]" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, x: -45 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.09 + 0.15, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-[#F7F9FC] rounded-2xl p-6 border border-[#E0E8F4] hover:border-[#C49220]/30 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E8F0FA] border border-[#1E4070]/10 flex items-center justify-center mb-5 group-hover:bg-[#FDF6E3] group-hover:border-[#C49220]/20 transition-all duration-300">
                <r.icon size={18} className="text-[#1E4070] group-hover:text-[#C49220] transition-colors duration-300" />
              </div>
              <h4 className="text-sm font-bold text-[#081526] mb-2.5">{r.title}</h4>
              <p className="text-sm text-[#7090B0] leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
