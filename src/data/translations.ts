export type Language = "en" | "hi";

export interface TranslationDictionary {
  // Topbar & Header
  campusesBar: string;
  callNow: string;
  helpline: string;
  prospectusPdf: string;
  admissionEnquiry: string;
  admissionsSession: string;
  schoolAdmission: string;
  integratedCoaching: string;
  latestCirculars: string;

  // Nav
  navHome: string;
  navAbout: string;
  navAcademics: string;
  navCoaching: string;
  navAdmissions: string;
  navGallery: string;
  navContact: string;

  // Dropdown items
  navVisionCampuses: string;
  navVisionCampusesSub: string;
  navLeadership: string;
  navLeadershipSub: string;
  navCbseCurriculum: string;
  navCbseCurriculumSub: string;
  navBeyondClassroom: string;
  navBeyondClassroomSub: string;
  navBoardResults: string;
  navBoardResultsSub: string;
  navIspOverview: string;
  navIspOverviewSub: string;
  navJnvstNetarhat: string;
  navJnvstNetarhatSub: string;
  navJeeNeet: string;
  navJeeNeetSub: string;
  navMentors: string;
  navMentorsSub: string;
  navScat: string;
  navScatSub: string;
  navAdmissionProcess: string;
  navAdmissionProcessSub: string;
  navProspectusFacilities: string;
  navProspectusFacilitiesSub: string;

  // Hero Section
  heroPill: string;
  heroSchoolName: string;
  heroHeadline: string;
  heroDescription: string;
  heroCtaCall: string;
  heroCtaAdmission: string;
  heroCtaIsp: string;
  heroCtaProspectus: string;
  branch1Pill: string;
  branch2Pill: string;
  badgeCbse: string;
  badgeJnvst: string;
  badgeJeeNeet: string;
  badgeTransport: string;

  // Leadership Section
  leadershipBadge: string;
  leadershipTitle: string;
  leadershipSubtitle: string;
  chairmanRole: string;
  chairmanName: string;
  chairmanHonor: string;
  chairmanDesk: string;
  chairmanMessage: string;
  directorRole: string;
  directorName: string;
  directorDesk: string;
  directorMessage: string;
  principalRole: string;
  principalName: string;
  principalDesk: string;
  principalMessage: string;

  // Campuses Section
  campusesBadge: string;
  campusesTitle: string;
  campusesSubtitle: string;
  campusRajbagTitle: string;
  campusRajbagSub: string;
  campusRajbagDesc: string;
  campusBaheraTitle: string;
  campusBaheraSub: string;
  campusBaheraDesc: string;

  // ISP Integrated Section
  ispBadge: string;
  ispTitle: string;
  ispSubtitle: string;
  ispProblemLabel: string;
  ispProblemDesc: string;
  ispSolutionLabel: string;
  ispSolutionDesc: string;
  ispCardJnvstTitle: string;
  ispCardJnvstDesc: string;
  ispCardJeeTitle: string;
  ispCardJeeDesc: string;
  ispCardOmrTitle: string;
  ispCardOmrDesc: string;

  // Gallery Showcase
  galleryBadge: string;
  galleryTitle: string;
  gallerySubtitle: string;
  filterAll: string;
  filterCampus: string;
  filterCeremony: string;
  filterLeadership: string;

  // Facilities & Highlights
  facilitiesBadge: string;
  facilitiesTitle: string;
  fac1Title: string;
  fac1Desc: string;
  fac2Title: string;
  fac2Desc: string;
  fac3Title: string;
  fac3Desc: string;
  fac4Title: string;
  fac4Desc: string;

  // Bottom CTA
  ctaBannerBadge: string;
  ctaBannerTitle: string;
  ctaBannerSubtitle: string;
  ctaBannerCall: string;
  ctaBannerForm: string;
  ctaBannerWhatsapp: string;

  // Footer
  footerAboutDesc: string;
  footerCampusesHeading: string;
  footerQuickLinksHeading: string;
  footerProgramsHeading: string;
  footerContactHeading: string;
  footerCopyright: string;

  // Notices
  notice1: string;
  notice2: string;
  notice3: string;
  notice4: string;
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    campusesBar: "Campuses: Rajbag, Pupri & Bahera Zahidpur (Nanpur)",
    callNow: "Call Now",
    helpline: "Helpline: 8294407171",
    prospectusPdf: "Prospectus PDF",
    admissionEnquiry: "Admission Enquiry",
    admissionsSession: "Admissions 2025–26",
    schoolAdmission: "School Admission",
    integratedCoaching: "Integrated Coaching",
    latestCirculars: "Latest Circulars",

