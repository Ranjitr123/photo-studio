"use client";

import { useState } from "react";
import { Camera, Sparkles, Heart, Film } from "lucide-react";
import { InteractiveGallery } from "@/components/InteractiveGallery";
import { BookingModal } from "@/components/BookingModal";

export default function PortfolioPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="py-16 sm:py-24 bg-[#090a0f]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
          <Film className="w-4 h-4" />
          <span>Visual Archive</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
          Our Masterpiece <span className="gold-gradient-text">Gallery</span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          Every photo tells an unscripted story of love, sacred traditions, and timeless joy captured across Nirakarpur, Khordha, Puri, and Bhubaneswar.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveGallery showFilters={true} />
      </div>

      {/* Bottom Booking Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-500/20 via-[#161a26] to-amber-500/10 border border-amber-500/30 text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-amber-500 text-black flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(245,158,11,0.5)]">
            <Heart className="w-7 h-7 fill-black" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Ready to Turn Your Wedding into a Cinematic Masterpiece?
          </h2>

          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Book our master photography and 4K cinema drone crew for your 2026-2027 celebrations in Nirakarpur and across Odisha.
          </p>

          <button
            onClick={() => setIsBookingOpen(true)}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-black text-sm uppercase tracking-wider shadow-xl transition-all transform hover:scale-105"
          >
            Check Date Availability
          </button>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
