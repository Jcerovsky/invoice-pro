import "./globals.css";
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import ContextProvider from "@/app/context/Context";
import React from "react";

const league_spartan = League_Spartan({
  weight: ["300", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InvoicePro",
  description:
    "InvoicePro is a versatile and user-friendly invoicing web application designed to streamline your invoicing process",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${league_spartan.className} dark:bg-themeColorBg`}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
