import type { Metadata } from "next";
import { Righteous } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav-footer/Navbar";
import { ParticalBg } from "@/components/BasicOparetion/ParticalBg";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Snippet2Sketch",
  description: "Algorithm Visualization application created by Babith K P",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ParticalBg />
      <body className={inter.className + " relative"}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
