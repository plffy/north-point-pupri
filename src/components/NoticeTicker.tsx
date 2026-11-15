"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function NoticeTicker() {
  const [isPaused, setIsPaused] = useState(false);
  const { t, language } = useLanguage();

  const notices = [
    {
      id: "1",
      badge: language === "hi" ? "नामांकन 2025–26" : "Admissions 2025-26",
      badgeColor: "bg-red-500",
      text: t("notice1"),
      link: "/school/admissions",
    },
    {
      id: "2",
      badge: language === "hi" ? "नवोदय व नेतरहाट" : "JNVST & Netarhat",
      badgeColor: "bg-amber-500",
      text: t("notice2"),
      link: "/school/competitive-exams",
    },
    {
      id: "3",
      badge: language === "hi" ? "स्कैट (SCAT) 2025" : "SCAT 2025",
      badgeColor: "bg-emerald-600",
      text: t("notice3"),
      link: "/institute/admissions",
    },
    {
      id: "4",
      badge: language === "hi" ? "ओलंपियाड सेल" : "Olympiad Wing",
      badgeColor: "bg-blue-600",
      text: t("notice4"),
      link: "/school/competitive-exams",
    },
  ];

  return (
    <div className="bg-[#0c1a30] text-white text-xs md:text-sm border-b border-amber-500/30 relative overflow-hidden py-2 px-3 z-30 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        {/* Urgent Label */}
        <div className="flex items-center gap-1.5 shrink-0 bg-red-600 text-white font-bold uppercase tracking-wider text-[10px] md:text-xs px-2.5 py-0.5 rounded shadow-sm animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
          <span>{t("latestCirculars")}</span>
        </div>

        {/* Scrolling notices container */}
        <div
          className="overflow-hidden whitespace-nowrap flex-1"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="inline-flex items-center gap-8 animate-marquee"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {notices.concat(notices).map((item, idx) => (
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

        {/* Direct Branch Tag */}
      </div>
    </div>
  );
}
