import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { ExecutiveDomainGrid } from "@/components/home/ExecutiveDomainGrid";
import { ProjectSlider } from "@/components/projects/ProjectSlider";

export default function HomePage() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero: High-impact Identity, Animated Typewriter, Real Portrait & Interactive CLI Terminal */}
      <HeroSection />

      {/* 2. Flagship Project Slider: Top 3 Signature Builds across Excel, Accounting, and PowerPoint */}
      <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
        <ProjectSlider />
      </section>

      {/* 3. Executive Exploration Portals: 4 High-Impact Domains with Direct Discrete Page Routing */}
      <ExecutiveDomainGrid />
    </main>
  );
}
