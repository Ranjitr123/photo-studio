"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Phone,
  MessageCircle,
  Menu,
  X,
  Sparkles,
  Calendar,
} from "lucide-react";
import { STUDIO_INFO } from "@/lib/data";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Packages & Pricing", href: "/packages" },
    { name: "Our Studio", href: "/about" },
    { name: "Contact & Location", href: "/contact" },
  ];

  return (
    <>
      {/* Top emergency / quick contact ticker */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 text-black text-xs font-semibold py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span>✨ 2026-2027 Wedding Season Bookings Open in Nirakarpur & Odisha</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${STUDIO_INFO.phone1.replace(/\s+/g, "")}`}
              className="flex items-center gap-1 hover:underline font-bold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{STUDIO_INFO.phone1}</span>
            </a>
            <span className="hidden sm:inline opacity-60">|</span>
            <span className="hidden sm:inline">{STUDIO_INFO.openingHours}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#090a0f]/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)] group-hover:scale-105 transition-transform duration-300">
              <Camera className="w-6 h-6" />
              <div className="absolute -inset-0.5 rounded-xl bg-amber-400/30 blur-sm -z-10 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold tracking-tight text-lg sm:text-xl text-white group-hover:text-amber-400 transition-colors">
                  BHAGABATI
                </span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  STUDIO
                </span>
              </div>
              <p className="text-[10px] text-amber-200/70 tracking-widest uppercase font-medium">
                Nirakarpur, Odisha
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#121520]/80 border border-amber-500/15 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-black font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full -z-10 shadow-[0_0_12px_rgba(245,158,11,0.5)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent(
                "Hello Bhagabati Photo Studio! I would like to inquire about wedding/photo shoot booking in Nirakarpur."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-xs font-bold shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Shoot</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-amber-500 text-black text-xs font-bold"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#121520] border border-amber-500/20 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[96px] z-30 bg-[#090a0f]/98 border-b border-amber-500/30 p-6 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "bg-amber-500 text-black font-bold"
                        : "text-slate-200 hover:bg-slate-800/60"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-black" />}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-800 grid grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-sm font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking?.();
                  }}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black text-sm font-bold shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Date</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
