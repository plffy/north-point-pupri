import type { Metadata } from "next";
import "./globals.css";
import NoticeTicker from "@/components/NoticeTicker";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "North Point Pupri — Public School & Premier Career Institute | Sitamarhi, Bihar",
  description:
    "North Point Pupri is a premier educational institution in Pupri (Sitamarhi, Bihar) providing CBSE-aligned school education, dedicated preparation for Navodaya (JNVST), Netarhat, Simultala, Sainik School, Olympiads, and target coaching for IIT-JEE & NEET-UG.",
  keywords: [
    "North Point Pupri",
    "School in Pupri",
    "Best school in Sitamarhi",
    "Navodaya preparation Bihar",
    "Netarhat entrance coaching",
    "Simultala Awasiya Vidyalaya coaching",
    "Sainik school coaching Sitamarhi",
    "IIT JEE coaching Pupri",
    "NEET medical coaching Bihar",
    "CBSE school Pupri",
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
        <NoticeTicker />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
