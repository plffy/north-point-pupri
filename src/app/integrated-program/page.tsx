import React from "react";
import Link from "next/link";
import {
  AcademicCapIcon,
  CheckCircleIcon,
  TrophyIcon,
  PhoneIcon,
  WhatsAppIcon,
  LocationMarkerIcon,
  SparklesIcon,
  BookOpenIcon,
  BeakerIcon,
  ComputerDesktopIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
} from "@/components/Icons";

export const metadata = {
  title: "Integrated School Program (ISP) | North Point Children Academy",
  description:
    "Discover North Point Children Academy's Integrated School Program (ISP): CBSE schooling synchronized with competitive exam coaching for Navodaya (JNVST), Netarhat, Sainik School, Simultala, IIT-JEE, and NEET. Campuses at Rajbag (Pupri) & Bahera Zahidpur. Mob: 8294407171.",
};

export default function IntegratedProgramPage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#0c1a30] via-[#122649] to-[#1a3668] text-white py-16 px-4 sm:px-6 relative overflow-hidden border-t-4 border-amber-400">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Integrated School Program (ISP)</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-400/30">
            <SparklesIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>The North Point Signature Model</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Integrated School Program (ISP)
            <span className="block text-2xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400 mt-2">
              Schooling + National Entrance Coaching Under One Single Roof
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-3xl leading-relaxed">
            At <strong>North Point Children Academy</strong>, we have revolutionized education in Sitamarhi district. 
            Instead of forcing children to endure exhausting evening coaching after regular school hours, our **Integrated School Program** seamlessly combines CBSE curriculum with targeted preparation for <strong>Navodaya (JNVST), Netarhat, Sainik School, Simultala, IIT-JEE Mains, and NEET-UG</strong> within the school schedule.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href="/school/admissions"
              className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              Apply for Integrated Batch 2025–26
            </Link>
            <a
              href="https://wa.me/918294407171?text=Hello%20North%20Point%20Children%20Academy%2C%20I%20want%20to%20know%20more%20about%20the%20Integrated%20School%20Coaching%20Program."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Admission Counselor: 8294407171</span>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <LocationMarkerIcon className="w-3.5 h-3.5 text-amber-400" />
              <span><strong>Branch 1:</strong> Rajbag, Pupri</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <LocationMarkerIcon className="w-3.5 h-3.5 text-amber-400" />
              <span><strong>Branch 2:</strong> Bahera Zahidpur (Nanpur)</span>
            </span>
          </div>
        </div>
      </section>

      {/* The Big Difference: Traditional Schooling vs. North Point Integrated Model */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-900 bg-indigo-50 px-3 py-1 rounded-full">
            Why Integrated Schooling Wins
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Eliminating the Double Routine &amp; Student Burnout
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Comparing how a child spends their day in traditional setups versus North Point Children Academy&apos;s Integrated School Program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional Setup */}
          <div className="rounded-3xl bg-rose-50/40 p-8 border border-rose-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-100 px-3 py-1 rounded-full">
                Traditional Separate System
              </span>
              <span className="text-2xl">❌</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              The Exhausting &ldquo;School + Outside Tuition&rdquo; Trap
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                <span><strong>Dual Timetables:</strong> School runs till 2:00 PM, then child rushes to coaching institutes till 7:00 PM.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                <span><strong>Double Homework &amp; Clashing Syllabi:</strong> School teaches one chapter while outside tuition teaches another, confusing the child.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                <span><strong>Zero Free Time:</strong> Child is constantly exhausted with no time for sports, health, or family interactions.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                <span><strong>Heavy Travel &amp; Unsafe Commutes:</strong> Bicycling or auto rides to separate coaching centers across town.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                <span><strong>Double Fees:</strong> Parents pay full school fees PLUS high private tuition / coaching fees every month.</span>
              </li>
            </ul>
          </div>

          {/* North Point Integrated Model */}
          <div className="rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 p-8 text-white shadow-xl space-y-4 border border-amber-400/40 relative overflow-hidden">
            <div className="flex items-center justify-between relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30">
                North Point Integrated Model (ISP)
              </span>
              <span className="text-2xl">✅</span>
            </div>
            <h3 className="text-xl font-bold text-amber-300 relative z-10">
              Complete Schooling &amp; Entrance Readiness Under One Roof
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-200 relative z-10">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                <span><strong>Single Synchronized Timetable:</strong> School theory concepts in morning, followed directly by entrance problem-solving modules.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                <span><strong>Zero Dual Homework:</strong> One unified assignment sheet covering textbook NCERT exercises and entrance MCQ practice.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                <span><strong>Saves 4–5 Hours Every Day:</strong> Child finishes both school learning and competitive practice within campus hours.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                <span><strong>Doorstep School Bus Fleet:</strong> Safe bus transit covering 20+ villages across Pupri &amp; Nanpur directly to campus.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                <span><strong>Affordable All-Inclusive Fee:</strong> Everything included at a single transparent school fee, with up to 100% SCAT scholarships.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The 2 Core Wings of the Integrated Program */}
      <section className="py-14 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">
              Comprehensive Pathways
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
              Two Specialized Competitive Tracks Within School
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Whether your child is in primary school aiming for residential admissions or in secondary school aiming for engineering/medical careers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Track 1: Junior Residential Entrance Wing */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-900 bg-indigo-50 px-3 py-1 rounded-full">
                    Junior Wing (Classes 3 to 8)
                  </span>
                  <span className="text-2xl">🎖️</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Residential School Entrance Cell
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Tailored specifically for students aiming to qualify for premier government residential schools that offer completely free, world-class education from Class 6 onwards.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <h4 className="font-bold text-xs text-slate-900 flex items-center justify-between">
                      <span>Jawahar Navodaya Vidyalaya (JNVST Class 6 &amp; 9)</span>
                      <span className="text-[10px] bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded">Core</span>
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Mental Ability Test (MAT 50%), Arithmetic (25%), Language passages (25%), and bi-weekly OMR speed tests.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <h4 className="font-bold text-xs text-slate-900 flex items-center justify-between">
                      <span>Netarhat Vidyalaya &amp; Simultala Awasiya Vidyalaya (SAV)</span>
                      <span className="text-[10px] bg-indigo-100 text-indigo-900 font-bold px-2 py-0.5 rounded">Top Bihar Ranks</span>
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Subjective reasoning, Hindi grammar, general science, social studies, and mental alertness interviews.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <h4 className="font-bold text-xs text-slate-900 flex items-center justify-between">
                      <span>Sainik School (AISSEE) &amp; Rashtriya Military School (RMS)</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded">Defence Track</span>
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1">
                      High-speed mathematics, intelligence test, English comprehension, and preliminary physical fitness guidance.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <h4 className="font-bold text-xs text-slate-900 flex items-center justify-between">
                      <span>SOF National Science / Math Olympiads &amp; NMMS</span>
                      <span className="text-[10px] bg-purple-100 text-purple-900 font-bold px-2 py-0.5 rounded">Scholarships</span>
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Logical deduction and advanced analytical thinking competing with students nationwide.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-700">50+ Previous Selections</span>
                <Link
                  href="/school/competitive-exams"
                  className="text-xs font-bold text-indigo-900 hover:text-indigo-700 flex items-center gap-1"
                >
                  <span>Explore Entrance Curriculum</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Track 2: Senior Career Foundation Wing */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
                    Senior Wing (Classes 8 to 12)
                  </span>
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  IIT-JEE &amp; NEET-UG Career Foundation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Engineered to give students in Sitamarhi the exact pedagogical caliber of Kota and Patna without the trauma of displacement, emotional disconnect, or exorbitant costs.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <h4 className="font-bold text-xs text-slate-900 flex items-center justify-between">
                      <span>Pre-Foundation (Classes 8, 9 &amp; 10)</span>
                      <span className="text-[10px] bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded">Early Advantage</span>
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Mastering Class 11 &amp; 12 bridge fundamentals in Physics, Chemistry, and Mathematics while excelling in Board exams.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <h4 className="font-bold text-xs text-slate-900 flex items-center justify-between">
                      <span>IIT-JEE (Mains + Advanced) Classroom Program</span>
                      <span className="text-[10px] bg-indigo-100 text-indigo-900 font-bold px-2 py-0.5 rounded">Engineering</span>
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Mechanics, Electromagnetism, Calculus, Organic Chemistry with Daily Practice Problems (DPP) and CBT test analytics.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <h4 className="font-bold text-xs text-slate-900 flex items-center justify-between">
                      <span>NEET-UG Medical Entrance Program</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded">Medical</span>
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Line-by-line NCERT Biology mastery, numerical chemistry shortcuts, and high-yield Physics question banks.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <h4 className="font-bold text-xs text-slate-900 flex items-center justify-between">
                      <span>SCAT Scholarship Exam (Up to 100% Tuition Waiver)</span>
                      <span className="text-[10px] bg-purple-100 text-purple-900 font-bold px-2 py-0.5 rounded">Financial Aid</span>
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Merit-based fee concessions ensuring financial constraints never stop a hardworking student from Sitamarhi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-indigo-900">Dedicated Expert Mentors</span>
                <Link
                  href="/institute/courses"
                  className="text-xs font-bold text-amber-700 hover:text-amber-600 flex items-center gap-1"
                >
                  <span>Explore Courses &amp; Modules</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* A Typical Day in the Integrated School Schedule */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-900 bg-indigo-50 px-3 py-1 rounded-full">
            The Daily Blueprint
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            A Typical Day in the Integrated Program
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Structured balance between regular CBSE board requirements, healthy physical fitness, and intensive competitive problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative">
            <div className="text-xs font-extrabold text-amber-600 uppercase tracking-wider">08:00 AM – 08:30 AM</div>
            <h4 className="text-base font-bold text-slate-900 mt-1">Assembly &amp; Mental Alertness</h4>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Morning prayers, physical stretching/yoga, news analysis, and a daily 5-minute mathematical puzzle.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative">
            <div className="text-xs font-extrabold text-indigo-900 uppercase tracking-wider">08:30 AM – 01:30 PM</div>
            <h4 className="text-base font-bold text-slate-900 mt-1">Core CBSE Academic Curriculum</h4>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Standard NCERT theory, language communication, smart board demonstrations, and composite science laboratory experiments.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative">
            <div className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider">01:30 PM – 02:15 PM</div>
            <h4 className="text-base font-bold text-slate-900 mt-1">Lunch, Rest &amp; Sports</h4>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Hygienic meal break, recreational outdoor sports, and mental relaxation to recharge young minds.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative">
            <div className="text-xs font-extrabold text-purple-700 uppercase tracking-wider">02:15 PM – 04:30 PM</div>
            <h4 className="text-base font-bold text-slate-900 mt-1">Integrated Competitive Modules</h4>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Navodaya / Netarhat reasoning drills, JEE/NEET DPP solving, elimination tricks, and one-on-one doubt counters.
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center justify-between flex-wrap gap-2">
          <span>
            📌 <strong>Saturday OMR Series:</strong> Every alternate Saturday, students sit for full-length simulated OMR mock exams with automated rank analysis shared directly with parents.
          </span>
          <span className="font-bold text-amber-800">Helpline: 8294407171</span>
        </div>
      </section>

      {/* Campuses & Admissions Callout */}
      <section className="py-14 sm:py-20 bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider">
            Available at Both Campuses
          </span>
          <h2 className="text-2xl sm:text-4xl font-black">
            Enroll in North Point Children Academy&apos;s Integrated Program
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Give your child the unfair advantage of schooling and national entrance coaching synchronized under one roof. Visit our campuses at <strong>Rajbag (Pupri)</strong> or <strong>Bahera Zahidpur (Nanpur)</strong>.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/school/admissions"
              className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              School &amp; Integrated Admission Form
            </Link>
            <a
              href="tel:+918294407171"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all flex items-center gap-2"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call Helpline: 8294407171</span>
            </a>
            <Link
              href="/leadership"
              className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-semibold text-xs border border-white/10 transition-all"
            >
              Meet Our Leadership →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
