"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Sparkles,
  Send,
  CheckCircle2,
  Calendar,
  Navigation,
} from "lucide-react";
import confetti from "canvas-confetti";
import { STUDIO_INFO } from "@/lib/data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "Royal Wedding",
    date: "",
    location: "Nirakarpur, Odisha",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#f59e0b", "#fbbf24", "#d97706", "#ffffff", "#10b981"],
    });

    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `*New Contact Inquiry - Bhagabati Photo Studio Nirakarpur*
👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email || "N/A"}
🎉 *Event Type:* ${formData.eventType}
📅 *Event Date:* ${formData.date || "To be discussed"}
📍 *Location:* ${formData.location}
💬 *Message:* ${formData.message || "Please share availability and pricing."}`;

    window.open(
      `https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className="py-16 sm:py-24 bg-[#090a0f]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
          <MapPin className="w-4 h-4" />
          <span>Get In Touch</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
          Visit Our Studio In <span className="gold-gradient-text">Nirakarpur</span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          Have an upcoming wedding, sacred thread ritual, pre-wedding shoot, or need instant passport photos? We are ready to serve you!
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Map Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel p-8 rounded-3xl border border-amber-500/25 space-y-6">
              <h2 className="text-2xl font-black text-white">Studio Contact Details</h2>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#121522] border border-slate-800">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold">Studio Address:</strong>
                    <span className="text-xs text-slate-300 leading-relaxed block mt-1">
                      {STUDIO_INFO.fullAddress}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#121522] border border-slate-800">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <strong className="text-white block font-bold">Phone Lines:</strong>
                    <div className="flex flex-wrap gap-2 text-xs mt-1">
                      <a href={`tel:${STUDIO_INFO.phone1}`} className="text-amber-400 hover:underline font-semibold">
                        {STUDIO_INFO.phone1}
                      </a>
                      <span className="text-slate-600">/</span>
                      <a href={`tel:${STUDIO_INFO.phone2}`} className="text-amber-400 hover:underline font-semibold">
                        {STUDIO_INFO.phone2}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#121522] border border-slate-800">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <strong className="text-white block font-bold">Email Address:</strong>
                    <a href={`mailto:${STUDIO_INFO.email}`} className="text-xs text-slate-300 hover:text-amber-400 mt-1 block">
                      {STUDIO_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#121522] border border-slate-800">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <strong className="text-white block font-bold">Opening Timings:</strong>
                    <span className="text-xs text-slate-300 mt-1 block">
                      Monday to Sunday: 8:00 AM – 9:30 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Instant Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent(
                    "Hello Bhagabati Photo Studio! I want to consult regarding a photography shoot."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>WhatsApp Studio</span>
                </a>

                <a
                  href={`tel:${STUDIO_INFO.phone1.replace(/\s+/g, "")}`}
                  className="py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Map Preview Card */}
            <div className="rounded-3xl overflow-hidden border border-amber-500/25 bg-[#121522] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <h3 className="text-sm font-bold text-white">Nirakarpur Studio Location</h3>
                </div>
                <span className="text-xs text-amber-400 font-semibold">Near College Square</span>
              </div>

              {/* Visual Map Representation */}
              <div className="relative w-full h-48 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center text-center p-4">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-black flex items-center justify-center mx-auto shadow-[0_0_20px_#f59e0b] animate-bounce">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-white">Bhagabati Photo Studio</div>
                  <div className="text-[11px] text-slate-400">College Square Main Road, Nirakarpur, Khordha (752019)</div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Nirakarpur+Khordha+Odisha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Open in Google Maps</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Inquiry Form Column */}
          <div className="lg:col-span-7 bg-[#121522] border border-amber-500/25 rounded-3xl p-8 shadow-2xl">
            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Send Direct Inquiry</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                  Let&apos;s Discuss Your Event
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mb-8">
                  Fill in your event details below to check dates, receive customized quotations, or request home consultation.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Subhashree Mohapatra"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#181c2c] border border-slate-700 focus:border-amber-400 focus:outline-none text-white text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98610 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#181c2c] border border-slate-700 focus:border-amber-400 focus:outline-none text-white text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#181c2c] border border-slate-700 focus:border-amber-400 focus:outline-none text-white text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Event / Shoot Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#181c2c] border border-slate-700 focus:border-amber-400 focus:outline-none text-white text-sm"
                      >
                        <option value="Royal Wedding">Royal Wedding & Baarat</option>
                        <option value="Pre-Wedding Film">Cinematic Pre-Wedding Shoot</option>
                        <option value="Sacred Thread Ceremony">Bratopanayana (Thread Ceremony)</option>
                        <option value="Ring Ceremony / Engagement">Ring Ceremony / Engagement</option>
                        <option value="1st Birthday / Annaprashan">1st Birthday / Rice Ceremony</option>
                        <option value="Studio Portrait & Passport">Studio Portrait / Framing</option>
                        <option value="Drone Only Coverage">Drone Aerial Coverage</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Event Date (If Finalized)
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#181c2c] border border-slate-700 focus:border-amber-400 focus:outline-none text-white text-sm [color-scheme:dark]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Venue / Village / Town
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Nirakarpur / Khordha / Puri"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#181c2c] border border-slate-700 focus:border-amber-400 focus:outline-none text-white text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Message or Specific Requests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about the mandap setup, number of guests, album requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#181c2c] border border-slate-700 focus:border-amber-400 focus:outline-none text-white text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Booking Inquiry</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white">Thank You, {formData.name}!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Your inquiry has been received. Our team will contact you shortly on <strong>{formData.phone}</strong>.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Forward to WhatsApp</span>
                  </button>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
