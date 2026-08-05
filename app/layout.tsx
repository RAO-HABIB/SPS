import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LoadingScreen } from "@/components/loadingscreen";
import "swiper/css";
import "swiper/css/pagination";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SPS Digital Solutions",
  description: "Comprehensive Digital Transformation Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen flex flex-col bg-white overflow-x-hidden w-full m-0 p-0">
        <LoadingScreen />
        <main className="flex-1 w-full overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}