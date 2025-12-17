import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT MAJA MANDIRI ABADI - Wood Manufacturing Industry",
  description: "Perusahaan terpercaya dalam industri pengolahan kayu yang menghasilkan produk berkualitas tinggi dengan standar internasional. Berlokasi di Bekasi, Jawa Barat.",
  keywords: ["PT MAJA MANDIRI ABADI", "wood manufacturing", "industri kayu", "pengolahan kayu", "kayu olahan", "furniture", "konstruksi", "Bekasi"],
  authors: [{ name: "PT MAJA MANDIRI ABADI" }],
  icons: {
    icon: "/logo.png",
  },
  other: {
    "facebook-domain-verification": "lioi71ae0i5p0y7p71rxtz77l8ekwp",
  },
  openGraph: {
    title: "PT MAJA MANDIRI ABADI - Wood Manufacturing Industry",
    description: "Perusahaan terpercaya dalam industri pengolahan kayu yang menghasilkan produk berkualitas tinggi dengan standar internasional.",
    url: "https://majamandiriabadi.co.id",
    siteName: "PT MAJA MANDIRI ABADI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT MAJA MANDIRI ABADI - Wood Manufacturing Industry",
    description: "Perusahaan terpercaya dalam industri pengolahan kayu yang menghasilkan produk berkualitas tinggi dengan standar internasional.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
