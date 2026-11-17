import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "proj-1",
    slug: "monthly-salary-breakup-payroll",
    title: "Monthly Salary Break-up & Payroll System",
    shortDescription:
      "Enterprise Excel payroll engine calculating basic pay, house rent, medical allowances, tax deductions, provident funds, and net payable figures with zero formula errors.",
    category: "Accounting",
    featured: true,
    coverImage: "/images/projects/salary-breakup.png",
    tags: ["MS Excel", "Payroll", "VLOOKUP", "SUMIFS", "Tax Deductions", "Financial Data"],
    techStack: {
      tools: ["Microsoft Excel", "Formulas & Functions", "Data Validation", "Conditional Formatting"],
    },
    links: {
      live: "/images/projects/salary-breakup.png",
    },
    status: "Production Concept",
    caseStudy: {
      overview:
        "Designed and implemented an automated payroll spreadsheet system tailored for corporate organizations, ensuring precise compensation calculations, structured deductions, and audit-ready reporting.",
      problem:
        "Manual salary calculations often result in discrepancies in provident fund deductions, tax calculations, and overtime tracking, consuming countless hours every month.",
      goal:
        "Build an error-resilient, dynamic Excel payroll sheet with automated formula logic that calculates net salary from gross components in seconds.",
      solution:
        "Architected an automated multi-sheet model leveraging SUMIFS, IF logic, and VLOOKUP to dynamically pull employee grade standards, calculate allowances, and generate clean payslips.",
      architecture: [
        "Employee Master Directory: Centralized database of employee IDs, departments, and base grades.",
        "Component Computation Matrix: Dynamic formulas calculating Basic (50%), House Rent (25%), Medical (15%), and Conveyance (10%).",
        "Statutory Deductions Engine: Automated calculation for Provident Fund, Advances, and Tax with threshold caps.",
        "Executive Summary Dashboard: Departmental payroll breakdown with charts and variance checks.",
      ],
      keyFeatures: [
        "Automated Net Salary Calculation with nested logical formulas",
        "Interactive Department and Month filters",
        "Deduction tracking for Provident Fund, Tax, and Late Penalties",
        "Audit-friendly printable payslip layout",
      ],
      securityConsiderations: [
        "Cell locking and sheet protection preventing accidental formula overwrite",
        "Input validation rules restricting unauthorized salary grade modifications",
      ],
      challenges: [
        "Handling complex tiered tax brackets without slowing down spreadsheet calculation performance.",
      ],
      resultsStatus: "Successfully demonstrated in multiple client and business scenarios.",
      metricsPlaceholder: "Reduced monthly payroll calculation time by 85% with zero computational errors.",
    },
  },
  {
    id: "proj-2",
    slug: "employee-payroll-master-sheet",
    title: "Employee Payroll Master Sheet & HR Analytics",
    shortDescription:
      "Comprehensive multi-department employee salary table with automated overtime tracking, bonus computation, attendance reconciliation, and summary totals.",
    category: "Productivity",
    featured: true,
    coverImage: "/images/projects/employee-salary-clean.png",
    tags: ["MS Excel", "HR Analytics", "PivotTables", "Data Cleaning", "Formulas"],
    techStack: {
      tools: ["Microsoft Excel", "PivotTables", "INDEX-MATCH", "XLOOKUP"],
    },
    links: {
      live: "/images/projects/employee-salary-clean.png",
    },
    status: "Production Concept",
    caseStudy: {
      overview:
        "A streamlined, high-density employee salary roster built to handle hundreds of staff records across multiple branches with automated cross-checking.",
      problem:
        "HR managers struggled with inconsistent spreadsheet formats and fragmented attendance data that caused delays in salary disbursement.",
      goal:
        "Establish a clean, standardized, and easily maintainable employee master salary sheet with real-time totals and deduction reconciliation.",
      solution:
        "Engineered a standardized data table format with automated error flagging, conditional highlights for anomalies, and PivotTable summaries for executive leadership.",
      architecture: [
        "Clean Tabular Data Structure: Uniform column definitions with data validation constraints.",
        "Attendance Integration: Formula-linked attendance days calculating per-day deductions dynamically.",
        "Summary Totals & Analytics: Instant PivotTable view by designation, division, and branch.",
      ],
      keyFeatures: [
        "Real-time gross-to-net pay calculation",
        "Automated error highlighting for missing employee details",
        "One-click monthly departmental expenditure breakdown",
        "Clean export-ready print layout for banking disbursements",
      ],
      securityConsiderations: [
        "Formula cells locked and hidden from unauthorized editing",
        "Strict data formatting rules ensuring phone numbers and account IDs remain accurate",
      ],
      challenges: [
        "Ensuring compatibility between different versions of Microsoft Excel and spreadsheet viewers.",
      ],
      resultsStatus: "Adopted as a reusable operational template for commercial payroll workflows.",
      metricsPlaceholder: "Eliminated data entry discrepancies across 100+ simulated employee profiles.",
    },
  },
  {
    id: "proj-3",
    slug: "honey-nature-organic-branding",
    title: "Honey Nature – Premium Organic Product Visual",
    shortDescription:
      "Nature-inspired product concept and packaging mockup created with warm earthy color palettes, custom typography, and high-conversion commercial aesthetic.",
    category: "Graphic Design",
    featured: true,
    coverImage: "/images/projects/honey-nature-project.jpg",
    tags: ["Photoshop", "Graphic Design", "Branding", "Product Packaging", "Mockups"],
    techStack: {
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Color Theory", "Commercial Mockup"],
    },
    links: {
      live: "/images/projects/honey-nature-project.jpg",
    },
    status: "Completed Credential Build",
    caseStudy: {
      overview:
        "A complete visual design identity and 3D-realistic bottle mockup for 'Honey Nature', an organic natural honey brand focused on purity, nature, and premium consumer trust.",
      problem:
        "Local organic honey brands frequently suffer from generic, uninspired packaging that fails to convey premium quality on digital marketplaces and retail shelves.",
      goal:
        "Craft a high-converting, aesthetically luxurious product presentation that highlights the natural golden richness and artisanal purity of the honey.",
      solution:
        "Developed a brand identity featuring warm amber and natural forest tones, refined serif typography, and realistic studio lighting highlights using Photoshop and Illustrator.",
      architecture: [
        "Visual Identity Blueprint: Logo concept, color harmony (warm golden honey, natural leaf green, deep wood).",
        "Packaging Label Layout: Minimalist, clean product typography highlighting 100% Raw & Pure certification.",
        "Photorealistic Mockup: Shadow rendering, glass refraction, and ambient studio light reflections.",
      ],
      keyFeatures: [
        "Modern minimalist packaging label design",
        "High-resolution 3D glass container mockup with natural lighting",
        "Social media ready ad banner variations",
        "Print-ready CMYK label vector assets",
      ],
      securityConsiderations: [
        "Original asset authoring adhering to copyright and commercial licensing standards",
      ],
      challenges: [
        "Achieving the exact translucent amber glow of raw honey against a dark studio background.",
      ],
      resultsStatus: "Showcased in design portfolio as an exemplar of commercial product presentation.",
      metricsPlaceholder: "Designed for high click-through rates (CTR) on social media e-commerce channels.",
    },
  },
  {
    id: "proj-4",
    slug: "attar-royal-fragrance-branding",
    title: "Attar – Royal Fragrance Brand Identity",
    shortDescription:
      "High-end luxury oriental perfume visual identity combining rich obsidian backgrounds, radiant gold accents, and elegant packaging art direction.",
    category: "Graphic Design",
    featured: true,
    coverImage: "/images/projects/attar-product-project.jpg",
    tags: ["Photoshop", "Branding", "Luxury Packaging", "Illustrator", "Visual Art"],
    techStack: {
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Brand Architecture", "Luxury Art Direction"],
    },
    links: {
      live: "/images/projects/attar-product-project.jpg",
    },
    status: "Completed Credential Build",
    caseStudy: {
      overview:
        "Crafted a luxury branding showcase for an exclusive Attar (concentrated perfume oil) line, emphasizing royal heritage, aromatic depth, and premium artisanal craft.",
      problem:
        "Fragrance marketing relies entirely on visual aesthetics to communicate scent and prestige; low-quality visuals diminish consumer perceived value.",
      goal:
        "Design a world-class luxury visual identity that conveys opulence, timeless Arabian elegance, and premium market positioning.",
      solution:
        "Engineered a dramatic high-contrast design utilizing deep obsidian blacks, intricate geometric gold foils, and atmospheric mist to elevate the bottle's sculptural silhouette.",
      architecture: [
        "Color System: Velvet Obsidian (#09090E), Imperial Gold foil (#E5B869), and Soft Radiance.",
        "Emblem Design: Refined monogram symbolizing purity, scent dispersion, and heritage.",
        "Realistic Lighting Rig: Dual-point rim lighting emphasizing crystal facets and bottle texture.",
      ],
      keyFeatures: [
        "Premium gold-embossed logo and label typography",
        "Photorealistic 3D glass & brass cap presentation",
        "High-contrast luxury marketing creatives for Meta advertising",
        "Comprehensive brand style guide for merchandise and packaging",
      ],
      securityConsiderations: [
        "Strict trademark isolation and authentic brand asset curation",
      ],
      challenges: [
        "Balancing intricate gold filigree detailing without overwhelming the bottle's sleek modern form.",
      ],
      resultsStatus: "Featured in creative portfolio as a flagship luxury branding project.",
      metricsPlaceholder: "Positioned to maximize perceived value and consumer prestige.",
    },
  },
  {
    id: "proj-5",
    slug: "corporate-pitch-deck-presentation",
    title: "Executive Corporate Pitch Deck & Slide Master",
    shortDescription:
      "Multi-slide executive business presentation designed in Microsoft PowerPoint with custom slide masters, animated transitions, SmartArt infographics, and financial charts.",
    category: "Productivity",
    featured: false,
    coverImage: "/images/projects/salary-breakup.png",
    tags: ["MS PowerPoint", "Pitch Deck", "Slide Master", "Infographics", "Visual Storytelling"],
    techStack: {
      tools: ["Microsoft PowerPoint", "Slide Master", "SmartArt", "Infographics Design"],
    },
    links: {},
    status: "Production Concept",
    caseStudy: {
      overview:
        "Created an executive-grade PowerPoint presentation framework designed to deliver persuasive investor pitches, business quarterly reviews, and strategic roadmaps.",
      problem:
        "Bullet-point heavy, cluttered slides cause audience disengagement and obscure critical business metrics during important meetings.",
      goal:
        "Transform complex business proposals and financial numbers into visually striking, easily digestible slide architecture.",
      solution:
        "Architected a custom 16:9 Slide Master with modular layout components, consistent typographical hierarchy, vector iconography, and subtle pacing transitions.",
      architecture: [
        "Slide Master System: Pre-configured layouts for Title, Problem/Solution, Market Size, and Financial Projections.",
        "Data Visualization: Clean Excel-linked charts that automatically reflect financial updates.",
        "Presenter Notes & Handout Formatting: Professional print-ready PDF export setup.",
      ],
      keyFeatures: [
        "Dynamic custom typography and branded color scheme",
        "Visual metric cards highlighting key performance indicators (KPIs)",
        "Engaging timeline graphics and workflow diagrams",
        "Lightweight animations that enhance delivery without distracting",
      ],
      securityConsiderations: [
        "Confidential corporate data sanitization protocols implemented before presentation release",
      ],
      challenges: [
        "Ensuring dynamic Excel chart links update seamlessly across different client machines.",
      ],
      resultsStatus: "Standardized deck format utilized for business proposals and pitch meetings.",
      metricsPlaceholder: "Delivered 25+ modular slides optimized for maximum executive impact.",
    },
  },
  {
    id: "proj-6",
    slug: "meta-ads-automated-lead-pipeline",
    title: "Meta Ads & Automated Lead-to-Sheet Pipeline",
    shortDescription:
      "Automated lead capture system connecting Facebook/Instagram Instant Lead Forms directly to Google Sheets and WhatsApp instant notification via Zapier/Make.",
    category: "AI Automation",
    featured: false,
    coverImage: "/images/projects/honey-nature-project.jpg",
    tags: ["Meta Ads", "Zapier", "Make", "Google Sheets", "Lead Automation", "WhatsApp API"],
    techStack: {
      tools: ["Meta Ads Manager", "Zapier", "Make.com", "Google Sheets", "WhatsApp Integration"],
    },
    links: {},
    status: "In Active Development",
    caseStudy: {
      overview:
        "Engineered an automated marketing pipeline that captures potential customer leads from Facebook & Instagram ads and instantly routes them to CRM spreadsheets and mobile alerts within 5 seconds.",
      problem:
        "Businesses lose up to 70% of potential leads when response times exceed 10 minutes due to manual spreadsheet downloading from Ads Manager.",
      goal:
        "Achieve near-instant lead processing and sales team notification to accelerate conversion rates.",
      solution:
        "Connected Meta Lead Form webhooks through Zapier to append new rows into an organized Google Sheet while triggering an immediate WhatsApp alert to the sales representative.",
      architecture: [
        "Trigger: Meta Instant Lead Form submission with verified phone and email fields.",
        "Webhook Processor: Zapier/Make parses the payload and validates data formatting.",
        "Spreadsheet Storage: Google Sheets appends timestamp, lead source, and customer inquiry.",
        "Instant Alert: Automated WhatsApp message dispatched to the business owner.",
      ],
      keyFeatures: [
        "Sub-5-second lead delivery to spreadsheet and mobile phone",
        "Automatic duplicate removal and phone number sanitization",
        "Department-wise lead categorization based on customer answers",
        "Zero manual CSV downloading required",
      ],
      securityConsiderations: [
        "Encrypted API keys and OAuth2 authentication across Meta and webhook endpoints",
        "Strict compliance with customer data privacy standards",
      ],
      challenges: [
        "Handling network retry mechanisms when webhook endpoints experience transient downtime.",
      ],
      resultsStatus: "Tested and verified with live lead generation ad campaigns.",
      metricsPlaceholder: "Reduced lead contact latency from 4 hours to under 30 seconds.",
    },
  },
];
