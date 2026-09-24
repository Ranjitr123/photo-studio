"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  Phone,
  User,
  MapPin,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  Clock,
} from "lucide-react";
import confetti from "canvas-confetti";
import { STUDIO_INFO } from "@/lib/data";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export function BookingModal({
  isOpen,
  onClose,
  preselectedService = "",
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: preselectedService || "Royal Wedding",
    date: "",
    location: "Nirakarpur, Odisha",
    packageChoice: "Golden Royal Wedding",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#f59e0b", "#fbbf24", "#d97706", "#ffffff", "#10b981"],
    });

    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = `*New Booking Request - Bhagabati Photo Studio Nirakarpur*
👤 *Client Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
🎉 *Event Type:* ${formData.eventType}
📅 *Event Date:* ${formData.date || "To be discussed"}
📍 *Location:* ${formData.location}
💼 *Preferred Package:* ${formData.packageChoice}
📝 *Special Notes:* ${formData.notes || "None"}`;

    window.open(
      `https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-[#0e111a] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(245,158,11,0.2)] z-10 my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      Book Your Date
                    </h3>
                    <p className="text-xs text-amber-400/90 font-medium">
                      Bhagabati Photo Studio • Nirakarpur, Khordha
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mb-6">
                  Reserve your wedding, pre-wedding shoot or studio portrait session. Get instant availability & custom quote.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-amber-400" /> Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Soumya Ranjan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#161a26] border border-slate-700 focus:border-amber-400 focus:outline-none text-white text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-amber-400" /> Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98610 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#161a26] border border-slate-700 focus:border-amber-400 focus:outline-none text-white text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Event / Shoot Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#161a26] border border-slate-700 focus:border-amber-400 focus:outline-none text-white text-sm"
                      >
                        <option value="Royal Wedding">Royal Wedding & Baarat</option>
                        <option value="Pre-Wedding Film">Cinematic Pre-Wedding Shoot</option>
                        <option value="Sacred Thread (Bratopanayana)">Bratopanayana (Thread Ceremony)</option>
                        <option value="Ring Ceremony / Engagement">Engagement / Ring Ceremony</option>
                        <option value="1st Birthday / Rice Ceremony">1st Birthday / Annaprashan</option>
                        <option value="Studio Portrait & Passport">Studio Portrait / Framing</option>
                        <option value="Drone Only Coverage">Drone Aerial Coverage</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-amber-400" /> Event Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#161a26] border border-slate-700 focus:border-amber-400 focus:outline-none text-white text-sm [color-scheme:dark]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" /> Event Venue / Town
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Nirakarpur / Khordha / Puri"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#161a26] border border-slate-700 focus:border-amber-400 focus:outline-none text-white text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Preferred Package
                      </label>
                      <select
                        value={formData.packageChoice}
                        onChange={(e) => setFormData({ ...formData, packageChoice: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#161a26] border border-slate-700 focus:border-amber-400 focus:outline-none text-white text-sm"
                      >
                        <option value="Golden Royal Wedding (₹49,999)">Golden Royal Wedding (₹49,999)</option>
                        <option value="Diamond Royale VIP (₹89,999)">Diamond Royale VIP (₹89,999)</option>
                        <option value="Silver Traditional (₹24,999)">Silver Traditional (₹24,999)</option>
                        <option value="Custom Budget Package">Custom Budget Package</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Special Requirements or Ritual Notes
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Tell us about your mandap, drone needs, or specific rituals..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#161a26] border border-slate-700 focus:border-amber-400 focus:outline-none text-white text-sm resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Confirm & Request Quote</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-500 flex items-center justify-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    Quick Response within 30 minutes • Zero cancellation pressure
                  </p>
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15 }}
                  className="w-16 h-16 bg-emerald-500/20 border border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle2 className="w-8 h-8" />
                </motion.div>

                <h3 className="text-2xl font-extrabold text-white mb-2">
                  Inquiry Received!
                </h3>
                <p className="text-sm text-slate-300 mb-6 max-w-md mx-auto">
                  Thank you, <span className="text-amber-400 font-semibold">{formData.name}</span>! Our lead photographer at Bhagabati Photo Studio Nirakarpur will check date availability for your event on <span className="text-white font-semibold">{formData.date || "your selected date"}</span>.
                </p>

                <div className="p-4 rounded-2xl bg-[#161a26] border border-amber-500/20 text-left text-xs space-y-2 mb-6 text-slate-300">
                  <div><strong>Event:</strong> {formData.eventType}</div>
                  <div><strong>Location:</strong> {formData.location}</div>
                  <div><strong>Package:</strong> {formData.packageChoice}</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send directly to WhatsApp</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-all"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
