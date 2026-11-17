"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  FileSpreadsheet,
  Calculator,
  Presentation,
  Play,
  Pause,
  Maximize2,
} from "lucide-react";

export function ProjectSlider() {
  // We take the top 3 flagship projects
  const sliderProjects = projectsData.slice(0, 3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const SLIDE_DURATION = 6000; // 6 seconds per slide
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % sliderProjects.length);
    setProgress(0);
  }, [sliderProjects.length]);

  const prevSlide = useCallback(() => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + sliderProjects.length) % sliderProjects.length);
    setProgress(0);
  }, [sliderProjects.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? "next" : "prev");
    setCurrentIndex(index);
    setProgress(0);
  };

  // Auto-play effect with smooth progress bar
  useEffect(() => {
    if (!isPlaying) {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      return;
    }

    const intervalTime = 50; // update progress every 50ms
    const step = (intervalTime / SLIDE_DURATION) * 100;

    progressTimerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [isPlaying, nextSlide]);

  const activeProject = sliderProjects[currentIndex];

  const getProjectIcon = (index: number) => {
    switch (index) {
      case 0:
        return FileSpreadsheet;
      case 1:
        return Calculator;
      case 2:
        return Presentation;
      default:
        return TrendingUp;
    }
  };

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-slate-950/90 dark:bg-canvas-deep/95 border border-slate-800/90 shadow-2xl">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Header & 3-Project Selector Tabs (स্লাইডার লেআউটে তিনটা প্রজেক্টের নাম) */}
      <div className="relative z-10 px-5 sm:px-8 pt-7 pb-4 border-b border-slate-800/80">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan text-xs font-mono font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan" />
              <span>FLAGSHIP PROJECTS SLIDER // 03 SIGNATURE BUILDS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Executive Portfolio Showcase
            </h2>
          </div>

          {/* Controls: Play/Pause, Prev, Next */}
          <div className="flex items-center gap-2 self-start lg:self-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
              className="p-2 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-cyan text-slate-300 hover:text-cyan transition-all text-xs flex items-center gap-1.5 cursor-pointer"
              title={isPlaying ? "Pause automatic slide change" : "Play automatic slide change"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-cyan text-cyan" />}
              <span className="text-xs font-mono font-medium hidden sm:inline">{isPlaying ? "Auto" : "Paused"}</span>
            </button>

            <button
              onClick={prevSlide}
              aria-label="Previous Project"
              className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-cyan text-slate-300 hover:text-white hover:bg-slate-800 transition-all cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next Project"
              className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-cyan text-slate-300 hover:text-white hover:bg-slate-800 transition-all cursor-pointer shadow-md"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* 3 Prominent Project Names as Interactive Navigation Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3">
          {sliderProjects.map((project, idx) => {
            const Icon = getProjectIcon(idx);
            const isActive = idx === currentIndex;

            return (
              <button
                key={project.id}
                onClick={() => goToSlide(idx)}
                className={`relative text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 cursor-pointer border flex flex-col justify-between overflow-hidden ${
                  isActive
                    ? "bg-slate-900/90 border-cyan/60 shadow-lg shadow-cyan/10"
                    : "bg-slate-900/40 hover:bg-slate-900/70 border-slate-800 hover:border-slate-700"
                }`}
              >
                {/* Active progress indicator line at the top */}
                {isActive && isPlaying && (
                  <div
                    className="absolute top-0 left-0 h-1 bg-gradient-to-r from-cyan to-teal-400 transition-all"
                    style={{ width: `${progress}%` }}
                  />
                )}
                {isActive && !isPlaying && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-cyan" />
                )}

                <div className="flex items-center gap-2 mb-1.5">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      isActive
                        ? "bg-cyan/20 text-cyan border border-cyan/40"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    0{idx + 1} // {project.category}
                  </span>
                </div>

                <div className="font-bold text-xs sm:text-sm text-slate-100 line-clamp-1">
                  {project.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Slide Presentation Body */}
      <div className="relative z-10 p-5 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual Showcase (High-Res 16:9 Image Card) */}
          <div className="lg:col-span-7 relative group">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl">
              <Image
                src={activeProject.coverImage}
                alt={activeProject.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              {/* Gradient edge overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Top Badges */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-cyan/40 text-[11px] font-mono font-semibold text-cyan shadow-lg">
                  VERIFIED FLAGSHIP BUILD
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-950/85 backdrop-blur-md border border-emerald-500/40 text-[11px] font-mono font-semibold text-emerald-400 flex items-center gap-1 shadow-lg">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>100% Precision</span>
                </span>
              </div>

              {/* Bottom Expand Overlay Button */}
              <div className="absolute bottom-3.5 right-3.5">
                <button
                  onClick={() => setSelectedImage(activeProject.coverImage)}
                  aria-label="View Full Resolution Image"
                  className="px-3 py-1.5 rounded-xl bg-slate-950/90 hover:bg-cyan hover:text-slate-950 text-slate-200 border border-slate-700/80 hover:border-cyan text-xs font-medium flex items-center gap-1.5 backdrop-blur-md transition-all shadow-xl cursor-pointer"
                  title="Expand to Fullscreen View"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>View 4K Visual</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Project Details & Value Proposition */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Status */}
              <div className="flex items-center gap-2.5 mb-3">
                <span className="px-3 py-1 rounded-md bg-electric-950 border border-electric-500/30 text-electric-400 text-xs font-mono font-bold uppercase">
                  {activeProject.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Slide {currentIndex + 1} of 3
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                {activeProject.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                {activeProject.shortDescription}
              </p>
            </div>

            {/* Core Capability Highlights / Metrics */}
            <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-slate-800/80">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Architecture</div>
                <div className="text-xs font-bold text-cyan mt-0.5">
                  {currentIndex === 0 ? "Dynamic Formula Models" : currentIndex === 1 ? "Double-Entry Ledger" : "C-Suite Presentation"}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Accuracy Rate</div>
                <div className="text-xs font-bold text-emerald-400 mt-0.5">
                  100% Zero-Error Standard
                </div>
              </div>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5">
              {activeProject.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700/60 text-[11px] font-mono text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href={`/projects/${activeProject.slug}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-electric-600 via-cyan to-teal-400 hover:from-electric-500 hover:to-teal-300 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-cyan/25 hover:scale-[1.02] transition-all cursor-pointer"
              >
                <span>Explore Deep Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => setSelectedImage(activeProject.coverImage)}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 font-medium text-xs sm:text-sm transition-all cursor-pointer"
              >
                <ExternalLink className="w-4 h-4 text-cyan" />
                <span>Showcase Image</span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Slider Footer: Counter and Dots */}
      <div className="relative z-10 px-6 py-4 border-t border-slate-800/80 bg-slate-950/60 flex items-center justify-between">
        <div className="text-xs font-mono text-slate-400">
          Showing <span className="text-cyan font-bold">0{currentIndex + 1}</span> / 03 Signature Projects
        </div>

        {/* Dots Pagination */}
        <div className="flex items-center gap-2">
          {sliderProjects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all rounded-full cursor-pointer ${
                idx === currentIndex
                  ? "w-8 h-2 bg-gradient-to-r from-cyan to-teal-400 shadow-sm shadow-cyan"
                  : "w-2 h-2 bg-slate-700 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 4K Image Modal (Fullscreen Viewer) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
              <span className="text-xs font-mono text-cyan font-semibold">
                High-Resolution Project Preview
              </span>
              <button
                onClick={() => setSelectedImage(null)}
                className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold cursor-pointer"
              >
                ✕ Close
              </button>
            </div>
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={selectedImage}
                alt="Fullscreen Project Showcase"
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
