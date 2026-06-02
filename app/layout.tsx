import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Career Compass - Discover Your Future Career Path",
  description: "An informative guide for students to explore tech, design, marketing, and business careers with detailed roadmaps, salary insights, and an AI career simulator.",
  keywords: ["career guidance", "skills roadmap", "career paths", "software engineer", "data scientist", "AI career advisor", "student guide"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 bg-grid-pattern relative overflow-x-hidden selection:bg-indigo-500/30 selection:text-white">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9139550892247766" crossorigin="anonymous"></script>
        {/* Glow ambient background effects wrapped to prevent stretching page height */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/5 blur-[150px] animate-pulse-glow" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-violet-500/5 blur-[150px] animate-pulse-glow" />
        </div>

        <Navbar />
        <main className="flex-1 flex flex-col relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
