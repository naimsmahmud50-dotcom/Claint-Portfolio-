"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../providers/ThemeProvider";
import { profileData } from "@/data/profile";
import {
  Menu,
  X,
  Sun,
  Moon,
  Search,
  ArrowRight,
  Mail,
  MessageSquare,
  Phone,
} from "lucide-react";
import { primaryNavLinks } from "@/data/navigation";

export function Navbar() {
  const pathname = usePathname();
  const { setTheme, isDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Mount animation trigger for slide-down entrance
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile drawer when navigating to a new route
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Track header scroll state for backdrop styling & elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isItemActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 pointer-events-none transition-all duration-500 ease-out ${
        mounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
      }`}
    >
      {/* Outer padding container that smoothly adjusts on scroll */}
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled ? "pt-2.5 sm:pt-3" : "pt-4 sm:pt-5"
        }`}
      >
        {/* Floating Island Glass Capsule */}
        <div
          className={`pointer-events-auto transition-all duration-300 ease-out rounded-2xl lg:rounded-full border flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 ${
            scrolled
              ? "bg-slate-950/90 dark:bg-slate-950/90 backdrop-blur-2xl border-slate-700/80 dark:border-slate-800/80 shadow-2xl shadow-black/50"
              : "bg-slate-950/75 dark:bg-slate-950/75 backdrop-blur-xl border-slate-700/50 dark:border-white/[0.12] shadow-xl shadow-black/30"
          }`}
        >
          {/* Brand Identity: Sleek Monogram & Name */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 text-slate-100 hover:text-cyan transition-colors group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded-lg"
            aria-label="Eyakub Mahmud - Home"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-electric-500 via-cyan to-teal-400 p-[1.5px] shadow-md shadow-cyan/30 group-hover:scale-105 group-hover:shadow-cyan/50 transition-all duration-200">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-xs sm:text-sm text-cyan group-hover:text-white transition-colors">
                  EM
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tight text-sm sm:text-base text-white group-hover:text-cyan transition-colors">
                {profileData.name}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-[11px] font-mono font-semibold text-emerald-400 shadow-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                <span>Available</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation: Centered Sleek Floating Pill Menu */}
          <nav
            className="hidden lg:flex items-center gap-1.5 px-2 py-1 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-md"
            aria-label="Main Navigation"
          >
            {primaryNavLinks.map((item) => {
              const isActive = isItemActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-xs xl:text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${
                    isActive
                      ? "text-cyan bg-cyan/15 border border-cyan/40 shadow-sm shadow-cyan/20 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/80"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Minimalist Utility Dock */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Quick Search Trigger (Cmd+K) */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
              aria-label="Open Command Palette (Ctrl+K)"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-slate-300 hover:text-cyan hover:bg-slate-800/80 border border-slate-700/60 hover:border-cyan/40 transition-all text-xs font-mono group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
              title="Search portfolio & actions (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan transition-colors" />
              <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 group-hover:text-cyan border border-slate-700 font-mono font-medium">
                ⌘K
              </kbd>
            </button>

            {/* Subtle Divider */}
            <div className="w-px h-4 bg-slate-800 hidden sm:block" />

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              className="p-2 text-slate-400 hover:text-amber-300 hover:bg-slate-800/80 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-300" />
              )}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-xl transition-colors cursor-pointer ml-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE RESPONSIVE GLASS DRAWER
          ========================================================================= */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 pointer-events-auto lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Backdrop overlay */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-slate-950/60 dark:bg-black/75 backdrop-blur-sm transition-opacity animate-in fade-in duration-200 cursor-pointer"
            aria-hidden="true"
          />

          {/* Centered Floating Glass Dropdown Card */}
          <div className="fixed top-20 inset-x-4 max-w-md mx-auto bg-white/95 dark:bg-slate-950/95 border border-slate-200/90 dark:border-slate-800/90 shadow-2xl backdrop-blur-2xl rounded-2xl p-5 animate-in slide-in-from-top-3 duration-300 max-h-[85vh] overflow-y-auto">
            {/* Mobile Drawer Header */}
            <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-slate-200/80 dark:border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-electric-500 via-cyan to-teal-400 p-[1.5px] flex items-center justify-center">
                  <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[6px] flex items-center justify-center">
                    <span className="font-mono font-bold text-[11px] text-cyan-700 dark:text-cyan">
                      EM
                    </span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-slate-100">
                    {profileData.name}
                  </div>
                  <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Available for work</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Search Row */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent("open-command-palette"));
              }}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan hover:border-cyan/40 transition-all mb-4 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
            >
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-slate-400 group-hover:text-cyan-700 dark:group-hover:text-cyan transition-colors" />
                <span>Search portfolio & actions...</span>
              </div>
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 text-[10px] text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                ⌘K
              </kbd>
            </button>

            {/* Mobile Nav Links */}
            <div className="space-y-1">
              {primaryNavLinks.map((item) => {
                const isActive = isItemActive(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`min-h-[44px] px-3.5 py-2.5 rounded-xl transition-all flex items-center justify-between text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${
                      isActive
                        ? "bg-cyan-500/15 dark:bg-cyan/15 text-cyan-700 dark:text-cyan border border-cyan-500/30 dark:border-cyan/40 font-semibold shadow-sm shadow-cyan/10"
                        : "text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/90 dark:hover:bg-slate-900/70 font-medium"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isActive
                          ? "text-cyan-700 dark:text-cyan"
                          : "text-slate-400 dark:text-slate-500 group-hover:translate-x-1"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Footer Channels */}
            <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs">
              <span className="font-mono text-slate-500 dark:text-slate-400 text-[11px] truncate max-w-[190px]">
                {profileData.contacts.primaryEmail}
              </span>
              <div className="flex items-center gap-1.5">
                <a
                  href={profileData.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="p-2 text-slate-500 dark:text-slate-400 hover:text-emerald-500 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socials.email}
                  aria-label="Send Email"
                  className="p-2 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socials.phone}
                  aria-label="Call Direct"
                  className="p-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
