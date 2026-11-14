import React from "react";
import Link from "next/link";
import { TrophyIcon, CheckCircleIcon, SparklesIcon } from "@/components/Icons";

export const metadata = {
  title: "School Results & Achievements | North Point Children Academy",
  description:
    "Explore board pass percentages, district rankers, and Navodaya/Simultala selections from North Point Children Academy (Rajbag, Pupri & Bahera Zahidpur).",
};

export default function SchoolResultsPage() {
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
            <span>Results &amp; Achievements</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black">School Results &amp; Honors</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Academic distinction, competitive selection milestones, and student leadership honors across North Point Children Academy (Rajbag &amp; Bahera Zahidpur campuses).
          </p>
        </div>
      </section>

      {/* Main Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-3xl sm:text-4xl font-black text-indigo-900">100%</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mt-1">
              Board Examination Pass Rate
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-3xl sm:text-4xl font-black text-emerald-700">72%</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mt-1">
              First Division with Distinction
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-3xl sm:text-4xl font-black text-amber-600">45+</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mt-1">
              Navodaya &amp; Simultala Qualifiers
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-3xl sm:text-4xl font-black text-purple-700">28+</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mt-1">
              National Olympiad Medals
            </div>
          </div>
        </div>

        {/* Highlights */}
        <section className="space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase text-indigo-900 tracking-wider">Honor Roll</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Academic &amp; Competitive Feats
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-indigo-50/50 border border-indigo-100 space-y-3">
              <span className="text-xs font-bold uppercase text-indigo-900 bg-white px-2.5 py-1 rounded shadow-sm">
                Navodaya (JNVST)
              </span>
              <h3 className="text-lg font-bold text-slate-900">Consistent Selection Track</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Students trained in our specialized mental ability and arithmetic batches regularly secure coveted admission into Jawahar Navodaya Vidyalayas.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-amber-50/50 border border-amber-100 space-y-3">
              <span className="text-xs font-bold uppercase text-amber-800 bg-white px-2.5 py-1 rounded shadow-sm">
                Simultala &amp; Netarhat
              </span>
              <h3 className="text-lg font-bold text-slate-900">Residential Entrance Qualifiers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialized mentoring for the two-tier written examination format helps our pupils clear both Prelims and Mains exams.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-emerald-50/50 border border-emerald-100 space-y-3">
              <span className="text-xs font-bold uppercase text-emerald-800 bg-white px-2.5 py-1 rounded shadow-sm">
                SOF Olympiads &amp; NMMS
              </span>
              <h3 className="text-lg font-bold text-slate-900">Zonal &amp; Merit Scholarships</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Regular medals in the National Science Olympiad (NSO) and International Math Olympiad (IMO), along with NMMS scholarships.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Want your child to achieve academic excellence?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Admissions are open for academic session 2025–26. Contact our admissions cell.
            </p>
          </div>
          <Link
            href="/school/admissions"
            className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider shrink-0 transition-colors shadow-md"
          >
            School Admission Details →
          </Link>
        </section>
      </div>
    </div>
  );
}
