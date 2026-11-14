import React from "react";
import Link from "next/link";
import { PhoneIcon, MailIcon, LocationMarkerIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Banner / Trust Badges */}
      <div className="bg-indigo-950/80 border-b border-indigo-900/40 py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="text-xl md:text-2xl font-black text-amber-400">CBSE Pattern</div>
            <div className="text-xs text-slate-300 mt-1">Holistic English Medium Curriculum</div>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="text-xl md:text-2xl font-black text-emerald-400">JNVST & SAV</div>
            <div className="text-xs text-slate-300 mt-1">Proven Residential Exam Hub</div>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="text-xl md:text-2xl font-black text-sky-400">IIT-JEE & NEET</div>
            <div className="text-xs text-slate-300 mt-1">Structured Career Foundation</div>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="text-xl md:text-2xl font-black text-purple-400">Pupri & Rural Bus</div>
            <div className="text-xs text-slate-300 mt-1">Safe Transport Across 20+ Villages</div>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: About & Monogram */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-900 text-amber-400 flex items-center justify-center font-black border border-amber-400/40 text-sm">
                NP
              </div>
              <div>
                <span className="text-lg font-extrabold text-white tracking-tight">NORTH POINT</span>
                <span className="block text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  Public School & Career Institute
                </span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-sm">
              Established in Pupri, Sitamarhi to deliver premier national-level education and competitive exam guidance.
              Bridging the gap between school curriculum and career entrance tests for ambitious students of Bihar.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
              >
                <PhoneIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Helpline</span>
              </a>
            </div>
          </div>

          {/* Column 2: School Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              School Wing
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/school/academics" className="hover:text-amber-300 transition-colors">
                  CBSE Curriculum & Smart Classes
                </Link>
              </li>
              <li>
                <Link href="/school/competitive-exams" className="hover:text-amber-300 transition-colors">
                  Navodaya (JNVST) Preparation
                </Link>
              </li>
              <li>
                <Link href="/school/competitive-exams" className="hover:text-amber-300 transition-colors">
                  Netarhat & Simultala Vidyalaya
                </Link>
              </li>
              <li>
                <Link href="/school/competitive-exams" className="hover:text-amber-300 transition-colors">
                  Sainik School (AISSEE) Prep
                </Link>
              </li>
              <li>
                <Link href="/school/competitive-exams" className="hover:text-amber-300 transition-colors">
                  SOF Olympiads & NMMS Scholarship
                </Link>
              </li>
              <li>
                <Link href="/school/beyond-classroom" className="hover:text-amber-300 transition-colors">
                  Sports, NCC & Cultural Clubs
                </Link>
              </li>
              <li>
                <Link href="/school/admissions" className="hover:text-amber-300 transition-colors">
                  Admission Criteria & Fee Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Institute Coaching Wing */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Career Institute
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/institute/courses" className="hover:text-amber-300 transition-colors">
                  IIT-JEE (Main + Advanced) 2-Year
                </Link>
              </li>
              <li>
                <Link href="/institute/courses" className="hover:text-amber-300 transition-colors">
                  NEET-UG Medical Classroom
                </Link>
              </li>
              <li>
                <Link href="/institute/courses" className="hover:text-amber-300 transition-colors">
                  Pre-Foundation (Class 8–10)
                </Link>
              </li>
              <li>
                <Link href="/institute/courses" className="hover:text-amber-300 transition-colors">
                  1-Year Dropper / Target Batches
                </Link>
              </li>
              <li>
                <Link href="/institute/faculty" className="hover:text-amber-300 transition-colors">
                  Our Faculty & Mentorship Model
                </Link>
              </li>
              <li>
                <Link href="/institute/results" className="hover:text-amber-300 transition-colors">
                  Hall of Fame & Top Ranks
                </Link>
              </li>
              <li>
                <Link href="/institute/admissions" className="hover:text-amber-300 transition-colors">
                  SCAT Scholarship Test (Up to 100%)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Campus Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Campus & Location
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <LocationMarkerIcon className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>North Point Campus, Station Road / Main Bypass, Pupri, Sitamarhi, Bihar 843320</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 98765 43210 / +91 91234 56789</span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="w-4 h-4 text-sky-400 shrink-0" />
                <span>info@northpointpupri.edu.in</span>
              </div>
              <div className="pt-2 text-[11px] text-slate-500">
                Visiting Hours: Mon – Sat (8:00 AM – 4:30 PM)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-slate-900 bg-black/60 py-4 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © 2025 North Point Pupri (Public School &amp; Career Institute). All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/about" className="hover:text-slate-300">About Campus</Link>
            <span>•</span>
            <Link href="/school/admissions" className="hover:text-slate-300">Admission Process</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-300">Location Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
