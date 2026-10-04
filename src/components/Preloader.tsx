"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  useEffect(() => {
    // Auto complete after a short display time
    const timer = setTimeout(() => {
      onComplete();
    }, 1200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 bg-[#FAF8F5] z-[9999] flex flex-col items-center justify-center pointer-events-auto"
    >
      <div className="relative overflow-hidden px-6 py-2">
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ 
            y: 0,
            transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 0.1 }
          }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
          }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight text-center"
        >
          Alex Morgan
        </motion.h1>
      </div>

      {/* Thin editorial aesthetic line */}
      <div className="w-16 h-[1px] bg-sand-300 mt-6 relative overflow-hidden">
        <motion.div
          initial={{ left: "-100%" }}
          animate={{ 
            left: "100%",
            transition: { duration: 1.2, ease: "easeInOut" }
          }}
          className="absolute inset-0 bg-burgundy-700"
        />
      </div>
    </motion.div>
  );
}
