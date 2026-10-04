"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";
import { ArrowDown } from "lucide-react";
import Magnetic from "@/components/Magnetic";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Multi-layer optical depth planes
  const yParallaxGlow = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const yParallaxBackdrop = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const scaleBackdrop = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const opacityBackdrop = useTransform(scrollYProgress, [0, 0.75], [0.95, 0.1]);

  const yParallaxPhoto = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);
  const scalePhoto = useTransform(scrollYProgress, [0, 1], [1, 1.02]);

  const yParallaxContent = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.65], [1, 0.2]);

  const yParallaxBadge = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#projects");
    if (target) {
      if (lenis) {
        lenis.scrollTo(target as HTMLElement, {
          offset: -20,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full min-h-[100svh] overflow-hidden bg-[#9cb1bb] flex flex-col justify-between pt-24 sm:pt-28 select-none"
    >
      {/* 0. SUBTLE AMBIENT RADIAL LIGHTING BEHIND CUTOUT (PARALLAX LAYER 0) */}
      <motion.div
        style={{ y: yParallaxGlow }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute top-[28%] left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] h-[500px] bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-full blur-3xl opacity-80" />
      </motion.div>

      {/* 1. GIANT TYPOGRAPHIC BACKDROP: PORTFOLIO (PARALLAX LAYER 1 - SLOWEST) */}
      <motion.div
        style={{ y: yParallaxBackdrop, scale: scaleBackdrop, opacity: opacityBackdrop }}
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 0.95, y: 0 }}
        transition={{ type: "spring", stiffness: 140, damping: 20, delay: 0.1 }}
        className="absolute top-[8%] sm:top-[10%] md:top-[8%] left-0 right-0 z-0 flex justify-center w-full pointer-events-none overflow-hidden"
      >
        <h1
          className="font-bebas text-[23vw] sm:text-[23vw] md:text-[22vw] lg:text-[21.5vw] font-black leading-[0.76] tracking-tight text-center whitespace-nowrap bg-gradient-to-b from-[#cf5338] via-[#be462d] to-[#be462d]/25 bg-clip-text text-transparent opacity-95"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0) 100%)",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0) 100%)",
          }}
        >
          PORTFOLIO
        </h1>
      </motion.div>

      {/* 2. FOREGROUND CUTOUT PORTRAIT (PARALLAX LAYER 2 - MID DEPTH) */}
      <motion.div
        style={{ y: yParallaxPhoto, scale: scalePhoto }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 150, damping: 22, delay: 0.18 }}
        className="absolute bottom-0 right-[-32px] xs:right-[-15px] sm:right-auto sm:left-1/2 sm:-translate-x-1/2 z-10 pointer-events-none flex justify-center items-end w-[330px] xs:w-[360px] sm:w-[440px] md:w-[560px] lg:w-[640px] xl:w-[700px] h-[64vh] sm:h-[65vh] md:h-[72vh] lg:h-[78vh] max-h-[780px]"
      >
        <div className="relative w-full h-full">
          <Image
            src={`${basePath}/mark.png`}
            alt="Alex Morgan Portrait"
            fill
            priority
            sizes="(max-width: 640px) 360px, (max-width: 768px) 440px, (max-width: 1024px) 560px, 700px"
            className="object-contain object-bottom drop-shadow-[0_25px_45px_rgba(20,29,33,0.3)]"
          />
        </div>
      </motion.div>

      {/* 3. LEFT HERO CONTENT: NAME & SUBTITLE (PARALLAX LAYER 3) */}
      <motion.div
        style={{ y: yParallaxContent, opacity: opacityContent }}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 22, delay: 0.25 }}
        className="absolute left-5 xs:left-6 sm:left-12 lg:left-20 xl:left-28 top-[28%] sm:top-[38%] md:top-[37%] z-20 flex flex-col items-start pointer-events-auto max-w-[195px] xs:max-w-[215px] sm:max-w-none"
      >
        {/* Elegant Cursive "Hey, I'm" with gentle organic float */}
        <motion.span
          animate={{ rotate: [-6, -3, -6] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="font-cursive text-3xl sm:text-5xl lg:text-[3.5rem] text-[#cf5338] inline-block font-normal mb-1 sm:mb-2 select-none drop-shadow-sm origin-bottom-left tracking-wide leading-none"
        >
          Hey, I'm
        </motion.span>

        {/* Big Name */}
        <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-[#141d21] leading-[0.98] sm:leading-[1.02] tracking-tight mb-2 sm:mb-4">
          Alex<br />Morgan.
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-[15px] text-[#26343b] max-w-[175px] sm:max-w-[225px] font-medium leading-snug">
          I design how it feels and build how it works.
        </p>
      </motion.div>

      {/* 4. BOTTOM-LEFT "SCROLL TO EXPLORE" WITH MAGNETIC SPRING RHYTHM */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
        className="absolute bottom-5 sm:bottom-10 left-5 sm:left-12 lg:left-20 xl:left-28 z-20 pointer-events-auto"
      >
        <Magnetic strength={0.28}>
          <a
            href="#projects"
            onClick={handleScrollClick}
            className="group flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#1c2428] hover:text-[#cf5338] transition-colors cursor-pointer px-3 py-1.5 sm:px-0 sm:py-0 rounded-full bg-white/80 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none border border-black/[0.08] sm:border-none shadow-xs sm:shadow-none"
          >
            <span>SCROLL TO EXPLORE</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-5 h-5 rounded-full bg-black/[0.06] group-hover:bg-[#cf5338]/10 flex items-center justify-center transition-colors"
            >
              <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
            </motion.div>
          </a>
        </Magnetic>
      </motion.div>

      {/* 5. BOTTOM-RIGHT NEOBRUTALIST STICKER BADGE (PARALLAX LAYER 4) */}
      <motion.div
        style={{ y: yParallaxBadge }}
        initial={{ opacity: 0, y: 20, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ type: "spring", stiffness: 320, damping: 16 }}
        className="absolute bottom-5 sm:bottom-10 right-5 sm:right-12 lg:right-20 xl:right-28 z-20 pointer-events-auto cursor-pointer select-none"
      >
        <Magnetic strength={0.35}>
          <motion.div
            whileHover={{ rotate: 1, scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 16 }}
            className="bg-[#edf3f5] border-2 border-[#1c2428] rounded-xl sm:rounded-2xl px-3 sm:px-6 py-1.5 sm:py-3.5 shadow-[3px_3px_0px_#1c2428] sm:shadow-[4px_4px_0px_#1c2428] hover:shadow-[6px_6px_0px_#1c2428] transition-shadow duration-300"
          >
            <p className="text-[10px] sm:text-sm font-bold text-[#1c2428] leading-tight mb-0.5">
              UI/UX Developer
            </p>
            <p className="text-xs sm:text-base font-black text-[#cf5338] leading-tight tracking-tight">
              Creative Digital Builder
            </p>
          </motion.div>
        </Magnetic>
      </motion.div>
    </section>
  );
}
