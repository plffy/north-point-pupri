"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/data/translations";

interface LanguageSelectorProps {
  variant?: "topbar" | "header" | "mobile";
  className?: string;
}

export default function LanguageSelector({
  variant = "topbar",
  className = "",
}: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  if (variant === "mobile") {
    return (
      <div className={`flex items-center gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200 ${className}`}>
        <button
          onClick={() => handleSelect("en")}
          className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            language === "en"
              ? "bg-indigo-900 text-white shadow-sm"
              : "text-slate-700 hover:text-slate-900"
          }`}
        >
          <span>🇬🇧 English</span>
          {language === "en" && <span>✓</span>}
        </button>
        <button
          onClick={() => handleSelect("hi")}
          className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            language === "hi"
              ? "bg-amber-500 text-slate-950 shadow-sm"
              : "text-slate-700 hover:text-slate-900"
          }`}
        >
          <span>🇮🇳 हिंदी</span>
          {language === "hi" && <span>✓</span>}
        </button>
      </div>
    );
  }

  const isTopbar = variant === "topbar";

  return (
    <div className={`relative inline-block text-left shrink-0 ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className={`inline-flex items-center gap-1.5 rounded-lg font-bold transition-all whitespace-nowrap shrink-0 ${
          isTopbar
            ? "px-2.5 py-1 text-[11px] sm:text-xs text-slate-200 bg-white/10 hover:bg-white/20 border border-white/15"
            : "px-3 py-2 text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Select Language / भाषा चुनें"
      >
        <span className="text-xs">🌐</span>
        <span>{language === "en" ? "English" : "हिंदी"}</span>
        <svg
          className={`w-3 h-3 transition-transform shrink-0 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-36 rounded-xl bg-white shadow-xl border border-slate-200 py-1.5 z-50 animate-fade-in text-slate-800">
          <div className="px-3 py-1 text-[10px] uppercase font-bold text-slate-400 tracking-wider border-b border-slate-100">
            Language / भाषा
          </div>
          <button
            onClick={() => handleSelect("en")}
            className={`w-full px-3 py-2 text-xs flex items-center justify-between text-left hover:bg-indigo-50 transition-colors ${
              language === "en" ? "font-bold text-indigo-900 bg-indigo-50/60" : "text-slate-700"
            }`}
          >
            <span className="flex items-center gap-2">
              <span>🇬🇧</span>
              <span>English</span>
            </span>
            {language === "en" && <span className="text-indigo-900 font-bold">✓</span>}
          </button>
          <button
            onClick={() => handleSelect("hi")}
            className={`w-full px-3 py-2 text-xs flex items-center justify-between text-left hover:bg-amber-50 transition-colors ${
              language === "hi" ? "font-bold text-amber-900 bg-amber-50/60" : "text-slate-700"
            }`}
          >
            <span className="flex items-center gap-2">
              <span>🇮🇳</span>
              <span>हिंदी (Hindi)</span>
            </span>
            {language === "hi" && <span className="text-amber-800 font-bold">✓</span>}
          </button>
        </div>
      )}
    </div>
  );
}
