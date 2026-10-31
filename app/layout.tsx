import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PageLoader } from "@/components/page-loader";
import { SITE, SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE.title,
    template: "%s | Ahmed Mostafa",
  },
  description: SITE.description,
  keywords: [
    "Ahmed Mostafa",
    "Ahmed Mostafa Essawy",
    "Laravel Developer",
    "Laravel Developer Egypt",
    "Full-Stack Developer",
    "Full-Stack PHP Developer",
    "PHP Developer Cairo",
    "ERP Developer",
    "Next.js",
    "React",
    "Web Developer Egypt",
  ],
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE_URL,
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
    images: [{ url: "/profile.png", alt: "Ahmed Mostafa - Laravel & Full-Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/profile.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE_URL,
  image: `${SITE_URL}/profile.png`,
  jobTitle: "Full-Stack PHP Developer",
  description: SITE.description,
  address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
  knowsAbout: ["Laravel", "PHP", "Full-Stack Development", "ERP Systems", "React", "Next.js"],
  sameAs: [SITE.github, SITE.linkedin],
};

export const viewport: Viewport = {
  themeColor: "#0a0f1a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased noise-bg`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
