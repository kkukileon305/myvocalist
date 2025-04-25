import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "學習中文繁體 - 번체중국어학습",
  description: "대만에서 사용하는 번체중국어학습",
  openGraph: {
    title: "學習中文繁體 - 번체중국어학습",
    description: "대만에서 사용하는 번체중국어학습",
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
      <body className={`min-h-lvh bg-white`}>{children}</body>
    </html>
  );
}
