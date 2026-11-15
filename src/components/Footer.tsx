"use client";

import React from "react";
import Link from "next/link";
import { PhoneIcon, MailIcon, LocationMarkerIcon, WhatsAppIcon, AcademicCapIcon } from "./Icons";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Banner / Trust Badges */}
      <div className="bg-indigo-950/80 border-b border-indigo-900/40 py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-center">
          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="text-xl md:text-2xl font-black text-amber-400">
              {language === "hi" ? "दो आधुनिक परिसर" : "Two Campuses"}
            </div>
            <div className="text-xs text-slate-300 mt-1">
              {language === "hi" ? "राजबाग (पुपरी) एवं बहेरा जाहिदपुर" : "Rajbag (Pupri) & Bahera Zahidpur"}
            </div>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="text-xl md:text-2xl font-black text-emerald-400">
              {language === "hi" ? "नवोदय व नेतरहाट" : "JNVST & SAV"}
            </div>
            <div className="text-xs text-slate-300 mt-1">
              {language === "hi" ? "आवासीय विद्यालय प्रवेश परीक्षा केंद्र" : "Proven Residential Exam Hub"}
            </div>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="text-xl md:text-2xl font-black text-sky-400">
              {language === "hi" ? "IIT-JEE व NEET" : "IIT-JEE & NEET"}
            </div>
            <div className="text-xs text-slate-300 mt-1">
              {language === "hi" ? "व्यवस्थित करियर फाउंडेशन बैच" : "Structured Career Foundation"}
            </div>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="text-xl md:text-2xl font-black text-purple-400">
              {language === "hi" ? "पुपरी व नानपुर बस" : "Pupri & Nanpur Bus"}
            </div>
            <div className="text-xs text-slate-300 mt-1">
              {language === "hi" ? "20+ गांवों में सुरक्षित वाहन सेवा" : "Safe Transport Across 20+ Villages"}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: About */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-indigo-900 text-amber-400 flex items-center justify-center border border-amber-400/40 shrink-0">
                <AcademicCapIcon className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <span className="text-lg font-extrabold text-white tracking-tight block">
                  {language === "hi" ? "नॉर्थ प्वाइंट चिल्ड्रेन एकेडमी" : "North Point Children Academy"}
                </span>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                  {language === "hi"
                    ? "इंग्लिश मीडियम स्कूल एवं समेकित प्रतियोगी कोचिंग"
                    : "English Medium School with Integrated Coaching"}
                </span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-sm">
              {t("footerAboutDesc")}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1 text-[11px]">
              <span className="px-2.5 py-0.5 rounded-md bg-amber-400/10 border border-amber-400/20 text-amber-300 font-semibold">
                {language === "hi" ? "मान्यता: बिहार सरकार" : "Govt. of Bihar Recognized"}
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300 font-mono">
                UDISE: 10041501717
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300">
                {language === "hi" ? "सीबीएसई पैटर्न" : "CBSE Pattern"}
              </span>
            </div>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/918294407171"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp: 8294407171</span>
              </a>
              <a
                href="tel:+918294407171"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
              >
                <PhoneIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>{t("callNow")}</span>
              </a>
            </div>
          </div>

          {/* Column 2: School Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              {language === "hi" ? "विद्यालय शैक्षणिक व्यवस्था" : "School Academics"}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/school/academics" className="hover:text-amber-300 transition-colors">
                  {t("navCbseCurriculum")}
                </Link>
              </li>
              <li>
                <Link href="/school/beyond-classroom" className="hover:text-amber-300 transition-colors">
                  {t("navBeyondClassroom")}
                </Link>
              </li>
              <li>
                <Link href="/school/results" className="hover:text-amber-300 transition-colors">
                  {t("navBoardResults")}
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="hover:text-amber-300 transition-colors">
                  {t("navLeadership")}
                </Link>
              </li>
              <li>
                <Link href="/school/admissions" className="hover:text-amber-300 transition-colors">
                  {t("navAdmissionProcess")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Integrated Coaching (ISP) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <span>🎯 {t("navCoaching")} (ISP)</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/integrated-program" className="hover:text-amber-300 transition-colors font-semibold text-amber-300">
                  {t("navIspOverview")}
                </Link>
              </li>
              <li>
                <Link href="/school/competitive-exams" className="hover:text-amber-300 transition-colors">
                  {t("navJnvstNetarhat")}
                </Link>
              </li>
              <li>
                <Link href="/school/competitive-exams" className="hover:text-amber-300 transition-colors">
                  {language === "hi" ? "सैनिक स्कूल एवं सिमुलतला तैयारी" : "Sainik School & Simultala"}
                </Link>
              </li>
              <li>
                <Link href="/institute/courses" className="hover:text-amber-300 transition-colors">
                  {t("navJeeNeet")}
                </Link>
              </li>
              <li>
                <Link href="/institute/faculty" className="hover:text-amber-300 transition-colors">
                  {t("navMentors")}
                </Link>
              </li>
              <li>
                <Link href="/institute/admissions" className="hover:text-amber-300 transition-colors">
                  {t("navScat")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Campus Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              {language === "hi" ? "दोनों परिसर शाखाएं" : "Both Campus Branches"}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <LocationMarkerIcon className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200">
                    {language === "hi" ? "शाखा 1:" : "Branch 1:"}
                  </strong>{" "}
                  {language === "hi" ? "राजबाग, पुपरी, सीतामढ़ी, बिहार" : "Rajbag, Pupri, Sitamarhi, Bihar"}
                </div>
              </div>
              <div className="flex items-start gap-2">
                <LocationMarkerIcon className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200">
                    {language === "hi" ? "शाखा 2:" : "Branch 2:"}
                  </strong>{" "}
                  {language === "hi" ? "बहेरा जाहिदपुर (नानपुर), सीतामढ़ी, बिहार" : "Bahera Zahidpur (Nanpur), Sitamarhi, Bihar"}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-200 font-semibold">Mob: 8294407171</span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="w-4 h-4 text-sky-400 shrink-0" />
                <span>admission@northpointpupri.edu.in</span>
              </div>
              <div className="pt-2 text-[11px] text-slate-500">
                {language === "hi"
                  ? "मिलने का समय: सोम – शनि (प्रातः 8:00 – अपराह्न 4:30)"
                  : "Visiting Hours: Mon – Sat (8:00 AM – 4:30 PM)"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-slate-900 bg-black/60 py-4 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            {t("footerCopyright")}
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/about" className="hover:text-slate-300">
              {t("navVisionCampuses")}
            </Link>
            <span>•</span>
            <Link href="/leadership" className="hover:text-amber-300 font-semibold">
              {t("navLeadership")}
            </Link>
            <span>•</span>
            <Link href="/school/admissions" className="hover:text-slate-300">
              {t("navAdmissionProcess")}
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-300">
              {t("navContact")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