    navHome: "Home",
    navAbout: "About Us",
    navAcademics: "Academics",
    navCoaching: "Coaching (ISP)",
    navAdmissions: "Admissions",
    navGallery: "Gallery",
    navContact: "Contact",

    navVisionCampuses: "Our Vision & Campuses",
    navVisionCampusesSub: "Rajbag (Pupri) & Bahera Zahidpur",
    navLeadership: "Leadership & Founders",
    navLeadershipSub: "Chairman, Managing Director & Principal Desk",
    navCbseCurriculum: "CBSE Curriculum & Smart Classes",
    navCbseCurriculumSub: "Foundational, Primary & Secondary stages",
    navBeyondClassroom: "Beyond the Classroom",
    navBeyondClassroomSub: "Sports, Arts, House System & Clubs",
    navBoardResults: "Board Results & Honors",
    navBoardResultsSub: "100% Board Pass Rate & Toppers",
    navIspOverview: "What is Integrated School Program?",
    navIspOverviewSub: "Schooling + Competitive entrance under one roof",
    navJnvstNetarhat: "Navodaya (JNVST) & Netarhat Wing",
    navJnvstNetarhatSub: "Also covers Simultala, Sainik School (AISSEE) & RMS",
    navJeeNeet: "IIT-JEE & NEET-UG Foundation",
    navJeeNeetSub: "Engineering & Medical early foundation",
    navMentors: "Mentors & Synchronized Timetable",
    navMentorsSub: "Daily Practice Problems (DPP) & OMR mock series",
    navScat: "SCAT Scholarship Test",
    navScatSub: "Up to 100% tuition scholarship for talented students",
    navAdmissionProcess: "Admission Process & Criteria",
    navAdmissionProcessSub: "For School & Integrated Coaching batches",
    navProspectusFacilities: "Prospectus & Facilities",
    navProspectusFacilitiesSub: "Curriculum, labs, and bus routes",

    heroPill: "Admissions Open for Session 2025–26 • Rajbag (Pupri) & Bahera Zahidpur",
    heroSchoolName: "North Point Children Academy",
    heroHeadline: "English Medium School with Integrated Competitive Coaching",
    heroDescription:
      "Serving students across our two premier campuses at Rajbag (Pupri) and Bahera Zahidpur (Nanpur). A comprehensive educational sanctuary where regular CBSE schooling is seamlessly synchronized with intensive coaching for Navodaya (JNVST), Netarhat, Simultala, Sainik School, and career foundation for IIT-JEE & NEET — all under one single roof.",
    heroCtaCall: "Call Now: 8294407171",
    heroCtaAdmission: "🏫 School Admission 2025–26",
    heroCtaIsp: "🎯 Integrated Coaching (ISP)",
    heroCtaProspectus: "Prospectus PDF",
    branch1Pill: "Branch 1: Rajbag, Pupri, Sitamarhi",
    branch2Pill: "Branch 2: Bahera Zahidpur, Nanpur",
    badgeCbse: "CBSE Pattern Curriculum",
    badgeJnvst: "JNVST / Netarhat Coaching",
    badgeJeeNeet: "IIT-JEE & NEET Foundation",
    badgeTransport: "Safe Bus Transport (Pupri & Nanpur)",

    leadershipBadge: "Visionary Founders & Academic Leadership",
    leadershipTitle: "Guided by Experience, Driven by Educational Devotion",
    leadershipSubtitle:
      "Under the patronage of S.K. Thakur Memorial Educational Trust, our leaders bring decades of grassroots dedication to Pupri and Sitamarhi.",
    chairmanRole: "Founder & Chairman",
    chairmanName: "Ashok Kumar Thakur",
    chairmanHonor: "Recipient of Shiksha Sewa Samman (शिक्षा सेवा सम्मान)",
    chairmanDesk: "Chairman's Desk",
    chairmanMessage:
      "When we laid the foundation of North Point Children Academy, our dream was that no capable child from rural Sitamarhi should ever fall behind due to a lack of quality schooling. By expanding to Bahera Zahidpur, we brought world-class education and values right to your doorstep.",
    directorRole: "Managing Director",
    directorName: "Arvind Ujjwal",
    directorDesk: "Director's Vision",
    directorMessage:
      "Education is not merely preparing for terminal exams; it is about building unstoppable character and self-reliance. Our Integrated School Program ends the exhaustion of dual tuition schedules, preparing our students for national competitions right here in Pupri.",
    principalRole: "Principal & Head of Academics",
    principalName: "Aparna Thakur",
    principalDesk: "Academic Desk",
    principalMessage:
      "Every child possesses a unique spark. At North Point Children Academy, we combine loving maternal care with strict academic discipline, smart classrooms, and personalized attention to nurture tomorrow's toppers.",

