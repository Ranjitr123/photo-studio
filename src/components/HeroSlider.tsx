"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Sparkles,
  Play,
  Calendar,
  ChevronRight,
  ShieldCheck,
  Star,
  Flame,
} from "lucide-react";
import { STUDIO_INFO } from "@/lib/data";

interface HeroSliderProps {
  onOpenBooking: () => void;
}

const HERO_SLIDES = [
  {
    id: 1,
    badge: "ROYAL ODIA WEDDING CINEMATOGRAPHY",
    title: "Timeless Wedding Memories in 4K UHD",
    subtitle: "Every sacred ritual, emotional kanyadaan, and grand baarat captured with cinema-grade Sony FX3 & artistic flair.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1920&q=85",
    location: "Nirakarpur & All Odisha",
  },
  {
    id: 2,
    badge: "CINEMATIC PRE-WEDDING LOVE STORIES",
    title: "Bespoke Romantic Films Across Odisha",
    subtitle: "Chilika sunsets, Puri golden beaches, Konark temple heritage, and pine forest glades crafted into magical reels.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=85",
    location: "Puri • Chilika • Konark",
  },
  {
    id: 3,
    badge: "5.1K AERIAL DRONE CINEMATOGRAPHY",
    title: "Grand Baarat & Open Mandap Flyovers",
    subtitle: "Triple-camera Hasselblad drone visuals that elevate your celebration into a grand Bollywood film spectacle.",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1920&q=85",
    location: "Khordha & Mandap Venues",
  },
];

export function HeroSlider({ onOpenBooking }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#090a0f]">
      {/* Background Image Carousel with Smooth Fade & Scale Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover object-center opacity-40 brightness-75 contrast-110"
            sizes="100vw"
          />
          {/* Multi-layered Cinematic Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/60 to-[#090a0f]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#090a0f] via-transparent to-[#090a0f]/80" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#090a0f]/40 to-[#090a0f]" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Glowing Aperture Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-10 studio-glow-amber" />
      <div className="absolute bottom-10 right-10 studio-glow-cyan" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Badges, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top location & badge pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f59e0b]" />
              <span className="text-xs font-bold text-amber-300 tracking-wider uppercase">
                {slide.badge}
              </span>
              <span className="text-slate-500 text-xs">•</span>
              <span className="text-xs text-slate-300">{slide.location}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              key={`title-${slide.id}`}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]"
            >
              Preserve Sacred Moments In{" "}
              <span className="gold-gradient-text">Pure Cinematic Brilliance</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              key={`sub-${slide.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed"
            >
              {slide.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenBooking}
                className="px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-extrabold text-sm tracking-wide shadow-[0_0_30px_rgba(245,158,11,0.4)] flex items-center gap-2.5 transition-all transform hover:scale-105 active:scale-95"
              >
                <Calendar className="w-5 h-5" />
                <span>Book 2026-2027 Shoot</span>
              </button>

              <Link
                href="/portfolio"
                className="px-6 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-sm border border-slate-700 hover:border-amber-500/50 backdrop-blur-md flex items-center gap-2 transition-all hover:scale-105"
              >
                <span>View Portfolio</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </Link>

              <Link
                href="/packages"
                className="px-5 py-4 rounded-2xl text-amber-400 hover:text-amber-300 text-sm font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Flame className="w-4 h-4 text-amber-500" />
                <span>Packages & Pricing</span>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-400 border-t border-slate-800/80"
            >
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">4.9 / 5.0</span>
                <span>(340+ Verified Nirakarpur Clients)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Dual Sony 4K & Drone Backup Crew</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Interactive Studio Glass Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl relative shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-amber-500/25"
            >
              {/* Studio Name header badge */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner">
                    <Camera className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-base">
                      {STUDIO_INFO.name}
                    </h3>
                    <p className="text-xs text-amber-400 font-medium">
                      Digital Color Lab & Cinema Studio
                    </p>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold">
                  ● Available
                </div>
              </div>

              {/* Stats Highlights in Studio Card */}
              <div className="grid grid-cols-2 gap-4 py-6">
                <div className="p-4 rounded-2xl bg-[#161a26]/70 border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-black text-amber-400">
                    15+
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">
                    Years of Excellence in Nirakarpur
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#161a26]/70 border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    2,800+
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">
                    Weddings & Rituals Captured
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#161a26]/70 border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-black text-amber-400">
                    4K UHD
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">
                    Cinema Line & Drone Standard
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#161a26]/70 border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    48 Hrs
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">
                    Fast Social Teaser Delivery
                  </div>
                </div>
              </div>

              {/* Quick Action in Card */}
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Check Your Wedding Date Availability</span>
                </button>
              </div>

              {/* Slide selector indicators */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {HERO_SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === idx
                        ? "w-8 bg-amber-400"
                        : "w-2 bg-slate-700 hover:bg-slate-600"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
