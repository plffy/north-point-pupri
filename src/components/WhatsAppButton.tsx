"use client";

import React, { useState } from "react";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="mb-2 bg-slate-900 text-white text-xs py-1.5 px-3 rounded-lg shadow-xl border border-slate-700 whitespace-nowrap animate-fade-in flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Have an admission query? Chat on 8294407171!</span>
        </div>
      )}

      {/* Main floating circle */}
      <a
        href="https://wa.me/918294407171?text=Hello%20North%20Point%20Children%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20admissions%20for%20Rajbag%20Pupri%20or%20Bahera%20Zahidpur%20branch."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 relative group"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
          1
        </span>
      </a>
    </div>
  );
}