    campusesBadge: "Two Campuses in Sitamarhi",
    campusesTitle: "Strategic Locations Serving Pupri and Surrounding Villages",
    campusesSubtitle: "State-of-the-art infrastructure situated conveniently for students across northern Bihar.",
    campusRajbagTitle: "Rajbag Campus (Pupri)",
    campusRajbagSub: "Flagship Primary & Secondary Campus",
    campusRajbagDesc: "Located in the heart of Pupri with three-story modern building, science labs, computer centre, and administrative headquarters.",
    campusBaheraTitle: "Bahera Zahidpur Campus (Nanpur)",
    campusBaheraSub: "Expanding Quality Education to Rural Belts",
    campusBaheraDesc: "Serving students across Nanpur and nearby villages with safe school van transport, spacious classrooms, and green sports grounds.",

    ispBadge: "Integrated School Program (ISP)",
    ispTitle: "Schooling + Competitive Entrance Coaching Synchronized",
    ispSubtitle: "The solution to student fatigue and expensive duplicate tuitions.",
    ispProblemLabel: "The Traditional Dilemma",
    ispProblemDesc: "Children attend regular school till 2 PM, then rush exhausted to private coaching centers till late evening, leaving no time for self-study or sports.",
    ispSolutionLabel: "The North Point Solution",
    ispSolutionDesc: "One campus, one synchronized timetable. Morning school academics followed by dedicated competitive modules (DPP, OMR practice, reasoning) by expert faculty.",
    ispCardJnvstTitle: "Navodaya (JNVST) & Netarhat Cell",
    ispCardJnvstDesc: "Intensive training in Mental Ability (MAT), non-verbal reasoning, and mathematics for classes 3rd to 5th.",
    ispCardJeeTitle: "IIT-JEE & NEET Early Foundation",
    ispCardJeeDesc: "Strong concept-building in Physics, Chemistry, and Advanced Mathematics for classes 6th to 10th.",
    ispCardOmrTitle: "Bi-Weekly OMR Mock Tests",
    ispCardOmrDesc: "Regular real-exam simulations with negative marking analysis and detailed rank benchmarking.",

    galleryBadge: "Campus & Ceremony Life",
    galleryTitle: "Moments from North Point Children Academy",
    gallerySubtitle: "Actual photographs showcasing our 3-story campus, trust entrance, award felicitation, and leadership desk.",
    filterAll: "All Photos",
    filterCampus: "Campuses & Building",
    filterCeremony: "Events & Honors",
    filterLeadership: "Leadership Desk",

    facilitiesBadge: "Why Choose North Point Children Academy",
    facilitiesTitle: "Holistic Development With Complete Peace of Mind for Parents",
    fac1Title: "Experienced & Caring Faculty",
    fac1Desc: "Dedicated subject mentors who prioritize concept clarity over rote memorization.",
    fac2Title: "Safe Transport Across 20+ Villages",
    fac2Desc: "GPS-monitored school buses and vans connecting Pupri, Bahera Zahidpur, Nanpur, and Bajpatti.",
    fac3Title: "Smart Classroom & Modern Labs",
    fac3Desc: "Audio-visual learning aids, computer laboratory, and practical science demonstration rooms.",
    fac4Title: "Disciplined House System & Sports",
    fac4Desc: "Inter-house cricket, badminton, yoga, and cultural celebrations fostering team spirit.",

    ctaBannerBadge: "Admissions Open 2025–26",
    ctaBannerTitle: "Give Your Child the North Point Children Academy Advantage",
    ctaBannerSubtitle: "Book an appointment with our counseling desk at Rajbag (Pupri) or Bahera Zahidpur, visit our campuses, or call 8294407171.",
    ctaBannerCall: "Call Helpline: 8294407171",
    ctaBannerForm: "Fill Online Admission Form",
    ctaBannerWhatsapp: "WhatsApp: 8294407171",

