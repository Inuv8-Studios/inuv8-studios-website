import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";

const exo = Exo({
  subsets: ["latin"],
  variable: "--font-exo",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Inuv8 Studios",
  description: "Inuv8 Studios Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${exo.variable} font-sans`}>{children}</body>
    </html>
  );
}
