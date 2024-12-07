import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://averiashogar.es"),
  title: "AVERÍAS HOGAR, reparación averías fontanería",
  description:
    "Fontanero en Madrid especializado en averías, reparaciones y mantenimiento del hogar. Servicios de fontanería, calefacción y pintura interior. Llame al 689 680 473.",
  alternates: {
    canonical: "https://averiashogar.es",
  },
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
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
  openGraph: {
    title: "AVERIAS HOGAR - Fontanero en Madrid",
    description:
      "Expertos en averías y reparaciones del hogar. Fontanería, calefacción y pintura interior en la Comunidad de Madrid. Llame al 689 680 473.",
    url: "https://averiashogar.es",
    siteName: "AVERIAS HOGAR",
    images: [
      {
        url: "https://averiashogar.es/Logo-mini.png",
        width: 1200,
        height: 630,
        alt: "AVERIAS HOGAR - Fontanero Madrid - Servicios de reparación y averías",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AVERIAS HOGAR - Fontanero en Madrid",
    description:
      "Expertos en averías y reparaciones del hogar. Fontanería, calefacción y pintura interior en la Comunidad de Madrid. Llame al 689 680 473.",
    images: ["https://averiashogar.es/Logo-mini.png"],
  },
  verification: {
    google: "YOUR-GOOGLE-VERIFICATION-ID", // Add your Google Search Console verification ID here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
