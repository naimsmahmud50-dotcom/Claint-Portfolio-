"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { useLanguage } from "../providers/LanguageProvider";
import { Mail, MessageSquare, ExternalLink, ShieldCheck, Phone } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 dark:bg-canvas-deep text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Top row: Identity and Page Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800/60">
          <div className="text-center md:text-left">
            <Link href="/" className="inline-block font-bold text-lg text-slate-100 hover:text-cyan transition-colors">
              {profileData.name}
            </Link>
            <p className="text-xs text-slate-300 mt-0.5 font-medium">
              {t.footer.description}
            </p>
            <div className="mt-1.5 flex items-center justify-center md:justify-start gap-1.5 text-xs text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.hero.availability}</span>
            </div>
          </div>

          {/* Quick Page Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono font-medium text-slate-300">
            <Link href="/" className="hover:text-cyan transition-colors">Home</Link>
            <span className="text-slate-700">•</span>
            <Link href="/projects" className="hover:text-cyan transition-colors">{t.navbar.navLinks.projects}</Link>
            <span className="text-slate-700">•</span>
            <Link href="/services" className="hover:text-cyan transition-colors">{t.navbar.navLinks.services}</Link>
            <span className="text-slate-700">•</span>
            <Link href="/skills" className="hover:text-cyan transition-colors">{t.navbar.navLinks.skills}</Link>
            <span className="text-slate-700">•</span>
            <Link href="/about" className="hover:text-cyan transition-colors">{t.navbar.navLinks.about}</Link>
            <span className="text-slate-700">•</span>
            <Link href="/credentials" className="hover:text-cyan transition-colors">{t.navbar.navLinks.credentials}</Link>
            <span className="text-slate-700">•</span>
            <Link href="/systems" className="hover:text-cyan transition-colors">{t.systems.title}</Link>
            <span className="text-slate-700">•</span>
            <Link href="/contact" className="hover:text-cyan transition-colors">{t.navbar.navLinks.contact}</Link>
          </nav>
        </div>

        {/* Middle row: Social & Direct channels */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-slate-300">
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href={`mailto:${profileData.contacts.primaryEmail}`}
              className="flex items-center gap-1.5 hover:text-cyan transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{t.hero.email}</span>
            </a>
            <a
              href={`https://wa.me/${profileData.contacts.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{t.hero.whatsapp}</span>
            </a>
            <a
              href={`tel:+${profileData.contacts.whatsappNumber}`}
              className="flex items-center gap-1.5 hover:text-cyan transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{t.hero.direct}</span>
            </a>
          </div>

          {/* Right copyright & Admin link */}
          <div className="text-center sm:text-right text-xs text-slate-400">
            <p>{t.footer.copyright}</p>
            <p className="mt-1 flex items-center justify-center sm:justify-end gap-1 text-xs text-slate-400">
              <ShieldCheck className="w-3 h-3 text-cyan" />
              <span>Built with modern engineering &amp; security</span>
              <span className="mx-1.5">•</span>
              <Link href="/admin" className="hover:text-cyan text-slate-300 transition-colors">
                Console
              </Link>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
