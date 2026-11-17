import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { AboutSection } from "@/components/home/AboutSection";
import { ArrowLeft, Sparkles, User, FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Eyakub Mahmud | MS Office & Practical Accounting Specialist",
  description:
    "Learn about Eyakub Mahmud's journey, professional capabilities, and verified credentials across MS Office applications, advanced Excel, practical accounting, and digital solutions.",
};

export default function AboutPage() {
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
          <span className="text-cyan font-semibold">About Eyakub</span>
        </div>
      </div>

      {/* About Section & Executive Benchmarks */}
      <AboutSection />

      {/* Bottom Navigation Pathways */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/credentials"
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan/40 hover:bg-slate-900 transition-all group"
          >
            <span className="text-xs font-mono text-cyan block mb-2 font-semibold">// CREDENTIALS</span>
            <h4 className="text-base font-bold text-slate-100 group-hover:text-cyan transition-colors">
              Verified Training &amp; Skills
            </h4>
            <p className="mt-2 text-xs text-slate-300">
              Inspect practical certifications in MS Office, Excel, and accounting.
            </p>
          </Link>

          <Link
            href="/projects"
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan/40 hover:bg-slate-900 transition-all group"
          >
            <span className="text-xs font-mono text-emerald-400 block mb-2 font-semibold">// SHOWCASE</span>
            <h4 className="text-base font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
              Selected Practice Projects
            </h4>
            <p className="mt-2 text-xs text-slate-300">
              Review formula-driven payroll models, product mockups, and presentations.
            </p>
          </Link>

          <Link
            href="/contact"
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan/40 hover:bg-slate-900 transition-all group"
          >
            <span className="text-xs font-mono text-amber-400 block mb-2 font-semibold">// INITIATE</span>
            <h4 className="text-base font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
              Work With Eyakub
            </h4>
            <p className="mt-2 text-xs text-slate-300">
              Reach out directly via email, WhatsApp, or discuss a project.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
