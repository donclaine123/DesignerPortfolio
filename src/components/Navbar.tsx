"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";
import Magnetic from "@/components/Magnetic";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const lenis = useLenis();
  const menuRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 35);
  });

  const navLinks = [
    { name: "WORK", href: "#projects" },
    { name: "APPROACH", href: "#approach" },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "approach", "about", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveSection(href);
    setMobileMenuOpen(false);

    if (href === "#home") {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      if (lenis) {
        lenis.scrollTo(target as HTMLElement, {
          offset: -50,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-black/[0.06] py-3.5 sm:py-4 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)]"
          : "bg-transparent py-6 sm:py-8"
      }`}
    >
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* LOGO: A/M. */}
        <Magnetic strength={0.25}>
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-1 text-2xl sm:text-3xl font-black font-bebas tracking-wider text-black select-none transition-transform duration-300 active:scale-95 cursor-pointer"
          >
            <span>A/M</span>
            <span className="text-[#cf5338] transition-transform duration-300 group-hover:scale-125 inline-block">.</span>
          </a>
        </Magnetic>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <nav className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isWork = link.name === "WORK" && (activeSection === "#projects" || activeSection === "#home");
              const isApproach = link.name === "APPROACH" && activeSection === "#approach";
              const isAbout = link.name === "ABOUT" && activeSection === "#about";
              const isContact = link.name === "CONTACT" && activeSection === "#contact";
              const isActive = isWork || isApproach || isAbout || isContact;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-200 cursor-pointer ${
                    isActive ? "text-[#cf5338]" : "text-[#1c2428] hover:text-[#cf5338]"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#cf5338] rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <span className="text-[#1c2428]/25 font-light select-none">|</span>

          {/* AVAILABLE FOR PROJECTS BADGE (Refined Tactile Pill with Magnetic Pull) */}
          <Magnetic strength={0.2}>
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-black/[0.035] border border-black/[0.05] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#1c2428] select-none hover:bg-black/[0.06] transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d25439] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d25439]"></span>
              </span>
              <span>AVAILABLE FOR PROJECTS</span>
            </div>
          </Magnetic>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div ref={menuRef} className="md:hidden flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#1c2428] bg-black/5 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d25439] animate-pulse"></span>
            <span>AVAILABLE</span>
          </div>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded-xl bg-black/5 hover:bg-black/10 text-black active:scale-95 transition-all"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Mobile Dropdown with Spring Dynamics */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="absolute top-full right-6 w-60 bg-white/95 backdrop-blur-2xl border border-black/10 rounded-2xl p-3 shadow-2xl flex flex-col gap-1.5 mt-3"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-[0.18em] text-[#1c2428] hover:bg-black/5 hover:text-[#cf5338] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
