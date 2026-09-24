"use client";

import { useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CustomCursor } from "./CustomCursor";
import { BookingModal } from "./BookingModal";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#090a0f] text-slate-100 antialiased selection:bg-amber-400 selection:text-black">
      <CustomCursor />
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
