"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, Shield, Cpu, Sparkles, CheckCircle2, CornerDownLeft, Play } from "lucide-react";
import { profileData } from "@/data/profile";

interface TerminalLine {
  id: string;
  type: "input" | "output" | "system" | "agent";
  text: string;
  timestamp?: string;
}

const PRESET_COMMANDS = ["status", "skills", "projects", "services", "contact", "clear"];

export function HeroTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      id: "init-1",
      type: "system",
      text: "[SYSTEM] EYAKUB MAHMUD DIGITAL PORTAL v2.6.0 [INITIALIZED]",
    },
    {
      id: "init-2",
      type: "system",
      text: "[CORE ENGINE] MS Office Application Suite & Practical Accounting Engine: ACTIVE",
    },
    {
      id: "init-3",
      type: "output",
      text: 'Type a command or click a quick chip below (e.g. "skills", "projects", "status", "contact")',
    },
  ]);

  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines, isRunning]);

  const executeCommand = async (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const userLine: TerminalLine = {
      id: `in-${Date.now()}`,
      type: "input",
      text: `$ ${cmd.trim()}`,
      timestamp: new Date().toLocaleTimeString(),
    };

    setLines((prev) => [...prev, userLine]);
    setInputVal("");

    if (trimmed === "clear") {
      setLines([
        {
          id: `init-${Date.now()}`,
          type: "system",
          text: "[SYSTEM] Terminal display cleared. Ready for next command.",
        },
      ]);
      return;
    }

    if (trimmed === "projects") {
      setLines((prev) => [
        ...prev,
        {
          id: `out-${Date.now()}-1`,
          type: "system",
          text: "[FLAGSHIP PROJECTS & CASE STUDIES]",
        },
        {
          id: `out-${Date.now()}-2`,
          type: "output",
          text: "  1. Monthly Salary Break-up & Payroll: Multi-component formula engine in MS Excel",
        },
        {
          id: `out-${Date.now()}-3`,
          type: "output",
          text: "  2. Employee Payroll Master Sheet: High-density corporate staff reconciliation",
        },
        {
          id: `out-${Date.now()}-4`,
          type: "output",
          text: "  3. Honey Nature – Organic Product Visual: Luxury Photoshop packaging & 3D mockup",
        },
        {
          id: `out-${Date.now()}-5`,
          type: "output",
          text: "  4. Attar – Royal Fragrance Branding: Premium Arabian perfume visual identity",
        },
        {
          id: `out-${Date.now()}-6`,
          type: "output",
          text: "  5. Executive Corporate Pitch Deck: Animated PowerPoint slide master architecture",
        },
        {
          id: `out-${Date.now()}-7`,
          type: "output",
          text: "  6. Meta Ads & Lead Automation: Facebook Lead Ads to Google Sheets via Zapier",
        },
        {
          id: `out-${Date.now()}-8`,
          type: "output",
          text: "  -> Visit /projects to view complete architectures and live case studies.",
        },
      ]);
      return;
    }

    if (trimmed === "status") {
      setLines((prev) => [
        ...prev,
        {
          id: `out-${Date.now()}-1`,
          type: "output",
          text: "[STATUS] EYAKUB MAHMUD PORTAL: 100% OPERATIONAL",
        },
        {
          id: `out-${Date.now()}-2`,
          type: "output",
          text: "  - Primary Focus : MS Office Suite (Excel, Word, PowerPoint) & Practical Accounting",
        },
        {
          id: `out-${Date.now()}-3`,
          type: "output",
          text: "  - Extra Skills   : Meta Marketing, Video Editing, Graphic Design, AI Automation, Islamic Ethics",
        },
        {
          id: `out-${Date.now()}-4`,
          type: "output",
          text: "  - Environment    : Next.js 15 / TypeScript 5 / Tailwind CSS / Framer Motion",
        },
        {
          id: `out-${Date.now()}-5`,
          type: "system",
          text: "  - Availability   : Available for MS Office, Accounting & Digital Contracts",
        },
      ]);
      return;
    }

    if (trimmed === "skills" || trimmed === "stack") {
      setLines((prev) => [
        ...prev,
        {
          id: `out-${Date.now()}-1`,
          type: "system",
          text: "[CORE FOCUS & EXTRA SKILLS ARCHITECTURE]",
        },
        {
          id: `out-${Date.now()}-2`,
          type: "output",
          text: "  ★ MAIN FOCUS 1 : MS Office Application (Excel Formulas, Word Layouts, PowerPoint Decks)",
        },
        {
          id: `out-${Date.now()}-3`,
          type: "output",
          text: "  ★ MAIN FOCUS 2 : Practical Accounting (Journal, Ledger, Trial Balance, Payroll, TallyPrime)",
        },
        {
          id: `out-${Date.now()}-4`,
          type: "output",
          text: "  • Extra Skill 1: Meta Marketing (Facebook Page Management, Meta Ads Manager, Lead Funnels)",
        },
        {
          id: `out-${Date.now()}-5`,
          type: "output",
          text: "  • Extra Skill 2: Video Editing (Adobe Premiere Pro, After Effects, Reels, DaVinci Resolve)",
        },
        {
          id: `out-${Date.now()}-6`,
          type: "output",
          text: "  • Extra Skill 3: Graphic Design (Adobe Photoshop, Illustrator, Brand Identity, Mockups)",
        },
        {
          id: `out-${Date.now()}-7`,
          type: "output",
          text: "  • Extra Skill 4: AI Automation (ChatGPT, Microsoft Copilot, Zapier, Make, Form-to-Sheet)",
        },
        {
          id: `out-${Date.now()}-8`,
          type: "output",
          text: "  • Extra Skill 5: Foundational Islamic Knowledge (Islamic Business Ethics, Halal Accounting, Amanah)",
        },
      ]);
      return;
    }

    if (trimmed === "contact") {
      setLines((prev) => [
        ...prev,
        {
          id: `out-${Date.now()}-1`,
          type: "system",
          text: "[DIRECT CONTACT CHANNELS - EYAKUB MAHMUD]",
        },
        {
          id: `out-${Date.now()}-2`,
          type: "output",
          text: `  • Name          : ${profileData.name}`,
        },
        {
          id: `out-${Date.now()}-3`,
          type: "output",
          text: `  • Primary Email : ${profileData.contacts.primaryEmail}`,
        },
        {
          id: `out-${Date.now()}-4`,
          type: "output",
          text: `  • Direct Phone  : ${profileData.contacts.whatsappDisplay}`,
        },
        {
          id: `out-${Date.now()}-5`,
          type: "output",
          text: `  • Direct WhatsApp: +${profileData.contacts.whatsappNumber}`,
        },
        {
          id: `out-${Date.now()}-6`,
          type: "output",
          text: `  • Location      : Dhaka, Bangladesh`,
        },
      ]);
      return;
    }

    if (trimmed === "resume" || trimmed === "cv") {
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("open-resume-modal"));
      }
      setLines((prev) => [
        ...prev,
        {
          id: `out-${Date.now()}-1`,
          type: "system",
          text: "[RESUME MODAL] Launching Executive Resume Preview...",
        },
        {
          id: `out-${Date.now()}-2`,
          type: "output",
          text: "  - Full verified credentials, practical skills breakdown, and PDF print preview opened.",
        },
      ]);
      return;
    }

    if (trimmed === "services") {
      setLines((prev) => [
        ...prev,
        {
          id: `out-${Date.now()}-1`,
          type: "system",
          text: "[CORE SERVICES & CAPABILITIES]",
        },
        {
          id: `out-${Date.now()}-2`,
          type: "output",
          text: "  1. Advanced MS Excel & Spreadsheet Automation (Formulas, PivotTables, Dashboards)",
        },
        {
          id: `out-${Date.now()}-3`,
          type: "output",
          text: "  2. Practical Accounting & Bookkeeping (Journal, Ledger, Reconciliation, TallyPrime)",
        },
        {
          id: `out-${Date.now()}-4`,
          type: "output",
          text: "  3. Executive Payroll Processing & Salary Management",
        },
        {
          id: `out-${Date.now()}-5`,
          type: "output",
          text: "  4. Executive MS Word Document Formatting & Official Reports",
        },
        {
          id: `out-${Date.now()}-6`,
          type: "output",
          text: "  5. Corporate PowerPoint Pitch Decks & Slide Storytelling",
        },
        {
          id: `out-${Date.now()}-7`,
          type: "output",
          text: "  6. Meta Marketing & Targeted Ad Campaigns",
        },
      ]);
      return;
    }

    if (trimmed === "sprints") {
      setLines((prev) => [
        ...prev,
        {
          id: `out-${Date.now()}-1`,
          type: "system",
          text: "[ENGAGEMENT MODELS & SCOPES]",
        },
        {
          id: `out-${Date.now()}-2`,
          type: "output",
          text: "  • [SPRINT 01] MS Excel & Spreadsheet Automation (3-5 Days Turnaround)",
        },
        {
          id: `out-${Date.now()}-3`,
          type: "output",
          text: "  • [SPRINT 02] Practical Accounting Setup & Payroll System (1-2 Weeks)",
        },
        {
          id: `out-${Date.now()}-4`,
          type: "output",
          text: "  • [SPRINT 03] Corporate Presentation Deck & Documentation (2-4 Days)",
        },
        {
          id: `out-${Date.now()}-5`,
          type: "output",
          text: "  • [SPRINT 04] Meta Lead Generation & Automated Funnel Setup (1 Week)",
        },
      ]);
      return;
    }

    if (trimmed === "book" || trimmed === "hire" || trimmed === "discovery") {
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("open-discovery-modal", {
            detail: { sprint: "VIP Project Discussion" },
          })
        );
      }
      setLines((prev) => [
        ...prev,
        {
          id: `out-${Date.now()}-1`,
          type: "system",
          text: "[PROJECT DISCUSSION] Opening Direct Contact Dialogue...",
        },
        {
          id: `out-${Date.now()}-2`,
          type: "output",
          text: "  - Instant WhatsApp VIP dialogue and email contact loaded.",
        },
      ]);
      return;
    }

    if (trimmed === "help") {
      setLines((prev) => [
        ...prev,
        {
          id: `out-${Date.now()}-1`,
          type: "output",
          text: "AVAILABLE COMMANDS: skills, projects, services, status, sprints, diagnostics, book, resume, contact, clear, help",
        },
      ]);
      return;
    }

    if (trimmed === "diagnostics" || trimmed === "benchmark") {
      setIsRunning(true);
      const steps = [
        "1. [VALIDATION] Verifying Next.js 15 App Router endpoints and strict TypeScript types... OK",
        "2. [ASSETS] Validating Eyakub Mahmud portrait images and project graphics... OK",
        "3. [SPREADSHEET] Verifying Excel formula logic and payroll calculation integrity... OK",
        "4. [ACCESSIBILITY] Testing WCAG 2.1 AA keyboard focus, contrast tokens, and reduced-motion... OK",
        "5. [BENCHMARK] All architectural diagnostics passed. 0 anomalies detected.",
      ];

      for (let i = 0; i < steps.length; i++) {
        await new Promise((r) => setTimeout(r, 350));
        setLines((prev) => [
          ...prev,
          {
            id: `agent-${Date.now()}-${i}`,
            type: "agent",
            text: steps[i],
          },
        ]);
      }
      setIsRunning(false);
      return;
    }

    // Unrecognized command
    setLines((prev) => [
      ...prev,
      {
        id: `err-${Date.now()}`,
        type: "output",
        text: `Command not recognized: "${cmd}". Type "help" or click one of the quick chips.`,
      },
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isRunning) {
      executeCommand(inputVal);
    }
  };

  return (
    <div className="hero-terminal w-full rounded-2xl tech-card border-slate-800 dark:border-electric-500/30 overflow-hidden shadow-2xl backdrop-blur-xl bg-slate-950 text-left font-mono">
      {/* Terminal Titlebar */}
      <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs text-slate-200 font-semibold flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan" />
            <span>eyakub-portal // interactive-terminal</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>CORE READY</span>
          </span>
          <span className="text-xs font-mono text-slate-300 hidden sm:inline">10ms</span>
        </div>
      </div>

      {/* Terminal Log Screen */}
      <div
        ref={outputRef}
        className="p-4 sm:p-5 h-52 sm:h-60 overflow-y-auto space-y-1.5 text-xs text-slate-200 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800"
      >
        {lines.map((l) => {
          if (l.type === "input") {
            return (
              <div key={l.id} className="text-cyan font-bold flex items-center gap-1">
                <span>{l.text}</span>
              </div>
            );
          }
          if (l.type === "system") {
            return (
              <div key={l.id} className="text-emerald-300 text-xs font-semibold">
                {l.text}
              </div>
            );
          }
          if (l.type === "agent") {
            return (
              <div key={l.id} className="text-purple-300 pl-2 border-l-2 border-purple-500/60 text-xs">
                {l.text}
              </div>
            );
          }
          return (
            <div key={l.id} className="text-slate-200 text-xs whitespace-pre-wrap font-normal">
              {l.text}
            </div>
          );
        })}

        {isRunning && (
          <div className="text-cyan text-xs animate-pulse flex items-center gap-1.5 font-bold">
            <span className="w-2 h-2 rounded-full bg-cyan animate-ping" />
            <span>Processing diagnostic checks...</span>
          </div>
        )}
      </div>

      {/* Command Pills for 1-Click Execution */}
      <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
        <span className="text-xs text-slate-300 font-sans font-semibold mr-1">Quick Run:</span>
        {PRESET_COMMANDS.map((cmd) => (
          <button
            key={cmd}
            disabled={isRunning}
            onClick={() => executeCommand(cmd)}
            className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-cyan border border-slate-700/80 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40 font-medium cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Interactive Command Input Line */}
      <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800/90 flex items-center gap-2">
        <span className="text-cyan font-bold">$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isRunning}
          placeholder={isRunning ? "Processing command..." : "Type command ('skills', 'projects', 'contact') and hit Enter..."}
          className="flex-1 bg-transparent text-slate-100 text-xs placeholder:text-slate-400 outline-none"
        />
        <button
          onClick={() => executeCommand(inputVal)}
          disabled={isRunning || !inputVal.trim()}
          className="p-1 rounded bg-slate-800 hover:bg-cyan hover:text-slate-950 text-slate-300 transition-colors disabled:opacity-30"
          title="Send Command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
