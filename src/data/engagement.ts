export interface EngagementModel {
  id: string;
  sprintNumber: string;
  title: string;
  tagline: string;
  duration: string;
  popular?: boolean;
  badge: string;
  idealFor: string;
  deliverables: string[];
  guarantee: string;
  ctaText: string;
}

export const engagementModelsData: EngagementModel[] = [
  {
    id: "excel-automation-sprint",
    sprintNumber: "SPRINT 01",
    title: "MS Excel & Advanced Spreadsheet Automation",
    tagline: "Formula-driven financial modeling, executive dashboards, lookup systems, and automated data processing.",
    duration: "3 - 5 Days Turnaround",
    badge: "CORE FOCUS",
    idealFor: "Businesses, HR departments, and accounts teams needing error-free spreadsheets, dynamic formulas (XLOOKUP, SUMIFS, PivotTables), and financial models.",
    deliverables: [
      "Custom automated Excel models with dynamic lookup logic (VLOOKUP, XLOOKUP, INDEX-MATCH)",
      "Executive KPI dashboards with automated PivotTables and conditional anomaly highlights",
      "Cell protection, input data validation rules, and error-catching formulas preventing accidental data corruption",
      "Clean, print-ready spreadsheet templates ready for immediate operational deployment",
    ],
    guarantee: "100% Mathematical Accuracy • Formula Cell Protection • Ready-to-Use Handover",
    ctaText: "Commission Spreadsheet Sprint",
  },
  {
    id: "accounting-payroll-sprint",
    sprintNumber: "SPRINT 02",
    title: "Practical Accounting & Payroll Management",
    tagline: "Complete double-entry accounting setup, salary break-up sheets, general ledger, and TallyPrime reconciliation.",
    duration: "1 - 2 Weeks Turnaround",
    popular: true,
    badge: "MOST POPULAR",
    idealFor: "SMEs, enterprises, and business owners requiring accurate bookkeeping, compliant payroll systems, and transparent audit trails.",
    deliverables: [
      "Comprehensive Employee Salary Break-up & Master Payroll calculation engine",
      "General Ledger, Journal Entries, Trial Balance, and Bank Reconciliation setup",
      "TallyPrime chart of accounts configuration and expense voucher reconciliation",
      "Statutory provident fund, tax deduction calculation, and printable salary slip layouts",
    ],
    guarantee: "100% Reconciled Ledgers • Zero Arithmetic Errors • Shariah/Halal Compliant Ethics",
    ctaText: "Commission Accounting Sprint",
  },
  {
    id: "documentation-media-automation",
    sprintNumber: "SPRINT 03",
    title: "Executive Documentation, Media & Lead Automation",
    tagline: "Executive PowerPoint pitch decks, professional Word layouts, Meta marketing campaigns, and form-to-sheet automation.",
    duration: "3 - 7 Days Turnaround",
    badge: "DIGITAL SOLUTIONS",
    idealFor: "Entrepreneurs and business leaders preparing investor presentations, executive documents, or looking to automate social media leads.",
    deliverables: [
      "Custom PowerPoint 16:9 Slide Master with visual infographics, KPI cards, and smooth transitions",
      "Publication-ready corporate Word document formatting, contracts, and proposals",
      "Meta Ads Manager campaign architecture and high-conversion lead generation setup",
      "Automated sub-5-second Zapier/Make pipeline transferring ad leads into Google Sheets with instant WhatsApp notification",
    ],
    guarantee: "Executive Presentation Polish • Fast Turnaround • Complete Asset Handover",
    ctaText: "Commission Media & Automation",
  },
];
