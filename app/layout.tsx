import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Setup Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gotchu Website",
  description: " Deliver memorable customer experiences. Create, publish, and measure every interaction from one effortless dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
