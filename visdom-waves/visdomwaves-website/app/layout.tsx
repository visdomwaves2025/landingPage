import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@/lib/analytics";
import { PageLoaderProvider } from "@/components/ui/PageLoader";

export const metadata: Metadata = {
  title: "VisdomWaves Innovations | AI-Driven Solutions & Digital Transformation",
  description:
    "Transform your business with VisdomWaves Innovations. Expert consulting in AI, digital transformation, and industry-specific solutions for Education, Healthcare, Technology, and more.",
  keywords: [
    "AI solutions",
    "digital transformation",
    "IT consulting",
    "technology consulting",
    "AI automation",
    "web development",
    "app development",
    "EdTech",
    "healthcare technology",
  ],
  authors: [{ name: "VisdomWaves Innovations" }],
  openGraph: {
    title: "VisdomWaves Innovations | AI-Driven Solutions & Digital Transformation",
    description:
      "Transform your business with cutting-edge AI and digital transformation solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "VisdomWaves Innovations",
    description: "AI-Driven Solutions & Digital Transformation",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logos/VW_WB.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <PageLoaderProvider>{children}</PageLoaderProvider>
      </body>
    </html>
  );
}