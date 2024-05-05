import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { FooterComponent } from "@/components/footer";
import { Hidden } from "@/components/hidden";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hidden>
          <Navbar />
        </Hidden>
        {children}
        <Hidden>
          <FooterComponent />
        </Hidden>
      </body>
    </html>
  );
}