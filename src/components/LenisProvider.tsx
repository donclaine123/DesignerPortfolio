"use client";

import React, { useEffect, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import "lenis/dist/lenis.css";

function LenisSync() {
  useLenis(() => {
    // Sync ScrollTrigger updates on every scroll frame
    ScrollTrigger.update();
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.ticker.lagSmoothing(0);

    // Global data-speed parallax engine
    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-speed]").forEach((el: any) => {
        const speed = parseFloat(el.dataset.speed);
        if (isNaN(speed)) return;

        gsap.to(el, {
          y: () => window.innerHeight * speed,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}

function ScrollLock({ loading }: { loading: boolean }) {
  const lenis = useLenis();

  useEffect(() => {
    if (loading) {
      lenis?.stop();
    } else {
      lenis?.start();
      ScrollTrigger.refresh();
    }
  }, [loading, lenis]);

  return null;
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
      }}
    >
      <LenisSync />
      <ScrollLock loading={loading} />
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      {children}
    </ReactLenis>
  );
}
