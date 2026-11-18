import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "proj-1",
    slug: "advanced-financial-modeling-excel-dashboard",
    title: "Advanced Financial Modeling & Executive Excel Dashboard",
    shortDescription:
      "High-precision Microsoft Excel financial model with dynamic XLOOKUP logic, EBITDA performance indicators, automated cash flow forecasting, and interactive data visualization.",
    category: "Productivity",
    featured: true,
    coverImage: "/images/projects/excel-financial-dashboard.jpg",
    tags: ["MS Excel", "Financial Modeling", "XLOOKUP", "KPI Dashboard", "Cash Flow", "Advanced Formulas"],
    techStack: {
      tools: ["Microsoft Excel", "XLOOKUP / INDEX-MATCH", "Dynamic PivotTables", "Conditional Formatting", "Waterfall Charts"],
    },
    links: {
      live: "/images/projects/excel-financial-dashboard.jpg",
    },
    status: "Production Verified",
    caseStudy: {
      overview:
        "Architected an executive-level Microsoft Excel financial model and real-time analytics dashboard designed for corporate decision-makers, providing automated revenue drivers, OPEX tracking, and quarterly financial projections.",
      problem:
        "Static and fragmented financial spreadsheets caused delayed quarterly reporting, computational inconsistencies, and lacked executive visual summaries for board meetings.",
      goal:
        "Build an error-resilient, dynamic Excel financial modeling dashboard with automated formulas that instantly translates raw transaction tables into boardroom-ready visual KPIs.",
      solution:
        "Engineered an automated multi-tab workbook utilizing dynamic XLOOKUP formulas, automated variance calculations, dual-axis waterfall visualizations, and KPI summary gauges that update dynamically upon data entry.",
      architecture: [
        "Financial Master Model: Centralized ledger database linking quarterly revenues, COGS, and operating expenditures.",
        "Dynamic Formula Matrix: Advanced nested formulas =XLOOKUP, SUMIFS, and INDEX/MATCH ensuring zero manual calculation errors.",
        "Executive KPI Cockpit: Top metric cards displaying Total Revenue ($48.2M), EBITDA Margin (28.4%), and Free Cash Flow.",
        "Interactive Charting Suite: Dual-axis waterfall charts, quarterly projection trendlines, and in-cell data bars.",
      ],
      keyFeatures: [
        "Automated Gross & Net Profit calculation with automated EBITDA margin tracking",
        "Interactive quarterly forecast vs actuals comparison graphs",
        "Waterfall breakdown of revenue drivers and department OPEX",
        "Print-ready executive summary sheet formatted for board meetings",
      ],
      securityConsiderations: [
        "Protected sheet structure with locked formula cells preventing accidental overwrite",
        "Strict data validation rules enforcing standardized currency and percentage inputs",
      ],
      challenges: [
        "Maintaining instantaneous workbook calculation speed across multi-year historical datasets without lagging.",
      ],
      resultsStatus: "Successfully demonstrated and deployed as an executive corporate reporting standard.",
      metricsPlaceholder: "Saved 20+ hours per month in financial analysis with 100% computational accuracy.",
    },
  },
  {
    id: "proj-2",
    slug: "corporate-payroll-master-accounting-system",
    title: "Corporate Payroll Master & General Ledger Accounting System",
    shortDescription:
      "Enterprise-grade practical accounting & multi-tier payroll engine with automated tax deductions, salary break-up reports, trial balance reconciliation, and audit-ready reporting.",
    category: "Accounting",
    featured: true,
    coverImage: "/images/projects/practical-accounting-payroll.jpg",
    tags: ["Practical Accounting", "Payroll Management", "General Ledger", "TallyPrime", "Tax Computation", "Double-Entry"],
    techStack: {
      tools: ["Practical Accounting", "Payroll Processing", "General Ledger Reconciliation", "TallyPrime", "Audited Financials"],
    },
    links: {
      live: "/images/projects/practical-accounting-payroll.jpg",
    },
    status: "Production Verified",
    caseStudy: {
      overview:
        "A complete practical accounting and payroll management system engineered to automate employee compensation, provident fund contributions, tax withholdings, and journal ledger reconciliation.",
      problem:
        "Manual payroll processing and unaligned ledger entries led to recurring discrepancies during bank disbursements and month-end accounting reconciliations.",
      goal:
        "Establish an error-free, standardized payroll and practical accounting reconciliation workflow with automated salary break-ups and trial balance balance checks.",
      solution:
        "Created an integrated double-entry accounting structure and payroll engine that computes basic pay, allowances, statutory deductions, and generates audit-ready pay summaries.",
      architecture: [
        "Staff Compensation Database: Grade-based salary structures, allowances (house rent, medical, conveyance).",
        "Deductions & Compliance Engine: Automated calculations for statutory tax withholding, provident funds, and loan advances.",
        "General Ledger Integration: Double-entry journal voucher mappings directly aligning payroll with financial accounts.",
        "Reconciliation Cockpit: Trial balance checking mechanism verifying debit-credit equilibrium prior to bank file generation.",
      ],
      keyFeatures: [
        "Automated multi-component salary break-up with net payable calculation",
        "Audit-ready Trial Balance and General Ledger cross-reconciliation",
        "Department-wise compensation analytics and monthly payroll variance",
        "Printable payslip generation and bank disbursement schedule formatting",
      ],
      securityConsiderations: [
        "Access control and formula cell hiding to protect confidential employee remuneration data",
        "Strict input validation preventing duplicate employee ID entries",
      ],
      challenges: [
        "Handling complex progressive tax brackets and attendance-linked pro-rated deductions.",
      ],
      resultsStatus: "Validated with real-world accounting datasets and adopted as a reliable operational framework.",
      metricsPlaceholder: "Zero computational discrepancies across hundreds of employee payroll records.",
    },
  },
  {
    id: "proj-3",
    slug: "corporate-pitch-deck-presentation",
    title: "Executive Boardroom Pitch Deck & Slide Master Architecture",
    shortDescription:
      "Investor-grade Microsoft PowerPoint presentation system featuring custom slide masters, TAM/SAM/SOM market opportunity infographics, and 5-year revenue trajectory storytelling.",
    category: "Productivity",
    featured: true,
    coverImage: "/images/projects/corporate-pitch-deck.jpg",
    tags: ["MS PowerPoint", "Pitch Deck", "Slide Master", "Infographics", "Executive Storytelling", "TAM/SAM/SOM"],
    techStack: {
      tools: ["Microsoft PowerPoint", "Slide Master Themes", "Custom Infographics", "Business Data Storytelling"],
    },
    links: {
      live: "/images/projects/corporate-pitch-deck.jpg",
    },
    status: "Production Verified",
    caseStudy: {
      overview:
        "Designed an executive-grade PowerPoint presentation framework crafted to deliver persuasive investor pitches, market expansion strategies, and boardroom strategic roadmaps.",
      problem:
        "Text-heavy, cluttered presentation slides distract decision-makers and obscure key investment metrics during high-stakes business pitches.",
      goal:
        "Transform complex commercial business proposals and market sizing numbers into an engaging, visually compelling slide narrative.",
      solution:
        "Engineered a custom 16:9 Slide Master architecture featuring concentric market sizing diagrams (TAM/SAM/SOM), 5-year revenue trajectory bar charts, and cohesive executive typography.",
      architecture: [
        "Bespoke Slide Master Hierarchy: Consistent master templates for Cover, Problem, Market Size, Traction, and Financials.",
        "Data Infographics Suite: Concentric TAM/SAM/SOM market size breakdown with highlighted addressable opportunity.",
        "Financial Trajectory Visualizer: 5-year revenue projection bar graphs with CAGR and YoY metric highlights.",
        "Executive Color & Type Token: High-contrast boardroom aesthetic built for both digital displays and printed executive handouts.",
      ],
      keyFeatures: [
        "Custom PowerPoint Slide Master with modular reusable layouts",
        "Dynamic market opportunity visualizer (TAM $1.4B, SAM $720M, SOM $150M)",
        "5-year projected growth bar charts with upward trajectory indicators",
        "High-contrast executive typography optimized for clear boardroom projection",
      ],
      securityConsiderations: [
        "Confidential financial data anonymization protocols applied prior to external presentation sharing",
      ],
      challenges: [
        "Creating a balanced slide density that presents deep financial data without overwhelming visual readability.",
      ],
      resultsStatus: "Praised by corporate leadership as an exemplary business pitch presentation deck.",
      metricsPlaceholder: "Optimized for maximum executive persuasion with zero visual clutter.",
    },
  },
  {
    id: "proj-4",
    slug: "meta-ads-automated-lead-pipeline",
    title: "Meta Ads & Automated Lead-to-Sheet Pipeline",
    shortDescription:
      "Performance marketing campaign setup and automated lead capture connecting Facebook/Instagram Lead Ads directly to Google Sheets and instant WhatsApp notifications.",
    category: "AI Automation",
    featured: false,
    coverImage: "/images/projects/meta-ads-automation.jpg",
    tags: ["Meta Ads", "Zapier", "Google Sheets", "Lead Automation", "WhatsApp API", "ROAS Analytics"],
    techStack: {
      tools: ["Meta Ads Manager", "Zapier", "Google Sheets API", "WhatsApp Business Integration"],
    },
    links: {
      live: "/images/projects/meta-ads-automation.jpg",
    },
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
  {
    id: "proj-5",
    slug: "honey-nature-organic-branding",
    title: "Honey Nature – Premium Organic Product Visual",
    shortDescription:
      "Nature-inspired product concept and packaging mockup created with warm earthy color palettes, custom typography, and high-conversion commercial aesthetic.",
    category: "Graphic Design",
    featured: false,
    coverImage: "/images/projects/honey-nature-premium-organic.jpg",
    tags: ["Photoshop", "Graphic Design", "Branding", "Product Packaging", "Mockups"],
    techStack: {
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Color Theory", "Commercial Mockup"],
    },
    links: {
      live: "/images/projects/honey-nature-premium-organic.jpg",
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
    id: "proj-6",
    slug: "attar-royal-fragrance-branding",
    title: "Attar – Royal Fragrance Brand Identity",
    shortDescription:
      "High-end luxury oriental perfume visual identity combining rich obsidian backgrounds, radiant gold accents, and elegant packaging art direction.",
    category: "Graphic Design",
    featured: false,
    coverImage: "/images/projects/attar-royal-fragrance-luxury.jpg",
    tags: ["Photoshop", "Branding", "Luxury Packaging", "Illustrator", "Visual Art"],
    techStack: {
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Brand Architecture", "Luxury Art Direction"],
    },
    links: {
      live: "/images/projects/attar-royal-fragrance-luxury.jpg",
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
];
