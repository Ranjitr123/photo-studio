"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Sparkles, Sliders, Wand2 } from "lucide-react";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-24 bg-[#090a0f] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Wand2 className="w-3.5 h-3.5" />
            <span>Master Color Grading & Retouching</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            RAW Capture vs{" "}
            <span className="gold-gradient-text">Bhagabati Studio Masterpiece</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4">
            Drag the interactive slider below to witness how our master retouchers transform raw camera sensor captures into timeless, vivid Odia wedding heirlooms.
          </p>
        </div>

        {/* Interactive Comparison Box */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border border-amber-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.9)] select-none cursor-ew-resize group"
          >
            {/* "AFTER" (Retouched/Graded) Image - Base Background */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=90"
                alt="Color Graded Retouched Wedding Portrait by Bhagabati Photo Studio"
                fill
                className="object-cover object-center filter saturate-125 contrast-115"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
              <div className="absolute top-4 right-4 bg-amber-500/90 backdrop-blur-md text-black px-3.5 py-1.5 rounded-full text-xs font-extrabold shadow-lg flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Bhagabati Graded Master</span>
              </div>
            </div>

            {/* "BEFORE" (RAW Unedited) Image - Clipped */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full" style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%" }}>
                <Image
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=90"
                  alt="RAW Flat Camera Capture"
                  fill
                  className="object-cover object-center filter grayscale-[30%] brightness-90 contrast-85"
                  sizes="(max-width: 1024px) 100vw, 900px"
                />
              </div>
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-slate-300 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-slate-700 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-slate-400" />
                <span>Original RAW Sensor</span>
              </div>
            </div>

            {/* Divider Line & Circular Drag Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-amber-400 shadow-[0_0_15px_#f59e0b] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-amber-400 text-black shadow-[0_0_20px_#f59e0b] flex items-center justify-center border-2 border-white">
                <div className="flex items-center gap-0.5 text-xs font-black">
                  <span>◀</span>
                  <span>▶</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => setSliderPosition(20)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                sliderPosition === 20
                  ? "bg-amber-500 text-black font-bold"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              20% Retouch
            </button>
            <button
              onClick={() => setSliderPosition(50)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                sliderPosition === 50
                  ? "bg-amber-500 text-black font-bold"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              50% Split
            </button>
            <button
              onClick={() => setSliderPosition(80)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                sliderPosition === 80
                  ? "bg-amber-500 text-black font-bold"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              80% Mastered
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
