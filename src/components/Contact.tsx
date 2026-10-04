"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";
import Magnetic from "@/components/Magnetic";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "hello@alexmorgan.dev";
  const lenis = useLenis();

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-[#101114] text-[#FAFAF8] pt-28 sm:py-36 lg:pt-44 pb-12 select-none overflow-hidden relative">
      {/* Subtle Ambient Radial Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[400px] bg-gradient-to-b from-[#C85A32]/[0.09] via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex flex-col justify-between min-h-[65vh] relative z-10">
        {/* TOP / HEADLINE SECTION */}
        <div>
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[0.98] tracking-[-0.03em] mb-10 sm:mb-14 max-w-4xl"
          >
            Let’s build something{" "}
            <span className="font-light italic text-[#C85A32]">
              tactile
            </span>{" "}
            together.
          </motion.h2>

          {/* Interactive Double-Bezel Email Container with Magnetic Pull */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 200, damping: 22, delay: 0.15 }}
            className="inline-block"
          >
            <Magnetic strength={0.22}>
              <div className="p-1.5 sm:p-2 rounded-full bg-white/[0.04] ring-1 ring-white/[0.08]">
                <div className="flex items-center gap-3 sm:gap-4 pl-5 sm:pl-6 pr-2 py-2 rounded-full bg-[#18191E] shadow-xl">
                  <a
                    href={`mailto:${email}`}
                    className="group flex items-center gap-3 text-lg sm:text-2xl md:text-3xl text-white font-medium hover:text-[#C85A32] transition-colors cursor-pointer"
                  >
                    <span>{email}</span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-[#C85A32]">
                      <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={1.5} />
                    </div>
                  </a>

                  <div className="w-[1px] h-6 bg-white/10" />

                  <button
                    onClick={handleCopy}
                    title="Copy email address"
                    className="px-3.5 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all text-xs font-mono flex items-center gap-1.5 active:scale-95 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#C85A32]" strokeWidth={1.5} />
                        <span className="text-[11px] text-[#C85A32]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" strokeWidth={1.5} />
                        <span className="hidden sm:inline text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </Magnetic>
          </motion.div>
        </div>

        {/* BOTTOM METADATA BAR WITH SPRING BACK-TO-TOP */}
        <div className="w-full border-t border-white/[0.08] pt-8 sm:pt-10 mt-20 sm:mt-28 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-[11px] font-mono tracking-wider text-white/50">
          <div className="flex items-center gap-4">
            <span className="text-white/80 font-semibold font-sans">ALEX MORGAN</span>
            <span>•</span>
            <span>SAN FRANCISCO, CA [PST]</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-white/40 hidden md:inline">SYSTEM ARCHITECTURE & TACTILE DESIGN</span>
            <Magnetic strength={0.3}>
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white/70 hover:text-white border border-white/[0.08] transition-all cursor-pointer active:scale-95"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 spring-physics" strokeWidth={1.5} />
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </footer>
  );
}
