import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const font = localFont({
  src: "./NotoSansTC-Medium.ttf",
});

export const metadata: Metadata = {
  title: "함께 배우는 대만중국어 - 臺灣的正體中文",
  description: "대만식 전통 중국어를 배워보아요",
  openGraph: {
    title: "함께 배우는 대만중국어 - 臺灣的正體中文",
    description: "대만식 전통 중국어를 배워보아요",
    url: "https://myvocalist.vercel.app/",
  },
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
