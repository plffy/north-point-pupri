import React from "react";
import Link from "next/link";
import { UserGroupIcon, CheckCircleIcon, SparklesIcon } from "@/components/Icons";

export const metadata = {
  title: "Faculty & Mentorship | North Point Career Institute Pupri",
  description:
    "Meet our expert teaching faculty and academic mentors for IIT-JEE, NEET-UG, and Foundation at North Point Pupri, Sitamarhi.",
};

export default function InstituteFacultyPage() {
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
            <span>Faculty</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black">Expert Faculty &amp; Mentorship</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Great results are born from inspiring teachers. Our faculty brings proven pedagogy from premier coaching centers of Kota and Patna right into the classrooms of Pupri.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-16">
        {/* Teaching Philosophy */}
        <section className="space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase text-indigo-900 tracking-wider">Our Pedagogical Edge</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              How Our Faculty Guides Every Student
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-900 text-amber-400 flex items-center justify-center font-bold">
                💡
              </div>
              <h3 className="text-base font-bold text-slate-900">Concept-Rooted Learning</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We avoid rote formulas. Faculty members illustrate the fundamental physical origins and mathematical derivations of each concept.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-900 text-amber-400 flex items-center justify-center font-bold">
                ⏱️
              </div>
              <h3 className="text-base font-bold text-slate-900">Shortcuts &amp; Time Mastery</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Competitive exams require solving questions within 90 seconds. Teachers impart pattern-recognition techniques and elimination methods.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-900 text-amber-400 flex items-center justify-center font-bold">
                🤝
              </div>
              <h3 className="text-base font-bold text-slate-900">Daily Doubt Resolution</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated post-lecture doubt counters where students can sit with faculty 1-on-1 until every confusion is resolved.
              </p>
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase text-indigo-900 tracking-wider">Academic Wings</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Subject Specialist Departments
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-900">Department</div>
              <h3 className="text-lg font-bold text-slate-900">Physics Wing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialists in Mechanics, Electrodynamics, Optics, and Modern Physics with extensive visual simulations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">Department</div>
              <h3 className="text-lg font-bold text-slate-900">Chemistry Wing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dual focus on Organic reaction mechanisms, Inorganic periodic trends, and Physical chemistry numerical drills.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700">Department</div>
              <h3 className="text-lg font-bold text-slate-900">Mathematics Wing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deep mastery in Coordinate Geometry, Differential &amp; Integral Calculus, Vectors, and Complex Numbers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-rose-800">Department</div>
              <h3 className="text-lg font-bold text-slate-900">Biology Wing (NEET)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Line-by-line NCERT decoding, Genetics, Human Physiology, Plant Physiology, and 360/360 target mock sheets.
              </p>
            </div>
          </div>
        </section>

        {/* Small Batch Mentorship Policy */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-4">
          <span className="text-xs font-extrabold uppercase text-amber-400 tracking-wider">
            Our Strict Batch Norms
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            No 200-Student Mega Auditoriums
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Unlike commercial coaching factories where students become just a roll number in crowded halls, North Point maintains strictly capped batch sizes of <strong>30 to 35 students</strong>. Every student is personally known to their subject teachers.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase shadow transition-colors inline-block"
            >
              Meet Our Mentors at Campus
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
