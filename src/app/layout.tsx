import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Free Live Training: The Hidden Reason You're Still Sick | Dr. Rob DeMartino",
  description:
    "Join Dr. Rob DeMartino for a FREE live training on March 14th. Discover the bioenergetic model helping people take back their health when conventional medicine has failed them.",
  icons: {
    icon: "/BFM%20Icon.svg",
    shortcut: "/BFM%20Icon.svg",
    apple: "/BFM%20Icon.svg",
  },
  openGraph: {
    title:
      "Free Live Training: The Hidden Reason You're Still Sick | Dr. Rob DeMartino",
    description:
      "Discover the bioenergetic model helping people take back their health. Free live event March 14th.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
