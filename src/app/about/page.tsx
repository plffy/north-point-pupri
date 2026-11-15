import React from "react";
import Link from "next/link";
import { CheckCircleIcon, ArrowRightIcon, AcademicCapIcon, TrophyIcon, ShieldCheckIcon, UserGroupIcon, LocationMarkerIcon } from "@/components/Icons";

export const metadata = {
  title: "About Us | North Point Children Academy (Rajbag, Pupri & Bahera Zahidpur)",
  description:
    "Learn about North Point Children Academy's two branches at Rajbag (Pupri) and Bahera Zahidpur (Nanpur), Sitamarhi, Bihar. Dedicated schooling and competitive entrance coaching. Mob: 8294407171.",
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
          <h1 className="text-3xl sm:text-5xl font-black">About North Point Children Academy</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            Pioneering academic excellence, competitive exam orientation, and holistic character development across our campuses in <strong>Rajbag (Pupri)</strong> and <strong>Bahera Zahidpur (Nanpur)</strong>, Sitamarhi (Bihar).
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
              Bridging the Educational Gap in Sitamarhi District
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Founded with the conviction that geography should never limit a child&apos;s ambition, <strong>North Point Children Academy</strong> was established to provide rural and semi-urban families access to high-caliber schooling and early competitive exam mentorship.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              With two prominent campuses—at <strong>Rajbag (Pupri)</strong> and <strong>Bahera Zahidpur (Nanpur)</strong>—we ensure students from across Sitamarhi district do not have to move away at a tender age to Patna or Kota for cracking entrance tests like <strong>Navodaya (JNVST), Netarhat, Simultala</strong>, or foundation for <strong>IIT-JEE &amp; NEET</strong>.
            </p>
            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xl font-bold text-indigo-900">2 Campuses</div>
                <div className="text-xs text-slate-500 mt-1">Rajbag (Pupri) &amp; Bahera Zahidpur</div>
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
                  <h4 className="text-sm font-bold text-white">Dedicated Excellence</h4>
                  <p className="text-xs text-slate-300 mt-0.5">National-standard facilities and modern learning infrastructure designed for our students.</p>
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

      {/* Official Trust & Institutional Recognition Section with Real Campus Photo */}
      <section className="py-12 bg-slate-900 text-white border-y border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Real Campus Photos Grid */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-xl relative group bg-slate-950">
                  <div className="h-52 sm:h-60 overflow-hidden">
                    <img
                      src="/images/campus/school-building-facade.jpg"
                      alt="Multi-Story Campus Building at Pupri"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-3">
                    <span className="text-[10px] font-bold text-amber-300 block">
                      Multi-Story Building Facade
                    </span>
                    <span className="text-[10px] text-slate-300">Rajbag Campus, Pupri</span>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border-2 border-emerald-400/40 shadow-xl relative group bg-slate-950">
                  <div className="h-52 sm:h-60 overflow-hidden">
                    <img
                      src="/images/campus/school-entrance-signboard.jpg"
                      alt="North Point Children Academy Entrance Signboard and Faculty at Rajbag, Pupri"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-3">
                    <span className="text-[10px] font-bold text-emerald-300 block">
                      Official Trust Signboard
                    </span>
                    <span className="text-[10px] text-slate-300">Reg: 206107720211126112700</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Details & Institutional Credentials */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                  Government Recognition &amp; Statutory Affiliation
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  Recognized by Government of Bihar
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Run by S.K. Thakur Memorial Educational Trust, North Point Children Academy operates with official recognition from the Department of Education, Government of Bihar, strictly adhering to RTE guidelines, CBSE curricular benchmarks, and child welfare standards.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                    UDISE+ National School Code
                  </span>
                  <span className="text-base font-extrabold text-amber-300 font-mono tracking-wider mt-0.5 block">
                    10041501717
                  </span>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    Ministry of Education, Govt. of India / Govt. of Bihar
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                    Affiliation &amp; Recognition
                  </span>
                  <span className="text-sm font-extrabold text-white mt-0.5 block">
                    Govt. of Bihar (Education Dept.)
                  </span>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    Pvt. Unaided Recognized • Est. 2007 (Rec. 2015)
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 block">
                    Registered Educational Trust
                  </span>
                  <span className="text-sm font-extrabold text-white mt-0.5 block">
                    S.K. Thakur Memorial Trust
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono mt-1 block">
                    Reg. No: 206107720211126112700
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 block">
                    Curricular Standards &amp; RTE
                  </span>
                  <span className="text-sm font-extrabold text-white mt-0.5 block">
                    CBSE Pattern • RTE Sec 12 Compliant
                  </span>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    Pre-Primary to 8th / 10th with Integrated ISP
                  </span>
                </div>
              </div>

              <div className="pt-1 flex flex-wrap items-center gap-3">
                <Link
                  href="/leadership"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow transition-colors"
                >
                  <span>Meet Trust Leadership</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/20 text-slate-200 hover:bg-white/10 font-semibold text-xs transition-colors"
                >
                  <span>Locate Campus on Map</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Campuses Showcase */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase text-indigo-900 tracking-wider">Our Campuses</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Two Convenient Locations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-indigo-900 text-white flex items-center justify-center font-bold text-xs">
                  01
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">Pupri Sub-Division</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Rajbag Campus, Pupri</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Located conveniently at Rajbag, Pupri, serving students from Pupri town, Janakpur Road, and surrounding blocks. Features modern classrooms, science lab, and dedicated competitive coaching wing.
              </p>
              <div className="text-xs font-semibold text-emerald-700">Mob: 8294407171</div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-xs">
                  02
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Nanpur Block</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Bahera Zahidpur Campus</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Located at Bahera Zahidpur, Nanpur, bringing world-class schooling and Navodaya/Olympiad coaching closer to rural students in Nanpur, Bajpatti, and adjoining villages.
              </p>
              <div className="text-xs font-semibold text-emerald-700">Mob: 8294407171</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Management Preview */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-indigo-900/40 shadow-xl">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30">
                School Leadership &amp; Governance
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Meet the Visionaries Leading North Point Children Academy
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Guided by <strong>Ashok Kumar Thakur</strong> (Founder &amp; Chairman), <strong>Arvind Ujjwal</strong> (Managing Director), and <strong>Aparna Satyam</strong> (Principal). Together they steer our academic standards, student welfare, and competitive coaching excellence across Pupri and Bahera Zahidpur.
              </p>
              <div className="pt-2">
                <Link
                  href="/leadership"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  <span>Read Leadership Messages &amp; Vision</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-indigo-950 text-white text-center px-4">
        <h3 className="text-2xl font-bold">Visit North Point Children Academy Today</h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto">
          We invite parents and guardians to tour our smart classrooms, science labs, and meet our teachers. Call <strong>8294407171</strong>.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs uppercase shadow hover:bg-amber-300 transition-colors"
          >
            Contact &amp; Location Map
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
