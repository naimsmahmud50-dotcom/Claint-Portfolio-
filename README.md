# Eyakub Mahmud — MS Office, Practical Accounting & AI Automation Portfolio

A modern personal portfolio website for **Eyakub Mahmud** (*MS Office Application Specialist | Practical Accounting & Financial Modeler | Meta Marketing | AI Automation Specialist*).

---

##  Key Features

- **Core Specialization:** Microsoft Office Application Suite (Advanced Excel with VLOOKUP, XLOOKUP, Pivot Tables, Macro formulas, Dynamic Dashboards; Word Executive Documentation; PowerPoint High-Conversion Pitch Decks) and Practical Accounting (General Ledger, Payroll, Double-Entry, Cash Flow, Financial Statements).
- **Secondary Multidisciplinary Skills:** Meta Marketing (Facebook/Instagram Ads, Pixel setup, CBO/ABO campaigns), Graphic Design, Video Editing, AI Automation (workflows, custom prompts, smart spreadsheets), and Foundational Islamic Business Ethics.
- **Dark-First Modern Tech Aesthetic:** Built with deep sleek dark theme canvas, emerald/cyan financial highlights, and modern bento grid layouts.
- **Dynamic Content Architecture:** All profile data, skills, services, credentials, and projects live in modular, strictly typed TypeScript stores under `src/data/`.
- **Responsive & Interactive UI:** Framer Motion smooth micro-interactions, responsive mobile navbar, interactive resume viewer/modal, command palette (`Ctrl+K`), and live search.
- **Direct WhatsApp & Email Integration:**
  - Phone / WhatsApp: **+880 1877-508893** (Pre-filled instant WhatsApp chat link)
  - Official Email: **eyakubali4125@gmail.com**
- **Zero Hallucinated Metrics:** Authentic, verified skill breakdowns and real-world project portfolios.

---

##  Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript 5 (Strict Mode)
- **Styling:** Tailwind CSS + PostCSS
- **Animations:** Framer Motion + CSS Transitions
- **Icons:** Lucide React
- **Theme:** Dark Mode (default) with Light Mode toggle

---

##  Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm start
```

---

## Environment Variables (Optional)

Create a `.env.local` file in the root directory if you wish to configure server-side WhatsApp Cloud API dispatch:

```env
WHATSAPP_CLOUD_API_TOKEN=your_meta_system_user_token
WHATSAPP_PHONE_NUMBER_ID=your_whatsapp_phone_number_id
WHATSAPP_RECIPIENT_PHONE=8801877508893
```

---

##  Project Structure

```text
Eyakub_Mahmud_Portfolio_Pro/
├── public/
│   ├── images/
│   │   ├── profile/
│   │   │   ├── eyakub-mahmud.jpg           # Portrait (Panjabi & Toopi)
│   │   │   └── eyakub-mahmud-secondary.jpg # Secondary Portrait
│   │   └── projects/                       # Real accounting & design project assets
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── layout.tsx                      # Root layout, metadata, SEO OpenGraph
│   │   ├── page.tsx                        # Main portfolio landing page
│   │   ├── about/                          # About Eyakub Mahmud
│   │   ├── skills/                         # Skills & Competencies breakdown
│   │   ├── services/                       # Professional services list
│   │   ├── projects/                       # Projects and case studies
│   │   ├── credentials/                    # Certifications & Education
│   │   ├── contact/                        # Direct contact form & WhatsApp link
│   │   ├── admin/                          # Administrative panel
│   │   └── api/contact/route.ts            # Secure contact API handler
│   ├── components/                         # UI, Home, and Layout components
│   ├── data/                               # Modular data files (profile, skills, projects, etc.)
│   └── types/                              # TypeScript types
```
