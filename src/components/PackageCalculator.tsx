"use client";

import { useState } from "react";
import {
  Calculator,
  Sparkles,
  Camera,
  Video,
  Plane,
  BookOpen,
  Tv,
  MessageCircle,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { formatINR, STUDIO_INFO } from "@/lib/data";

export function PackageCalculator() {
  const [eventType, setEventType] = useState("wedding");
  const [days, setDays] = useState(2);
  const [photoType, setPhotoType] = useState("dual"); // "traditional" | "candid" | "dual"
  const [videoType, setVideoType] = useState("4k"); // "hd" | "4k" | "multi4k"
  const [includeDrone, setIncludeDrone] = useState(true);
  const [albumsCount, setAlbumsCount] = useState(2);
  const [includeSde, setIncludeSde] = useState(true);
  const [includeLiveStream, setIncludeLiveStream] = useState(false);

  // Price calculations
  let basePrice = 0;

  // Base day multiplier
  const dayMultiplier = days === 1 ? 1 : days === 2 ? 1.8 : 2.5;

  // Photo calculation
  if (photoType === "traditional") basePrice += 10000 * dayMultiplier;
  else if (photoType === "candid") basePrice += 16000 * dayMultiplier;
  else if (photoType === "dual") basePrice += 22000 * dayMultiplier;

  // Video calculation
  if (videoType === "hd") basePrice += 12000 * dayMultiplier;
  else if (videoType === "4k") basePrice += 18000 * dayMultiplier;
  else if (videoType === "multi4k") basePrice += 26000 * dayMultiplier;

  // Drone
  if (includeDrone) basePrice += 10000 * (days > 1 ? 1.6 : 1);

  // Albums
  basePrice += albumsCount * 8000;

  // Same Day Edit
  if (includeSde) basePrice += 6000;

  // Live Stream
  if (includeLiveStream) basePrice += 8000 * days;

  // Bundle discount
  const finalPrice = Math.round(basePrice * 0.9); // 10% auto bundle discount
  const originalPrice = Math.round(basePrice * 1.15);

  const handleWhatsAppBooking = () => {
    const text = `*Custom Package Quote Estimate - Bhagabati Photo Studio Nirakarpur*
🎉 *Event:* ${eventType.toUpperCase()} (${days} Day/Days)
📷 *Photography:* ${photoType.toUpperCase()}
🎥 *Videography:* ${videoType.toUpperCase()}
🚁 *4K Drone:* ${includeDrone ? "YES" : "NO"}
📖 *Luxury Albums:* ${albumsCount} Custom Album(s)
⚡ *Same-Day Edit:* ${includeSde ? "YES" : "NO"}
📡 *Live Stream:* ${includeLiveStream ? "YES" : "NO"}
💰 *Estimated Bundle Price:* ₹${finalPrice.toLocaleString("en-IN")}

Please confirm date availability and schedule a consultation at your Nirakarpur studio!`;

    window.open(
      `https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="calculator" className="py-20 bg-[#0b0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Custom Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Build Your Own <span className="gold-gradient-text">Dream Photography Package</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4">
            Select your exact requirements below to calculate instant transparent pricing for your wedding or event in Nirakarpur and surrounding districts.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-8 bg-[#121522] border border-amber-500/20 rounded-3xl p-6 sm:p-8 space-y-8 shadow-xl">
            {/* Step 1: Event Type */}
            <div>
              <label className="text-sm font-extrabold text-white uppercase tracking-wider mb-3 block flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                1. Select Event Type & Duration
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                {[
                  { id: "wedding", label: "Grand Wedding" },
                  { id: "pre-wedding", label: "Pre-Wedding" },
                  { id: "thread", label: "Bratopanayana" },
                  { id: "reception", label: "Engagement/Party" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setEventType(item.id)}
                    className={`p-3 rounded-2xl text-xs font-bold border transition-all ${
                      eventType === item.id
                        ? "bg-amber-500 text-black border-amber-400 shadow-md scale-105"
                        : "bg-[#181c2c] text-slate-300 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Days selection */}
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400 font-semibold">Duration:</span>
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    onClick={() => setDays(num)}
                    className={`px-4 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                      days === num
                        ? "bg-amber-400 text-black border-amber-400"
                        : "bg-[#181c2c] text-slate-300 border-slate-800"
                    }`}
                  >
                    {num} {num === 1 ? "Day" : "Days"}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Photography Team */}
            <div>
              <label className="text-sm font-extrabold text-white uppercase tracking-wider mb-3 block flex items-center gap-2">
                <Camera className="w-4 h-4 text-amber-400" />
                2. Photography Team Rig
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "traditional", title: "1 Traditional Photo", desc: "Stage & Family Groups" },
                  { id: "candid", title: "1 Candid Master", desc: "Sony Prime f/1.2 Portraits" },
                  { id: "dual", title: "Dual Master Photographers", desc: "1 Candid + 1 Traditional (Recommended)" },
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPhotoType(p.id)}
                    className={`p-4 rounded-2xl text-left border transition-all ${
                      photoType === p.id
                        ? "bg-amber-500/15 border-amber-400 text-white shadow-inner"
                        : "bg-[#181c2c] border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <div className="text-xs font-extrabold text-white">{p.title}</div>
                    <div className="text-[11px] text-amber-300/80 mt-1">{p.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Videography */}
            <div>
              <label className="text-sm font-extrabold text-white uppercase tracking-wider mb-3 block flex items-center gap-2">
                <Video className="w-4 h-4 text-amber-400" />
                3. Cinematic Videography
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "hd", title: "Full HD Video", desc: "Single Cam Coverage" },
                  { id: "4k", title: "4K Sony FX3 Cinema", desc: "Cinema Line + Gimbal (Recommended)" },
                  { id: "multi4k", title: "Dual Multi-Cam 4K", desc: "Baarat & Stage Live Multi-angle" },
                ].map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVideoType(v.id)}
                    className={`p-4 rounded-2xl text-left border transition-all ${
                      videoType === v.id
                        ? "bg-amber-500/15 border-amber-400 text-white shadow-inner"
                        : "bg-[#181c2c] border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <div className="text-xs font-extrabold text-white">{v.title}</div>
                    <div className="text-[11px] text-amber-300/80 mt-1">{v.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Addons & Deliverables */}
            <div>
              <label className="text-sm font-extrabold text-white uppercase tracking-wider mb-3 block flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                4. Aerial Drone & Premium Add-ons
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Drone Toggle */}
                <div
                  onClick={() => setIncludeDrone(!includeDrone)}
                  className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                    includeDrone
                      ? "bg-amber-500/15 border-amber-400"
                      : "bg-[#181c2c] border-slate-800 opacity-70"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Plane className="w-5 h-5 text-amber-400" />
                    <div>
                      <div className="text-xs font-bold text-white">4K DJI Drone Flyover</div>
                      <div className="text-[10px] text-slate-400">Grand Baarat & Mandap</div>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${includeDrone ? "bg-amber-400 text-black" : "bg-slate-700"}`}>
                    {includeDrone && <CheckCircle2 className="w-4 h-4" />}
                  </div>
                </div>

                {/* Same Day Edit Toggle */}
                <div
                  onClick={() => setIncludeSde(!includeSde)}
                  className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                    includeSde
                      ? "bg-amber-500/15 border-amber-400"
                      : "bg-[#181c2c] border-slate-800 opacity-70"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Tv className="w-5 h-5 text-amber-400" />
                    <div>
                      <div className="text-xs font-bold text-white">Same-Day Edit (SDE) Reel</div>
                      <div className="text-[10px] text-slate-400">Play live at Reception LED wall</div>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${includeSde ? "bg-amber-400 text-black" : "bg-slate-700"}`}>
                    {includeSde && <CheckCircle2 className="w-4 h-4" />}
                  </div>
                </div>

                {/* Albums count */}
                <div className="p-4 rounded-2xl border bg-[#181c2c] border-slate-800 flex items-center justify-between sm:col-span-2">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-amber-400" />
                    <div>
                      <div className="text-xs font-bold text-white">Luxury Italian Velvet / Canvera Albums</div>
                      <div className="text-[10px] text-slate-400">Flush-mount high gloss/matte pages with wooden box</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {[0, 1, 2, 3].map((count) => (
                      <button
                        key={count}
                        onClick={() => setAlbumsCount(count)}
                        className={`w-8 h-8 rounded-xl text-xs font-bold ${
                          albumsCount === count
                            ? "bg-amber-400 text-black shadow-md"
                            : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                        }`}
                      >
                        {count}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Price Summary Sticky Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Custom Estimate
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                  10% Season Discount
                </span>
              </div>

              <div>
                <div className="text-xs text-slate-400 line-through">
                  Regular Price: {formatINR(originalPrice)}
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white mt-1">
                  <span className="gold-gradient-text">{formatINR(finalPrice)}</span>
                </div>
                <p className="text-[11px] text-emerald-400 mt-1 font-semibold">
                  You save approx. {formatINR(originalPrice - finalPrice)} with this custom bundle!
                </p>
              </div>

              {/* Inclusions summary list */}
              <div className="p-4 rounded-2xl bg-[#161a26] border border-slate-800 text-xs space-y-2 text-slate-300">
                <div className="font-bold text-white border-b border-slate-800 pb-1.5 flex items-center justify-between">
                  <span>Package Inclusions:</span>
                  <span className="text-amber-400">{days} Days</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{photoType === "dual" ? "Dual Photographers (Candid + Traditional)" : photoType.toUpperCase() + " Photographer"}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{videoType === "4k" ? "Sony FX3 4K UHD Cinema Coverage" : videoType.toUpperCase() + " Video Team"}</span>
                </div>
                {includeDrone && (
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>DJI Mavic 4K Drone Aerial Pilot</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{albumsCount} x Canvera/Karizma Signature Albums</span>
                </div>
                {includeSde && (
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Same-Day Edit (SDE) Reel for LED Wall</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5 text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>High-speed 48hr Social Sneak Peek</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppBooking}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all transform hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Send This Quote To WhatsApp</span>
                </button>

                <p className="text-[10px] text-center text-slate-500">
                  No hidden charges • Advance date locking with ₹5,000 token
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
