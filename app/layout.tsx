import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/(navbar)/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "./components/(footer)/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grove Good Eats",
  description: "Livin' my life <3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
          <Toaster />
        </main>
        {/* <footer>
          <Footer />
        </footer> */}
      </body>
    </html>
  );
}
