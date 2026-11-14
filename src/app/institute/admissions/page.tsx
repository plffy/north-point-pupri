"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircleIcon, WhatsAppIcon, DownloadIcon } from "@/components/Icons";
import EnquiryModal from "@/components/EnquiryModal";

export default function InstituteAdmissionsPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Institute Wing</span>
            <span>/</span>
            <span>Admissions &amp; SCAT</span>
          </div>
          <span className="text-xs uppercase font-extrabold tracking-wider bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded shadow-sm inline-block mb-3">
            Enroll for Competitive Batches
          </span>
          <h1 className="text-3xl sm:text-5xl font-black">
            Institute Admissions &amp; SCAT Scholarship
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Take the definitive step towards IIT-JEE, NEET-UG, and Pre-Foundation excellence with up to 100% scholarship support.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-16">
        {/* SCAT Test Details */}
        <section className="border border-slate-200 rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-amber-50/50 via-white to-white shadow-sm">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider bg-amber-400 text-slate-950 px-3 py-1 rounded-full">
              Scholarship-Cum-Admission Test (SCAT)
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Win Up To 100% Fee Concession
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
              SCAT is designed to identify students with natural aptitude for problem-solving, science, and mathematics. 
              Top scorers are awarded handsome fee waivers, ensuring that no deserving mind in Sitamarhi is held back due to financial constraints.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs">
                <div className="font-bold text-slate-900">Exam Mode</div>
                <div className="text-slate-500 mt-1">Offline OMR Pen &amp; Paper Test at North Point Campus, Pupri</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs">
                <div className="font-bold text-slate-900">Subjects Tested</div>
                <div className="text-slate-500 mt-1">Science (Physics, Chem, Bio), Mathematics &amp; Mental Ability</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs">
                <div className="font-bold text-slate-900">Duration</div>
                <div className="text-slate-500 mt-1">90 Minutes (60 Objective MCQs with no negative marking)</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs">
                <div className="font-bold text-slate-900">Registration Fee</div>
                <div className="text-emerald-700 font-bold mt-1">FREE for Rural &amp; Local Students</div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => setEnquiryOpen(true)}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase shadow-md transition-colors"
              >
                Register for Next SCAT Test Date
              </button>
              <a
                href="https://wa.me/919876543210?text=Hello%20North%20Point%2C%20please%20register%20me%20for%20the%20upcoming%20SCAT%20Scholarship%20Test."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase shadow transition-colors inline-flex items-center gap-1.5"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Instant WhatsApp Registration</span>
              </a>
            </div>
          </div>
        </section>

        {/* Admission Steps */}
        <section className="space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase text-indigo-900 tracking-wider">Enrollment Process</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              How to Join the Institute
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-900 text-amber-400 flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Fill Enquiry / Appear in SCAT</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Register online or in-person for the upcoming scholarship test or apply for direct admission based on past academic marks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-900 text-amber-400 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Counseling &amp; Batch Allocation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Academic counseling session with parents and student to map out the target trajectory (JEE, NEET, or Pre-Foundation).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-900 text-amber-400 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Kit &amp; Study Material Handover</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Receipt of printed module booklets, daily practice sheets (DPPs), test timetable, and orientation class schedule.
              </p>
            </div>
          </div>
        </section>
      </div>

      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} defaultWing="institute" />
    </div>
  );
}
