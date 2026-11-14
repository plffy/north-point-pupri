import React from "react";
import Link from "next/link";
import { TrophyIcon, SparklesIcon, ShieldCheckIcon, UserGroupIcon } from "@/components/Icons";

export const metadata = {
  title: "Beyond the Classroom | Sports, Arts & Activities | North Point Pupri",
  description:
    "Discover sports, physical fitness, NCC/Scouts, literary clubs, cultural fests, and house competitions at North Point Pupri.",
};

export default function BeyondClassroomPage() {
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
            <span>Beyond Classroom</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black">Beyond the Classroom</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            Character, courage, creativity, and camaraderie. At North Point, learning extends far beyond textbooks into the sports ground, arts studio, and community service.
          </p>
        </div>
      </section>

      {/* Main Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-16">
        {/* Sports & Athletics */}
        <section className="space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase text-indigo-900 tracking-wider">Physical Well-being</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Sports, Games &amp; Physical Fitness
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Building endurance, resilience, leadership, and fair play through daily supervised sports periods.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2 hover:bg-white hover:shadow-md transition-all">
              <div className="text-3xl">🏏</div>
              <div className="font-bold text-xs text-slate-900">Cricket</div>
              <div className="text-[11px] text-slate-500">Net practice &amp; inter-house matches</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2 hover:bg-white hover:shadow-md transition-all">
              <div className="text-3xl">⚽</div>
              <div className="font-bold text-xs text-slate-900">Football</div>
              <div className="text-[11px] text-slate-500">Field tactics &amp; stamina training</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2 hover:bg-white hover:shadow-md transition-all">
              <div className="text-3xl">🏸</div>
              <div className="font-bold text-xs text-slate-900">Badminton</div>
              <div className="text-[11px] text-slate-500">Outdoor &amp; indoor court games</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2 hover:bg-white hover:shadow-md transition-all">
              <div className="text-3xl">🧘</div>
              <div className="font-bold text-xs text-slate-900">Yoga &amp; Meditation</div>
              <div className="text-[11px] text-slate-500">Mindfulness &amp; posture balance</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2 hover:bg-white hover:shadow-md transition-all">
              <div className="text-3xl">🏃</div>
              <div className="font-bold text-xs text-slate-900">Athletics</div>
              <div className="text-[11px] text-slate-500">Sprints, relay, high jump &amp; endurance</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2 hover:bg-white hover:shadow-md transition-all">
              <div className="text-3xl">♟️</div>
              <div className="font-bold text-xs text-slate-900">Chess &amp; Mind Sports</div>
              <div className="text-[11px] text-slate-500">Strategy &amp; analytical concentration</div>
            </div>
          </div>
        </section>

        {/* Co-Curricular Clubs */}
        <section className="space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase text-indigo-900 tracking-wider">Creativity &amp; Curiosity</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Clubs &amp; Hobby Societies
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Providing platforms for students to explore their distinct passions and self-expression.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-slate-200 space-y-3">
              <div className="text-2xl">🤖</div>
              <h3 className="text-base font-bold text-slate-900">Science &amp; Robotics Club</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Building working science models, solar experiments, simple robotic mechanisms, and preparing for annual science exhibitions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-slate-200 space-y-3">
              <div className="text-2xl">🎭</div>
              <h3 className="text-base font-bold text-slate-900">Literary, Debate &amp; Quiz</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                English &amp; Hindi elocution, extempore speaking, mock parliamentary debates, and regional heritage quiz competitions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-slate-200 space-y-3">
              <div className="text-2xl">🎨</div>
              <h3 className="text-base font-bold text-slate-900">Fine Arts &amp; Cultural Club</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Madhubani art traditions, watercolor landscapes, clay modeling, patriotic songs, and Indian classical dance forms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-slate-200 space-y-3">
              <div className="text-2xl">🌱</div>
              <h3 className="text-base font-bold text-slate-900">Eco &amp; Community Club</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tree plantation drives around Pupri, cleanliness awareness (Swachh Bharat), plastic-free campus campaign, and energy conservation.
              </p>
            </div>
          </div>
        </section>

        {/* House System */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase text-amber-400 tracking-wider">School Tradition</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">
              The Four House System
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Every student belongs to one of four proud houses named after India&apos;s pioneering luminaries, participating in year-round inter-house sports, arts, and academic competitions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-red-950/60 border border-red-800/40 text-center space-y-1">
              <div className="text-xs font-extrabold uppercase text-red-400 tracking-wider">Red House</div>
              <div className="text-lg font-bold text-white">Ashoka House</div>
              <div className="text-xs text-red-200/80 italic">Courage &amp; Leadership</div>
            </div>
            <div className="p-4 rounded-2xl bg-blue-950/60 border border-blue-800/40 text-center space-y-1">
              <div className="text-xs font-extrabold uppercase text-blue-400 tracking-wider">Blue House</div>
              <div className="text-lg font-bold text-white">Aryabhata House</div>
              <div className="text-xs text-blue-200/80 italic">Wisdom &amp; Science</div>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-800/40 text-center space-y-1">
              <div className="text-xs font-extrabold uppercase text-emerald-400 tracking-wider">Green House</div>
              <div className="text-lg font-bold text-white">Chanakya House</div>
              <div className="text-xs text-emerald-200/80 italic">Discipline &amp; Strategy</div>
            </div>
            <div className="p-4 rounded-2xl bg-amber-950/60 border border-amber-800/40 text-center space-y-1">
              <div className="text-xs font-extrabold uppercase text-amber-400 tracking-wider">Yellow House</div>
              <div className="text-lg font-bold text-white">Kalpana House</div>
              <div className="text-xs text-amber-200/80 italic">Aspiration &amp; Wonder</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
