"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Notice {
  id: string;
  badge: string;
  badgeColor: string;
  text: string;
  link?: string;
}

const NOTICES: Notice[] = [
  {
    id: "1",
    badge: "Admissions 2025-26",
    badgeColor: "bg-red-500",
    text: "North Point Children Academy: Admissions open at both Rajbag (Pupri) & Bahera Zahidpur branches! Call 8294407171.",
    link: "/school/admissions",
  },
  {
    id: "2",
    badge: "JNVST & Netarhat",
    badgeColor: "bg-amber-500",
    text: "Special Intensive Batch for Navodaya (JNVST) & Netarhat Awasiya Vidyalaya entrance examinations starting soon.",
    link: "/school/competitive-exams",
  },
  {
    id: "3",
    badge: "SCAT 2025",
    badgeColor: "bg-emerald-600",
    text: "North Point Scholarship-Cum-Admission Test (SCAT) for IIT-JEE / NEET foundation with up to 100% scholarship.",
    link: "/institute/admissions",
  },
  {
    id: "4",
    badge: "Olympiad Wing",
    badgeColor: "bg-blue-600",
    text: "Special weekend masterclasses for SOF (NSO, IMO) & National Means-cum-Merit Scholarship (NMMS).",
    link: "/school/competitive-exams",
  },
];

export default function NoticeTicker() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white text-xs md:text-sm border-b border-indigo-900/60 relative overflow-hidden py-2 px-3 z-30">
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        {/* Urgent Label */}
        <div className="flex items-center gap-1.5 shrink-0 bg-red-600 text-white font-bold uppercase tracking-wider text-[10px] md:text-xs px-2.5 py-0.5 rounded shadow-sm animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
          Latest Circulars
        </div>

        {/* Scrolling notices container */}
        <div
          className="overflow-hidden whitespace-nowrap flex-1"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`inline-flex items-center gap-8 ${
              isPaused ? "" : "animate-[marquee_25s_linear_infinite]"
            }`}
          >
            {NOTICES.concat(NOTICES).map((item, idx) => (
              <span key={`${item.id}-${idx}`} className="inline-flex items-center gap-2 text-slate-200">
                <span
                  className={`${item.badgeColor} text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded text-white`}
                >
                  {item.badge}
                </span>
                {item.link ? (
                  <Link
                    href={item.link}
                    className="hover:text-amber-300 hover:underline transition-colors flex items-center gap-1"
                  >
                    <span>{item.text}</span>
                    <span className="text-amber-400 font-bold">→</span>
                  </Link>
                ) : (
                  <span>{item.text}</span>
                )}
                <span className="text-slate-600 mx-2">•</span>
              </span>
            ))}
          </div>
        </div>

        {/* Quick action buttons */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <Link
            href="/contact"
            className="text-[11px] font-medium text-amber-300 hover:text-amber-200 underline decoration-amber-400/50"
          >
            Rajbag, Pupri / Bahera Zahidpur
          </Link>
          <span className="text-slate-600">|</span>
          <a
            href="tel:+918294407171"
            className="text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 px-2 py-0.5 rounded border border-emerald-500/30 transition-colors"
          >
            Helpline: 8294407171
          </a>
        </div>
      </div>
    </div>
  );
}
