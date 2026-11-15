"use client";

import React, { useState } from "react";
import { WhatsAppIcon, PhoneIcon } from "./Icons";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 pb-[env(safe-area-inset-bottom)] pr-[env(safe-area-inset-right)]">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="mb-1 bg-slate-900 text-white text-xs py-1.5 px-3 rounded-lg shadow-xl border border-slate-700 whitespace-normal sm:whitespace-nowrap max-w-[240px] sm:max-w-none text-right sm:text-left animate-fade-in flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0"></span>
          <span>Helpline: 8294407171 (Call or WhatsApp)</span>
        </div>
      )}

      {/* Floating Call Button */}
      <a
        href="tel:+918294407171"
        className="w-12 h-12 bg-indigo-900 hover:bg-indigo-800 text-amber-300 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 relative group border-2 border-amber-400/40"
        aria-label="Call North Point Children Academy Helpline Directly"
        title="Call Helpline: 8294407171"
      >
        <PhoneIcon className="w-5 h-5 text-amber-300" />
        <span className="sr-only">Call Helpline 8294407171</span>
      </a>

      {/* Main floating circle (WhatsApp) */}
      <a
        href="https://wa.me/918294407171?text=Hello%20North%20Point%20Children%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20admissions%20for%20Rajbag%20Pupri%20or%20Bahera%20Zahidpur%20branch."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-13 h-13 sm:w-14 sm:h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 relative group"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
          1
        </span>
      </a>
    </div>
  );
}
