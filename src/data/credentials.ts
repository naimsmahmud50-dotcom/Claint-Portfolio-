import { CredentialItem } from "@/types";

export const credentialsData: CredentialItem[] = [
  {
    id: "cred-ms-office-excel",
    kind: "completed_credential",
    badge: "CERTIFIED",
    title: "MS Office Application & Advanced Excel Specialist",
    institution: "Professional Digital Skills Academy",
    statusText: "Practical Competency Verified",
    focusArea: "Advanced Excel Formulas (XLOOKUP, INDEX-MATCH), Word Formatting & Corporate PowerPoint Decks",
    verified: true,
  },
  {
    id: "cred-practical-accounting",
    kind: "completed_credential",
    badge: "COMPLETED",
    title: "Practical Accounting & Payroll Management",
    institution: "Business Financial Training Institute",
    statusText: "Completed Hands-on Practice",
    focusArea: "Double-entry Bookkeeping, General Ledger, Payroll Break-up Sheets & TallyPrime",
    verified: true,
  },
  {
    id: "cred-islamic-studies-ethics",
    kind: "current_learning",
    badge: "CURRENT",
    title: "Foundational Islamic Knowledge & Halal Business Ethics",
    institution: "Islamic Studies & Muamalat Circle",
    statusText: "Ongoing Study & Practice",
    focusArea: "Islamic Commercial Ethics, Halal Financial Transactions (Muamalat) & Professional Amanah",
    verified: true,
  },
  {
    id: "cred-digital-media-automation",
    kind: "current_learning",
    badge: "CURRENT",
    title: "Meta Marketing, Creative Design & AI Workflows",
    institution: "Digital Growth & Automation Lab",
    statusText: "Active Practice & Implementation",
    focusArea: "Meta Ads Manager, Premiere Pro Video Editing, Photoshop Branding & Zapier Automations",
    verified: true,
  },
];
