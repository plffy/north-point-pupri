import React from "react";
import Link from "next/link";
import { CheckCircleIcon, ArrowRightIcon, AcademicCapIcon, BeakerIcon } from "@/components/Icons";

export const metadata = {
  title: "Coaching Courses | IIT-JEE, NEET-UG & Pre-Foundation | North Point Children Academy Career Institute",
  description:
    "Explore engineering (IIT-JEE Main/Adv), medical (NEET-UG), and pre-foundation coaching programs at North Point Children Academy (Rajbag, Pupri & Bahera Zahidpur). Mob: 8294407171.",
};

export default function InstituteCoursesPage() {
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
            <span>Courses</span>
          </div>
          <span className="text-xs uppercase font-extrabold tracking-wider bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded shadow-sm inline-block mb-3">
            Target Engineering &amp; Medical Entrance Batches
          </span>
          <h1 className="text-3xl sm:text-5xl font-black">
            IIT-JEE, NEET &amp; Foundation Programs
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Delivering the rigor, syllabus mapping, and test systems of national coaching centers right here in Pupri, Sitamarhi district.
          </p>
        </div>
      </section>

      {/* Main Course Divisions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-16">
        {/* Track 1: IIT-JEE Engineering */}
        <section className="border border-slate-200 rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-indigo-50/40 via-white to-white shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-indigo-900 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md">
              JEE
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full">
                  Engineering Division
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Target: JEE (Main + Advanced) / BITSAT / State Engineering
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                IIT-JEE Classroom Programs
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Structured to develop high-speed numerical accuracy, conceptual depth in Calculus, Mechanics, Electromagnetism, Physical/Organic Chemistry, and advanced problem-solving techniques.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-indigo-900 uppercase">2-Year Target Batch</div>
                  <div className="text-xs text-slate-600 mt-1">
                    Integrated board + JEE Main &amp; Advanced curriculum with extensive module tests.
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-indigo-900 uppercase">1-Year Dropper / Target</div>
                  <div className="text-xs text-slate-600 mt-1">
                    High-intensity program for students re-attempting JEE with daily 6-hour lecture &amp; doubt drill.
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-indigo-900 uppercase">Rank Booster Test Series</div>
                  <div className="text-xs text-slate-600 mt-1">
                    Computer-Based Test (CBT) simulation mimicking the real NTA examination environment.
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-white text-xs font-bold shadow-sm transition-colors"
                >
                  Enquire for JEE Batches →
                </Link>
                <Link
                  href="/institute/results"
                  className="text-xs font-semibold text-indigo-900 hover:underline"
                >
                  View JEE Selections
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Track 2: NEET-UG Medical */}
        <section className="border border-slate-200 rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-emerald-50/40 via-white to-white shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-emerald-700 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md">
              NEET
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full">
                  Medical Division
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Target: NEET-UG (MBBS / BDS / AIIMS Seats)
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                NEET-UG Medical Entrance Programs
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Complete mastery over NCERT Biology (Botany &amp; Zoology), organic and inorganic chemistry, and medical-pattern physics problem solving. Weekly 720-marks full syllabus mock tests on physical OMR sheets.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-emerald-800 uppercase">2-Year Medical Classroom</div>
                  <div className="text-xs text-slate-600 mt-1">
                    Line-by-line NCERT decoding, diagram mastery, assertion-reason practice, and error analysis.
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-emerald-800 uppercase">1-Year Intensive Dropper</div>
                  <div className="text-xs text-slate-600 mt-1">
                    Targeted revision covering 98 chapters of PCB with negative-marking control strategies.
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-emerald-800 uppercase">Biology Master Series</div>
                  <div className="text-xs text-slate-600 mt-1">
                    Specialized 360/360 target modules for scoring maximum marks in Biology section.
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold shadow-sm transition-colors"
                >
                  Enquire for NEET Batches →
                </Link>
                <Link
                  href="/institute/results"
                  className="text-xs font-semibold text-emerald-700 hover:underline"
                >
                  View Medical Qualifiers
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Track 3: Pre-Foundation & Foundation */}
        <section className="border border-slate-200 rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-amber-50/40 via-white to-white shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-amber-600 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md">
              FND
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-3 py-1 rounded-full">
                  Early Aptitude Wing
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Target: Olympiads, NTSE, NMMS &amp; Future IIT/NEET Readiness
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Pre-Foundation &amp; Olympiad Courses
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Top rankers in IIT-JEE and NEET almost always start building their analytical reflexes early. 
                Our Pre-Foundation courses bridge the gap between simple school textbooks and higher-order thinking skills (HOTS).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-amber-800 uppercase">Science &amp; Math Depth</div>
                  <div className="text-xs text-slate-600 mt-1">
                    Understanding fundamental laws of physics, chemical reactions, algebra, and geometry at a deeper level.
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-amber-800 uppercase">Mental Ability &amp; Logic</div>
                  <div className="text-xs text-slate-600 mt-1">
                    Coding-decoding, number puzzles, analogies, syllogisms, and spatial reasoning drills.
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-amber-800 uppercase">Board Excellence</div>
                  <div className="text-xs text-slate-600 mt-1">
                    Ensuring students consistently score 90%+ in school and board examinations simultaneously.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold shadow-sm transition-colors"
                >
                  Enquire for Foundation Courses →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SCAT Scholarship Test Box */}
        <section className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-extrabold uppercase text-amber-400 tracking-wider">
              North Point Talent Reward
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold">
              SCAT: Scholarship-Cum-Admission Test
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We believe financial constraints should never stand between a meritorious student and their dream of becoming an IITian or Doctor. 
              Appear for our periodic SCAT examination in Pupri and win up to <strong>100% scholarship</strong> on tuition fees.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase shadow transition-colors"
              >
                Register for Upcoming SCAT Test
              </Link>
              <Link
                href="/institute/results"
                className="px-5 py-2.5 rounded-xl border border-white/20 hover:bg-white/10 text-white font-semibold text-xs transition-colors"
              >
                View Past Scholarship Winners →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
