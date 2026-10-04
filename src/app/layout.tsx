import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Caveat, Alex_Brush } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LenisProvider } from "@/components/LenisProvider";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const alexBrush = Alex_Brush({
  variable: "--font-cursive",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Alex Morgan | Senior Product & UI/UX Designer",
    template: "%s | Alex Morgan",
  },
  description:
    "Portfolio of Alex Morgan — Senior Product & UI/UX Designer specializing in Design Systems, Mobile Apps, SaaS Platforms, and Brand Experiences.",
  keywords: [
    "Alex Morgan",
    "Product Designer",
    "UI/UX Designer",
    "Design Systems",
    "Figma",
    "User Experience",
    "Mobile App Design",
    "Web Design",
    "Design Tokens",
    "Interaction Design",
  ],
  authors: [{ name: "Alex Morgan", url: "https://example.com" }],
  creator: "Alex Morgan",
  publisher: "Alex Morgan",
  alternates: {
    canonical: "https://example.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    title: "Alex Morgan | Senior Product & UI/UX Designer",
    description:
      "Explore case studies, design systems, and digital product experiences crafted by Alex Morgan — Senior Product & UI/UX Designer.",
    siteName: "Alex Morgan Design Portfolio",
    images: [
      {
        url: "/mark.png",
        width: 800,
        height: 800,
        alt: "Alex Morgan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan | Senior Product & UI/UX Designer",
    description:
      "Explore case studies, design systems, and digital product experiences crafted by Alex Morgan — Senior Product & UI/UX Designer.",
    images: ["/mark.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/mark.png",
    shortcut: "/mark.png",
    apple: "/mark.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://example.com/#webpage",
      url: "https://example.com",
      name: "Alex Morgan | Senior Product & UI/UX Designer",
      description:
        "Official portfolio and case studies of Alex Morgan — Senior Product & UI/UX Designer.",
      mainEntity: {
        "@id": "https://example.com/#person",
      },
    },
    {
      "@type": "Person",
      "@id": "https://example.com/#person",
      name: "Alex Morgan",
      url: "https://example.com",
      image: "https://example.com/mark.png",
      jobTitle: "Senior Product Designer",
      worksFor: {
        "@type": "Organization",
        name: "Independent / Consultant",
      },
      sameAs: [
        "https://dribbble.com",
        "https://linkedin.com",
        "https://twitter.com",
      ],
      knowsAbout: [
        "Product Design",
        "UI/UX Design",
        "Design Systems",
        "Figma",
        "Framer",
        "Design Tokens",
        "User Research",
        "Interaction Design",
        "Prototyping",
        "Information Architecture",
        "Mobile UI Design",
        "Visual Design",
        "WCAG Accessibility",
      ],
    },
    {
      "@type": "CreativeWork",
      name: "Pocket — Minimalist Mobile Expense Experience",
      description:
        "Tactile, neobrutalist mobile expense tracking experience designed for frictionless daily logging in under 3 seconds.",
      url: "https://example.com",
      author: {
        "@id": "https://example.com/#person",
      },
    },
    {
      "@type": "CreativeWork",
      name: "Aura — Modern E-Commerce Experience & Brand Identity",
      description:
        "Minimalist direct-to-consumer storefront with modular 140+ component design system and frictionless checkout flow.",
      url: "https://example.com",
      author: {
        "@id": "https://example.com/#person",
      },
    },
    {
      "@type": "CreativeWork",
      name: "Pulse — Real-Time Operations & Monitoring Dashboard",
      description:
        "Enterprise operations and telemetry dashboard designed for high data density with zero cognitive fatigue.",
      url: "https://example.com",
      author: {
        "@id": "https://example.com/#person",
      },
    },
    {
      "@type": "CreativeWork",
      name: "Clarity — Modern Educational Portal & Student Hub",
      description:
        "Calm, distraction-free educational portal simplifying student milestones, attendance, and course progress.",
      url: "https://example.com",
      author: {
        "@id": "https://example.com/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jakarta.variable} ${playfair.variable} ${caveat.variable} ${alexBrush.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-[#FAFAF8] text-[#121316] font-sans antialiased selection:bg-[#121316] selection:text-[#FAFAF8]">
        <div className="noise-overlay" aria-hidden="true" />
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
          <LenisProvider>
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
