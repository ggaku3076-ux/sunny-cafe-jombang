import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Nunito, Satisfy, Oswald } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const satisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  weight: ["400"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jombang.sunnycafe.id"),
  title: "Sunny Cafe Jombang | Cafe Aesthetic Tropis & Family Friendly",
  description: "Sunny Cafe Jombang menyajikan kopi premium, menu sehat smoothies bowl, makanan barat & nusantara. Nikmati suasana aesthetic bertema tropis ala Bali dengan area ramah keluarga dan playground di Jombang.",
  keywords: [
    "Sunny Cafe Jombang", 
    "Cafe Jombang", 
    "Cafe Aesthetic Jombang", 
    "Cafe Bali Jombang", 
    "Cafe Playground Jombang", 
    "Smoothies Bowl Jombang", 
    "Kuliner Jombang",
    "Kopi Jombang",
    "Tempat Nongkrong Jombang",
    "WFC Jombang"
  ],
  authors: [{ name: "Sunny Cafe Jombang Team" }],
  openGraph: {
    title: "Sunny Cafe Jombang | Cafe Aesthetic Tropis & Family Friendly",
    description: "Sunny Cafe Jombang menyajikan kopi premium, menu sehat smoothies bowl, makanan barat & nusantara. Nikmati suasana aesthetic bertema tropis ala Bali dengan area ramah keluarga dan playground di Jombang.",
    url: "https://jombang.sunnycafe.id",
    siteName: "Sunny Cafe Jombang",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/Asset/LOGO.png",
        width: 800,
        height: 800,
        alt: "Sunny Cafe Jombang Logo",
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${nunito.variable} ${satisfy.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-light text-brand-dark selection:bg-brand-pink selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
