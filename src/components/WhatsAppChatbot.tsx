"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles, CheckCheck } from "lucide-react";
import { STUDIO_INFO } from "@/lib/data";

interface Message {
    id: string;
    text: string;
    sender: "bot" | "user";
    timestamp: string;
    options?: { label: string; action: string }[];
}

const INITIAL_MESSAGES: Message[] = [
    {
        id: "1",
        text: "Namaste! 🙏 Welcome to Bhagabati Photo Studio, Nirakarpur. How can we help capture your memorable moments today?",
        sender: "bot",
        timestamp: "Just now",
        options: [
            { label: "📸 Wedding / Pre-Wedding Inquiry", action: "wedding" },
            { label: "💰 View Pricing & Packages", action: "pricing" },
            { label: "📍 Studio Location & Timings", action: "location" },
            { label: "💬 Chat directly on WhatsApp", action: "whatsapp_direct" },
        ],
    },
];

export function WhatsAppChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleOptionClick = (action: string, label: string) => {
        const userMsg: Message = {
            id: Date.now().toString(),
            text: label,
            sender: "user",
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };

        setMessages((prev) => [...prev, userMsg]);
        setIsTyping(true);

        setTimeout(() => {
            let botMsg: Message;
            const timeStr = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

            switch (action) {
                case "wedding":
                    botMsg = {
                        id: (Date.now() + 1).toString(),
                        text: "We specialize in Cinematic Royal Weddings & Pre-wedding films in Odisha! Our team uses Sony FX3 cameras and 4K Drones to capture Vara Anukula, Baarat, & Ring ceremonies.",
                        sender: "bot",
                        timestamp: timeStr,
                        options: [
                            { label: "💬 Connect with Photographer on WhatsApp", action: "whatsapp_wedding" },
                            { label: "📞 Call +91 83289 64681", action: "call_primary" },
                        ],
                    };
                    break;
                case "pricing":
                    botMsg = {
                        id: (Date.now() + 1).toString(),
                        text: "Our wedding packages start from ₹25,000 for Silver, ₹45,000 for Gold, and ₹85,000 for Royal Premium with Italian Velvet Canvera Albums & Drone coverage!",
                        sender: "bot",
                        timestamp: timeStr,
                        options: [
                            { label: "📄 Get Customized Quote on WhatsApp", action: "whatsapp_quote" },
                            { label: "📞 Call +91 82496 70159", action: "call_secondary" },
                        ],
                    };
                    break;
                case "location":
                    botMsg = {
                        id: (Date.now() + 1).toString(),
                        text: `📍 Location: ${STUDIO_INFO.shortAddress}\n⏰ Timings: ${STUDIO_INFO.openingHours}\n📞 Contact: 8328964681 / 8249670159`,
                        sender: "bot",
                        timestamp: timeStr,
                        options: [
                            { label: "🗺️ Open in Google Maps", action: "maps" },
                            { label: "💬 Send Location on WhatsApp", action: "whatsapp_location" },
                        ],
                    };
                    break;
                case "whatsapp_direct":
                case "whatsapp_wedding":
                case "whatsapp_quote":
                case "whatsapp_location":
                    const messageText = encodeURIComponent(
                        `Hello Bhagabati Photo Studio! I found your website and want to inquire about ${action === "whatsapp_wedding" ? "Wedding Photography" : action === "whatsapp_quote" ? "Package Rates" : "Studio Booking"
                        }.`
                    );
                    window.open(`https://wa.me/918328964681?text=${messageText}`, "_blank");
                    botMsg = {
                        id: (Date.now() + 1).toString(),
                        text: "Opening WhatsApp chat with our studio manager (+91 83289 64681)...",
                        sender: "bot",
                        timestamp: timeStr,
                    };
                    break;
                case "call_primary":
                    window.location.href = "tel:8328964681";
                    botMsg = {
                        id: (Date.now() + 1).toString(),
                        text: "Calling Studio Manager at +91 83289 64681...",
                        sender: "bot",
                        timestamp: timeStr,
                    };
                    break;
                case "call_secondary":
                    window.location.href = "tel:8249670159";
                    botMsg = {
                        id: (Date.now() + 1).toString(),
                        text: "Calling Studio Line 2 at +91 82496 70159...",
                        sender: "bot",
                        timestamp: timeStr,
                    };
                    break;
                case "maps":
                    window.open(
                        "https://maps.google.com/?q=Bhagabati+Photo+Studio+Nirakarpur+Odisha",
                        "_blank"
                    );
                    botMsg = {
                        id: (Date.now() + 1).toString(),
                        text: "Opening Google Maps location for Bhagabati Photo Studio...",
                        sender: "bot",
                        timestamp: timeStr,
                    };
                    break;
                default:
                    botMsg = {
                        id: (Date.now() + 1).toString(),
                        text: "Thanks for messaging! Click below to open WhatsApp chat with us directly.",
                        sender: "bot",
                        timestamp: timeStr,
                        options: [{ label: "💬 Open WhatsApp Chat (8328964681)", action: "whatsapp_direct" }],
                    };
            }

            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
        }, 600);
    };

    const handleSendCustomMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const encoded = encodeURIComponent(`Hi Bhagabati Studio! ${inputText}`);
        window.open(`https://wa.me/918328964681?text=${encoded}`, "_blank");

        const userMsg: Message = {
            id: Date.now().toString(),
            text: inputText,
            sender: "user",
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };

        setMessages((prev) => [
            ...prev,
            userMsg,
            {
                id: (Date.now() + 1).toString(),
                text: "Redirecting your message to our official WhatsApp number (+91 83289 64681) for instant reply!",
                sender: "bot",
                timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            },
        ]);

        setInputText("");
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="w-[360px] sm:w-[400px] h-[520px] mb-4 bg-[#0d0711]/95 backdrop-blur-2xl border border-emerald-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
                    {/* Header */}
                    <div className="p-4 bg-gradient-to-r from-emerald-950/80 via-emerald-900/60 to-[#450C3F]/80 border-b border-emerald-500/20 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg">
                                    <MessageCircle className="w-5 h-5 fill-white" />
                                </div>
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#0d0711] rounded-full animate-pulse" />
                            </div>
                            <div>
                                <div className="flex items-center gap-1.5">
                                    <h3 className="font-bold text-white text-sm">Bhagabati Studio Support</h3>
                                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                                </div>
                                <p className="text-[11px] text-emerald-300/80 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    Online | +91 83289 64681
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                            aria-label="Close Chat"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Contact Numbers Bar */}
                    <div className="px-4 py-2 bg-emerald-950/40 border-b border-emerald-500/10 flex items-center justify-between text-xs text-emerald-200">
                        <span className="text-[11px]">Primary: <a href="tel:8328964681" className="font-semibold underline hover:text-emerald-400">8328964681</a></span>
                        <span className="text-[11px]">Phone 2: <a href="tel:8249670159" className="font-semibold underline hover:text-emerald-400">8249670159</a></span>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"
                                    }`}
                            >
                                <div
                                    className={`max-w-[85%] p-3 rounded-2xl ${msg.sender === "user"
                                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-br-none shadow-lg"
                                        : "bg-white/5 border border-white/10 text-slate-200 rounded-bl-none shadow-inner"
                                        }`}
                                >
                                    <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>

                                    <div className="mt-1 flex items-center justify-end gap-1 text-[10px] opacity-60">
                                        <span>{msg.timestamp}</span>
                                        {msg.sender === "user" && <CheckCheck className="w-3 h-3 text-emerald-300" />}
                                    </div>
                                </div>

                                {/* Quick Action Buttons */}
                                {msg.options && (
                                    <div className="mt-2.5 space-y-1.5 w-full">
                                        {msg.options.map((opt, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handleOptionClick(opt.action, opt.label)}
                                                className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-200 hover:text-white transition-all text-xs flex items-center justify-between group"
                                            >
                                                <span>{opt.label}</span>
                                                <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    →
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-white/5 border border-white/10 w-20">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce" />
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.2s]" />
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]" />
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick WhatsApp Action & Direct Input */}
                    <form onSubmit={handleSendCustomMessage} className="p-3 border-t border-emerald-500/20 bg-[#0d0711] flex items-center gap-2">
                        <input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Type inquiry to send on WhatsApp..."
                            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                        />
                        <button
                            type="submit"
                            className="p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white transition-all shadow-md"
                            aria-label="Send via WhatsApp"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            )}

            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative group flex items-center gap-3 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white font-semibold shadow-2xl shadow-emerald-900/50 hover:scale-105 active:scale-95 transition-all duration-300 border border-emerald-400/30"
                aria-label="WhatsApp Chat Assistant"
            >
                <div className="relative flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 fill-white" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping opacity-75" />
                </div>
                <span className="hidden sm:inline-block text-sm tracking-wide">Chat on WhatsApp</span>
                <span className="px-2 py-0.5 rounded-full bg-white/20 text-[11px] font-mono">8328964681</span>
            </button>
        </div>
    );
}
