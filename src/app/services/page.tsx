"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  HeartHandshake,
  Camera,
  Plane,
  Flame,
  Printer,
  CheckCircle2,
  Calendar,
  Clock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { SERVICES, formatINR, STUDIO_INFO } from "@/lib/data";
import { BookingModal } from "@/components/BookingModal";

export default function ServicesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleBook = (title: string) => {
    setSelectedService(title);
    setIsBookingOpen(true);
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "HeartHandshake":
        return <HeartHandshake className="w-8 h-8" />;
      case "Camera":
        return <Camera className="w-8 h-8" />;
      case "Plane":
        return <Plane className="w-8 h-8" />;
      case "Flame":
        return <Flame className="w-8 h-8" />;
      case "Printer":
        return <Printer className="w-8 h-8" />;
      default:
        return <Sparkles className="w-8 h-8" />;
    }
  };

  return (
    <div className="py-16 sm:py-24 bg-[#090a0f]">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
          <Sparkles className="w-4 h-4" />
          <span>Complete Visual Services</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
          Exceptional Photography & <span className="gold-gradient-text">Cinematography</span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
          From grand traditional Odia wedding ceremonies in Nirakarpur, Khordha & Puri to cinematic pre-wedding love stories, 5.1K drone flyovers, and luxury Italian photobooks.
        </p>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Media Column */}
              <div
                className={`lg:col-span-6 relative rounded-3xl overflow-hidden border border-amber-500/25 shadow-[0_20px_50px_rgba(0,0,0,0.8)] h-[380px] sm:h-[460px] group ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-70" />

                <div className="absolute top-4 left-4 p-3.5 rounded-2xl bg-black/70 backdrop-blur-md border border-amber-500/30 text-amber-400 shadow-xl">
                  {getServiceIcon(service.icon)}
                </div>

                {service.popular && (
                  <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-amber-500 text-black text-xs font-black uppercase tracking-wider shadow-lg">
                    ★ Highly Demanded
                  </div>
                )}

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0e111a]/85 backdrop-blur-md border border-amber-500/20 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Starting from</span>
                    <div className="text-xl font-black text-amber-400">
                      {formatINR(service.startingPrice)}
                    </div>
                  </div>
                  <button
                    onClick={() => handleBook(service.title)}
                    className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider transition-all"
                  >
                    Book Shoot
                  </button>
                </div>
              </div>

              {/* Text Column */}
              <div
                className={`lg:col-span-6 space-y-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
                  <span>Bhagabati Specialty</span>
                  <span className="text-slate-600">•</span>
                  <span>Nirakarpur Hub</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                  {service.title}
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Features & Deliverables:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#121522] border border-slate-800 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={() => handleBook(service.title)}
                    className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all transform hover:scale-105"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Inquire for {service.title}</span>
                  </button>

                  <a
                    href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent(
                      `Hello Bhagabati Studio! I'm interested in details for: ${service.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 rounded-2xl bg-[#161a26] hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-all flex items-center gap-1.5"
                  >
                    <span>Instant WhatsApp Chat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={selectedService}
      />
    </div>
  );
}
