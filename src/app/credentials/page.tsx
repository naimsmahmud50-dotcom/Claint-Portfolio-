import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CredentialsSection } from "@/components/home/CredentialsSection";
import { ArrowLeft, Sparkles, GraduationCap, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Credentials, Training & Practical Mastery | Eyakub Mahmud",
  description:
    "Verified practical training, certifications, and active learning journey in MS Office applications, accounting, and ethical digital solutions by Eyakub Mahmud.",
};

export default function CredentialsPage() {
  return (
    <main className="w-full min-h-screen pt-24 sm:pt-28 pb-16">
      {/* Page Header with Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
          <Link
            href="/"
            className="hover:text-cyan transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-cyan font-semibold">Credentials &amp; Training</span>
        </div>
      </div>

      {/* Credentials Content */}
      <CredentialsSection />

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-slate-950 border border-slate-800 text-center relative overflow-hidden">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-100">
            Dedicated to Continuous Learning &amp; Professional Integrity
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Combining rigorous spreadsheet precision, practical accounting standards, and ethical business conduct.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/skills"
              className="px-6 py-3 rounded-xl bg-cyan hover:bg-cyan/90 text-slate-950 font-bold text-sm shadow-lg shadow-cyan/25 transition-all inline-flex items-center gap-2"
            >
              <span>Explore Skills Matrix</span>
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-all"
            >
              View Biography &amp; Profile
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
