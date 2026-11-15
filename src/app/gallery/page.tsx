"use client";

import React, { useState } from "react";
import Link from "next/link";

interface GalleryItem {
  id: string;
  category: "all" | "campus" | "academics" | "events" | "sports";
  title: string;
  desc: string;
  image?: string;
  gradient?: string;
  icon: string;
  badge?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "0",
    category: "campus",
    title: "Multi-Story School Campus & Building Facade",
    desc: "Main school campus at Pupri featuring arched architectural windows, entrance gate, and rooftop Hindi signboard 'नॉर्थ प्वाइंट चिल्ड्रेन एकेडमी'.",
    image: "/images/campus/school-building-facade.jpg",
    icon: "🏫",
    badge: "Campus Facade",
  },
  {
    id: "1",
    category: "campus",
    title: "Official Campus Entrance & Government Recognition Board",
    desc: "S.K. Thakur Memorial Educational Trust, Govt. of Bihar recognition (UDISE: 10041501717), faculty, leadership and Eco Club students at Rajbag.",
    image: "/images/campus/school-entrance-signboard.jpg",
    icon: "🏫",
    badge: "Govt. Recognized • UDISE",
  },
  {
    id: "2",
    category: "events",
    title: "Independence Day Prize Distribution & Star Trophy",
    desc: "Flag hoisting celebration and student star trophy felicitation on campus with official school celebration banner.",
    image: "/images/campus/independence-day-prize-distribution.jpg",
    icon: "🏆",
    badge: "Annual Honors",
  },
  {
    id: "3",
    category: "events",
    title: "Child Safety Campaign (सुरक्षित बचपन अभियान)",
    desc: "Awareness drive on student protection, discipline, and emotional well-being led by teachers and senior pupils.",
    image: "/images/campus/child-safety-campaign.jpg",
    icon: "🛡️",
    badge: "Official Campaign",
  },
  {
    id: "4",
    category: "events",
    title: "Patriotic Art & Rangoli Exhibition",
    desc: "School corridor exhibition featuring hand-drawn Indian maps, national emblems, and colorful floral Rangoli.",
    image: "/images/campus/students-art-rangoli.jpg",
    icon: "🇮🇳",
    badge: "Student Artwork",
  },
  {
    id: "5",
    category: "academics",
    title: "Junior Scholars in School Uniform",
    desc: "Primary school students proudly wearing school uniforms, badges, and displaying positive spirit.",
    image: "/images/campus/primary-students-uniform.jpg",
    icon: "🎒",
    badge: "Students Life",
  },
  {
    id: "6",
    category: "academics",
    title: "Classroom Engagement & Creative Studies",
    desc: "Interactive learning environment fostering peer collaboration, conceptual arts, and academic focus.",
    image: "/images/campus/students-rangoli-study.jpg",
    icon: "📖",
    badge: "Classroom",
  },
  {
    id: "7",
    category: "academics",
    title: "Composite Science & STEM Experiments",
    desc: "Hands-on physics and chemistry demonstrations building practical scientific temper from Class 6 onwards.",
    gradient: "from-emerald-600 via-teal-700 to-slate-900",
    icon: "🔬",
  },
  {
    id: "8",
    category: "sports",
    title: "Annual Sports Day & Athletics",
    desc: "Sprint races, relay events, kho-kho, and cricket tournament fostering sportsmanship and physical vigor.",
    gradient: "from-amber-500 via-orange-600 to-slate-900",
    icon: "🏃",
  },
  {
    id: "9",
    category: "campus",
    title: "Rich Library & Quiet Reading Arena",
    desc: "Over 2,500 titles, NCERT exemplars, mental ability workbooks, and competitive test series references.",
    gradient: "from-cyan-600 via-blue-700 to-slate-900",
    icon: "📚",
  },
  {
    id: "10",
    category: "academics",
    title: "Navodaya & Netarhat Specialized Batches",
    desc: "Intensive OMR mock test practice, mental reasoning drills, and shortcut problem solving for competitive exams.",
    gradient: "from-slate-700 via-indigo-900 to-slate-950",
    icon: "📝",
    badge: "Coaching Wing",
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
              {/* Image or Graphic Block */}
              <div className="h-52 sm:h-60 relative overflow-hidden bg-slate-900">
                {item.image ? (
                  <>
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10">
                      <span className="w-9 h-9 rounded-xl bg-slate-950/70 border border-white/20 text-white flex items-center justify-center text-lg shadow-md backdrop-blur-none">
                        {item.icon}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {item.badge && (
                          <span className="text-[10px] uppercase font-extrabold tracking-wider bg-amber-400 text-slate-950 px-2.5 py-1 rounded-full shadow-sm">
                            {item.badge}
                          </span>
                        )}
                        <span className="text-[10px] uppercase font-bold tracking-wider bg-slate-900/80 px-2.5 py-1 rounded-full text-slate-200 border border-white/10">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block">
                        North Point Children Academy
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white leading-snug drop-shadow-sm">
                        {item.title}
                      </h3>
                    </div>
                  </>
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-tr ${item.gradient || "from-indigo-950 to-slate-900"} p-5 flex flex-col justify-between text-white relative`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-lg shadow-inner">
                        {item.icon}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider bg-black/50 px-2.5 py-1 rounded-full text-slate-200 border border-white/10">
                        {item.category}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block">
                        North Point Children Academy
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                )}
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
