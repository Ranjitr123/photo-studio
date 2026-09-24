"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Camera,
  Sparkles,
  HeartHandshake,
  Plane,
  Flame,
  Printer,
  ChevronRight,
  MapPin,
  Phone,
  MessageCircle,
  Award,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { HeroSlider } from "@/components/HeroSlider";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { InteractiveGallery } from "@/components/InteractiveGallery";
import { GearShowcase } from "@/components/GearShowcase";
import { Testimonials } from "@/components/Testimonials";
import { FAQSection } from "@/components/FAQSection";
import { PackageCalculator } from "@/components/PackageCalculator";
import { BookingModal } from "@/components/BookingModal";
import { SERVICES, PRICING_PACKAGES, STUDIO_INFO, formatINR } from "@/lib/data";

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenBookingWithService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsBookingOpen(true);
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6" />;
      case "Camera":
        return <Camera className="w-6 h-6" />;
      case "Plane":
        return <Plane className="w-6 h-6" />;
      case "Flame":
        return <Flame className="w-6 h-6" />;
      case "Printer":
        return <Printer className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <div>
      {/* 1. Cinematic Hero Section */}
      <HeroSlider onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 2. Studio Identity Banner */}
      <section className="py-12 bg-[#0c0e17] border-y border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-[#121522] border border-slate-800">
              <div className="text-3xl sm:text-4xl font-black gold-gradient-text">15+</div>
              <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">Years in Nirakarpur</div>
              <div className="text-[10px] text-slate-500">Trusted Since 2010</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#121522] border border-slate-800">
              <div className="text-3xl sm:text-4xl font-black gold-gradient-text">2,800+</div>
              <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">Weddings & Rituals</div>
              <div className="text-[10px] text-slate-500">Odia Tradition Experts</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#121522] border border-slate-800">
              <div className="text-3xl sm:text-4xl font-black gold-gradient-text">4K 120fps</div>
              <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">Cinema Line Cameras</div>
              <div className="text-[10px] text-slate-500">Sony FX3 & A7IV Master Rig</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#121522] border border-slate-800">
              <div className="text-3xl sm:text-4xl font-black gold-gradient-text">100%</div>
              <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">On-Time Album Delivery</div>
              <div className="text-[10px] text-slate-500">Canvera & Velvet Finish</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="py-24 bg-[#090a0f] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Specialties</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                Crafted For Your <span className="gold-gradient-text">Biggest Milestones</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
                From grand traditional Odia wedding ceremonies to intimate pre-wedding films and studio portraits.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#161a26] hover:bg-slate-800 text-amber-400 font-bold text-xs uppercase tracking-wider border border-amber-500/30 hover:border-amber-400 transition-all self-start md:self-auto"
            >
              <span>View All Services</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative rounded-3xl overflow-hidden glass-panel border border-amber-500/15 hover:border-amber-500/50 flex flex-col justify-between transition-all duration-300 bg-[#121522]"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121522] via-[#121522]/40 to-transparent" />

                    {service.popular && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full bg-amber-500 text-black text-[10px] font-black tracking-wider uppercase shadow-lg flex items-center gap-1">
                          <Flame className="w-3 h-3 fill-black" />
                          Most Booked
                        </span>
                      </div>
                    )}

                    <div className="absolute bottom-4 left-4 p-3 rounded-2xl bg-amber-500/10 backdrop-blur-md border border-amber-500/30 text-amber-400 shadow-md">
                      {getServiceIcon(service.icon)}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="mt-4 space-y-2">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-2 text-xs text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">Starting from</span>
                    <span className="text-base font-black text-amber-400">
                      {formatINR(service.startingPrice)}
                    </span>
                  </div>

                  <button
                    onClick={() => handleOpenBookingWithService(service.title)}
                    className="px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-black text-amber-400 border border-amber-500/30 text-xs font-bold transition-all flex items-center gap-1.5"
                  >
                    <span>Book Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive RAW vs Color Graded Masterpiece Slider */}
      <BeforeAfterSlider />

      {/* 5. Featured Portfolio Showcase */}
      <section className="py-12 bg-[#090a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
              <Camera className="w-3.5 h-3.5" />
              <span>Real Wedding Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Moments Captured In <span className="gold-gradient-text">Nirakarpur & Beyond</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Explore our curated portfolio of royal Odia weddings, scenic pre-wedding couples, and vibrant cultural traditions.
            </p>
          </div>

          <InteractiveGallery limit={6} showFilters={true} />

          <div className="text-center mt-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(245,158,11,0.3)] transition-all hover:scale-105"
            >
              <span>Explore Complete 2026-2027 Gallery</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Pricing Packages Preview */}
      <section className="py-24 bg-[#07090f] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Transparent Studio Pricing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Featured Wedding <span className="gold-gradient-text">Packages</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-4">
              Carefully curated packages designed to offer cinematic 4K coverage, luxury albums, and aerial drone cinematography for weddings of every scale.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PRICING_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular
                    ? "bg-[#141828] border-2 border-amber-400 shadow-[0_0_40px_rgba(245,158,11,0.25)] scale-105"
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

                  {/* Deliverables */}
                  <div className="py-6 space-y-3">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      What&apos;s Included:
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

                <div className="pt-4 border-t border-slate-800">
                  <button
                    onClick={() => handleOpenBookingWithService(pkg.name)}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      pkg.popular
                        ? "bg-amber-400 hover:bg-amber-300 text-black shadow-lg hover:scale-105"
                        : "bg-slate-800 hover:bg-slate-700 text-white"
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book {pkg.name}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-bold transition-colors"
            >
              <span>Need a fully custom quote? Use our Custom Package Estimator</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Interactive Custom Package Estimator */}
      <PackageCalculator />

      {/* 8. Gear Showcase */}
      <GearShowcase />

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. FAQ Section */}
      <FAQSection />

      {/* 11. Studio Location & Map CTA Section */}
      <section className="py-20 bg-[#06070a] border-t border-amber-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase">
                <MapPin className="w-3.5 h-3.5" />
                <span>Visit Our Studio Lab</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Located At The Heart of <span className="gold-gradient-text">Nirakarpur, Odisha</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Step into our fully air-conditioned digital color lab near College Square for album previews, portrait sessions, passport photos, and one-on-one wedding consultations.
              </p>

              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{STUDIO_INFO.fullAddress}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>{STUDIO_INFO.phone1} / {STUDIO_INFO.phone2}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent("Hello! I want to visit Bhagabati Photo Studio in Nirakarpur.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Chat on WhatsApp</span>
                </a>

                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 transition-all"
                >
                  <span>Directions & Details</span>
                </Link>
              </div>
            </div>

            {/* Visual Studio Card */}
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl h-80 sm:h-96">
              <Image
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=1200&q=80"
                alt="Bhagabati Photo Studio Nirakarpur Lab Interior"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-amber-500/30">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-extrabold text-sm">Bhagabati Digital Studio</h4>
                    <p className="text-xs text-amber-400">College Square, Nirakarpur</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                    Open Today
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={selectedService}
      />
    </div>
  );
}
