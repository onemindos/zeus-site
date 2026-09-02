import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: { default: "Zeus DeLaCruz", template: "%s | Zeus DeLaCruz" },
  description:
    "Builder, operator, architect. Founder of OneMind OS. I build sovereign operations infrastructure and teach the Sovereign Stack.",
  metadataBase: new URL("https://zeusdelacruz.com"),
  openGraph: {
    siteName: "Zeus DeLaCruz",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
