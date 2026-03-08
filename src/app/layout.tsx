import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Free Launch Party: The Hidden Reason You're Still Sick | Dr. Rob DeMartinio, DC",
  description:
    "Join Dr. Rob DeMartinio, DC for a FREE live training on March 14th. Discover the bioenergetic model helping people take back their health when conventional medicine has failed them.",
  icons: {
    icon: "/BFM%20Icon.svg",
    shortcut: "/BFM%20Icon.svg",
    apple: "/BFM%20Icon.svg",
  },
  openGraph: {
    title:
      "Free Launch Party: The Hidden Reason You're Still Sick | Dr. Rob DeMartinio, DC",
    description:
      "Discover the bioenergetic model helping people take back their health. Free live event March 14th.",
    type: "website",
    images: [
      {
        url: "/opengraph-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Beyond Functional Medicine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Free Launch Party: The Hidden Reason You're Still Sick | Dr. Rob DeMartinio, DC",
    description:
      "Discover the bioenergetic model helping people take back their health. Free live event March 14th.",
    images: ["/opengraph-cover.jpg"],
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
