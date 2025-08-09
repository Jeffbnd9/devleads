// app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Poppins } from "next/font/google";
import type { Metadata, Viewport } from "next";
import Analytics from "@/components/Analytics";
import CookieConsent from "@/components/CookieConsent";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.devleads.org"),
  title: {
    default: "DevLeads — Création & Développement Web",
    template: "%s | DevLeads",
  },
  description:
    "DevLeads conçoit des sites vitrines, e-commerce et solutions web sur-mesure. Performance, design et accompagnement en France.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "DevLeads",
    url: "https://www.devleads.org",
    title: "DevLeads — Création & Développement Web",
    description:
      "Sites vitrines, e-commerce et projets web sur-mesure. Next.js, Tailwind, performance & SEO.",
    images: [{ url: "/images/logo_devleads.png", width: 1200, height: 630 }],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevLeads — Création & Développement Web",
    description:
      "Agence web spécialisée en sites vitrines, e-commerce et solutions personnalisées.",
    images: ["/images/logo_devleads.png"],
  },
  // ajoute ta balise Search Console ici quand tu l'auras
  // verification: { google: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
};

export const viewport: Viewport = {
  themeColor: "#0b0d12",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${poppins.className} w-full`}>
      <Analytics />        {/* rendu client-only */}
      <CookieConsent />  
        <Navbar />
        <main className="max-w-[1600px] mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}