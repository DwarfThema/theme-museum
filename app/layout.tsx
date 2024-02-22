import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "../components/src/googleAnalytics";
import NavBar from "../components/src/navBar";
import LoadingPage from "@/components/pages/loadingPage";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.theme-museum.com"),
  title: "띰뮤지엄 THEME MUSEUM",
  description: "띰뮤지엄 THEME MUSEUM by VIVLEPARK",
  keywords:
    "띰뮤지엄, 띰 뮤지엄, ThemeMuseum, Theme Museum, Theme-Museum, thememuseum, theme museum, Theme museum, webGL,webGPU, 웹지엘, 웹지피유, XR",
  openGraph: {
    title: "띰뮤지엄 THEME-MUSEUM",
    description: "띰뮤지엄 THEME MUSEUM by VIVLEPARK",
    url: "https://www.theme-museum.com",
    images: [
      {
        url: "/thumbnail.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "/thumbnail.jpg",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "띰뮤지엄 THEME MUSEUM",
    description: "띰뮤지엄 THEME MUSEUM by VIVLEPARK",
    creator: "JunhoPark(DwarfThema)",
    images: ["/thumbnail.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <GoogleAnalytics />
        <Analytics />
        <NavBar />
        <LoadingPage />
        {children}
      </body>
    </html>
  );
}
