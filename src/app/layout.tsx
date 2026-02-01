import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "ailqkai — Професионална настройка на AI асистенти | България",
  description:
    "Настройваме персонални AI асистенти за хора и бизнеси в България. Еднократна инсталация, сигурна конфигурация, постоянна поддръжка чрез Discord.",
  keywords: [
    "AI асистент",
    "изкуствен интелект",
    "настройка",
    "България",
    "автоматизация",
    "персонален асистент",
    "ailqkai",
  ],
  openGraph: {
    title: "ailqkai — Вашият AI асистент, настроен от професионалисти",
    description:
      "Спестете време и бъдете по-продуктивни с персонален AI асистент, инсталиран и настроен специално за вас.",
    url: "https://ailqkai.com",
    siteName: "ailqkai",
    locale: "bg_BG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N31987VJMV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N31987VJMV');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
