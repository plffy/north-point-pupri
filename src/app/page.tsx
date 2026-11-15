"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AcademicCapIcon,
  TrophyIcon,
  SparklesIcon,
  CheckCircleIcon,
  PhoneIcon,
  WhatsAppIcon,
  ArrowRightIcon,
  BusIcon,
  ComputerDesktopIcon,
  BeakerIcon,
  BookOpenIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  LocationMarkerIcon,
} from "@/components/Icons";
import EnquiryModal from "@/components/EnquiryModal";
import BrochureModal from "@/components/BrochureModal";
import { useLanguage } from "@/context/LanguageContext";

interface HomePhotoItem {
  id: string;
  category: "campus" | "events" | "students";
  badgeEn: string;
  badgeHi: string;
  badgeColor: string;
  topRightTag: string;
  image: string;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  tagEn: string;
  tagHi: string;
  alt: string;
}

const HOME_PHOTO_ITEMS: HomePhotoItem[] = [
  {
    id: "building",
    category: "campus",
    badgeEn: "Pupri Campus",
    badgeHi: "पुपरी मुख्य परिसर",
    badgeColor: "bg-amber-400 text-slate-950",
    topRightTag: "नॉर्थ प्वाइंट चिल्ड्रेन एकेडमी",
    image: "/images/campus/school-building-facade.jpg",
    titleEn: "Multi-Story School Campus & Building Facade",
    titleHi: "तीन मंजिला भव्य विद्यालय परिसर एवं मुख्य द्वार",
    descEn: "Main school campus at Rajbag, Pupri featuring arched architectural classrooms, welcoming gates, and rooftop institutional Hindi signboard.",
    descHi: "राजबाग, पुपरी स्थित मुख्य विद्यालय परिसर जिसमें आधुनिक वास्तुकला, हवादार कक्षाएं और शीर्ष पर संस्थागत बोर्ड सुशोभित है।",
    tagEn: "Campus Infrastructure",
    tagHi: "परिसर अवसंरचना",
    alt: "North Point Children Academy School Building Facade at Pupri",
  },
  {
    id: "entrance",
    category: "campus",
    badgeEn: "Official Trust",
    badgeHi: "शासकीय मान्यता प्राप्त",
    badgeColor: "bg-emerald-500 text-white",
    topRightTag: "Reg: 206107720211126112700",
    image: "/images/campus/school-entrance-signboard.jpg",
    titleEn: "Official Entrance & Trust Accreditation",
    titleHi: "मुख्य प्रवेश द्वार एवं एस.के. ठाकुर मेमोरियल ट्रस्ट बोर्ड",
    descEn: "Run by S.K. Thakur Memorial Educational Trust, affiliated to Govt., CBSE pattern, highlighting our leadership team and student Eco Club.",
    descHi: "एस.के. ठाकुर मेमोरियल एजुकेशनल ट्रस्ट द्वारा संचालित, शासकीय मान्यता प्राप्त, सीबीएसई पैटर्न एवं पर्यावरण क्लब से युक्त।",
    tagEn: "Government Affiliated",
    tagHi: "ट्रस्ट एवं मान्यता",
    alt: "North Point Children Academy Official Campus Entrance & Signboard",
  },
  {
    id: "trophy",
    category: "events",
    badgeEn: "Annual Honors",
    badgeHi: "वार्षिक सम्मान समारोह",
    badgeColor: "bg-rose-500 text-white",
    topRightTag: "Independence Day",
    image: "/images/campus/independence-day-prize-distribution.jpg",
    titleEn: "Flag Hoisting & Star Trophy Felicitation",
    titleHi: "ध्वजारोहण एवं स्टार ट्रॉफी पुरस्कार वितरण समारोह",
    descEn: "Celebrating patriotic festivals and student distinctions with ceremonial prize distribution and star trophies on campus.",
    descHi: "राष्ट्रीय पर्वों पर मेधावी विद्यार्थियों को मंच पर स्टार ट्रॉफी एवं प्रमाणपत्र देकर सम्मानित करने की गौरवमयी परंपरा।",
    tagEn: "Student Distinction",
    tagHi: "विद्यार्थी सम्मान",
    alt: "Independence Day Flag Hoisting and Prize Distribution at North Point Children Academy",
  },
  {
    id: "safety",
    category: "events",
    badgeEn: "Child Welfare",
    badgeHi: "बाल सुरक्षा जागरूकता",
    badgeColor: "bg-emerald-500 text-white",
    topRightTag: "सुरक्षित बचपन अभियान",
    image: "/images/campus/child-safety-campaign.jpg",
    titleEn: "Student Awareness & Child Protection Drive",
    titleHi: "सुरक्षित बचपन अभियान एवं बाल संरक्षण कार्यशाला",
    descEn: "Instilling social responsibility, safety awareness, and child rights under institutional welfare initiatives.",
    descHi: "विद्यार्थियों में सामाजिक चेतना, आत्मरक्षा एवं बाल अधिकारों के प्रति संवेदनशीलता जगाने हेतु नियमित कार्यशालाएं।",
    tagEn: "Community Awareness",
    tagHi: "सामाजिक जागरूकता",
    alt: "Child Protection Campaign at North Point Children Academy",
  },
  {
    id: "rangoli",
    category: "students",
    badgeEn: "Creative Arts",
    badgeHi: "सृजनात्मक कला",
    badgeColor: "bg-indigo-900 text-amber-300",
    topRightTag: "दीपावली व उत्सव",
    image: "/images/campus/students-art-rangoli.jpg",
    titleEn: "Student Cultural Art & Festive Rangoli Competition",
    titleHi: "विद्यार्थी सांस्कृतिक कला एवं रंगोली प्रतियोगिता",
    descEn: "Fostering Indian cultural traditions, collaborative teamwork, and aesthetic expression through campus art and festive events.",
    descHi: "भारतीय सांस्कृतिक मूल्यों, सहयोगात्मक टीम भावना और कलात्मक अभिव्यक्ति को प्रोत्साहित करती विद्यालय स्तरीय रंगोली प्रतियोगिता।",
    tagEn: "Cultural & Arts",
    tagHi: "सांस्कृतिक कला",
    alt: "Students Rangoli and Cultural Competition at North Point Children Academy",
  },
];

