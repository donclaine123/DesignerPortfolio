"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Layers, Zap } from "lucide-react";

export default function Approach() {
  const steps = [
    {
      num: "PHASE 01",
      icon: Compass,
      tag: "Discovery & Insight",
      title: "Start with human truth.",
      desc: "Uncovering the friction points that metrics conceal. Mapping mental models and user intent before sketching a single screen.",
      deliverables: ["User Journey Archetypes", "Friction Audit", "Core Metric Definition"],
    },
    {
      num: "PHASE 02",
      icon: Layers,
      tag: "System Architecture",
      title: "Shape the living system.",
      desc: "Developing structured design tokens, accessible color hierarchies, and modular components engineered to scale across engineering teams.",
      deliverables: ["Tokenized Figma Library", "Concentric Spacing Grids", "WCAG 2.1 AA Compliance"],
    },
    {
      num: "PHASE 03",
      icon: Zap,
      tag: "Motion & Craft",
      title: "Bring tactile life.",
      desc: "Choreographing purposeful spring motion and haptic microinteractions that feel physically grounded rather than digitally artificial.",
      deliverables: ["GSAP / Framer Motion", "Kinetic Feedback Loops", "Fluid Spatial Transitions"],
    },
  ];

  return (
    <section id="approach" className="bg-[#121316] py-28 sm:py-36 lg:py-44 text-[#FAFAF8] select-none overflow-hidden relative">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#C85A32]/[0.08] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        {/* HEADER: STACKED EDITORIAL TYPOGRAPHY */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold text-white leading-[1.02] tracking-[-0.03em] mb-5">
            Good design has an{" "}
            <span className="font-light italic text-[#C85A32]">
              architectural
            </span>{" "}
            reason.
          </h2>

          <p className="max-w-[60ch] text-base sm:text-lg text-white/65 font-normal leading-relaxed">
            Every token, radius, and spring curve is calibrated to reduce cognitive burden while cultivating emotional resonance.
          </p>
        </div>

        {/* 3-COLUMN DOUBLE-BEZEL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{ type: "spring", stiffness: 200, damping: 22, delay: idx * 0.12 }}
                className="group p-2 rounded-[2.25rem] bg-white/[0.03] ring-1 ring-white/[0.08] hover:bg-white/[0.06] hover:ring-white/[0.14] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                <div className="rounded-[calc(2.25rem-0.5rem)] bg-[#18191E] p-8 sm:p-9 flex flex-col justify-between h-full border border-white/[0.04] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] group-hover:-translate-y-1 spring-physics">
                  <div>
                    {/* Top Row: Phase + Icon Pill */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/40">
                        {step.num}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 spring-physics">
                        <Icon className="w-4 h-4 text-[#C85A32]" strokeWidth={1.5} />
                      </div>
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C85A32] block mb-2 font-sans">
                      {step.tag}
                    </span>

                    <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug mb-4">
                      {step.title}
                    </h3>

                    <p className="text-sm text-white/60 leading-relaxed font-normal mb-8">
                      {step.desc}
                    </p>
                  </div>

                  {/* Deliverable Micro-Tags */}
                  <div className="pt-6 border-t border-white/[0.06]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/35 block mb-2.5">
                      Key Deliverables
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {step.deliverables.map((item, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-2.5 py-1 rounded-full bg-white/[0.04] text-[10px] font-sans font-medium text-white/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
