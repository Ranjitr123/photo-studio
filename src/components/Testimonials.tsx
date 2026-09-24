"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, Heart, MapPin, CheckCircle } from "lucide-react";
import { TESTIMONIALS, STUDIO_INFO } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="py-24 bg-[#06070a] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Heart className="w-3.5 h-3.5 fill-amber-400" />
            <span>Real Couples & Families</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Loved By Families Across <span className="gold-gradient-text">Nirakarpur & Odisha</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4">
            Over 2,800+ families have trusted us to capture their most precious milestones with care, respect, and cinematic artistry.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="glass-panel p-8 rounded-3xl border border-amber-500/20 flex flex-col justify-between relative shadow-xl hover:border-amber-500/40 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-amber-500/20 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400 shadow-md shrink-0">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-black text-white">{t.name}</h4>
                  <div className="flex items-center gap-1.5 text-xs text-amber-400/90 font-medium">
                    <MapPin className="w-3 h-3" />
                    <span>{t.location}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 block">
                    {t.eventType} • {t.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Rating Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-[#121522] border border-amber-500/20 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-black font-black text-xl flex items-center justify-center shadow-lg">
              4.9
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-1.5 justify-center sm:justify-start">
                <span>Google Verified Reviews</span>
                <CheckCircle className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-xs text-slate-400">
                Rated 4.9/5 based on 340+ local client reviews in Nirakarpur, Khordha.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent("Hello Bhagabati Photo Studio! I would like to read more customer reviews / discuss booking.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold transition-colors whitespace-nowrap"
          >
            Leave a Review
          </a>
        </div>
      </div>
    </section>
  );
}
