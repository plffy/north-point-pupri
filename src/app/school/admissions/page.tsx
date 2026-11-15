"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircleIcon, PhoneIcon, WhatsAppIcon, DownloadIcon } from "@/components/Icons";
import EnquiryModal from "@/components/EnquiryModal";
import BrochureModal from "@/components/BrochureModal";

export default function SchoolAdmissionsPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/school/academics" className="hover:underline">School</Link>
            <span>/</span>
            <span>Admissions</span>
          </div>
          <span className="text-xs uppercase font-extrabold tracking-wider bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded shadow-sm inline-block mb-3">
            Academic Session 2025–26
          </span>
          <h1 className="text-3xl sm:text-5xl font-black">School Admissions &amp; Enrollment</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            Welcome to the North Point Children Academy family. Admissions open across both campuses at Rajbag (Pupri) and Bahera Zahidpur (Nanpur). Helpline: 8294407171.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-16">
        {/* Step-by-Step Admission Process */}
        <section className="space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase text-indigo-900 tracking-wider">Step-by-Step Flow</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              How Admission Works
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              A 4-step streamlined journey from enquiry to classroom orientation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-indigo-900 text-amber-400 flex items-center justify-center font-black text-sm">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900">Enquiry &amp; Registration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fill the online enquiry form or collect the prospectus directly from our school reception at Rajbag (Pupri) or Bahera Zahidpur (Nanpur). Mob: 8294407171.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-indigo-900 text-amber-400 flex items-center justify-center font-black text-sm">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900">Baseline Assessment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Informal interaction for pre-primary; basic diagnostic test in English, Hindi &amp; Math for primary and middle grades.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-indigo-900 text-amber-400 flex items-center justify-center font-black text-sm">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900">Document Verification</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Submission of child&apos;s birth certificate, previous school transfer certificate (TC), and Aadhaar details.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-indigo-900 text-amber-400 flex items-center justify-center font-black text-sm">
                04
              </div>
              <h3 className="text-base font-bold text-slate-900">Admission Confirmation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enrollment completion, issuance of student ID, school uniform specifications, booklist collection, and transport route allocation.
              </p>
            </div>
          </div>
        </section>

        {/* Documents Required Checklist */}
        <section className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-3xl p-8 sm:p-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase text-indigo-900 tracking-wider">Checklist</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Documents Required for Admission
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Please carry original copies for physical verification along with two self-attested photocopies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200 text-xs">
              <CheckCircleIcon className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">Birth Certificate</span>
                <span className="text-slate-500">Issued by Municipal Corporation or Gram Panchayat</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200 text-xs">
              <CheckCircleIcon className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">Transfer Certificate (TC)</span>
                <span className="text-slate-500">Counter-signed by previous recognized school (Class 2 onwards)</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200 text-xs">
              <CheckCircleIcon className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">Previous Marksheet / Report Card</span>
                <span className="text-slate-500">Photocopy of last academic term examination</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200 text-xs">
              <CheckCircleIcon className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">Aadhaar Card</span>
                <span className="text-slate-500">Photocopy of student&apos;s and parent&apos;s Aadhaar</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200 text-xs">
              <CheckCircleIcon className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">Passport Photos</span>
                <span className="text-slate-500">4 recent passport size photographs of the student</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200 text-xs">
              <CheckCircleIcon className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">Caste / Income Certificate</span>
                <span className="text-slate-500">If applying under reserved or merit scholarship categories</span>
              </div>
            </div>
          </div>
        </section>

        {/* Official School Prospectus & Campus Facilities */}
        <section id="prospectus" className="border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-8 bg-gradient-to-br from-slate-50 via-white to-amber-50/20">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase text-indigo-900 tracking-wider bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Official School Prospectus
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Comprehensive Campus Facilities &amp; Academic Prospectus
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              We publish one comprehensive, unified Prospectus covering our CBSE curriculum framework, smart classroom infrastructure, composite STEM laboratories, sports facilities, and integrated competitive preparation across both campuses at <strong>Rajbag (Pupri)</strong> and <strong>Bahera Zahidpur (Nanpur)</strong>.
            </p>
          </div>

          {/* Key Facility Highlights in the Prospectus */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-900/10 text-indigo-900 flex items-center justify-center font-bold text-lg">
                💻
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Smart Classrooms &amp; STEM Labs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Visual audio-visual classrooms, computer lab, and practical demonstration equipment building strong scientific concepts from early grades.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold text-lg">
                🚌
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Dedicated Bus Transport Fleet</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Safe, disciplined bus and van network covering 20+ rural stops across Pupri, Janakpur Road, Bahera Zahidpur, and Nanpur blocks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center font-bold text-lg">
                🎯
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Integrated Competitive Wing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialized in-school coaching for Navodaya (JNVST), Netarhat, Simultala, and foundation for IIT-JEE &amp; NEET under one unified campus schedule.
              </p>
            </div>
          </div>

          {/* Transparent Counselling Policy Notice */}
          <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <span className="text-amber-600">ℹ️</span>
                <span>Personalized Admission Counselling &amp; Fee Details</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Detailed fee structures and admission formalities are discussed directly with parents upon registration and enquiry with our counseling team. Visit the school office or contact our helpline at <strong>8294407171</strong>.
              </p>
            </div>
            <a
              href="tel:+918294407171"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shrink-0 text-center shadow transition-colors"
            >
              Call 8294407171
            </a>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => setEnquiryOpen(true)}
              className="px-6 py-3 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-white font-bold text-xs uppercase shadow-md transition-colors"
            >
              Fill Online Admission Enquiry Form
            </button>
            <button
              onClick={() => setBrochureOpen(true)}
              className="px-6 py-3 rounded-xl border border-slate-300 text-slate-800 font-semibold text-xs hover:bg-slate-50 transition-colors flex items-center gap-2"
            >
              <DownloadIcon className="w-4 h-4" />
              <span>Download Official Prospectus (PDF)</span>
            </button>
          </div>
        </section>
      </div>

      {/* Modals */}
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} defaultWing="school" />
      <BrochureModal isOpen={brochureOpen} onClose={() => setBrochureOpen(false)} />
    </div>
  );
}
