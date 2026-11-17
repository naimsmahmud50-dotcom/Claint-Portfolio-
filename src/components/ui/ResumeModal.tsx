"use client";

import React, { useEffect } from "react";
import { profileData } from "@/data/profile";
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Building,
  GraduationCap,
  Award,
  FileSpreadsheet,
  Calculator,
  Briefcase,
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in print:p-0 print:bg-white"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden print:max-h-none print:border-none print:shadow-none print:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Action Bar (Hidden on Print) */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-semibold text-slate-200">
              EYAKUB_MAHMUD_EXECUTIVE_PROFILE.pdf
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-cyan border border-slate-700 text-xs font-medium transition-all cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-950 text-slate-100 print:p-0 print:bg-white print:text-slate-900 print:overflow-visible">
          
          {/* Header Block */}
          <div className="border-b border-slate-800 pb-6 print:border-slate-300">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-slate-900 tracking-tight">
                  {profileData.name}
                </h1>
                <p className="text-sm font-semibold text-cyan print:text-blue-700 mt-1">
                  {profileData.primaryRole}
                </p>
                <p className="text-xs text-slate-300 print:text-slate-600 mt-1 font-medium">
                  Dhaka, Bangladesh • Available for Contracts, Corporate Roles &amp; Consulting
                </p>
              </div>

              {/* Direct Coordinate Links */}
              <div className="text-xs space-y-1 font-mono text-slate-200 print:text-slate-700 font-medium">
                <p className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan print:text-blue-600 shrink-0" />
                  <a href={`mailto:${profileData.contacts.primaryEmail}`} className="hover:underline">
                    {profileData.contacts.primaryEmail}
                  </a>
                </p>
                <p className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 print:text-emerald-600 shrink-0" />
                  <span>+{profileData.contacts.whatsappNumber} (Phone / WhatsApp)</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-slate-300 print:text-slate-700 shrink-0" />
                  <span>Dhaka, Bangladesh</span>
                </p>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan font-bold mb-2 print:text-blue-800">
              // EXECUTIVE SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 print:text-slate-700 leading-relaxed font-normal">
              Results-oriented MS Office &amp; Practical Accounting Specialist with extensive hands-on expertise in advanced Microsoft Excel formula modeling (VLOOKUP, XLOOKUP, INDEX-MATCH, SUMIFS), executive Word documentation, and corporate PowerPoint presentation decks. Demonstrated proficiency in double-entry bookkeeping, general ledger, payroll break-up computation, and TallyPrime. Complemented by active capabilities in Meta Marketing, commercial video editing (Premiere Pro), graphic design (Photoshop), AI automation workflows, and grounded in foundational Islamic business ethics.
            </p>
          </div>

          {/* Core Competencies Matrix */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan font-bold mb-3 print:text-blue-800">
              // CORE TECHNICAL COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                <span className="font-bold text-white print:text-slate-900 block mb-1">
                  📊 MS Office Application Suite (Core Focus)
                </span>
                <p className="text-slate-300 print:text-slate-600">
                  Microsoft Excel (XLOOKUP, INDEX-MATCH, SUMIFS, PivotTables), Microsoft Word (Executive Reports), Microsoft PowerPoint (Pitch Decks).
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                <span className="font-bold text-white print:text-slate-900 block mb-1">
                  💰 Practical Accounting &amp; Payroll (Core Focus)
                </span>
                <p className="text-slate-300 print:text-slate-600">
                  General Ledger, Journal Entries, Trial Balance, Bank Reconciliation, Payroll Salary Break-up, TallyPrime Accounting.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                <span className="font-bold text-white print:text-slate-900 block mb-1">
                  🎨 Creative Media &amp; Video Editing (Extra Skill)
                </span>
                <p className="text-slate-300 print:text-slate-600">
                  Adobe Photoshop, Illustrator, Premiere Pro Video Editing, After Effects Motion, Social Media Reels, Packaging Mockups.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                <span className="font-bold text-white print:text-slate-900 block mb-1">
                  ⚡ AI Automation &amp; Islamic Ethics (Extra Skill)
                </span>
                <p className="text-slate-300 print:text-slate-600">
                  Meta Ads Manager, Zapier/Make Form-to-Sheet Pipelines, ChatGPT Prompting, Shariah Commercial Muamalat &amp; Professional Amanah.
                </p>
              </div>
            </div>
          </div>

          {/* Key Implementations & Case Studies */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan font-bold mb-3 print:text-blue-800">
              // FLAGSHIP IMPLEMENTATIONS &amp; CASE STUDIES
            </h2>
            <div className="space-y-4 text-xs">
              
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 print:bg-slate-50 print:border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-sm text-slate-100 print:text-slate-900">
                    Monthly Salary Break-up &amp; Corporate Payroll Engine
                  </h3>
                  <span className="font-mono text-[10px] text-cyan print:text-blue-700">MS Excel Solution</span>
                </div>
                <p className="text-slate-300 print:text-slate-600 mb-2 font-medium">
                  Formula-driven compensation modeling with dynamic allowances, statutory tax brackets, and net payable figures.
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-200 print:text-slate-700">
                  <li>Eliminated 100% of arithmetic errors using structured SUMIFS, nested logic, and cell data validation.</li>
                  <li>Automated employee grade standards and statutory provident fund deductions.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 print:bg-slate-50 print:border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-sm text-slate-100 print:text-slate-900">
                    Employee Payroll Master Sheet &amp; HR Analytics
                  </h3>
                  <span className="font-mono text-[10px] text-cyan print:text-blue-700">MS Excel Solution</span>
                </div>
                <p className="text-slate-300 print:text-slate-600 mb-2 font-medium">
                  High-density staff payroll table with multi-department filtering, bonus calculations, and PivotTable summaries.
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-200 print:text-slate-700">
                  <li>Standardized salary records across divisions with clean print layouts for banking transactions.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 print:bg-slate-50 print:border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-sm text-slate-100 print:text-slate-900">
                    Commercial Product Design &amp; Luxury Branding
                  </h3>
                  <span className="font-mono text-[10px] text-cyan print:text-blue-700">Photoshop &amp; Illustrator</span>
                </div>
                <p className="text-slate-300 print:text-slate-600 mb-2 font-medium">
                  End-to-end packaging concepts for 'Honey Nature' and 'Royal Attar' luxury fragrance line.
                </p>
              </div>

            </div>
          </div>

          {/* Education & Verified Credentials */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan font-bold mb-3 print:text-blue-800">
              // VERIFIED CREDENTIALS &amp; APPLIED TRAINING
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                <span className="font-bold text-white print:text-slate-900 block">
                  MS Office Application &amp; Advanced Excel
                </span>
                <span className="text-cyan print:text-blue-700 block">Professional Digital Skills Academy</span>
                <span className="text-[11px] text-slate-300 print:text-slate-600 font-medium">
                  Advanced formula modeling, PivotTables, Word layouts &amp; corporate PowerPoint decks.
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                <span className="font-bold text-white print:text-slate-900 block">
                  Practical Accounting &amp; Payroll Management
                </span>
                <span className="text-cyan print:text-blue-700 block">Business Financial Training Institute</span>
                <span className="text-[11px] text-slate-400 print:text-slate-600">
                  Double-entry bookkeeping, general ledger, trial balance, and TallyPrime.
                </span>
              </div>
            </div>
          </div>

          {/* Footer Coordinates */}
          <div className="pt-6 border-t border-slate-800 text-center text-xs text-slate-500 print:border-slate-300 print:text-slate-600">
            <p>Eyakub Mahmud • Dhaka, Bangladesh • Phone / WhatsApp: +880 1877-508893</p>
            <p className="mt-1">Available for MS Office projects, accounting workflows, and digital contracts.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
