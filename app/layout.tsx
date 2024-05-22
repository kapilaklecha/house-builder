import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/navbar/Header";
import Footer from "@/components/Footer";
import BottomComp from "@/components/BottomComp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Letus",
  description: "We build houses | house builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <BottomComp/>
        <Footer/>
      </body>
    </html>
  );
}
