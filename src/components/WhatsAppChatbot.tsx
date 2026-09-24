"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Phone, Calendar, Camera, Star, MapPin } from "lucide-react";
import { STUDIO_INFO } from "@/lib/data";
interface Message {
    id: number;
    from: "bot" | "user";
    text: string;
    time: string;
}
const QUICK_REPLIES = [
    { label: "📸 Wedding Packages", msg: "I want to know about your wedding photography packages and pricing." },
    { label: "📅 Check Availability", msg: "Is your studio available for my wedding date? I'd like to check availability." },
    { label: "🚁 Drone Videography", msg: "I'm interested in drone aerial videography for my event." },
    { label: "💰 Get a Quote", msg: "Can you give me a custom quote for my wedding photography?" },
    { label: "🗺️ Studio Location", msg: "Where is your studio located? How do I get there?" },
    { label: "📞 Call Me Back", msg: "Please call me back for a consultation." },
];
const getTime = () =>
    new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true });
export function WhatsAppChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            from: "bot",
            text: `👋 *Namaste! Welcome to ${STUDIO_INFO.name}*\n\nI'm your virtual assistant. How can I help you today? Choose a quick option below or type your message!`,
            time: getTime(),
        },
    ]);
    const [inputText, setInputText] = useState("");
    const [showPulse, setShowPulse] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    useEffect(() => {