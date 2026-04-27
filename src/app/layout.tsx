import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PCG Admin Dashboard",
  description: "Admin tools for PCG Contractors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
