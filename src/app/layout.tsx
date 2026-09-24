import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/MainLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhagabati Photo Studio Nirakarpur | Royal Wedding & Cinematic Photography",
  description:
    "Bhagabati Photo Studio in Nirakarpur, Odisha offers luxury wedding photography, cinematic 4K videography, drone aerial shoots, pre-wedding films, and instant digital lab portraits. 15+ years of trusted excellence.",
  keywords: [
    "Bhagabati Photo Studio",
    "Photo Studio Nirakarpur",
    "Best Wedding Photographer Nirakarpur",
    "Wedding Photography Khordha",
    "Cinematic Pre Wedding Odisha",
    "Drone Videography Nirakarpur",
    "Canvera Album Printing Nirakarpur",
    "Passport Photo Nirakarpur",
    "Digital Studio Odisha",
  ],
  openGraph: {
    title: "Bhagabati Photo Studio Nirakarpur | Cinematic & Wedding Photography",
    description: "Preserve your sacred moments in pure cinematic brilliance. Book your wedding and pre-wedding shoots with Bhagabati Photo Studio Nirakarpur.",
    url: "https://bhagabatiphotostudio.in",
    siteName: "Bhagabati Photo Studio Nirakarpur",
    images: [
      {
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Bhagabati Photo Studio Nirakarpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#090a0f] text-slate-100">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
