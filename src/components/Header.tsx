"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneIcon, LocationMarkerIcon, DownloadIcon, AcademicCapIcon } from "./Icons";
import EnquiryModal from "./EnquiryModal";
import BrochureModal from "./BrochureModal";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const pathname = usePathname();
  const { t, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [academicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
  const [coachingDropdownOpen, setCoachingDropdownOpen] = useState(false);
  const [admissionsDropdownOpen, setAdmissionsDropdownOpen] = useState(false);
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
      {/* Top Bar with Helpline & Locations - Deep Oxford Navy */}
      <div className="bg-[#091426] text-slate-200 text-xs border-b border-amber-500/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 sm:py-2 flex flex-wrap items-center justify-between gap-2">
          {/* Left: Campuses & Call Now Badge */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-slate-200">
              <LocationMarkerIcon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{t("campusesBar")}</span>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <a
              href="tel:+918294407171"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-sm shrink-0 whitespace-nowrap text-[11px]"
              title="Click to call school helpline directly"
            >
              <PhoneIcon className="w-3 h-3 text-white shrink-0" />
              <span>{t("callNow")}: 8294407171</span>
            </a>
          </div>

          {/* Right: Language Dropdown, Prospectus & Admissions */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 ml-auto">
            <LanguageSelector variant="topbar" />
            <button
              onClick={() => setBrochureModalOpen(true)}
              className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 px-2.5 py-1 rounded border border-amber-400/20 transition-all shrink-0 whitespace-nowrap"
            >
              <DownloadIcon className="w-3 h-3 shrink-0" />
              <span>{t("prospectusPdf")}</span>
            </button>
            <button
              onClick={() => openEnquiry("school")}
              className="inline-flex items-center text-[11px] font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-2.5 py-1 rounded transition-colors shadow-sm shrink-0 whitespace-nowrap"
            >
              {t("admissionsSession")}
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-200 [transform:translate3d(0,0,0)] [backface-visibility:hidden]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-18 gap-2 xl:gap-4">
            
            {/* Logo and Brand Title - Never wraps or squashes */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-800 text-amber-400 flex items-center justify-center shadow-md border border-amber-400/30 group-hover:scale-105 transition-transform shrink-0">
                <AcademicCapIcon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm xl:text-base font-black text-slate-900 tracking-tight leading-tight whitespace-nowrap">
                  {language === "hi" ? "नॉर्थ प्वाइंट चिल्ड्रेन एकेडमी" : "North Point Children Academy"}
                </span>
                <span className="text-[10px] xl:text-[11px] font-semibold text-indigo-800 tracking-tight whitespace-nowrap">
                  {language === "hi" ? "राजबाग, पुपरी • बहेरा जाहिदपुर" : "Rajbag, Pupri • Bahera Zahidpur"}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Always in a clean single row */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
              <Link
                href="/"
                className={`px-2 xl:px-2.5 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  pathname === "/"
                    ? "text-indigo-900 bg-indigo-50 font-bold"
                    : "text-slate-700 hover:text-indigo-900 hover:bg-slate-50"
                }`}
              >
                {t("navHome")}
              </Link>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <button
                  className={`px-2 xl:px-2.5 py-1.5 rounded-lg text-xs xl:text-sm font-semibold flex items-center gap-1 transition-colors whitespace-nowrap shrink-0 ${
                    pathname === "/about" || pathname === "/leadership"
                      ? "text-indigo-900 bg-indigo-50 font-bold"
                      : "text-slate-700 hover:text-indigo-900 hover:bg-slate-50"
                  }`}
                >
                  <span>{t("navAbout")}</span>
                  <span className="text-xs">▾</span>
                </button>

                {aboutDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-fade-in z-50">
                    <Link
                      href="/about"
                      className="block px-4 py-2.5 text-xs hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-bold text-slate-800">{t("navVisionCampuses")}</div>
                      <div className="text-[11px] text-slate-500">{t("navVisionCampusesSub")}</div>
                    </Link>
                    <Link
                      href="/leadership"
                      className="block px-4 py-2.5 text-xs hover:bg-indigo-50/50 transition-colors border-t border-slate-50"
                    >
                      <div className="font-bold text-indigo-900 flex items-center gap-1.5">
                        <span>{t("navLeadership")}</span>
                        <span className="text-[9px] bg-amber-400 text-slate-900 font-bold px-1.5 py-0.2 rounded">Desk</span>
                      </div>
                      <div className="text-[11px] text-slate-500">{t("navLeadershipSub")}</div>
                    </Link>
                  </div>
                )}
              </div>

              {/* School Academics Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAcademicsDropdownOpen(true)}
                onMouseLeave={() => setAcademicsDropdownOpen(false)}
              >
                <button
                  className={`px-2 xl:px-2.5 py-1.5 rounded-lg text-xs xl:text-sm font-semibold flex items-center gap-1 transition-colors whitespace-nowrap shrink-0 ${
                    pathname.startsWith("/school") && !pathname.includes("competitive-exams")
                      ? "text-indigo-900 bg-indigo-50 font-bold"
                      : "text-slate-700 hover:text-indigo-900 hover:bg-slate-50"
                  }`}
                >
                  <span>{t("navAcademics")}</span>
                  <span className="text-xs">▾</span>
                </button>

                {academicsDropdownOpen && (
                  <div className="absolute top-full left-0 w-68 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-fade-in z-50">
                    <Link
                      href="/school/academics"
                      className="block px-4 py-2.5 text-xs hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-bold text-slate-800">{t("navCbseCurriculum")}</div>
                      <div className="text-[11px] text-slate-500">{t("navCbseCurriculumSub")}</div>
                    </Link>
                    <Link
                      href="/school/beyond-classroom"
                      className="block px-4 py-2.5 text-xs hover:bg-slate-50 transition-colors border-t border-slate-50"
                    >
                      <div className="font-bold text-slate-800">{t("navBeyondClassroom")}</div>
                      <div className="text-[11px] text-slate-500">{t("navBeyondClassroomSub")}</div>
                    </Link>
                    <Link
                      href="/school/results"
                      className="block px-4 py-2.5 text-xs hover:bg-slate-50 transition-colors border-t border-slate-50"
                    >
                      <div className="font-bold text-slate-800">{t("navBoardResults")}</div>
                      <div className="text-[11px] text-slate-500">{t("navBoardResultsSub")}</div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Coaching (ISP) Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCoachingDropdownOpen(true)}
                onMouseLeave={() => setCoachingDropdownOpen(false)}
              >
                <button
                  className={`px-2 xl:px-2.5 py-1.5 rounded-lg text-xs xl:text-sm font-semibold flex items-center gap-1 transition-colors whitespace-nowrap shrink-0 ${
                    pathname.startsWith("/integrated") || pathname.includes("competitive-exams") || pathname.startsWith("/institute")
                      ? "text-amber-700 bg-amber-50 font-bold"
                      : "text-slate-700 hover:text-amber-700 hover:bg-slate-50"
                  }`}
                >
                  <span className="text-amber-700 font-bold">{t("navCoaching")}</span>
                  <span className="text-xs">▾</span>
                </button>

                {coachingDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-fade-in z-50">
                    <Link
                      href="/integrated-program"
                      className="block px-4 py-2.5 text-xs hover:bg-amber-50/60 transition-colors"
                    >
                      <div className="font-bold text-amber-800 flex items-center gap-1.5">
                        <span>{t("navIspOverview")}</span>
                        <span className="text-[9px] bg-indigo-900 text-white font-bold px-1.5 py-0.2 rounded">Overview</span>
                      </div>
                      <div className="text-[11px] text-slate-500">{t("navIspOverviewSub")}</div>
                    </Link>
                    <Link
                      href="/school/competitive-exams"
                      className="block px-4 py-2.5 text-xs hover:bg-slate-50 transition-colors border-t border-slate-50"
                    >
                      <div className="font-bold text-slate-800">{t("navJnvstNetarhat")}</div>
                      <div className="text-[11px] text-slate-500">{t("navJnvstNetarhatSub")}</div>
                    </Link>
                    <Link
                      href="/institute/courses"
                      className="block px-4 py-2.5 text-xs hover:bg-slate-50 transition-colors border-t border-slate-50"
                    >
                      <div className="font-bold text-slate-800">{t("navJeeNeet")}</div>
                      <div className="text-[11px] text-slate-500">{t("navJeeNeetSub")}</div>
                    </Link>
                    <Link
                      href="/institute/faculty"
                      className="block px-4 py-2.5 text-xs hover:bg-slate-50 transition-colors border-t border-slate-50"
                    >
                      <div className="font-bold text-slate-800">{t("navMentors")}</div>
                      <div className="text-[11px] text-slate-500">{t("navMentorsSub")}</div>
                    </Link>
                    <Link
                      href="/institute/admissions"
                      className="block px-4 py-2.5 text-xs hover:bg-slate-50 transition-colors border-t border-slate-50"
                    >
                      <div className="font-bold text-slate-800">{t("navScat")}</div>
                      <div className="text-[11px] text-slate-500">{t("navScatSub")}</div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Admissions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAdmissionsDropdownOpen(true)}
                onMouseLeave={() => setAdmissionsDropdownOpen(false)}
              >
                <button
                  className={`px-2 xl:px-2.5 py-1.5 rounded-lg text-xs xl:text-sm font-semibold flex items-center gap-1 transition-colors whitespace-nowrap shrink-0 ${
                    pathname === "/school/admissions"
                      ? "text-indigo-900 bg-indigo-50 font-bold"
                      : "text-slate-700 hover:text-indigo-900 hover:bg-slate-50"
                  }`}
                >
                  <span>{t("navAdmissions")}</span>
                  <span className="text-xs">▾</span>
                </button>

                {admissionsDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-fade-in z-50">
                    <Link
                      href="/school/admissions"
                      className="block px-4 py-2.5 text-xs hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-bold text-slate-800">{t("navAdmissionProcess")}</div>
                      <div className="text-[11px] text-slate-500">{t("navAdmissionProcessSub")}</div>
                    </Link>
                    <Link
                      href="/school/admissions#prospectus"
                      className="block px-4 py-2.5 text-xs hover:bg-slate-50 transition-colors border-t border-slate-50"
                    >
                      <div className="font-bold text-slate-800">{t("navProspectusFacilities")}</div>
                      <div className="text-[11px] text-slate-500">{t("navProspectusFacilitiesSub")}</div>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/gallery"
                className={`px-2 xl:px-2.5 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  pathname === "/gallery"
                    ? "text-indigo-900 bg-indigo-50 font-bold"
                    : "text-slate-700 hover:text-indigo-900 hover:bg-slate-50"
                }`}
              >
                {t("navGallery")}
              </Link>

              <Link
                href="/contact"
                className={`px-2 xl:px-2.5 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  pathname === "/contact"
                    ? "text-indigo-900 bg-indigo-50 font-bold"
                    : "text-slate-700 hover:text-indigo-900 hover:bg-slate-50"
                }`}
              >
                {t("navContact")}
              </Link>
            </nav>

            {/* Desktop CTA Buttons - Compact, never overflows or cuts off */}
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <a
                href="tel:+918294407171"
                className="p-2 xl:px-3 xl:py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow transition-all inline-flex items-center gap-1.5 shrink-0 whitespace-nowrap"
                title="Call Helpline: 8294407171"
              >
                <PhoneIcon className="w-3.5 h-3.5 text-white shrink-0" />
                <span className="hidden 2xl:inline">8294407171</span>
              </a>
              <button
                onClick={() => openEnquiry("school")}
                className="px-3.5 xl:px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-950 to-indigo-900 hover:from-indigo-900 hover:to-indigo-800 text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow transition-all shrink-0 whitespace-nowrap"
              >
                {t("admissionEnquiry")}
              </button>
            </div>

            {/* Mobile Actions: Call Now + Enquiry + Hamburger Menu */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
              <a
                href="tel:+918294407171"
                className="p-2 sm:px-2.5 sm:py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold inline-flex items-center gap-1 shadow-sm shrink-0 whitespace-nowrap"
                title="Call 8294407171"
              >
                <PhoneIcon className="w-3.5 h-3.5 text-white shrink-0" />
                <span className="hidden sm:inline">{t("callNow")}</span>
              </a>
              <button
                onClick={() => openEnquiry("school")}
                className="px-2.5 py-1.5 rounded-lg bg-indigo-900 text-white text-xs font-semibold shrink-0 whitespace-nowrap"
              >
                {language === "hi" ? "पूछताछ" : "Enquiry"}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 shrink-0"
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
            {/* Mobile Language Switcher */}
            <div className="space-y-1">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                {language === "hi" ? "भाषा का चयन करें" : "Select Language"}
              </div>
              <LanguageSelector variant="mobile" />
            </div>

            <div className="p-3 bg-slate-50 rounded-xl text-xs space-y-2 border border-slate-200">
              <div className="font-bold text-slate-900">
                {language === "hi" ? "नॉर्थ प्वाइंट चिल्ड्रेन एकेडमी" : "North Point Children Academy"}
              </div>
              <div className="text-slate-600">
                {language === "hi" ? "इंग्लिश मीडियम स्कूल एवं समेकित कोचिंग" : "English Medium School with Integrated Coaching"}
              </div>
              <div className="text-slate-500">
                {language === "hi" ? "राजबाग (पुपरी) एवं बहेरा जाहिदपुर (नानपुर)" : "Rajbag (Pupri) & Bahera Zahidpur (Nanpur)"}
              </div>
              <a
                href="tel:+918294407171"
                className="w-full py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center justify-center gap-2 shadow-sm transition-colors text-xs uppercase tracking-wider"
              >
                <PhoneIcon className="w-4 h-4 text-white" />
                <span>{language === "hi" ? "सीधे कॉल करें: 8294407171" : "Call Helpline Directly: 8294407171"}</span>
              </a>
            </div>

            <div className="flex items-center gap-2 py-1">
              <button
                onClick={() => openEnquiry("school")}
                className="flex-1 py-2 rounded-lg bg-indigo-900 text-white text-xs font-bold text-center"
              >
                🏫 {t("schoolAdmission")}
              </button>
              <button
                onClick={() => openEnquiry("institute")}
                className="flex-1 py-2 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold text-center"
              >
                🎯 {t("integratedCoaching")}
              </button>
            </div>

            <div className="divide-y divide-slate-100 text-sm">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 font-semibold text-slate-800"
              >
                {t("navHome")}
              </Link>

              {/* About Section */}
              <div className="py-2">
                <div className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-1">
                  {t("navAbout")}
                </div>
                <div className="pl-3 space-y-1.5">
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs text-slate-700 hover:text-indigo-900"
                  >
                    • {t("navVisionCampuses")}
                  </Link>
                  <Link
                    href="/leadership"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs font-semibold text-indigo-900"
                  >
                    • {t("navLeadership")}
                  </Link>
                </div>
              </div>

              {/* Academics Section */}
              <div className="py-2">
                <div className="text-xs font-bold uppercase text-indigo-900 tracking-wider mb-1">
                  {t("navAcademics")}
                </div>
                <div className="pl-3 space-y-1.5">
                  <Link
                    href="/school/academics"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs text-slate-600 hover:text-indigo-900"
                  >
                    • {t("navCbseCurriculum")}
                  </Link>
                  <Link
                    href="/school/beyond-classroom"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs text-slate-600 hover:text-indigo-900"
                  >
                    • {t("navBeyondClassroom")}
                  </Link>
                  <Link
                    href="/school/results"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs text-slate-600 hover:text-indigo-900"
                  >
                    • {t("navBoardResults")}
                  </Link>
                </div>
              </div>

              {/* Coaching (ISP) Section */}
              <div className="py-2">
                <div className="text-xs font-bold uppercase text-amber-700 tracking-wider mb-1">
                  {t("navCoaching")}
                </div>
                <div className="pl-3 space-y-1.5">
                  <Link
                    href="/integrated-program"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs font-bold text-amber-800"
                  >
                    • {t("navIspOverview")}
                  </Link>
                  <Link
                    href="/school/competitive-exams"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs text-slate-600 hover:text-amber-800"
                  >
                    • {t("navJnvstNetarhat")}
                  </Link>
                  <Link
                    href="/institute/courses"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs text-slate-600 hover:text-amber-800"
                  >
                    • {t("navJeeNeet")}
                  </Link>
                  <Link
                    href="/institute/faculty"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs text-slate-600 hover:text-amber-800"
                  >
                    • {t("navMentors")}
                  </Link>
                  <Link
                    href="/institute/admissions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs text-slate-600 hover:text-amber-800"
                  >
                    • {t("navScat")}
                  </Link>
                </div>
              </div>

              {/* Admissions Section */}
              <div className="py-2">
                <div className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-1">
                  {t("navAdmissions")}
                </div>
                <div className="pl-3 space-y-1.5">
                  <Link
                    href="/school/admissions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs text-slate-600 hover:text-indigo-900"
                  >
                    • {t("navAdmissionProcess")}
                  </Link>
                  <Link
                    href="/school/admissions#prospectus"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs text-slate-600 hover:text-indigo-900"
                  >
                    • {t("navProspectusFacilities")}
                  </Link>
                </div>
              </div>

              <Link
                href="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 font-semibold text-slate-800"
              >
                {t("navGallery")}
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 font-semibold text-slate-800"
              >
                {t("navContact")}
              </Link>
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
