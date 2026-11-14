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
      {/* Hero Section - Heritage Oxford Navy & Regal Gold */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0c1a30] via-[#122649] to-[#1a3668] text-white py-14 sm:py-20 lg:py-24 border-t-4 border-amber-400 border-b border-indigo-900/40">
        {/* Subtle warm educational lighting */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Pill Tag with Both Branches */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-amber-400/30 text-xs font-semibold text-amber-300 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <span>Admissions Open 2025–26 • Campuses: Rajbag (Pupri) &amp; Bahera Zahidpur</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight">
              North Point Children Academy
              <span className="block text-2xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300 mt-2">
                English Medium School with Integrated Competitive Coaching
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Serving students across our two premier campuses at <strong>Rajbag (Pupri)</strong> and <strong>Bahera Zahidpur (Nanpur)</strong>. 
              A comprehensive educational sanctuary where regular CBSE schooling is seamlessly synchronized with intensive coaching for{" "}
              <span className="text-amber-300 font-semibold">Navodaya (JNVST), Netarhat, Simultala, Sainik School</span>, and career foundation for{" "}
              <span className="text-amber-300 font-semibold">IIT-JEE &amp; NEET</span> — all under one single roof.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
              <button
                onClick={() => openEnquiryModal("school")}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-lg hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
              >
                🏫 School Admission 2025–26
              </button>
              <Link
                href="/integrated-program"
                className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg hover:shadow-indigo-600/30 transition-all border border-indigo-400/30 transform hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <span>🎯 Integrated Coaching (ISP)</span>
                <span className="text-xs">→</span>
              </Link>
              <button
                onClick={() => setBrochureOpen(true)}
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
              >
                <span>Prospectus PDF</span>
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

      {/* The Integrated School Model Showcase */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
              <SparklesIcon className="w-3.5 h-3.5 text-amber-600" />
              <span>The North Point Advantage</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              One School. Integrated Competitive Coaching. Zero Burnout.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              North Point Children Academy operates on a synchronized model where regular CBSE schooling and high-stakes entrance coaching happen seamlessly within the school hours.
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
                Complete Overview
              </button>
              <button
                onClick={() => setActiveTab("school")}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === "school"
                    ? "bg-indigo-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                🏫 Core Schooling
              </button>
              <button
                onClick={() => setActiveTab("institute")}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === "institute"
                    ? "bg-amber-500 text-slate-950 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                🎯 Integrated Coaching (ISP)
              </button>
            </div>
          </div>

          {/* Cards Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Core Schooling Card */}
            {(activeTab === "all" || activeTab === "school") && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all border border-slate-200 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-900 bg-indigo-50 px-3 py-1 rounded-full">
                      Pillar 1 • Core Schooling
                    </span>
                    <span className="text-2xl">🏫</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-900 transition-colors">
                    North Point Children Academy
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    A vibrant learning ecosystem built on CBSE curriculum guidelines, digital smart classrooms, and experimental science labs across our <strong>Rajbag (Pupri)</strong> and <strong>Bahera Zahidpur</strong> campuses. 
                    Equipping students with strong moral foundations, English fluency, and sports.
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
                        <span>Audiovisual digital smart boards for conceptual clarity</span>
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
                    <span>Academic Curriculum</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => openEnquiryModal("school")}
                    className="px-4 py-2 rounded-xl border border-indigo-900 text-indigo-900 hover:bg-indigo-50 text-xs font-semibold transition-colors"
                  >
                    School Admission Guidelines
                  </button>
                </div>
              </div>
            )}

            {/* Integrated Coaching (ISP) Card */}
            {(activeTab === "all" || activeTab === "institute") && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all border border-amber-300 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-bl-full pointer-events-none"></div>

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      Pillar 2 • Integrated Program (ISP)
                    </span>
                    <span className="text-2xl">🎯</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    Integrated Competitive Coaching
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Synchronized competitive coaching integrated directly into the school schedule. No evening rush or external tuition fatigue. Preparing students for India&apos;s most prestigious entrance exams.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Integrated Entrance Streams:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      <li className="flex items-center gap-2">
                        <span className="text-amber-600 font-bold">✓</span>
                        <span><strong>Junior Wing:</strong> Navodaya (JNVST), Netarhat, Simultala &amp; Sainik School (AISSEE)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-amber-600 font-bold">✓</span>
                        <span><strong>Senior Wing:</strong> IIT-JEE (Mains + Advanced) &amp; NEET-UG Medical foundation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-amber-600 font-bold">✓</span>
                        <span>Daily Practice Problems (DPP) &amp; bi-weekly OMR speed tests</span>
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
                    href="/integrated-program"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-md transition-colors"
                  >
                    <span>How ISP Works</span>
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

      {/* Campus Life & Student Photo Showcase - Front Page Gallery */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold text-indigo-900 uppercase tracking-wider mb-2">
                <span>📸 Life at North Point Children Academy</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                Moments of Learning, Discipline &amp; Joy
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl">
                A glimpse into daily school life, student activities, smart classrooms, and competitive training across our <strong>Rajbag (Pupri)</strong> and <strong>Bahera Zahidpur</strong> campuses.
              </p>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-indigo-950 text-white font-bold text-xs shadow-md transition-all shrink-0 self-start md:self-auto"
            >
              <span>View Full Photo Gallery</span>
              <span className="text-amber-400">→</span>
            </Link>
          </div>

          {/* Curated 6 Student & Campus Life Photo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Photo 1: Morning Assembly & Prayers */}
            <div className="group rounded-2xl bg-slate-900 overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 flex flex-col">
              <div className="h-52 relative overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-sky-950 flex flex-col justify-between p-4 text-white">
                <div className="flex items-center justify-between z-10">
                  <span className="bg-amber-400 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Morning Assembly
                  </span>
                  <span className="bg-white/10 backdrop-blur-md text-[10px] font-medium text-slate-200 px-2 py-0.5 rounded">
                    Rajbag, Pupri
                  </span>
                </div>
                {/* Simulated Campus Photo Composition */}
                <div className="my-auto flex flex-col items-center justify-center text-center space-y-2 py-2">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                    🧑‍🤝‍🧑
                  </div>
                  <div className="text-xs font-bold text-white tracking-wide">
                    Students Standing in Morning Prayer &amp; National Anthem
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Discipline, Yoga Drills &amp; Daily Moral Assemblies
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/10 pt-2 z-10">
                  <span>Uniform &amp; Cleanliness Inspection</span>
                  <span className="text-amber-300 font-semibold">8:00 AM Daily</span>
                </div>
              </div>
              <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-indigo-900 transition-colors">
                    Character Building &amp; Morning Assembly
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Students gather in neat uniform formations for patriotic prayers, news reading, thought of the day, and physical stretching.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-indigo-800 font-semibold">Holistic Discipline</span>
                  <Link href="/gallery" className="text-slate-500 hover:text-indigo-900 font-medium">See album →</Link>
                </div>
              </div>
            </div>

            {/* Photo 2: Digital Smart Classroom */}
            <div className="group rounded-2xl bg-slate-900 overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 flex flex-col">
              <div className="h-52 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-950 to-slate-950 flex flex-col justify-between p-4 text-white">
                <div className="flex items-center justify-between z-10">
                  <span className="bg-sky-400 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Smart Class
                  </span>
                  <span className="bg-white/10 backdrop-blur-md text-[10px] font-medium text-slate-200 px-2 py-0.5 rounded">
                    Bahera Zahidpur
                  </span>
                </div>
                <div className="my-auto flex flex-col items-center justify-center text-center space-y-2 py-2">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                    💻
                  </div>
                  <div className="text-xs font-bold text-white tracking-wide">
                    Interactive Smart Board Session
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Audiovisual Mathematics &amp; Science Explanations
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/10 pt-2 z-10">
                  <span>Visual Concept Retention</span>
                  <span className="text-amber-300 font-semibold">Grades 1 to 12</span>
                </div>
              </div>
              <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-indigo-900 transition-colors">
                    Interactive Digital Smart Classrooms
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Moving away from chalk and dust to 4K visual animations, 3D anatomy models, and geometry software for deep conceptual clarity.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-indigo-800 font-semibold">Tech-Enabled Learning</span>
                  <Link href="/gallery" className="text-slate-500 hover:text-indigo-900 font-medium">See album →</Link>
                </div>
              </div>
            </div>

            {/* Photo 3: Composite Science Laboratory */}
            <div className="group rounded-2xl bg-slate-900 overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 flex flex-col">
              <div className="h-52 relative overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-900 flex flex-col justify-between p-4 text-white">
                <div className="flex items-center justify-between z-10">
                  <span className="bg-emerald-400 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Science Lab
                  </span>
                  <span className="bg-white/10 backdrop-blur-md text-[10px] font-medium text-slate-200 px-2 py-0.5 rounded">
                    Both Campuses
                  </span>
                </div>
                <div className="my-auto flex flex-col items-center justify-center text-center space-y-2 py-2">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                    🔬
                  </div>
                  <div className="text-xs font-bold text-white tracking-wide">
                    Hands-On Practical Lab Demonstrations
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Microscopes, Chemical Titration &amp; Optics Prisms
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/10 pt-2 z-10">
                  <span>STEM Experimentation</span>
                  <span className="text-emerald-300 font-semibold">Weekly Practicals</span>
                </div>
              </div>
              <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-indigo-900 transition-colors">
                    Composite Science &amp; STEM Laboratory
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Students conduct experiments under teacher supervision, verifying laws of physics, chemical reactions, and botanical specimens.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-800 font-semibold">Experimental Mindset</span>
                  <Link href="/gallery" className="text-slate-500 hover:text-indigo-900 font-medium">See album →</Link>
                </div>
              </div>
            </div>

            {/* Photo 4: Navodaya & Olympiad Special Batch */}
            <div className="group rounded-2xl bg-slate-900 overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 flex flex-col">
              <div className="h-52 relative overflow-hidden bg-gradient-to-br from-amber-950 via-slate-900 to-indigo-950 flex flex-col justify-between p-4 text-white">
                <div className="flex items-center justify-between z-10">
                  <span className="bg-amber-400 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    JNVST &amp; SCAT
                  </span>
                  <span className="bg-white/10 backdrop-blur-md text-[10px] font-medium text-slate-200 px-2 py-0.5 rounded">
                    Competitive Wing
                  </span>
                </div>
                <div className="my-auto flex flex-col items-center justify-center text-center space-y-2 py-2">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                    📝
                  </div>
                  <div className="text-xs font-bold text-white tracking-wide">
                    OMR Mock Tests &amp; Mental Ability (MAT)
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Navodaya, Netarhat &amp; Simultala Targeted Training
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/10 pt-2 z-10">
                  <span>Time-Management Training</span>
                  <span className="text-amber-300 font-semibold">Bi-Weekly OMR Drills</span>
                </div>
              </div>
              <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-indigo-900 transition-colors">
                    Competitive Entrance Examination Cell
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Aspiring candidates practice speed drills, elimination strategies, and non-verbal reasoning for residential entrance selections.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-amber-800 font-semibold">Proven Results</span>
                  <Link href="/school/competitive-exams" className="text-slate-500 hover:text-indigo-900 font-medium">Exam details →</Link>
                </div>
              </div>
            </div>

            {/* Photo 5: Sports & Athletics Tournament */}
            <div className="group rounded-2xl bg-slate-900 overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 flex flex-col">
              <div className="h-52 relative overflow-hidden bg-gradient-to-br from-orange-950 via-slate-900 to-amber-950 flex flex-col justify-between p-4 text-white">
                <div className="flex items-center justify-between z-10">
                  <span className="bg-orange-400 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Sports Arena
                  </span>
                  <span className="bg-white/10 backdrop-blur-md text-[10px] font-medium text-slate-200 px-2 py-0.5 rounded">
                    Playground
                  </span>
                </div>
                <div className="my-auto flex flex-col items-center justify-center text-center space-y-2 py-2">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                    🏃
                  </div>
                  <div className="text-xs font-bold text-white tracking-wide">
                    Annual Sports Meet &amp; Cricket Tournament
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Athletics, Badminton, Football &amp; Karate Drills
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/10 pt-2 z-10">
                  <span>Physical Conditioning</span>
                  <span className="text-amber-300 font-semibold">4 House Leagues</span>
                </div>
              </div>
              <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-indigo-900 transition-colors">
                    Sports, Fitness &amp; House Tournaments
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Inter-house athletic meets, relay races, and outdoor sports teach our students resilience, physical endurance, and team spirit.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-orange-800 font-semibold">Active Campus Life</span>
                  <Link href="/school/beyond-classroom" className="text-slate-500 hover:text-indigo-900 font-medium">Sports wing →</Link>
                </div>
              </div>
            </div>

            {/* Photo 6: Topper Felicitation & Awards */}
            <div className="group rounded-2xl bg-slate-900 overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 flex flex-col">
              <div className="h-52 relative overflow-hidden bg-gradient-to-br from-rose-950 via-slate-900 to-indigo-950 flex flex-col justify-between p-4 text-white">
                <div className="flex items-center justify-between z-10">
                  <span className="bg-rose-400 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Annual Honors
                  </span>
                  <span className="bg-white/10 backdrop-blur-md text-[10px] font-medium text-slate-200 px-2 py-0.5 rounded">
                    Auditorium
                  </span>
                </div>
                <div className="my-auto flex flex-col items-center justify-center text-center space-y-2 py-2">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                    🏆
                  </div>
                  <div className="text-xs font-bold text-white tracking-wide">
                    Academic Felicitations &amp; Cultural Fest
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Recognizing Board Toppers, SCAT Scholars &amp; Achievers
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/10 pt-2 z-10">
                  <span>Student Recognition</span>
                  <span className="text-amber-300 font-semibold">Trophies &amp; Medals</span>
                </div>
              </div>
              <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-indigo-900 transition-colors">
                    Annual Day &amp; Topper Felicitation
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Celebrating academic distinctions, artistic talents, and competitive qualifiers in the presence of parents and community elders.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-rose-800 font-semibold">Pride of Sitamarhi</span>
                  <Link href="/gallery" className="text-slate-500 hover:text-indigo-900 font-medium">See album →</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership & Founders Desk Showcase - Dignified Academic Hall of Honor */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-amber-50/40 via-slate-50 to-white text-slate-900 border-y border-amber-200/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider">
              Visionary Leadership &amp; Governance
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Guiding Minds Behind North Point Children Academy
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Our school is steered by dedicated educational leaders committed to providing world-class schooling and competitive entrance success right here in Pupri and Bahera Zahidpur.
            </p>
          </div>

          {/* 3 Leadership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Leader 1: Ashok Kumar Thakur - Founder & Chairman */}
            <div className="bg-white rounded-2xl p-6 border-2 border-amber-300 shadow-sm hover:shadow-xl hover:border-amber-400 flex flex-col justify-between transition-all group">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0c1a30] to-[#142850] text-amber-400 border-2 border-amber-400 flex items-center justify-center shrink-0 shadow-md">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base group-hover:text-amber-800 transition-colors">
                      Ashok Kumar Thakur
                    </h3>
                    <p className="text-amber-700 text-xs font-bold">Founder &amp; Chairman</p>
                    <span className="text-[10px] bg-amber-50 text-amber-900 font-semibold px-2 py-0.5 rounded border border-amber-200">
                      Chairman&apos;s Voice
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-700 italic leading-relaxed bg-amber-50/50 p-3 rounded-xl border border-amber-100">
                  &ldquo;Our pledge is to bring top-tier English-medium schooling, disciplined character building, and residential entrance coaching within reach of every family in Sitamarhi.&rdquo;
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500 font-medium">Institutional Vision</span>
                <Link href="/leadership#chairman" className="text-amber-800 hover:text-amber-950 font-bold hover:underline flex items-center gap-1">
                  <span>Read Message</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Leader 2: Arvind Ujjwal - Managing Director */}
            <div className="bg-white rounded-2xl p-6 border-2 border-indigo-200 shadow-sm hover:shadow-xl hover:border-indigo-400 flex flex-col justify-between transition-all group">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0c1a30] to-[#142850] text-indigo-300 border-2 border-indigo-400 flex items-center justify-center shrink-0 shadow-md">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base group-hover:text-indigo-900 transition-colors">
                      Arvind Ujjwal
                    </h3>
                    <p className="text-indigo-800 text-xs font-bold">Managing Director</p>
                    <span className="text-[10px] bg-indigo-50 text-indigo-900 font-semibold px-2 py-0.5 rounded border border-indigo-200">
                      Academic Head &amp; Tech
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-700 italic leading-relaxed bg-indigo-50/40 p-3 rounded-xl border border-indigo-100">
                  &ldquo;We integrate modern digital smart classes with targeted preparation for Navodaya, Netarhat, Simultala, IIT-JEE, and NEET so our students compete fearlessly on national platforms.&rdquo;
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500 font-medium">Competitive Rigor</span>
                <Link href="/leadership#director" className="text-indigo-900 hover:text-indigo-950 font-bold hover:underline flex items-center gap-1">
                  <span>Read Message</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Leader 3: Aparna Thakur - Principal */}
            <div className="bg-white rounded-2xl p-6 border-2 border-emerald-200 shadow-sm hover:shadow-xl hover:border-emerald-400 flex flex-col justify-between transition-all group">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0c1a30] to-[#142850] text-emerald-300 border-2 border-emerald-400 flex items-center justify-center shrink-0 shadow-md">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base group-hover:text-emerald-900 transition-colors">
                      Aparna Thakur
                    </h3>
                    <p className="text-emerald-800 text-xs font-bold">Principal</p>
                    <span className="text-[10px] bg-emerald-50 text-emerald-900 font-semibold px-2 py-0.5 rounded border border-emerald-200">
                      Student Welfare &amp; Culture
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-700 italic leading-relaxed bg-emerald-50/40 p-3 rounded-xl border border-emerald-100">
                  &ldquo;A school must be a sanctuary of curious inquiry and emotional safety. We nurture young personalities through individual mentoring, moral values, and creative activities.&rdquo;
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500 font-medium">Child-Centric Care</span>
                <Link href="/leadership#principal" className="text-emerald-800 hover:text-emerald-950 font-bold hover:underline flex items-center gap-1">
                  <span>Read Message</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

          </div>

          <div className="mt-10 text-center">
            <Link
              href="/leadership"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              <span>Explore Complete Leadership Profiles &amp; Messages</span>
              <span>→</span>
            </Link>
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