export default function Home() {
  const { t, dict, language } = useLanguage();
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [defaultWing, setDefaultWing] = useState<"school" | "institute">("school");
  const [activeTab, setActiveTab] = useState<"all" | "school" | "institute">("all");
  const [galleryFilter, setGalleryFilter] = useState<"all" | "campus" | "events" | "students">("all");
  const [lightboxItem, setLightboxItem] = useState<HomePhotoItem | null>(null);

  const openEnquiryModal = (wing: "school" | "institute" = "school") => {
    setDefaultWing(wing);
    setEnquiryOpen(true);
  };

  const filteredPhotos =
    galleryFilter === "all"
      ? HOME_PHOTO_ITEMS
      : HOME_PHOTO_ITEMS.filter((item) => item.category === galleryFilter);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Heritage Oxford Navy & Regal Gold */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0c1a30] via-[#122649] to-[#1a3668] text-white py-14 sm:py-20 lg:py-24 border-t-4 border-amber-400 border-b border-indigo-900/40">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Pill Tag with Both Branches */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-amber-400/30 text-xs font-semibold text-amber-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <span>{dict.heroPill}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight">
              {dict.heroSchoolName}
              <span className="block text-2xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300 mt-2">
                {dict.heroHeadline}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
              {dict.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="tel:+918294407171"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg hover:shadow-emerald-600/30 transition-all border border-emerald-400/30 transform hover:-translate-y-0.5 inline-flex items-center gap-2"
                title="Call Helpline: 8294407171"
              >
                <PhoneIcon className="w-4 h-4 text-white" />
                <span>{dict.heroCtaCall}</span>
              </a>
              <button
                onClick={() => openEnquiryModal("school")}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-lg hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
              >
                {dict.heroCtaAdmission}
              </button>
              <Link
                href="/integrated-program"
                className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg hover:shadow-indigo-600/30 transition-all border border-indigo-400/30 transform hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <span>{dict.heroCtaIsp}</span>
                <span className="text-xs">→</span>
              </Link>
              <button
                onClick={() => setBrochureOpen(true)}
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all flex items-center gap-2"
              >
                <span>{dict.heroCtaProspectus}</span>
                <span className="text-xs">↓</span>
              </button>
            </div>

            {/* Two Branch Notice Pill */}
            <div className="pt-4 flex flex-wrap justify-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-slate-200 border border-white/10">
                <LocationMarkerIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>{dict.branch1Pill}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-slate-200 border border-white/10">
                <LocationMarkerIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>{dict.branch2Pill}</span>
              </span>
              <a
                href="tel:+918294407171"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold"
              >
                <PhoneIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>8294407171</span>
              </a>
            </div>

            {/* Quick Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-left max-w-3xl mx-auto">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300">
                <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{dict.badgeCbse}</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300">
                <CheckCircleIcon className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{dict.badgeJnvst}</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300">
                <CheckCircleIcon className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{dict.badgeJeeNeet}</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300">
                <CheckCircleIcon className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{dict.badgeTransport}</span>
              </div>
            </div>

            {/* Hero Visual Preview */}
            <div className="pt-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-2xl group bg-slate-950">
                  <div className="h-52 sm:h-60 overflow-hidden">
                    <img
                      src="/images/campus/school-building-facade.jpg"
                      alt="North Point Children Academy School Building Facade at Pupri"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[10px] bg-amber-400 text-slate-950 font-black px-2 py-0.5 rounded uppercase tracking-wider">
                      {language === "hi" ? "परिसर अवसंरचना" : "Campus Infrastructure"}
                    </span>
                    <h3 className="text-sm font-bold text-white mt-1">
                      {language === "hi" ? "तीन मंजिला मुख्य परिसर, राजबाग (पुपरी)" : "Multi-Story School Campus, Rajbag (Pupri)"}
                    </h3>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden border-2 border-indigo-400/50 shadow-2xl group bg-slate-950">
                  <div className="h-52 sm:h-60 overflow-hidden">
                    <img
                      src="/images/campus/school-entrance-signboard.jpg"
                      alt="Official Campus Entrance & Trust Signboard"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[10px] bg-emerald-500 text-white font-black px-2 py-0.5 rounded uppercase tracking-wider">
                      {language === "hi" ? "ट्रस्ट एवं शासकीय मान्यता" : "Trust & Affiliation"}
                    </span>
                    <h3 className="text-sm font-bold text-white mt-1">
                      S.K. Thakur Memorial Educational Trust
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Ribbon */}
      <section className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 py-6 shadow-md relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-900/10">
            <div className="py-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black">2 {language === "hi" ? "परिसर" : "Campuses"}</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mt-1">
                {language === "hi" ? "राजबाग (पुपरी) एवं बहेरा जाहिदपुर" : "Rajbag (Pupri) & Bahera Zahidpur"}
              </div>
            </div>
            <div className="py-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black">50+ {language === "hi" ? "सफल छात्र" : "Selections"}</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mt-1">
                {language === "hi" ? "नवोदय, नेतरहाट एवं सिमुलतला" : "Navodaya, Netarhat & Simultala"}
              </div>
            </div>
            <div className="py-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black">100% {language === "hi" ? "छात्रवृत्ति" : "Scholarship"}</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mt-1">
                {language === "hi" ? "स्कैट (SCAT) परीक्षा के अंतर्गत" : "Available Under SCAT Test"}
              </div>
            </div>
            <div className="py-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black">20+ {language === "hi" ? "गांव" : "Villages"}</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mt-1">
                {language === "hi" ? "पुपरी व नानपुर बस रूट नेटवर्क" : "Bus Routes Across Pupri & Nanpur"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Integrated School Model Showcase */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
              <SparklesIcon className="w-3.5 h-3.5 text-amber-600" />
              <span>{dict.ispBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              {dict.ispTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              {dict.ispSubtitle}
            </p>

            {/* Filter Tabs */}
            <div className="mt-6 inline-flex p-1 bg-white rounded-xl shadow-sm border border-slate-200">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === "all"
                    ? "bg-indigo-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {language === "hi" ? "संपूर्ण अवलोकन" : "Complete Overview"}
              </button>
              <button
                onClick={() => setActiveTab("school")}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === "school"
                    ? "bg-indigo-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                🏫 {language === "hi" ? "स्कूली शिक्षा" : "Core Schooling"}
              </button>
              <button
                onClick={() => setActiveTab("institute")}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === "institute"
                    ? "bg-amber-500 text-slate-950 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                🎯 {dict.integratedCoaching}
              </button>
            </div>
          </div>

          {/* Cards Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Core Schooling Card */}
            <div
              className={`bg-white rounded-2xl p-6 sm:p-8 shadow-sm transition-all border flex flex-col justify-between group ${
                activeTab === "school"
                  ? "ring-2 ring-indigo-900 shadow-xl border-indigo-900 scale-[1.01]"
                  : activeTab === "institute"
                  ? "opacity-50 hover:opacity-100 border-slate-200"
                  : "hover:shadow-xl border-slate-200"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-900 bg-indigo-50 px-3 py-1 rounded-full">
                    {language === "hi" ? "स्तंभ 1 • नियमित स्कूली शिक्षा" : "Pillar 1 • Core Schooling"}
                  </span>
                  <span className="text-2xl">🏫</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-900 transition-colors">
                  {dict.heroSchoolName}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === "hi"
                    ? "सीबीएसई पाठ्यक्रम, डिजिटल स्मार्ट कक्षाएं, और विज्ञान प्रयोगशालाओं से युक्त जीवंत वातावरण। हमारे राजबाग (पुपरी) और बहेरा जाहिदपुर दोनों परिसरों में बच्चों को उत्कृष्ट संस्कार, अंग्रेजी संभाषण और शारीरिक खेलकूद में दक्ष बनाया जाता है।"
                    : "A vibrant learning ecosystem built on CBSE curriculum guidelines, digital smart classrooms, and experimental science labs across our Rajbag (Pupri) and Bahera Zahidpur campuses. Equipping students with strong moral foundations, English fluency, and sports."}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{language === "hi" ? "नर्सरी से 10वीं तक क्रमबद्ध शिक्षा व्यवस्था" : "Foundational to Secondary (Nursery to 10th)"}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{language === "hi" ? "स्मार्ट क्लास, कंप्यूटर लैब एवं विज्ञान कक्ष" : "Digital interactive smart boards & computer education"}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{language === "hi" ? "चार सदनों (House System) द्वारा नेतृत्व विकास" : "Inter-house competitions, debates & yoga drills"}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => openEnquiryModal("school")}
                  className="px-5 py-2.5 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow"
                >
                  {dict.heroCtaAdmission}
                </button>
                <Link
                  href="/school/academics"
                  className="text-xs font-bold text-indigo-900 hover:underline flex items-center gap-1"
                >
                  <span>{t("navCbseCurriculum")}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Integrated Coaching Card */}
            <div
              className={`bg-white rounded-2xl p-6 sm:p-8 shadow-sm transition-all border flex flex-col justify-between group ${
                activeTab === "institute"
                  ? "ring-2 ring-amber-500 shadow-xl border-amber-500 scale-[1.01]"
                  : activeTab === "school"
                  ? "opacity-50 hover:opacity-100 border-slate-200"
                  : "hover:shadow-xl border-slate-200"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    {language === "hi" ? "स्तंभ 2 • समेकित प्रतियोगी विंग (ISP)" : "Pillar 2 • Integrated Coaching Wing"}
                  </span>
                  <span className="text-2xl">🎯</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                  {language === "hi" ? "समेकित कोचिंग संस्थान" : "Integrated Career Institute"}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {dict.ispSubtitle} {dict.ispProblemDesc}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircleIcon className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>{dict.ispCardJnvstTitle}:</strong> {dict.ispCardJnvstDesc}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircleIcon className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>{dict.ispCardJeeTitle}:</strong> {dict.ispCardJeeDesc}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircleIcon className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>{dict.ispCardOmrTitle}:</strong> {dict.ispCardOmrDesc}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/integrated-program"
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow"
                >
                  {dict.heroCtaIsp}
                </Link>
                <Link
                  href="/school/competitive-exams"
                  className="text-xs font-bold text-amber-800 hover:underline flex items-center gap-1"
                >
                  <span>{dict.navJnvstNetarhat}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Founders Desk Showcase */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-amber-50/40 via-slate-50 to-white text-slate-900 border-y border-amber-200/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider">
              {dict.leadershipBadge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              {dict.leadershipTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              {dict.leadershipSubtitle}
            </p>
          </div>

          {/* 3 Leadership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Leader 1: Ashok Kumar Thakur */}
            <div className="bg-white rounded-2xl p-6 border-2 border-amber-300 shadow-sm hover:shadow-xl hover:border-amber-400 flex flex-col justify-between transition-all group">
              <div>
                <div className="h-64 sm:h-72 w-full rounded-xl overflow-hidden mb-5 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 flex items-center justify-center relative border border-amber-300 shadow">
                  <div className="text-center p-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-amber-400/20 border-2 border-amber-400 flex items-center justify-center text-3xl text-amber-300 mb-3">
                      👨‍💼
                    </div>
                    <span className="text-xs text-amber-300 font-bold uppercase tracking-wider block">
                      {dict.chairmanRole}
                    </span>
                    <span className="text-[10px] text-slate-300 mt-1 block">
                      {language === "hi" ? "आधिकारिक चित्र शीघ्र अपडेट होगा" : "Official Portrait Updating Soon"}
                    </span>
                  </div>
                  <div className="absolute top-2 left-2 bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded shadow">
                    {dict.chairmanDesk}
                  </div>
                </div>

                <div className="space-y-1 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {dict.chairmanRole}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    {dict.chairmanName}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                    <span>🎖️</span>
                    <span>{dict.chairmanHonor}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed italic border-l-2 border-amber-400 pl-3 py-1 my-3 bg-amber-50/40 rounded-r">
                  &ldquo;{dict.chairmanMessage}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">S.K. Thakur Memorial Trust</span>
                <Link href="/leadership" className="font-bold text-indigo-900 hover:underline">
                  {language === "hi" ? "विस्तृत पढ़ें →" : "Read Full Desk →"}
                </Link>
              </div>
            </div>

            {/* Leader 2: Arvind Ujjwal */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-300 flex flex-col justify-between transition-all group">
              <div>
                <div className="h-64 sm:h-72 w-full rounded-xl overflow-hidden mb-5 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 flex items-center justify-center relative border border-indigo-300 shadow">
                  <div className="text-center p-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-indigo-500/20 border-2 border-indigo-400 flex items-center justify-center text-3xl text-indigo-300 mb-3">
                      🎓
                    </div>
                    <span className="text-xs text-indigo-300 font-bold uppercase tracking-wider block">
                      {dict.directorRole}
                    </span>
                    <span className="text-[10px] text-slate-300 mt-1 block">
                      {language === "hi" ? "आधिकारिक चित्र शीघ्र अपडेट होगा" : "Official Portrait Updating Soon"}
                    </span>
                  </div>
                  <div className="absolute top-2 left-2 bg-indigo-900 text-white text-[10px] font-black px-2 py-0.5 rounded shadow">
                    {dict.directorDesk}
                  </div>
                </div>

                <div className="space-y-1 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-900 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                    {dict.directorRole}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    {dict.directorName}
                  </h3>
                  <div className="text-xs font-semibold text-slate-600">
                    {language === "hi" ? "शैक्षणिक नवाचार एवं प्रतियोगी समन्वयक" : "Architect of Integrated School Program (ISP)"}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed italic border-l-2 border-indigo-400 pl-3 py-1 my-3 bg-indigo-50/30 rounded-r">
                  &ldquo;{dict.directorMessage}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">{language === "hi" ? "प्रतियोगी परीक्षा मार्गदर्शन" : "ISP Competitive Wing"}</span>
                <Link href="/leadership" className="font-bold text-indigo-900 hover:underline">
                  {language === "hi" ? "विस्तृत पढ़ें →" : "Read Full Desk →"}
                </Link>
              </div>
            </div>

            {/* Leader 3: Aparna Satyam */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-300 flex flex-col justify-between transition-all group">
              <div>
                <div className="h-64 sm:h-72 w-full rounded-xl overflow-hidden mb-5 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 flex items-center justify-center relative border border-slate-200 shadow">
                  <div className="text-center p-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-amber-400/20 border-2 border-amber-400 flex items-center justify-center text-3xl text-amber-300 mb-3">
                      👩‍🏫
                    </div>
                    <span className="text-xs text-amber-300 font-bold uppercase tracking-wider block">
                      North Point Children Academy
                    </span>
                    <span className="text-[11px] text-slate-300">
                      {language === "hi" ? "शैक्षणिक प्रमुख" : "Academics & Student Care"}
                    </span>
                  </div>
                  <div className="absolute top-2 left-2 bg-indigo-900 text-white text-[10px] font-black px-2 py-0.5 rounded shadow">
                    {dict.principalDesk}
                  </div>
                </div>

                <div className="space-y-1 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-900 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                    {dict.principalRole}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    {dict.principalName}
                  </h3>
                  <div className="text-xs font-semibold text-slate-600">
                    {language === "hi" ? "सीबीएसई पाठ्यक्रम एवं विद्यार्थी अनुशासन" : "Head of CBSE Academics & Faculty Mentorship"}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed italic border-l-2 border-purple-400 pl-3 py-1 my-3 bg-purple-50/30 rounded-r">
                  &ldquo;{dict.principalMessage}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">{language === "hi" ? "सीबीएसई पाठ्यक्रम" : "School Curriculum"}</span>
                <Link href="/leadership" className="font-bold text-indigo-900 hover:underline">
                  {language === "hi" ? "विस्तृत पढ़ें →" : "Read Full Desk →"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life & Photo Showcase */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold text-indigo-900 uppercase tracking-wider mb-2">
                <span>📸 {dict.galleryBadge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                {dict.galleryTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl">
                {dict.gallerySubtitle}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-indigo-950 text-white font-bold text-xs shadow-md transition-all shrink-0"
              >
                <span>{language === "hi" ? "संपूर्ण फोटो गैलरी देखें" : "View Full Photo Gallery"}</span>
                <span className="text-amber-400">→</span>
              </Link>
            </div>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <button
              onClick={() => setGalleryFilter("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                galleryFilter === "all"
                  ? "bg-indigo-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {dict.filterAll} ({HOME_PHOTO_ITEMS.length})
            </button>
            <button
              onClick={() => setGalleryFilter("campus")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                galleryFilter === "campus"
                  ? "bg-indigo-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              🏫 {dict.filterCampus}
            </button>
            <button
              onClick={() => setGalleryFilter("events")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                galleryFilter === "events"
                  ? "bg-indigo-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              🏆 {dict.filterCeremony}
            </button>
            <button
              onClick={() => setGalleryFilter("students")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                galleryFilter === "students"
                  ? "bg-indigo-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              🎒 {dict.filterLeadership}
            </button>
          </div>

          {/* Curated Real Student & Campus Life Photo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setLightboxItem(photo)}
                className="group rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 flex flex-col cursor-pointer"
              >
                <div className="h-56 relative overflow-hidden bg-slate-900">
                  <img
                    src={photo.image}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow ${photo.badgeColor}`}>
                      {language === "hi" ? photo.badgeHi : photo.badgeEn}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/60 text-[10px] font-medium text-slate-100 px-2 py-0.5 rounded border border-white/10 shadow z-10">
                    {photo.topRightTag}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-900 bg-indigo-50 px-2 py-0.5 rounded">
                      {language === "hi" ? photo.tagHi : photo.tagEn}
                    </span>
                    <h3 className="font-bold text-base text-slate-900 mt-2 group-hover:text-indigo-900 transition-colors">
                      {language === "hi" ? photo.titleHi : photo.titleEn}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-2">
                      {language === "hi" ? photo.descHi : photo.descEn}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-indigo-900 font-bold">
                    <span>{language === "hi" ? "बड़ा चित्र देखें" : "Click to view full photo"}</span>
                    <span>🔍</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Photo Inspection */}
      {lightboxItem && (
        <div
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 animate-fade-in backdrop-blur-none"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative animate-fade-in-up"
          >
            <div className="relative bg-slate-950">
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center text-lg z-20 border border-white/20 transition-colors"
                aria-label="Close photo preview"
              >
                ✕
              </button>
              <img
                src={lightboxItem.image}
                alt={lightboxItem.alt}
                className="w-full max-h-[60vh] object-contain mx-auto"
              />
            </div>
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${lightboxItem.badgeColor}`}>
                  {language === "hi" ? lightboxItem.badgeHi : lightboxItem.badgeEn}
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  {dict.heroSchoolName}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {language === "hi" ? lightboxItem.titleHi : lightboxItem.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === "hi" ? lightboxItem.descHi : lightboxItem.descEn}
              </p>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/gallery"
                  onClick={() => setLightboxItem(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-900 hover:underline"
                >
                  <span>{language === "hi" ? "गैलरी में सभी चित्र देखें →" : "Explore full album in Gallery →"}</span>
                </Link>
                <button
                  onClick={() => setLightboxItem(null)}
                  className="px-4 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {language === "hi" ? "बंद करें" : "Close"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Facilities & Highlights */}
      <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-900 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              {dict.facilitiesBadge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              {dict.facilitiesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-900 flex items-center justify-center">
                <UserGroupIcon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900">{dict.fac1Title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{dict.fac1Desc}</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <BusIcon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900">{dict.fac2Title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{dict.fac2Desc}</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center">
                <ComputerDesktopIcon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900">{dict.fac3Title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{dict.fac3Desc}</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                <TrophyIcon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900">{dict.fac4Title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{dict.fac4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              {language === "hi" ? "अक्सर पूछे जाने वाले प्रश्न (FAQ)" : "Frequently Asked Questions"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {language === "hi"
                ? "सीतामढ़ी एवं समीपवर्ती क्षेत्रों के अभिभावकों द्वारा पूछे जाने वाले सामान्य प्रश्न एवं उनके उत्तर।"
                : "Clear answers to the most common questions asked by parents in Sitamarhi district."}
            </p>
          </div>

          <div className="space-y-4">
            <details className="group p-5 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
              <summary className="font-bold text-slate-900 text-sm flex items-center justify-between list-none">
                <span>{language === "hi" ? "विद्यालय की दोनों शाखाएं कहाँ स्थित हैं?" : "Where are your two branches located?"}</span>
                <span className="text-indigo-900 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                {language === "hi"
                  ? "नॉर्थ प्वाइंट चिल्ड्रेन एकेडमी की दो पूर्ण शाखाएं हैं: शाखा 1 राजबाग (पुपरी) में तथा शाखा 2 बहेरा जाहिदपुर (नानपुर प्रखंड) में। आप अपने निवास से नजदीकी शाखा में नामांकन करा सकते हैं।"
                  : "North Point Children Academy operates two full-fledged campuses: Branch 1 at Rajbag, Pupri and Branch 2 at Bahera Zahidpur (Nanpur block), Sitamarhi. You can enroll your child at whichever branch is closer to your residence."}
              </p>
            </details>

            <details className="group p-5 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
              <summary className="font-bold text-slate-900 text-sm flex items-center justify-between list-none">
                <span>{language === "hi" ? "विद्यालय में नामांकन की क्या प्रक्रिया है?" : "What is the admission procedure for the School Wing?"}</span>
                <span className="text-indigo-900 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                {language === "hi"
                  ? "प्रारंभिक कक्षाओं हेतु अभिभावक संवाद द्वारा सीधा प्रवेश दिया जाता है। उच्च कक्षाओं के लिए अंग्रेजी, हिंदी व गणित का एक सामान्य मूल्यांकन टेस्ट लिया जाता है।"
                  : "Admissions for pre-primary are direct through an informal parent interaction. For higher classes, students undergo a simple baseline test in English, Hindi, and Mathematics to assess their current academic level, followed by document verification."}
              </p>
            </details>

            <details className="group p-5 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
              <summary className="font-bold text-slate-900 text-sm flex items-center justify-between list-none">
                <span>{language === "hi" ? "नवोदय (JNVST) और नेतरहाट की तैयारी कैसे कराई जाती है?" : "How does the school prepare students for Navodaya (JNVST) and Netarhat?"}</span>
                <span className="text-indigo-900 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                {language === "hi"
                  ? "हमारा संस्थान समेकित कोचिंग (ISP) संचालित करता है। नियमित स्कूली शिक्षा के साथ-साथ मानसिक योग्यता (MAT), गणितीय शॉर्टकट्स एवं OMR शीट पर साप्ताहिक मॉक टेस्ट का सघन अभ्यास कराया जाता है।"
                  : "We run an integrated competitive cell. In addition to regular school hours, aspiring students attend special morning/evening classes focusing on Mental Ability (MAT), non-verbal reasoning, mathematical shortcuts, and language passages, along with bi-weekly mock tests on OMR sheets."}
              </p>
            </details>

            <details className="group p-5 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
              <summary className="font-bold text-slate-900 text-sm flex items-center justify-between list-none">
                <span>{language === "hi" ? "क्या हमारे गांव तक स्कूल बस/वैन सुविधा उपलब्ध है?" : "Is school bus / van transport available from our village?"}</span>
                <span className="text-indigo-900 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                {language === "hi"
                  ? "हाँ, हमारी सुरक्षित वाहन सेवा पुपरी नगर, राजबाग, बहेरा जाहिदपुर, नानपुर, बाजपट्टी, जनकपुर रोड स्टेशन तथा आसपास के 20 से अधिक ग्रामीण मार्गों पर उपलब्ध है। अपने स्टॉप की जानकारी हेतु 8294407171 पर संपर्क करें।"
                  : "Yes, our school transport network reaches major stops across Pupri town, Rajbag, Bahera Zahidpur, Nanpur, Bajpatti, Janakpur Road railway station, and surrounding rural routes. Please call 8294407171 to check your specific stop."}
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-12 bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider">
            {dict.ctaBannerBadge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black">
            {dict.ctaBannerTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            {dict.ctaBannerSubtitle}
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+918294407171"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-colors flex items-center gap-2"
            >
              <PhoneIcon className="w-4 h-4 text-white" />
              <span>{dict.ctaBannerCall}</span>
            </a>
            <button
              onClick={() => openEnquiryModal("school")}
              className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-colors"
            >
              {dict.ctaBannerForm}
            </button>
            <a
              href="https://wa.me/918294407171?text=Hello%20North%20Point%20Children%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold text-xs uppercase tracking-wider shadow-lg transition-colors flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>{dict.ctaBannerWhatsapp}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Modals */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultWing={defaultWing}
      />
      <BrochureModal
        isOpen={brochureOpen}
        onClose={() => setBrochureOpen(false)}
      />
    </div>
  );
}
