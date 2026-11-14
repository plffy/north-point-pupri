import React from "react";
import Link from "next/link";
import { TrophyIcon, SparklesIcon, CheckCircleIcon } from "@/components/Icons";

export const metadata = {
  title: "Results & Hall of Fame | North Point Career Institute Pupri",
  description:
    "Celebrating our students' top ranks and selections in IIT-JEE, NEET-UG, Navodaya, Simultala, and National Olympiads from Pupri, Bihar.",
};

export default function InstituteResultsPage() {
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
            <span>Results</span>
          </div>
          <span className="text-xs uppercase font-extrabold tracking-wider bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded shadow-sm inline-block mb-3">
            Proof of Consistent Excellence
          </span>
          <h1 className="text-3xl sm:text-5xl font-black">Hall of Fame &amp; Selections</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            From the classrooms of Pupri to premier engineering colleges, medical universities, and prestigious residential institutions across India.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-16">
        {/* Milestone Counters */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div className="text-3xl sm:text-4xl font-black text-indigo-900">45+</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mt-1">
              Navodaya &amp; Simultala Selections
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div className="text-3xl sm:text-4xl font-black text-emerald-700">98.6%</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mt-1">
              Board Academic Distinction
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div className="text-3xl sm:text-4xl font-black text-amber-600">30+</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mt-1">
              SOF Olympiad Medalists
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div className="text-3xl sm:text-4xl font-black text-purple-700">100%</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mt-1">
              Dedicated Doubt Redressal
            </div>
          </div>
        </section>

        {/* Categories of Success */}
        <section className="space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase text-indigo-900 tracking-wider">Milestones</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Celebrating Pupil Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-indigo-50/50 border border-indigo-100 space-y-3">
              <span className="text-xs font-bold text-indigo-900 bg-white px-2.5 py-1 rounded shadow-sm">
                Residential School Entrance
              </span>
              <h3 className="text-lg font-bold text-slate-900">JNVST &amp; Simultala Qualifiers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Year after year, students from North Point Pupri crack the Jawahar Navodaya Vidyalaya Selection Test and Simultala Awasiya Vidyalaya with top district ranks.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-emerald-50/50 border border-emerald-100 space-y-3">
              <span className="text-xs font-bold text-emerald-800 bg-white px-2.5 py-1 rounded shadow-sm">
                Competitive Science &amp; Math
              </span>
              <h3 className="text-lg font-bold text-slate-900">National Science Olympiad Medals</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Gold and Silver medals won across zonal and international levels of SOF NSO, IMO, and National Cyber Olympiad (NCO).
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-amber-50/50 border border-amber-100 space-y-3">
              <span className="text-xs font-bold text-amber-800 bg-white px-2.5 py-1 rounded shadow-sm">
                Engineering &amp; Medical Foundation
              </span>
              <h3 className="text-lg font-bold text-slate-900">IIT-JEE &amp; NEET Aspirant Track</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Graduates of our 2-Year classroom and Foundation batches qualifying for prestigious engineering institutions and government medical seats.
              </p>
            </div>
          </div>
        </section>

        {/* Parent & Student Testimonials */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8">
          <div>
            <span className="text-xs font-extrabold uppercase text-amber-400 tracking-wider">Voice of Parents</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">What Families in Pupri Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <p className="text-xs text-slate-300 italic leading-relaxed">
                &ldquo;We were planning to send our son to a coaching center in Patna for Navodaya preparation. Enrolling him at North Point Pupri saved us heavy hostel expenses, and he cracked JNVST with flying colors! The daily OMR practice was crucial.&rdquo;
              </p>
              <div className="text-xs font-bold text-amber-400">
                — Parent of JNVST Qualifier (Pupri Bazar)
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <p className="text-xs text-slate-300 italic leading-relaxed">
                &ldquo;The faculty at North Point Career Institute explains Physics and Chemistry with so much clarity. My daughter’s confidence in Mathematics has skyrocketed, and she scored 96% in her board exams while clearing Olympiad Level 1.&rdquo;
              </p>
              <div className="text-xs font-bold text-amber-400">
                — Proud Guardian, Bajpatti Route
              </div>
            </div>
          </div>
        </section>

        {/* Next Success Story CTA */}
        <section className="p-8 rounded-3xl bg-amber-400 text-slate-950 text-center space-y-3">
          <h3 className="text-2xl font-black">Your Child Could Be Our Next Success Story</h3>
          <p className="text-xs sm:text-sm text-slate-900 max-w-md mx-auto">
            Schedule a diagnostic assessment or counseling session at our Pupri campus today.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs uppercase shadow transition-colors inline-block"
            >
              Contact Counseling Desk
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
