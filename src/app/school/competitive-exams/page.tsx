import React from "react";
import Link from "next/link";
import {
  TrophyIcon,
  CheckCircleIcon,
  BookOpenIcon,
  AcademicCapIcon,
  SparklesIcon,
  ArrowRightIcon,
} from "@/components/Icons";

export const metadata = {
  title: "Competitive Exams Hub | Navodaya, Netarhat, Simultala, Sainik School & Olympiads | North Point Children Academy",
  description:
    "Comprehensive preparation for Navodaya (JNVST), Netarhat Awasiya Vidyalaya, Simultala (SAV Jamui), Sainik School (AISSEE), SOF Olympiads (NSO/IMO), and NMMS scholarships across Rajbag (Pupri) & Bahera Zahidpur campuses.",
};

export default function CompetitiveExamsPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/school/academics" className="hover:underline">School</Link>
            <span>/</span>
            <span>Competitive Exams Hub</span>
          </div>
          <span className="text-xs uppercase font-extrabold tracking-wider bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded shadow-sm inline-block mb-3">
            Bihar&apos;s Premier Entrance Pathways
          </span>
          <h1 className="text-3xl sm:text-5xl font-black">
            Competitive Exams &amp; Talent Hub
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            In Bihar and across India, getting into top residential institutions and national olympiads opens lifelong doors. 
            North Point Children Academy provides early, integrated preparation across both Rajbag (Pupri) and Bahera Zahidpur campuses to build analytical champions.
          </p>
        </div>
      </section>

      {/* Overview Card Ribbon */}
      <section className="py-6 bg-indigo-900 text-white border-b border-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-2">
              <div className="text-lg sm:text-xl font-black text-amber-400">JNVST</div>
              <div className="text-xs text-slate-300 mt-0.5">Navodaya Vidyalaya Selection</div>
            </div>
            <div className="p-2">
              <div className="text-lg sm:text-xl font-black text-amber-400">Netarhat &amp; SAV</div>
              <div className="text-xs text-slate-300 mt-0.5">Elite State Residential Tests</div>
            </div>
            <div className="p-2">
              <div className="text-lg sm:text-xl font-black text-amber-400">AISSEE</div>
              <div className="text-xs text-slate-300 mt-0.5">All India Sainik Schools</div>
            </div>
            <div className="p-2">
              <div className="text-lg sm:text-xl font-black text-amber-400">SOF &amp; NMMS</div>
              <div className="text-xs text-slate-300 mt-0.5">National Science/Math &amp; Scholarships</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
        {/* Section 1: Jawahar Navodaya Vidyalaya */}
        <section className="border border-slate-200 rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-slate-50 to-white shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-indigo-900 text-amber-400 flex items-center justify-center font-black text-2xl shrink-0 shadow-md">
              JNV
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full">
                  Central Government Residential
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Target: Class 6 Entry (JNVST Selection Test)
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Jawahar Navodaya Vidyalaya (JNVST) Preparation
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Jawahar Navodaya Vidyalayas are fully residential, co-educational schools funded by the Ministry of Education, Government of India. 
                They offer free, top-tier CBSE education, boarding, uniforms, textbooks, and modern sports facilities, especially targeted at rural and semi-urban talent.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-indigo-900 uppercase">Mental Ability (MAT)</div>
                  <div className="text-xs text-slate-600 mt-1">50 Marks (40 MCQs) — Mirror images, pattern completion, odd-one-out, paper folding.</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-indigo-900 uppercase">Arithmetic Section</div>
                  <div className="text-xs text-slate-600 mt-1">25 Marks (20 MCQs) — Fractions, percentages, LCM/HCF, speed-distance-time shortcuts.</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-indigo-900 uppercase">Language Ability</div>
                  <div className="text-xs text-slate-600 mt-1">25 Marks (20 MCQs) — Reading comprehension, vocabulary, and grammar precision.</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1.5">
                <div className="font-bold">🌟 North Point Children Academy&apos;s Navodaya Strategy:</div>
                <p>
                  Special morning and evening drills, 100+ simulated OMR mock tests, previous 15 years solved paper discussions, and special focus on time management so students complete the 80 questions in under 120 minutes with zero silly errors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Netarhat Awasiya Vidyalaya */}
        <section className="border border-slate-200 rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-slate-50 to-white shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-amber-600 text-white flex items-center justify-center font-black text-2xl shrink-0 shadow-md">
              NAV
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-3 py-1 rounded-full">
                  Legacy Ashram Residential School
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Target: Class 6 Entry (Prelims + Mains Pattern)
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Netarhat Awasiya Vidyalaya Entrance
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Founded in 1954 for the children of undivided Bihar, Netarhat is arguably one of the most venerated residential institutions in Eastern India. Known for its ashram-style gurukul discipline, woodcraft, NCC, fine arts, and a record of producing hundreds of top civil servants, doctors, and engineers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-amber-700 uppercase">Stage 1: Preliminary Exam</div>
                  <div className="text-xs text-slate-600 mt-1">
                    Screening objective test testing mental ability, arithmetic speed, Hindi/English language proficiency, and general science awareness.
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-amber-700 uppercase">Stage 2: Mains Descriptive Exam</div>
                  <div className="text-xs text-slate-600 mt-1">
                    Rigorous written papers with step-by-step mathematical proofs, detailed essay writing, science reasoning, and mental intelligence.
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-950 space-y-1.5">
                <div className="font-bold">🌟 North Point&apos;s Training Edge:</div>
                <p>
                  Subjective answer writing mentorship, handwriting and presentation refinement, mathematical problem derivation, and comprehensive general awareness modules.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Simultala Awasiya Vidyalaya (Jamui, Bihar) */}
        <section className="border border-slate-200 rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-slate-50 to-white shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-emerald-700 text-white flex items-center justify-center font-black text-2xl shrink-0 shadow-md">
              SAV
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full">
                  Bihar State Pride
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Target: Class 6 Entry (~120 State Merit Seats)
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Simultala Awasiya Vidyalaya (SAV Jamui)
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Established by the Bihar State Government to emulate the golden standards of Netarhat, Simultala Awasiya Vidyalaya in Jamui is the undeniable crown jewel of the Bihar School Examination Board (BSEB). Its students monopolize the top 10 state ranks in the Class 10 matriculation examinations almost every single year.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-emerald-800 uppercase">Two-Stage Selection</div>
                  <div className="text-xs text-slate-600 mt-1">Prelims OMR test across all district headquarters followed by Mains written exam.</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-emerald-800 uppercase">Equal Gender Quota</div>
                  <div className="text-xs text-slate-600 mt-1">60 seats strictly for boys and 60 seats strictly for girls, encouraging female toppers.</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-emerald-800 uppercase">Comprehensive Subjects</div>
                  <div className="text-xs text-slate-600 mt-1">Mathematics, General Science, Social Studies, Hindi, English, and Mental Ability.</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1.5">
                <div className="font-bold">🌟 How We Prepare Students in Pupri:</div>
                <p>
                  Dual-curriculum alignment blending NCERT and Bihar SCERT textbooks, intensive descriptive question drills, and mock evaluation on the exact BSEB pattern.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Sainik School (AISSEE) */}
        <section className="border border-slate-200 rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-slate-50 to-white shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-red-700 text-white flex items-center justify-center font-black text-2xl shrink-0 shadow-md">
              SS
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider bg-red-100 text-red-900 px-3 py-1 rounded-full">
                  Ministry of Defence &amp; NTA
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Target: Class 6 &amp; Class 9 (All India Sainik School Entrance Examination)
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Sainik School (AISSEE) Preparation
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Sainik Schools prepare cadets academically, physically, and psychologically for entry into the National Defence Academy (NDA) and Indian Naval Academy (INA). The All India entrance exam (AISSEE) is conducted nationwide by the National Testing Agency (NTA).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs">
                  <div className="font-bold text-red-700">Mathematics</div>
                  <div className="text-slate-500 mt-1">150 Marks (Class 6) / 200 Marks (Class 9) — Core decisive paper.</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs">
                  <div className="font-bold text-red-700">Intelligence / Reasoning</div>
                  <div className="text-slate-500 mt-1">Analogies, pattern series, logical deduction, classification.</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs">
                  <div className="font-bold text-red-700">Language Test</div>
                  <div className="text-slate-500 mt-1">English / Hindi grammar, comprehension, sentence structure.</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs">
                  <div className="font-bold text-red-700">General Knowledge</div>
                  <div className="text-slate-500 mt-1">Scientific facts, Indian geography, history, defence awareness.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Olympiads & Scholarships */}
        <section className="border border-slate-200 rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-slate-50 to-white shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider bg-purple-100 text-purple-900 px-3 py-1 rounded-full">
                Olympiads &amp; Scholarship Programs
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                National &amp; International Competitions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                North Point Children Academy serves as an authorized school center for national olympiads across both branches, giving students early national ranking experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <div className="text-xl">🧪</div>
                <h3 className="text-sm font-bold text-slate-900">National Science Olympiad (NSO)</h3>
                <p className="text-xs text-slate-600">
                  Organized by Science Olympiad Foundation (SOF). Tests application-oriented knowledge in Physics, Chemistry, and Biology.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <div className="text-xl">📐</div>
                <h3 className="text-sm font-bold text-slate-900">International Math Olympiad (IMO)</h3>
                <p className="text-xs text-slate-600">
                  Sharpens numerical speed, pattern recognition, geometry theorems, and logical mathematical problem solving.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <div className="text-xl">💻</div>
                <h3 className="text-sm font-bold text-slate-900">National Cyber Olympiad (NCO)</h3>
                <p className="text-xs text-slate-600">
                  Covers fundamental computing, algorithmic logic, computer safety, and software awareness.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <div className="text-xl">📚</div>
                <h3 className="text-sm font-bold text-slate-900">International English Olympiad (IEO)</h3>
                <p className="text-xs text-slate-600">
                  Develops advanced vocabulary, reading comprehension, idioms, and functional English communication.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <div className="text-xl">🏅</div>
                <h3 className="text-sm font-bold text-slate-900">NMMS Scholarship (Class 8)</h3>
                <p className="text-xs text-slate-600">
                  National Means-cum-Merit Scholarship providing ₹12,000 per annum for 4 years (Class 9 to 12) under SCERT Bihar.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <div className="text-xl">🚀</div>
                <h3 className="text-sm font-bold text-slate-900">HBCSE Official Olympiad Pathway</h3>
                <p className="text-xs text-slate-600">
                  Gateway to representing India globally via IOQM (Math) and NSEJS (Junior Science Olympiad).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Action Callout */}
        <section className="p-8 rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Want your child to prepare for Navodaya or Olympiads?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Enroll in North Point Children Academy’s Integrated Competitive Wing today. Call 8294407171. Limited batch capacity.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider shrink-0 transition-colors shadow-md"
          >
            Enquire for Exam Batches
          </Link>
        </section>
      </div>
    </div>
  );
}
