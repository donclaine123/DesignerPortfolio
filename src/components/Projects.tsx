"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Check, ArrowUpRight, Sparkles, Eye, ArrowRight, Layers, Smartphone, Radio } from "lucide-react";
import CaseStudyDrawer, { CaseStudyData } from "./CaseStudyDrawer";

function ParallaxFloat({
  children,
  offset = 24,
  className = "",
}: {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}

const caseStudies: Record<string, CaseStudyData> = {
  kin: {
    id: "kin",
    title: "Kin: Holistic Habit Architecture",
    client: "Kin Wellbeing Inc.",
    role: "Lead Product Designer & Design Engineer",
    timeline: "6 Months • iOS & Android",
    category: "Mobile Application • Behavioral UX",
    overview:
      "Kin is an ambient habit companion created to counter the notification fatigue of modern wellness apps. Rather than relying on gamified streak pressure, Kin introduces a tactile, low-cognitive-load ritual that rewards mindful presence.",
    metrics: [
      { label: "Day 30 Retention", value: "+38%", note: "vs industry average of 14%" },
      { label: "Log Completion", value: "1.2s", note: "single-handed thumb reach" },
      { label: "App Store Rating", value: "4.9★", note: "18,400+ verified reviews" },
    ],
    challenge:
      "Traditional health trackers create guilt spirals with rigid daily streaks and intrusive push alerts. Over 62% of initial users reported abandon within 14 days due to notification exhaustion.",
    solution:
      "Engineered an asynchronous 'Focus Rhythm' model with tactile haptic feedback, fluid concentric cards, and localized progress states that adapt to the user's natural circadian rhythm rather than arbitrary 24h reset timers.",
    tokens: [
      { name: "Forest Primary", value: "#0E2818" },
      { name: "Sage Surface", value: "#E2EFE4" },
      { name: "Accent Terracotta", value: "#C85A32" },
      { name: "Warm Base", value: "#FAF9F5" },
    ],
    highlights: [
      "Dynamic Island & Live Activities integration for glanceable progress without app opening",
      "Zero-latency optimistic state updates with offline encrypted SQLite sync",
      "WCAG AAA contrast ratings across all daytime and low-luminance night modes",
      "Designed and coded with React Native & Custom Swift microinteractions",
    ],
  },
  northstar: {
    id: "northstar",
    title: "NorthStar: Cloud Telemetry Platform",
    client: "NorthStar Cloud Systems",
    role: "Staff Design Systems Architect",
    timeline: "8 Months • Web & Desktop",
    category: "Enterprise SaaS • Cloud Telemetry",
    overview:
      "A mission-critical observability engine that transforms petabytes of distributed server telemetry into prioritized human signals for DevOps engineers, Site Reliability Engineers, and infrastructure leads.",
    metrics: [
      { label: "Mean Time to Resolve", value: "-42%", note: "incident triage speed" },
      { label: "Sustained Throughput", value: "1.4M/s", note: "real-time events visualized" },
      { label: "Daily Active Eng", value: "14,000+", note: "across enterprise teams" },
    ],
    challenge:
      "Engineers were drowning in noisy alerts and disjointed Grafana dashboards during critical production outages. High cognitive load led to false alarms and delayed incident response.",
    solution:
      "Created a dense yet scannable information hierarchy with contextual drill-downs, tokenized micro-charts, and high-contrast OLED night mode optimized for multi-monitor command centers.",
    tokens: [
      { name: "Midnight Canvas", value: "#0E151E" },
      { name: "Telemetry Cyan", value: "#38BDF8" },
      { name: "Alert Crimson", value: "#EF4444" },
      { name: "Deep Surface", value: "#1B2735" },
    ],
    highlights: [
      "Custom SVG charting library with sub-16ms GPU render loops via WebGL",
      "Keyboard-first command palette (Cmd + K) for instantaneous query filtering",
      "Multi-tenant design token distribution via automated CI/CD npm packages",
      "Strict data visualization rules based on perceptual contrast and colorblind ergonomics",
    ],
  },
  stillhere: {
    id: "stillhere",
    title: "Still Here: Spatial Publishing House",
    client: "Still Here Media",
    role: "Creative Director & Frontend Engineer",
    timeline: "4 Months • Web Platform",
    category: "Editorial Media • Interactive Storytelling",
    overview:
      "An award-winning digital editorial magazine celebrating tactile printing traditions in an ethereal web environment. Built with Golden Ratio margin proportions, responsive fluid typography, and paper-grain overlays.",
    metrics: [
      { label: "Avg Session Duration", value: "6m 40s", note: "longform reading focus" },
      { label: "Lighthouse Performance", value: "100/100", note: "perfect core web vitals" },
      { label: "Industry Honors", value: "Awwwards SOTD", note: "FWA & Red Dot Best of Best" },
    ],
    challenge:
      "Modern web publishing has degraded into ad-choked layouts with jarring layout shifts, bloated tracking scripts, and lifeless typographic grids.",
    solution:
      "Designed a distraction-free editorial layout featuring proportional Golden Ratio margins, custom variable fonts, and smooth chapter transition curves that celebrate longform immersion.",
    tokens: [
      { name: "Linen Warm", value: "#F5EDE4" },
      { name: "Espresso Text", value: "#3B1C13" },
      { name: "Terracotta Accent", value: "#C85A32" },
      { name: "Muted Bone", value: "#E5D7C5" },
    ],
    highlights: [
      "Scroll-driven progress bar with chapter indexing and reading estimate tracker",
      "Zero layout shift (CLS: 0.00) with responsive fluid typography",
      "Audio narration integration with synchronized ambient text highlights",
      "Custom Lenis virtual scroll interpolation for silky smooth physical momentum",
    ],
  },
  prism: {
    id: "prism",
    title: "Prism: Multi-Brand Design Token Engine",
    client: "Prism Developer Systems",
    role: "Principal Systems Designer",
    timeline: "5 Months • Web Platform",
    category: "Design Tooling • Token Architecture",
    overview:
      "An automated design-token compiler bridging Figma variable collections directly into production npm packages for iOS, Android, and Web.",
    metrics: [
      { label: "Token Sync Speed", value: "2.4s", note: "Figma to GitHub PR" },
      { label: "Design Drift", value: "-94%", note: "component divergence eliminated" },
      { label: "Active Engineers", value: "1,200+", note: "across 4 engineering orgs" },
    ],
    challenge:
      "Enterprise design libraries were out of sync with codebases, leading to manual QA cycles, broken color modes, and inconsistent spacing tokens.",
    solution:
      "Built a bidirectional pipeline that translates Figma variables into platform-agnostic Style Dictionary tokens with automated linting and pull requests.",
    tokens: [
      { name: "Prism Indigo", value: "#6366F1" },
      { name: "Terminal Dark", value: "#0B0F19" },
      { name: "Neon Violet", value: "#8B5CF6" },
      { name: "Surface Tint", value: "#1E293B" },
    ],
    highlights: [
      "Bidirectional Figma REST API synchronization webhook",
      "Automated WCAG contrast scoring before token merge approval",
      "Zero-runtime CSS variable injection with Tree-shaking support",
      "Comprehensive interactive token inspector documentation site",
    ],
  },
  stride: {
    id: "stride",
    title: "Stride: Ambient Run Tracking & Audio Coaching",
    client: "Stride Athletics Inc.",
    role: "Lead Product Designer & Prototyper",
    timeline: "4 Months • iOS & Apple Watch",
    category: "Mobile Application • Sports UX",
    overview:
      "A distraction-free running companion designed around audio cues and peripheral haptics, keeping runners focused on road cadence rather than screen staring.",
    metrics: [
      { label: "Run Completion", value: "+29%", note: "coached cadence retention" },
      { label: "Eye-to-Screen Time", value: "-72%", note: "per 5k outdoor workout" },
      { label: "App Store Feature", value: "App of Day", note: "featured in 38 countries" },
    ],
    challenge:
      "Traditional fitness apps require runners to glance down at complex statistics during high-intensity intervals, increasing injury risk and breaking flow.",
    solution:
      "Created an ambient haptic rhythm system that taps the wrist when pacing slips, supported by glanceable Dynamic Island progress beads.",
    tokens: [
      { name: "Kinetic Amber", value: "#F97316" },
      { name: "Asphalt Canvas", value: "#121417" },
      { name: "Reflective Lime", value: "#84CC16" },
      { name: "Mist Grey", value: "#E5E7EB" },
    ],
    highlights: [
      "Custom Swift haptic engine with bespoke rhythmic waveforms",
      "Dynamic Island & Always-on Display pacing ring animation",
      "VoiceOver accessibility paired with spatial audio cues",
      "Zero battery drain background GPS telemetry engine",
    ],
  },
  aura: {
    id: "aura",
    title: "Aura: Spatial Audio & Soundstage Interface",
    client: "Aura Acoustic Labs",
    role: "Audio UX Designer & Design Technologist",
    timeline: "6 Months • macOS & VisionOS",
    category: "Pro Audio Software • Spatial UX",
    overview:
      "A next-generation soundstage controller for music producers and spatial mix engineers, delivering physical mixing desk ergonomics on digital displays.",
    metrics: [
      { label: "Latency Benchmark", value: "<12ms", note: "real-time spatial rendering" },
      { label: "Mix Speed", value: "+34%", note: "binaural positioning triage" },
      { label: "Studio Adoption", value: "480+", note: "recording studios worldwide" },
    ],
    challenge:
      "Surround sound positioning software relied on unintuitive 3D coordinate sliders that felt foreign to sound engineers used to physical hardware faders.",
    solution:
      "Designed a circular acoustic dome interface with direct-manipulation sound objects, real-time frequency heatmaps, and physical keyboard shortcuts.",
    tokens: [
      { name: "Studio Charcoal", value: "#14161B" },
      { name: "Acoustic Emerald", value: "#10B981" },
      { name: "Phosphor Amber", value: "#F59E0B" },
      { name: "Sub Surface", value: "#1E222B" },
    ],
    highlights: [
      "Custom WebGL spherical soundstage canvas running at 120fps",
      "Tactile rotary knob simulation with velocity-sensitive acceleration",
      "Seamless export presets for Dolby Atmos and Apple Spatial Audio",
      "Tested and refined in partnership with award-winning mastering engineers",
    ],
  },
};

interface ArchiveProject {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  client: string;
  discipline: string;
  year: string;
  metric: string;
  accent: string;
  icon: React.ElementType;
}

const archiveProjects: ArchiveProject[] = [
  {
    id: "prism",
    num: "04",
    title: "Prism",
    subtitle: "Automated design token compiler & variable CI/CD",
    client: "Prism Systems",
    discipline: "Design Tokens • CI/CD",
    year: "2024",
    metric: "2.4s sync",
    accent: "#6366F1",
    icon: Layers,
  },
  {
    id: "stride",
    num: "05",
    title: "Stride",
    subtitle: "Ambient run pacing via Dynamic Island & haptics",
    client: "Stride Running",
    discipline: "iOS • Sports UX",
    year: "2023",
    metric: "+29% retention",
    accent: "#F97316",
    icon: Smartphone,
  },
  {
    id: "aura",
    num: "06",
    title: "Aura",
    subtitle: "Hardware-calibrated spatial audio soundstage mixer",
    client: "Aura Labs",
    discipline: "Spatial Audio • macOS",
    year: "2023",
    metric: "<12ms latency",
    accent: "#10B981",
    icon: Radio,
  },
];

export default function Projects() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudyData | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<ArchiveProject | null>(null);

  // Floating cursor tracking for archive preview
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);
  const springX = useSpring(mouseX, { stiffness: 350, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 350, damping: 28 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX + 24);
    mouseY.set(e.clientY - 40);
  };

  const openDrawer = (studyKey: string) => {
    const study = caseStudies[studyKey];
    if (study) {
      setSelectedStudy(study);
      setIsDrawerOpen(true);
    }
  };

  return (
    <section id="projects" className="py-28 sm:py-36 lg:py-44 bg-[#FAFAF8] overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        {/* SECTION HEADER: EYEBROW + EDITORIAL STACKED HEADLINE */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          {/* Curated Eyebrow (1 per 3 sections) */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121316]/[0.04] text-[11px] font-mono tracking-wider uppercase text-[#121316]/70 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
            <span>01 / Selected Works</span>
          </div>

          {/* Unified Typography Headline (no mixed-family serif clash) */}
          <h2 className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold text-[#121316] leading-[1.02] tracking-[-0.03em] mb-5">
            Built with <span className="font-light italic text-[#C85A32]">intention</span> and precision.
          </h2>

          <p className="max-w-[62ch] text-base sm:text-lg text-[#121316]/65 font-normal leading-relaxed mb-4">
            Selected case studies exploring systemized UX, tactile mobile experiences, and data clarity for modern platforms.
          </p>

          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#121316]/60">
            <Eye className="w-3.5 h-3.5 text-[#C85A32]" strokeWidth={1.5} />
            <span>Click any project card to inspect deep dive</span>
          </div>
        </div>

        {/* 1. FEATURED HERO BENTO: KIN (Double-Bezel Architecture) */}
        <div className="mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            onClick={() => openDrawer("kin")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openDrawer("kin");
              }
            }}
            className="bezel-shell group cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C85A32] focus-visible:outline-none"
          >
            <div className="bezel-core p-8 sm:p-12 md:p-16 relative overflow-hidden bg-gradient-to-br from-[#E2EFE4] via-[#D5E9D8] to-[#C7E0CC] flex flex-col md:flex-row justify-between items-start md:items-end min-h-[500px] lg:min-h-[560px]">
              {/* Ambient radial blur */}
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none" />

              {/* Left Column: Big Title, Meta & Nested Island CTA */}
              <div className="flex flex-col justify-between h-full z-10 w-full md:w-1/2 min-h-[220px] md:min-h-[380px]">
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] uppercase text-[#1B432A]/70 mb-4">
                    <span>CASE STUDY 01</span>
                    <span>•</span>
                    <span>HEALTH & HABITS</span>
                  </div>

                  <h3 className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#0E2818] tracking-[-0.04em] leading-none mb-4">
                    Kin<span className="text-[#C85A32]">.</span>
                  </h3>

                  <p className="font-serif italic text-lg sm:text-xl text-[#1B432A] max-w-sm leading-snug">
                    Everyday wellbeing, made intuitively calmer.
                  </p>
                </div>

                <div className="mt-8 md:mt-auto">
                  <div className="inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-[#0E2818] text-[#FAFAF8] text-[11px] font-semibold tracking-[0.14em] uppercase shadow-md transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-105">
                    <span>Inspect Case Study</span>
                    <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#FAFAF8]" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Precision Tactile Phone Mockup */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-end items-end mt-10 md:mt-0 relative z-10">
                <ParallaxFloat offset={24} className="w-full flex justify-center md:justify-end">
                  <div className="relative w-[240px] sm:w-[280px] md:w-[320px] aspect-[9/18] rounded-[2.8rem] p-2 bg-[#121B15] shadow-[0_32px_64px_-16px_rgba(14,40,24,0.35)] transform rotate-1 group-hover:rotate-0 group-hover:scale-[1.03] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] origin-bottom-right">
                    {/* Outer Bezel Rim */}
                    <div className="w-full h-full rounded-[2.3rem] bg-white overflow-hidden flex flex-col justify-between p-5 relative border border-black/5">
                      {/* Speaker notch */}
                      <div className="w-20 h-4 bg-[#121B15] rounded-full mx-auto mb-4" />

                      <div>
                        <span className="text-[10px] font-mono tracking-widest uppercase text-[#1B432A]/70 block mb-1">
                          Daily Milestone
                        </span>
                        <h4 className="text-xl sm:text-2xl font-bold text-[#121316] leading-tight tracking-tight">
                          A mindful day<br />
                          <span className="text-[#1A6B3A] font-light italic">unfolds naturally.</span>
                        </h4>

                        {/* Rhythm Card */}
                        <div className="mt-4 p-3.5 bg-[#E6F4E8] rounded-2xl border border-[#D0EBD4]">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-semibold text-[#1A6B3A] tracking-wide">
                              Focus Rhythm
                            </span>
                            <span className="text-[10px] font-mono font-bold text-[#1A6B3A]">
                              82%
                            </span>
                          </div>
                          <div className="w-full h-2 bg-[#1A6B3A]/20 rounded-full mt-2.5 overflow-hidden">
                            <div className="w-4/5 h-full bg-[#1A6B3A] rounded-full transition-all duration-700" />
                          </div>
                        </div>

                        {/* Task Pill List */}
                        <div className="mt-4 space-y-2">
                          {[
                            { title: "Deep breathing session", done: true },
                            { title: "Review product design tokens", done: true },
                            { title: "20m Outdoor walk", done: false },
                          ].map((t, idx) => (
                            <div key={idx} className="flex items-center gap-2.5 p-2 bg-neutral-50 rounded-xl border border-neutral-100/80 text-[11px] font-medium text-[#121316]">
                              <div className={`w-4 h-4 rounded-md flex items-center justify-center ${t.done ? "bg-[#1A6B3A] text-white" : "bg-neutral-200"}`}>
                                {t.done && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                              </div>
                              <span>{t.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-[10px] text-neutral-400 font-mono">
                        <span>SYNCED 2M AGO</span>
                        <span>ACTIVE</span>
                      </div>
                    </div>
                  </div>
                </ParallaxFloat>
              </div>
            </div>
          </motion.div>

          {/* Under-Card Metadata Details */}
          <div className="mt-6 pt-5 border-t border-[#121316]/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#121316] tracking-tight">
                Kin: Holistic Habit Architecture
              </h4>
              <p className="text-sm text-[#121316]/65 mt-1 leading-relaxed max-w-xl">
                Redesigning behavioral tracking into an ambient, pressure-free daily companion with micro-rewards and low cognitive load.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono font-medium tracking-wider text-[#121316]/70 uppercase">
              <span className="px-3 py-1 rounded-full bg-black/[0.04]">Mobile App</span>
              <span className="px-3 py-1 rounded-full bg-black/[0.04]">Design System</span>
            </div>
          </div>
        </div>

        {/* 2. ASYMMETRICAL 2-COLUMN BENTO: NORTHSTAR & STILL HERE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 lg:gap-16">
          {/* CARD A: NORTHSTAR (Enteprise Analytics Engine) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            onClick={() => openDrawer("northstar")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openDrawer("northstar");
              }
            }}
            className="flex flex-col group cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C85A32] focus-visible:outline-none"
          >
            <div className="bezel-shell">
              <div className="bezel-core p-8 sm:p-10 relative overflow-hidden bg-gradient-to-br from-[#121A24] via-[#16212E] to-[#0E151E] text-white min-h-[420px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/50">
                      SAAS TELEMETRY
                    </span>
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  <h3 className="font-sans text-4xl sm:text-5xl font-bold text-white tracking-[-0.03em] leading-tight mb-2">
                    NorthStar<span className="text-cyan-400">.</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 font-normal">
                    Complex infrastructure metrics, condensed into actionable clarity.
                  </p>
                </div>

                {/* Floating Telemetry Screen Mockup with Parallax Float */}
                <ParallaxFloat offset={16} className="relative mt-8">
                  <div className="bg-[#1B2735]/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 shadow-2xl transform rotate-1 group-hover:rotate-0 group-hover:scale-[1.02] spring-physics">
                    <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-white/70">
                      <span>Cluster Utilization</span>
                      <span className="text-cyan-300 font-bold">+18.4% efficiency</span>
                    </div>

                    {/* Visual Spectrum Bars */}
                    <div className="flex items-end gap-2 h-20 pt-2 mb-3">
                      {[42, 68, 55, 88, 72, 94, 82].map((height, i) => (
                        <div key={i} className="flex-1 bg-white/10 rounded-sm overflow-hidden h-full flex items-end">
                          <div
                            style={{ height: `${height}%` }}
                            className={`w-full rounded-sm transition-all duration-500 ${
                              i === 5 ? "bg-cyan-400" : "bg-gradient-to-t from-cyan-600 to-cyan-400"
                            }`}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-white/50">
                      <span>99.98% SLA TARGET</span>
                      <span>LATENCY &lt; 14MS</span>
                    </div>
                  </div>
                </ParallaxFloat>
              </div>
            </div>

            {/* Under-Card Metadata */}
            <div className="mt-5 pt-4 border-t border-[#121316]/[0.06] flex items-center justify-between">
              <div>
                <h4 className="text-xl font-bold text-[#121316] tracking-tight">
                  NorthStar Analytics
                </h4>
                <p className="text-xs sm:text-sm text-[#121316]/65 mt-0.5">
                  High-throughput developer platform & cloud observability dashboard.
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-black/[0.04] flex items-center justify-center group-hover:bg-[#121316] group-hover:text-white spring-physics">
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          {/* CARD B: STILL HERE (Editorial Digital Archive) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 180, damping: 22, delay: 0.1 }}
            onClick={() => openDrawer("stillhere")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openDrawer("stillhere");
              }
            }}
            className="flex flex-col group cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C85A32] focus-visible:outline-none"
          >
            <div className="bezel-shell">
              <div className="bezel-core p-8 sm:p-10 relative overflow-hidden bg-gradient-to-br from-[#F5EDE4] via-[#EFE4D6] to-[#E5D7C5] min-h-[420px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#733523]/70">
                      EDITORIAL PLATFORM
                    </span>
                    <div className="w-5 h-5 rounded-full bg-[#C85A32]/10 flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-[#C85A32]" />
                    </div>
                  </div>

                  <h3 className="font-sans text-4xl sm:text-5xl font-bold text-[#3B1C13] tracking-[-0.03em] leading-tight mb-2">
                    Still Here<span className="text-[#C85A32]">.</span>
                  </h3>
                  <p className="font-serif italic text-base sm:text-lg text-[#733523]">
                    Less distraction. Deeper longform reading.
                  </p>
                </div>

                {/* Editorial Book / Screen Mockup with Parallax Float */}
                <ParallaxFloat offset={16} className="relative mt-8">
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl p-5 border border-black/[0.05] shadow-xl transform -rotate-1 group-hover:rotate-0 group-hover:scale-[1.02] spring-physics">
                    <div className="flex items-center gap-1.5 mb-3">
                      <span className="w-2 h-2 rounded-full bg-[#C85A32]" />
                      <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400">
                        Issue Nº 14 • Tactile Typography
                      </span>
                    </div>

                    <h5 className="font-serif text-xl sm:text-2xl font-bold text-[#121316] leading-snug tracking-tight mb-2">
                      Why physical rhythm still matters in an ethereal world.
                    </h5>
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed font-sans">
                      Exploring how deliberate micro-spacing and physical material metaphors anchor human attention.
                    </p>
                  </div>
                </ParallaxFloat>
              </div>
            </div>

            {/* Under-Card Metadata */}
            <div className="mt-5 pt-4 border-t border-[#121316]/[0.06] flex items-center justify-between">
              <div>
                <h4 className="text-xl font-bold text-[#121316] tracking-tight">
                  Still Here: Spatial Publishing House
                </h4>
                <p className="text-xs sm:text-sm text-[#121316]/65 mt-0.5">
                  Editorial digital magazine balancing typographic craft with smooth page transitions.
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-black/[0.04] flex items-center justify-center group-hover:bg-[#121316] group-hover:text-white spring-physics">
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3. EXTENDED PROJECT ARCHIVE & SYSTEMS INDEX (STRATEGY 1) */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredProject(null)}
          className="mt-28 sm:mt-36 pt-16 sm:pt-20 border-t border-[#121316]/[0.08] relative"
        >
          {/* Section Sub-header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#121316]/50 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
                <span>04 — 06 • Systems & Archive</span>
              </div>
              <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-[#121316] tracking-tight">
                Extended Project Index
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#121316]/60 max-w-md leading-relaxed font-normal">
              Curated client systems, mobile toolchains, and spatial prototypes engineered for scalable performance.
            </p>
          </div>

          {/* Interactive Rows */}
          <div className="divide-y divide-[#121316]/[0.08] border-b border-[#121316]/[0.08]">
            {archiveProjects.map((project) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  onClick={() => openDrawer(project.id)}
                  onMouseEnter={() => setHoveredProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openDrawer(project.id);
                    }
                  }}
                  className="group py-6 sm:py-8 px-3 sm:px-5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors duration-300 hover:bg-black/[0.025] rounded-2xl cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C85A32] focus-visible:outline-none"
                >
                  {/* Left: Index + Icon + Title + Subtitle */}
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    <span className="font-mono text-xs sm:text-sm font-semibold text-[#121316]/40 tracking-wider w-6">
                      {project.num}
                    </span>

                    <div className="w-9 h-9 rounded-xl bg-black/[0.04] flex items-center justify-center shrink-0 text-[#121316] group-hover:scale-110 spring-physics">
                      <Icon className="w-4 h-4" strokeWidth={1.5} />
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <h4 className="font-sans text-lg sm:text-xl font-bold text-[#121316] tracking-tight group-hover:text-[#C85A32] transition-colors">
                          {project.title}
                        </h4>
                        <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-black/20" />
                        <span className="hidden sm:inline-block text-xs font-mono text-[#121316]/60">
                          {project.client}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#121316]/65 mt-0.5 line-clamp-1">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right: Metadata + Tag + Inspect Prompt */}
                  <div className="flex items-center justify-between md:justify-end gap-4 sm:gap-6 pl-10 sm:pl-0">
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-black/[0.04] text-[#121316]/70 uppercase tracking-wider">
                      {project.discipline}
                    </span>

                    <span className="text-xs font-mono text-[#121316]/40">
                      {project.year}
                    </span>

                    <div className="w-8 h-8 rounded-full bg-black/[0.04] group-hover:bg-[#121316] group-hover:text-white flex items-center justify-center spring-physics">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 spring-physics" strokeWidth={1.5} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Floating Cursor-Tracking Micro-Preview Card (Desktop Only) */}
          <motion.div
            style={{
              x: springX,
              y: springY,
              pointerEvents: "none",
            }}
            className="fixed top-0 left-0 z-50 hidden lg:block"
          >
            <AnimatePresence mode="wait">
              {hoveredProject && (
                <motion.div
                  key={hoveredProject.id}
                  initial={{ opacity: 0, scale: 0.88, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.88, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="w-[280px] p-4 rounded-2xl bg-[#141519] text-white shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-white/10 overflow-hidden backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-white/50">
                      {hoveredProject.client}
                    </span>
                    <span
                      style={{ color: hoveredProject.accent }}
                      className="text-[10px] font-mono font-bold tracking-wide"
                    >
                      {hoveredProject.metric}
                    </span>
                  </div>

                  <h5 className="font-sans text-base font-bold text-white mb-1">
                    {hoveredProject.title}
                  </h5>

                  <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">
                    {hoveredProject.subtitle}
                  </p>

                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/40">
                    <span>CLICK TO INSPECT</span>
                    <span style={{ color: hoveredProject.accent }}>→</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* INTERACTIVE CASE STUDY DRAWER */}
      <CaseStudyDrawer
        study={selectedStudy}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </section>
  );
}
