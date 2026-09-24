"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  MapPin,
  Calendar,
  Sparkles,
  Maximize2,
  X,
  Sliders,
  CheckCircle,
} from "lucide-react";
import { PORTFOLIO_ITEMS, PortfolioItem } from "@/lib/data";

interface InteractiveGalleryProps {
  initialCategory?: string;
  limit?: number;
  showFilters?: boolean;
}

export function InteractiveGallery({
  initialCategory = "all",
  limit,
  showFilters = true,
}: InteractiveGalleryProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: "all", label: "All Works" },
    { id: "wedding", label: "Royal Weddings" },
    { id: "pre-wedding", label: "Pre-Wedding Films" },
    { id: "drone", label: "Drone Aerial" },
    { id: "portrait", label: "Studio Portraits" },
    { id: "traditional", label: "Traditional Rituals" },
    { id: "events", label: "Events & Festivals" },
  ];

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <section className="py-20 bg-[#090a0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        {showFilters && (
          <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-amber-400 text-black shadow-[0_0_20px_rgba(245,158,11,0.5)] scale-105"
                      : "bg-[#121520] text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Portfolio Masonry / Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {displayItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative h-[380px] rounded-3xl overflow-hidden cursor-pointer border border-amber-500/10 hover:border-amber-500/50 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-[#121520]"
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 border border-amber-500/30 text-[11px] font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                {/* Top Zoom Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-slate-300 group-hover:text-amber-400 border border-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Information */}
                <div className="absolute inset-x-0 bottom-0 p-6 space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                    <span className="text-slate-500">•</span>
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-lg font-extrabold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Camera EXIF bar (Reveals on hover) */}
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 font-medium text-slate-300">
                      <Camera className="w-3 h-3 text-amber-400" />
                      {item.camera}
                    </span>
                    <span className="text-amber-400/90 font-mono">
                      {item.lens} ({item.aperture})
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox / Modal with Full EXIF details */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-xl"
              />

              {/* Lightbox Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-5xl w-full max-h-[90vh] bg-[#0f121d] border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 text-slate-300 hover:text-white hover:bg-black transition-colors"
                  aria-label="Close image"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left: Full Preview Image */}
                <div className="relative w-full md:w-2/3 h-72 md:h-auto min-h-[350px] bg-black">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                </div>

                {/* Right: Detailed Metadata & Specs */}
                <div className="w-full md:w-1/3 p-6 sm:p-8 flex flex-col justify-between bg-[#121522] overflow-y-auto">
                  <div className="space-y-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase">
                      {selectedItem.category}
                    </span>

                    <h3 className="text-xl font-black text-white leading-tight">
                      {selectedItem.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{selectedItem.location}</span>
                    </div>

                    {/* Camera Specs breakdown */}
                    <div className="p-4 rounded-2xl bg-[#181c2c] border border-slate-800 space-y-2.5">
                      <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5 uppercase tracking-wider">
                        <Sliders className="w-3.5 h-3.5" />
                        <span>Shot Details (EXIF)</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-1">
                        <div>
                          <span className="text-slate-500 block">Camera:</span>
                          <span className="font-semibold">{selectedItem.camera}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Lens:</span>
                          <span className="font-semibold">{selectedItem.lens}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Aperture:</span>
                          <span className="font-semibold">{selectedItem.aperture}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Shutter:</span>
                          <span className="font-semibold">{selectedItem.shutterSpeed}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      Captured by Bhagabati Photo Studio team during an authentic Odia ceremony. Edited and master color graded in our Nirakarpur digital color lab.
                    </p>
                  </div>

                  <div className="pt-6">
                    <a
                      href="tel:+919861054321"
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:from-amber-400 hover:to-amber-500 transition-all"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Inquire for Similar Shoot</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
