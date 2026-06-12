"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Dyer & Blair has been our broker of choice for over a decade. Their research insights and the responsiveness of our relationship manager have been instrumental in achieving our portfolio objectives year after year.",
    name: "Chief Investment Officer",
    title: "Leading East African Pension Fund",
    initial: "C",
  },
  {
    quote: "When we decided to list on the NSE, Dyer & Blair's investment banking team provided exceptional structuring expertise. Their deep market knowledge and institutional relationships made the entire process seamless.",
    name: "Chief Financial Officer",
    title: "Nairobi-Listed Manufacturing Company",
    initial: "F",
  },
  {
    quote: "The Dyer & Blair Edge App has completely transformed how I manage my portfolio. Real-time NSE data, instant execution, clean research reports — all on my phone. A genuinely world-class experience.",
    name: "Private Client",
    title: "Nairobi, Kenya",
    initial: "A",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section ref={ref} className="relative py-24 bg-[#F7F9FC] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#C49220]/6 blur-[100px]" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-[#C49220] font-bold mb-4">
            Client Perspectives
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#081526] leading-tight">
            Trusted by those who
            <br />
            <span className="gradient-gold">demand the best</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-[#E0E8F4]"
        >
          <Quote size={36} className="text-[#C49220]/20 absolute top-8 left-10" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-lg lg:text-xl text-[#4A6080] leading-relaxed mb-8 italic">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#C49220] to-[#E8C050] flex items-center justify-center shadow-md">
                  <span className="text-sm font-bold text-[#020B18]">{testimonials[active].initial}</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-[#081526]">{testimonials[active].name}</p>
                  <p className="text-xs text-[#7090B0]">{testimonials[active].title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-9 h-9 rounded-full border border-[#E0E8F4] hover:border-[#C49220]/40 flex items-center justify-center text-[#7090B0] hover:text-[#081526] transition-all duration-200">
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "bg-[#C49220] w-6" : "bg-[#D0DCF0] w-1.5"}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-9 h-9 rounded-full border border-[#E0E8F4] hover:border-[#C49220]/40 flex items-center justify-center text-[#7090B0] hover:text-[#081526] transition-all duration-200">
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
