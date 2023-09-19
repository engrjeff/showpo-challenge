import "./globals.css";
import type { Metadata } from "next";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { fonts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Showpo Test Project | Jeff Segovia",
  description: "A sample project for Showpo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={fonts.sans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
