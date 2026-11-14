"use client";

import React, { useState } from "react";
import { WhatsAppIcon, CheckCircleIcon } from "./Icons";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultWing?: "school" | "institute";
}

export default function EnquiryModal({ isOpen, onClose, defaultWing = "school" }: EnquiryModalProps) {
  const [wing, setWing] = useState<"school" | "institute">(defaultWing);
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    preferredBranch: "Rajbag, Pupri",
    currentGrade: "Class 5",
    targetCourse: "Navodaya (JNVST) Preparation",
    locality: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello North Point Children Academy!\nI am interested in admission for my child.\n\n` +
      `*Student Name:* ${formData.studentName || "N/A"}\n` +
      `*Parent Name:* ${formData.parentName || "N/A"}\n` +
      `*Phone:* ${formData.phone || "N/A"}\n` +
      `*Preferred Branch:* ${formData.preferredBranch}\n` +
      `*Wing:* ${wing === "school" ? "North Point Children Academy (School Admission)" : "Integrated Coaching Program (ISP)"}\n` +
      `*Class/Course:* ${formData.currentGrade} - ${formData.targetCourse}\n` +
      `*Location:* ${formData.locality || "Pupri / Bahera Zahidpur / Sitamarhi area"}\n` +
      (formData.message ? `*Notes:* ${formData.message}` : "")
    );
    window.open(`https://wa.me/918294407171?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-fade-in-up">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-lg"
            aria-label="Close modal"
          >
            ✕
          </button>
          <div className="text-xs uppercase tracking-wider font-semibold text-amber-400 mb-1">
            Admissions &amp; Counseling Desk
          </div>
          <h3 className="text-xl font-bold">North Point Children Academy</h3>
          <p className="text-xs text-slate-300 mt-1">
            Branches: Rajbag (Pupri) &amp; Bahera Zahidpur | Call: 8294407171
          </p>

          {/* Division Toggle inside modal */}
          <div className="mt-4 flex bg-white/10 p-1 rounded-lg">
            <button
              type="button"
              onClick={() => {
                setWing("school");
                setFormData((prev) => ({ ...prev, targetCourse: "Regular Schooling + Navodaya/Olympiad" }));
              }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
                wing === "school"
                  ? "bg-amber-400 text-slate-950 shadow-sm"
                  : "text-slate-200 hover:text-white"
              }`}
            >
              🏫 School Admission
            </button>
            <button
              type="button"
              onClick={() => {
                setWing("institute");
                setFormData((prev) => ({ ...prev, targetCourse: "IIT-JEE / NEET Foundation" }));
              }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
                wing === "institute"
                  ? "bg-amber-400 text-slate-950 shadow-sm"
                  : "text-slate-200 hover:text-white"
              }`}
            >
              🎯 Integrated Coaching (ISP)
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Enquiry Received!</h4>
              <p className="text-sm text-slate-600 mt-2 max-w-sm mx-auto">
                Thank you, <strong>{formData.parentName || "Parent"}</strong>. Our academic counselor will call you at{" "}
                <strong>{formData.phone || "your contact number"}</strong> within 24 hours.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-all shadow-md"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Connect on WhatsApp (8294407171)
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-medium transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Student&apos;s Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav Kumar"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Select Branch
                  </label>
                  <select
                    value={formData.preferredBranch}
                    onChange={(e) => setFormData({ ...formData, preferredBranch: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-white font-medium"
                  >
                    <option value="Rajbag, Pupri">Branch 1: Rajbag, Pupri</option>
                    <option value="Bahera Zahidpur (Nanpur)">Branch 2: Bahera Zahidpur (Nanpur)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Current Grade / Class
                  </label>
                  <select
                    value={formData.currentGrade}
                    onChange={(e) => setFormData({ ...formData, currentGrade: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-white"
                  >
                    <option value="Pre-Primary / Nursery">Pre-Primary (Nursery, LKG, UKG)</option>
                    <option value="Class 1 - 3">Class 1 to 3</option>
                    <option value="Class 4 - 5">Class 4 to 5 (Navodaya Prep Age)</option>
                    <option value="Class 6 - 8">Class 6 to 8 (Middle School / Foundation)</option>
                    <option value="Class 9 - 10">Class 9 to 10 (Secondary / IIT-NEET Track)</option>
                    <option value="Senior Secondary">Senior / Target Aspirants</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Primary Interest / Program
                  </label>
                  <select
                    value={formData.targetCourse}
                    onChange={(e) => setFormData({ ...formData, targetCourse: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-white"
                  >
                    {wing === "school" ? (
                      <>
                        <option value="Regular CBSE Schooling">Regular Schooling (English Medium)</option>
                        <option value="Navodaya (JNVST) Preparation">Navodaya Vidyalaya (JNVST) Preparation</option>
                        <option value="Netarhat & Simultala Entrance">Netarhat &amp; Simultala Awasiya Preparation</option>
                        <option value="Sainik School (AISSEE)">Sainik School (AISSEE) Wing</option>
                        <option value="Olympiads (NSO/IMO) & NMMS">Olympiads (SOF) &amp; NMMS Scholarship</option>
                      </>
                    ) : (
                      <>
                        <option value="IIT-JEE (Main + Advanced) 2-Year">IIT-JEE 2-Year Classroom Program</option>
                        <option value="NEET-UG Medical 2-Year">NEET-UG Medical Classroom Program</option>
                        <option value="Foundation (Classes 6-8)">Foundation Aptitude (Classes 6-8)</option>
                        <option value="Pre-Foundation (Classes 9-10)">Pre-Foundation IIT/NEET (Classes 9-10)</option>
                        <option value="SCAT Scholarship Test">SCAT Scholarship Test Only</option>
                        <option value="Dropper / Target Intensive">1-Year Dropper / Target Batch</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Village / Locality &amp; Transport Requirement
                </label>
                <textarea
                  rows={2}
                  placeholder="Your village name, need school bus route, hostel query, fee enquiry, etc."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-white font-semibold text-sm transition-all shadow-md text-center"
                >
                  Submit Admission Enquiry
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-md inline-flex items-center justify-center gap-1.5"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Send on WhatsApp
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center">
                🔒 Privacy guaranteed. Your contact details are only used for North Point Children Academy admissions counseling.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
