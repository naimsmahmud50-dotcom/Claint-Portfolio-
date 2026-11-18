import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider } from "@/components/providers/ToastProvider";
import { Navbar } from "@/components/layout/Navbar";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { Footer } from "@/components/layout/Footer";
import { InteractiveBackground } from "@/components/ui/InteractiveBackground";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { DiscoveryModal } from "@/components/ui/DiscoveryModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eyakubmahmud.vercel.app"),
  title: "Eyakub Mahmud | MS Office Application & Practical Accounting Specialist",
  description:
    "Professional portfolio of Eyakub Mahmud. Delivering high-precision MS Office solutions (Word, Excel, PowerPoint), practical accounting, payroll modeling, Meta marketing, video editing, and AI automation.",
  authors: [{ name: "Eyakub Mahmud" }],
  keywords: [
    "Eyakub Mahmud",
    "MS Office Specialist",
    "Microsoft Excel Advanced Formulas",
    "Practical Accounting",
    "Payroll Management",
    "TallyPrime",
    "Microsoft Word Formatting",
    "PowerPoint Pitch Decks",
    "Meta Marketing",
    "Video Editing",
    "Graphic Design",
    "AI Automation",
    "Dhaka Bangladesh",
  ],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Eyakub Mahmud | MS Office & Practical Accounting Specialist",
    description:
      "Delivering high-precision MS Office solutions (Word, Excel, PowerPoint), practical accounting, payroll modeling, and digital solutions.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/profile/eyakub-mahmud.jpg",
        width: 702,
        height: 777,
        alt: "Eyakub Mahmud Executive Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eyakub Mahmud | MS Office & Practical Accounting Specialist",
    description:
      "Delivering high-precision MS Office solutions (Word, Excel, PowerPoint), practical accounting, payroll modeling, and digital solutions.",
    images: ["/images/profile/eyakub-mahmud.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Eyakub Mahmud",
              jobTitle: "MS Office Application Specialist & Practical Accounting Professional",
              email: "eyakubali4125@gmail.com",
              telephone: "+8801877508893",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dhaka",
                addressCountry: "Bangladesh",
              },
            }),
          }}
        />
      </head>
      <body className="bg-canvas dark:bg-canvas text-slate-100 selection:bg-cyan selection:text-slate-950 font-sans antialiased min-h-screen flex flex-col relative">
                <ThemeProvider>
          <ToastProvider>
            <LanguageProvider>
              {/* Ambient Cosmic Nebula Mesh */}
              <div className="fixed inset-0 pointer-events-none z-0 cosmic-nebula-mesh" aria-hidden="true" />
              <InteractiveBackground />
              <Navbar />
              <div className="relative z-10 flex-grow">
                {children}
              </div>
              <Footer />
              <CommandPalette />
              <DiscoveryModal />
            </LanguageProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
