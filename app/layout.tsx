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

export const metadata: Metadata = {
  title: {
    template: "%s | Sidonie's Website",
    default: "Sidonie's Website",
  },
  description: "Sidonie Bouthors' personal website",
  authors: [{ name: "Sidonie Bouthors" }],
  icons: {
    icon: favicon.src,
    shortcut: favicon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainLayout>{children}</MainLayout>;
}
