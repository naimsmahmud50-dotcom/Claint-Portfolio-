import { describe, it, expect } from "vitest";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { credentialsData } from "@/data/credentials";
import { sanitizeOrigin, sanitizePlainText } from "@/utils/sanitize";
import { contactSchema, parseContactSubmission } from "@/utils/contact-schema";
import { validateContactSubmission } from "@/utils/contact-validation";
import { primaryNavLinks } from "@/data/navigation";

describe("Profile Data Validation", () => {
  it("has correct owner identity and direct contact channels", () => {
    expect(profileData.name).toBe("Eyakub Mahmud");
    expect(profileData.contacts.primaryEmail).toBe("eyakubali4125@gmail.com");
    expect(profileData.contacts.whatsappNumber).toBe("8801877508893");
    expect(profileData.socials.whatsapp).toBe("https://wa.me/8801877508893");
    expect(profileData.socials.email).toBe("mailto:eyakubali4125@gmail.com");
    expect(profileData.socials.phone).toBe("tel:+8801877508893");
  });

  it("does not contain any legacy developer usernames or accounts", () => {
    const rawString = JSON.stringify(profileData).toLowerCase();
    expect(rawString).not.toContain("naim");
    expect(rawString).not.toContain("mahmudhasan.dev");
    expect(rawString).not.toContain("naimknows");
  });
});

describe("Sanitize Utilities", () => {
  it("sanitizes origin and falls back to Eyakub Mahmud production domain", () => {
    expect(sanitizeOrigin(null)).toBe("https://eyakubmahmud.vercel.app");
    expect(sanitizeOrigin("")).toBe("https://eyakubmahmud.vercel.app");
    expect(sanitizeOrigin("invalid-url")).toBe("https://eyakubmahmud.vercel.app");
    expect(sanitizeOrigin("https://eyakubmahmud.vercel.app/test")).toBe("https://eyakubmahmud.vercel.app");
  });

  it("sanitizes plain text input by stripping control characters", () => {
    expect(sanitizePlainText("Hello\u0000World")).toBe("HelloWorld");
    expect(sanitizePlainText("  Clean input  ")).toBe("Clean input");
  });
});

describe("Contact Validation & Schema", () => {
  it("validates legitimate contact submissions", () => {
    const result = parseContactSubmission({
      name: "Tariqul Islam",
      email: "client@example.com",
      message: "We need an advanced Excel monthly payroll sheet with tax deductions.",
    });

    expect(result.success).toBe(true);
    expect(result.data?.name).toBe("Tariqul Islam");
    expect(result.data?.serviceType).toBe("MS Office & Practical Accounting");
  });

  it("rejects honeypot bot submissions", () => {
    const result = parseContactSubmission({
      name: "Bot User",
      email: "bot@spam.com",
      message: "This is a spam message attempting to inject links.",
      honeypot: "automated-bot-fill",
    });

    expect(result.success).toBe(false);
  });

  it("contact-validation utility correctly applies MS Office & Practical Accounting fallback", () => {
    const res = validateContactSubmission({
      name: "Business Manager",
      email: "manager@corp.com",
      message: "Please prepare our corporate pitch deck master slides.",
    });

    expect(res.valid).toBe(true);
    expect(res.sanitized?.serviceType).toBe("MS Office & Practical Accounting");
  });
});

describe("Projects & Credentials Integrity", () => {
  it("verifies 6 projects with valid categories and no dead '#' live links", () => {
    expect(projectsData.length).toBe(6);
    const validCategories = ["Productivity", "Accounting", "Graphic Design", "AI Automation"];
    for (const project of projectsData) {
      expect(validCategories).toContain(project.category);
      if (project.links.live) {
        expect(project.links.live).not.toBe("#");
      }
    }
  });

  it("verifies credentials contain 2 active learning and 2 completed credentials", () => {
    expect(credentialsData.length).toBe(4);
    const active = credentialsData.filter((c) => c.kind === "current_learning");
    const completed = credentialsData.filter((c) => c.kind === "completed_credential");
    expect(active.length).toBe(2);
    expect(completed.length).toBe(2);
  });
});

describe("Navigation & Header Integrity", () => {
  it("has exactly 6 curated primary frontline navigation links", () => {
    expect(primaryNavLinks.length).toBe(6);
    const linkNames = primaryNavLinks.map((l) => l.name);
    expect(linkNames).toEqual([
      "Projects",
      "Services",
      "Skills",
      "About",
      "Credentials",
      "Contact",
    ]);
  });

  it("ensures all primary navigation links have valid routes without dead hash links", () => {
    for (const link of primaryNavLinks) {
      expect(link.href.startsWith("/")).toBe(true);
      expect(link.href).not.toBe("#");
    }
  });
});

