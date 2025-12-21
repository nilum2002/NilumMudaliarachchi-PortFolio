import type { Metadata } from "next";
import { BBH_Sans_Bartle, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const BBHbartle = BBH_Sans_Bartle({
  weight: "400",
  variable: "--font-bbh-bartle",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Nilum Mudaliarachchi",
  description: "Nilums Portfolio",
  icons: {
    icon: "/robot-svgrepo-com.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${BBHbartle.variable} antialiased font-nata-sans`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
