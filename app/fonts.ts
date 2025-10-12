import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Variable.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-VariableItalic.woff2",
      weight: "300 900",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-satoshi",
});

export const ibmPlexMono = localFont({
  src: "../public/fonts/IBMPlexMono-Regular.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-mono",
});
