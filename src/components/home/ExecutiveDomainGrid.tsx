"use client";

import React from "react";
import Link from "next/link";
import {
  FolderGit2,
  Layers,
  Workflow,
  User,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ExternalLink,
  FileSpreadsheet,
  Calculator,
} from "lucide-react";

interface DomainCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  badgeColor: string;
  href: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  borderColor: string;
  hoverBorder: string;
  glowColor: string;
  features: string[];
  ctaLabel: string;
}

const domainCards: DomainCard[] = [
  {
    id: "projects",
    title: "Selected Practice Projects",
    subtitle: "Real-World Spreadsheet & Creative Showcases",
    description:
      "Explore formula-driven spreadsheet models, corporate payroll systems, product packaging mockups, and automated lead capture workflows.",
    badge: "Practical Showcases",
    badgeColor: "bg-cyan/15 text-cyan border-cyan/40",
    href: "/projects",
    icon: FolderGit2,
    iconColor: "text-cyan",
    iconBg: "bg-cyan/10 border-cyan/30",
    borderColor: "border-slate-800",
    hoverBorder: "hover:border-cyan/50",
    glowColor: "from-cyan/20 to-transparent",
    features: [
      "Monthly Salary Break-up & Payroll System",
      "Employee Payroll Master Sheet & HR Analytics",
      "Honey Nature & Royal Attar Packaging",
    ],
    ctaLabel: "View All Projects",
  },
  {
    id: "services",
    title: "Services, Solutions & Packages",
    subtitle: "Precision Delivery & Verified Standards",
    description:
      "Professional MS Office formatting, advanced Excel automation, practical accounting, bookkeeping, and high-converting marketing creatives.",
    badge: "Core & Extra Services",
    badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/40",
    href: "/services",
    icon: Layers,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/30",
    borderColor: "border-slate-800",
    hoverBorder: "hover:border-blue-500/50",
    glowColor: "from-blue-500/20 to-transparent",
    features: [
      "MS Excel & Spreadsheet Automation",
      "Practical Accounting & Payroll Processing",
      "PowerPoint Pitch Decks & Video Editing",
    ],
    ctaLabel: "Explore Services & Solutions",
  },
  {
    id: "systems",
    title: "Execution Workflow & Quality",
    subtitle: "Precision Modeling & Verified Accuracy",
    description:
      "Inspect the structured methodology that coordinates data sanitization, formula verification, audit balancing, and client delivery.",
    badge: "Standardized Workflow",
    badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/40",
    href: "/systems",
    icon: Workflow,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/30",
    borderColor: "border-slate-800",
    hoverBorder: "hover:border-emerald-500/50",
    glowColor: "from-emerald-500/20 to-transparent",
    features: [
      "Formula Validation & Error Catching",
      "Double-Entry General Ledger Balancing",
      "Islamic Commercial Ethics & Amanah",
    ],
    ctaLabel: "Inspect Workflow & Standards",
  },
  {
    id: "about",
    title: "About Eyakub & Capabilities",
    subtitle: "Continuous Learning, Mission & Values",
    description:
      "Professional profile, core focus areas, practical training milestones, certified credentials, and contact coordinates.",
    badge: "Professional Profile",
    badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/40",
    href: "/about",
    icon: User,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10 border-amber-500/30",
    borderColor: "border-slate-800",
    hoverBorder: "hover:border-amber-500/50",
    glowColor: "from-amber-500/20 to-transparent",
    features: [
      "MS Office & Advanced Excel (Core Focus)",
      "Practical Accounting & Payroll (Core Focus)",
      "Creative Media, Meta Ads & AI (Extra Skills)",
    ],
    ctaLabel: "Read Profile & Credentials",
  },
];

export function ExecutiveDomainGrid() {
  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Professional Exploration Portal</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-100">
          Core Focus &amp; Practical Domains
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          Select a domain below to explore dedicated practice showcases, solution packages, or technical capabilities.
        </p>
      </div>

      {/* 4-Card Executive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {domainCards.map((card) => {
          const Icon = card.icon;

          return (
            <Link
              key={card.id}
              href={card.href}
              className={`group relative p-6 sm:p-8 rounded-3xl bg-slate-900/60 dark:bg-canvas-card/70 border ${card.borderColor} ${card.hoverBorder} backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden flex flex-col justify-between`}
            >
              {/* Subtle Ambient Radial Highlight on Hover */}
              <div
                className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${card.glowColor} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div>
                {/* Header: Icon + Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div
                    className={`w-12 h-12 rounded-2xl ${card.iconBg} border flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon className={`w-6 h-6 ${card.iconColor}`} />
                  </div>
                  <span
                    className={`text-[11px] font-mono font-semibold px-3 py-1 rounded-full border ${card.badgeColor} shadow-sm`}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <span className="text-xs font-mono text-cyan font-semibold tracking-wider uppercase block mb-1">
                  {card.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-cyan transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {card.description}
                </p>

                {/* Features Bullet List */}
                <ul className="mt-5 space-y-2 text-xs sm:text-sm text-slate-200">
                  {card.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA Arrow Link */}
              <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-200 group-hover:text-cyan transition-colors">
                <span>{card.ctaLabel}</span>
                <div className="w-8 h-8 rounded-full bg-slate-800 group-hover:bg-cyan group-hover:text-slate-950 flex items-center justify-center transition-all duration-300 shadow-sm">
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
