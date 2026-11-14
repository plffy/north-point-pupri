"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
  WhatsAppIcon,
  CheckCircleIcon,
  BusIcon,
} from "@/components/Icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "School Admission",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello North Point Pupri!\n` +
      `*Name:* ${formData.name || "Visitor"}\n` +
      `*Phone:* ${formData.phone || "N/A"}\n` +
      `*Inquiry For:* ${formData.subject}\n` +
      `*Message:* ${formData.message || "I would like more information."}`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Contact &amp; Campus Location</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black">Contact Us &amp; Visit Campus</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Have questions about admissions, competitive batches, transport routes, or fee schedules? Our counseling desk is happy to help you.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Info Columns */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase text-indigo-900 tracking-wider">
                Admissions &amp; Office Desk
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
                North Point Educational Campus
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Pupri, Sitamarhi District, Bihar – 843320
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <LocationMarkerIcon className="w-5 h-5 text-indigo-900 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Campus Address</div>
                  <div className="text-slate-600 mt-0.5">
                    North Point Public School &amp; Career Institute, Station Road / Main Bypass, Pupri, Sitamarhi, Bihar 843320
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <PhoneIcon className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Helpline Phone Numbers</div>
                  <div className="text-slate-600 mt-0.5">
                    <a href="tel:+919876543210" className="hover:underline text-indigo-900 font-semibold">
                      +91 98765 43210
                    </a>{" "}
                    /{" "}
                    <a href="tel:+919123456789" className="hover:underline text-indigo-900 font-semibold">
                      +91 91234 56789
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <MailIcon className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Email Address</div>
                  <div className="text-slate-600 mt-0.5">
                    <a href="mailto:admission@northpointpupri.edu.in" className="hover:underline">
                      admission@northpointpupri.edu.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <BusIcon className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">School Bus Transport Fleet</div>
                  <div className="text-slate-600 mt-0.5">
                    Covering Pupri Bazar, Janakpur Road Railway Station, Bajpatti, Parsauni, Nanpur &amp; rural connecting points.
                  </div>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div className="p-4 rounded-2xl bg-indigo-900 text-white text-xs space-y-1">
              <div className="font-bold text-amber-400">Office Visiting Hours</div>
              <div>Monday to Saturday: 8:00 AM – 4:30 PM</div>
              <div className="text-slate-300">Sunday: By prior telephonic appointment for admission counseling.</div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-bold uppercase text-indigo-900 tracking-wider">Online Desk</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Send an Admission Enquiry
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                We will contact you via WhatsApp or phone call within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircleIcon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Thank you for reaching out!</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Our admissions coordinator has received your enquiry and will connect with you shortly.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs shadow hover:bg-emerald-500 transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Chat with Us Immediately
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Chandra"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    WhatsApp / Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    I Am Inquiring For:
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 bg-white"
                  >
                    <option value="School Admission">School Admission (Pre-Primary / Primary / Middle / Secondary)</option>
                    <option value="Navodaya / Netarhat Prep">Navodaya (JNVST) &amp; Netarhat Preparation Batch</option>
                    <option value="Simultala & Sainik School">Simultala (SAV) &amp; Sainik School AISSEE Batch</option>
                    <option value="IIT-JEE Coaching">IIT-JEE 2-Year / Dropper Coaching Batch</option>
                    <option value="NEET Medical Coaching">NEET-UG Medical Entrance Classroom</option>
                    <option value="Pre-Foundation Wing">Pre-Foundation / Olympiad Courses</option>
                    <option value="Bus Route Query">School Transport / Bus Route Query</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Message / Village Location (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about student's current grade, village, or specific queries..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-5 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
                  >
                    Submit Enquiry Form
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors inline-flex items-center justify-center gap-1.5"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Send on WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
