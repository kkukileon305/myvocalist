import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "中文繁體詞彙",
  description: "中文繁體詞彙",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={`min-h-lvh bg-white`}>{children}</body>
    </html>
  );
}
