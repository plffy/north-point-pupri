"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneIcon, MailIcon, LocationMarkerIcon, DownloadIcon, AcademicCapIcon } from "./Icons";
import EnquiryModal from "./EnquiryModal";
import BrochureModal from "./BrochureModal";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [schoolDropdownOpen, setSchoolDropdownOpen] = useState(false);
  const [instituteDropdownOpen, setInstituteDropdownOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [modalDefaultWing, setModalDefaultWing] = useState<"school" | "institute">("school");

  const openEnquiry = (wing: "school" | "institute" = "school") => {
    setModalDefaultWing(wing);
    setEnquiryModalOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar with Helpline & Locations */}
      <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-slate-200">
              <LocationMarkerIcon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Branches: <strong>Rajbag, Pupri</strong> &amp; <strong>Bahera Zahidpur (Nanpur)</strong></span>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <a
              href="tel:+918294407171"
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors font-medium text-emerald-300"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>Mob: 8294407171</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setBrochureModalOpen(true)}
              className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 px-2.5 py-1 rounded border border-amber-400/20 transition-all"
            >
              <DownloadIcon className="w-3 h-3" />
              <span>Prospectus PDF</span>
            </button>
            <button
              onClick={() => openEnquiry("school")}
              className="inline-flex items-center text-[11px] font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-2.5 py-1 rounded transition-colors shadow-sm"
            >
              Apply Online
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand Title - NEVER NP, ALWAYS Full Name */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-800 text-amber-400 flex items-center justify-center shadow-md border border-amber-400/30 group-hover:scale-105 transition-transform shrink-0">
                <AcademicCapIcon className="w-7 h-7 text-amber-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-900 tracking-tight leading-tight group-hover:text-indigo-900 transition-colors">
                  North Point Children Academy
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-indigo-800 tracking-normal flex items-center gap-1">
                  <span>Rajbag, Pupri</span>
                  <span className="text-amber-500">•</span>
                  <span>Bahera Zahidpur</span>
                  <span className="text-amber-500 hidden sm:inline">•</span>
                  <span className="hidden sm:inline text-slate-600">Career Institute</span>
                </span>
                <span className="text-[10px] text-slate-500 font-medium hidden md:inline">
                  Sitamarhi, Bihar | Mob: 8294407171
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname === "/"
                    ? "text-indigo-900 bg-indigo-50 font-bold"
                    : "text-slate-700 hover:text-indigo-900 hover:bg-slate-50"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname === "/about"
                    ? "text-indigo-900 bg-indigo-50 font-bold"
                    : "text-slate-700 hover:text-indigo-900 hover:bg-slate-50"
                }`}
              >
                About Us
              </Link>

              {/* School Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setSchoolDropdownOpen(true)}
                onMouseLeave={() => setSchoolDropdownOpen(false)}
              >
                <button
                  className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1 transition-colors ${
                    pathname.startsWith("/school")
                      ? "text-indigo-900 bg-indigo-50 font-bold"
                      : "text-slate-700 hover:text-indigo-900 hover:bg-slate-50"
                  }`}
                >
                  <span>School Wing</span>
                  <span className="text-xs">▾</span>
                </button>

                {schoolDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-fade-in-up">
                    <Link
                      href="/school/academics"
                      className="block px-4 py-2.5 text-xs hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-bold text-slate-800">Academics &amp; Curriculum</div>
                      <div className="text-[11px] text-slate-500">CBSE pattern, smart classes, experiential learning</div>
                    </Link>
                    <Link
                      href="/school/competitive-exams"
                      className="block px-4 py-2.5 text-xs hover:bg-indigo-50/50 transition-colors border-t border-slate-50"
                    >
                      <div className="font-bold text-indigo-900 flex items-center gap-1.5">
                        <span>Competitive Exams Hub</span>
                        <span className="text-[9px] bg-amber-400 text-slate-900 font-bold px-1.5 py-0.2 rounded">Key</span>
                      </div>
                      <div className="text-[11px] text-slate-500">Navodaya, Netarhat, Simultala, Sainik School &amp; Olympiads</div>
                    </Link>
                    <Link
                      href="/school/beyond-classroom"
                      className="block px-4 py-2.5 text-xs hover:bg-slate-50 transition-colors border-t border-slate-50"
                    >
                      <div className="font-bold text-slate-800">Beyond the Classroom</div>
                      <div className="text-[11px] text-slate-500">Sports, NCC/Scouts, Arts, Clubs &amp; House System</div>
                    </Link>
                    <Link
                      href="/school/admissions"
                      className="block px-4 py-2.5 text-xs hover:bg-slate-50 transition-colors border-t border-slate-50"
                    >
                      <div className="font-bold text-slate-800">School Admissions</div>
                      <div className="text-[11px] text-slate-500">Guidelines, criteria, fee structure &amp; documents</div>
                    </Link>
                    <Link
                      href="/school/results"
                      className="block px-4 py-2.5 text-xs hover:bg-slate-50 transition-colors border-t border-slate-50"
                    >
                      <div className="font-bold text-slate-800">School Results &amp; Honors</div>
                      <div className="text-[11px] text-slate-500">Board pass rates &amp; residential selections</div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Institute Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setInstituteDropdownOpen(true)}
                onMouseLeave={() => setInstituteDropdownOpen(false)}
              >
                <button
                  className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1 transition-colors ${
                    pathname.startsWith("/institute")
                      ? "text-amber-600 bg-amber-50 font-bold"
                      : "text-slate-700 hover:text-amber-600 hover:bg-slate-50"
                  }`}
                >
                  <span className="text-amber-600 font-bold">🎯 Career Institute</span>
                  <span className="text-xs">▾</span>
                </button>

                {instituteDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-fade-in-up">
                    <Link
                      href="/institute/courses"
                      className="block px-4 py-2.5 text-xs hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-bold text-slate-800">Courses &amp; Programs</div>
                      <div className="text-[11px] text-slate-500">IIT-JEE, NEET-UG, Pre-Foundation &amp; Dropper Batches</div>
                    </Link>
                    <Link
                      href="/institute/faculty"
                      className="block px-4 py-2.5 text-xs hover:bg-slate-50 transition-colors border-t border-slate-50"
                    >
                      <div className="font-bold text-slate-800">Expert Faculty &amp; Pedagogy</div>
                      <div className="text-[11px] text-slate-500">Dedicated mentors, doubt clearing &amp; test series</div>
                    </Link>
                    <Link
                      href="/institute/results"
                      className="block px-4 py-2.5 text-xs hover:bg-slate-50 transition-colors border-t border-slate-50"
                    >
                      <div className="font-bold text-slate-800">Toppers &amp; Results</div>
                      <div className="text-[11px] text-slate-500">Our success stories in JEE, NEET &amp; Olympiads</div>
                    </Link>
                    <Link
                      href="/institute/admissions"
                      className="block px-4 py-2.5 text-xs hover:bg-slate-50 transition-colors border-t border-slate-50"
                    >
                      <div className="font-bold text-slate-800">SCAT Scholarship Test</div>
                      <div className="text-[11px] text-slate-500">Win up to 100% tuition fee waiver</div>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/gallery"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname === "/gallery"
                    ? "text-indigo-900 bg-indigo-50 font-bold"
                    : "text-slate-700 hover:text-indigo-900 hover:bg-slate-50"
                }`}
              >
                Gallery
              </Link>

              <Link
                href="/contact"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname === "/contact"
                    ? "text-indigo-900 bg-indigo-50 font-bold"
                    : "text-slate-700 hover:text-indigo-900 hover:bg-slate-50"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={() => openEnquiry("school")}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-900 to-indigo-800 hover:from-indigo-800 hover:to-indigo-700 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                Admission Enquiry
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => openEnquiry("school")}
                className="px-3 py-1.5 rounded-lg bg-indigo-900 text-white text-xs font-semibold"
              >
                Enquiry
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
                aria-label="Toggle navigation"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="p-2.5 bg-slate-50 rounded-xl text-xs space-y-1 border border-slate-200">
              <div className="font-bold text-slate-900">North Point Children Academy</div>
              <div className="text-slate-600">Branch 1: Rajbag, Pupri</div>
              <div className="text-slate-600">Branch 2: Bahera Zahidpur (Nanpur)</div>
              <div className="text-emerald-700 font-bold">Helpline: 8294407171</div>
            </div>

            <div className="flex items-center gap-2 py-1">
              <button
                onClick={() => openEnquiry("school")}
                className="flex-1 py-2 rounded-lg bg-indigo-900 text-white text-xs font-bold text-center"
              >
                🏫 School Admission
              </button>
              <button
                onClick={() => openEnquiry("institute")}
                className="flex-1 py-2 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold text-center"
              >
                🎯 Career Institute
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-slate-800"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-slate-800"
              >
                About Us
              </Link>

              {/* School Section */}
              <div className="py-2">
                <div className="text-xs font-bold uppercase text-indigo-900 tracking-wider mb-1">
                  School Wing
                </div>
                <div className="pl-3 space-y-1.5">
                  <Link
                    href="/school/academics"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs text-slate-600 hover:text-indigo-900"
                  >
                    • Academics &amp; Curriculum
                  </Link>
                  <Link
                    href="/school/competitive-exams"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs font-bold text-indigo-900 hover:text-indigo-700"
                  >
                    • Competitive Exams (Navodaya, Netarhat, Simultala, Sainik)
                  </Link>
                  <Link
                    href="/school/beyond-classroom"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs text-slate-600 hover:text-indigo-900"
                  >
                    • Beyond the Classroom (Sports, Arts, NCC)
                  </Link>
                  <Link
                    href="/school/admissions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs text-slate-600 hover:text-indigo-900"
                  >
                    • School Admissions &amp; Criteria
                  </Link>
                </div>
              </div>

              {/* Institute Section */}
              <div className="py-2">
                <div className="text-xs font-bold uppercase text-amber-600 tracking-wider mb-1">
                  Career Institute Wing (Coaching)
                </div>
                <div className="pl-3 space-y-1.5">
                  <Link
                    href="/institute/courses"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs text-slate-600 hover:text-amber-600"
                  >
                    • IIT-JEE &amp; NEET-UG Courses
                  </Link>
                  <Link
                    href="/institute/faculty"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs text-slate-600 hover:text-amber-600"
                  >
                    • Faculty &amp; Mentorship
                  </Link>
                  <Link
                    href="/institute/results"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs text-slate-600 hover:text-amber-600"
                  >
                    • Selections &amp; Toppers
                  </Link>
                  <Link
                    href="/institute/admissions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs text-slate-600 hover:text-amber-600"
                  >
                    • SCAT Scholarship Test
                  </Link>
                </div>
              </div>

              <Link
                href="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-slate-800"
              >
                Campus Gallery
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-slate-800"
              >
                Contact &amp; Both Branches Location
              </Link>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setBrochureModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 text-xs font-semibold text-indigo-900 bg-indigo-50 border border-indigo-200 rounded-lg flex items-center justify-center gap-1.5"
              >
                <DownloadIcon className="w-3.5 h-3.5" />
                Download Information Prospectus
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Modals */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        defaultWing={modalDefaultWing}
      />
      <BrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
      />
    </>
  );
}
