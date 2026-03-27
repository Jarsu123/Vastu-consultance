import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Healing Consultancy | Best Vastu Consultant & Astrology Services in India",
  description: "Transform your home and life with expert Vastu consultancy and Astrology services by Shalu Singh. Specialized in Vedic Numerology, Name Correction, and Home Vastu for prosperity and peace.",
  keywords: ["Vastu Consultant", "Astrology Services India", "Best Vastu Expert", "Shalu Singh Vastu", "Home Vastu Tips", "Vedic Numerology", "Business Vastu", "Name Correction Astrology"],
  authors: [{ name: "Shalu Singh" }],
  creator: "Healing Consultancy",
  publisher: "Healing Consultancy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Healing Consultancy | Best Vastu Consultant & Astrology Services",
    description: "Harnessing celestial movements and spatial harmonics for your prosperity. Expert Vastu guidance by Shalu Singh.",
    url: "https://healingconsultancy.com",
    siteName: "Healing Consultancy",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healing Consultancy | Expert Vastu & Astrology",
    description: "Bring peace and prosperity to your home with authentic Vastu principles.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://healingconsultancy.com",
  },
};

import SacredClickEffect from "@/components/SacredClickEffect";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable}`}>
        <SacredClickEffect />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
