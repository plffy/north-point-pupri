"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AcademicCapIcon,
  TrophyIcon,
  SparklesIcon,
  CheckCircleIcon,
  PhoneIcon,
  WhatsAppIcon,
  ArrowRightIcon,
  BusIcon,
  ComputerDesktopIcon,
  BeakerIcon,
  BookOpenIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  LocationMarkerIcon,
} from "@/components/Icons";
import EnquiryModal from "@/components/EnquiryModal";
import BrochureModal from "@/components/BrochureModal";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"all" | "school" | "institute">("all");
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [defaultWing, setDefaultWing] = useState<"school" | "institute">("school");

  const openEnquiryModal = (wing: "school" | "institute") => {
    setDefaultWing(wing);
    setEnquiryOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 text-white py-14 sm:py-20 lg:py-24 border-b border-indigo-900/40">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Pill Tag with Both Branches */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-amber-300 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <span>Admissions Open 2025–26 • Branches: Rajbag (Pupri) &amp; Bahera Zahidpur</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight">
              North Point Children Academy
              <span className="block text-2xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400 mt-2">
                Excellence in Schooling &amp; Competitive Success
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Serving students across our two premier campuses at <strong>Rajbag (Pupri)</strong> and <strong>Bahera Zahidpur (Nanpur)</strong>. 
              Integrating English-medium education with dedicated preparation for{" "}
              <span className="text-amber-300 font-semibold">Navodaya (JNVST), Netarhat, Simultala, Sainik School</span>, and target coaching for{" "}
              <span className="text-amber-300 font-semibold">IIT-JEE &amp; NEET</span>.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
              <button
                onClick={() => openEnquiryModal("school")}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-lg hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
              >
                🏫 School Admission Enquiry
              </button>
              <button
                onClick={() => openEnquiryModal("institute")}
                className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg hover:shadow-indigo-600/30 transition-all border border-indigo-400/30 transform hover:-translate-y-0.5"
              >
                🎯 IIT-JEE / NEET Coaching Enquiry
              </button>
              <button
                onClick={() => setBrochureOpen(true)}
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
              >
                <span>Download Prospectus</span>
                <span className="text-xs">↓</span>
              </button>
            </div>

            {/* Two Branch Notice Pill */}
            <div className="pt-4 flex flex-wrap justify-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-slate-200 border border-white/10">
                <LocationMarkerIcon className="w-3.5 h-3.5 text-amber-400" />
                <span><strong>Branch 1:</strong> Rajbag, Pupri, Sitamarhi</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-slate-200 border border-white/10">
                <LocationMarkerIcon className="w-3.5 h-3.5 text-amber-400" />
                <span><strong>Branch 2:</strong> Bahera Zahidpur, Nanpur</span>
              </span>
              <a
                href="tel:+918294407171"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold"
              >
                <PhoneIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call: 8294407171</span>
              </a>
            </div>

            {/* Quick Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-left max-w-3xl mx-auto">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300">
                <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>CBSE Pattern Curriculum</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300">
                <CheckCircleIcon className="w-4 h-4 text-amber-400 shrink-0" />
                <span>JNVST / Netarhat Coaching</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300">
                <CheckCircleIcon className="w-4 h-4 text-sky-400 shrink-0" />
                <span>IIT-JEE &amp; NEET Foundation</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300">
                <CheckCircleIcon className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Pupri &amp; Nanpur Bus Fleet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Ribbon */}
      <section className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 py-6 shadow-md relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-900/10">
            <div className="py-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black">2 Campuses</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mt-1">
                Rajbag (Pupri) &amp; Bahera Zahidpur
              </div>
            </div>
            <div className="py-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black">50+ Selections</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mt-1">
                Navodaya, Netarhat &amp; Simultala
              </div>
            </div>
            <div className="py-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black">100% Scholarship</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mt-1">
                Available Under SCAT Test
              </div>
            </div>
            <div className="py-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black">20+ Villages</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mt-1">
                Bus Routes Across Pupri &amp; Nanpur
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Wing Switcher & Quick Navigation */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xs uppercase font-extrabold text-indigo-900 tracking-wider mb-2">
              Choose Your Pathway
            </h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Two Powerful Wings Under One Roof
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Whether you want comprehensive schooling or focused competitive entrance coaching, North Point Children Academy provides specialized guidance tailored to your child.
            </p>

            {/* Filter Tabs */}
            <div className="mt-6 inline-flex p-1 bg-white rounded-xl shadow-sm border border-slate-200">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === "all"
                    ? "bg-indigo-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Overview (All Wings)
              </button>
              <button
                onClick={() => setActiveTab("school")}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === "school"
                    ? "bg-indigo-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                🏫 School Wing
              </button>
              <button
                onClick={() => setActiveTab("institute")}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === "institute"
                    ? "bg-amber-500 text-slate-950 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                🎯 Career Institute (Coaching)
              </button>
            </div>
          </div>

          {/* Cards Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* School Wing Card */}
            {(activeTab === "all" || activeTab === "school") && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all border border-slate-200 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-900 bg-indigo-50 px-3 py-1 rounded-full">
                      Holistic Education
                    </span>
                    <span className="text-2xl">🏫</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-900 transition-colors">
                    North Point Children Academy
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    A vibrant learning ecosystem built on CBSE curriculum guidelines, digital smart classrooms, and experimental science labs across our Rajbag (Pupri) and Bahera Zahidpur campuses. 
                    Equipping students with strong moral foundations, English communication, and sports.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Key Highlights:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      <li className="flex items-center gap-2">
                        <span className="text-indigo-600 font-bold">✓</span>
                        <span>Foundational, Primary, Middle &amp; Secondary stages</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-indigo-600 font-bold">✓</span>
                        <span>Integrated preparation for Navodaya (JNVST) &amp; Netarhat</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-indigo-600 font-bold">✓</span>
                        <span>Science Olympiad Foundation (SOF) &amp; NMMS scholarship wings</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-indigo-600 font-bold">✓</span>
                        <span>Safe transport buses connecting Pupri &amp; Nanpur with 20+ surrounding villages</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href="/school/academics"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-white text-xs font-semibold shadow-md transition-colors"
                  >
                    <span>Explore School</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => openEnquiryModal("school")}
                    className="px-4 py-2 rounded-xl border border-indigo-900 text-indigo-900 hover:bg-indigo-50 text-xs font-semibold transition-colors"
                  >
                    Admission Guidelines
                  </button>
                </div>
              </div>
            )}

            {/* Institute Wing Card */}
            {(activeTab === "all" || activeTab === "institute") && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all border border-amber-200/80 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-bl-full pointer-events-none"></div>

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      Competitive Entrance Wing
                    </span>
                    <span className="text-2xl">🎯</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    North Point Career Institute
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Dedicated competitive training division designed to prepare students for India&apos;s toughest examinations: 
                    IIT-JEE, NEET-UG, and Pre-Foundation with experienced faculty, OMR testing, and doubt-clearing sessions.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Key Highlights:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      <li className="flex items-center gap-2">
                        <span className="text-amber-600 font-bold">✓</span>
                        <span>2-Year Comprehensive Classroom Program for IIT-JEE (Main + Adv)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-amber-600 font-bold">✓</span>
                        <span>Target NEET-UG Medical batch with rigorous biology &amp; physics drills</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-amber-600 font-bold">✓</span>
                        <span>Pre-Foundation Courses building early aptitude from middle school</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-amber-600 font-bold">✓</span>
                        <span>SCAT Scholarship Exam with up to 100% tuition fee waiver</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-6 flex flex-wrap items-center gap-3 relative z-10">
                  <Link
                    href="/institute/courses"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-md transition-colors"
                  >
                    <span>View All Courses</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => openEnquiryModal("institute")}
                    className="px-4 py-2 rounded-xl border border-amber-500 text-amber-800 hover:bg-amber-50 text-xs font-semibold transition-colors"
                  >
                    Register for SCAT Test
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Competitive Exams Showcase */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-extrabold uppercase text-indigo-900 tracking-wider">
                Premier Entrance Pathways
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                Navodaya, Netarhat &amp; Olympiad Hub
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                In Bihar, getting into institutions like Navodaya, Netarhat, or Simultala transforms a student&apos;s life. 
                We provide targeted coaching right from the early classes across both Rajbag (Pupri) and Bahera Zahidpur branches.
              </p>
            </div>
            <Link
              href="/school/competitive-exams"
              className="inline-flex items-center gap-1 text-xs font-bold text-indigo-900 hover:text-indigo-700 underline underline-offset-4"
            >
              <span>Explore Complete Exam Syllabus &amp; Strategy</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Navodaya */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-50/30 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-900 px-2 py-0.5 rounded">
                  Class 6 Selection
                </span>
                <span className="text-xl">🏆</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-900 transition-colors">
                Jawahar Navodaya (JNVST)
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Complete preparation for Mental Ability Test (MAT), Arithmetic, and Language comprehension with weekly OMR sheet practice.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-indigo-900">High Selection Rate</span>
                <Link href="/school/competitive-exams" className="text-slate-500 hover:text-indigo-900">
                  Read details →
                </Link>
              </div>
            </div>

            {/* Netarhat Awasiya Vidyalaya */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-50/30 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
                  Historic Excellence
                </span>
                <span className="text-xl">🏛️</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-900 transition-colors">
                Netarhat Awasiya Vidyalaya
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Two-tier coaching covering Prelims and Mains (Mathematics, Language, Science, GK, and Mental Ability) for prestigious residential entry.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-amber-700">Ashram Pattern Model</span>
                <Link href="/school/competitive-exams" className="text-slate-500 hover:text-indigo-900">
                  Read details →
                </Link>
              </div>
            </div>

            {/* Simultala Awasiya Vidyalaya */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-50/30 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded">
                  Bihar State Pride
                </span>
                <span className="text-xl">🌟</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-900 transition-colors">
                Simultala Awasiya (SAV Jamui)
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Focused coaching for Bihar&apos;s top residential institution known for producing State Board toppers year after year.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-emerald-700">BSEB Top Rankers Hub</span>
                <Link href="/school/competitive-exams" className="text-slate-500 hover:text-indigo-900">
                  Read details →
                </Link>
              </div>
            </div>

            {/* Sainik School AISSEE */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-50/30 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-900 px-2 py-0.5 rounded">
                  Defence &amp; NDA Track
                </span>
                <span className="text-xl">🎖️</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-900 transition-colors">
                Sainik School (AISSEE)
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Training for Class 6 &amp; Class 9 entrance covering Intelligence, Mathematics, Language, and General Knowledge plus physical guidance.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-red-700">Pathway to Defence</span>
                <Link href="/school/competitive-exams" className="text-slate-500 hover:text-indigo-900">
                  Read details →
                </Link>
              </div>
            </div>

            {/* Science Olympiads */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-50/30 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-900 px-2 py-0.5 rounded">
                  National Ranking
                </span>
                <span className="text-xl">🔬</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-900 transition-colors">
                SOF Olympiads &amp; HBCSE
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Comprehensive training for National Science Olympiad (NSO), International Math Olympiad (IMO), Cyber Olympiad (NCO), and IOQM/RMO.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-purple-700">Medals &amp; Merit</span>
                <Link href="/school/competitive-exams" className="text-slate-500 hover:text-indigo-900">
                  Read details →
                </Link>
              </div>
            </div>

            {/* NMMS & Scholarships */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-50/30 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                  ₹12,000 / Year Award
                </span>
                <span className="text-xl">💰</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-900 transition-colors">
                NMMS Scholarship (Class 8)
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                National Means-cum-Merit Scholarship coaching to ensure talented students secure 4-year government financial support for schooling.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-blue-700">Financial Aid Mentorship</span>
                <Link href="/school/competitive-exams" className="text-slate-500 hover:text-indigo-900">
                  Read details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Welcome & Regional Vision - NEVER NP, Academic Cap Icon */}
      <section className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Quote Emblem */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-gradient-to-b from-indigo-950 to-slate-950 p-6 border border-indigo-800/40 shadow-2xl relative">
                <div className="w-16 h-16 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <AcademicCapIcon className="w-9 h-9 text-slate-950" />
                </div>
                <div className="text-center space-y-1">
                  <h4 className="text-lg font-bold text-white">Director&apos;s Desk</h4>
                  <p className="text-xs text-amber-400 font-medium">North Point Children Academy</p>
                  <p className="text-[11px] text-slate-400">Rajbag, Pupri &amp; Bahera Zahidpur</p>
                  <p className="text-[11px] text-emerald-400 font-bold">Mob: 8294407171</p>
                </div>
                <div className="my-4 border-t border-white/10"></div>
                <p className="text-xs text-slate-300 italic text-center leading-relaxed">
                  &ldquo;Our children in Sitamarhi have boundless potential. Our mission is to ensure no parent feels compelled to send a young child to distant coaching hubs when world-class foundation is right at their doorstep in Rajbag, Pupri and Bahera Zahidpur.&rdquo;
                </p>
                <div className="mt-4 text-center">
                  <span className="text-[11px] font-semibold text-slate-400">Pupri &amp; Nanpur (Sitamarhi, Bihar)</span>
                </div>
              </div>
            </div>

            {/* Text description */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
                Our Educational Vision
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Empowering Rural &amp; Semi-Urban Talent to Compete at the National Level
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Sitamarhi is surrounded by rich agrarian and commercial communities whose children aspire to be top engineers, 
                doctors, civil servants, and defence officers. Too often, families face the dilemma of expensive relocations to 
                Patna or Kota.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                At North Point Children Academy, we bridge this gap by bringing experienced faculty, structured curriculum, digital smart classes, 
                and rigorous doubt resolution across both our <strong>Rajbag (Pupri)</strong> and <strong>Bahera Zahidpur (Nanpur)</strong> branches.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-md transition-colors"
                >
                  Read Our Complete Mission →
                </Link>
                <a
                  href="tel:+918294407171"
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors flex items-center gap-2"
                >
                  <PhoneIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call 8294407171</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Infrastructure Tour */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-extrabold uppercase text-indigo-900 tracking-wider mb-1">
              Campus Facilities
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Modern Infrastructure Across Both Campuses
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Equipped with contemporary amenities at Rajbag (Pupri) and Bahera Zahidpur to provide a safe, intellectually stimulating, and joyful environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-900 flex items-center justify-center mb-4">
                <ComputerDesktopIcon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Smart Interactive Classrooms</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Equipped with audiovisual digital smart boards and multimedia learning modules to make science and mathematics concepts intuitive and memorable.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <BeakerIcon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Composite Science &amp; STEM Lab</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Hands-on practical experiments for Physics, Chemistry, and Biology, allowing students to verify textbook concepts in real life.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <BookOpenIcon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Well-Stocked Library &amp; Reading Room</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Curated collection of NCERT exemplars, competitive guidebooks, reference books, Olympiad test papers, and inspiring literary works.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
                <BusIcon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Safe Fleet Transport Facility</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Dedicated buses covering Rajbag, Pupri town, Janakpur Road station, Bahera Zahidpur, Nanpur, Bajpatti route, and over 20+ surrounding villages with trained attendants.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-4">
                <TrophyIcon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Sports &amp; Physical Education</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Cricket, football, badminton, athletics, yoga sessions, and karate training fostering physical fitness, teamwork, and resilience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-700 flex items-center justify-center mb-4">
                <ShieldCheckIcon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">CCTV Surveillance &amp; Safety</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                24x7 security guards, full CCTV coverage of classrooms and corridors, pure RO drinking water plants, and hygienic washroom facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions by Parents */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="text-xs font-extrabold uppercase text-indigo-900 tracking-wider">
              Parent Queries
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Clear answers to the most common questions asked by parents in Sitamarhi district.
            </p>
          </div>

          <div className="space-y-4">
            <details className="group p-5 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
              <summary className="font-bold text-slate-900 text-sm flex items-center justify-between list-none">
                <span>Where are your two branches located?</span>
                <span className="text-indigo-900 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                North Point Children Academy operates two full-fledged campuses: <strong>Branch 1 at Rajbag, Pupri</strong> and <strong>Branch 2 at Bahera Zahidpur (Nanpur block)</strong>, Sitamarhi. You can enroll your child at whichever branch is closer to your residence.
              </p>
            </details>

            <details className="group p-5 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
              <summary className="font-bold text-slate-900 text-sm flex items-center justify-between list-none">
                <span>What is the admission procedure for the School Wing?</span>
                <span className="text-indigo-900 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                Admissions for pre-primary are direct through an informal parent interaction. For higher classes, students undergo a simple baseline test in English, Hindi, and Mathematics to assess their current academic level, followed by document verification.
              </p>
            </details>

            <details className="group p-5 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
              <summary className="font-bold text-slate-900 text-sm flex items-center justify-between list-none">
                <span>How does the school prepare students for Navodaya (JNVST) and Netarhat?</span>
                <span className="text-indigo-900 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                We run an integrated competitive cell. In addition to regular school hours, aspiring students attend special morning/evening classes focusing on Mental Ability (MAT), non-verbal reasoning, mathematical shortcuts, and language passages, along with bi-weekly mock tests on OMR sheets.
              </p>
            </details>

            <details className="group p-5 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
              <summary className="font-bold text-slate-900 text-sm flex items-center justify-between list-none">
                <span>Is school bus / van transport available from our village?</span>
                <span className="text-indigo-900 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                Yes, our school transport network reaches major stops across Pupri town, Rajbag, Bahera Zahidpur, Nanpur, Bajpatti, Janakpur Road railway station, and surrounding rural routes. Please call 8294407171 to check your specific stop.
              </p>
            </details>

            <details className="group p-5 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
              <summary className="font-bold text-slate-900 text-sm flex items-center justify-between list-none">
                <span>What is the SCAT Scholarship Test for the Career Institute Wing?</span>
                <span className="text-indigo-900 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                SCAT (Scholarship-Cum-Admission Test) is conducted periodically for students joining our IIT-JEE and NEET-UG coaching programs. Depending on the student&apos;s score, fee concessions of 20% to 100% on tuition fees are awarded.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-12 bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider">
            Admissions Open 2025–26
          </div>
          <h2 className="text-2xl sm:text-4xl font-black">
            Give Your Child the North Point Children Academy Advantage
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Book an appointment with our counseling desk at Rajbag (Pupri) or Bahera Zahidpur, visit our campuses, or call <strong>8294407171</strong>.
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => openEnquiryModal("school")}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-colors"
            >
              Fill Online Admission Form
            </button>
            <a
              href="https://wa.me/918294407171?text=Hello%20North%20Point%20Children%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-colors flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Helpline: 8294407171</span>
            </a>
          </div>
        </div>
      </section>

      {/* Modals */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultWing={defaultWing}
      />
      <BrochureModal
        isOpen={brochureOpen}
        onClose={() => setBrochureOpen(false)}
      />
    </div>
  );
}
