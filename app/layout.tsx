import type { Metadata } from "next";
import { Playfair_Display, Inter, Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";
import { SEO_DEFAULTS, BRANCHES } from "@/constants";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO_DEFAULTS.siteUrl),
  title: {
    default: SEO_DEFAULTS.defaultTitle,
    template: SEO_DEFAULTS.titleTemplate,
  },
  description: SEO_DEFAULTS.defaultDescription,
  keywords: [
    "infus whitening",
    "klinik kecantikan",
    "whitening jakarta",
    "slimming treatment",
    "fat freezing",
    "melval labskin",
  ],
  authors: [{ name: "Melval Labskin" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SEO_DEFAULTS.siteUrl,
    siteName: SEO_DEFAULTS.siteName,
    title: SEO_DEFAULTS.defaultTitle,
    description: SEO_DEFAULTS.defaultDescription,
    images: [
      {
        url: SEO_DEFAULTS.ogImage,
        width: 1200,
        height: 630,
        alt: SEO_DEFAULTS.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_DEFAULTS.defaultTitle,
    description: SEO_DEFAULTS.defaultDescription,
    images: [SEO_DEFAULTS.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

/**
 * Root layout. Renders Navbar/Footer/WhatsApp button once at the app shell
 * level (per request, present on every page) and injects Schema.org
 * MedicalClinic structured data for rich search results.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: SEO_DEFAULTS.siteName,
    url: SEO_DEFAULTS.siteUrl,
    description: SEO_DEFAULTS.defaultDescription,
    image: `${SEO_DEFAULTS.siteUrl}${SEO_DEFAULTS.ogImage}`,
    medicalSpecialty: "Dermatology",
    priceRange: "Rp500.000 - Rp4.500.000",
    department: BRANCHES.map((branch) => ({
      "@type": "MedicalClinic",
      name: branch.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: branch.address,
        addressLocality: branch.city,
        addressCountry: "ID",
      },
      telephone: branch.phone,
    })),
  };

  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
