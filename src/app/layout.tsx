import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "iSkill - Профессиональный ремонт iPhone в Москве",
  description: "Профессиональный ремонт iPhone в Москве. Замена экрана, батареи и других компонентов. Гарантия на все работы до 1 года.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
