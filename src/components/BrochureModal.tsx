"use client";

import React, { useState } from "react";
import { DownloadIcon, CheckCircleIcon, WhatsAppIcon } from "./Icons";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
  const [phone, setPhone] = useState("");
  const [isDownloaded, setIsDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDownloaded(true);
    // In production, this can trigger a PDF download or link to cloud storage
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-fade-in-up">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-lg"
          >
            ✕
          </button>
          <div className="text-xs uppercase tracking-wider font-semibold text-amber-400 mb-1">
            Information Prospectus 2025–26
          </div>
          <h3 className="text-lg font-bold">North Point Pupri Handbook</h3>
          <p className="text-xs text-slate-300 mt-1">
            Curriculum details, admission rules, competitive exam roadmap, and fee guidelines.
          </p>
        </div>

        <div className="p-6">
          {isDownloaded ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircleIcon className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Prospectus Access Granted!</h4>
              <p className="text-xs text-slate-600 mt-2">
                A digital copy has been prepared. You can also receive our complete fee structure and exam syllabus directly on WhatsApp.
              </p>
              <div className="mt-5 space-y-2">
                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(
                    "Hello North Point Pupri, please send me the complete Prospectus PDF & Fee Structure."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs shadow-md transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Get PDF on WhatsApp Instantly
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2 px-4 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleDownload} className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2">
                <div className="flex items-start gap-2.5">
                  <span className="text-amber-500 font-bold text-sm">✔</span>
                  <span className="text-xs text-slate-700">Detailed CBSE curriculum structure & Smart Class methodology</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-amber-500 font-bold text-sm">✔</span>
                  <span className="text-xs text-slate-700">Navodaya (JNVST), Netarhat, Simultala, & Sainik School roadmap</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-amber-500 font-bold text-sm">✔</span>
                  <span className="text-xs text-slate-700">IIT-JEE & NEET-UG Foundation course schedule & faculty profiles</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-amber-500 font-bold text-sm">✔</span>
                  <span className="text-xs text-slate-700">Transport route map covering Pupri block & rural areas</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Enter WhatsApp Number to Download
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  placeholder="10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-white font-semibold text-sm transition-all shadow-md inline-flex items-center justify-center gap-2"
              >
                <DownloadIcon className="w-4 h-4" />
                Download Digital Prospectus (PDF)
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
