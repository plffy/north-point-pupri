import React from "react";
import Link from "next/link";
import { BookOpenIcon, CheckCircleIcon, ComputerDesktopIcon, BeakerIcon } from "@/components/Icons";

export const metadata = {
  title: "Academics & Pedagogy | North Point Public School Pupri",
  description:
    "Explore the academic structure, CBSE curriculum, smart digital pedagogy, and assessment systems at North Point Public School, Pupri.",
};

export default function AcademicsPage() {
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
            <span>Academics</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black">Academics &amp; Curriculum</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            A balanced educational model aligned with the National Education Policy (NEP 2020) and CBSE frameworks, fostering critical thinking, conceptual clarity, and bilingual eloquence.
          </p>
        </div>
      </section>

      {/* Stages of Learning */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase text-indigo-900 tracking-wider">Stages of Learning</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
            Progressive Developmental Milestones
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Every learning stage is crafted to suit the cognitive and emotional growth of young minds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Foundational */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xl">
              🌱
            </div>
            <h3 className="text-xl font-bold text-slate-900">Foundational Stage</h3>
            <div className="text-xs font-semibold text-amber-700">Pre-Primary &amp; Early Grades</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Play-based, activity-centric learning focusing on fine motor skills, phonics, storytelling, numbers, and curiosity-driven exploration.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-200">
              <li className="flex items-center gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span>Language &amp; Phonics foundation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span>Numeracy &amp; Spatial perception</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span>Social interaction &amp; self-care habits</span>
              </li>
            </ul>
          </div>

          {/* Preparatory & Middle */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-900 flex items-center justify-center font-bold text-xl">
              🌿
            </div>
            <h3 className="text-xl font-bold text-slate-900">Preparatory &amp; Middle</h3>
            <div className="text-xs font-semibold text-indigo-800">Core Subject Depth</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Gradual transition from play to structured academic disciplines: Science, Mathematics, Social Sciences, Hindi, English, and Sanskrit.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-200">
              <li className="flex items-center gap-2">
                <span className="text-indigo-600 font-bold">✓</span>
                <span>Hands-on science lab demonstrations</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-indigo-600 font-bold">✓</span>
                <span>Arithmetic problem-solving drills</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-indigo-600 font-bold">✓</span>
                <span>Introduction to Computer &amp; Coding logic</span>
              </li>
            </ul>
          </div>

          {/* Secondary & Competitive */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xl">
              🌳
            </div>
            <h3 className="text-xl font-bold text-slate-900">Secondary Stage</h3>
            <div className="text-xs font-semibold text-emerald-800">Board Excellence &amp; Foundation</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Intensive preparation for board assessments combined with Olympiad exposure and foundational science concepts needed for competitive exams.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-200">
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>In-depth NCERT mastery &amp; exemplars</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Regular chapter-wise test series</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Career counseling &amp; competitive foundation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Teaching Methodology Highlights */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase text-amber-400 tracking-wider">Methodology</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">
              How North Point Teaches Differently
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Combining modern audio-visual technology with traditional rigor to maximize student engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-amber-400 text-lg font-bold">01. Smart Visuals</div>
              <p className="text-xs text-slate-300">
                Interactive digital boards bring complex biology diagrams, geometry theorems, and geography maps to life.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-amber-400 text-lg font-bold">02. Daily Doubt Window</div>
              <p className="text-xs text-slate-300">
                Dedicated 45-minute daily doubt-clearing sessions where students can clarify questions 1-on-1 with teachers.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-amber-400 text-lg font-bold">03. Language Lab</div>
              <p className="text-xs text-slate-300">
                Special emphasis on English reading, pronunciation, and spoken fluency, alongside Hindi and Sanskrit literature.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-amber-400 text-lg font-bold">04. Continuous PTMs</div>
              <p className="text-xs text-slate-300">
                Monthly detailed progress report cards and parent-teacher consultations to partner in student development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-indigo-50 border-t border-indigo-100 text-center px-4">
        <h3 className="text-2xl font-bold text-slate-900">Experience Our Smart Classrooms</h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto">
          Visit the North Point Pupri campus to see our classes in action and discuss the curriculum with our principal.
        </p>
        <div className="mt-5 flex justify-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-indigo-900 text-white font-bold text-xs uppercase shadow hover:bg-indigo-800 transition-colors"
          >
            Contact Admissions
          </Link>
          <Link
            href="/school/competitive-exams"
            className="px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-xs hover:bg-slate-50 transition-colors"
          >
            Competitive Exams Hub →
          </Link>
        </div>
      </section>
    </div>
  );
}
