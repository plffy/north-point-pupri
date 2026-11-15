import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import NoticeTicker from "@/components/NoticeTicker";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#0c1a30",
};

export const metadata: Metadata = {
  title: "North Point Children Academy | Rajbag, Pupri & Bahera Zahidpur | School & Career Institute",
  description:
    "North Point Children Academy is a premier educational institution in Sitamarhi (Bihar) with branches at Rajbag (Pupri) and Bahera Zahidpur (Nanpur), providing CBSE-aligned education, Navodaya (JNVST), Netarhat, Simultala, Sainik School, Olympiad preparation, and IIT-JEE/NEET coaching. Mobile: 8294407171.",
  keywords: [
    "North Point Children Academy",
    "North Point Children Academy Pupri",
    "North Point Children Academy Bahera Zahidpur",
    "School in Rajbag Pupri",
    "School in Bahera Zahidpur Nanpur",
    "Best school in Sitamarhi",
    "Navodaya preparation Bihar",
    "Netarhat entrance coaching",
    "Simultala Awasiya Vidyalaya coaching",
    "IIT JEE coaching Pupri",
    "NEET coaching Sitamarhi",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 selection:bg-amber-400 selection:text-slate-950">
        <LanguageProvider>
          <NoticeTicker />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
