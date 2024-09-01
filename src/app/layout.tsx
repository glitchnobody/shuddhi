import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalNav from "./GlobalNav";

export const metadata: Metadata = {
  title: "Shuddhi Kala - Pure Art, Pure Living",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-stone-100">
        <GlobalNav />
        <main className=" mt-24">{children}</main>
      </body>
    </html>
  );
}