    footerAboutDesc:
      "Premier schooling with synchronized competitive entrance coaching for Navodaya (JNVST), Netarhat, Sainik School, IIT-JEE, and NEET across our campuses at Rajbag (Pupri) and Bahera Zahidpur (Nanpur).",
    footerCampusesHeading: "Our Campuses",
    footerQuickLinksHeading: "Quick Links",
    footerProgramsHeading: "Academic Programs",
    footerContactHeading: "Helpline & Contact",
    footerCopyright: "© 2025–26 North Point Children Academy. All rights reserved. S.K. Thakur Memorial Educational Trust.",

    notice1: "North Point Children Academy: Admissions open at both Rajbag (Pupri) & Bahera Zahidpur branches! Call 8294407171.",
    notice2: "Special Intensive Batch for Navodaya (JNVST) & Netarhat Awasiya Vidyalaya entrance examinations starting soon.",
    notice3: "North Point Scholarship-Cum-Admission Test (SCAT) for IIT-JEE / NEET foundation and talent diagnostic assessment.",
    notice4: "Special weekend masterclasses for SOF (NSO, IMO) & National Means-cum-Merit Scholarship (NMMS).",
  },

  hi: {
    campusesBar: "शाखाएं: राजबाग (पुपरी) एवं बहेरा जाहिदपुर (नानपुर), सीतामढ़ी",
    callNow: "कॉल करें",
    helpline: "हेल्पलाइन: 8294407171",
    prospectusPdf: "प्रॉस्पेक्टस (PDF)",
    admissionEnquiry: "नामांकन पूछताछ",
    admissionsSession: "नामांकन 2025–26",
    schoolAdmission: "स्कूल नामांकन",
    integratedCoaching: "समेकित कोचिंग (ISP)",
    latestCirculars: "नवीनतम सूचनाएं",

    navHome: "मुख्य पृष्ठ",
    navAbout: "परिचय",
    navAcademics: "शैक्षणिक",
    navCoaching: "कोचिंग (ISP)",
    navAdmissions: "प्रवेश",
    navGallery: "गैलरी",
    navContact: "संपर्क",

    navVisionCampuses: "हमारा दृष्टिकोण एवं शाखाएं",
    navVisionCampusesSub: "राजबाग (पुपरी) व बहेरा जाहिदपुर शाखा",
    navLeadership: "संस्थापक एवं नेतृत्व संदेश",
    navLeadershipSub: "चेयरमैन, प्रबंध निदेशक एवं प्रधानाचार्य संदेश",
    navCbseCurriculum: "सीबीएसई पैटर्न एवं स्मार्ट क्लासेस",
    navCbseCurriculumSub: "प्रारंभिक, प्राथमिक एवं माध्यमिक शिक्षा",
    navBeyondClassroom: "सह-पाठ्यक्रम एवं खेलकूद",
    navBeyondClassroomSub: "खेलकूद, योग, हाउस सिस्टम व सांस्कृतिक कार्यक्रम",
    navBoardResults: "बोर्ड परीक्षा परिणाम एवं सम्मान",
    navBoardResultsSub: "शत-प्रतिशत परीक्षा परिणाम व मेधावी छात्र",
    navIspOverview: "समेकित विद्यालय कार्यक्रम (ISP) क्या है?",
    navIspOverviewSub: "स्कूल व प्रतियोगी परीक्षा की तैयारी एक ही छत के नीचे",
    navJnvstNetarhat: "नवोदय (JNVST) एवं नेतरहाट प्रभाग",
    navJnvstNetarhatSub: "सिमुलतला, सैनिक स्कूल (AISSEE) एवं मिलिट्री स्कूल तैयारी",
    navJeeNeet: "IIT-JEE एवं NEET-UG फाउंडेशन",
    navJeeNeetSub: "इंजीनियरिंग एवं मेडिकल प्रवेश परीक्षा की प्रारंभिक नींव",
    navMentors: "विशेषज्ञ शिक्षक व समन्वित समय-सारणी",
    navMentorsSub: "दैनिक अभ्यास प्रश्न (DPP) एवं OMR मॉक टेस्ट श्रृंखला",
    navScat: "स्कैट (SCAT) छात्रवृत्ति परीक्षा",
    navScatSub: "मेधावी विद्यार्थियों हेतु 100% तक शिक्षण छात्रवृत्ति",
    navAdmissionProcess: "प्रवेश प्रक्रिया व पात्रता",
    navAdmissionProcessSub: "विद्यालय एवं समेकित कोचिंग बैच हेतु",
    navProspectusFacilities: "प्रॉस्पेक्टस एवं सुविधाएं",
    navProspectusFacilitiesSub: "पाठ्यक्रम, विज्ञान प्रयोगशाला एवं बस रूट",

    heroPill: "सत्र 2025–26 हेतु नामांकन प्रारंभ • राजबाग (पुपरी) एवं बहेरा जाहिदपुर",
    heroSchoolName: "नॉर्थ प्वाइंट चिल्ड्रेन एकेडमी",
    heroHeadline: "इंग्लिश मीडियम स्कूल एवं समेकित प्रतियोगी परीक्षा कोचिंग",
    heroDescription:
      "सीतामढ़ी जिले के हमारे दोनों प्रमुख परिसरों—राजबाग (पुपरी) और बहेरा जाहिदपुर (नानपुर) में गुणवत्तापूर्ण शिक्षा। एक ऐसा आधुनिक संस्थान जहाँ नियमित सीबीएसई स्कूली शिक्षा के साथ नवोदय (JNVST), नेतरहाट, सिमुलतला, सैनिक स्कूल और IIT-JEE व NEET की उच्चस्तरीय तैयारी एक ही छत के नीचे बिना किसी अतिरिक्त ट्यूशन के कराई जाती है।",
    heroCtaCall: "कॉल करें: 8294407171",
    heroCtaAdmission: "🏫 स्कूल नामांकन 2025–26",
    heroCtaIsp: "🎯 समेकित कोचिंग (ISP)",
    heroCtaProspectus: "प्रॉस्पेक्टस (PDF)",
    branch1Pill: "शाखा 1: राजबाग, पुपरी, सीतामढ़ी",
    branch2Pill: "शाखा 2: बहेरा जाहिदपुर, नानपुर",
    badgeCbse: "सीबीएसई पैटर्न पाठ्यक्रम",
    badgeJnvst: "नवोदय / नेतरहाट विशेष बैच",
    badgeJeeNeet: "IIT-JEE व NEET फाउंडेशन",
    badgeTransport: "सुरक्षित बस व वैन सेवा (पुपरी व नानपुर)",

    leadershipBadge: "मार्गदर्शक संस्थापक एवं शैक्षणिक नेतृत्व",
    leadershipTitle: "अनुभव का मार्गदर्शन, शिक्षा के प्रति अटूट समर्पण",
    leadershipSubtitle:
      "एस.के. ठाकुर मेमोरियल एजुकेशनल ट्रस्ट के तत्वावधान में, हमारे संस्थापक पुपरी और संपूर्ण सीतामढ़ी में दशकों से शिक्षा की अलख जगा रहे हैं।",
    chairmanRole: "संस्थापक एवं अध्यक्ष (चेयरमैन)",
    chairmanName: "अशोक कुमार ठाकुर",
    chairmanHonor: "शिक्षा सेवा सम्मान से अलंकृत",
    chairmanDesk: "अध्यक्ष का संदेश",
    chairmanMessage:
      "जब हमने नॉर्थ प्वाइंट चिल्ड्रेन एकेडमी की नींव रखी थी, हमारा एकमात्र संकल्प था कि ग्रामीण व कस्बाई क्षेत्र का कोई भी मेधावी बच्चा अच्छी शिक्षा के अभाव में पीछे न छूटे। बहेरा जाहिदपुर में नई शाखा के साथ हमने इस गुणवत्ता को सीधे आपके द्वार तक पहुंचाया है।",
    directorRole: "प्रबंध निदेशक (मैनेजिंग डायरेक्टर)",
    directorName: "अरविन्द उज्ज्वल",
    directorDesk: "निदेशक की दृष्टि",
    directorMessage:
      "शिक्षा केवल परीक्षा पास करने का साधन नहीं, बल्कि चरित्र निर्माण और स्वावलंबन का आधार है। हमारे इंटीग्रेटेड स्कूल प्रोग्राम (ISP) ने छात्रों को दोहरे ट्यूशन की थकान से मुक्ति दिलाकर राष्ट्रीय प्रतियोगिताओं के लिए यहीं पुपरी में तैयार किया है।",
    principalRole: "प्रधानाचार्या एवं शैक्षणिक प्रमुख",
    principalName: "अपर्णा ठाकुर",
    principalDesk: "प्रधानाचार्य डेस्क",
    principalMessage:
      "प्रत्येक बालक में असीम प्रतिभा निहित होती है। नॉर्थ प्वाइंट चिल्ड्रेन एकेडमी में हम मातृवत स्नेह, कठोर शैक्षणिक अनुशासन, स्मार्ट कक्षाओं और व्यक्तिगत मार्गदर्शन से बच्चों के भविष्य को उज्ज्वल बनाते हैं।",

    campusesBadge: "सीतामढ़ी में हमारे दो मुख्य परिसर",
    campusesTitle: "पुपरी एवं समीपवर्ती ग्रामीण अंचलों की सेवा में तत्पर",
    campusesSubtitle: "उत्तर बिहार के विद्यार्थियों के लिए आधुनिक शैक्षणिक सुविधाओं से सुसज्जित दोनों परिसर।",
    campusRajbagTitle: "राजबाग परिसर (पुपरी)",
    campusRajbagSub: "मुख्य प्राथमिक एवं माध्यमिक शाखा",
    campusRajbagDesc: "पुपरी शहर के केंद्र में तीन मंजिला आधुनिक भवन, सुसज्जित विज्ञान प्रयोगशाला, कंप्यूटर कक्ष और प्रशासनिक मुख्यालय।",
    campusBaheraTitle: "बहेरा जाहिदपुर परिसर (नानपुर)",
    campusBaheraSub: "ग्रामीण क्षेत्रों तक उत्कृष्ट शिक्षा का विस्तार",
    campusBaheraDesc: "नानपुर और आसपास के दर्जनों गांवों के बच्चों हेतु सुरक्षित बस/वैन परिवहन, खुली हवादार कक्षाएं और खेल का मैदान।",

    ispBadge: "इंटीग्रेटेड स्कूल प्रोग्राम (ISP)",
    ispTitle: "स्कूली शिक्षा और प्रतियोगी कोचिंग का बेजोड़ समन्वय",
    ispSubtitle: "छात्रों की थकान और दोहरी महंगी ट्यूशन की समस्या का संपूर्ण समाधान।",
    ispProblemLabel: "पारंपरिक शिक्षा की समस्या",
    ispProblemDesc: "बच्चे दोपहर 2 बजे तक स्कूल में रहते हैं, फिर थके-हारे देर शाम तक निजी कोचिंगों के चक्कर काटते हैं, जिससे आत्म-अध्ययन का समय नहीं बचता।",
    ispSolutionLabel: "नॉर्थ प्वाइंट का समाधान",
    ispSolutionDesc: "एक ही परिसर, एक ही समन्वित समय-सारणी। सुबह सीबीएसई पाठ्यक्रम की पढ़ाई और दोपहर बाद अनुभवी गुरुजनों द्वारा प्रतियोगी परीक्षा के विशेष मॉड्यूल।",
    ispCardJnvstTitle: "नवोदय (JNVST) एवं नेतरहाट सेल",
    ispCardJnvstDesc: "कक्षा 3 से 5 के बच्चों हेतु मानसिक योग्यता (MAT), भाषा समझ और गणितीय ट्रिक्स का सघन प्रशिक्षण।",
    ispCardJeeTitle: "IIT-JEE व NEET अर्ली फाउंडेशन",
    ispCardJeeDesc: "कक्षा 6 से 10 तक भौतिकी, रसायन और उच्च गणित की ठोस अवधारणात्मक समझ।",
    ispCardOmrTitle: "पाक्षिक OMR मॉक टेस्ट श्रृंखला",
    ispCardOmrDesc: "नेगेटिव मार्किंग विश्लेषण और वास्तविक परीक्षा वातावरण में नियमित अभ्यास।",

    galleryBadge: "परिसर एवं उत्सव की झलकियाँ",
    galleryTitle: "नॉर्थ प्वाइंट चिल्ड्रेन एकेडमी के गौरवमयी क्षण",
    gallerySubtitle: "हमारा तीन मंजिला भव्य परिसर, ट्रस्ट का मुख्य द्वार, स्वतंत्रता दिवस पर पुरस्कार वितरण और नेतृत्व कक्ष के वास्तविक छायाचित्र।",
    filterAll: "सभी छायाचित्र",
    filterCampus: "परिसर एवं भवन",
    filterCeremony: "उत्सव एवं सम्मान",
    filterLeadership: "संस्थापक कक्ष",

    facilitiesBadge: "नॉर्थ प्वाइंट चिल्ड्रेन एकेडमी ही क्यों चुनें?",
    facilitiesTitle: "विद्यार्थियों का सर्वांगीण विकास, अभिभावकों का पूरा भरोसा",
    fac1Title: "अनुभवी एवं समर्पित शिक्षक",
    fac1Desc: "रटने के बजाय विषयों की गहरी समझ विकसित कराने वाले योग्य गुरुजन।",
    fac2Title: "20+ गांवों में सुरक्षित बस सेवा",
    fac2Desc: "पुपरी, बहेरा जाहिदपुर, नानपुर और बाजपट्टी क्षेत्र के हर प्रमुख स्टॉप तक विश्वसनीय वाहन सेवा।",
    fac3Title: "स्मार्ट क्लास व आधुनिक प्रयोगशाला",
    fac3Desc: "ऑडियो-विजुअल तकनीक द्वारा रोचक शिक्षण, कंप्यूटर लैब और प्रयोगात्मक विज्ञान कक्ष।",
    fac4Title: "अनुशासित हाउस सिस्टम व खेलकूद",
    fac4Desc: "क्रिकेट, बैडमिंटन, योग, वाद-विवाद प्रतियोगिताएं जो बच्चों में नेतृत्व क्षमता जगाती हैं।",

    ctaBannerBadge: "नामांकन खुला है: सत्र 2025–26",
    ctaBannerTitle: "अपने बच्चे को दें नॉर्थ प्वाइंट चिल्ड्रेन एकेडमी का सर्वश्रेष्ठ मंच",
    ctaBannerSubtitle: "राजबाग (पुपरी) अथवा बहेरा जाहिदपुर परिसर में हमारे परामर्श डेस्क से मिलें, विद्यालय का अवलोकन करें या 8294407171 पर तुरंत संपर्क करें।",
    ctaBannerCall: "सीधे हेल्पलाइन पर कॉल करें: 8294407171",
    ctaBannerForm: "ऑनलाइन प्रवेश फॉर्म भरें",
    ctaBannerWhatsapp: "व्हाट्सएप: 8294407171",

    footerAboutDesc:
      "सीतामढ़ी में गुणवत्तापूर्ण विद्यालयी शिक्षा एवं नवोदय, नेतरहाट, सैनिक स्कूल, IIT-JEE व NEET की समेकित प्रतियोगी कोचिंग का विश्वसनीय केंद्र। शाखाएं: राजबाग (पुपरी) व बहेरा जाहिदपुर (नानपुर)।",
    footerCampusesHeading: "हमारे परिसर",
    footerQuickLinksHeading: "महत्वपूर्ण लिंक",
    footerProgramsHeading: "शैक्षणिक कार्यक्रम",
    footerContactHeading: "हेल्पलाइन एवं संपर्क",
    footerCopyright: "© 2025–26 नॉर्थ प्वाइंट चिल्ड्रेन एकेडमी। सर्वाधिकार सुरक्षित। एस.के. ठाकुर मेमोरियल एजुकेशनल ट्रस्ट।",

    notice1: "नॉर्थ प्वाइंट चिल्ड्रेन एकेडमी: राजबाग (पुपरी) एवं बहेरा जाहिदपुर दोनों शाखाओं में नामांकन जारी है! हेल्पलाइन: 8294407171.",
    notice2: "जवाहर नवोदय विद्यालय (JNVST) एवं नेतरहाट आवासीय विद्यालय प्रवेश परीक्षा हेतु विशेष सघन बैच शीघ्र प्रारंभ।",
    notice3: "IIT-JEE / NEET फाउंडेशन एवं प्रतिभा मूल्यांकन हेतु स्कैट (SCAT) छात्रवृत्ति परीक्षा आयोजित।",
    notice4: "SOF ओलंपियाड (NSO, IMO) एवं राष्ट्रीय छात्रवृत्ति परीक्षा (NMMS) हेतु विशेष सप्ताहांत कक्षाएं।",
  },
};
