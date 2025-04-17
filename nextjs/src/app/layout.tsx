import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { Toaster } from "sonner";

import ReduxProvideProps from "./ReduxProvier";

import Footer from "@/components/Footer/Footer";
import StorePathName from "./StorePathName";
import { Analytics } from "@vercel/analytics/next";
import ScrollToTop from "./ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forex Trading in Nepal | Master the Forex Market",
  description:
    "Learn forex trading in Nepal with expert strategies and tips. Get insights into the best forex strategy, currency pairs, and market trends in Nepal.",
  keywords:
    "Forex trading Nepal, forex  in Nepal,  trading in Nepal, , forex strategies Nepal, best forex course Nepal, forex education Nepal, learn forex in nepal, nepali forex trader",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ReduxProvideProps>
          {" "}
          <Toaster />
          <ScrollToTop/>
          <header>
            {" "}
            <Header />
          </header>
          <StorePathName>
            <div className="flex-1 mt-20"> {children}</div>
            <Analytics />
          </StorePathName>
          <Toaster />
          <footer>
            <Footer />
          </footer>
        </ReduxProvideProps>
      </body>
    </html>
  );
}
