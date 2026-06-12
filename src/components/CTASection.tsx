"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Split: left = dark navy, right = gold-tinted white */}
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="bg-[#081526]" />
        <div className="bg-[#FDF6E3]" />
      </div>
      {/* Top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-[#C49220]/40 via-[#E8C050] to-[#C49220]/40" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — dark panel */}
          <motion.div
            initial={{ opacity: 0, x: -55 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-[#D4A830]/80 font-bold mb-5">
              Get Started
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.05] mb-5">
              Ready to build wealth
              <br />
              <span className="shimmer-gold">the right way?</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Join over 50,000 investors who trust Dyer &amp; Blair to grow and protect their wealth across East Africa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#C49220] to-[#E8C050] text-[#020B18] font-bold text-sm hover:opacity-95 transition-all duration-200 shadow-xl hover:shadow-[0_0_36px_rgba(212,168,48,0.4)] hover:scale-[1.02]"
              >
                Open a Free Account
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white/75 hover:text-white hover:border-white/35 font-semibold text-sm transition-all duration-200"
              >
                Talk to an Advisor
              </Link>
            </div>
          </motion.div>

          {/* RIGHT — warm white panel with contact details */}
          <motion.div
            initial={{ opacity: 0, x: 55 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#C49220] font-bold mb-5">Contact Us</p>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: "+254 (0) 709 930 000", href: "tel:+254709930000" },
                  { icon: Mail, label: "shares@dyerandblair.com", href: "mailto:shares@dyerandblair.com" },
                  { icon: MapPin, label: "7th Floor, Goodman Tower, off Waiyaki Way, Nairobi", href: "#" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#FDF0D0] border border-[#C49220]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C49220]/15 transition-colors">
                      <Icon size={15} className="text-[#C49220]" />
                    </div>
                    <span className="text-sm text-[#4A6080] group-hover:text-[#081526] transition-colors pt-2 leading-snug">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-[#E0D0A8]/50">
              <p className="text-xs text-[#8090A8]">
                Office hours: Monday – Friday, 8:00 AM – 5:00 PM EAT
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
