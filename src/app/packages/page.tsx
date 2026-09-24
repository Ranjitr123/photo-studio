"use client";

import { useState } from "react";
import {
  Award,
  Sparkles,
  CheckCircle2,
  Calendar,
  Layers,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { PRICING_PACKAGES, formatINR, STUDIO_INFO } from "@/lib/data";
import { PackageCalculator } from "@/components/PackageCalculator";
import { BookingModal } from "@/components/BookingModal";

export default function PackagesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState("");

  const handleBook = (pkgName: string) => {
    setSelectedPkg(pkgName);
    setIsBookingOpen(true);
  };

  return (
    <div className="py-16 sm:py-24 bg-[#090a0f]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
          <Award className="w-4 h-4" />
          <span>Transparent Pricing</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
          2026-2027 Wedding <span className="gold-gradient-text">Packages</span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          Clear, transparent packages with zero hidden costs. Choose an all-inclusive bundle or use our interactive calculator below.
        </p>
      </div>

      {/* Package Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? "bg-[#141828] border-2 border-amber-400 shadow-[0_0_50px_rgba(245,158,11,0.25)] scale-105"
                  : "bg-[#101320] border border-slate-800 hover:border-slate-700"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-black text-xs font-black uppercase tracking-wider shadow-lg">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="pb-6 border-b border-slate-800">
                  <h3 className="text-2xl font-black text-white">{pkg.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 min-h-[32px]">
                    {pkg.tagline}
                  </p>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black gold-gradient-text">
                      {formatINR(pkg.price)}
                    </span>
                    <span className="text-xs text-slate-500 line-through">
                      {formatINR(pkg.originalPrice)}
                    </span>
                  </div>
                  <div className="text-[11px] text-amber-400/90 font-semibold mt-1">
                    {pkg.duration} • {pkg.team}
                  </div>
                </div>

                {/* Coverage scope */}
                <div className="py-4 border-b border-slate-800/80">
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block mb-2">
                    Events Covered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {pkg.coverage.map((c, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-[11px]"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="py-6 space-y-3">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Full Package Inclusions:
                  </div>
                  {pkg.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-2.5 text-xs text-slate-300 leading-tight"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <button
                  onClick={() => handleBook(pkg.name)}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    pkg.popular
                      ? "bg-amber-400 hover:bg-amber-300 text-black shadow-lg hover:scale-105"
                      : "bg-slate-800 hover:bg-slate-700 text-white"
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve {pkg.name}</span>
                </button>

                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent(
                    `Hello Bhagabati Photo Studio! I would like to inquire about booking the *${pkg.name}* (₹${pkg.price}) for my upcoming event in Nirakarpur/Odisha.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 rounded-xl text-center text-xs text-emerald-400 hover:text-emerald-300 flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Inquire</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Custom Calculator */}
      <PackageCalculator />

      {/* Guarantees */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="p-8 rounded-3xl bg-[#121522] border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">RAW Data Backup Guarantee</h4>
              <p className="text-xs text-slate-400">Safe triple cloud and SSD backup of all photos for 5 years.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">48hr Sneak Peek Teaser</h4>
              <p className="text-xs text-slate-400">Get 50 color-graded photos within 2 days for Instagram & family.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Canvera & Velvet Prints</h4>
              <p className="text-xs text-slate-400">Original luxury album bindings with life-long color permanence.</p>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={selectedPkg}
      />
    </div>
  );
}
