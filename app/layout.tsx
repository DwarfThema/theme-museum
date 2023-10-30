import type { Metadata } from "next";
import { Inter, Noto_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../libs/cli/gtag";

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
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  // GA 설정 끝

  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtag.GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
        });
      `,
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
