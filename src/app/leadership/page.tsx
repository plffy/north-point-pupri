import React from "react";
import Link from "next/link";
import {
  AcademicCapIcon,
  CheckCircleIcon,
  PhoneIcon,
  WhatsAppIcon,
  LocationMarkerIcon,
  UserGroupIcon,
  SparklesIcon,
  TrophyIcon,
  ShieldCheckIcon,
  BookOpenIcon,
} from "@/components/Icons";

export const metadata = {
  title: "Leadership & Founders | North Point Children Academy",
  description:
    "Meet the visionary leadership team at North Point Children Academy: Ashok Kumar Thakur (Founder & Chairman), Arvind Ujjwal (Managing Director), and Aparna Satyam (Principal). Operating campuses at Rajbag, Pupri and Bahera Zahidpur, Sitamarhi.",
};

export default function LeadershipPage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#0c1a30] via-[#122649] to-[#1a3668] text-white py-16 px-4 sm:px-6 relative overflow-hidden border-t-4 border-amber-400">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:underline">About Us</Link>
            <span>/</span>
            <span>Leadership &amp; Founders</span>
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-400/30">
            Institutional Leadership
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Our Visionary Founders &amp; Leadership
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-3xl leading-relaxed">
            The steering force behind <strong>North Point Children Academy</strong> across our dual campuses at <strong>Rajbag (Pupri)</strong> and <strong>Bahera Zahidpur (Nanpur)</strong>. Dedicated to transforming rural and semi-urban education in Sitamarhi district through values, modern pedagogy, and competitive success.
          </p>
        </div>
      </section>

      {/* Leadership Overview Banner */}
      <section className="py-5 bg-[#081220] text-slate-300 border-b border-amber-500/20 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <LocationMarkerIcon className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Serving Sitamarhi at: <strong>Rajbag, Pupri</strong> &amp; <strong>Bahera Zahidpur, Nanpur</strong></span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <PhoneIcon className="w-3.5 h-3.5" />
              <span>Executive Helpline: 8294407171</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Leadership Profiles */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
        
        {/* 1. Ashok Kumar Thakur - Founder & Chairman */}
        <div id="chairman" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-gradient-to-br from-slate-50 via-white to-amber-50/40 p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            {/* Executive Portrait Card */}
            <div className="relative group">
              <div className="w-60 h-72 sm:w-64 sm:h-80 rounded-2xl bg-gradient-to-b from-indigo-950 via-slate-900 to-indigo-900 p-1.5 shadow-2xl relative overflow-hidden border-2 border-amber-400/60">
                <div className="w-full h-full rounded-xl bg-gradient-to-t from-slate-950 via-indigo-950/90 to-slate-800 flex flex-col items-center justify-center p-4 relative">
                  <div className="w-24 h-24 rounded-full bg-amber-400/20 border-2 border-amber-300 flex items-center justify-center text-amber-300 shadow-inner mb-3">
                    <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <span className="text-white font-bold text-sm text-center">Ashok Kumar Thakur</span>
                  <span className="text-amber-300 text-xs font-semibold mt-0.5">Founder &amp; Chairman</span>
                  <span className="text-[10px] text-slate-300 mt-2 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">Official Portrait Updating Soon</span>
                  <div className="absolute bottom-2 left-2 right-2 text-center">
                    <span className="text-[10px] bg-amber-400 text-slate-950 font-extrabold px-2 py-0.5 rounded shadow">
                      शिक्षा सेवा सम्मान
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 font-black text-[11px] px-3.5 py-1 rounded-full shadow-md whitespace-nowrap uppercase tracking-wider">
                Founder&apos;s Voice
              </div>
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Ashok Kumar Thakur
              </h3>
              <p className="text-xs sm:text-sm font-bold text-indigo-900 mt-0.5">
                Founder &amp; Chairman, North Point Children Academy
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Patron &amp; Visionary of Education in Pupri &amp; Nanpur Regions
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold">
              <span>🌟 Chairman&apos;s Message</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              &ldquo;Education is the Greatest Equalizer for the Youth of Bihar.&rdquo;
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                When we laid the cornerstone of <strong>North Point Children Academy</strong>, our goal was clear and deeply personal: to ensure that no child in Pupri, Nanpur, or any surrounding village is held back simply because they were not born in a metropolitan city.
              </p>
              <p>
                The soil of Sitamarhi has always produced brilliant minds with unmatched dedication. However, for decades, parents were burdened with sending children away to boarding schools or distant coaching centers at heavy financial strain. By establishing two state-of-the-art branches at <strong>Rajbag (Pupri)</strong> and <strong>Bahera Zahidpur</strong>, we bring top-tier English medium schooling, disciplined values, and residential-entrance readiness directly to our community.
              </p>
              <p>
                We pledge to uphold the highest standards of integrity, moral discipline, and academic devotion, treating every student entrusted to us as our own future leader.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-center">
                <div className="text-xs font-bold text-slate-900">Guiding Pillar</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Moral Character &amp; Ethics</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-center">
                <div className="text-xs font-bold text-slate-900">Two Branches</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Pupri &amp; Bahera Zahidpur</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-center col-span-2 sm:col-span-1">
                <div className="text-xs font-bold text-slate-900">Commitment</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Affordable for Every Family</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Arvind Ujjwal - Managing Director & Head of Academics */}
        <div id="director" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-gradient-to-br from-indigo-50/50 via-white to-slate-50 p-8 sm:p-12 rounded-3xl border border-indigo-100 shadow-sm hover:shadow-md transition-all">
          <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-100 text-indigo-900 text-xs font-bold">
              <span>🎯 Managing Director&apos;s Desk</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              &ldquo;Modern Pedagogy Meets Competitive Rigor from Grade 1 to 12.&rdquo;
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                In the 21st century, rote memorization is obsolete. At North Point Children Academy, we have architected an education system that blends CBSE conceptual clarity with rigorous early competitive instincts.
              </p>
              <p>
                Under our integrated framework, our school curriculum directly feeds into national competitions like <strong>JNVST (Navodaya), Netarhat Residential School, Simultala Awasiya Vidyalaya, Sainik School (AISSEE)</strong>, and national Olympiads. For senior students, our dedicated <strong>Career Institute Wing</strong> provides classroom programs for <strong>IIT-JEE (Main + Advanced) and NEET-UG</strong> with daily practice problems (DPPs), OMR mock tests, and systematic doubt resolution.
              </p>
              <p>
                With continuous faculty upskilling, smart interactive digital boards, and scientific analytics tracking every student&apos;s weak areas, we empower our students to compete fearlessly with the best minds in India.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-center">
                <div className="text-xs font-bold text-indigo-900">Competitive Edge</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Navodaya, Netarhat &amp; JEE/NEET</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-center">
                <div className="text-xs font-bold text-indigo-900">Modern Tech</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Smart Boards &amp; Analytics</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-center col-span-2 sm:col-span-1">
                <div className="text-xs font-bold text-indigo-900">Mentorship</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Small Batch Norm (30–35)</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center text-center order-1 lg:order-2">
            {/* Executive Portrait Card */}
            <div className="relative group">
              <div className="w-60 h-72 sm:w-64 sm:h-80 rounded-2xl bg-gradient-to-b from-indigo-950 via-slate-900 to-indigo-900 p-1.5 shadow-2xl relative overflow-hidden border-2 border-indigo-400/60">
                <div className="w-full h-full rounded-xl bg-gradient-to-t from-slate-950 via-indigo-950/90 to-slate-800 flex flex-col items-center justify-center p-4 relative">
                  <div className="w-24 h-24 rounded-full bg-indigo-500/20 border-2 border-indigo-300 flex items-center justify-center text-indigo-200 shadow-inner mb-3">
                    <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <span className="text-white font-bold text-sm text-center">Arvind Ujjwal</span>
                  <span className="text-indigo-300 text-xs font-semibold mt-0.5">Managing Director</span>
                  <span className="text-[10px] text-slate-300 mt-2 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">Official Portrait Updating Soon</span>
                  <div className="absolute bottom-2.5 left-2 right-2 text-center">
                    <span className="text-[10px] bg-indigo-600 text-white font-extrabold px-2 py-0.5 rounded shadow">
                      Managing Director
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white font-black text-[11px] px-3.5 py-1 rounded-full shadow-md whitespace-nowrap uppercase tracking-wider">
                Director&apos;s Message
              </div>
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Arvind Ujjwal
              </h3>
              <p className="text-xs sm:text-sm font-bold text-indigo-900 mt-0.5">
                Managing Director &amp; Head of Academics
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Overseeing Curriculum, Technology &amp; Competitive Wings
              </p>
            </div>
          </div>
        </div>

        {/* 3. Aparna Satyam - Principal & Academic Coordinator */}
        <div id="principal" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-gradient-to-br from-emerald-50/40 via-white to-slate-50 p-8 sm:p-12 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-md transition-all">
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            {/* Dummy Photo / Executive Portrait Card */}
            <div className="relative group">
              <div className="w-56 h-64 sm:w-64 sm:h-72 rounded-2xl bg-gradient-to-b from-indigo-950 via-slate-900 to-emerald-950 p-1.5 shadow-2xl relative overflow-hidden border-2 border-emerald-400/40">
                <div className="w-full h-full rounded-xl bg-gradient-to-t from-slate-950 via-emerald-950/80 to-slate-800 flex flex-col items-center justify-center p-4 relative">
                  <div className="w-24 h-24 rounded-full bg-emerald-500/20 border-2 border-emerald-300 flex items-center justify-center text-emerald-200 shadow-inner mb-3">
                    <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <span className="text-white font-bold text-sm text-center">Aparna Satyam</span>
                  <span className="text-emerald-300 text-xs font-semibold mt-0.5">Principal</span>
                  <span className="text-[10px] text-slate-300 mt-1 bg-white/10 px-2 py-0.5 rounded">Student Welfare &amp; Academics</span>
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-black text-[11px] px-3.5 py-1 rounded-full shadow-md whitespace-nowrap uppercase tracking-wider">
                Principal&apos;s Desk
              </div>
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Aparna Satyam
              </h3>
              <p className="text-xs sm:text-sm font-bold text-emerald-800 mt-0.5">
                Principal, North Point Children Academy
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Student Welfare, Foundational Learning &amp; Campus Culture
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-900 text-xs font-bold">
              <span>📚 Principal&apos;s Address</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              &ldquo;Nurturing Curious Minds in a Safe, Joyful, and Disciplined Campus.&rdquo;
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                A school is not just a building of brick and mortar; it is a sanctum where young personalities take shape. As Principal of <strong>North Point Children Academy</strong>, my daily endeavor is to ensure every child feels seen, heard, and supported across both our Rajbag (Pupri) and Bahera Zahidpur campuses.
              </p>
              <p>
                We believe that emotional well-being and joyful curiosity are the prerequisites for academic success. Our foundational and primary wings emphasize phonics, bilingual fluency in English and Hindi, mental arithmetic, and experiential science experiments. Through our 4-house system, inter-house debates, sports leagues, and cultural festivals, our students learn camaraderie, leadership, and emotional resilience.
              </p>
              <p>
                We foster a warm partnership with parents through regular PTMs and personal counseling, ensuring that our children grow up to be knowledgeable, compassionate, and responsible citizens.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-center">
                <div className="text-xs font-bold text-emerald-900">Holistic Care</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Values, Arts &amp; Athletics</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-center">
                <div className="text-xs font-bold text-emerald-900">Parent Connect</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Regular PTMs &amp; Reports</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-center col-span-2 sm:col-span-1">
                <div className="text-xs font-bold text-emerald-900">Safe Campus</div>
                <div className="text-[11px] text-slate-500 mt-0.5">24x7 CCTV &amp; Caring Staff</div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Institutional Governance & Commitments */}
      <section className="py-14 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Governance &amp; Accountability
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold mt-1">
              Our 4 Pillars of Leadership Integrity
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Every decision taken by the management at North Point Children Academy is guided by these unwavering principles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-base font-bold text-white">Equal Opportunity</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ensuring that brilliant students from underprivileged backgrounds receive full SCAT scholarships and personal mentoring.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-400/20 text-indigo-400 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-base font-bold text-white">Transparent Assessment</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Bi-weekly OMR feedback, computerized report cards, and open parent-teacher interactions with complete transparency and constructive guidance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/20 text-emerald-400 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-base font-bold text-white">Uncompromised Safety</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Comprehensive security protocols, trained school bus attendants, RO purified drinking water, and high-standard hygienic campuses.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-400/20 text-rose-400 flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="text-base font-bold text-white">Continuous Innovation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Integrating digital interactive teaching tools, STEM experimental modules, and competitive mock test series updated every academic year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact with the Administrative Office */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 text-xs font-bold">
            <span>Direct Campus Communication</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Meet Our Leadership &amp; Visit Campuses
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Parents seeking personal admission counseling or interaction with the management desk are warmly invited to visit our campuses at <strong>Rajbag (Pupri)</strong> or <strong>Bahera Zahidpur (Nanpur)</strong>.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+918294407171"
              className="px-6 py-3 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors flex items-center gap-2"
            >
              <PhoneIcon className="w-4 h-4 text-amber-400" />
              <span>Call Executive Office: 8294407171</span>
            </a>
            <a
              href="https://wa.me/918294407171?text=Hello%2C%20I%20would%20like%20to%20schedule%20an%20appointment%20with%20the%20leadership%20team%20at%20North%20Point%20Children%20Academy."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Helpline: 8294407171</span>
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-300 shadow-sm transition-colors"
            >
              Campus Map &amp; Directions →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
