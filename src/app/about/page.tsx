import React from "react";
import Link from "next/link";
import { CheckCircleIcon, ArrowRightIcon, AcademicCapIcon, TrophyIcon, ShieldCheckIcon, UserGroupIcon } from "@/components/Icons";

export const metadata = {
  title: "About Us | North Point Pupri (School & Institute)",
  description: "Learn about North Point Pupri's history, vision, leadership, and mission to deliver elite education in Sitamarhi district, Bihar.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black">About North Point Pupri</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            Pioneering academic excellence, competitive exam orientation, and holistic character development in Pupri, Sitamarhi (Bihar).
          </p>
        </div>
      </section>

      {/* Origin & Story */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-indigo-900 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">
              Our Journey &amp; Vision
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Bridging the Educational Gap in North Bihar
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Founded with the conviction that geography should never limit a child&apos;s ambition, <strong>North Point Pupri</strong> was born to provide rural and semi-urban families access to high-caliber schooling and early competitive exam mentorship.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Traditionally, parents in Sitamarhi district who wanted their children to crack residential tests like <strong>Navodaya (JNVST), Netarhat</strong>, or build solid roots for <strong>IIT-JEE and NEET</strong> had to send 10-year-olds away to Patna or distant cities. North Point brings that entire infrastructure, pedagogical discipline, and faculty expertise directly to Pupri.
            </p>
            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xl font-bold text-indigo-900">CBSE Model</div>
                <div className="text-xs text-slate-500 mt-1">Holistic English medium with cultural values</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xl font-bold text-amber-600">Dual Edge</div>
                <div className="text-xs text-slate-500 mt-1">School curriculum + Competitive entrance wing</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-950 to-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-amber-400">Our Core Pillars</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Concept-First Pedagogy</h4>
                  <p className="text-xs text-slate-300 mt-0.5">Moving beyond rote memorization to active inquiry, experiments, and logical deduction.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Affordable Excellence</h4>
                  <p className="text-xs text-slate-300 mt-0.5">National-standard facilities at fee structures designed for Bihar families.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Safe &amp; Inclusive Campus</h4>
                  <p className="text-xs text-slate-300 mt-0.5">Full CCTV monitoring, clean sanitation, dedicated school buses, and girl student safety.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Advisory Message */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase text-indigo-900 tracking-wider">Leadership</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Guiding Principles of North Point
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-900 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900">Academic Rigor</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Daily formative tracking, weekly doubt clearing, and continuous assessments to ensure every student masters the NCERT fundamentals.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900">Moral Character &amp; Ethics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nurturing discipline, respect for elders, national pride, community empathy, and environmental stewardship in daily school routines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900">Parental Partnership</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Regular Parent-Teacher Meetings (PTMs), transparent attendance reporting via SMS/WhatsApp, and one-on-one progress counseling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-indigo-950 text-white text-center px-4">
        <h3 className="text-2xl font-bold">Visit North Point Pupri Campus Today</h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto">
          We invite parents and guardians to tour our smart classrooms, science labs, and meet our teachers.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs uppercase shadow hover:bg-amber-300 transition-colors"
          >
            Schedule Campus Visit
          </Link>
          <Link
            href="/school/admissions"
            className="px-5 py-2.5 rounded-xl border border-white/20 text-white font-semibold text-xs hover:bg-white/10 transition-colors"
          >
            Admission Process →
          </Link>
        </div>
      </section>
    </div>
  );
}
