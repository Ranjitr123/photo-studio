import Link from "next/link";
import {
  Camera,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  ShieldCheck,
  Award,
  Sparkles,
  Share2,
} from "lucide-react";
import { STUDIO_INFO, SERVICES } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative bg-[#06070a] border-t border-amber-500/20 text-slate-400 overflow-hidden pt-16 pb-12">
      {/* Subtle background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Legacy */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-black shadow-lg">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-white text-lg tracking-tight">
                  BHAGABATI PHOTO STUDIO
                </span>
                <p className="text-xs text-amber-400 font-semibold tracking-wider">
                  NIRAKARPUR, ODISHA
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Crafting cinematic wedding films, royal bridal portraits, and capturing sacred Odia family traditions for over 15 years with cinema-grade Sony FX3 & 4K drone cinematography.
            </p>

            <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">4.9 / 5.0</span>
              <span className="text-slate-400">({STUDIO_INFO.reviewsCount}+ Local Reviews)</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.id}`}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-amber-500 text-xs">›</span>
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links & Highlights */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              Studio Highlights
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/portfolio" className="hover:text-amber-400 transition-colors">
                  Wedding & Pre-Wedding Gallery
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-amber-400 transition-colors">
                  2026-2027 Wedding Packages
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  Our High-End Camera Gears
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Book Studio Portrait / Passport Photos
                </Link>
              </li>
              <li>
                <Link href="/packages#calculator" className="hover:text-amber-400 transition-colors">
                  Interactive Price Calculator
                </Link>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:scale-110 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:scale-110 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:scale-110 transition-all"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 4: Studio Location & Contact */}
          <div className="space-y-3.5">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              Studio Location
            </h3>

            <div className="flex items-start gap-3 text-sm text-slate-300">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <span>{STUDIO_INFO.fullAddress}</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-300">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <div className="flex flex-col">
                <a href={`tel:${STUDIO_INFO.phone1}`} className="hover:text-amber-400 font-semibold">
                  {STUDIO_INFO.phone1}
                </a>
                <a href={`tel:${STUDIO_INFO.phone2}`} className="hover:text-amber-400 text-xs text-slate-400">
                  {STUDIO_INFO.phone2}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-300">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <a href={`mailto:${STUDIO_INFO.email}`} className="hover:text-amber-400 truncate">
                {STUDIO_INFO.email}
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs text-amber-300/90 pt-1">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Open 7 Days: 8:00 AM – 9:30 PM</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright & guarantees */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-amber-400" /> 100% Satisfaction & RAW Backup Guarantee
            </span>
          </div>

          <p>
            © {new Date().getFullYear()} Bhagabati Photo Studio, Nirakarpur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
