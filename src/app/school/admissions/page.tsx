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
            Welcome to the North Point family. We maintain a transparent, merit-oriented, and parent-friendly admission process.
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
                Fill the online enquiry form or collect the prospectus directly from the school reception at Pupri.
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
                Fee deposit, issuance of student ID, school uniform specifications, booklist collection, and bus route allocation.
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

        {/* Transparent Fee Policy & Scholarships */}
        <section className="border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase text-indigo-900 tracking-wider">Fee Structure &amp; Concessions</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Affordable, No-Hidden-Cost Fee Model
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              We believe quality English-medium education should be within the reach of hardworking families in Bihar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Flexible Installments</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fees can be deposited quarterly or monthly without penalty, making it hassle-free for parents with agricultural or seasonal incomes.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Sibling Concession</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Special 15% tuition fee waiver for the younger sibling when two or more children from the same family are enrolled.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Merit Scholarships</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Up to 100% scholarship for top performers in our annual diagnostic test and for girl children from economically weaker backgrounds.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
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
              <span>Download Fee Guide &amp; Prospectus</span>
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
