"use client";

import Image from "next/image";
import Link from "next/link";
import { Twitter, Linkedin, Facebook } from "lucide-react";

const footerLinks = {
  Products: ["Brokerage Services", "Investment Banking", "Private Wealth", "Asset Management", "Online Trading"],
  Research: ["Equity Research", "Fixed Income", "Macro Strategy", "Company Profiles", "Economic Updates"],
  Company: ["About Us", "Leadership", "Careers", "News & Media", "Contact Us"],
  Legal: ["Privacy Policy", "Terms of Service", "Regulatory Disclosures", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#020B18] border-t border-white/5 overflow-hidden">
      {/* Gold shimmer top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C49220]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] rounded-full bg-[#1E4070]/10 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 py-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden ring-1 ring-[#D4A830]/30 group-hover:ring-[#D4A830]/55 transition-all">
                <Image src="/logo.png" alt="Dyer & Blair" fill className="object-contain p-0.5" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-sm tracking-wider uppercase">Dyer &amp; Blair</span>
                <span className="text-[10px] text-[#D4A830]/65 uppercase tracking-[0.15em] font-medium">Investment Bank</span>
              </div>
            </Link>
            <p className="text-sm text-white/30 leading-relaxed mb-5 max-w-xs">
              East Africa&rsquo;s premier investment bank. Regulated by the Capital Markets Authority of Kenya and licensed by the NSE since 1954.
            </p>
            <div className="flex items-center gap-1">
              {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg flex items-center justify-center text-white/28 hover:text-white/65 hover:bg-white/6 transition-all duration-200">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-5">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-white/28 hover:text-white/65 transition-colors duration-150">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Dyer and Blair Investment Bank Limited. All rights reserved.
          </p>
          <p className="text-[11px] text-white/14 max-w-xl text-center sm:text-right">
            Regulated by the CMA of Kenya. Investment carries risk. Past performance is not indicative of future results. This website is for informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
