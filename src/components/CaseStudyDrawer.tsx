"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Check, Sparkles, Copy } from "lucide-react";

export interface CaseStudyData {
  id: string;
  title: string;
  client: string;
  role: string;
  timeline: string;
  category: string;
  overview: string;
  metrics: { label: string; value: string; note: string }[];
  challenge: string;
  solution: string;
  tokens: { name: string; value: string }[];
  highlights: string[];
}

interface CaseStudyDrawerProps {
  study: CaseStudyData | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyDrawer({ study, isOpen, onClose }: CaseStudyDrawerProps) {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  // Prevent background page scrolling while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopyToken = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedToken(hex);
    setTimeout(() => setCopiedToken(null), 1800);
  };

  return (
    <AnimatePresence>
      {isOpen && study && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* SLIDING DRAWER CONTAINER */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            role="dialog"
            aria-modal="true"
            aria-label={study.title}
            data-lenis-prevent="true"
            className="relative w-full max-w-2xl h-screen max-h-[100dvh] bg-[#FAF9F5] shadow-[-24px_0_64px_rgba(0,0,0,0.22)] z-10 flex flex-col justify-between overflow-hidden border-l border-black/[0.08]"
          >
            {/* TOP BAR / DISMISS BUTTON */}
            <div className="px-6 sm:px-10 py-5 flex items-center justify-between border-b border-black/[0.06] bg-[#FAF9F5]/95 backdrop-blur-md shrink-0 z-20">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C85A32]" />
                <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#121316]/70">
                  {study.category}
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close Case Study"
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] hover:bg-black/[0.08] text-[#121316] transition-all cursor-pointer active:scale-95 text-xs font-semibold uppercase tracking-wider"
              >
                <span>Close</span>
                <div className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                  <X className="w-3.5 h-3.5" strokeWidth={1.5} />
                </div>
              </button>
            </div>

            {/* SCROLLABLE BODY CONTENT */}
            <div
              data-lenis-prevent="true"
              className="flex-1 overflow-y-auto overscroll-contain min-h-0 px-6 sm:px-10 py-8 space-y-10"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {/* HEADER BLOCK */}
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#121316]/50 block mb-2">
                  {study.client} • {study.timeline}
                </span>
                <h3 className="font-sans text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-[#121316] tracking-tight leading-[1.12] mb-4">
                  {study.title}
                </h3>
                <p className="font-sans text-base sm:text-lg text-[#121316]/75 leading-relaxed font-normal">
                  {study.overview}
                </p>
              </div>

              {/* METRICS SHOWCASE BENTO */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#121316]/50 block mb-3 font-semibold">
                  VERIFIED IMPACT & OUTCOMES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {study.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="p-1 rounded-2xl bg-black/[0.02] ring-1 ring-black/[0.05]"
                    >
                      <div className="p-4 rounded-xl bg-white shadow-xs">
                        <span className="font-sans font-black text-2xl sm:text-3xl text-[#121316] tracking-tight block">
                          {metric.value}
                        </span>
                        <span className="font-sans text-xs font-semibold text-[#121316] block mt-0.5">
                          {metric.label}
                        </span>
                        <span className="text-[10px] text-neutral-400 font-mono block mt-1">
                          {metric.note}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* THE CHALLENGE & THE ARCHITECTURAL SOLUTION */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#EBEAE5]/60 border border-black/[0.04]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#C85A32] font-semibold block mb-2">
                    01 / The Friction
                  </span>
                  <p className="text-xs sm:text-sm text-[#121316]/80 leading-relaxed font-normal">
                    {study.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-black/[0.05] shadow-xs">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#1A6B3A] font-semibold block mb-2">
                    02 / The Solution
                  </span>
                  <p className="text-xs sm:text-sm text-[#121316]/80 leading-relaxed font-normal">
                    {study.solution}
                  </p>
                </div>
              </div>

              {/* DESIGN SYSTEM TOKENS */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#121316]/50 font-semibold">
                    CALIBRATED DESIGN TOKENS
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">Click to copy HEX</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {study.tokens.map((token, tIdx) => {
                    const isCopied = copiedToken === token.value;
                    return (
                      <button
                        key={tIdx}
                        onClick={() => handleCopyToken(token.value)}
                        className="group p-2.5 rounded-xl bg-white border border-black/[0.06] flex flex-col justify-between hover:border-black/25 transition-all text-left cursor-pointer active:scale-95 shadow-xs"
                      >
                        <div
                          style={{ backgroundColor: token.value }}
                          className="w-full h-9 rounded-lg mb-2 border border-black/10 shadow-inner"
                        />
                        <span className="text-[11px] font-sans font-semibold text-[#121316] truncate block">
                          {token.name}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500 flex items-center justify-between mt-1">
                          <span>{token.value}</span>
                          {isCopied ? (
                            <Check className="w-3 h-3 text-[#1A6B3A]" />
                          ) : (
                            <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ARCHITECTURAL HIGHLIGHTS */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#121316]/50 block mb-3 font-semibold">
                  SYSTEM HIGHLIGHTS & ACCESSIBILITY
                </span>
                <div className="space-y-2.5">
                  {study.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 p-3.5 rounded-xl bg-black/[0.02] border border-black/[0.04]">
                      <div className="w-5 h-5 rounded-full bg-[#C85A32]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#121316]/80 font-normal leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FOOTER ACTION BAR */}
            <div className="px-6 sm:px-10 py-4 border-t border-black/[0.06] bg-[#FAF9F5] flex items-center justify-between gap-4 shrink-0 z-20">
              <span className="text-[11px] font-mono text-neutral-400">
                ROLE: {study.role}
              </span>

              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#121316] text-[#FAFAF8] text-xs font-semibold tracking-wider uppercase shadow-sm hover:bg-[#22252B] transition-colors cursor-pointer active:scale-95"
              >
                <span>Back to Overview</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
