import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./theme.css";
import "./hero.css";
import "./hero-v2.css";
import "./hero-minimal.css";
import "./capabilities.css";
import "./vbike-case.css";
import "./bmt-case.css";
import "./dms-case.css";
import "./nisharc-case.css";
import "./about-v2.css";
import "./profile-section.css";
import "./mobile.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nishantsharma.dev"),
  title: { default: "Nishant Sharma — Full Stack Developer | Apps, Websites & Digital Products", template: "%s — Nishant Sharma" },
  description: "Full Stack Developer building apps, websites, games, dashboards and complete digital products across frontend, backend and mobile.",
  keywords: ["Nishant Sharma", "Full Stack Developer", "Flutter Developer", "React Developer", "India"],
  alternates: { canonical: "/" },
  openGraph: { title: "Nishant Sharma — Full Stack Developer", description: "Apps, websites, games, dashboards and complete digital products.", type: "website", locale: "en_IN", url: "/", siteName: "Nishant Sharma" },
  twitter: { card: "summary_large_image", title: "Nishant Sharma — Full Stack Developer", description: "I build apps, websites, games, dashboards and complete digital products." },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff", colorScheme: "light" };

const schema = {
  "@context": "https://schema.org", "@graph": [
    { "@type": "Person", "@id": "#person", name: "Nishant Sharma", jobTitle: "Full Stack Developer", email: "mailto:nishants.robocircuits@gmail.com", url: "https://nishantsharma.dev", sameAs: ["https://github.com/NISHANT1205", "https://www.linkedin.com/in/nishant-sharma-840079369/"] },
    { "@type": "WebSite", "@id": "#website", name: "Nishant Sharma — Portfolio", url: "https://nishantsharma.dev", author: { "@id": "#person" } }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const fontVariables = { "--font-sans": '"Avenir Next", Avenir, "Segoe UI", Helvetica, Arial', "--font-mono": '"SFMono-Regular", Consolas, "Liberation Mono"' } as React.CSSProperties;
  return <html lang="en"><head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></head><body style={fontVariables}>{children}</body></html>;
}
