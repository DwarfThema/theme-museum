import type { Metadata } from "next";
import { Inter, Noto_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "./src/googleAnalytics";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.theme-museum.com"),
  title: "띰 뮤지엄 THEME MUSEUM",
  description: "띰 뮤지엄 THEME MUSEUM by VIVLEPARK",
  openGraph: {
    title: "띰 뮤지엄 THEME-MUSEUM",
    description: "띰 뮤지엄 THEME MUSEUM by VIVLEPARK",
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
    title: "띰 뮤지엄 THEME MUSEUM",
    description: "띰 뮤지엄 THEME MUSEUM by VIVLEPARK",
    creator: "JunhoPark(DwarfThema)",
    images: ["/thumbnail.jpg"],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
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
        {children}
      </body>
    </html>
  );
}
