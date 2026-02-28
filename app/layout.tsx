import type { Metadata, Viewport } from "next";
import "@styles/style.scss";
import "@modules/react-grid-layout/css/styles.css";
import "@modules/react-resizable/css/styles.css";

import favicon from "@public/favicon.ico";
import MainLayout from "@components/MainLayout";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

const siteUrl = "https://sidonie.me";
const siteName = "Sidonie's Website";
const siteDescription = "Sidonie Bouthors' personal website - Recipes, tutorials, projects & more";
const defaultImage = `${siteUrl}/share-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Sidonie's Website",
    default: siteName,
  },
  description: siteDescription,
  authors: [{ name: "Sidonie Bouthors" }],
  icons: {
    icon: favicon.src,
    shortcut: favicon.src,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: defaultImage,
        width: 1200,
        height: 630,
        alt: "Sidonie's Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [defaultImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainLayout>{children}</MainLayout>;
}
