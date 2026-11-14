"use client";

import React, { useState } from "react";
import Link from "next/link";

interface GalleryItem {
  id: string;
  category: "all" | "campus" | "academics" | "events" | "sports";
  title: string;
  desc: string;
  gradient: string;
  icon: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    category: "campus",
    title: "Main Campus & Administrative Wing",
    desc: "Spacious entrance with green lawns and assembly arena.",
    gradient: "from-blue-600 via-indigo-700 to-slate-900",
    icon: "🏫",
  },
  {
    id: "2",
    category: "academics",
    title: "Digital Smart Classroom in Session",
    desc: "Interactive visual learning boards in middle school class.",
    gradient: "from-indigo-600 via-purple-700 to-slate-900",
    icon: "💻",
  },
  {
    id: "3",
    category: "academics",
    title: "Composite Science & STEM Laboratory",
    desc: "Students performing physics and chemistry practical demonstrations.",
    gradient: "from-emerald-600 via-teal-700 to-slate-900",
    icon: "🔬",
  },
  {
    id: "4",
    category: "sports",
    title: "Annual Sports Day Championship",
    desc: "Sprint races, relay events, and cricket tournament finals.",
    gradient: "from-amber-500 via-orange-600 to-slate-900",
    icon: "🏃",
  },
  {
    id: "5",
    category: "events",
    title: "Republic Day & Cultural Fest Celebration",
    desc: "Flag hoisting, patriotic songs, and traditional dance performances.",
    gradient: "from-rose-600 via-pink-700 to-slate-900",
    icon: "🇮🇳",
  },
  {
    id: "6",
    category: "campus",
    title: "Rich Library & Quiet Reading Arena",
    desc: "Over 2,500 titles, NCERT exemplars, and competitive guides.",
    gradient: "from-cyan-600 via-blue-700 to-slate-900",
    icon: "📚",
  },
  {
    id: "7",
    category: "events",
    title: "Science Exhibition & Model Showcase",
    desc: "Working models on solar irrigation, hydraulics, and green energy.",
    gradient: "from-violet-600 via-indigo-700 to-slate-900",
    icon: "⚡",
  },
  {
    id: "8",
    category: "sports",
    title: "Morning Yoga & Karate Drill",
    desc: "Holistic fitness, self-defense basics, and concentration exercises.",
    gradient: "from-teal-600 via-emerald-700 to-slate-900",
    icon: "🧘",
  },
  {
    id: "9",
    category: "academics",
    title: "Navodaya & Olympiad Special Batch",
    desc: "Intensive OMR mock test practice and shortcut sessions.",
    gradient: "from-slate-700 via-indigo-900 to-slate-950",
    icon: "📝",
  },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<"all" | "campus" | "academics" | "events" | "sports">("all");

  const filteredItems =
    filter === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black">Campus Life in Pictures</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Catch glimpses of our vibrant campus, classrooms, laboratory experiments, celebrations, and sports activities in Pupri.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === "all"
                ? "bg-indigo-900 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            All Glimpses ({GALLERY_ITEMS.length})
          </button>
          <button
            onClick={() => setFilter("campus")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === "campus"
                ? "bg-indigo-900 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            🏫 Campus &amp; Labs
          </button>
          <button
            onClick={() => setFilter("academics")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === "academics"
                ? "bg-indigo-900 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            📚 Academics &amp; Classes
          </button>
          <button
            onClick={() => setFilter("sports")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === "sports"
                ? "bg-indigo-900 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            🏃 Sports &amp; Games
          </button>
          <button
            onClick={() => setFilter("events")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === "events"
                ? "bg-indigo-900 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            🎉 Events &amp; Fests
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              {/* Graphic Placeholder representing actual campus photo */}
              <div
                className={`h-48 sm:h-56 bg-gradient-to-tr ${item.gradient} p-6 flex flex-col justify-between text-white relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className="flex justify-between items-start">
                  <span className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-xl shadow-inner">
                    {item.icon}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-slate-200 border border-white/10">
                    {item.category}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-amber-300 font-semibold">North Point Pupri</span>
                  <h3 className="text-base font-bold text-white leading-snug">{item.title}</h3>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 bg-white">
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social / Video Strip */}
      <section className="bg-slate-50 border-t border-slate-200 py-12 px-4 text-center">
        <div className="max-w-md mx-auto space-y-3">
          <h3 className="text-lg font-bold text-slate-900">Want to see more videos &amp; event updates?</h3>
          <p className="text-xs text-slate-600">
            Follow our official social media channels and WhatsApp status for daily updates on student activities in Pupri.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/918294407171"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow transition-colors"
            >
              Connect to School Broadcast on WhatsApp: 8294407171
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
