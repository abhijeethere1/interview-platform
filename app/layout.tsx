import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";  // Importing Exo 2 font

import "./globals.css";

// Import the font (Exo 2) from Google Fonts
const exo2 = Exo_2({
  variable: "--font-exo2",   // Custom variable for Exo 2 font
  subsets: ["latin"],
});

// Update metadatag
export const metadata: Metadata = {
  title: "SmartHire-AI",
  icons: {
    icon: '/logo1.svg', // ← Favicon set here
  },
  description: "An AI-powered platform for preparing for mock interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Meta tag for viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1" />
      </head>
      <body className={`${exo2.className} antialiased pattern`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
