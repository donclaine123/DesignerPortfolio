"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function About() {
  const capabilities = [
    {
      num: "01",
      title: "Design Systems & Token Architecture",
      desc: "Creating multi-brand Figma libraries, cross-platform variables, and component guidelines that scale cleanly across teams.",
    },
    {
      num: "02",
      title: "Product UI/UX & Interaction Design",
      desc: "Shaping complex web and mobile apps with intuitive workflows, accessible contrasts, and purposeful tactile feedback.",
    },
    {
      num: "03",
      title: "Design Engineering & Creative Motion",
      desc: "Bridging the gap to production with Next.js, Tailwind, GSAP, and physics-based microinteractions.",
    },
  ];

  return (
    <section id="about" className="bg-[#F6F5F0] py-28 sm:py-36 lg:py-44 text-[#121316] select-none overflow-hidden relative border-t border-b border-[#121316]/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* LEFT COLUMN: EDITORIAL STATEMENT & QUOTE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Headline */}
            <h2 className="font-sans text-5xl sm:text-6xl md:text-7xl font-bold text-[#121316] leading-[1.04] tracking-[-0.03em] mb-6">
              Bridging pure{" "}
              <span className="font-light italic text-[#C85A32]">
                aesthetics
              </span>{" "}
              and system precision.
            </h2>

            {/* Handwritten Thought */}
            <p className="font-handwritten text-2xl sm:text-3xl text-[#C85A32] font-bold mt-2 -rotate-1 select-none">
              "The sweet spot is where tactile craft meets engineered utility."
            </p>

            {/* Double-Bezel Mini Testimonial / Philosophy Card */}
            <div className="bezel-shell mt-10 sm:mt-12 max-w-lg w-full">
              <div className="bezel-core p-6 bg-white flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#121316] text-[#FAFAF8] flex items-center justify-center font-serif text-base italic font-semibold shrink-0">
                  A
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-[#121316]/80 font-normal leading-relaxed italic font-serif">
                    “Great digital products shouldn't feel like software. They should feel like natural extensions of human thought.”
                  </p>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#121316]/50 block mt-2">
                    Alex Morgan: Principal Designer
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: CORE CAPABILITIES WITH SPRING INTERACTIONS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 180, damping: 22, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col justify-start lg:pt-4"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#121316]/50 block mb-4 font-mono">
              CORE CAPABILITIES
            </span>

            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#121316] leading-snug tracking-tight mb-4 max-w-xl">
              I operate at the intersection of how digital products look, how they feel, and how they behave under load.
            </h3>

            <p className="text-sm sm:text-base text-[#121316]/70 font-normal leading-relaxed max-w-xl mb-8 sm:mb-10">
              With 8+ years across high-growth startups and established brands, I prioritize spatial tension, rigorous accessibility, and component reusability over ephemeral trends.
            </p>

            {/* Interactive Capability Bento List */}
            <div className="space-y-4 w-full">
              {capabilities.map((item, idx) => (
                <div
                  key={item.num}
                  className="group p-1.5 rounded-2xl bg-black/[0.02] ring-1 ring-black/[0.04] hover:bg-black/[0.04] hover:ring-black/[0.08] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                >
                  <div className="p-5 rounded-xl bg-white shadow-xs group-hover:-translate-y-0.5 spring-physics">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-[#C85A32]">
                          {item.num}
                        </span>
                        <h4 className="font-sans font-bold text-base sm:text-lg text-[#121316] tracking-tight">
                          {item.title}
                        </h4>
                      </div>
                      <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#121316] group-hover:translate-x-1 spring-physics" strokeWidth={1.5} />
                    </div>
                    <p className="text-xs sm:text-sm text-[#121316]/65 pl-7 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
