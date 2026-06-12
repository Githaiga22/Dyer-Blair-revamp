"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "Products",
    href: "#products",
    children: ["Brokerage", "Investment Banking", "Private Wealth", "Asset Management"],
  },
  { label: "Markets", href: "#markets" },
  { label: "Wealth", href: "#wealth" },
  { label: "Research", href: "#research" },
  { label: "Insights", href: "#insights" },
  { label: "Company", href: "#company" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#081526]/90 backdrop-blur-xl border-b border-white/8 shadow-2xl"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden ring-1 ring-[#D4A830]/30 group-hover:ring-[#D4A830]/60 transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt="Dyer & Blair"
                  fill
                  className="object-contain p-0.5"
                  priority
                />
              </div>
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-white font-bold text-sm tracking-wider uppercase">
                  Dyer &amp; Blair
                </span>
                <span className="text-[10px] text-[#D4A830]/80 uppercase tracking-[0.15em] font-medium">
                  Investment Bank
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm text-white/70 hover:text-white font-medium transition-colors duration-200 rounded-lg hover:bg-white/5"
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          activeDropdown === link.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 mt-2 w-52 glass rounded-xl p-2 shadow-2xl"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child}
                            href="#"
                            className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-150"
                          >
                            {child}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="#"
                className="px-4 py-2 text-sm text-white/70 hover:text-white font-medium transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                href="#"
                className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-[#C49220] to-[#E8C050] text-[#020B18] hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-[0_0_20px_rgba(212,168,48,0.3)]"
              >
                Open Account
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] z-40 glass border-b border-white/5 lg:hidden"
          >
            <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-white/80 hover:text-white font-medium rounded-xl hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/5">
                <Link
                  href="#"
                  className="text-center py-3 text-white/70 font-medium hover:text-white transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="#"
                  className="text-center py-3 font-semibold rounded-xl bg-gradient-to-r from-[#C49220] to-[#E8C050] text-[#020B18]"
                >
                  Open Account
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
