import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const font = localFont({
  src: "./NotoSansTC-Medium.ttf",
});

export const metadata: Metadata = {
  title: "개인학습용",
  description: "개인학습용",
  verification: {
    google: "0P9x1zDK3FoskGyNI1lehkUYmIlsMwxMQf06chuxTuQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={`min-h-lvh bg-white ${font.className}`}>{children}</body>
    </html>
  );
}
