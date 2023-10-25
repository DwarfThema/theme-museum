import type { Metadata } from "next";
import { Inter, Noto_Sans, Nanum_Gothic } from "next/font/google";
import "./globals.css";

const namuGothic = Nanum_Gothic({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.theme-museum.com"),
  title: "THEME-MUSEUM",
  description: "THEME-MUSEUM by VIVLEPARK",
  openGraph: {
    title: "THEME-MUSEUM",
    description: "THEME-MUSEUM by VIVLEPARK",
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
    title: "THEME-MUSEUM",
    description: "THEME-MUSEUM by VIVLEPARK",
    creator: "JunhoPark(DwarfThema)",
    images: ["/thumbnail.jpeg"],
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
      <body className={namuGothic.className}>{children}</body>
    </html>
  );
}
