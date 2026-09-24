import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Award,
  Heart,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Users,
  ChevronRight,
} from "lucide-react";
import { STUDIO_INFO } from "@/lib/data";
import { GearShowcase } from "@/components/GearShowcase";

export default function AboutPage() {
  const milestones = [
    {
      year: "2010",
      title: "Founding in Nirakarpur",
      description: "Started with traditional film and early digital portraits at College Square, Nirakarpur, serving local families with utmost dedication.",
    },
    {
      year: "2016",
      title: "Digital Color Lab & Canvera Albums",
      description: "Expanded into high-end digital color correction, custom framing, and became an authorized Canvera luxury album partner.",
    },
    {
      year: "2020",
      title: "Cinematic 4K & Drone Revolution",
      description: "Pioneered Sony Alpha full-frame cinema lines and DJI Mavic drones in the Nirakarpur and Khordha wedding circuits.",
    },
    {
      year: "2026",
      title: "Sony FX3 Master Cinema Studio",
      description: "Now equipped with cinema-grade Sony FX3 rigs, dual candid masters, high-speed lighting strobes, and over 2,800+ celebrated stories.",
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#090a0f]">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
          <Award className="w-4 h-4" />
          <span>Our Legacy & Craft</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
          15+ Years Of Capturing <span className="gold-gradient-text">Nirakarpur&apos;s Stories</span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
          Founded with a passion for Odia culture, emotional authenticity, and cutting-edge cinema technology, Bhagabati Photo Studio is a trusted household name across Khordha, Puri & Bhubaneswar.
        </p>
      </div>

      {/* Story & Studio Presence */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Where Ancient Traditions Meet <span className="gold-gradient-text">Modern Cinema</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every Odia wedding is a symphony of emotions — the fragrance of fresh chandan, the sacred chanting of the Brahmin, the joyful laughter during the Ring Ceremony, and the tender farewell during the Bidai.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              At Bhagabati Photo Studio, our philosophy is simple: we never interrupt the sacred flow of your rituals. With high-aperture prime lenses and quiet documentary cinematography, we freeze genuine moments into timeless visual art.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#121522] border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Heart className="w-4 h-4 fill-amber-400" />
                  <span>Emotional Respect</span>
                </div>
                <p className="text-xs text-slate-400">Deep understanding of Vedic and Odia rituals.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#121522] border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Camera className="w-4 h-4" />
                  <span>Cinema Tech</span>
                </div>
                <p className="text-xs text-slate-400">Sony FX3 Cinema Line, 4K Drone & G-Master glass.</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider transition-all"
              >
                <span>Visit Our Nirakarpur Studio Lab</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden border border-amber-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80"
                alt="Bhagabati Studio Master Retouching"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#0f121e]/90 backdrop-blur-md border border-amber-500/25">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-extrabold text-base">Bhagabati Photo Studio</h3>
                    <p className="text-xs text-amber-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" /> College Square, Nirakarpur, Odisha
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black gold-gradient-text">2,800+</span>
                    <span className="text-[10px] text-slate-400 block uppercase">Weddings Done</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Our Journey In <span className="gold-gradient-text">Nirakarpur</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Growing alongside generations of families in Khordha & surrounding districts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#121522] border border-amber-500/20 relative space-y-3"
            >
              <div className="text-2xl font-black text-amber-400">{m.year}</div>
              <h3 className="text-base font-extrabold text-white">{m.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Camera Gear Section */}
      <GearShowcase />
    </div>
  );
}
