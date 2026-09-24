"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Sparkles, Shield, Cpu, Aperture } from "lucide-react";
import { STUDIO_GEARS } from "@/lib/data";

export function GearShowcase() {
  return (
    <section className="py-24 bg-[#090a0f] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 right-10 studio-glow-cyan" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>State-Of-The-Art Equipment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Cinema-Grade Gear For <span className="gold-gradient-text">Unrivaled Quality</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4">
            We invest in top-tier cinema lines, prime optics, and licensed aerial drones so your wedding looks like a multi-million-dollar cinematic masterpiece.
          </p>
        </div>

        {/* Gear Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STUDIO_GEARS.map((gear, idx) => (
            <motion.div
              key={gear.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass-panel-hover glass-panel rounded-3xl overflow-hidden border border-amber-500/15 p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Image container */}
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 bg-black/50">
                  <Image
                    src={gear.image}
                    alt={gear.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-amber-400 border border-amber-500/30 text-[10px] font-extrabold uppercase tracking-wider">
                      {gear.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-1 rounded-xl bg-amber-500/90 text-black text-[11px] font-black shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {gear.badge}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors">
                  {gear.name}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {gear.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-amber-500" /> Fully Insured & Calibrated
                </span>
                <span className="text-amber-400/90 font-semibold">Bhagabati Studio Rig</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
